#!/usr/bin/env python3
"""
Generate the nine section-banner images in CDD's palette.

    python3 scripts/generate_banners.py

── WHY THESE ARE DRAWN RATHER THAN PHOTOGRAPHED ─────────────────────────────
Stock photography is unreachable from the build environment (every CDN is
refused at the egress proxy), and stock photography of somebody else's wind
farm was never a great fit for these panels anyway — it illustrates work CDD
has not done. Abstract marks in the organisation's own palette say "energy",
"logistics" or "network" without claiming a photograph of one.

These are backgrounds, not pictures. Each carries a single geometric motif at
low contrast, and every panel puts white copy over it.

── ON DARKNESS ──────────────────────────────────────────────────────────────
The first version of this script held the raw files below 4.5:1 on their own,
before the panel's scrim went on. That was the wrong place to spend the
budget: the scrim then multiplied an already-dark image down to about a
twentieth of its brightness and the panels rendered as black rectangles.

The contrast budget belongs to the composite, not to the file. So the ceiling
here is set for a file that will be seen THROUGH the panel scrim, and the
scrim in BrandedImage.tsx is now shaped to be heavy where the text sits and
light where it does not — dark corners, vivid middle. Measured together they
give roughly 11:1 behind the copy and around 5:1 at the brightest point of
the artwork, which carries no text.

Consequence worth knowing: these files are NOT safe as a bare background for
white text on their own. They are one half of a pair.

Drawing happens at 2x and is downsampled with LANCZOS, which is what keeps the
thin lines from aliasing.
"""

import math
import os
import random

from PIL import Image, ImageChops, ImageDraw, ImageFilter

WIDTH, HEIGHT = 1920, 1080
SS = 2  # supersample factor
W, H = WIDTH * SS, HEIGHT * SS

DEST = os.path.join(os.path.dirname(__file__), "..", "public", "media")

# CDD palette.
NAVY = (10, 25, 47)        # #0A192F
ROYAL = (30, 58, 138)      # #1E3A8A
SKY = (2, 132, 199)        # #0284C7
LIGHT = (56, 189, 248)     # #38BDF8
# Blue-biased tints for solid fills and focal points. Additive blending climbs
# the green channel fastest, so SKY-on-SKY solids came out teal and the bright
# cores came out green-white. These keep the same family without that drift.
STEEL = (37, 99, 235)      # blue-600, for large solid faces
PALE = (198, 224, 255)     # a blue-white core that saturates to white

# Ceiling on the 99.5th-percentile luminance of the finished FILE. Chosen so
# that after the panel's scrim (which keeps ~20% of the image behind the text
# and ~65% at the centre) white copy still clears 4.5:1 at the brightest point
# and lands nearer 11:1 where it actually sits. See the note above.
MAX_LUMA = 0.260
# Mean luminance to aim for. This is the number that decides whether the panel
# looks like artwork or like a black rectangle, and it is the one the first
# version never checked — flat #0A192F navy has a mean of about 0.011, which is
# exactly where those files landed.
TARGET_MEAN = 0.060


# ── helpers ─────────────────────────────────────────────────────────────────

def lerp(a, b, t):
    return tuple(int(round(a[i] + (b[i] - a[i]) * t)) for i in range(3))


def linear_gradient(size, top, bottom, angle=0.0):
    """A gradient drawn small and scaled up — far cheaper than per-pixel."""
    w, h = size
    steps = 512
    strip = Image.new("RGB", (1, steps))
    px = strip.load()
    for y in range(steps):
        px[0, y] = lerp(top, bottom, y / (steps - 1))
    grad = strip.resize((w, h), Image.BILINEAR)
    if angle:
        grad = grad.rotate(angle, resample=Image.BILINEAR, expand=False)
    return grad


