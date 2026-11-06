import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { dateKey, emptyProgress } from '@/lib/progress';
import { replaceProgress } from '@/lib/progress-store';
import { MeView } from './MeView';

beforeEach(() => replaceProgress(emptyProgress()));

describe('MeView (Du)', () => {
  it('links to statistics, account and settings', () => {
    render(<MeView />);
    for (const href of ['/statistics', '/account', '/settings']) {
      expect(document.querySelector(`a[href="${href}"]`), href).not.toBeNull();
    }
  });

  it('shows the current streak and total XP', () => {
    const s = emptyProgress();
    s.xp = 125;
    s.activity[dateKey(Date.now())] = 20;
    replaceProgress(s);
    render(<MeView />);
    expect(screen.getByText('125')).toBeInTheDocument();
    expect(screen.getByLabelText(/day streak|jours de suite/i)).toHaveTextContent('1');
  });

  it('works with brand-new empty progress', () => {
    render(<MeView />);
    expect(screen.getByRole('heading', { level: 1, name: 'Du.' })).toBeInTheDocument();
    expect(screen.getByLabelText(/day streak|jours de suite/i)).toHaveTextContent('0');
  });
});
