import { FOCUS_AREAS, type FocusArea } from './focusAreas';
import type { AdvisorGroup } from './advisors';

/**
 * The four standing commissions.
 *
 * Part D0 of the blueprint: "Focus Areas" stays as the navigation label because
 * it is plain and discoverable, but the bodies themselves are commissions —
 * governance language, with a chair, a mandate, a cadence and an obligation to
 * report to the board. A page that says "we focus on energy" invites nothing;
 * a page that says "the Energy & Water Commission, chaired by X, meets
 * quarterly and is open to all members" invites participation.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ACTION REQUIRED — chairs are a board appointment, not a developer decision.
 *
 * `chair` is null for all four. Per D3 this is a phone call to advisors who
 * have already agreed to advise, not a recruitment problem — but until the
 * board appoints them, the standing line renders honestly as "chair to be
 * appointed" rather than naming someone who has not agreed.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export interface Commission extends FocusArea {
  /** Commission slug doubles as the advisor group key. */
  group: AdvisorGroup;
  /** One-sentence mandate shown under the page header. */
  mandate: string;
  /** Name of the chair, drawn from the Advisory Council. Null until appointed. */
  chair: string | null;
  /** Year the commission was established. Null until the board confirms. */
  established: string | null;
  /** Meeting cadence, e.g. "Meets quarterly". */
  cadence: string;
  /** The NL–MA opportunity: 3–4 sentences with one hard data point. */
  opportunity: string;
  /** What the commission actually does. */
  activities: string[];
  /** Three current priorities, refreshed quarterly. */
  priorities: string[];
  /** The cross-cutting governance & trust layer as it applies here. */
  governanceNote: string;
}

/** Governance rules published on the landing page (Part D5). */
export const COMMISSION_GOVERNANCE: string[] = [
  'Each commission has a chair appointed by the board for a two-year term, drawn from the Advisory Council, with an optional vice-chair.',
  'Each commits to a minimum of two activities per year — a roundtable, briefing, mission segment, or working paper.',
  'Each publishes three current priorities, refreshed quarterly.',
  'Membership is open to any CDD member; joining takes one click from the commission page.',
  'The board reviews commission activity annually and may merge or sunset a dormant commission.',
];

/** Extra detail per commission, merged with the shared focus-area records. */
const DETAIL: Record<
  string,
  Omit<Commission, keyof FocusArea | 'group'>
