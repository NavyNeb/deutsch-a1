import { describe, expect, it } from 'vitest';
import { checkFormField, countWords, hasGreetingAndClosing, lengthState, passed, scoreLesen } from './exam-score';
import { examSet } from '@/content/exams';

describe('exam-score', () => {
  const set = examSet('goethe-a1-1')!;

  it('scores Lesen across parts and ignores unanswered items', () => {
    const [p0, p1] = set.lesen;
    const first = p0.items[0] as { id: string; answer: boolean };
    const second = p0.items[1] as { id: string; answer: boolean };
    const third = p0.items[2] as { id: string; answer: boolean };
    const other = p1.items[0] as { id: string; answer: number };
    const answers = { [first.id]: first.answer, [second.id]: second.answer, [third.id]: !third.answer, [other.id]: other.answer };
    const r = scoreLesen(set.lesen, answers);
    expect(r.total).toBe(set.lesen.reduce((n, p) => n + p.items.length, 0));
    expect(r.correct).toBe(3);
    expect(r.perPart[0].perItem[third.id]).toBe(false);
    expect(passed(60)).toBe(true);
    expect(passed(59)).toBe(false);
  });

  it('compares form fields loosely but keeps digits exact', () => {
    expect(checkFormField(['14.03.1998'], ' 14.03.1998 ')).toBe(true);
    expect(checkFormField(['Köln'], 'köln')).toBe(true);
    expect(checkFormField(['Straße'], 'strasse')).toBe(true);
    expect(checkFormField(['14.03.1998'], '14.03.1999')).toBe(false);
    expect(checkFormField(['Köln'], '')).toBe(false);
  });

  it('counts words and length state', () => {
    expect(countWords('  Hallo   Welt \n heute ')).toBe(3);
    expect(lengthState(10, 25, 50)).toBe('short');
    expect(lengthState(30, 25, 50)).toBe('ok');
    expect(lengthState(80, 25, 50)).toBe('long');
  });

  it('detects greeting and closing', () => {
    expect(hasGreetingAndClosing('Liebe Julia,\n\nvielen Dank.\n\nViele Grüße\nAnna', 'informal')).toEqual({ greeting: true, closing: true });
    expect(hasGreetingAndClosing('Ich komme nicht.', 'informal')).toEqual({ greeting: false, closing: false });
    expect(hasGreetingAndClosing('Sehr geehrte Frau Weber,\n\n…\n\nMit freundlichen Grüßen\nA. Karim', 'formal')).toEqual({ greeting: true, closing: true });
  });
});
