import type { Localised } from '../i18n/localised';

/**
 * The featured story — the wide "master slide" that opens the news carousel.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PHOTOGRAPHS ARE NOT IN THE REPOSITORY YET.
 *
 * `backgroundImage` and `insetImage` point at files under public/media/ which
 * do not exist yet. That is deliberate rather than broken: the slide renders
 * the branded placeholder until the files are added, so the build stays green
 * and no visitor ever sees a broken-image icon. Drop the two JPEGs in with the
 * filenames below and the slide takes them up on the next deploy — no code
 * change. See docs/photography.md for size and consent guidance.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * There is one featured story at a time. To change it, edit this file; to stop
 * featuring anything, set `FEATURED_STORY` to null and the carousel falls back
 * to the uniform card grid.
 */
export interface FeaturedStory {
  /** Insight slug the CTA links to. Must exist in insights.ts. */
  slug: string;
  eyebrow: Localised<string>;
  headline: Localised<string>;
  summary: Localised<string>;
  cta: Localised<string>;
  /** ISO date, formatted per locale at render time. */
  date: string;
  /** Full-bleed background. Null renders the branded placeholder instead. */
  backgroundImage: string | null;
  backgroundAlt: Localised<string>;
  /** Inset photo beside the text block. Null hides the inset entirely. */
  insetImage: string | null;
  insetAlt: Localised<string>;
}

export const FEATURED_STORY: FeaturedStory | null = {
  slug: 'first-collective-iftar-recap',
  date: '2026-03-05',

  backgroundImage: '/media/cdd-iftar-rotterdam-group.jpg',
  insetImage: '/media/cdd-iftar-rotterdam-table.jpg',

  eyebrow: {
    en: 'Featured',
    nl: 'Uitgelicht',
    fr: 'À la une',
  },

  headline: {
    en: 'Moroccan and Turkish Entrepreneurs Meet at Club des Dirigeants – CDD PAYS-BAS Iftar in Rotterdam',
    nl: 'Marokkaanse en Turkse ondernemers ontmoeten elkaar tijdens de iftar van Club des Dirigeants – CDD PAYS-BAS in Rotterdam',
    fr: "Des entrepreneurs marocains et turcs se rencontrent à l'iftar du Club des Dirigeants – CDD PAYS-BAS à Rotterdam",
  },

  summary: {
    en: 'Club des Dirigeants (CDD) Pays-Bas proudly hosted a collective Iftar in Rotterdam, bringing together Moroccan and Turkish entrepreneurs to strengthen unity and cross-border collaboration between Morocco, Türkiye, and the Netherlands. Under the leadership of President Nouraddine GRIBI and the vision of International President Driss DRIF, senior advisors and valued guests gathered during Ramadan. We were particularly honored by the presence and support of Dünya Türk İş Konseyi (DTIK Netherlands board).',
    nl: 'Club des Dirigeants (CDD) Pays-Bas organiseerde met trots een gezamenlijke iftar in Rotterdam, waar Marokkaanse en Turkse ondernemers samenkwamen om de onderlinge verbondenheid en de internationale samenwerking tussen Marokko, Turkije en Nederland te versterken. Onder leiding van voorzitter Nouraddine GRIBI en vanuit de visie van internationaal voorzitter Driss DRIF kwamen senior adviseurs en gewaardeerde deelnemers bijeen tijdens de ramadan. Wij voelden ons in het bijzonder vereerd door de aanwezigheid en steun van Dünya Türk İş Konseyi (het bestuur van DTIK Nederland).',
    fr: "Club des Dirigeants (CDD) Pays-Bas a eu la fierté d'organiser un iftar collectif à Rotterdam, réunissant des entrepreneurs marocains et turcs afin de renforcer l'unité et la collaboration transfrontalière entre le Maroc, la Türkiye et les Pays-Bas. Sous la direction du président Nouraddine GRIBI et portée par la vision du président international Driss DRIF, cette rencontre a rassemblé des conseillers seniors et des invités de marque pendant le Ramadan. Nous avons été particulièrement honorés par la présence et le soutien du Dünya Türk İş Konseyi (le conseil DTIK Pays-Bas).",
  },

  cta: {
    en: 'Read Full Article & View Gallery',
    nl: 'Lees het volledige artikel & bekijk de fotogalerij',
    fr: "Lire l'article complet & voir la galerie",
  },

  backgroundAlt: {
    en: 'Guests of the CDD Pays-Bas collective Iftar in Rotterdam, gathered together for a group photograph.',
    nl: 'Gasten van de gezamenlijke iftar van CDD Pays-Bas in Rotterdam, samen op de groepsfoto.',
    fr: "Les invités de l'iftar collectif de CDD Pays-Bas à Rotterdam, réunis pour une photo de groupe.",
  },

  insetAlt: {
    en: 'Guests seated along the dinner table at the CDD Pays-Bas Iftar in Rotterdam.',
    nl: 'Gasten aan de gedekte tafel tijdens de iftar van CDD Pays-Bas in Rotterdam.',
    fr: "Les invités attablés lors de l'iftar de CDD Pays-Bas à Rotterdam.",
  },
};
