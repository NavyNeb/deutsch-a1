'use client';
import type { Level } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

export type LevelSummary = { level: Level; done: number; total: number };

const HEIGHTS = [84, 132, 180, 228];

/** A1 → B2 as a rising staircase. Progress fills each step from the bottom in paper tone. */
export function Staircase({ levels, selected, onSelect }: { levels: LevelSummary[]; selected: Level; onSelect: (l: Level) => void }) {
  const { locale } = useLocale();
  return (
    <div role="group" aria-label={t('groupLevels', locale)} className="flex items-end gap-2.5 h-[230px] mb-11">
      {levels.map((lv, i) => {
        const empty = lv.total === 0;
        const on = selected === lv.level;
        const fraction = lv.total ? lv.done / lv.total : 0;
        return (
          <button
            key={lv.level}
            type="button"
            data-level={lv.level}
            disabled={empty}
            aria-pressed={on}
            onClick={() => onSelect(lv.level)}
            style={{ height: HEIGHTS[i] }}
            className={
              'relative flex-1 min-w-0 overflow-hidden text-left rounded-t-2xl border border-b-0 p-0 transition-colors ' +
              (empty ? 'border-dashed border-border-strong bg-transparent cursor-not-allowed' : on ? 'bg-surface-2 border-border-strong cursor-pointer' : 'bg-card border-border cursor-pointer hover:bg-surface-2')
            }
          >
            {!empty && fraction > 0 && <span aria-hidden="true" data-fill className="absolute inset-x-0 bottom-0 bg-text/15 border-t-2 border-text" style={{ height: `${Math.round(fraction * 100)}%` }} />}
            <span className="absolute left-5 top-4 block z-10">
              <span className={'block font-display font-bold text-[32px] leading-none ' + (on ? 'text-text' : empty ? 'text-muted' : 'text-text-2')}>{lv.level}</span>
              <span className="block text-[12px] text-text-2 mt-1">{empty ? t('comingSoon', locale) : `${lv.done} / ${lv.total}`}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
