"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { PRODUCT_URL } from "@/components/alfa-aktiv/ui/CTAButton";
import {
  parsirajPristanak,
  pretplatiSeNaPristanak,
  snimakPristanka,
  snimakPristankaNaServeru,
} from "@/lib/consent";

/**
 * Fiksna CTA traka na dnu ekrana. Pojavljuje se nakon što korisnik
 * proskroluje ispod hero sekcije i vodi direktno na stranicu proizvoda.
 */
export default function StickyCTA() {
  const [scrollovan, setScrollovan] = useState(false);

  // Cookie baner stoji na istom mestu (fixed bottom-0) i ima prednost — traka
  // čeka da posetilac odluči, da mu prodajno dugme ne prekriva pravni izbor.
  const sirovo = useSyncExternalStore(
    pretplatiSeNaPristanak,
    snimakPristanka,
    snimakPristankaNaServeru
  );
  const odluceno = useMemo(() => parsirajPristanak(sirovo) !== null, [sirovo]);

  useEffect(() => {
    const onScroll = () => setScrollovan(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = scrollovan && odluceno;

  return (
    <div
      // z-40 je ispod cookie banera (z-50) — ako posetilac ponovo otvori
      // podešavanja, baner prekriva traku umesto da se sudaraju.
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-honey/30 bg-bordo-dark/95 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate font-display text-base font-semibold text-cream">
            ALFA AKTIV — 30 × 20 ml
          </p>
          <p className="truncate text-xs text-cream/70">
            <span className="text-honey-light">17.550 РСД</span> • isporuka širom
            regiona
          </p>
        </div>
        <a
          href={PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-honey px-5 py-3 text-sm font-semibold uppercase tracking-wide text-bordo-dark transition-colors hover:bg-honey-light sm:px-7"
        >
          <span aria-hidden>▶</span>
          <span className="hidden sm:inline">Naruči odmah</span>
          <span className="sm:hidden">Naruči</span>
        </a>
      </div>
    </div>
  );
}
