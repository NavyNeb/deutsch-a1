'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Check, Lightbulb, Loader2, Sparkles, Trash2, X } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { useProgress } from '@/lib/progress-store';
import { claimPracticeXp } from '@/lib/daily-xp';
import { useGrammarCheck } from '@/lib/useGrammarCheck';
import { applyIssue, MAX_CHARS, rebaseIssues, type Issue, type IssueKind } from '@/lib/languagetool';
import { FREE_WRITE_ID, WRITING_PROMPTS, type WritingPrompt } from '@/content/writing-prompts';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Segmented } from '@/components/ui/Segmented';

type Level = WritingPrompt['level'];
const LEVELS: Level[] = ['A1', 'A2', 'B1'];
const FREE_MIN_WORDS = 10;
const XP_FINISH = 15;
const XP_DAILY_CAP = 45;
const ASSIST_ON = process.env.NEXT_PUBLIC_ASSIST === '1';
const DRAFT_KEY = (id: string) => `deutsch:write-draft:${id}`;

const KIND_LABEL: Record<IssueKind, UIKey> = {
  spelling: 'writeKindSpelling',
  grammar: 'writeKindGrammar',
  style: 'writeKindStyle',
};
const KIND_COLOR: Record<IssueKind, string> = {
  spelling: 'var(--bad)',
  grammar: 'var(--amber)',
  style: 'var(--primary)',
};

const countWords = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

function sentenceAround(text: string, offset: number, length: number): string {
  const before = text.slice(0, offset);
  const start = Math.max(before.lastIndexOf('.'), before.lastIndexOf('!'), before.lastIndexOf('?'), before.lastIndexOf('\n')) + 1;
  const rest = text.slice(offset + length);
  const m = rest.search(/[.!?\n]/);
  const end = m === -1 ? text.length : offset + length + m + 1;
  return text.slice(start, end).trim().slice(0, 500);
}

type Why = { state: 'loading' | 'done' | 'error'; text?: string };

function loadDraft(id: string): string {
  try { return localStorage.getItem(DRAFT_KEY(id)) ?? ''; } catch { return ''; }
}

