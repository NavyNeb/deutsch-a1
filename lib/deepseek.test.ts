import { describe, it, expect, vi } from 'vitest';
import { aiEnabled, chat, chatJson, DeepSeekError, DEEPSEEK_URL, DEFAULT_MODEL } from './deepseek';

const env = { DEEPSEEK_API_KEY: 'sk-test' };
const ok = (content: string, usage = { prompt_tokens: 100, completion_tokens: 20, prompt_cache_hit_tokens: 80 }) =>
  Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({ choices: [{ message: { content } }], usage }) } as Response);
const status = (code: number) => Promise.resolve({ ok: code < 400, status: code, json: () => Promise.resolve({}) } as Response);

describe('aiEnabled', () => {
  it('needs a key and the switch not set to off', () => {
    expect(aiEnabled({})).toBe(false);
    expect(aiEnabled({ DEEPSEEK_API_KEY: 'k' })).toBe(true);
    expect(aiEnabled({ DEEPSEEK_API_KEY: 'k', SPRECHEN_AI: 'off' })).toBe(false);
    expect(aiEnabled({ DEEPSEEK_API_KEY: 'k', SPRECHEN_AI: 'on' })).toBe(true);
  });
});

describe('chat', () => {
  const messages = [{ role: 'user' as const, content: 'Hallo' }];

  it('sends a cheap, short, non-thinking request with the key and returns the reply', async () => {
    const fetchImpl = vi.fn(() => ok('  Guten Tag!  '));
    const log = vi.fn();
    const out = await chat({ messages, maxTokens: 120, env, fetchImpl: fetchImpl as unknown as typeof fetch, log });
    expect(out).toBe('Guten Tag!');
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(DEEPSEEK_URL);
    expect((init.headers as Record<string, string>).Authorization).toBe('Bearer sk-test');
    const body = JSON.parse(init.body as string);
    expect(body).toMatchObject({ model: DEFAULT_MODEL, max_tokens: 120, stream: false, thinking: { type: 'disabled' }, messages });
    expect(body.response_format).toBeUndefined();
    expect(log).toHaveBeenCalledWith('[sprechen-ai] in=100 cached=80 out=20');
  });

  it('uses the model from the environment and asks for JSON when told to', async () => {
    const fetchImpl = vi.fn(() => ok('{}'));
    await chat({ messages, maxTokens: 50, json: true, env: { ...env, DEEPSEEK_MODEL: 'deepseek-v4-pro' }, fetchImpl: fetchImpl as unknown as typeof fetch, log: () => {} });
    const body = JSON.parse((fetchImpl.mock.calls[0] as unknown as [string, RequestInit])[1].body as string);
    expect(body.model).toBe('deepseek-v4-pro');
    expect(body.response_format).toEqual({ type: 'json_object' });
  });

  it('refuses to call without a key', async () => {
    const fetchImpl = vi.fn();
    await expect(chat({ messages, maxTokens: 10, env: {}, fetchImpl: fetchImpl as unknown as typeof fetch })).rejects.toMatchObject({ kind: 'off' });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it.each([[401, 'auth'], [402, 'balance'], [429, 'limit'], [400, 'bad'], [500, 'upstream']])('maps HTTP %i to %s', async (code, kind) => {
    const fetchImpl = vi.fn(() => status(code));
    await expect(chat({ messages, maxTokens: 10, env, fetchImpl: fetchImpl as unknown as typeof fetch, log: () => {} })).rejects.toMatchObject({ kind });
  });

  it('reports a network failure as upstream and a hung call as timeout', async () => {
    const down = vi.fn(() => Promise.reject(new Error('offline')));
    await expect(chat({ messages, maxTokens: 10, env, fetchImpl: down as unknown as typeof fetch })).rejects.toBeInstanceOf(DeepSeekError);
    await expect(chat({ messages, maxTokens: 10, env, fetchImpl: down as unknown as typeof fetch })).rejects.toMatchObject({ kind: 'upstream' });
    const hang = vi.fn((_u: string, init: RequestInit) => new Promise((_r, rej) => init.signal?.addEventListener('abort', () => rej(Object.assign(new Error('x'), { name: 'AbortError' })))));
    await expect(chat({ messages, maxTokens: 10, env, fetchImpl: hang as unknown as typeof fetch, timeoutMs: 10 })).rejects.toMatchObject({ kind: 'timeout' });
  });

  it('returns an empty string when the model sends no content', async () => {
    const fetchImpl = vi.fn(() => Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({ choices: [] }) } as Response));
    expect(await chat({ messages, maxTokens: 10, env, fetchImpl: fetchImpl as unknown as typeof fetch, log: () => {} })).toBe('');
  });
});

describe('chatJson', () => {
  const messages = [{ role: 'user' as const, content: 'json please' }];
  it('retries once when the first answer is blank', async () => {
    const fetchImpl = vi.fn().mockReturnValueOnce(ok('')).mockReturnValueOnce(ok('{"a":1}'));
    expect(await chatJson({ messages, maxTokens: 50, env, fetchImpl: fetchImpl as unknown as typeof fetch, log: () => {} })).toBe('{"a":1}');
    expect(fetchImpl).toHaveBeenCalledTimes(2);
  });
  it('does not retry a good answer', async () => {
    const fetchImpl = vi.fn(() => ok('{"a":1}'));
    await chatJson({ messages, maxTokens: 50, env, fetchImpl: fetchImpl as unknown as typeof fetch, log: () => {} });
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });
});
