# O projektu

Ovo je fajl o projektu gde ćemo kreirati sajt sa blogom.

Ovo je jedini izvor istine o projektu — `CLAUDE.md` samo upućuje ovde, da se
činjenice ne bi razilazile na dva mesta.

## Bitno: Next.js 16

Ovaj projekat koristi **Next.js 16.2.10**, koji ima prelomne (breaking) izmene u odnosu na
ranije verzije (API-ji, konvencije i struktura fajlova mogu se razlikovati od podataka na
kojima je model treniran). **Pročitaj odgovarajući vodič u `node_modules/next/dist/docs/`
pre pisanja bilo kakvog Next.js koda** i obrati pažnju na obaveštenja o zastarelosti
(deprecation).

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

## Sadržaj i podaci

- **Postovi** su Markdown fajlovi u `content/posts/*.md` sa YAML frontmatter-om
  (`title`, `date`, `category`, `excerpt`, `author`, `cover`, `draft`). Slug posta je
  ime fajla. Čitanje ide preko `gray-matter` u `src/lib/posts.ts` — samo na serveru
  i u build vremenu, jer koristi fajl-sistem.
- **Kategorije** su kuriran spisak u `src/lib/categories.ts` i postoje nezavisno od
  postova. Post ih u frontmatter-u referencira imenom, ne slug-om.
- **Kalkulatori** su definisani u `src/lib/calculators.ts`, sa stranicama pod
  `(sajt)/kalkulatori/`.
- Slike postova stoje u `public/images/posts/`.

## Objavljivanje

- **Statički export** (`output: "export"`) na **GitHub Pages**, domen
  **zdravritual.com**. Deploy ide sam pri svakom push-u na `main`
  (`.github/workflows/deploy.yml`).
- Nema servera: newsletter obrađuje **Cloudflare Worker** u `worker/`, koji
  koristi Resend i Turnstile.
- Javne env varijable se postavljaju kao **GitHub Actions Variables**
  (`NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_NEWSLETTER_ENDPOINT`,
  `NEXT_PUBLIC_TURNSTILE_SITE_KEY`), a tajne Worker-a preko `wrangler secret`.

## Na šta paziti

- **Kolačići su opt-in.** Ništa što nije neophodno ne sme da se učita pre pristanka
  (vidi `src/lib/consent.ts` i Cookie politiku). Skripte trećih strana idu kroz GTM,
  uslovljene pristankom — ne direktno u layout.
- **Zdravstvene tvrdnje.** Sajt piše o dodacima ishrani. Smeju se koristiti samo
  odobrene tvrdnje, i to vezane za nutrijente (npr. vitamin C, selen), nikako za
  biljke same po sebi. Tvrdnje o lečenju ili sprečavanju bolesti nisu dozvoljene —
  ni u tekstu, ni u slikama.
- **Komercijalne stranice** moraju otkriti da su komercijalne, i to blizu poziva na
  akciju, ne samo u futeru.
