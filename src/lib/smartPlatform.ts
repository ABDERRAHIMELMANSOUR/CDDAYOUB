/**
 * CDD Smart Platform — member login and SSO (ticket 23).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * DECISION REQUIRED BEFORE THIS GOES LIVE.
 *
 * The blueprint flags that the Smart Platform sits in the navigation but is
 * never explained anywhere on the public site, and asks the board to establish
 * whether it is:
 *
 *   a) the intended member area — in which case the public site's job shrinks
 *      cleanly to brochure plus conversion funnel, and everything member-facing
 *      lives behind this login;
 *   b) a separate product that happens to share the brand; or
 *   c) a prototype not ready to be linked at all.
 *
 * Until that is answered, `SMART_PLATFORM.status` stays 'pending' and the
 * Member Login control renders as a disabled affordance rather than a link to
 * '#'. A login button that goes nowhere is the same defect as the Projects nav
 * item removed in ticket 6.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type PlatformStatus = 'pending' | 'external' | 'sso';

export interface SmartPlatformConfig {
  /**
   * 'pending'  — not linked; Member Login is disabled (current state)
   * 'external' — a plain link to the platform, which handles its own login
   * 'sso'      — federated login initiated from this site
   */
  status: PlatformStatus;

  /** Base URL of the platform, e.g. https://platform.cddpaysbas.nl */
  baseUrl: string | null;

  /**
   * SSO protocol, once chosen.
   *
   * 'oidc' (OpenID Connect) is the recommended default: it is what most modern
   * identity providers speak, it works cleanly with a static front end plus one
   * serverless callback, and it avoids the XML handling SAML requires.
   * 'saml' is worth considering only if an institutional partner mandates it.
   */
  protocol: 'oidc' | 'saml' | null;

  /**
   * Where the identity provider sends the member after authenticating. This
   * MUST be registered in the provider's allow-list — an unregistered redirect
   * URI is the most common way an SSO integration becomes an open redirect.
   */
  redirectPath: string;

  /** OIDC client id. Public by design; the client SECRET must never appear here. */
  clientId: string | null;

  /** Scopes requested at authorisation. */
  scopes: string[];
}

/**
 * Where the supporter portal lives.
 *
 * The portal is a separate Next.js application in its own repository, so this
 * site links to it rather than containing it — which is the whole reason the
 * public site stays a static bundle with no authentication code in it.
 *
 * Set VITE_PORTAL_URL in Vercel once the portal is deployed, e.g.
 * https://portal.cddpaysbas.nl. Until then this stays null, the control
 * renders disabled with its existing "being prepared" wording, and nothing
 * links anywhere broken. Hard-coding the URL below works just as well if you
 * would rather not use an environment variable — it is one line either way.
 */
const PORTAL_URL: string | null = trimTrailingSlash(import.meta.env.VITE_PORTAL_URL) || null;

/**
 * The portal's sign-in page.
 *
 * The control is a LOGIN button, so it points at the login screen rather than
 * at the portal root. Landing on the root means an unauthenticated visitor is
 * bounced to /login by the portal's own middleware — the same destination,
 * one redirect later, and with a callbackUrl of "/portal" they never asked
 * for. Linking straight there also means the portal can change what lives at
 * its root without this button quietly becoming wrong.
 */
const PORTAL_LOGIN_PATH = '/login';

/**
 * A configured URL ending in "/" would otherwise build "https://host//login".
 * Most servers tolerate the double slash; some redirect, and one or two 404.
 * Normalising here means nobody has to remember the convention when setting
 * the environment variable.
 */
function trimTrailingSlash(value: string | undefined): string {
  return (value ?? '').trim().replace(/\/+$/, '');
}

export const SMART_PLATFORM: SmartPlatformConfig = {
  /*
   * Derived, not declared. Setting status and baseUrl independently is how a
   * deployment ends up claiming the platform is live while pointing at
   * nothing — isPlatformLive() then returns true and the button links to
   * "null". One source of truth removes that state entirely.
   */
  status: PORTAL_URL ? 'external' : 'pending',
  baseUrl: PORTAL_URL,
  protocol: null,
  redirectPath: '/member/callback',
  clientId: null,
  scopes: ['openid', 'profile', 'email'],
};

/** True when Member Login should be an actionable control. */
export function isPlatformLive(config: SmartPlatformConfig = SMART_PLATFORM): boolean {
  return config.status !== 'pending' && Boolean(config.baseUrl);
}

/**
 * Builds the URL the Member Login control points at.
 *
 * For 'external' this is simply the platform. For 'sso' it is the authorisation
 * request. Returns null while the platform is pending, which is what makes the
 * control render disabled rather than broken.
 *
 * NOTE ON PKCE: a public client (which a static SPA necessarily is) must use
 * Authorization Code flow with PKCE — never the implicit flow, and never a
 * client secret. The `code_challenge` is generated per attempt and the verifier
 * held in sessionStorage; that exchange belongs in the callback route together
 * with a `state` check to prevent CSRF. Both are wired up when a provider is
 * chosen, since the parameter names depend on it.
 */
export function buildLoginUrl(
  config: SmartPlatformConfig = SMART_PLATFORM,
  origin: string = typeof window !== 'undefined' ? window.location.origin : ''
): string | null {
  if (!isPlatformLive(config) || !config.baseUrl) return null;

  if (config.status === 'external') return `${config.baseUrl}${PORTAL_LOGIN_PATH}`;

  if (config.protocol === 'oidc' && config.clientId) {
    const params = new URLSearchParams({
      client_id: config.clientId,
      redirect_uri: `${origin}${config.redirectPath}`,
      response_type: 'code',
      scope: config.scopes.join(' '),
    });
    return `${config.baseUrl}/authorize?${params.toString()}`;
  }

  // SAML is initiated by the identity provider's SSO endpoint.
  if (config.protocol === 'saml') return `${config.baseUrl}/sso/login`;

  return config.baseUrl;
}

/**
 * What the platform is, in one sentence, for the public site.
 *
 * The blueprint's point stands: something in the navigation that is never
 * explained costs more credibility than it gains. Fill this in when the board
 * answers the question above.
 */
export const PLATFORM_DESCRIPTION: string | null = null;