def radial_glow(size, centre, radius, colour, strength=1.0):
    """A soft circular glow, additively composited by the caller."""
    w, h = size
    small = max(8, int(radius / 12))
    layer = Image.new("L", (small * 2, small * 2), 0)
    d = ImageDraw.Draw(layer)
    steps = 24
    for i in range(steps, 0, -1):
        t = i / steps
        r = small * t
        d.ellipse(
            [small - r, small - r, small + r, small + r],
            fill=int(255 * strength * (1 - t) ** 1.6),
        )
    layer = layer.resize((int(radius * 2), int(radius * 2)), Image.BILINEAR)
    mask = Image.new("L", (w, h), 0)
    mask.paste(layer, (int(centre[0] - radius), int(centre[1] - radius)))
    tint = Image.new("RGB", (w, h), colour)
    out = Image.new("RGB", (w, h), (0, 0, 0))
    out.paste(tint, (0, 0), mask)
    return out


def ink(size):
    """Transparent layer for a motif, plus its draw handle."""
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    return layer, ImageDraw.Draw(layer)


# ── motifs ──────────────────────────────────────────────────────────────────
# Each returns an RGBA layer drawn at (W, H). Alpha carries the intensity;
# these are backgrounds, so nothing here goes near full opacity.

def motif_energy_water(rng):
    """Turbine blades radiating over water: sine bands under a radial fan."""
    layer, d = ink((W, H))
    cx, cy = W * 0.74, H * 0.42

    for i in range(28):
        a = i * (2 * math.pi / 28) + 0.15
        for reach, alpha, wide in ((0.52, 26, 5), (0.34, 40, 8)):
            x2 = cx + math.cos(a) * W * reach
            y2 = cy + math.sin(a) * W * reach
            d.line([cx, cy, x2, y2], fill=LIGHT + (alpha,), width=wide * SS)

    for ring in range(3):
        r = W * (0.10 + ring * 0.055)
        d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=SKY + (46,), width=3 * SS)

    # Water: stacked sine bands across the lower third.
    for band in range(9):
        base = H * (0.60 + band * 0.052)
        amp = H * (0.016 + band * 0.004)
        pts = []
        for x in range(0, W + 1, 12 * SS):
            pts.append((x, base + math.sin(x / (W / 5.0) + band * 0.7) * amp))
        d.line(pts, fill=SKY + (34 + band * 3,), width=3 * SS, joint="curve")
    return layer


def motif_digital_ai(rng):
    """A node constellation — the site's own particle field, held still."""
    layer, d = ink((W, H))
    nodes = []
    cols, rows = 13, 8
    for c in range(cols):
        for r in range(rows):
            x = W * (c + 0.5) / cols + rng.uniform(-1, 1) * W / cols * 0.34
            y = H * (r + 0.5) / rows + rng.uniform(-1, 1) * H / rows * 0.34
            nodes.append((x, y))

    link = (W / cols) * 1.30
    for i, (x1, y1) in enumerate(nodes):
        for x2, y2 in nodes[i + 1:]:
            dist = math.hypot(x2 - x1, y2 - y1)
            if dist < link:
                a = int(52 * (1 - dist / link))
                if a > 3:
                    d.line([x1, y1, x2, y2], fill=LIGHT + (a,), width=2 * SS)
    for x, y in nodes:
        r = rng.uniform(2.4, 5.2) * SS
        d.ellipse([x - r, y - r, x + r, y + r], fill=LIGHT + (128,))
    return layer


def motif_industry_logistics(rng):
    """Stacked containers in isometric projection, with freight lanes behind."""
    layer, d = ink((W, H))

    for lane in range(7):
        y = H * (0.12 + lane * 0.13)
        d.line([0, y, W, y - H * 0.05], fill=SKY + (24,), width=2 * SS)

    # A gantry line over the yard — the thing that says "port" rather than
    # "bar chart", which is what evenly stepped stacks read as on their own.
    gy = H * 0.34
    d.line([W * 0.02, gy, W * 0.98, gy], fill=LIGHT + (54,), width=4 * SS)
    for leg in (0.08, 0.44, 0.80):
        d.line([W * leg, gy, W * leg, H * 0.90], fill=SKY + (34,), width=3 * SS)
        d.line([W * (leg + 0.10), gy, W * (leg + 0.10), H * 0.62],
               fill=SKY + (26,), width=3 * SS)

    bw, bh, depth = W * 0.062, H * 0.058, W * 0.026
    base_y = H * 0.92
    for col in range(11):
        x = W * 0.04 + col * bw * 1.16
        for level in range(rng.randint(4, 7)):
            y = base_y - level * bh * 1.10
            top = [
                (x, y), (x + bw, y - depth * 0.55),
                (x + bw + depth, y - depth * 0.15), (x + depth, y + depth * 0.40),
            ]
            d.polygon(top, fill=PALE + (26,))
            d.polygon(
                [(x, y), (x + depth, y + depth * 0.40),
                 (x + depth, y + depth * 0.40 + bh), (x, y + bh)],
                fill=ROYAL + (72,),
            )
            d.polygon(
                [(x + depth, y + depth * 0.40),
                 (x + bw + depth, y - depth * 0.15),
                 (x + bw + depth, y - depth * 0.15 + bh),
                 (x + depth, y + depth * 0.40 + bh)],
                fill=STEEL + (52,),
            )
    return layer


