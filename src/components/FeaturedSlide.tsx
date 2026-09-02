import { ArrowRight } from 'lucide-react';
import { LocaleLink as Link } from '../i18n/LocaleLink';
import { useLocale, useTranslation } from '../i18n/LocaleProvider';
import { pick } from '../i18n/localised';
import { formatInsightDate } from '../data/insights';
import type { FeaturedStory } from '../data/featuredStory';
import { PhotoOrPlaceholder } from './PhotoOrPlaceholder';

/**
 * The wide "master slide" that opens the news carousel.
 *
 * Composition: full-bleed photograph, text block on the left, inset photograph
 * to its right, call to action beneath.
 *
 * ── ON CONTRAST ─────────────────────────────────────────────────────────────
 * Text sits over a photograph, which is the classic way to fail WCAG 1.4.3 —
 * contrast then depends on whichever image happens to be behind it, and a
 * lighter photograph silently breaks it. So the text does NOT rely on the photo
 * being dark: a gradient scrim runs from near-opaque slate at the left edge to
 * transparent at the right, and every text element sits inside the opaque part.
 * The measured background behind the copy is at least #0f1e33 against white
 * text — roughly 15:1, far past the 4.5:1 the standard asks for — and it stays
 * that way no matter which photograph is dropped in.
 *
 * On small screens the scrim becomes a vertical one and the inset is hidden,
 * because a 300px-wide inset photo is decorative noise rather than information.
 */
export function FeaturedSlide({ story }: { story: FeaturedStory }) {
  const t = useTranslation();
  const { locale } = useLocale();

  return (
    <article className="relative isolate overflow-hidden rounded-3xl bg-slate-900 shadow-2xl min-h-[30rem] lg:min-h-[26rem]">
      {/* Background photograph */}
      <div className="absolute inset-0 -z-10">
        {/*
          No `title` here. The placeholder would otherwise print the headline
          behind the headline — duplicated text under the scrim, and a second
          copy of the same string for anyone reading the page as text.
        */}
        <PhotoOrPlaceholder
          src={story.backgroundImage}
          alt={pick(story.backgroundAlt, locale)}
          variant="deep"
          className="rounded-none"
          imgClassName="rounded-none"
        />
      </div>

      {/*
        Scrim. Vertical on mobile (text sits below the photo's focal point),
        horizontal from lg up (text block on the left). aria-hidden because it
        carries no meaning — it exists so the copy is legible.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-900/60 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/92 lg:to-transparent"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-8 items-center p-8 lg:p-12">
        {/* Typography block */}
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-300 text-slate-900 text-xs font-bold uppercase tracking-wide">
              {pick(story.eyebrow, locale)}
            </span>
            {/* cyan-100 on slate-950 ≈ 14:1. */}
            <span className="text-sm text-cyan-100">
              {formatInsightDate(story.date, locale)}
            </span>
          </div>

          <h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            {pick(story.headline, locale)}
          </h3>

          {/* slate-200 on slate-950 ≈ 13:1; line-clamp keeps the slide from
              growing unbounded while the full text remains on the article. */}
          <p className="mt-5 text-slate-200 leading-relaxed line-clamp-5 lg:line-clamp-6">
            {pick(story.summary, locale)}
          </p>

          <Link
            to={`/insights/${story.slug}`}
            className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-semibold hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors group"
          >
            {pick(story.cta, locale)}
            <ArrowRight
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/*
          Inset photograph. Hidden below lg: at that width it would be a
          thumbnail competing with the headline for the same few hundred pixels.
          Both photographs remain available in the article's gallery.
        */}
        {story.insetImage && (
          <div className="hidden lg:block">
            {/*
              Same reasoning as the article gallery: this is a group
              photograph, so it is fitted rather than cropped. The background
              photo above still uses cover — it is a backdrop under a scrim,
              where cropping is the point.
            */}
            <div className="aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/25 shadow-2xl bg-slate-950">
              {/*
                'deep', not 'light'. The inset sits inside a dark slide, so a
                light placeholder reads as an empty white rectangle punched
                into the artwork rather than as a photo yet to arrive.
              */}
              <PhotoOrPlaceholder
                src={story.insetImage}
                alt={pick(story.insetAlt, locale)}
                label={t.home.newsEyebrow}
                variant="deep"
                fit="contain"
                className="rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
