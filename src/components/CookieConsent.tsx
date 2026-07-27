"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  Consent,
  NEMA_PRISTANKA,
  SVE_PRIHVACENO,
  OTVORI_EVENT,
  parsirajPristanak,
  pretplatiSeNaPristanak,
  procitajPristanak,
  sacuvajPristanak,
  snimakPristanka,
  snimakPristankaNaServeru,
} from "@/lib/consent";

type Kategorija = {
  kljuc: keyof Consent;
  naziv: string;
  opis: string;
};

const KATEGORIJE: Kategorija[] = [
  {
    kljuc: "analytics",
    naziv: "Analitika",
    opis:
      "Anonimna statistika posećenosti — koje stranice se čitaju i koliko dugo. Pomaže nam da znamo koje teme su vam korisne.",
  },
  {
    kljuc: "marketing",
    naziv: "Marketing",
    opis:
      "Kolačići oglašivača za merenje i prilagođavanje reklama. Bez njih sajt radi isto, samo su reklame nasumične.",
  },
];

export default function CookieConsent() {
  const [rucnoOtvoren, setRucnoOtvoren] = useState(false);
  const [podesavanja, setPodesavanja] = useState(false);
  const [izbor, setIzbor] = useState<Consent>(NEMA_PRISTANKA);

  // Da li smo na klijentu. Na serveru je `false`, posle hidracije `true` — pa baner
  // uopšte ne ulazi u statički HTML. Bez ovoga bi ga posetilac koji je već odlučio
  // nakratko video dok se stranica ne hidrira, jer statički build ne zna njegov izbor.
  const hidriran = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const sirovo = useSyncExternalStore(
    pretplatiSeNaPristanak,
    snimakPristanka,
    snimakPristankaNaServeru
  );
  const sacuvan = useMemo(() => parsirajPristanak(sirovo), [sirovo]);

  // Futer može ponovo da otvori baner, sa učitanim trenutnim izborom.
  useEffect(() => {
    function otvori() {
      setIzbor(procitajPristanak() ?? NEMA_PRISTANKA);
      setPodesavanja(true);
      setRucnoOtvoren(true);
    }

    window.addEventListener(OTVORI_EVENT, otvori);
    return () => window.removeEventListener(OTVORI_EVENT, otvori);
  }, []);

  function potvrdi(consent: Consent) {
    sacuvajPristanak(consent);
    setRucnoOtvoren(false);
    setPodesavanja(false);
  }

  // Pitamo one koji još nisu odlučili — i one koji su sami tražili izmenu.
  if (!hidriran) return null;
  if (sacuvan !== null && !rucnoOtvoren) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-naslov"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-6 shadow-xl">
        <h2 id="cookie-naslov" className="text-lg font-semibold text-foreground">
          Kolačići na Zdrav Ritual
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted">
          Koristimo kolačiće neophodne za rad sajta. Uz vašu saglasnost koristili
          bismo i one za analitiku i reklame. Možete prihvatiti sve, odbiti sve, ili
          izabrati sami — sajt radi jednako u svakom slučaju. Detalji su u{" "}
          <Link href="/kolacici" className="text-accent underline hover:no-underline">
            Cookie politici
          </Link>
          .
        </p>

        {podesavanja && (
          <ul className="mt-5 flex flex-col gap-4 border-t border-border pt-5">
            {/* Neophodni kolačići se ne mogu isključiti — bez njih sajt ne radi. */}
            <li className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">Neophodni</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Pamte vaš izbor kolačića. Bez njih bismo vas pitali na svakoj
                  stranici.
                </p>
              </div>
              <span className="shrink-0 pt-1 text-xs font-medium uppercase tracking-wide text-muted">
                Uvek
              </span>
            </li>

            {KATEGORIJE.map((k) => (
              <li key={k.kljuc} className="flex items-start justify-between gap-4">
                <div>
                  <label
                    htmlFor={`cookie-${k.kljuc}`}
                    className="text-sm font-medium text-foreground"
                  >
                    {k.naziv}
                  </label>
                  <p className="mt-1 text-sm leading-6 text-muted">{k.opis}</p>
                </div>
                <input
                  id={`cookie-${k.kljuc}`}
                  type="checkbox"
                  checked={izbor[k.kljuc]}
                  onChange={(e) =>
                    setIzbor({ ...izbor, [k.kljuc]: e.target.checked })
                  }
                  className="mt-1 size-5 shrink-0 accent-accent"
                />
              </li>
            ))}
          </ul>
        )}

        {/* „Prihvati" i „Odbij" su namerno istog oblika i težine — pristanak koji se
            dobija time što je odbijanje teže uočiti nije pravno valjan. */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => potvrdi(SVE_PRIHVACENO)}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:flex-1"
          >
            Prihvati sve
          </button>

          <button
            type="button"
            onClick={() => potvrdi(NEMA_PRISTANKA)}
            className="rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background sm:flex-1"
          >
            Odbij sve
          </button>

          {podesavanja ? (
            <button
              type="button"
              onClick={() => potvrdi(izbor)}
              className="rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background sm:flex-1"
            >
              Sačuvaj izbor
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setPodesavanja(true)}
              className="rounded-full px-6 py-2.5 text-sm font-medium text-muted underline transition-colors hover:text-foreground sm:flex-1"
            >
              Podešavanja
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
