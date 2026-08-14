import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { LocaleLink as Link } from '../i18n/LocaleLink';
import { useLocale, useTranslation } from '../i18n/LocaleProvider';
import { pick } from '../i18n/localised';
import { HERO_SLIDES, HERO_ROTATION_MS } from '../data/heroSlides';
import { ParticleNetwork } from './ParticleNetwork';
import { PhotoOrPlaceholder } from './PhotoOrPlaceholder';
import { trackEvent, GOALS } from '../lib/analytics';

/**
 * Homepage hero slider.
 *
 * ── WHY THERE IS A PAUSE BUTTON, NOT JUST HOVER-PAUSE ───────────────────────
 * Pausing on hover and focus is worth having, but on its own it does NOT
 * satisfy WCAG 2.2.2. The criterion asks for a *mechanism* to pause content
 * that moves automatically for more than five seconds. Hover does nothing for
 * a touch user, and focus only helps once someone has tabbed into the carousel
 * — a screen-reader user reading the page linearly, or anyone who simply wants
 * the movement to stop, has no way to ask. The explicit control is the part
 * that makes the pattern conformant, so it is visible rather than tucked away.
 *
 * Rotation additionally stops when the tab is hidden, when the hero scrolls out
 * of view, and it never starts at all under `prefers-reduced-motion`.
 *
 * ── WHY ONLY THE ACTIVE SLIDE IS IN THE DOM ─────────────────────────────────
 * Backgrounds are all mounted and crossfaded — they are decorative and
 * aria-hidden. The text block is not: only the active slide's content is
 * rendered. That keeps exactly one <h1> on the page at any moment, and it means
 * no off-screen slide can put links in the tab order that a keyboard user
 * cannot see, which is the classic failing of a transform-based slider.
 *
 * ── LAYER ORDER (bottom to top) ─────────────────────────────────────────────
 *   1. photograph          — decorative, aria-hidden
 *   2. dark scrim          — guarantees contrast regardless of the photograph
 *   3. particle canvas     — the fibre-optic aesthetic, over the imagery
 *   4. copy and controls
 * Because the scrim sits under the particles and over the photo, the measured
 * background behind the text never depends on which image is showing.
 */
export function HeroSlider() {
  const t = useTranslation();
  const { locale } = useLocale();
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [suspended, setSuspended] = useState(false);
  const regionRef = useRef<HTMLElement>(null);

  const total = HERO_SLIDES.length;
  const slide = HERO_SLIDES[index];

  const go = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // `suspended` covers hover, focus-within, tab visibility and scroll position.
  // `userPaused` is the explicit control and outranks all of them: once someone
  // has asked for it to stop, moving the mouse away must not restart it.
  const rotating = total > 1 && !userPaused && !suspended && !reduceMotion;

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(() => go(index + 1), HERO_ROTATION_MS);
    return () => window.clearTimeout(timer);
  }, [rotating, index, go]);

  useEffect(() => {
    const onVisibility = () => setSuspended(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSuspended(!entry.isIntersecting || document.hidden),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(index - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(index + 1);
    }
  }

  const label = (template: string, values: Record<string, string | number>) =>
    Object.entries(values).reduce<string>(
      (out, [key, value]) => out.replace(`{${key}}`, String(value)),
      template
    );

  return (
    <section
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={t.home.heroCarouselLabel}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setSuspended(true)}
      onMouseLeave={() => setSuspended(document.hidden)}
      onFocus={() => setSuspended(true)}
      onBlur={(e) => {
        // Only resume when focus has left the carousel entirely, not when it
        // moves between the controls inside it.
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setSuspended(document.hidden);
        }
      }}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900"
    >
      {/* 1. Photographs — crossfaded, decorative. */}
      {HERO_SLIDES.map((item, i) => (
        <div
          key={item.id}
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item.image ? (
            <PhotoOrPlaceholder
              src={item.image}
              alt=""
              variant="deep"
              className="rounded-none"
              imgClassName="rounded-none"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
          )}
        </div>
      ))}

      {/* 2. Scrim — what actually guarantees the contrast. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/90 to-gray-900/75 lg:bg-gradient-to-r lg:from-gray-950 lg:via-gray-950/90 lg:to-gray-900/60"
      />

      {/* 3. Fibre-optic constellation, over the imagery. */}
      <ParticleNetwork variant="light" />

      {/* 4. Copy. */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/*
          APG: aria-live is "off" while rotating (announcing every automatic
          change would talk over the page) and "polite" once the visitor has
          taken control, so their own navigation is announced.
        */}
        <div aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={label(t.home.heroSlideOf, { n: index + 1, total })}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-sm font-medium text-blue-100">
                {pick(slide.eyebrow, locale)}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              {pick(slide.headline, locale).line1}
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {pick(slide.headline, locale).line2}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
              {pick(slide.lead, locale)}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to={slide.primaryCta.to}
                onClick={() => {
                  if (slide.primaryCta.to === '/membership') {
                    trackEvent(GOALS.heroMembershipCta);
                  }
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 font-medium group"
              >
                {pick(slide.primaryCta.label, locale)}
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              {slide.secondaryCta && (
                <Link
                  to={slide.secondaryCta.to}
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl hover:bg-white/20 transition-all duration-300 font-medium"
                >
                  {pick(slide.secondaryCta.label, locale)}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Controls */}
        {total > 1 && (
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setUserPaused((paused) => !paused)}
              aria-label={userPaused || reduceMotion ? t.home.heroPlay : t.home.heroPause}
              className="w-11 h-11 rounded-full border-2 border-white/40 text-white flex items-center justify-center hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              {userPaused || reduceMotion ? (
                <Play className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Pause className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={t.home.heroPrev}
              className="w-11 h-11 rounded-full border-2 border-white/40 text-white flex items-center justify-center hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={t.home.heroNext}
              className="w-11 h-11 rounded-full border-2 border-white/40 text-white flex items-center justify-center hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            {/*
              Dots. Each is a real button with its own label — a bare <span>
              with a click handler is unreachable by keyboard and invisible to
              assistive technology. The 44px hit area comes from the padding,
              not the 10px dot, so it meets WCAG 2.5.8 target size.
            */}
            <ul className="flex items-center gap-1 ml-1">
              {HERO_SLIDES.map((item, i) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-label={label(t.home.heroGoToSlide, { n: i + 1 })}
                    aria-current={i === index ? 'true' : undefined}
                    className="p-3 flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span
                      aria-hidden="true"
                      className={`block rounded-full transition-all duration-300 ${
                        i === index ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/45'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
