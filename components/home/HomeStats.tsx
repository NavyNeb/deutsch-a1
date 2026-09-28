'use client';
import { Flame } from 'lucide-react';
import { useProgress } from '@/lib/progress-store';
import { useSettings } from '@/lib/settings-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { currentStreak, dateKey, levelProgress } from '@/lib/progress';

const R = 18;
const C = 2 * Math.PI * R;

export function HomeStats() {
  const { state } = useProgress();
  const { settings } = useSettings();
  const { locale } = useLocale();
  const today = dateKey(Date.now());
  const streak = currentStreak(state, today);
  const xpToday = state.activity[today] ?? 0;
  const goalPct = Math.min(1, xpToday / settings.dailyGoal);
  const { level, into, span } = levelProgress(state.xp);

  return (
    <div className="grid grid-cols-3 gap-3 mb-8">
      {/* Streak */}
      <div className="bg-card border border-border rounded-[18px] shadow-card p-4 flex flex-col items-center justify-center text-center">
        <Flame className="text-[var(--amber)]" size={22} fill="currentColor" aria-hidden="true" />
        <div className="font-rounded font-extrabold text-[24px] tabular-nums mt-1">{streak}</div>
        <div className="label text-muted">{t('dayStreak', locale)}</div>
      </div>

      {/* Daily goal ring */}
      <div className="bg-card border border-border rounded-[18px] shadow-card p-4 flex flex-col items-center justify-center text-center">
        <svg width={48} height={48} viewBox="0 0 48 48" aria-hidden="true">
          <circle cx={24} cy={24} r={R} fill="none" stroke="var(--surface-3)" strokeWidth={5} />
          <circle
            cx={24} cy={24} r={R} fill="none" stroke="var(--primary)" strokeWidth={5} strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={C * (1 - goalPct)} transform="rotate(-90 24 24)"
            style={{ transition: 'stroke-dashoffset .5s cubic-bezier(.2,.7,.2,1)' }}
          />
          <text x={24} y={28} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text)" fontFamily="var(--font-rounded)">
            {xpToday}
          </text>
        </svg>
        <div className="label text-muted mt-1">{t('dailyGoal', locale)}</div>
      </div>

      {/* Level + XP bar */}
      <div className="bg-card border border-border rounded-[18px] shadow-card p-4 flex flex-col items-center justify-center text-center">
        <div className="font-rounded font-extrabold text-[24px] tabular-nums text-primary">{level}</div>
        <div className="w-full h-1.5 bg-surface-3 rounded-full overflow-hidden mt-1.5 mb-1">
          <div
            className="h-full rounded-full"
            style={{
              width: `${span ? Math.round((into / span) * 100) : 0}%`,
              background: 'linear-gradient(90deg, var(--primary), var(--primary-2))',
              transition: 'width .5s cubic-bezier(.2,.7,.2,1)',
            }}
          />
        </div>
        <div className="label text-muted">{t('level', locale)}</div>
      </div>
    </div>
  );
}
