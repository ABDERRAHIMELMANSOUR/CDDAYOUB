import { FileText, Download } from 'lucide-react';
import { useLocale } from '../../../i18n/LocaleProvider';
import { pick, type Localised } from '../../../i18n/localised';
import { LegalPage, LegalSection, Pending } from './LegalPage';
import {
  ORGANISATION,
  TRANSPARENCY_DOCUMENTS,
  MOROCCO_RELATIONSHIP_TEXT,
} from '../../../data/organisation';

/**
 * Transparency — the document set that converts "nice website" into
 * "credible counterparty".
 *
 * The Governance Principles block elsewhere on the site makes a transparency
 * claim; publishing these documents is what makes that claim credible. Each
 * document renders as available or as openly "not yet published" — never as a
 * dead link, and never implying a document exists when it does not.
 *
 * Translations: the English text is the authoritative version; the shared
 * LegalPage shell renders that clause on non-English locales.
 */
const COPY: Record<string, Localised<string>> = {
  eyebrow: { en: 'About', nl: 'Over ons', fr: 'À propos' },
  title: { en: 'Transparency', nl: 'Transparantie', fr: 'Transparence' },
  intro: {
    en: 'Our statutory details and governance documents, published so partners can verify who they are dealing with.',
    nl: 'Onze statutaire gegevens en bestuursdocumenten, gepubliceerd zodat partners kunnen nagaan met wie zij zakendoen.',
    fr: "Nos données statutaires et nos documents de gouvernance, publiés afin que nos partenaires puissent vérifier à qui ils ont affaire.",
  },

  statutoryTitle: {
    en: 'Statutory details',
    nl: 'Statutaire gegevens',
    fr: 'Données statutaires',
  },
  registeredName: {
    en: 'Registered name',
    nl: 'Statutaire naam',
    fr: 'Dénomination officielle',
  },
  legalForm: { en: 'Legal form', nl: 'Rechtsvorm', fr: 'Forme juridique' },
  kvkNumber: { en: 'KvK number', nl: 'KvK-nummer', fr: 'Numéro KvK' },
  rsin: { en: 'RSIN', nl: 'RSIN', fr: 'RSIN' },
  registeredAddress: {
    en: 'Registered address',
    nl: 'Vestigingsadres',
    fr: 'Adresse du siège',
  },

  moroccoTitle: {
    en: 'Relationship to CDD Morocco',
    nl: 'Relatie met CDD Marokko',
    fr: 'Relation avec le CDD Maroc',
  },
  moroccoFallback: {
    en: 'CDD Pays-Bas works in close partnership with Club des Dirigeants (CDD), founded in Morocco, around a shared mission of connecting business leaders across both markets.',
    nl: 'CDD Pays-Bas werkt nauw samen met Club des Dirigeants (CDD), opgericht in Marokko, rond een gedeelde missie: het verbinden van ondernemers en bestuurders in beide markten.',
    fr: "CDD Pays-Bas travaille en partenariat étroit avec le Club des Dirigeants (CDD), fondé au Maroc, autour d'une mission commune : relier les dirigeants d'entreprise des deux marchés.",
  },

  documentsTitle: {
    en: 'Governance documents',
    nl: 'Bestuursdocumenten',
    fr: 'Documents de gouvernance',
  },
  documentsPendingIntro: {
    en: 'Our governance documents are being prepared for publication. In the meantime they are available on request — email',
    nl: 'Onze bestuursdocumenten worden voorbereid voor publicatie. Tot die tijd zijn ze op aanvraag beschikbaar — mail naar',
    fr: "Nos documents de gouvernance sont en cours de préparation en vue de leur publication. Dans l'intervalle, ils sont disponibles sur demande — écrivez à",
  },
  download: { en: 'Download', nl: 'Downloaden', fr: 'Télécharger' },
  onRequest: {
    en: 'Available on request',
    nl: 'Op aanvraag beschikbaar',
    fr: 'Disponible sur demande',
  },

  remunerationTitle: {
    en: 'Board remuneration',
    nl: 'Bestuurdersbeloning',
    fr: 'Rémunération du conseil',
  },
  remunerationBefore: { en: 'Board members of CDD Pays-Bas serve', nl: 'Bestuursleden van CDD Pays-Bas zijn', fr: 'Les membres du conseil de CDD Pays-Bas exercent leurs fonctions' },
  remunerationEmphasis: { en: 'unpaid', nl: 'onbezoldigd', fr: 'à titre bénévole' },
  remunerationAfter: {
    en: '. Expenses incurred on behalf of the organisation are reimbursed against receipt. Stating this plainly matters: silence on remuneration reads as evasion.',
    nl: '. Kosten die namens de organisatie worden gemaakt, worden op declaratiebasis vergoed. Dit expliciet vermelden doet ertoe: zwijgen over beloning wordt gelezen als ontwijking.',
    fr: ". Les frais engagés pour le compte de l'organisation sont remboursés sur justificatif. Le dire clairement importe : le silence sur la rémunération est perçu comme une esquive.",
  },

  wbtrTitle: {
    en: 'Governance arrangements (WBTR)',
    nl: 'Bestuursregelingen (WBTR)',
    fr: 'Dispositifs de gouvernance (WBTR)',
  },
  wbtrText: {
    en: 'Dutch law (Wet bestuur en toezicht rechtspersonen) requires organisations to have arrangements covering conflicts of interest, the absence or incapacity of a director, and limits on multiple voting rights.',
    nl: 'De Nederlandse Wet bestuur en toezicht rechtspersonen (WBTR) verplicht organisaties tot regelingen voor tegenstrijdig belang, belet of ontstentenis van een bestuurder en beperking van meervoudig stemrecht.',
    fr: "La loi néerlandaise sur l'administration et la surveillance des personnes morales (WBTR) impose aux organisations de prévoir des dispositions relatives aux conflits d'intérêts, à l'absence ou à l'empêchement d'un administrateur, et à la limitation du vote plural.",
  },
};

