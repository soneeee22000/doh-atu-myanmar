# Doh Atu Myanmar Website

## Project Overview

Trilingual (FR/EN/MY) website for Doh Atu – Ensemble pour le Myanmar. Built with Next.js 16, TypeScript, Tailwind CSS 4. Deployed on Vercel at doh-atu-myanmar.com.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (generates 18 static pages)
- `npm run lint` — ESLint
- `npx tsc --noEmit` — Type check

## Architecture

- **Next.js 16 App Router** with `proxy.ts` (not middleware.ts — renamed in v16)
- **Params are async** — always `await params` in pages/layouts
- **next-intl** for i18n — translations in `messages/*.json`
- **SSG** — all pages statically generated via `generateStaticParams`
- **No database** — content as TypeScript files in `src/content/`

## Design System

- Design tokens in `src/app/globals.css` via `@theme inline`
- Never use raw colors — always use tokens (`bg-primary`, `text-foreground`)
- Fonts: Playfair Display (headings), Noto Sans (body), Noto Serif Myanmar (Burmese)
- Burmese locale gets larger font-size (110%) and line-height (2.0)

## File Conventions

- Components: `src/components/{layout,sections,ui,icons}/`
- i18n: `src/i18n/`, translations: `messages/{fr,en,my}.json`
- Pages: `src/app/[locale]/`
- Proxy (middleware): `src/proxy.ts`
