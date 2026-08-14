import type { AdvisorGroup } from './advisors';
import type { Locale } from '../i18n/config';
import { pick, type Localised } from '../i18n/localised';

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

/** Category names. Filter chips and card badges — interface copy, translated. */
export const INSIGHT_CATEGORY_LABELS: Record<InsightCategory, Localised<string>> = {
  news: { en: 'News', nl: 'Nieuws', fr: 'Actualités' },
  spotlight: {
    en: 'Member & Advisor Spotlight',
    nl: 'Portret van leden & adviseurs',
    fr: 'Portrait de membres & conseillers',
  },
  briefing: { en: 'Market Briefing', nl: 'Marktbriefing', fr: 'Briefing marché' },
};

export const INSIGHT_CATEGORY_BLURBS: Record<InsightCategory, Localised<string>> = {
  news: {
    en: 'Announcements and developments from CDD Pays-Bas.',
    nl: 'Aankondigingen en ontwikkelingen van CDD Pays-Bas.',
    fr: 'Annonces et actualités de CDD Pays-Bas.',
  },
  spotlight: {
    en: 'The people in the network, and the work they do.',
    nl: 'De mensen in het netwerk en het werk dat zij doen.',
    fr: 'Les personnes du réseau et le travail qu’elles accomplissent.',
  },
  briefing: {
    en: 'Regulation, tenders and sector openings in both markets.',
    nl: 'Regelgeving, aanbestedingen en sectorkansen in beide markten.',
    fr: "Réglementation, appels d'offres et ouvertures sectorielles sur les deux marchés.",
  },
};

export interface Insight {
  slug: string;
  title: Localised<string>;
  /** ISO date. */
  date: string;
  category: InsightCategory;
  /** Commissions this piece belongs to — drives auto-population. */
  commissions: AdvisorGroup[];
  /** Byline. */
  author?: string;
  /** One-paragraph summary used in listings and as the meta description. */
  summary: Localised<string>;
  /** Body, as paragraphs. */
  body: Localised<string[]>;
  /** Marks the piece for the homepage. */
  featured?: boolean;
  /**
   * Optional cover image (an import from src/assets, or a path under /public).
   * Absent means the card falls back to the branded placeholder rather than a
   * stock photograph — see BrandedImage and blueprint ticket 21.
   */
  image?: string;
}

/**
 * Seeded with the two pieces the organisation can honestly publish today: the
 * commission structure, and a recap of the Iftar. Both are real; neither
 * invents activity that has not happened.
 */
