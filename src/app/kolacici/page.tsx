import type { Metadata } from "next";
import Link from "next/link";
import CookieSettingsLink from "@/app/components/CookieSettingsLink";

export const metadata: Metadata = {
  title: "Cookie politika",
  description: "Politika korišćenja kolačića na portalu Zdrav Ritual.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Politika kolačića
      </h1>
      <p className="mt-3 text-sm text-muted">Poslednje ažuriranje: 20. jul 2026.</p>

      <div className="mt-10 space-y-10 text-muted leading-relaxed">
        <section>
          <p>
            Ova Politika kolačića objašnjava šta su kolačići (cookies), kako ih
            koristimo na sajtu ZdravRitual.com i koje mogućnosti imate u vezi sa
            njihovim korišćenjem.
          </p>
          <p className="mt-3">
            Kolačiće koji nisu neophodni postavljamo{" "}
            <strong className="font-medium text-foreground">
              tek nakon što date izričitu saglasnost
            </strong>{" "}
            putem banera koji se pojavljuje pri prvoj poseti. Saglasnost možete
            povući ili izmeniti u bilo kom trenutku — <CookieSettingsLink />.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Šta su kolačići?</h2>
          <p className="mt-3">
            Kolačići su male tekstualne datoteke koje se čuvaju na vašem računaru,
            telefonu ili drugom uređaju kada posetite internet stranicu. Njihova svrha
            je da omoguće pravilno funkcionisanje sajta, poboljšaju korisničko
            iskustvo, zapamte određena podešavanja i pomognu u analizi posećenosti.
            Kolačići ne sadrže viruse niti mogu oštetiti vaš uređaj.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Šta trenutno koristimo
          </h2>
          <p className="mt-3">
            Zdrav Ritual je statički sajt bez korisničkih naloga i bez sistema za
            komentare. Koristimo:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="font-medium text-foreground">
                Zapis o vašem izboru kolačića
              </strong>{" "}
              — neophodan, čuva se lokalno u vašem pregledaču kako vas ne bismo pitali
              na svakoj stranici. Ne šalje se nikome.
            </li>
            <li>
              <strong className="font-medium text-foreground">
                Google Tag Manager
              </strong>{" "}
              — alat kroz koji učitavamo ostale servise: Google Analytics 4 (analitika)
              i Meta Pixel (marketing).{" "}
              <strong className="font-medium text-foreground">
                Ništa od toga se ne preuzima dok ne date saglasnost
              </strong>
              . Ako odbijete sve, kontejner se uopšte ne učitava.
            </li>
          </ul>
          <p className="mt-3">
            Vaš izbor prosleđujemo kroz Google Consent Mode, pa se analitika i
            marketing pale odvojeno — možete prihvatiti jedno, a odbiti drugo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Vrste kolačića i kada ih koristimo
          </h2>

          <h3 className="mt-6 font-medium text-foreground">1. Neophodni kolačići</h3>
          <p className="mt-2">
            Neophodni su za rad sajta i ne mogu se isključiti. Kod nas se svode na
            pamćenje vašeg izbora u vezi sa kolačićima. Za njih saglasnost nije
            potrebna, jer bez njih sajt ne može da poštuje vašu odluku.
          </p>

          <h3 className="mt-6 font-medium text-foreground">2. Analitički kolačići</h3>
          <p className="mt-2">
            Koristimo Google Analytics 4 kako bismo razumeli kako posetioci koriste
            sajt — broj poseta, najčitaniji članci, vreme provedeno na stranici, vrste
            uređaja i način dolaska na sajt (Google, društvene mreže i slično). Vaša IP
            adresa se pritom anonimizuje, a podatke ne koristimo za personalizaciju
            reklama. Postavljaju se samo uz vašu saglasnost i služe isključivo za
            unapređenje sadržaja.
          </p>

          <h3 className="mt-6 font-medium text-foreground">3. Marketinški kolačići</h3>
          <p className="mt-2">
            Koristimo Meta Pixel (Facebook), koji služi za merenje uspešnosti kampanja,
            prikaz relevantnih oglasa, ograničavanje broja prikaza istog oglasa i
            remarketing. Postavlja se isključivo uz vašu saglasnost — ako marketing
            odbijete, ne učitava se.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Kolačići trećih strana</h2>
          <p className="mt-3">Uz vašu saglasnost koristimo servise:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="font-medium text-foreground">
                Google Ireland Limited
              </strong>{" "}
              — Tag Manager i Analytics.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4"
              >
                Politika privatnosti
              </a>
            </li>
            <li>
              <strong className="font-medium text-foreground">
                Meta Platforms Ireland Limited
              </strong>{" "}
              — Meta (Facebook) Pixel.{" "}
              <a
                href="https://www.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4"
              >
                Politika privatnosti
              </a>
            </li>
          </ul>
          <p className="mt-3">
            Koristimo i Google Search Console, ali on radi preko običnog meta taga i ne
            postavlja kolačiće.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Kako možete upravljati kolačićima?
          </h2>
          <p className="mt-3">
            Svoj izbor na ovom sajtu možete promeniti u bilo kom trenutku —{" "}
            <CookieSettingsLink />.
          </p>
          <p className="mt-3">
            Nezavisno od toga, većina internet pregledača omogućava prihvatanje svih
            kolačića, odbijanje svih kolačića, brisanje postojećih i blokiranje
            kolačića pojedinih sajtova. Podešavanja možete promeniti u svom pregledaču
            u bilo kom trenutku. Isključivanje određenih kolačića može uticati na
            pravilno funkcionisanje pojedinih delova sajta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Koliko dugo čuvamo kolačiće?
          </h2>
          <p className="mt-3">
            Zapis o vašem izboru u vezi sa kolačićima ostaje u pregledaču dok ga sami
            ne obrišete ili ne promenite izbor.
          </p>
          <p className="mt-3">
            Uz saglasnost za analitiku, Google Analytics postavlja kolačiće{" "}
            <code className="text-foreground">_ga</code> i{" "}
            <code className="text-foreground">_ga_&lt;ID&gt;</code> sa trajanjem do 2
            godine, koji služe za razlikovanje posetilaca i sesija.
          </p>
          <p className="mt-3">
            Uz saglasnost za marketing, Meta Pixel postavlja kolačiće{" "}
            <code className="text-foreground">_fbp</code> (do 3 meseca) i, ukoliko ste
            na sajt došli sa Facebook oglasa,{" "}
            <code className="text-foreground">_fbc</code>. Sve navedene kolačiće možete
            obrisati u bilo kom trenutku kroz podešavanja pregledača.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Zaštita podataka</h2>
          <p className="mt-3">
            Podaci prikupljeni putem kolačića obrađuju se u skladu sa važećim propisima
            o zaštiti podataka o ličnosti. Ne prodajemo vaše lične podatke trećim
            licima. Više o obradi podataka pročitajte u{" "}
            <Link
              href="/politika-privatnosti"
              className="text-foreground underline underline-offset-4"
            >
              Politici privatnosti
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Izmene Politike kolačića
          </h2>
          <p className="mt-3">
            Zadržavamo pravo da ovu Politiku kolačića povremeno ažuriramo radi
            usklađivanja sa zakonskim propisima ili promenama u radu sajta. Sve izmene
            biće objavljene na ovoj stranici zajedno sa datumom poslednjeg ažuriranja.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
          <p className="mt-3">
            Ukoliko imate pitanja u vezi sa korišćenjem kolačića ili zaštitom podataka,
            možete nas kontaktirati putem{" "}
            <Link
              href="/kontakt"
              className="text-foreground underline underline-offset-4"
            >
              kontakt forme
            </Link>
            .
          </p>
          <p className="mt-3">Hvala vam na poverenju i poseti našem portalu.</p>
        </section>
      </div>
    </div>
  );
}
