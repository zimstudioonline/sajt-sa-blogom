// Formatira ISO datum (npr. "2026-07-10") u srpski čitljiv oblik: "10. jul 2026."
const MESECI = [
  "januar",
  "februar",
  "mart",
  "april",
  "maj",
  "jun",
  "jul",
  "avgust",
  "septembar",
  "oktobar",
  "novembar",
  "decembar",
];

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getDate()}. ${MESECI[d.getMonth()]} ${d.getFullYear()}.`;
}
