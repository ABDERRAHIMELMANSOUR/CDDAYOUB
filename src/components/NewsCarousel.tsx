import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { LocaleLink as Link } from '../i18n/LocaleLink';
import { useLocale, useTranslation } from '../i18n/LocaleProvider';
import { pick } from '../i18n/localised';
import {
  sortedInsights,
  formatInsightDate,
  INSIGHT_CATEGORY_LABELS,
} from '../data/insights';
import { fetchLinkedInPosts, LINKEDIN_PAGE_URL } from '../lib/linkedin';
import { BrandedImage } from './BrandedImage';

/**
 * News and media carousel.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THERE IS NO AUTOPLAY
 *
 * WCAG 2.2.2 requires any automatically moving content lasting more than five
 * seconds to be pausable. The usual fix is to bolt a pause button onto an
 * autoplaying slider, but the honest reading is that auto-advancing content
 * hurts almost everyone: it steals reading time from slow readers, moves the
 * target out from under motor-impaired users mid-click, and distracts users
 * with attention difficulties. So this scrolls only when the visitor asks it to
 * — which also removes the entire class of pause/resume bugs.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Built on native scroll-snap rather than transform trickery, which buys a lot
 * of accessibility for free:
 *
 *   - Every card stays in the DOM and in the tab order. Nothing is hidden from
 *     a screen reader or skipped by keyboard, which is the usual failing of a
 *     transform-based slider.
 *   - Tabbing to an off-screen card scrolls it into view natively.
 *   - Trackpad, touch and shift+wheel all work without any JavaScript.
 *   - Under `prefers-reduced-motion`, the arrow buttons jump instead of gliding.
 *
 * The arrows are a convenience on top, disabled at each end so they never look
 * live while doing nothing.
 */

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  external: boolean;
  tag: string;
  image?: string;
}

export function NewsCarousel() {
  const t = useTranslation();
  const { locale } = useLocale();
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [items, setItems] = useState<NewsItem[]>(() =>
    sortedInsights()
      .slice(0, 6)
      .map((insight) => ({
        id: insight.slug,
        title: pick(insight.title, locale),
        excerpt: pick(insight.summary, locale),
        date: formatInsightDate(insight.date, locale),
        href: `/insights/${insight.slug}`,
        external: false,
        tag: pick(INSIGHT_CATEGORY_LABELS[insight.category], locale),
        image: insight.image,
      }))
  );

  // LinkedIn posts merge in once (and if) the configured feed resolves. See
  // src/lib/linkedin.ts for why they cannot be fetched from LinkedIn directly.
  useEffect(() => {
    let cancelled = false;
    fetchLinkedInPosts(3).then((posts) => {
      if (cancelled || posts.length === 0) return;
      setItems((current) => {
        const merged = [
          ...current,
          ...posts.map((post) => ({
            id: post.id,
            // LinkedIn posts have no separate title; the opening line acts as one.
            title: post.text.split('\n')[0].slice(0, 90),
            excerpt: post.text,
            date: new Date(post.publishedAt).toLocaleDateString(
              { en: 'en-GB', nl: 'nl-NL', fr: 'fr-FR' }[locale],
              { day: 'numeric', month: 'long', year: 'numeric' }
            ),
            href: post.url,
            external: true,
            tag: t.home.newsOnLinkedIn,
            image: post.imageUrl,
          })),
        ];
        return merged.slice(0, 9);
      });
    });
    return () => {
      cancelled = true;
    };
  }, [locale, t.home.newsOnLinkedIn]);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    /*
     * Tolerance, not zero. The scroller carries horizontal padding so the
     * focus ring is not clipped, and scroll-snap settles the first card
     * against that padding rather than against 0 — measured at 8px. Sub-pixel
     * layout adds a little more. Too tight a threshold leaves "previous"
     * enabled at the true start, where it looks live and does nothing.
     */
    const EDGE_TOLERANCE = 16;
    setAtStart(el.scrollLeft <= EDGE_TOLERANCE);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - EDGE_TOLERANCE);
  }, []);

  useEffect(() => {
    updateArrows();
  }, [items, updateArrows]);

  function scrollByPage(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({
      left: direction * el.clientWidth * 0.9,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }

  if (items.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-5 tracking-wide uppercase">
              {t.home.newsEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              {t.home.newsTitle}
            </h2>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">{t.home.newsText}</p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={atStart}
              aria-label={t.home.newsPrev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 text-gray-700 flex items-center justify-center hover:border-blue-600 hover:text-blue-700 transition-colors disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={atEnd}
              aria-label={t.home.newsNext}
              className="w-12 h-12 rounded-full border-2 border-gray-200 text-gray-700 flex items-center justify-center hover:border-blue-600 hover:text-blue-700 transition-colors disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/*
          tabIndex={0} makes the scroller itself keyboard-scrollable with the
          arrow keys, which browsers otherwise only grant to focusable elements
          — a documented requirement for scrollable regions under WCAG 2.1.1.
        */}
        <ul
          ref={scrollerRef}
          onScroll={updateArrows}
          tabIndex={0}
          aria-label={t.home.newsCarouselLabel}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-2 px-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 [scrollbar-width:thin]"
        >
          {items.map((item) => (
            <li
              key={item.id}
              className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[31.5%] list-none"
            >
              <NewsCard item={item} readLabel={t.home.newsRead} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-6">
          <Link
            to="/insights"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
          >
            {t.home.insightsAll}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={LINKEDIN_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            {t.insights.linkedinFollow}
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsCard({ item, readLabel }: { item: NewsItem; readLabel: string }) {
  const body = (
    <>
      <div className="h-44 rounded-2xl overflow-hidden mb-5">
        {item.image ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* No cover image supplied — branded placeholder rather than stock. */
          <BrandedImage label={item.tag} title={item.title} variant="deep" className="rounded-2xl" />
        )}
      </div>
      <span className="text-xs font-bold uppercase tracking-wide text-blue-700">{item.tag}</span>
      <h3 className="mt-2 text-xl font-bold text-gray-900 leading-tight line-clamp-2">
        {item.title}
      </h3>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3 flex-grow">
        {item.excerpt}
      </p>
      <span className="mt-5 flex items-center justify-between text-sm">
        <span className="text-gray-500">{item.date}</span>
        <span className="inline-flex items-center gap-1.5 font-medium text-blue-700">
          {item.external ? (
            <>
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </>
          ) : (
            <>
              {readLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </span>
      </span>
    </>
  );

  const className =
    'group flex flex-col h-full bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300';

  // External links open in a new tab, which must be announced rather than left
  // as a surprise change of context (WCAG 3.2.5).
  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
      <span className="sr-only">(LinkedIn, opens in a new tab)</span>
    </a>
  ) : (
    <Link to={item.href} className={className}>
      {body}
    </Link>
  );
}
