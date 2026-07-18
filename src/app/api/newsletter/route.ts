import { Resend } from "resend";

// Serverska ruta za prijavu na newsletter — dodaje email kao kontakt u Resend.
// API ključ ostaje na serveru (env `RESEND_API_KEY`), nikada ne stiže do browsera.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Newsletter trenutno nije podešen." },
      { status: 503 }
    );
  }

  let email: string | undefined;
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : undefined;
  } catch {
    return Response.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Unesite ispravnu email adresu." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // Ako je zadat audience (stariji Resend nalozi) koristi njega; inače novi način.
  const { error } = audienceId
    ? await resend.contacts.create({ email, audienceId, unsubscribed: false })
    : await resend.contacts.create({ email, unsubscribed: false });

  if (error) {
    // Već prijavljen kontakt tretiramo kao uspeh.
    if (/exist/i.test(error.message ?? "")) {
      return Response.json({ ok: true, alreadySubscribed: true });
    }
    console.error("Resend newsletter error:", error);
    return Response.json(
      { error: "Prijava trenutno nije uspela. Pokušajte ponovo kasnije." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
