import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { pick } from '../../i18n/localised';
import { ArrowRight, Users } from 'lucide-react';
import { COMMISSIONS, COMMISSION_GOVERNANCE } from '../../data/commissions';
import { DELIVERY_METHOD, POSITIONING_LINE } from '../../data/commissionDomains';
import { advisorsInGroup } from '../../data/advisors';
import { PageHero } from '../PageHero';

/**
 * Commissions landing page.
 *
 * Part D0 argued for governance language over strategy language: "we focus on
 * energy" invites nothing, while "the Energy & Water Commission, chaired by X,
 * meets quarterly and is open to all participants" invites participation.
 *
 * The blueprint suggested keeping "Focus Areas" as the nav label for
 * discoverability. The board (August 2026) chose "Commissions" everywhere —
 * nav, URL and body — so the site speaks with one register. The landing page
 * still opens by explaining the mechanism, which is what makes the governance
 * word land for a first-time visitor.
 */
export function Commissions() {
  const t = useTranslation();
  const { locale } = useLocale();
  return (
    <div>
      {/* Hero */}
      <PageHero eyebrow={t.nav.commissions} title={t.commissionsIndex.title}>
        {/* The mechanism, stated in the first line (Part D0). */}
        <p>
          {t.commissionsIndex.mechanism} {pick(POSITIONING_LINE, locale)}
        </p>
        <p className="mt-4 text-base text-gray-300">{pick(DELIVERY_METHOD, locale)}</p>
      </PageHero>

      {/* The four commissions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMISSIONS.map((commission) => {
              const Icon = commission.icon;
              const count = advisorsInGroup(commission.group).length;
              return (
                <Link
                  key={commission.slug}
                  to={`/commissions/${commission.slug}`}
                  className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-300 p-8"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-700 font-semibold">
                        {t.commissions.commission} {commission.number}
                      </p>
                      <h2 className="text-xl font-bold text-gray-900 leading-tight">
                        {pick(commission.title, locale)}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed flex-grow">
                    {pick(commission.mandate, locale)}
                  </p>

                  {/* Standing facts — what makes each a body rather than a theme. */}
                  <dl className="mt-6 pt-5 border-t border-gray-100 space-y-2 text-sm">
                    <div className="flex gap-2">
                      <dt className="font-semibold text-gray-900">{t.commissions.chair}:</dt>
                      <dd className="text-gray-700">
                        {commission.chair ?? (
                          <span className="italic">{t.commissions.toBeAppointed}</span>
                        )}
                      </dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold text-gray-900">{t.commissions.cadence}:</dt>
                      <dd className="text-gray-700">{pick(commission.cadence, locale)}</dd>
                    </div>
                  </dl>
                  {/*
                    The advisor count sits OUTSIDE the <dl>. A <dl> may only
                    contain <dt>/<dd> groups (optionally wrapped in a <div>);
                    a bare icon-and-span row inside one is a WCAG structure
                    violation, flagged by axe as `definition-list`.
                  */}
                  {count > 0 && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                      <Users className="h-4 w-4 text-blue-700" aria-hidden="true" />
                      <span>
                        {count} {count === 1 ? t.commissions.advisor : t.commissions.advisors}
                      </span>
                    </p>
                  )}

                  <span className="mt-6 inline-flex items-center text-blue-700 font-semibold group-hover:text-blue-900">
                    {t.commissions.viewCommission}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How the commissions work (Part D5) */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.commissionsIndex.howTheyWork}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.commissionsIndex.rulesIntro}
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pick(COMMISSION_GOVERNANCE, locale).map((rule, i) => (
              <li
                key={rule}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex items-start gap-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-800 text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-gray-800 leading-relaxed">{rule}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.commissionsIndex.takePart}</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.commissionsIndex.takePartText}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg group"
          >
            {t.common.getInTouch}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
