'use client';
import type { LessonStep } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { AudioButton } from '@/components/ui/AudioButton';
import { Card } from '@/components/ui/Card';
import { Mascot } from '@/components/ui/Mascot';
import { MiniMarkdown } from '@/components/ui/miniMarkdown';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';

type Wrapup = Extract<LessonStep, { kind: 'wrapup' }>;

export function WrapupStep({ summary, summaryFr, card }: { summary: string; summaryFr?: string; card?: Wrapup['card'] }) {
  const { locale } = useLocale();
  return (
    <div className="grid gap-4">
      <Card>
        <div className="flex items-center gap-3 mb-3">
          <Mascot size={44} expression="celebrate" className="shrink-0" />
          <h2 className="text-[26px] font-extrabold m-0">Geschafft!</h2>
        </div>
        <MiniMarkdown md={pick(summary, summaryFr, locale)} />
      </Card>

      {card && (
        <Card>
          <h3 className="font-display font-semibold text-[22px] tracking-[-0.02em] m-0 mb-4">{pick(card.title, card.titleFr, locale)}</h3>
          <div className="grid gap-5">
            {card.sections.map((sec, si) => (
              <section key={si}>
                <h4 className="eyebrow m-0 mb-2">{pick(sec.heading, sec.headingFr, locale)}</h4>
                <ul className="list-none m-0 p-0">
                  {sec.rows.map((r, ri) => (
                    <li key={ri} className="flex items-center gap-3 py-2 border-t border-border first:border-t-0">
                      <span className="font-display font-semibold text-[18px] flex-1 min-w-0">{r.de}</span>
                      <span className="text-[14px] text-muted text-right">{pick(r.en, r.fr, locale)}</span>
                      <AudioButton src={ttsSrc(r.de)} label={`Anhören: ${r.de}`} size={28} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
