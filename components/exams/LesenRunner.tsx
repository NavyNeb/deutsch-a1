'use client';
import { useState } from 'react';
import { Check, CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import type { ExamSet, LesenPart } from '@/content/exams/types';
import { BOARD_LABEL, FORMATS } from '@/content/exams/formats';
import { passed, scoreLesen, type LesenAnswers } from '@/lib/exam-score';
import { recordExamResult } from '@/lib/exam-progress';
import { claimPracticeXp } from '@/lib/daily-xp';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Button } from '@/components/ui/Button';
import { ExamTopBar, PartHeading, TextCard, TimerPill, TranslationToggle, TrLine, useCountdown } from './shared';

const XP_DAILY_CAP = 60;

const chip = (active: boolean, state?: 'good' | 'bad' | 'missed') =>
  'min-h-[44px] min-w-[44px] rounded-full border px-4 py-2 font-rounded font-bold text-[15px] transition disabled:cursor-default ' +
  (state === 'good' ? 'border-[var(--good)] bg-[var(--good-wash)] text-[var(--good)]'
    : state === 'bad' ? 'border-[var(--bad)] bg-[var(--bad-wash)] text-[var(--bad)]'
    : state === 'missed' ? 'border-[var(--good)] border-dashed text-[var(--good)]'
    : active ? 'border-primary bg-[var(--primary-wash)] text-primary'
    : 'border-border bg-card text-text-2 hover:bg-surface-2');