def motif_talent_society(rng):
    """Clusters of people-scale nodes, bridged between groups."""
    layer, d = ink((W, H))
    clusters = [(W * 0.20, H * 0.34), (W * 0.50, H * 0.62),
                (W * 0.78, H * 0.30), (W * 0.62, H * 0.86)]
    members = []
    for cx, cy in clusters:
        group = []
        for _ in range(11):
            a, rad = rng.uniform(0, 2 * math.pi), rng.uniform(0.03, 0.13) * W
            group.append((cx + math.cos(a) * rad, cy + math.sin(a) * rad * 0.72))
        members.append(group)
        for i, (x1, y1) in enumerate(group):
            for x2, y2 in group[i + 1:]:
                d.line([x1, y1, x2, y2], fill=LIGHT + (30,), width=2 * SS)
        for x, y in group:
            r = rng.uniform(4, 8) * SS
            d.ellipse([x - r, y - r, x + r, y + r], fill=LIGHT + (120,))

    for i in range(len(clusters)):
        for j in range(i + 1, len(clusters)):
            d.line([clusters[i], clusters[j]], fill=SKY + (26,), width=3 * SS)
    return layer


def motif_vision_reality(rng):
    """A perspective plane running to a horizon, spanned by a bridge arc."""
    layer, d = ink((W, H))
    vx, vy = W * 0.52, H * 0.46

    for i in range(-16, 17):
        d.line([vx + i * W * 0.075, H, vx, vy], fill=SKY + (28,), width=2 * SS)
    y = vy
    step = H * 0.012
    while y < H:
        d.line([0, y, W, y], fill=SKY + (22,), width=2 * SS)
        step *= 1.30
        y += step

    for k, (span, lift, alpha) in enumerate(
        ((0.46, 0.20, 58), (0.62, 0.27, 40), (0.80, 0.34, 26))
    ):
        left, right = W * (0.5 - span / 2), W * (0.5 + span / 2)
        top = vy - H * lift
        d.arc([left, top, right, vy + H * lift], 180, 360,
              fill=LIGHT + (alpha,), width=(4 - k) * SS)
    return layer


def motif_leadership(rng):
    """Concentric rings converging on a single off-centre point."""
    layer, d = ink((W, H))
    cx, cy = W * 0.68, H * 0.44
    for i in range(22):
        r = W * (0.035 + i * 0.038)
        a = max(6, int(62 - i * 2.6))
        d.ellipse([cx - r, cy - r * 0.86, cx + r, cy + r * 0.86],
                  outline=SKY + (a,), width=2 * SS)
    for i in range(18):
        ang = i * (2 * math.pi / 18) + 0.3
        d.line([cx, cy,
                cx + math.cos(ang) * W * 0.9, cy + math.sin(ang) * W * 0.9],
               fill=LIGHT + (16,), width=2 * SS)
    r = W * 0.020
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=PALE + (105,))
    return layer


def motif_partnerships(rng):
    """Two systems overlapping — interlocking rings, thickest where they meet."""
    layer, d = ink((W, H))
    r = W * 0.215
    c1, c2 = (W * 0.40, H * 0.50), (W * 0.60, H * 0.50)
    for centre, colour in ((c1, SKY), (c2, LIGHT)):
        for k in range(7):
            rr = r * (1 - k * 0.085)
            d.ellipse([centre[0] - rr, centre[1] - rr, centre[0] + rr, centre[1] + rr],
                      outline=colour + (48 - k * 5,), width=3 * SS)
    # The overlap is the whole point, so it is drawn rather than implied: a
    # brighter lens where the two sets meet. An earlier version fanned lines
    # between the centres, which read as a cone rather than as a join.
    lens = W * 0.098
    for k in range(5):
        ll = lens * (1 - k * 0.16)
        d.ellipse([W * 0.5 - ll * 0.62, H * 0.5 - ll,
                   W * 0.5 + ll * 0.62, H * 0.5 + ll],
                  outline=LIGHT + (40 + k * 10,), width=3 * SS)
    return layer


