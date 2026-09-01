import { useState } from 'react';

/**
 * Advisor portrait, with an initials fallback.
 *
 * Most advisor records carry a photograph. New appointments generally do not
 * yet — and a broken image, or a generic silhouette borrowed from stock, is a
 * worse introduction to a named senior professional than their own initials
 * set in the brand palette. The fallback is deliberate, not a placeholder to
 * be replaced by "any picture": it should be replaced by *their* photograph.
 *
 * The fallback covers two cases, not one. A record with `photo: null` has no
 * photograph on file. A record whose `photo` points at public/media/ has one
 * on the way but perhaps not uploaded yet — those paths are committed ahead of
 * the files so a portrait appears on the next deploy with no code change, and
 * until then the <img> 404s. Both land on the initials.
 */
export function AdvisorAvatar({
  name,
  photo,
  className = '',
}: {
  name: string;
  photo: string | null;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (photo && !failed) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-700 to-cyan-600 ${className}`}
      // The name is already rendered as text directly beneath every use of
      // this component, so the initials are decorative to a screen reader.
      role="img"
      aria-label={name}
    >
      <span className="text-white font-bold tracking-wide" style={{ fontSize: '38%' }}>
        {initials}
      </span>
    </div>
  );
}
