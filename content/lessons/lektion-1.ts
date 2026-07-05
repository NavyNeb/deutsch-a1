import type { Lesson } from '../types';

export const lektion1: Lesson = {
  id: 'l1', number: 1,
  title: { de: 'Hallo! Ich bin Nicole', en: 'Hello! I am Nicole' },
  theme: 'Greetings & introducing yourself',
  goals: ['Greet and say goodbye', 'Introduce yourself', 'Say where you are from', 'Use the alphabet to spell your name'],
  steps: [
    { kind: 'intro', title: 'Willkommen! 👋', scene: 'Two people meeting for the first time.',
      goals: ['Say hello and goodbye', 'Introduce yourself', 'Say where you are from', 'Spell your name using the alphabet'] },

    { kind: 'vocab', item: { id: 'l1-hallo', german: 'Hallo', english: 'Hello (informal)', gender: null, syllables: ['ha', 'LO'], pronunciation: 'hah-LOH', example: { de: 'Hallo, ich bin Nicole.', en: 'Hello, I am Nicole.' } } },
    { kind: 'vocab', item: { id: 'l1-gutentag', german: 'Guten Tag', english: 'Hello / Good day (formal)', gender: null, syllables: ['GU', 'ten', 'TAG'], pronunciation: 'GOO-ten tahk', example: { de: 'Guten Tag, Frau Meier.', en: 'Good day, Mrs Meier.' } } },
    { kind: 'vocab', item: { id: 'l1-tschuess', german: 'Tschüss', english: 'Bye (informal)', gender: null, syllables: ['TSCHÜSS'], pronunciation: 'chews', example: { de: 'Tschüss, bis morgen!', en: 'Bye, see you tomorrow!' } } },
    { kind: 'vocab', item: { id: 'l1-name', german: 'der Name', english: 'the name', gender: 'der', syllables: ['NA', 'me'], pronunciation: 'dair NAH-muh', example: { de: 'Mein Name ist Nicole.', en: 'My name is Nicole.' } } },

    { kind: 'vocab', item: { id: 'l1-kommen-aus', german: 'kommen aus', english: 'to come from', gender: null, syllables: ['KOM', 'men', 'AUS'], pronunciation: 'KOM-en ows', example: { de: 'Ich komme aus Kamerun.', en: 'I come from Cameroon.' } } },
    { kind: 'vocab', item: { id: 'l1-land', german: 'das Land', english: 'the country', gender: 'das', syllables: ['LAND'], pronunciation: 'dahs LAHNT', example: { de: 'Deutschland ist ein Land in Europa.', en: 'Germany is a country in Europe.' } } },
    { kind: 'vocab', item: { id: 'l1-kamerun', german: 'Kamerun', english: 'Cameroon', gender: null, syllables: ['ka', 'me', 'RUN'], pronunciation: 'KAH-meh-roon', example: { de: 'Kamerun ist mein Land.', en: 'Cameroon is my country.' } } },
    { kind: 'vocab', item: { id: 'l1-deutschland', german: 'Deutschland', english: 'Germany', gender: null, syllables: ['DEUTSCH', 'land'], pronunciation: 'DOYTCH-lahnt', example: { de: 'Er kommt aus Deutschland.', en: 'He comes from Germany.' } } },

    { kind: 'vocab', item: { id: 'l1-alphabet', german: 'das Alphabet', english: 'the alphabet', gender: 'das', syllables: ['al', 'pha', 'BET'], pronunciation: 'dahs al-fah-BET', example: { de: 'Das deutsche Alphabet hat 26 Buchstaben.', en: 'The German alphabet has 26 letters.' } } },
    { kind: 'vocab', item: { id: 'l1-buchstabieren', german: 'buchstabieren', english: 'to spell', gender: null, syllables: ['buch', 'sta', 'BIE', 'ren'], pronunciation: 'BOOKH-shtah-bee-ren', example: { de: 'Wie buchstabiert man das?', en: 'How do you spell that?' } } },

    { kind: 'grammar', note: {
      id: 'l1-sein', title: 'The verb "sein" (to be)',
      explanationMd: '**sein** is the most important German verb. In the singular:\n\n- ich **bin** — I am\n- du **bist** — you are (informal)\n- er/sie/es **ist** — he/she/it is',
      examples: [ { de: 'Ich bin Nicole.', en: 'I am Nicole.' }, { de: 'Du bist Student.', en: 'You are a student.' }, { de: 'Sie ist Journalistin.', en: 'She is a journalist.' } ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l1-wfragen', title: 'W-Questions',
      explanationMd: 'Question words start with **W** and the verb comes **second**:\n\n- **Wie** heißt du? — What is your name?\n- **Woher** kommst du? — Where are you from?\n- **Wo** wohnst du? — Where do you live?',
      examples: [ { de: 'Wie heißt du?', en: 'What is your name?' }, { de: 'Woher kommst du?', en: 'Where are you from?' } ],
      diagram: 'verb-second' } },

    { kind: 'grammar', note: {
      id: 'l1-kommen', title: 'The verb "kommen" (to come)',
      explanationMd: '**kommen** is a regular verb. Use **kommen aus** + a country to say where you are from:\n\n- ich **komme** — I come\n- du **kommst** — you come (informal)\n- er/sie/es **kommt** — he/she/it comes',
      examples: [ { de: 'Ich komme aus Kamerun.', en: 'I come from Cameroon.' }, { de: 'Woher kommst du?', en: 'Where are you from?' }, { de: 'Sie kommt aus Deutschland.', en: 'She comes from Germany.' } ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l1-buchstabieren-note', title: 'Spelling your name',
      explanationMd: 'To ask someone to spell a word, say **Wie buchstabiert man das?** (How do you spell that?). German uses the same 26-letter **Alphabet**, plus the umlauts ä, ö, ü and the letter ß.\n\nYou can spell your own name letter by letter when asked.',
      examples: [ { de: 'Wie buchstabiert man das?', en: 'How do you spell that?' }, { de: 'Mein Name ist Nicole: N-I-C-O-L-E.', en: 'My name is Nicole: N-I-C-O-L-E.' } ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e1', prompt: 'Ich ___ Nicole. (sein)', answer: 'bin', hint: 'first person singular of sein' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e2', prompt: 'Which is a formal greeting?', options: ['Hallo', 'Guten Tag', 'Tschüss'], answer: 1, explain: '"Guten Tag" is the formal daytime greeting.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l1-e3', tokens: ['heißt', 'Wie', 'du'], answer: ['Wie', 'heißt', 'du'] } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l1-e4', audio: { official: { lesson: 1, activity: '2a' } }, options: ['A greeting between friends', 'Ordering food', 'Buying a ticket'], answer: 0 } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l1-e5', pairs: [ { de: 'Hallo', en: 'Hello' }, { de: 'Tschüss', en: 'Bye' }, { de: 'Name', en: 'Name' } ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e6', prompt: 'Ich ___ aus Kamerun. (kommen)', answer: 'komme', hint: 'first person singular of kommen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e7', prompt: 'How do you ask someone where they are from?', options: ['Wie heißt du?', 'Woher kommst du?', 'Wie buchstabiert man das?'], answer: 1, explain: '"Woher kommst du?" means "Where are you from?"' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l1-e8', tokens: ['aus', 'komme', 'Kamerun', 'Ich'], answer: ['Ich', 'komme', 'aus', 'Kamerun'] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e9', prompt: 'How do you ask someone to spell a word in German?', options: ['Wie buchstabiert man das?', 'Woher kommst du?', 'Guten Tag!'], answer: 0, explain: '"Wie buchstabiert man das?" asks someone to spell a word letter by letter.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e10', prompt: 'Können Sie das bitte ___? (buchstabieren)', answer: 'buchstabieren', hint: 'infinitive: to spell' } },

    { kind: 'pronunciation', focus: 'The "ü" sound in Tschüss and the letter ß in heißen', items: [
      { id: 'l1-tschuess-pron', german: 'Tschüss', english: 'Bye', gender: null, syllables: ['TSCHÜSS'], pronunciation: 'chews', example: { de: 'Tschüss!', en: 'Bye!' } },
      { id: 'l1-heissen-pron', german: 'heißen', english: 'to be called', gender: null, syllables: ['HEI', 'ßen'], pronunciation: 'HIGH-ssen', example: { de: 'Ich heiße Nicole.', en: 'My name is Nicole. (lit. I am called Nicole)' } },
    ] },

    { kind: 'wrapup', summary: 'You can now greet people, introduce yourself, say where you are from with **kommen aus**, and spell your name using the German alphabet. 🎉' },
  ],
};
