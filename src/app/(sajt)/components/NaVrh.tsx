"use client";

import { useEffect, useState } from "react";

// Posle koliko piksela skrolovanja dugme ima smisla — otprilike jedan ekran,
// pre toga je vrh strane ionako na dohvat.
const PRAG = 600;

export default function NaVrh() {
  const [vidljivo, setVidljivo] = useState(false);

  useEffect(() => {
    function proveri() {
      setVidljivo(window.scrollY > PRAG);
    }

    proveri(); // i za slučaj da je strana otvorena već skrolovana (npr. #hash)
    window.addEventListener("scroll", proveri, { passive: true });
    return () => window.removeEventListener("scroll", proveri);
  }, []);

  function naVrh() {
    // `smooth` poštuje „prefers-reduced-motion" na nivou pregledača, pa ga ne
    // proveravamo ručno.
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={naVrh}
      aria-label="Nazad na vrh strane"
      // z-40 je ispod cookie banera (z-50) — baner mora ostati iznad svega.
      className={`fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white ${
        vidljivo
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      // Sakriveno dugme ne treba da bude na tab redosledu.
      tabIndex={vidljivo ? 0 : -1}
      aria-hidden={!vidljivo}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
