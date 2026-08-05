import type { Locale } from '../i18n/config';
import { pick, type Localised } from '../i18n/localised';

export { pick };
export type { Localised };

/**
 * Membership (ticket 17), fully localised.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ONE MEMBERSHIP TYPE — €25 PER MONTH.
 *
 * Set by Nouraddine Gribi (August 2026), replacing the five-tier model that
 * Part E4 of the blueprint proposed. The board's decision is deliberate and it
 * supersedes the blueprint on this point: one price, no negotiation, no tier
 * anxiety, and nothing for a prospective member to work out before joining.
 *
 * Honorary membership is not represented here. It is a board recognition
 * rather than a product — it has no price, cannot be applied for, and the
 * people who hold it are already presented on the Advisory Council page.
 * Putting it in a pricing table would imply it is something to choose.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ON LOCALISATION: the audience line, headline and benefits are conversion
 * copy, so they are translated here alongside the price they describe. The
 * amount itself is locale-independent — a euro is a euro in all three markets
 * — but it is FORMATTED per locale, since nl-NL writes €1.234,50 where en-GB
 * writes €1,234.50.
 */

/** Monthly dues in euros. */
export const MEMBERSHIP_PRICE_EUR = 25;

export interface Membership {
  name: Localised<string>;
  /** Who it is for. */
  audience: Localised<string>;
  /** The single line that sells it. */
  headline: Localised<string>;
  /**
   * Benefits written as outcomes, not abstractions. "Networking opportunities"
   * tells a prospective member nothing; naming the advisors and the two
   * markets tells them what they actually get.
   */
  benefits: Localised<string[]>;
}

export const MEMBERSHIP: Membership = {
  name: { en: 'CDD Membership', nl: 'CDD-lidmaatschap', fr: 'Adhésion CDD' },
  audience: {
    en: 'Business leaders, investors, entrepreneurs and senior professionals working across the Netherlands and Morocco',
    nl: 'Ondernemers en bestuurders, investeerders en ervaren professionals die werken tussen Nederland en Marokko',
    fr: "Dirigeants d'entreprise, investisseurs, entrepreneurs et professionnels confirmés actifs entre les Pays-Bas et le Maroc",
  },
  headline: {
    en: 'One membership, one price, full access to the network.',
    nl: 'Eén lidmaatschap, één prijs, volledige toegang tot het netwerk.',
    fr: "Une seule adhésion, un seul tarif, un accès complet au réseau.",
  },
  benefits: {
    en: [
      'Access to all CDD Pays-Bas events, including roundtables, briefings and community gatherings',
      'A seat in any of the four commissions — each commits to at least two activities a year, so participation means real work',
      'Direct access to our senior advisors across energy and water, digital and AI, industry and logistics, and talent and society',
      'Quarterly briefings on regulation, tenders and sector openings in both markets',
      'Your profile in the member directory, visible to the full network in the Netherlands and Morocco',
      'Priority notice of business delegations and missions',
    ],
    nl: [
      'Toegang tot alle evenementen van CDD Pays-Bas, waaronder rondetafelgesprekken, briefings en netwerkbijeenkomsten',
      'Een zetel in een van de vier commissies — elke commissie verbindt zich aan minimaal twee activiteiten per jaar, dus deelname betekent echt werk',
      'Directe toegang tot onze senior adviseurs op het gebied van energie en water, digitaal en AI, industrie en logistiek, en talent en samenleving',
      'Driemaandelijkse briefings over regelgeving, aanbestedingen en sectorkansen in beide markten',
      'Uw profiel in de ledengids, zichtbaar voor het hele netwerk in Nederland en Marokko',
      'Voorrang bij aankondigingen van handelsmissies en delegaties',
    ],
    fr: [
      'Accès à tous les événements du CDD Pays-Bas : tables rondes, briefings et rencontres du réseau',
      "Un siège dans l'une des quatre commissions — chacune s'engage à mener au moins deux activités par an : participer signifie donc un vrai travail",
      'Un accès direct à nos conseillers seniors en énergie et eau, numérique et IA, industrie et logistique, talents et société',
      "Des briefings trimestriels sur la réglementation, les appels d'offres et les ouvertures sectorielles sur les deux marchés",
      "Votre profil dans l'annuaire des membres, visible par tout le réseau aux Pays-Bas et au Maroc",
      'Information prioritaire sur les délégations et missions économiques',
    ],
  },
};

/** Locale used for number formatting — nl-NL writes €1.234,50 where en-GB writes €1,234.50. */
const PRICE_LOCALE: Record<Locale, string> = {
  en: 'en-GB',
  nl: 'nl-NL',
  fr: 'fr-FR',
};

/**
 * Formats the dues for display, e.g. "€25 per month".
 *
 * `perMonth` carries the translated interval label from the dictionary, so this
 * stays free of hard-coded English.
 */
export function formatMembershipPrice(locale: Locale, perMonth: string): string {
  const amount = new Intl.NumberFormat(PRICE_LOCALE[locale], {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(MEMBERSHIP_PRICE_EUR);
  return `${amount} ${perMonth}`;
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
