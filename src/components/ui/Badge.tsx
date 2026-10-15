import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'neutral' | 'outline';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  className = '',
  dot = false,
}) => {
  const styles = {
    accent: 'bg-[#c8ff00]/10 text-[#c8ff00] border border-[#c8ff00]/25',
    neutral: 'bg-white/[0.04] text-[#8b8b92] border border-white/[0.08]',
    outline: 'border border-white/[0.12] text-[#f5f5f5]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase ${styles[variant]} ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />}
      {children}
    </span>
  );
};
