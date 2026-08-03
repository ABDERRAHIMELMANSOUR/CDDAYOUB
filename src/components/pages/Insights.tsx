import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useTranslation } from '../../i18n/LocaleProvider';
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

/**
 * Insights (ticket 20).
 *
 * Articles are tagged with the same commission taxonomy used by advisors and
 * events, so a piece filed against a commission surfaces on that commission's
 * page automatically — no cross-referencing by hand.
 */
export function Insights() {
  const t = useTranslation();
  const [category, setCategory] = useState<InsightCategory | 'all'>('all');
  const all = sortedInsights();
  const items = category === 'all' ? all : all.filter((i) => i.category === category);

  return (
    <div>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.nav.insights}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              {t.insights.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t.insights.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-24 z-30 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-4 flex flex-wrap gap-2">
          <CategoryChip active={category === 'all'} onClick={() => setCategory('all')}>
            All ({all.length})
          </CategoryChip>
          {(Object.keys(INSIGHT_CATEGORY_LABELS) as InsightCategory[]).map((key) => {
            const count = all.filter((i) => i.category === key).length;
            return (
              <CategoryChip key={key} active={category === key} onClick={() => setCategory(key)}>
                {INSIGHT_CATEGORY_LABELS[key]} ({count})
              </CategoryChip>
            );
          })}
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          {category !== 'all' && (
            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
              {INSIGHT_CATEGORY_BLURBS[category]}
            </p>
          )}

          {items.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <p className="text-gray-800 font-medium">Nothing published in this category yet.</p>
              <p className="mt-2 text-gray-700">
                CDD Pays-Bas aims to publish at least two items a month.
              </p>
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
    </div>
  );
}

/** Single article. */
export function InsightArticle() {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsight(slug) : undefined;
  if (!insight) return <Navigate to="/insights" replace />;

  return (
    <div>
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="relative max-w-[820px] mx-auto px-6 lg:px-12">
          <Link
            to="/insights"
            className="inline-flex items-center text-sm text-blue-200 hover:text-white transition-colors mb-5"
          >
            ← Insights
          </Link>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            {INSIGHT_CATEGORY_LABELS[insight.category]}
          </p>
          <h1 className="mt-3 text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            {insight.title}
          </h1>
          <p className="mt-4 text-gray-300">
            {formatInsightDate(insight.date)}
            {insight.author ? ` · ${insight.author}` : ''}
          </p>
        </div>
      </section>

      <article className="py-14 lg:py-16 bg-white">
        <div className="max-w-[820px] mx-auto px-6 lg:px-12">
          <p className="text-xl text-gray-800 leading-relaxed font-medium">{insight.summary}</p>
          <div className="mt-8 space-y-6">
            {insight.body.map((paragraph, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {insight.commissions.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3">
                Related commissions
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
  return (
    <div className="flex flex-wrap gap-2">
      {groups.map((group) => (
        <Link
          key={group}
          to={`/focus-areas/${group}`}
          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100"
        >
          {GROUP_LABELS[group]}
        </Link>
      ))}
    </div>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      to={`/insights/${insight.slug}`}
      className="flex flex-col rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white p-7"
    >
      <span className="text-xs font-bold uppercase tracking-wide text-blue-800">
        {INSIGHT_CATEGORY_LABELS[insight.category]}
      </span>
      <h2 className="mt-3 text-xl font-bold text-gray-900 leading-tight">{insight.title}</h2>
      <p className="mt-1 text-sm text-gray-700">{formatInsightDate(insight.date)}</p>
      <p className="mt-4 text-gray-700 leading-relaxed flex-grow">{insight.summary}</p>
      <span className="mt-5 text-sm font-semibold text-blue-700">Read more →</span>
    </Link>
  );
}
