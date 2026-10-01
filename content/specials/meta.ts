import type { SpecialGroup } from '../types';

export const GROUP_ORDER: SpecialGroup[] = ['verbs', 'cases', 'sentences', 'words', 'life'];

export const GROUP_LABEL: Record<SpecialGroup, { en: string; fr: string }> = {
  verbs: { en: 'Verbs', fr: 'Verbes' },
  cases: { en: 'Nouns & cases', fr: 'Noms et cas' },
  sentences: { en: 'Sentences', fr: 'Phrases' },
  words: { en: 'Word fields', fr: 'Champs lexicaux' },
  life: { en: 'Real-life German', fr: 'Allemand du quotidien' },
};
