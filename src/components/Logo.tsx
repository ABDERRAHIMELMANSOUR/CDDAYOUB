import logo from 'figma:asset/b1faa4031595f1461db9b2a05d08177da0e5c2ec.png';

/**
 * The CDD Pays-Bas wordmark.
 *
 * ── WHY THIS IS A COMPONENT ─────────────────────────────────────────────────
 * The supplied artwork is a single PNG: a blue starburst with a BLACK wordmark
 * beside it ("CLUB DES DIRIGEANTS PAYS-BAS"), on transparency. Roughly an
 * eighth of its opaque pixels are that near-black text.
 *
 * On a light surface that is exactly right. On a dark one the wordmark all but
 * disappears — black on near-black — leaving the mark floating next to nothing.
 * The fix was a pair of utility classes hand-written on the footer's <img>,
 * which works but is easy to forget: every future dark section has to remember
 * to repeat it, and nothing catches it when someone does not.
 *
 * So the choice is a prop. `surface="dark"` is the treatment, not a filter
 * someone has to remember, and a new dark section gets a legible logo by
 * construction.
 *
 * ── ON THE INVERSION ────────────────────────────────────────────────────────
 * `brightness(0) invert(1)` collapses every opaque pixel to white: it takes
 * the artwork to black first, so the blue and the black land on the same
 * value, then flips it. The whole logo therefore reads as a clean white
 * silhouette rather than a half-visible one.
 *
 * The cost is the brand blue, which a single CSS filter cannot preserve while
 * also lifting the black — the two would have to be separable, and in a flat
 * PNG they are not. If a light-variant asset (blue mark, white wordmark) is
 * ever supplied, drop it in as `logoOnDark` and branch on `surface` here; every
 * call site picks it up with no other change.
 */
export function Logo({
  surface = 'light',
  className = '',
}: {
  /** The background this sits on. 'dark' inverts the artwork to white. */
  surface?: 'light' | 'dark';
  /** Sizing classes — height plus `w-auto`. */
  className?: string;
}) {
  return (
    <img
      src={logo}
      alt="CDD Pays-Bas"
      /*
       * No opacity here. The footer previously dimmed this to 90%, which is
       * the one thing you do not do to a logo that is already competing with
       * a dark ground — it is the difference between "white" and "nearly
       * white", and it was making the mark read as washed out.
       */
      className={`w-auto ${surface === 'dark' ? 'brightness-0 invert' : ''} ${className}`}
    />
  );
}
