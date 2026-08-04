import { useLocale } from '../../../i18n/LocaleProvider';
import { pick, type Localised } from '../../../i18n/localised';
import { LegalPage, LegalSection } from './LegalPage';
import { ORGANISATION } from '../../../data/organisation';

/**
 * Accessibility statement — expected by public-sector partners under EN 301 549.
 *
 * States the target standard honestly, including known limitations, rather than
 * claiming full conformance the site has not been formally audited against.
 *
 * The English text is the authoritative version; the shared LegalPage shell
 * renders that clause on non-English locales.
 */
const COPY: Record<string, Localised<string>> = {
  eyebrow: { en: 'Legal', nl: 'Juridisch', fr: 'Mentions légales' },
  title: {
    en: 'Accessibility Statement',
    nl: 'Toegankelijkheidsverklaring',
    fr: "Déclaration d'accessibilité",
  },
  intro: {
    en: 'Our commitment to making cddpaysbas.nl usable by everyone.',
    nl: 'Onze inzet om cddpaysbas.nl voor iedereen bruikbaar te maken.',
    fr: "Notre engagement pour rendre cddpaysbas.nl utilisable par tous.",
  },
  lastUpdated: { en: 'July 2026', nl: 'juli 2026', fr: 'juillet 2026' },

  targetTitle: { en: 'Our target', nl: 'Ons streven', fr: 'Notre objectif' },
  targetText: {
    en: 'CDD Pays-Bas aims to meet WCAG 2.2 level AA, the standard referenced by EN 301 549 and expected of organisations working with Dutch public-sector partners.',
    nl: 'CDD Pays-Bas streeft ernaar te voldoen aan WCAG 2.2 niveau AA, de norm waarnaar EN 301 549 verwijst en die wordt verwacht van organisaties die samenwerken met Nederlandse publieke partners.',
    fr: "CDD Pays-Bas vise à respecter le niveau AA des WCAG 2.2, la norme à laquelle renvoie l'EN 301 549 et qui est attendue des organisations travaillant avec des partenaires publics néerlandais.",
  },

  statusTitle: { en: 'Current status', nl: 'Huidige status', fr: 'Statut actuel' },
  statusText: {
    en: 'We describe this site as partially conformant with WCAG 2.2 AA. That means most of the standard is met, and we are open about the parts that are still being addressed rather than claiming conformance we have not formally verified.',
    nl: 'Wij omschrijven deze site als gedeeltelijk conform WCAG 2.2 AA. Dat betekent dat aan het merendeel van de norm wordt voldaan en dat wij open zijn over de onderdelen waaraan nog wordt gewerkt, in plaats van een conformiteit te claimen die wij niet formeel hebben laten toetsen.',
    fr: "Nous décrivons ce site comme partiellement conforme aux WCAG 2.2 AA. Cela signifie que la majeure partie de la norme est respectée et que nous sommes transparents sur les points encore en cours de traitement, plutôt que de revendiquer une conformité que nous n'avons pas fait vérifier formellement.",
  },
  measuresIntro: {
    en: 'Measures already in place:',
    nl: 'Reeds getroffen maatregelen:',
    fr: 'Mesures déjà en place :',
  },

  limitationsTitle: {
    en: 'Known limitations',
    nl: 'Bekende beperkingen',
    fr: 'Limitations connues',
  },
  limitationsIntro: {
    en: 'We are aware of the following and are working on them:',
    nl: 'Wij zijn ons bewust van het volgende en werken eraan:',
    fr: 'Nous avons connaissance des points suivants et y travaillons :',
  },

  feedbackTitle: { en: 'Feedback', nl: 'Feedback', fr: 'Vos retours' },
  feedbackText: {
    en: 'If you encounter a barrier on this site, please tell us — it is the fastest way for us to fix it. Email',
    nl: 'Stuit u op deze site op een drempel, laat het ons dan weten — dat is voor ons de snelste manier om het op te lossen. Mail naar',
    fr: "Si vous rencontrez un obstacle sur ce site, dites-le-nous : c'est le moyen le plus rapide pour nous de le corriger. Écrivez à",
  },
  feedbackOutro: {
    en: 'describing the page and the problem, and we will respond and tell you what we can do.',
    nl: 'met een beschrijving van de pagina en het probleem; wij reageren en laten weten wat wij kunnen doen.',
    fr: 'en décrivant la page et le problème ; nous vous répondrons en indiquant ce que nous pouvons faire.',
  },
};

