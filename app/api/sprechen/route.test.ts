import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { AI_SCENARIOS } from '@/content/sprechen';
import { GET, POST } from './route';

const sc = AI_SCENARIOS[0].id;
const learner = (text: string) => ({ role: 'learner', text });

let ipCounter = 0;
const post = (body: unknown, ip = `10.0.0.${++ipCounter}`) =>
  POST(new Request('http://x/api/sprechen', { method: 'POST', headers: { 'x-forwarded-for': ip }, body: typeof body === 'string' ? body : JSON.stringify(body) }));

const reply = (content: string, status = 200) =>
  Promise.resolve({ ok: status < 400, status, json: () => Promise.resolve({ choices: [{ message: { content } }], usage: { prompt_tokens: 1, completion_tokens: 1 } }) } as Response);

const FEEDBACK = JSON.stringify({ scores: { task: 3, interaction: 3, vocabulary: 2, grammar: 2 }, corrections: [], phrases: [{ de: 'Was meinen Sie?', meaning: 'What do you think?' }], vocab: [], summary: 'Gut gemacht.' });

beforeEach(() => { process.env.DEEPSEEK_API_KEY = 'sk-test'; delete process.env.SPRECHEN_AI; vi.spyOn(console, 'info').mockImplementation(() => {}); });
afterEach(() => { delete process.env.DEEPSEEK_API_KEY; delete process.env.SPRECHEN_AI; vi.unstubAllGlobals(); vi.restoreAllMocks(); });

describe('GET /api/sprechen', () => {
  it('says whether the AI partner is on', async () => {
    expect(await (await GET()).json()).toEqual({ enabled: true });
    process.env.SPRECHEN_AI = 'off';
    expect(await (await GET()).json()).toEqual({ enabled: false });
    delete process.env.SPRECHEN_AI; delete process.env.DEEPSEEK_API_KEY;
    expect(await (await GET()).json()).toEqual({ enabled: false });
  });
});

describe('POST /api/sprechen', () => {
  it('answers 503 and never calls the model when it is off', async () => {
    delete process.env.DEEPSEEK_API_KEY;
    const f = vi.fn(); vi.stubGlobal('fetch', f);
    const res = await post({ mode: 'turn', scenario: sc, turns: [learner('Hallo')] });
    expect(res.status).toBe(503);
    expect(f).not.toHaveBeenCalled();
  });

  it('gives the partner’s next line', async () => {
    const f = vi.fn(() => reply('Schön, dich kennenzulernen! Was machst du beruflich?')); vi.stubGlobal('fetch', f);
    const res = await post({ mode: 'turn', scenario: sc, turns: [learner('Ich heiße Max.')] });
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ text: 'Schön, dich kennenzulernen! Was machst du beruflich?' });
    const body = JSON.parse((f.mock.calls[0] as unknown as [string, RequestInit])[1].body as string);
    expect(body.max_tokens).toBe(120);
    expect(body.messages[0].role).toBe('system');
  });

  it('gives feedback as structured data', async () => {
    vi.stubGlobal('fetch', vi.fn(() => reply(FEEDBACK)));
    const res = await post({ mode: 'feedback', scenario: sc, locale: 'fr', turns: [learner('a'), { role: 'partner', text: 'b' }, learner('c')] });
    expect(res.status).toBe(200);
    const j = await res.json();
    expect(j.feedback.summary).toBe('Gut gemacht.');
    expect(j.feedback.scores.task).toBe(3);
  });

  it('rejects bad input without calling the model', async () => {
    const f = vi.fn(); vi.stubGlobal('fetch', f);
    for (const body of [
      'not json',
      { mode: 'turn', scenario: 'nope', turns: [learner('x')] },
      { mode: 'turn', scenario: sc, turns: 'x' },
      { mode: 'turn', scenario: sc, turns: [] },
      { mode: 'turn', scenario: sc, turns: [{ role: 'partner', text: 'Hallo' }] },
      { mode: 'feedback', scenario: sc, turns: [learner('only one')] },
      { mode: 'other', scenario: sc, turns: [learner('x')] },
    ]) {
      expect((await post(body)).status, JSON.stringify(body)).toBe(400);
    }
    expect(f).not.toHaveBeenCalled();
  });

  it('refuses an oversized body', async () => {
    expect((await post(JSON.stringify({ mode: 'turn', scenario: sc, turns: [learner('x')], pad: 'y'.repeat(13_000) }))).status).toBe(413);
  });

  it('looks like "off" to the learner when the balance is spent or the key is wrong', async () => {
    for (const code of [402, 401]) {
      vi.stubGlobal('fetch', vi.fn(() => reply('', code)));
      const res = await post({ mode: 'turn', scenario: sc, turns: [learner('Hallo')] });
      expect(res.status).toBe(503);
      expect(await res.json()).toEqual({ error: 'off' });
    }
  });

  it('passes on rate limits and failures from the model', async () => {
    vi.stubGlobal('fetch', vi.fn(() => reply('', 429)));
    expect((await post({ mode: 'turn', scenario: sc, turns: [learner('Hallo')] })).status).toBe(429);
    vi.stubGlobal('fetch', vi.fn(() => reply('', 500)));
    expect((await post({ mode: 'turn', scenario: sc, turns: [learner('Hallo')] })).status).toBe(502);
    vi.stubGlobal('fetch', vi.fn(() => reply('')));
    expect((await post({ mode: 'turn', scenario: sc, turns: [learner('Hallo')] })).status).toBe(502);
  });

  it('answers 502 when the feedback cannot be read', async () => {
    vi.stubGlobal('fetch', vi.fn(() => reply('this is not json')));
    expect((await post({ mode: 'feedback', scenario: sc, turns: [learner('a'), learner('b')] })).status).toBe(502);
  });

  it('limits one address to 30 requests a minute', async () => {
    vi.stubGlobal('fetch', vi.fn(() => reply('Ja.')));
    const ip = '203.0.113.9';
    let last = 200;
    for (let i = 0; i < 31; i++) last = (await post({ mode: 'turn', scenario: sc, turns: [learner('Hallo')] }, ip)).status;
    expect(last).toBe(429);
  });
});
