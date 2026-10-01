import { describe, it, expect } from 'vitest';
import { conjugate, parsePrincipalParts, TENSE_IDS, type TenseId } from './conjugate';

const t = (c: ReturnType<typeof conjugate>, id: TenseId) => c.tenses[id].map((r) => r.text);

describe('parsePrincipalParts', () => {
  it('parses a plain verb', () => {
    expect(parsePrincipalParts('geht, ging, ist gegangen')).toMatchObject({ third: 'geht', pret: 'ging', aux: 'sein', participle: 'gegangen' });
  });
  it('parses both auxiliaries', () => {
    expect(parsePrincipalParts('fährt, fuhr, hat/ist gefahren')?.aux).toBe('both');
    expect(parsePrincipalParts('fährt, fuhr, haben or sein gefahren')?.aux).toBe('both');
  });
  it('parses separable and reflexive markers', () => {
    expect(parsePrincipalParts('ruft an, rief an, hat angerufen')).toMatchObject({ third: 'ruft', separable: 'an', participle: 'angerufen' });
    expect(parsePrincipalParts('freut sich, freute sich, hat sich gefreut')).toMatchObject({ third: 'freut', reflexive: true, participle: 'gefreut' });
  });
  it('returns null unless there are exactly three parts', () => {
    expect(parsePrincipalParts(undefined)).toBeNull();
    expect(parsePrincipalParts('ist, war')).toBeNull();
    expect(parsePrincipalParts('a, b, c, d, e, f')).toBeNull();
  });
});

describe('irregular core', () => {
  const sein = conjugate({ lemma: 'sein', v: 'ist, war, ist gewesen' });
  it('sein', () => {
    expect(t(sein, 'praesens')).toEqual(['bin', 'bist', 'ist', 'sind', 'seid', 'sind']);
    expect(t(sein, 'praeteritum')).toEqual(['war', 'warst', 'war', 'waren', 'wart', 'waren']);
    expect(t(sein, 'perfekt')).toEqual(['bin gewesen', 'bist gewesen', 'ist gewesen', 'sind gewesen', 'seid gewesen', 'sind gewesen']);
    expect(t(sein, 'konj1')).toEqual(['sei', 'seiest', 'sei', 'seien', 'seiet', 'seien']);
    expect(t(sein, 'konj2')).toEqual(['wäre', 'wärest', 'wäre', 'wären', 'wäret', 'wären']);
    expect(t(sein, 'imperativ')).toEqual(['sei', 'seid', 'seien Sie']);
    expect(sein.tenses.passiv).toEqual([]);
    expect(sein.confidence).toBe('ok');
  });
  it('haben', () => {
    const c = conjugate({ lemma: 'haben', v: 'hat, hatte, hat gehabt' });
    expect(t(c, 'praesens')).toEqual(['habe', 'hast', 'hat', 'haben', 'habt', 'haben']);
    expect(t(c, 'konj2')).toEqual(['hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten']);
    expect(c.tenses.passiv).toEqual([]);
  });
  it('werden', () => {
    const c = conjugate({ lemma: 'werden', v: 'wird, wurde, ist geworden' });
    expect(t(c, 'praesens')).toEqual(['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden']);
    expect(t(c, 'praeteritum')).toEqual(['wurde', 'wurdest', 'wurde', 'wurden', 'wurdet', 'wurden']);
    expect(t(c, 'konj2')).toEqual(['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden']);
    expect(c.tenses.passiv).toEqual([]);
  });
  it('können (modal)', () => {
    const c = conjugate({ lemma: 'können', v: 'kann, konnte, hat gekonnt' });
    expect(t(c, 'praesens')).toEqual(['kann', 'kannst', 'kann', 'können', 'könnt', 'können']);
    expect(t(c, 'praeteritum')).toEqual(['konnte', 'konntest', 'konnte', 'konnten', 'konntet', 'konnten']);
    expect(t(c, 'konj2')).toEqual(['könnte', 'könntest', 'könnte', 'könnten', 'könntet', 'könnten']);
    expect(c.tenses.imperativ).toEqual([]);
    expect(c.tenses.passiv).toEqual([]);
  });
  it('other modals', () => {
    expect(t(conjugate({ lemma: 'müssen', v: 'muss, musste, hat gemusst' }), 'praesens')).toEqual(['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen']);
    expect(t(conjugate({ lemma: 'dürfen', v: 'darf, durfte, hat gedurft' }), 'konj2')).toEqual(['dürfte', 'dürftest', 'dürfte', 'dürften', 'dürftet', 'dürften']);
    expect(t(conjugate({ lemma: 'wollen', v: 'will, wollte, hat gewollt' }), 'praesens')).toEqual(['will', 'willst', 'will', 'wollen', 'wollt', 'wollen']);
    expect(t(conjugate({ lemma: 'mögen', v: 'mag, mochte, hat gemocht' }), 'konj2')).toEqual(['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten']);
  });
  it('wissen', () => {
    const c = conjugate({ lemma: 'wissen', v: 'weiß, wusste, hat gewusst' });
    expect(t(c, 'praesens')).toEqual(['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen']);
    expect(t(c, 'konj2')).toEqual(['wüsste', 'wüsstest', 'wüsste', 'wüssten', 'wüsstet', 'wüssten']);
  });
});

