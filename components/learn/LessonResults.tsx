'use client';
import Link from 'next/link';
import type { Lesson } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Mascot } from '@/components/ui/Mascot';
import { Confetti } from '@/components/ui/Confetti';
import { Button } from '@/components/ui/Button';

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="flex-1 bg-card border border-border rounded-[16px] shadow-card px-3 py-4 text-center">
      <div className={'font-rounded font-extrabold text-[28px] tabular-nums ' + (accent ? 'text-primary' : 'text-text')}>
        {value}
      </div>
      <div className="label text-muted mt-1">{label}</div>
    </div>
  );
}

export function LessonResults({ lesson, onHome }: { lesson: Lesson; onHome: () => void }) {
  const { state } = useProgress();
  const { locale } = useLocale();

  const exerciseSteps = lesson.steps.filter((s) => s.kind === 'exercise');
  const results = state.lessons[lesson.id]?.exercises ?? {};
  const total = exerciseSteps.length;
  const correct = exerciseSteps.filter((s) => results[s.exercise.id] === true).length;

  const vocabIds = lesson.steps.flatMap((s) =>
    s.kind === 'vocab' ? [s.item.id] : s.kind === 'pronunciation' ? s.items.map((i) => i.id) : [],
  );
  const wordsLearned = new Set(vocabIds).size;
  const saved = vocabIds.filter((id) => state.hardWords.includes(id)).length;

  return (
    <div className="min-h-[100dvh] grid place-items-center p-6 relative overflow-hidden">
      <Confetti />
      <div className="w-full max-w-[440px] text-center relative">
        <Mascot size={76} expression="celebrate" className="mx-auto" />
        <h1 className="text-[32px] font-extrabold mt-4 mb-1">{t('lessonComplete', locale)}</h1>
        <p className="text-muted m-0 mb-6">{t('greatJob', locale)}</p>

        <div className="flex gap-3 mb-7">
          {total > 0 && <Stat value={`${correct}/${total}`} label={t('exercisesCorrect', locale)} accent />}
          <Stat value={String(wordsLearned)} label={t('wordsLearned', locale)} />
          {saved > 0 && <Stat value={String(saved)} label={t('savedForReview', locale)} />}
        </div>

        <div className="flex flex-col gap-2.5">
          <Button onClick={onHome} className="w-full justify-center">{t('backToHome', locale)}</Button>
          <Link
            href={`/lesson/${lesson.id}/review`}
            className="w-full text-center py-3 rounded-[14px] font-rounded font-bold text-primary bg-[var(--primary-wash)]
              no-underline transition hover:brightness-105"
          >
            {t('reviewThisLesson', locale)}
          </Link>
        </div>
      </div>
    </div>
  );
}
