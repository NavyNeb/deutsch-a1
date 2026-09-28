import type { Lesson } from '../types';

export const lektion2: Lesson = {
  id: 'l2', level: 'A1', module: 1, number: 2,
  title: { de: 'Ich bin Journalistin', en: 'I am a journalist', fr: 'Je suis journaliste' },
  theme: 'Jobs, marital status & numbers 1–100',
  themeFr: 'Métiers, état civil et les nombres de 1 à 100',
  goals: ['State your job', 'Give personal details (age and marital status)', 'Ask and answer yes/no questions', 'Negate statements with nicht'],
  goalsFr: ['Dire ton métier', 'Donner des informations personnelles (âge et état civil)', 'Poser et répondre à des questions fermées', 'Nier des phrases avec nicht'],
  steps: [
    { kind: 'intro', title: 'Willkommen zurück! 👋', titleFr: 'Bon retour ! 👋',
      scene: 'A journalist introduces herself and talks about her job and her family.',
      sceneFr: 'Une journaliste se présente et parle de son métier et de sa famille.',
      goals: ['State your job', 'Give personal details (age and marital status)', 'Ask and answer yes/no questions', 'Negate statements with nicht'],
      goalsFr: ['Dire ton métier', 'Donner des informations personnelles (âge et état civil)', 'Poser et répondre à des questions fermées', 'Nier des phrases avec nicht'] },

    { kind: 'vocab', item: { id: 'l2-beruf', german: 'der Beruf', english: 'the profession / job', french: 'la profession / le métier', gender: 'der', syllables: ['be', 'RUF'], pronunciation: 'dair buh-ROOF', example: { de: 'Was bist du von Beruf?', en: 'What is your profession?', fr: 'Quel est ton métier ?' } } },
    { kind: 'vocab', item: { id: 'l2-journalist', german: 'der Journalist', english: 'the journalist (male)', french: 'le journaliste', gender: 'der', syllables: ['jour', 'na', 'LIST'], pronunciation: 'dair zhoor-nah-LIST', example: { de: 'Er ist Journalist.', en: 'He is a journalist.', fr: 'Il est journaliste.' } } },
    { kind: 'vocab', item: { id: 'l2-journalistin', german: 'die Journalistin', english: 'the journalist (female)', french: 'la journaliste', gender: 'die', syllables: ['jour', 'na', 'LIS', 'tin'], pronunciation: 'dee zhoor-nah-LIS-tin', example: { de: 'Ich bin Journalistin von Beruf.', en: 'I am a journalist by profession.', fr: 'Je suis journaliste de profession.' } } },
    { kind: 'vocab', item: { id: 'l2-arzt', german: 'der Arzt', english: 'the doctor (male)', french: 'le médecin', gender: 'der', syllables: ['ARZT'], pronunciation: 'dair AHRTST', example: { de: 'Mein Vater ist Arzt.', en: 'My father is a doctor.', fr: 'Mon père est médecin.' } } },
    { kind: 'vocab', item: { id: 'l2-aerztin', german: 'die Ärztin', english: 'the doctor (female)', french: 'la médecin', gender: 'die', syllables: ['ÄRZ', 'tin'], pronunciation: 'dee AIRTS-tin', example: { de: 'Sie ist Ärztin von Beruf.', en: 'She is a doctor by profession.', fr: 'Elle est médecin de profession.' } } },
    { kind: 'vocab', item: { id: 'l2-lehrer', german: 'der Lehrer', english: 'the teacher (male)', french: "l'enseignant / le professeur", gender: 'der', syllables: ['LEH', 'rer'], pronunciation: 'dair LAY-rer', example: { de: 'Er ist Lehrer.', en: 'He is a teacher.', fr: 'Il est enseignant.' } } },
    { kind: 'vocab', item: { id: 'l2-lehrerin', german: 'die Lehrerin', english: 'the teacher (female)', french: "l'enseignante / la professeure", gender: 'die', syllables: ['LEH', 're', 'rin'], pronunciation: 'dee LAY-reh-rin', example: { de: 'Ich bin Lehrerin von Beruf.', en: 'I am a teacher by profession.', fr: 'Je suis enseignante de profession.' } } },
    { kind: 'vocab', item: { id: 'l2-student', german: 'der Student', english: 'the student (male)', french: "l'étudiant", gender: 'der', syllables: ['stu', 'DENT'], pronunciation: 'dair shtoo-DENT', example: { de: 'Er ist Student.', en: 'He is a student.', fr: 'Il est étudiant.' } } },
    { kind: 'vocab', item: { id: 'l2-studentin', german: 'die Studentin', english: 'the student (female)', french: "l'étudiante", gender: 'die', syllables: ['stu', 'DEN', 'tin'], pronunciation: 'dee shtoo-DEN-tin', example: { de: 'Ich bin Studentin.', en: 'I am a student.', fr: 'Je suis étudiante.' } } },
    { kind: 'vocab', item: { id: 'l2-arbeiten', german: 'arbeiten (als)', english: 'to work (as)', french: 'travailler (comme / en tant que)', gender: null, syllables: ['AR', 'bei', 'ten'], pronunciation: 'AR-by-ten (ahls)', example: { de: 'Ich arbeite als Journalistin.', en: 'I work as a journalist.', fr: 'Je travaille comme journaliste.' } } },

    { kind: 'vocab', item: { id: 'l2-verheiratet', german: 'verheiratet', english: 'married', french: 'marié(e)', gender: null, syllables: ['ver', 'HEI', 'ra', 'tet'], pronunciation: 'fer-HIGH-rah-tet', example: { de: 'Bist du verheiratet?', en: 'Are you married?', fr: 'Es-tu marié(e) ?' } } },
    { kind: 'vocab', item: { id: 'l2-ledig', german: 'ledig', english: 'single (unmarried)', french: 'célibataire', gender: null, syllables: ['LE', 'dig'], pronunciation: 'LAY-dikh', example: { de: 'Nein, ich bin ledig.', en: 'No, I am single.', fr: 'Non, je suis célibataire.' } } },
    { kind: 'vocab', item: { id: 'l2-geschieden', german: 'geschieden', english: 'divorced', french: 'divorcé(e)', gender: null, syllables: ['ge', 'SCHIE', 'den'], pronunciation: 'guh-SHEE-den', example: { de: 'Meine Mutter ist geschieden.', en: 'My mother is divorced.', fr: 'Ma mère est divorcée.' } } },
    { kind: 'vocab', item: { id: 'l2-alt', german: 'alt', english: 'old', french: 'vieux / âgé', gender: null, syllables: ['ALT'], pronunciation: 'AHLT', example: { de: 'Ich bin fünfundzwanzig Jahre alt.', en: 'I am twenty-five years old.', fr: "J'ai vingt-cinq ans." } } },
    { kind: 'vocab', item: { id: 'l2-zwanzig', german: 'zwanzig', english: 'twenty', french: 'vingt', gender: null, syllables: ['ZWAN', 'zig'], pronunciation: 'TSVAHN-tsikh', example: { de: 'Ich bin zwanzig Jahre alt.', en: 'I am twenty years old.', fr: "J'ai vingt ans." } } },
    { kind: 'vocab', item: { id: 'l2-dreissig', german: 'dreißig', english: 'thirty', french: 'trente', gender: null, syllables: ['DREI', 'ßig'], pronunciation: 'DRY-sikh', example: { de: 'Er ist dreißig Jahre alt.', en: 'He is thirty years old.', fr: 'Il a trente ans.' } } },
    { kind: 'vocab', item: { id: 'l2-hundert', german: 'hundert', english: 'hundred', french: 'cent', gender: null, syllables: ['HUN', 'dert'], pronunciation: 'HOON-dert', example: { de: 'Ich zähle bis hundert.', en: 'I count to a hundred.', fr: "Je compte jusqu'à cent." } } },

    { kind: 'grammar', note: {
      id: 'l2-sein-plural', title: 'The verb "sein" — full conjugation', titleFr: 'Le verbe « sein » — conjugaison complète',
      explanationMd: '**sein** (to be) in full, singular and plural:\n\n- ich **bin** — I am\n- du **bist** — you are (informal)\n- er/sie/es **ist** — he/she/it is\n- wir **sind** — we are\n- ihr **seid** — you (plural) are\n- sie/Sie **sind** — they/you (formal) are',
      explanationMdFr: '**sein** (être) en entier, au singulier et au pluriel :\n\n- ich **bin** — je suis\n- du **bist** — tu es (informel)\n- er/sie/es **ist** — il/elle/on est\n- wir **sind** — nous sommes\n- ihr **seid** — vous êtes (pluriel)\n- sie/Sie **sind** — ils/elles sont / vous êtes (formel)',
      examples: [
        { de: 'Wir sind Studenten.', en: 'We are students.', fr: 'Nous sommes étudiants.' },
        { de: 'Seid ihr verheiratet?', en: 'Are you (pl.) married?', fr: 'Êtes-vous mariés ?' },
        { de: 'Sie sind Journalisten.', en: 'They are journalists.', fr: 'Ils sont journalistes.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l2-arbeiten-konjugation', title: 'The verb "arbeiten" — full conjugation', titleFr: 'Le verbe « arbeiten » — conjugaison complète',
      explanationMd: '**arbeiten** is a regular verb whose stem ends in **-t**, so an extra **e** is added before the du/er-sie-es/ihr endings:\n\n- ich **arbeite** — I work\n- du **arbeitest** — you work\n- er/sie/es **arbeitet** — he/she/it works\n- wir **arbeiten** — we work\n- ihr **arbeitet** — you (pl.) work\n- sie/Sie **arbeiten** — they/you work\n\nUse **arbeiten als** + profession to say what job you do.',
      explanationMdFr: "**arbeiten** est un verbe régulier dont le radical se termine par **-t**, donc un **e** supplémentaire s'ajoute avant les terminaisons de du/er-sie-es/ihr :\n\n- ich **arbeite** — je travaille\n- du **arbeitest** — tu travailles\n- er/sie/es **arbeitet** — il/elle/on travaille\n- wir **arbeiten** — nous travaillons\n- ihr **arbeitet** — vous travaillez (pluriel)\n- sie/Sie **arbeiten** — ils travaillent / vous travaillez\n\nUtilise **arbeiten als** + métier pour dire quel travail tu fais.",
      examples: [
        { de: 'Ich arbeite als Journalistin.', en: 'I work as a journalist.', fr: 'Je travaille comme journaliste.' },
        { de: 'Wir arbeiten als Lehrer.', en: 'We work as teachers.', fr: 'Nous travaillons comme enseignants.' },
        { de: 'Arbeitet ihr als Ärzte?', en: 'Do you (pl.) work as doctors?', fr: 'Travaillez-vous comme médecins ?' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l2-negation-nicht', title: 'Negation with "nicht"', titleFr: 'La négation avec « nicht »',
      explanationMd: 'Use **nicht** to negate a sentence. It usually stands:\n\n- at the **end** of a simple sentence: Ich arbeite nicht.\n- right **before** the word or phrase it negates: Ich bin nicht verheiratet. / Er arbeitet nicht als Arzt.',
      explanationMdFr: "Utilise **nicht** pour nier une phrase. Il se place généralement :\n\n- à la **fin** d'une phrase simple : Ich arbeite nicht.\n- juste **avant** le mot ou le groupe de mots qu'il nie : Ich bin nicht verheiratet. / Er arbeitet nicht als Arzt.",
      examples: [
        { de: 'Ich bin nicht verheiratet.', en: 'I am not married.', fr: 'Je ne suis pas marié(e).' },
        { de: 'Er arbeitet nicht als Arzt.', en: 'He does not work as a doctor.', fr: 'Il ne travaille pas comme médecin.' },
        { de: 'Wir kommen nicht aus Deutschland.', en: 'We do not come from Germany.', fr: "Nous ne venons pas d'Allemagne." },
      ] } },

    { kind: 'grammar', note: {
      id: 'l2-jn-fragen', title: 'Yes/No Questions', titleFr: 'Les questions fermées',
      explanationMd: 'Yes/no questions put the **verb first**, before the subject:\n\n- **Bist** du verheiratet? — Are you married?\n- **Arbeitest** du als Journalistin? — Do you work as a journalist?\n\nAnswer with **Ja** (yes) or **Nein** (no).',
      explanationMdFr: 'Dans les questions fermées, le **verbe** se place en **premier**, avant le sujet :\n\n- **Bist** du verheiratet ? — Es-tu marié(e) ?\n- **Arbeitest** du als Journalistin ? — Travailles-tu comme journaliste ?\n\nRéponds par **Ja** (oui) ou **Nein** (non).',
      examples: [
        { de: 'Bist du Student?', en: 'Are you a student?', fr: 'Es-tu étudiant ?' },
        { de: 'Ja, ich bin Student.', en: 'Yes, I am a student.', fr: 'Oui, je suis étudiant.' },
        { de: 'Nein, ich bin Lehrer.', en: 'No, I am a teacher.', fr: 'Non, je suis enseignant.' },
      ],
      diagram: 'verb-second' } },

    { kind: 'grammar', note: {
      id: 'l2-doch', title: 'The particle "doch"', titleFr: 'La particule « doch »',
      explanationMd: 'Use **doch** instead of **ja** to contradict a **negative** question — to say "yes, actually" when your answer disagrees with what was assumed:\n\n- Bist du **nicht** verheiratet? — Aren\'t you married?\n- **Doch**, ich bin verheiratet. — Yes I am (contrary to what you assumed).',
      explanationMdFr: "Utilise **doch** au lieu de **ja** pour contredire une question **négative** — pour dire « si, en fait » quand ta réponse contredit ce qui était supposé :\n\n- Bist du **nicht** verheiratet ? — N'es-tu pas marié(e) ?\n- **Doch**, ich bin verheiratet. — Si, je suis marié(e) (contrairement à ce que tu supposais).",
      examples: [
        { de: 'Bist du nicht Student?', en: "Aren't you a student?", fr: "N'es-tu pas étudiant ?" },
        { de: 'Doch, ich bin Student.', en: 'Yes I am (contrary to that).', fr: 'Si, je suis étudiant.' },
        { de: 'Arbeitest du nicht als Ärztin?', en: "Don't you work as a doctor?", fr: 'Ne travailles-tu pas comme médecin ?' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l2-e1', word: 'Arzt', answer: 'der', hint: 'Think about the noun\'s gender — is it der, die, or das?', hintFr: 'Pense au genre du nom — der, die ou das ?' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l2-e2', word: 'Journalistin', answer: 'die', hint: 'Nouns ending in "-in" naming a person are almost always feminine.', hintFr: 'Les noms de personne qui se terminent par « -in » sont presque toujours féminins.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e3', prompt: 'Ich ___ Journalistin von Beruf. (sein)', answer: 'bin', hint: 'first person singular of sein', hintFr: 'première personne du singulier de sein' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e4', prompt: 'Which is the correct feminine form of "der Lehrer"?', promptFr: 'Quelle est la forme féminine correcte de « der Lehrer » ?', options: ['die Lehrerin', 'die Lehrer', 'der Lehrerin'], answer: 0, explain: '"Lehrer" becomes "Lehrerin" for a female teacher.', explainFr: '« Lehrer » devient « Lehrerin » pour une enseignante.', hint: 'The feminine form adds an ending and switches the article to "die".', hintFr: 'La forme féminine ajoute une terminaison et l\'article devient « die ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l2-e5', pairs: [ { de: 'die Ärztin', en: 'the doctor (f)', fr: 'la médecin' }, { de: 'der Student', en: 'the student (m)', fr: "l'étudiant" }, { de: 'die Lehrerin', en: 'the teacher (f)', fr: "l'enseignante" } ], hint: 'The article (der/die) already tells you whether it\'s a male or female form.', hintFr: 'L\'article (der/die) te dit déjà s\'il s\'agit d\'une forme masculine ou féminine.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e6', tokens: ['als', 'Ich', 'Journalistin', 'arbeite'], answer: ['Ich', 'arbeite', 'als', 'Journalistin'], hint: 'In a German statement, the verb comes second.', hintFr: "Dans une phrase allemande, le verbe est en deuxième position." } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e7', prompt: 'Ich bin fünfundzwanzig Jahre ___. (alt)', answer: 'alt', hint: 'adjective meaning "old"', hintFr: 'adjectif signifiant « vieux/âgé »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e8', prompt: 'Which word means "divorced"?', promptFr: 'Quel mot signifie « divorcé(e) » ?', options: ['ledig', 'verheiratet', 'geschieden'], answer: 2, explain: '"geschieden" means divorced.', explainFr: '« geschieden » signifie divorcé(e).', hint: 'The other two options mean "single" and "married".', hintFr: 'Les deux autres options signifient « célibataire » et « marié(e) ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l2-e9', pairs: [ { de: 'verheiratet', en: 'married', fr: 'marié(e)' }, { de: 'ledig', en: 'single', fr: 'célibataire' }, { de: 'geschieden', en: 'divorced', fr: 'divorcé(e)' } ], hint: 'These are the three marital-status words from this lesson\'s vocab.', hintFr: 'Ce sont les trois mots d\'état civil du vocabulaire de cette leçon.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e10', tokens: ['bist', 'Wie', 'du', 'alt'], answer: ['Wie', 'alt', 'bist', 'du'], hint: 'This is a W-question: the question word starts the sentence, then the verb.', hintFr: "C'est une question en W : le mot interrogatif commence la phrase, puis vient le verbe." } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l2-e11', prompt: "Listen. What is Sofia's job?", promptFr: 'Écoute. Quel est le métier de Sofia ?', audio: { ttsText: 'Ich heiße Sofia. Ich bin dreißig Jahre alt und ich arbeite als Ärztin. Ich bin nicht verheiratet, ich bin ledig.' }, options: ['Doctor', 'Teacher', 'Journalist'], optionsFr: ['Médecin', 'Enseignante', 'Journaliste'], answer: 0, hint: 'Listen for the profession right after "ich arbeite als".', hintFr: 'Écoute le métier juste après « ich arbeite als ».' } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e12', tokens: ['du', 'Bist', 'verheiratet'], answer: ['Bist', 'du', 'verheiratet'], hint: 'This is a yes/no question — the verb goes first, before the subject.', hintFr: "C'est une question fermée — le verbe vient en premier, avant le sujet." } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e13', prompt: 'Someone asks "Bist du nicht Student?" and you ARE a student. How do you answer?', promptFr: 'Quelqu\'un te demande « Bist du nicht Student? » et tu ES étudiant. Comment réponds-tu ?', options: ['Ja, ich bin Student.', 'Doch, ich bin Student.', 'Nein, ich bin Student.'], answer: 1, explain: '"Doch" contradicts a negative question.', explainFr: '« Doch » contredit une question négative.', hint: 'The question was negative ("nicht") — which word contradicts a negative question?', hintFr: 'La question était négative (« nicht ») — quel mot contredit une question négative ?' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e14', prompt: 'Bist du verheiratet? – ___, ich bin ledig. (Nein)', answer: 'Nein', hint: 'simple no — the question was not negative', hintFr: 'simple non — la question n\'était pas négative' } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e15', prompt: 'Ich bin ___ verheiratet. (nicht)', answer: 'nicht', hint: 'negation word', hintFr: 'mot de négation' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e16', prompt: 'Where does "nicht" go in "Ich arbeite nicht"?', promptFr: 'Où se place « nicht » dans « Ich arbeite nicht » ?', options: ['At the beginning', 'At the end', 'It is never used'], optionsFr: ['Au début', 'À la fin', "Il n'est jamais utilisé"], answer: 1, explain: 'In a simple sentence, "nicht" often stands at the end.', explainFr: 'Dans une phrase simple, « nicht » se trouve souvent à la fin.', hint: 'Look at where "nicht" sits in the example sentence itself.', hintFr: 'Regarde où se trouve « nicht » dans la phrase donnée en exemple.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e17', tokens: ['als', 'arbeitet', 'Arzt', 'nicht', 'Er'], answer: ['Er', 'arbeitet', 'nicht', 'als', 'Arzt'], hint: 'Subject, then verb second, then "nicht" right before what it negates.', hintFr: 'Sujet, puis verbe en deuxième position, puis « nicht » juste avant ce qu\'il nie.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l2-e18', prompt: "Listen. What is Herr Weber's marital status?", promptFr: "Écoute. Quel est l'état civil de Herr Weber ?", audio: { ttsText: 'Guten Tag, ich bin Herr Weber. Ich bin Lehrer von Beruf und zwanzig Jahre alt. Ich bin verheiratet.' }, options: ['Married', 'Single', 'Divorced'], optionsFr: ['Marié', 'Célibataire', 'Divorcé'], answer: 0, hint: 'Listen for the marital-status word at the very end of the clip.', hintFr: "Écoute le mot d'état civil tout à la fin du clip." } },

    { kind: 'pronunciation', focus: 'The "z" sound (pronounced "ts") in words like zwanzig and the umlaut ä in Ärztin', focusFr: 'Le son « z » (prononcé « ts ») dans des mots comme zwanzig et le tréma ä dans Ärztin', items: [
      { id: 'l2-zwanzig-pron', german: 'zwanzig', english: 'twenty', french: 'vingt', gender: null, syllables: ['ZWAN', 'zig'], pronunciation: 'TSVAHN-tsikh', example: { de: 'Ich bin zwanzig Jahre alt.', en: 'I am twenty years old.', fr: "J'ai vingt ans." } },
      { id: 'l2-aerztin-pron', german: 'die Ärztin', english: 'the doctor (female)', french: 'la médecin', gender: 'die', syllables: ['ÄRZ', 'tin'], pronunciation: 'dee AIRTS-tin', example: { de: 'Sie ist Ärztin von Beruf.', en: 'She is a doctor by profession.', fr: 'Elle est médecin de profession.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now say what your job is, give your age and marital status, ask and answer yes/no questions, and use **nicht** and **doch** correctly. 🎉',
      summaryFr: 'Tu sais maintenant dire ton métier, donner ton âge et ton état civil, poser et répondre à des questions fermées, et utiliser **nicht** et **doch** correctement. 🎉' },
  ],
};