> = {
  'energy-water-transition': {
    mandate:
      'To advance Dutch–Moroccan cooperation in renewable energy, hydrogen, storage and water, and to turn that cooperation into concrete projects.',
    chair: null,
    established: null,
    cadence: 'Meets quarterly',
    opportunity:
      'Morocco has committed to sourcing over half its installed electricity capacity from renewables and is building green hydrogen capacity aimed squarely at the European market. The Netherlands holds the receiving infrastructure, the port capacity and the water technology. Water is arguably the single strongest complementarity between the two countries — which is why it is named in this commission rather than buried as a horizontal theme.',
    activities: [
      'Roundtables bringing Dutch and Moroccan operators around specific projects',
      'Technical missions to hydrogen, solar and water infrastructure sites',
      'Briefings on tenders, subsidy instruments and regulatory change in both markets',
      'Matchmaking between developers, investors and technology suppliers',
    ],
    priorities: [
      'Map the Dutch–Moroccan green hydrogen value chain and identify where CDD members already sit within it.',
      'Convene a first roundtable on water technology transfer, the area with the clearest mutual need.',
      'Recruit a water specialist to the Advisory Council — the one obvious gap on an otherwise deep bench.',
    ],
    governanceNote:
      'Energy and water projects are long-horizon and regulator-facing. Work in this commission is framed by EU and Dutch permitting requirements, grid access rules, and the data-governance obligations attached to operational technology in critical infrastructure.',
  },
  'digital-ai-infrastructure': {
    mandate:
      'To connect Dutch and Moroccan capability in applied AI, data infrastructure and the built environment, with governance and trust built in from the start.',
    chair: null,
    established: null,
    cadence: 'Meets quarterly',
    opportunity:
      'Morocco Digital 2030 sets out national ambitions in digitalisation, data centres and AI capability, at the same time as Dutch firms are seeking nearshore capacity and talent within a compatible time zone. The opportunity is not offshoring; it is joint capability. Digital twins, smart-city instrumentation and AI data centres are where the two markets have complementary strengths rather than competing ones.',
    activities: [
      'Briefings on the EU AI Act, NIS2 and what they mean for cross-border projects',
      'Roundtables on digital twins, smart cities and data-centre development',
      'Matchmaking between Dutch technology firms and Moroccan engineering capacity',
      'Working papers on nearshore delivery models that survive procurement review',
    ],
    priorities: [
      'Publish a short briefing on EU AI Act obligations for members operating across both markets.',
      'Convene Dutch and Moroccan participants around one concrete digital-twin or smart-city use case.',
      'Recruit a cybersecurity and data-governance advisor — the highest-value single addition to the council.',
    ],
    governanceNote:
      'This commission carries the cross-cutting trust layer most directly: EU AI Act enforcement, NIS2, ISO 42001, GDPR and CNDP alignment, and OT/IT convergence. No comparable bilateral club runs this layer, which makes it a genuine differentiator rather than a compliance overhead.',
  },
  'industry-trade-logistics': {
    mandate:
      'To strengthen the Rotterdam–Tanger Med corridor and the industrial, agricultural and trade relationships that run along it.',
    chair: null,
    established: null,
    cadence: 'Meets quarterly',
    opportunity:
      'Tanger Med is among the largest container ports in the Mediterranean and Rotterdam is the largest in Europe; the corridor between them is the physical spine of the Dutch–Moroccan economic relationship. Morocco is simultaneously a major supplier of fresh produce to Dutch and European markets and a growing automotive and aerospace manufacturing base. The port operations, horticulture and trade expertise already sitting on the Advisory Council map directly onto this corridor.',
    activities: [
      'Roundtables on port, logistics and supply-chain resilience',
      'Trade missions and delegation segments along the corridor',
      'Briefings on customs, standards and market-access requirements',
      'Introductions between Dutch buyers and Moroccan producers and manufacturers',
    ],
    priorities: [
      'Document the Rotterdam–Tanger Med corridor as a member-facing map of who does what, and where the gaps are.',
      'Run a first briefing on market-access and standards requirements for agri-food exporters.',
      'Identify two manufacturing or logistics projects where CDD members can realistically partner.',
    ],
    governanceNote:
      'Trade and logistics work touches customs regimes, product standards and increasingly supply-chain due diligence obligations under EU law. The commission frames its work so that members can act on opportunities without falling foul of them.',
  },
  'talent-knowledge-society': {
    mandate:
      'To develop the human capital, institutional knowledge and cultural understanding that make the Dutch–Moroccan partnership durable.',
    chair: null,
    established: null,
    cadence: 'Meets quarterly',
    opportunity:
      'A significant Moroccan diaspora in the Netherlands represents an underused bridge: bilingual, bicultural, and often already operating professionally in both markets. At the same time, Dutch employers face structural shortages in technical and care occupations while Morocco produces engineering and technical graduates at scale. The constraint is not the supply of talent but the absence of structured pathways, recognition of qualifications, and the cultural fluency that makes placements last.',
    activities: [
      'Roundtables on labour mobility, qualification recognition and retention',
      'Executive education and knowledge-transfer partnerships between institutions',
      'Programmes engaging diaspora professionals as a bridge between both markets',
      'Cultural and community initiatives that sustain the relationship beyond transactions',
    ],
    priorities: [
      'Map existing qualification-recognition pathways between the two countries and where they break down.',
      'Convene employers and educators around one concrete skills-shortage occupation.',
      'Recruit a health or life-sciences advisor if health is to be a genuine theme rather than a label.',
    ],
    governanceNote:
      'Work involving individuals, mobility and employment carries data-protection and equal-treatment obligations. The commission holds to the same governance and trust standards as the rest of the organisation, particularly where personal data crosses borders.',
  },
};

export const COMMISSIONS: Commission[] = FOCUS_AREAS.map((area) => ({
  ...area,
  group: area.slug as AdvisorGroup,
  ...DETAIL[area.slug],
}));

export function getCommission(slug: string): Commission | undefined {
  return COMMISSIONS.find((c) => c.slug === slug);
}
