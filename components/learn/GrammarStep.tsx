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
      <h2 className="text-[26px] font-extrabold m-0 mb-3">{title}</h2>
      <MiniMarkdown md={pick(note.explanationMd, note.explanationMdFr, locale)} />

      {note.diagram === 'conjugation-table' ? (
        <table className="w-full border-collapse mt-4">
          <tbody>
            {note.examples.map((ex, i) => (
              <tr key={i} className="border-t border-border">
                <td className="py-2 pr-1.5 font-rounded font-semibold">{ex.de}</td>
                <td className="py-2 text-muted">{pick(ex.en, ex.fr, locale)}</td>
                <td className="py-2 text-right">
                  <AudioButton src={ttsSrc(ex.de)} label={`Anhören: ${ex.de}`} size={26} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mt-4 grid gap-3">
          {note.examples.map((ex, i) => (
            <div key={i} className="border-l-[3px] border-primary pl-3">
              <GermanText de={ex.de} en={pick(ex.en, ex.fr, locale)} deSize={17} />
            </div>
          ))}
        </div>
      )}
      <AssistButtons term={title} />
    </Card>
  );
}
