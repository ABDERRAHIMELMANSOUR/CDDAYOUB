/**
 * Localisation (ticket 22).
 *
 * Three locales, matching the three audiences the blueprint identifies:
 *   - nl : the Dutch corporate and institutional audience
 *   - fr : Moroccan institutional counterparts
 *   - en : the working language, and the current default
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT IS TRANSLATED, AND WHAT IS NOT
 *
 * The interface — navigation, footer, buttons, headings, form labels, calls to
 * action — is fully translated in all three locales.
 *
 * Long-form editorial content is NOT machine-translated here. That covers:
 *   - the 23 advisor biographies
 *   - commission opportunity paragraphs and priorities
 *   - insight articles
 *   - the privacy, cookie and accessibility statements
 *
 * Two reasons. Editorially, an advisor's biography is their professional
 * reputation and should be translated by a person, ideally with their sign-off.
 * Legally, the privacy and cookie statements carry obligations under the AVG,
 * and a mistranslated retention or consent clause is a compliance problem, not
 * a typo. Publishing an approximate Dutch privacy statement is worse than
 * publishing an accurate English one.
 *
 * Untranslated long-form content falls back to English and is marked in the UI
 * with a short notice, so a Dutch or French reader is told plainly that this
 * particular passage is still in English rather than silently served it.
 * `src/i18n/README.md` documents how to add the translations.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const LOCALES = ['en', 'nl', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands',
  fr: 'Français',
};

/** Short labels for the switcher. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: 'EN',
  nl: 'NL',
  fr: 'FR',
};

/** BCP 47 tags used for the `lang` attribute and hreflang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en',
  nl: 'nl-NL',
  fr: 'fr-FR',
};

export const STORAGE_KEY = 'cdd-locale';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Resolve the locale for the current visit: an explicit choice in the URL wins,
 * then a previously saved preference, then the browser's languages, then
 * English.
 */
export function resolveInitialLocale(pathname: string): Locale {
  const fromPath = pathname.split('/')[1];
  if (fromPath && isLocale(fromPath)) return fromPath;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && isLocale(saved)) return saved;
  } catch {
    // localStorage can be unavailable (private mode); fall through.
  }

  for (const language of navigator.languages ?? []) {
    const base = language.split('-')[0].toLowerCase();
    if (isLocale(base)) return base;
  }

  return DEFAULT_LOCALE;
}

/** Strips a leading locale segment, returning the canonical path. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/');
  if (segments[1] && isLocale(segments[1])) {
    const rest = segments.slice(2).join('/');
    return `/${rest}`;
  }
  return pathname;
}

/** Builds a path for a locale. English is served without a prefix. */
export function localisePath(pathname: string, locale: Locale): string {
  const canonical = stripLocale(pathname);
  const clean = canonical === '/' ? '' : canonical.replace(/\/$/, '');
  return locale === DEFAULT_LOCALE ? clean || '/' : `/${locale}${clean}`;
}
