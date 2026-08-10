import { useEffect } from 'react';

/**
 * Injects a JSON-LD `<script>` into <head>.
 *
 * This is a client-rendered SPA, so the markup is not present in the initial
 * HTML. Google executes JavaScript before parsing structured data, so this
 * works for Google; crawlers that do not run JS will not see it. If CDD ever
 * needs structured data guaranteed in the raw HTML, that is the argument for
 * prerendering the events route — noted rather than silently assumed away.
 *
 * The payload is serialised with JSON.stringify and the closing-tag sequence is
 * escaped, so event text containing "</script>" cannot break out of the script
 * element.
 */
export function StructuredData({ data, id }: { data: unknown; id: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(data).replace(/<\//g, '<\\/');
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [data, id]);

  return null;
}
