import type { Metadata } from "next";
import Stranica from "../_components/Stranica";
import BmiKalkulator from "./BmiKalkulator";

export const metadata: Metadata = {
  title: "BMI kalkulator",
  description:
    "Izračunajte indeks telesne mase (BMI) na osnovu visine i težine i saznajte u kojoj ste kategoriji.",
};

export default function Page() {
  return (
    <Stranica
      slug="bmi"
      uvod="Indeks telesne mase (BMI) je odnos težine i visine koji daje okvirnu procenu da li je vaša telesna masa u zdravom rasponu. Unesite visinu i težinu da vidite rezultat."
    >
      <BmiKalkulator />
    </Stranica>
  );
}
