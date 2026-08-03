import type { Locale } from './config';

/**
 * A value translated into every supported locale.
 *
 * Used for *content* that lives next to the data it describes — a membership
 * tier's name sits with its price, a commission's title sits with its slug —
 * as opposed to interface strings, which live in `dictionaries.ts`.
 *
 * See src/i18n/README.md for where the line falls between the two, and for
 * which content is deliberately left in English.
 */
export type Localised<T> = Record<Locale, T>;

/** Reads the value for a locale, falling back to English. */
export function pick<T>(value: Localised<T>, locale: Locale): T {
  return value[locale] ?? value.en;
}
