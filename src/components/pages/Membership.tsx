import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { Check, ArrowRight, Users } from 'lucide-react';
import {
  MEMBERSHIP,
  WHY_JOIN,
  ANNUAL_PRICE_AVAILABLE,
  formatAnnualPrice,
  pick,
} from '../../data/membership';
import { PAYMENT_METHODS } from '../../lib/payments';
import { PageHero } from '../PageHero';

/**
 * Membership (ticket 17).
 *
 * The defining gap in the audit: for an organisation named Club des Dirigeants
 * there was no join page, no tiers, no pricing and no application — so every
 * visitor was a dead end. This page is the conversion path.
 */
export function Membership() {
  const t = useTranslation();
  const { locale } = useLocale();
  const annualPrice = formatAnnualPrice(locale, t.membership.perYear);
  return (
    <div>
      {/* Hero */}
      <PageHero eyebrow={t.nav.membership} title={t.membership.title}>
        {t.membership.subtitle}
      </PageHero>

      {/* Why join */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_JOIN.map((item) => (
              <div
                key={pick(item.title, 'en')}
                className="rounded-3xl border border-gray-100 shadow-sm p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pick(item.title, locale)}</h3>
                <p className="text-gray-700 leading-relaxed">{pick(item.text, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership & dues — one type, one price (board decision, August 2026) */}
      <section id="tiers" className="py-16 lg:py-24 bg-gray-50 scroll-mt-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.membership.duesTitle}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-8 leading-relaxed">
            {t.membership.duesSingleIntro}
          </p>

          {/*
            Statutory notice, placed ABOVE the price card rather than in small
            print beneath it. A Dutch stichting has no members and no
            membership; the annual contribution buys access, not a vote. That
            distinction has to be read before the figure, not after it, so it
            cannot be mistaken for a disclaimer bolted onto a purchase.
          */}
          <div className="max-w-3xl mb-12 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
            <p className="text-sm text-gray-800 leading-relaxed">{t.membership.legalNotice}</p>
          </div>

          <div className="max-w-3xl rounded-3xl bg-white border-2 border-blue-600 shadow-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900">{pick(MEMBERSHIP.name, locale)}</h3>
            <p className="text-sm text-gray-600 mt-1">{pick(MEMBERSHIP.audience, locale)}</p>

            {/*
              The annual rate is the ONLY rate — the monthly option was removed
              on the board's instruction. It is announced rather than sold while
              ANNUAL_PRICE_AVAILABLE is false, so the "coming soon" badge sits
              with the figure rather than the figure standing alone and reading
              as something that can be paid today.
            */}
            <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className="text-4xl font-bold text-blue-700">{annualPrice}</p>
              {!ANNUAL_PRICE_AVAILABLE && (
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide">
                  {t.membership.annualComingSoon}
                </span>
              )}
            </div>
            {!ANNUAL_PRICE_AVAILABLE && (
              <p className="mt-3 text-sm text-gray-700 leading-relaxed max-w-xl">
                {t.membership.annualNote}
              </p>
            )}
            <p className="mt-5 text-lg text-gray-800 leading-relaxed">
              {pick(MEMBERSHIP.headline, locale)}
            </p>

            <h4 className="mt-8 text-sm font-semibold uppercase tracking-wide text-gray-700">
              {t.membership.whatsIncluded}
            </h4>
            <ul className="mt-4 space-y-3">
              {pick(MEMBERSHIP.benefits, locale).map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/membership/apply"
              className="mt-9 inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
            >
              {t.nav.apply}
            </Link>
          </div>

          {/* Payment methods */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              {t.membership.paymentNote}
            </span>
            {PAYMENT_METHODS.map((method) => (
              <span key={method.id} className="text-sm text-gray-700">
                <strong className="text-gray-900">{method.label}</strong> —{' '}
                {method.id === 'ideal'
                  ? t.membership.paymentIdeal
                  : method.id === 'sepa'
                    ? t.membership.paymentSepa
                    : t.membership.paymentCard}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our members */}
      <section id="members" className="py-16 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.membership.ourMembers}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-10 leading-relaxed">
            {t.membership.membersIntro}
          </p>
          <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <Users className="h-10 w-10 text-gray-500 mx-auto mb-4" aria-hidden="true" />
            <p className="text-gray-700 max-w-xl mx-auto leading-relaxed">
              {t.membership.membersEmpty}{' '}
              <Link to="/contact" className="text-blue-700 underline hover:text-blue-900">
                {t.membership.membersEmptyCta}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.membership.readyToJoin}</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.membership.readyText}
          </p>
          <Link
            to="/membership/apply"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg group"
          >
            {t.membership.applyCta}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
