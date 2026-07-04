import { Card } from '@/components/ui/Card';
import type { LessonStep } from '@/content/types';

type IntroStepData = Extract<LessonStep, { kind: 'intro' }>;

export function IntroStep({ step }: { step: IntroStepData }) {
  return (
    <Card>
      <h2 style={{ fontSize: 28, margin: '0 0 8px' }}>{step.title}</h2>
      {step.scene && <p style={{ color: 'var(--muted)', marginBottom: 16 }}>{step.scene}</p>}
      <p className="label" style={{ marginBottom: 8 }}>In this lesson you will:</p>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        {step.goals.map((g, i) => <li key={i} style={{ margin: '4px 0' }}>{g}</li>)}
      </ul>
    </Card>
  );
}
