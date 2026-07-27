import type { Metadata } from "next";
import Stranica from "../_components/Stranica";
import PotrosnjaKalkulator from "./PotrosnjaKalkulator";

export const metadata: Metadata = {
  title: "Kalkulator potrošnje kalorija",
  description:
    "Izračunajte koliko kalorija potrošite određenom fizičkom aktivnošću prema trajanju i telesnoj težini.",
};

export default function Page() {
  return (
    <Stranica
      slug="potrosnja-kalorija"
      uvod="Koliko kalorija sagorevate hodanjem, trčanjem ili treningom? Kalkulator koristi MET vrednosti aktivnosti, vašu težinu i trajanje da proceni potrošenu energiju."
    >
      <PotrosnjaKalkulator />
    </Stranica>
  );
}
