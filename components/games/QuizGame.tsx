'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Volume2, Timer, Trophy, Check, X, ArrowRight, RotateCcw, Target, CalendarCheck, Flame, BookmarkPlus } from 'lucide-react';
import { vocabByLevel } from '@/content';
import { bankByLevel } from '@/content/word-bank';
import type { Level, VocabItem } from '@/content/types';
import { ttsSrc, playAudio } from '@/lib/audio';
import { buildPracticeQuestions, buildQuestions, loadBest, saveBest, summarizeRound, type Answer, type Question } from '@/lib/game';
import { SPRINT_LEVELS, buildPools, dailyWords, poolFor } from '@/lib/sprint';
import {
  dailyStreak, emptyStats, isSeen, levelProgress, loadStats, recordAnswers, recordDaily, saveStats, type SprintStats,
} from '@/lib/sprint-stats';
import { dateKey } from '@/lib/progress';
import { RoundReview } from './RoundReview';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';

const DURATION = 60;
const BONUS = 1; // seconds added per correct answer
const N = 60;
const DAILY_N = 15;

type Phase = 'ready' | 'playing' | 'over';
type RoundKind = 'normal' | 'practice' | 'daily';

const LEVEL_NAME: Record<Level, UIKey> = { A1: 'levelNameA1', A2: 'levelNameA2', B1: 'levelNameB1', B2: 'levelNameB2' };

