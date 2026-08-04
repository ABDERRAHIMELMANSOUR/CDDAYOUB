import { LocaleLink as Link } from '../../../i18n/LocaleLink';
import { useLocale } from '../../../i18n/LocaleProvider';
import { pick, type Localised } from '../../../i18n/localised';
import { LegalPage, LegalSection } from './LegalPage';

/**
 * Cookie statement.
 *
 * Deliberately NOT accompanied by a consent banner. Telecommunicatiewet art.
 * 11.7a requires consent for storing or reading information on a user's device
 * except where it is strictly necessary. Our analytics is cookieless and writes
 * nothing to the device, so there is nothing to consent to — a banner would ask
 * permission for something that does not happen.
 *
 * If any tool is ever added that DOES set non-functional cookies, a
 * consent-blocking banner becomes mandatory and this page must be updated
 * first. See src/lib/analytics.ts.
 *
 * Translations: the English text is the authoritative version — the shared
 * LegalPage shell renders that clause on non-English locales.
 */
const COPY: Record<string, Localised<string>> = {
  eyebrow: { en: 'Legal', nl: 'Juridisch', fr: 'Mentions légales' },
  title: {
    en: 'Cookie Statement',
    nl: 'Cookieverklaring',
    fr: 'Déclaration relative aux cookies',
  },
  intro: {
    en: 'This website does not track you.',
    nl: 'Deze website volgt u niet.',
    fr: 'Ce site web ne vous suit pas à la trace.',
  },
  lastUpdated: { en: 'July 2026', nl: 'juli 2026', fr: 'juillet 2026' },

  noTrackingTitle: {
    en: 'We set no tracking cookies',
    nl: 'Wij plaatsen geen trackingcookies',
    fr: 'Nous ne plaçons aucun cookie de suivi',
  },
  noTracking1: {
    en: 'CDD Pays-Bas does not use advertising cookies, analytics cookies, tracking pixels, or third-party scripts that profile visitors. We do not embed content that tracks you, and we do not share browsing data with anyone.',
    nl: 'CDD Pays-Bas gebruikt geen advertentiecookies, analysecookies, trackingpixels of scripts van derden die bezoekers profileren. Wij plaatsen geen ingesloten content die u volgt en delen uw surfgedrag met niemand.',
    fr: "CDD Pays-Bas n'utilise ni cookies publicitaires, ni cookies analytiques, ni pixels de suivi, ni scripts tiers qui profilent les visiteurs. Nous n'intégrons aucun contenu qui vous suit et ne partageons vos données de navigation avec personne.",
  },
  noTracking2: {
    en: 'Because nothing non-essential is stored on or read from your device, no cookie consent is required under article 11.7a of the Dutch Telecommunicatiewet, and you will not see a consent banner on this site.',
    nl: 'Omdat er niets niet-noodzakelijks op uw apparaat wordt opgeslagen of daarvan wordt gelezen, is geen cookietoestemming vereist op grond van artikel 11.7a van de Telecommunicatiewet, en ziet u op deze site geen toestemmingsbanner.',
    fr: "Puisque rien de non essentiel n'est stocké sur votre appareil ni lu depuis celui-ci, aucun consentement aux cookies n'est requis au titre de l'article 11.7a de la loi néerlandaise sur les télécommunications, et vous ne verrez aucune bannière de consentement sur ce site.",
  },

  necessaryTitle: {
    en: 'Strictly necessary storage',
    nl: 'Strikt noodzakelijke opslag',
    fr: 'Stockage strictement nécessaire',
  },
  necessary1: {
    en: 'The site may use a small amount of strictly necessary browser storage to function — for example, to keep the page working correctly as you navigate. This is exempt from the consent requirement, contains no personal data, and is not used to recognise you across visits or across websites.',
    nl: 'De site gebruikt mogelijk een kleine hoeveelheid strikt noodzakelijke browseropslag om te functioneren — bijvoorbeeld om de pagina correct te laten werken terwijl u navigeert. Dit is vrijgesteld van de toestemmingsplicht, bevat geen persoonsgegevens en wordt niet gebruikt om u te herkennen tussen bezoeken of tussen websites.',
    fr: "Le site peut utiliser une faible quantité de stockage navigateur strictement nécessaire à son fonctionnement — par exemple pour que la page fonctionne correctement pendant votre navigation. Cela est exempté de l'obligation de consentement, ne contient aucune donnée personnelle et ne sert pas à vous reconnaître d'une visite à l'autre ou d'un site à l'autre.",
  },

  statsTitle: {
    en: 'Website statistics',
    nl: 'Websitestatistieken',
    fr: 'Statistiques du site',
  },
  stats1: {
    en: 'We measure how the site is used with a privacy-friendly, cookieless analytics tool. It sets no cookies, writes nothing to your device, does not fingerprint your browser, and cannot follow you to other websites. All figures are aggregated, and none of them identify you.',
    nl: 'Wij meten het gebruik van de site met een privacyvriendelijk, cookieloos analysehulpmiddel. Het plaatst geen cookies, schrijft niets naar uw apparaat, neemt geen vingerafdruk van uw browser en kan u niet naar andere websites volgen. Alle cijfers zijn geaggregeerd en geen daarvan identificeert u.',
    fr: "Nous mesurons l'utilisation du site à l'aide d'un outil d'analyse respectueux de la vie privée et sans cookies. Il ne place aucun cookie, n'écrit rien sur votre appareil, ne prend pas d'empreinte de votre navigateur et ne peut pas vous suivre sur d'autres sites. Toutes les données sont agrégées et aucune ne permet de vous identifier.",
  },
  stats2: {
    en: 'Because nothing is stored on or read from your device, this measurement does not require consent under article 11.7a of the Telecommunicatiewet — which is precisely why we chose a tool that works this way rather than one that would oblige us to interrupt you with a banner.',
    nl: 'Omdat er niets op uw apparaat wordt opgeslagen of daarvan wordt gelezen, vereist deze meting geen toestemming op grond van artikel 11.7a van de Telecommunicatiewet — precies daarom kozen wij een hulpmiddel dat zo werkt, in plaats van een dat ons zou dwingen u met een banner te onderbreken.',
    fr: "Puisque rien n'est stocké sur votre appareil ni lu depuis celui-ci, cette mesure ne requiert pas de consentement au titre de l'article 11.7a de la loi sur les télécommunications — c'est précisément pourquoi nous avons choisi un outil fonctionnant ainsi plutôt qu'un outil qui nous obligerait à vous interrompre par une bannière.",
  },

  neverTitle: {
    en: 'What we will never add without asking',
    nl: 'Wat wij nooit toevoegen zonder het te vragen',
    fr: 'Ce que nous n’ajouterons jamais sans vous le demander',
  },
  never1: {
    en: 'Tools such as Google Analytics, advertising pixels or session-recording scripts do store identifiers on your device. We do not use them. If we ever introduced anything of that kind, we would ask for your consent before it loaded, and this page would be updated first.',
    nl: 'Hulpmiddelen zoals Google Analytics, advertentiepixels of scripts die sessies opnemen, slaan wél identificatoren op uw apparaat op. Wij gebruiken die niet. Zouden wij ooit iets dergelijks invoeren, dan vragen wij uw toestemming voordat het wordt geladen, en wordt deze pagina eerst bijgewerkt.',
    fr: "Des outils tels que Google Analytics, les pixels publicitaires ou les scripts d'enregistrement de session stockent, eux, des identifiants sur votre appareil. Nous ne les utilisons pas. Si nous devions un jour introduire ce type d'outil, nous demanderions votre consentement avant son chargement et cette page serait mise à jour au préalable.",
  },

  relatedTitle: { en: 'Related', nl: 'Gerelateerd', fr: 'À consulter également' },
  relatedIntro: { en: 'See our', nl: 'Bekijk onze', fr: 'Consultez notre' },
  relatedLink: {
    en: 'privacy statement',
    nl: 'privacyverklaring',
    fr: 'déclaration de confidentialité',
  },
  relatedOutro: {
    en: 'for how we handle personal data you send us directly.',
    nl: 'voor hoe wij omgaan met persoonsgegevens die u ons rechtstreeks stuurt.',
    fr: 'pour savoir comment nous traitons les données personnelles que vous nous transmettez directement.',
  },
};

export function Cookies() {
  const { locale } = useLocale();
  const c = (key: string) => pick(COPY[key], locale);

  return (
    <LegalPage
      eyebrow={c('eyebrow')}
      title={c('title')}
      intro={c('intro')}
      lastUpdated={c('lastUpdated')}
    >
      <LegalSection title={c('noTrackingTitle')}>
        <p>{c('noTracking1')}</p>
        <p>{c('noTracking2')}</p>
      </LegalSection>

      <LegalSection title={c('necessaryTitle')}>
        <p>{c('necessary1')}</p>
      </LegalSection>

      <LegalSection title={c('statsTitle')}>
        <p>{c('stats1')}</p>
        <p>{c('stats2')}</p>
      </LegalSection>

      <LegalSection title={c('neverTitle')}>
        <p>{c('never1')}</p>
      </LegalSection>

      <LegalSection title={c('relatedTitle')}>
        <p>
          {c('relatedIntro')}{' '}
          <Link to="/privacy" className="text-blue-700 underline hover:text-blue-900">
            {c('relatedLink')}
          </Link>{' '}
          {c('relatedOutro')}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
