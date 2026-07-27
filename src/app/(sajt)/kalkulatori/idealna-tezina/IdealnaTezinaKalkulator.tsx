"use client";

import { useState } from "react";
import { CalcForm, Izbor, Polje, Rezultat } from "../_components/ui";

export default function IdealnaTezinaKalkulator() {
  const [pol, setPol] = useState("m");
  const [visina, setVisina] = useState("");

  const h = parseFloat(visina);

  let devine: number | null = null;
  let rasponMin: number | null = null;
  let rasponMax: number | null = null;

  if (h > 0) {
    // Devine formula (bazirana na visini preko 152.4 cm / 5 stopa).
    const inci = h / 2.54;
    const preko = Math.max(0, inci - 60);
    devine = (pol === "m" ? 50 : 45.5) + 2.3 * preko;

    // Zdrav raspon prema BMI 18.5–24.9.
    const m = h / 100;
    rasponMin = 18.5 * m * m;
    rasponMax = 24.9 * m * m;
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
      <Polje label="Visina" value={visina} onChange={setVisina} unit="cm" min={0} />
      {devine && rasponMin && rasponMax && (
        <Rezultat
          glavni={`${devine.toFixed(1)} kg`}
          napomena={`Zdrav raspon težine (prema BMI): ${rasponMin.toFixed(
            1
          )}–${rasponMax.toFixed(1)} kg.`}
        />
      )}
    </CalcForm>
  );
}
