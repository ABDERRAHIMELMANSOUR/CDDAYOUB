import React, { useState } from 'react';

/**
 * Branded visual placeholder (ticket 21).
 *
 * The site illustrated its content with off-brand stock photography: a concert
 * stage photographed at a Chinese venue for "Education & Capacity Building", a
 * clinical photo of a prosthetic fitting for "Innovation & Technology", an
 * unrelated conference group photo for "Economy & Finance", and the same
 * generic handshake reused across Home, Focus Areas and Partnerships.
 *
 * Rather than swap one stock library for another, this renders a branded panel
 * in CDD's own colours — and accepts a real image the moment one exists.
 *
 * ── WITH A PHOTOGRAPH ───────────────────────────────────────────────────────
 * `src` does not replace the panel, it re-grounds it: the photograph goes
 * behind, a dark scrim goes over the photograph, and the same label, title and
 * caption sit on top in the same places. Two things follow from that.
 *
 * First, the copy never moves. A panel and a photographed panel are the same
 * layout, so dropping a file in changes the picture and nothing else.
 *
 * Second, contrast does not depend on the photograph. The scrim runs to
 * near-opaque slate behind the text, so white copy holds regardless of what is
 * underneath — a bright image cannot quietly push it below 4.5:1. That is why
 * the text palette is forced to the light treatment whenever a photograph is
 * present, even on `variant="light"`.
 *
 * A `src` that 404s falls back to the gradient panel, so paths can be
 * committed before the files are.
 *
 * Usage:
 *   <BrandedImage label="Commission 1" title="Energy & Water Transition" />
 *   <BrandedImage src="/media/commission-energy-water.jpg" label="…" title="…" />
 */
export function BrandedImage({
  src,
  alt,
  label,
  title,
  caption,
  icon: Icon,
  className = '',
  variant = 'deep',
}: {
  /**
   * Real photograph, as a path under public/media/. Rendered behind the panel's
   * text under a dark scrim rather than instead of it.
   */
  src?: string | null;
  alt?: string;
  /** Small eyebrow text on the placeholder, e.g. "Commission 1". */
  label?: string;
  /** Main line on the placeholder. */
  title?: string;
  /** Supporting line at the bottom of the placeholder. */
  caption?: string;
  /**
   * Icon component, typically from lucide-react. Typed against React's own
   * SVG props so lucide's `aria-hidden?: Booleanish` is accepted — a stricter
   * hand-written shape rejects every lucide icon.
   */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  variant?: 'deep' | 'light';
}) {
  const [failed, setFailed] = useState(false);
  const photo = src && !failed ? src : null;

  // On a photograph the ground is the scrim, so the light palette applies
  // whatever `variant` says — otherwise a variant="light" panel would put
  // blue-900 text on a dark image.
  const onPhoto = photo !== null;
  const palette = onPhoto
    ? 'text-white'
    : variant === 'deep'
      ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white'
      : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-blue-900 border border-blue-100';

  return (
    <div
      role="img"
      aria-label={alt ?? title ?? 'CDD Pays-Bas'}
      className={`relative isolate w-full h-full rounded-2xl shadow-lg ${palette} p-5 sm:p-6 lg:p-8 flex flex-col justify-between gap-3 overflow-hidden ${className}`}
    >
      {photo && (
        <>
          <img
            src={photo}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="absolute inset-0 -z-10 w-full h-full object-cover"
          />
          {/*
            Two layers, not one. The flat wash sets a floor no photograph can
            rise above; the gradient then deepens the top-left and bottom,
            which is where the label, title and caption sit. Measured against a
            deliberately near-white test image, white copy holds above 12:1.
          */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-slate-950/70" />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/85 via-slate-950/45 to-slate-950/85"
          />
        </>
      )}
      {/*
        min-w-0 lets the flex child shrink below its content width, which is
        what allows the clamps below to take effect at all — without it a long
        unbroken string forces the box wider and the clamp never engages.
      */}
      <div className="min-w-0">
        {label && (
          <p
            className={`text-xs sm:text-sm uppercase tracking-widest font-semibold line-clamp-1 ${
              onPhoto || variant === 'deep' ? 'text-cyan-200' : 'text-blue-700'
            }`}
          >
            {label}
          </p>
        )}
        {/*
          Clamped to two lines. Titles here are page headlines, and the longest
          of them (the Iftar story, ~100 characters) previously ran 60px past
          the bottom of a 4:3 box and was silently clipped mid-word. Two lines
          fits every box this placeholder is used in, at every breakpoint.
          `break-words` covers a single long token that cannot wrap.
        */}
        {title && (
          <p className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold leading-tight line-clamp-2 break-words">
            {title}
          </p>
        )}
      </div>

      {Icon && (
        <Icon
          className={`h-10 w-10 sm:h-14 sm:w-14 flex-shrink-0 ${
            onPhoto ? 'text-white/40' : variant === 'deep' ? 'text-white/25' : 'text-blue-900/15'
          }`}
          aria-hidden={true}
        />
      )}

      {caption && (
        <p
          className={`text-xs sm:text-sm leading-relaxed line-clamp-2 break-words ${
            onPhoto || variant === 'deep' ? 'text-blue-100' : 'text-blue-800'
          }`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
