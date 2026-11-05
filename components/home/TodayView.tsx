'use client';
import { useProgress } from '@/lib/progress-store';
import { useUser } from '@/lib/useUser';
import { dateKey } from '@/lib/progress';
import { NextUpCard } from './NextUpCard';
import { GoalCard } from './GoalCard';
import { DueCard } from './DueCard';
import { WordOfDayCard } from './WordOfDayCard';
import { ActivityGrid } from './ActivityGrid';
import { QuickPractice } from './QuickPractice';

export function dayPart(hour: number): 'Guten Morgen' | 'Guten Tag' | 'Guten Abend' {
  if (hour >= 5 && hour < 11) return 'Guten Morgen';
  if (hour >= 11 && hour < 17) return 'Guten Tag';
  return 'Guten Abend';
}

const WEEKDAYS = ['M', 'D', 'M', 'D', 'F', 'S', 'S']; // Mo Di Mi Do Fr Sa So

export function TodayView() {
  const { state } = useProgress();
  const user = useUser();
  const now = new Date();
  const raw = user?.email?.split('@')[0];
  const name = raw ? raw.charAt(0).toUpperCase() + raw.slice(1) : null;
  const dateLine = new Intl.DateTimeFormat('de-DE', { weekday: 'long', day: 'numeric', month: 'long' }).format(now).replace(', ', ' · ');

  const dow = (new Date(dateKey(now.getTime())).getUTCDay() + 6) % 7;
  const week = WEEKDAYS.map((label, i) => {
    const xp = state.activity[dateKey(now.getTime() + (i - dow) * 86_400_000)] ?? 0;
    return { label, on: xp > 0 && i !== dow, today: i === dow, key: i };
  });

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 md:px-14 md:py-12">
      <header className="flex flex-wrap items-end justify-between gap-6 mb-9">
        <div>
          <div className="eyebrow mb-4">{dateLine}</div>
          <h1 className="font-display font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.03em] m-0">
            {dayPart(now.getHours())}{name ? `, ${name}` : ''}.
          </h1>
        </div>
        <div className="flex gap-2" role="img" aria-label="This week">
          {week.map((d) => (
            <span
              key={d.key}
              className={
                'grid place-items-center w-[34px] h-[34px] rounded-lg text-[12px] font-semibold ' +
                (d.today ? 'border-[1.5px] border-dashed border-text-2 text-text' : d.on ? 'bg-text text-bg' : 'bg-surface-2 text-muted')
              }
            >
              {d.label}
            </span>
          ))}
        </div>
      </header>

      <div className="flex flex-wrap gap-5 mb-5">
        <div className="flex-[2_1_560px] min-w-0"><NextUpCard /></div>
        <div className="flex-[1_1_280px] min-w-0"><GoalCard /></div>
      </div>

      <div className="flex flex-wrap gap-5 mb-5">
        <div className="flex-[1_1_300px] min-w-0"><DueCard /></div>
        <div className="flex-[1_1_300px] min-w-0"><WordOfDayCard /></div>
        <div className="flex-[1_1_300px] min-w-0"><ActivityGrid /></div>
      </div>

      <div className="eyebrow mt-9 mb-4">Schnell üben</div>
      <QuickPractice />
    </div>
  );
}
