'use client';
import { Check, X } from 'lucide-react';
import type { GrammarNote } from '@/content/types';
import { ttsSrc } from '@/lib/audio';
import { ROLE_META, anatomyText } from '@/lib/anatomy-roles';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';
import { GermanText } from '@/components/ui/GermanText';
import { Card } from '@/components/ui/Card';
import { MiniMarkdown } from '@/components/ui/miniMarkdown';
import { AssistButtons } from '@/components/assist/AssistButtons';

const block = 'mt-6';
const blockTitle = 'eyebrow m-0 mb-3';

export function GrammarStep({ note }: { note: GrammarNote }) {
  const { locale } = useLocale();
  const title = pick(note.title, note.titleFr, locale);
  // Rule screens in the redesigned format (tables, breakdowns, contrasts or mistakes) label their example list.
  const isRich = Boolean(note.tables?.length || note.anatomy?.length || note.contrast || note.mistakes?.length);

  return (
    <Card>
      <h2 className="text-[26px] font-extrabold m-0 mb-3">{title}</h2>
      {note.lead && (
        <p className="m-0 mb-3 rounded-[14px] bg-surface-2 border border-border px-4 py-3 text-[16px] font-medium">{pick(note.lead, note.leadFr, locale)}</p>
      )}
      <MiniMarkdown md={pick(note.explanationMd, note.explanationMdFr, locale)} />

      {note.tables?.map((tb, ti) => {
        const headers = locale === 'fr' && tb.headersFr ? tb.headersFr : tb.headers;
        const rows = locale === 'fr' && tb.rowsFr ? tb.rowsFr : tb.rows;
        return (
        <section key={ti} className={block}>
          <h3 className={blockTitle}>{pick(tb.title, tb.titleFr, locale)}</h3>
          <div className="overflow-x-auto rounded-[16px] border border-border">
            <table aria-label={pick(tb.title, tb.titleFr, locale)} className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-surface-2">
                  {headers.map((h, i) => (
                    <th key={i} scope="col" className="px-4 py-2.5 text-[13px] font-semibold text-muted whitespace-nowrap" data-highlight={tb.highlightCol === i ? 'true' : undefined}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className="border-t border-border">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        data-highlight={tb.highlightCol === ci ? 'true' : undefined}
                        className={'px-4 py-2.5 font-display text-[18px] whitespace-nowrap ' + (tb.highlightCol === ci ? 'font-bold bg-surface-2' : 'font-medium')}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        );
      })}

      {note.anatomy && note.anatomy.length > 0 && (
        <section className={block}>
          <h3 className={blockTitle}>{t('sentenceBreakdown', locale)}</h3>
          <div className="grid gap-4">
            {note.anatomy.map((a, ai) => (
              <div key={ai} className="rounded-[16px] border border-border px-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="flex flex-wrap gap-x-3 gap-y-3 flex-1">
                    {a.parts.map((p, pi) => {
                      const meta = ROLE_META[p.role];
                      const label = locale === 'fr' ? meta.fr : meta.en;
                      return (
                        <div key={pi} className="flex flex-col items-start">
                          <span data-role={p.role} className="font-display font-semibold text-[22px] leading-tight pb-1" style={{ color: meta.color, borderBottom: `3px solid ${meta.color}` }}>{p.text}</span>
                          {label && <span className="text-[11px] uppercase tracking-[0.06em] mt-1" style={{ color: meta.color }}>{label}</span>}
                        </div>
                      );
                    })}
                  </div>
                  <AudioButton src={ttsSrc(anatomyText(a.parts))} label={`Anhören: ${anatomyText(a.parts)}`} size={32} />
                </div>
                <div className="text-[14px] text-muted mt-3">{pick(a.en, a.fr, locale)}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {note.contrast && (
        <section className={block}>
          <div className="grid gap-3 sm:grid-cols-2">
            {[note.contrast.a, note.contrast.b].map((side, si) => (
              <div key={si} className="rounded-[16px] border border-border-strong px-4 py-4">
                <div className="font-display font-bold text-[22px] tracking-[-0.02em]">{pick(side.label, side.labelFr, locale)}</div>
                {side.note && <p className="text-[14px] text-text-2 mt-1 mb-3">{pick(side.note, side.noteFr, locale)}</p>}
                <div className="grid gap-3 mt-3">
                  {side.examples.map((ex, i) => (
                    <GermanText key={i} de={ex.de} en={pick(ex.en, ex.fr, locale)} deSize={17} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {note.diagram === 'conjugation-table' ? (
        <table className="w-full border-collapse mt-4">
          <tbody>
            {note.examples.map((ex, i) => (
              <tr key={i} className="border-t border-border">
                <td className="py-2 pr-1.5 font-display font-semibold">{ex.de}</td>
                <td className="py-2 text-muted">{pick(ex.en, ex.fr, locale)}</td>
                <td className="py-2 text-right">
                  <AudioButton src={ttsSrc(ex.de)} label={`Anhören: ${ex.de}`} size={26} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={(isRich ? block : 'mt-4') + ' grid gap-3'}>
          {isRich && <h3 className={blockTitle + ' !mb-0'}>{t('examplesHeading', locale)}</h3>}
          {note.examples.map((ex, i) => (
            <div key={i} className="border-l-[3px] border-text pl-3">
              <GermanText de={ex.de} en={pick(ex.en, ex.fr, locale)} deSize={17} />
            </div>
          ))}
        </div>
      )}

      {note.mistakes && note.mistakes.length > 0 && (
        <section className={block}>
          <h3 className={blockTitle}>{t('commonMistakes', locale)}</h3>
          <div className="grid gap-3">
            {note.mistakes.map((m, i) => (
              <div key={i} className="rounded-[16px] border border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <X size={16} strokeWidth={2.2} aria-hidden="true" className="shrink-0 text-ember-text" />
                  <span className="sr-only">{t('mistakeWrong', locale)}</span>
                  <span data-mistake="wrong" className="font-display text-[18px] line-through decoration-2 text-text-2">{m.wrong}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Check size={16} strokeWidth={2.2} aria-hidden="true" className="shrink-0 text-ok-text" />
                  <span className="sr-only">{t('mistakeRight', locale)}</span>
                  <span data-mistake="right" className="font-display font-semibold text-[18px]">{m.right}</span>
                  <AudioButton src={ttsSrc(m.right)} label={`Anhören: ${m.right}`} size={26} />
                </div>
                <p className="text-[14px] text-muted mt-2 mb-0">{pick(m.why, m.whyFr, locale)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <AssistButtons term={title} />
    </Card>
  );
}
