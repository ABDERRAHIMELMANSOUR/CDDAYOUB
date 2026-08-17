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
