export function Button({ children, ...p }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...p} className={`px-5 py-3 rounded-lg text-white font-semibold disabled:opacity-40 ${p.className ?? ''}`} style={{ background: 'var(--accent)' }}>{children}</button>;
}
