'use client';
import { useMemo, useState } from 'react';
import type { Special, SpecialGroup } from '@/content/types';
import { specials as registry } from '@/content/specials';
import { GROUP_ORDER, GROUP_LABEL } from '@/content/specials/meta';
import { specialProgress } from '@/lib/specials-progress';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { Segmented } from '@/components/ui/Segmented';
import { SpecialCard } from './SpecialCard';

type Filter = 'all' | SpecialGroup;

export function SpecialsHub({ items = registry }: { items?: Special[] }) {
  const { locale } = useLocale();
  const { state } = useProgress();
  const [filter, setFilter] = useState<Filter>('all');

  const groups = useMemo(
    () => GROUP_ORDER
      .map((group) => ({ group, items: items.filter((s) => s.special.group === group) }))
      .filter((g) => g.items.length > 0),
    [items],
  );
  const visible = filter === 'all' ? groups : groups.filter((g) => g.group === filter);

  const options: { value: Filter; label: string }[] = [
    { value: 'all', label: t('specialsAll', locale) },
    ...groups.map((g) => ({ value: g.group as Filter, label: pick(GROUP_LABEL[g.group].en, GROUP_LABEL[g.group].fr, locale) })),
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-8 md:py-12">
      <header className="mb-6 max-w-[62ch]">
        <h1 className="font-rounded font-extrabold text-[clamp(30px,5vw,44px)] leading-[1.05] tracking-[-0.02em] text-text m-0">
          {t('specialsTitle', locale)}
        </h1>
        <p className="text-text-2 text-[17px] leading-relaxed mt-3 mb-0">{t('specialsSubtitle', locale)}</p>
      </header>

      {groups.length > 1 && (
        <div className="mb-8 overflow-x-auto -mx-1 px-1 pb-1">
          <Segmented<Filter> value={filter} options={options} onChange={setFilter} label={t('specialsGroupFilter', locale)} />
        </div>
      )}

      {visible.length === 0 && <p className="text-muted">{t('specialsEmpty', locale)}</p>}

      <div className="grid gap-10">
        {visible.map(({ group, items: list }) => (
          <section key={group} aria-labelledby={`grp-${group}`}>
            <h2 id={`grp-${group}`} className="font-rounded font-extrabold text-[22px] text-text m-0 mb-4">
              {pick(GROUP_LABEL[group].en, GROUP_LABEL[group].fr, locale)}
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
