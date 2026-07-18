import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Odricanje od odgovornosti — Zdrav Ritual.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Disclaimer
      </h1>
      <p className="mt-6 text-muted">
        Ovaj dokument je u pripremi. Sadržaj na portalu Zdrav Ritual je informativnog i
        edukativnog karaktera i ne predstavlja zamenu za savet, dijagnozu ili terapiju
        lekara. Za zdravstvene odluke uvek se posavetujte sa stručnjakom.
      </p>
    </div>
  );
}
