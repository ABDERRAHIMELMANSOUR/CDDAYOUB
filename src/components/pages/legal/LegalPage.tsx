import React from 'react';
import { useTranslation } from '../../../i18n/LocaleProvider';
import { useLocale } from '../../../i18n/LocaleProvider';

/**
 * Shared shell for the legal / compliance pages (privacy, cookies,
 * accessibility, transparency) so they stay visually consistent and any
 * contrast or typography fix applies to all of them at once.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  const t = useTranslation();
  const { locale } = useLocale();
  return (
    <div>
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        <div className="relative max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            {eyebrow}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{title}</h1>
          {intro && <p className="mt-6 text-xl text-gray-200 leading-relaxed">{intro}</p>}
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          {lastUpdated && (
            <p className="text-sm text-gray-600 mb-6">
              {t.legal.lastUpdated}: {lastUpdated}
            </p>
          )}

          {/*
            Authoritative-version clause.

            The legal statements are published in three languages, but the
            English text is the reference. A mistranslated retention period or
            lawful-basis clause is a compliance exposure rather than a cosmetic
            bug, so the prevailing version is stated explicitly — standard
            practice for multilingual legal notices. A professional legal review
            is still recommended before the board relies on the translations.
          */}
          {locale !== 'en' && (
            <div className="mb-10 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4">
              <p className="text-sm font-semibold text-blue-900">{t.legal.authoritativeTitle}</p>
              <p className="mt-1 text-sm text-blue-900/90 leading-relaxed">
                {t.legal.authoritativeText}
              </p>
            </div>
          )}
          <div className="space-y-10">{children}</div>
        </div>
      </section>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

/**
 * Marks information the board still has to supply. Renders visibly rather than
 * silently omitting, so an unfinished statement is obvious in review — but only
 * in development, so an incomplete field never ships as a placeholder to the
 * public site.
 */
export function Pending({ children }: { children: React.ReactNode }) {
  if (!import.meta.env.DEV) return null;
  return (
    <p className="rounded-lg border border-dashed border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <strong className="font-semibold">To confirm:</strong> {children}
    </p>
  );
}