describe('regular weak verb: machen', () => {
  const c = conjugate({ lemma: 'machen', v: 'macht, machte, hat gemacht' });
  it('all tenses', () => {
    expect(t(c, 'praesens')).toEqual(['mache', 'machst', 'macht', 'machen', 'macht', 'machen']);
    expect(t(c, 'praeteritum')).toEqual(['machte', 'machtest', 'machte', 'machten', 'machtet', 'machten']);
    expect(t(c, 'perfekt')).toEqual(['habe gemacht', 'hast gemacht', 'hat gemacht', 'haben gemacht', 'habt gemacht', 'haben gemacht']);
    expect(t(c, 'plusquamperfekt')[0]).toBe('hatte gemacht');
    expect(t(c, 'plusquamperfekt')[1]).toBe('hattest gemacht');
    expect(t(c, 'futur1')).toEqual(['werde machen', 'wirst machen', 'wird machen', 'werden machen', 'werdet machen', 'werden machen']);
    expect(t(c, 'futur2')[0]).toBe('werde gemacht haben');
    expect(t(c, 'konj1')).toEqual(['mache', 'machest', 'mache', 'machen', 'machet', 'machen']);
    expect(t(c, 'konj2')).toEqual(['machte', 'machtest', 'machte', 'machten', 'machtet', 'machten']);
    expect(c.wuerde?.map((r) => r.text)[0]).toBe('würde machen');
    expect(t(c, 'imperativ')).toEqual(['mach', 'macht', 'machen Sie']);
    expect(t(c, 'passiv')).toEqual(['werde gemacht', 'wirst gemacht', 'wird gemacht', 'werden gemacht', 'werdet gemacht', 'werden gemacht']);
    expect(c.passivPraeteritum?.[2].text).toBe('wurde gemacht');
    expect(c.passivPerfekt?.[2].text).toBe('ist gemacht worden');
    expect(c.confidence).toBe('ok');
    expect(c.aux).toBe('haben');
  });
  it('has all ten tenses and 6 rows (3 for imperativ)', () => {
    for (const id of TENSE_IDS) expect(c.tenses[id].length).toBe(id === 'imperativ' ? 3 : 6);
  });
});

