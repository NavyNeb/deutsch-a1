export const TENSE_IDS = [
  'praesens',
  'praeteritum',
  'perfekt',
  'plusquamperfekt',
  'futur1',
  'futur2',
  'konj1',
  'konj2',
  'imperativ',
  'passiv',
] as const;
export type TenseId = (typeof TENSE_IDS)[number];

export interface Row {
  pronoun: string;
  text: string;
}

export type Aux = 'haben' | 'sein' | 'both';

export interface Conjugation {
  confidence: 'ok' | 'check';
  aux: Aux;
  separable?: string;
  reflexive: boolean;
  tenses: Record<TenseId, Row[]>;
  wuerde?: Row[];
  passivPraeteritum?: Row[];
  passivPerfekt?: Row[];
}

export interface PrincipalParts {
  third: string;
  pret: string;
  aux: Aux;
  participle: string;
  separable?: string;
  reflexive: boolean;
  alt: boolean;
}

const PRON = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const PRON_IMP = ['du', 'ihr', 'Sie'];
const REFL = ['mich', 'dich', 'sich', 'uns', 'euch', 'sich'];
const HABEN = ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'];
const HATTE = ['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten'];
const SEIN = ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'];
const WAR = ['war', 'warst', 'war', 'waren', 'wart', 'waren'];
const WERDEN = ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'];
const WURDE = ['wurde', 'wurdest', 'wurde', 'wurden', 'wurdet', 'wurden'];
const WUERDE = ['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'];

const VOWELS = 'aeiouäöüy';
const isVowel = (c: string) => c !== '' && VOWELS.includes(c);
const last = (s: string, n = 1) => s.slice(-n);
const at = (s: string, fromEnd: number) => (s.length >= fromEnd ? s[s.length - fromEnd] : '');

function splitAlt(s: string): { value: string; alt: boolean } {
  const i = s.indexOf('/');
  return i < 0 ? { value: s, alt: false } : { value: s.slice(0, i), alt: true };
}

export function parsePrincipalParts(v: string | undefined): PrincipalParts | null {
  if (!v) return null;
  const parts = v.split(',').map((p) => p.trim());
  if (parts.length !== 3 || parts.some((p) => !p)) return null;

  let alt = false;
  let reflexive = false;
  const head = (p: string) => {
    const toks = p.split(/\s+/).filter((t) => {
      if (t === 'sich') {
        reflexive = true;
        return false;
      }
      return true;
    });
    const a = splitAlt(toks[0]);
    if (a.alt) alt = true;
    return { word: a.value, rest: toks.slice(1).join(' ') };
  };
  const first = head(parts[0]);
  const second = head(parts[1]);

  const toks3 = parts[2]
    .split(/\s+/)
    .filter((t) => {
      if (t === 'sich') {
        reflexive = true;
        return false;
      }
      return t !== 'or';
    });
  if (toks3.length < 2) return null;
  const partTok = splitAlt(toks3[toks3.length - 1]);
  if (partTok.alt) alt = true;
  const auxStr = toks3.slice(0, -1).join(' ');
  const hasH = /\b(hat|haben)\b/.test(auxStr);
  const hasS = /\b(ist|sein)\b/.test(auxStr);
  if (!hasH && !hasS) return null;

  return {
    third: first.word,
    pret: second.word,
    aux: hasH && hasS ? 'both' : hasH ? 'haben' : 'sein',
    participle: partTok.value,
    separable: first.rest || undefined,
    reflexive,
    alt,
  };
}

// Stems that take an extra -e- before -st/-t/-te (arbeitest, rechnet, atmete).
function needsE(stem: string): boolean {
  if (/[dt]$/.test(stem)) return true;
  const l = last(stem);
  if (l !== 'm' && l !== 'n') return false;
  const c1 = at(stem, 2);
  if (!c1 || isVowel(c1)) return false;
  if (c1 === 'l' || c1 === 'r' || c1 === l) return false;
  if (c1 === 'h' && isVowel(at(stem, 3))) return false;
  return true;
}
const duEnding = (stem: string) => (/[sßxz]$/.test(stem) ? 't' : needsE(stem) ? 'est' : 'st');
const ihrEnding = (stem: string) => (needsE(stem) ? 'et' : 't');

