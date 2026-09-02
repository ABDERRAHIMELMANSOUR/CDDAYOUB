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

Until a file exists at those paths, each header falls back to a stock URL
configured in `src/data/commissionDomains.ts`, and then to the plain gradient
if that fails too. Uploading CDD's own photograph needs no code change — the
local file always wins.

**The stock URLs have not been checked in a browser.** The build environment
blocks images.unsplash.com, so nobody has confirmed that each one resolves or
that the photograph it returns shows what its comment claims. Open the four
commission pages after a deploy and look. A dead URL costs nothing — the
header falls back to the gradient — but a live URL pointing at the wrong
subject puts an unrelated picture under a commission's name, and only a person
can catch that.

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

A photograph that has not been uploaded renders a branded panel reading
"Photograph to follow" rather than vanishing, so the gallery keeps its shape
and reads as awaiting content rather than missing it.

## Section banners

The panels that currently render as a blue gradient — "From vision to reality",
"Experienced leadership", the Partnerships and About blocks, the homepage
impact block, and the panel beside each commission's opportunity copy — all
accept a background photograph at the paths below.

| Where | File |
|---|---|
| Leadership · From vision to reality | `public/media/vision-reality-bg.jpg` |
| Leadership · Experienced leadership | `public/media/leadership-hero-bg.jpg` |
| Partnerships | `public/media/partnerships-bg.jpg` |
| About · who we are | `public/media/about-network-bg.jpg` |
| Home · our impact | `public/media/home-impact-bg.jpg` |

The four commission files listed above serve double duty: each is used both as
the commission's page header and as the panel beside its opportunity copy, so
there is one photograph per commission rather than two.

A photograph does not replace the panel, it re-grounds it: the image goes
behind, a dark scrim goes over it, and the same eyebrow and title stay exactly
where they are. Nothing moves when a file lands, and nothing breaks when one is
missing — the panel falls back to the gradient it shows today.

Contrast does not depend on the photograph. The scrim holds white copy above
13.9:1 measured with a deliberately near-white test image, against the 4.5:1
WCAG asks, so these can be chosen for composition rather than for darkness.

## Fetching the banner photographs

`scripts/fetch-media.sh` downloads all nine at 2000px into `public/media/`
under the exact filenames the code expects, and prints the dimensions and
weight of each so a wrong or missing file is obvious:

```
bash scripts/fetch-media.sh
```

It cannot be run from Claude's build environment — every stock-photo CDN is
blocked there at the egress proxy — so run it locally, then commit the files.

The photo IDs in that script are unverified guesses at photographs matching
each subject, for the same reason. A URL that 404s costs nothing: the script
reports it and the site keeps its branded panel. A URL that resolves to the
*wrong* photograph is the risk worth checking by eye, because nothing
automated can catch it. Swapping one is a single ID on a single line.

## The generated banners

All nine banner files in `public/media/` are currently drawn rather than
photographed, by `scripts/generate_banners.py`:

```
python3 scripts/generate_banners.py
```

Each is 1920x1080 in CDD's palette — deep navy through royal blue, with sky and
light-blue accents — carrying one geometric motif for its subject: a turbine fan
over water, a node constellation, a container yard under a gantry, clustered
groups, a perspective plane spanned by an arc, concentric rings, interlocking
rings, a globe graticule, a skyline that doubles as a rising chart.

Brightness is measured on two numbers, not one. The script checks the MEAN
luminance of each file (target 0.060 — flat #0A192F navy is 0.011) as well as
its peak, and brightens or dims until both sit in range. Checking only the peak
was the mistake in the first version: glow cores said "bright enough" while the
field sat at flat navy, and once the panel scrim multiplied that down the
banners rendered as black rectangles.

The contrast budget belongs to the composite, not to the file. These files are
NOT safe as a bare background for white text — they are one half of a pair with
the scrim in `BrandedImage.tsx`, which is heavy at the top and bottom where the
copy sits and nearly clear through the middle. Measured together on the built
pages: white copy at 13.4:1 or better, artwork band 8 to 16 times brighter than
the version that shipped black.

These are a good default, not a permanent answer. Replace any of them with a
real photograph using the same filename and nothing else needs to change — the
script is only re-run if you want the drawn version back.
