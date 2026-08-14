import type { ReactNode } from 'react';
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
 */
export function PageHero({
  eyebrow,
  title,
  children,
  variant = 'deep',
  size = 'default',
  above,
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
