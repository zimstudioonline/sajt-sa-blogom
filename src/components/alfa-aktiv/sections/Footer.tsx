import Link from "next/link";
import CookieSettingsLink from "@/components/CookieSettingsLink";

// Iste pravne stranice koje stoje i u futeru bloga. Prelaz iz (landing) u (sajt)
// grupu je pun page load — to su dva odvojena root layout-a — pa `Link` ovde
// radi kao običan link, bez client-side navigacije.
const pravno = [
  { href: "/politika-privatnosti/", label: "Politika privatnosti" },
  { href: "/kolacici/", label: "Cookie politika" },
  { href: "/disclaimer/", label: "Disclaimer" },
  { href: "/affiliate-disclosure/", label: "Affiliate Disclosure" },
  { href: "/kontakt/", label: "Kontakt" },
];

/** Footer sa kontaktom i obaveznim disclaimer-ima (EFSA napomena, nije lek). */
export default function Footer() {
  return (
    <footer className="bg-ink px-5 pt-14 pb-32 text-cream/70">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 border-b border-cream/10 pb-10 md:flex-row">
          <div>
            <p className="font-display text-2xl font-semibold text-cream">ALFA AKTIV</p>
            <p className="mt-2 max-w-sm text-sm">
              Prirodni antioksidans u praktičnoj bočici od 20 ml. Jedna mala navika za
              svakodnevnu brigu o sebi.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-cream">Kontakt</p>
            <p className="mt-2">Telefon: +381 63 342 380</p>
            <p>Isporuka: Srbija i region</p>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-cream">Pravno</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {pravno.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="transition-colors hover:text-honey-light"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
              {/* Pristanak mora da se povlači jednako lako kao što se daje. */}
              <li>
                <CookieSettingsLink className="text-left transition-colors hover:text-honey-light">
                  Podešavanja kolačića
                </CookieSettingsLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-3 text-xs leading-relaxed text-cream/50">
          <p>
            * Tvrdnje o vitaminima i mineralima odnose se na dozvoljene EFSA tvrdnje.
            Vitamin C i selen doprinose zaštiti ćelija od oksidativnog stresa; vitamin C
            doprinosi normalnoj funkciji imunskog sistema. Navedene tvrdnje ne
            predstavljaju obećanje izlečenja niti terapijski efekat.
          </p>
          <p>
            Dodatak ishrani nije zamena za raznovrsnu i uravnoteženu ishranu i zdrav
            način života. Proizvod nije lek. Registrovan u bazi Ministarstva zdravlja RS
            (br. 21031/2022).
          </p>
          <p className="pt-2 text-cream/40">
            © {new Date().getFullYear()} ALFA AKTIV. Stranica je objavljena na
            portalu{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-cream/70">
              Zdrav Ritual
            </Link>
            . Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
