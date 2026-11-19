'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Trash2 } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { sc } from '@/lib/sprechen-copy';
import { dateKey } from '@/lib/progress';
import { useExamProgress } from '@/lib/exam-progress';
import { SPEAK_EXAMS } from '@/content/sprechen/exam-formats';
import { emptySprechen, lastDays, loadSprechen, saveSprechen, speakingStreak, topWeakWords, weeklyMinutes, type SprechenStats } from '@/lib/sprechen-stats';
import { readiness, READY_DAYS, READY_MINUTES, READY_SCORE, totalMinutes } from '@/lib/sprechen-readiness';
import { deleteTake, getTake, listTakes, type Take, type TakeMeta } from '@/lib/takes-store';
import { dictSearchHref } from '@/lib/word-links';
import { Card } from '@/components/ui/Card';
import { TakePlayer } from './TakePlayer';

const GOALS = [15, 30, 60, 90];

function TakeRow({ meta, onDelete }: { meta: TakeMeta; onDelete: () => void }) {
  const { locale } = useLocale();
  const [take, setTake] = useState<Take | null>(null);
  useEffect(() => { let alive = true; void getTake(meta.id).then((t) => { if (alive && t) setTake(t); }); return () => { alive = false; }; }, [meta.id]);
  return (
    <li className="flex flex-wrap items-center gap-3 py-2.5 border-t border-border first:border-t-0">
      <div className="flex-1 min-w-[200px]">
        <p lang="de" className="m-0 font-semibold text-[15px]">{meta.label}</p>
        <p className="m-0 text-muted text-[13px]">{new Date(meta.at).toLocaleDateString(locale)} · {Math.round(meta.seconds)} s{meta.words ? ` · ${meta.wordsPerMinute} ${sc('talkWpm', locale)}` : ''}</p>
      </div>
      {take && <TakePlayer blob={take.blob} />}
      <button type="button" onClick={onDelete} aria-label={`${sc('progDelete', locale)}: ${meta.label}`} className="grid place-items-center w-9 h-9 rounded-full bg-transparent border border-border text-muted hover:text-text cursor-pointer"><Trash2 size={15} /></button>
    </li>
  );
}

