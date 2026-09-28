type Props = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
  interactive?: boolean;
};

export function Card({ children, className = '', padded = true, interactive = false }: Props) {
  return (
    <div
      className={
        'bg-card border border-border rounded-[18px] shadow-card ' +
        (padded ? 'p-6 ' : '') +
        (interactive
          ? 'transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-0.5 hover:shadow-pop hover:border-border-strong '
          : '') +
        className
      }
    >
      {children}
    </div>
  );
}
