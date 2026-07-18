import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie politika",
  description: "Politika korišćenja kolačića na portalu Zdrav Ritual.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Cookie politika
      </h1>
      <p className="mt-6 text-muted">
        Ovaj dokument je u pripremi. Ovde ćemo objasniti koje kolačiće (cookies) sajt
        koristi, u koje svrhe i kako možete upravljati njima.
      </p>
    </div>
  );
}
