# Newsletter Worker

Sićušan Cloudflare Worker koji drži Resend ključ i dodaje email u audience.
Statički sajt (GitHub Pages) ga poziva; ključ nikad ne ide u browser.

## Deploy (jednokratno)

```bash
cd worker
npm install
npx wrangler login                       # otvori Cloudflare nalog
# upiši ID audience-a u wrangler.toml (RESEND_AUDIENCE_ID)
npx wrangler secret put RESEND_API_KEY   # nalepi Resend API ključ
npx wrangler secret put TURNSTILE_SECRET # opciono: Turnstile secret (protiv spama)
npx wrangler deploy
```

Wrangler ispiše URL, npr. `https://zdravritual-newsletter.<nalog>.workers.dev`.
Taj URL ide u frontend kao `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` (vidi glavni README/workflow).

## Bezbednost

- `RESEND_API_KEY` i `TURNSTILE_SECRET` su Cloudflare *secrets* — šifrovani, van gita.
- `ALLOWED_ORIGIN` zaključava CORS na `https://zdravritual.com`.
- Turnstile (ako je podešen) + honeypot na formi štite od bot-spama.
