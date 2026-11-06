import type { L } from './kumpel-copy';

export type StepKind = 'intro' | 'chapter' | 'quiz' | 'wrapup' | 'vocab' | 'grammar' | 'exercise' | 'pronunciation';

export type HelpItemKey = 'play' | 'speak' | 'save' | 'move' | 'translate' | 'contents' | 'speed' | 'answer';

export type LessonHelpItem = { key: HelpItemKey; de: string; text: L; shortcut?: string[] };
export type LessonHelp = { title: L; items: LessonHelpItem[] };

const ITEM: Record<HelpItemKey, LessonHelpItem> = {
  play: { key: 'play', de: 'Hören', text: { en: 'Plays the word. Speed lives in the 1× button.', fr: 'Joue le mot. La vitesse se règle avec le bouton 1×.' } },
  speak: { key: 'speak', de: 'Sprich', text: { en: 'Say it aloud and get a score.', fr: 'Dis-le à voix haute et reçois une note.' } },
  save: { key: 'save', de: 'Merken', text: { en: 'Adds it to your review queue.', fr: 'L’ajoute à ta file de révision.' } },
  move: {
    key: 'move', de: 'Weiter / Zurück',
    text: { en: 'Move through the lesson.', fr: 'Avance ou recule dans la leçon.' },
    shortcut: ['Space', '←', '→'],
  },
  translate: { key: 'translate', de: 'EN / FR', text: { en: 'Shows or hides the translation.', fr: 'Affiche ou masque la traduction.' } },
  contents: { key: 'contents', de: 'Inhalt', text: { en: 'Opens the list of steps so you can jump around.', fr: 'Ouvre la liste des étapes pour sauter d’une à l’autre.' } },
  speed: { key: 'speed', de: '1×', text: { en: 'Changes how fast the audio plays.', fr: 'Change la vitesse de lecture de l’audio.' } },
  answer: { key: 'answer', de: 'Antwort', text: { en: 'Choose or type your answer, then check it. A near miss counts as almost right, never as an error.', fr: 'Choisis ou saisis ta réponse, puis vérifie. Un presque-juste compte comme presque bon, jamais comme une erreur.' } },
};

const pick = (...keys: HelpItemKey[]): LessonHelpItem[] => keys.map((k) => ITEM[k]);

const HELP: Record<StepKind, LessonHelp> = {
  intro: { title: { en: 'How the lesson starts', fr: 'Comment la leçon commence' }, items: pick('move', 'translate', 'contents') },
  chapter: { title: { en: 'A new part begins', fr: 'Une nouvelle partie commence' }, items: pick('move', 'contents') },
  quiz: { title: { en: 'Before the quiz', fr: 'Avant le quiz' }, items: pick('move', 'contents') },
  wrapup: { title: { en: 'The end of the lesson', fr: 'La fin de la leçon' }, items: pick('move', 'contents') },
  vocab: { title: { en: 'How the word card works', fr: 'Comment fonctionne la carte de mot' }, items: pick('play', 'speak', 'save', 'move') },
  grammar: { title: { en: 'How the grammar step works', fr: 'Comment fonctionne l’étape de grammaire' }, items: pick('translate', 'move', 'contents') },
  exercise: { title: { en: 'How exercises work', fr: 'Comment fonctionnent les exercices' }, items: pick('answer', 'move') },
  pronunciation: { title: { en: 'How the pronunciation step works', fr: 'Comment fonctionne l’étape de prononciation' }, items: pick('play', 'speak', 'speed', 'move') },
};

export function lessonHelpFor(kind: StepKind): LessonHelp {
  return HELP[kind];
}
