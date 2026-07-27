"use client";

import { useSyncExternalStore } from "react";

// Zdravstveni savet dana — bira se determinisano po danu u godini, na klijentu,
// tako da se menja svakog dana bez potrebe za ponovnim build-om.
const saveti = [
  "Danas popijte 8 čaša vode.",
  "Prošetajte bar 30 minuta na svežem vazduhu.",
  "Dodajte jednu porciju povrća više uz ručak.",
  "Napravite 5 minuta vežbi disanja da smanjite stres.",
  "Legnite 30 minuta ranije nego sinoć.",
  "Zamenite jedan slatki napitak čašom vode ili nezaslađenog čaja.",
  "Istegnite se 5 minuta posle dužeg sedenja.",
];

// Bez pretplate — savet se ne menja tokom iste posete.
function subscribe() {
  return () => {};
}

function danasnjiSavet() {
  const pocetakGodine = new Date(new Date().getFullYear(), 0, 0).getTime();
  const dan = Math.floor((Date.now() - pocetakGodine) / 86400000);
  return saveti[dan % saveti.length];
}

export default function SavetDana() {
  // Na serveru vraća stabilan prvi savet (bez hydration greške), na klijentu današnji.
  const savet = useSyncExternalStore(subscribe, danasnjiSavet, () => saveti[0]);

  return (
    <p className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">{savet}</p>
  );
}
