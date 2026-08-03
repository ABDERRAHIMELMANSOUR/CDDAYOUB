# CDD event photography

Drop CDD's own photography here to replace the branded placeholders (ticket 21).

## Why this folder exists

The site previously illustrated its content with off-brand stock imagery — a
concert stage for "Education & Capacity Building", a clinical prosthetic-fitting
photo for "Innovation & Technology", an unrelated conference group photo for
"Economy & Finance", and one generic handshake reused across three pages.

Those have been replaced with `<BrandedImage />`, which renders a panel in CDD's
own colours and accepts a real photograph the moment one exists.

## How to use a real photo

1. Add the file here, named for what it shows, e.g. `iftar-2026-rotterdam.jpg`.
2. Import it and pass it as `src`:

```tsx
import iftar from '../../assets/photos/iftar-2026-rotterdam.jpg';

<BrandedImage
  src={iftar}
  alt="Guests at the first collective Iftar in Rotterdam, February 2026"
/>
```

The placeholder disappears with no layout change.

## Guidelines

- **Alt text describes what is in the photo**, not the section it decorates.
- **Prefer CDD's own events** over any stock image. A real photo of fifteen
  people in a room is worth more than a polished stock photo of nobody.
- **Export at roughly 1600px wide**, JPEG quality ~80. The advisor portraits in
  `src/assets/` are 400KB–1MB each and are worth compressing at the same time.
- **Get consent** before publishing identifiable photographs of attendees.
