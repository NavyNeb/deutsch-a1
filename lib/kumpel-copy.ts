import type { Locale } from './locale-store';
import type { PageGroupId } from './kumpel-pages';

/** A string in both interface languages. */
export type L = { en: string; fr: string };

export type PageHelp = {
  /** The page's German name, as shown in the navigation. */
  de: string;
  purpose: L;
  /** Up to three real labels on the page. A test checks each one still exists in the page's source. */
  parts: { de: string; text: L }[];
  /** Curated questions; `q` doubles as the chip label (28 characters at most). */
  questions: { q: L; a: L }[];
};

export const pickL = (l: L, locale: Locale): string => (locale === 'fr' ? l.fr : l.en);

export const PAGE_HELP: Record<PageGroupId, PageHelp> = {
  today: {
    de: 'Heute',
    purpose: {
      en: 'Your daily starting point. One card shows what to do next; everything else is optional.',
      fr: 'Ton point de départ chaque jour. Une carte montre quoi faire ensuite ; le reste est facultatif.',
    },
    parts: [
      { de: 'Weiter', text: { en: 'Continues your lesson where you stopped.', fr: 'Reprend ta leçon là où tu en étais.' } },
      { de: 'Wiederholen', text: { en: 'Saved and missed words come back here for review.', fr: 'Les mots enregistrés ou ratés reviennent ici pour être révisés.' } },
      { de: 'Wort des Tages', text: { en: 'One new word each day, with its article.', fr: 'Un nouveau mot par jour, avec son article.' } },
    ],
    questions: [
      {
        q: { en: 'What is XP?', fr: 'Qu’est-ce que l’XP ?' },
        a: { en: 'XP are points you earn by finishing exercises. They fill your daily goal ring.', fr: 'L’XP, ce sont les points gagnés en terminant des exercices. Ils remplissent ton anneau d’objectif.' },
      },
      {
        q: { en: 'What is a streak?', fr: 'Qu’est-ce qu’une série ?' },
        a: { en: 'The number of days in a row you earned some XP. Miss a day and it starts again.', fr: 'Le nombre de jours d’affilée où tu as gagné de l’XP. Si tu rates un jour, elle repart de zéro.' },
      },
      {
        q: { en: 'Change my daily goal', fr: 'Changer mon objectif' },
        a: { en: 'Open Du, then Einstellungen, and pick 20, 30, 50 or 100 XP a day.', fr: 'Ouvre Du, puis Einstellungen, et choisis 20, 30, 50 ou 100 XP par jour.' },
      },
      {
        q: { en: 'Save a word', fr: 'Enregistrer un mot' },
        a: { en: 'On a word card in a lesson, tap Merken. The word joins your review queue.', fr: 'Sur une carte de mot dans une leçon, touche Merken. Le mot rejoint ta file de révision.' },
      },
      {
        q: { en: 'Search anything', fr: 'Tout rechercher' },
        a: { en: 'Press ⌘K or the / key, or use the search bar on the left, to find words, lessons and pages.', fr: 'Appuie sur ⌘K ou sur la touche /, ou utilise la barre de recherche à gauche, pour trouver mots, leçons et pages.' },
      },
    ],
  },

  path: {
    de: 'Weg',
    purpose: {
      en: 'The whole route from A1 to B2, level by level. Pick a lesson to see what is inside.',
      fr: 'Tout le parcours de A1 à B2, niveau par niveau. Choisis une leçon pour voir son contenu.',
    },
    parts: [
      { de: 'Weg', text: { en: 'Choose a level at the top; its chapters and lessons are listed below.', fr: 'Choisis un niveau en haut ; ses chapitres et leçons sont listés dessous.' } },
      { de: 'Neue Wörter', text: { en: 'The words a lesson teaches, shown before you start.', fr: 'Les mots enseignés par la leçon, visibles avant de commencer.' } },
      { de: 'Grammatik', text: { en: 'The grammar point of the lesson, in one line.', fr: 'Le point de grammaire de la leçon, en une ligne.' } },
    ],
    questions: [
      {
        q: { en: 'Do I have to go in order?', fr: 'Faut-il suivre l’ordre ?' },
        a: { en: 'No. Every lesson is open. The path only points the way, so jump to what you need.', fr: 'Non. Toutes les leçons sont ouvertes. Le parcours montre juste le chemin, saute à ce dont tu as besoin.' },
      },
      {
        q: { en: 'What do the levels mean?', fr: 'Les niveaux, c’est quoi ?' },
        a: { en: 'A1 is the first level of the European framework for languages. A2, B1 and B2 follow it.', fr: 'A1 est le premier niveau du cadre européen pour les langues. A2, B1 et B2 viennent ensuite.' },
      },
      {
        q: { en: 'How do I start a lesson?', fr: 'Comment lancer une leçon ?' },
        a: { en: 'Tap a lesson, then the start button. On a phone the button sits just above the tab bar.', fr: 'Touche une leçon, puis le bouton de départ. Sur téléphone, il se trouve juste au-dessus de la barre d’onglets.' },
      },
      {
        q: { en: 'What is XP?', fr: 'Qu’est-ce que l’XP ?' },
        a: { en: 'XP are points you earn by finishing exercises. They fill your daily goal ring on Heute.', fr: 'L’XP, ce sont les points gagnés en terminant des exercices. Ils remplissent ton anneau d’objectif sur Heute.' },
      },
    ],
  },

  practice: {
    de: 'Üben',
    purpose: {
      en: 'Short games and drills to keep what you learned fresh. Pick one and go.',
      fr: 'Des jeux et exercices courts pour garder tes acquis frais. Choisis et lance-toi.',
    },
    parts: [
      { de: 'Sprint', text: { en: 'Match as many words as you can before the clock runs out.', fr: 'Associe un maximum de mots avant la fin du chrono.' } },
      { de: 'Audio-Call', text: { en: 'Listen, then tap the word you hear.', fr: 'Écoute, puis touche le mot entendu.' } },
      { de: 'Specials', text: { en: 'Short deep-dives into tricky grammar topics.', fr: 'Des mini-cours sur les points de grammaire délicats.' } },
    ],
    questions: [
      {
        q: { en: 'What is the review queue?', fr: 'La file de révision ?' },
        a: { en: 'Words that are due today, spaced so you remember them for good. The number on its card is how many are waiting.', fr: 'Les mots à revoir aujourd’hui, espacés pour que tu les retiennes pour de bon. Le nombre sur sa carte indique combien attendent.' },
      },
      {
        q: { en: 'Which one should I pick?', fr: 'Lequel choisir ?' },
        a: { en: 'Start with the review queue when it has words. Otherwise Sprint is the quickest warm-up.', fr: 'Commence par la file de révision quand elle contient des mots. Sinon, Sprint est l’échauffement le plus rapide.' },
      },
      {
        q: { en: 'Can I speak to the app?', fr: 'Puis-je parler à l’appli ?' },
        a: { en: 'Yes. The speaking card lets you say a sentence out loud and shows feedback word by word.', fr: 'Oui. La carte d’oral te laisse dire une phrase à voix haute et montre un retour mot par mot.' },
      },
      {
        q: { en: 'What is XP?', fr: 'Qu’est-ce que l’XP ?' },
        a: { en: 'XP are points you earn by finishing exercises. They fill your daily goal ring on Heute.', fr: 'L’XP, ce sont les points gagnés en terminant des exercices. Ils remplissent ton anneau d’objectif sur Heute.' },
      },
    ],
  },

  library: {
    de: 'Bibliothek',
    purpose: {
      en: 'Everything you look things up in: the dictionary, the textbook and the exam practice.',
      fr: 'Tout ce que tu consultes : le dictionnaire, le manuel et l’entraînement aux examens.',
    },
    parts: [
      { de: 'Wörterbuch', text: { en: 'Search any German word for its meaning, article and forms.', fr: 'Cherche un mot allemand pour son sens, son article et ses formes.' } },
      { de: 'Lehrbuch', text: { en: 'The textbook, to read next to your lessons.', fr: 'Le manuel, à lire à côté de tes leçons.' } },
      { de: 'Prüfungen', text: { en: 'Practice sets for the official exams, part by part.', fr: 'Des séries d’entraînement aux examens officiels, partie par partie.' } },
    ],
    questions: [
      {
        q: { en: 'How do I search?', fr: 'Comment chercher ?' },
        a: { en: 'Press ⌘K or the / key, or tap the search bar. Recent searches show up when it is empty.', fr: 'Appuie sur ⌘K ou sur la touche /, ou touche la barre de recherche. Les recherches récentes s’affichent quand elle est vide.' },
      },
      {
        q: { en: 'What do the colours mean?', fr: 'Que signifient les formes ?' },
        a: { en: 'Colour is grammar. A square is der, a circle is die and a triangle is das.', fr: 'La couleur, c’est la grammaire. Un carré est der, un cercle est die et un triangle est das.' },
      },
      {
        q: { en: 'Which exam is mine?', fr: 'Quel examen me convient ?' },
        a: { en: 'Pick the board you plan to sit, then your level. Each set trains one part at a time.', fr: 'Choisis l’organisme que tu prévois de passer, puis ton niveau. Chaque série travaille une partie à la fois.' },
      },
      {
        q: { en: 'Where is the textbook?', fr: 'Où est le manuel ?' },
        a: { en: 'Open Lehrbuch below. It is a preview reader only, so it cannot be printed or downloaded.', fr: 'Ouvre Lehrbuch plus bas. C’est un lecteur d’aperçu : impossible de l’imprimer ou de le télécharger.' },
      },
    ],
  },

  me: {
    de: 'Du',
    purpose: {
      en: 'Your numbers and your settings. Nothing to do here unless you want to change something.',
      fr: 'Tes chiffres et tes réglages. Rien à faire ici, sauf si tu veux changer quelque chose.',
    },
    parts: [
      { de: 'Statistik', text: { en: 'Your activity, streak and progress over time.', fr: 'Ton activité, ta série et ta progression dans le temps.' } },
      { de: 'Konto', text: { en: 'Sign in to keep your progress on every device.', fr: 'Connecte-toi pour garder ta progression sur tous tes appareils.' } },
      { de: 'Einstellungen', text: { en: 'Theme, language, daily goal and Kumpel.', fr: 'Thème, langue, objectif du jour et Kumpel.' } },
    ],
    questions: [
      {
        q: { en: 'Change the language', fr: 'Changer la langue' },
        a: { en: 'Open Einstellungen and switch between English and French. German stays German.', fr: 'Ouvre Einstellungen et passe de l’anglais au français. L’allemand reste en allemand.' },
      },
      {
        q: { en: 'Switch to light mode', fr: 'Passer en mode clair' },
        a: { en: 'Open Einstellungen and pick Light. Dark is the default.', fr: 'Ouvre Einstellungen et choisis Clair. Le sombre est le thème par défaut.' },
      },
      {
        q: { en: 'Keep my progress safe', fr: 'Garder ma progression' },
        a: { en: 'Sign in under Konto. Your progress then syncs across your devices.', fr: 'Connecte-toi dans Konto. Ta progression se synchronise alors sur tes appareils.' },
      },
      {
        q: { en: 'Hide or move Kumpel', fr: 'Masquer ou déplacer Kumpel' },
        a: { en: 'Open Einstellungen and find the Kumpel card. You can hide me, move me or restart the tour.', fr: 'Ouvre Einstellungen et trouve la carte Kumpel. Tu peux me masquer, me déplacer ou relancer la visite.' },
      },
    ],
  },
};
