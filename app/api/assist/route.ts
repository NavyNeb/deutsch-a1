import Anthropic from '@anthropic-ai/sdk';
import { assistEnabledServer, ASSIST_MODELS } from '@/lib/assist-config';

type AssistMode = 'explain' | 'examples' | 'quiz' | 'grammar-explain';
type Locale = 'en' | 'fr';
type Level = 'A1' | 'A2' | 'B1';

const MODES: AssistMode[] = ['explain', 'examples', 'quiz', 'grammar-explain'];
const LANGUAGE: Record<Locale, string> = { en: 'English', fr: 'French' };

const PROMPTS: Record<Exclude<AssistMode, 'grammar-explain'>, string> = {
  explain: 'Explain this German item simply in 2-3 sentences for a beginner. Use one example.',
  examples: 'Give 5 short German example sentences using this item, each with a translation.',
  quiz: 'Write ONE short multiple-choice question (3 options, mark the correct one) testing this German item.',
};

const MAX_BODY = 4000;
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;
const hits = new Map<string, { count: number; reset: number }>();

// Best-effort limiter: per server instance, so it caps casual abuse, not a determined one.
function limited(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 5000) for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
  const h = hits.get(ip);
  if (!h || h.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  h.count += 1;
  return h.count > MAX_PER_WINDOW;
}

const str = (v: unknown, max: number): string | null =>
  typeof v === 'string' && v.trim().length > 0 && v.length <= max ? v.trim() : null;

const fail = (text: string, status: number) => Response.json({ text }, { status });

export async function POST(req: Request) {
  if (!assistEnabledServer()) return fail('Assist is off — set ANTHROPIC_API_KEY to enable it.', 503);

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return fail('Too many requests. Please wait a moment.', 429);

  let body: Record<string, unknown>;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY) return fail('Request too large', 413);
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return fail('Invalid request', 400);
  }

  const mode = body.mode as AssistMode;
  if (!MODES.includes(mode)) return fail('Invalid mode', 400);
  const locale: Locale = body.locale === 'fr' ? 'fr' : 'en';
  const language = LANGUAGE[locale];

  let system: string;
  let user: string;
  let model: string;
  let maxTokens = 500;

  if (mode === 'grammar-explain') {
    const sentence = str(body.sentence, 500);
    const snippet = str(body.snippet, 120);
    const message = str(body.message, 300);
    if (!sentence || !snippet || !message) return fail('Invalid input', 400);
    const replacement = typeof body.replacement === 'string' ? body.replacement.slice(0, 120) : '';
    const level: Level = body.level === 'A2' || body.level === 'B1' ? body.level : 'A1';
    system =
      `You are a warm, concise German tutor for a ${level} learner. Reply in ${language}. ` +
      'Plain text only, no markdown. Never invent rules; if the flagged suggestion looks wrong for the sentence, say so.';
    user =
      `A grammar checker flagged part of a learner's German sentence.\n` +
      `Sentence: ${sentence}\nFlagged: ${snippet}\nChecker message: ${message}\n` +
      (replacement ? `Suggested fix: ${replacement}\n` : '') +
      `In at most 3 short sentences, explain the mistake and the rule in ${language}. ` +
      `Then add one line starting with "→" giving the corrected German sentence.`;
    model = ASSIST_MODELS.cheap;
    maxTokens = 300;
  } else {
    const term = str(body.term, 200);
    if (!term) return fail('Invalid input', 400);
    const context = typeof body.context === 'string' ? body.context.slice(0, 600) : '';
    system = `You are a warm, concise German tutor. Keep everything at A1 level. Write explanations and translations in ${language}.`;
    user = `${PROMPTS[mode]}\n\nItem: ${term}${context ? `\nContext: ${context}` : ''}`;
    model = mode === 'quiz' ? ASSIST_MODELS.cheap : ASSIST_MODELS.rich;
  }

  try {
    const client = new Anthropic();
    const msg = await client.messages.create({
      model,
      max_tokens: maxTokens,
      system,
      messages: [{ role: 'user', content: user }],
    });
    const text = msg.content
      .filter((b) => b.type === 'text')
      .map((b) => (b as { type: 'text'; text: string }).text)
      .join('\n');
    return Response.json({ text });
  } catch {
    return fail('Assist is unavailable right now.', 502);
  }
}
