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

// Initial (empty) response shape for a given exercise type — used both on
// mount and to reset the exercise when the learner hits "Try again".
const initialResponse = (exercise: Exercise): unknown =>
  exercise.type === 'match' ? {} : exercise.type === 'wordOrder' ? [] : undefined;

export function ExerciseView({ exercise, onResult }: { exercise: Exercise; onResult: (correct: boolean) => void }) {
  const [response, setResponse] = useState<unknown>(initialResponse(exercise));
  const [result, setResult] = useState<{ correct: boolean; explanation?: string } | null>(null);
  // Bumped on "Try again" so uncontrolled/inner-state child inputs (fillBlank's
  // text input, WordOrder, Match) remount with a clean slate instead of just
  // silently keeping stale visible state.
  const [attempt, setAttempt] = useState(0);
  const { locale } = useLocale();

  const check = () => { const r = checkAnswer(exercise, response, locale); setResult(r); onResult(r.correct); };
  const tryAgain = () => { setResponse(initialResponse(exercise)); setResult(null); setAttempt((n) => n + 1); };
  const opt = (active: boolean) => ({ border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`, background: active ? 'var(--accent-wash)' : 'var(--card)', borderRadius: 6, padding: '10px 14px', margin: '4px 0', width: '100%', textAlign: 'left' as const });

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
      {prompt && <p style={{ marginBottom: 12 }}>{prompt}</p>}

      {(exercise.type === 'multipleChoice') && options!.map((o, i) => (
        <button key={i} style={opt(response === i)} onClick={() => setResponse(i)}>{o}</button>
      ))}

      {exercise.type === 'listenChoose' && (<>
        <div style={{ marginBottom: 10 }}><AudioButton src={audioSrc(exercise.audio)} label={t('playClip', locale)} /> <span className="label">{t('listenThenChoose', locale)}</span></div>
        {options!.map((o, i) => (<button key={i} style={opt(response === i)} onClick={() => setResponse(i)}>{o}</button>))}
      </>)}

      {exercise.type === 'articlePicker' && (<div style={{ display: 'flex', gap: 8 }}>
        {(['der', 'die', 'das'] as const).map((g) => (
          <button key={g} aria-label={g} style={opt(response === g)} onClick={() => setResponse(g)}>{g}</button>
        ))}
        <span style={{ alignSelf: 'center', fontFamily: 'var(--font-serif)', fontSize: 22 }}>{exercise.word}</span>
      </div>)}

      {exercise.type === 'fillBlank' && (
        <input key={attempt} className="mock-input" style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '10px 12px', width: '100%' }}
          onChange={(e) => setResponse(e.target.value)} placeholder={t('typeYourAnswer', locale)} />
      )}

      {exercise.type === 'wordOrder' && <WordOrder key={attempt} tokens={exercise.tokens} onChange={setResponse} locale={locale} />}
      {exercise.type === 'match' && <Match key={attempt} pairs={exercise.pairs} onChange={setResponse} locale={locale} />}

      <div style={{ marginTop: 14 }}><Button onClick={check} disabled={unattempted}>{t('check', locale)}</Button></div>

      {result && (
        <div style={{ marginTop: 12 }}>
          {result.correct ? (
            <div style={{ color: 'var(--das)' }}>
              ✓ Richtig! {result.explanation && <span style={{ color: 'var(--muted)' }}>— {result.explanation}</span>}
            </div>
          ) : (
            <div>
              <div style={{ color: 'var(--die)' }}>✗ {t('notQuite', locale)}</div>
              <div role="note" aria-label={t('tip', locale)}
                style={{ marginTop: 8, background: 'var(--accent-wash)', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 14px' }}>
                {wrongAnswerHint && (
                  <p style={{ margin: 0 }}>
                    <strong>💡 {t('tip', locale)}:</strong> <span style={{ color: 'var(--ink)' }}>{wrongAnswerHint}</span>
                  </p>
                )}
                <div style={{ marginTop: wrongAnswerHint ? 10 : 0 }}>
                  <button onClick={tryAgain}
                    style={{ border: '1px solid var(--accent)', color: 'var(--accent)', background: 'transparent', borderRadius: 6, padding: '8px 14px', fontWeight: 600 }}>
                    {t('tryAgain', locale)}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// --- WordOrder: click tokens to build the sentence ---
function WordOrder({ tokens, onChange, locale }: { tokens: string[]; onChange: (v: string[]) => void; locale: Locale }) {
  const [chosen, setChosen] = useState<string[]>([]);
  const pick = (tok: string, i: number) => { const next = [...chosen, tok]; setChosen(next); onChange(next); };
  const pool = tokens.filter((tok) => (countBy(tokens)[tok] ?? 0) > (chosen.filter(x => x === tok).length));
  return (<div>
    <div style={{ minHeight: 38, border: '1px dashed var(--border)', borderRadius: 6, padding: 8, marginBottom: 8 }}>{chosen.join(' ')}</div>
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {pool.map((tok, i) => <button key={i} onClick={() => pick(tok, i)} style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '6px 10px', background: 'var(--card)' }}>{tok}</button>)}
      {chosen.length > 0 && <button onClick={() => { setChosen([]); onChange([]); }} className="label">{t('reset', locale)}</button>}
    </div>
  </div>);
}
function countBy(a: string[]) { return a.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] ?? 0) + 1, m), {}); }

// --- Match: pick the translated meaning for each German word ---
function Match({ pairs, onChange, locale }: { pairs: { de: string; en: string; fr?: string }[]; onChange: (v: Record<string, string>) => void; locale: Locale }) {
  const [sel, setSel] = useState<Record<string, string>>({});
  const meanings = pairs.map((p) => pickLocale(p.en, p.fr, locale));
  const set = (de: string, meaning: string) => { const next = { ...sel, [de]: meaning }; setSel(next); onChange(next); };
  return (<div style={{ display: 'grid', gap: 8 }}>
    {pairs.map((p) => (
      <div key={p.de} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: 'var(--font-serif)', minWidth: 90 }}>{p.de}</span>
        <select value={sel[p.de] ?? ''} onChange={(e) => set(p.de, e.target.value)} style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '6px 8px' }}>
          <option value="" disabled>{t('chooseEllipsis', locale)}</option>
          {meanings.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
    ))}
  </div>);
}
