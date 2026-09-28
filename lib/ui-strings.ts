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
  tip: { en: 'Tip', fr: 'Astuce' },
  tryAgain: { en: 'Try again', fr: 'Réessayer' },
  showAnswer: { en: 'Show answer', fr: 'Voir la réponse' },
  answerLabel: { en: 'Answer', fr: 'Réponse' },
  tapToPair: { en: 'Tap a word, then its meaning', fr: 'Touche un mot, puis sa signification' },
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

  pronunciation: { en: 'Pronunciation', fr: 'Prononciation' },

  homeSubtitle: {
    en: 'Your German A1 learning path — work through each lesson, track your progress, and review the words you find hard.',
    fr: 'Ton parcours d’apprentissage de l’allemand A1 — parcours chaque leçon, suis ta progression, et révise les mots que tu trouves difficiles.',
  },

  // Lesson results / celebration
  lessonComplete: { en: 'Lesson complete!', fr: 'Leçon terminée !' },
  greatJob: { en: 'Great work — keep the streak going.', fr: 'Beau travail — continue sur ta lancée.' },
  exercisesCorrect: { en: 'Exercises correct', fr: 'Exercices réussis' },
  wordsLearned: { en: 'Words learned', fr: 'Mots appris' },
  savedForReview: { en: 'Saved to review', fr: 'À réviser' },
  backToHome: { en: 'Back to home', fr: 'Retour à l’accueil' },
  reviewThisLesson: { en: 'Review this lesson', fr: 'Réviser cette leçon' },

  // Audio speed
  playbackSpeed: { en: 'Playback speed', fr: 'Vitesse de lecture' },
  speedNormal: { en: 'Normal speed', fr: 'Vitesse normale' },
  speedSlow: { en: 'Slow speed', fr: 'Vitesse lente' },

  // Home stats + review
  dayStreak: { en: 'day streak', fr: 'jours de suite' },
  dailyGoal: { en: 'Daily goal', fr: 'Objectif du jour' },
  level: { en: 'Level', fr: 'Niveau' },
  reviewDueToday: { en: 'Review due today', fr: 'À réviser aujourd’hui' },
  keepStreakAlive: { en: 'Keep your streak alive', fr: 'Garde ta série active' },
  reviewNow: { en: 'Review now', fr: 'Réviser' },
  wordsDue: { en: 'words due', fr: 'mots à réviser' },

  // Review session
  reviewHeading: { en: 'Review', fr: 'Révision' },
  whatDoesItMean: { en: 'What does this word mean?', fr: 'Que signifie ce mot ?' },
  nothingDue: { en: 'Nothing due right now', fr: 'Rien à réviser pour l’instant' },
  comeBackLater: { en: 'Come back later to keep your words fresh — or mark more words difficult while learning.', fr: 'Reviens plus tard pour entretenir tes mots — ou marque d’autres mots comme difficiles pendant l’apprentissage.' },
  reviewComplete: { en: 'Review complete!', fr: 'Révision terminée !' },
  wordsReviewed: { en: 'Words reviewed', fr: 'Mots révisés' },

  // Settings
  settings: { en: 'Settings', fr: 'Paramètres' },
  openSettings: { en: 'Open settings', fr: 'Ouvrir les paramètres' },
  theme: { en: 'Theme', fr: 'Thème' },
  themeLight: { en: 'Light', fr: 'Clair' },
  themeDark: { en: 'Dark', fr: 'Sombre' },
  language: { en: 'Language', fr: 'Langue' },
  xpPerDay: { en: 'XP / day', fr: 'XP / jour' },
  activity: { en: 'Activity', fr: 'Activité' },
  totalXp: { en: 'Total XP', fr: 'XP total' },
  wordsSaved: { en: 'Saved words', fr: 'Mots enregistrés' },

  // Onboarding
  onboardingTitle: { en: 'Set your daily pace', fr: 'Choisis ton rythme quotidien' },
  onboardingSubtitle: { en: 'How much German do you want to learn each day? You can change this anytime in settings.', fr: 'Combien d’allemand veux-tu apprendre chaque jour ? Modifiable à tout moment dans les paramètres.' },
  startLearning: { en: 'Start learning', fr: 'Commencer' },
  goalRelaxed: { en: 'Relaxed', fr: 'Tranquille' },
  goalRegular: { en: 'Regular', fr: 'Régulier' },
  goalSerious: { en: 'Serious', fr: 'Sérieux' },
  goalIntense: { en: 'Intense', fr: 'Intense' },

  // Speaking practice
  speak: { en: 'Speak', fr: 'Parler' },
  listening: { en: 'Listening…', fr: 'Écoute…' },
  soundsGood: { en: 'Sounds good!', fr: 'Bien prononcé !' },
  notQuiteHeard: { en: 'Heard', fr: 'Entendu' },

  // Account / sync
  account: { en: 'Account', fr: 'Compte' },
  signIn: { en: 'Sign in', fr: 'Se connecter' },
  signUp: { en: 'Create account', fr: 'Créer un compte' },
  signOut: { en: 'Sign out', fr: 'Se déconnecter' },
  emailLabel: { en: 'Email', fr: 'E-mail' },
  passwordLabel: { en: 'Password', fr: 'Mot de passe' },
  syncOn: { en: 'Your progress syncs across your devices.', fr: 'Ta progression est synchronisée sur tes appareils.' },
  signInToSync: { en: 'Sign in to sync your progress across devices', fr: 'Connecte-toi pour synchroniser ta progression sur tes appareils' },
  checkEmailConfirm: { en: 'Almost there — check your email to confirm your account, then sign in.', fr: 'Presque fini — vérifie ta boîte mail pour confirmer ton compte, puis connecte-toi.' },
  toggleToSignIn: { en: 'Already have an account? Sign in', fr: 'Déjà un compte ? Se connecter' },
  toggleToSignUp: { en: 'New here? Create an account', fr: 'Nouveau ? Créer un compte' },
  deleteData: { en: 'Delete my synced data', fr: 'Supprimer mes données synchronisées' },
  deleteDataConfirm: { en: 'Permanently delete your synced cloud data? Your local progress on this device stays.', fr: 'Supprimer définitivement tes données synchronisées ? Ta progression locale sur cet appareil reste.' },
} as const;

export type UIKey = keyof typeof UI;

export function t(key: UIKey, locale: Locale): string {
  return UI[key][locale];
}
