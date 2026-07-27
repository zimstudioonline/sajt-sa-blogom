import type { Metadata } from "next";
import Link from "next/link";
import { kalkulatori } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "Zdravstveni kalkulatori",
  description:
    "Besplatni zdravstveni kalkulatori: BMI, dnevne kalorije, unos vode, idealna težina, proteini i potrošnja kalorija.",
};

export default function KalkulatoriPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Zdravstveni kalkulatori
        </h1>
        <p className="mt-3 text-lg text-muted">
          Brzi, besplatni alati koji vam pomažu da bolje razumete svoje telo i potrebe.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {kalkulatori.map((k) => (
          <Link
            key={k.slug}
            href={`/kalkulatori/${k.slug}`}
            className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
          >
            <span className="text-4xl">{k.emoji}</span>
            <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
              {k.name}
            </span>
            <span className="text-sm leading-6 text-muted">{k.opis}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
