import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_TAGS,
  STORAGE_KEY,
  isLocale,
  localisePath,
  stripLocale,
  type Locale,
} from './config';
import { DICTIONARIES, type Dictionary } from './dictionaries';

interface LocaleContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  /** Canonical path with any locale prefix removed. */
  canonicalPath: string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const pathLocale = location.pathname.split('/')[1];
  const localeFromPath: Locale | null = isLocale(pathLocale) ? pathLocale : null;

  const [preferred, setPreferred] = useState<Locale>(() => {
    if (localeFromPath) return localeFromPath;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && isLocale(saved)) return saved;
    } catch {
      /* localStorage unavailable */
    }
    for (const language of navigator.languages ?? []) {
      const base = language.split('-')[0].toLowerCase();
      if (isLocale(base)) return base;
    }
    return DEFAULT_LOCALE;
  });

  // The URL is the source of truth once it carries a locale.
  const locale = localeFromPath ?? (location.pathname === '/' ? preferred : DEFAULT_LOCALE);
  const canonicalPath = stripLocale(location.pathname);

  const setLocale = useCallback(
    (next: Locale) => {
      setPreferred(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      navigate(localisePath(location.pathname, next) + location.search + location.hash);
    },
    [navigate, location.pathname, location.search, location.hash]
  );

  /**
   * Keep the document in sync: `lang` for assistive technology and search
   * engines, plus hreflang alternates so each locale is indexed as its own
   * page rather than treated as duplicate content.
   */
  useEffect(() => {
    document.documentElement.lang = LOCALE_TAGS[locale];

    const origin = window.location.origin;
    const head = document.head;
    head.querySelectorAll('link[data-i18n-alt]').forEach((node) => node.remove());

    for (const alt of LOCALES) {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = LOCALE_TAGS[alt];
      link.href = origin + localisePath(canonicalPath, alt);
      link.setAttribute('data-i18n-alt', 'true');
      head.appendChild(link);
    }

    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = origin + localisePath(canonicalPath, DEFAULT_LOCALE);
    xDefault.setAttribute('data-i18n-alt', 'true');
    head.appendChild(xDefault);
  }, [locale, canonicalPath]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, t: DICTIONARIES[locale], setLocale, canonicalPath }),
    [locale, setLocale, canonicalPath]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used inside <LocaleProvider>');
  return context;
}

/** Shorthand for components that only need the strings. */
export function useTranslation(): Dictionary {
  return useLocale().t;
}
