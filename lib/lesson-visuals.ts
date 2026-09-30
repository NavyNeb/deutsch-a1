import type { Lesson, Level } from '@/content/types';

// Gamy but on-brand gradient bands for lesson cards — cycled per module so a
// level reads as a colourful set while the teal brand stays dominant elsewhere.
const BANDS: { grad: string; ink: string }[] = [
  { grad: 'linear-gradient(135deg,#2B788B,#57A9BC)', ink: '#EAF6F9' }, // teal
  { grad: 'linear-gradient(135deg,#3D6FB0,#7FA8DE)', ink: '#EAF1FB' }, // blue
  { grad: 'linear-gradient(135deg,#C86B8E,#F0A6BE)', ink: '#FBEBF1' }, // rose
  { grad: 'linear-gradient(135deg,#3E9E7E,#79C9A9)', ink: '#E9F7F1' }, // green
  { grad: 'linear-gradient(135deg,#D9973B,#F4C271)', ink: '#FBF1DF' }, // amber
  { grad: 'linear-gradient(135deg,#7A6BC4,#A99BE4)', ink: '#F0ECFB' }, // violet
  { grad: 'linear-gradient(135deg,#D2724E,#F0A585)', ink: '#FBECE4' }, // coral
  { grad: 'linear-gradient(135deg,#2F97A6,#6FC7D2)', ink: '#E6F7F9' }, // cyan
];

const LEVEL_INDEX: Record<Level, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

export function lessonModule(lesson: Lesson): number {
  return lesson.module ?? Math.ceil(lesson.number / 3);
}

export function lessonBand(lesson: Lesson): { grad: string; ink: string } {
  const idx = (LEVEL_INDEX[lesson.level] * 4 + (lessonModule(lesson) - 1)) % BANDS.length;
  return BANDS[(idx + BANDS.length) % BANDS.length];
}

// Keyword → emoji glyph, matched against the lesson's German/English title + theme.
// Ordered most-specific first; falls back to a rotating set so every card gets art.
const GLYPHS: [RegExp, string][] = [
  [/gruß|grüß|hallo|kontakt|kennenlern|greet|introduc/i, '👋'],
  [/name|vorstell|steckbrief/i, '🪪'],
  [/zahl|nummer|number|count/i, '🔢'],
  [/famili|family|eltern|kind|mutter|mother|vater|father|mère|père|geschwister/i, '👨‍👩‍👧'],
  [/freund|friend|leute|people/i, '🧑‍🤝‍🧑'],
  [/uhr|zeit|time|termin/i, '🕐'],
  [/tag|woche|alltag|routine|day|daily/i, '📅'],
  [/essen|food|lebensmittel|restaurant|mahl/i, '🍽️'],
  [/trink|getränk|drink|café|kaffee/i, '🥤'],
  [/einkauf|shop|markt|kaufen|preis|geld|money/i, '🛒'],
  [/wohn|haus|home|apartment|zuhause/i, '🏠'],
  [/zimmer|möbel|furniture|room/i, '🛋️'],
  [/freizeit|hobby|hobbies|leisure/i, '🎨'],
  [/sport|fitness|fußball|schwimm/i, '⚽'],
  [/reise|travel|urlaub|unterwegs|ferien/i, '🧳'],
  [/verkehr|transport|zug|bahn|auto|bus/i, '🚆'],
  [/gesund|health|körper|arzt|krank|body/i, '🩺'],
  [/wetter|weather|jahreszeit|klima/i, '🌦️'],
  [/arbeit|beruf|job|büro|work|karriere|journalist|angestellt/i, '💼'],
  [/schule|studium|lernen|bildung|school|learn/i, '📚'],
  [/stadt|city|ort|wegbeschreib|richtung|direction/i, '🏙️'],
  [/natur|umwelt|nature|environment/i, '🌳'],
  [/fest|feier|party|geburtstag|celebrat/i, '🎉'],
  [/kleid|kleidung|mode|cloth|fashion/i, '👕'],
  [/musik|music|lied|konzert/i, '🎵'],
  [/film|kino|movie|fernseh|medien|media/i, '🎬'],
  [/telefon|handy|phone|anruf|call/i, '📞'],
  [/brief|email|mail|schreib|write/i, '✉️'],
  [/körper|gefühl|emotion|feel/i, '💬'],
];

const FALLBACK = ['✨', '📖', '🗣️', '🎯', '🧩', '🌟', '💡', '🔤'];

export function lessonGlyph(lesson: Lesson): string {
  // Match the title first (most specific to the lesson), then the broader theme —
  // otherwise a stray word like "numbers" in a theme hijacks a job/family lesson.
  const title = `${lesson.title.de} ${lesson.title.en} ${lesson.title.fr ?? ''}`;
  for (const [re, emoji] of GLYPHS) if (re.test(title)) return emoji;
  for (const [re, emoji] of GLYPHS) if (re.test(lesson.theme)) return emoji;
  return FALLBACK[(lesson.number - 1 + LEVEL_INDEX[lesson.level]) % FALLBACK.length];
}
