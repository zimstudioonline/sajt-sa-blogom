import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktirajte portal Zdrav Ritual — pošaljite nam poruku, pitanje ili predlog teme.",
};

// Prikazani email kao rezerva (i za posetioce koji ne žele formu).
const CONTACT_EMAIL = "zdravritual@gmail.com";

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Kontakt
        </h1>
        <p className="mt-3 text-lg leading-8 text-muted">
          Imate pitanje, predlog teme ili želite da sarađujemo? Pišite nam — rado ćemo
          vam odgovoriti.
        </p>
      </header>

      <div className="grid gap-10 sm:grid-cols-[2fr_1fr]">
        <ContactForm />

        <aside className="text-sm text-muted">
          <h2 className="mb-2 font-semibold text-foreground">Direktan kontakt</h2>
          <p>
            Možete nam pisati i na email:
            <br />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </aside>
      </div>
    </div>
  );
}
