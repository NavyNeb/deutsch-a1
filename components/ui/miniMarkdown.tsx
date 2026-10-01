import { Fragment } from 'react';

// Tiny markdown subset for lesson content: paragraphs, **bold** and *italic* inline, and -/• bullet lists.
// Intentionally not a full markdown parser — keep it small and shared between learn & review modes.
function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g).filter((p) => p !== '');
  return parts.map((part, i) => {
    if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
    }
    if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
      return <em key={`${keyPrefix}-${i}`}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={`${keyPrefix}-${i}`}>{part}</Fragment>;
  });
}

export function MiniMarkdown({ md }: { md: string }) {
  const blocks = md.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  return (
    <>
      {blocks.map((block, bi) => {
        const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
        const isList = lines.length > 0 && lines.every((l) => l.startsWith('-') || l.startsWith('•'));
        if (isList) {
          return (
            <ul key={bi} className="my-2 pl-5 grid gap-1 marker:text-primary">
              {lines.map((l, li) => (
                <li key={li}>{renderInline(l.replace(/^[-•]\s*/, ''), `${bi}-${li}`)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={bi} className="my-2 leading-relaxed">
            {lines.map((l, li) => (
              <Fragment key={li}>
                {li > 0 && <br />}
                {renderInline(l, `${bi}-${li}`)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}
