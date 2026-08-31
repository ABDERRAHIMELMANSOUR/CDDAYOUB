import type { Localised } from '../i18n/localised';

/**
 * Homepage hero slides.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ADDING A SLIDE
 *
 * Append an entry to HERO_SLIDES. Every field is required except `image` and
 * `secondaryCta`. Slides rotate in array order, so a new event goes at the top
 * if it should lead.
 *
 * Photographs live in public/media/ and are referenced by path, not imported,
 * so the secretariat can add one without touching code. A path that is not
 * uploaded yet renders the branded gradient instead — see PhotoOrPlaceholder.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ON THE DARK GROUND
 *
 * Every slide sits on a dark ground with white copy. That is not a style
 * preference — it is what makes a photo slider safe. If one slide were light
 * and the next dark, the text palette would have to change with it, and the
 * moment a new photograph is added under the wrong palette the contrast fails
 * silently. One palette for all slides means a new photo can never break it.
 */
export interface HeroSlide {
  /** Stable key. Also used for the indicator's accessible name. */
  id: string;
  /** Small pill above the headline. */
  eyebrow: Localised<string>;
  /** Two lines: the second is rendered in the brand gradient. */
  headline: Localised<{ line1: string; line2: string }>;
  lead: Localised<string>;
  primaryCta: { label: Localised<string>; to: string };
  secondaryCta?: { label: Localised<string>; to: string };
  /** Background photograph. Null renders the gradient ground alone. */
  image: string | null;
  /** Describes the photograph. Ignored when `image` is null. */
  imageAlt: Localised<string>;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'network',
    eyebrow: {
      en: 'Netherlands · Morocco · Africa',
      nl: 'Nederland · Marokko · Afrika',
      fr: 'Pays-Bas · Maroc · Afrique',
    },
    headline: {
      en: { line1: 'Connecting leaders,', line2: 'building the future' },
      nl: { line1: 'Leiders verbinden,', line2: 'de toekomst bouwen' },
      fr: { line1: 'Relier les dirigeants,', line2: "construire l'avenir" },
    },
    lead: {
      en: 'A network for business leaders working across the Netherlands and Morocco — organised into four standing commissions, and open to anyone ready to do the work.',
      nl: 'Een netwerk voor ondernemers en bestuurders die werken tussen Nederland en Marokko — georganiseerd in vier vaste commissies en open voor iedereen die de handen uit de mouwen wil steken.',
      fr: "Un réseau pour les dirigeants actifs entre les Pays-Bas et le Maroc — organisé en quatre commissions permanentes et ouvert à celles et ceux prêts à s'engager.",
    },
    primaryCta: {
      label: { en: 'Join as Supporter', nl: 'Donateur worden', fr: 'Devenir donateur' },
      to: '/membership',
    },
    secondaryCta: {
      label: { en: 'Upcoming events', nl: 'Aankomende evenementen', fr: 'Événements à venir' },
      to: '/events',
    },
    image: null,
    imageAlt: { en: '', nl: '', fr: '' },
  },

  {
    id: 'iftar-rotterdam',
    eyebrow: {
      en: 'Rotterdam · Ramadan',
      nl: 'Rotterdam · Ramadan',
      fr: 'Rotterdam · Ramadan',
    },
    headline: {
      en: { line1: 'Moroccan and Turkish entrepreneurs', line2: 'meet in Rotterdam' },
      nl: { line1: 'Marokkaanse en Turkse ondernemers', line2: 'ontmoeten elkaar in Rotterdam' },
      fr: { line1: 'Entrepreneurs marocains et turcs', line2: 'se rencontrent à Rotterdam' },
    },
    lead: {
      en: 'Our collective Iftar brought entrepreneurs from both communities together to strengthen cross-border collaboration between Morocco, Türkiye and the Netherlands.',
      nl: 'Onze gezamenlijke iftar bracht ondernemers uit beide gemeenschappen samen om de internationale samenwerking tussen Marokko, Turkije en Nederland te versterken.',
      fr: "Notre iftar collectif a réuni des entrepreneurs des deux communautés afin de renforcer la collaboration transfrontalière entre le Maroc, la Türkiye et les Pays-Bas.",
    },
    primaryCta: {
      label: {
        en: 'Read the story',
        nl: 'Lees het verhaal',
        fr: "Lire l'article",
      },
      to: '/insights/first-collective-iftar-recap',
    },
    secondaryCta: {
      label: { en: 'All insights', nl: 'Alle insights', fr: 'Tous les insights' },
      to: '/insights',
    },
    image: '/media/cdd-iftar-rotterdam-group.jpg',
    imageAlt: {
      en: 'Guests of the CDD Pays-Bas collective Iftar in Rotterdam, gathered together for a group photograph.',
      nl: 'Gasten van de gezamenlijke iftar van CDD Pays-Bas in Rotterdam, samen op de groepsfoto.',
      fr: "Les invités de l'iftar collectif de CDD Pays-Bas à Rotterdam, réunis pour une photo de groupe.",
    },
  },

  {
    id: 'network-meetings',
    eyebrow: {
      en: 'The network',
      nl: 'Het netwerk',
      fr: 'Le réseau',
    },
    headline: {
      en: { line1: 'Where the conversations', line2: 'actually happen' },
      nl: { line1: 'Waar de gesprekken', line2: 'echt plaatsvinden' },
      fr: { line1: 'Là où les échanges', line2: 'ont vraiment lieu' },
    },
    lead: {
      en: 'Roundtables, briefings and gatherings across sectors that rarely meet in the same room — energy, logistics, law, education and technology.',
      nl: 'Rondetafelgesprekken, briefings en bijeenkomsten met sectoren die zelden in dezelfde ruimte zitten — energie, logistiek, recht, onderwijs en technologie.',
      fr: "Tables rondes, briefings et rencontres entre des secteurs qui se croisent rarement — énergie, logistique, droit, éducation et technologie.",
    },
    primaryCta: {
      label: { en: 'See our events', nl: 'Bekijk onze evenementen', fr: 'Voir nos événements' },
      to: '/events',
    },
    secondaryCta: {
      label: { en: 'The commissions', nl: 'De commissies', fr: 'Les commissions' },
      to: '/commissions',
    },
    image: '/media/cdd-iftar-rotterdam-table.jpg',
    imageAlt: {
      en: 'Guests seated along the dinner table at a CDD Pays-Bas gathering in Rotterdam.',
      nl: 'Gasten aan de gedekte tafel tijdens een bijeenkomst van CDD Pays-Bas in Rotterdam.',
      fr: "Les invités attablés lors d'une rencontre de CDD Pays-Bas à Rotterdam.",
    },
  },
];

/** How long each slide is shown, in milliseconds. */
export const HERO_ROTATION_MS = 8000;
