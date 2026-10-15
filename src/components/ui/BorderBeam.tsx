import React from 'react';

interface BorderBeamProps {
  children: React.ReactNode;
  className?: string;
  size?: number; // length of beam
  duration?: number; // duration in seconds
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  children,
  className = '',
  size = 28,
  duration = 5,
}) => {
  return (
    <div className={`relative rounded-3xl p-8 md:p-10 bg-[#0e0e11] overflow-hidden ${className}`}>
      {/* Base border frame */}
      <div className="absolute inset-0 rounded-3xl border border-white/[0.08] pointer-events-none" />

      {/* SVG Animated Glowing Border Beam that runs along the perimeter */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon beam gradient with bright white-lime head and smooth tail */}
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="25%" stopColor="#c8ff00" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#c8ff00" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#c8ff00" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter for the laser halo effect */}
          <filter id="beamGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Diffuse glow beam (layer 1: electric aura) */}
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="24"
          ry="24"
          fill="none"
          stroke="url(#beamGradient)"
          strokeWidth="4"
          strokeDasharray={`${size} ${100 - size}`}
          pathLength="100"
          filter="url(#beamGlow)"
          className="beam-animation-path opacity-80"
          style={{ animationDuration: `${duration}s` }}
        />

        {/* Sharp core laser beam (layer 2: crisp perimeter line) */}
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="24"
          ry="24"
          fill="none"
          stroke="url(#beamGradient)"
          strokeWidth="2"
          strokeDasharray={`${size} ${100 - size}`}
          pathLength="100"
          className="beam-animation-path"
          style={{ animationDuration: `${duration}s` }}
        />
      </svg>

      {/* Subtle interior ambient spotlight following corner */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 bg-[#c8ff00]/[0.035] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
