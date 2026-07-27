import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";

/**
 * Zvanična deklaracija proizvođača: sastav, način upotrebe i napomene.
 * Tekst je prenet doslovno, ispravljene su samo očigledne slovne greške
 * („askrobinske" → „askorbinske", „Alfa Akriv" → „Alfa Aktiv").
 *
 * Namerno NISU prenete rečenice sa terapijskim tvrdnjama (lečenje bolesti,
 * uklanjanje virusa i bakterija, procenti izlečenja). Za dodatak ishrani su
 * dozvoljene samo odobrene EFSA tvrdnje — vidi napomenu u futeru.
 */

const sastavPoBocici = [
  ["Med", "1,5 g"],
  ["Sok ploda sveže crne ribizle (Ribes nigrum)", "0,7 g"],
  ["Sok ploda sveže aronije (Aronia melanocarpa)", "0,7 g"],
  ["Vitamin C (u obliku L-askorbinske kiseline)", "498 mg"],
];

const upotreba = [
  "Sadržaj bočice treba popiti čim se otvori, najbolje 15 minuta pre obroka ili 30 minuta posle obroka.",
  "Pre upotrebe promućkati bočicu.",
  "Kad popijete tečnost iz bočice sačekajte 2 minuta, a onda popijte 2,5 decilitara vode (maksimalizuje apsorpciju suplementa).",
];

const doziranje = [
  ["Odrasle osobe", "2 puta dnevno sadržaj 1 bočice (2 × 20 ml)"],
  ["Deca starija od 14 godina", "dva puta dnevno sadržaj pola bočice (2 × 10 ml)"],
  ["Deca uzrasta od 3 do 14 godina", "jednom dnevno sadržaj pola bočice (10 ml)"],
  ["Preporuka za zdrave osobe", "2 bočice dnevno, ujutru i uveče, bez vremenskog ograničenja"],
];

const napomene = [
  "Proizvod čuvati na temperaturi ispod 25 stepeni i van direktne sunčeve svetlosti.",
  "Tokom korišćenja preparata treba ograničiti unos mleka i alkohola pošto usporavaju dejstvo Alfa Aktiva.",
  "S obzirom na to da ovaj preparat poboljšava apsorpciju hranljivih sastojaka, voditi računa da se tokom njegove primene unose zdrave namirnice i da se pije dovoljno negazirane vode.",
];

export default function Deklaracija() {
  return (
    <Section id="deklaracija" tone="white">
      <SectionHeading
        eyebrow="Zvanična deklaracija"
        title="Sastav i način upotrebe"
        subtitle="Podaci preneti sa deklaracije proizvođača. Proizvod je upisan u bazu Ministarstva zdravlja Republike Srbije pod brojem 21031/2022 od 04.07.2022."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Sastav */}
        <div className="rounded-3xl border border-bordo/10 bg-cream p-8">
          <h3 className="font-display text-xl font-semibold text-bordo">
            Sastav proizvoda
          </h3>

          <p className="mt-4 text-sm font-medium text-ink/70">Po jednoj bočici:</p>
          <ul className="mt-3 divide-y divide-bordo/10">
            {sastavPoBocici.map(([naziv, kolicina]) => (
              <li key={naziv} className="flex justify-between gap-4 py-2.5 text-sm">
                <span className="text-ink/90">{naziv}</span>
                <span className="shrink-0 font-semibold text-bordo">{kolicina}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm leading-relaxed text-muted">
            <span className="font-medium text-ink/80">Ostali sastojci:</span> šećer,
            regulator kiselosti — limunska, jabučna, mlečna i vinska kiselina, so.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            Sastoji se od vode, prirodnog meda (7,5%), voćnog koncentrata crne
            ribizle (3,5%), voćne aronije (3,5%), glukozno-fruktoznog sirupa,
            regulatora kiselosti — limunska kiselina, jabučna kiselina, mlečna
            kiselina, vitamina C, vitamina B3, selena, joda i vlakana.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            <span className="font-medium text-ink/80">Aktivni sastojci:</span> aronija
            — snaga antocijanina; crna ribizla — moć polifenola; med — bogatstvo od 78
            živih enzima, vitamini i minerali.
          </p>
        </div>

        {/* Upotreba */}
        <div className="rounded-3xl border border-bordo/10 bg-cream p-8">
          <h3 className="font-display text-xl font-semibold text-bordo">
            Način upotrebe
          </h3>

          <ul className="mt-4 space-y-3">
            {upotreba.map((u) => (
              <li key={u} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-honey/20 text-xs font-bold text-bordo">
                  •
                </span>
                <span className="leading-relaxed text-ink/90">{u}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm font-medium text-ink/70">Doziranje:</p>
          <ul className="mt-3 divide-y divide-bordo/10">
            {doziranje.map(([ko, koliko]) => (
              <li key={ko} className="py-2.5 text-sm">
                <span className="font-semibold text-bordo">{ko}:</span>{" "}
                <span className="text-ink/90">{koliko}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Napomene */}
      <div className="mt-8 rounded-3xl border border-honey/40 bg-honey/10 p-8">
        <h3 className="font-display text-xl font-semibold text-bordo">
          Posebne napomene
        </h3>
        <ul className="mt-4 space-y-3">
          {napomene.map((n) => (
            <li key={n} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 shrink-0 text-bordo" aria-hidden>
                !
              </span>
              <span className="leading-relaxed text-ink/90">{n}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-bordo/10 pt-4 text-xs leading-relaxed text-muted">
          Dodatak ishrani nije zamena za raznovrsnu i uravnoteženu ishranu i zdrav
          način života. Proizvod nije lek i nije namenjen lečenju, ublažavanju niti
          sprečavanju bolesti. Ako ste trudni, dojite, uzimate terapiju ili imate
          zdravstveni problem, posavetujte se sa lekarom pre upotrebe.
        </p>
      </div>
    </Section>
  );
}