def motif_about_network(rng):
    """A globe as graticule: latitudes, meridians, and points of presence."""
    layer, d = ink((W, H))
    cx, cy, r = W * 0.63, H * 0.50, H * 0.40
    d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=SKY + (56,), width=3 * SS)
    for i in range(1, 7):
        rr = r * math.cos(i * math.pi / 14)
        off = r * math.sin(i * math.pi / 14)
        for sign in (1, -1):
            d.ellipse([cx - rr, cy + sign * off - rr * 0.10,
                       cx + rr, cy + sign * off + rr * 0.10],
                      outline=SKY + (34,), width=2 * SS)
    for i in range(9):
        rr = r * abs(math.cos(i * math.pi / 9))
        d.ellipse([cx - rr, cy - r, cx + rr, cy + r], outline=SKY + (30,), width=2 * SS)
    for _ in range(34):
        a, rad = rng.uniform(0, 2 * math.pi), rng.uniform(0, 0.95) * r
        x, y = cx + math.cos(a) * rad, cy + math.sin(a) * rad
        pr = rng.uniform(3, 6) * SS
        d.ellipse([x - pr, y - pr, x + pr, y + pr], fill=LIGHT + (120,))
    return layer


def motif_home_impact(rng):
    """A skyline that also reads as a rising chart."""
    layer, d = ink((W, H))
    base = H * 0.94
    x = -W * 0.02
    heights = []
    while x < W:
        bw = rng.uniform(0.028, 0.062) * W
        # Rises left to right, but never collapses: the left third was empty
        # canvas at the previous floor, which made the panel look unfinished.
        grow = 0.26 + 0.34 * (x / W)
        bh = H * rng.uniform(grow * 0.70, grow)
        d.rectangle([x, base - bh, x + bw, base], fill=ROYAL + (66,))
        d.line([x, base - bh, x + bw, base - bh], fill=LIGHT + (86,), width=3 * SS)
        for wy in range(int(base - bh + H * 0.02), int(base), int(H * 0.030)):
            for wx in range(int(x + bw * 0.18), int(x + bw * 0.82), int(bw * 0.30)):
                d.rectangle([wx, wy, wx + bw * 0.10, wy + H * 0.010],
                            fill=LIGHT + (34,))
        heights.append((x + bw / 2, base - bh))
        x += bw * 1.12
    d.line(heights, fill=LIGHT + (72,), width=4 * SS, joint="curve")
    return layer


# ── composition ─────────────────────────────────────────────────────────────

SPECS = [
    ("commission-energy-water.jpg", motif_energy_water, (0.22, 0.30), 11),
    ("commission-digital-ai.jpg", motif_digital_ai, (0.78, 0.24), 12),
    ("commission-industry-logistics.jpg", motif_industry_logistics, (0.20, 0.78), 13),
    ("commission-talent-society.jpg", motif_talent_society, (0.50, 0.30), 14),
    ("vision-reality-bg.jpg", motif_vision_reality, (0.52, 0.40), 15),
    ("leadership-hero-bg.jpg", motif_leadership, (0.70, 0.42), 16),
    ("partnerships-bg.jpg", motif_partnerships, (0.50, 0.50), 17),
    ("about-network-bg.jpg", motif_about_network, (0.64, 0.48), 18),
    ("home-impact-bg.jpg", motif_home_impact, (0.30, 0.72), 19),
]


def luma_stats(img):
    """Mean and 99.5th-percentile relative luminance."""
    small = img.resize((320, 180), Image.BILINEAR)

    def lin(c):
        c /= 255
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4

    vals = [0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
            for r, g, b in small.getdata()]
    vals.sort()
    return sum(vals) / len(vals), vals[int(len(vals) * 0.995)]


