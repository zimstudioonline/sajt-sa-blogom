import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Izjava o pridruženom marketingu (Affiliate Disclosure)",
  description:
    "Kako Zdrav Ritual zarađuje putem affiliate linkova i kako to utiče (i ne utiče) na naš sadržaj.",
};

const CONTACT_EMAIL = "zdravritual@gmail.com";

const PARTNERI: { naziv: string; url?: string }[] = [
  { naziv: "Siberian Health", url: "https://sibirskozdravlje.com/" },
  { naziv: "Tiens", url: "https://tiensbeograd.com/" },
  { naziv: "Energy4Life", url: "https://energijazazivot.com/" },
  { naziv: "Vision", url: "https://visionproizvodi.in.rs/" },
  { naziv: "ZiM Digital", url: "https://zimdigital.rs/" },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Izjava o pridruženom marketingu (Affiliate Disclosure)
      </h1>
      <p className="mt-4 text-sm text-muted">Poslednje ažuriranje: 22. jul 2026.</p>

      <div className="mt-10 space-y-10 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Transparentnost je nama važna
          </h2>
          <p className="mt-3">
            Na Zdravom Ritualu verujemo u potpunu transparentnost prema našim čitaocima.
            Ova stranica objašnjava kako zarađujemo novac i kako to može uticati na sadržaj
            koji objavljujemo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Šta je pridruženi (affiliate) marketing?
          </h2>
          <p className="mt-3">
            Zdrav Ritual učestvuje u programima pridruženog marketinga (affiliate marketing
            programima). To znači da, ukoliko kliknete na određene linkove na našem sajtu i
            izvršite kupovinu, mi možemo ostvariti proviziju od te prodaje — bez ikakvih
            dodatnih troškova za vas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Koje programe koristimo
          </h2>
          <p className="mt-3">
            Trenutno sarađujemo sa sledećim partnerskim (affiliate) programima:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {PARTNERI.map(({ naziv, url }) => (
              <li key={naziv}>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-foreground underline underline-offset-4"
                  >
                    {naziv}
                  </a>
                ) : (
                  naziv
                )}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Kako ovo utiče na naš sadržaj
          </h2>
          <p className="mt-3">
            Postojanje affiliate linkova{" "}
            <strong className="font-semibold text-foreground">ne utiče</strong> na naše
            mišljenje, ocene ili preporuke. Proizvode i usluge preporučujemo isključivo na
            osnovu:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>sopstvenog iskustva i istraživanja,</li>
            <li>kvaliteta i vrednosti koju nude korisnicima,</li>
            <li>povratnih informacija od naše zajednice čitalaca.</li>
          </ul>
          <p className="mt-3">
            Nikada ne preporučujemo proizvod ili uslugu samo zato što donosi proviziju. Ako
            nešto ne smatramo dobrim, to ćemo i reći, bez obzira na potencijalnu zaradu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Da li ovo utiče na cenu koju ja plaćam?
          </h2>
          <p className="mt-3">
            Ne. Klik na affiliate link i kupovina putem njega{" "}
            <strong className="font-semibold text-foreground">ne povećava cenu</strong>{" "}
            proizvoda ili usluge za vas. Proviziju koju mi eventualno ostvarimo isplaćuje
            partnerska kompanija, iz sopstvene marže — vi plaćate istu cenu kao i inače.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Kako prepoznati affiliate linkove
          </h2>
          <p className="mt-3">Affiliate linkove možete prepoznati po:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>napomeni pored linka (npr. „ovo je affiliate link“),</li>
            <li>oznaci u samom tekstu članka,</li>
            <li>ovoj izjavi, koja se odnosi na sajt u celini.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Vaš izbor</h2>
          <p className="mt-3">
            Korišćenje affiliate linkova je potpuno vaš izbor. Ako više volite da ne
            koristite naše affiliate linkove, uvek možete direktno pretražiti proizvod ili
            uslugu na sajtu prodavca — mi to u potpunosti razumemo i poštujemo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Usklađenost sa propisima
          </h2>
          <p className="mt-3">
            Ova izjava je u skladu sa smernicama Federalne trgovinske komisije SAD (FTC) o
            objavljivanju affiliate veza, kao i sa opštim principima transparentnosti prema
            potrošačima.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
          <p className="mt-3">
            Ukoliko imate pitanja u vezi sa ovom izjavom ili našim affiliate partnerstvima,
            slobodno nas kontaktirajte na:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-foreground underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

        <hr className="border-border" />

        <p className="italic">
          Hvala vam što podržavate Zdrav Ritual korišćenjem naših linkova. To nam pomaže da
          nastavimo da kreiramo besplatan, kvalitetan sadržaj za vas.
        </p>
      </div>
    </div>
  );
}
