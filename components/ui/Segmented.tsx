'use client';

export function Segmented<T extends string>({ value, options, onChange, label }: {
  value: T; options: { value: T; label: string }[]; onChange: (v: T) => void; label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex rounded-full border border-border bg-card p-1 gap-1">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={o.value === value}
          onClick={() => onChange(o.value)}
          className={
            'rounded-full px-4 py-2 font-rounded font-bold text-[14px] transition ' +
            (o.value === value ? 'bg-primary text-primary-ink shadow-primary' : 'text-text-2 hover:bg-surface-2')
          }
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
