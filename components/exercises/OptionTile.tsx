import { haptics } from '@/lib/haptics';

/** One answer choice (multiple choice, listen & choose). */
export function OptionTile({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => { haptics.select(); onClick(); }}
      className={
        'w-full text-left rounded-[18px] px-5 py-4 my-1.5 border-[1.5px] font-display font-medium text-[19px] cursor-pointer ' +
        'transition-[border-color,background,transform] duration-150 active:scale-[.99] ' +
        (active ? 'border-text bg-surface-2' : 'border-border-strong bg-card hover:bg-surface-2')
      }
    >
      {children}
    </button>
  );
}
