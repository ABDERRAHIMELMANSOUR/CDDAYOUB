/**
 * Form submission — one path for every form on the site.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Submissions POST to FormSubmit, which forwards them by email to
 * contact@cddpaysbas.nl. No account, no API key, no environment variable, no
 * DNS record: the destination address is the endpoint.
 *
 * ONE-TIME ACTIVATION IS STILL REQUIRED. The first submission to a new address
 * causes FormSubmit to email that address a confirmation link. Until somebody
 * opens the inbox and clicks it, submissions are accepted and NOT delivered.
 * That is a click, not a signup — but it has to happen once, and until it does
 * the forms will look like they are working while nothing arrives.
 *
 * VITE_CRM_WEBHOOK_URL overrides the destination, for the day CDD adopts a CRM
 * or its own endpoint: set it and submissions go there instead, unchanged.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ── WHAT THIS TRADES AWAY ───────────────────────────────────────────────────
 * A previous version posted to the site's own serverless function. That was
 * replaced on the board's instruction to avoid any account or configuration.
 * The costs are worth stating plainly, because none of them is visible until
 * it bites:
 *
 *   1. The address is in the bundle. Anyone can read contact@cddpaysbas.nl out
 *      of the JavaScript, and so can an address harvester. It is already
 *      published in the footer, so this leaks nothing new — but it does put it
 *      somewhere machines read in bulk. FormSubmit issues a hashed alias
 *      endpoint after activation; swapping it in below removes the address
 *      from the bundle entirely and is worth doing.
 *
 *   2. This is a third-party cross-origin POST, which is exactly the shape
 *      content blockers reject. A visitor running uBlock Origin or a
 *      privacy-focused browser may have the request cancelled. They will see
 *      the honest failure message rather than a false success, but the
 *      enquiry is lost. A same-origin endpoint had no such problem.
 *
 *   3. Delivery depends on a free third-party service with no contract behind
 *      it. If FormSubmit is down, submissions fail.
 *
 * The honeypot below stops naive bots. A public endpoint can be posted to by
 * anyone, so expect some spam in the inbox.
 */

/** Where submissions go when nothing else is configured. */
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/contact@cddpaysbas.nl';

/** Which form a submission came from — the CRM routes on this. */
export type CrmFormType = 'contact' | 'membership-application' | 'event-registration';

export interface CrmSubmission {
  form: CrmFormType;
  /** Locale the visitor was using, so the reply goes out in their language. */
  locale: string;
  /** Page the submission came from. */
  sourcePath: string;
  /** Flat payload — CRMs map fields far more easily than nested objects. */
  fields: Record<string, string | number | boolean | undefined>;
}

export type CrmResult =
  | { status: 'ok' }
  | { status: 'not-configured' }
  | { status: 'error'; message: string };

/** Where submissions go. A configured CRM wins; otherwise FormSubmit. */
function endpointUrl(): string {
  return import.meta.env.VITE_CRM_WEBHOOK_URL || FORMSUBMIT_ENDPOINT;
}

/**
 * Human-readable labels for FormSubmit's email template.
 *
 * FormSubmit prints the payload's keys verbatim, so a field named `fullName`
 * arrives in the inbox as "fullName". These make the email readable by
 * somebody who has never seen the code.
 */
const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  fullName: 'Name',
  email: 'Email',
  phone: 'Phone',
  organization: 'Organisation',
  organisation: 'Organisation',
  role: 'Role',
  subject: 'Subject',
  message: 'Message',
  interest: 'Interest',
  commission: 'Commission',
  event: 'Event',
};

const FORM_SUBJECTS: Record<CrmFormType, string> = {
  contact: 'Contact enquiry',
  'membership-application': 'Supporter registration',
  'event-registration': 'Event registration',
};

/**
 * Posts a submission to the configured endpoint.
 *
 * Never throws: a form must still be able to thank the visitor and tell them
 * the truth about what happened if the endpoint is down.
 */
export async function submitToCrm(submission: CrmSubmission): Promise<CrmResult> {
  const endpoint = endpointUrl();
  const usingFormSubmit = endpoint === FORMSUBMIT_ENDPOINT;

  /*
   * FormSubmit takes a flat object and emails the keys as it finds them, so
   * the payload is relabelled and flattened here. A CRM webhook gets the
   * structured shape instead — it is the caller's own endpoint and can parse.
   */
  const body = usingFormSubmit
    ? {
        _subject: `[CDD] ${FORM_SUBJECTS[submission.form]}`,
        // Renders the fields as a table rather than a wall of text.
        _template: 'table',
        // The AJAX endpoint never shows FormSubmit's captcha page, and leaving
        // it on has been known to swallow submissions silently.
        _captcha: 'false',
        ...Object.fromEntries(
          Object.entries(submission.fields)
            .filter(([, value]) => String(value ?? '').trim().length > 0)
            .map(([key, value]) => [FIELD_LABELS[key] ?? key, String(value)])
        ),
        Language: submission.locale,
        Page: submission.sourcePath,
        Submitted: new Date().toISOString(),
      }
    : { ...submission, submittedAt: new Date().toISOString() };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return { status: 'error', message: `Submission endpoint responded ${response.status}` };
    }

    /*
     * A 200 is not proof of delivery. FormSubmit answers 200 with
     * {"success":"false"} for a form it has refused — an unactivated address
     * among them — so the body has to be read. Trusting the status code alone
     * is how a form ends up thanking somebody for a message nobody received.
     */
    if (usingFormSubmit) {
      const payload = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;

      const accepted =
        payload?.success === true || String(payload?.success ?? '').toLowerCase() === 'true';

      if (!accepted) {
        return {
          status: 'error',
          message: payload?.message || 'The submission service refused the request.',
        };
      }
    }

    return { status: 'ok' };
  } catch {
    // Network failure, DNS, CORS, or a content blocker cancelling a
    // third-party request. The visitor should not be shown a stack trace; the
    // caller decides what to say.
    return { status: 'error', message: 'Could not reach the submission endpoint.' };
  }
}

/**
 * Reads the honeypot field. Bots fill in every input they find; a human never
 * sees this one because it is hidden from both the screen and assistive tech.
 *
 * Render it with `<HoneypotField />` from components/HoneypotField.
 */
export function isLikelyBot(form: FormData): boolean {
  return String(form.get(HONEYPOT_NAME) || '').trim().length > 0;
}

export const HONEYPOT_NAME = 'company-website';
