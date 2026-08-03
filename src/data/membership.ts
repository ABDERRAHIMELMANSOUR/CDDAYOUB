import type { Locale } from '../i18n/config';
import { pick, type Localised } from '../i18n/localised';

export { pick };
export type { Localised };

/**
 * Membership tiers (ticket 17), fully localised.
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
 *
 * ON LOCALISATION: tier names, audiences, headlines and benefits are conversion
 * copy, not editorial long-form, so they are translated here alongside the
 * prices they describe rather than being left in English. A Dutch SME reading a
 * Dutch pricing table converts; one reading an English table hesitates.
 *
 * Amounts stay locale-independent — a euro is a euro in all three markets — but
 * they are FORMATTED per locale, since nl-NL writes €1.500 where en writes
 * €1,500.
 */
export const PRICING_PUBLISHED = true;

export type TierId = 'individual' | 'sme' | 'corporate' | 'institutional' | 'honorary';

export interface MembershipTier {
  id: TierId;
  name: Localised<string>;
  /** Who the tier is for. */
  audience: Localised<string>;
  /** Annual dues in euros. Null for tiers that are not purchased. */
  priceFrom: number | null;
  priceTo: number | null;
  /** Shown instead of a price when the tier is not purchasable. */
  priceNote?: Localised<string>;
  /** The single line that sells the tier. */
  headline: Localised<string>;
  /**
   * Benefits written as outcomes, not abstractions. "Networking opportunities"
   * tells a prospective member nothing; naming the 23 advisors and the two
   * markets tells them what they actually get.
   */
  benefits: Localised<string[]>;
  /** Marks the tier the club most wants to grow. */
  featured?: boolean;
  /** Whether this tier can be applied for online. */
  applicable: boolean;
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'individual',
    name: { en: 'Individual', nl: 'Individueel', fr: 'Individuel' },
    audience: {
      en: 'Professionals, consultants and diaspora entrepreneurs',
      nl: 'Professionals, consultants en diaspora-ondernemers',
      fr: 'Professionnels, consultants et entrepreneurs de la diaspora',
    },
    priceFrom: 150,
    priceTo: 250,
    headline: {
      en: 'Join the network as an individual professional.',
      nl: 'Sluit u als individuele professional aan bij het netwerk.',
      fr: 'Rejoignez le réseau en tant que professionnel indépendant.',
    },
    benefits: {
      en: [
        'Access to all CDD Pays-Bas events, including roundtables and community gatherings',
        'Your profile in the member directory, visible to the full network in both markets',
        'Quarterly briefings on regulation, tenders and sector openings in the Netherlands and Morocco',
        'Participation in any of the four commissions',
      ],
      nl: [
        'Toegang tot alle evenementen van CDD Pays-Bas, waaronder rondetafelgesprekken en netwerkbijeenkomsten',
        'Uw profiel in de ledengids, zichtbaar voor het hele netwerk in beide markten',
        'Driemaandelijkse briefings over regelgeving, aanbestedingen en sectorkansen in Nederland en Marokko',
        'Deelname aan een van de vier commissies',
      ],
      fr: [
        'Accès à tous les événements du CDD Pays-Bas, y compris les tables rondes et les rencontres du réseau',
        "Votre profil dans l'annuaire des membres, visible par tout le réseau sur les deux marchés",
        "Des briefings trimestriels sur la réglementation, les appels d'offres et les ouvertures sectorielles aux Pays-Bas et au Maroc",
        "Participation à l'une des quatre commissions",
      ],
    },
    applicable: true,
  },
  {
    id: 'sme',
    name: { en: 'SME', nl: 'MKB', fr: 'PME' },
    audience: {
      en: 'Companies under 25 FTE',
      nl: 'Bedrijven tot 25 fte',
      fr: 'Entreprises de moins de 25 ETP',
    },
    priceFrom: 500,
    priceTo: 750,
    headline: {
      en: 'Put your company inside the network, not just yourself.',
      nl: 'Breng uw bedrijf in het netwerk, niet alleen uzelf.',
      fr: "Intégrez votre entreprise au réseau, pas seulement vous-même.",
    },
    benefits: {
      en: [
        'Everything in Individual, for two named contacts from your company',
        'Places on business delegations and trade missions along the Rotterdam–Tanger Med corridor',
        'Your company profile in the member directory',
        'Introductions through the Advisory Council in your sector',
      ],
      nl: [
        'Alles uit Individueel, voor twee contactpersonen van uw bedrijf',
        'Plaatsen bij handelsmissies en delegaties langs de corridor Rotterdam–Tanger Med',
        'Uw bedrijfsprofiel in de ledengids',
        'Introducties via de Raad van Adviseurs in uw sector',
      ],
      fr: [
        "Tout ce qu'inclut Individuel, pour deux contacts nommés de votre entreprise",
        "Des places lors des délégations d'affaires et missions commerciales sur le corridor Rotterdam–Tanger Med",
        "Le profil de votre entreprise dans l'annuaire des membres",
        'Des mises en relation via le Conseil consultatif dans votre secteur',
      ],
    },
    applicable: true,
  },
  {
    id: 'corporate',
    name: { en: 'Corporate', nl: 'Corporate', fr: 'Entreprise' },
    audience: {
      en: 'Mid-sized and large companies',
      nl: 'Middelgrote en grote ondernemingen',
      fr: 'Moyennes et grandes entreprises',
    },
    priceFrom: 1500,
    priceTo: 3000,
    headline: {
      en: 'A seat where the agenda is set.',
      nl: 'Een zetel waar de agenda wordt bepaald.',
      fr: "Un siège là où l'agenda se décide.",
    },
    benefits: {
      en: [
        'Everything in SME, for an expanded group of named contacts',
        'A seat on the commission most relevant to your business',
        'Speaking slots at CDD events and roundtables',
        'Your logo on the CDD Pays-Bas member wall',
        'Direct access to 23 senior advisors across energy, digital, logistics and talent',
      ],
      nl: [
        'Alles uit MKB, voor een uitgebreide groep contactpersonen',
        'Een zetel in de commissie die het meest relevant is voor uw bedrijf',
        'Spreekmomenten bij CDD-evenementen en rondetafelgesprekken',
        'Uw logo op de ledenwand van CDD Pays-Bas',
        'Directe toegang tot 23 senior adviseurs op het gebied van energie, digitaal, logistiek en talent',
      ],
      fr: [
        "Tout ce qu'inclut PME, pour un groupe élargi de contacts nommés",
        'Un siège au sein de la commission la plus pertinente pour votre activité',
        'Des interventions lors des événements et tables rondes du CDD',
        'Votre logo sur le mur des membres du CDD Pays-Bas',
        'Un accès direct à 23 conseillers seniors dans les domaines de l’énergie, du numérique, de la logistique et des talents',
      ],
    },
    featured: true,
    applicable: true,
  },
  {
    id: 'institutional',
    name: {
      en: 'Institutional / Patron',
      nl: 'Institutioneel / Beschermheer',
      fr: 'Institutionnel / Mécène',
    },
    audience: {
      en: 'Public bodies, banks, universities and foundations',
      nl: 'Overheidsinstellingen, banken, universiteiten en stichtingen',
      fr: 'Organismes publics, banques, universités et fondations',
    },
    priceFrom: 5000,
    priceTo: null,
    headline: {
      en: 'Strategic partner status and co-branded programmes.',
      nl: "Status van strategisch partner en co-branded programma's.",
      fr: 'Statut de partenaire stratégique et programmes co-brandés.',
    },
    benefits: {
      en: [
        'Everything in Corporate',
        'Strategic partner status, named on the site and in CDD communications',
        'Co-branded programmes, briefings and research',
        'Standing dialogue with the board on the bilateral agenda',
      ],
      nl: [
        'Alles uit Corporate',
        'Status van strategisch partner, met naamsvermelding op de site en in CDD-communicatie',
        "Co-branded programma's, briefings en onderzoek",
        'Structureel overleg met het bestuur over de bilaterale agenda',
      ],
      fr: [
        "Tout ce qu'inclut Entreprise",
        'Statut de partenaire stratégique, mentionné sur le site et dans les communications du CDD',
        'Programmes, briefings et travaux de recherche co-brandés',
        "Un dialogue permanent avec le conseil sur l'agenda bilatéral",
      ],
    },
    applicable: true,
  },
  {
    id: 'honorary',
    name: { en: 'Honorary', nl: 'Erelid', fr: "Membre d'honneur" },
    audience: {
      en: 'By board invitation',
      nl: 'Op uitnodiging van het bestuur',
      fr: 'Sur invitation du conseil',
    },
    priceFrom: null,
    priceTo: null,
    priceNote: { en: 'By invitation', nl: 'Op uitnodiging', fr: 'Sur invitation' },
    headline: {
      en: 'Recognition for exceptional contribution to CDD Pays-Bas.',
      nl: 'Erkenning voor een uitzonderlijke bijdrage aan CDD Pays-Bas.',
      fr: "Reconnaissance d'une contribution exceptionnelle à CDD Pays-Bas.",
    },
    benefits: {
      en: [
        'Extended to individuals recognised by the board for their contribution',
        'Full access to events, commissions and the member network',
      ],
      nl: [
        'Toegekend aan personen die door het bestuur worden erkend voor hun bijdrage',
        'Volledige toegang tot evenementen, commissies en het ledennetwerk',
      ],
      fr: [
        'Accordé aux personnes reconnues par le conseil pour leur contribution',
        'Accès complet aux événements, aux commissions et au réseau des membres',
      ],
    },
    applicable: false,
  },
];

