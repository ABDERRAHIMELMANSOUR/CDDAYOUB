/**
 * Membership tiers (ticket 17).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PRICING REQUIRES BOARD RATIFICATION.
 *
 * The figures below are the indicative ranges from Part E4 of the blueprint,
 * not board-approved dues. `PRICING_PUBLISHED` controls whether they appear.
 *
 * It defaults to `true` because the blueprint is emphatic that opaque pricing
 * signals "you probably can't afford this" and kills exactly the SME
 * mid-market a club this size depends on. Set it to `false` to fall back to a
 * "contact us for current dues" line without touching anything else.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const PRICING_PUBLISHED = true;

export type TierId = 'individual' | 'sme' | 'corporate' | 'institutional' | 'honorary';

export interface MembershipTier {
  id: TierId;
  name: string;
  /** Who the tier is for. */
  audience: string;
  /** Annual dues in euros. Null for tiers that are not purchased. */
  priceFrom: number | null;
  priceTo: number | null;
  /** Shown instead of a price when the tier is not purchasable. */
  priceNote?: string;
  /** The single line that sells the tier. */
  headline: string;
  /**
   * Benefits written as outcomes, not abstractions. "Networking opportunities"
   * tells a prospective member nothing; naming the 23 advisors and the two
   * markets tells them what they actually get.
   */
  benefits: string[];
  /** Marks the tier the club most wants to grow. */
  featured?: boolean;
  /** Whether this tier can be applied for online. */
  applicable: boolean;
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'individual',
    name: 'Individual',
    audience: 'Professionals, consultants and diaspora entrepreneurs',
    priceFrom: 150,
    priceTo: 250,
    headline: 'Join the network as an individual professional.',
    benefits: [
      'Access to all CDD Pays-Bas events, including roundtables and community gatherings',
      'Your profile in the member directory, visible to the full network in both markets',
      'Quarterly briefings on regulation, tenders and sector openings in the Netherlands and Morocco',
      'Participation in any of the four commissions',
    ],
    applicable: true,
  },
  {
    id: 'sme',
    name: 'SME',
    audience: 'Companies under 25 FTE',
    priceFrom: 500,
    priceTo: 750,
    headline: 'Put your company inside the network, not just yourself.',
    benefits: [
      'Everything in Individual, for two named contacts from your company',
      'Places on business delegations and trade missions along the Rotterdam–Tanger Med corridor',
      'Your company profile in the member directory',
      'Introductions through the Advisory Council in your sector',
    ],
    applicable: true,
  },
  {
    id: 'corporate',
    name: 'Corporate',
    audience: 'Mid-sized and large companies',
    priceFrom: 1500,
    priceTo: 3000,
    headline: 'A seat where the agenda is set.',
    benefits: [
      'Everything in SME, for an expanded group of named contacts',
      'A seat on the commission most relevant to your business',
      'Speaking slots at CDD events and roundtables',
      'Your logo on the CDD Pays-Bas member wall',
      'Direct access to 23 senior advisors across energy, digital, logistics and talent',
    ],
    featured: true,
    applicable: true,
  },
  {
    id: 'institutional',
    name: 'Institutional / Patron',
    audience: 'Public bodies, banks, universities and foundations',
    priceFrom: 5000,
    priceTo: null,
    headline: 'Strategic partner status and co-branded programmes.',
    benefits: [
      'Everything in Corporate',
      'Strategic partner status, named on the site and in CDD communications',
      'Co-branded programmes, briefings and research',
      'Standing dialogue with the board on the bilateral agenda',
    ],
    applicable: true,
  },
  {
    id: 'honorary',
    name: 'Honorary',
    audience: 'By board invitation',
    priceFrom: null,
    priceTo: null,
    priceNote: 'By invitation',
    headline: 'Recognition for exceptional contribution to CDD Pays-Bas.',
    benefits: [
      'Extended to individuals recognised by the board for their contribution',
      'Full access to events, commissions and the member network',
    ],
    applicable: false,
  },
];

export function getTier(id: string): MembershipTier | undefined {
  return MEMBERSHIP_TIERS.find((t) => t.id === id);
}

/** Formats a tier's dues for display. */
export function formatPrice(tier: MembershipTier): string {
  if (!PRICING_PUBLISHED) return 'Contact us for current dues';
  if (tier.priceNote) return tier.priceNote;
  if (tier.priceFrom === null) return 'By invitation';
  const from = `€${tier.priceFrom.toLocaleString('nl-NL')}`;
  if (tier.priceTo === null) return `${from}+ per year`;
  return `${from}–€${tier.priceTo.toLocaleString('nl-NL')} per year`;
}

/** Why join — the outcomes, stated once and reused. */
export const WHY_JOIN: { title: string; text: string }[] = [
  {
    title: 'Access to 23 senior advisors',
    text: 'Direct access to advisors across energy and water, digital and AI, industry and logistics, and talent and society — plus the full member network in the Netherlands and Morocco.',
  },
  {
    title: 'Intelligence you can act on',
    text: 'Quarterly briefings on regulation, tenders and sector openings in both markets, from people who work in them rather than report on them.',
  },
  {
    title: 'A seat in a commission',
    text: 'Commissions are open to all members. Each commits to at least two activities a year, so participation means real work, not a mailing list.',
  },
  {
    title: 'Visibility where it counts',
    text: 'Your company profile in the member directory and speaking opportunities at CDD events, in front of decision-makers from both markets.',
  },
];
