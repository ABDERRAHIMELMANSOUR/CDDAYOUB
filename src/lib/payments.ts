/**
 * Payment readiness (ticket 18).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THERE IS NO LIVE PAYMENT INTEGRATION HERE
 *
 * This site is a static Vite SPA with no backend. iDEAL, SEPA direct debit and
 * card payments cannot be initiated from client-side code:
 *
 *   - Mollie (the standard iDEAL provider in the Netherlands) and Stripe both
 *     require the payment to be created server-side using a SECRET API key.
 *   - Anything placed in this bundle is served to every visitor. Shipping a
 *     secret key here would publish it — a live financial credential, readable
 *     with "view source".
 *   - Amounts must be decided server-side. A client that says "charge €290"
 *     can be edited by the payer to say "charge €1".
 *
 * So this module ships the parts that are genuinely safe client-side: the
 * applicant details, validation, and the handoff. It calls a
 * checkout endpoint that DOES NOT EXIST YET, and until it does, the flow runs
 * against `mockProvider` and tells the applicant plainly that CDD will follow
 * up to arrange payment. Nothing here pretends to take money.
 *
 * ── What the board / developer needs to add to go live ──────────────────────
 *
 * 1. Choose a provider. For a Dutch organisation collecting iDEAL and SEPA,
 *    Mollie is the natural fit (native iDEAL, SEPA direct debit for renewals,
 *    cards for international members). Stripe works but iDEAL support and Dutch
 *    SEPA mandates are more involved.
 *
 * 2. Add ONE serverless function. Vercel already hosts this site, so
 *    `api/checkout.ts` is enough — no separate backend required.
 *
 *    It must:
 *      a. Accept { applicant } — NOT an amount and NOT an interval.
 *      b. Use its own copy of the price: €290 per year. Membership renews
 *         annually, so create a Mollie customer + yearly subscription (or the
 *         Stripe equivalent) rather than an unconnected one-off payment —
 *         otherwise year two is a manual chase.
 *      c. Create the payment with the provider using the secret key from an
 *         environment variable (MOLLIE_API_KEY / STRIPE_SECRET_KEY), never a
 *         bundled constant.
 *      d. Return { checkoutUrl } for the browser to redirect to.
 *
 * 3. Add a webhook endpoint (`api/payment-webhook.ts`) to receive the
 *    provider's confirmation. Treat the webhook as the only source of truth
 *    for "paid" — the browser redirect can be forged or simply never happen if
 *    the payer closes the tab.
 *
 * 4. For annual SEPA renewals, collect a mandate through the provider's flow.
 *    Do not store IBANs yourself; there is no reason to hold that data. Note
 *    that iDEAL is a single-payment method: the standard Dutch pattern is a
 *    first iDEAL payment that establishes the SEPA mandate, with subsequent
 *    years collected by direct debit.
 *
 * 5. Update the privacy statement: payment data introduces a processor, which
 *    the AVG requires be disclosed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface Applicant {
  name: string;
  email: string;
  organisation?: string;
  role?: string;
  /** Which commission the applicant wants to take part in. */
  commission?: string;
  message?: string;
}

export interface CheckoutRequest {
  applicant: Applicant;
}

export type CheckoutResult =
  | { status: 'redirect'; checkoutUrl: string }
  | { status: 'manual'; reference: string }
  | { status: 'error'; message: string };

export interface PaymentProvider {
  readonly id: string;
  /** True when this provider can actually take money. */
  readonly isLive: boolean;
  createCheckout(request: CheckoutRequest): Promise<CheckoutResult>;
}

/** Payment methods CDD intends to accept, shown on the review step. */
export const PAYMENT_METHODS = [
  { id: 'ideal', label: 'iDEAL', note: 'Standard for Dutch members' },
  { id: 'sepa', label: 'SEPA Direct Debit', note: 'Used for annual renewals' },
  { id: 'card', label: 'Card', note: 'For international members' },
] as const;

/**
 * The provider used until a backend exists.
 *
 * Records the application and returns a reference. CDD follows up to arrange
 * payment — which is exactly what happens today, only now with the commission
 * interest and applicant details already captured.
 */
export const mockProvider: PaymentProvider = {
  id: 'manual',
  isLive: false,
  async createCheckout({ applicant }: CheckoutRequest): Promise<CheckoutResult> {
    const reference = `CDD-${Date.now().toString(36).toUpperCase()}`;
    // Deliberately not persisted: there is nowhere to persist it to yet, and
    // inventing a storage location would hide the fact that a backend is needed.
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info('[membership] application captured', { reference, applicant });
    }
    return { status: 'manual', reference };
  },
};

/**
 * The live provider, for once `api/checkout` exists. Kept here so switching
 * over is a one-line change in `paymentProvider` below.
 */
export const serverProvider: PaymentProvider = {
  id: 'server',
  isLive: true,
  async createCheckout(request: CheckoutRequest): Promise<CheckoutResult> {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // No amount or interval is sent — the server owns the price
        // (MEMBERSHIP_ANNUAL_PRICE_EUR, yearly) so a tampered client cannot
        // set it.
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        return { status: 'error', message: 'We could not start the payment. Please try again.' };
      }
      const data = (await response.json()) as { checkoutUrl?: string };
      if (!data.checkoutUrl) {
        return { status: 'error', message: 'The payment provider did not return a checkout link.' };
      }
      return { status: 'redirect', checkoutUrl: data.checkoutUrl };
    } catch {
      return { status: 'error', message: 'We could not reach the payment service.' };
    }
  },
};

/** Switch to `serverProvider` once the checkout endpoint is deployed. */
export const paymentProvider: PaymentProvider = mockProvider;
