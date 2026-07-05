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
      <h2 style={{ fontSize: 28, margin: '0 0 8px' }}>{pick(step.title, step.titleFr, locale)}</h2>
      {step.scene && <p style={{ color: 'var(--muted)', marginBottom: 16 }}>{pick(step.scene, step.sceneFr, locale)}</p>}
      <p className="label" style={{ marginBottom: 8 }}>{t('inThisLessonYouWill', locale)}</p>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        {goals.map((g, i) => <li key={i} style={{ margin: '4px 0' }}>{g}</li>)}
      </ul>
    </Card>
  );
}
