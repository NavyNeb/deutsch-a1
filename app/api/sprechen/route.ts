import { AI_SCENARIOS } from '@/content/sprechen';
import { aiEnabled, chat, chatJson, DeepSeekError } from '@/lib/deepseek';
import { cleanTurns, feedbackMessages, MAX_FEEDBACK_TOKENS, MAX_REPLY_TOKENS, parseFeedback, turnMessages } from '@/lib/sprechen-ai';

// The AI speaking partner. GET says whether it is switched on; POST gives the partner's next line (mode "turn")
// or marks the whole conversation (mode "feedback"). Only the German transcript goes to the model.

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

const MAX_BODY = 12_000;
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 30;
const hits = new Map<string, { count: number; reset: number }>();

// Best-effort limiter: per server instance, so it caps casual abuse, not a determined one.
function limited(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 5000) for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
  const h = hits.get(ip);
  if (!h || h.reset < now) { hits.set(ip, { count: 1, reset: now + WINDOW_MS }); return false; }
  h.count += 1;
  return h.count > MAX_PER_WINDOW;
}

const fail = (error: string, status: number) => Response.json({ error }, { status });

export async function GET() {
  return Response.json({ enabled: aiEnabled() });
}

export async function POST(req: Request) {
  if (!aiEnabled()) return fail('off', 503);

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return fail('limit', 429);

  let body: Record<string, unknown>;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY) return fail('too-large', 413);
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return fail('invalid', 400);
  }

  const scenario = AI_SCENARIOS.find((s) => s.id === body.scenario);
  const turns = cleanTurns(body.turns);
  if (!scenario || !turns) return fail('invalid', 400);
  const locale = body.locale === 'fr' ? 'fr' : 'en';

  try {
    if (body.mode === 'turn') {
      if (!turns.length || turns[turns.length - 1].role !== 'learner') return fail('invalid', 400);
      const reply = await chat({ messages: turnMessages(scenario, turns), maxTokens: MAX_REPLY_TOKENS, temperature: 0.8 });
      if (!reply) return fail('empty', 502);
      return Response.json({ text: reply.slice(0, 600) });
    }
    if (body.mode === 'feedback') {
      if (turns.filter((t) => t.role === 'learner').length < 2) return fail('too-short', 400);
      const raw = await chatJson({ messages: feedbackMessages(scenario, turns, locale), maxTokens: MAX_FEEDBACK_TOKENS, temperature: 0.3 });
      const feedback = parseFeedback(raw);
      if (!feedback) return fail('unreadable', 502);
      return Response.json({ feedback });
    }
    return fail('invalid', 400);
  } catch (e) {
    if (e instanceof DeepSeekError) {
      // A spent balance or a bad key looks like "off" to the learner: the rest of the app keeps working.
      if (e.kind === 'balance' || e.kind === 'auth' || e.kind === 'off') return fail('off', 503);
      if (e.kind === 'limit') return fail('limit', 429);
      if (e.kind === 'timeout') return fail('timeout', 504);
    }
    return fail('upstream', 502);
  }
}
