import Link from "next/link";
import { categories } from "@/lib/categories";

const navigacija = [
  { href: "/", label: "Početna" },
  { href: "/blog", label: "Blog" },
  { href: "/teme", label: "Teme" },
  { href: "/kalkulatori", label: "Kalkulatori" },
  { href: "/kontakt", label: "Kontakt" },
];

const pravno = [
  { href: "/politika-privatnosti", label: "Politika privatnosti" },
  { href: "/kolacici", label: "Cookie politika" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/sitemap.xml", label: "Mapa sajta" },
];

// Zameni "#" pravim linkovima kad budu spremni.
const mreze = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const istaknuteKategorije = categories.slice(0, 6);

  return (
    <footer className="mt-16 bg-black text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brend */}
          <div>
            <p className="text-lg font-semibold text-white">Zdrav Ritual</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Vaš vodič ka zdravijem i kvalitetnijem životu — naučno potkrepljeni saveti o
              zdravlju, ishrani i zdravim navikama.
            </p>
          </div>

          {/* Kategorije */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Kategorije</p>
            <ul className="flex flex-col gap-2 text-sm text-zinc-400">
              {istaknuteKategorije.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/teme/${c.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/teme" className="font-medium text-accent hover:underline">
                  Sve teme →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigacija */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Navigacija</p>
            <ul className="flex flex-col gap-2 text-sm text-zinc-400">
              {navigacija.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pravno + mreže */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Pravno</p>
            <ul className="flex flex-col gap-2 text-sm text-zinc-400">
              {pravno.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="transition-colors hover:text-accent">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-3 mt-6 text-sm font-semibold text-white">
              Društvene mreže
            </p>
            <ul className="flex gap-4 text-sm text-zinc-400">
              {mreze.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    className="transition-colors hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-zinc-500">
          © {year} Zdrav Ritual. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
