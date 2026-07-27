"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

// Endpoint Cloudflare Worker-a koji drži Resend ključ (env se ubacuje na build-u).
// Npr. "https://newsletter.zdravritual.workers.dev" ili "https://api.zdravritual.com".
const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT ?? "";

// Javni Turnstile site key (bezbedno stoji u frontendu). Ako nije zadat, CAPTCHA se
// preskače — sajt radi, a zaštita se uključi čim dodaš ključ.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

// Minimalni tip za Turnstile globalni objekat (učitava se sa Cloudflare skripte).
declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [poruka, setPoruka] = useState("");

  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const tokenRef = useRef<string>("");

  // Učitaj i iscrtaj Turnstile widget samo ako je site key podešen.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    function render() {
      if (!captchaRef.current || !window.turnstile || widgetId.current) return;
      widgetId.current = window.turnstile.render(captchaRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => {
          tokenRef.current = token;
        },
        "expired-callback": () => {
          tokenRef.current = "";
        },
        "error-callback": () => {
          tokenRef.current = "";
        },
      });
    }

    if (window.turnstile) {
      render();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = render;
    document.head.appendChild(script);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!ENDPOINT) {
      setStatus("error");
      setPoruka("Newsletter trenutno nije podešen.");
      return;
    }

    // Honeypot: pravi ljudi ne popunjavaju skriveno polje; botovi ga popune.
    const website = (
      e.currentTarget.elements.namedItem("website") as HTMLInputElement | null
    )?.value;
    if (website) {
      // Tiho "uspeh" — bot ne treba da zna da je odbijen.
      setStatus("success");
      setPoruka("Uspešno ste prijavljeni! 🌿");
      return;
    }

    if (TURNSTILE_SITE_KEY && !tokenRef.current) {
      setStatus("error");
      setPoruka("Potvrdite da niste robot pa pokušajte ponovo.");
      return;
    }

    setStatus("submitting");
    setPoruka("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, turnstileToken: tokenRef.current }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setPoruka(
          data.alreadySubscribed
            ? "Već ste prijavljeni — hvala!"
            : "Uspešno ste prijavljeni! 🌿"
        );
      } else {
        setStatus("error");
        setPoruka(data.error ?? "Prijava nije uspela. Pokušajte ponovo.");
      }
    } catch {
      setStatus("error");
      setPoruka("Došlo je do greške u mreži. Pokušajte ponovo.");
    } finally {
      // Turnstile token je jednokratan — resetuj widget za sledeći pokušaj.
      if (widgetId.current && window.turnstile) {
        window.turnstile.reset(widgetId.current);
        tokenRef.current = "";
      }
    }
  }

  if (status === "success") {
    return (
      <p className="mx-auto max-w-md rounded-full bg-accent/10 px-6 py-4 text-center font-medium text-zinc-900">
        {poruka}
      </p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Vaš email"
          aria-label="Email adresa"
          className="w-full rounded-full border border-zinc-300 bg-white px-5 py-3 text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-accent"
        />

        {/* Honeypot — skriveno od ljudi, primamljivo botovima. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {status === "submitting" ? "Slanje..." : "Prijavi se"}
        </button>
      </form>

      {/* Turnstile widget (prazno ako site key nije podešen). */}
      {TURNSTILE_SITE_KEY && <div ref={captchaRef} className="mt-3" />}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">{poruka}</p>
      )}
    </div>
  );
}
