import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Politika privatnosti portala Zdrav Ritual.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Politika privatnosti
      </h1>
      <p className="mt-6 text-muted">
        Ovaj dokument je u pripremi. Ovde će biti opisano koje podatke prikupljamo (npr.
        preko kontakt forme i newsletter-a), kako ih koristimo i štitimo, kao i vaša prava.
      </p>
    </div>
  );
}
