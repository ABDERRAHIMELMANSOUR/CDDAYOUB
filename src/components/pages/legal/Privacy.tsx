import { LocaleLink as Link } from '../../../i18n/LocaleLink';
import { useLocale } from '../../../i18n/LocaleProvider';
import { pick, type Localised } from '../../../i18n/localised';
import { LegalPage, LegalSection, Pending } from './LegalPage';
import { ORGANISATION } from '../../../data/organisation';

/**
 * Privacy statement (AVG / GDPR).
 *
 * Replaces the single paragraph that previously lived only on the Contact page.
 * The substance of that paragraph — that CDD collects contact details solely to
 * respond to enquiries and does not sell or share them — is preserved and
 * expanded into the disclosures the AVG actually requires.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * The Dutch and French versions are provided for accessibility. The ENGLISH
 * text is the authoritative version — the shared LegalPage shell renders that
 * clause automatically on non-English locales. A professional legal review is
 * recommended before the board relies on the translations, because a
 * mistranslated retention period or lawful basis is a compliance exposure
 * rather than a cosmetic defect.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const COPY: Record<string, Localised<string>> = {
  eyebrow: { en: 'Legal', nl: 'Juridisch', fr: 'Mentions légales' },
  title: {
    en: 'Privacy Statement',
    nl: 'Privacyverklaring',
    fr: 'Déclaration de confidentialité',
  },
  intro: {
    en: 'How CDD Pays-Bas collects, uses and protects your personal data.',
    nl: 'Hoe CDD Pays-Bas uw persoonsgegevens verzamelt, gebruikt en beschermt.',
    fr: 'Comment CDD Pays-Bas collecte, utilise et protège vos données personnelles.',
  },
  lastUpdated: { en: 'July 2026', nl: 'juli 2026', fr: 'juillet 2026' },

  whoTitle: { en: 'Who we are', nl: 'Wie wij zijn', fr: 'Qui nous sommes' },
  whoText: {
    en: 'is the controller of the personal data described in this statement. You can reach us at',
    nl: 'is de verwerkingsverantwoordelijke voor de persoonsgegevens die in deze verklaring worden beschreven. U kunt ons bereiken via',
    fr: 'est le responsable du traitement des données personnelles décrites dans la présente déclaration. Vous pouvez nous joindre à',
  },
  legalFormLabel: { en: 'Legal form', nl: 'Rechtsvorm', fr: 'Forme juridique' },
  registeredAt: { en: 'Registered at', nl: 'Gevestigd te', fr: 'Établi à' },
  pendingController: {
    en: 'legal form, KvK number and registered address, so this section can identify the controller as the AVG requires.',
    nl: 'rechtsvorm, KvK-nummer en vestigingsadres, zodat dit onderdeel de verwerkingsverantwoordelijke kan identificeren zoals de AVG vereist.',
    fr: "la forme juridique, le numéro KvK et l'adresse d'établissement, afin que cette section identifie le responsable du traitement comme l'exige le RGPD.",
  },

  collectTitle: {
    en: 'What we collect and why',
    nl: 'Wat wij verzamelen en waarom',
    fr: 'Ce que nous collectons et pourquoi',
  },
  collect1: {
    en: 'We only collect personal data you give us directly. In practice that means the contact form and any correspondence that follows from it.',
    nl: 'Wij verzamelen uitsluitend persoonsgegevens die u ons rechtstreeks verstrekt. In de praktijk gaat het om het contactformulier en de correspondentie die daaruit voortvloeit.',
    fr: 'Nous ne collectons que les données personnelles que vous nous fournissez directement. En pratique, il s’agit du formulaire de contact et de la correspondance qui en découle.',
  },
  collectContactLabel: { en: 'Contact details', nl: 'Contactgegevens', fr: 'Coordonnées' },
  collectContactText: {
    en: 'your name, email address and, if you provide them, your organisation and role. We use these solely to respond to your enquiry and, where relevant, to continue the conversation about membership, partnership or events.',
    nl: 'uw naam, e-mailadres en, indien u die opgeeft, uw organisatie en functie. Wij gebruiken deze uitsluitend om op uw vraag te reageren en, waar relevant, om het gesprek over lidmaatschap, partnerschap of evenementen voort te zetten.',
    fr: "votre nom, votre adresse e-mail et, si vous les indiquez, votre organisation et votre fonction. Nous les utilisons uniquement pour répondre à votre demande et, le cas échéant, poursuivre l'échange sur l'adhésion, un partenariat ou des événements.",
  },
  collectMessageLabel: {
    en: 'The content of your message',
    nl: 'De inhoud van uw bericht',
    fr: 'Le contenu de votre message',
  },
  collectMessageText: {
    en: 'kept so we can handle your request properly and keep a record of what was agreed.',
    nl: 'bewaard zodat wij uw verzoek goed kunnen behandelen en kunnen vastleggen wat is afgesproken.',
    fr: 'conservé afin de traiter correctement votre demande et de garder trace de ce qui a été convenu.',
  },
  collect2: {
    en: 'We do not sell your data, we do not share it with third parties for their own marketing, and we do not use it to build advertising profiles.',
    nl: 'Wij verkopen uw gegevens niet, delen ze niet met derden voor hun eigen marketing en gebruiken ze niet om advertentieprofielen op te bouwen.',
    fr: "Nous ne vendons pas vos données, nous ne les partageons pas avec des tiers à des fins de marketing propre et nous ne les utilisons pas pour constituer des profils publicitaires.",
  },

  basisTitle: { en: 'Legal basis', nl: 'Rechtsgrondslag', fr: 'Base légale' },
  basisText: {
    en: 'We process contact data on the basis of your consent when you choose to contact us, and on the basis of our legitimate interest in maintaining the professional network the organisation exists to run. Where processing is necessary to prepare or perform an agreement — a membership or partnership — the basis is the performance of a contract.',
    nl: 'Wij verwerken contactgegevens op grond van uw toestemming wanneer u ervoor kiest contact met ons op te nemen, en op grond van ons gerechtvaardigd belang bij het onderhouden van het professionele netwerk waarvoor de organisatie bestaat. Waar verwerking noodzakelijk is om een overeenkomst voor te bereiden of uit te voeren — een lidmaatschap of partnerschap — is de grondslag de uitvoering van een overeenkomst.',
    fr: "Nous traitons les données de contact sur la base de votre consentement lorsque vous choisissez de nous contacter, et sur la base de notre intérêt légitime à entretenir le réseau professionnel qui constitue la raison d'être de l'organisation. Lorsque le traitement est nécessaire à la préparation ou à l'exécution d'un contrat — adhésion ou partenariat —, la base est l'exécution du contrat.",
  },

  retentionTitle: {
    en: 'How long we keep it',
    nl: 'Hoelang wij gegevens bewaren',
    fr: 'Durée de conservation',
  },
  retentionText: {
    en: 'We keep enquiry correspondence for as long as needed to handle the request and to maintain a reasonable record of our dealings with you, and no longer than necessary for the purpose it was collected for. You can ask us to delete it sooner at any time.',
    nl: 'Wij bewaren correspondentie over verzoeken zolang als nodig is om het verzoek af te handelen en om een redelijk overzicht van ons contact met u te behouden, en niet langer dan noodzakelijk voor het doel waarvoor de gegevens zijn verzameld. U kunt ons op elk moment vragen deze eerder te verwijderen.',
    fr: "Nous conservons la correspondance relative aux demandes aussi longtemps que nécessaire pour traiter la demande et garder une trace raisonnable de nos échanges, et pas au-delà de ce qui est nécessaire à la finalité de la collecte. Vous pouvez à tout moment nous demander de la supprimer plus tôt.",
  },

  rightsTitle: { en: 'Your rights', nl: 'Uw rechten', fr: 'Vos droits' },
  rightsIntro: {
    en: 'Under the AVG (GDPR) you have the right to:',
    nl: 'Op grond van de AVG heeft u het recht om:',
    fr: 'En vertu du RGPD, vous avez le droit de :',
  },
  rightsOutro: {
    en: 'To exercise any of these, email',
    nl: 'Om een van deze rechten uit te oefenen, mailt u naar',
    fr: "Pour exercer l'un de ces droits, écrivez à",
  },
  rightsComplaint: {
    en: 'You also have the right to lodge a complaint with the Dutch data protection authority,',
    nl: 'U heeft ook het recht een klacht in te dienen bij de Nederlandse toezichthouder,',
    fr: 'Vous avez également le droit de déposer une plainte auprès de l’autorité néerlandaise de protection des données,',
  },

  cookiesTitle: { en: 'Cookies', nl: 'Cookies', fr: 'Cookies' },
  cookiesText: {
    en: 'This website sets no tracking or advertising cookies. See our',
    nl: 'Deze website plaatst geen tracking- of advertentiecookies. Zie onze',
    fr: 'Ce site ne place aucun cookie de suivi ou publicitaire. Consultez notre',
  },
  cookiesLink: {
    en: 'cookie statement',
    nl: 'cookieverklaring',
    fr: 'déclaration relative aux cookies',
  },
  cookiesOutro: { en: 'for details.', nl: 'voor meer informatie.', fr: 'pour plus de détails.' },

  securityTitle: { en: 'Security', nl: 'Beveiliging', fr: 'Sécurité' },
  securityText: {
    en: 'The site is served over HTTPS and access to enquiry correspondence is limited to the people within CDD Pays-Bas who need it to respond to you.',
    nl: 'De site wordt via HTTPS aangeboden en toegang tot correspondentie over verzoeken is beperkt tot de mensen binnen CDD Pays-Bas die deze nodig hebben om u te antwoorden.',
    fr: "Le site est servi en HTTPS et l'accès à la correspondance relative aux demandes est limité aux personnes de CDD Pays-Bas qui en ont besoin pour vous répondre.",
  },
};

const RIGHTS: Localised<string[]> = {
  en: [
    'access the personal data we hold about you;',
    'have inaccurate data corrected;',
    'have your data erased;',
    'restrict or object to processing;',
    'receive your data in a portable form;',
    'withdraw consent at any time, without affecting processing already carried out.',
  ],
  nl: [
    'de persoonsgegevens in te zien die wij over u bewaren;',
    'onjuiste gegevens te laten corrigeren;',
    'uw gegevens te laten wissen;',
    'de verwerking te beperken of daartegen bezwaar te maken;',
    'uw gegevens in een overdraagbare vorm te ontvangen;',
    'uw toestemming op elk moment in te trekken, zonder gevolgen voor reeds uitgevoerde verwerking.',
  ],
  fr: [
    'accéder aux données personnelles que nous détenons à votre sujet ;',
    'faire rectifier des données inexactes ;',
    'faire effacer vos données ;',
    'limiter le traitement ou vous y opposer ;',
    'recevoir vos données dans un format portable ;',
    'retirer votre consentement à tout moment, sans effet sur les traitements déjà réalisés.',
  ],
};

export function Privacy() {
  const { locale } = useLocale();
  const c = (key: string) => pick(COPY[key], locale);
  const mail = (
    <a href={`mailto:${ORGANISATION.email}`} className="text-blue-700 underline hover:text-blue-900">
      {ORGANISATION.email}
    </a>
  );

  return (
    <LegalPage
      eyebrow={c('eyebrow')}
      title={c('title')}
      intro={c('intro')}
      lastUpdated={c('lastUpdated')}
    >
      <LegalSection title={c('whoTitle')}>
        <p>
          {ORGANISATION.fullName} ({ORGANISATION.name}) {c('whoText')} {mail}.
        </p>
        {(ORGANISATION.legalForm || ORGANISATION.kvk) && (
          <p>
            {ORGANISATION.legalForm && (
              <>
                {c('legalFormLabel')}: {ORGANISATION.legalForm}.{' '}
              </>
            )}
            {ORGANISATION.kvk && <>KvK: {ORGANISATION.kvk}. </>}
            {ORGANISATION.registeredAddress && (
              <>
                {c('registeredAt')} {ORGANISATION.registeredAddress}.
              </>
            )}
          </p>
        )}
        <Pending>{c('pendingController')}</Pending>
      </LegalSection>

      <LegalSection title={c('collectTitle')}>
        <p>{c('collect1')}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>{c('collectContactLabel')}</strong> — {c('collectContactText')}
          </li>
          <li>
            <strong>{c('collectMessageLabel')}</strong> — {c('collectMessageText')}
          </li>
        </ul>
        <p>{c('collect2')}</p>
      </LegalSection>

      <LegalSection title={c('basisTitle')}>
        <p>{c('basisText')}</p>
      </LegalSection>

      <LegalSection title={c('retentionTitle')}>
        <p>{c('retentionText')}</p>
      </LegalSection>

      <LegalSection title={c('rightsTitle')}>
        <p>{c('rightsIntro')}</p>
        <ul className="list-disc pl-6 space-y-2">
          {pick(RIGHTS, locale).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          {c('rightsOutro')} {mail}. {c('rightsComplaint')}{' '}
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

      <LegalSection title={c('cookiesTitle')}>
        <p>
          {c('cookiesText')}{' '}
          <Link to="/cookies" className="text-blue-700 underline hover:text-blue-900">
            {c('cookiesLink')}
          </Link>{' '}
          {c('cookiesOutro')}
        </p>
      </LegalSection>

      <LegalSection title={c('securityTitle')}>
        <p>{c('securityText')}</p>
      </LegalSection>
    </LegalPage>
  );
}
