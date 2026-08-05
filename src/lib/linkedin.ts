import { ORGANISATION } from '../data/organisation';

/**
 * LinkedIn posts on the Insights page.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS DOES NOT FETCH LINKEDIN DIRECTLY
 *
 * "Embed or automatically sync posts from the official CDD LinkedIn page" is a
 * reasonable ask, and it is worth being precise about what LinkedIn actually
 * permits, because three of the obvious approaches do not work:
 *
 *   1. THERE IS NO PUBLIC FEED. LinkedIn company pages expose no RSS, no JSON
 *      feed and no unauthenticated endpoint. The old RSS feeds were withdrawn
 *      years ago. There is nothing to point a reader at.
 *
 *   2. THE API NEEDS APPROVAL AND A SECRET. Reading an organisation's posts
 *      requires the Community Management API, which is gated behind the
 *      LinkedIn Partner Program: CDD must apply, be approved, and hold a
 *      verified company page. It then authenticates with OAuth 2.0. Access
 *      tokens are secrets, and this is a static site — anything in this bundle
 *      is readable by every visitor with "view source". A token shipped here
 *      would be a published credential to CDD's LinkedIn presence.
 *
 *   3. SCRAPING IS NOT AN OPTION. Fetching the public page from the browser is
 *      blocked by CORS, scraping breaches LinkedIn's terms of service, and the
 *      markup changes without notice. Third-party "LinkedIn feed widget"
 *      services do exist, but they work by holding CDD's credentials on their
 *      infrastructure and they see every visitor — a data-protection decision
 *      the board should take deliberately, not one a developer should make
 *      quietly.
 *
 * ── What this module does instead ───────────────────────────────────────────
 *
 * It reads a JSON feed from a URL that CDD controls, set in
 * VITE_LINKEDIN_FEED_URL. The feed is produced server-side, where the token can
 * live safely. Two supported ways to produce it:
 *
 *   a. A scheduled Vercel function (`api/linkedin-sync.ts`) that calls the
 *      Community Management API with a token from an environment variable and
 *      writes the result to storage or returns it directly with a cache header.
 *      Recommended: one call an hour is far inside LinkedIn's rate limits.
 *
 *   b. Manual export. Until the Partner Program application is approved, the
 *      secretariat can maintain a small JSON file by hand and host it in
 *      /public. It is not automatic, but it is honest and it works today.
 *
 * Until VITE_LINKEDIN_FEED_URL is set, `fetchLinkedInPosts` returns an empty
 * list and the Insights page simply does not render the LinkedIn section. No
 * placeholder posts, no invented engagement figures.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface LinkedInPost {
  /** LinkedIn's URN or any stable unique id. */
  id: string;
  /** Post text. LinkedIn posts are single-language; shown as published. */
  text: string;
  /** ISO 8601 publication timestamp. */
  publishedAt: string;
  /** Permalink to the post on LinkedIn. */
  url: string;
  /** Optional preview image URL. */
  imageUrl?: string;
}

/** The company page, linked whenever the feed is empty or unavailable. */
export const LINKEDIN_PAGE_URL = ORGANISATION.linkedin;

/** True when a feed URL has been configured for this deployment. */
export function isLinkedInConfigured(): boolean {
  return Boolean(import.meta.env.VITE_LINKEDIN_FEED_URL);
}

/** Narrows an unknown feed entry to a LinkedInPost, discarding anything malformed. */
function parsePost(value: unknown): LinkedInPost | null {
  if (typeof value !== 'object' || value === null) return null;
  const raw = value as Record<string, unknown>;
  const id = typeof raw.id === 'string' ? raw.id : null;
  const text = typeof raw.text === 'string' ? raw.text : null;
  const url = typeof raw.url === 'string' ? raw.url : null;
  const publishedAt = typeof raw.publishedAt === 'string' ? raw.publishedAt : null;
  if (!id || !text || !url || !publishedAt) return null;
  // Reject anything that is not a LinkedIn permalink: the feed is remote data,
  // and rendering an arbitrary href from it would let a compromised feed point
  // CDD's visitors anywhere.
  if (!/^https:\/\/([a-z]+\.)?linkedin\.com\//i.test(url)) return null;
  return {
    id,
    text,
    url,
    publishedAt,
    imageUrl: typeof raw.imageUrl === 'string' && raw.imageUrl.startsWith('https://')
      ? raw.imageUrl
      : undefined,
  };
}

/**
 * Fetches the configured feed. Never throws and never returns partial garbage:
 * an unreachable or malformed feed yields an empty list, and the page falls
 * back to a link to the LinkedIn page itself.
 */
export async function fetchLinkedInPosts(limit = 3): Promise<LinkedInPost[]> {
  const endpoint = import.meta.env.VITE_LINKEDIN_FEED_URL;
  if (!endpoint) return [];

  try {
    const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
    if (!response.ok) return [];
    const data: unknown = await response.json();
    // Accept either a bare array or { posts: [...] }, since which one a sync
    // job produces depends on how it is written.
    const list = Array.isArray(data)
      ? data
      : Array.isArray((data as { posts?: unknown }).posts)
        ? ((data as { posts: unknown[] }).posts)
        : [];

    return list
      .map(parsePost)
      .filter((post): post is LinkedInPost => post !== null)
      .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
      .slice(0, limit);
  } catch {
    return [];
  }
}
