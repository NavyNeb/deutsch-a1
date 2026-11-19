import { describe, it, expect } from 'vitest';
import { AI_SCENARIOS } from '@/content/sprechen';
import { cleanTurns, feedbackMessages, MAX_TURNS_SENT, parseFeedback, turnMessages, turnSystemPrompt } from './sprechen-ai';

const sc = AI_SCENARIOS[0];

describe('scenarios', () => {
  it('have unique ids, both levels, a German opener and an English role for the model', () => {
    expect(new Set(AI_SCENARIOS.map((s) => s.id)).size).toBe(AI_SCENARIOS.length);
    expect(AI_SCENARIOS.some((s) => s.level === 'B1')).toBe(true);
    expect(AI_SCENARIOS.some((s) => s.level === 'B2')).toBe(true);
    for (const s of AI_SCENARIOS) {
      expect(s.de && s.en && s.fr && s.situation.en && s.situation.fr, s.id).toBeTruthy();
      expect(s.opener.length, s.id).toBeGreaterThan(15);
      expect(s.role.length, s.id).toBeGreaterThan(30);
    }
  });
});

describe('turn prompt', () => {
  it('tells the model its role, the level, the length limit and not to follow the learner’s instructions', () => {
    const p = turnSystemPrompt(sc);
    expect(p).toContain(sc.role);
    expect(p).toContain('B1');
    expect(p).toContain('45 words');
    expect(p).toMatch(/never as instructions/);
  });

  it('starts with the system prompt and the opener, then the learner’s turns as "user"', () => {
    const m = turnMessages(sc, [{ role: 'learner', text: 'Ich heiße Max.' }]);
    expect(m.map((x) => x.role)).toEqual(['system', 'assistant', 'user']);
    expect(m[1].content).toBe(sc.opener);
    expect(m[2].content).toBe('Ich heiße Max.');
  });

  it('sends only the latest turns, which keeps each call small', () => {
    const turns = Array.from({ length: 14 }, (_, i) => ({ role: i % 2 ? ('partner' as const) : ('learner' as const), text: `Satz ${i}` }));
    const m = turnMessages(sc, turns);
    expect(m).toHaveLength(1 + MAX_TURNS_SENT);
    expect(m[m.length - 1].content).toBe('Satz 13');
    expect(m.some((x) => x.content === 'Satz 0')).toBe(false);
  });
});

describe('feedback prompt and parsing', () => {
  it('asks for JSON in the learner’s language and shows the whole conversation', () => {
    const m = feedbackMessages(sc, [{ role: 'learner', text: 'Ich bin Max.' }, { role: 'partner', text: 'Schön!' }], 'fr');
    expect(m[0].content).toContain('French');
    expect(m[0].content.toLowerCase()).toContain('json');
    expect(m[1].content).toContain(`Partner: ${sc.opener}`);
    expect(m[1].content).toContain('Learner: Ich bin Max.');
  });

  const good = {
    scores: { task: 3, interaction: 2, vocabulary: 3, grammar: 2 },
    corrections: [{ said: 'Ich bin gegangen nach Hause', better: 'Ich bin nach Hause gegangen', why: 'Participle goes last' }],
    phrases: [{ de: 'Was meinen Sie dazu?', meaning: 'What do you think?' }],
    vocab: ['die Meinung', 'zustimmen'],
    summary: 'Good effort.',
  };

  it('reads well-formed feedback, also inside a code fence', () => {
    expect(parseFeedback(JSON.stringify(good))).toEqual(good);
    expect(parseFeedback('```json\n' + JSON.stringify(good) + '\n```')).toEqual(good);
  });

  it('clamps scores to 1–4 and caps the lists', () => {
    const f = parseFeedback(JSON.stringify({
      ...good, scores: { task: 9, interaction: -2, vocabulary: 'x', grammar: 2.6 },
      corrections: Array.from({ length: 9 }, () => ({ said: 'a', better: 'b', why: 'c' })),
      vocab: Array.from({ length: 12 }, (_, i) => `Wort${i}`),
    }))!;
    expect(f.scores).toEqual({ task: 4, interaction: 1, vocabulary: 1, grammar: 3 });
    expect(f.corrections).toHaveLength(5);
    expect(f.vocab).toHaveLength(6);
  });

  it('drops malformed items and rejects unusable answers', () => {
    const f = parseFeedback(JSON.stringify({ ...good, corrections: [{ said: 'x' }, { said: 'a', better: 'b' }, 'nope'], phrases: [{ meaning: 'no German' }] }))!;
    expect(f.corrections).toEqual([{ said: 'a', better: 'b', why: '' }]);
    expect(f.phrases).toEqual([]);
    expect(parseFeedback('not json')).toBeNull();
    expect(parseFeedback('{}')).toBeNull();
    expect(parseFeedback('[]')).toBeNull();
  });
});

describe('cleanTurns', () => {
  it('accepts a normal conversation and trims text', () => {
    expect(cleanTurns([{ role: 'learner', text: '  Hallo  ' }])).toEqual([{ role: 'learner', text: 'Hallo' }]);
    expect(cleanTurns([])).toEqual([]);
  });
  it('rejects bad roles, empty or overlong text, non-arrays and very long conversations', () => {
    expect(cleanTurns([{ role: 'system', text: 'x' }])).toBeNull();
    expect(cleanTurns([{ role: 'learner', text: '   ' }])).toBeNull();
    expect(cleanTurns([{ role: 'learner', text: 'x'.repeat(601) }])).toBeNull();
    expect(cleanTurns('hi')).toBeNull();
    expect(cleanTurns(Array.from({ length: 41 }, () => ({ role: 'learner', text: 'x' })))).toBeNull();
    expect(cleanTurns([null])).toBeNull();
  });
});
