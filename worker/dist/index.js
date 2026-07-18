var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.ts
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
}
__name(corsHeaders, "corsHeaders");
function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) }
  });
}
__name(json, "json");
async function verifyTurnstile(secret, token, ip) {
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: form }
  );
  const data = await res.json();
  return data.success === true;
}
__name(verifyTurnstile, "verifyTurnstile");
var index_default = {
  async fetch(request, env) {
    const allowed = env.ALLOWED_ORIGIN ?? "*";
    const reqOrigin = request.headers.get("Origin") ?? "";
    const origin = allowed === "*" || reqOrigin === allowed ? reqOrigin || allowed : allowed;
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
      return json({ error: "Newsletter trenutno nije pode\u0161en." }, 503, origin);
    }
    let email;
    let turnstileToken;
    try {
      const body = await request.json();
      email = typeof body.email === "string" ? body.email.trim() : void 0;
      turnstileToken = typeof body.turnstileToken === "string" ? body.turnstileToken : void 0;
    } catch {
      return json({ error: "Neispravan zahtev." }, 400, origin);
    }
    if (!email || !EMAIL_RE.test(email)) {
      return json({ error: "Unesite ispravnu email adresu." }, 400, origin);
    }
    if (env.TURNSTILE_SECRET) {
      const ip = request.headers.get("CF-Connecting-IP");
      const ok = !!turnstileToken && await verifyTurnstile(env.TURNSTILE_SECRET, turnstileToken, ip);
      if (!ok) {
        return json({ error: "Provera (CAPTCHA) nije uspela." }, 403, origin);
      }
    }
    if (!env.RESEND_AUDIENCE_ID) {
      return json({ error: "Newsletter trenutno nije pode\u0161en." }, 503, origin);
    }
    const resp = await fetch(
      `https://api.resend.com/audiences/${env.RESEND_AUDIENCE_ID}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, unsubscribed: false })
      }
    );
    if (resp.ok) {
      return json({ ok: true }, 200, origin);
    }
    const errText = await resp.text();
    if (/exist/i.test(errText)) {
      return json({ ok: true, alreadySubscribed: true }, 200, origin);
    }
    console.error("Resend error:", resp.status, errText);
    return json(
      { error: "Prijava trenutno nije uspela. Poku\u0161ajte ponovo kasnije." },
      502,
      origin
    );
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
