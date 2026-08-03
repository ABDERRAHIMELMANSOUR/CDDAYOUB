import { useMemo, useState } from 'react';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { pick } from '../../i18n/localised';
import { Linkedin } from 'lucide-react';
import {
  ADVISORS,
  GROUP_LABELS,
  GROUP_DESCRIPTIONS,
  type Advisor,
  type AdvisorGroup,
} from '../../data/advisors';
import { COMMISSIONS } from '../../data/commissions';

/**
 * Advisory Council (ticket 16).
 *
 * Replaces a flat grid of 25 cards with sections grouped by commission, plus a
 * filter. Records come from src/data/advisors.ts so the same `group` field
 * drives both this page and the commission pages — defined once, as the ticket
 * requires, because events and insights tagging reuse the same taxonomy.
 *
 * Board officers are deliberately absent: the President and Treasurer are
 * presented on the Leadership page.
 */

/** Display order: the four commissions, then the groups that are not commissions. */
const GROUP_ORDER: AdvisorGroup[] = [
  ...COMMISSIONS.map((c) => c.group),
  'governance-public-affairs',
  'secretariat',
  'honorary',
];

/** Commission slugs, so only those sections link through to a commission page. */
const COMMISSION_GROUPS = new Set<AdvisorGroup>(COMMISSIONS.map((c) => c.group));

export function Advisors() {
  const t = useTranslation();
  const { locale } = useLocale();
  const [active, setActive] = useState<AdvisorGroup | 'all'>('all');

  const grouped = useMemo(
    () =>
      GROUP_ORDER.map((group) => ({
        group,
        label: pick(GROUP_LABELS[group], locale),
        description: GROUP_DESCRIPTIONS[group]
          ? pick(GROUP_DESCRIPTIONS[group]!, locale)
          : undefined,
        members: ADVISORS.filter((a) => a.group === group),
      })).filter((section) => section.members.length > 0),
    [locale]
  );

  const visible = active === 'all' ? grouped : grouped.filter((s) => s.group === active);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Advisory Council
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              Senior Advisory Council
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {ADVISORS.length} senior advisors across {COMMISSIONS.length} commissions, bringing
              domain expertise to the work CDD Pays-Bas convenes. Our statutory board is presented
              separately on the{' '}
              <Link to="/leadership" className="underline hover:text-white">
                Leadership page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-24 z-30 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter advisors by group">
            <FilterButton
              isActive={active === 'all'}
              onClick={() => setActive('all')}
              label={`${t.insights.all} (${ADVISORS.length})`}
            />
            {grouped.map((section) => (
              <FilterButton
                key={section.group}
                isActive={active === section.group}
                onClick={() => setActive(section.group)}
                label={`${section.label} (${section.members.length})`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grouped sections */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-20">
          {visible.map((section) => (
            <div key={section.group}>
              <div className="mb-10 max-w-3xl">
                <div className="flex flex-wrap items-baseline gap-4">
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                    {section.label}
                  </h2>
                  {COMMISSION_GROUPS.has(section.group) && (
                    <Link
                      to={`/focus-areas/${section.group}`}
                      className="text-sm font-semibold text-blue-700 hover:text-blue-900 underline"
                    >
                      View commission →
                    </Link>
                  )}
                </div>
                {section.description && (
                  <p className="mt-3 text-gray-700 leading-relaxed">{section.description}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {section.members.map((advisor) => (
                  <AdvisorCard key={advisor.name} advisor={advisor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join the Advisory Council</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            CDD Pays-Bas welcomes senior experts who share our commitment to building durable ties
            between the Netherlands and Morocco.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}

function FilterButton({
  isActive,
  onClick,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
        isActive
          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/30'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
      }`}
    >
      {label}
    </button>
  );
}

function AdvisorCard({ advisor }: { advisor: Advisor }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="p-8">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={advisor.photo}
                alt={advisor.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center leading-tight">
          {advisor.name}
        </h3>
        <p className="text-sm text-blue-700 font-medium mb-4 text-center leading-snug">
          {advisor.role}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed text-center">{advisor.bio}</p>

        {advisor.linkedin && (
          <div className="mt-6 flex justify-center">
            <a
              href={advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
              aria-label={`${advisor.name} on LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
