# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Next.js 16 on localhost:3000, Turbopack enabled)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Start production:** `npm run start`

No test framework is configured.

## Architecture

Personal portfolio site: **Next.js 16 (App Router)**, React 19, TypeScript, Tailwind CSS v4. Single-page app — all sections compose in `app/page.tsx` (`"use client"`).

### Sections structure

`app/page.tsx` renders in order: Navigation → Hero → Skills → Projects → TechMarquee → Experience → Contact → Footer.

- Navigation lives in `app/components/navigation.tsx`
- Sections live in `app/sections/`. Files with `.new` suffix are active (e.g. `projects.new.tsx`, `experience.new.tsx`). Files without the suffix are legacy/unused.

### Styling

**Tailwind v4** — CSS-first config, no `tailwind.config.ts`. Design tokens defined via `@theme` block in `app/globals.css`. Color tokens use Oklch, brand accent is `--obsidian-accent` (available as `text-obsidian`, `bg-obsidian`, `border-obsidian`).

Theme system: custom `ThemeProvider` in `app/components/theme-provider.tsx` (not next-themes). Syncs to `localStorage`, defaults to dark, toggles `.dark` class on `<html>`. Consume via `useTheme()` from that file.

Custom CSS animations in `globals.css`: `marquee` and `marquee-reverse` (used by `tech-marquee.tsx`).

### Fonts

- **Geist Mono** (local, `./fonts/GeistMonoVF.woff`) — variable `--font-sans`, used for body and headings
- **JetBrains Mono** (Google Fonts) — variable `--font-mono`
- **Material Symbols Outlined** (Google CDN, loaded in `layout.tsx` `<head>`) — used for inline icon glyphs via `<span class="material-symbols-outlined">`

### Key patterns

- **`cn()`** utility at `lib/utils.ts` — clsx + tailwind-merge, use for conditional class names.
- **SVG imports** via `@svgr/webpack` in `next.config.mjs`. Import `.svg` directly as a React component; append `?url` for a URL string.
- **UI primitives** in `app/components/ui/` — Radix-based input, label, textarea only.
- **Remote images**: `next.config.mjs` allows `graphic-master.vercel.app` and `trell-master.vercel.app` as `remotePatterns`.

### API

Single route: `app/api/contact/route.ts` — contact form emails via Resend. Requires `RESEND_API_KEY` env var.

### Tracking

Google Tag Manager (`GTM-W22V74NS`) initialized twice: once as a raw script in `layout.tsx`, and once via `react-gtm-module` in `page.tsx`'s `useEffect`. Both are intentional (belt-and-suspenders for GTM).
