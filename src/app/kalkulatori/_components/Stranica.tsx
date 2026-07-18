import Link from "next/link";
import { getKalkulator } from "@/lib/calculators";

// Zajednički raspored stranice pojedinačnog kalkulatora (server komponenta).
export default function Stranica({
  slug,
  uvod,
  children,
}: {
  slug: string;
  uvod: string;
  children: React.ReactNode;
}) {
  const k = getKalkulator(slug);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/kalkulatori"
        className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        ← Svi kalkulatori
      </Link>

      <div className="mb-6 mt-4 flex items-center gap-3">
        <span className="text-4xl">{k?.emoji}</span>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {k?.name}
        </h1>
      </div>

      <p className="mb-8 text-lg leading-8 text-muted">{uvod}</p>

      {children}

      <p className="mt-8 text-xs leading-5 text-muted">
        Napomena: rezultati su okvirni i informativnog karaktera. Ne predstavljaju
        medicinski savet — za konkretne potrebe posavetujte se sa lekarom ili nutricionistom.
      </p>
    </div>
  );
}
