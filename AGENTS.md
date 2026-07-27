# O projektu

Ovo je fajl o projektu gde ćemo kreirati sajt sa blogom

@AGENTS.md

## Bitno: Next.js 16

Ovaj projekat koristi **Next.js 16.2.10**, koji ima prelomne (breaking) izmene u odnosu na
ranije verzije (API-ji, konvencije i struktura fajlova mogu se razlikovati od podataka na
kojima je model treniran). **Pročitaj odgovarajući vodič u `node_modules/next/dist/docs/`
pre pisanja bilo kakvog Next.js koda** i obrati pažnju na obaveštenja o zastarelosti
(deprecation). Vidi `AGENTS.md` (uvezen iznad).

## Komande

- `npm run dev` — pokreni dev server (Turbopack) na http://localhost:3000
- `npm run build` — produkcioni build
- `npm run start` — posluži produkcioni build
- `npm run lint` — pokreni ESLint (konfiguracija iz `eslint-config-next`)

## Arhitektura

- **App Router** unutar `src/app/` — ne postoji `pages/` direktorijum.
  - **Dva root layout-a**, razdvojena route grupama (grupa ne ulazi u URL):
    - `src/app/(sajt)/layout.tsx` — blog i sve redovne stranice. Header, Footer,
      cookie baner, dugme „na vrh". Tema u `(sajt)/globals.css`.
    - `src/app/(landing)/layout.tsx` — prodajni landing (`/alfa-aktiv/`). Bez
      navigacije, sopstveni fontovi i tema u `(landing)/alfa-aktiv-theme.css`.
  - Navigacija između te dve grupe je **pun page load**, ne client-side.
  - `favicon.ico`, `icon.png`, `apple-icon.png` i `sitemap.ts` ostaju u korenu
    `src/app/` — tako traže Next-ove metadata konvencije.
  - Segmenti ruta se dodaju kao podfolderi sa sopstvenim `page.tsx`.
- **Import alias**: `@/*` se mapira na `./src/*` (vidi `tsconfig.json`). Koristi ga umesto
  dugačkih relativnih putanja.
- **Komponente**: `src/components/` su deljene (koriste ih obe grupe),
  `src/app/(sajt)/components/` su samo za sajt, `src/components/alfa-aktiv/` samo
  za landing.
- **Tailwind CSS v4** preko `@tailwindcss/postcss` — konfigurisan u `postcss.config.mjs`
  plus `@import`/`@theme` u CSS fajlu svake grupe. Ne postoji stari
  `tailwind.config.js`.
- **TypeScript** u `strict` režimu.

## Namera projekta

Ovo je **blog sajt** (u izradi). Sam blog — kako se postovi dobavljaju i prikazuju — još
nije napravljen; ne pretpostavljaj da postoji pipeline za postove ili struktura sadržaja
dok se ne doda.
