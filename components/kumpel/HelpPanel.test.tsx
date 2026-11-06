import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { replaceSettings } from '@/lib/settings-store';
import { PAGE_HELP } from '@/lib/kumpel-copy';

vi.mock('next/navigation', () => ({ usePathname: () => '/', useRouter: () => ({ push: vi.fn() }) }));

import { HelpPanel } from './HelpPanel';

function setup(over: Partial<React.ComponentProps<typeof HelpPanel>> = {}) {
  const props = { group: 'today' as const, tab: 'here' as const, onTab: vi.fn(), onClose: vi.fn(), onStartTour: vi.fn(), ...over };
  const utils = render(<HelpPanel {...props} />);
  return { ...utils, props };
}

beforeEach(() => {
  localStorage.clear();
  replaceSettings({ kumpel: undefined });
});

describe('HelpPanel', () => {
  it('is a labelled dialog', () => {
    setup();
    expect(screen.getByRole('dialog', { name: 'Kumpel help' })).toBeInTheDocument();
  });

  it('shows the page purpose and its numbered parts on the first tab', () => {
    setup();
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByText(PAGE_HELP.today.purpose.en)).toBeInTheDocument();
    PAGE_HELP.today.parts.forEach((p, i) => {
      expect(within(dialog).getByText(p.de)).toBeInTheDocument();
      expect(within(dialog).getByText(p.text.en)).toBeInTheDocument();
      expect(within(dialog).getByText(String(i + 1))).toBeInTheDocument();
    });
    expect(within(dialog).getByText(/Diese Seite · Heute/)).toBeInTheDocument();
  });

  it('switches tabs through onTab', () => {
    const { props } = setup();
    fireEvent.click(screen.getByRole('tab', { name: 'Questions' }));
    expect(props.onTab).toHaveBeenCalledWith('ask');
    expect(screen.getByRole('tab', { name: 'This page' })).toHaveAttribute('aria-selected', 'true');
  });

  it('lists the questions and opens one answer at a time', () => {
    setup({ tab: 'ask' });
    const qs = PAGE_HELP.today.questions;
    const first = screen.getByRole('button', { name: qs[0].q.en });
    const second = screen.getByRole('button', { name: qs[1].q.en });
    expect(first).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(first);
    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(qs[0].a.en)).toBeInTheDocument();
    fireEvent.click(second);
    expect(first).toHaveAttribute('aria-expanded', 'false');
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(screen.queryByText(qs[0].a.en)).toBeNull();
    expect(screen.getByText(qs[1].a.en)).toBeInTheDocument();
  });

  it('shows at most three chips, and a chip jumps to its answer', () => {
    const { props } = setup();
    const chips = screen.getAllByTestId('kumpel-chip');
    expect(chips.length).toBeGreaterThan(0);
    expect(chips.length).toBeLessThanOrEqual(3);
    fireEvent.click(chips[0]);
    expect(props.onTab).toHaveBeenCalledWith('ask');
  });

  it('starts the tour from the primary button', () => {
    const { props } = setup();
    fireEvent.click(screen.getByRole('button', { name: /Tour starten/ }));
    expect(props.onStartTour).toHaveBeenCalled();
  });

  it('closes with Esc and with the close button', () => {
    const { props } = setup();
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    expect(props.onClose).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(props.onClose).toHaveBeenCalledTimes(2);
  });

  it('closes when the scrim is pressed', () => {
    const { props } = setup();
    fireEvent.click(screen.getByTestId('kumpel-scrim'));
    expect(props.onClose).toHaveBeenCalled();
  });

  it('moves focus in on open and gives it back on close', () => {
    const opener = document.createElement('button');
    document.body.appendChild(opener);
    opener.focus();
    const { unmount } = setup();
    expect(screen.getByRole('dialog').contains(document.activeElement)).toBe(true);
    unmount();
    expect(document.activeElement).toBe(opener);
    opener.remove();
  });

  it('keeps Tab inside the dialog', () => {
    setup();
    const dialog = screen.getByRole('dialog');
    const focusables = dialog.querySelectorAll<HTMLElement>('button, [tabindex="0"]');
    const last = focusables[focusables.length - 1];
    last.focus();
    fireEvent.keyDown(dialog, { key: 'Tab' });
    expect(dialog.contains(document.activeElement)).toBe(true);
  });

  it('renders French text in French', async () => {
    localStorage.setItem('deutsch-a1-locale', 'fr');
    const { useLocale } = await import('@/lib/locale-store');
    const { renderHook } = await import('@testing-library/react');
    const hook = renderHook(() => useLocale());
    act(() => hook.result.current.setLocale('fr'));
    setup();
    expect(screen.getByText(PAGE_HELP.today.purpose.fr)).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Cette page' })).toBeInTheDocument();
    act(() => hook.result.current.setLocale('en'));
  });

  it('sits right of the rail when Kumpel is on the left', () => {
    replaceSettings({ kumpel: { side: 'left' } });
    setup();
    expect(screen.getByRole('dialog').className).toContain('md:left-[288px]');
  });
});
