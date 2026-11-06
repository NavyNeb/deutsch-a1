import type { Locale } from './locale-store';
import type { PageGroupId } from './kumpel-pages';

/** A string in both interface languages. */
export type L = { en: string; fr: string };

export type GuideStep = {
  /** The step's name. German where the page itself uses a German label, otherwise a short gloss in each language. */
  title: L;
  text: L;
  /** `data-kumpel` value of the element to spotlight. Without one (or when it is not on screen) the step is a centred card. */
  target?: string;
  /** A label that must still exist in the page's source: a guard against the guide drifting from the UI. */
  find?: string;
};

export type PageGuide = {
  /** The page's German name, as shown in the navigation. */
  de: string;
  purpose: L;
  /** The help panel lists these and the page tour walks them, so the two never disagree. */
  steps: GuideStep[];
  /** Curated questions; `q` doubles as the chip label (28 characters at most). */
  questions: { q: L; a: L }[];
};

export const pickL = (l: L, locale: Locale): string => (locale === 'fr' ? l.fr : l.en);

const l = (en: string, fr: string): L => ({ en, fr });
const same = (s: string): L => ({ en: s, fr: s });

const XP: { q: L; a: L } = {
  q: l('What is XP?', 'Qu’est-ce que l’XP ?'),
  a: l('XP are points you earn by finishing exercises. They fill your daily goal ring on Heute.', 'L’XP, ce sont les points gagnés en terminant des exercices. Ils remplissent ton anneau d’objectif sur Heute.'),
};
const SEARCH: { q: L; a: L } = {
  q: l('Search anything', 'Tout rechercher'),
  a: l('Press ⌘K or the / key, or use the search bar on the left, to find words, lessons and pages.', 'Appuie sur ⌘K ou sur la touche /, ou utilise la barre de recherche à gauche, pour trouver mots, leçons et pages.'),
};

