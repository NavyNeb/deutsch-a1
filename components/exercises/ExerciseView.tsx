'use client';
import { useState } from 'react';
import type { Exercise } from '@/content/types';
import { checkAnswer } from '@/lib/exercises';
import { audioSrc } from '@/lib/audio';
import { useLocale, type Locale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Button } from '@/components/ui/Button';
import { AudioButton } from '@/components/ui/AudioButton';

export function ExerciseView({ exercise, onResult }: { exercise: Exercise; onResult: (correct: boolean) => void }) {
  const [response, setResponse] = useState<unknown>(exercise.type === 'match' ? {} : exercise.type === 'wordOrder' ? [] : undefined);
  const [result, setResult] = useState<{ correct: boolean; explanation?: string } | null>(null);
  const { locale } = useLocale();

  const check = () => { const r = checkAnswer(exercise, response); setResult(r); onResult(r.correct); };
  const opt = (active: boolean) => ({ border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`, background: active ? 'var(--accent-wash)' : 'var(--card)', borderRadius: 6, padding: '10px 14px', margin: '4px 0', width: '100%', textAlign: 'left' as const });

  const unattempted =
    exercise.type === 'wordOrder' ? (response as string[]).length !== exercise.tokens.length :
    exercise.type === 'match' ? Object.keys(response as Record<string, string>).length !== exercise.pairs.length :
    response === undefined;

  return (
    <div>
      {'prompt' in exercise && <p style={{ marginBottom: 12 }}>{exercise.prompt}</p>}

      {(exercise.type === 'multipleChoice') && exercise.options.map((o, i) => (
        <button key={i} style={opt(response === i)} onClick={() => setResponse(i)}>{o}</button>
      ))}

      {exercise.type === 'listenChoose' && (<>
        <div style={{ marginBottom: 10 }}><AudioButton src={audioSrc(exercise.audio)} label={t('playClip', locale)} /> <span className="label">{t('listenThenChoose', locale)}</span></div>
        {exercise.options.map((o, i) => (<button key={i} style={opt(response === i)} onClick={() => setResponse(i)}>{o}</button>))}
      </>)}

      {exercise.type === 'articlePicker' && (<div style={{ display: 'flex', gap: 8 }}>
        {(['der', 'die', 'das'] as const).map((g) => (
          <button key={g} aria-label={g} style={opt(response === g)} onClick={() => setResponse(g)}>{g}</button>
        ))}
        <span style={{ alignSelf: 'center', fontFamily: 'var(--font-serif)', fontSize: 22 }}>{exercise.word}</span>
      </div>)}

      {exercise.type === 'fillBlank' && (
        <input className="mock-input" style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '10px 12px', width: '100%' }}
          onChange={(e) => setResponse(e.target.value)} placeholder={t('typeYourAnswer', locale)} />
      )}

      {exercise.type === 'wordOrder' && <WordOrder tokens={exercise.tokens} onChange={setResponse} locale={locale} />}
      {exercise.type === 'match' && <Match pairs={exercise.pairs} onChange={setResponse} locale={locale} />}

      <div style={{ marginTop: 14 }}><Button onClick={check} disabled={unattempted}>{t('check', locale)}</Button></div>

      {result && (
        <div style={{ marginTop: 12, color: result.correct ? 'var(--das)' : 'var(--die)' }}>
          {result.correct ? '✓ Richtig!' : `✗ ${t('notQuite', locale)}`} {result.explanation && <span style={{ color: 'var(--muted)' }}>— {result.explanation}</span>}
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

// --- Match: pick an English meaning for each German word ---
function Match({ pairs, onChange, locale }: { pairs: { de: string; en: string }[]; onChange: (v: Record<string, string>) => void; locale: Locale }) {
  const [sel, setSel] = useState<Record<string, string>>({});
  const ens = pairs.map((p) => p.en);
  const set = (de: string, en: string) => { const next = { ...sel, [de]: en }; setSel(next); onChange(next); };
  return (<div style={{ display: 'grid', gap: 8 }}>
    {pairs.map((p) => (
      <div key={p.de} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: 'var(--font-serif)', minWidth: 90 }}>{p.de}</span>
        <select value={sel[p.de] ?? ''} onChange={(e) => set(p.de, e.target.value)} style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '6px 8px' }}>
          <option value="" disabled>{t('chooseEllipsis', locale)}</option>
          {ens.map((en) => <option key={en} value={en}>{en}</option>)}
        </select>
      </div>
    ))}
  </div>);
}
