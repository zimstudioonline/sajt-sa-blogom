// Metapodaci o kalkulatorima — izvor istine za indeks, naslovnu sekciju i sitemap.
export type CalcMeta = {
  slug: string;
  name: string;
  emoji: string;
  opis: string;
};

export const kalkulatori: CalcMeta[] = [
  {
    slug: "bmi",
    name: "BMI kalkulator",
    emoji: "⚖️",
    opis: "Izračunajte indeks telesne mase i saznajte u kojoj ste kategoriji.",
  },
  {
    slug: "kalorije",
    name: "Kalkulator kalorija",
    emoji: "🔥",
    opis: "Dnevna potreba za kalorijama (BMR i TDEE) prema vašim podacima.",
  },
  {
    slug: "unos-vode",
    name: "Kalkulator unosa vode",
    emoji: "💧",
    opis: "Koliko vode dnevno da unosite prema težini i aktivnosti.",
  },
  {
    slug: "idealna-tezina",
    name: "Idealna telesna težina",
    emoji: "🎯",
    opis: "Procenite idealnu težinu i zdrav raspon prema visini.",
  },
  {
    slug: "proteini",
    name: "Potreban unos proteina",
    emoji: "🥩",
    opis: "Dnevna potreba za proteinima prema cilju i aktivnosti.",
  },
  {
    slug: "potrosnja-kalorija",
    name: "Potrošnja kalorija",
    emoji: "🏃",
    opis: "Koliko kalorija potrošite određenom fizičkom aktivnošću.",
  },
];

export function getKalkulator(slug: string): CalcMeta | undefined {
  return kalkulatori.find((k) => k.slug === slug);
}
