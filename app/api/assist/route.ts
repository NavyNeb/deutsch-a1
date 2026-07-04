import Anthropic from '@anthropic-ai/sdk';
import { assistEnabledServer, ASSIST_MODELS } from '@/lib/assist-config';

type AssistMode = 'explain' | 'examples' | 'quiz';

const PROMPTS: Record<AssistMode, string> = {
  explain: 'Explain this German A1 item simply in 2-3 sentences for a beginner. Use one example.',
  examples: 'Give 5 short, A1-level German example sentences using this item, each with an English translation.',
  quiz: 'Write ONE short multiple-choice question (3 options, mark the correct one) testing this German A1 item.',
};

export async function POST(req: Request) {
  if (!assistEnabledServer()) {
    return Response.json({ text: 'Assist is off — set ANTHROPIC_API_KEY to enable it.' }, { status: 503 });
  }

  const { mode, term, context } = (await req.json()) as {
    mode: AssistMode;
    term: string;
    context?: string;
  };

  if (mode !== 'explain' && mode !== 'examples' && mode !== 'quiz') {
    return Response.json({ text: 'Invalid mode' }, { status: 400 });
  }

  const client = new Anthropic();
  const msg = await client.messages.create({
    model: mode === 'examples' || mode === 'explain' ? ASSIST_MODELS.rich : ASSIST_MODELS.cheap,
    max_tokens: 500,
    system: 'You are a warm, concise German A1 tutor. Keep everything at A1 level.',
    messages: [
      {
        role: 'user',
        content: `${PROMPTS[mode]}\n\nItem: ${term}${context ? `\nContext: ${context}` : ''}`,
      },
    ],
  });

  const text = msg.content
    .filter((b) => b.type === 'text')
    .map((b) => (b as { type: 'text'; text: string }).text)
    .join('\n');

  return Response.json({ text });
}
