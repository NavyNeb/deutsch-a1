import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Mascot } from './Mascot';
import { Confetti } from './Confetti';

describe('Mascot', () => {
  it('draws its face in theme tokens, never a fixed white that vanishes on the pale head', () => {
    for (const expression of ['happy', 'celebrate', 'think'] as const) {
      const { container, unmount } = render(<Mascot expression={expression} />);
      const painted = Array.from(container.querySelectorAll('*')).flatMap((e) => [e.getAttribute('fill'), e.getAttribute('stroke')]).filter(Boolean) as string[];
      expect(painted.length).toBeGreaterThan(0);
      expect(painted.filter((c) => /^#(fff|ffffff)$/i.test(c)), expression).toEqual([]);
      unmount();
    }
  });
});

describe('Confetti', () => {
  it('uses neutral paper tones, not decorative colour', async () => {
    const { container } = render(<Confetti count={12} />);
    await new Promise((r) => setTimeout(r, 10));
    const pieces = Array.from(container.querySelectorAll('span')) as HTMLElement[];
    expect(pieces.length).toBe(12);
    for (const p of pieces) expect(p.style.background).toMatch(/var\(--t[123]\)/);
  });
});
