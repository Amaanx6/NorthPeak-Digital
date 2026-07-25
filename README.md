# NorthPeak Digital — Redesign

A full visual redesign of the NorthPeak Digital site, restyled around a warm,
editorial, minimal design system (inspired by the *feeling* of Digital Heroes —
not its layout, copy, or branding).

## Setup

```bash
npm install
npm run dev
```

## What changed

**Palette** — swapped the cool blue/dark theme for a warm neutral system:
paper `#F3F0E8`, ridge `#F7F5EF`, card `#FBFAF7`, ink `#1F1F1C`, sage-green
accent `#7F987C` / `#6D8769` on hover, and a muted gold (`signal`) reserved
for small highlights like ratings and the "most popular" tag.

**Typography** — Manrope (medium/semibold only, never heavy) for display
headings, Inter for body copy, IBM Plex Mono for eyebrows and small labels —
distinct from the original Space Grotesk pairing.

**Navbar** — rebuilt as a floating pill capsule: thin border, soft shadow,
circular logo mark and menu button, a small sliding hover-pill instead of a
glassy gradient bar.

**Cards & buttons** — 24–32px corner radii, 1px borders, soft shadows instead
of glassmorphism; buttons are fully pill-shaped, gradient-free, solid sage for
primary actions.

**Signature element** — a topographic "elevation mark" (contour rings, a
center point, cardinal tick marks) ties back to the NorthPeak name and gives
the hero one memorable, on-brief visual rather than a generic gradient blob.

**Components** — consolidated into a small reusable set:
`Button`, `Card`, `Badge`, `Section`, `Container`, `Heading`, plus the existing
`Reveal`, `FloatingField`, `Toast`, `AnimatedCounter`.

**Motion** — kept every animation from the original (Framer Motion reveals,
hover pill, animated counters) but tuned easing/scale so nothing overshoots or
bounces — fades and small translations only, per the brief.

All original functionality (form validation, toast, animated counters, mobile
nav, section anchors) is preserved.
