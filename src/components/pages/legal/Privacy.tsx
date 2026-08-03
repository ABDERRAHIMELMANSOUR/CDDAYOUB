import { Link } from 'react-router-dom';
import { LegalPage, LegalSection, Pending } from './LegalPage';
import { ORGANISATION } from '../../../data/organisation';

/**
 * Privacy statement (AVG / GDPR).
 *
 * Replaces the single paragraph that previously lived only on the Contact page.
 * The substance of that paragraph — that CDD collects contact details solely to
 * respond to enquiries and does not sell or share them — is preserved and
 * expanded into the disclosures the AVG actually requires.
 */
export function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Statement"
      intro="How CDD Pays-Bas collects, uses and protects your personal data."
      lastUpdated="July 2026"
    >
      <LegalSection title="Who we are">
        <p>
          {ORGANISATION.fullName} ({ORGANISATION.name}) is the controller of the personal data
          described in this statement. You can reach us at{' '}
          <a
            href={`mailto:${ORGANISATION.email}`}
            className="text-blue-700 underline hover:text-blue-900"
          >
            {ORGANISATION.email}
          </a>
          .
        </p>
        {(ORGANISATION.legalForm || ORGANISATION.kvk) && (
          <p>
            {ORGANISATION.legalForm && <>Legal form: {ORGANISATION.legalForm}. </>}
            {ORGANISATION.kvk && <>KvK: {ORGANISATION.kvk}. </>}
            {ORGANISATION.registeredAddress && <>Registered at {ORGANISATION.registeredAddress}.</>}
          </p>
        )}
        <Pending>
          legal form, KvK number and registered address, so this section can identify the
          controller as the AVG requires.
        </Pending>
      </LegalSection>

      <LegalSection title="What we collect and why">
        <p>
          We only collect personal data you give us directly. In practice that means the contact
          form and any correspondence that follows from it.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Contact details</strong> — your name, email address and, if you provide them,
            your organisation and role. We use these solely to respond to your enquiry and, where
            relevant, to continue the conversation about membership, partnership or events.
          </li>
          <li>
            <strong>The content of your message</strong> — kept so we can handle your request
            properly and keep a record of what was agreed.
          </li>
        </ul>
        <p>
          We do not sell your data, we do not share it with third parties for their own marketing,
          and we do not use it to build advertising profiles.
        </p>
      </LegalSection>

      <LegalSection title="Legal basis">
        <p>
          We process contact data on the basis of your <strong>consent</strong> when you choose to
          contact us, and on the basis of our <strong>legitimate interest</strong> in maintaining
          the professional network the organisation exists to run. Where processing is necessary to
          prepare or perform an agreement — a membership or partnership — the basis is the{' '}
          <strong>performance of a contract</strong>.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep enquiry correspondence for as long as needed to handle the request and to
          maintain a reasonable record of our dealings with you, and no longer than necessary for
          the purpose it was collected for. You can ask us to delete it sooner at any time.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>Under the AVG (GDPR) you have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>access the personal data we hold about you;</li>
          <li>have inaccurate data corrected;</li>
          <li>have your data erased;</li>
          <li>restrict or object to processing;</li>
          <li>receive your data in a portable form;</li>
          <li>withdraw consent at any time, without affecting processing already carried out.</li>
        </ul>
        <p>
          To exercise any of these, email{' '}
          <a
            href={`mailto:${ORGANISATION.email}`}
            className="text-blue-700 underline hover:text-blue-900"
          >
            {ORGANISATION.email}
          </a>
          . You also have the right to lodge a complaint with the Dutch data protection authority,{' '}
          <a
            href="https://autoriteitpersoonsgegevens.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Autoriteit Persoonsgegevens
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          This website sets no tracking or advertising cookies. See our{' '}
          <Link to="/cookies" className="text-blue-700 underline hover:text-blue-900">
            cookie statement
          </Link>{' '}
          for details.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          The site is served over HTTPS and access to enquiry correspondence is limited to the
          people within CDD Pays-Bas who need it to respond to you.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
