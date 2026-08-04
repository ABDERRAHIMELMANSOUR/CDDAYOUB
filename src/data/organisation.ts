/**
 * Organisation identity and statutory details.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ACTION REQUIRED — confirm these with the treasurer before publishing.
 *
 * Every field below that is `null` is one CDD has not published yet. Nothing is
 * invented here: a KvK or RSIN number is a legal record, and a wrong one is
 * worse than a missing one. The UI is built to hide any field that is still
 * null, so the site stays honest until the real values are filled in — fill a
 * value in and it appears automatically in the footer and on Transparency.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Localised } from '../i18n/localised';

export interface LegalDocument {
  /** Display name, e.g. "Statutes (statuten)". Dutch statutory terms are kept
   *  in every locale — they are what the registry itself calls them. */
  label: Localised<string>;
  /** Public URL or path to the PDF. Null until the document is published. */
  href: string | null;
  /** Short explanation of what the document contains. */
  description: Localised<string>;
}

export const ORGANISATION = {
  name: 'CDD Pays-Bas',
  fullName: 'Club des Dirigeants Pays-Bas',

  /**
   * Dutch legal form. Expected to be 'vereniging' or 'stichting'.
   * Determines what a partner is contracting with.
   */
  legalForm: null as string | null,

  /** Chamber of Commerce number. Standard Dutch expectation. */
  kvk: null as string | null,

  /** RSIN — required for institutional and tax-relevant relationships. */
  rsin: null as string | null,

  /** Registered address (vestigingsadres). */
  registeredAddress: null as string | null,

  /** Country, always shown. */
  country: 'The Netherlands',

  email: 'contact@cddpaysbas.nl',
  phone: null as string | null,
  linkedin:
    'https://www.linkedin.com/company/club-des-dirigeants-%E2%80%93-cdd-les-pays-bas/?viewAsMember=true',

  /**
   * The structural relationship to CDD Morocco.
   *
   * The site asserts a shared vision but never states the structure, and a
   * Dutch corporate legal team, ministry or bank will ask. One of:
   *   - 'chapter'     — a chapter of CDD Morocco
   *   - 'affiliate'   — a licensed affiliate
   *   - 'independent' — an independent Dutch legal entity sharing name and mission
   */
  moroccoRelationship: null as 'chapter' | 'affiliate' | 'independent' | null,

  /**
   * Board remuneration. For a club this is normally unpaid with expenses
   * reimbursed against receipt — silence reads as evasion, so state it.
   */
  boardIsUnpaid: true,
} as const;

/** The one-sentence structural answer rendered on About and Transparency. */
export const MOROCCO_RELATIONSHIP_TEXT: Record<
  NonNullable<typeof ORGANISATION.moroccoRelationship>,
  Localised<string>
> = {
  chapter: {
    en: 'CDD Pays-Bas is the Netherlands chapter of Club des Dirigeants (CDD), operating under its governance while registered in the Netherlands.',
    nl: 'CDD Pays-Bas is de Nederlandse afdeling van Club des Dirigeants (CDD) en opereert onder diens governance, terwijl het in Nederland is ingeschreven.',
    fr: "CDD Pays-Bas est la section néerlandaise du Club des Dirigeants (CDD) ; il opère sous sa gouvernance tout en étant immatriculé aux Pays-Bas.",
  },
  affiliate: {
    en: 'CDD Pays-Bas is a licensed affiliate of Club des Dirigeants (CDD), operating as an independently registered Dutch entity under a shared name and mission.',
    nl: 'CDD Pays-Bas is een gelicentieerde partnerorganisatie van Club des Dirigeants (CDD) en functioneert als zelfstandig in Nederland ingeschreven rechtspersoon onder een gedeelde naam en missie.',
    fr: "CDD Pays-Bas est une entité affiliée sous licence du Club des Dirigeants (CDD) ; il fonctionne comme une personne morale néerlandaise immatriculée de façon indépendante, sous un nom et une mission partagés.",
  },
  independent: {
    en: 'CDD Pays-Bas is an independent Dutch legal entity that shares its name, mission and close working ties with Club des Dirigeants (CDD) in Morocco, but is separately registered and governed.',
    nl: 'CDD Pays-Bas is een zelfstandige Nederlandse rechtspersoon die naam, missie en nauwe samenwerking deelt met Club des Dirigeants (CDD) in Marokko, maar afzonderlijk is ingeschreven en bestuurd.',
    fr: "CDD Pays-Bas est une personne morale néerlandaise indépendante qui partage son nom, sa mission et des liens de travail étroits avec le Club des Dirigeants (CDD) au Maroc, mais dont l'immatriculation et la gouvernance sont distinctes.",
  },
};

/**
 * The transparency document set — what converts "nice website" into
 * "credible counterparty". Each stays hidden until a URL is supplied.
 */
export const TRANSPARENCY_DOCUMENTS: LegalDocument[] = [
  {
    label: {
      en: 'Statutes (statuten)',
      nl: 'Statuten',
      fr: 'Statuts (statuten)',
    },
    href: null,
    description: {
      en: 'The constitutional document setting out purpose, governance, membership and decision-making.',
      nl: 'Het oprichtingsdocument waarin doel, bestuur, lidmaatschap en besluitvorming zijn vastgelegd.',
      fr: "Le document constitutif qui définit l'objet, la gouvernance, l'adhésion et la prise de décision.",
    },
  },
  {
    label: {
      en: 'Policy plan (beleidsplan)',
      nl: 'Beleidsplan',
      fr: 'Plan de politique (beleidsplan)',
    },
    href: null,
    description: {
      en: 'Objectives and planned activities, including how the organisation intends to use its funds.',
      nl: 'Doelstellingen en voorgenomen activiteiten, inclusief hoe de organisatie haar middelen wil besteden.',
      fr: "Objectifs et activités prévues, y compris la manière dont l'organisation entend employer ses fonds.",
    },
  },
  {
    label: {
      en: 'Annual report (jaarverslag)',
      nl: 'Jaarverslag',
      fr: 'Rapport annuel (jaarverslag)',
    },
    href: null,
    description: {
      en: 'A record of activities, commission work and events over the past year.',
      nl: 'Een verslag van activiteiten, commissiewerk en evenementen van het afgelopen jaar.',
      fr: "Un compte rendu des activités, des travaux des commissions et des événements de l'année écoulée.",
    },
  },
  {
    label: {
      en: 'Financial summary (financiële verantwoording)',
      nl: 'Financiële verantwoording',
      fr: 'Compte rendu financier (financiële verantwoording)',
    },
    href: null,
    description: {
      en: 'Income, expenditure and balance for the most recent financial year.',
      nl: 'Inkomsten, uitgaven en balans over het meest recente boekjaar.',
      fr: 'Produits, charges et bilan du dernier exercice financier.',
    },
  },
];

/** True when enough statutory data exists to render the legal bar. */
export const hasLegalIdentity = Boolean(
  ORGANISATION.legalForm || ORGANISATION.kvk || ORGANISATION.rsin
);
