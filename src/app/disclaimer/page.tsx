import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Odricanje od odgovornosti (Disclaimer)",
  description:
    "Sadržaj na portalu Zdrav Ritual je informativnog karaktera i ne zamenjuje savet licenciranog stručnjaka.",
};

const CONTACT_EMAIL = "zdravritual@gmail.com";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Odricanje od odgovornosti (Disclaimer)
      </h1>
      <p className="mt-4 text-sm text-muted">Poslednje ažuriranje: 22. jul 2026.</p>

      <div className="mt-10 space-y-10 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Opšte informacije</h2>
          <p className="mt-3">
            Sve informacije objavljene na sajtu Zdrav Ritual (u daljem tekstu: „sajt“, „mi“,
            „naš“) date su u informativne i opšte svrhe. Sadržaj na ovom sajtu ne
            predstavlja profesionalni savet bilo koje vrste, osim ako to nije izričito
            naznačeno.
          </p>
          <p className="mt-3">
            Korišćenjem ovog sajta prihvatate da bilo koju odluku donosite na sopstvenu
            odgovornost, na osnovu informacija koje ovde pronađete.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Bez garancija</h2>
          <p className="mt-3">
            Trudimo se da sve informacije na sajtu budu tačne, ažurne i potpune. Ipak, ne
            dajemo nikakvu garanciju, izričitu ili prećutnu, u pogledu:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>tačnosti, pouzdanosti ili potpunosti sadržaja,</li>
            <li>dostupnosti sajta u svakom trenutku, bez prekida ili grešaka,</li>
            <li>rezultata koje možete ostvariti korišćenjem informacija sa sajta.</li>
          </ul>
          <p className="mt-3">
            Bilo kakvo oslanjanje na informacije sa ovog sajta činite isključivo na
            sopstvenu odgovornost.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Nije profesionalni savet
          </h2>
          <p className="mt-3">
            Ukoliko sajt sadrži tekstove iz oblasti kao što su finansije, zdravlje, pravo
            ili slično, takav sadržaj{" "}
            <strong className="font-semibold text-foreground">ne zamenjuje</strong> savet
            licenciranog stručnjaka (finansijskog savetnika, lekara, advokata i sl.). Pre
            donošenja važnih odluka, uvek se posavetujte sa odgovarajućim stručnjakom.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Spoljašnji linkovi</h2>
          <p className="mt-3">
            Sajt može sadržati linkove ka spoljašnjim (eksternim) sajtovima koji nisu pod
            našom kontrolom. Ne snosimo odgovornost za sadržaj, tačnost informacija,
            politiku privatnosti niti bilo koju štetu ili gubitak nastao korišćenjem tih
            sajtova.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Ograničenje odgovornosti
          </h2>
          <p className="mt-3">
            U najvećoj meri dozvoljenoj zakonom, Zdrav Ritual i njegovi vlasnici, saradnici
            i zaposleni ne snose odgovornost za bilo kakvu direktnu, indirektnu, slučajnu
            ili posledičnu štetu koja proistekne iz:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>korišćenja ili nemogućnosti korišćenja sajta,</li>
            <li>oslanjanja na sadržaj objavljen na sajtu,</li>
            <li>grešaka, propusta ili netačnosti u sadržaju.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Affiliate i sponzorisan sadržaj
          </h2>
          <p className="mt-3">
            Ovaj sajt može sadržati affiliate linkove i sponzorisan sadržaj. Više detalja o
            tome možete pronaći na našoj stranici{" "}
            <Link
              href="/affiliate-disclosure"
              className="text-foreground underline underline-offset-4"
            >
              Izjava o pridruženom marketingu (Affiliate Disclosure)
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Autorska prava</h2>
          <p className="mt-3">
            Sav sadržaj objavljen na ovom sajtu (tekst, slike, grafike, logotipi) vlasništvo
            je sajta{" "}
            <a
              href="https://zdravritual.com"
              className="text-foreground underline underline-offset-4"
            >
              zdravritual.com
            </a>{" "}
            ili se koristi uz odgovarajuću dozvolu. Neovlašćeno kopiranje ili distribucija
            sadržaja nije dozvoljena bez prethodne pisane saglasnosti.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Izmene ove izjave</h2>
          <p className="mt-3">
            Zadržavamo pravo da povremeno ažuriramo ovaj Disclaimer. Preporučujemo da
            povremeno proverite ovu stranicu kako biste bili upoznati sa eventualnim
            izmenama.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
          <p className="mt-3">
            Za sva pitanja u vezi sa ovom izjavom, možete nas kontaktirati na:{" "}
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
          Korišćenjem sajta{" "}
          <a
            href="https://zdravritual.com"
            className="text-foreground underline underline-offset-4"
          >
            zdravritual.com
          </a>{" "}
          potvrđujete da ste pročitali, razumeli i prihvatili ovu izjavu o odricanju od
          odgovornosti.
        </p>
      </div>
    </div>
  );
}
