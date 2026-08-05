import { Link, Navigate, type LinkProps } from 'react-router-dom';
import { localisePath } from './config';
import { useLocale, useTranslation } from './LocaleProvider';

/**
 * A <Link> that keeps the visitor in their chosen language.
 *
 * Internal links are written with canonical paths ("/membership"); this
 * rewrites them to "/nl/membership" or "/fr/membership" as needed, so a Dutch
 * reader is never dropped back into English by following a link.
 */
export function LocaleLink({ to, ...rest }: LinkProps & { to: string }) {
  const { locale } = useLocale();
  const href = to.startsWith('/') ? localisePath(to, locale) : to;
  return <Link to={href} {...rest} />;
}

/**
 * A <Navigate> that keeps the visitor in their chosen language.
 *
 * react-router's <Navigate to="/commissions"> is absolute: from /nl/anything it
 * lands on the ENGLISH /commissions, silently dropping the locale. Any redirect
 * to a canonical path must go through here instead.
 */
export function LocaleNavigate({ to, replace = true }: { to: string; replace?: boolean }) {
  const { locale } = useLocale();
  return <Navigate to={to.startsWith('/') ? localisePath(to, locale) : to} replace={replace} />;
}

/** Translated skip link (WCAG 2.4.1). */
export function SkipLink() {
  const t = useTranslation();
  return (
    <a href="#main-content" className="skip-link">
      {t.nav.skipToContent}
    </a>
  );
}
