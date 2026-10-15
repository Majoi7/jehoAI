import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glow = false,
  ...props
}) => {
  return (
    <div
      className={`glass-panel rounded-2xl relative transition-all duration-300 ${
        glow ? 'hover:border-[#c8ff00]/30 hover:shadow-[0_0_30px_rgba(200,255,0,0.06)]' : 'hover:border-white/[0.14]'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
