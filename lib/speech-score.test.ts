import { describe, it, expect } from 'vitest';
import { bestAlternative, normalizeSpeech, scoreSpeech } from './speech-score';

describe('normalizeSpeech', () => {
  it('lowercases, maps ß and strips punctuation', () => {
    expect(normalizeSpeech('Wie heißt du?')).toBe('wie heisst du');
    expect(normalizeSpeech('  Ich, bin   müde! ')).toBe('ich bin müde');
  });
});

describe('scoreSpeech', () => {
  it('scores a perfect repeat at 100', () => {
    const r = scoreSpeech('Ich heiße Anna', 'Ich heiße Anna.');
    expect(r.percent).toBe(100);
    expect(r.passed).toBe(true);
    expect(r.words.every((w) => w.status === 'ok')).toBe(true);
  });

  it('treats ß and ss as the same word', () => {
    expect(scoreSpeech('ich heisse anna', 'Ich heiße Anna').percent).toBe(100);
  });

  it('marks a skipped word as missed without shifting the rest', () => {
    const r = scoreSpeech('ich wohne Berlin', 'Ich wohne in Berlin');
    expect(r.words.map((w) => w.status)).toEqual(['ok', 'ok', 'missed', 'ok']);
    expect(r.words[2].word).toBe('in');
  });

  it('reports extra spoken words', () => {
    const r = scoreSpeech('ich bin heute sehr müde', 'Ich bin müde');
    expect(r.extra).toEqual(['heute', 'sehr']);
    expect(r.words.every((w) => w.status === 'ok')).toBe(true);
    expect(r.percent).toBeLessThan(100);
  });

  it('gives partial credit for near words (umlaut dropped)', () => {
    const r = scoreSpeech('ich bin mude', 'Ich bin müde');
    expect(r.words[2].status).toBe('near');
    expect(r.percent).toBeGreaterThan(50);
  });

  it('shows what was heard for a wrong word', () => {
    const r = scoreSpeech('ich habe Hunger', 'Ich habe Durst');
    expect(r.words[2]).toMatchObject({ word: 'Durst', status: 'missed', heard: 'hunger' });
    expect(r.passed).toBe(false);
  });

  it('accepts digits for spelled-out numbers', () => {
    expect(scoreSpeech('ich habe 2 Brüder', 'Ich habe zwei Brüder').percent).toBe(100);
  });

  it('handles empty speech', () => {
    const r = scoreSpeech('', 'Guten Tag');
    expect(r.percent).toBe(0);
    expect(r.words.every((w) => w.status === 'missed')).toBe(true);
  });
});

describe('bestAlternative', () => {
  it('picks the hypothesis closest to the target', () => {
    const b = bestAlternative(['ich hause anna', 'ich heiße anna', 'ich heiße'], 'Ich heiße Anna');
    expect(b?.text).toBe('ich heiße anna');
    expect(b?.score.percent).toBe(100);
  });
  it('returns null for no alternatives', () => {
    expect(bestAlternative([], 'Hallo')).toBeNull();
  });
});
