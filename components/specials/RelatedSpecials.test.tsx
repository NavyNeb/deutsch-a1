import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RelatedSpecials } from './RelatedSpecials';
import { relatedSpecials } from '@/content/specials';
import type { Special } from '@/content/types';

const sp = {
  id: 'sp-modalverben', number: 1, level: 'A2', title: { de: 'Modalverben', en: 'Modal verbs', fr: 'Verbes modaux' }, theme: 't', goals: [], steps: [],
  special: { slug: 'modalverben', group: 'verbs', levels: ['A1', 'B1'], related: ['l7'], bookRefs: [] },
} as unknown as Special;

describe('RelatedSpecials', () => {
  it('renders nothing when no special matches the lesson', () => {
    const { container } = render(<RelatedSpecials lessonId="l1" items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('links each related special to its overview page', () => {
    render(<RelatedSpecials lessonId="l7" items={[sp]} />);
    expect(screen.getByRole('link', { name: /Modalverben/ }).getAttribute('href')).toBe('/specials/modalverben');
  });
});

describe('relatedSpecials', () => {
  it('only returns specials that list the lesson', () => {
    for (const s of relatedSpecials('l7')) expect(s.special.related).toContain('l7');
    expect(relatedSpecials('no-such-lesson')).toEqual([]);
  });
});
