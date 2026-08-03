import { Link } from 'react-router-dom';
import { LegalPage, LegalSection } from './LegalPage';

/**
 * Cookie statement.
 *
 * Deliberately NOT accompanied by a consent banner. Telecommunicatiewet art.
 * 11.7a requires consent for storing or reading information on a user's device
 * except where it is strictly necessary. This site currently loads no
 * analytics, no tag manager, no embedded video and no third-party scripts, so
 * there is nothing to consent to — a banner would ask permission for something
 * that does not happen, which is worse than no banner.
 *
 * If analytics is added under ticket 24, the exemption is preserved by using a
 * cookieless, non-tracking tool (Plausible, or self-hosted Matomo configured
 * without cookies). If any tool is added that DOES set non-functional cookies,
 * a consent-blocking banner becomes mandatory and this page must be updated.
 */
export function Cookies() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Statement"
      intro="This website does not track you."
      lastUpdated="July 2026"
    >
      <LegalSection title="We set no tracking cookies">
        <p>
          CDD Pays-Bas does not use advertising cookies, analytics cookies, tracking pixels, or
          third-party scripts that profile visitors. We do not embed content that tracks you, and
          we do not share browsing data with anyone.
        </p>
        <p>
          Because nothing non-essential is stored on or read from your device, no cookie consent is
          required under article 11.7a of the Dutch Telecommunicatiewet, and you will not see a
          consent banner on this site.
        </p>
      </LegalSection>

      <LegalSection title="Strictly necessary storage">
        <p>
          The site may use a small amount of strictly necessary browser storage to function — for
          example, to keep the page working correctly as you navigate. This is exempt from the
          consent requirement, contains no personal data, and is not used to recognise you across
          visits or across websites.
        </p>
      </LegalSection>

      <LegalSection title="Website statistics">
        <p>
          We measure how the site is used with a privacy-friendly, cookieless analytics tool. It
          sets no cookies, writes nothing to your device, does not fingerprint your browser, and
          cannot follow you to other websites. All figures are aggregated, and none of them
          identify you.
        </p>
        <p>
          Because nothing is stored on or read from your device, this measurement does not require
          consent under article 11.7a of the Telecommunicatiewet — which is precisely why we chose
          a tool that works this way rather than one that would oblige us to interrupt you with a
          banner.
        </p>
      </LegalSection>

      <LegalSection title="What we will never add without asking">
        <p>
          Tools such as Google Analytics, advertising pixels or session-recording scripts do store
          identifiers on your device. We do not use them. If we ever introduced anything of that
          kind, we would ask for your consent before it loaded, and this page would be updated
          first.
        </p>
      </LegalSection>

      <LegalSection title="Related">
        <p>
          See our{' '}
          <Link to="/privacy" className="text-blue-700 underline hover:text-blue-900">
            privacy statement
          </Link>{' '}
          for how we handle personal data you send us directly.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
