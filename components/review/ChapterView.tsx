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
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24 }}>
      <header style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div>
          <p className="label" style={{ marginBottom: 4 }}>Lektion {lesson.number}</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, margin: '0 0 8px' }}>
            {`${lesson.title.de} (${titleTranslation})`}
          </h1>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {goals.map((g, i) => <li key={i} style={{ margin: '4px 0' }}>{g}</li>)}
          </ul>
        </div>
        <LanguageToggle />
      </header>

      {vocabSteps.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, margin: '0 0 16px' }}>Wortschatz</h2>
          <Card>
            <div style={{ display: 'grid', gap: 16 }}>
              {vocabSteps.map((step) => {
                const item = step.item;
                return (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)', paddingBottom: 16 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20 }}>{item.german}</span>
                        <GenderTag gender={item.gender} />
                      </div>
                      {item.pronunciation && (
                        <p style={{ color: 'var(--muted)', margin: '2px 0 0', fontSize: 13 }}>{item.pronunciation}</p>
                      )}
                      <p style={{ color: 'var(--muted)', margin: '2px 0 0' }}>{pick(item.english, item.french, locale)}</p>
                    </div>
                    <AudioButton src={ttsSrc(item.german)} label={`Say ${item.german}`} />
                  </div>
                );
              })}
            </div>
          </Card>
        </section>
      )}

      {grammarSteps.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, margin: '0 0 16px' }}>Grammatik</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {grammarSteps.map((step) => {
              const note = step.note;
              return (
                <Card key={note.id}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, margin: '0 0 8px' }}>{pick(note.title, note.titleFr, locale)}</h3>
                  <MiniMarkdown md={pick(note.explanationMd, note.explanationMdFr, locale)} />
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {examples.length > 0 && (
        <section>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, margin: '0 0 16px' }}>Beispielsätze</h2>
          <Card>
            <div style={{ display: 'grid', gap: 10 }}>
              {examples.map((ex, i) => (
                <div key={i} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 12, display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ flex: 1 }}><em>{ex.de}</em><br /><span style={{ color: 'var(--muted)', fontSize: 14 }}>{pick(ex.en, ex.fr, locale)}</span></div>
                  <AudioButton src={ttsSrc(ex.de)} label={`Say ${ex.de}`} />
                </div>
              ))}
            </div>
          </Card>
        </section>
      )}
    </div>
  );
}
