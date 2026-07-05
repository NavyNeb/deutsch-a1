'use client';
import type { GrammarNote } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';
import { GermanText } from '@/components/ui/GermanText';
import { Card } from '@/components/ui/Card';
import { MiniMarkdown } from '@/components/ui/miniMarkdown';
import { AssistButtons } from '@/components/assist/AssistButtons';

export function GrammarStep({ note }: { note: GrammarNote }) {
  const { locale } = useLocale();
  const title = pick(note.title, note.titleFr, locale);

  return (
    <Card>
      <h2 style={{ fontSize: 26, margin: '0 0 12px' }}>{title}</h2>
      <MiniMarkdown md={pick(note.explanationMd, note.explanationMdFr, locale)} />

      {note.diagram === 'conjugation-table' ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
          <tbody>
            {note.examples.map((ex, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                <td style={{ padding: '8px 6px 8px 0', fontFamily: 'var(--font-serif)' }}>{ex.de}</td>
                <td style={{ padding: '8px 0', color: 'var(--muted)' }}>{pick(ex.en, ex.fr, locale)}</td>
                <td style={{ padding: '8px 0', textAlign: 'right' }}><AudioButton src={ttsSrc(ex.de)} label={`Say ${ex.de}`} size={26} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
          {note.examples.map((ex, i) => (
            <div key={i} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 12 }}>
              <GermanText de={ex.de} en={pick(ex.en, ex.fr, locale)} deSize={17} />
            </div>
          ))}
        </div>
      )}
      <AssistButtons term={title} />
    </Card>
  );
}
