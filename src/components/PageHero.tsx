import { useState, type ReactNode } from 'react';
import { ParticleNetwork } from './ParticleNetwork';

/**
 * The standard hero header for every inner page.
 *
 * Every route previously hand-rolled the same four elements — a dark gradient,
 * a pill eyebrow, an H1 and a lead paragraph — with small drifts in padding,
 * text colour and max-width. This is the single definition, so the
 * cyber-particle aesthetic stays identical across the whole journey and a
 * change to it is one edit rather than fourteen.
 *
 * ── ON CONTRAST ─────────────────────────────────────────────────────────────
 * The particle field sits BEHIND an opaque gradient base, never over the text.
 * That ordering is the point: the nodes are painted on top of a slate-900
 * ground, and the copy sits on top of both with its own solid colours. So
 * contrast is fixed by the palette rather than by how many glowing nodes drift
 * under a given word. Measured: white on the hero ground is ~16:1, the lead
 * paragraph (gray-200) ~13:1, the eyebrow (blue-100) ~12:1 — all far past the
 * 4.5:1 WCAG 1.4.3 asks of body text.
 *
 * The `variant` prop only swaps the ground and node hue; it never changes the
 * text colours, so a lighter hero cannot silently break contrast.
 *
 * ── ON THE OPTIONAL PHOTOGRAPH ──────────────────────────────────────────────
 * `image` puts a photograph between the ground and the particles. It cannot
 * break the contrast above, because it is sandwiched: opaque ground, photo,
 * near-opaque scrim, tint, particles, text. The scrim is what makes this safe
 * — a bright photograph is dimmed to the same slate the text was measured
 * against, so a new image dropped in later cannot quietly fail 1.4.3.
 *
 * A path that has not been uploaded yet simply does not render: the <img>
 * hides itself on error and the hero falls back to the gradient it has today.
 * That is why these can be committed before the photographs arrive.
 */
export function PageHero({
  eyebrow,
  title,
  children,
  variant = 'deep',
  size = 'default',
  above,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  /** Lead paragraph or any other intro content. */
  children?: ReactNode;
  /** 'deep' is the near-black ground; 'brand' is the blue-cyan one. */
  variant?: 'deep' | 'brand';
  /** 'compact' for detail pages where the hero should not dominate. */
  size?: 'default' | 'compact';
  /** Rendered above the eyebrow — used for "back to …" links. */
  above?: ReactNode;
  /**
   * Optional background photograph, as a path under public/media/. Purely
   * decorative — it sits under a scrim and carries no information the copy
   * does not already give — so it is rendered aria-hidden with an empty alt
   * rather than described.
   */
  image?: string | null;
}) {
  const ground =
    variant === 'deep'
      ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800'
      // cyan-900 rather than cyan-800: the lightest point of the gradient is
      // what sets the worst-case contrast, and 800 left the lead paragraph at
      // 5.9:1 — passing, but with little headroom if the copy colour ever
      // changes. 900 takes it to ~8:1.
      : 'bg-gradient-to-br from-blue-900 via-blue-900 to-cyan-900';

  return (
    <section
      className={`relative overflow-hidden ${
        size === 'compact' ? 'py-16 lg:py-20' : 'py-20 lg:py-28'
      }`}
    >
      {/* Opaque ground. Everything above it is decoration. */}
      <div className={`absolute inset-0 ${ground}`} aria-hidden="true" />
      {image && <HeroPhoto src={image} />}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"
      />

      {/*
        Fibre-optic constellation. Light nodes because the ground is dark in
        both variants. aria-hidden, pointer-events-none, static under
        prefers-reduced-motion, and paused when off-screen or the tab is
        hidden — all handled inside ParticleNetwork.
      */}
      <ParticleNetwork variant="light" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {above}
          {eyebrow && (
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-100 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {eyebrow}
            </div>
          )}
          <h1
            className={`font-bold text-white tracking-tight ${
              size === 'compact' ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-5xl'
            }`}
          >
            {title}
          </h1>
          {children && <div className="mt-6 text-xl text-gray-200 leading-relaxed">{children}</div>}
        </div>
      </div>
    </section>
  );
}

/**
 * The hero's background photograph, plus the scrim that makes it safe.
 *
 * Self-hiding: these paths are committed before the photographs are, so an
 * absent file must degrade to the plain gradient rather than to a broken-image
 * icon. `failed` also removes the scrim, which would otherwise darken the
 * gradient for no reason on every hero whose photo has not arrived.
 */
function HeroPhoto({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
      {/*
        The scrim is deliberately heavy. The text above was measured against
        slate-900, and this keeps the effective background there no matter how
        bright the photograph is — so the contrast figures in the comment above
        hold for every image, including ones added years from now.
      */}
      <div className="absolute inset-0 bg-gray-900/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60" />
    </div>
  );
}
