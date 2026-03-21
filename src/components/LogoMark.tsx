import { useId } from "react";

export function LogoMark({ className = "" }: { className?: string }) {
  const uid = useId();
  const splitId = `logo-split-${uid.replace(/:/g, "")}`;

  return (
    <svg
      className={className}
      viewBox="0 0 120 64"
      role="img"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={splitId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--silver-from)" />
          <stop offset="45%" stopColor="var(--silver-mid)" />
          <stop offset="55%" stopColor="var(--gold-from)" />
          <stop offset="100%" stopColor="var(--gold-to)" />
        </linearGradient>
      </defs>
      <text
        x="60"
        y="46"
        textAnchor="middle"
        fontSize="50"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="700"
        fill={`url(#${splitId})`}
      >
        ∞
      </text>
    </svg>
  );
}
