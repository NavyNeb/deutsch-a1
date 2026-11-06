/** Step progress as a row of small ticks (the lesson progress language). */
export function ProgressTicks({
  total,
  done,
  current = false,
  label,
  className = '',
}: {
  total: number;
  done: number;
  current?: boolean;
  label?: string;
  className?: string;
}) {
  const t = Math.max(0, Math.floor(total) || 0);
  const d = Math.max(0, Math.min(t, Math.floor(done) || 0));
  return (
    <div role="img" aria-label={label ?? `${d} / ${t}`} className={`flex gap-[3px] ${className}`}>
      {Array.from({ length: t }, (_, i) => {
        const on = i < d;
        const now = current && i === d;
        return (
          <i
            key={i}
            data-tick
            data-on={on}
            data-current={now}
            className="flex-1 h-2 rounded-[2px]"
            style={{ background: on || now ? 'var(--t1)' : 'var(--s3)', opacity: now ? 0.5 : 1 }}
          />
        );
      })}
    </div>
  );
}