describe('strong and stem-changing verbs', () => {
  it('gehen', () => {
    const c = conjugate({ lemma: 'gehen', v: 'geht, ging, ist gegangen' });
    expect(t(c, 'praeteritum')).toEqual(['ging', 'gingst', 'ging', 'gingen', 'gingt', 'gingen']);
    expect(t(c, 'perfekt')[0]).toBe('bin gegangen');
    expect(t(c, 'konj2')).toEqual(['ginge', 'gingest', 'ginge', 'gingen', 'ginget', 'gingen']);
    expect(t(c, 'imperativ')).toEqual(['geh', 'geht', 'gehen Sie']);
    expect(c.aux).toBe('sein');
    expect(c.tenses.passiv).toEqual([]);
  });
  it('fahren (both auxiliaries, umlaut)', () => {
    const c = conjugate({ lemma: 'fahren', v: 'fährt, fuhr, hat/ist gefahren' });
    expect(c.aux).toBe('both');
    expect(t(c, 'praesens')).toEqual(['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren']);
    expect(t(c, 'imperativ')).toEqual(['fahr', 'fahrt', 'fahren Sie']);
    expect(t(c, 'konj2')).toEqual(['führe', 'führest', 'führe', 'führen', 'führet', 'führen']);
    expect(t(c, 'perfekt')[0]).toBe('habe/bin gefahren');
  });
  it('lesen', () => {
    const c = conjugate({ lemma: 'lesen', v: 'liest, las, hat gelesen' });
    expect(t(c, 'praesens')).toEqual(['lese', 'liest', 'liest', 'lesen', 'lest', 'lesen']);
    expect(t(c, 'imperativ')).toEqual(['lies', 'lest', 'lesen Sie']);
    expect(t(c, 'konj2')).toEqual(['läse', 'läsest', 'läse', 'läsen', 'läset', 'läsen']);
    expect(t(c, 'praeteritum')[1]).toBe('last');
  });
  it('nehmen', () => {
    const c = conjugate({ lemma: 'nehmen', v: 'nimmt, nahm, hat genommen' });
    expect(t(c, 'praesens')).toEqual(['nehme', 'nimmst', 'nimmt', 'nehmen', 'nehmt', 'nehmen']);
    expect(t(c, 'imperativ')).toEqual(['nimm', 'nehmt', 'nehmen Sie']);
    expect(t(c, 'konj2')[0]).toBe('nähme');
  });
  it('geben, sehen, sprechen, essen, laufen', () => {
    expect(t(conjugate({ lemma: 'geben', v: 'gibt, gab, hat gegeben' }), 'praesens')[1]).toBe('gibst');
    expect(t(conjugate({ lemma: 'sehen', v: 'sieht, sah, hat gesehen' }), 'praesens')[1]).toBe('siehst');
    expect(t(conjugate({ lemma: 'sprechen', v: 'spricht, sprach, hat gesprochen' }), 'imperativ')[0]).toBe('sprich');
    expect(t(conjugate({ lemma: 'essen', v: 'isst, aß, hat gegessen' }), 'praesens')).toEqual(['esse', 'isst', 'isst', 'essen', 'esst', 'essen']);
    expect(t(conjugate({ lemma: 'laufen', v: 'läuft, lief, ist gelaufen' }), 'praesens')[1]).toBe('läufst');
  });
  it('halten and treten (stem ends in t)', () => {
    expect(t(conjugate({ lemma: 'halten', v: 'hält, hielt, hat gehalten' }), 'praesens')).toEqual(['halte', 'hältst', 'hält', 'halten', 'haltet', 'halten']);
    expect(t(conjugate({ lemma: 'treten', v: 'tritt, trat, ist getreten' }), 'praesens')[1]).toBe('trittst');
    expect(t(conjugate({ lemma: 'halten', v: 'hält, hielt, hat gehalten' }), 'praeteritum')[1]).toBe('hieltest');
  });
  it('stehen has the irregular Konjunktiv II', () => {
    expect(t(conjugate({ lemma: 'stehen', v: 'steht, stand, hat/ist gestanden' }), 'konj2')[0]).toBe('stünde');
  });
});

describe('spelling rules', () => {
  it('-t/-d stems take -est', () => {
    const c = conjugate({ lemma: 'arbeiten', v: 'arbeitet, arbeitete, hat gearbeitet' });
    expect(t(c, 'praesens')).toEqual(['arbeite', 'arbeitest', 'arbeitet', 'arbeiten', 'arbeitet', 'arbeiten']);
    expect(t(c, 'praeteritum')).toEqual(['arbeitete', 'arbeitetest', 'arbeitete', 'arbeiteten', 'arbeitetet', 'arbeiteten']);
    expect(t(c, 'imperativ')[0]).toBe('arbeite');
  });
  it('-ß/-s/-z stems take -t only', () => {
    const h = conjugate({ lemma: 'heißen', v: 'heißt, hieß, hat geheißen' });
    expect(t(h, 'praesens')[1]).toBe('heißt');
    expect(t(h, 'praeteritum')[1]).toBe('hießt');
    expect(t(conjugate({ lemma: 'reisen', v: 'reist, reiste, ist gereist' }), 'praesens')[1]).toBe('reist');
    expect(t(conjugate({ lemma: 'tanzen', v: 'tanzt, tanzte, hat getanzt' }), 'praesens')[1]).toBe('tanzt');
  });
  it('-eln / -ern / -n infinitives', () => {
    expect(t(conjugate({ lemma: 'sammeln', v: 'sammelt, sammelte, hat gesammelt' }), 'praesens')).toEqual(['sammle', 'sammelst', 'sammelt', 'sammeln', 'sammelt', 'sammeln']);
    expect(t(conjugate({ lemma: 'wandern', v: 'wandert, wanderte, ist gewandert' }), 'praesens')[0]).toBe('wandere');
    expect(t(conjugate({ lemma: 'tun', v: 'tut, tat, hat getan' }), 'praesens')).toEqual(['tue', 'tust', 'tut', 'tun', 'tut', 'tun']);
  });
  it('verbs needing -e- after -chn, -tm', () => {
    expect(t(conjugate({ lemma: 'rechnen', v: 'rechnet, rechnete, hat gerechnet' }), 'praesens')[1]).toBe('rechnest');
    expect(t(conjugate({ lemma: 'atmen', v: 'atmet, atmete, hat geatmet' }), 'praesens')[2]).toBe('atmet');
  });
});

