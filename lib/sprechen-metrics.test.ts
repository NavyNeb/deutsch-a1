import { describe, it, expect } from 'vitest';
import { analyzeTalk, paceOf, talkTips } from './sprechen-metrics';

const TALK = 'Ich möchte heute über das Homeoffice sprechen. Zuerst erzähle ich meine Erfahrung, weil ich seit zwei Jahren von zu Hause arbeite. ' +
  'Einerseits spart man Zeit, andererseits fehlt der Kontakt. Meiner Meinung nach würde ein Mix besser sein. Zum Schluss danke ich für Ihre Aufmerksamkeit.';

describe('analyzeTalk', () => {
  it('counts words, pace and variety', () => {
    const m = analyzeTalk('eins zwei drei eins', 30);
    expect(m.words).toBe(4);
    expect(m.distinctWords).toBe(3);
    expect(m.varietyRatio).toBe(0.75);
    expect(m.wordsPerMinute).toBe(8);
    expect(m.seconds).toBe(30);
  });

  it('does not count filler words as words, and counts them separately', () => {
    const m = analyzeTalk('äh ich ähm gehe hmm nach Hause', 10);
    expect(m.words).toBe(4);
    expect(m.fillers).toBe(3);
  });

  it('finds single-word and multi-word connectors once each', () => {
    const m = analyzeTalk(TALK, 60);
    for (const c of ['weil', 'zuerst', 'einerseits', 'andererseits', 'meiner meinung nach']) expect(m.connectors).toContain(c);
    expect(new Set(m.connectors).size).toBe(m.connectors.length);
  });

  it('spots Konjunktiv II forms', () => {
    expect(analyzeTalk('Ich würde gern reisen und wäre froh', 10).konjunktivII).toBe(2);
    expect(analyzeTalk('Ich gehe heute einkaufen', 10).konjunktivII).toBe(0);
  });

  it('matches Redemittel phrases and structure steps ignoring case and punctuation', () => {
    const m = analyzeTalk(TALK, 60, {
      phrases: ['Meiner Meinung nach', 'zum Beispiel'],
      structure: [
        { id: 'intro', patterns: ['ich möchte heute über'] },
        { id: 'thanks', patterns: ['für ihre aufmerksamkeit', 'vielen dank'] },
        { id: 'pros', patterns: ['vorteile'] },
      ],
    });
    expect(m.phrasesUsed).toEqual(['Meiner Meinung nach']);
    expect(m.structureDone).toEqual(['intro', 'thanks']);
  });

  it('is safe on empty text and zero time', () => {
    const m = analyzeTalk('', 0);
    expect(m).toMatchObject({ words: 0, wordsPerMinute: 0, varietyRatio: 0, fillers: 0 });
  });
});

describe('paceOf and talkTips', () => {
  it('bands the pace', () => {
    expect([paceOf(40), paceOf(90), paceOf(150)]).toEqual(['slow', 'good', 'fast']);
  });

  it('asks for more speaking when the talk is short', () => {
    expect(talkTips(analyzeTalk('Ich mag Hunde.', 10), 'B1')[0]).toBe('speakMore');
  });

  it('asks a B2 learner for connectors and Konjunktiv II, at most three tips', () => {
    const tips = talkTips(analyzeTalk('Ich finde das gut und ich gehe oft dorthin und ich sehe viele Leute da', 8), 'B2');
    expect(tips).toContain('moreConnectors');
    expect(tips).toContain('tryKonjunktiv');
    expect(tips.length).toBeLessThanOrEqual(3);
  });

  it('praises a rich talk', () => {
    const long = (TALK + ' ').repeat(3) + 'zum Beispiel, obwohl es schwer ist, würde ich es empfehlen, weil es hilft, damit man lernt.';
    expect(talkTips(analyzeTalk(long, 60), 'B1')).not.toContain('speakMore');
  });
});