const MEASURES: Localised<string[]> = {
  en: [
    'Text and interface colours reviewed against AA contrast ratios.',
    'Semantic headings and landmarks so the page can be navigated by structure.',
    'Meaningful alternative text on images that carry information.',
    'Keyboard-operable navigation, with a visible focus indicator.',
    'Responsive layout that supports zoom and reflow without loss of content.',
  ],
  nl: [
    'Tekst- en interfacekleuren getoetst aan de AA-contrastverhoudingen.',
    'Semantische koppen en oriëntatiepunten, zodat de pagina op structuur kan worden doorlopen.',
    'Betekenisvolle alternatieve tekst bij afbeeldingen die informatie dragen.',
    'Met het toetsenbord bedienbare navigatie, met een zichtbare focusindicator.',
    'Responsieve opmaak die zoomen en herschikking ondersteunt zonder verlies van inhoud.',
  ],
  fr: [
    "Couleurs du texte et de l'interface vérifiées au regard des ratios de contraste AA.",
    'Titres et repères sémantiques permettant de parcourir la page par sa structure.',
    'Textes alternatifs pertinents sur les images porteuses d’information.',
    'Navigation utilisable au clavier, avec un indicateur de focus visible.',
    'Mise en page responsive prenant en charge le zoom et le redimensionnement sans perte de contenu.',
  ],
};

const LIMITATIONS: Localised<string[]> = {
  en: [
    'The site is currently available in English, Dutch and French. Long-form editorial content is being translated progressively.',
    "Some decorative imagery is being replaced with CDD's own photography, which will also improve the relevance of alternative text.",
    'No independent third-party accessibility audit has been carried out yet.',
  ],
  nl: [
    'De site is beschikbaar in het Engels, Nederlands en Frans. Langere redactionele teksten worden stapsgewijs vertaald.',
    'Een deel van het decoratieve beeldmateriaal wordt vervangen door eigen fotografie van CDD, wat ook de relevantie van de alternatieve teksten verbetert.',
    'Er heeft nog geen onafhankelijke toegankelijkheidsaudit door derden plaatsgevonden.',
  ],
  fr: [
    'Le site est disponible en anglais, néerlandais et français. Les contenus rédactionnels longs sont traduits progressivement.',
    "Une partie des images décoratives est remplacée par les photographies propres du CDD, ce qui améliorera aussi la pertinence des textes alternatifs.",
    "Aucun audit d'accessibilité indépendant n'a encore été réalisé.",
  ],
};

export function Accessibility() {
  const { locale } = useLocale();
  const c = (key: string) => pick(COPY[key], locale);

  return (
    <LegalPage
      eyebrow={c('eyebrow')}
      title={c('title')}
      intro={c('intro')}
      lastUpdated={c('lastUpdated')}
    >
      <LegalSection title={c('targetTitle')}>
        <p>{c('targetText')}</p>
      </LegalSection>

      <LegalSection title={c('statusTitle')}>
        <p>{c('statusText')}</p>
        <p>{c('measuresIntro')}</p>
        <ul className="list-disc pl-6 space-y-2">
          {pick(MEASURES, locale).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title={c('limitationsTitle')}>
        <p>{c('limitationsIntro')}</p>
        <ul className="list-disc pl-6 space-y-2">
          {pick(LIMITATIONS, locale).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title={c('feedbackTitle')}>
        <p>
          {c('feedbackText')}{' '}
          <a
            href={`mailto:${ORGANISATION.email}`}
            className="text-blue-700 underline hover:text-blue-900"
          >
            {ORGANISATION.email}
          </a>{' '}
          {c('feedbackOutro')}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
