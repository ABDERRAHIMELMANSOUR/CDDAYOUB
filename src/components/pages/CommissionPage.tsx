import { useParams } from 'react-router-dom';
import { LocaleLink as Link, LocaleNavigate } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { pick } from '../../i18n/localised';
import { Linkedin, CalendarClock, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { getCommission, getChair } from '../../data/commissions';
import { advisorsInGroup } from '../../data/advisors';
import { eventsForCommission, formatEventDate } from '../../data/events';
import { insightsForCommission, formatInsightDate } from '../../data/insights';
import { BrandedImage } from '../BrandedImage';
import { trackEvent, GOALS } from '../../lib/analytics';
import { AdvisorAvatar } from '../AdvisorAvatar';
import { PageHero } from '../PageHero';

/**
 * Commission page template (Part D4) — one shared structure for all four.
 *
 * The section that distinguishes a body from a theme is the standing line:
 * chair, established, cadence, open to all participants. Four facts, one line. A
 * "focus area" cannot justify naming a chair or carrying a join action; a
 * commission can, and that is the whole point of the change.
 */
export function CommissionPage() {
  const t = useTranslation();
  const { locale } = useLocale();
  const { slug } = useParams<{ slug: string }>();
  const commission = slug ? getCommission(slug) : undefined;

  // Unknown slug falls back to the landing page rather than a dead end.
  if (!commission) return <LocaleNavigate to="/commissions" />;
  const chair = getChair(commission);

  const advisors = advisorsInGroup(commission.group);
  const relatedEvents = eventsForCommission(commission.group);
  const relatedInsights = insightsForCommission(commission.group);
  const Icon = commission.icon;

  return (
    <div>
      {/* Header */}
      <PageHero
        image={commission.heroImage}
        eyebrow={`${t.commissions.commission} ${commission.number}`}
        title={
          <span className="flex items-start gap-5">
            <span className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm items-center justify-center flex-shrink-0">
              <Icon className="h-8 w-8 text-cyan-200" aria-hidden="true" />
            </span>
            <span>{pick(commission.title, locale)}</span>
          </span>
        }
        above={
          <Link
            to="/commissions"
            className="inline-flex items-center text-sm text-blue-100 hover:text-white transition-colors mb-6"
          >
            ← {t.nav.allCommissions}
          </Link>
        }
      >
        {pick(commission.mandate, locale)}
      </PageHero>

      {/* Chair — the fact that turns a theme into a body, given its own card */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-10">
          {chair ? (
            <div className="flex flex-col sm:flex-row items-center gap-6 rounded-3xl border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 shadow-lg">
              <div className="w-28 h-28 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <AdvisorAvatar name={chair.name} photo={chair.photo} />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                  {t.commissions.chairTitle}
                </p>
                <p className="mt-1 text-2xl font-bold text-gray-900">{chair.name}</p>
                <p className="mt-1 text-blue-700 font-medium">{pick(chair.role, locale)}</p>
                <div className="mt-3 flex flex-wrap justify-center sm:justify-start items-center gap-4">
                  <Link
                    to="/advisors"
                    className="text-sm font-medium text-blue-700 underline hover:text-blue-900"
                  >
                    {t.commissions.chairProfile}
                  </Link>
                  {chair.linkedin && (
                    <a
                      href={chair.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      LinkedIn
                      <span className="sr-only"> — {chair.name}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /*
             * No chair appointed. Rendered as an openly pending seat rather
             * than hidden: D5 makes the chair the thing that distinguishes a
             * commission from a focus area, so silence here would quietly
             * undo the governance claim the page is making.
             */
            <div className="rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-600">
                {t.commissions.chairTitle}
              </p>
              <p className="mt-1 text-xl font-bold text-gray-800">{t.commissions.chairPending}</p>
              <p className="mt-2 text-gray-700 leading-relaxed max-w-2xl">
                {t.commissions.chairPendingText}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Standing line — what makes this a body rather than a theme */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-6">
          <dl className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-700" aria-hidden="true" />
              <dt className="font-semibold text-blue-900">{t.commissions.chair}:</dt>
              <dd className="text-gray-800">
                {commission.chair ?? (
                  <span className="italic text-gray-700">{t.commissions.toBeAppointed}</span>
                )}
              </dd>
            </div>
            {commission.established && (
              <div className="flex items-center gap-2">
                <dt className="font-semibold text-blue-900">{t.commissions.established}:</dt>
                <dd className="text-gray-800">{commission.established}</dd>
              </div>
            )}
            <div className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-blue-700" aria-hidden="true" />
              <dt className="sr-only">{t.commissions.cadence}</dt>
              <dd className="text-gray-800">{pick(commission.cadence, locale)}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">{t.nav.membership}</dt>
              <dd className="text-gray-800">{t.commissions.openToMembers}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* The NL–MA opportunity */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">{t.commissions.opportunity}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{pick(commission.opportunity, locale)}</p>
          </div>
          <div className="h-72 lg:h-80">
            <BrandedImage
              label={`${t.commissions.commission} ${commission.number}`}
              title={pick(commission.title, locale)}
              caption={pick(commission.summary, locale)}
              icon={Icon}
            />
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.commissions.whatWeDo}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pick(commission.activities, locale).map((activity) => (
              <div
                key={activity}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-gray-800 leading-relaxed">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chair & advisors */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.commissions.chairAndAdvisors}</h2>
          <p className="text-gray-700 mb-10 max-w-3xl leading-relaxed">
            {t.commissions.advisorsIntro}{' '}
            <Link to="/advisors" className="text-blue-700 underline hover:text-blue-900">
              {t.nav.advisoryCouncil}
            </Link>
            .
          </p>

          {advisors.length === 0 ? (
            <p className="text-gray-700 italic">{t.commissions.advisorsPending}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {advisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center"
                >
                  <div className="mb-5 flex justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <AdvisorAvatar name={advisor.name} photo={advisor.photo} />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 leading-tight">{advisor.name}</h3>
                  <p className="text-sm text-blue-700 mt-1 leading-snug">{pick(advisor.role, locale)}</p>
                  {advisor.linkedin && (
                    <a
                      href={advisor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-3 text-gray-600 hover:text-blue-700 transition-colors"
                      aria-label={`${advisor.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Current priorities */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{t.commissions.currentPriorities}</h2>
            <p className="text-sm text-gray-700">{t.commissions.refreshedQuarterly}</p>
          </div>
          <ol className="space-y-5">
            {pick(commission.priorities, locale).map((priority, i) => (
              <li key={priority} className="flex items-start gap-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-lg text-gray-800 leading-relaxed pt-1.5">{priority}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Governance & trust note */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="rounded-3xl border border-gray-200 p-8 lg:p-10 flex flex-col sm:flex-row gap-6">
            <ShieldCheck className="h-10 w-10 text-blue-700 flex-shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.commissions.governanceTrust}</h2>
              <p className="text-gray-700 leading-relaxed">{pick(commission.governanceNote, locale)}</p>
            </div>
          </div>
        </div>
      </section>

      {/*
        Related events and insights, auto-populated by tag.

        This is what makes commission pages self-maintaining rather than another
        set of pages that go stale: anything tagged with this commission in
        events.ts or insights.ts appears here without being cross-referenced by
        hand.
      */}
      {(relatedEvents.length > 0 || relatedInsights.length > 0) && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {relatedEvents.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.commissions.relatedEvents}</h2>
                <ul className="space-y-4">
                  {relatedEvents.map((event) => (
                    <li key={event.slug} className="rounded-2xl bg-white border border-gray-100 p-5">
                      <p className="text-sm text-gray-700">{formatEventDate(event.date, locale)}</p>
                      <p className="font-semibold text-gray-900 mt-1">{pick(event.title, locale)}</p>
                      <p className="text-sm text-gray-700 mt-1">{event.location}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/events"
                  className="inline-block mt-5 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  {t.commissions.allEvents} →
                </Link>
              </div>
            )}

            {relatedInsights.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.commissions.relatedInsights}</h2>
                <ul className="space-y-4">
                  {relatedInsights.map((insight) => (
                    <li key={insight.slug}>
                      <Link
                        to={`/insights/${insight.slug}`}
                        className="block rounded-2xl bg-white border border-gray-100 p-5 hover:border-blue-200 transition-colors"
                      >
                        <p className="text-sm text-gray-700">{formatInsightDate(insight.date, locale)}</p>
                        <p className="font-semibold text-gray-900 mt-1">{pick(insight.title, locale)}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/insights"
                  className="inline-block mt-5 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  {t.commissions.allInsights} →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Join CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t.commissions.joinNamed.replace('{name}', pick(commission.title, locale))}
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.commissions.joinText}
          </p>
          {/*
            D5: "joining takes one click from the commission page". This goes to
            the membership application with this commission preselected, rather
            than to a general contact form where the visitor has to re-explain
            which commission they meant.
          */}
          <Link
            to={`/membership/apply?commission=${encodeURIComponent(pick(commission.title, locale))}`}
            onClick={() => trackEvent(GOALS.commissionInterest, { commission: commission.slug })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg group"
          >
            {t.commissions.joinCommission}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
