"use client";

import { useEffect, useRef } from "react";
import { Consent, naPromenuPristanka, procitajPristanak } from "@/lib/consent";

// GTM kontejner (npr. "GTM-XXXXXXX"). Dok nije zadat, komponenta ne radi ništa.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function push(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // GTM očekuje `arguments` objekat, ne niz — zato se gura `args` kao takav.
  window.dataLayer.push(args);
}

/**
 * Učitava Google Tag Manager i saopštava mu stanje pristanka.
 *
 * Consent Mode v2: pre nego što išta krene, sve je „denied". Google-ovi tagovi
 * (GA4, Ads) to poštuju sami. Tagovi trećih strana — pre svega Facebook Pixel —
 * NE poštuju Consent Mode; njih treba blokirati u samom GTM kontejneru preko
 * `marketing_consent` promenljive koju guramo u dataLayer (vidi worker/README
 * i Cookie politiku).
 */
export default function TagManager() {
  const ucitan = useRef(false);

  useEffect(() => {
    if (!GTM_ID) return;

    // Podrazumevano sve odbijeno — mora da stoji u dataLayer-u pre GTM skripte.
    push("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted",
      wait_for_update: 500,
    });

    function primeni(consent: Consent) {
      push("consent", "update", {
        analytics_storage: consent.analytics ? "granted" : "denied",
        ad_storage: consent.marketing ? "granted" : "denied",
        ad_user_data: consent.marketing ? "granted" : "denied",
        ad_personalization: consent.marketing ? "granted" : "denied",
      });

      // Za tagove koji ne razumeju Consent Mode (Facebook Pixel i slični) —
      // u GTM-u napravi okidač uslovljen ovim vrednostima.
      window.dataLayer?.push({
        event: "consent_update",
        analytics_consent: consent.analytics,
        marketing_consent: consent.marketing,
      });

      // GTM učitavamo tek kad korisnik odluči, i to samo ako je nešto prihvatio.
      // Ako je sve odbio, kontejner nema šta da radi — ne preuzimamo ga uopšte.
      const nesto = consent.analytics || consent.marketing;
      if (!nesto || ucitan.current) return;
      ucitan.current = true;

      window.dataLayer?.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      script.async = true;
      document.head.appendChild(script);
    }

    const sacuvan = procitajPristanak();
    if (sacuvan) primeni(sacuvan);

    // Povlačenje pristanka šalje „denied" odmah, ali već učitani kontejner ne može
    // da se ukloni — Google tagovi tad prestaju da pišu kolačiće, a puno čišćenje
    // nastupa od sledećeg učitavanja stranice.
    return naPromenuPristanka(primeni);
  }, []);

  return null;
}
