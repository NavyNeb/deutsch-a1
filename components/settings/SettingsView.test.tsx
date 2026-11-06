import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';
import { useLocale } from '@/lib/locale-store';
import { SettingsView } from './SettingsView';

function Probe() {
  const { locale } = useLocale();
  return <output data-testid="locale">{locale}</output>;
}

afterEach(() => { document.documentElement.removeAttribute('data-theme'); localStorage.clear(); });

describe('SettingsView', () => {
  it('renders the language and theme controls', () => {
    render(<SettingsView />);
    expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'FR' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /dark/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /light/i })).toBeInTheDocument();
  });

  it('switching to French updates the locale store', () => {
    render(<><SettingsView /><Probe /></>);
    fireEvent.click(screen.getByRole('button', { name: 'FR' }));
    expect(screen.getByTestId('locale')).toHaveTextContent('fr');
    fireEvent.click(screen.getByRole('button', { name: 'EN' }));
    expect(screen.getByTestId('locale')).toHaveTextContent('en');
  });

  it('theme defaults to dark and switching to light applies and stores it', () => {
    render(<SettingsView />);
    expect(screen.getByRole('button', { name: /dark/i })).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(screen.getByRole('button', { name: /light/i }));
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('deutsch-a1-theme')).toBe('light');
  });
});
