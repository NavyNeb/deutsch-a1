import { render } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { newCard } from '@/lib/srs';
import { GamesHub } from './GamesHub';

beforeEach(() => { localStorage.clear(); replaceProgress(emptyProgress()); });

describe('GamesHub (Üben)', () => {
  it('links to every practice tool', () => {
    render(<GamesHub />);
    for (const href of ['/games/sprint', '/games/audio', '/practice/review', '/speak', '/write', '/specials']) {
      expect(document.querySelector(`a[href="${href}"]`), href).not.toBeNull();
    }
  });

  it('shows how many words are due on the review tile', () => {
    const s = emptyProgress();
    const past = Date.now() - 86_400_000;
    s.cards.a = newCard(past);
    s.cards.b = newCard(past);
    s.cards.c = newCard(Date.now() + 5 * 86_400_000); // not due yet
    replaceProgress(s);
    render(<GamesHub />);
    const review = document.querySelector('a[href="/practice/review"]') as HTMLElement;
    expect(review).toHaveTextContent('2');
    expect(review).toHaveTextContent(/due|à réviser/i);
  });

  it('says nothing is due when the queue is empty', () => {
    render(<GamesHub />);
    const review = document.querySelector('a[href="/practice/review"]') as HTMLElement;
    expect(review).toHaveTextContent(/nothing due|rien à réviser/i);
  });
});
