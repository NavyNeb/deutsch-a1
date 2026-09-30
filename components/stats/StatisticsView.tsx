'use client';
import { useMemo } from 'react';
import { Flame, Zap, GraduationCap, Star, Target, Trophy } from 'lucide-react';
import { lessons } from '@/content';
import type { Level } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import {
  currentStreak, dateKey, addDaysKey, levelProgress, lessonCompletion,
} from '@/lib/progress';

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];
const LEVEL_NAME: Record<Level, { en: string; fr: string }> = {
  A1: { en: 'Beginner', fr: 'Débutant' },
  A2: { en: 'Elementary', fr: 'Élémentaire' },
  B1: { en: 'Intermediate', fr: 'Intermédiaire' },
  B2: { en: 'Upper intermediate', fr: 'Intermédiaire sup.' },
};
const WEEKS = 12;

function cellColor(xp: number): string {
  if (xp <= 0) return 'var(--surface-3)';
  if (xp < 10) return 'color-mix(in srgb, var(--primary) 28%, var(--surface-3))';
  if (xp < 20) return 'color-mix(in srgb, var(--primary) 52%, var(--surface-3))';
  if (xp < 40) return 'color-mix(in srgb, var(--primary) 76%, transparent)';
  return 'var(--primary)';
}

export function StatisticsView() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const fr = locale === 'fr';
  const today = dateKey(Date.now());

  const { level, into, span, nextAt } = levelProgress(state.xp);
  const streak = currentStreak(state, today);
  const lessonsDone = lessons.filter((l) => lessonCompletion(state, l) >= 1).length;

  const accuracy = useMemo(() => {
    let total = 0, correct = 0;
    for (const l of Object.values(state.lessons)) {
      for (const v of Object.values(l.exercises)) { total++; if (v) correct++; }
    }
    return total ? Math.round((correct / total) * 100) : null;
  }, [state.lessons]);

  // 84-day activity grid (columns = weeks, rows = weekdays)
  const days = useMemo(() => {
    const n = WEEKS * 7;
    return Array.from({ length: n }, (_, i) => {
      const key = addDaysKey(today, i - (n - 1));
      return { key, xp: state.activity[key] ?? 0 };
    });
  }, [state.activity, today]);

  const cards = [
    { icon: <Zap size={20} className="text-primary" fill="currentColor" strokeWidth={0} />, value: level, label: t('currentLevel', locale), sub: `${into}/${span} XP` },
    { icon: <Flame size={20} className="text-amber" fill="currentColor" />, value: streak, label: t('dayStreak', locale) },
    { icon: <Star size={20} className="text-amber" fill="currentColor" />, value: state.xp, label: t('totalXp', locale) },
    { icon: <GraduationCap size={20} className="text-primary" />, value: lessonsDone, label: t('lessonsDone', locale) },
    { icon: <Trophy size={20} className="text-amber" />, value: state.hardWords.length, label: t('wordsSaved', locale) },
    { icon: <Target size={20} className="text-primary" />, value: accuracy === null ? '—' : `${accuracy}%`, label: t('accuracy', locale) },
  ];

  return (
    <div className="mx-auto max-w-[1000px] px-5 py-8">
      {/* Header */}
      <div className="flex items-end justify-between gap-6 mb-7">
        <div>
          <h1 className="font-rounded font-extrabold text-[clamp(28px,4.4vw,40px)] leading-tight tracking-[-0.02em] text-text m-0">{t('statsTitle', locale)}</h1>
          <p className="text-text-2 text-[16px] mt-2 mb-0 max-w-[46ch]">{t('statsSubtitle', locale)}</p>
        </div>
        <img src="/illustrations/greeter.png" alt="" className="hidden sm:block w-[120px] shrink-0 drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] select-none pointer-events-none" draggable={false} />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 mb-8">
        {cards.map((c) => (
          <div key={c.label} className="bg-card border border-border rounded-[18px] shadow-card p-4">
            <div className="flex items-center gap-2">{c.icon}<span className="label text-muted">{c.label}</span></div>
            <div className="font-rounded font-extrabold text-[30px] leading-none text-text tabular-nums mt-2">{c.value}</div>
            {c.sub && <div className="text-[12px] text-muted mt-1">{c.sub}</div>}
          </div>
        ))}
      </div>

      {/* Level progress bar */}
      <div className="bg-card border border-border rounded-[20px] shadow-card p-5 mb-8">
        <div className="flex items-center justify-between mb-2.5">
          <span className="font-rounded font-bold text-[15px] text-text">{t('currentLevel', locale)} {level}</span>
          <span className="label text-muted tabular-nums">{nextAt - state.xp} {t('xpToNext', locale)}</span>
        </div>
        <div className="h-2.5 rounded-full bg-surface-3 overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${span ? Math.round((into / span) * 100) : 0}%`, background: 'linear-gradient(90deg,var(--primary),var(--primary-2))', transition: 'width .5s cubic-bezier(.2,.7,.2,1)' }} />
        </div>
      </div>

      {/* Activity heatmap */}
      <div className="bg-card border border-border rounded-[20px] shadow-card p-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-rounded font-extrabold text-[17px] text-text m-0">{t('activityHeading', locale)}</h2>
          <span className="label text-muted">{t('last12Weeks', locale)}</span>
        </div>
        {state.xp === 0 ? (
          <p className="text-muted text-sm m-0 py-2">{t('noActivityYet', locale)}</p>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex gap-1 w-max">
              {Array.from({ length: WEEKS }, (_, w) => (
                <div key={w} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }, (_, d) => {
                    const cell = days[w * 7 + d];
                    return (
                      <span key={d} title={`${cell.key}: ${cell.xp} XP`}
                        className="w-3.5 h-3.5 rounded-[4px]" style={{ background: cellColor(cell.xp) }} />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Progress by level */}
      <div className="bg-card border border-border rounded-[20px] shadow-card p-5">
        <h2 className="font-rounded font-extrabold text-[17px] text-text m-0 mb-4">{t('byLevelHeading', locale)}</h2>
        <div className="grid gap-4">
          {LEVELS.map((lv) => {
            const ll = lessons.filter((l) => l.level === lv);
            if (ll.length === 0) return null;
            const done = ll.filter((l) => lessonCompletion(state, l) >= 1).length;
            const pct = Math.round((done / ll.length) * 100);
            return (
              <div key={lv}>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="font-rounded font-extrabold text-[12px] text-primary-ink bg-primary rounded-[8px] px-2 py-0.5">{lv}</span>
                  <span className="font-rounded font-semibold text-[14px] text-text">{LEVEL_NAME[lv][fr ? 'fr' : 'en']}</span>
                  <span className="label text-muted ml-auto tabular-nums">{done}/{ll.length}</span>
                </div>
                <div className="h-2 rounded-full bg-surface-3 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg,var(--primary),var(--primary-2))' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
