'use client';
import type { Lesson } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';
import { GenderTag } from '@/components/ui/GenderTag';
import { Card } from '@/components/ui/Card';
import { MiniMarkdown } from '@/components/ui/miniMarkdown';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Read-only, scrolling review of a lesson's content — no step gating, no progress tracking.
export function ChapterView({ lesson }: { lesson: Lesson }) {
  const { locale } = useLocale();
  const vocabSteps = lesson.steps.filter((s) => s.kind === 'vocab');
  const grammarSteps = lesson.steps.filter((s) => s.kind === 'grammar');

  const examples = [
    ...vocabSteps.map((s) => s.item.example),
    ...grammarSteps.flatMap((s) => s.note.examples),
  ];

  const titleTranslation = pick(lesson.title.en, lesson.title.fr, locale);
  const goals = locale === 'fr' && lesson.goalsFr ? lesson.goalsFr : lesson.goals;

  return (
    <div className="max-w-[720px] mx-auto p-6">
      <header className="mb-8 flex justify-between items-start gap-4">
        <div>
          <p className="label mb-1">Lektion {lesson.number}</p>
          <h1 className="text-[40px] font-extrabold m-0 mb-2">
            {`${lesson.title.de} (${titleTranslation})`}
          </h1>
          <ul className="m-0 pl-5 grid gap-1 marker:text-primary">
            {goals.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {vocabSteps.length > 0 && (
        <section className="mb-8">
          <h2 className="text-[26px] font-extrabold m-0 mb-4">Wortschatz</h2>
          <Card>
            <div className="grid gap-4">
              {vocabSteps.map((step, i) => {
                const item = step.item;
                return (
                  <div
                    key={item.id}
                    className={'flex items-center gap-3 ' + (i < vocabSteps.length - 1 ? 'border-b border-border pb-4' : '')}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-rounded font-bold text-[20px]">{item.german}</span>
                        <GenderTag gender={item.gender} />
                      </div>
                      {item.pronunciation && <p className="text-muted m-0 mt-0.5 text-[13px]">{item.pronunciation}</p>}
                      <p className="text-muted m-0 mt-0.5">{pick(item.english, item.french, locale)}</p>
                    </div>
                    <AudioButton src={ttsSrc(item.german)} label={`Anhören: ${item.german}`} />
                  </div>
                );
              })}
            </div>
          </Card>
        </section>
      )}

      {grammarSteps.length > 0 && (
        <section className="mb-8">
          <h2 className="text-[26px] font-extrabold m-0 mb-4">Grammatik</h2>
          <div className="grid gap-4">
            {grammarSteps.map((step) => {
              const note = step.note;
              return (
                <Card key={note.id}>
                  <h3 className="text-[20px] font-bold m-0 mb-2">{pick(note.title, note.titleFr, locale)}</h3>
                  <MiniMarkdown md={pick(note.explanationMd, note.explanationMdFr, locale)} />
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {examples.length > 0 && (
        <section>
          <h2 className="text-[26px] font-extrabold m-0 mb-4">Beispielsätze</h2>
          <Card>
            <div className="grid gap-2.5">
              {examples.map((ex, i) => (
                <div key={i} className="border-l-[3px] border-primary pl-3 flex gap-2.5 items-center">
                  <div className="flex-1">
                    <em className="not-italic font-medium">{ex.de}</em>
                    <br />
                    <span className="text-muted text-sm">{pick(ex.en, ex.fr, locale)}</span>
                  </div>
                  <AudioButton src={ttsSrc(ex.de)} label={`Anhören: ${ex.de}`} />
                </div>
              ))}
            </div>
          </Card>
        </section>
      )}
    </div>
  );
}
