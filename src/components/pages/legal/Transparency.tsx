import { FileText, Download } from 'lucide-react';
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
 */
export function Transparency() {
  const published = TRANSPARENCY_DOCUMENTS.filter((d) => d.href);

  return (
    <LegalPage
      eyebrow="About"
      title="Transparency"
      intro="Our statutory details and governance documents, published so partners can verify who they are dealing with."
    >
      <LegalSection title="Statutory details">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              Registered name
            </dt>
            <dd className="mt-1 text-lg text-gray-900">{ORGANISATION.fullName}</dd>
          </div>
          {ORGANISATION.legalForm && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Legal form
              </dt>
              <dd className="mt-1 text-lg text-gray-900">{ORGANISATION.legalForm}</dd>
            </div>
          )}
          {ORGANISATION.kvk && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                KvK number
              </dt>
              <dd className="mt-1 text-lg text-gray-900">{ORGANISATION.kvk}</dd>
            </div>
          )}
          {ORGANISATION.rsin && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">RSIN</dt>
              <dd className="mt-1 text-lg text-gray-900">{ORGANISATION.rsin}</dd>
            </div>
          )}
          {ORGANISATION.registeredAddress && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Registered address
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

      <LegalSection title="Relationship to CDD Morocco">
        {ORGANISATION.moroccoRelationship ? (
          <p>{MOROCCO_RELATIONSHIP_TEXT[ORGANISATION.moroccoRelationship]}</p>
        ) : (
          <p>
            CDD Pays-Bas works in close partnership with Club des Dirigeants (CDD), founded in
            Morocco, around a shared mission of connecting business leaders across both markets.
          </p>
        )}
        <Pending>
          the structural relationship — chapter, licensed affiliate, or independent Dutch entity
          sharing a name and mission. Set <code>moroccoRelationship</code> in{' '}
          <code>src/data/organisation.ts</code> and the precise sentence appears here and on the
          About page.
        </Pending>
      </LegalSection>

      <LegalSection title="Governance documents">
        {published.length === 0 ? (
          <p>
            Our governance documents are being prepared for publication. In the meantime they are
            available on request — email{' '}
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
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <FileText className="h-6 w-6 text-blue-700 flex-shrink-0 mt-0.5" />
                <span>
                  <span className="block font-semibold text-gray-900">{doc.label}</span>
                  <span className="block text-sm text-gray-600 mt-1">{doc.description}</span>
                  <span className="inline-flex items-center gap-1 text-sm text-blue-700 mt-2 font-medium">
                    <Download className="h-4 w-4" /> Download
                  </span>
                </span>
              </a>
            ) : (
              <div
                key={doc.label}
                className="flex items-start gap-4 p-5 rounded-2xl border border-dashed border-gray-300 bg-gray-50"
              >
                <FileText className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" />
                <span>
                  <span className="block font-semibold text-gray-800">{doc.label}</span>
                  <span className="block text-sm text-gray-600 mt-1">{doc.description}</span>
                  <span className="block text-sm text-gray-600 mt-2 italic">
                    Available on request
                  </span>
                </span>
              </div>
            )
          )}
        </div>
      </LegalSection>

      <LegalSection title="Board remuneration">
        {ORGANISATION.boardIsUnpaid ? (
          <p>
            Board members of CDD Pays-Bas serve <strong>unpaid</strong>. Expenses incurred on behalf
            of the organisation are reimbursed against receipt. Stating this plainly matters:
            silence on remuneration reads as evasion.
          </p>
        ) : (
          <Pending>the board remuneration policy.</Pending>
        )}
      </LegalSection>

      <LegalSection title="Governance arrangements (WBTR)">
        <p>
          Dutch law (Wet bestuur en toezicht rechtspersonen) requires organisations to have
          arrangements covering conflicts of interest, the absence or incapacity of a director, and
          limits on multiple voting rights.
        </p>
        <Pending>
          with the treasurer that the statutes cover conflicts of interest, director
          absence/incapacity, and multiple-voting-rights limits — then state so here.
        </Pending>
      </LegalSection>
    </LegalPage>
  );
}
