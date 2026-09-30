export type IssueKind = 'grammar' | 'spelling' | 'style';

export type Issue = {
  id: string;
  offset: number;
  length: number;
  message: string;
  replacements: string[];
  ruleId: string;
  kind: IssueKind;
  source: 'lt' | 'local';
};

export const MAX_CHARS = 2000;
export const LT_URL = process.env.NEXT_PUBLIC_LT_URL || 'https://api.languagetool.org/v2/check';

export class RateLimitError extends Error {
  constructor() { super('rate-limited'); }
}

type LtMatch = {
  message?: string;
  offset: number;
  length: number;
  replacements?: { value: string }[];
  rule?: { id?: string; issueType?: string; category?: { id?: string } };
};

function kindOf(m: LtMatch): IssueKind {
  const type = m.rule?.issueType;
  const cat = m.rule?.category?.id;
  if (type === 'misspelling' || cat === 'TYPOS') return 'spelling';
  if (type === 'style' || cat === 'STYLE' || cat === 'REDUNDANCY') return 'style';
  return 'grammar';
}

export function mapMatches(json: unknown, text: string): Issue[] {
  const matches = (json as { matches?: LtMatch[] } | null)?.matches;
  if (!Array.isArray(matches)) return [];
  const out: Issue[] = [];
  for (const m of matches) {
    if (typeof m.offset !== 'number' || typeof m.length !== 'number' || m.length <= 0) continue;
    if (m.offset < 0 || m.offset + m.length > text.length) continue;
    out.push({
      id: `lt-${m.offset}-${m.length}-${m.rule?.id ?? ''}`,
      offset: m.offset,
      length: m.length,
      message: m.message ?? '',
      replacements: (m.replacements ?? []).map((r) => r.value).filter(Boolean).slice(0, 4),
      ruleId: m.rule?.id ?? '',
      kind: kindOf(m),
      source: 'lt',
    });
  }
  return out.sort((a, b) => a.offset - b.offset);
}

export async function checkText(text: string, motherTongue: 'en' | 'fr', signal?: AbortSignal): Promise<Issue[]> {
  const body = new URLSearchParams({
    text: text.slice(0, MAX_CHARS),
    language: 'de-DE',
    motherTongue,
    enabledOnly: 'false',
  });
  const res = await fetch(LT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body,
    signal,
  });
  if (res.status === 429) throw new RateLimitError();
  if (!res.ok) throw new Error(`languagetool ${res.status}`);
  return mapMatches(await res.json(), text.slice(0, MAX_CHARS));
}

// Apply one replacement and return the new text.
export function applyIssue(text: string, issue: Pick<Issue, 'offset' | 'length'>, replacement: string): string {
  return text.slice(0, issue.offset) + replacement + text.slice(issue.offset + issue.length);
}

export function overlaps(a: { offset: number; length: number }, b: { offset: number; length: number }): boolean {
  return a.offset < b.offset + b.length && b.offset < a.offset + a.length;
}

// Carry issues from the text they were computed on to the current text after an edit.
// Issues inside the edited region, or whose flagged text changed, are dropped.
export function rebaseIssues<T extends { offset: number; length: number }>(issues: T[], oldText: string, newText: string): T[] {
  if (oldText === newText) return issues;
  const max = Math.min(oldText.length, newText.length);
  let p = 0;
  while (p < max && oldText[p] === newText[p]) p++;
  let s = 0;
  while (s < max - p && oldText[oldText.length - 1 - s] === newText[newText.length - 1 - s]) s++;
  const oldEnd = oldText.length - s;
  const delta = newText.length - oldText.length;
  const out: T[] = [];
  for (const i of issues) {
    const end = i.offset + i.length;
    let offset: number;
    if (end < p) offset = i.offset;
    else if (i.offset >= oldEnd) offset = i.offset + delta;
    else continue;
    if (newText.slice(offset, offset + i.length) !== oldText.slice(i.offset, end)) continue;
    out.push({ ...i, offset });
  }
  return out;
}
