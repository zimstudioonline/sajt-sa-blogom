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
  - `layout.tsx` je korenski (root) layout, `page.tsx` je početna stranica, `globals.css`
    su globalni stilovi. Segmenti ruta se dodaju kao podfolderi sa sopstvenim `page.tsx`.
- **Import alias**: `@/*` se mapira na `./src/*` (vidi `tsconfig.json`). Koristi ga umesto
  dugačkih relativnih putanja.
- **Tailwind CSS v4** preko `@tailwindcss/postcss` — konfigurisan u `postcss.config.mjs`
  plus `@import`/`@theme` u `src/app/globals.css`. Ne postoji stari
  `tailwind.config.js`.
- **TypeScript** u `strict` režimu.

## Namera projekta

Ovo je **blog sajt** (u izradi). Sam blog — kako se postovi dobavljaju i prikazuju — još
nije napravljen; ne pretpostavljaj da postoji pipeline za postove ili struktura sadržaja
dok se ne doda.