def build(name, motif, glow_at, seed):
    rng = random.Random(seed)

    base = linear_gradient((W, H), lerp(NAVY, ROYAL, 1.05), lerp(NAVY, ROYAL, 0.30))
    # Glow colours are biased to ROYAL rather than stacked SKY-on-LIGHT.
    # Additive blending of two cyans climbs the green channel far faster than
    # the red one, and the highlights came out teal — off-brand, and the first
    # thing that reads as "generated".
    for centre, colour, radius, strength in (
        ((glow_at[0], glow_at[1]), ROYAL, 0.54, 0.62),
        ((0.06, 0.94), ROYAL, 0.42, 0.48),
        ((1.0 - glow_at[0], 1.0 - glow_at[1]), SKY, 0.30, 0.26),
    ):
        base = ImageChops.add(
            base,
            radial_glow((W, H), (W * centre[0], H * centre[1]), W * radius,
                        colour, strength),
        )

    layer = motif(rng)

    # Bloom, then the crisp motif on top. ImageChops.add DIVIDES by `scale`,
    # so it stays at 1.0 here and the bloom is dimmed on its own alpha instead
    # — passing scale=2.6 darkened the entire composite by 2.6x, which is what
    # turned these into black rectangles.
    bloom = layer.filter(ImageFilter.GaussianBlur(W * 0.0045))
    bloom.putalpha(bloom.getchannel("A").point(lambda v: int(v * 0.38)))
    base = ImageChops.add(base, bloom.convert("RGB"))
    # The crisp layer goes on twice: the motif has to stay a drawn line rather
    # than dissolve into its own halo, which is what a single pass under a
    # strong bloom looked like.
    base = Image.alpha_composite(base.convert("RGBA"), layer)
    base = Image.alpha_composite(base, layer).convert("RGB")

    # Vignette. Gentle: the previous one blended 55% toward navy outside a
    # blurred ellipse and flattened the outer third of every image.
    vig = Image.new("L", (W, H), 0)
    ImageDraw.Draw(vig).ellipse([-W * 0.34, -H * 0.46, W * 1.34, H * 1.46], fill=255)
    vig = vig.filter(ImageFilter.GaussianBlur(W * 0.05))
    base = Image.composite(base, Image.blend(base, Image.new("RGB", (W, H), NAVY), 0.30), vig)

    img = base.resize((WIDTH, HEIGHT), Image.LANCZOS)

    # Two-sided enforcement, on the FILE, against the composite budget above.
    # Brighten until the field is actually visible, then pull back if the
    # highlights would carry the brightest point past the ceiling. Measuring
    # only the 99.5th percentile was the earlier mistake: peak brightness said
    # "fine" while the mean sat at flat-navy and the panel looked empty.
    scale, guard = 1.0, 0
    while guard < 40:
        mean, peak = luma_stats(img)
        if mean < TARGET_MEAN * 0.94 and peak < MAX_LUMA:
            scale *= 1.07
        elif peak > MAX_LUMA:
            scale *= 0.95
        else:
            break
        img = base.point(lambda v: min(255, int(v * scale))).resize(
            (WIDTH, HEIGHT), Image.LANCZOS
        )
        guard += 1

    path = os.path.abspath(os.path.join(DEST, name))
    img.save(path, "JPEG", quality=90, optimize=True, progressive=True)
    mean, peak = luma_stats(img)
    kb = os.path.getsize(path) / 1024
    print(f"{name:36} {kb:6.0f} kB   mean {mean:.3f}   peak {peak:.3f}   "
          f"x{scale:.2f}")
    return mean, peak


if __name__ == "__main__":
    os.makedirs(DEST, exist_ok=True)
    means, peaks = [], []
    for name, motif, glow, seed in SPECS:
        m, pk = build(name, motif, glow, seed)
        means.append(m)
        peaks.append(pk)
    print(f"\nmean luminance {min(means):.3f}-{max(means):.3f} "
          f"(target {TARGET_MEAN}; flat navy is 0.011)")
    print(f"peak luminance {min(peaks):.3f}-{max(peaks):.3f} (ceiling {MAX_LUMA})")
    print("Contrast is verified on the built pages, not here — these files are "
          "seen through the panel scrim.")
