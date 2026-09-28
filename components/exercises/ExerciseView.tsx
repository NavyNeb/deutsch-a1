'use client';
import { useState } from 'react';
import { Check, Lightbulb, X } from 'lucide-react';
import type { Exercise } from '@/content/types';
import { checkAnswer } from '@/lib/exercises';
import { audioSrc } from '@/lib/audio';
import { useLocale, type Locale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick as pickLocale } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { AudioButton } from '@/components/ui/AudioButton';

// Initial (empty) response shape for a given exercise type — used both on
// mount and to reset the exercise when the learner hits "Try again".
const initialResponse = (exercise: Exercise): unknown =>
  exercise.type === 'match' ? {} : exercise.type === 'wordOrder' ? [] : undefined;

const optClass = (active: boolean) =>
  'w-full text-left rounded-[12px] px-4 py-3 my-1.5 border font-rounded font-semibold ' +
  'transition-[border-color,background,transform] duration-150 active:scale-[.99] cursor-pointer ' +
  (active ? 'border-primary bg-[var(--primary-wash)]' : 'border-border bg-card hover:border-border-strong');

// Reveal-after-this-many failed attempts. The learner is never stuck: once they
// have tried and missed twice, they can uncover the answer and move on.
const REVEAL_AFTER = 2;

