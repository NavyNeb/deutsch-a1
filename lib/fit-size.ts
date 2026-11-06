/**
 * A CSS font-size that keeps a word on one line: the display `max` for short words, shrinking as the word
 * grows (0.52em per character is a good average for Jost), and never wider than the viewport.
 */
export function fitSize(text: string, max: number, width: number, viewportPad = 48): string {
  const em = (Math.max(1, text.length) * 0.52).toFixed(2);
  return `min(${max}px, calc(${width}px / ${em}), calc((100vw - ${viewportPad}px) / ${em}))`;
}
