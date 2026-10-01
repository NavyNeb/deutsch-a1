'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Volume2, Timer, Trophy, Check, X, ArrowRight, RotateCcw, Target } from 'lucide-react';
import { allVocab } from '@/content';
import type { VocabItem } from '@/content/types';
import { ttsSrc, playAudio } from '@/lib/audio';
import { buildPracticeQuestions, buildQuestions, loadBest, saveBest, summarizeRound, type Answer, type Question } from '@/lib/game';
import { RoundReview } from './RoundReview';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';

const DURATION = 60;
const BONUS = 1; // seconds added per correct answer
const N = 60;

type Phase = 'ready' | 'playing' | 'over';

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
  const { awardXp } = useProgress();

  const pool = useMemo(() => {
    const seen = new Set<string>();
    return allVocab().filter((v) => (seen.has(v.german) ? false : (seen.add(v.german), true)));
  }, []);

  const [phase, setPhase] = useState<Phase>('ready');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(DURATION);
  const [picked, setPicked] = useState<number | null>(null);
  const [best, setBest] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [practice, setPractice] = useState(false);
  const awarded = useRef(false);

  useEffect(() => { setBest(loadBest(mode)); }, [mode]);

  const q = questions[idx];

  const speak = useCallback((item: VocabItem) => playAudio(ttsSrc(item.german)), []);

  // A normal round, or — given the words just missed — a practice round of only those.
  const start = (practiceWords?: VocabItem[]) => {
    const isPractice = !!practiceWords?.length;
    setQuestions(isPractice ? buildPracticeQuestions(pool, practiceWords) : buildQuestions(pool, N));
    setPractice(isPractice);
    setAnswers([]);
    setIdx(0); setScore(0); setTime(DURATION); setPicked(null);
    awarded.current = false;
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
      if (!practice) { saveBest(mode, score); setBest(loadBest(mode)); }
      if (!awarded.current) { awarded.current = true; awardXp(score); }
    }
  }, [time, phase, score, mode, practice, awardXp]);

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
      // Out of questions: a practice round ends here, a normal one reshuffles and keeps going.
      if (practice) setTime(0);
      else { setQuestions(buildQuestions(pool, N)); setIdx(0); }
    }, correct ? 320 : 620);
  };

  // ---- READY ----
  if (phase === 'ready') {
    return (
      <Shell gradient={gradient}>
        <div className="grid md:grid-cols-[1fr_0.8fr] gap-8 items-center">
          <div>
            <h1 className="font-rounded font-extrabold text-[clamp(30px,5vw,44px)] leading-[1.05] tracking-[-0.02em] text-text m-0">
              {t(titleKey, locale)}
            </h1>
            <p className="text-text-2 text-[17px] leading-relaxed mt-4 mb-2 max-w-[46ch]">{t(taglineKey, locale)}</p>
            <p className="text-muted text-[14px] leading-relaxed mb-7 max-w-[48ch]">{t(howToKey, locale)}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <button onClick={() => start()} className="inline-flex items-center justify-center gap-2 font-rounded font-bold text-[15px] text-primary-ink bg-primary rounded-full px-6 py-3.5 shadow-primary hover:brightness-105 active:scale-[.98] transition">
                {t('startGame', locale)} <ArrowRight size={17} strokeWidth={2.5} />
              </button>
              {best > 0 && (
                <span className="inline-flex items-center gap-1.5 label text-muted">
                  <Trophy size={15} className="text-amber" /> {t('best', locale)} {best}
                </span>
              )}
            </div>
          </div>
          <GameArt src={illustration} />
        </div>
      </Shell>
    );
  }

  // ---- OVER ----
  if (phase === 'over') {
    const isBest = !practice && score >= best && score > 0;
    const summary = summarizeRound(answers);
    return (
      <Shell gradient={gradient}>
        <div className="max-w-[620px] mx-auto text-center">
          <GameArt src={illustration} small />
          {practice && <p className="font-rounded font-extrabold text-primary text-[15px] tracking-wide uppercase mt-4 mb-1">{t('practiceRound', locale)}</p>}
          {isBest && <p className="font-rounded font-extrabold text-amber text-[15px] tracking-wide uppercase mt-4 mb-1">🏆 {t('newBest', locale)}</p>}
          <p className="label text-muted mt-2">{t('yourScore', locale)}</p>
          <div className="font-rounded font-extrabold text-[64px] leading-none text-text tabular-nums my-1">{score}</div>
          <div className="flex items-center justify-center gap-6 mt-3 mb-8 text-[14px] text-muted">
            <span className="inline-flex items-center gap-1.5"><Trophy size={15} className="text-amber" /> {t('best', locale)} {Math.max(best, score)}</span>
            <span className="inline-flex items-center gap-1.5">+{score} {t('xpEarned', locale)}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {summary.missed.length > 0 && (
              <button onClick={() => start(summary.missed.map((m) => m.item))} className="inline-flex items-center gap-2 font-rounded font-bold text-[15px] text-primary-ink bg-primary rounded-full px-6 py-3.5 shadow-primary hover:brightness-105 active:scale-[.98] transition">
                <Target size={16} strokeWidth={2.5} /> {t('practiceMissed', locale)} ({summary.missed.length})
              </button>
            )}
            <button onClick={() => start()} className={summary.missed.length > 0
              ? 'inline-flex items-center gap-2 font-rounded font-bold text-[15px] text-primary bg-[var(--primary-wash)] rounded-full px-6 py-3.5 hover:brightness-105 active:scale-[.98] transition'
              : 'inline-flex items-center gap-2 font-rounded font-bold text-[15px] text-primary-ink bg-primary rounded-full px-6 py-3.5 shadow-primary hover:brightness-105 active:scale-[.98] transition'}>
              <RotateCcw size={16} strokeWidth={2.5} /> {t('playAgain', locale)}
            </button>
            <Link href="/games" className="font-rounded font-bold text-[15px] text-text no-underline hover:text-primary transition px-2 py-3">
              {t('backToGames', locale)}
            </Link>
          </div>
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
        <div className="inline-flex items-center gap-2 font-rounded font-extrabold text-[18px] tabular-nums text-text">
          <Timer size={18} className={time <= 10 ? 'text-bad' : 'text-primary'} strokeWidth={2.4} />
          <span className={time <= 10 ? 'text-bad' : ''}>{time}s</span>
        </div>
        <div className="flex-1 h-2.5 rounded-full bg-surface-3 overflow-hidden">
          <div className="h-full rounded-full transition-[width] duration-1000 ease-linear"
            style={{ width: `${timePct * 100}%`, background: time <= 10 ? 'var(--bad)' : 'linear-gradient(90deg,var(--primary),var(--primary-2))' }} />
        </div>
        <div className="inline-flex items-center gap-1.5 font-rounded font-extrabold text-[18px] tabular-nums text-text">
          <span className="text-amber">★</span> {score}
        </div>
      </div>

      {/* Prompt */}
      <div className="bg-card border border-border rounded-[24px] shadow-card p-8 md:p-10 text-center mb-5">
        {mode === 'audio' ? (
          <button onClick={() => q && speak(q.prompt)} aria-label={t('replayAudio', locale)}
            className="grid place-items-center w-20 h-20 mx-auto rounded-full bg-primary text-primary-ink shadow-primary hover:brightness-105 active:scale-95 transition">
            <Volume2 size={34} strokeWidth={2.2} />
          </button>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <span className="font-rounded font-extrabold text-[clamp(30px,6vw,52px)] leading-tight text-text">{q?.prompt.german}</span>
            <button onClick={() => q && speak(q.prompt)} aria-label={t('replayAudio', locale)}
              className="grid place-items-center shrink-0 w-11 h-11 rounded-full bg-[var(--primary-wash)] text-primary hover:brightness-105 active:scale-90 transition">
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
          let cls = 'bg-card border-border hover:border-primary hover:-translate-y-0.5';
          if (picked !== null) {
            if (isAnswer) cls = 'bg-[var(--good-wash)] border-[var(--good)] text-[var(--good)]';
            else if (isPicked) cls = 'bg-[var(--bad-wash)] border-[var(--bad)] text-[var(--bad)]';
            else cls = 'bg-card border-border opacity-55';
          }
          return (
            <button key={choice.id + i} onClick={() => choose(i)} disabled={picked !== null}
              className={'relative flex items-center gap-3 rounded-[16px] border-2 shadow-card px-5 py-4 text-left font-rounded font-bold text-[17px] text-text transition-[transform,border-color,background-color] ' + cls}>
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
    <div className="relative">
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
      <div className="absolute inset-[8%] rounded-[46%_54%_58%_42%/48%_44%_56%_52%] bg-[radial-gradient(120%_120%_at_60%_30%,var(--soft),var(--primary-wash)_60%,transparent_80%)]" />
      <img src={src} alt="" className="relative w-full block select-none pointer-events-none drop-shadow-[0_14px_22px_rgba(0,0,0,0.14)]" draggable={false} />
    </div>
  );
}
