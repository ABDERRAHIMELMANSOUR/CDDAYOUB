import React from 'react';

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
 * in CDD's own colours — and accepts a real image the moment one exists. Drop
 * CDD's event photography into src/assets/photos/ and pass it as `src`; the
 * placeholder disappears with no layout change.
 *
 * Usage:
 *   <BrandedImage label="Commission 1" title="Energy & Water Transition" />
 *   <BrandedImage src={iftar2026} alt="Guests at the first collective Iftar" />
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
  /** Real photograph. When supplied, it replaces the placeholder entirely. */
  src?: string;
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
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? title ?? ''}
        loading="lazy"
        className={`w-full h-full object-cover rounded-2xl shadow-lg ${className}`}
      />
    );
  }

  const palette =
    variant === 'deep'
      ? 'from-blue-900 via-blue-800 to-cyan-700 text-white'
      : 'from-blue-50 via-white to-cyan-50 text-blue-900 border border-blue-100';

  return (
    <div
      role="img"
      aria-label={alt ?? title ?? 'CDD Pays-Bas'}
      className={`w-full h-full rounded-2xl shadow-lg bg-gradient-to-br ${palette} p-5 sm:p-6 lg:p-8 flex flex-col justify-between gap-3 overflow-hidden ${className}`}
    >
      {/*
        min-w-0 lets the flex child shrink below its content width, which is
        what allows the clamps below to take effect at all — without it a long
        unbroken string forces the box wider and the clamp never engages.
      */}
      <div className="min-w-0">
        {label && (
          <p
            className={`text-xs sm:text-sm uppercase tracking-widest font-semibold line-clamp-1 ${
              variant === 'deep' ? 'text-cyan-200' : 'text-blue-700'
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
            variant === 'deep' ? 'text-white/25' : 'text-blue-900/15'
          }`}
          aria-hidden={true}
        />
      )}

      {caption && (
        <p
          className={`text-xs sm:text-sm leading-relaxed line-clamp-2 break-words ${
            variant === 'deep' ? 'text-blue-100' : 'text-blue-800'
          }`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