export function QuizGame({
  mode, gradient, illustration, titleKey, taglineKey, howToKey,
}: {
  mode: 'text' | 'audio';
  gradient: string;
  illustration: string;
  titleKey: UIKey;
  taglineKey: UIKey;
  howToKey: UIKey;
}) {
  const { locale } = useLocale();
  const { state: progress, awardXp, toggleHardWord } = useProgress();

  // Every word belongs to one level (the lowest that has it): lesson vocabulary plus the word bank.
  const pools = useMemo(() => buildPools(vocabByLevel(), bankByLevel()), []);

  const [level, setLevel] = useState<Level>('A1');
  const [includeEasier, setIncludeEasier] = useState(false);
  const [stats, setStats] = useState<SprintStats>(emptyStats);
  const [hydrated, setHydrated] = useState(false);

  const [phase, setPhase] = useState<Phase>('ready');
  const [kind, setKind] = useState<RoundKind>('normal');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(DURATION);
  const [picked, setPicked] = useState<number | null>(null);
  const [best, setBest] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [newWords, setNewWords] = useState(0);
  const [saved, setSaved] = useState(false);
  const awarded = useRef(false);

  const today = dateKey(Date.now());
  const pool = useMemo(() => poolFor(pools, level, includeEasier), [pools, level, includeEasier]);
  const bestKey = `${mode}-${level}${includeEasier && level !== 'A1' ? '-mix' : ''}`;
  const fixed = kind !== 'normal'; // practice and daily rounds end when their questions run out

  useEffect(() => {
    const s = loadStats();
    setStats(s);
    if (s.level) setLevel(s.level);
    setHydrated(true);
  }, []);

  useEffect(() => { setBest(loadBest(bestKey)); }, [bestKey]);

  const q = questions[idx];

  const speak = useCallback((item: VocabItem) => playAudio(ttsSrc(item.german)), []);

  // A normal round, a practice round of the words just missed, or today's daily set.
  const start = (roundKind: RoundKind = 'normal', practiceWords?: VocabItem[]) => {
    let qs: Question[];
    if (roundKind === 'practice' && practiceWords?.length) qs = buildPracticeQuestions(pool, practiceWords);
    else if (roundKind === 'daily') qs = buildPracticeQuestions(pools[level], dailyWords(pools[level], level, today, DAILY_N));
    else { roundKind = 'normal'; qs = buildQuestions(pool, N); }
    setQuestions(qs);
    setKind(roundKind);
    setAnswers([]);
    setIdx(0); setScore(0); setTime(DURATION); setPicked(null); setSaved(false); setNewWords(0);
    awarded.current = false;
    const next = { ...stats, level };
    setStats(next); saveStats(next);
    setPhase('playing');
  };

  // Countdown
  useEffect(() => {
    if (phase !== 'playing') return;
    const h = setInterval(() => setTime((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(h);
  }, [phase]);

  // End when time runs out
  useEffect(() => {
    if (phase === 'playing' && time <= 0) {
      setPhase('over');
      if (kind === 'normal') { saveBest(bestKey, score); setBest(loadBest(bestKey)); }
      if (!awarded.current) {
        awarded.current = true;
        awardXp(score);
        setNewWords(new Set(answers.map((a) => a.question.prompt.id).filter((id) => !isSeen(stats.words[id]))).size);
        let next = recordAnswers(stats, answers);
        if (kind === 'daily') next = recordDaily(next, today, { level, score, total: answers.length });
        setStats(next); saveStats(next);
      }
    }
  }, [time, phase, score, kind, bestKey, answers, stats, today, level, awardXp]);

  // Auto-play the prompt when an audio question appears
  useEffect(() => {
    if (phase === 'playing' && mode === 'audio' && q) speak(q.prompt);
  }, [phase, mode, q, speak]);

  const choose = (i: number) => {
    if (picked !== null || !q) return;
    setPicked(i);
    const correct = i === q.answer;
    setAnswers((a) => [...a, { question: q, picked: i, correct }]);
    if (correct) { setScore((s) => s + 1); setTime((t) => Math.min(DURATION, t + BONUS)); }
    const next = idx + 1;
    setTimeout(() => {
      setPicked(null);
      if (next < questions.length) { setIdx(next); return; }
      // Out of questions: a practice or daily round ends here, a normal one reshuffles and keeps going.
      if (fixed) setTime(0);
      else { setQuestions(buildQuestions(pool, N)); setIdx(0); }
    }, correct ? 320 : 620);
  };

  const saveMissed = (items: VocabItem[]) => {
    for (const it of items) if (!progress.hardWords.includes(it.id)) toggleHardWord(it.id);
    setSaved(true);
  };

  // ---- READY ----
  if (phase === 'ready') {
    const todayRec = stats.daily[today];
    const streak = dailyStreak(stats, today);
    return (
      <Shell gradient={gradient}>
        <div className="grid md:grid-cols-[1fr_0.8fr] gap-8 items-center">
          <div>
            <h1 className="font-display font-extrabold text-[clamp(30px,5vw,44px)] leading-[1.05] tracking-[-0.02em] text-text m-0">
              {t(titleKey, locale)}
            </h1>
            <p className="text-text-2 text-[17px] leading-relaxed mt-4 mb-2 max-w-[46ch]">{t(taglineKey, locale)}</p>
            <p className="text-muted text-[14px] leading-relaxed mb-0 max-w-[48ch]">{t(howToKey, locale)}</p>
          </div>
          <GameArt src={illustration} />
        </div>

        <section className="mt-9" aria-label={t('chooseLevel', locale)}>
          <h2 className="label text-muted m-0 mb-3">{t('chooseLevel', locale)}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" role="radiogroup" aria-label={t('chooseLevel', locale)}>
            {SPRINT_LEVELS.map((l) => {
              const ids = pools[l].map((v) => v.id);
              const p = levelProgress(stats, ids);
              const on = l === level;
              return (
                <button
                  key={l} type="button" role="radio" aria-checked={on} onClick={() => setLevel(l)}
                  className={'text-left rounded-[18px] border-2 p-4 transition-[border-color,transform] hover:-translate-y-0.5 ' + (on ? 'border-text bg-card shadow-card' : 'border-border bg-card/60')}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display font-extrabold text-[26px] leading-none text-text">{l}</span>
                    <span className="text-[12px] text-muted">{p.total} {t('wordsInLevel', locale)}</span>
                  </div>
                  <div className="text-[13.5px] text-text-2 mt-1">{t(LEVEL_NAME[l], locale)}</div>
                  <div className="h-1.5 rounded-full bg-surface-3 overflow-hidden mt-3">
                    <div className="h-full rounded-full bg-text" style={{ width: `${hydrated && p.total ? Math.round((p.seen / p.total) * 100) : 0}%` }} />
                  </div>
                  <div className="text-[12px] text-muted mt-1.5 tabular-nums">
                    {hydrated ? p.seen : 0} {t('wordsMetOf', locale)} · {hydrated ? p.mastered : 0} {t('wordsMasteredLabel', locale)}
                  </div>
                </button>
              );
            })}
          </div>

          {level !== 'A1' && (
            <label className="mt-4 inline-flex items-center gap-2.5 text-[14px] text-text-2 cursor-pointer select-none">
              <input type="checkbox" checked={includeEasier} onChange={(e) => setIncludeEasier(e.target.checked)} className="w-4 h-4 accent-[var(--text)]" />
              {t('includeEasier', locale)}
            </label>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-6">
            <button onClick={() => start()} className="inline-flex items-center justify-center gap-2 font-display font-bold text-[15px] text-cta-ink bg-cta rounded-full px-6 py-3.5  hover:brightness-105 active:scale-[.98] transition">
              {t('startGame', locale)} · {level} <ArrowRight size={17} strokeWidth={2.5} />
            </button>
            {best > 0 && (
              <span className="inline-flex items-center gap-1.5 label text-muted">
                <Trophy size={15} className="text-ember-text" /> {t('best', locale)} {best}
              </span>
            )}
          </div>

          <div data-testid="sprint-daily" className="mt-8 rounded-[20px] border border-border bg-card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="grid place-items-center shrink-0 w-11 h-11 rounded-full bg-surface-2 text-text"><CalendarCheck size={22} strokeWidth={2.2} /></span>
            <div className="flex-1 min-w-0">
              <div className="font-display font-extrabold text-[17px] text-text">{t('dailyChallenge', locale)} · {level}</div>
              <p className="text-muted text-[13.5px] m-0 mt-0.5">{t('dailyChallengeHint', locale)}</p>
              {hydrated && (todayRec || streak > 0) && (
                <p className="text-[13px] text-text-2 m-0 mt-1.5 inline-flex items-center gap-3">
                  {todayRec && <span className="inline-flex items-center gap-1"><Check size={14} strokeWidth={3} className="text-[var(--ok-t)]" /> {t('dailyDoneToday', locale)} · {todayRec.level} {todayRec.score}/{todayRec.total}</span>}
                  {streak > 0 && <span className="inline-flex items-center gap-1"><Flame size={14} className="text-ember-text" /> {streak} {t('dailyStreakDays', locale)}</span>}
                </p>
              )}
            </div>
            <button onClick={() => start('daily')} className="inline-flex items-center justify-center gap-2 font-display font-bold text-[14px] text-text bg-surface-2 rounded-full px-5 py-3 hover:brightness-105 active:scale-[.98] transition shrink-0">
              {t('playNow', locale)} <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </section>
      </Shell>
    );
  }

  // ---- OVER ----
  if (phase === 'over') {
    const isBest = kind === 'normal' && score >= best && score > 0;
    const summary = summarizeRound(answers);
    const missedItems = summary.missed.map((m) => m.item);
    return (
      <Shell gradient={gradient}>
        <div className="max-w-[620px] mx-auto text-center">
          <GameArt src={illustration} small />
          {kind === 'practice' && <p className="font-display font-extrabold text-text text-[15px] tracking-wide uppercase mt-4 mb-1">{t('practiceRound', locale)}</p>}
          {kind === 'daily' && <p className="font-display font-extrabold text-text text-[15px] tracking-wide uppercase mt-4 mb-1">{t('dailyRound', locale)} · {level}</p>}
          {isBest && <p className="font-display font-extrabold text-ember-text text-[15px] tracking-wide uppercase mt-4 mb-1">🏆 {t('newBest', locale)}</p>}
          <p className="label text-muted mt-2">{t('yourScore', locale)}</p>
          <div className="font-display font-extrabold text-[64px] leading-none text-text tabular-nums my-1">{score}</div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mt-3 mb-8 text-[14px] text-muted">
            <span className="inline-flex items-center gap-1.5"><Trophy size={15} className="text-ember-text" /> {t('best', locale)} {Math.max(best, kind === 'normal' ? score : 0)}</span>
            <span className="inline-flex items-center gap-1.5">+{score} {t('xpEarned', locale)}</span>
            {newWords > 0 && <span className="inline-flex items-center gap-1.5">{newWords} {t('newWordsThisRound', locale)}</span>}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {summary.missed.length > 0 && (
              <button onClick={() => start('practice', missedItems)} className="inline-flex items-center gap-2 font-display font-bold text-[15px] text-cta-ink bg-cta rounded-full px-6 py-3.5  hover:brightness-105 active:scale-[.98] transition">
                <Target size={16} strokeWidth={2.5} /> {t('practiceMissed', locale)} ({summary.missed.length})
              </button>
            )}
            <button onClick={() => start()} className={summary.missed.length > 0
              ? 'inline-flex items-center gap-2 font-display font-bold text-[15px] text-text bg-surface-2 rounded-full px-6 py-3.5 hover:brightness-105 active:scale-[.98] transition'
              : 'inline-flex items-center gap-2 font-display font-bold text-[15px] text-cta-ink bg-cta rounded-full px-6 py-3.5  hover:brightness-105 active:scale-[.98] transition'}>
              <RotateCcw size={16} strokeWidth={2.5} /> {t('playAgain', locale)}
            </button>
            <button onClick={() => setPhase('ready')} className="font-display font-bold text-[15px] text-text bg-transparent border-none cursor-pointer hover:underline px-2 py-3">
              {t('levelLabel', locale)}: {level}
            </button>
            <Link href="/games" className="font-display font-bold text-[15px] text-text no-underline hover:text-text transition px-2 py-3">
              {t('backToGames', locale)}
            </Link>
          </div>
          {summary.missed.length > 0 && (
            <button
              type="button" onClick={() => saveMissed(missedItems)} disabled={saved}
              className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold text-text-2 bg-transparent border-none cursor-pointer hover:underline disabled:cursor-default disabled:no-underline disabled:text-[var(--ok-t)]"
            >
              {saved ? <Check size={15} strokeWidth={3} /> : <BookmarkPlus size={15} strokeWidth={2.4} />}
              {saved ? t('savedToDeck', locale) : t('saveMissedToDeck', locale)}
            </button>
          )}
          <RoundReview summary={summary} />
        </div>
      </Shell>
    );
  }

  // ---- PLAYING ----
  const timePct = time / DURATION;
  return (
    <Shell gradient={gradient}>
      {/* HUD */}
      <div className="flex items-center gap-4 mb-6">
        <div className="inline-flex items-center gap-2 font-display font-extrabold text-[18px] tabular-nums text-text">
          <Timer size={18} className={time <= 10 ? 'text-ember-text' : 'text-text'} strokeWidth={2.4} />
          <span className={time <= 10 ? 'text-ember-text' : ''}>{time}s</span>
        </div>
        <div className="flex-1 h-2.5 rounded-full bg-surface-3 overflow-hidden">
          <div className="h-full rounded-full transition-[width] duration-1000 ease-linear"
            style={{ width: `${timePct * 100}%`, background: time <= 10 ? 'var(--ember)' : 'linear-gradient(90deg,var(--t1),var(--t1))' }} />
        </div>
        <span className="label text-muted">{level}</span>
        <div className="inline-flex items-center gap-1.5 font-display font-extrabold text-[18px] tabular-nums text-text">
          <span className="text-ember-text">★</span> {score}
        </div>
      </div>

      {/* Prompt */}
      <div className="bg-card border border-border rounded-[24px] shadow-card p-8 md:p-10 text-center mb-5">
        {mode === 'audio' ? (
          <button onClick={() => q && speak(q.prompt)} aria-label={t('replayAudio', locale)}
            className="grid place-items-center w-20 h-20 mx-auto rounded-full bg-cta text-cta-ink  hover:brightness-105 active:scale-95 transition">
            <Volume2 size={34} strokeWidth={2.2} />
          </button>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <span className="font-display font-extrabold text-[clamp(30px,6vw,52px)] leading-tight text-text">{q?.prompt.german}</span>
            <button onClick={() => q && speak(q.prompt)} aria-label={t('replayAudio', locale)}
              className="grid place-items-center shrink-0 w-11 h-11 rounded-full bg-surface-2 text-text hover:brightness-105 active:scale-90 transition">
              <Volume2 size={19} strokeWidth={2.3} />
            </button>
          </div>
        )}
        {mode === 'audio' && <p className="label text-muted mt-4">{t('tapWhatYouHear', locale)}</p>}
      </div>

      {/* Choices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q?.choices.map((choice, i) => {
          const label = mode === 'audio' ? choice.german : pick(choice.english, choice.french, locale);
          const isAnswer = i === q.answer;
          const isPicked = picked === i;
          let cls = 'bg-card border-border hover:border-text hover:-translate-y-0.5';
          if (picked !== null) {
            if (isAnswer) cls = 'bg-[var(--ok-wash)] border-[var(--ok)] text-[var(--ok-t)]';
            else if (isPicked) cls = 'bg-[var(--ember-wash)] border-[var(--ember)] text-[var(--ember-t)]';
            else cls = 'bg-card border-border opacity-55';
          }
          return (
            <button key={choice.id + i} onClick={() => choose(i)} disabled={picked !== null}
              className={'relative flex items-center gap-3 rounded-[16px] border-2 shadow-card px-5 py-4 text-left font-display font-bold text-[17px] text-text transition-[transform,border-color,background-color] ' + cls}>
              <span className="flex-1">{label}</span>
              {picked !== null && isAnswer && <Check size={19} strokeWidth={3} />}
              {picked !== null && isPicked && !isAnswer && <X size={19} strokeWidth={3} />}
            </button>
          );
        })}
      </div>
    </Shell>
  );
}

function Shell({ gradient, children }: { gradient: string; children: React.ReactNode }) {
  return (
    <div data-kumpel="game" className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[260px] opacity-[0.10] pointer-events-none"
        style={{ background: gradient, maskImage: 'linear-gradient(to bottom, #000 40%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, #000 40%, transparent)' }}
      />
      <div className="relative mx-auto max-w-[760px] px-5 py-6 md:py-12">{children}</div>
    </div>
  );
}

function GameArt({ src, small }: { src: string; small?: boolean }) {
  return (
    <div className={'relative mx-auto ' + (small ? 'w-[150px]' : 'w-full max-w-[200px] sm:max-w-[280px]')}>
      <div className="absolute inset-[8%] rounded-[46%_54%_58%_42%/48%_44%_56%_52%] bg-[radial-gradient(120%_120%_at_60%_30%,var(--s3),var(--s2)_60%,transparent_80%)]" />
      <img src={src} alt="" className="relative w-full block select-none pointer-events-none drop-shadow-[0_14px_22px_rgba(0,0,0,0.14)]" draggable={false} />
    </div>
  );
}
