'use client';
import { Card } from '@/components/ui/Card';
import { MiniMarkdown } from '@/components/ui/miniMarkdown';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';

export function WrapupStep({ summary, summaryFr }: { summary: string; summaryFr?: string }) {
  const { locale } = useLocale();
  return (
    <Card>
      <h2 style={{ fontSize: 26, margin: '0 0 12px' }}>🎉 Well done!</h2>
      <MiniMarkdown md={pick(summary, summaryFr, locale)} />
    </Card>
  );
}
