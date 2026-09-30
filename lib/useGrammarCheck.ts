'use client';
import { useEffect, useRef, useState } from 'react';
import { checkText, MAX_CHARS, overlaps, RateLimitError, type Issue } from './languagetool';
import { checkArticles } from './article-check';

export type CheckStatus = 'idle' | 'checking' | 'done' | 'paused' | 'error';

const DEBOUNCE_MS = 700;
const MIN_GAP_MS = 2000; // pace requests for the ~20/min public API; 429s are handled by backoff
const BACKOFF_START_MS = 15000;
const BACKOFF_MAX_MS = 60000;
const CACHE_MAX = 30;

const cache = new Map<string, Issue[]>();
let lastRequestAt = 0;

function remember(key: string, issues: Issue[]) {
  cache.delete(key);
  cache.set(key, issues);
  if (cache.size > CACHE_MAX) cache.delete(cache.keys().next().value as string);
}

// Debounced, cancellable grammar check. `issues` always belong to `checkedText`;
// callers must only apply a replacement when `checkedText === text`.
export function useGrammarCheck(text: string, locale: 'en' | 'fr', enabled = true) {
  const [status, setStatus] = useState<CheckStatus>('idle');
  const [issues, setIssues] = useState<Issue[]>([]);
  const [checkedText, setCheckedText] = useState('');
  const backoff = useRef(BACKOFF_START_MS);

  useEffect(() => {
    if (!enabled) return;
    const target = text.slice(0, MAX_CHARS);
    if (!target.trim()) {
      setIssues([]); setCheckedText(text); setStatus('idle');
      return;
    }
    const key = `${locale}|${target}`;
    const hit = cache.get(key);
    if (hit) {
      setIssues(hit); setCheckedText(text); setStatus('done');
      return;
    }

    const ctrl = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    setStatus((s) => (s === 'paused' ? s : 'checking'));

    const run = async () => {
      lastRequestAt = Date.now();
      try {
        const [lt, local] = await Promise.all([
          checkText(target, locale, ctrl.signal),
          checkArticles(target, locale),
        ]);
        if (ctrl.signal.aborted) return;
        const merged = [...lt, ...local.filter((l) => !lt.some((x) => overlaps(x, l)))].sort((a, b) => a.offset - b.offset);
        remember(key, merged);
        backoff.current = BACKOFF_START_MS;
        setIssues(merged); setCheckedText(text); setStatus('done');
      } catch (err) {
        if (ctrl.signal.aborted) return;
        if (err instanceof RateLimitError) {
          const local = await checkArticles(target, locale).catch(() => [] as Issue[]);
          if (ctrl.signal.aborted) return;
          setIssues(local); setCheckedText(text);
          setStatus('paused');
          timer = setTimeout(run, backoff.current);
          backoff.current = Math.min(BACKOFF_MAX_MS, backoff.current * 2);
        } else {
          // Network trouble: keep the local checks working and retry on the next edit.
          const local = await checkArticles(target, locale).catch(() => [] as Issue[]);
          if (ctrl.signal.aborted) return;
          setIssues(local); setCheckedText(text); setStatus('error');
        }
      }
    };

    const wait = Math.max(DEBOUNCE_MS, MIN_GAP_MS - (Date.now() - lastRequestAt));
    timer = setTimeout(run, wait);
    return () => { ctrl.abort(); if (timer) clearTimeout(timer); };
  }, [text, locale, enabled]);

  return { status, issues, checkedText };
}
