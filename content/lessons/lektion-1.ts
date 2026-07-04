import type { Lesson } from '../types';

export const lektion1: Lesson = {
  id: 'l1', number: 1,
  title: { de: 'Hallo! Ich bin Nicole', en: 'Hello! I am Nicole' },
  theme: 'Greetings & introducing yourself',
  goals: ['Greet and say goodbye', 'Introduce yourself', 'Say where you are from', 'Use the alphabet to spell your name'],
  steps: [
    { kind: 'intro', title: 'Willkommen! 👋', scene: 'Two people meeting for the first time.',
      goals: ['Say hello and goodbye', 'Introduce yourself', 'Ask someone their name'] },

    { kind: 'vocab', item: { id: 'l1-hallo', german: 'Hallo', english: 'Hello (informal)', gender: null, syllables: ['HAL', 'lo'], example: { de: 'Hallo, ich bin Nicole.', en: 'Hello, I am Nicole.' } } },
    { kind: 'vocab', item: { id: 'l1-gutentag', german: 'Guten Tag', english: 'Hello / Good day (formal)', gender: null, syllables: ['GU', 'ten', 'TAG'], example: { de: 'Guten Tag, Frau Meier.', en: 'Good day, Mrs Meier.' } } },
    { kind: 'vocab', item: { id: 'l1-tschuess', german: 'Tschüss', english: 'Bye (informal)', gender: null, syllables: ['TSCHÜSS'], example: { de: 'Tschüss, bis morgen!', en: 'Bye, see you tomorrow!' } } },
    { kind: 'vocab', item: { id: 'l1-name', german: 'der Name', english: 'the name', gender: 'der', syllables: ['NA', 'me'], example: { de: 'Mein Name ist Nicole.', en: 'My name is Nicole.' } } },

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

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e1', prompt: 'Ich ___ Nicole. (sein)', answer: 'bin', hint: 'first person singular of sein' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e2', prompt: 'Which is a formal greeting?', options: ['Hallo', 'Guten Tag', 'Tschüss'], answer: 1, explain: '"Guten Tag" is the formal daytime greeting.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l1-e3', tokens: ['heißt', 'Wie', 'du'], answer: ['Wie', 'heißt', 'du'] } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l1-e4', audio: { official: { lesson: 1, activity: '2a' } }, options: ['A greeting between friends', 'Ordering food', 'Buying a ticket'], answer: 0 } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l1-e5', pairs: [ { de: 'Hallo', en: 'Hello' }, { de: 'Tschüss', en: 'Bye' }, { de: 'Name', en: 'Name' } ] } },

    { kind: 'pronunciation', focus: 'The "ü" sound and the letter ß', items: [
      { id: 'l1-tschuess-pron', german: 'Tschüss', english: 'Bye', gender: null, syllables: ['TSCHÜSS'], example: { de: 'Tschüss!', en: 'Bye!' } },
    ] },

    { kind: 'wrapup', summary: 'You can now greet people, introduce yourself, and ask someone’s name using **sein** and W-questions. 🎉' },
  ],
};
