import Link from "next/link";

/**
 * Otkrivanje komercijalne prirode stranice.
 *
 * Stoji IZNAD ponude i CTA dugmeta, a ne samo u futeru — praksa (i FTC-ovo
 * tumačenje „clear and conspicuous") je da otkrivanje mora biti tamo gde
 * posetilac donosi odluku, jer većina klikne pre nego što doskroluje do futera.
 */
export default function Disclosure() {
  return (
    <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-bordo/15 bg-cream px-5 py-3 text-center text-xs leading-relaxed text-muted">
      <strong className="font-semibold text-bordo">Komercijalni sadržaj.</strong>{" "}
      Ovo je prodajna stranica proizvoda ALFA AKTIV. Porudžbina se ne obavlja na
      Zdrav Ritualu — dugme vas vodi na sajt prodavca, a mi od ostvarene prodaje
      dobijamo naknadu. Detalji su u{" "}
      <Link
        href="/affiliate-disclosure/"
        className="font-medium text-bordo underline underline-offset-2 hover:no-underline"
      >
        Izjavi o affiliate saradnji
      </Link>
      .
    </p>
  );
}
