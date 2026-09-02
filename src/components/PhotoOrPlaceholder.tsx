import { useState } from 'react';
import { BrandedImage } from './BrandedImage';

/**
 * A photograph that degrades to the branded placeholder.
 *
 * Photography under public/media/ is supplied by the secretariat rather than
 * committed with the code, so a path may point at a file that is not there yet.
 * Two failure modes are handled:
 *
 *   - `src` is null      — nothing has been configured; render the placeholder.
 *   - the file 404s      — configured but not uploaded; `onError` swaps in the
 *                          placeholder rather than leaving the browser's broken
 *                          image icon on the homepage.
 *
 * This is what lets the slide ship before the photographs do.
 */
export function PhotoOrPlaceholder({
  src,
  alt,
  label,
  title,
  className = '',
  imgClassName = '',
  variant = 'deep',
  fit = 'cover',
}: {
  src: string | null;
  alt: string;
  /** Placeholder eyebrow, shown only when there is no photograph. */
  label?: string;
  /** Placeholder headline, shown only when there is no photograph. */
  title?: string;
  className?: string;
  imgClassName?: string;
  variant?: 'deep' | 'light';
  /**
   * 'cover' fills the box and crops the overflow — right for a backdrop that
   * sits under a scrim. 'contain' fits the whole frame and mats the rest —
   * right for a group photograph, where the people at the left and right
   * edges are the first thing a crop removes and the last thing you want to
   * lose. Give the container a background when using 'contain'.
   */
  fit?: 'cover' | 'contain';
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    /*
     * `alt=""` marks a PHOTOGRAPH as decorative, which is correct when the
     * caption beside it already carries the meaning. The placeholder is not an
     * <img> though — it is a role="img" element, and role="img" with an empty
     * accessible name is a WCAG failure (axe: role-img-alt). Empty alt is
     * therefore coerced to undefined so BrandedImage falls back through its
     * own chain: title, then the organisation name.
     */
    return (
      <BrandedImage
        label={label}
        title={title}
        alt={alt || undefined}
        variant={variant}
        className={className}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${imgClassName} ${className}`}
    />
  );
}
