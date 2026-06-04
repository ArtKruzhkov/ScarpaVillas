import React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'nav';

type LinkButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant?: Variant;
  size?: Size;
};

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink-900 font-sans text-white hover:bg-[#5E6E97] focus-visible:outline-ink-900',

  secondary:
    'border border-ink-900/20 bg-sand-50 text-ink-900 hover:border-ink-900/35 hover:bg-sand-100 focus-visible:outline-ink-900',

  ghost: 'text-ink-900 hover:bg-ink-900/5 focus-visible:outline-ink-900',

  outline:
    'border-2 border-[#2C3654] bg-transparent text-[#2C3654] hover:bg-[#2C3654] hover:text-white',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',

  md: 'h-11 px-5 text-sm',

  nav: 'h-[42px] px-[34px] text-[13px] font-bold font-sans tracking-[0.08em] uppercase',
};

export function LinkButton({
  children,
  className,
  href,
  variant = 'primary',
  size = 'md',
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}>
      {children}
    </a>
  );
}
