"use client";

import { useState } from "react";
import { CalcForm, Polje, Rezultat } from "../_components/ui";

function kategorija(bmi: number): string {
  if (bmi < 18.5) return "pothranjenost";
  if (bmi < 25) return "normalna telesna masa";
  if (bmi < 30) return "prekomerna telesna masa";
  return "gojaznost";
}

export default function BmiKalkulator() {
  const [visina, setVisina] = useState("");
  const [tezina, setTezina] = useState("");

  const h = parseFloat(visina) / 100;
  const w = parseFloat(tezina);
  const bmi = h > 0 && w > 0 ? w / (h * h) : null;

  return (
    <CalcForm>
      <Polje label="Visina" value={visina} onChange={setVisina} unit="cm" min={0} />
      <Polje label="Težina" value={tezina} onChange={setTezina} unit="kg" min={0} />
      {bmi && (
        <Rezultat
          glavni={bmi.toFixed(1)}
          napomena={`Vaš BMI ukazuje na: ${kategorija(bmi)}.`}
        />
      )}
    </CalcForm>
  );
}
