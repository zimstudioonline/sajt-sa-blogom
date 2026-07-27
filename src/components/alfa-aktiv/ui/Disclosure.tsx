import Link from "next/link";

/**
 * Otkrivanje komercijalne prirode stranice.
 *
 * Stoji IZNAD ponude i CTA dugmeta, a ne samo u futeru — praksa (i FTC-ovo
 * tumačenje „clear and conspicuous") je da otkrivanje mora biti tamo gde
 * posetilac donosi odluku, jer većina klikne pre nego što doskroluje do futera.
 *
 * Nije affiliate odnos: energijazazivot.com je sajt istog vlasnika. Otkrivanje
 * je i dalje potrebno jer je stranica oglas, a stoji na uredničkom portalu.
 */
export default function Disclosure() {
  return (
    <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-bordo/15 bg-cream px-5 py-3 text-center text-xs leading-relaxed text-muted">
      <strong className="font-semibold text-bordo">Komercijalni sadržaj.</strong>{" "}
      Ovo je prodajna stranica proizvoda ALFA AKTIV. Porudžbina se obavlja na
      sajtu <span className="whitespace-nowrap">energijazazivot.com</span>, koji
      je takođe u našem vlasništvu. ALFA AKTIV je dodatak ishrani, nije lek —
      vidi{" "}
      <Link
        href="/disclaimer/"
        className="font-medium text-bordo underline underline-offset-2 hover:no-underline"
      >
        Izjavu o odricanju od odgovornosti
      </Link>
      .
    </p>
  );
}
