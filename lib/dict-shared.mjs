// Shared by scripts/build-dictionary.mjs (Node) and lib/dictionary.ts (browser),
// so the build and the search always agree on how words map to shard files.

// Lowercase, strip diacritics, ß -> ss, keep letters/digits/space/hyphen.
export function fold(input) {
  return String(input)
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 \-]/g, '')
    .trim();
}

// Letters only (a-z), used to derive shard keys.
export function letters(input) {
  return fold(input).replace(/[^a-z]/g, '');
}

// First 2 letters, or 3 if that 2-letter prefix was split because it was too big.
// Windows device names can't be file names ("aux.json" breaks git/checkout there).
const RESERVED = new Set(['aux', 'con', 'prn', 'nul']);

export function shardKey(word, splitPrefixes) {
  const l = letters(word);
  const two = (l + '__').slice(0, 2);
  if (splitPrefixes && splitPrefixes.has(two)) {
    const three = (l + '___').slice(0, 3);
    return RESERVED.has(three) ? three + '_' : three;
  }
  return two;
}
