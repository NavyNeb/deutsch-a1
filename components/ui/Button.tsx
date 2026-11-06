import { forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'ember' | 'danger';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-full ' +
  'transition-[transform,background,border-color,opacity] duration-150 ' +
  'active:scale-[.98] disabled:opacity-40 disabled:pointer-events-none select-none cursor-pointer';

const ember = 'bg-ember text-[#1A0C02] hover:opacity-90';

const variants: Record<Variant, string> = {
  primary: 'bg-cta text-cta-ink hover:opacity-90',
  secondary: 'bg-transparent text-text border border-border-strong hover:bg-surface-2',
  ghost: 'bg-transparent text-text hover:bg-surface-2',
  ember,
  danger: ember, // legacy name; mistakes are never red
};

const sizes: Record<Size, string> = {
  sm: 'px-4 min-h-[44px] text-sm',
  md: 'px-6 min-h-[44px] text-[15px]',
  lg: 'px-8 h-[56px] min-h-[44px] text-base',
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className = '', children, ...p },
  ref,
) {
  return (
    <button ref={ref} {...p} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
});
