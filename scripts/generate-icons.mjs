// Renders the PWA icon set from an inline SVG mark ("D" + amber dot on brand teal).
// Run: node scripts/generate-icons.mjs  (uses sharp, which ships with Next.js)
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const TEAL = '#2B788B';
const AMBER = '#E8A020';

const mark = `
  <path d="M150 142 H236 A114 114 0 0 1 236 370 H150 Z" fill="none" stroke="#fff" stroke-width="54" stroke-linejoin="round"/>
  <circle cx="398" cy="372" r="30" fill="${AMBER}"/>`;

// full-bleed square (maskable + apple-touch: the OS applies its own mask)
const square = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" fill="${TEAL}"/>${inner}</svg>`;
// rounded "any" icon with transparent corners
const rounded = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="${TEAL}"/>${inner}</svg>`;

const out = new URL('../public/icons/', import.meta.url);
await mkdir(out, { recursive: true });

const jobs = [
  ['icon-192.png', rounded(mark), 192],
  ['icon-512.png', rounded(mark), 512],
  ['icon-maskable-512.png', square(mark), 512],
  ['apple-touch-icon.png', square(mark), 180],
];
for (const [name, svg, size] of jobs) {
  const png = await sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9 }).toBuffer();
  await writeFile(new URL(name, out), png);
  console.log(name, png.length, 'bytes');
}
