import Section from "@/components/alfa-aktiv/ui/Section";
import CheckItem from "@/components/alfa-aktiv/ui/CheckItem";

const transparency = [
  "Jasno prikazan sastav i preporučeni način upotrebe",
  "Deklaracija i informacije o proizvođaču",
  "Stvarna iskustva korisnika (uz njihovu saglasnost)",
];

/** Poverenje i transparentnost — stvarna registracija (bez izmišljene garancije). */
export default function Guarantee() {
  return (
    <Section tone="cream" narrow>
      <div className="rounded-3xl border border-bordo/15 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-leaf/15 text-3xl">
          🛡
        </div>
        <h2 className="mt-5 font-display text-2xl font-semibold text-bordo sm:text-3xl">
          Poverenje se gradi otvorenošću
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          Ne obećavamo čuda i ne tvrdimo da postoji čarobna bočica. Verujemo u male
          korake, kvalitetne sastojke i navike koje mogu trajati.
        </p>

        <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left">
          {transparency.map((t) => (
            <CheckItem key={t}>{t}</CheckItem>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl bg-cream-deep/70 p-5 text-sm text-ink/80">
          <strong className="text-bordo">Registrovan proizvod.</strong> ALFA AKTIV je
          upisan u bazu Ministarstva zdravlja Republike Srbije pod brojem{" "}
          <strong>21031/2022</strong> (04.07.2022).
          <br />
          <span className="text-muted">
            Napomena: registracija ne znači da je proizvod lek niti predstavlja potvrdu
            terapijske efikasnosti.
          </span>
        </div>
      </div>
    </Section>
  );
}
