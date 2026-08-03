# Localisation (EN · NL · FR)

## How it works

- `config.ts` — locales, BCP 47 tags, path helpers.
- `dictionaries.ts` — interface strings. **English is the reference**: TypeScript
  requires every key in `en` to exist in `nl` and `fr`, so a missing translation
  is a build error, not a silent English string in a Dutch page.
- `LocaleProvider.tsx` — resolves the locale (URL → saved choice → browser →
  English), sets `<html lang>`, and injects `hreflang` alternates.
- `LocaleSwitcher.tsx` — the persistent switcher, plus `UntranslatedNotice`.
- `LocaleLink.tsx` — use this instead of `Link` for internal navigation so a
  reader stays in their language.

English is served unprefixed (`/membership`); the others are prefixed
(`/nl/membership`, `/fr/membership`).

## Adding a UI string

1. Add the key to the `Dictionary` interface in `dictionaries.ts`.
2. Add it to `en`, `nl` and `fr`. The build fails until all three exist.
3. Use it: `const t = useTranslation();` then `{t.nav.events}`.

## Two kinds of content, two homes

**Interface strings** live in `dictionaries.ts` (above).

**Localised content** lives next to the data it describes, using the
`Localised<T>` pattern — see `src/data/membership.ts`:

```ts
name: { en: 'Individual', nl: 'Individueel', fr: 'Individuel' },
```

Read it with `pick(value, locale)`, which falls back to English per field so
partially translated data is still usable. Use this pattern for any content
where the copy and the structure belong together (a tier's name sits with its
price; a commission's mandate sits with its slug).

Membership tiers — names, audiences, headlines, benefit bullets and dues
formatting — are fully localised this way. They are conversion copy, not
editorial: a Dutch SME reading a Dutch pricing table converts, one reading an
English table hesitates.

## What is deliberately NOT translated here

Long-form **editorial** content is still English in all locales:

- the 23 advisor biographies
- commission mandates, opportunity paragraphs and priorities
- insight articles
- the privacy, cookie and accessibility statements

**This is a deliberate decision, not an oversight.**

*Editorially* — an advisor's biography is their professional reputation. It
should be translated by a person and ideally signed off by the advisor.

*Legally* — the privacy and cookie statements carry AVG obligations. A
mistranslated retention period or consent clause is a compliance problem, not a
typo. An accurate English privacy statement is better than an approximate Dutch
one.

Readers are told: `<UntranslatedNotice />` renders a short line explaining the
passage is in English, rather than silently serving it.

## Translating the long-form content

When professional translations are ready, the recommended route is to give the
content files a per-locale shape. For example in `src/data/commissions.ts`:

```ts
mandate: {
  en: 'To advance Dutch–Moroccan cooperation in renewable energy…',
  nl: 'Het bevorderen van Nederlands–Marokkaanse samenwerking…',
  fr: 'Faire progresser la coopération néerlando-marocaine…',
}
```

…and read it with a small helper that falls back to English per field, so
partially translated content is still usable. Do this per data file rather than
in one sweep; each is independent.

Priority order, highest value first:

1. ~~**Membership**~~ — done; the tier table is fully localised.
2. **Home and About** — first impressions for both non-English audiences.
3. **Commission mandates and priorities** — what institutional partners evaluate.
4. **Legal statements** — needs a professional translator, not a general one.
5. **Advisor biographies** — largest volume, lowest urgency; do with sign-off.

### Where to draw the line

The test is *conversion copy vs editorial*. Anything a visitor reads while
deciding whether to act — pricing, benefits, buttons, form labels — should be
translated. Anything carrying someone's professional reputation (a biography)
or legal weight (the privacy statement) should be translated by a person.

## Checking a locale

```bash
npm run build && npx vite preview
# then visit /nl and /fr
```

Confirm `<html lang>` changes, the switcher keeps you on the same page, and the
`hreflang` alternates in `<head>` point at all three locales plus `x-default`.
