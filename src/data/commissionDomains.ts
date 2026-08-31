import { Globe, Lightbulb, Ship, GraduationCap, type LucideIcon } from 'lucide-react';
import type { Localised } from '../i18n/localised';

/**
 * The four commission domains — the SINGLE source of truth.
 *
 * Previously the homepage listed four "focus areas" and the Focus Areas page
 * listed six, and they did not agree. Both pages now read from this file, so
 * they cannot drift apart again.
 *
 * The set is consolidated to the four standing commissions. Two former entries
 * were removed as categories because they are not sectors:
 *   - Public-Private Partnerships → a delivery method, stated on every page
 *   - Cross-Border Collaboration  → the organisation's whole mission, not one domain
 * Their substance is preserved below in `DELIVERY_METHOD` and `POSITIONING_LINE`.
 *
 * This file holds the DOMAIN of each commission — number, title, summary,
 * topics. The governance layer that turns a domain into a standing body —
 * chair, mandate, cadence, priorities — lives in commissions.ts, which composes
 * the two.
 */
export interface CommissionDomain {
  /** Commission number, used for the `Commission n — Domain` convention. */
  number: number;
  /** Short title used in navigation, tiles and headings. */
  title: Localised<string>;
  /** One-line summary for homepage tiles. */
  summary: Localised<string>;
  /** Fuller mandate for the commissions landing page. */
  description: Localised<string>;
  /** Concrete areas of work, absorbed from the previous six-area structure. */
  topics: Localised<string[]>;
  icon: LucideIcon;
  slug: string;
  /**
   * Background photograph for the commission's page header, as a path under
   * public/media/.
   *
   * ───────────────────────────────────────────────────────────────────────
   * THESE FILES ARE NOT IN THE REPOSITORY YET.
   *
   * The paths are committed ahead of the photographs on purpose. PageHero's
   * backdrop hides itself if the file 404s, so each header renders exactly
   * the gradient it does today until a JPEG is dropped in at the filename
   * below — then it appears on the next deploy with no code change.
   *
   * No stock photography has been chosen here. A licensed image of somebody
   * else's wind farm is a claim about work CDD has not done, and the licence
   * terms are a decision for the secretariat rather than a build step. See
   * docs/photography.md for sizing and sourcing guidance.
   * ───────────────────────────────────────────────────────────────────────
   */
  heroImage: string | null;
}

/** Applies to every commission — PPP is a method, not a domain of its own. */
export const DELIVERY_METHOD: Localised<string> = {
  en: 'Delivered through public-private partnerships between business, government and knowledge institutions.',
  nl: 'Gerealiseerd via publiek-private samenwerking tussen bedrijfsleven, overheid en kennisinstellingen.',
  fr: 'Mis en œuvre par des partenariats public-privé entre entreprises, pouvoirs publics et institutions de savoir.',
};

/** The organisation-wide positioning line, formerly listed as a focus area. */
export const POSITIONING_LINE: Localised<string> = {
  en: 'Connecting European, Moroccan and African ecosystems.',
  nl: 'Verbindt Europese, Marokkaanse en Afrikaanse ecosystemen.',
  fr: 'Relie les écosystèmes européens, marocains et africains.',
};

