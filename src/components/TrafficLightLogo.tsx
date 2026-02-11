import React from "react";

interface TrafficLightLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizeMap = {
  sm: { box: 28, light: 6, gap: 2, text: "text-lg" },
  md: { box: 40, light: 8, gap: 3, text: "text-2xl" },
  lg: { box: 64, light: 14, gap: 4, text: "text-4xl" },
};

const TrafficLightLogo: React.FC<TrafficLightLogoProps> = ({ size = "md", showText = true }) => {
  const s = sizeMap[size];

  return (
    <div className="flex items-center gap-2">
      <svg
        width={s.box}
        height={s.box * 1.8}
        viewBox="0 0 40 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Body */}
        <rect x="4" y="2" width="32" height="68" rx="8" className="fill-foreground/90" />
        <rect x="6" y="4" width="28" height="64" rx="6" className="fill-foreground/10 stroke-foreground/20" strokeWidth="1" />

        {/* Red light */}
        <circle cx="20" cy="17" r="8" className="fill-traffic-red" />
        <circle cx="20" cy="17" r="8" fill="url(#redGlow)" opacity="0.6" />

        {/* Yellow light */}
        <circle cx="20" cy="36" r="8" className="fill-traffic-yellow" />
        <circle cx="20" cy="36" r="8" fill="url(#yellowGlow)" opacity="0.5" />

        {/* Green light */}
        <circle cx="20" cy="55" r="8" className="fill-traffic-green" />
        <circle cx="20" cy="55" r="8" fill="url(#greenGlow)" opacity="0.6" />

        <defs>
          <radialGradient id="redGlow">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="yellowGlow">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="greenGlow">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      {showText && (
        <span className={`font-display font-bold tracking-tight ${s.text}`}>
          <span className="text-primary">TF</span>
          <span className="text-traffic-green">Law</span>
        </span>
      )}
    </div>
  );
};

export default TrafficLightLogo;
