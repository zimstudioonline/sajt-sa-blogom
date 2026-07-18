import type { Metadata } from "next";
import Stranica from "../_components/Stranica";
import IdealnaTezinaKalkulator from "./IdealnaTezinaKalkulator";

export const metadata: Metadata = {
  title: "Kalkulator idealne telesne težine",
  description:
    "Procenite idealnu telesnu težinu i zdrav raspon težine prema visini i polu.",
};

export default function Page() {
  return (
    <Stranica
      slug="idealna-tezina"
      uvod="Kalkulator procenjuje idealnu telesnu težinu (po Devine formuli) i zdrav raspon težine prema indeksu telesne mase. Rezultat je orijentir, a ne strogo pravilo."
    >
      <IdealnaTezinaKalkulator />
    </Stranica>
  );
}