export function ExerciseView({
  exercise,
  onResult,
  onPass,
}: {
  exercise: Exercise;
  onResult: (correct: boolean) => void;
  // Called when the learner may advance — a correct answer, or a revealed one.
  onPass?: () => void;
}) {
  const [response, setResponse] = useState<unknown>(initialResponse(exercise));
  const [result, setResult] = useState<{ correct: boolean; explanation?: string } | null>(null);
  // Bumped on "Try again" so uncontrolled/inner-state child inputs (fillBlank's
  // text input, WordOrder, Match) remount with a clean slate instead of just
  // silently keeping stale visible state.
  const [attempt, setAttempt] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const { locale } = useLocale();

  const check = () => {
    const r = checkAnswer(exercise, response, locale);
    setResult(r);
    onResult(r.correct);
    if (r.correct) onPass?.();
    else setWrongCount((n) => n + 1);
  };
  const tryAgain = () => { setResponse(initialResponse(exercise)); setResult(null); setAttempt((n) => n + 1); };
  const reveal = () => { setRevealed(true); onPass?.(); };

  // A guiding hint to show on a wrong answer — never the answer itself.
  // Falls back to the exercise's teaching "explain" note (multipleChoice only)
  // when no dedicated hint was authored; omitted entirely if neither exists.
  const wrongAnswerHint =
    exercise.hint ? pickLocale(exercise.hint, exercise.hintFr, locale) :
    exercise.type === 'multipleChoice' && exercise.explain ? pickLocale(exercise.explain, exercise.explainFr, locale) :
    undefined;

  const unattempted =
    exercise.type === 'wordOrder' ? (response as string[]).length !== exercise.tokens.length :
    exercise.type === 'match' ? Object.keys(response as Record<string, string>).length !== exercise.pairs.length :
    response === undefined;

  const prompt = 'prompt' in exercise ? pickLocale(exercise.prompt, exercise.promptFr, locale) : undefined;
  const options = 'options' in exercise ? (locale === 'fr' && exercise.optionsFr ? exercise.optionsFr : exercise.options) : undefined;

  return (
    <div>
      {prompt && <p className="mb-3 text-[17px] font-rounded font-semibold">{prompt}</p>}

      {exercise.type === 'multipleChoice' && options!.map((o, i) => (
        <button key={i} className={optClass(response === i)} onClick={() => setResponse(i)}>{o}</button>
      ))}

      {exercise.type === 'listenChoose' && (<>
        <div className="mb-2.5 flex items-center gap-2">
          <AudioButton src={audioSrc(exercise.audio)} label={t('playClip', locale)} />
          <span className="label">{t('listenThenChoose', locale)}</span>
        </div>
        {options!.map((o, i) => (<button key={i} className={optClass(response === i)} onClick={() => setResponse(i)}>{o}</button>))}
      </>)}

      {exercise.type === 'articlePicker' && (
        <div className="flex gap-2 items-center flex-wrap">
          {(['der', 'die', 'das'] as const).map((g) => (
            <button
              key={g}
              aria-label={g}
              onClick={() => setResponse(g)}
              className={
                'rounded-[12px] px-5 py-3 border font-rounded font-bold text-[17px] transition-[border-color,background,transform] duration-150 active:scale-[.98] cursor-pointer ' +
                (response === g ? 'border-primary bg-[var(--primary-wash)]' : 'border-border bg-card hover:border-border-strong')
              }
              style={{ color: `var(--${g})` }}
            >
              {g}
            </button>
          ))}
          <span className="self-center font-rounded font-bold text-[22px] ml-1">{exercise.word}</span>
        </div>
      )}

      {exercise.type === 'fillBlank' && (
        <input
          key={attempt}
          className="mock-input w-full rounded-[12px] border border-border bg-card px-4 py-3 text-[16px] outline-none
            focus:border-primary transition-colors"
          onChange={(e) => setResponse(e.target.value)}
          placeholder={t('typeYourAnswer', locale)}
        />
      )}

      {exercise.type === 'wordOrder' && <WordOrder key={attempt} tokens={exercise.tokens} onChange={setResponse} locale={locale} />}
      {exercise.type === 'match' && <Match key={attempt} pairs={exercise.pairs} onChange={setResponse} locale={locale} />}

      <div className="mt-4">
        <Button onClick={check} disabled={unattempted}>{t('check', locale)}</Button>
      </div>

      {revealed && (
        <div className="mt-3 rounded-[12px] px-3.5 py-3 bg-[var(--primary-wash)] flex items-start gap-2">
          <Lightbulb size={16} strokeWidth={2.2} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
          <span className="font-rounded">
            <strong>{t('answerLabel', locale)}:</strong> <span className="text-text font-bold">{answerText(exercise, locale)}</span>
          </span>
        </div>
      )}

      {result && !revealed && (
        <div className="mt-3">
          {result.correct ? (
            <div className="flex items-start gap-2 rounded-[12px] px-3.5 py-3 bg-[var(--good-wash)] text-text">
              <Check size={18} strokeWidth={2.6} className="mt-0.5 shrink-0 text-[var(--good)]" aria-hidden="true" />
              <span className="font-rounded font-bold">
                Richtig!{' '}
                {result.explanation && <span className="font-normal text-text-2">— {result.explanation}</span>}
              </span>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-1.5 text-[var(--bad)] font-rounded font-bold">
                <X size={16} strokeWidth={2.6} aria-hidden="true" />
                {t('notQuite', locale)}
              </div>
              <div
                role="note"
                aria-label={t('tip', locale)}
                className="mt-2 rounded-[12px] px-3.5 py-3 bg-[var(--amber-wash)]"
              >
                {wrongAnswerHint && (
                  <p className="m-0 flex items-start gap-2">
                    <Lightbulb size={16} strokeWidth={2.2} className="mt-0.5 shrink-0 text-[var(--amber)]" aria-hidden="true" />
                    <span>
                      <strong>{t('tip', locale)}:</strong> <span className="text-text">{wrongAnswerHint}</span>
                    </span>
                  </p>
                )}
                <div className={'flex items-center gap-2 ' + (wrongAnswerHint ? 'mt-2.5' : '')}>
                  <button
                    onClick={tryAgain}
                    className="border border-[var(--amber)] text-[var(--amber)] bg-transparent rounded-[10px] px-3.5 py-2
                      font-rounded font-bold transition-colors hover:bg-[var(--amber-wash)]"
                  >
                    {t('tryAgain', locale)}
                  </button>
                  {wrongCount >= REVEAL_AFTER && (
                    <button
                      onClick={reveal}
                      className="text-muted underline underline-offset-2 font-rounded text-sm transition-colors hover:text-text"
                    >
                      {t('showAnswer', locale)}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// The correct answer as display text — only ever shown via an explicit
// "Show answer" after repeated misses, never in the non-spoiler hint box.
function answerText(ex: Exercise, locale: Locale): string {
  switch (ex.type) {
    case 'multipleChoice':
    case 'listenChoose':
      return (locale === 'fr' && ex.optionsFr ? ex.optionsFr : ex.options)[ex.answer];
    case 'articlePicker':
      return `${ex.answer} ${ex.word}`;
    case 'fillBlank':
      return ex.answer;
    case 'wordOrder':
      return ex.answer.join(' ');
    case 'match':
      return ex.pairs.map((p) => `${p.de} → ${pickLocale(p.en, p.fr, locale)}`).join(', ');
  }
}

// --- WordOrder: tap tokens to build the sentence; tap a placed token to remove it ---
function WordOrder({ tokens, onChange, locale }: { tokens: string[]; onChange: (v: string[]) => void; locale: Locale }) {
  const [chosen, setChosen] = useState<string[]>([]);
  const commit = (next: string[]) => { setChosen(next); onChange(next); };
  const add = (tok: string) => commit([...chosen, tok]);
  const removeAt = (i: number) => commit(chosen.filter((_, idx) => idx !== i));
  const pool = tokens.filter((tok) => (countBy(tokens)[tok] ?? 0) > chosen.filter((x) => x === tok).length);

  return (
    <div>
      <div className="min-h-[46px] border border-dashed border-border rounded-[12px] p-2 mb-2 flex gap-1.5 flex-wrap items-center">
        {chosen.length === 0 && <span className="text-faint text-sm px-1">…</span>}
        {chosen.map((tok, i) => (
          <button
            key={i}
            onClick={() => removeAt(i)}
            aria-label={`${tok} entfernen`}
            className="border border-primary bg-[var(--primary-wash)] text-primary rounded-[10px] px-3 py-1.5 font-rounded font-semibold
              transition-transform duration-150 active:scale-[.97] cursor-pointer"
          >
            {tok}
          </button>
        ))}
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {pool.map((tok, i) => (
          <button
            key={i}
            onClick={() => add(tok)}
            className="border border-border rounded-[10px] px-3 py-1.5 bg-card font-rounded font-semibold
              transition-[border-color,transform] duration-150 hover:border-border-strong active:scale-[.97] cursor-pointer"
          >
            {tok}
          </button>
        ))}
        {chosen.length > 0 && (
          <button onClick={() => commit([])} className="label cursor-pointer">{t('reset', locale)}</button>
        )}
      </div>
    </div>
  );
}
function countBy(a: string[]) { return a.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] ?? 0) + 1, m), {}); }

// --- Match: tap a German word, then tap its meaning to pair them ---
function Match({ pairs, onChange, locale }: { pairs: { de: string; en: string; fr?: string }[]; onChange: (v: Record<string, string>) => void; locale: Locale }) {
  const [sel, setSel] = useState<Record<string, string>>({});
  const [activeDe, setActiveDe] = useState<string | null>(null);
  const meanings = pairs.map((p) => pickLocale(p.en, p.fr, locale));
  const taken = new Set(Object.values(sel));

  const commit = (next: Record<string, string>) => { setSel(next); onChange(next); };
  const clear = (de: string) => { const next = { ...sel }; delete next[de]; commit(next); };
  const assign = (meaning: string) => {
    if (!activeDe) return;
    commit({ ...sel, [activeDe]: meaning });
    setActiveDe(null);
  };

  return (
    <div>
      <p className="label text-muted mb-2">{t('tapToPair', locale)}</p>
      <div className="grid gap-2 mb-3">
        {pairs.map((p) => {
          const meaning = sel[p.de];
          const active = activeDe === p.de;
          return (
            <button
              key={p.de}
              onClick={() => (meaning ? clear(p.de) : setActiveDe(active ? null : p.de))}
              className={
                'flex items-center gap-2.5 text-left rounded-[12px] px-3 py-2.5 border font-rounded transition-[border-color,background] duration-150 cursor-pointer ' +
                (active ? 'border-primary bg-[var(--primary-wash)]' : meaning ? 'border-[var(--good)] bg-[var(--good-wash)]' : 'border-border bg-card hover:border-border-strong')
              }
            >
              <span className="font-bold min-w-[90px]">{p.de}</span>
              <span className={'text-sm ' + (meaning ? 'text-text' : 'text-faint')}>
                {meaning ?? t('chooseEllipsis', locale)}
              </span>
            </button>
          );
        })}
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {meanings.filter((m) => !taken.has(m)).map((m) => (
          <button
            key={m}
            onClick={() => assign(m)}
            disabled={!activeDe}
            className="border border-border rounded-[10px] px-3 py-1.5 bg-card font-rounded font-semibold text-sm
              transition-[border-color,transform] duration-150 hover:border-border-strong active:scale-[.97]
              disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer"
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
