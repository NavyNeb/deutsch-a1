'use client';
import { Card } from '@/components/ui/Card';
import { Mascot } from '@/components/ui/Mascot';
import { MiniMarkdown } from '@/components/ui/miniMarkdown';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';

export function WrapupStep({ summary, summaryFr }: { summary: string; summaryFr?: string }) {
  const { locale } = useLocale();
  return (
    <Card>
      <div className="flex items-center gap-3 mb-3">
        <Mascot size={44} expression="celebrate" className="shrink-0" />
        <h2 className="text-[26px] font-extrabold m-0">Geschafft!</h2>
      </div>
      <MiniMarkdown md={pick(summary, summaryFr, locale)} />
    </Card>
  );
}
