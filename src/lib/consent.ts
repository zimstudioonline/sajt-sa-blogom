/**
 * Čuvanje i čitanje pristanka na kolačiće.
 *
 * Pravilo: sve što nije neophodno je isključeno dok korisnik izričito ne pristane
 * (opt-in). Zato je podrazumevana vrednost svuda `false` — nikad se ne pretpostavlja
 * pristanak, ni pre izbora ni ako je zapis oštećen.
 *
 * Izbor se čuva u localStorage, a ne u kolačiću: sajt je statički (GitHub Pages),
 * server nikad ne čita ovu vrednost, pa nema razloga slati je uz svaki zahtev.
 */

export type Consent = {
  analytics: boolean;
  marketing: boolean;
};

export const NEMA_PRISTANKA: Consent = { analytics: false, marketing: false };
export const SVE_PRIHVACENO: Consent = { analytics: true, marketing: true };

const KLJUC = "zr-consent";

/** Povećaj kad se kategorije promene — stari zapisi tad prestaju da važe i baner se vraća. */
const VERZIJA = 1;

type Zapis = {
  v: number;
  datum: string;
  consent: Consent;
};

/** Ime custom event-a kojim se promena pristanka javlja ostatku aplikacije. */
export const CONSENT_EVENT = "zr-consent-change";

/**
 * Pretvara sirov zapis iz localStorage u pristanak, ili `null` ako zapisa nema,
 * ako je oštećen, ili ako je od starije verzije kategorija.
 */
export function parsirajPristanak(sirovo: string | null): Consent | null {
  if (!sirovo) return null;

  try {
    const zapis = JSON.parse(sirovo) as Partial<Zapis>;
    if (zapis.v !== VERZIJA || typeof zapis.consent !== "object" || !zapis.consent) {
      return null;
    }

    // Eksplicitno kastujemo u boolean — sve što nije `true` tretiramo kao odbijanje.
    return {
      analytics: zapis.consent.analytics === true,
      marketing: zapis.consent.marketing === true,
    };
  } catch {
    return null;
  }
}

/**
 * Sirov zapis iz localStorage. Vraća string (ili null), a ne objekat, jer
 * `useSyncExternalStore` traži vrednost stabilnu po referenci između render-a —
 * svež objekat bi vrteo beskonačnu petlju render-a.
 */
export function snimakPristanka(): string | null {
  if (typeof window === "undefined") return null;

  try {
    return window.localStorage.getItem(KLJUC);
  } catch {
    // Nedostupan localStorage (privatni režim, blokiran).
    return null;
  }
}

/** Snimak na serveru / u statičkom build-u — tu localStorage ne postoji. */
export function snimakPristankaNaServeru(): string | null {
  return null;
}

/** Pretplata za `useSyncExternalStore` — promene u ovom tabu i u ostalim tabovima. */
export function pretplatiSeNaPristanak(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  window.addEventListener(CONSENT_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CONSENT_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

/**
 * Vraća sačuvan pristanak, ili `null` ako korisnik još nije odlučio.
 * `null` znači „pitaj ga", dok `NEMA_PRISTANKA` znači „pitali smo, rekao je ne".
 */
export function procitajPristanak(): Consent | null {
  return parsirajPristanak(snimakPristanka());
}

/** Sačuvaj izbor i obavesti sve koji slušaju (npr. učitavač analitike). */
export function sacuvajPristanak(consent: Consent): void {
  if (typeof window === "undefined") return;

  const zapis: Zapis = {
    v: VERZIJA,
    datum: new Date().toISOString(),
    consent,
  };

  try {
    window.localStorage.setItem(KLJUC, JSON.stringify(zapis));
  } catch {
    // Ako ne možemo da upišemo, pristanak važi samo za ovu sesiju — event ipak šaljemo.
  }

  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: consent }));
}

/** Obriši izbor — baner se pojavljuje ponovo. Koristi se iz „Podešavanja kolačića". */
export function ponistiPristanak(): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(KLJUC);
  } catch {
    // Nema šta da se radi — baner se svakako vraća jer čitanje daje null.
  }

  window.dispatchEvent(
    new CustomEvent<Consent>(CONSENT_EVENT, { detail: NEMA_PRISTANKA })
  );
}

/** Event kojim se baner ponovo otvara (link „Podešavanja kolačića" u futeru). */
export const OTVORI_EVENT = "zr-consent-open";

/** Ponovo otvori baner sa podešavanjima, bez brisanja postojećeg izbora. */
export function otvoriPodesavanja(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OTVORI_EVENT));
}

/** Pretplata na promene pristanka. Vraća funkciju za odjavu. */
export function naPromenuPristanka(cb: (consent: Consent) => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handler = (e: Event) => cb((e as CustomEvent<Consent>).detail);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}