export function SpeakProgress() {
  const { locale } = useLocale();
  const examProgress = useExamProgress();
  const [stats, setStats] = useState<SprechenStats>(emptySprechen);
  const [takes, setTakes] = useState<TakeMeta[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => { setStats(loadSprechen()); setHydrated(true); void listTakes().then(setTakes); }, []);

  const today = dateKey(Date.now());
  const minutes = hydrated ? weeklyMinutes(stats, today) : 0;
  const days = lastDays(stats, today, 7);
  const maxDay = Math.max(1, ...days.map((d) => d.minutes));
  const weak = topWeakWords(stats, 10);
  const scores = SPEAK_EXAMS.flatMap((e) => { const r = examProgress[`sim-${e.id}:sprechen`]; return r ? [r.best] : []; });
  const ready = readiness(stats, scores);
  const talks = takes.filter((t) => t.kind === 'talk' && t.words > 0).sort((a, b) => a.at - b.at);
  const first = talks[0];
  const latest = talks[talks.length - 1];

  const setGoal = (g: number) => { const next = { ...stats, goalMinutes: g }; setStats(next); saveSprechen(next); };
  const remove = (id: string) => { void deleteTake(id).then(() => setTakes((t) => t.filter((x) => x.id !== id))); };

  const checklist: [boolean, string][] = [
    [ready.mock, sc('progReadyMock', locale)],
    [ready.score, sc('progReadyScore', locale).replace('60%', `${READY_SCORE}%`)],
    [ready.minutes, sc('progReadyMinutes', locale).replace('60', String(READY_MINUTES))],
    [ready.days, sc('progReadyDays', locale).replace('5', String(READY_DAYS))],
  ];

  return (
    <div className="mx-auto max-w-[860px] px-5 py-8 md:py-12">
      <Link href="/speak" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text no-underline hover:underline"><ArrowLeft size={16} strokeWidth={2.4} /> {sc('backToHub', locale)}</Link>
      <h1 className="font-display font-extrabold text-[30px] md:text-[40px] m-0 mt-2 mb-5">{sc('progTitle', locale)}</h1>

      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <Card className="!p-4"><div className="font-display font-extrabold text-[34px] leading-none tabular-nums">{minutes}<span className="text-muted text-[15px] font-bold"> / {stats.goalMinutes}</span></div><div className="text-muted text-[13px] mt-1.5">{sc('progWeek', locale)} · {sc('weekMinutes', locale).split(' ')[0]}</div></Card>
        <Card className="!p-4"><div className="font-display font-extrabold text-[34px] leading-none tabular-nums">{hydrated ? speakingStreak(stats, today) : 0}</div><div className="text-muted text-[13px] mt-1.5">{sc('streakDays', locale)}</div></Card>
        <Card className="!p-4"><div className="font-display font-extrabold text-[34px] leading-none tabular-nums">{stats.bestWpm}</div><div className="text-muted text-[13px] mt-1.5">{sc('progBestWpm', locale)}</div></Card>
      </div>

      <Card className="mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <p className="label text-muted m-0">{sc('progLast7', locale)} · {totalMinutes(stats)} {sc('progTotal', locale)}</p>
          <div role="radiogroup" aria-label={sc('progGoal', locale)} className="inline-flex items-center gap-1.5">
            <span className="text-muted text-[12.5px] mr-1">{sc('progGoal', locale)}</span>
            {GOALS.map((g) => (
              <button key={g} type="button" role="radio" aria-checked={stats.goalMinutes === g} onClick={() => setGoal(g)}
                className={'rounded-full px-3 py-1 text-[13px] font-display font-bold border transition ' + (stats.goalMinutes === g ? 'bg-cta text-cta-ink border-transparent' : 'bg-card text-text-2 border-border hover:border-text')}>{g}</button>
            ))}
          </div>
        </div>
        <div className="flex items-end gap-2 h-[110px]" aria-hidden="true">
          {days.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center justify-end gap-1 h-full">
              <div className="w-full rounded-t-[8px] bg-cta" style={{ height: `${Math.round((d.minutes / maxDay) * 100)}%`, minHeight: d.minutes > 0 ? 4 : 0 }} />
              <span className="text-[11px] text-muted">{d.day.slice(8)}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-4">
        <p className="label text-muted m-0 mb-3">{sc('progReady', locale)}</p>
        <ul className="list-none m-0 p-0 grid gap-2">
          {checklist.map(([ok, label]) => (
            <li key={label} className={'flex items-center gap-2 text-[15px] ' + (ok ? 'text-[var(--ok-t)] font-semibold' : 'text-text-2')}><Check size={16} strokeWidth={3} className={ok ? '' : 'opacity-25'} />{label}</li>
          ))}
        </ul>
        <p className="label text-muted mt-5 mb-2">{sc('progExams', locale)}</p>
        <ul className="list-none m-0 p-0 grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[14.5px]">
          {SPEAK_EXAMS.map((e) => { const r = examProgress[`sim-${e.id}:sprechen`]; return <li key={e.id} className="flex justify-between gap-3"><Link href={`/speak/exam/${e.id}`} className="text-text no-underline hover:underline">{e.name}</Link><span className="text-muted tabular-nums">{r ? `${r.last}% (${r.best}%)` : sc('progNoExam', locale)}</span></li>; })}
        </ul>
      </Card>

      {weak.length > 0 && (
        <Card className="mb-4">
          <p className="label text-muted m-0 mb-1">{sc('progWeak', locale)}</p>
          <p className="text-muted text-[13px] m-0 mb-3">{sc('progWeakHint', locale)}</p>
          <p className="m-0 flex flex-wrap gap-2">{weak.map((w) => <Link key={w.word} href={dictSearchHref(w.word)} lang="de" className="rounded-full bg-surface-2 px-3 py-1.5 text-[14px] no-underline text-text hover:brightness-105">{w.word} <span className="text-muted">×{w.count}</span></Link>)}</p>
        </Card>
      )}

      {first && latest && first.id !== latest.id && (
        <Card className="mb-4">
          <p className="label text-muted m-0 mb-3">{sc('progCompare', locale)}</p>
          <div className="grid sm:grid-cols-2 gap-4 text-[14.5px]">
            {[[first, sc('progFirst', locale)], [latest, sc('progLatest', locale)]].map(([t, label]) => {
              const m = t as TakeMeta;
              return <div key={m.id}><p className="m-0 font-display font-bold">{label as string} · {new Date(m.at).toLocaleDateString(locale)}</p><p className="m-0 text-muted">{m.wordsPerMinute} {sc('talkWpm', locale)} · {m.words} {sc('talkWordsStat', locale)}</p></div>;
            })}
          </div>
        </Card>
      )}

      <Card>
        <p className="label text-muted m-0 mb-2">{sc('progTakes', locale)}</p>
        {takes.length ? <ul className="list-none m-0 p-0">{takes.map((t) => <TakeRow key={t.id} meta={t} onDelete={() => remove(t.id)} />)}</ul> : <p className="text-muted text-[14px] m-0">{sc('progNoTakes', locale)}</p>}
      </Card>
      <p className="mt-6 text-[12.5px] text-muted max-w-[70ch]">{sc('privacy', locale)}</p>
    </div>
  );
}
