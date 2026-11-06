'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Lesson } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { currentStreak, dateKey } from '@/lib/progress';
import { nextLesson } from '@/lib/path-model';
import { ShapeAssembly } from '@/components/ui/ShapeAssembly';
import { Button } from '@/components/ui/Button';
import { specialProgress } from '@/lib/specials-progress';

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 min-w-[96px] bg-card border border-border rounded-[20px] px-3 py-4 text-center">
      <div className="font-display font-semibold text-[34px] leading-none tabular-nums text-text">{value}</div>
      <div className="text-[12px] text-muted mt-1.5">{label}</div>
    </div>
  );
}

export function LessonResults({ lesson, onHome, homeLabel, reviewHref, onRetakeQuiz }: {
  lesson: Lesson; onHome: () => void; homeLabel?: string; reviewHref?: string; onRetakeQuiz?: () => void;
}) {
  const { state } = useProgress();
  const { locale } = useLocale();
  const isSpecial = lesson.id.startsWith('sp-');

  // The full lesson list is large; load it only here, once, to find what comes next.
  const [next, setNext] = useState<{ id: string } | null | undefined>(undefined);
  useEffect(() => {
    if (isSpecial) { setNext(null); return; }
    let live = true;
    import('@/content').then((m) => { if (live) setNext(nextLesson(state, m.lessons) ?? null); });
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpecial, lesson.id]);

  const quizAt = lesson.steps.findIndex((s) => s.kind === 'quiz');
  const quiz = quizAt >= 0 ? specialProgress(state, lesson) : null;
  const exerciseSteps = lesson.steps.flatMap((s, i) => (s.kind === 'exercise' && (quizAt < 0 || i < quizAt) ? [s] : []));
  const results = state.lessons[lesson.id]?.exercises ?? {};
  const total = exerciseSteps.length;
  const correct = exerciseSteps.filter((s) => results[s.exercise.id] === true).length;

  const vocabIds = lesson.steps.flatMap((s) =>
    s.kind === 'vocab' ? [s.item.id] : s.kind === 'pronunciation' ? s.items.map((i) => i.id) : [],
  );
  const wordsLearned = new Set(vocabIds).size;
  const saved = vocabIds.filter((id) => state.hardWords.includes(id)).length;
  const streak = currentStreak(state, dateKey(Date.now()));
  const hasNext = next && next.id !== lesson.id;

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-5 py-10 relative overflow-hidden" {...(next !== undefined ? { 'data-next-loaded': '' } : {})}>
      <div aria-hidden="true" className="absolute left-1/2 -top-10 w-[560px] h-[560px] -ml-[280px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(closest-side, color-mix(in srgb, var(--t1) 10%, transparent), transparent)' }} />
      <div className="relative w-full max-w-[460px] text-center">
        <div className="flex justify-center mb-6"><ShapeAssembly size={240} /></div>
        <div className="eyebrow">Lektion {lesson.number} · {lesson.level}</div>
        <h1 className="font-display font-bold text-[clamp(44px,12vw,64px)] leading-none tracking-[-0.04em] mt-3.5 mb-1.5">Geschafft!</h1>
        <p className="font-display text-[20px] text-text-2 m-0">{lesson.title.de}</p>

        {quiz && (
          <p role="status" className={'font-semibold m-0 mt-4 ' + (quiz.quizPassed ? 'text-ok' : 'text-text-2')}>
            {quiz.quizPassed ? t('quizPassed', locale) : t('quizNotPassed', locale)}
          </p>
        )}

        <div className="flex gap-2.5 mt-8 mb-4">
          {quiz && <Stat value={`${quiz.quizCorrect}/${quiz.quizTotal}`} label={t('quizScore', locale)} />}
          {total > 0 && <Stat value={`${correct}/${total}`} label={t('exercisesCorrect', locale)} />}
          <Stat value={String(wordsLearned)} label={t('wordsLearned', locale)} />
          {saved > 0 && <Stat value={String(saved)} label={t('savedForReview', locale)} />}
        </div>

        {streak > 0 && (
          <div className="flex items-center gap-4 text-left rounded-[22px] bg-card border border-border px-5 py-[18px] mb-7">
            <div className="flex-1">
              <div className="font-display font-semibold text-[22px]">{streak} {streak === 1 ? 'Tag' : 'Tage'} in Folge</div>
              <div className="text-[13px] text-muted mt-1.5">{t('daysInARow', locale)}</div>
            </div>
            <div aria-hidden="true" className="flex items-end gap-1">
              {Array.from({ length: Math.min(streak, 7) }, (_, i) => (
                <span key={i} className="block w-3 rounded-[3px] bg-text" style={{ height: 12 + i * 6 }} />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2.5">
          {hasNext ? (
            <>
              <Link href={`/lesson/${next.id}/learn`} className="flex items-center justify-center gap-2.5 h-[56px] rounded-full bg-cta text-cta-ink font-semibold text-[17px] no-underline transition hover:opacity-90 active:scale-[.98]">
                {t('nextLessonCta', locale)} <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Button variant="secondary" onClick={onHome} className="w-full">{homeLabel ?? t('backToHome', locale)}</Button>
            </>
          ) : (
            <Button size="lg" onClick={onHome} className="w-full">{homeLabel ?? t('backToHome', locale)}</Button>
          )}
          {quiz && onRetakeQuiz && <Button variant="secondary" onClick={onRetakeQuiz} className="w-full">{t('retakeQuiz', locale)}</Button>}
          <Link href={reviewHref ?? `/lesson/${lesson.id}/review`} className="py-3 text-text-2 font-medium text-[15px] no-underline hover:text-text">
            {t('reviewThisLesson', locale)}
          </Link>
        </div>
      </div>
    </div>
  );
}
