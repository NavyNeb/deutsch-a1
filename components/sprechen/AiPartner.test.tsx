import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { emptyProgress, dateKey } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { AI_DAILY_TURNS, emptySprechen, recordAi, saveSprechen } from '@/lib/sprechen-stats';
import { AI_SCENARIOS } from '@/content/sprechen';
import { aiFeedback, aiTurn } from '@/lib/sprechen-ai-client';
import { AiPartner } from './AiPartner';

vi.mock('@/lib/audio', async (orig) => ({ ...(await orig<typeof import('@/lib/audio')>()), playOrSpeak: vi.fn(() => Promise.resolve()), speakText: vi.fn() }));

const json = (status: number, body: unknown) => Promise.resolve({ ok: status < 400, status, json: () => Promise.resolve(body) } as Response);
const FEEDBACK = { scores: { task: 3, interaction: 2, vocabulary: 3, grammar: 2 }, corrections: [{ said: 'Ich bin gegangen nach Hause', better: 'Ich bin nach Hause gegangen', why: 'Participle last' }], phrases: [{ de: 'Was meinen Sie?', meaning: 'What do you think?' }], vocab: ['die Meinung'], summary: 'Gut gemacht!' };

beforeEach(() => { localStorage.clear(); replaceProgress(emptyProgress()); });
afterEach(() => vi.unstubAllGlobals());

const b1 = AI_SCENARIOS.filter((s) => s.level === 'B1');

async function start(fetchImpl: ReturnType<typeof vi.fn>) {
  vi.stubGlobal('fetch', fetchImpl);
  render(<AiPartner />);
  fireEvent.click(screen.getByRole('button', { name: new RegExp(b1[0].de.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) }));
}

async function say(text: string) {
  fireEvent.change(await screen.findByPlaceholderText(/in German/i), { target: { value: text } });
  fireEvent.click(screen.getByRole('button', { name: /^send$/i }));
}

describe('AiPartner', () => {
  it('offers B1 and B2 situations and starts with the partner’s opener', async () => {
    await start(vi.fn());
    expect(screen.getByText(b1[0].opener)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${AI_DAILY_TURNS} turns left today`))).toBeInTheDocument();
  });

  it('sends what you type and shows the partner’s answer', async () => {
    const f = vi.fn(() => json(200, { text: 'Schön, dich kennenzulernen!' }));
    await start(f);
    await say('Ich heiße Max.');
    expect(await screen.findByText('Schön, dich kennenzulernen!')).toBeInTheDocument();
    expect(screen.getByText('Ich heiße Max.')).toBeInTheDocument();
    const body = JSON.parse((f.mock.calls[0] as unknown as [string, RequestInit])[1].body as string);
    expect(body).toMatchObject({ mode: 'turn', scenario: b1[0].id });
    expect(body.turns).toEqual([{ role: 'partner', text: b1[0].opener }, { role: 'learner', text: 'Ich heiße Max.' }]);
    expect(screen.getByText(new RegExp(`${AI_DAILY_TURNS - 1} turns left today`))).toBeInTheDocument();
  });

  it('offers feedback after two answers, shows it, and counts it', async () => {
    const f = vi.fn((_u: string, init: RequestInit) => (JSON.parse(init.body as string).mode === 'feedback' ? json(200, { feedback: FEEDBACK }) : json(200, { text: 'Interessant!' })));
    await start(f);
    expect(screen.queryByRole('button', { name: /get feedback/i })).toBeNull();
    await say('Ich heiße Max.');
    await screen.findByText('Interessant!');
    await say('Ich komme aus Kamerun.');
    await waitFor(() => expect(screen.getAllByText('Interessant!')).toHaveLength(2));
    fireEvent.click(screen.getByRole('button', { name: /finish and get feedback/i }));
    expect(await screen.findByText('Gut gemacht!')).toBeInTheDocument();
    expect(screen.getByText('Ich bin nach Hause gegangen')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /die Meinung/ })).toHaveAttribute('href', '/dictionary?q=Meinung');
    expect(screen.getByText(/cannot judge your pronunciation/i)).toBeInTheDocument();
    const stats = JSON.parse(localStorage.getItem('deutsch-a1-sprechen-stats') ?? '{}');
    expect(stats.ai[dateKey(Date.now())]).toEqual({ turns: 2, feedbacks: 1 });
  });

  it('stops asking the AI once the day’s turns are used', async () => {
    let s = emptySprechen();
    for (let i = 0; i < AI_DAILY_TURNS; i++) s = recordAi(s, dateKey(Date.now()), 'turn');
    saveSprechen(s);
    const f = vi.fn();
    await start(f);
    await say('Hallo');
    expect(await screen.findByRole('alert')).toHaveTextContent(/used today’s conversation turns/);
    expect(f).not.toHaveBeenCalled();
  });

  it('says the partner is unavailable when the server is off', async () => {
    await start(vi.fn(() => json(503, { error: 'off' })));
    await say('Hallo');
    expect(await screen.findByRole('alert')).toHaveTextContent(/not available right now/);
  });
});

describe('AI client', () => {
  it('maps failures to plain kinds', async () => {
    const f = (status: number, body: unknown = {}) => vi.fn(() => json(status, body)) as unknown as typeof fetch;
    expect(await aiTurn('x', [], f(200, { text: 'Hallo' }))).toEqual({ ok: true, data: 'Hallo' });
    expect(await aiTurn('x', [], f(200, {}))).toEqual({ ok: false, error: 'upstream' });
    expect(await aiTurn('x', [], f(503))).toEqual({ ok: false, error: 'off' });
    expect(await aiTurn('x', [], f(429))).toEqual({ ok: false, error: 'limit' });
    expect(await aiTurn('x', [], f(504))).toEqual({ ok: false, error: 'timeout' });
    expect(await aiTurn('x', [], f(400))).toEqual({ ok: false, error: 'invalid' });
    expect(await aiTurn('x', [], f(500))).toEqual({ ok: false, error: 'upstream' });
    expect(await aiTurn('x', [], vi.fn(() => Promise.reject(new Error('down'))) as unknown as typeof fetch)).toEqual({ ok: false, error: 'network' });
    expect(await aiFeedback('x', [], 'en', f(200, { feedback: FEEDBACK }))).toEqual({ ok: true, data: FEEDBACK });
  });
});
