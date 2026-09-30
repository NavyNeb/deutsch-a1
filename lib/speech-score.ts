export type WordStatus = 'ok' | 'near' | 'missed';
export type WordResult = { word: string; status: WordStatus; heard?: string };
export type SpeechScore = { words: WordResult[]; extra: string[]; percent: number; passed: boolean };

export const PASS_PERCENT = 80;

const NUMBER_WORDS = [
  'null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn',
  'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn', 'zwanzig',
];

// Lowercase, ß->ss, strip punctuation, keep umlauts (they carry meaning).
export function normalizeSpeech(s: string): string {
  return s
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Recognisers often return digits ("2") where the sentence has "zwei".
function tokenize(s: string): string[] {
  return normalizeSpeech(s)
    .split(' ')
    .filter(Boolean)
    .map((w) => {
      const n = /^\d+$/.test(w) ? Number(w) : -1;
      return n >= 0 && n <= 20 ? NUMBER_WORDS[n] : w;
    });
}

const stripUmlauts = (w: string) =>
  w.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ae|oe|ue/g, (m) => m[0]);

function distance(a: string, b: string): number {
  if (a === b) return 0;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[b.length];
}

function compare(target: string, heard: string): WordStatus | null {
  if (target === heard) return 'ok';
  if (stripUmlauts(target) === stripUmlauts(heard)) return 'near';
  if (target.length >= 4 && distance(target, heard) <= 1) return 'near';
  return null;
}

// Original spelling (capitals kept) of each target token, aligned with tokenize().
function displayTokens(text: string): string[] {
  const out: string[] = [];
  for (const part of text.split(/\s+/)) {
    const trimmed = part.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
    const toks = tokenize(trimmed);
    toks.forEach((tk, i) => out.push(i === 0 ? trimmed : tk));
  }
  return out;
}

// Aligns what was heard to the target sentence word by word (edit-distance DP),
// so a skipped or extra word does not shift the colouring of everything after it.
export function scoreSpeech(heardText: string, targetText: string): SpeechScore {
  const target = tokenize(targetText);
  const heard = tokenize(heardText);
  const n = target.length;
  const m = heard.length;
  const rawTarget = displayTokens(targetText);

  const MISS = 1;
  const NEAR = 0.4;
  const cost: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) cost[i][0] = i * MISS;
  for (let j = 1; j <= m; j++) cost[0][j] = j * MISS;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const c = compare(target[i - 1], heard[j - 1]);
      const sub = c === 'ok' ? 0 : c === 'near' ? NEAR : 2 * MISS;
      cost[i][j] = Math.min(cost[i - 1][j - 1] + sub, cost[i - 1][j] + MISS, cost[i][j - 1] + MISS);
    }
  }

  const words: WordResult[] = [];
  const extra: string[] = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0) {
      const c = compare(target[i - 1], heard[j - 1]);
      const sub = c === 'ok' ? 0 : c === 'near' ? NEAR : 2 * MISS;
      if (Math.abs(cost[i][j] - (cost[i - 1][j - 1] + sub)) < 1e-9) {
        words.push(
          c ? { word: rawTarget[i - 1], status: c, heard: c === 'ok' ? undefined : heard[j - 1] }
            : { word: rawTarget[i - 1], status: 'missed', heard: heard[j - 1] },
        );
        i--; j--;
        continue;
      }
    }
    if (i > 0 && Math.abs(cost[i][j] - (cost[i - 1][j] + MISS)) < 1e-9) {
      words.push({ word: rawTarget[i - 1], status: 'missed' });
      i--;
    } else {
      extra.push(heard[j - 1]);
      j--;
    }
  }
  words.reverse();
  extra.reverse();

  const ok = words.filter((w) => w.status === 'ok').length;
  const near = words.filter((w) => w.status === 'near').length;
  const raw = n === 0 ? 0 : (ok + 0.7 * near) / n - Math.min(0.3, extra.length * 0.05);
  const percent = Math.max(0, Math.min(100, Math.round(raw * 100)));
  return { words, extra, percent, passed: percent >= PASS_PERCENT };
}

// Recognisers return several hypotheses; keep the one closest to the target.
export function bestAlternative(alternatives: string[], target: string): { text: string; score: SpeechScore } | null {
  let best: { text: string; score: SpeechScore } | null = null;
  for (const text of alternatives) {
    const score = scoreSpeech(text, target);
    if (!best || score.percent > best.score.percent) best = { text, score };
  }
  return best;
}
