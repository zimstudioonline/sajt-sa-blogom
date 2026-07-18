import type { Metadata } from "next";
import Stranica from "../_components/Stranica";
import KalorijeKalkulator from "./KalorijeKalkulator";

export const metadata: Metadata = {
  title: "Kalkulator kalorija",
  description:
    "Izračunajte dnevnu potrebu za kalorijama (BMR i TDEE) prema polu, godinama, visini, težini i nivou aktivnosti.",
};

export default function Page() {
  return (
    <Stranica
      slug="kalorije"
      uvod="Kalkulator procenjuje koliko kalorija vaše telo troši dnevno (TDEE) na osnovu bazalnog metabolizma i nivoa fizičke aktivnosti. To je polazna tačka za održavanje, mršavljenje ili dobijanje na težini."
    >
      <KalorijeKalkulator />
    </Stranica>
  );
}