export function Transparency() {
  const { locale } = useLocale();
  const c = (key: string) => pick(COPY[key], locale);
  const published = TRANSPARENCY_DOCUMENTS.filter((d) => d.href);

  return (
    <LegalPage eyebrow={c('eyebrow')} title={c('title')} intro={c('intro')}>
      <LegalSection title={c('statutoryTitle')}>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              {c('registeredName')}
            </dt>
            <dd className="mt-1 text-lg text-gray-900">{ORGANISATION.fullName}</dd>
          </div>
          {ORGANISATION.legalForm && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                {c('legalForm')}
              </dt>
              <dd className="mt-1 text-lg text-gray-900">{ORGANISATION.legalForm}</dd>
            </div>
          )}
          {ORGANISATION.kvk && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                {c('kvkNumber')}
              </dt>
              <dd className="mt-1 text-lg text-gray-900">{ORGANISATION.kvk}</dd>
            </div>
          )}
          {ORGANISATION.rsin && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                {c('rsin')}
              </dt>
              <dd className="mt-1 text-lg text-gray-900">{ORGANISATION.rsin}</dd>
            </div>
          )}
          {ORGANISATION.registeredAddress && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                {c('registeredAddress')}
              </dt>
              <dd className="mt-1 text-lg text-gray-900">{ORGANISATION.registeredAddress}</dd>
            </div>
          )}
        </dl>
        <Pending>
          legal form (vereniging or stichting), KvK number, RSIN and registered address. These are
          the details a Dutch corporate legal team, ministry or bank will ask for first; their
          absence is conspicuous.
        </Pending>
      </LegalSection>

      <LegalSection title={c('moroccoTitle')}>
        {ORGANISATION.moroccoRelationship ? (
          <p>{pick(MOROCCO_RELATIONSHIP_TEXT[ORGANISATION.moroccoRelationship], locale)}</p>
        ) : (
          <p>{c('moroccoFallback')}</p>
        )}
        <Pending>
          the structural relationship — chapter, licensed affiliate, or independent Dutch entity
          sharing a name and mission. Set <code>moroccoRelationship</code> in{' '}
          <code>src/data/organisation.ts</code> and the precise sentence appears here and on the
          About page.
        </Pending>
      </LegalSection>

      <LegalSection title={c('documentsTitle')}>
        {published.length === 0 ? (
          <p>
            {c('documentsPendingIntro')}{' '}
            <a
              href={`mailto:${ORGANISATION.email}`}
              className="text-blue-700 underline hover:text-blue-900"
            >
              {ORGANISATION.email}
            </a>
            .
          </p>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {TRANSPARENCY_DOCUMENTS.map((doc) =>
            doc.href ? (
              <a
                key={doc.label.en}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <FileText className="h-6 w-6 text-blue-700 flex-shrink-0 mt-0.5" />
                <span>
                  <span className="block font-semibold text-gray-900">
                    {pick(doc.label, locale)}
                  </span>
                  <span className="block text-sm text-gray-600 mt-1">
                    {pick(doc.description, locale)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-blue-700 mt-2 font-medium">
                    <Download className="h-4 w-4" /> {c('download')}
                  </span>
                </span>
              </a>
            ) : (
              <div
                key={doc.label.en}
                className="flex items-start gap-4 p-5 rounded-2xl border border-dashed border-gray-300 bg-gray-50"
              >
                <FileText className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" />
                <span>
                  <span className="block font-semibold text-gray-800">
                    {pick(doc.label, locale)}
                  </span>
                  <span className="block text-sm text-gray-600 mt-1">
                    {pick(doc.description, locale)}
                  </span>
                  <span className="block text-sm text-gray-600 mt-2 italic">{c('onRequest')}</span>
                </span>
              </div>
            )
          )}
        </div>
      </LegalSection>

      <LegalSection title={c('remunerationTitle')}>
        {ORGANISATION.boardIsUnpaid ? (
          <p>
            {c('remunerationBefore')} <strong>{c('remunerationEmphasis')}</strong>
            {c('remunerationAfter')}
          </p>
        ) : (
          <Pending>the board remuneration policy.</Pending>
        )}
      </LegalSection>

      <LegalSection title={c('wbtrTitle')}>
        <p>{c('wbtrText')}</p>
        <Pending>
          with the treasurer that the statutes cover conflicts of interest, director
          absence/incapacity, and multiple-voting-rights limits — then state so here.
        </Pending>
      </LegalSection>
    </LegalPage>
  );
}
