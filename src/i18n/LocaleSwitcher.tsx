import { Globe } from 'lucide-react';
import { LOCALES, LOCALE_NAMES, LOCALE_SHORT } from './config';
import { useLocale } from './LocaleProvider';

/**
 * Persistent language switcher (ticket 22).
 *
 * Present in the header on every page, in both desktop and mobile navigation,
 * so a visitor is never more than one click from their own language. The choice
 * is stored, so it survives the next visit.
 */
export function LocaleSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-xl border border-gray-200 p-1 ${className}`}
      role="group"
      aria-label={t.common.changeLanguage}
    >
      <Globe className="h-4 w-4 text-gray-600 ml-1.5" aria-hidden="true" />
      {LOCALES.map((option) => {
        const active = option === locale;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={active}
            aria-label={LOCALE_NAMES[option]}
            title={LOCALE_NAMES[option]}
            className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors ${
              active
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {LOCALE_SHORT[option]}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Notice shown above long-form content that has not been translated yet.
 * Telling a Dutch or French reader plainly beats silently serving English.
 */
export function UntranslatedNotice() {
  const { locale, t } = useLocale();
  if (locale === 'en') return null;
  return (
    <p className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-900">
      {t.common.languageNotice}
    </p>
  );
}
