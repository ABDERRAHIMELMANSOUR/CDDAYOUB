import { LegalPage, LegalSection } from './LegalPage';
import { ORGANISATION } from '../../../data/organisation';

/**
 * Accessibility statement — expected by public-sector partners under EN 301 549.
 *
 * States the target standard honestly, including known limitations, rather than
 * claiming full conformance the site has not been formally audited against.
 */
export function Accessibility() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Accessibility Statement"
      intro="Our commitment to making cddpaysbas.nl usable by everyone."
      lastUpdated="July 2026"
    >
      <LegalSection title="Our target">
        <p>
          CDD Pays-Bas aims to meet <strong>WCAG 2.2 level AA</strong>, the standard referenced by
          EN 301 549 and expected of organisations working with Dutch public-sector partners.
        </p>
      </LegalSection>

      <LegalSection title="Current status">
        <p>
          We describe this site as <strong>partially conformant</strong> with WCAG 2.2 AA. That
          means most of the standard is met, and we are open about the parts that are still being
          addressed rather than claiming conformance we have not formally verified.
        </p>
        <p>Measures already in place:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Text and interface colours reviewed against AA contrast ratios.</li>
          <li>Semantic headings and landmarks so the page can be navigated by structure.</li>
          <li>Meaningful alternative text on images that carry information.</li>
          <li>Keyboard-operable navigation, with a visible focus indicator.</li>
          <li>Responsive layout that supports zoom and reflow without loss of content.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Known limitations">
        <p>We are aware of the following and are working on them:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The site is currently available in English only. Dutch and French versions are planned,
            which will let visitors read it in their own language.
          </li>
          <li>
            Some decorative imagery is being replaced with CDD's own photography, which will also
            improve the relevance of alternative text.
          </li>
          <li>
            No independent third-party accessibility audit has been carried out yet.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Feedback">
        <p>
          If you encounter a barrier on this site, please tell us — it is the fastest way for us to
          fix it. Email{' '}
          <a
            href={`mailto:${ORGANISATION.email}`}
            className="text-blue-700 underline hover:text-blue-900"
          >
            {ORGANISATION.email}
          </a>{' '}
          describing the page and the problem, and we will respond and tell you what we can do.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
