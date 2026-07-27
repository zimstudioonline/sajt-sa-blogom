/** Ikonica aronije (crna aronija — okrugle tamne bobice u grozdu sa listom). */
export default function AroniaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Aronija"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stabljike ka bobicama */}
      <path
        d="M16 4v6M16 5c-3 2-5 4-7 6M16 5c3 2 5 4 6 6"
        stroke="#4b7a3f"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* List */}
      <path
        d="M16 5c1.8-2.4 4.8-3 6.8-2.2-.2 2.4-2.2 4.4-4.6 4.5-1.3.1-2.2-1-2.2-2.3z"
        fill="#4b7a3f"
      />
      {/* Bobice — okrugle, tamne, sa zvezdastim ožiljkom (tipično za aroniju) */}
      {[
        { cx: 8.5, cy: 16, r: 4.3 },
        { cx: 16, cy: 15, r: 4.6 },
        { cx: 23.5, cy: 16.5, r: 4.1 },
        { cx: 12, cy: 23, r: 4.4 },
        { cx: 20, cy: 23.5, r: 4.3 },
      ].map((b, i) => (
        <g key={i}>
          <circle cx={b.cx} cy={b.cy} r={b.r} fill="#241226" />
          <circle
            cx={b.cx - b.r * 0.32}
            cy={b.cy - b.r * 0.34}
            r={b.r * 0.24}
            fill="#5c2f52"
            opacity="0.8"
          />
          {/* Zvezdasti ožiljak (calyx) na dnu bobice */}
          <path
            d={`M${b.cx} ${b.cy + b.r * 0.55} l1.1 .9 -.4 1.3 -.7 -.5 -.7 .5 -.4 -1.3z`}
            fill="#0f060f"
            opacity="0.7"
          />
        </g>
      ))}
    </svg>
  );
}
