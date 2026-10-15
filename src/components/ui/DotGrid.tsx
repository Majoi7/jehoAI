import React from 'react';

interface DotGridProps {
  className?: string;
}

export const DotGrid: React.FC<DotGridProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Background dot grid with responsive mouse illumination mask */}
      <div
        className="absolute inset-0 dot-grid-interactive"
        style={{
          maskImage: `radial-gradient(400px circle at var(--mx, 50%) var(--my, 30%), black 0%, rgba(0,0,0,0.5) 45%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(400px circle at var(--mx, 50%) var(--my, 30%), black 0%, rgba(0,0,0,0.5) 45%, transparent 80%)`,
          opacity: 0.85,
        }}
      />

      {/* Ambient background glow centers */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c8ff00]/[0.035] rounded-full blur-[120px] pointer-events-none"
        style={{
          transform: `translate(calc(-50% + (var(--mx, 50%) - 50%) * 0.05), calc(-50% + (var(--my, 30%) - 30%) * 0.05))`,
          transition: 'transform 0.2s ease-out',
        }}
      />
    </div>
  );
};
