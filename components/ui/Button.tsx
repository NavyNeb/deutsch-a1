import { forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-rounded font-bold rounded-full ' +
  'transition-[transform,background,border-color,filter,box-shadow] duration-150 ' +
  'active:scale-[.98] disabled:opacity-40 disabled:pointer-events-none select-none cursor-pointer';

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-ink shadow-primary hover:brightness-[1.05]',
  secondary: 'bg-[var(--soft)] text-[var(--soft-ink)] hover:brightness-[1.03]',
  ghost: 'bg-transparent text-text hover:bg-surface-2',
  danger: 'bg-[var(--bad)] text-white hover:brightness-[1.05]',
};

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-3 text-[15px]',
  lg: 'px-6 py-3.5 text-base',
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
