/**
 * Cookieless analytics (ticket 24).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS KEEPS THE SITE CONSENT-BANNER-FREE
 *
 * Article 11.7a of the Telecommunicatiewet requires consent before storing
 * information on, or reading information from, a visitor's device — unless that
 * access is strictly necessary. It is the STORAGE that triggers consent, not
 * the measurement.
 *
 * Plausible and a correctly configured self-hosted Matomo:
 *   - set no cookies and write nothing to localStorage;
 *   - do not fingerprint the device;
 *   - do not track individuals across sites or sessions;
 *   - aggregate on the server and store no personal data.
 *
 * Because nothing is stored on or read from the device, art. 11.7a does not
 * apply and no consent banner is required. This is the same conclusion the
 * Autoriteit Persoonsgegevens reaches for genuinely privacy-friendly analytics.
 *
 * WHAT WOULD BREAK THIS: Google Analytics (any version), Meta Pixel, LinkedIn
 * Insight Tag, Hotjar, or any tool that sets an identifier. Adding any of them
 * makes a consent-blocking banner mandatory and requires the cookie statement
 * to be rewritten first. Do not add them casually.
 *
 * Matomo note: self-hosted Matomo is only exempt when configured with
 * `disableCookies`, anonymised IPs, and no user-id — the defaults are NOT
 * exempt. Plausible needs no such configuration, which is why it is the
 * recommended default.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Enable by setting VITE_PLAUSIBLE_DOMAIN (and optionally VITE_PLAUSIBLE_HOST
 * for a self-hosted instance) in the Vercel project. With no domain set this
 * module does nothing at all — no script, no requests.
 */

export interface AnalyticsConfig {
  /** The site domain registered with the analytics provider. */
  domain: string | null;
  /** Script origin. Defaults to Plausible's cloud. */
  host: string;
  /** Never load analytics during development. */
  enabledInDev: boolean;
}

export const analyticsConfig: AnalyticsConfig = {
  domain: (import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined) ?? null,
  host: (import.meta.env.VITE_PLAUSIBLE_HOST as string | undefined) ?? 'https://plausible.io',
  enabledInDev: false,
};

/** True when analytics should actually load. */
export function analyticsEnabled(config: AnalyticsConfig = analyticsConfig): boolean {
  if (!config.domain) return false;
  if (import.meta.env.DEV && !config.enabledInDev) return false;
  return true;
}

let injected = false;

/**
 * Injects the analytics script once.
 *
 * Deliberately not gated behind a consent check, because there is nothing to
 * consent to — see the reasoning above. If a tool requiring consent is ever
 * introduced, this function must be gated and the cookie statement updated in
 * the same change.
 */
export function initAnalytics(config: AnalyticsConfig = analyticsConfig): void {
  if (injected || !analyticsEnabled(config) || typeof document === 'undefined') return;
  injected = true;

  const script = document.createElement('script');
  script.defer = true;
  script.setAttribute('data-domain', config.domain as string);
  // `outbound-links` and `file-downloads` are aggregate event extensions; they
  // still store nothing on the device.
  script.src = `${config.host}/js/script.outbound-links.js`;
  document.head.appendChild(script);

  // Queue for custom events, per Plausible's documented pattern.
  const w = window as unknown as { plausible?: ((...args: unknown[]) => void) & { q?: unknown[] } };
  w.plausible =
    w.plausible ||
    function (...args: unknown[]) {
      (w.plausible!.q = w.plausible!.q || []).push(args);
    };
}

/**
 * Records a goal against the metrics in Part H — membership applications,
 * event registrations, newsletter signups, homepage→membership clicks.
 *
 * No-ops when analytics is disabled, so call sites need no guards.
 */
export function trackEvent(name: string, props?: Record<string, string | number | boolean>): void {
  if (!analyticsEnabled()) return;
  const w = window as unknown as { plausible?: (name: string, opts?: unknown) => void };
  w.plausible?.(name, props ? { props } : undefined);
}

/** Goal names, kept together so they stay consistent across call sites. */
export const GOALS = {
  membershipApplicationStarted: 'Membership: application started',
  membershipApplicationSubmitted: 'Membership: application submitted',
  eventRegistration: 'Event: registration submitted',
  commissionInterest: 'Commission: join clicked',
  contactSubmitted: 'Contact: message sent',
} as const;
