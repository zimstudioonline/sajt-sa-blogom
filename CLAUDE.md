# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: Next.js 16

This project uses **Next.js 16.2.10**, which has breaking changes vs. earlier versions
(APIs, conventions, and file structure may differ from training data). **Read the
relevant guide in `node_modules/next/dist/docs/` before writing any Next.js code**, and
heed deprecation notices. See `AGENTS.md` (imported above).

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (config from `eslint-config-next`)

## Architecture

- **App Router** under `src/app/` — there is no `pages/` directory.
  - `layout.tsx` is the root layout, `page.tsx` the home page, `globals.css` the global
    styles. Route segments are added as subfolders with their own `page.tsx`.
- **Import alias**: `@/*` maps to `./src/*` (see `tsconfig.json`). Prefer it over deep
  relative paths.
- **Tailwind CSS v4** via `@tailwindcss/postcss` — configured in `postcss.config.mjs`
  plus `@import`/`@theme` in `src/app/globals.css`. There is no legacy
  `tailwind.config.js`.
- **TypeScript** in `strict` mode.

## Project intent

This is a **blog site** (in progress). The blog itself — how posts are sourced and
rendered — is not yet built; do not assume a posts pipeline or content structure exists
until one has been added.
