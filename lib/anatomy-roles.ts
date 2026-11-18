import type { AnatomyRole } from '@/content/types';

export interface RoleMeta {
  /** CSS colour (a design token) used for the part of the sentence and its label. */
  color: string;
  de: string;
  en: string;
  fr: string;
}

// Colours come from the theme tokens. They deliberately avoid the der/die/das blue, pink and yellow,
// which mean grammatical gender everywhere else in the app.
export const ROLE_META: Record<AnatomyRole, RoleMeta> = {
  subject: { color: 'var(--t1)', de: 'Subjekt', en: 'subject', fr: 'sujet' },
  verb: { color: 'var(--ember-t)', de: 'Verb', en: 'verb', fr: 'verbe' },
  accusative: { color: 'var(--role-acc)', de: 'Akkusativ', en: 'accusative', fr: 'accusatif' },
  dative: { color: 'var(--ok-t)', de: 'Dativ', en: 'dative', fr: 'datif' },
  time: { color: 'var(--role-time)', de: 'Zeit', en: 'time', fr: 'temps' },
  place: { color: 'var(--role-time)', de: 'Ort', en: 'place', fr: 'lieu' },
  connector: { color: 'var(--t2)', de: 'Verbinder', en: 'connector', fr: 'connecteur' },
  other: { color: 'var(--t3)', de: '', en: '', fr: '' },
};

/** The sentence as one string: parts joined by spaces. The audio script builds the same string (scripts/prepare-audio.mjs). */
export const anatomyText = (parts: { text: string }[]): string => parts.map((p) => p.text).join(' ');
