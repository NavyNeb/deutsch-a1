'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { conjugate, TENSE_IDS, type Row, type TenseId } from '@/lib/conjugate';
import type { DictEntry } from '@/lib/dictionary';
import { TENSE_GUIDE } from '@/content/grammar/tense-guide';
import { getSpecial } from '@/content/specials';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { Notice, PlayButton, TableShell } from './FormTable';

const TENSE_KEY: Record<TenseId, UIKey> = {
  praesens: 'tensePraesens', praeteritum: 'tensePraeteritum', perfekt: 'tensePerfekt', plusquamperfekt: 'tensePlusquamperfekt',
  futur1: 'tenseFutur1', futur2: 'tenseFutur2', konj1: 'tenseKonj1', konj2: 'tenseKonj2', imperativ: 'tenseImperativ', passiv: 'tensePassiv',
};
const TENSE_TAB: Record<TenseId, string> = {
  praesens: 'Präsens', praeteritum: 'Präteritum', perfekt: 'Perfekt', plusquamperfekt: 'Plusquamperfekt',
  futur1: 'Futur I', futur2: 'Futur II', konj1: 'Konjunktiv I', konj2: 'Konjunktiv II', imperativ: 'Imperativ', passiv: 'Passiv',
};

function FormRows({ rows, tense }: { rows: Row[]; tense: TenseId | 'variant' }) {
  return (
    <tbody>
      {rows.map((r, i) => {
        const spoken = tense === 'imperativ' || tense === 'variant' ? r.text : `${r.pronoun} ${r.text}`;
        return (
          <tr key={i} className="border-t border-border first:border-t-0">
            <th scope="row" className="text-left font-semibold text-muted px-4 py-1.5 w-[28%] whitespace-nowrap">{r.pronoun}</th>
            <td className="py-1.5 pr-2 font-rounded font-bold text-text">{r.text}</td>
            <td className="w-12 pr-2 text-right"><PlayButton text={spoken} /></td>
          </tr>
        );
      })}
    </tbody>
  );
}

export function VerbPanel({ entry }: { entry: DictEntry }) {
  const { locale } = useLocale();
  const c = useMemo(() => conjugate({ lemma: entry.w, v: entry.v }), [entry.w, entry.v]);
  const available = TENSE_IDS.filter((id) => c.tenses[id]?.length);
  const [tense, setTense] = useState<TenseId>('praesens');
  const active = available.includes(tense) ? tense : available[0];
  if (!active) return null;
  const guide = TENSE_GUIDE[active];
  const rows = c.tenses[active];
  const special = guide.specialSlug ? getSpecial(guide.specialSlug) : undefined;

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
    if (next === null) return;
    const id = available[(next + available.length) % available.length];
    setTense(id);
    document.getElementById(`tense-tab-${id}`)?.focus();
  };

  return (
    <section aria-label={t('dictTenses', locale)} className="grid gap-4">
      {c.confidence === 'check' && <Notice tone="warn">{t('dictCheckForms', locale)}</Notice>}
      {c.aux === 'both' && <Notice>{t('dictAuxBoth', locale)}</Notice>}
      {c.separable && <Notice>{t('dictSeparableNote', locale)} <b>{c.separable}</b></Notice>}

      <div role="tablist" aria-label={t('dictTenses', locale)} className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:thin]">
        {available.map((id, i) => (
          <button
            key={id}
            id={`tense-tab-${id}`}
            role="tab"
            type="button"
            aria-selected={id === active}
            aria-controls="tense-panel"
            tabIndex={id === active ? 0 : -1}
            onClick={() => setTense(id)}
            onKeyDown={(e) => onKey(e, i)}
            className={'shrink-0 h-10 rounded-full px-4 font-rounded font-bold text-[14px] border transition whitespace-nowrap ' + (id === active ? 'bg-primary text-white border-primary' : 'bg-card text-text-2 border-border hover:border-primary hover:text-primary')}
          >
            {TENSE_TAB[id]}
          </button>
        ))}
      </div>

      <div id="tense-panel" role="tabpanel" aria-labelledby={`tense-tab-${active}`} className="grid gap-4">
        <h3 className="font-rounded font-extrabold text-[17px] text-text m-0">{t(TENSE_KEY[active], locale)}</h3>

        <div className="rounded-[16px] border border-border bg-surface-2 p-4 grid gap-3 text-[14.5px] leading-relaxed text-text-2">
          <div><div className="label text-muted mb-0.5">{t('dictHowToForm', locale)}</div>{pick(guide.how.en, guide.how.fr, locale)}</div>
          <div><div className="label text-muted mb-0.5">{t('dictWhenToUse', locale)}</div>{pick(guide.when.en, guide.when.fr, locale)}</div>
          <ul className="m-0 p-0 list-none grid gap-1.5">
            {guide.examples.map((x) => (
              <li key={x.de} className="flex items-start gap-1">
                <PlayButton text={x.de} label={x.de} />
                <span><span className="text-text font-semibold">{x.de}</span><br /><span className="text-muted text-[13.5px]">{pick(x.en, x.fr, locale)}</span></span>
              </li>
            ))}
          </ul>
          {special && (
            <Link href={`/specials/${special.special.slug}`} className="inline-flex w-fit items-center rounded-full border border-border bg-card px-3 py-1.5 text-[13px] font-rounded font-bold text-primary no-underline hover:border-primary">
              {t('dictLearnMoreSpecial', locale)}: {special.title.de} →
            </Link>
          )}
        </div>

        <TableShell caption={TENSE_TAB[active]}><FormRows rows={rows} tense={active} /></TableShell>

        {active === 'konj2' && c.wuerde && (
          <TableShell caption={t('dictWuerdeForm', locale)}><FormRows rows={c.wuerde} tense="variant" /></TableShell>
        )}
        {active === 'passiv' && c.passivPraeteritum && (
          <TableShell caption={`${t('dictPassivPast', locale)} · ${t('dictPassivPraeteritum', locale)}`}><FormRows rows={c.passivPraeteritum} tense="variant" /></TableShell>
        )}
        {active === 'passiv' && c.passivPerfekt && (
          <TableShell caption={`${t('dictPassivPast', locale)} · ${t('dictPassivPerfekt', locale)}`}><FormRows rows={c.passivPerfekt} tense="variant" /></TableShell>
        )}
      </div>
    </section>
  );
}
