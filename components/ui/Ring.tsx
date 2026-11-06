/** A progress ring in paper tone. `value` is 0..1 (clamped; NaN reads as 0). */
export function Ring({
  value,
  size,
  stroke = 12,
  children,
}: {
  value: number;
  size: number;
  stroke?: number;
  children?: React.ReactNode;
}) {
  const v = Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0;
  const pct = Math.round(v * 100);
  return (
    <div
      role="img"
      aria-label={`${pct}%`}
      className="relative shrink-0 rounded-full"
      style={{ width: size, height: size, background: `conic-gradient(var(--t1) 0 ${pct}%, var(--s3) 0)` }}
    >
      <div className="absolute grid place-items-center rounded-full bg-card" style={{ inset: stroke }}>
        {children}
      </div>
    </div>
  );
}