export function getTier(id: string): MembershipTier | undefined {
  return MEMBERSHIP_TIERS.find((t) => t.id === id);
}

/** Locale used for number grouping — nl-NL writes €1.500 where en writes €1,500. */
const PRICE_LOCALE: Record<Locale, string> = {
  en: 'en-GB',
  nl: 'nl-NL',
  fr: 'fr-FR',
};

/**
 * Formats a tier's dues for display in the given locale.
 *
 * `labels` carries the translated "per year" / "by invitation" / "contact us"
 * strings from the dictionary, so this stays free of hard-coded English.
 */
export function formatPrice(
  tier: MembershipTier,
  locale: Locale,
  labels: { perYear: string; byInvitation: string; contactForDues: string }
): string {
  if (!PRICING_PUBLISHED) return labels.contactForDues;
  if (tier.priceNote) return pick(tier.priceNote, locale);
  if (tier.priceFrom === null) return labels.byInvitation;

  const nf = new Intl.NumberFormat(PRICE_LOCALE[locale]);
  const from = `€${nf.format(tier.priceFrom)}`;
  if (tier.priceTo === null) return `${from}+ ${labels.perYear}`;
  return `${from}–€${nf.format(tier.priceTo)} ${labels.perYear}`;
}

/** Why join — the outcomes, stated once and reused. */
export interface WhyJoinItem {
  title: Localised<string>;
  text: Localised<string>;
}

