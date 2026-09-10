/**
 * Form submission endpoint — emails every enquiry to the secretariat.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS AS A FUNCTION
 *
 * The site is a static bundle. Anything it can do, a visitor can read out of
 * the JavaScript — which rules out calling an email provider from the browser,
 * because the API key would ship with the page and anyone could send mail as
 * CDD. So the key lives here, server-side, and the browser only ever talks to
 * this same-origin endpoint.
 *
 * That also removes the CORS problem and the ad-blocker problem: a request to
 * /api/submit is a first-party request to the site's own domain, where a
 * request to a third-party form service is exactly the shape blockers reject.
 *
 * ── CONFIGURATION ───────────────────────────────────────────────────────────
 * Required in Vercel (Project → Settings → Environment Variables):
 *
 *   RESEND_API_KEY   The key from resend.com. NOT prefixed VITE_, so it is
 *                    never bundled into the client.
 *
 * Optional, with the defaults below:
 *
 *   CONTACT_TO       Where submissions are delivered.
 *   CONTACT_FROM     The From address. Its DOMAIN MUST BE VERIFIED in Resend
 *                    or every send fails with 403. While testing, Resend's
 *                    onboarding@resend.dev works without verification.
 *
 * Runs on the Edge runtime: no Node APIs are needed, the provider is called
 * over plain fetch, and there is no dependency to keep up to date.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const config = { runtime: 'edge' };

const DEFAULT_TO = 'contact@cddpaysbas.nl';
const DEFAULT_FROM = 'CDD Pays-Bas <noreply@cddpaysbas.nl>';

/** Matches HONEYPOT_NAME in src/lib/crm.ts. */
const HONEYPOT_NAME = 'company-website';

/** Rejects a payload a human could not have produced. */
const MAX_BODY_BYTES = 20_000;
const MAX_FIELD_CHARS = 5_000;
const MAX_FIELDS = 40;

type FormType = 'contact' | 'membership-application' | 'event-registration';

const SUBJECT_FOR: Record<FormType, string> = {
  contact: 'Contact enquiry',
  'membership-application': 'Supporter registration',
  'event-registration': 'Event registration',
};

/**
 * Escapes text before it goes into the HTML part of the email.
 *
 * The body is attacker-controlled: anyone can type anything into a public
 * form. Without this, a submission containing markup would render as markup
 * in the secretariat's inbox, which is how a phishing link gets laundered
 * through a trusted sender.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Header injection guard: a newline in a header splits it into two. */
function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, 320);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ error: 'Payload too large' }, 413);
  }

  let payload: {
    form?: string;
    locale?: string;
    sourcePath?: string;
    fields?: Record<string, unknown>;
    submittedAt?: string;
  };
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const form = String(payload.form ?? '') as FormType;
  if (!(form in SUBJECT_FOR)) {
    return json({ error: 'Unknown form' }, 400);
  }

  const fields = payload.fields ?? {};

  /*
   * Honeypot, checked again here. The browser already drops these, but the
   * browser is not the only thing that can reach this URL — a bot posting
   * straight at the endpoint never runs that code. Answering 200 rather than
   * 4xx is deliberate: a bot that gets an error learns to try something else.
   */
  if (String(fields[HONEYPOT_NAME] ?? '').trim().length > 0) {
    return json({ ok: true }, 200);
  }

  const entries = Object.entries(fields)
    .filter(([key]) => key !== HONEYPOT_NAME)
    .slice(0, MAX_FIELDS)
    .map(([key, value]) => [key, String(value ?? '').slice(0, MAX_FIELD_CHARS)] as const)
    .filter(([, value]) => value.trim().length > 0);

  if (entries.length === 0) {
    return json({ error: 'Empty submission' }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    /*
     * 503, not 500, and the client turns it into "we have your details and
     * will be in touch" rather than a success message. A form that claims to
     * have sent something it did not is the failure mode worth avoiding: the
     * visitor stops chasing and nobody at CDD ever knows they wrote.
     */
    return json({ error: 'not-configured' }, 503);
  }

  const to = process.env.CONTACT_TO || DEFAULT_TO;
  const from = process.env.CONTACT_FROM || DEFAULT_FROM;

  // Reply-To is what makes this usable: hitting reply in the inbox writes to
  // the person who filled the form, not to the site's own noreply address.
  const visitorEmail = String(fields.email ?? fields.emailLabel ?? '').trim();
  const replyTo = isEmail(visitorEmail) ? headerSafe(visitorEmail) : undefined;

  const visitorName = String(fields.name ?? fields.fullName ?? '').trim();
  const subject = headerSafe(
    `[CDD] ${SUBJECT_FOR[form]}${visitorName ? ` — ${visitorName}` : ''}`
  );

  const rows = entries
    .map(
      ([key, value]) =>
        `<tr>
           <td style="padding:6px 14px 6px 0;vertical-align:top;color:#475569;white-space:nowrap">${escapeHtml(key)}</td>
           <td style="padding:6px 0;vertical-align:top;color:#0f172a;white-space:pre-wrap">${escapeHtml(value)}</td>
         </tr>`
    )
    .join('');

  const meta = [
    `Form: ${form}`,
    `Locale: ${String(payload.locale ?? '—')}`,
    `Page: ${String(payload.sourcePath ?? '—')}`,
    `Received: ${new Date().toISOString()}`,
  ];

  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5">
      <h2 style="margin:0 0 4px;font-size:18px;color:#0f172a">${escapeHtml(SUBJECT_FOR[form])}</h2>
      <p style="margin:0 0 18px;color:#64748b;font-size:13px">${escapeHtml(meta.join(' · '))}</p>
      <table style="border-collapse:collapse">${rows}</table>
    </div>`;

  // Plain-text alternative, so the mail is readable in any client and is less
  // likely to be scored as spam for being HTML-only.
  const text = [
    SUBJECT_FOR[form],
    ...meta,
    '',
    ...entries.map(([key, value]) => `${key}: ${value}`),
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });

    if (!response.ok) {
      // The provider's message can name the account or the key; it is logged
      // for the operator and never returned to the browser.
      const detail = await response.text();
      console.error('[submit] Resend rejected the send', response.status, detail);
      return json({ error: 'delivery-failed' }, 502);
    }

    return json({ ok: true }, 200);
  } catch (error) {
    console.error('[submit] Could not reach the mail provider', error);
    return json({ error: 'delivery-failed' }, 502);
  }
}
