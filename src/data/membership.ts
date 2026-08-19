import type { Locale } from '../i18n/config';
import { pick, type Localised } from '../i18n/localised';

export { pick };
export type { Localised };

/**
 * Membership (ticket 17), fully localised.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ONE SUPPORTER CONTRIBUTION — €290 PER YEAR, NOT YET OPEN.
 *
 * Set by Nouraddine Gribi, replacing first the five-tier model that Part E4 of
 * the blueprint proposed and then the €25/month rate. One price, no
 * negotiation, no tier anxiety, and nothing for a prospective member to work
 * out before joining.
 *
 * `ANNUAL_PRICE_AVAILABLE` is false: the rate is announced but cannot yet be
 * paid. Nothing on the site may present it as purchasable while that holds —
 * the application form records interest and says so plainly. Flip the flag
 * once the payment provider can take it.
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

/** Annual dues in euros. The only rate — there is no monthly option. */
export const MEMBERSHIP_ANNUAL_PRICE_EUR = 290;

/** True once the payment provider can actually collect the annual rate. */
export const ANNUAL_PRICE_AVAILABLE = false;

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
  name: {
    en: 'Supporter access',
    nl: 'Donateurschap',
    fr: 'Accès donateur',
  },
  audience: {
    en: 'Business leaders, investors, entrepreneurs and senior professionals working across the Netherlands and Morocco',
    nl: 'Ondernemers en bestuurders, investeerders en ervaren professionals die werken tussen Nederland en Marokko',
    fr: "Dirigeants d'entreprise, investisseurs, entrepreneurs et professionnels confirmés actifs entre les Pays-Bas et le Maroc",
  },
  headline: {
    en: 'Access to the network, the platform and the programme of CDD Pays-Bas.',
    nl: 'Toegang tot het netwerk, het platform en het programma van CDD Pays-Bas.',
    fr: "L'accès au réseau, à la plateforme et au programme de CDD Pays-Bas.",
  },
  benefits: {
    en: [
      'Access to the CDD Pays-Bas platform (participant directory, sector overview, network)',
      'Newsletter and updates on current initiatives',
      'Priority at events: earlier access to registration and reserved places at events with limited capacity',
    ],
    nl: [
      'Toegang tot het CDD Pays-Bas platform (ledendirectory, sectoroverzicht, netwerk)',
      'Nieuwsbrief en updates over lopende initiatieven',
      'Voorrang op evenementen: eerdere toegang tot inschrijving en gereserveerde plekken bij events met beperkte capaciteit',
    ],
    fr: [
      'Accès à la plateforme CDD Pays-Bas (annuaire des participants, panorama sectoriel, réseau)',
      'Newsletter et actualités sur les initiatives en cours',
      "Priorité lors des événements : accès anticipé aux inscriptions et places réservées lors des événements à capacité limitée",
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
 * The annual rate, e.g. "€290 per year" / "290 € par an".
 *
 * `perYear` carries the translated interval label from the dictionary, so this
 * stays free of hard-coded English.
 */
export function formatAnnualPrice(locale: Locale, perYear: string): string {
  return `${formatEuros(MEMBERSHIP_ANNUAL_PRICE_EUR, locale)} ${perYear}`;
}

function formatEuros(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(PRICE_LOCALE[locale], {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
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
      en: 'Direct access to advisors across energy and water, digital and AI, industry and logistics, and talent and society — plus the full supporter network in the Netherlands and Morocco.',
      nl: 'Directe toegang tot adviseurs op het gebied van energie en water, digitaal en AI, industrie en logistiek, en talent en samenleving — plus het volledige deelnemersnetwerk in Nederland en Marokko.',
      fr: "Un accès direct à des conseillers en énergie et eau, numérique et IA, industrie et logistique, talents et société — ainsi qu'à l'ensemble du réseau de donateurs aux Pays-Bas et au Maroc.",
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
      en: 'Commissions are open to all participants. Each commits to at least two activities a year, so participation means real work, not a mailing list.',
      nl: 'Commissies staan open voor alle deelnemers. Elke commissie verbindt zich aan minimaal twee activiteiten per jaar, dus deelname betekent echt werk en geen mailinglijst.',
      fr: "Les commissions sont ouvertes à tous les participants. Chacune s'engage à mener au moins deux activités par an : participer signifie donc un vrai travail, pas une simple liste de diffusion.",
    },
  },
  {
    title: {
      en: 'Visibility where it counts',
      nl: 'Zichtbaarheid waar het telt',
      fr: 'Une visibilité là où elle compte',
    },
    text: {
      en: 'Your company profile in the participant directory and speaking opportunities at CDD events, in front of decision-makers from both markets.',
      nl: 'Uw bedrijfsprofiel in de ledendirectory en spreekmogelijkheden bij CDD-evenementen, voor besluitvormers uit beide markten.',
      fr: "Le profil de votre entreprise dans l'annuaire des participants et des opportunités de prise de parole lors des événements du CDD, devant des décideurs des deux marchés.",
    },
  },
];
