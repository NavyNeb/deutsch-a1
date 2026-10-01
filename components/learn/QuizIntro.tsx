'use client';
import { Card } from '@/components/ui/Card';
import { Mascot } from '@/components/ui/Mascot';
import type { LessonStep } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';

type QuizData = Extract<LessonStep, { kind: 'quiz' }>;

export function QuizIntro({ step, questions }: { step: QuizData; questions: number }) {
  const { locale } = useLocale();
  const pct = Math.round(step.passMark * 100);
  return (
    <Card className="text-center">
      <Mascot size={56} expression="think" className="mx-auto mb-3" />
      <p className="label text-primary m-0 mb-2">{t('quizLabel', locale)}</p>
      <h2 className="text-[28px] font-extrabold m-0 mb-2">{pick(step.title, step.titleFr, locale)}</h2>
      <p className="text-muted m-0">
        {questions} {t('quizQuestions', locale)} · {t('quizPassMark', locale)} {pct}%
      </p>
      <p className="text-muted m-0 mt-2">{t('quizRetake', locale)}</p>
    </Card>
  );
}
