import type { GrammarNote } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { AudioButton } from '@/components/ui/AudioButton';
import { Card } from '@/components/ui/Card';
import { MiniMarkdown } from '@/components/ui/miniMarkdown';
import { AssistButtons } from '@/components/assist/AssistButtons';

export function GrammarStep({ note }: { note: GrammarNote }) {
  return (
    <Card>
      <h2 style={{ fontSize: 26, margin: '0 0 12px' }}>{note.title}</h2>
      <MiniMarkdown md={note.explanationMd} />

      {note.diagram === 'conjugation-table' ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
          <tbody>
            {note.examples.map((ex, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                <td style={{ padding: '8px 6px 8px 0', fontFamily: 'var(--font-serif)' }}>{ex.de}</td>
                <td style={{ padding: '8px 0', color: 'var(--muted)' }}>{ex.en}</td>
                <td style={{ padding: '8px 0', textAlign: 'right' }}><AudioButton src={ttsSrc(ex.de)} label={`Say ${ex.de}`} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ marginTop: 16, display: 'grid', gap: 10 }}>
          {note.examples.map((ex, i) => (
            <div key={i} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 12, display: 'flex', gap: 10, alignItems: 'center' }}>
              <div><em>{ex.de}</em><br /><span style={{ color: 'var(--muted)', fontSize: 14 }}>{ex.en}</span></div>
              <AudioButton src={ttsSrc(ex.de)} label={`Say ${ex.de}`} />
            </div>
          ))}
        </div>
      )}
      <AssistButtons term={note.title} />
    </Card>
  );
}
