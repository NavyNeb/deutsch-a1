import type { Lesson } from '../types';

export const lektion1: Lesson = {
  id: 'l1', number: 1,
  title: { de: 'Hallo! Ich bin Nicole', en: 'Hello! I am Nicole', fr: 'Salut ! Je suis Nicole' },
  theme: 'Greetings & introducing yourself',
  themeFr: 'Salutations et présentations',
  goals: ['Greet and say goodbye', 'Introduce yourself', 'Say where you are from', 'Use the alphabet to spell your name'],
  goalsFr: ['Saluer et dire au revoir', 'Te présenter', "Dire d'où tu viens", "Utiliser l'alphabet pour épeler ton nom"],
  steps: [
    { kind: 'intro', title: 'Willkommen! 👋', titleFr: 'Bienvenue ! 👋',
      scene: 'Two people meeting for the first time.', sceneFr: 'Deux personnes qui se rencontrent pour la première fois.',
      goals: ['Say hello and goodbye', 'Introduce yourself', 'Say where you are from', 'Spell your name using the alphabet'],
      goalsFr: ['Dire bonjour et au revoir', 'Te présenter', "Dire d'où tu viens", "Épeler ton nom en utilisant l'alphabet"] },

    { kind: 'vocab', item: { id: 'l1-hallo', german: 'Hallo', english: 'Hello (informal)', french: 'Salut (informel)', gender: null, syllables: ['ha', 'LO'], pronunciation: 'hah-LOH', example: { de: 'Hallo, ich bin Nicole.', en: 'Hello, I am Nicole.', fr: 'Salut, je suis Nicole.' } } },
    { kind: 'vocab', item: { id: 'l1-gutentag', german: 'Guten Tag', english: 'Hello / Good day (formal)', french: 'Bonjour (formel)', gender: null, syllables: ['GU', 'ten', 'TAG'], pronunciation: 'GOO-ten tahk', example: { de: 'Guten Tag, Frau Meier.', en: 'Good day, Mrs Meier.', fr: 'Bonjour, Madame Meier.' } } },
    { kind: 'vocab', item: { id: 'l1-tschuess', german: 'Tschüss', english: 'Bye (informal)', french: 'Salut / Au revoir (informel)', gender: null, syllables: ['TSCHÜSS'], pronunciation: 'chews', example: { de: 'Tschüss, bis morgen!', en: 'Bye, see you tomorrow!', fr: 'Salut, à demain !' } } },
    { kind: 'vocab', item: { id: 'l1-name', german: 'der Name', english: 'the name', french: 'le nom', gender: 'der', syllables: ['NA', 'me'], pronunciation: 'dair NAH-muh', example: { de: 'Mein Name ist Nicole.', en: 'My name is Nicole.', fr: 'Mon nom est Nicole.' } } },

    { kind: 'vocab', item: { id: 'l1-kommen-aus', german: 'kommen aus', english: 'to come from', french: 'venir de', gender: null, syllables: ['KOM', 'men', 'AUS'], pronunciation: 'KOM-en ows', example: { de: 'Ich komme aus Kamerun.', en: 'I come from Cameroon.', fr: 'Je viens du Cameroun.' } } },
    { kind: 'vocab', item: { id: 'l1-land', german: 'das Land', english: 'the country', french: 'le pays', gender: 'das', syllables: ['LAND'], pronunciation: 'dahs LAHNT', example: { de: 'Deutschland ist ein Land in Europa.', en: 'Germany is a country in Europe.', fr: "L'Allemagne est un pays d'Europe." } } },
    { kind: 'vocab', item: { id: 'l1-kamerun', german: 'Kamerun', english: 'Cameroon', french: 'le Cameroun', gender: null, syllables: ['ka', 'me', 'RUN'], pronunciation: 'KAH-meh-roon', example: { de: 'Kamerun ist mein Land.', en: 'Cameroon is my country.', fr: 'Le Cameroun est mon pays.' } } },
    { kind: 'vocab', item: { id: 'l1-deutschland', german: 'Deutschland', english: 'Germany', french: "l'Allemagne", gender: null, syllables: ['DEUTSCH', 'land'], pronunciation: 'DOYTCH-lahnt', example: { de: 'Er kommt aus Deutschland.', en: 'He comes from Germany.', fr: "Il vient d'Allemagne." } } },

    { kind: 'vocab', item: { id: 'l1-alphabet', german: 'das Alphabet', english: 'the alphabet', french: "l'alphabet", gender: 'das', syllables: ['al', 'pha', 'BET'], pronunciation: 'dahs al-fah-BET', example: { de: 'Das deutsche Alphabet hat 26 Buchstaben.', en: 'The German alphabet has 26 letters.', fr: "L'alphabet allemand a 26 lettres." } } },
    { kind: 'vocab', item: { id: 'l1-buchstabieren', german: 'buchstabieren', english: 'to spell', french: 'épeler', gender: null, syllables: ['buch', 'sta', 'BIE', 'ren'], pronunciation: 'BOOKH-shtah-bee-ren', example: { de: 'Wie buchstabiert man das?', en: 'How do you spell that?', fr: "Comment ça s'épelle ?" } } },

    { kind: 'grammar', note: {
      id: 'l1-sein', title: 'The verb "sein" (to be)', titleFr: 'Le verbe « sein » (être)',
      explanationMd: '**sein** is the most important German verb. In the singular:\n\n- ich **bin** — I am\n- du **bist** — you are (informal)\n- er/sie/es **ist** — he/she/it is',
      explanationMdFr: '**sein** est le verbe allemand le plus important. Au singulier :\n\n- ich **bin** — je suis\n- du **bist** — tu es (informel)\n- er/sie/es **ist** — il/elle/on est',
      examples: [
        { de: 'Ich bin Nicole.', en: 'I am Nicole.', fr: 'Je suis Nicole.' },
        { de: 'Du bist Student.', en: 'You are a student.', fr: 'Tu es étudiant.' },
        { de: 'Sie ist Journalistin.', en: 'She is a journalist.', fr: 'Elle est journaliste.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l1-wfragen', title: 'W-Questions', titleFr: 'Les questions en W',
      explanationMd: 'Question words start with **W** and the verb comes **second**:\n\n- **Wie** heißt du? — What is your name?\n- **Woher** kommst du? — Where are you from?\n- **Wo** wohnst du? — Where do you live?',
      explanationMdFr: "Les mots interrogatifs commencent par **W** et le verbe est en **deuxième** position :\n\n- **Wie** heißt du ? — Comment tu t'appelles ?\n- **Woher** kommst du ? — D'où viens-tu ?\n- **Wo** wohnst du ? — Où habites-tu ?",
      examples: [
        { de: 'Wie heißt du?', en: 'What is your name?', fr: "Comment tu t'appelles ?" },
        { de: 'Woher kommst du?', en: 'Where are you from?', fr: "D'où viens-tu ?" },
      ],
      diagram: 'verb-second' } },

    { kind: 'grammar', note: {
      id: 'l1-kommen', title: 'The verb "kommen" (to come)', titleFr: 'Le verbe « kommen » (venir)',
      explanationMd: '**kommen** is a regular verb. Use **kommen aus** + a country to say where you are from:\n\n- ich **komme** — I come\n- du **kommst** — you come (informal)\n- er/sie/es **kommt** — he/she/it comes',
      explanationMdFr: "**kommen** est un verbe régulier. Utilise **kommen aus** + un pays pour dire d'où tu viens :\n\n- ich **komme** — je viens\n- du **kommst** — tu viens (informel)\n- er/sie/es **kommt** — il/elle/on vient",
      examples: [
        { de: 'Ich komme aus Kamerun.', en: 'I come from Cameroon.', fr: 'Je viens du Cameroun.' },
        { de: 'Woher kommst du?', en: 'Where are you from?', fr: "D'où viens-tu ?" },
        { de: 'Sie kommt aus Deutschland.', en: 'She comes from Germany.', fr: "Elle vient d'Allemagne." },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l1-buchstabieren-note', title: 'Spelling your name', titleFr: 'Épeler ton nom',
      explanationMd: 'To ask someone to spell a word, say **Wie buchstabiert man das?** (How do you spell that?). German uses the same 26-letter **Alphabet**, plus the umlauts ä, ö, ü and the letter ß.\n\nYou can spell your own name letter by letter when asked.',
      explanationMdFr: "Pour demander à quelqu'un d'épeler un mot, dis **Wie buchstabiert man das?** (Comment ça s'épelle ?). L'allemand utilise le même alphabet de 26 lettres, plus les trémas ä, ö, ü et la lettre ß.\n\nTu peux épeler ton propre nom lettre par lettre quand on te le demande.",
      examples: [
        { de: 'Wie buchstabiert man das?', en: 'How do you spell that?', fr: "Comment ça s'épelle ?" },
        { de: 'Mein Name ist Nicole: N-I-C-O-L-E.', en: 'My name is Nicole: N-I-C-O-L-E.', fr: 'Mon nom est Nicole : N-I-C-O-L-E.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e1', prompt: 'Ich ___ Nicole. (sein)', answer: 'bin', hint: 'first person singular of sein', hintFr: 'première personne du singulier de sein' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e2', prompt: 'Which is a formal greeting?', promptFr: 'Laquelle est une salutation formelle ?', options: ['Hallo', 'Guten Tag', 'Tschüss'], answer: 1, explain: '"Guten Tag" is the formal daytime greeting.', explainFr: '« Guten Tag » est la salutation formelle de la journée.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l1-e3', tokens: ['heißt', 'Wie', 'du'], answer: ['Wie', 'heißt', 'du'] } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l1-e4', prompt: 'Listen. Where is Nicole from?', promptFr: "Écoute. D'où vient Nicole ?", audio: { ttsText: 'Hallo! Ich heiße Nicole. Ich komme aus Kamerun.' }, options: ['Cameroon', 'Germany', 'Austria'], optionsFr: ['Cameroun', 'Allemagne', 'Autriche'], answer: 0 } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l1-e5', pairs: [ { de: 'Hallo', en: 'Hello', fr: 'Salut' }, { de: 'Tschüss', en: 'Bye', fr: 'Au revoir' }, { de: 'Name', en: 'Name', fr: 'Nom' } ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e6', prompt: 'Ich ___ aus Kamerun. (kommen)', answer: 'komme', hint: 'first person singular of kommen', hintFr: 'première personne du singulier de kommen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e7', prompt: 'How do you ask someone where they are from?', promptFr: "Comment demande-t-on à quelqu'un d'où il vient ?", options: ['Wie heißt du?', 'Woher kommst du?', 'Wie buchstabiert man das?'], answer: 1, explain: '"Woher kommst du?" means "Where are you from?"', explainFr: "« Woher kommst du ? » signifie « D'où viens-tu ? »" } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l1-e8', tokens: ['aus', 'komme', 'Kamerun', 'Ich'], answer: ['Ich', 'komme', 'aus', 'Kamerun'] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e9', prompt: 'How do you ask someone to spell a word in German?', promptFr: "Comment demande-t-on à quelqu'un d'épeler un mot en allemand ?", options: ['Wie buchstabiert man das?', 'Woher kommst du?', 'Guten Tag!'], answer: 0, explain: '"Wie buchstabiert man das?" asks someone to spell a word letter by letter.', explainFr: "« Wie buchstabiert man das? » demande à quelqu'un d'épeler un mot lettre par lettre." } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e10', prompt: 'Können Sie das bitte ___? (buchstabieren)', answer: 'buchstabieren', hint: 'infinitive: to spell', hintFr: 'infinitif : épeler' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l1-e11', prompt: "Listen. What is the man's name?", promptFr: "Écoute. Quel est le nom de l'homme ?", audio: { ttsText: 'Guten Tag! Ich bin Herr Meier. Ich komme aus Deutschland. Tschüss!' }, options: ['Herr Meier', 'Herr Fischer', 'Frau Meier'], answer: 0 } },

    { kind: 'pronunciation', focus: 'The "ü" sound in Tschüss and the letter ß in heißen', focusFr: 'Le son « ü » dans Tschüss et la lettre ß dans heißen', items: [
      { id: 'l1-tschuess-pron', german: 'Tschüss', english: 'Bye', french: 'Salut', gender: null, syllables: ['TSCHÜSS'], pronunciation: 'chews', example: { de: 'Tschüss!', en: 'Bye!', fr: 'Salut !' } },
      { id: 'l1-heissen-pron', german: 'heißen', english: 'to be called', french: "s'appeler", gender: null, syllables: ['HEI', 'ßen'], pronunciation: 'HIGH-ssen', example: { de: 'Ich heiße Nicole.', en: 'My name is Nicole. (lit. I am called Nicole)', fr: "Je m'appelle Nicole. (litt. je suis appelée Nicole)" } },
    ] },

    { kind: 'wrapup', summary: 'You can now greet people, introduce yourself, say where you are from with **kommen aus**, and spell your name using the German alphabet. 🎉',
      summaryFr: "Tu sais maintenant saluer les gens, te présenter, dire d'où tu viens avec **kommen aus**, et épeler ton nom en utilisant l'alphabet allemand. 🎉" },
  ],
};
