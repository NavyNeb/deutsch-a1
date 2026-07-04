export function assistEnabledServer(): boolean {
  return !!process.env.ANTHROPIC_API_KEY;
}

export const ASSIST_MODELS = {
  cheap: 'claude-haiku-4-5-20251001',
  rich: 'claude-sonnet-5',
} as const;