export const WHY_JOIN: WhyJoinItem[] = [
  {
    title: {
      en: 'Access to 23 senior advisors',
      nl: 'Toegang tot 23 senior adviseurs',
      fr: 'Accès à 23 conseillers seniors',
    },
    text: {
      en: 'Direct access to advisors across energy and water, digital and AI, industry and logistics, and talent and society — plus the full member network in the Netherlands and Morocco.',
      nl: 'Directe toegang tot adviseurs op het gebied van energie en water, digitaal en AI, industrie en logistiek, en talent en samenleving — plus het volledige ledennetwerk in Nederland en Marokko.',
      fr: "Un accès direct à des conseillers en énergie et eau, numérique et IA, industrie et logistique, talents et société — ainsi qu'à l'ensemble du réseau de membres aux Pays-Bas et au Maroc.",
    },
  },
  {
    title: {
      en: 'Intelligence you can act on',
      nl: 'Informatie waarmee u kunt handelen',
      fr: 'Des informations exploitables',
    },
    text: {
      en: 'Quarterly briefings on regulation, tenders and sector openings in both markets, from people who work in them rather than report on them.',
      nl: 'Driemaandelijkse briefings over regelgeving, aanbestedingen en sectorkansen in beide markten, van mensen die er werken in plaats van erover rapporteren.',
      fr: "Des briefings trimestriels sur la réglementation, les appels d'offres et les ouvertures sectorielles sur les deux marchés, rédigés par des acteurs de terrain plutôt que par des observateurs.",
    },
  },
  {
    title: {
      en: 'A seat in a commission',
      nl: 'Een zetel in een commissie',
      fr: 'Un siège dans une commission',
    },
    text: {
      en: 'Commissions are open to all members. Each commits to at least two activities a year, so participation means real work, not a mailing list.',
      nl: 'Commissies staan open voor alle leden. Elke commissie verbindt zich aan minimaal twee activiteiten per jaar, dus deelname betekent echt werk en geen mailinglijst.',
      fr: "Les commissions sont ouvertes à tous les membres. Chacune s'engage à mener au moins deux activités par an : participer signifie donc un vrai travail, pas une simple liste de diffusion.",
    },
  },
  {
    title: {
      en: 'Visibility where it counts',
      nl: 'Zichtbaarheid waar het telt',
      fr: 'Une visibilité là où elle compte',
    },
    text: {
      en: 'Your company profile in the member directory and speaking opportunities at CDD events, in front of decision-makers from both markets.',
      nl: 'Uw bedrijfsprofiel in de ledengids en spreekmogelijkheden bij CDD-evenementen, voor besluitvormers uit beide markten.',
      fr: "Le profil de votre entreprise dans l'annuaire des membres et des opportunités de prise de parole lors des événements du CDD, devant des décideurs des deux marchés.",
    },
  },
];
