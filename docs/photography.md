# Photography for the site

Image files go in `public/media/` and are referenced as `/media/<filename>`.

(This guide lives in `docs/` rather than next to the images because everything
under `public/` is copied verbatim to the deployed site — a README sitting at
https://cddpaysbas.nl/media/README.md is not what anyone wants.)

Drop image files into `public/media/` and reference them as `/media/<filename>`. Vite copies
`public/` to the build root untouched, so no import and no code change is needed
— add the file, redeploy, and it appears.

## Files the site is currently waiting for

Exactly **two** files. Each is wired into several places, so adding them lights
up the homepage hero, the news carousel and the article gallery at once.

| Filename | Where it appears |
|---|---|
| `cdd-iftar-rotterdam-group.jpg` | Homepage hero slide 2 · featured news slide (background) · article gallery |
| `cdd-iftar-rotterdam-table.jpg` | Homepage hero slide 3 · featured news slide (inset) · article gallery |

**Group** = the CDD Pays-Bas members and leaders standing together.
**Table** = the long dinner table with guests seated.

Until both exist, every one of those places renders the branded placeholder
instead. Nothing breaks and no broken-image icon appears.

## Guidance

- **Format:** JPEG for photographs, at ~80% quality. PNG only for logos or
  graphics with flat colour.
- **Size:** these are used full-bleed behind the hero, so supply at least
  **2000px on the long edge**. Below ~1200px they will look soft on a laptop
  screen and worse on a phone, which renders at 2× or 3×.
- **Weight:** keep each file under ~400 kB. These load on the homepage, and the
  homepage is where visitors decide whether the organisation looks serious.
- **Crop:** the hero shows a wide strip with the text block over the left half.
  A photograph whose subjects sit centre or right survives that crop best.
- **Consent:** these photographs show identifiable people. Confirm the
  attendees are content to appear on a public website before publishing —
  that is an AVG matter, not just a courtesy.

## Adding more later

Hero slides are configured in `src/data/heroSlides.ts` and the featured news
slide in `src/data/featuredStory.ts`. Both take a path string, so a new event
photo is a file here plus one line there.

## Commission page headers

Each commission page can carry its own background photograph behind the header.
Drop a file at the path below and it appears on the next deploy — no code
change. Until then the header renders the gradient and particle field it has
today, so an absent file is invisible rather than broken.

| Commission | File |
|---|---|
| Energy & Water Transition | `public/media/commission-energy-water.jpg` |
| Digital, AI & Infrastructure | `public/media/commission-digital-ai.jpg` |
| Industry, Trade & Logistics | `public/media/commission-industry-logistics.jpg` |
| Talent, Knowledge & Society | `public/media/commission-talent-society.jpg` |

Suggested subjects: solar or wind installations and water infrastructure;
a data centre or network operations floor; a container terminal or port; a
working session or classroom.

The header dims whatever you supply to roughly the same slate the copy was
measured against, so a bright photograph cannot break the contrast — measured
at 15.4:1 worst case with a near-white test image, against the 4.5:1 WCAG asks.
That means you can pick for composition rather than for darkness.

These are decorative: they sit under a scrim and repeat nothing the heading
does not already say, so they are rendered with an empty `alt` and hidden from
screen readers. Do not use one to convey information.

## Event photographs

Past events show a photo grid on `/events`. Photographs and their alt text are
configured per event in `src/data/events.ts` under `photos`. The first Iftar is
already wired to the two files below — the same ones the homepage hero and the
featured story use, so one upload lights up all three places:

- `public/media/cdd-iftar-rotterdam-group.jpg`
- `public/media/cdd-iftar-rotterdam-table.jpg`

Each photo carries its own alt text in all three languages. Write it as what
the picture shows, not as the event name — a screen reader announcing the same
title four times tells the listener nothing.
