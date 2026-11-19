import { normalizeSpeech } from './speech-score';

// Facts about a spoken talk, worked out from the recognised text and its length. Pure and tested:
// the numbers shown after a Thema-Talk or an exam part come from here.

export type TalkLevel = 'B1' | 'B2';

/** Little words people say while thinking. Recognisers drop many of them, so this is a lower bound. */
const FILLERS = ['äh', 'ähm', 'öh', 'öhm', 'ehm', 'hm', 'hmm', 'mhm'];

/** Connectors and discourse markers that lift a talk from a list of sentences to an argument. */
export const CONNECTORS = [
  'weil', 'denn', 'deshalb', 'deswegen', 'darum', 'trotzdem', 'obwohl', 'außerdem', 'ausserdem', 'jedoch', 'allerdings',
  'dagegen', 'zwar', 'sondern', 'damit', 'sodass', 'während', 'nachdem', 'bevor', 'falls', 'wenn', 'dass', 'ob',
  'zuerst', 'danach', 'schließlich', 'schliesslich', 'zum beispiel', 'zum einen', 'zum anderen', 'einerseits', 'andererseits',
  'im gegensatz dazu', 'meiner meinung nach', 'ich finde', 'ich glaube', 'ich denke', 'meiner ansicht nach', 'vor allem',
  'zusammenfassend', 'abschließend', 'insgesamt', 'außerdem', 'dadurch', 'folglich', 'also', 'nämlich',
];

/** Verb forms that show Konjunktiv II ("würde", "hätte", "wäre", "könnte"), a B1/B2 marker. */
const KONJUNKTIV_II = ['würde', 'würden', 'würdest', 'hätte', 'hätten', 'hättest', 'wäre', 'wären', 'wärst', 'könnte', 'könnten', 'sollte', 'müsste', 'dürfte'];

export type StructureStep = { id: string; patterns: string[] };

export type TalkMetrics = {
  seconds: number;
  words: number;
  wordsPerMinute: number;
  distinctWords: number;
  /** distinct / total, 0–1; higher means a wider vocabulary. */
  varietyRatio: number;
  fillers: number;
  connectors: string[];
  konjunktivII: number;
  phrasesUsed: string[];
  structureDone: string[];
};

const tokens = (s: string) => normalizeSpeech(s).split(' ').filter(Boolean);

function containsPhrase(text: string, phrase: string): boolean {
  const p = normalizeSpeech(phrase);
  if (!p) return false;
  return (' ' + text + ' ').includes(' ' + p + ' ');
}

export function analyzeTalk(
  text: string,
  seconds: number,
  opts: { phrases?: string[]; structure?: StructureStep[] } = {},
): TalkMetrics {
  const norm = normalizeSpeech(text);
  const toks = tokens(text);
  const words = toks.filter((w) => !FILLERS.includes(w)).length;
  const distinct = new Set(toks.filter((w) => !FILLERS.includes(w))).size;
  const minutes = seconds / 60;
  return {
    seconds: Math.round(seconds),
    words,
    wordsPerMinute: minutes > 0 ? Math.round(words / minutes) : 0,
    distinctWords: distinct,
    varietyRatio: words ? Math.round((distinct / words) * 100) / 100 : 0,
    fillers: toks.filter((w) => FILLERS.includes(w)).length,
    connectors: [...new Set(CONNECTORS.filter((c) => containsPhrase(norm, c)))],
    konjunktivII: toks.filter((w) => KONJUNKTIV_II.includes(w)).length,
    phrasesUsed: (opts.phrases ?? []).filter((p) => containsPhrase(norm, p)),
    structureDone: (opts.structure ?? []).filter((s) => s.patterns.some((p) => containsPhrase(norm, p))).map((s) => s.id),
  };
}

export type Pace = 'slow' | 'good' | 'fast';

/** Exam German at B1/B2 sounds natural at roughly 70–120 recognised words per minute. */
export function paceOf(wordsPerMinute: number): Pace {
  if (wordsPerMinute < 60) return 'slow';
  if (wordsPerMinute > 130) return 'fast';
  return 'good';
}

/** What a learner should reach: minimum seconds spoken and words, by level. */
export const TALK_TARGETS: Record<TalkLevel, { seconds: number; words: number }> = {
  B1: { seconds: 60, words: 80 },
  B2: { seconds: 180, words: 300 },
};

export type TalkTip = 'speakMore' | 'slowPace' | 'fastPace' | 'moreConnectors' | 'tryKonjunktiv' | 'moreVariety' | 'great';

/** Up to three plain next steps for the learner, most useful first. */
export function talkTips(m: TalkMetrics, level: TalkLevel): TalkTip[] {
  const out: TalkTip[] = [];
  const target = TALK_TARGETS[level];
  if (m.seconds < target.seconds * 0.8 || m.words < target.words * 0.7) out.push('speakMore');
  const pace = paceOf(m.wordsPerMinute);
  if (pace === 'slow' && m.seconds >= 20) out.push('slowPace');
  if (pace === 'fast') out.push('fastPace');
  if (m.connectors.length < (level === 'B2' ? 5 : 3)) out.push('moreConnectors');
  if (level === 'B2' && m.konjunktivII === 0) out.push('tryKonjunktiv');
  if (m.words >= 40 && m.varietyRatio < 0.5) out.push('moreVariety');
  return (out.length ? out : (['great'] as TalkTip[])).slice(0, 3);
}
