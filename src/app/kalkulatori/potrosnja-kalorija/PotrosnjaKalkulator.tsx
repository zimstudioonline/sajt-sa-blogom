"use client";

import { useState } from "react";
import { CalcForm, Izbor, Polje, Rezultat } from "../_components/ui";

// MET vrednosti (metabolički ekvivalent) za uobičajene aktivnosti.
// Potrošnja (kcal) = MET × težina(kg) × trajanje(h).
const aktivnosti = [
  { value: "3.5", label: "Brzo hodanje" },
  { value: "8", label: "Trčanje" },
  { value: "7", label: "Biciklizam" },
  { value: "6", label: "Plivanje" },
  { value: "5", label: "Trening u teretani" },
  { value: "2.5", label: "Joga" },
  { value: "4.5", label: "Ples" },
  { value: "3", label: "Rad u bašti" },
];

export default function PotrosnjaKalkulator() {
  const [met, setMet] = useState("3.5");
  const [tezina, setTezina] = useState("");
  const [minuti, setMinuti] = useState("");

  const m = parseFloat(met);
  const w = parseFloat(tezina);
  const min = parseFloat(minuti);
  const kcal = w > 0 && min > 0 ? m * w * (min / 60) : null;

  return (
    <CalcForm>
      <Izbor label="Aktivnost" value={met} onChange={setMet} options={aktivnosti} />
      <Polje label="Težina" value={tezina} onChange={setTezina} unit="kg" min={0} />
      <Polje label="Trajanje" value={minuti} onChange={setMinuti} unit="min" min={0} />
      {kcal && (
        <Rezultat
          glavni={Math.round(kcal).toLocaleString("sr-RS")}
          jedinica="kcal"
          napomena="Procenjena potrošnja energije za izabranu aktivnost i trajanje."
        />
      )}
    </CalcForm>
  );
}
