"use client";

import { useEffect } from "react";
import { Consent, naPromenuPristanka, procitajPristanak } from "@/lib/consent";

// Google Analytics merni ID (npr. "G-XXXXXXXXXX"). Dok nije zadat, ova komponenta
// ne radi ništa — sajt tad zaista ne učitava nikakvu analitiku.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Učitava Google Analytics tek nakon pristanka — nikad pre.
 *
 * Skripta se ubacuje ručno (a ne preko <Script>) upravo zato što ne sme da postoji
 * u HTML-u pre nego što korisnik pristane; statički export bi je inače isporučio
 * svakom posetiocu.
 */
export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    let ucitano = false;

    function ucitaj(consent: Consent) {
      if (!consent.analytics || ucitano) return;
      ucitano = true;

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer!.push(args);
      }
      gtag("js", new Date());
      // IP se anonimizuje, a GA ne sme sam da postavlja reklamne signale bez
      // zasebnog marketinškog pristanka.
      gtag("config", GA_ID, { anonymize_ip: true, allow_ad_personalization_signals: false });
    }

    const sacuvan = procitajPristanak();
    if (sacuvan) ucitaj(sacuvan);

    // Ako pristanak stigne tek sad (korisnik klikne „Prihvati"), učitaj bez reload-a.
    // Obrnut smer — povlačenje pristanka — ne može da ukloni već učitanu skriptu,
    // pa se primenjuje od sledećeg učitavanja stranice.
    return naPromenuPristanka(ucitaj);
  }, []);

  return null;
}
