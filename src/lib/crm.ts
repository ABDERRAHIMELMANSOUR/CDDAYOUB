/**
 * CRM submission — one path for every form on the site.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CONFIGURE THIS BEFORE LAUNCH: set VITE_CRM_WEBHOOK_URL in Vercel.
 *
 * Until it is set, `submitToCrm` reports `not-configured` and the calling form
 * falls back to telling the visitor CDD will be in touch. It does NOT pretend
 * to have delivered anything. A contact form that silently drops enquiries is
 * worse than no contact form, because nobody finds out for weeks.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ON POSTING DIRECTLY FROM THE BROWSER
 *
 * The endpoint URL ships in the bundle and is therefore public. That is
 * acceptable for an inbound webhook (HubSpot, Pipedrive, Make, Zapier, n8n all
 * publish ingest URLs designed for this) but it is NOT acceptable for anything
 * carrying an API key — a key in this file is a key published to every
 * visitor. Two consequences the board should know about:
 *
 *   1. Use an ingest-only webhook. It should be able to CREATE a record and
 *      nothing else: no read access, no export, no delete.
 *   2. A public endpoint can be posted to by anyone, so spam is expected.
 *      Filter in the CRM, or put a serverless function in front of it. The
 *      honeypot below stops naive bots, not a determined one.
 *
 * If the CRM only accepts authenticated requests, add `api/crm.ts` as a Vercel
 * function holding the key server-side and point VITE_CRM_WEBHOOK_URL at it.
 */

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

/** True when a CRM endpoint has been configured for this deployment. */
export function isCrmConfigured(): boolean {
  return Boolean(import.meta.env.VITE_CRM_WEBHOOK_URL);
}

/**
 * Posts a submission to the configured CRM webhook.
 *
 * Never throws: a form must still be able to thank the visitor and tell them
 * the truth about what happened if the CRM is down.
 */
export async function submitToCrm(submission: CrmSubmission): Promise<CrmResult> {
  const endpoint = import.meta.env.VITE_CRM_WEBHOOK_URL;

  if (!endpoint) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info('[crm] no VITE_CRM_WEBHOOK_URL set; submission not sent', submission);
    }
    return { status: 'not-configured' };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...submission,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return { status: 'error', message: `CRM responded ${response.status}` };
    }
    return { status: 'ok' };
  } catch {
    // Network failure, DNS, CORS, or an ad blocker. The visitor should not be
    // shown a stack trace; the caller decides what to say.
    return { status: 'error', message: 'Could not reach the CRM endpoint.' };
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