function PartView({ part, answers, setAnswer, checked, perItem }: {
  part: LesenPart;
  answers: LesenAnswers;
  setAnswer: (id: string, v: boolean | number | string) => void;
  checked: boolean;
  perItem: Record<string, boolean>;
}) {
  const { locale } = useLocale();
  const referenced = new Set(part.items.map((i) => i.textId).filter(Boolean));
  const topTexts = part.texts.filter((tx) => !referenced.has(tx.id));
  const wordBank = part.kind === 'matching' && topTexts.length > 0
    && topTexts.every((tx) => !tx.title && tx.de.length <= 24 && !tx.de.includes('\n'));
  const labels = part.kind === 'trueFalse' ? (part.labels === 'jn' ? ['Ja', 'Nein'] : ['Richtig', 'Falsch']) : [];

  return (
    <section className="mb-10">
      <PartHeading teil={part.teil} title={part.title} instruction={part.instruction} instructionTr={part.instructionTr} />
      {topTexts.length > 0 && wordBank && (
        <ul lang="de" className="m-0 mb-5 flex list-none flex-wrap gap-2 rounded-[18px] border border-border bg-card p-4">
          {topTexts.map((tx) => (
            <li key={tx.id} className="rounded-[14px] bg-surface-2 px-3 py-1.5 text-[15px]">
              <span><b className="mr-2 font-rounded uppercase text-primary">{tx.label}</b>{tx.de}</span>
              <TrLine tr={tx.tr} className="!mt-0 text-[12.5px]" />
            </li>
          ))}
        </ul>
      )}
      {topTexts.length > 0 && !wordBank && (
        <div className={'mb-5 grid gap-3 ' + (part.kind === 'matching' ? 'sm:grid-cols-2' : '')}>
          {topTexts.map((tx) => <TextCard key={tx.id} text={tx} />)}
        </div>
      )}
      <ol className="m-0 flex list-none flex-col gap-4 p-0">
        {part.items.map((item, idx) => {
          const own = item.textId ? part.texts.find((tx) => tx.id === item.textId) : undefined;
          const ok = perItem[item.id];
          const answered = answers[item.id] !== undefined;
          return (
            <li key={item.id} className="rounded-[18px] border border-border bg-card p-4 md:p-5">
              {own && <div className="mb-3"><TextCard text={own} /></div>}
              <p lang="de" className="m-0 text-[16px] leading-relaxed">
                <span className="mr-2 font-rounded font-extrabold text-primary">{idx + 1}</span>{item.q}
              </p>
              <TrLine tr={item.qTr} className="ml-5" />

              <div className="mt-3 flex flex-wrap gap-2">
                {part.kind === 'trueFalse' && [true, false].map((val, k) => {
                  const picked = answers[item.id] === val;
                  const isAnswer = (item as { answer: boolean }).answer === val;
                  const state = checked ? (isAnswer ? (picked ? 'good' : 'missed') : picked ? 'bad' : undefined) : undefined;
                  return (
                    <button key={String(val)} type="button" disabled={checked} aria-pressed={picked}
                      onClick={() => setAnswer(item.id, val)} className={chip(picked, state)}>
                      {labels[k]}
                    </button>
                  );
                })}

                {part.kind === 'matching' && [...part.texts.map((tx) => tx.id), ...(part.allowNone ? ['x'] : [])].map((id) => {
                  const picked = answers[item.id] === id;
                  const isAnswer = (item as { answer: string }).answer === id;
                  const state = checked ? (isAnswer ? (picked ? 'good' : 'missed') : picked ? 'bad' : undefined) : undefined;
                  const text = id === 'x' ? 'x' : part.texts.find((tx) => tx.id === id)?.label ?? id;
                  return (
                    <button key={id} type="button" disabled={checked} aria-pressed={picked}
                      aria-label={id === 'x' ? t('examNoneOption', locale) : text}
                      onClick={() => setAnswer(item.id, id)} className={chip(picked, state) + ' uppercase'}>
                      {text}
                    </button>
                  );
                })}
              </div>

              {part.kind === 'multipleChoice' && (
                <div className="mt-1 flex flex-col gap-2">
                  {(item as { options: string[]; optionsTr?: { en: string; fr: string }[]; answer: number }).options.map((opt, k) => {
                    const mc = item as { optionsTr?: { en: string; fr: string }[]; answer: number };
                    const picked = answers[item.id] === k;
                    const state = checked ? (mc.answer === k ? (picked ? 'good' : 'missed') : picked ? 'bad' : undefined) : undefined;
                    return (
                      <button key={k} type="button" disabled={checked} aria-pressed={picked}
                        onClick={() => setAnswer(item.id, k)}
                        className={'w-full rounded-[14px] border px-4 py-3 text-left transition disabled:cursor-default ' +
                          (state === 'good' ? 'border-[var(--good)] bg-[var(--good-wash)]'
                            : state === 'bad' ? 'border-[var(--bad)] bg-[var(--bad-wash)]'
                            : state === 'missed' ? 'border-dashed border-[var(--good)]'
                            : picked ? 'border-primary bg-[var(--primary-wash)]' : 'border-border hover:bg-surface-2')}>
                        <span lang="de" className="text-[15.5px]"><b className="mr-2 font-rounded">{String.fromCharCode(97 + k)}</b>{opt}</span>
                        <TrLine tr={mc.optionsTr?.[k]} className="ml-5" />
                      </button>
                    );
                  })}
                </div>
              )}

              {checked && (
                <div className="mt-3 flex items-start gap-2 text-[14px] leading-relaxed">
                  {ok ? <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--good)]" /> : <XCircle size={18} className="mt-0.5 shrink-0 text-[var(--bad)]" />}
                  <span className="text-text-2">
                    {!answered && <b className="mr-1">{t('examNoAnswer', locale)}.</b>}
                    {item.explain?.[locale]}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function LesenRunner({ set }: { set: ExamSet }) {
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const fmt = FORMATS[set.board][set.level];
  const [answers, setAnswers] = useState<LesenAnswers>({});
  const [checked, setChecked] = useState(false);
  const [timed, setTimed] = useState(false);
  const [xp, setXp] = useState(0);
  const countdown = useCountdown(fmt.lesen.minutes, timed && !checked);

  const result = scoreLesen(set.lesen, answers);
  const answeredCount = Object.values(answers).filter((v) => v !== undefined).length;
  const isPassed = passed(result.percent, fmt.passPercent);

  const check = () => {
    setChecked(true);
    recordExamResult(set.id, 'lesen', result.percent);
    const granted = claimPracticeXp(`exam:${set.id}:lesen`, isPassed ? 20 : 10, XP_DAILY_CAP);
    if (granted > 0) awardXp(granted);
    setXp(granted);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const retry = () => {
    setAnswers({}); setChecked(false); setXp(0); countdown.reset();
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="mx-auto max-w-[820px] px-5 py-8 md:py-12">
      <ExamTopBar
        backHref={`/exams/${set.board}/${set.level.toLowerCase()}`}
        backLabel={t('examBack', locale)}
        title={`${BOARD_LABEL[set.board]} ${set.level} · ${t('examSet', locale)} ${set.number} · ${t('examLesen', locale)}`}
      >
        <TranslationToggle />
        <button type="button" onClick={() => setTimed((v) => !v)} aria-pressed={timed} disabled={checked}
          className={'rounded-full border px-3.5 py-2 text-[13.5px] font-rounded font-bold transition disabled:opacity-40 ' +
            (timed ? 'border-primary bg-[var(--primary-wash)] text-primary' : 'border-border bg-card text-text-2 hover:bg-surface-2')}>
          {t('examTimed', locale)} · {fmt.lesen.minutes} {t('examMinutes', locale)}
        </button>
        {timed && !checked && <TimerPill left={countdown.left} locale={locale} />}
      </ExamTopBar>

      {checked && (
        <div role="status" className={'mb-8 rounded-[18px] border p-5 ' + (isPassed ? 'border-[var(--good)] bg-[var(--good-wash)]' : 'border-border bg-card')}>
          <p className="m-0 font-rounded font-extrabold text-[28px]">{result.correct} / {result.total} <span className="text-muted text-[18px]">({result.percent}%)</span></p>
          <p className={'m-0 mt-1 font-rounded font-bold ' + (isPassed ? 'text-[var(--good)]' : 'text-text-2')}>
            {isPassed ? t('examPassed', locale) : t('examNotPassed', locale)} · {t('examPassMark', locale)} {fmt.passPercent}%
            {xp > 0 && ` · +${xp} ${t('examXpEarned', locale)}`}
          </p>
          <ul className="m-0 mt-3 flex list-none flex-wrap gap-x-5 gap-y-1 p-0 text-[14px] text-text-2">
            {set.lesen.map((p, i) => (
              <li key={p.id}>Teil {p.teil}: <b>{result.perPart[i].correct}/{result.perPart[i].total}</b></li>
            ))}
          </ul>
        </div>
      )}

      {set.lesen.map((part, i) => (
        <PartView key={part.id} part={part} answers={answers} checked={checked} perItem={result.perPart[i].perItem}
          setAnswer={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))} />
      ))}

      <div className="sticky bottom-0 z-10 -mx-5 border-t border-border bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] px-5 py-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom,0px))]">
        <div className="mx-auto flex max-w-[820px] items-center justify-between gap-3">
          <span className="text-[14px] font-rounded font-bold text-text-2">{answeredCount} / {result.total} {t('examAnswered', locale)}</span>
          {checked ? (
            <Button onClick={retry}><RotateCcw size={16} />{t('examRetry', locale)}</Button>
          ) : (
            <Button onClick={check} disabled={answeredCount === 0}><Check size={16} />{t('examCheck', locale)}</Button>
          )}
        </div>
      </div>
    </div>
  );
}
