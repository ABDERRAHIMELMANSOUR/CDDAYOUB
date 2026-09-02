#!/usr/bin/env bash
#
# Fetch the nine section-banner photographs into public/media/.
#
# ── WHY THIS SCRIPT EXISTS ───────────────────────────────────────────────────
# The build environment Claude runs in blocks every stock-photo CDN at the
# egress proxy (images.unsplash.com, pexels, pixabay and picsum all answer 000
# — a policy denial, not a network fault). So the files cannot be fetched from
# there. They can be fetched from a normal machine, which is what this is for.
#
# Run it from the repository root:
#
#     bash scripts/fetch-media.sh
#
# It downloads each photograph at 2000px wide, writes it to public/media/ under
# the exact filename the code expects, and prints the dimensions and weight of
# what it got so a wrong or missing file is obvious immediately.
#
# ── THE PHOTO IDS ARE NOT VERIFIED ───────────────────────────────────────────
# Nobody has been able to open these URLs from the build environment, so each
# ID below is a best guess at a photograph matching the subject beside it. Two
# things follow.
#
# A URL that 404s costs nothing: the script says so and the site keeps showing
# the branded panel it shows today.
#
# A URL that RESOLVES TO THE WRONG PHOTOGRAPH is the real risk — an unrelated
# picture sitting under a commission's name. Look at every file after running
# this. To replace one, change the ID on its line; nothing else needs editing.
#
# Prefer CDD's own photography over any of these as soon as it exists. The
# filenames are the contract, not the source.
# ─────────────────────────────────────────────────────────────────────────────

set -uo pipefail

DEST="public/media"
WIDTH=2000

# filename|unsplash photo id|subject
ENTRIES=(
  "commission-energy-water.jpg|photo-1509391366360-2e959784a276|Solar array / renewable energy infrastructure"
  "commission-digital-ai.jpg|photo-1558494949-ef010cbdcc31|Data centre / server room"
  "commission-industry-logistics.jpg|photo-1578575437130-527eed3abbec|Container port / shipping terminal"
  "commission-talent-society.jpg|photo-1522071820081-009f0129c71c|Professional workshop / people working together"
  "vision-reality-bg.jpg|photo-1449157291145-7efd050a4d0e|Modern architecture / bridge"
  "leadership-hero-bg.jpg|photo-1497366754035-f200968a6e72|Boardroom / meeting space"
  "partnerships-bg.jpg|photo-1521737604893-d14cc237f11d|Partnership / people meeting"
  "about-network-bg.jpg|photo-1451187580459-43490279c0fa|Global connection / network"
  "home-impact-bg.jpg|photo-1477959858617-67f85cf4f1df|City skyline / economic development"
)

mkdir -p "$DEST"

ok=0
bad=0

for entry in "${ENTRIES[@]}"; do
  IFS='|' read -r file id subject <<< "$entry"
  url="https://images.unsplash.com/${id}?auto=format&fit=crop&w=${WIDTH}&q=80"

  printf '%-34s ' "$file"
  code=$(curl -sL --max-time 60 -o "${DEST}/${file}.tmp" -w '%{http_code}' "$url" 2>/dev/null)

  if [ "$code" != "200" ]; then
    printf 'FAILED (http %s) — %s\n' "$code" "$subject"
    rm -f "${DEST}/${file}.tmp"
    bad=$((bad + 1))
    continue
  fi

  # Reject anything that is not actually a JPEG: a CDN error page returns 200
  # with HTML, which would otherwise be saved under a .jpg name and render as
  # a broken image on the site.
  if ! head -c 2 "${DEST}/${file}.tmp" | od -An -tx1 | grep -q 'ff d8'; then
    printf 'NOT A JPEG — %s\n' "$subject"
    rm -f "${DEST}/${file}.tmp"
    bad=$((bad + 1))
    continue
  fi

  mv "${DEST}/${file}.tmp" "${DEST}/${file}"
  size=$(du -h "${DEST}/${file}" | cut -f1)
  dims=$(python3 - "${DEST}/${file}" <<'PY' 2>/dev/null || echo '?'
import struct, sys
d = open(sys.argv[1], 'rb').read()
i = 2
while i < len(d):
    if d[i] != 0xFF:
        i += 1
        continue
    m = d[i + 1]
    if m in (0xC0, 0xC1, 0xC2):
        h, w = struct.unpack('>HH', d[i + 5:i + 9])
        print(f'{w}x{h}')
        break
    if m in (0xD8, 0xD9) or 0xD0 <= m <= 0xD7:
        i += 2
        continue
    i += 2 + struct.unpack('>H', d[i + 2:i + 4])[0]
PY
)
  printf 'ok  %-11s %-7s %s\n' "$dims" "$size" "$subject"
  ok=$((ok + 1))
done

echo
echo "downloaded ${ok}/9, failed ${bad}"
echo
echo "Now LOOK at the nine files in ${DEST}/ before committing."
echo "A wrong-but-valid photograph is the failure this script cannot catch."
