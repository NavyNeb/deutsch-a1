import { lessons } from '@/content';
import type { DictHit } from '@/lib/dictionary';

export function wordHref(headword: string, q?: string): string {
  const base = `/dictionary/${encodeURIComponent(headword)}`;
  return q ? `${base}?q=${encodeURIComponent(q)}` : base;
}

export function lemmaOf(hit: Pick<DictHit, 'entry'>): string {
  return hit.entry.w;
}

export type LessonSentence = {
  de: string;
  en: string;
  fr?: string;
  lessonId: string;
  lessonTitle: { de: string; en: string; fr?: string };
};

const SPECIALS = /[.*+?^${}()|[\]\\]/g;
const escapeRe = (s: string) => s.replace(SPECIALS, (m) => '\\' + m);

export function lessonSentences(forms: string[], limit = 6): LessonSentence[] {
  const wanted = [...new Set(forms.map((f) => f.trim()).filter(Boolean))];
  if (!wanted.length) return [];
  const re = new RegExp(`(?<![\\p{L}])(?:${wanted.map(escapeRe).join('|')})(?![\\p{L}])`, 'iu');
  const out: LessonSentence[] = [];
  const seen = new Set<string>();
  const push = (s: { de: string; en: string; fr?: string }, l: (typeof lessons)[number]) => {
    if (out.length >= limit || seen.has(s.de) || !re.test(s.de)) return;
    seen.add(s.de);
    out.push({ de: s.de, en: s.en, fr: s.fr, lessonId: l.id, lessonTitle: l.title });
  };
  for (const l of lessons) {
    for (const st of l.steps) {
      if (st.kind === 'vocab') push(st.item.example, l);
      else if (st.kind === 'pronunciation') st.items.forEach((i) => push(i.example, l));
      else if (st.kind === 'grammar') st.note.examples.forEach((e) => push(e, l));
    }
    if (out.length >= limit) break;
  }
  return out;
}