export const INSIGHTS: Insight[] = [
  {
    slug: 'cdd-pays-bas-organises-around-four-commissions',
    title: {
      en: 'CDD Pays-Bas organises its work around four commissions',
      nl: 'CDD Pays-Bas organiseert haar werk rond vier commissies',
      fr: 'CDD Pays-Bas organise ses travaux autour de quatre commissions',
    },
    date: '2026-07-28',
    category: 'news',
    commissions: [],
    author: 'CDD Pays-Bas',
    featured: true,
    summary: {
      en: 'The club is moving from stated focus areas to four standing commissions, each with a chair, a mandate, a meeting cadence and an obligation to report to the board.',
      nl: 'De club gaat van benoemde aandachtsgebieden naar vier vaste commissies, elk met een voorzitter, een mandaat, een vergaderritme en een verplichting om aan het bestuur te rapporteren.',
      fr: "Le club passe de domaines prioritaires déclarés à quatre commissions permanentes, chacune dotée d'un président, d'un mandat, d'un rythme de réunion et d'une obligation de rendre compte au conseil.",
    },
    body: {
      en: [
        'CDD Pays-Bas is restructuring how it works. Where the organisation previously described focus areas — a strategy vocabulary that carries no governance meaning — it now organises its work through four standing commissions: Energy & Water Transition, Digital, AI & Infrastructure, Industry, Trade & Logistics, and Talent, Knowledge & Society.',
        'The distinction matters. A focus area invites nothing. A commission has a chair appointed by the board for a two-year term, a published mandate, a meeting cadence, and an obligation to report. It is something a member can join and something the board can review.',
        'Each commission commits to a minimum of two activities a year — a roundtable, briefing, mission segment or working paper — and publishes three current priorities, refreshed quarterly. The board reviews commission activity annually and may merge or sunset a commission that has gone dormant. That last rule is deliberate: it is the safeguard against announcing four commissions and running two.',
        'Membership of a commission is open to any CDD member. The senior advisors already on the Advisory Council map onto the four bodies almost completely, which means the structure reflects expertise the club already has rather than expertise it hopes to recruit.',
      ],
      nl: [
        'CDD Pays-Bas herstructureert haar werkwijze. Waar de organisatie eerder sprak van aandachtsgebieden — strategietaal zonder bestuurlijke betekenis — organiseert zij haar werk nu via vier vaste commissies: Energie- & watertransitie, Digitaal, AI & infrastructuur, Industrie, handel & logistiek, en Talent, kennis & samenleving.',
        'Dat onderscheid doet ertoe. Een aandachtsgebied nodigt nergens toe uit. Een commissie heeft een door het bestuur voor twee jaar benoemde voorzitter, een gepubliceerd mandaat, een vergaderritme en een rapportageplicht. Het is iets waar een lid zich bij kan aansluiten en waar het bestuur op kan toetsen.',
        'Elke commissie verbindt zich aan minimaal twee activiteiten per jaar — een ronde tafel, briefing, missieonderdeel of werkdocument — en publiceert drie actuele prioriteiten, elk kwartaal geactualiseerd. Het bestuur beoordeelt de activiteit van de commissies jaarlijks en kan een stilgevallen commissie samenvoegen of beëindigen. Die laatste regel is bewust: zij is de waarborg tegen het aankondigen van vier commissies en het draaien van twee.',
        'Deelname aan een commissie staat open voor elk CDD-lid. De senior adviseurs die al in de raad van advies zitten, sluiten vrijwel volledig aan op de vier organen; de structuur weerspiegelt dus expertise die de club al heeft, niet expertise die zij hoopt te werven.',
      ],
      fr: [
        "CDD Pays-Bas réorganise son fonctionnement. Là où l'organisation parlait auparavant de domaines prioritaires — un vocabulaire de stratégie sans portée en matière de gouvernance — elle structure désormais ses travaux autour de quatre commissions permanentes : Transition énergétique & hydrique, Numérique, IA & infrastructures, Industrie, commerce & logistique, et Talents, savoirs & société.",
        "La distinction compte. Un domaine prioritaire n'invite à rien. Une commission a un président nommé par le conseil pour deux ans, un mandat publié, un rythme de réunion et une obligation de rendre compte. C'est quelque chose que l'on peut rejoindre et que le conseil peut évaluer.",
        "Chaque commission s'engage sur au moins deux activités par an — table ronde, briefing, volet de mission ou document de travail — et publie trois priorités du moment, actualisées chaque trimestre. Le conseil examine l'activité des commissions chaque année et peut fusionner ou clore une commission devenue inactive. Cette dernière règle est délibérée : elle protège contre l'annonce de quatre commissions pour n'en faire vivre que deux.",
        "La participation à une commission est ouverte à tout membre du CDD. Les conseillers seniors déjà présents au conseil consultatif se rattachent presque intégralement aux quatre instances : la structure reflète donc une expertise que le club possède déjà, et non celle qu'il espère recruter.",
      ],
    },
  },
  {
    slug: 'first-collective-iftar-recap',
    title: {
      en: 'Recap: our first collective Iftar',
      nl: 'Terugblik: onze eerste gezamenlijke iftar',
      fr: 'Retour sur notre premier iftar collectif',
    },
    date: '2026-03-05',
    category: 'news',
    commissions: [],
    author: 'CDD Pays-Bas',
    summary: {
      en: 'The first gathering of the CDD Pays-Bas network brought members together in Rotterdam for an evening built around connection rather than agenda.',
      nl: 'De eerste bijeenkomst van het CDD Pays-Bas-netwerk bracht leden samen in Rotterdam voor een avond die draaide om verbinding in plaats van agenda.',
      fr: "Le premier rassemblement du réseau CDD Pays-Bas a réuni les membres à Rotterdam pour une soirée fondée sur la rencontre plutôt que sur un ordre du jour.",
    },
    body: {
      en: [
        'In February, CDD Pays-Bas held its first collective Iftar in Rotterdam. It was the first time the network convened as a group, and it was designed deliberately as a human occasion rather than a business one.',
        'Guests shared a meal, heard reflections on the role CDD Pays-Bas plays as a bridge between the Netherlands and Morocco, and spent the evening in conversation across sectors that rarely meet in the same room — energy, logistics, law, education and technology.',
        'Several of those conversations have since turned into working discussions. That is the point of convening: relationships formed away from a transaction tend to be the ones that produce transactions later.',
        'The evening set the tone for how CDD Pays-Bas gathers — neutral, respectful, open and personal — and it is the model for the roundtables and briefings the commissions will run through the year.',
      ],
      nl: [
        'In februari hield CDD Pays-Bas haar eerste gezamenlijke iftar in Rotterdam. Het was de eerste keer dat het netwerk als groep bijeenkwam, en de avond was bewust opgezet als een menselijke gelegenheid en niet als een zakelijke.',
        'Gasten deelden een maaltijd, hoorden reflecties op de rol die CDD Pays-Bas speelt als brug tussen Nederland en Marokko, en brachten de avond in gesprek door met mensen uit sectoren die zelden in dezelfde ruimte zitten — energie, logistiek, recht, onderwijs en technologie.',
        'Verschillende van die gesprekken zijn inmiddels uitgegroeid tot werkoverleggen. Dat is precies het doel van samenbrengen: relaties die los van een transactie ontstaan, zijn doorgaans de relaties die later transacties opleveren.',
        'De avond zette de toon voor hoe CDD Pays-Bas mensen samenbrengt — neutraal, respectvol, open en persoonlijk — en vormt het model voor de ronde tafels en briefings die de commissies dit jaar organiseren.',
      ],
      fr: [
        "En février, CDD Pays-Bas a organisé son premier iftar collectif à Rotterdam. C'était la première fois que le réseau se réunissait en tant que groupe, et la soirée avait été délibérément conçue comme un moment humain plutôt que professionnel.",
        "Les invités ont partagé un repas, entendu des réflexions sur le rôle de passerelle que joue CDD Pays-Bas entre les Pays-Bas et le Maroc, et passé la soirée à échanger entre secteurs qui se croisent rarement — énergie, logistique, droit, éducation et technologie.",
        "Plusieurs de ces échanges se sont depuis transformés en discussions de travail. C'est tout l'intérêt de rassembler : les relations nouées en dehors d'une transaction sont souvent celles qui produisent des transactions par la suite.",
        "La soirée a donné le ton de la manière dont CDD Pays-Bas rassemble — de façon neutre, respectueuse, ouverte et personnelle — et sert de modèle aux tables rondes et briefings que les commissions animeront tout au long de l'année.",
      ],
    },
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

const DATE_LOCALE: Record<Locale, string> = { en: 'en-GB', nl: 'nl-NL', fr: 'fr-FR' };

export function formatInsightDate(iso: string, locale: Locale = 'en'): string {
  return new Date(iso).toLocaleDateString(DATE_LOCALE[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
