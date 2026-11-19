import type { Feedback, Turn, AiLocale } from './sprechen-ai';

// The browser's side of the AI speaking partner: calls /api/sprechen and turns every failure into a plain kind.

export type AiError = 'off' | 'limit' | 'timeout' | 'upstream' | 'network' | 'invalid';
export type AiResult<T> = { ok: true; data: T } | { ok: false; error: AiError };

type Fetch = typeof fetch;

async function post<T>(body: unknown, pick: (j: Record<string, unknown>) => T | undefined, f: Fetch): Promise<AiResult<T>> {
  let res: Response;
  try {
    res = await f('/api/sprechen', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  } catch {
    return { ok: false, error: 'network' };
  }
  let j: Record<string, unknown> = {};
  try { j = (await res.json()) as Record<string, unknown>; } catch { /* keep empty */ }
  if (res.ok) {
    const data = pick(j);
    return data === undefined ? { ok: false, error: 'upstream' } : { ok: true, data };
  }
  if (res.status === 503) return { ok: false, error: 'off' };
  if (res.status === 429) return { ok: false, error: 'limit' };
  if (res.status === 504) return { ok: false, error: 'timeout' };
  if (res.status === 400 || res.status === 413) return { ok: false, error: 'invalid' };
  return { ok: false, error: 'upstream' };
}

export function aiTurn(scenario: string, turns: Turn[], f: Fetch = fetch): Promise<AiResult<string>> {
  return post({ mode: 'turn', scenario, turns }, (j) => (typeof j.text === 'string' && j.text ? j.text : undefined), f);
}

export function aiFeedback(scenario: string, turns: Turn[], locale: AiLocale, f: Fetch = fetch): Promise<AiResult<Feedback>> {
  return post({ mode: 'feedback', scenario, turns, locale }, (j) => (j.feedback && typeof j.feedback === 'object' ? (j.feedback as Feedback) : undefined), f);
}
