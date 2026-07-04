import type { Lesson } from '../types';

export const lektion2: Lesson = {
  id: 'l2', number: 2,
  title: { de: 'Ich bin Journalistin', en: 'I am a journalist' },
  theme: 'Jobs, marital status & numbers 1–100',
  goals: ['State your job', 'Give personal details (age and marital status)', 'Ask and answer yes/no questions', 'Negate statements with nicht'],
  steps: [
    { kind: 'intro', title: 'Willkommen zurück! 👋', scene: 'A journalist introduces herself and talks about her job and her family.',
      goals: ['State your job', 'Give personal details (age and marital status)', 'Ask and answer yes/no questions', 'Negate statements with nicht'] },

    { kind: 'vocab', item: { id: 'l2-beruf', german: 'der Beruf', english: 'the profession / job', gender: 'der', syllables: ['be', 'RUF'], example: { de: 'Was bist du von Beruf?', en: 'What is your profession?' } } },
    { kind: 'vocab', item: { id: 'l2-journalist', german: 'der Journalist', english: 'the journalist (male)', gender: 'der', syllables: ['jour', 'na', 'LIST'], example: { de: 'Er ist Journalist.', en: 'He is a journalist.' } } },
    { kind: 'vocab', item: { id: 'l2-journalistin', german: 'die Journalistin', english: 'the journalist (female)', gender: 'die', syllables: ['jour', 'na', 'LIS', 'tin'], example: { de: 'Ich bin Journalistin von Beruf.', en: 'I am a journalist by profession.' } } },
    { kind: 'vocab', item: { id: 'l2-arzt', german: 'der Arzt', english: 'the doctor (male)', gender: 'der', syllables: ['ARZT'], example: { de: 'Mein Vater ist Arzt.', en: 'My father is a doctor.' } } },
    { kind: 'vocab', item: { id: 'l2-aerztin', german: 'die Ärztin', english: 'the doctor (female)', gender: 'die', syllables: ['ÄRZ', 'tin'], example: { de: 'Sie ist Ärztin von Beruf.', en: 'She is a doctor by profession.' } } },
    { kind: 'vocab', item: { id: 'l2-lehrer', german: 'der Lehrer', english: 'the teacher (male)', gender: 'der', syllables: ['LEH', 'rer'], example: { de: 'Er ist Lehrer.', en: 'He is a teacher.' } } },
    { kind: 'vocab', item: { id: 'l2-lehrerin', german: 'die Lehrerin', english: 'the teacher (female)', gender: 'die', syllables: ['LEH', 're', 'rin'], example: { de: 'Ich bin Lehrerin von Beruf.', en: 'I am a teacher by profession.' } } },
    { kind: 'vocab', item: { id: 'l2-student', german: 'der Student', english: 'the student (male)', gender: 'der', syllables: ['stu', 'DENT'], example: { de: 'Er ist Student.', en: 'He is a student.' } } },
    { kind: 'vocab', item: { id: 'l2-studentin', german: 'die Studentin', english: 'the student (female)', gender: 'die', syllables: ['stu', 'DEN', 'tin'], example: { de: 'Ich bin Studentin.', en: 'I am a student.' } } },
    { kind: 'vocab', item: { id: 'l2-arbeiten', german: 'arbeiten (als)', english: 'to work (as)', gender: null, syllables: ['AR', 'bei', 'ten'], example: { de: 'Ich arbeite als Journalistin.', en: 'I work as a journalist.' } } },

    { kind: 'vocab', item: { id: 'l2-verheiratet', german: 'verheiratet', english: 'married', gender: null, syllables: ['ver', 'HEI', 'ra', 'tet'], example: { de: 'Bist du verheiratet?', en: 'Are you married?' } } },
    { kind: 'vocab', item: { id: 'l2-ledig', german: 'ledig', english: 'single (unmarried)', gender: null, syllables: ['LE', 'dig'], example: { de: 'Nein, ich bin ledig.', en: 'No, I am single.' } } },
    { kind: 'vocab', item: { id: 'l2-geschieden', german: 'geschieden', english: 'divorced', gender: null, syllables: ['ge', 'SCHIE', 'den'], example: { de: 'Meine Mutter ist geschieden.', en: 'My mother is divorced.' } } },
    { kind: 'vocab', item: { id: 'l2-alt', german: 'alt', english: 'old', gender: null, syllables: ['ALT'], example: { de: 'Ich bin fünfundzwanzig Jahre alt.', en: 'I am twenty-five years old.' } } },
    { kind: 'vocab', item: { id: 'l2-zwanzig', german: 'zwanzig', english: 'twenty', gender: null, syllables: ['ZWAN', 'zig'], example: { de: 'Ich bin zwanzig Jahre alt.', en: 'I am twenty years old.' } } },
    { kind: 'vocab', item: { id: 'l2-dreissig', german: 'dreißig', english: 'thirty', gender: null, syllables: ['DREI', 'ßig'], example: { de: 'Er ist dreißig Jahre alt.', en: 'He is thirty years old.' } } },
    { kind: 'vocab', item: { id: 'l2-hundert', german: 'hundert', english: 'hundred', gender: null, syllables: ['HUN', 'dert'], example: { de: 'Ich zähle bis hundert.', en: 'I count to a hundred.' } } },

    { kind: 'grammar', note: {
      id: 'l2-sein-plural', title: 'The verb "sein" — full conjugation',
      explanationMd: '**sein** (to be) in full, singular and plural:\n\n- ich **bin** — I am\n- du **bist** — you are\n- er/sie/es **ist** — he/she/it is\n- wir **sind** — we are\n- ihr **seid** — you (plural) are\n- sie/Sie **sind** — they/you (formal) are',
      examples: [ { de: 'Wir sind Studenten.', en: 'We are students.' }, { de: 'Seid ihr verheiratet?', en: 'Are you (pl.) married?' }, { de: 'Sie sind Journalisten.', en: 'They are journalists.' } ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l2-arbeiten-konjugation', title: 'The verb "arbeiten" — full conjugation',
      explanationMd: '**arbeiten** is a regular verb whose stem ends in **-t**, so an extra **e** is added before the du/er-sie-es/ihr endings:\n\n- ich **arbeite** — I work\n- du **arbeitest** — you work\n- er/sie/es **arbeitet** — he/she/it works\n- wir **arbeiten** — we work\n- ihr **arbeitet** — you (pl.) work\n- sie/Sie **arbeiten** — they/you work\n\nUse **arbeiten als** + profession to say what job you do.',
      examples: [ { de: 'Ich arbeite als Journalistin.', en: 'I work as a journalist.' }, { de: 'Wir arbeiten als Lehrer.', en: 'We work as teachers.' }, { de: 'Arbeitet ihr als Ärzte?', en: 'Do you (pl.) work as doctors?' } ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l2-negation-nicht', title: 'Negation with "nicht"',
      explanationMd: 'Use **nicht** to negate a sentence. It usually stands:\n\n- at the **end** of a simple sentence: Ich arbeite nicht.\n- right **before** the word or phrase it negates: Ich bin nicht verheiratet. / Er arbeitet nicht als Arzt.',
      examples: [ { de: 'Ich bin nicht verheiratet.', en: 'I am not married.' }, { de: 'Er arbeitet nicht als Arzt.', en: 'He does not work as a doctor.' }, { de: 'Wir kommen nicht aus Deutschland.', en: 'We do not come from Germany.' } ] } },

    { kind: 'grammar', note: {
      id: 'l2-jn-fragen', title: 'Yes/No Questions',
      explanationMd: 'Yes/no questions put the **verb first**, before the subject:\n\n- **Bist** du verheiratet? — Are you married?\n- **Arbeitest** du als Journalistin? — Do you work as a journalist?\n\nAnswer with **Ja** (yes) or **Nein** (no).',
      examples: [ { de: 'Bist du Student?', en: 'Are you a student?' }, { de: 'Ja, ich bin Student.', en: 'Yes, I am a student.' }, { de: 'Nein, ich bin Lehrer.', en: 'No, I am a teacher.' } ],
      diagram: 'verb-second' } },

    { kind: 'grammar', note: {
      id: 'l2-doch', title: 'The particle "doch"',
      explanationMd: 'Use **doch** instead of **ja** to contradict a **negative** question — to say "yes, actually" when your answer disagrees with what was assumed:\n\n- Bist du **nicht** verheiratet? — Aren\'t you married?\n- **Doch**, ich bin verheiratet. — Yes I am (contrary to what you assumed).',
      examples: [ { de: 'Bist du nicht Student?', en: 'Aren\'t you a student?' }, { de: 'Doch, ich bin Student.', en: 'Yes I am (contrary to that).' }, { de: 'Arbeitest du nicht als Ärztin?', en: 'Don\'t you work as a doctor?' } ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l2-e1', word: 'Arzt', answer: 'der' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l2-e2', word: 'Journalistin', answer: 'die' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e3', prompt: 'Ich ___ Journalistin von Beruf. (sein)', answer: 'bin', hint: 'first person singular of sein' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e4', prompt: 'Which is the correct feminine form of "der Lehrer"?', options: ['die Lehrerin', 'die Lehrer', 'der Lehrerin'], answer: 0, explain: '"Lehrer" becomes "Lehrerin" for a female teacher.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l2-e5', pairs: [ { de: 'die Ärztin', en: 'the doctor (f)' }, { de: 'der Student', en: 'the student (m)' }, { de: 'die Lehrerin', en: 'the teacher (f)' } ] } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e6', tokens: ['als', 'Ich', 'Journalistin', 'arbeite'], answer: ['Ich', 'arbeite', 'als', 'Journalistin'] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e7', prompt: 'Ich bin fünfundzwanzig Jahre ___. (alt)', answer: 'alt', hint: 'adjective meaning "old"' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e8', prompt: 'Which word means "divorced"?', options: ['ledig', 'verheiratet', 'geschieden'], answer: 2, explain: '"geschieden" means divorced.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l2-e9', pairs: [ { de: 'verheiratet', en: 'married' }, { de: 'ledig', en: 'single' }, { de: 'geschieden', en: 'divorced' } ] } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e10', tokens: ['bist', 'Wie', 'du', 'alt'], answer: ['Wie', 'alt', 'bist', 'du'] } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l2-e11', audio: { official: { lesson: 2, activity: '1b' } }, options: ['Two people talking about their jobs', 'A weather forecast', 'Buying train tickets'], answer: 0 } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e12', tokens: ['du', 'Bist', 'verheiratet'], answer: ['Bist', 'du', 'verheiratet'] } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e13', prompt: 'Someone asks "Bist du nicht Student?" and you ARE a student. How do you answer?', options: ['Ja, ich bin Student.', 'Doch, ich bin Student.', 'Nein, ich bin Student.'], answer: 1, explain: '"Doch" contradicts a negative question.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e14', prompt: 'Bist du verheiratet? – ___, ich bin ledig. (Nein)', answer: 'Nein', hint: 'simple no — the question was not negative' } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e15', prompt: 'Ich bin ___ verheiratet. (nicht)', answer: 'nicht', hint: 'negation word' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e16', prompt: 'Where does "nicht" go in "Ich arbeite nicht"?', options: ['At the beginning', 'At the end', 'It is never used'], answer: 1, explain: 'In a simple sentence, "nicht" often stands at the end.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e17', tokens: ['als', 'arbeitet', 'Arzt', 'nicht', 'Er'], answer: ['Er', 'arbeitet', 'nicht', 'als', 'Arzt'] } },

    { kind: 'pronunciation', focus: 'The "z" sound (pronounced "ts") in words like zwanzig and the umlaut ä in Ärztin', items: [
      { id: 'l2-zwanzig-pron', german: 'zwanzig', english: 'twenty', gender: null, syllables: ['ZWAN', 'zig'], example: { de: 'Ich bin zwanzig Jahre alt.', en: 'I am twenty years old.' } },
      { id: 'l2-aerztin-pron', german: 'die Ärztin', english: 'the doctor (female)', gender: 'die', syllables: ['ÄRZ', 'tin'], example: { de: 'Sie ist Ärztin von Beruf.', en: 'She is a doctor by profession.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now say what your job is, give your age and marital status, ask and answer yes/no questions, and use **nicht** and **doch** correctly. 🎉' },
  ],
};
