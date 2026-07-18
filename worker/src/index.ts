/**
 * Cloudflare Worker — bezbedan endpoint za newsletter prijavu.
 *
 * Statički sajt (GitHub Pages) nema server, pa ovaj Worker drži tajni Resend ključ
 * i jedini poziva Resend. Ključ nikada ne stiže do browsera.
 *
 * Tajne (podesi sa `wrangler secret put ...`):
 *   RESEND_API_KEY     — Resend API ključ
 *   TURNSTILE_SECRET   — (opciono) Turnstile secret key za proveru CAPTCHA
 *
 * Varijable (u wrangler.toml [vars]):
 *   RESEND_AUDIENCE_ID — ID Resend audience-a u koji se dodaje kontakt
 *   ALLOWED_ORIGIN     — dozvoljeni origin, npr. "https://zdravritual.com"
 */

interface Env {
  RESEND_API_KEY: string;
  TURNSTILE_SECRET?: string;
  RESEND_AUDIENCE_ID?: string;
  ALLOWED_ORIGIN?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(origin: string): HeadersInit {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(
  data: unknown,
  status: number,
  origin: string
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

async function verifyTurnstile(
  secret: string,
  token: string,
  ip: string | null
): Promise<boolean> {
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: form }
  );
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Dozvoljen je samo tvoj domen. CORS ne štiti od direktnih poziva (curl),
    // ali sprečava tuđe sajtove; pravu zaštitu od zloupotrebe daje Turnstile.
    const allowed = env.ALLOWED_ORIGIN ?? "*";
    const reqOrigin = request.headers.get("Origin") ?? "";
    const origin =
      allowed === "*" || reqOrigin === allowed ? reqOrigin || allowed : allowed;

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed." }, 405, origin);
    }

    if (allowed !== "*" && reqOrigin && reqOrigin !== allowed) {
      return json({ error: "Zabranjen izvor." }, 403, origin);
    }

    if (!env.RESEND_API_KEY) {
      return json({ error: "Newsletter trenutno nije podešen." }, 503, origin);
    }

    let email: string | undefined;
    let turnstileToken: string | undefined;
    try {
      const body = (await request.json()) as {
        email?: unknown;
        turnstileToken?: unknown;
      };
      email = typeof body.email === "string" ? body.email.trim() : undefined;
      turnstileToken =
        typeof body.turnstileToken === "string" ? body.turnstileToken : undefined;
    } catch {
      return json({ error: "Neispravan zahtev." }, 400, origin);
    }

    if (!email || !EMAIL_RE.test(email)) {
      return json({ error: "Unesite ispravnu email adresu." }, 400, origin);
    }

    // CAPTCHA provera (ako je Turnstile podešen).
    if (env.TURNSTILE_SECRET) {
      const ip = request.headers.get("CF-Connecting-IP");
      const ok =
        !!turnstileToken &&
        (await verifyTurnstile(env.TURNSTILE_SECRET, turnstileToken, ip));
      if (!ok) {
        return json({ error: "Provera (CAPTCHA) nije uspela." }, 403, origin);
      }
    }

    if (!env.RESEND_AUDIENCE_ID) {
      return json({ error: "Newsletter trenutno nije podešen." }, 503, origin);
    }

    // Dodaj kontakt u Resend audience preko REST API-ja (bez SDK zavisnosti).
    const resp = await fetch(
      `https://api.resend.com/audiences/${env.RESEND_AUDIENCE_ID}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );

    if (resp.ok) {
      return json({ ok: true }, 200, origin);
    }

    const errText = await resp.text();
    // Već prijavljen kontakt tretiramo kao uspeh.
    if (/exist/i.test(errText)) {
      return json({ ok: true, alreadySubscribed: true }, 200, origin);
    }

    console.error("Resend error:", resp.status, errText);
    return json(
      { error: "Prijava trenutno nije uspela. Pokušajte ponovo kasnije." },
      502,
      origin
    );
  },
};
