import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2',
    lg: 'text-base px-7 py-3.5 rounded-full gap-2.5 font-semibold tracking-tight',
  };

  const variantStyles = {
    primary:
      'bg-[#c8ff00] text-[#0a0a0b] hover:bg-[#d6ff33] shadow-[0_0_24px_rgba(200,255,0,0.22)] hover:shadow-[0_0_32px_rgba(200,255,0,0.4)]',
    secondary:
      'bg-white/[0.06] text-white border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2]',
    ghost:
      'text-[#8b8b92] hover:text-white hover:bg-white/[0.05]',
    outline:
      'border border-[#c8ff00]/40 text-[#c8ff00] hover:bg-[#c8ff00]/10 hover:border-[#c8ff00]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
