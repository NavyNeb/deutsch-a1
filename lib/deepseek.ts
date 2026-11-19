// A small client for DeepSeek's chat API (OpenAI-compatible): https://api.deepseek.com/chat/completions.
// Server-only. No SDK: one fetch, with a timeout, usage logging and plain error kinds.

export type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

export type DeepSeekErrorKind = 'off' | 'auth' | 'balance' | 'limit' | 'bad' | 'upstream' | 'timeout';

export class DeepSeekError extends Error {
  constructor(public kind: DeepSeekErrorKind, message?: string) { super(message ?? kind); }
}

export const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
export const DEFAULT_MODEL = 'deepseek-flash'; // the cheapest model

export type Env = { DEEPSEEK_API_KEY?: string; DEEPSEEK_MODEL?: string; SPRECHEN_AI?: string };

/** The AI partner is on when a key is set and the switch is not "off". */
export function aiEnabled(env: Env = process.env as Env): boolean {
  return !!env.DEEPSEEK_API_KEY && env.SPRECHEN_AI !== 'off';
}

export type CallOptions = {
  messages: ChatMessage[];
  maxTokens: number;
  json?: boolean;
  temperature?: number;
  model?: string;
  env?: Env;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  log?: (line: string) => void;
};

type Usage = { prompt_tokens?: number; completion_tokens?: number; prompt_cache_hit_tokens?: number };

/** One chat completion. Returns the reply text; throws DeepSeekError with a kind the caller can act on. */
export async function chat(opts: CallOptions): Promise<string> {
  const env = opts.env ?? (process.env as Env);
  if (!aiEnabled(env)) throw new DeepSeekError('off');
  const f = opts.fetchImpl ?? fetch;
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), opts.timeoutMs ?? 25_000);
  try {
    const res = await f(DEEPSEEK_URL, {
      method: 'POST',
      signal: ctl.signal,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.DEEPSEEK_API_KEY}` },
      body: JSON.stringify({
        model: opts.model ?? env.DEEPSEEK_MODEL ?? DEFAULT_MODEL,
        messages: opts.messages,
        max_tokens: opts.maxTokens,
        temperature: opts.temperature ?? 0.7,
        stream: false,
        thinking: { type: 'disabled' }, // quick and cheap: no hidden reasoning tokens
        ...(opts.json ? { response_format: { type: 'json_object' } } : {}),
      }),
    });
    if (res.status === 401) throw new DeepSeekError('auth');
    if (res.status === 402) throw new DeepSeekError('balance');
    if (res.status === 429) throw new DeepSeekError('limit');
    if (res.status === 400 || res.status === 422) throw new DeepSeekError('bad');
    if (!res.ok) throw new DeepSeekError('upstream', `status ${res.status}`);
    const data = (await res.json()) as { choices?: { message?: { content?: string } }[]; usage?: Usage };
    const u = data.usage;
    (opts.log ?? console.info)(`[sprechen-ai] in=${u?.prompt_tokens ?? '?'} cached=${u?.prompt_cache_hit_tokens ?? 0} out=${u?.completion_tokens ?? '?'}`);
    return (data.choices?.[0]?.message?.content ?? '').trim();
  } catch (e) {
    if (e instanceof DeepSeekError) throw e;
    if ((e as { name?: string })?.name === 'AbortError') throw new DeepSeekError('timeout');
    throw new DeepSeekError('upstream');
  } finally {
    clearTimeout(timer);
  }
}

/** JSON mode can return blank text when the output was not valid JSON; try once more, then give up. */
export async function chatJson(opts: Omit<CallOptions, 'json'>): Promise<string> {
  const first = await chat({ ...opts, json: true });
  if (first) return first;
  return chat({ ...opts, json: true, temperature: 0.3 });
}
