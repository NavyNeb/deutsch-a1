'use client';

/** An on/off switch. A real button, so Space and Enter work; the 52×30 track sits inside a 44px hit area. */
export function Switch({ checked, onChange, label }: { checked: boolean; onChange: (value: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="shrink-0 inline-flex items-center justify-center min-h-11 min-w-[52px] bg-transparent border-0 p-0 cursor-pointer"
    >
      <span className={'relative block w-[52px] h-[30px] rounded-full transition-colors ' + (checked ? 'bg-cta' : 'bg-surface-3')}>
        <span
          className={
            'absolute top-[3px] left-[3px] w-6 h-6 rounded-full transition-transform ' +
            (checked ? 'translate-x-[22px] bg-cta-ink' : 'translate-x-0 bg-text-2')
          }
        />
      </span>
    </button>
  );
}
