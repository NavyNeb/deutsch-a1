'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

type AssistMode = 'explain' | 'examples' | 'quiz';

const MODES: { mode: AssistMode; label: string }[] = [
  { mode: 'explain', label: 'Explain more' },
  { mode: 'examples', label: '5 more examples' },
  { mode: 'quiz', label: 'Quiz me' },
];

export function AssistButtons({ term, context }: { term: string; context?: string }) {
  const [text, setText] = useState<string | null>(null);
  const [loading, setLoading] = useState<AssistMode | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (process.env.NEXT_PUBLIC_ASSIST !== '1') return null;

  async function ask(mode: AssistMode) {
    setLoading(mode);
    setError(null);
    try {
      const res = await fetch('/api/assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, term, context }),
      });
      const data = (await res.json()) as { text: string };
      if (!res.ok) {
        setText(null);
        setError(data.text || 'Assist is unavailable right now.');
        return;
      }
      setText(data.text);
    } catch {
      setError('Something went wrong asking for assist. Please try again.');
    } finally {
      setLoading(null);
    }
  }

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {MODES.map(({ mode, label }) => (
          <Button key={mode} onClick={() => ask(mode)} disabled={loading !== null}>
            {loading === mode ? '…' : label}
          </Button>
        ))}
      </div>
      {error ? (
        <p style={{ color: 'var(--muted)', marginTop: 12 }}>{error}</p>
      ) : null}
      {text ? (
        <div style={{ marginTop: 12 }}>
          <Card>
            <p style={{ whiteSpace: 'pre-wrap' }}>{text}</p>
          </Card>
        </div>
      ) : null}
    </div>
  );
}
