'use client';
import { useMemo, useState } from 'react';
import type { Level, Special, SpecialGroup } from '@/content/types';
import { specials as registry } from '@/content/specials';
import { GROUP_ORDER } from '@/content/specials/meta';
import { specialProgress } from '@/lib/specials-progress';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Segmented } from '@/components/ui/Segmented';
import { SpecialCard } from './SpecialCard';

const LEVEL_ORDER: Level[] = ['A1', 'A2', 'B1', 'B2'];
type Filter = 'all' | Level;

const groupRank = (g: SpecialGroup) => GROUP_ORDER.indexOf(g);

export function SpecialsHub({ items = registry }: { items?: Special[] }) {
  const { locale } = useLocale();
  const { state } = useProgress();
  const [filter, setFilter] = useState<Filter>('all');

  const levels = useMemo(
    () => LEVEL_ORDER
      .map((level) => ({
        level,
        items: items
          .filter((s) => s.special.levels[0] === level)
          .sort((a, b) => groupRank(a.special.group) - groupRank(b.special.group) || a.number - b.number),
      }))
      .filter((l) => l.items.length > 0),
    [items],
  );
  const visible = filter === 'all' ? levels : levels.filter((l) => l.level === filter);

  const options: { value: Filter; label: string }[] = [
    { value: 'all', label: t('specialsAll', locale) },
    ...levels.map((l) => ({ value: l.level as Filter, label: l.level })),
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-8 md:py-12">
      <header className="mb-6 max-w-[62ch]">
        <h1 className="font-rounded font-extrabold text-[clamp(30px,5vw,44px)] leading-[1.05] tracking-[-0.02em] text-text m-0">
          {t('specialsTitle', locale)}
        </h1>
        <p className="text-text-2 text-[17px] leading-relaxed mt-3 mb-0">{t('specialsSubtitle', locale)}</p>
      </header>

      {levels.length > 1 && (
        <div className="mb-8 overflow-x-auto -mx-1 px-1 pb-1">
          <Segmented<Filter> value={filter} options={options} onChange={setFilter} label={t('specialsLevelFilter', locale)} />
        </div>
      )}

      {visible.length === 0 && <p className="text-muted">{t('specialsEmpty', locale)}</p>}

      <div className="grid gap-10">
        {visible.map(({ level, items: list }) => (
          <section key={level} aria-labelledby={`lvl-${level}`}>
            <h2 id={`lvl-${level}`} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-rounded font-extrabold text-[22px] text-text m-0 mb-4">
              <span>{level}</span>
              <span className="text-[15px] font-bold text-muted">{t(`specialsLevel${level}`, locale)}</span>
              <span className="label tabular-nums text-muted">{list.length}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {list.map((sp) => (
                <SpecialCard key={sp.id} special={sp} progress={specialProgress(state, sp)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
