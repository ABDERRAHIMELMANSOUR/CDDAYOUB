import { Link, type LinkProps } from 'react-router-dom';
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

/** Translated skip link (WCAG 2.4.1). */
export function SkipLink() {
  const t = useTranslation();
  return (
    <a href="#main-content" className="skip-link">
      {t.nav.skipToContent}
    </a>
  );
}