function umlaut(w: string): string {
  const m = /[aeiouäöüy]+(?=[^aeiouäöüy]*$)/.exec(w);
  if (!m) return w;
  const map: Record<string, string> = { a: 'ä', o: 'ö', u: 'ü', au: 'äu' };
  const rep = map[m[0]];
  return rep ? w.slice(0, m.index) + rep + w.slice(m.index + m[0].length) : w;
}

// Mixed verbs: weak endings with a Präteritum stem change.
const MIXED_KONJ2: [string, string][] = [
  ['brachte', 'brächte'],
  ['dachte', 'dächte'],
  ['kannte', 'kennte'],
  ['nannte', 'nennte'],
  ['rannte', 'rennte'],
  ['brannte', 'brennte'],
  ['hatte', 'hätte'],
  ['wusste', 'wüsste'],
];
// Strong verbs whose Konjunktiv II is not the plain umlaut of the Präteritum.
const STRONG_KONJ2: [string, string][] = [
  ['stand', 'stünde'],
  ['half', 'hülfe'],
  ['starb', 'stürbe'],
  ['warf', 'würfe'],
  ['warb', 'würbe'],
  ['begann', 'begönne'],
  ['gewann', 'gewönne'],
  ['galt', 'gölte'],
  ['schwamm', 'schwömme'],
  ['befahl', 'beföhle'],
  ['empfahl', 'empföhle'],
  ['verdarb', 'verdürbe'],
];

const weakEndings = (base: string) => [base, base + 'st', base, base + 'n', base + 't', base + 'n'];

function konj2Base(pret: string): string {
  if (pret.endsWith('te')) {
    for (const [k, v] of MIXED_KONJ2) if (pret.endsWith(k)) return pret.slice(0, -k.length) + v;
    return pret;
  }
  for (const [k, v] of STRONG_KONJ2) if (pret.endsWith(k)) return pret.slice(0, -k.length) + v;
  return umlaut(pret) + 'e';
}

interface Hard {
  praesens: string[];
  praeteritum: string[];
  konj1?: string[];
  konj2: string[];
  imperativ: string[];
  participle: string;
  aux: Aux;
}

const paradigm = (ich: string, wir: string, ihr: string, du?: string): string[] => [
  ich,
  du ?? ich + duEnding(ich),
  ich,
  wir,
  ihr,
  wir,
];

const HARD: Record<string, Hard> = {
  sein: {
    praesens: SEIN,
    praeteritum: WAR,
    konj1: ['sei', 'seiest', 'sei', 'seien', 'seiet', 'seien'],
    konj2: ['wäre', 'wärest', 'wäre', 'wären', 'wäret', 'wären'],
    imperativ: ['sei', 'seid', 'seien Sie'],
    participle: 'gewesen',
    aux: 'sein',
  },
  haben: {
    praesens: HABEN,
    praeteritum: HATTE,
    konj2: ['hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten'],
    imperativ: ['hab', 'habt', 'haben Sie'],
    participle: 'gehabt',
    aux: 'haben',
  },
  werden: {
    praesens: WERDEN,
    praeteritum: WURDE,
    konj2: WUERDE,
    imperativ: ['werde', 'werdet', 'werden Sie'],
    participle: 'geworden',
    aux: 'sein',
  },
  wissen: {
    praesens: paradigm('weiß', 'wissen', 'wisst'),
    praeteritum: weakEndings('wusste'),
    konj2: weakEndings('wüsste'),
    imperativ: ['wisse', 'wisst', 'wissen Sie'],
    participle: 'gewusst',
    aux: 'haben',
  },
  können: modal('kann', 'können', 'könnt', 'konnte', 'könnte', 'gekonnt'),
  müssen: modal('muss', 'müssen', 'müsst', 'musste', 'müsste', 'gemusst'),
  dürfen: modal('darf', 'dürfen', 'dürft', 'durfte', 'dürfte', 'gedurft'),
  sollen: modal('soll', 'sollen', 'sollt', 'sollte', 'sollte', 'gesollt'),
  wollen: modal('will', 'wollen', 'wollt', 'wollte', 'wollte', 'gewollt'),
  mögen: modal('mag', 'mögen', 'mögt', 'mochte', 'möchte', 'gemocht'),
};

