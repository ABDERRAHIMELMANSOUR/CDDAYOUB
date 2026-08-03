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

export interface LegalDocument {
  /** Display name, e.g. "Statutes (statuten)". */
  label: string;
  /** Public URL or path to the PDF. Null until the document is published. */
  href: string | null;
  /** Short explanation of what the document contains. */
  description: string;
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
  string
> = {
  chapter:
    'CDD Pays-Bas is the Netherlands chapter of Club des Dirigeants (CDD), operating under its governance while registered in the Netherlands.',
  affiliate:
    'CDD Pays-Bas is a licensed affiliate of Club des Dirigeants (CDD), operating as an independently registered Dutch entity under a shared name and mission.',
  independent:
    'CDD Pays-Bas is an independent Dutch legal entity that shares its name, mission and close working ties with Club des Dirigeants (CDD) in Morocco, but is separately registered and governed.',
};

/**
 * The transparency document set — what converts "nice website" into
 * "credible counterparty". Each stays hidden until a URL is supplied.
 */
export const TRANSPARENCY_DOCUMENTS: LegalDocument[] = [
  {
    label: 'Statutes (statuten)',
    href: null,
    description:
      'The constitutional document setting out purpose, governance, membership and decision-making.',
  },
  {
    label: 'Policy plan (beleidsplan)',
    href: null,
    description:
      'Objectives and planned activities, including how the organisation intends to use its funds.',
  },
  {
    label: 'Annual report (jaarverslag)',
    href: null,
    description: 'A record of activities, commission work and events over the past year.',
  },
  {
    label: 'Financial summary (financiële verantwoording)',
    href: null,
    description: 'Income, expenditure and balance for the most recent financial year.',
  },
];

/** True when enough statutory data exists to render the legal bar. */
export const hasLegalIdentity = Boolean(
  ORGANISATION.legalForm || ORGANISATION.kvk || ORGANISATION.rsin
);
