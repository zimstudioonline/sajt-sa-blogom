/** Ikonica grozda crne ribizle (tamne bobice na stabljici sa listom). */
export default function BlackcurrantIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Crna ribizla"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stabljika */}
      <path
        d="M16 3c0 5-3 7-6 9M16 3c0 5 2 6 4 8M16 3v6"
        stroke="#4b7a3f"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* List */}
      <path
        d="M16 4c2.4-2.2 5.4-2.4 7-1.4-.4 2.3-2.6 4.1-5 4-1.3-.1-2-1.4-2-2.6z"
        fill="#4b7a3f"
      />
      {/* Bobice */}
      {[
        { cx: 9, cy: 15, r: 4 },
        { cx: 17, cy: 14, r: 4.2 },
        { cx: 23, cy: 16, r: 3.8 },
        { cx: 13, cy: 22, r: 4.2 },
        { cx: 21, cy: 23, r: 4 },
        { cx: 16.5, cy: 28, r: 3.4 },
      ].map((b, i) => (
        <g key={i}>
          <circle cx={b.cx} cy={b.cy} r={b.r} fill="#3a0d3f" />
          <circle
            cx={b.cx - b.r * 0.35}
            cy={b.cy - b.r * 0.35}
            r={b.r * 0.22}
            fill="#7d1e6a"
            opacity="0.85"
          />
          {/* Cvetni ožiljak na dnu bobice */}
          <circle cx={b.cx} cy={b.cy + b.r * 0.7} r="0.7" fill="#1c0620" />
        </g>
      ))}
    </svg>
  );
}
