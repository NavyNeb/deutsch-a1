import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DictCardLink } from './DictCardLink';

describe('DictCardLink', () => {
  it('links to the lemma page with the current query and a labelled anchor', () => {
    render(<article className="relative"><DictCardLink headword="Straße" q="strasse" /></article>);
    const a = screen.getByRole('link', { name: /Straße/ });
    expect(a.getAttribute('href')).toBe('/dictionary/Stra%C3%9Fe?q=strasse');
  });

  it('does not wrap sibling buttons', () => {
    render(
      <article className="relative">
        <DictCardLink headword="gehen" />
        <button className="relative z-10">listen</button>
      </article>,
    );
    const a = screen.getByRole('link');
    expect(a.contains(screen.getByRole('button'))).toBe(false);
  });
});
