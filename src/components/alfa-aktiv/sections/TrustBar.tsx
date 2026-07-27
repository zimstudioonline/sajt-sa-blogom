const items = [
  { value: "4.8", label: "Prosečna ocena korisnika" },
  { value: "11 900", label: "ORAC vrednost antioksidanasa" },
  { value: "30 × 20 ml", label: "Bočica u pakovanju (600 ml)" },
  { value: "< 10 s", label: "Za jedan svakodnevni ritual" },
];

/** Traka poverenja odmah ispod hero-a: ocena, ORAC, pakovanje, brzina. */
export default function TrustBar() {
  return (
    <div className="border-y border-bordo/10 bg-cream-deep/70">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="text-center">
            <p className="font-display text-2xl font-semibold text-bordo sm:text-3xl">
              {it.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">
              {it.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
