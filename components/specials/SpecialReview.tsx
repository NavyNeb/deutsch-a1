'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Special } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';
import { GenderTag } from '@/components/ui/GenderTag';
import { Card } from '@/components/ui/Card';
import { MiniMarkdown } from '@/components/ui/miniMarkdown';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Read-only, in-order walk through a special's teaching content (no exercises, no progress tracking).
export function SpecialReview({ special }: { special: Special }) {
  const { locale } = useLocale();
  const quizAt = special.steps.findIndex((s) => s.kind === 'quiz');
  const steps = quizAt >= 0 ? special.steps.slice(0, quizAt) : special.steps;

  return (
    <div className="max-w-[720px] mx-auto p-6 pb-24">
      <Link href={`/specials/${special.special.slug}`} className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-primary hover:underline">
        <ArrowLeft size={16} strokeWidth={2.4} /> {t('back', locale)}
      </Link>
      <header className="mt-2 mb-8 flex justify-between items-start gap-4">
        <div>
          <p className="label mb-1">{special.special.levels[0]}–{special.special.levels[1]}</p>
          <h1 className="text-[36px] font-extrabold m-0">{special.title.de}</h1>
          <p className="text-muted m-0 mt-1">{pick(special.title.en, special.title.fr, locale)}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0"><LanguageToggle /><ThemeToggle /></div>
      </header>

      <div className="grid gap-5">
        {steps.map((step, i) => {
          if (step.kind === 'chapter') {
            return (
              <h2 key={i} className="text-[26px] font-extrabold m-0 mt-6">
                {pick(step.title, step.titleFr ?? step.title, locale)}
                {(step.blurb || step.blurbFr) && <span className="block text-[15px] font-normal text-muted mt-1">{pick(step.blurb ?? '', step.blurbFr ?? step.blurb ?? '', locale)}</span>}
              </h2>
            );
          }
          if (step.kind === 'grammar') {
            const note = step.note;
            return (
              <Card key={i}>
                <h3 className="text-[20px] font-bold m-0 mb-2">{pick(note.title, note.titleFr, locale)}</h3>
                <MiniMarkdown md={pick(note.explanationMd, note.explanationMdFr, locale)} />
                <div className="grid gap-2.5 mt-4">
                  {note.examples.map((ex, j) => (
                    <div key={j} className="border-l-[3px] border-primary pl-3 flex gap-2.5 items-center">
                      <div className="flex-1">
                        <em className="not-italic font-medium">{ex.de}</em><br />
                        <span className="text-muted text-sm">{pick(ex.en, ex.fr, locale)}</span>
                      </div>
                      <AudioButton src={ttsSrc(ex.de)} label={`Anhören: ${ex.de}`} />
                    </div>
                  ))}
                </div>
              </Card>
            );
          }
          if (step.kind === 'vocab') {
            const item = step.item;
            return (
              <Card key={i} className="!p-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-rounded font-bold text-[20px]">{item.german}</span>
                      <GenderTag gender={item.gender} />
                    </div>
                    <p className="text-muted m-0 mt-0.5">{pick(item.english, item.french, locale)}</p>
                    <p className="text-text-2 text-[14px] m-0 mt-1">{item.example.de} — <span className="text-muted">{pick(item.example.en, item.example.fr, locale)}</span></p>
                  </div>
                  <AudioButton src={ttsSrc(item.german)} label={`Anhören: ${item.german}`} />
                </div>
              </Card>
            );
          }
          if (step.kind === 'wrapup') {
            return <Card key={i}><MiniMarkdown md={pick(step.summary, step.summaryFr ?? step.summary, locale)} /></Card>;
          }
          return null;
        })}
      </div>
    </div>
  );
}
