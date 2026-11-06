import { describe, expect, it } from 'vitest';
import { lessonHelpFor, type StepKind } from './lesson-help';

const KINDS: StepKind[] = ['intro', 'chapter', 'quiz', 'wrapup', 'vocab', 'grammar', 'exercise', 'pronunciation'];

describe('lessonHelpFor', () => {
  it.each(KINDS)('%s has a title, rows and EN/FR text', (kind) => {
    const h = lessonHelpFor(kind);
    expect(h.title.en.trim()).not.toBe('');
    expect(h.title.fr.trim()).not.toBe('');
    expect(h.items.length).toBeGreaterThanOrEqual(1);
    for (const item of h.items) {
      expect(item.de.trim()).not.toBe('');
      expect(item.text.en.trim()).not.toBe('');
      expect(item.text.fr.trim()).not.toBe('');
      expect(item.text.en).not.toContain('!');
    }
  });

  it('the word card explains hear, speak, save and move, with the keys', () => {
    const items = lessonHelpFor('vocab').items;
    expect(items.map((i) => i.key)).toEqual(expect.arrayContaining(['play', 'speak', 'save', 'move']));
    const move = items.find((i) => i.key === 'move')!;
    expect(move.shortcut).toEqual(expect.arrayContaining(['Space', '←', '→']));
  });

  it('exercises explain how to answer', () => {
    expect(lessonHelpFor('exercise').items.map((i) => i.key)).toContain('answer');
  });
});
