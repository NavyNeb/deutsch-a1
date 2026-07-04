import { Card } from '@/components/ui/Card';
import { MiniMarkdown } from '@/components/ui/miniMarkdown';

export function WrapupStep({ summary }: { summary: string }) {
  return (
    <Card>
      <h2 style={{ fontSize: 26, margin: '0 0 12px' }}>🎉 Well done!</h2>
      <MiniMarkdown md={summary} />
    </Card>
  );
}