export const PAGE_HELP: Record<PageGroupId, PageGuide> = {
  // ───────────────────────── Heute, Weg, Üben ─────────────────────────
  today: {
    de: 'Heute',
    purpose: l('Your daily starting point. One card shows what to do next; everything else is optional.', 'Ton point de départ chaque jour. Une carte montre quoi faire ensuite ; le reste est facultatif.'),
    steps: [
      { title: same('Weiter'), text: l('Continues your lesson where you stopped.', 'Reprend ta leçon là où tu en étais.'), target: 'continue', find: 'Weiter' },
      { title: l('Daily goal', 'Objectif du jour'), text: l('The ring fills as you earn XP. Fill it and you have met today’s goal.', 'L’anneau se remplit quand tu gagnes de l’XP. Remplis-le et ton objectif du jour est atteint.'), target: 'goal' },
      { title: same('Wiederholen'), text: l('Saved and missed words come back here for review.', 'Les mots enregistrés ou ratés reviennent ici pour être révisés.'), target: 'due', find: 'Wiederholen' },
      { title: same('Wort des Tages'), text: l('One new word each day, with its article.', 'Un nouveau mot par jour, avec son article.'), target: 'wotd', find: 'Wort des Tages' },
    ],
    questions: [
      XP,
      { q: l('What is a streak?', 'Qu’est-ce qu’une série ?'), a: l('The number of days in a row you earned some XP. Miss a day and it starts again.', 'Le nombre de jours d’affilée où tu as gagné de l’XP. Si tu rates un jour, elle repart de zéro.') },
      { q: l('Change my daily goal', 'Changer mon objectif'), a: l('Open Du, then Einstellungen, and pick 20, 30, 50 or 100 XP a day.', 'Ouvre Du, puis Einstellungen, et choisis 20, 30, 50 ou 100 XP par jour.') },
      { q: l('Save a word', 'Enregistrer un mot'), a: l('On a word card in a lesson, tap Merken. The word joins your review queue.', 'Sur une carte de mot dans une leçon, touche Merken. Le mot rejoint ta file de révision.') },
      SEARCH,
    ],
  },

  path: {
    de: 'Weg',
    purpose: l('The whole route from A1 to B2, level by level. Pick a lesson to see what is inside.', 'Tout le parcours de A1 à B2, niveau par niveau. Choisis une leçon pour voir son contenu.'),
    steps: [
      { title: same('Weg'), text: l('Choose a level at the top; its chapters and lessons are listed below.', 'Choisis un niveau en haut ; ses chapitres et leçons sont listés dessous.'), target: 'path-levels', find: 'Weg' },
      { title: l('Chapters', 'Chapitres'), text: l('Lessons are grouped into chapters. Tap one to see what is inside; every lesson is open.', 'Les leçons sont regroupées en chapitres. Touche-en une pour voir son contenu ; toutes les leçons sont ouvertes.'), target: 'path-chapters' },
      { title: l('Lesson details', 'Détails de la leçon'), text: l('The panel shows the new words and the grammar point of the selected lesson. On a phone, tap the start button below.', 'Le panneau montre les mots nouveaux et le point de grammaire de la leçon choisie. Sur téléphone, touche le bouton de départ en bas.'), target: 'path-detail', find: 'Neue Wörter' },
    ],
    questions: [
      { q: l('Do I have to go in order?', 'Faut-il suivre l’ordre ?'), a: l('No. Every lesson is open. The path only points the way, so jump to what you need.', 'Non. Toutes les leçons sont ouvertes. Le parcours montre juste le chemin, saute à ce dont tu as besoin.') },
      { q: l('What do the levels mean?', 'Les niveaux, c’est quoi ?'), a: l('A1 is the first level of the European framework for languages. A2, B1 and B2 follow it.', 'A1 est le premier niveau du cadre européen pour les langues. A2, B1 et B2 viennent ensuite.') },
      { q: l('How do I start a lesson?', 'Comment lancer une leçon ?'), a: l('Tap a lesson, then the start button. On a phone the button sits just above the tab bar.', 'Touche une leçon, puis le bouton de départ. Sur téléphone, il se trouve juste au-dessus de la barre d’onglets.') },
      XP,
    ],
  },

  practice: {
    de: 'Üben',
    purpose: l('Short games and drills to keep what you learned fresh. Pick one and go.', 'Des jeux et exercices courts pour garder tes acquis frais. Choisis et lance-toi.'),
    steps: [
      { title: l('Your drills', 'Tes exercices'), text: l('Each card is a different way to practise: games, the review queue, speaking, writing and specials.', 'Chaque carte est une façon de s’exercer : jeux, file de révision, oral, écrit et spéciaux.'), target: 'practice-grid', find: 'Üben' },
      { title: l('Review queue', 'File de révision'), text: l('Words that are due today come back here. The number shows how many are waiting.', 'Les mots à revoir aujourd’hui reviennent ici. Le nombre indique combien attendent.'), target: 'practice-review' },
      { title: same('Specials'), text: l('Short courses on one grammar topic, each with its own quiz.', 'Des mini-cours sur un point de grammaire, chacun avec son quiz.'), target: 'practice-specials', find: 'Specials' },
    ],
    questions: [
      { q: l('What is the review queue?', 'La file de révision ?'), a: l('Words that are due today, spaced so you remember them for good. The number on its card is how many are waiting.', 'Les mots à revoir aujourd’hui, espacés pour que tu les retiennes pour de bon. Le nombre sur sa carte indique combien attendent.') },
      { q: l('Which one should I pick?', 'Lequel choisir ?'), a: l('Start with the review queue when it has words. Otherwise Sprint is the quickest warm-up.', 'Commence par la file de révision quand elle contient des mots. Sinon, Sprint est l’échauffement le plus rapide.') },
      { q: l('Can I speak to the app?', 'Puis-je parler à l’appli ?'), a: l('Yes. The speaking card lets you say a sentence out loud and shows feedback word by word.', 'Oui. La carte d’oral te laisse dire une phrase à voix haute et montre un retour mot par mot.') },
      XP,
    ],
  },

  games: {
    de: 'Spiel',
    purpose: l('A timed round of words. Beat your best score and earn XP.', 'Une série de mots chronométrée. Bats ton meilleur score et gagne de l’XP.'),
    steps: [
      { title: l('Start a round', 'Lancer une série'), text: l('Press the start button, then answer as many words as you can before the clock runs out.', 'Appuie sur le bouton de départ, puis réponds à un maximum de mots avant la fin du chrono.'), target: 'game' },
      { title: l('Your score', 'Ton score'), text: l('At the end you see your score and the XP you earned, and you can practise the words you missed.', 'À la fin, tu vois ton score et l’XP gagnée, et tu peux t’entraîner sur les mots ratés.') },
    ],
    questions: [
      { q: l('Do games give XP?', 'Les jeux donnent de l’XP ?'), a: l('Yes. The end screen shows the XP you earned.', 'Oui. L’écran de fin montre l’XP gagnée.') },
      { q: l('What if I miss a word?', 'Et si je rate un mot ?'), a: l('You can practise the words you missed in a practice round at the end.', 'Tu peux t’entraîner sur les mots ratés dans une série d’entraînement à la fin.') },
      { q: l('Where is my best score?', 'Où est mon meilleur score ?'), a: l('On the start screen, next to the start button.', 'Sur l’écran de départ, près du bouton de départ.') },
    ],
  },

  review: {
    de: 'Wiederholen',
    purpose: l('The words that are due today, spaced so you remember them for good.', 'Les mots à revoir aujourd’hui, espacés pour que tu les retiennes pour de bon.'),
    steps: [
      { title: l('Words due', 'Mots à revoir'), text: l('Each card asks what a word means. How you do decides when the word comes back.', 'Chaque carte demande le sens d’un mot. Ta réponse décide du moment où il reviendra.'), target: 'review' },
      { title: l('When it is empty', 'Quand c’est vide'), text: l('Nothing due? Come back later, or tap Merken on word cards in lessons to fill the queue.', 'Rien à revoir ? Reviens plus tard, ou touche Merken sur les cartes de mots dans les leçons pour remplir la file.') },
    ],
    questions: [
      { q: l('Why do words come back?', 'Pourquoi ils reviennent ?'), a: l('Spaced repetition shows a word just before you would forget it.', 'La répétition espacée te montre un mot juste avant que tu l’oublies.') },
      { q: l('How do I add words?', 'Comment ajouter des mots ?'), a: l('Tap Merken on a word card in a lesson, or the star on a dictionary result.', 'Touche Merken sur une carte de mot dans une leçon, ou l’étoile sur un résultat du dictionnaire.') },
      XP,
    ],
  },

  speak: {
    de: 'Sprechen',
    purpose: l('Listen, repeat and get word-by-word feedback on your pronunciation.', 'Écoute, répète et obtiens un retour mot par mot sur ta prononciation.'),
    steps: [
      { title: l('Pick a mode', 'Choisis un mode'), text: l('Listen and repeat after the model, or read the sentence aloud yourself.', 'Écoute et répète après le modèle, ou lis la phrase à voix haute.'), target: 'speak-modes' },
      { title: l('Say it', 'Dis-le'), text: l('Tap the microphone and speak. You see what was heard, word by word.', 'Touche le micro et parle. Tu vois ce qui a été entendu, mot par mot.') },
      { title: l('Read the result', 'Lis le résultat'), text: l('Each word is marked clear, close or missed. Try again to make a close word clear.', 'Chaque mot est marqué clair, proche ou manqué. Réessaie pour rendre clair un mot proche.') },
    ],
    questions: [
      { q: l('Does it need a microphone?', 'Faut-il un micro ?'), a: l('Yes. If your browser cannot record speech you can still listen and repeat out loud.', 'Oui. Si ton navigateur ne peut pas enregistrer la voix, tu peux quand même écouter et répéter à voix haute.') },
      { q: l('What does close mean?', 'Que veut dire proche ?'), a: l('The word was nearly right. Try again to make it clear.', 'Le mot était presque juste. Réessaie pour qu’il soit clair.') },
      { q: l('Does speaking give XP?', 'L’oral donne-t-il de l’XP ?'), a: l('A finished set shows the XP you earned.', 'Une série terminée montre l’XP gagnée.') },
    ],
  },

  write: {
    de: 'Schreiben',
    purpose: l('Write in German and get live grammar and spelling feedback.', 'Écris en allemand et reçois des corrections de grammaire et d’orthographe en direct.'),
    steps: [
      { title: l('Choose a task', 'Choisis un exercice'), text: l('Pick a short task for your level, or the free task to write about anything.', 'Choisis un court exercice pour ton niveau, ou l’exercice libre pour écrire sur ce que tu veux.'), target: 'write-tasks' },
      { title: l('Your text', 'Ton texte'), text: l('Write in the editor. The counter shows how close you are to the word goal.', 'Écris dans l’éditeur. Le compteur montre où tu en es de l’objectif de mots.'), target: 'write-editor' },
      { title: l('Suggestions', 'Suggestions'), text: l('Corrections appear as you type, each with a suggestion.', 'Les corrections apparaissent pendant que tu écris, chacune avec une suggestion.'), target: 'write-suggestions' },
    ],
    questions: [
      { q: l('Is there a free mode?', 'Y a-t-il un mode libre ?'), a: l('Yes. Pick the free task to write about anything.', 'Oui. Choisis l’exercice libre pour écrire sur n’importe quoi.') },
      { q: l('What are useful phrases?', 'Les phrases utiles ?'), a: l('Each task lists phrases you can reuse in your text.', 'Chaque exercice liste des phrases que tu peux réutiliser dans ton texte.') },
      { q: l('What does Finish do?', 'Que fait Terminer ?'), a: l('Finish ends the task and shows the XP you earned.', 'Terminer clôt l’exercice et montre l’XP gagnée.') },
    ],
  },

  // ───────────────────────── Specials ─────────────────────────
  specials: {
    de: 'Specials',
    purpose: l('Short, focused courses on one topic, organised by level, each with its own final quiz.', 'Des cours courts sur un seul sujet, classés par niveau, chacun avec son quiz final.'),
    steps: [
      { title: l('Pick a level', 'Choisis un niveau'), text: l('Filter the courses by level to see what suits you.', 'Filtre les cours par niveau pour voir ce qui te convient.'), target: 'specials-filter' },
      { title: l('Courses', 'Cours'), text: l('Each card is a course. Open one to see its chapters, words and quiz.', 'Chaque carte est un cours. Ouvre-en un pour voir ses chapitres, ses mots et son quiz.'), target: 'specials-list' },
    ],
    questions: [
      { q: l('What is a special course?', 'Un cours spécial ?'), a: l('A short course on one topic, with chapters, exercises and a final quiz.', 'Un cours court sur un sujet, avec des chapitres, des exercices et un quiz final.') },
      { q: l('Which lessons help first?', 'Quelles leçons d’abord ?'), a: l('Each course lists the lessons it builds on, so you can see what helps.', 'Chaque cours liste les leçons sur lesquelles il s’appuie, pour voir ce qui aide.') },
      { q: l('Is there a quiz?', 'Y a-t-il un quiz ?'), a: l('Yes. Every course ends with its own final quiz.', 'Oui. Chaque cours se termine par son quiz final.') },
    ],
  },

  special: {
    de: 'Kurs',
    purpose: l('One special course: its chapters, words, exercises and a final quiz.', 'Un cours spécial : ses chapitres, ses mots, ses exercices et un quiz final.'),
    steps: [
      { title: l('The course', 'Le cours'), text: l('Start the course, or review its content first. Next time the button says Continue.', 'Commence le cours, ou relis d’abord son contenu. La prochaine fois, le bouton dira Continuer.'), target: 'special-header' },
      { title: l('What is inside', 'Au programme'), text: l('Chapters, words, exercises and the final quiz, with a count for each.', 'Chapitres, mots, exercices et quiz final, avec un compte pour chacun.'), target: 'special-inside' },
      { title: l('Builds on lessons', 'S’appuie sur'), text: l('Lessons that prepare you for this course. Open one if a topic is new.', 'Des leçons qui te préparent à ce cours. Ouvre-en une si un sujet est nouveau.'), target: 'special-builds' },
    ],
    questions: [
      { q: l('What does Review do?', 'À quoi sert Relire ?'), a: l('Review the content shows the course as a reading page, without exercises.', 'Relire le contenu montre le cours comme une page de lecture, sans exercices.') },
      { q: l('Where do I start?', 'Par où commencer ?'), a: l('Press Start course. Come back later and it says Continue.', 'Appuie sur Commencer le cours. Plus tard, il dit Continuer.') },
      { q: l('Is there a quiz?', 'Y a-t-il un quiz ?'), a: l('Yes, a final quiz. Pass it to complete the course.', 'Oui, un quiz final. Réussis-le pour terminer le cours.') },
    ],
  },

  // ───────────────────────── Bibliothek ─────────────────────────
  library: {
    de: 'Bibliothek',
    purpose: l('Everything you look things up in: the dictionary, the textbook and the exam practice.', 'Tout ce que tu consultes : le dictionnaire, le manuel et l’entraînement aux examens.'),
    steps: [
      { title: same('Wörterbuch'), text: l('Search any German word for its meaning, article and forms.', 'Cherche un mot allemand pour son sens, son article et ses formes.'), target: 'library-dict', find: 'Wörterbuch' },
      { title: same('Lehrbuch'), text: l('The textbook, to read next to your lessons.', 'Le manuel, à lire à côté de tes leçons.'), target: 'library-textbook', find: 'Lehrbuch' },
      { title: same('Prüfungen'), text: l('Practice sets for the official exams, part by part.', 'Des séries d’entraînement aux examens officiels, partie par partie.'), target: 'library-exams', find: 'Prüfungen' },
    ],
    questions: [
      { q: l('How do I search?', 'Comment chercher ?'), a: l('Press ⌘K or the / key, or tap the search bar. Recent searches show up when it is empty.', 'Appuie sur ⌘K ou sur la touche /, ou touche la barre de recherche. Les recherches récentes s’affichent quand elle est vide.') },
      { q: l('What do the colours mean?', 'Que signifient les formes ?'), a: l('Colour is grammar. A square is der, a circle is die and a triangle is das.', 'La couleur, c’est la grammaire. Un carré est der, un cercle est die et un triangle est das.') },
      { q: l('Which exam is mine?', 'Quel examen me convient ?'), a: l('Pick the board you plan to sit, then your level. Each set trains one part at a time.', 'Choisis l’organisme que tu prévois de passer, puis ton niveau. Chaque série travaille une partie à la fois.') },
      { q: l('Where is the textbook?', 'Où est le manuel ?'), a: l('Open Lehrbuch below. It is a preview reader only, so it cannot be printed or downloaded.', 'Ouvre Lehrbuch plus bas. C’est un lecteur d’aperçu : impossible de l’imprimer ou de le télécharger.') },
    ],
  },

  dictionary: {
    de: 'Wörterbuch',
    purpose: l('Look up any German word, or search in English. Genders, plurals, verb forms and examples included.', 'Cherche n’importe quel mot allemand, ou cherche en anglais. Genres, pluriels, formes verbales et exemples inclus.'),
    steps: [
      { title: l('Search', 'Recherche'), text: l('Type a word and results appear as you type. Press / or ⌘K anywhere to search.', 'Tape un mot et les résultats s’affichent en même temps. Appuie sur / ou ⌘K n’importe où pour chercher.'), target: 'dict-search' },
      { title: l('Recent searches', 'Recherches récentes'), text: l('Your latest lookups wait here while the box is empty.', 'Tes dernières recherches t’attendent ici tant que la case est vide.'), target: 'dict-recent' },
      { title: l('Results', 'Résultats'), text: l('Open a result for genders, plurals, verb forms and examples. The star saves a word for review.', 'Ouvre un résultat pour les genres, pluriels, formes verbales et exemples. L’étoile enregistre un mot pour la révision.') },
    ],
    questions: [
      { q: l('Can I search in English?', 'Chercher en anglais ?'), a: l('Yes. Matches that come from the English side are marked.', 'Oui. Les résultats venant du côté anglais sont signalés.') },
      { q: l('What is the star?', 'Que fait l’étoile ?'), a: l('It saves the word to your review queue.', 'Elle enregistre le mot dans ta file de révision.') },
      { q: l('How many letters to type?', 'Combien de lettres ?'), a: l('Type at least two letters to see results.', 'Tape au moins deux lettres pour voir des résultats.') },
    ],
  },

  word: {
    de: 'Wort',
    purpose: l('Everything about one word: its article, meanings, forms and examples.', 'Tout sur un mot : son article, ses sens, ses formes et des exemples.'),
    steps: [
      { title: l('The word', 'Le mot'), text: l('The shape shows the gender: square der, circle die, triangle das. Tap the speaker to listen.', 'La forme montre le genre : carré der, cercle die, triangle das. Touche le haut-parleur pour écouter.'), target: 'word-header' },
      { title: l('Meanings', 'Sens'), text: l('English and French meanings, with an example sentence.', 'Les sens en anglais et en français, avec une phrase d’exemple.'), target: 'word-meanings' },
      { title: l('In your lessons', 'Dans tes leçons'), text: l('Where this word appears in your lessons, one tap away.', 'Où ce mot apparaît dans tes leçons, à un geste.'), target: 'word-lessons' },
    ],
    questions: [
      { q: l('What are the forms?', 'Quelles formes ?'), a: l('Nouns show their plural and genitive; verbs show their tenses in the tabs.', 'Les noms montrent leur pluriel et leur génitif ; les verbes, leurs temps dans les onglets.') },
      { q: l('How do I listen?', 'Comment écouter ?'), a: l('Tap the speaker next to the word.', 'Touche le haut-parleur près du mot.') },
      { q: l('How do I go back?', 'Comment revenir ?'), a: l('Use the back link at the top of the page.', 'Utilise le lien de retour en haut de la page.') },
    ],
  },

  textbook: {
    de: 'Lehrbuch',
    purpose: l('Your books, the textbook word lists by level, and the words you saved.', 'Tes livres, les listes de mots du manuel par niveau, et les mots que tu as enregistrés.'),
    steps: [
      { title: l('Three tabs', 'Trois onglets'), text: l('Switch between the coursebook library, the word lists by level and the words you saved.', 'Passe de la bibliothèque de manuels aux listes de mots par niveau, puis à tes mots enregistrés.'), target: 'textbook-tabs' },
      { title: l('Pick a level', 'Choisis un niveau'), text: l('In the textbook tab, pick a level to browse its words page by page.', 'Dans l’onglet manuel, choisis un niveau pour parcourir ses mots page par page.') },
    ],
    questions: [
      { q: l('Where are my saved words?', 'Où sont mes mots ?'), a: l('In the My words tab.', 'Dans l’onglet Mes mots.') },
      { q: l('Can I print the books?', 'Puis-je imprimer ?'), a: l('No. Books are preview-only and open inside the app.', 'Non. Les livres sont en aperçu seul et s’ouvrent dans l’appli.') },
      { q: l('How do I save a word?', 'Comment enregistrer un mot ?'), a: l('Tap Merken on a word card in a lesson, or the star in the dictionary.', 'Touche Merken sur une carte de mot dans une leçon, ou l’étoile dans le dictionnaire.') },
    ],
  },

  // ───────────────────────── Prüfungen ─────────────────────────
  exams: {
    de: 'Prüfungen',
    purpose: l('Practice sets in the format of the official Goethe and telc exams.', 'Des séries d’entraînement au format des examens officiels Goethe et telc.'),
    steps: [
      { title: l('Choose your exam', 'Choisis ton examen'), text: l('Pick a board, Goethe or telc, then your level.', 'Choisis un organisme, Goethe ou telc, puis ton niveau.'), target: 'exams-boards' },
      { title: l('Three skills', 'Trois compétences'), text: l('Each level trains reading, writing and speaking.', 'Chaque niveau entraîne la lecture, l’écriture et l’oral.') },
    ],
    questions: [
      { q: l('Which exam is mine?', 'Quel examen me convient ?'), a: l('Pick the board you plan to sit, then your level. Each set trains one part at a time.', 'Choisis l’organisme que tu prévois de passer, puis ton niveau. Chaque série travaille une partie à la fois.') },
      { q: l('Are these the real exams?', 'Ce sont les vrais examens ?'), a: l('No. They follow the official format, for practice.', 'Non. Ils suivent le format officiel, pour s’entraîner.') },
      { q: l('Why a light page?', 'Pourquoi une page claire ?'), a: l('The exam area uses the paper-style light look, like a printed exam.', 'La zone d’examen utilise l’aspect clair façon papier, comme un examen imprimé.') },
    ],
  },

  examLevel: {
    de: 'Prüfung',
    purpose: l('One exam level: its format, practice by part, and full practice sets.', 'Un niveau d’examen : son format, l’entraînement par partie et les séries complètes.'),
    steps: [
      { title: l('Exam format', 'Format de l’examen'), text: l('What each part of the exam asks for, and the pass mark.', 'Ce que demande chaque partie de l’examen, et le seuil de réussite.'), target: 'exam-format' },
      { title: l('Practise by part', 'Par partie'), text: l('Drill one part at a time before you try a full set.', 'Travaille une partie à la fois avant d’essayer une série complète.'), target: 'exam-drill' },
      { title: l('Full practice sets', 'Séries complètes'), text: l('Complete sets in the real format. Your best result is saved next to each set.', 'Des séries complètes au format réel. Ton meilleur résultat est noté près de chaque série.'), target: 'exam-sets' },
    ],
    questions: [
      { q: l('What is the pass mark?', 'Quel est le seuil ?'), a: l('It is shown in the format box for each exam.', 'Il est indiqué dans l’encadré du format de chaque examen.') },
      { q: l('Must I do a full set?', 'Une série complète ?'), a: l('No. Practise by part first if you prefer.', 'Non. Entraîne-toi d’abord par partie si tu préfères.') },
      { q: l('Where is my best result?', 'Où est mon meilleur score ?'), a: l('Next to each set, once you have tried it.', 'Près de chaque série, une fois essayée.') },
    ],
  },

  examTask: {
    de: 'Aufgabe',
    purpose: l('A practice task in the exam format. Work through it at your own pace.', 'Un exercice au format de l’examen. Avance à ton rythme.'),
    steps: [
      { title: l('The task', 'L’exercice'), text: l('Read or listen, then answer as in the real exam. Translations stay off unless you turn them on in Einstellungen.', 'Lis ou écoute, puis réponds comme à l’examen. Les traductions restent masquées sauf si tu les actives dans Einstellungen.') },
      { title: l('When you are done', 'Quand tu as fini'), text: l('Mark the part as practised so it shows on your exam page.', 'Marque la partie comme travaillée pour qu’elle apparaisse sur ta page d’examen.') },
    ],
    questions: [
      { q: l('Can I see translations?', 'Voir les traductions ?'), a: l('Turn them on in Einstellungen, under exam translations.', 'Active-les dans Einstellungen, sous traductions d’examen.') },
      { q: l('How do I mark it practised?', 'Marquer comme travaillé ?'), a: l('Use Mark part as practised at the end of the task.', 'Utilise Marquer la partie comme travaillée à la fin de l’exercice.') },
      { q: l('Is speaking scored?', 'L’oral est-il noté ?'), a: l('Speaking is judged by people in the real exam. Here the recording is a rough check; compare with the sample.', 'À l’examen, l’oral est évalué par des personnes. Ici, l’enregistrement est un repère ; compare avec l’exemple.') },
    ],
  },

  // ───────────────────────── Du ─────────────────────────
  me: {
    de: 'Du',
    purpose: l('Your numbers and your settings. Nothing to do here unless you want to change something.', 'Tes chiffres et tes réglages. Rien à faire ici, sauf si tu veux changer quelque chose.'),
    steps: [
      { title: l('Your numbers', 'Tes chiffres'), text: l('Your streak, total XP and level at a glance.', 'Ta série, ton XP total et ton niveau d’un coup d’œil.'), target: 'me-stats' },
      { title: same('Statistik'), text: l('Open your statistics, your account or your settings from these cards.', 'Ouvre tes statistiques, ton compte ou tes réglages depuis ces cartes.'), target: 'me-links', find: 'Statistik' },
    ],
    questions: [
      { q: l('Change the language', 'Changer la langue'), a: l('Open Einstellungen and switch between English and French. German stays German.', 'Ouvre Einstellungen et passe de l’anglais au français. L’allemand reste en allemand.') },
      { q: l('Switch to light mode', 'Passer en mode clair'), a: l('Open Einstellungen and pick Light. Dark is the default.', 'Ouvre Einstellungen et choisis Clair. Le sombre est le thème par défaut.') },
      { q: l('Keep my progress safe', 'Garder ma progression'), a: l('Sign in under Konto. Your progress then syncs across your devices.', 'Connecte-toi dans Konto. Ta progression se synchronise alors sur tes appareils.') },
      { q: l('Hide or move Kumpel', 'Masquer ou déplacer Kumpel'), a: l('Open Einstellungen and find the Kumpel card. You can hide me, move me or restart the tour.', 'Ouvre Einstellungen et trouve la carte Kumpel. Tu peux me masquer, me déplacer ou relancer la visite.') },
    ],
  },

  statistics: {
    de: 'Statistik',
    purpose: l('How you are doing: level, streak, XP, activity and progress by level.', 'Où tu en es : niveau, série, XP, activité et progression par niveau.'),
    steps: [
      { title: l('Overview', 'Vue d’ensemble'), text: l('Level, streak, XP, finished lessons, saved words and accuracy.', 'Niveau, série, XP, leçons terminées, mots enregistrés et précision.'), target: 'stats-cards' },
      { title: l('Activity', 'Activité'), text: l('How much you studied on each day.', 'Combien tu as étudié chaque jour.'), target: 'stats-activity' },
      { title: l('Progress by level', 'Progression par niveau'), text: l('How far you are through each level.', 'Où tu en es dans chaque niveau.'), target: 'stats-levels' },
    ],
    questions: [
      { q: l('What is accuracy?', 'Qu’est-ce que la précision ?'), a: l('The share of exercise answers you got right.', 'La part de réponses justes aux exercices.') },
      { q: l('What counts as a streak?', 'Qu’est-ce qui compte ?'), a: l('Any day on which you earn some XP.', 'Tout jour où tu gagnes un peu d’XP.') },
      { q: l('How is my level set?', 'Mon niveau, comment ?'), a: l('From your total XP. A bar shows the XP left to the next level.', 'À partir de ton XP total. Une barre montre l’XP restante jusqu’au niveau suivant.') },
    ],
  },

  account: {
    de: 'Konto',
    purpose: l('Sign in to keep your progress on every device.', 'Connecte-toi pour garder ta progression sur tous tes appareils.'),
    steps: [
      { title: l('Sign in', 'Se connecter'), text: l('Use your email to sign in or create an account. Your progress then syncs.', 'Utilise ton e-mail pour te connecter ou créer un compte. Ta progression se synchronise ensuite.'), target: 'account-form' },
      { title: l('Your data', 'Tes données'), text: l('Sign out any time, or delete the data we keep for you.', 'Déconnecte-toi quand tu veux, ou supprime les données que nous gardons pour toi.') },
    ],
    questions: [
      { q: l('Do I need an account?', 'Faut-il un compte ?'), a: l('No. Everything works without one, on this device.', 'Non. Tout fonctionne sans, sur cet appareil.') },
      { q: l('What syncs?', 'Que se synchronise-t-il ?'), a: l('Your progress and your settings, including Kumpel.', 'Ta progression et tes réglages, Kumpel compris.') },
      { q: l('Can I delete my data?', 'Supprimer mes données ?'), a: l('Yes. Use Delete my synced data once you are signed in.', 'Oui. Utilise Supprimer mes données synchronisées une fois connecté.') },
    ],
  },

  settings: {
    de: 'Einstellungen',
    purpose: l('Theme, language, daily goal and Kumpel. Changes apply at once.', 'Thème, langue, objectif du jour et Kumpel. Les changements s’appliquent tout de suite.'),
    steps: [
      { title: l('Look and language', 'Aspect et langue'), text: l('Theme, language and audio speed.', 'Thème, langue et vitesse de l’audio.'), target: 'settings-basics' },
      { title: same('Kumpel'), text: l('Show or hide me, move me, switch the page tours off, or restart the tour.', 'Affiche-moi ou masque-moi, déplace-moi, désactive les visites de page, ou relance la visite.'), target: 'settings-kumpel', find: 'Kumpel' },
      { title: l('Daily goal', 'Objectif du jour'), text: l('Pick how much XP you aim for each day.', 'Choisis combien d’XP tu vises chaque jour.'), target: 'settings-goal' },
    ],
    questions: [
      { q: l('Change the language', 'Changer la langue'), a: l('Switch between English and French here. German stays German.', 'Passe de l’anglais au français ici. L’allemand reste en allemand.') },
      { q: l('Switch to light mode', 'Passer en mode clair'), a: l('Pick Light under the theme. Dark is the default.', 'Choisis Clair dans le thème. Le sombre est le thème par défaut.') },
      { q: l('Change my daily goal', 'Changer mon objectif'), a: l('Pick 20, 30, 50 or 100 XP a day.', 'Choisis 20, 30, 50 ou 100 XP par jour.') },
      { q: l('Hide or move Kumpel', 'Masquer ou déplacer Kumpel'), a: l('Use the Kumpel card: hide me, move me left or right, or restart the tour.', 'Utilise la carte Kumpel : masque-moi, place-moi à gauche ou à droite, ou relance la visite.') },
    ],
  },

  chapter: {
    de: 'Kapitel',
    purpose: l('A reading page with the lesson’s words, grammar and example sentences.', 'Une page de lecture avec les mots, la grammaire et les phrases d’exemple de la leçon.'),
    steps: [
      { title: same('Wortschatz'), text: l('The words of the lesson, with their articles.', 'Les mots de la leçon, avec leurs articles.'), target: 'chapter-vocab', find: 'Wortschatz' },
      { title: same('Grammatik'), text: l('The grammar points of the lesson, explained.', 'Les points de grammaire de la leçon, expliqués.'), target: 'chapter-grammar', find: 'Grammatik' },
      { title: same('Beispielsätze'), text: l('Example sentences to read and hear.', 'Des phrases d’exemple à lire et à écouter.'), target: 'chapter-examples', find: 'Beispielsätze' },
    ],
    questions: [
      { q: l('What is this page?', 'Qu’est-ce que cette page ?'), a: l('The lesson’s content as a reading page, without exercises.', 'Le contenu de la leçon en page de lecture, sans exercices.') },
      { q: l('How do I start the lesson?', 'Comment lancer la leçon ?'), a: l('Open the lesson from Weg and press its start button.', 'Ouvre la leçon depuis Weg et appuie sur son bouton de départ.') },
      { q: l('What is Wortschatz?', 'Que veut dire Wortschatz ?'), a: l('Vocabulary: the words you learn in this lesson.', 'Le vocabulaire : les mots que tu apprends dans cette leçon.') },
    ],
  },
};
