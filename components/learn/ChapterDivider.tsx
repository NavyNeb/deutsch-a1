'use client';
import { Card } from '@/components/ui/Card';
import type { LessonStep } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';

type ChapterData = Extract<LessonStep, { kind: 'chapter' }>;

export function ChapterDivider({ step, number, total }: { step: ChapterData; number: number; total: number }) {
  const { locale } = useLocale();
  return (
    <Card className="text-center">
      <p className="label text-primary m-0 mb-2">{t('chapterLabel', locale)} {number} / {total}</p>
      <h2 className="text-[28px] font-extrabold m-0 mb-2">{pick(step.title, step.titleFr, locale)}</h2>
      {step.blurb && <p className="text-muted m-0">{pick(step.blurb, step.blurbFr, locale)}</p>}
    </Card>
  );
}
