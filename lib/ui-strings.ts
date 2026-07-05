import type { Locale } from './locale-store';

// Every hardcoded UI-chrome string in the app (buttons, labels, headings,
// hints, aria-labels), in English and French. This intentionally does NOT
// cover lesson content (vocab meanings, example translations, grammar or
// exercise text) — that stays as-authored for now; see the i18n foundation
// report for the line between chrome and content.
export const UI = {
  back: { en: 'Back', fr: 'Retour' },
  next: { en: 'Next', fr: 'Suivant' },
  done: { en: 'Done', fr: 'Terminé' },

  openLessonNav: { en: 'Open lesson navigation', fr: 'Ouvrir la navigation de la leçon' },
  closeLessonNav: { en: 'Close lesson navigation', fr: 'Fermer la navigation de la leçon' },
  lessonStepsNav: { en: 'Lesson steps', fr: 'Étapes de la leçon' },
  completeEarlierSteps: {
    en: 'Complete the earlier steps to unlock this one',
    fr: 'Termine les étapes précédentes pour déverrouiller celle-ci',
  },

  sayIt: { en: 'say it:', fr: 'prononce :' },
  markDifficult: { en: 'Mark as difficult — save to review', fr: 'Marquer comme difficile — à réviser' },
  savedToReview: { en: 'Saved to review', fr: 'Enregistré pour révision' },
  savedToReviewTapRemove: {
    en: 'Saved to review — tap to remove',
    fr: 'Enregistré pour révision — touche pour retirer',
  },
  saveWordHint: {
    en: "Save this word to your 'Words to review' list on the home page",
    fr: "Enregistre ce mot dans ta liste « Mots à réviser » sur la page d'accueil",
  },

  wordsToReview: { en: 'Words to review', fr: 'Mots à réviser' },
  noWordsYet: {
    en: 'No saved words yet — tap “Als schwierig markieren” (mark as difficult) on a word while learning, and it will appear here.',
    fr: 'Aucun mot enregistré pour l’instant — appuie sur « Als schwierig markieren » (marquer comme difficile) sur un mot pendant l’apprentissage, et il apparaîtra ici.',
  },
  removeWord: { en: 'Remove', fr: 'Supprimer' },
  fromReview: { en: 'from hard words', fr: 'de la liste à réviser' },

  check: { en: 'Check', fr: 'Vérifier' },
  notQuite: { en: 'Not quite.', fr: 'Pas tout à fait.' },
  listenThenChoose: { en: 'Listen, then choose', fr: 'Écoute, puis choisis' },
  playClip: { en: 'Play the clip', fr: 'Écoute le clip' },
  typeYourAnswer: { en: 'Type your answer', fr: 'Tape ta réponse' },
  chooseEllipsis: { en: 'choose…', fr: 'choisis…' },
  reset: { en: 'reset', fr: 'réinitialiser' },

  comingSoon: { en: 'Coming soon', fr: 'Bientôt disponible' },
  review: { en: 'Review', fr: 'Réviser' },
  completeLessonUnlockReview: {
    en: 'Complete the lesson to unlock review',
    fr: 'Termine la leçon pour débloquer la révision',
  },

  inThisLessonYouWill: { en: 'In this lesson you will:', fr: 'Dans cette leçon, tu vas :' },
} as const;

export type UIKey = keyof typeof UI;

export function t(key: UIKey, locale: Locale): string {
  return UI[key][locale];
}
