"use client";

import { useState } from "react";
import { CalcForm, Izbor, Polje, Rezultat } from "../_components/ui";

// Mifflin-St Jeor jednačina za bazalni metabolizam (BMR).
const aktivnosti = [
  { value: "1.2", label: "Sedeći način života (bez vežbanja)" },
  { value: "1.375", label: "Lagana aktivnost (1–3x nedeljno)" },
  { value: "1.55", label: "Umerena aktivnost (3–5x nedeljno)" },
  { value: "1.725", label: "Visoka aktivnost (6–7x nedeljno)" },
  { value: "1.9", label: "Vrlo visoka (fizički posao / 2x dnevno)" },
];

export default function KalorijeKalkulator() {
  const [pol, setPol] = useState("m");
  const [godine, setGodine] = useState("");
  const [visina, setVisina] = useState("");
  const [tezina, setTezina] = useState("");
  const [faktor, setFaktor] = useState("1.375");

  const a = parseFloat(godine);
  const h = parseFloat(visina);
  const w = parseFloat(tezina);
  const f = parseFloat(faktor);

  let tdee: number | null = null;
  if (a > 0 && h > 0 && w > 0) {
    const bmr = 10 * w + 6.25 * h - 5 * a + (pol === "m" ? 5 : -161);
    tdee = bmr * f;
  }

  return (
    <CalcForm>
      <Izbor
        label="Pol"
        value={pol}
        onChange={setPol}
        options={[
          { value: "m", label: "Muški" },
          { value: "z", label: "Ženski" },
        ]}
      />
      <Polje label="Godine" value={godine} onChange={setGodine} unit="god" min={0} />
      <Polje label="Visina" value={visina} onChange={setVisina} unit="cm" min={0} />
      <Polje label="Težina" value={tezina} onChange={setTezina} unit="kg" min={0} />
      <Izbor label="Nivo aktivnosti" value={faktor} onChange={setFaktor} options={aktivnosti} />
      {tdee && (
        <Rezultat
          glavni={Math.round(tdee).toLocaleString("sr-RS")}
          jedinica="kcal/dan"
          napomena="Procenjena dnevna potrošnja za održavanje trenutne težine."
        />
      )}
    </CalcForm>
  );
}
