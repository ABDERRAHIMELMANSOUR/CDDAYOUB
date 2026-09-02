import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LocaleLink as Link, LocaleNavigate } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { pick } from '../../i18n/localised';
import {
  sortedInsights,
  getInsight,
  formatInsightDate,
  INSIGHT_CATEGORY_LABELS,
  INSIGHT_CATEGORY_BLURBS,
  type Insight,
  type InsightCategory,
} from '../../data/insights';
import { GROUP_LABELS, type AdvisorGroup } from '../../data/advisors';
import { LinkedInFeed } from '../LinkedInFeed';
import { PhotoOrPlaceholder } from '../PhotoOrPlaceholder';
import { PageHero } from '../PageHero';

/**
 * Insights (ticket 20).
 *
 * Articles are tagged with the same commission taxonomy used by advisors and
 * events, so a piece filed against a commission surfaces on that commission's
 * page automatically — no cross-referencing by hand.
 */
export function Insights() {
  const t = useTranslation();
  const { locale } = useLocale();
  const [category, setCategory] = useState<InsightCategory | 'all'>('all');
  const all = sortedInsights();
  const items = category === 'all' ? all : all.filter((i) => i.category === category);

  return (
    <div>
      <PageHero eyebrow={t.nav.insights} title={t.insights.title}>
        {t.insights.subtitle}
      </PageHero>

      {/* Category filter */}
      <section className="sticky top-24 z-30 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-4 flex flex-wrap gap-2">
          <CategoryChip active={category === 'all'} onClick={() => setCategory('all')}>
            {t.insights.all} ({all.length})
          </CategoryChip>
          {(Object.keys(INSIGHT_CATEGORY_LABELS) as InsightCategory[]).map((key) => {
            const count = all.filter((i) => i.category === key).length;
            return (
              <CategoryChip key={key} active={category === key} onClick={() => setCategory(key)}>
                {pick(INSIGHT_CATEGORY_LABELS[key], locale)} ({count})
              </CategoryChip>
            );
          })}
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          {category !== 'all' && (
            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
              {pick(INSIGHT_CATEGORY_BLURBS[category], locale)}
            </p>
          )}

          {items.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <p className="text-gray-800 font-medium">{t.insights.nothingPublished}</p>
              <p className="mt-2 text-gray-700">{t.insights.cadenceNote}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Posts from the CDD LinkedIn page — see src/lib/linkedin.ts. */}
      <LinkedInFeed />
    </div>
  );
}

/** Single article. */
export function InsightArticle() {
  const t = useTranslation();
  const { locale } = useLocale();
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsight(slug) : undefined;
  if (!insight) return <LocaleNavigate to="/insights" />;

  return (
    <div>
      <PageHero
        size="compact"
        eyebrow={pick(INSIGHT_CATEGORY_LABELS[insight.category], locale)}
        title={pick(insight.title, locale)}
        above={
          <Link
            to="/insights"
            className="inline-flex items-center text-sm text-blue-100 hover:text-white transition-colors mb-5"
          >
            ← {t.insights.backToInsights}
          </Link>
        }
      >
        <p className="text-base text-gray-300">
          {formatInsightDate(insight.date, locale)}
          {insight.author ? ` · ${insight.author}` : ''}
        </p>
      </PageHero>

      <article className="py-14 lg:py-16 bg-white">
        <div className="max-w-[820px] mx-auto px-6 lg:px-12">
          <p className="text-xl text-gray-800 leading-relaxed font-medium">{pick(insight.summary, locale)}</p>
          <div className="mt-8 space-y-6">
            {pick(insight.body, locale).map((paragraph, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {insight.gallery && insight.gallery.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-5">
                {t.insights.galleryTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {insight.gallery.map((photo) => (
                  <figure key={photo.src} className="m-0">
                    {/*
                      16/10 and object-contain, not 4/3 and cover. These are
                      group photographs: a 1.85:1 or 2.38:1 frame squeezed into
                      a 4:3 box lost both its edges, and the edges are where
                      the people at the ends of the table are standing.
                    */}
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900">
                      <PhotoOrPlaceholder
                        src={photo.src}
                        alt={pick(photo.alt, locale)}
                        label={t.insights.galleryTitle}
                        title={pick(insight.title, locale)}
                        variant="deep"
                        fit="contain"
                        className="rounded-2xl"
                      />
                    </div>
                    {/* The alt text describes the image for someone who cannot
                        see it; the caption repeats it for everyone else. */}
                    <figcaption className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {pick(photo.alt, locale)}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {insight.commissions.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3">
                {t.insights.relatedCommissions}
              </h2>
              <CommissionTags groups={insight.commissions} />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

function CategoryChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
        active
          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/30'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  );
}

function CommissionTags({ groups }: { groups: AdvisorGroup[] }) {
  const { locale } = useLocale();
  return (
    <div className="flex flex-wrap gap-2">
      {groups.map((group) => (
        <Link
          key={group}
          to={`/commissions/${group}`}
          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100"
        >
          {pick(GROUP_LABELS[group], locale)}
        </Link>
      ))}
    </div>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  const t = useTranslation();
  const { locale } = useLocale();
  return (
    <Link
      to={`/insights/${insight.slug}`}
      className="flex flex-col rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white p-7"
    >
      <span className="text-xs font-bold uppercase tracking-wide text-blue-800">
        {pick(INSIGHT_CATEGORY_LABELS[insight.category], locale)}
      </span>
      <h2 className="mt-3 text-xl font-bold text-gray-900 leading-tight">
        {pick(insight.title, locale)}
      </h2>
      <p className="mt-1 text-sm text-gray-700">{formatInsightDate(insight.date, locale)}</p>
      <p className="mt-4 text-gray-700 leading-relaxed flex-grow">{pick(insight.summary, locale)}</p>
      <span className="mt-5 text-sm font-semibold text-blue-700">{t.insights.readMore} →</span>
    </Link>
  );
}