function modal(ich: string, wir: string, ihr: string, pret: string, konj2: string, participle: string): Hard {
  return {
    praesens: paradigm(ich, wir, ihr),
    praeteritum: weakEndings(pret),
    konj2: weakEndings(konj2),
    imperativ: [],
    participle,
    aux: 'haben',
  };
}

type Kind = 'eln' | 'ern' | 'en' | 'n';
function stemOf(inf: string): { stem: string; kind: Kind } {
  if (inf.endsWith('eln')) return { stem: inf.slice(0, -1), kind: 'eln' };
  if (inf.endsWith('ern')) return { stem: inf.slice(0, -1), kind: 'ern' };
  if (inf.endsWith('en')) return { stem: inf.slice(0, -2), kind: 'en' };
  return { stem: inf.slice(0, -1), kind: 'n' };
}

const INSEPARABLE = /^(be|ge|er|ver|zer|ent|emp|miss)/;
function fallbackParticiple(inf: string, stem: string): string {
  const core = needsE(stem) ? stem + 'et' : stem + 't';
  return INSEPARABLE.test(inf) || inf.endsWith('ieren') ? core : 'ge' + core;
}

export function conjugate({ lemma, v }: { lemma: string; v?: string }): Conjugation {
  const reflLemma = /^sich\s+/.test(lemma);
  const bare = lemma.replace(/^sich\s+/, '').trim();
  const parsed = parsePrincipalParts(v);
  const reflexive = reflLemma || !!parsed?.reflexive;
  const separable = parsed?.separable;
  const baseInf = separable && bare.startsWith(separable) ? bare.slice(separable.length) : bare;
  const hard = !separable ? HARD[bare] : undefined;

  let check = !parsed || parsed.alt;
  if (!/^[a-zäöüß]+$/i.test(bare) || !/n$/.test(bare)) check = true;
  if (separable && !bare.startsWith(separable)) check = true;
  if (hard && parsed && !parsed.alt) check = false;
  if (hard && !parsed) check = false;

  const { stem, kind } = stemOf(baseInf);
  const regThird = stem + (needsE(stem) ? 'et' : 't');
  const third = parsed?.third ?? regThird;
  const pret = parsed?.pret ?? stem + (needsE(stem) ? 'ete' : 'te');
  const participle = parsed?.participle ?? hard?.participle ?? fallbackParticiple(baseInf, stem);
  const aux: Aux = parsed?.aux ?? hard?.aux ?? 'haben';

  let praesens: string[];
  let praeteritum: string[];
  let konj1: string[];
  let konj2: string[];
  let impDu: string;
  let impRows: string[] | null = null;
  let wuerde = true;

  if (hard) {
    praesens = hard.praesens;
    praeteritum = hard.praeteritum;
    konj2 = hard.konj2;
    konj1 = hard.konj1 ?? konj1Forms(stem, kind, baseInf);
    impRows = hard.imperativ;
    impDu = '';
    wuerde = false;
  } else {
    let changed = false;
    let duStem = stem;
    let du: string;
    let ich: string;
    if (third !== regThird && third.endsWith('t')) {
      changed = true;
      if (stem.endsWith('t')) {
        duStem = third;
        du = /st$/.test(third) ? third : third + 'st';
      } else {
        duStem = third.slice(0, -1);
        du = duStem + duEnding(duStem);
      }
      ich = kind === 'eln' ? stem.slice(0, -2) + 'le' : stem + 'e';
    } else if (third !== regThird) {
      check = true;
      ich = third;
      du = third + duEnding(third);
    } else {
      ich = kind === 'eln' ? stem.slice(0, -2) + 'le' : stem + 'e';
      du = stem + duEnding(stem);
    }
    praesens = [ich, du, third, baseInf, stem + ihrEnding(stem), baseInf];

    praeteritum = pret.endsWith('te') ? weakEndings(pret) : strongPret(pret);
    konj2 = weakEndings(konj2Base(pret));
    konj1 = konj1Forms(stem, kind, baseInf);

    if (kind === 'eln') impDu = stem.slice(0, -2) + 'le';
    else if (kind === 'ern') impDu = stem + 'e';
    else {
      const useChanged = changed && !/[äöü]/.test(duStem);
      impDu = useChanged ? duStem : needsE(stem) ? stem + 'e' : stem;
    }
  }

  const decorate = (forms: string[]): Row[] =>
    forms.map((f, i) => ({
      pronoun: PRON[i],
      text: [f, reflexive ? REFL[i] : '', separable ?? ''].filter(Boolean).join(' '),
    }));
  const compound = (auxForms: string[], tail: string): Row[] =>
    auxForms.map((a, i) => ({
      pronoun: PRON[i],
      text: [a, reflexive ? REFL[i] : '', tail].filter(Boolean).join(' '),
    }));
  const auxPres = aux === 'haben' ? HABEN : aux === 'sein' ? SEIN : HABEN.map((h, i) => `${h}/${SEIN[i]}`);
  const auxPast = aux === 'haben' ? HATTE : aux === 'sein' ? WAR : HATTE.map((h, i) => `${h}/${WAR[i]}`);
  const auxInf = aux === 'both' ? 'haben/sein' : aux === 'haben' ? 'haben' : 'sein';

  const imperativ: Row[] = impRows
    ? impRows.map((text, i) => ({ pronoun: PRON_IMP[i], text }))
    : [
        [impDu, reflexive ? 'dich' : '', separable ?? ''],
        [praesens[4], reflexive ? 'euch' : '', separable ?? ''],
        [baseInf, 'Sie', reflexive ? 'sich' : '', separable ?? ''],
      ].map((p, i) => ({ pronoun: PRON_IMP[i], text: p.filter(Boolean).join(' ') }));

  const canPassive = !hard && !reflexive && aux !== 'sein';
  const passiv = canPassive ? compound(WERDEN, participle) : [];

  const tenses: Record<TenseId, Row[]> = {
    praesens: decorate(praesens),
    praeteritum: decorate(praeteritum),
    perfekt: compound(auxPres, participle),
    plusquamperfekt: compound(auxPast, participle),
    futur1: compound(WERDEN, bare.replace(/^sich\s+/, '')),
    futur2: compound(WERDEN, `${participle} ${auxInf}`),
    konj1: decorate(konj1),
    konj2: decorate(konj2),
    imperativ,
    passiv,
  };

  const result: Conjugation = {
    confidence: check ? 'check' : 'ok',
    aux,
    reflexive,
    tenses,
  };
  if (separable) result.separable = separable;
  if (wuerde) result.wuerde = compound(WUERDE, bare);
  if (canPassive) {
    result.passivPraeteritum = compound(WURDE, participle);
    result.passivPerfekt = compound(SEIN, `${participle} worden`);
  }
  return result;
}

function strongPret(p: string): string[] {
  return [p, p + duEnding(p), p, p + 'en', p + ihrEnding(p), p + 'en'];
}

function konj1Forms(stem: string, kind: Kind, inf: string): string[] {
  const base = kind === 'eln' ? stem.slice(0, -2) + 'l' : stem;
  const wir = kind === 'eln' || kind === 'ern' ? inf : stem + 'en';
  return [base + 'e', base + 'est', base + 'e', wir, base + 'et', wir];
}
