'use client';
import { Card } from '@/components/ui/Card';
import type { LessonStep } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';

type IntroStepData = Extract<LessonStep, { kind: 'intro' }>;

export function IntroStep({ step }: { step: IntroStepData }) {
  const { locale } = useLocale();
  const goals = locale === 'fr' && step.goalsFr ? step.goalsFr : step.goals;
  return (
    <Card>
      <h2 className="text-[28px] font-extrabold m-0 mb-2">{pick(step.title, step.titleFr, locale)}</h2>
      {step.scene && <p className="text-muted mb-4">{pick(step.scene, step.sceneFr, locale)}</p>}
      <p className="label mb-2">{t('inThisLessonYouWill', locale)}</p>
      <ul className="m-0 pl-5 grid gap-1">
        {goals.map((g, i) => (
          <li key={i} className="marker:text-primary">{g}</li>
        ))}
      </ul>
    </Card>
  );
}
