import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useTranslation } from '../../i18n/LocaleProvider';
import { Check, ArrowRight, Users } from 'lucide-react';
import {
  MEMBERSHIP_TIERS,
  WHY_JOIN,
  formatPrice,
  PRICING_PUBLISHED,
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
              CDD Pays-Bas is a members' club. Membership gives you access to {ADVISORS.length}{' '}
              senior advisors, {COMMISSIONS.length} working commissions, and a network that spans
              the Netherlands and Morocco.
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
            Written as what you actually get, rather than as abstractions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_JOIN.map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="py-16 lg:py-24 bg-gray-50 scroll-mt-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.membership.tiers}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-12 leading-relaxed">
            {PRICING_PUBLISHED
              ? 'Annual dues, published openly. Membership runs for twelve months and is renewable.'
              : 'Membership runs for twelve months and is renewable. Contact us for current dues.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
            {MEMBERSHIP_TIERS.filter((t) => t.id !== 'honorary').map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col h-full rounded-3xl bg-white p-8 transition-all duration-300 ${
                  tier.featured
                    ? 'border-2 border-blue-600 shadow-2xl'
                    : 'border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold uppercase tracking-wide">
                    Most chosen
                  </span>
                )}

                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{tier.audience}</p>

                <p className="mt-5 text-2xl font-bold text-blue-700">{formatPrice(tier)}</p>
                <p className="mt-3 text-gray-800 leading-relaxed">{tier.headline}</p>

                <ul className="mt-6 space-y-3 flex-grow">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check
                        className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/membership/apply?tier=${tier.id}`}
                  className={`mt-8 inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    tier.featured
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/30'
                      : 'border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>

          {/* Honorary, presented separately since it is not purchasable. */}
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-8 max-w-3xl">
            <h3 className="text-xl font-bold text-gray-900">Honorary membership</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Extended by board invitation to individuals recognised for their contribution to CDD
              Pays-Bas. It cannot be applied for.
            </p>
          </div>

          {/* Payment methods */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              {t.membership.paymentNote}
            </span>
            {PAYMENT_METHODS.map((method) => (
              <span key={method.id} className="text-sm text-gray-700">
                <strong className="text-gray-900">{method.label}</strong> — {method.note}
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
            A logo wall of member and partner organisations belongs here. It is the strongest proof
            a club can offer, and it stays empty rather than filled with placeholders until there
            are real names to show.
          </p>
          <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <Users className="h-10 w-10 text-gray-500 mx-auto mb-4" aria-hidden="true" />
            <p className="text-gray-700 max-w-xl mx-auto leading-relaxed">
              Member organisations will be listed here with their consent. If your organisation is
              already working with CDD Pays-Bas and you would like to be included,{' '}
              <Link to="/contact" className="text-blue-700 underline hover:text-blue-900">
                let us know
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to join?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            The application takes a couple of minutes. We review every application and come back to
            you personally.
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
