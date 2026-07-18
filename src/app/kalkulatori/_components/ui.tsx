"use client";

// Deljeni UI elementi za kalkulatore (privatni folder `_components` — ne stvara rutu).

export function Polje({
  label,
  value,
  onChange,
  unit,
  min,
  max,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  unit?: string;
  min?: number;
  max?: number;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          min={min}
          max={max}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground outline-none focus:border-accent"
        />
        {unit && <span className="shrink-0 text-sm text-muted">{unit}</span>}
      </div>
    </label>
  );
}

export function Izbor({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground outline-none focus:border-accent"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function Rezultat({
  glavni,
  jedinica,
  napomena,
}: {
  glavni: string;
  jedinica?: string;
  napomena?: string;
}) {
  return (
    <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 text-center">
      <div className="text-4xl font-bold text-accent">
        {glavni}
        {jedinica && (
          <span className="ml-1 text-xl font-medium text-muted">{jedinica}</span>
        )}
      </div>
      {napomena && <p className="mt-2 text-sm text-muted">{napomena}</p>}
    </div>
  );
}

// Omotač forme kalkulatora: mreža polja + prostor za rezultat.
export function CalcForm({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-5">{children}</div>;
}
