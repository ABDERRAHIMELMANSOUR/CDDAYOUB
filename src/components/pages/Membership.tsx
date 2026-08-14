import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { Check, ArrowRight, Users } from 'lucide-react';
import {
  MEMBERSHIP,
  WHY_JOIN,
  ANNUAL_PRICE_AVAILABLE,
  formatMembershipPrice,
  formatAnnualPrice,
  pick,
} from '../../data/membership';
import { ADVISORS } from '../../data/advisors';
import { COMMISSIONS } from '../../data/commissions';
import { PAYMENT_METHODS } from '../../lib/payments';

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
  const price = formatMembershipPrice(locale, t.membership.perMonth);
  const annualPrice = formatAnnualPrice(locale, t.membership.perYear);
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.nav.membership}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              {t.membership.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t.membership.subtitle
                .replace('{advisors}', String(ADVISORS.length))
                .replace('{commissions}', String(COMMISSIONS.length))}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/membership/apply"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium group"
              >
                {t.membership.applyCta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#tiers"
                className="inline-flex items-center px-8 py-4 border border-white/40 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 font-medium"
              >
                {t.membership.seeTiers}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.membership.whyJoin}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-12 leading-relaxed">
            {t.membership.whyJoinIntro}
          </p>
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
          <p className="text-lg text-gray-700 max-w-3xl mb-12 leading-relaxed">
            {t.membership.duesSingleIntro}
          </p>

          <div className="max-w-3xl rounded-3xl bg-white border-2 border-blue-600 shadow-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900">{pick(MEMBERSHIP.name, locale)}</h3>
            <p className="text-sm text-gray-600 mt-1">{pick(MEMBERSHIP.audience, locale)}</p>

            <p className="mt-6 text-4xl font-bold text-blue-700">{price}</p>
            <p className="mt-2 text-sm text-gray-600">{t.membership.cancelAnytime}</p>

            {/*
              Announced, not purchasable. Flip ANNUAL_PRICE_AVAILABLE once the
              provider can take it and this becomes a second option rather than
              a notice — until then it must not look like something to click.
            */}
            {!ANNUAL_PRICE_AVAILABLE && (
              <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4">
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-700">
                    {t.membership.annualComingSoon}
                  </span>
                  <span className="text-xl font-bold text-blue-900">{annualPrice}</span>
                </p>
                <p className="mt-2 text-sm text-blue-900/90 leading-relaxed">
                  {t.membership.annualNote}
                </p>
              </div>
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

          {/*
            Honorary membership is a board recognition, not a product — no
            price, not applicable for. Kept visibly separate from the dues
            block so it never reads as a tier someone could choose.
          */}
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-8 max-w-3xl">
            <h3 className="text-xl font-bold text-gray-900">{t.membership.honoraryTitle}</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">{t.membership.honoraryText}</p>
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
