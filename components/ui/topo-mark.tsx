export function TopoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="210" cy="210" r="1" fill="none" />
      {[42, 78, 114, 150, 186].map((r, i) => (
        <path
          key={r}
          d={`M ${210 - r} 210
              C ${210 - r} ${210 - r * 0.7}, ${210 - r * 0.55} ${210 - r}, 210 ${210 - r}
              C ${210 + r * 0.6} ${210 - r}, ${210 + r} ${210 - r * 0.65}, ${210 + r} 210
              C ${210 + r} ${210 + r * 0.75}, ${210 + r * 0.5} ${210 + r}, 210 ${210 + r}
              C ${210 - r * 0.62} ${210 + r}, ${210 - r} ${210 + r * 0.7}, ${210 - r} 210 Z`}
          stroke={i % 2 === 0 ? "#7F987C" : "#D8D2C4"}
          strokeOpacity={i % 2 === 0 ? 0.5 - i * 0.06 : 0.9 - i * 0.1}
          strokeWidth="1"
        />
      ))}
      <line x1="210" y1="20" x2="210" y2="60" stroke="#7F987C" strokeOpacity="0.35" strokeWidth="1" />
      <line x1="210" y1="360" x2="210" y2="400" stroke="#7F987C" strokeOpacity="0.35" strokeWidth="1" />
      <line x1="20" y1="210" x2="60" y2="210" stroke="#7F987C" strokeOpacity="0.35" strokeWidth="1" />
      <line x1="360" y1="210" x2="400" y2="210" stroke="#7F987C" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="210" cy="210" r="5" fill="#6D8769" />
      <circle cx="210" cy="210" r="10" fill="none" stroke="#6D8769" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="288" cy="152" r="3" fill="#B08A4E" />
      <circle cx="146" cy="268" r="3" fill="#1F1F1C" fillOpacity="0.25" />
    </svg>
  );
}
