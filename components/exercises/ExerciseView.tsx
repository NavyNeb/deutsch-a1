'use client';
import { useState } from 'react';
import type { Exercise } from '@/content/types';
import { checkAnswer } from '@/lib/exercises';
import { audioSrc } from '@/lib/audio';
import { Button } from '@/components/ui/Button';
import { AudioButton } from '@/components/ui/AudioButton';

export function ExerciseView({ exercise, onResult }: { exercise: Exercise; onResult: (correct: boolean) => void }) {
  const [response, setResponse] = useState<unknown>(exercise.type === 'match' ? {} : exercise.type === 'wordOrder' ? [] : undefined);
  const [result, setResult] = useState<{ correct: boolean; explanation?: string } | null>(null);

  const check = () => { const r = checkAnswer(exercise, response); setResult(r); onResult(r.correct); };
  const opt = (active: boolean) => ({ border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`, background: active ? '#F3E7E3' : 'var(--card)', borderRadius: 6, padding: '10px 14px', margin: '4px 0', width: '100%', textAlign: 'left' as const });

  return (
    <div>
      {'prompt' in exercise && <p style={{ marginBottom: 12 }}>{exercise.prompt}</p>}

      {(exercise.type === 'multipleChoice') && exercise.options.map((o, i) => (
        <button key={i} style={opt(response === i)} onClick={() => setResponse(i)}>{o}</button>
      ))}

      {exercise.type === 'listenChoose' && (<>
        <div style={{ marginBottom: 10 }}><AudioButton src={audioSrc(exercise.audio)} label="Play the clip" /> <span className="label">Listen, then choose</span></div>
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
          onChange={(e) => setResponse(e.target.value)} placeholder="Type your answer" />
      )}

      {exercise.type === 'wordOrder' && <WordOrder tokens={exercise.tokens} onChange={setResponse} />}
      {exercise.type === 'match' && <Match pairs={exercise.pairs} onChange={setResponse} />}

      <div style={{ marginTop: 14 }}><Button onClick={check} disabled={response === undefined}>Check</Button></div>

      {result && (
        <div style={{ marginTop: 12, color: result.correct ? 'var(--das)' : 'var(--die)' }}>
          {result.correct ? '✓ Richtig!' : '✗ Not quite.'} {result.explanation && <span style={{ color: 'var(--muted)' }}>— {result.explanation}</span>}
        </div>
      )}
    </div>
  );
}

// --- WordOrder: click tokens to build the sentence ---
function WordOrder({ tokens, onChange }: { tokens: string[]; onChange: (v: string[]) => void }) {
  const [chosen, setChosen] = useState<string[]>([]);
  const pick = (t: string, i: number) => { const next = [...chosen, t]; setChosen(next); onChange(next); };
  const pool = tokens.filter((t) => (countBy(tokens)[t] ?? 0) > (chosen.filter(x => x === t).length));
  return (<div>
    <div style={{ minHeight: 38, border: '1px dashed var(--border)', borderRadius: 6, padding: 8, marginBottom: 8 }}>{chosen.join(' ')}</div>
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {pool.map((t, i) => <button key={i} onClick={() => pick(t, i)} style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '6px 10px', background: 'var(--card)' }}>{t}</button>)}
      {chosen.length > 0 && <button onClick={() => { setChosen([]); onChange([]); }} className="label">reset</button>}
    </div>
  </div>);
}
function countBy(a: string[]) { return a.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] ?? 0) + 1, m), {}); }

// --- Match: pick an English meaning for each German word ---
function Match({ pairs, onChange }: { pairs: { de: string; en: string }[]; onChange: (v: Record<string, string>) => void }) {
  const [sel, setSel] = useState<Record<string, string>>({});
  const ens = pairs.map((p) => p.en);
  const set = (de: string, en: string) => { const next = { ...sel, [de]: en }; setSel(next); onChange(next); };
  return (<div style={{ display: 'grid', gap: 8 }}>
    {pairs.map((p) => (
      <div key={p.de} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: 'var(--font-serif)', minWidth: 90 }}>{p.de}</span>
        <select value={sel[p.de] ?? ''} onChange={(e) => set(p.de, e.target.value)} style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '6px 8px' }}>
          <option value="" disabled>choose…</option>
          {ens.map((en) => <option key={en} value={en}>{en}</option>)}
        </select>
      </div>
    ))}
  </div>);
}
