<div align="center">

# NorthPeak Digital

**Software built to hold its elevation.**

A premium, single-page agency website — built to a modern SaaS-marketing standard (Linear / Vercel / Stripe tier) while staying fast, accessible, and lightweight.

Built as part of the **Digital Heroes Internship Qualification Task**.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

[**Live Demo →**](https://north-peak-digital-two.vercel.app/)

</div>

---

## Overview

NorthPeak Digital is a fictional digital product studio's marketing site — a single-page layout covering Hero, Services, Featured Work, Metrics, Testimonials, Pricing, and Contact. The build prioritizes:

- **A restrained, premium visual language** — layered shadows, glass surfaces, soft gradients, and a warm paper/alpine-green palette, rather than flashy effects.
- **A real design system**, not one-off styled sections — shared `Section`, `Heading`, `Card`, and `Button` primitives drive every part of the page, so spacing, shadows, and motion stay consistent by construction.
- **Performance-first motion** — nearly all interaction and animation is CSS (`transition`, `@keyframes`, `prefers-reduced-motion`); Framer Motion is used sparingly for scroll-triggered reveals and a handful of directional entrances, never as a substitute for CSS.
- **Accessibility and semantics** treated as first-class, not retrofitted — proper landmarks, focus-visible states, `aria-hidden` on decorative elements, and keyboard-operable interactive cards.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/), CVA (`class-variance-authority`) for variant components |
| Motion | [Framer Motion](https://www.framer.com/motion/) — scroll reveals & directional entrances only; hover/press states are pure CSS |
| Icons | [Lucide React](https://lucide.dev/) |
| Primitives | Radix Slot (`asChild` composition on `Button`) |

## Features

**Sections**
- Hero with a layered, product-ecosystem visual — floating status cards (deployment, API health, response time) built entirely from existing design tokens, no illustration libraries
- Services grid with expandable case-study detail panels (keyboard-operable, `aria-expanded`/`aria-controls`)
- Featured Work presented as a miniature live dashboard — KPI cards, an SVG revenue trend chart, deployment activity bars, and a recent-activity feed, all static data animated once on scroll
- Metrics section with once-only animated counters
- Client testimonials with a featured spotlight card + supporting grid
- Pricing and Contact sections with a floating-label form and client-side validation

**Design system**
- Shared `Section` primitive: consistent vertical rhythm (`py-24 md:py-28 lg:py-32`), tone variants (`paper` / `ridge` / `night`), soft gradient-fade section boundaries instead of hard borders, and a shared noise texture applied centrally
- Shared `Card` primitive with `default` / `glass` / `glass-dark` surface variants and layered shadow tokens
- Shared `Button` primitive (CVA-driven variants) with consistent hover lift, press feedback, and an animated underline treatment for ghost/link-style actions
- Centralized motion variants (`FADE_UP`, `SLIDE_LEFT`, `SLIDE_RIGHT`, `SCALE_FADE`, `EASE_PREMIUM`) — one source of truth for easing and entrance direction, no per-section duplication

**Navigation**
- Floating pill navbar with scroll-spy active-link highlighting
- Navbar visibility is scoped to the Hero section — fades out once the Hero scrolls out of view, returns on scroll-back, via `IntersectionObserver` (no scroll-jank, no extra JS libraries)
- Smooth, staggered mobile menu

**Quality**
- Fully responsive across mobile, tablet, and desktop breakpoints
- Semantic HTML throughout (`<section>`, `<nav>`, heading hierarchy, `role`/`aria-*` where interaction warrants it)
- Respects `prefers-reduced-motion` globally
- No unnecessary client components — most sections that don't need interactivity remain server components

## Getting Started

Clone the repository:

```bash
git clone https://github.com/yourusername/northpeak-digital.git
cd northpeak-digital
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── app/                  # App Router pages, layout, global metadata
├── components/
│   ├── navigation/       # Navbar
│   ├── sections/         # Hero, Services, Featured Work, Metrics, Testimonials, Pricing, Contact
│   └── ui/               # Shared primitives: Section, Heading, Card, Button, Container, Reveal, FloatingField, Badge
├── data/                 # Static content — nav links, services, projects, testimonials, metrics
├── lib/                  # Utilities (cn, etc.)
└── types/                # Shared TypeScript types
```

## Design Philosophy

This project treats **restraint as a feature**. Every visual flourish — the hero's floating cards, the dashboard's charts, section noise texture, glass panels — is built from tokens already defined in `tailwind.config.ts` and `globals.css`, so nothing introduces a second, competing visual language. Motion follows the same rule: CSS transitions and keyframes handle hover and ambient effects; Framer Motion is reserved for scroll-triggered reveals that CSS alone can't express cleanly (staggered children, `whileInView` triggers), and every scroll animation runs once, not on every re-entry.

## Lighthouse Targets Achieved

| Metric | Target |
|---|---|
| Performance (mobile) | 90+ |
| Performance (desktop) | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Credits

Built for the **Digital Heroes Internship Qualification Task**.
Digital Heroes: [digitalheroesco.com](https://digitalheroesco.com)
