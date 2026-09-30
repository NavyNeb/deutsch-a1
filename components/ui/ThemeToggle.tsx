'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';
const KEY = 'deutsch-a1-theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  // Sync from the attribute the pre-paint script may have already set.
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex items-center justify-center shrink-0 w-10 h-10 sm:w-9 sm:h-9 rounded-full text-text-2 bg-card border border-border shadow-sm
        transition-[transform,border-color] duration-150 hover:border-border-strong active:scale-95"
    >
      {theme === 'dark' ? <Moon size={16} strokeWidth={2.2} /> : <Sun size={16} strokeWidth={2.2} />}
    </button>
  );
}