export const COMMISSION_DOMAINS: CommissionDomain[] = [
  {
    number: 1,
    slug: 'energy-water-transition',
    heroImage: '/media/commission-energy-water.jpg',
    icon: Globe,
    title: {
      en: 'Energy & Water Transition',
      nl: 'Energie- & watertransitie',
      fr: 'Transition énergétique & hydrique',
    },
    summary: {
      en: 'Green hydrogen, renewable energy, storage and water.',
      nl: 'Groene waterstof, hernieuwbare energie, opslag en water.',
      fr: 'Hydrogène vert, énergies renouvelables, stockage et eau.',
    },
    description: {
      en: 'Accelerating the energy and water transition between the Netherlands and Morocco, from green hydrogen and renewable generation to storage, grid infrastructure and water technology — arguably the strongest complementarity between the two countries.',
      nl: 'Het versnellen van de energie- en watertransitie tussen Nederland en Marokko, van groene waterstof en hernieuwbare opwekking tot opslag, netinfrastructuur en watertechnologie — misschien wel de sterkste complementariteit tussen beide landen.',
      fr: "Accélérer la transition énergétique et hydrique entre les Pays-Bas et le Maroc, de l'hydrogène vert et la production renouvelable au stockage, aux infrastructures de réseau et aux technologies de l'eau — sans doute la complémentarité la plus forte entre les deux pays.",
    },
    topics: {
      en: [
        'Green hydrogen and hydrogen valleys',
        'Renewable energy generation and investment',
        'Energy storage solutions',
        'Water technology, desalination and management',
        'Grid infrastructure and decarbonisation',
      ],
      nl: [
        'Groene waterstof en waterstofvalleien',
        'Opwekking van en investering in hernieuwbare energie',
        'Oplossingen voor energieopslag',
        'Watertechnologie, ontzilting en waterbeheer',
        'Netinfrastructuur en verduurzaming',
      ],
      fr: [
        "Hydrogène vert et vallées de l'hydrogène",
        'Production et investissement dans les énergies renouvelables',
        "Solutions de stockage d'énergie",
        "Technologies de l'eau, dessalement et gestion",
        'Infrastructures de réseau et décarbonation',
      ],
    },
  },
  {
    number: 2,
    slug: 'digital-ai-infrastructure',
    heroImage: '/media/commission-digital-ai.jpg',
    icon: Lightbulb,
    title: {
      en: 'Digital, AI & Infrastructure',
      nl: 'Digitaal, AI & infrastructuur',
      fr: 'Numérique, IA & infrastructures',
    },
    summary: {
      en: 'Digital transformation, AI, smart cities and the built environment.',
      nl: 'Digitale transformatie, AI, slimme steden en de gebouwde omgeving.',
      fr: 'Transformation numérique, IA, villes intelligentes et cadre bâti.',
    },
    description: {
      en: 'Bridging digital and physical infrastructure: applied AI and data centres, digital twins, smart cities, and the real estate and infrastructure development that underpins them.',
      nl: 'Het verbinden van digitale en fysieke infrastructuur: toegepaste AI en datacenters, digital twins, slimme steden, en de vastgoed- en infrastructuurontwikkeling die daaraan ten grondslag ligt.',
      fr: "Relier infrastructures numériques et physiques : IA appliquée et centres de données, jumeaux numériques, villes intelligentes, et le développement immobilier et d'infrastructures qui les soutient.",
    },
    topics: {
      en: [
        'Digital transformation and applied AI',
        'AI data centres and digital twin intelligence',
        'Smart cities and connected infrastructure',
        'Infrastructure and real estate development',
        'Research, development and innovation',
      ],
      nl: [
        'Digitale transformatie en toegepaste AI',
        'AI-datacenters en digital twin-intelligentie',
        'Slimme steden en verbonden infrastructuur',
        'Infrastructuur- en vastgoedontwikkeling',
        'Onderzoek, ontwikkeling en innovatie',
      ],
      fr: [
        'Transformation numérique et IA appliquée',
        'Centres de données IA et intelligence des jumeaux numériques',
        'Villes intelligentes et infrastructures connectées',
        "Développement d'infrastructures et d'immobilier",
        'Recherche, développement et innovation',
      ],
    },
  },
  {
    number: 3,
    slug: 'industry-trade-logistics',
    heroImage: '/media/commission-industry-logistics.jpg',
    icon: Ship,
    title: {
      en: 'Industry, Trade & Logistics',
      nl: 'Industrie, handel & logistiek',
      fr: 'Industrie, commerce & logistique',
    },
    summary: {
      en: 'Ports, manufacturing, agri-food and the trade corridor.',
      nl: 'Havens, maakindustrie, agrifood en de handelscorridor.',
      fr: 'Ports, industrie manufacturière, agroalimentaire et corridor commercial.',
    },
    description: {
      en: 'Strengthening the Rotterdam–Tanger Med corridor and the industrial base around it: port operations, manufacturing, agriculture and food security, and the trade and investment flows that connect them.',
      nl: 'Het versterken van de corridor Rotterdam–Tanger Med en de industriële basis daaromheen: havenactiviteiten, maakindustrie, landbouw en voedselzekerheid, en de handels- en investeringsstromen die deze verbinden.',
      fr: "Renforcer le corridor Rotterdam–Tanger Med et la base industrielle qui l'entoure : activités portuaires, industrie manufacturière, agriculture et sécurité alimentaire, ainsi que les flux commerciaux et d'investissement qui les relient.",
    },
    topics: {
      en: [
        'Port operations and maritime logistics',
        'Industrial manufacturing and supply chains',
        'Agriculture, horticulture and food security',
        'International trade and business expansion',
        'Investment, economy and finance',
      ],
      nl: [
        'Havenactiviteiten en maritieme logistiek',
        'Maakindustrie en toeleveringsketens',
        'Landbouw, tuinbouw en voedselzekerheid',
        'Internationale handel en bedrijfsuitbreiding',
        'Investeringen, economie en financiën',
      ],
      fr: [
        'Activités portuaires et logistique maritime',
        "Industrie manufacturière et chaînes d'approvisionnement",
        'Agriculture, horticulture et sécurité alimentaire',
        "Commerce international et développement d'activité",
        'Investissement, économie et finance',
      ],
    },
  },
  {
    number: 4,
    slug: 'talent-knowledge-society',
    heroImage: '/media/commission-talent-society.jpg',
    icon: GraduationCap,
    title: {
      en: 'Talent, Knowledge & Society',
      nl: 'Talent, kennis & samenleving',
      fr: 'Talents, savoir & société',
    },
    summary: {
      en: 'Skills, education, labour mobility and cultural exchange.',
      nl: 'Vaardigheden, onderwijs, arbeidsmobiliteit en culturele uitwisseling.',
      fr: 'Compétences, éducation, mobilité du travail et échanges culturels.',
    },
    description: {
      en: 'Developing the human capital behind the partnership: education and capacity building, labour market policy, leadership development, and the cultural and social ties that sustain long-term collaboration.',
      nl: 'Het ontwikkelen van het menselijk kapitaal achter het partnerschap: onderwijs en capaciteitsopbouw, arbeidsmarktbeleid, leiderschapsontwikkeling, en de culturele en sociale banden die langdurige samenwerking dragen.',
      fr: 'Développer le capital humain qui sous-tend le partenariat : éducation et renforcement des capacités, politique du marché du travail, développement du leadership, et les liens culturels et sociaux qui font durer la collaboration.',
    },
    topics: {
      en: [
        'Education and capacity building',
        'Talent, leadership and social impact',
        'Labour market policy and mobility',
        'Healthcare and life sciences',
        'Culture, heritage and community',
      ],
      nl: [
        'Onderwijs en capaciteitsopbouw',
        'Talent, leiderschap en maatschappelijke impact',
        'Arbeidsmarktbeleid en mobiliteit',
        'Zorg en life sciences',
        'Cultuur, erfgoed en gemeenschap',
      ],
      fr: [
        'Éducation et renforcement des capacités',
        'Talents, leadership et impact social',
        'Politique du marché du travail et mobilité',
        'Santé et sciences de la vie',
        'Culture, patrimoine et communauté',
      ],
    },
  },
];
