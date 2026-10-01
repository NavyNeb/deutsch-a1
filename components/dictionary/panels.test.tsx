import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { VerbPanel } from './VerbPanel';
import { NounPanel } from './NounPanel';
import { AdjectivePanel } from './AdjectivePanel';
import { allVocab } from '@/content';

vi.mock('@/lib/audio', () => ({ speakText: vi.fn(), ttsSrc: (s: string) => s, playAudio: vi.fn() }));

describe('VerbPanel', () => {
  it('shows 9 tabs for gehen (no personal passive for sein verbs) and Perfekt shows bin gegangen', () => {
    render(<VerbPanel entry={{ w: 'gehen', p: 'verb', v: 'geht, ging, ist gegangen', s: [] }} />);
    expect(screen.getAllByRole('tab')).toHaveLength(9);
    expect(screen.queryByRole('tab', { name: 'Passiv' })).toBeNull();
    fireEvent.click(screen.getByRole('tab', { name: 'Perfekt' }));
    expect(screen.getByText('bin gegangen')).toBeTruthy();
  });

  it('shows the check banner when principal parts are missing, without crashing', () => {
    render(<VerbPanel entry={{ w: 'machen', p: 'verb', s: [] }} />);
    expect(screen.getByRole('status').textContent).toMatch(/rules/i);
    expect(document.body.textContent).not.toMatch(/undefined|NaN/);
  });

  it('survives a malformed 1-part and 6-part v', () => {
    for (const v of ['ging', 'a, b, c, d, e, f']) {
      const { unmount } = render(<VerbPanel entry={{ w: 'gehen', p: 'verb', v, s: [] }} />);
      expect(screen.getAllByRole('tab').length).toBeGreaterThan(0);
      unmount();
    }
  });

  it('shows the passive past variants and the würde form', () => {
    render(<VerbPanel entry={{ w: 'machen', p: 'verb', v: 'macht, machte, hat gemacht', s: [] }} />);
    expect(screen.getAllByRole('tab')).toHaveLength(10);
    fireEvent.click(screen.getByRole('tab', { name: 'Konjunktiv II' }));
    expect(screen.getAllByText(/würde machen/).length).toBeGreaterThan(0);
    fireEvent.click(screen.getByRole('tab', { name: 'Passiv' }));
    expect(screen.getAllByText(/worden/).length).toBeGreaterThan(0);
  });

  it('links the Perfekt tab to its special course', () => {
    render(<VerbPanel entry={{ w: 'gehen', p: 'verb', v: 'geht, ging, ist gegangen', s: [] }} />);
    fireEvent.click(screen.getByRole('tab', { name: 'Perfekt' }));
    expect(screen.getByRole('link', { name: /Perfekt/ }).getAttribute('href')).toBe('/specials/perfekt');
  });
});

describe('specials in the dictionary corpus', () => {
  it('feeds special-course vocab into allVocab', () => {
    expect(allVocab().some((v) => v.id.startsWith('sp-'))).toBe(true);
  });
});

describe('NounPanel', () => {
  it('shows a dash for a missing plural and never "undefined"', () => {
    render(<NounPanel entry={{ w: 'Wasser', p: 'noun', g: 'n', s: [] }} />);
    expect(screen.getAllByText('—').length).toBe(4);
    expect(document.body.textContent).not.toContain('undefined');
  });

  it('declines Haus', () => {
    render(<NounPanel entry={{ w: 'Haus', p: 'noun', g: 'n', pl: 'Häuser', gen: 'Hauses', s: [] }} />);
    expect(screen.getByText('den Häusern')).toBeTruthy();
    expect(screen.getByText('des Hauses')).toBeTruthy();
  });
});

describe('AdjectivePanel', () => {
  it('renders the comparison from data', () => {
    render(<AdjectivePanel entry={{ w: 'schön', p: 'adj', v: 'schöner, am schönsten', s: [] }} />);
    expect(screen.getByText('am schönsten')).toBeTruthy();
    expect(screen.queryByRole('status')).toBeNull();
  });
});
