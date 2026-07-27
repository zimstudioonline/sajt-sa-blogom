import type { Metadata } from "next";
import Stranica from "../_components/Stranica";
import ProteiniKalkulator from "./ProteiniKalkulator";

export const metadata: Metadata = {
  title: "Kalkulator unosa proteina",
  description:
    "Izračunajte dnevnu potrebu za proteinima prema telesnoj težini, cilju i nivou aktivnosti.",
};

export default function Page() {
  return (
    <Stranica
      slug="proteini"
      uvod="Proteini su ključni za mišiće, oporavak i sitost. Kalkulator procenjuje dnevnu potrebu za proteinima prema vašoj težini i cilju (održavanje, mršavljenje ili izgradnja mišića)."
    >
      <ProteiniKalkulator />
    </Stranica>
  );
}
