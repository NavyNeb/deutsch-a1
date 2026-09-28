'use client';
import { useProgress } from '@/lib/progress-store';
import { dateKey, addDaysKey } from '@/lib/progress';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

const WEEKS = 12;
const COLORS = [
  'var(--surface-3)',
  'color-mix(in srgb, var(--primary) 28%, var(--surface-3))',
  'color-mix(in srgb, var(--primary) 55%, transparent)',
  'color-mix(in srgb, var(--primary) 78%, transparent)',
  'var(--primary)',
];
const bucket = (xp: number) => (xp <= 0 ? 0 : xp < 15 ? 1 : xp < 30 ? 2 : xp < 60 ? 3 : 4);

export function ActivityCalendar() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const today = dateKey(Date.now());

  return (
    <div>
      <p className="label mb-2">{t('activity', locale)}</p>
      <div className="flex gap-1 overflow-x-auto pb-1">
        {Array.from({ length: WEEKS }).map((_, w) => (
          <div key={w} className="grid gap-1" style={{ gridTemplateRows: 'repeat(7, 11px)' }}>
            {Array.from({ length: 7 }).map((_, d) => {
              const daysAgo = (WEEKS - 1 - w) * 7 + (6 - d);
              const day = addDaysKey(today, -daysAgo);
              const xp = state.activity[day] ?? 0;
              return (
                <span
                  key={d}
                  title={`${day}: ${xp} XP`}
                  style={{ width: 11, height: 11, borderRadius: 3, background: COLORS[bucket(xp)] }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
