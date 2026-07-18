import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { countPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Teme",
  description:
    "Sve teme portala Zdrav Ritual — od ishrane i imuniteta do tradicionalne kineske medicine i zdravih navika.",
};

export default function TemePage() {
  const counts = countPostsByCategory();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Teme
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-8 text-muted">
          <p>
            Dobro došli u svet prirodnog zdravlja, ravnoteže i zdravih životnih navika. Na
            portalu Zdrav Ritual pronaći ćete proverene informacije, praktične savete i
            inspirativne sadržaje koji vam mogu pomoći da unapredite kvalitet života na
            prirodan način.
          </p>
          <p>
            Naše teme obuhvataju različite oblasti zdravlja i blagostanja, od pravilne
            ishrane i jačanja imuniteta do tradicionalne kineske medicine i razvoja zdravih
            navika. Cilj nam je da vam pružimo korisne informacije koje možete primeniti u
            svakodnevnom životu.
          </p>
        </div>
      </header>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = counts[category.slug] ?? 0;
          return (
            <Link
              key={category.slug}
              href={`/teme/${category.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {category.name}
                </h2>
                <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                  {count} {count === 1 ? "post" : "postova"}
                </span>
              </div>
              <p className="text-sm leading-6 text-muted">{category.description}</p>
            </Link>
          );
        })}
      </div>

      <section className="mx-auto mt-16 max-w-3xl border-t border-border pt-10 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Zdrav Ritual — vaš vodič ka zdravijem životu
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted">
          Kroz stručne, edukativne i inspirativne tekstove pomažemo vam da donesete bolje
          odluke za svoje zdravlje. Istražite naše teme i pronađite korisne savete koji vas
          mogu inspirisati da svakog dana napravite korak ka zdravijem i kvalitetnijem
          životu.
        </p>
      </section>
    </div>
  );
}
