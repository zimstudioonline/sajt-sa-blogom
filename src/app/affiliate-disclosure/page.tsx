import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Obaveštenje o affiliate saradnji — Zdrav Ritual.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Affiliate Disclosure
      </h1>
      <p className="mt-6 text-muted">
        Ovaj dokument je u pripremi. Ovde ćemo transparentno navesti da pojedini linkovi na
        sajtu mogu biti affiliate linkovi, preko kojih možemo ostvariti malu proviziju bez
        dodatnog troška za vas.
      </p>
    </div>
  );
}
