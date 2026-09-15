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
  /*
   * `email` is deliberately absent. FormSubmit reads the field literally
   * named "email" to decide where the autoresponse goes and what Reply-To to
   * set; relabelling it to "Email" risks both silently. A slightly plainer
   * key in the inbox is a fair trade for the acknowledgement reaching the
   * person who wrote in. `_replyto` below is the belt to that brace.
   */
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

/**
 * The acknowledgement FormSubmit emails back to whoever filled the form.
 *
 * Written per form AND per language. Per form because the three say different
 * things about what happens next — an enquiry gets a reply, a supporter
 * registration gets board review, an event registration gets a confirmed
 * place — and a single generic line would be vague in all three. Per language
 * because the rest of the site is, and a Dutch visitor receiving an English
 * acknowledgement is a worse first impression than none at all.
 *
 * Plain text: FormSubmit does not render HTML in the autoresponse.
 *
 * The supporter wording tracks the site's own copy on ANNUAL_PRICE_AVAILABLE —
 * it says payment will be arranged and that nothing is charged yet, because
 * that is true today. If the payment provider goes live, update both together.
 */
const SIGNATURE = 'Club des Dirigeants — CDD Pays-Bas\ncontact@cddpaysbas.nl';

const AUTORESPONSE: Record<CrmFormType, Record<'en' | 'nl' | 'fr', string>> = {
  contact: {
    en: `Thank you for contacting CDD Pays-Bas.

We have received your message and it has reached our secretariat. A member of our team will read it and reply to you personally, usually within a few working days.

This is an automatic acknowledgement — there is no need to reply to it.

${SIGNATURE}`,
    nl: `Hartelijk dank voor uw bericht aan CDD Pays-Bas.

Wij hebben uw bericht ontvangen; het is bij ons secretariaat aangekomen. Een van onze medewerkers leest het en reageert persoonlijk, doorgaans binnen enkele werkdagen.

Dit is een automatische ontvangstbevestiging — u hoeft hier niet op te antwoorden.

${SIGNATURE}`,
    fr: `Merci d'avoir contacté CDD Pays-Bas.

Nous avons bien reçu votre message, qui est parvenu à notre secrétariat. Un membre de notre équipe le lira et vous répondra personnellement, généralement sous quelques jours ouvrés.

Ceci est un accusé de réception automatique — il est inutile d'y répondre.

${SIGNATURE}`,
  },
  'membership-application': {
    en: `Thank you for registering as a supporter of CDD Pays-Bas.

We have received your registration. A member of the board reviews every registration personally, and we will be in touch shortly to confirm your access and arrange payment. Nothing is charged before then.

This is an automatic acknowledgement — there is no need to reply to it.

${SIGNATURE}`,
    nl: `Hartelijk dank voor uw aanmelding als supporter van CDD Pays-Bas.

Wij hebben uw aanmelding ontvangen. Een bestuurslid beoordeelt elke aanmelding persoonlijk. Wij nemen binnenkort contact met u op om uw supporterschap te bevestigen en de betaling te regelen. Er wordt vooraf niets in rekening gebracht.

Dit is een automatische ontvangstbevestiging — u hoeft hier niet op te antwoorden.

${SIGNATURE}`,
    fr: `Merci de votre demande d'accès supporter auprès de CDD Pays-Bas.

Nous avons bien reçu votre demande. Un membre du conseil examine personnellement chaque demande et nous vous contacterons prochainement pour confirmer votre accès et organiser le paiement. Aucun montant n'est prélevé avant.

Ceci est un accusé de réception automatique — il est inutile d'y répondre.

${SIGNATURE}`,
  },
  'event-registration': {
    en: `Thank you for registering for a CDD Pays-Bas event.

We have received your registration. We will confirm your place by email and send the joining details closer to the date.

This is an automatic acknowledgement — there is no need to reply to it.

${SIGNATURE}`,
    nl: `Hartelijk dank voor uw inschrijving voor een evenement van CDD Pays-Bas.

Wij hebben uw inschrijving ontvangen. Wij bevestigen uw plaats per e-mail en sturen de praktische gegevens dichter bij de datum.

Dit is een automatische ontvangstbevestiging — u hoeft hier niet op te antwoorden.

${SIGNATURE}`,
    fr: `Merci de votre inscription à un événement de CDD Pays-Bas.

Nous avons bien reçu votre inscription. Nous confirmerons votre place par e-mail et vous enverrons les informations pratiques à l'approche de la date.

Ceci est un accusé de réception automatique — il est inutile d'y répondre.

${SIGNATURE}`,
  },
};

/** Picks the acknowledgement, falling back to English for an unknown locale. */
function autoresponseFor(form: CrmFormType, locale: string): string {
  const byLocale = AUTORESPONSE[form];
  return byLocale[locale as 'en' | 'nl' | 'fr'] ?? byLocale.en;
}

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
        // Acknowledgement sent back to the person who filled the form, in the
        // language they were reading the site in.
        _autoresponse: autoresponseFor(submission.form, submission.locale),
        ...Object.fromEntries(
          Object.entries(submission.fields)
            .filter(([, value]) => String(value ?? '').trim().length > 0)
            .map(([key, value]) => [FIELD_LABELS[key] ?? key, String(value)])
        ),
        Language: submission.locale,
        Page: submission.sourcePath,
        Submitted: new Date().toISOString(),
        /*
         * Explicit Reply-To. FormSubmit infers one from the `email` field, but
         * this states it rather than relying on that inference — and it is the
         * same value, so there is nothing to drift.
         */
        ...(String(submission.fields.email ?? '').trim()
          ? { _replyto: String(submission.fields.email).trim() }
          : {}),
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
