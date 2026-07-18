// Kurirani spisak kategorija (Tema) za "Zdrav Ritual".
//
// Ovo je izvor istine za stranicu "Teme": kategorije postoje nezavisno od postova
// (mogu se prikazati i pre nego što ijedan post bude napisan). Post u svom frontmatter-u
// upućuje na kategoriju preko `name`-a; helperi u `posts.ts` mapiraju to na `slug`.

export type Category = {
  slug: string;
  name: string;
  emoji: string;
  color: string; // hex boja oznake kategorije
  description: string;
};

export const categories: Category[] = [
  {
    slug: "detoksikacija",
    name: "Detoksikacija",
    emoji: "💧",
    color: "#0ea5e9",
    description:
      "Saznajte kako da podržite prirodne procese čišćenja organizma kroz pravilnu ishranu, hidrataciju, biljne preparate i zdrave životne navike. Otkrijte praktične savete za osećaj lakoće, više energije i bolje opšte zdravlje.",
  },
  {
    slug: "energija-i-vitalnost",
    name: "Energija i vitalnost",
    emoji: "⚡",
    color: "#f59e0b",
    description:
      "Istražite prirodne načine za povećanje energije, smanjenje umora i unapređenje fizičke i mentalne izdržljivosti. Pronađite savete koji vam mogu pomoći da se osećate snažnije i produktivnije svakog dana.",
  },
  {
    slug: "imunitet",
    name: "Imunitet",
    emoji: "🛡️",
    color: "#16a34a",
    description:
      "Jačanje imuniteta predstavlja osnovu dobrog zdravlja. Kroz stručne tekstove saznaćete kako ishrana, vitamini, minerali, san i fizička aktivnost utiču na odbrambene sposobnosti organizma.",
  },
  {
    slug: "ishrana",
    name: "Ishrana",
    emoji: "🥗",
    color: "#65a30d",
    description:
      "Pravilna i uravnotežena ishrana ključ je dugoročnog zdravlja. Ovde ćete pronaći korisne informacije o zdravim namirnicama, planiranju obroka, nutritivnim vrednostima i savremenim principima zdrave ishrane.",
  },
  {
    slug: "prirodno-zdravlje",
    name: "Prirodno zdravlje",
    emoji: "🌿",
    color: "#059669",
    description:
      "Prirodni pristupi očuvanju zdravlja postaju sve popularniji. Istražujemo biljke, prirodne preparate, alternativne metode i svakodnevne navike koje mogu doprineti boljem fizičkom i mentalnom blagostanju.",
  },
  {
    slug: "svesni-zivot",
    name: "Svesni život",
    emoji: "🧘",
    color: "#7c3aed",
    description:
      "Svesni život podrazumeva balans između tela, uma i emocija. Ova kategorija donosi teme vezane za mindfulness, upravljanje stresom, lični razvoj, pozitivno razmišljanje i kvalitetnije svakodnevno funkcionisanje.",
  },
  {
    slug: "tradicionalna-kineska-medicina",
    name: "Tradicionalna kineska medicina",
    emoji: "☯️",
    color: "#dc2626",
    description:
      "Upoznajte principe tradicionalne kineske medicine, uključujući yin i yang, meridijane, pet elemenata, akupresuru, ishranu prema TKM principima i druge metode koje se koriste hiljadama godina.",
  },
  {
    slug: "vitamini-i-minerali",
    name: "Vitamini i minerali",
    emoji: "💊",
    color: "#ea580c",
    description:
      "Vitamini i minerali imaju ključnu ulogu u funkcionisanju organizma. Saznajte kako prepoznati njihove izvore, koje su njihove funkcije i kako održati optimalan unos važnih nutrijenata.",
  },
  {
    slug: "zdrave-navike",
    name: "Zdrave navike",
    emoji: "🌅",
    color: "#0891b2",
    description:
      "Male promene u svakodnevnim rutinama mogu doneti velike rezultate. Otkrijte kako da razvijete navike koje podržavaju zdravlje, bolji san, veću energiju i dugoročno blagostanje.",
  },
  {
    slug: "zdravlje-creva",
    name: "Zdravlje creva",
    emoji: "🦠",
    color: "#db2777",
    description:
      "Zdravlje digestivnog sistema utiče na imunitet, energiju i opšte stanje organizma. Pronađite korisne informacije o mikrobiomu, probioticima, prebioticima i prirodnim načinima za očuvanje zdravlja creva.",
  },
  {
    slug: "zdravlje-muskaraca",
    name: "Zdravlje muškaraca",
    emoji: "👨",
    color: "#2563eb",
    description:
      "Teme posvećene muškom zdravlju obuhvataju vitalnost, hormonalni balans, zdravlje prostate, fizičku kondiciju, reproduktivno zdravlje i preventivne mere za očuvanje dugoročnog zdravlja.",
  },
  {
    slug: "zdravlje-zena",
    name: "Zdravlje žena",
    emoji: "👩",
    color: "#e11d48",
    description:
      "Kategorija namenjena ženama donosi informacije o hormonalnom zdravlju, trudnoći, menopauzi, lepoti, ishrani i svim važnim aspektima ženskog blagostanja kroz različite životne faze.",
  },
];

// Transliteracija srpskih dijakritika u ASCII, radi URL-safe slug-ova.
const DIACRITICS: Record<string, string> = {
  š: "s",
  đ: "dj",
  č: "c",
  ć: "c",
  ž: "z",
  Š: "s",
  Đ: "dj",
  Č: "c",
  Ć: "c",
  Ž: "z",
};

export function slugify(text: string): string {
  return text
    .trim()
    .replace(/[šđčćžŠĐČĆŽ]/g, (ch) => DIACRITICS[ch] ?? ch)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

// Nađi kategoriju po imenu iz frontmatter-a (tolerantno na dijakritike/velika slova).
export function getCategoryByName(name: string): Category | undefined {
  const target = slugify(name);
  return categories.find((c) => c.slug === target);
}