export function WriteEditor() {
  const { locale } = useLocale();
  const { awardXp } = useProgress();

  const [level, setLevel] = useState<Level>('A1');
  const [promptId, setPromptId] = useState<string>(WRITING_PROMPTS[0].id);
  const [text, setText] = useState('');
  const [ignored, setIgnored] = useState<Set<string>>(new Set());
  const [activeId, setActiveId] = useState<string | null>(null);
  const [why, setWhy] = useState<Record<string, Why>>({});
  const [saved, setSaved] = useState(false);
  const [finish, setFinish] = useState<{ xp: number; words: number } | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  const prompt = useMemo(() => WRITING_PROMPTS.find((p) => p.id === promptId) ?? null, [promptId]);
  const isFree = promptId === FREE_WRITE_ID;
  const minWords = prompt?.minWords ?? FREE_MIN_WORDS;
  const prompts = WRITING_PROMPTS.filter((p) => p.level === level);

  // Draft per task, restored on the client only.
  useEffect(() => {
    setText(loadDraft(promptId));
    setIgnored(new Set()); setWhy({}); setFinish(null); setActiveId(null); setSaved(false);
    setHydrated(true);
  }, [promptId]);

  useEffect(() => {
    if (!hydrated) return;
    const id = setTimeout(() => {
      try {
        if (text) localStorage.setItem(DRAFT_KEY(promptId), text); else localStorage.removeItem(DRAFT_KEY(promptId));
        setSaved(text.length > 0);
      } catch { /* storage unavailable */ }
    }, 500);
    return () => clearTimeout(id);
  }, [text, promptId, hydrated]);

  const { status, issues, checkedText } = useGrammarCheck(text, locale, hydrated);

  // Keep the textarea as tall as its content; the highlight layer follows the wrapper.
  const grow = useCallback(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = `${ta.scrollHeight}px`;
  }, []);
  useEffect(grow, [text, grow, hydrated]);
  useEffect(() => {
    window.addEventListener('resize', grow);
    return () => window.removeEventListener('resize', grow);
  }, [grow]);

  const visible = useMemo(() => {
    const rebased = rebaseIssues(issues, checkedText, text);
    const out: Issue[] = [];
    let end = -1;
    for (const i of rebased) {
      const snippet = text.slice(i.offset, i.offset + i.length);
      if (ignored.has(`${i.ruleId}|${snippet}`) || i.offset < end) continue;
      out.push(i);
      end = i.offset + i.length;
    }
    return out;
  }, [issues, checkedText, text, ignored]);

  const segments = useMemo(() => {
    const parts: { s: string; issue?: Issue }[] = [];
    let pos = 0;
    for (const i of visible) {
      if (i.offset > pos) parts.push({ s: text.slice(pos, i.offset) });
      parts.push({ s: text.slice(i.offset, i.offset + i.length), issue: i });
      pos = i.offset + i.length;
    }
    parts.push({ s: text.slice(pos) + '​' });
    return parts;
  }, [visible, text]);

  const updateActive = () => {
    const ta = taRef.current;
    if (!ta) return;
    const c = ta.selectionStart;
    const hit = visible.find((i) => c > i.offset && c <= i.offset + i.length);
    setActiveId(hit ? hit.id : null);
  };

  const replaceWith = (issue: Issue, replacement: string) => {
    const next = applyIssue(text, issue, replacement);
    setText(next);
    setActiveId(null);
    const caret = issue.offset + replacement.length;
    requestAnimationFrame(() => taRef.current?.setSelectionRange(caret, caret));
  };

  const ignore = (issue: Issue) => {
    const snippet = text.slice(issue.offset, issue.offset + issue.length);
    setIgnored((s) => new Set(s).add(`${issue.ruleId}|${snippet}`));
  };

  const explain = async (issue: Issue) => {
    const snippet = text.slice(issue.offset, issue.offset + issue.length);
    const key = `${issue.ruleId}|${snippet}`;
    if (why[key]?.state === 'loading') return;
    setWhy((w) => ({ ...w, [key]: { state: 'loading' } }));
    try {
      const res = await fetch('/api/assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'grammar-explain',
          sentence: sentenceAround(text, issue.offset, issue.length),
          snippet,
          message: issue.message,
          replacement: issue.replacements[0] ?? '',
          locale,
          level,
        }),
      });
      const data = (await res.json()) as { text?: string };
      if (!res.ok || !data.text) throw new Error('assist');
      setWhy((w) => ({ ...w, [key]: { state: 'done', text: data.text } }));
    } catch {
      setWhy((w) => ({ ...w, [key]: { state: 'error' } }));
    }
  };

  const words = countWords(text);
  const remaining = Math.max(0, minWords - words);
  const canFinish = words >= minWords;

  const onFinish = () => {
    const granted = claimPracticeXp(`write:${promptId}`, XP_FINISH, XP_DAILY_CAP);
    if (granted > 0) awardXp(granted);
    setFinish({ xp: granted, words });
  };

  const clear = () => {
    setText('');
    setIgnored(new Set()); setWhy({}); setFinish(null);
    taRef.current?.focus();
  };

  const pickLevel = (l: Level) => {
    setLevel(l);
    setPromptId(WRITING_PROMPTS.find((p) => p.level === l)!.id);
  };

  const statusLine =
    status === 'paused' ? t('writePaused', locale)
    : status === 'error' ? t('writeCheckError', locale)
    : status === 'checking' ? t(visible.length ? 'writeStale' : 'writeChecking', locale)
    : words === 0 ? ''
    : visible.length === 0 ? t('writeAllGood', locale)
    : `${visible.length} ${t('writeIssuesUnit', locale)}`;
  const statusTone = status === 'paused' || status === 'error' ? 'text-[var(--amber)]' : status === 'done' && visible.length === 0 && words > 0 ? 'text-[var(--good)]' : 'text-muted';

  return (
    <div className="mx-auto max-w-[820px] px-5 py-8 md:py-12">
      <h1 className="font-rounded font-extrabold text-[34px] md:text-[44px] tracking-tight m-0">{t('writeTitle', locale)}</h1>
      <p className="text-text-2 text-[17px] leading-relaxed mt-2 mb-6 max-w-[56ch]">{t('writeSubtitle', locale)}</p>

      <div className="mb-3">
        <p className="text-[12px] font-rounded font-bold tracking-wider text-muted uppercase mb-2">{t('writeChooseTask', locale)}</p>
        <div className="flex flex-wrap items-center gap-2">
          <Segmented label={t('level', locale)} value={level} onChange={pickLevel} options={LEVELS.map((l) => ({ value: l, label: l }))} />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {prompts.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPromptId(p.id)}
              aria-pressed={p.id === promptId}
              className={
                'rounded-full border px-3.5 py-2 text-[14px] font-rounded font-bold transition ' +
                (p.id === promptId ? 'border-primary bg-[var(--primary-wash)] text-primary' : 'border-border bg-card text-text-2 hover:bg-surface-2')
              }
            >
              {pick(p.title, p.titleFr, locale)}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPromptId(FREE_WRITE_ID)}
            aria-pressed={isFree}
            className={
              'rounded-full border px-3.5 py-2 text-[14px] font-rounded font-bold transition ' +
              (isFree ? 'border-primary bg-[var(--primary-wash)] text-primary' : 'border-dashed border-border bg-card text-text-2 hover:bg-surface-2')
            }
          >
            {t('writeFree', locale)}
          </button>
        </div>
      </div>

      <Card className="!p-5 mb-4">
        <p className="m-0 text-[16.5px] leading-relaxed">{prompt ? pick(prompt.task, prompt.taskFr, locale) : t('writeFreeTask', locale)}</p>
        {prompt && (
          <div className="mt-3">
            <p className="flex items-center gap-1.5 text-[12px] font-rounded font-bold tracking-wider text-muted uppercase m-0 mb-2">
              <Lightbulb size={14} />{t('writeUsefulPhrases', locale)}
            </p>
            <div className="flex flex-wrap gap-2">
              {prompt.hints.map((h) => (
                <span key={h} lang="de" className="rounded-[10px] bg-surface-2 px-2.5 py-1 text-[14px] text-text-2">{h}</span>
              ))}
            </div>
          </div>
        )}
      </Card>

      {finish && (
        <div role="status" className="rounded-[16px] border border-border bg-[var(--good-wash)] px-5 py-4 mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-rounded font-extrabold text-[20px] m-0 text-[var(--good)]">{t('writeDone', locale)}</p>
            <p className="m-0 mt-1 text-[14.5px] text-text-2">
              {finish.words} {t('wordsUnit', locale)}
              {' · '}
              {finish.xp > 0 ? `+${finish.xp} ${t('xpEarned', locale)}` : t('writeXpAlready', locale)}
            </p>
          </div>
          <Button variant="secondary" size="sm" onClick={() => setFinish(null)}>{t('writeKeepEditing', locale)}</Button>
        </div>
      )}

      <div className="rounded-[20px] border border-border bg-card p-4 md:p-5 focus-within:border-primary transition-colors">
        <div className="relative text-[17px] leading-[1.75]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 text-transparent"
            style={{ font: 'inherit', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
          >
            {segments.map((seg, idx) =>
              seg.issue ? (
                <mark
                  key={idx}
                  className="text-transparent rounded-[3px]"
                  style={{
                    background: seg.issue.id === activeId ? 'var(--primary-wash)' : 'transparent',
                    textDecoration: 'underline wavy',
                    textDecorationColor: KIND_COLOR[seg.issue.kind],
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {seg.s}
                </mark>
              ) : (
                <span key={idx}>{seg.s}</span>
              ),
            )}
          </div>
          <textarea
            ref={taRef}
            lang="de"
            value={text}
            maxLength={MAX_CHARS * 2}
            onChange={(e) => setText(e.target.value)}
            onSelect={updateActive}
            onClick={updateActive}
            onKeyUp={updateActive}
            placeholder={t('writePlaceholder', locale)}
            spellCheck={false}
            autoCapitalize="sentences"
            aria-label={t('writeTitle', locale)}
            className="relative block w-full min-h-[220px] resize-none overflow-hidden border-0 bg-transparent p-0 m-0 outline-none text-text placeholder:text-faint"
            style={{ font: 'inherit', outline: 'none', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
          />
        </div>
      </div>

      <div className="sticky bottom-0 z-10 -mx-5 mt-3 border-t border-border bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] px-5 py-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom,0px))] md:static md:mx-0 md:border-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13.5px]">
            <span className="font-rounded font-bold text-text-2">
              {words} {t('wordsUnit', locale)}
              <span className="text-muted font-normal"> · {t('writeGoal', locale)} {minWords}</span>
            </span>
            <span className={`inline-flex items-center gap-1.5 ${statusTone}`} aria-live="polite">
              {status === 'checking' && <Loader2 size={14} className="animate-spin" />}
              {statusLine}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {text && (
              <Button variant="ghost" size="sm" onClick={clear}><Trash2 size={15} />{t('writeClear', locale)}</Button>
            )}
            <Button size="sm" onClick={onFinish} disabled={!canFinish}>
              <Check size={16} />
              {canFinish ? t('writeFinish', locale) : `${remaining} ${t('writeMoreWords', locale)}`}
            </Button>
          </div>
        </div>
        <p className="m-0 mt-2 text-[12px] text-faint min-h-[16px]">
          {text.length > MAX_CHARS ? t('writeTooLong', locale) : saved ? t('writeDraftSaved', locale) : ''}
        </p>
      </div>

      {visible.length > 0 && (
        <section className="mt-6" aria-label={t('writeSuggestions', locale)}>
          <h2 className="font-rounded font-extrabold text-[20px] m-0 mb-3">{t('writeSuggestions', locale)}</h2>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {visible.map((issue) => {
              const snippet = text.slice(issue.offset, issue.offset + issue.length);
              const w = why[`${issue.ruleId}|${snippet}`];
              const active = issue.id === activeId;
              return (
                <li key={issue.id}>
                  <div
                    onClick={() => setActiveId(issue.id)}
                    className={'rounded-[16px] border bg-card p-4 transition-colors ' + (active ? 'border-primary' : 'border-border')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: KIND_COLOR[issue.kind] }} />
                      <span className="text-[12px] font-rounded font-bold tracking-wider text-muted uppercase">{t(KIND_LABEL[issue.kind], locale)}</span>
                    </div>
                    <p lang="de" className="m-0 text-[16px]">
                      <span className="rounded-[6px] bg-[var(--bad-wash)] px-1.5 text-[var(--bad)] line-through decoration-1">{snippet}</span>
                    </p>
                    {issue.replacements.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {issue.replacements.map((r) => (
                          <button
                            key={r}
                            type="button"
                            lang="de"
                            onClick={(e) => { e.stopPropagation(); replaceWith(issue, r); }}
                            className="rounded-full border border-[var(--good)] bg-[var(--good-wash)] px-3.5 py-1.5 font-rounded font-bold text-[15px] text-[var(--good)] hover:brightness-95 active:scale-[0.98] transition"
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    )}
                    {issue.message && <p className="m-0 mt-3 text-[14px] text-muted leading-relaxed">{issue.message}</p>}
                    {w?.state === 'done' && (
                      <p className="m-0 mt-3 rounded-[12px] bg-[var(--primary-wash)] px-3.5 py-3 text-[14.5px] leading-relaxed whitespace-pre-wrap">{w.text}</p>
                    )}
                    {w?.state === 'error' && <p className="m-0 mt-3 text-[13.5px] text-[var(--amber)]">{t('writeWhyError', locale)}</p>}
                    <div className="mt-3 flex items-center gap-2">
                      {ASSIST_ON && (
                        <Button variant="secondary" size="sm" onClick={(e) => { e.stopPropagation(); explain(issue); }} disabled={w?.state === 'loading'}>
                          {w?.state === 'loading' ? <Loader2 size={15} className="animate-spin" /> : <Sparkles size={15} />}
                          {w?.state === 'loading' ? t('writeWhyLoading', locale) : t('writeWhy', locale)}
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); ignore(issue); }}>
                        <X size={15} />{t('writeIgnore', locale)}
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <p className="mt-10 text-[12.5px] text-faint leading-relaxed max-w-[70ch]">{t('writePrivacy', locale)}</p>
    </div>
  );
}
