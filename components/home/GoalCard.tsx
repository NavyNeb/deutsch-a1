'use client';
import { useProgress } from '@/lib/progress-store';
import { useSettings } from '@/lib/settings-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { dateKey } from '@/lib/progress';
import { Ring } from '@/components/ui/Ring';

export function GoalCard() {
  const { state } = useProgress();
  const { settings } = useSettings();
  const { locale } = useLocale();
  const goal = Math.max(1, settings.dailyGoal || 30);
  const xp = state.activity[dateKey(Date.now())] ?? 0;
  const reached = xp >= goal;

  return (
    <section data-testid="today-goal" className="rounded-[32px] border border-border bg-card p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
      <div className="eyebrow self-start">{t('dailyGoal', locale)}</div>
      <div className="my-6">
        <Ring value={xp / goal} size={176} stroke={12}>
          <div>
            <div className="font-display font-semibold text-[52px] leading-none tracking-[-0.02em] tabular-nums">{xp}</div>
            <div className="text-[13px] text-muted mt-1">{t('ofWord', locale)} {goal} XP</div>
          </div>
        </Ring>
      </div>
      <p className="m-0 text-[15px] leading-relaxed text-text-2 max-w-[220px]">
        {reached ? t('goalReached', locale) : `${goal - xp} ${t('xpToGo', locale)}`}
      </p>
    </section>
  );
}
