import { useEffect, useState } from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';
import { useLocale, useTranslation } from '../i18n/LocaleProvider';
import { fetchLinkedInPosts, LINKEDIN_PAGE_URL, type LinkedInPost } from '../lib/linkedin';

const DATE_LOCALE: Record<string, string> = { en: 'en-GB', nl: 'nl-NL', fr: 'fr-FR' };

/**
 * Latest posts from CDD's LinkedIn page.
 *
 * Renders nothing but a link to the page itself when no feed is configured or
 * the feed is empty — see src/lib/linkedin.ts for why the posts cannot be
 * fetched from the browser directly. Post text is rendered as plain text, never
 * as HTML: it is remote content and injecting it into the DOM would be an XSS
 * hole for anyone who could influence the feed.
 */
export function LinkedInFeed() {
  const t = useTranslation();
  const { locale } = useLocale();
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchLinkedInPosts(3).then((result) => {
      if (!cancelled) {
        setPosts(result);
        setLoaded(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {t.insights.linkedinTitle}
            </h2>
            <p className="mt-2 text-gray-700">{t.insights.linkedinIntro}</p>
          </div>
          <a
            href={LINKEDIN_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-600 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            {t.insights.linkedinFollow}
          </a>
        </div>

        {loaded && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <Linkedin className="h-4 w-4 text-blue-700" aria-hidden="true" />
                  {new Date(post.publishedAt).toLocaleDateString(DATE_LOCALE[locale] ?? 'en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                {/* Clamped rather than truncated with "…" so the full text is
                    still selectable and available to assistive technology. */}
                <p className="mt-3 text-gray-800 leading-relaxed line-clamp-6 flex-grow">
                  {post.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700">
                  {t.insights.linkedinView}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-gray-700">
            {t.insights.linkedinEmpty}
          </p>
        )}
      </div>
    </section>
  );
}
