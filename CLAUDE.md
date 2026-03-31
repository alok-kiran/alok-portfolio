# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Next.js on localhost:3000)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Start production:** `npm run start`

No test framework is configured.

## Architecture

This is a personal portfolio site built with **Next.js 14 (App Router)**, React 18, TypeScript, and Tailwind CSS. It's a single-page app — all sections render in `app/page.tsx` (client component).

### Key patterns

- **SVG imports** are handled via `@svgr/webpack` in `next.config.mjs`. Import `.svg` files directly as React components; use `?url` suffix for URL imports.
- **Smooth scrolling** is provided by the Lenis library, wrapped in `app/components/smooth-scroll-provider.tsx`.
- **Animations** use a mix of GSAP, Framer Motion, and CSS keyframes (defined in `globals.css` and `tailwind.config.ts`).
- **UI components** in `app/components/ui/` are Aceternity-style animated components (3d-card, aurora-background, timeline, infinite-moving-cards, etc.) using Framer Motion.
- **Fonts:** Inter (sans, `--font-sans`) and Calistoga (serif, `--font-serif`) loaded via `next/font/google` in `app/layout.tsx`. Headings use Space Grotesk via CSS import.
- **Path alias:** `@/*` maps to the project root.

### Sections structure

`app/page.tsx` composes these sections in order: Header → Hero → Projects → TechArsenal → Experience → Contact → Footer. Active versions use `-new` suffix files (e.g., `heroes-new.tsx`, `contact-new.tsx`). Original versions without the suffix are legacy/unused.

### API

Single API route at `app/api/contact/route.ts` — sends contact form emails via Resend. Requires `RESEND_API_KEY` env var.

### Tailwind config

Custom breakpoints: `sm: 375px`, `md: 768px`, `lg: 1200px`. Dark mode is class-based and always enabled (`<html className="dark">`). Custom animations: `ping-large`, `move-left`, `move-right`.

### Assets

- `assets/icons/` — general SVG icons
- `assets/icons/tech/` — technology/tool SVG icons
- `assets/images/` — project screenshots, profile images, background textures

### Tracking

Google Tag Manager (`GTM-W22V74NS`) is initialized both in `layout.tsx` (script tag) and `page.tsx` (react-gtm-module).
