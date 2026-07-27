import type { Metadata } from "next";
import Stranica from "../_components/Stranica";
import VodaKalkulator from "./VodaKalkulator";

export const metadata: Metadata = {
  title: "Kalkulator unosa vode",
  description:
    "Saznajte koliko vode dnevno treba da unosite prema telesnoj težini i nivou fizičke aktivnosti.",
};

export default function Page() {
  return (
    <Stranica
      slug="unos-vode"
      uvod="Dovoljna hidratacija je osnova dobrog zdravlja. Ovaj kalkulator procenjuje dnevni unos tečnosti na osnovu vaše težine i fizičke aktivnosti."
    >
      <VodaKalkulator />
    </Stranica>
  );
}