describe('separable and reflexive', () => {
  it('anrufen', () => {
    const c = conjugate({ lemma: 'anrufen', v: 'ruft an, rief an, hat angerufen' });
    expect(c.separable).toBe('an');
    expect(t(c, 'praesens')).toEqual(['rufe an', 'rufst an', 'ruft an', 'rufen an', 'ruft an', 'rufen an']);
    expect(t(c, 'praeteritum')[2]).toBe('rief an');
    expect(t(c, 'perfekt')[0]).toBe('habe angerufen');
    expect(t(c, 'futur1')[0]).toBe('werde anrufen');
    expect(t(c, 'imperativ')).toEqual(['ruf an', 'ruft an', 'rufen Sie an']);
    expect(c.wuerde?.[0].text).toBe('würde anrufen');
  });
  it('aufstehen', () => {
    const c = conjugate({ lemma: 'aufstehen', v: 'steht auf, stand auf, ist aufgestanden' });
    expect(t(c, 'praeteritum')).toEqual(['stand auf', 'standest auf', 'stand auf', 'standen auf', 'standet auf', 'standen auf']);
    expect(t(c, 'perfekt')[0]).toBe('bin aufgestanden');
  });
  it('inseparable and -ieren verbs keep their participle', () => {
    const b = conjugate({ lemma: 'besuchen', v: 'besucht, besuchte, hat besucht' });
    expect(b.separable).toBeUndefined();
    expect(t(b, 'perfekt')[2]).toBe('hat besucht');
    expect(t(conjugate({ lemma: 'studieren', v: 'studiert, studierte, hat studiert' }), 'praesens')[0]).toBe('studiere');
  });
  it('sich freuen', () => {
    const c = conjugate({ lemma: 'sich freuen', v: 'freut sich, freute sich, hat sich gefreut' });
    expect(c.reflexive).toBe(true);
    expect(t(c, 'praesens')).toEqual(['freue mich', 'freust dich', 'freut sich', 'freuen uns', 'freut euch', 'freuen sich']);
    expect(t(c, 'perfekt')[0]).toBe('habe mich gefreut');
    expect(t(c, 'futur1')[0]).toBe('werde mich freuen');
    expect(t(c, 'imperativ')).toEqual(['freu dich', 'freut euch', 'freuen Sie sich']);
    expect(c.tenses.passiv).toEqual([]);
  });
});

describe('confidence', () => {
  it('missing v still yields regular forms, flagged check', () => {
    const c = conjugate({ lemma: 'blubbern' });
    expect(c.confidence).toBe('check');
    expect(t(c, 'praesens')).toEqual(['blubbere', 'blubberst', 'blubbert', 'blubbern', 'blubbert', 'blubbern']);
    expect(t(c, 'perfekt')[0]).toBe('habe geblubbert');
  });
  it('two-part and six-part v do not throw', () => {
    expect(conjugate({ lemma: 'gehen', v: 'ist, war' }).confidence).toBe('check');
    expect(conjugate({ lemma: 'gehen', v: 'a, b, c, d, e, f' }).confidence).toBe('check');
  });
  it('slash alternatives are flagged check but usable', () => {
    const c = conjugate({ lemma: 'backen', v: 'backt/bäckt, backte/buk, hat gebacken' });
    expect(c.confidence).toBe('check');
    expect(t(c, 'praesens').length).toBe(6);
  });
  it('a clean entry is ok', () => {
    expect(conjugate({ lemma: 'machen', v: 'macht, machte, hat gemacht' }).confidence).toBe('ok');
  });
});
