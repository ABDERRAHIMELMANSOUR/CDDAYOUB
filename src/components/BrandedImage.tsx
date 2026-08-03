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
  icon?: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
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
      className={`w-full h-full rounded-2xl shadow-lg bg-gradient-to-br ${palette} p-8 lg:p-10 flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div>
        {label && (
          <p
            className={`text-sm uppercase tracking-widest font-semibold ${
              variant === 'deep' ? 'text-cyan-200' : 'text-blue-700'
            }`}
          >
            {label}
          </p>
        )}
        {title && <p className="mt-3 text-2xl lg:text-3xl font-bold leading-tight">{title}</p>}
      </div>

      {Icon && (
        <Icon
          className={`h-16 w-16 ${variant === 'deep' ? 'text-white/25' : 'text-blue-900/15'}`}
          aria-hidden={true}
        />
      )}

      {caption && (
        <p
          className={`text-sm leading-relaxed ${
            variant === 'deep' ? 'text-blue-100' : 'text-blue-800'
          }`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
