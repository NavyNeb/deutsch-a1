'use client';
import { useState } from 'react';
import type { Exercise } from '@/content/types';
import { checkAnswer } from '@/lib/exercises';
import { audioSrc } from '@/lib/audio';
import { useLocale, type Locale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick as pickLocale } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { AudioButton } from '@/components/ui/AudioButton';
import { FeedbackSheet } from './FeedbackSheet';
import { ArticleTiles } from './ArticleTiles';
import { OptionTile } from './OptionTile';

// Initial (empty) response shape for a given exercise type — used both on
// mount and to reset the exercise when the learner hits "Try again".
const initialResponse = (exercise: Exercise): unknown =>
  exercise.type === 'match' ? {} : exercise.type === 'wordOrder' ? [] : undefined;

// Reveal-after-this-many failed attempts. The learner is never stuck: once they
// have tried and missed twice, they can uncover the answer and move on.
const REVEAL_AFTER = 2;

export function ExerciseView({
  exercise,
  onResult,
  onPass,
  onContinue,
}: {
  exercise: Exercise;
  onResult: (correct: boolean) => void;
  // Called when the learner may advance — a correct answer, or a revealed one.
  onPass?: () => void;
  // The feedback sheet's "Weiter" — advance to the next step. The sheet omits the button when absent.
  onContinue?: () => void;
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

  const showSheet = revealed || result !== null;
  const articleExercise = exercise.type === 'articlePicker' ? exercise : null;

  return (
    <div className={showSheet ? 'pb-72' : undefined}>
      {prompt && <p className="mb-4 text-[22px] font-display font-medium leading-snug">{prompt}</p>}

      {exercise.type === 'multipleChoice' && options!.map((o, i) => (
        <OptionTile key={i} active={response === i} onClick={() => setResponse(i)}>{o}</OptionTile>
      ))}

      {exercise.type === 'listenChoose' && (<>
        <div className="mb-2.5 flex items-center gap-2">
          <AudioButton src={audioSrc(exercise.audio)} label={t('playClip', locale)} />
          <span className="label">{t('listenThenChoose', locale)}</span>
        </div>
        {options!.map((o, i) => (<OptionTile key={i} active={response === i} onClick={() => setResponse(i)}>{o}</OptionTile>))}
      </>)}

      {articleExercise && (
        <div>
          <div className="font-display font-bold text-[clamp(48px,10vw,76px)] leading-none tracking-[-0.04em] mb-8">{articleExercise.word}</div>
          <ArticleTiles
            value={response as 'der' | 'die' | 'das' | undefined}
            onChange={setResponse}
            disabled={showSheet}
            correct={revealed ? articleExercise.answer : undefined}
          />
        </div>
      )}

      {exercise.type === 'fillBlank' && (
        <input
          key={attempt}
          className="mock-input w-full h-14 rounded-[18px] border-[1.5px] border-border-strong bg-card px-5 text-[18px] outline-none focus:border-text transition-colors"
          onChange={(e) => setResponse(e.target.value)}
          placeholder={t('typeYourAnswer', locale)}
        />
      )}

      {exercise.type === 'wordOrder' && <WordOrder key={attempt} tokens={exercise.tokens} onChange={setResponse} locale={locale} />}
      {exercise.type === 'match' && <Match key={attempt} pairs={exercise.pairs} onChange={setResponse} locale={locale} />}

      {!showSheet && (
        <div className="mt-6">
          <Button size="lg" onClick={check} disabled={unattempted}>{t('check', locale)}</Button>
        </div>
      )}

      {revealed && (
        <FeedbackSheet
          kind="fast"
          answerLabel={t('answerLabel', locale)}
          answer={answerText(exercise, locale)}
          primaryLabel="Weiter"
          onPrimary={onContinue}
        />
      )}

      {result && !revealed && (
        result.correct ? (
          <FeedbackSheet kind="richtig" hint={result.explanation} primaryLabel="Weiter" onPrimary={onContinue} />
        ) : (
          <FeedbackSheet
            kind="fast"
            hintLabel={t('tip', locale)}
            hint={wrongAnswerHint}
            primaryLabel={t('tryAgain', locale)}
            onPrimary={tryAgain}
            secondaryLabel={wrongCount >= REVEAL_AFTER ? t('showAnswer', locale) : undefined}
            onSecondary={wrongCount >= REVEAL_AFTER ? reveal : undefined}
          />
        )
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
      <div className="min-h-[56px] border border-dashed border-border-strong rounded-[14px] p-2 mb-2 flex gap-1.5 flex-wrap items-center">
        {chosen.length === 0 && <span className="text-faint text-sm px-1">…</span>}
        {chosen.map((tok, i) => (
          <button
            key={i}
            onClick={() => removeAt(i)}
            aria-label={`${tok} entfernen`}
            className="border border-text bg-surface-2 text-text rounded-[12px] px-4 py-2.5 font-display font-medium text-[17px]
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
            className="border border-border-strong rounded-[12px] px-4 py-2.5 bg-card font-display font-medium text-[17px]
              transition-[border-color,transform] duration-150 hover:border-border-strong active:scale-[.97] cursor-pointer"
          >
            {tok}
          </button>
        ))}
        {chosen.length > 0 && (
          <button onClick={() => commit([])} className="label cursor-pointer px-2 py-2.5">{t('reset', locale)}</button>
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
                (active ? 'border-text bg-surface-2' : meaning ? 'border-ok bg-[var(--good-wash)]' : 'border-border bg-card hover:border-border-strong')
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
            className="border border-border rounded-[10px] px-3.5 py-2.5 sm:px-3 sm:py-1.5 bg-card font-rounded font-semibold text-sm
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
