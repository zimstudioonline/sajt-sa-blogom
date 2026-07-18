"use client";

import { useState } from "react";
import { CalcForm, Izbor, Polje, Rezultat } from "../_components/ui";

// Osnovna procena: ~35 ml po kg telesne težine, uz dodatak za fizičku aktivnost.
const aktivnosti = [
  { value: "0", label: "Bez posebne aktivnosti" },
  { value: "0.35", label: "Lagana aktivnost (+350 ml po satu)" },
  { value: "0.7", label: "Intenzivna aktivnost (+700 ml po satu)" },
];

export default function VodaKalkulator() {
  const [tezina, setTezina] = useState("");
  const [sati, setSati] = useState("");
  const [dodatak, setDodatak] = useState("0");

  const w = parseFloat(tezina);
  const h = parseFloat(sati) || 0;
  const d = parseFloat(dodatak);

  let litara: number | null = null;
  if (w > 0) {
    litara = (w * 35) / 1000 + h * d;
  }

  return (
    <CalcForm>
      <Polje label="Težina" value={tezina} onChange={setTezina} unit="kg" min={0} />
      <Izbor
        label="Fizička aktivnost"
        value={dodatak}
        onChange={setDodatak}
        options={aktivnosti}
      />
      {dodatak !== "0" && (
        <Polje
          label="Trajanje aktivnosti"
          value={sati}
          onChange={setSati}
          unit="h"
          min={0}
          placeholder="npr. 1"
        />
      )}
      {litara && (
        <Rezultat
          glavni={litara.toFixed(1)}
          jedinica="l/dan"
          napomena="Okvirna preporuka unosa tečnosti. Potrebe rastu po toplom vremenu i uz znojenje."
        />
      )}
    </CalcForm>
  );
}
