import type { AdvisorGroup } from './advisors';

/**
 * Insights (ticket 20).
 *
 * Uses the SAME `AdvisorGroup` taxonomy as advisors and events, which is the
 * point of the ticket: one tagging vocabulary shared across commissions,
 * events and articles, so commission pages auto-populate and nothing has to be
 * cross-referenced by hand.
 *
 * The publishing cadence metric (≥2 items per month) is the one the blueprint
 * warns always slips and matters most. A structurally excellent site with
 * nothing new for four months reads exactly like the old Events page — so this
 * repository is deliberately simple to add to: append an entry, and it appears
 * on Insights, in its category, and on every commission it is tagged with.
 */
export type InsightCategory = 'news' | 'spotlight' | 'briefing';

export const INSIGHT_CATEGORY_LABELS: Record<InsightCategory, string> = {
  news: 'News',
  spotlight: 'Member & Advisor Spotlight',
  briefing: 'Market Briefing',
};

export const INSIGHT_CATEGORY_BLURBS: Record<InsightCategory, string> = {
  news: 'Announcements and developments from CDD Pays-Bas.',
  spotlight: 'The people in the network, and the work they do.',
  briefing: 'Regulation, tenders and sector openings in both markets.',
};

export interface Insight {
  slug: string;
  title: string;
  /** ISO date. */
  date: string;
  category: InsightCategory;
  /** Commissions this piece belongs to — drives auto-population. */
  commissions: AdvisorGroup[];
  /** Byline. */
  author?: string;
  /** One-paragraph summary used in listings and as the meta description. */
  summary: string;
  /** Body, as paragraphs. */
  body: string[];
  /** Marks the piece for the homepage. */
  featured?: boolean;
}

/**
 * Seeded with the two pieces the organisation can honestly publish today: the
 * commission structure, and a recap of the Iftar. Both are real; neither
 * invents activity that has not happened.
 */
export const INSIGHTS: Insight[] = [
  {
    slug: 'cdd-pays-bas-organises-around-four-commissions',
    title: 'CDD Pays-Bas organises its work around four commissions',
    date: '2026-07-28',
    category: 'news',
    commissions: [],
    author: 'CDD Pays-Bas',
    featured: true,
    summary:
      'The club is moving from stated focus areas to four standing commissions, each with a chair, a mandate, a meeting cadence and an obligation to report to the board.',
    body: [
      'CDD Pays-Bas is restructuring how it works. Where the organisation previously described focus areas — a strategy vocabulary that carries no governance meaning — it now organises its work through four standing commissions: Energy & Water Transition, Digital, AI & Infrastructure, Industry, Trade & Logistics, and Talent, Knowledge & Society.',
      'The distinction matters. A focus area invites nothing. A commission has a chair appointed by the board for a two-year term, a published mandate, a meeting cadence, and an obligation to report. It is something a member can join and something the board can review.',
      'Each commission commits to a minimum of two activities a year — a roundtable, briefing, mission segment or working paper — and publishes three current priorities, refreshed quarterly. The board reviews commission activity annually and may merge or sunset a commission that has gone dormant. That last rule is deliberate: it is the safeguard against announcing four commissions and running two.',
      'Membership of a commission is open to any CDD member. The senior advisors already on the Advisory Council map onto the four bodies almost completely, which means the structure reflects expertise the club already has rather than expertise it hopes to recruit.',
    ],
  },
  {
    slug: 'first-collective-iftar-recap',
    title: 'Recap: our first collective Iftar',
    date: '2026-03-05',
    category: 'news',
    commissions: [],
    author: 'CDD Pays-Bas',
    summary:
      'The first gathering of the CDD Pays-Bas network brought members together in Rotterdam for an evening built around connection rather than agenda.',
    body: [
      'In February, CDD Pays-Bas held its first collective Iftar in Rotterdam. It was the first time the network convened as a group, and it was designed deliberately as a human occasion rather than a business one.',
      'Guests shared a meal, heard reflections on the role CDD Pays-Bas plays as a bridge between the Netherlands and Morocco, and spent the evening in conversation across sectors that rarely meet in the same room — energy, logistics, law, education and technology.',
      'Several of those conversations have since turned into working discussions. That is the point of convening: relationships formed away from a transaction tend to be the ones that produce transactions later.',
      'The evening set the tone for how CDD Pays-Bas gathers — neutral, respectful, open and personal — and it is the model for the roundtables and briefings the commissions will run through the year.',
    ],
  },
];

export function sortedInsights(): Insight[] {
  return [...INSIGHTS].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function insightsInCategory(category: InsightCategory): Insight[] {
  return sortedInsights().filter((i) => i.category === category);
}

/** Insights tagged to a commission — used to auto-populate commission pages. */
export function insightsForCommission(group: AdvisorGroup): Insight[] {
  return sortedInsights().filter((i) => i.commissions.includes(group));
}

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}

export function formatInsightDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
