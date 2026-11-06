'use client';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { addDaysKey, dateKey } from '@/lib/progress';

const WEEKS = 10;
const LEVEL_BG = ['var(--s3)', 'color-mix(in srgb, var(--t1) 28%, var(--s3))', 'color-mix(in srgb, var(--t1) 58%, var(--s3))', 'var(--t1)'];
const level = (xp: number) => (xp <= 0 ? 0 : xp < 15 ? 1 : xp < 30 ? 2 : 3);

export function ActivityGrid() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const today = dateKey(Date.now());
  const dow = (new Date(today).getUTCDay() + 6) % 7; // Monday = 0

  return (
    <section data-testid="today-activity" className="rounded-[24px] border border-border bg-card p-8 min-h-[300px]">
      <div className="flex items-center justify-between">
        <div className="eyebrow">{t('activity', locale)}</div>
        <div className="text-[13px] text-muted">{t('last10Weeks', locale)}</div>
      </div>
      <div className="grid gap-1.5 mt-6" style={{ gridTemplateRows: 'repeat(7, 1fr)', gridAutoFlow: 'column', gridTemplateColumns: `repeat(${WEEKS}, minmax(0, 1fr))` }}>
        {Array.from({ length: WEEKS * 7 }, (_, i) => {
          const week = Math.floor(i / 7);
          const d = i % 7;
          const daysAgo = (WEEKS - 1 - week) * 7 + (dow - d);
          if (daysAgo < 0) return <span key={i} aria-hidden="true" />;
          const day = addDaysKey(today, -daysAgo);
          const xp = state.activity[day] ?? 0;
          return <span key={i} title={`${day}: ${xp} XP`} className="aspect-square rounded-[4px]" style={{ background: LEVEL_BG[level(xp)] }} />;
        })}
      </div>
      <div className="flex items-center gap-2 mt-[18px] text-[12px] text-muted">
        {t('lessLabel', locale)}
        {LEVEL_BG.map((bg, i) => <span key={i} aria-hidden="true" className="w-3 h-3 rounded-[3px]" style={{ background: bg }} />)}
        {t('moreLabel', locale)}
      </div>
    </section>
  );
}
