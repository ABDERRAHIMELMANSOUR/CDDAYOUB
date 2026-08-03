import { Globe, Lightbulb, Ship, GraduationCap, type LucideIcon } from 'lucide-react';

/**
 * Canonical focus areas — the SINGLE source of truth.
 *
 * Previously the homepage listed four areas and the Focus Areas page listed six,
 * and they did not agree ("Cross-Border Collaboration" existed only on the
 * homepage; three others existed only on the Focus Areas page). Both pages now
 * read from this file, so they cannot drift apart again.
 *
 * The set is consolidated to the four standing commissions. Two former entries
 * were removed as categories because they are not sectors:
 *   - Public-Private Partnerships → a delivery method, stated on every area
 *   - Cross-Border Collaboration  → the organisation's whole mission, not one area
 * Their substance is preserved below in `method` and in the positioning line.
 */
export interface FocusArea {
  /** Commission number, used for the `Commission n — Domain` convention. */
  number: number;
  /** Short title used in navigation, tiles and headings. */
  title: string;
  /** One-line summary for homepage tiles. */
  summary: string;
  /** Fuller mandate for the Focus Areas page. */
  description: string;
  /** Concrete areas of work, absorbed from the previous six-area structure. */
  topics: string[];
  icon: LucideIcon;
  slug: string;
}

/** Applies to every area — PPP is a method, not a domain of its own. */
export const DELIVERY_METHOD =
  'Delivered through public-private partnerships between business, government and knowledge institutions.';

/** The organisation-wide positioning line, formerly listed as a focus area. */
export const POSITIONING_LINE =
  'Connecting European, Moroccan and African ecosystems.';

export const FOCUS_AREAS: FocusArea[] = [
  {
    number: 1,
    title: 'Energy & Water Transition',
    slug: 'energy-water-transition',
    summary: 'Green hydrogen, renewable energy, storage and water.',
    description:
      'Accelerating the energy and water transition between the Netherlands and Morocco, from green hydrogen and renewable generation to storage, grid infrastructure and water technology — arguably the strongest complementarity between the two countries.',
    topics: [
      'Green hydrogen and hydrogen valleys',
      'Renewable energy generation and investment',
      'Energy storage solutions',
      'Water technology, desalination and management',
      'Grid infrastructure and decarbonisation',
    ],
    icon: Globe,
  },
  {
    number: 2,
    title: 'Digital, AI & Infrastructure',
    slug: 'digital-ai-infrastructure',
    summary: 'Digital transformation, AI, smart cities and the built environment.',
    description:
      'Bridging digital and physical infrastructure: applied AI and data centres, digital twins, smart cities, and the real estate and infrastructure development that underpins them.',
    topics: [
      'Digital transformation and applied AI',
      'AI data centres and digital twin intelligence',
      'Smart cities and connected infrastructure',
      'Infrastructure and real estate development',
      'Research, development and innovation',
    ],
    icon: Lightbulb,
  },
  {
    number: 3,
    title: 'Industry, Trade & Logistics',
    slug: 'industry-trade-logistics',
    summary: 'Ports, manufacturing, agri-food and the trade corridor.',
    description:
      'Strengthening the Rotterdam–Tanger Med corridor and the industrial base around it: port operations, manufacturing, agriculture and food security, and the trade and investment flows that connect them.',
    topics: [
      'Port operations and maritime logistics',
      'Industrial manufacturing and supply chains',
      'Agriculture, horticulture and food security',
      'International trade and business expansion',
      'Investment, economy and finance',
    ],
    icon: Ship,
  },
  {
    number: 4,
    title: 'Talent, Knowledge & Society',
    slug: 'talent-knowledge-society',
    summary: 'Skills, education, labour mobility and cultural exchange.',
    description:
      'Developing the human capital behind the partnership: education and capacity building, labour market policy, leadership development, and the cultural and social ties that sustain long-term collaboration.',
    topics: [
      'Education and capacity building',
      'Talent, leadership and social impact',
      'Labour market policy and mobility',
      'Healthcare and life sciences',
      'Culture, heritage and community',
    ],
    icon: GraduationCap,
  },
];
