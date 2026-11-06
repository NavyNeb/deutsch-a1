'use client';
import { useEffect, useRef } from 'react';

const SHOW_MS = 6000;

/** A small speech bubble beside the buddy. It goes away by itself, or on any tap, scroll or key press. */
export function Hint({ text, onDone, className }: { text: string; onDone: () => void; className: string }) {
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const done = () => doneRef.current();
    const timer = setTimeout(done, SHOW_MS);
    document.addEventListener('click', done);
    document.addEventListener('keydown', done);
    window.addEventListener('scroll', done, true);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', done);
      document.removeEventListener('keydown', done);
      window.removeEventListener('scroll', done, true);
    };
  }, []);

  return (
    <div className={'fixed z-30 flex items-center h-[52px] md:h-16 pointer-events-none ' + className}>
      <div
        data-testid="kumpel-hint"
        role="status"
        className="kumpel-fade max-w-[220px] rounded-[16px_16px_6px_16px] border border-border-strong bg-surface-2 px-4 py-2.5 text-[13px] font-medium leading-snug text-text shadow-pop"
      >
        {text}
      </div>
    </div>
  );
}
