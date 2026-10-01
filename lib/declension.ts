export type CaseRow = { case: 'nom' | 'acc' | 'dat' | 'gen'; sing: string; plur: string };
export type NounNote = 'plural-missing' | 'gender-ambiguous';

const SING: Record<string, [string, string, string, string]> = {
  m: ['der', 'den', 'dem', 'des'],
  f: ['die', 'die', 'der', 'der'],
  n: ['das', 'das', 'dem', 'des'],
};
const PLUR = ['die', 'die', 'den', 'der'] as const;
const DASH = '—';

function genitiveFallback(w: string, g: string): string {
  if (g === 'f') return w;
  return /(s|ß|x|z|sch)$/i.test(w) ? w + 'es' : w + 's';
}

export function nounCases(e: { w: string; g?: string; pl?: string; gen?: string }): { rows: CaseRow[]; note?: NounNote } {
  const genders = (e.g ?? '').split('/').map((x) => x.trim()).filter((x) => x in SING);
  const g = genders[0] ?? 'm';
  const art = SING[g];
  const gen = e.gen && e.gen !== '-' ? e.gen : genitiveFallback(e.w, g);
  const hasPl = Boolean(e.pl && e.pl !== '-');
  const pl = hasPl ? (e.pl as string) : '';
  const datPl = !hasPl ? '' : /[ns]$/i.test(pl) ? pl : pl + 'n';
  const p = (a: string, f: string) => (hasPl ? `${a} ${f}` : DASH);
  const rows: CaseRow[] = [
    { case: 'nom', sing: `${art[0]} ${e.w}`, plur: p(PLUR[0], pl) },
    { case: 'acc', sing: `${art[1]} ${acc(e.w, g, e.gen)}`, plur: p(PLUR[1], pl) },
    { case: 'dat', sing: `${art[2]} ${dat(e.w, g, e.gen)}`, plur: p(PLUR[2], datPl) },
    { case: 'gen', sing: `${art[3]} ${gen}`, plur: p(PLUR[3], pl) },
  ];
  const note: NounNote | undefined = !hasPl ? 'plural-missing' : genders.length > 1 ? 'gender-ambiguous' : undefined;
  return { rows, note };
}

// Weak (n-declension) masculines take -(e)n in every case except the nominative; the data's genitive ending in -n marks them.
function weak(w: string, g: string, gen?: string): boolean {
  return g === 'm' && Boolean(gen) && gen !== w && gen!.endsWith('n') && gen!.startsWith(w);
}
function acc(w: string, g: string, gen?: string) { return weak(w, g, gen) ? gen! : w; }
function dat(w: string, g: string, gen?: string) { return weak(w, g, gen) ? gen! : w; }

const IRREGULAR_COMP: Record<string, [string, string]> = {
  gut: ['besser', 'am besten'],
  viel: ['mehr', 'am meisten'],
  gern: ['lieber', 'am liebsten'],
  hoch: ['höher', 'am höchsten'],
  nah: ['näher', 'am nächsten'],
};

function regularComparison(w: string): [string, string] {
  const drop = /(el|euer|auer)$/i.test(w);
  const comp = drop ? w.replace(/e(l|r)$/i, (_, c) => c) + 'er' : w + 'er';
  const sup = /(d|t|s|ß|x|z|sch)$/i.test(w) ? w + 'est' : w + 'st';
  return [comp, 'am ' + sup + 'en'];
}

export function comparison(e: { w: string; v?: string }) {
  const irr = IRREGULAR_COMP[e.w];
  if (irr) return { positive: e.w, comparative: irr[0], superlative: irr[1], irregular: true, check: false };
  const m = e.v?.match(/^\s*([^,]+?)\s*,\s*(am\s+[^,]+?)\s*$/i);
  if (m) {
    const [reg] = regularComparison(e.w);
    return { positive: e.w, comparative: m[1], superlative: m[2], irregular: m[1] !== reg, check: false };
  }
  const [comp, sup] = regularComparison(e.w);
  return { positive: e.w, comparative: comp, superlative: sup, irregular: false, check: true };
}
