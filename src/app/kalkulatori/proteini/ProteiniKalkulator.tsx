"use client";

import { useState } from "react";
import { CalcForm, Izbor, Polje, Rezultat } from "../_components/ui";

// Preporučeni unos proteina (g po kg telesne težine) prema cilju/aktivnosti.
const ciljevi = [
  { value: "0.8", label: "Sedeći način života (održavanje)" },
  { value: "1.2", label: "Rekreativna aktivnost" },
  { value: "1.6", label: "Redovan trening / mršavljenje" },
  { value: "2.0", label: "Izgradnja mišićne mase" },
];

export default function ProteiniKalkulator() {
  const [tezina, setTezina] = useState("");
  const [faktor, setFaktor] = useState("1.2");

  const w = parseFloat(tezina);
  const f = parseFloat(faktor);
  const grama = w > 0 ? w * f : null;

  return (
    <CalcForm>
      <Polje label="Težina" value={tezina} onChange={setTezina} unit="kg" min={0} />
      <Izbor label="Cilj / aktivnost" value={faktor} onChange={setFaktor} options={ciljevi} />
      {grama && (
        <Rezultat
          glavni={Math.round(grama).toString()}
          jedinica="g/dan"
          napomena="Okvirna dnevna potreba za proteinima. Rasporedite unos na više obroka tokom dana."
        />
      )}
    </CalcForm>
  );
}
