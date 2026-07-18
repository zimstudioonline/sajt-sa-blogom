import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { categories } from "@/lib/categories";
import { kalkulatori } from "@/lib/calculators";
import PostCard from "./components/PostCard";
import SavetDana from "./components/SavetDana";

const razloziPoverenja = [
  "Naučno proverene informacije",
  "Redovno ažurirani članci",
  "Bez senzacionalizma",
  "Fokus na prevenciji",
  "Praktični saveti",
  "Transparentni izvori",
];

const brojevi = [
  { broj: "250+", opis: "stručnih članaka" },
  { broj: "50+", opis: "obrađenih tema" },
  { broj: "10.000+", opis: "mesečnih čitalaca" },
  { broj: "100+", opis: "stručnih izvora" },
];

const faq = [
  {
    p: "Da li su informacije na sajtu naučno potkrepljene?",
    o: "Da. Trudimo se da članke zasnujemo na proverenim izvorima i navodimo reference gde je to moguće. Sadržaj je edukativnog karaktera i ne zamenjuje savet lekara.",
  },
  {
    p: "Koliko često objavljujete nove tekstove?",
    o: "Redovno dodajemo nove članke i ažuriramo postojeće kako bi informacije ostale tačne i aktuelne.",
  },
  {
    p: "Da li mogu da predložim temu?",
    o: "Naravno. Pišite nam preko stranice Kontakt — rado ćemo razmotriti vaš predlog.",
  },
  {
    p: "Da li savete mogu da primenim bez konsultacije sa lekarom?",
    o: "Naši saveti su opšteg i preventivnog karaktera. Za konkretne zdravstvene tegobe ili terapiju uvek se posavetujte sa lekarom.",
  },
];

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
        {/* Gradijent (fallback ako nema videa) */}
        <div className="absolute inset-0 -z-30 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black" />
        {/* Video pozadina — ubaci public/video-hero.mp4 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/video-hero-poster.jpg"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/video-hero.mp4" type="video/mp4" />
        </video>
        {/* Zatamnjenje radi čitljivosti teksta */}
        <div className="absolute inset-0 -z-10 bg-black/55" />

        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Zdrav Ritual — vaš vodič ka zdravijem i kvalitetnijem životu
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
            Naučno potkrepljeni članci, prirodni načini za očuvanje zdravlja, ishrana,
            suplementi i zdrave navike koje možete primeniti već danas.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/blog"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Pročitaj blog
            </Link>
            <Link
              href="/teme"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Istraži teme
            </Link>
          </div>
        </div>
      </section>

      {/* SEKCIJA 2 — Najpopularnije teme */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Istražite najpopularnije teme
          </h2>
          <p className="mt-2 text-muted">Izaberite oblast koja vas zanima.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/teme/${c.slug}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center transition-shadow hover:shadow-lg"
            >
              <span className="text-4xl">{c.emoji}</span>
              <span className="font-semibold text-foreground transition-colors group-hover:text-accent">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SEKCIJA 3 — Najnoviji članci */}
      <section className="bg-surface/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Najnoviji članci
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Svi članci →
            </Link>
          </div>
          {latestPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-muted">Uskoro stižu prvi članci.</p>
          )}
        </div>
      </section>

      {/* SEKCIJA 5 — Kalkulatori */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Zdravstveni kalkulatori
          </h2>
          <p className="mt-2 text-muted">
            Brzi besplatni alati za praćenje zdravlja i kondicije.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {kalkulatori.map((k) => (
            <Link
              key={k.slug}
              href={`/kalkulatori/${k.slug}`}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-5 text-center transition-shadow hover:shadow-lg"
            >
              <span className="text-3xl">{k.emoji}</span>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                {k.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SEKCIJA 8 — Savet dana */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-accent/30 bg-accent/10 p-8 text-center sm:p-12">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Zdravstveni savet dana
          </p>
          <SavetDana />
        </div>
      </section>

      {/* SEKCIJA 10 — Zašto verovati */}
      <section className="bg-surface/50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Zašto verovati Zdrav Ritual-u?
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {razloziPoverenja.map((r) => (
              <li
                key={r}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4"
              >
                <span className="text-accent">✔</span>
                <span className="text-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEKCIJA 11 — Brojevi */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {brojevi.map((b) => (
            <div key={b.opis}>
              <div className="text-4xl font-bold text-accent">{b.broj}</div>
              <div className="mt-1 text-sm text-muted">{b.opis}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SEKCIJA 12 — FAQ */}
      <section className="bg-surface/50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Najčešća pitanja
          </h2>
          <div className="flex flex-col gap-3">
            {faq.map((item) => (
              <details
                key={item.p}
                className="group rounded-xl border border-border bg-surface px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">
                  {item.p}
                  <span className="ml-4 text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{item.o}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
