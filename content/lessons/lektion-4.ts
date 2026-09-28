import type { Lesson } from '../types';

export const lektion4: Lesson = {
  id: 'l4', level: 'A1', module: 2, number: 4,
  title: { de: 'Zahlen und Alter', en: 'Numbers and age', fr: 'Les nombres et l’âge' },
  theme: 'Numbers 0–20, age, and contact details',
  themeFr: 'Les nombres 0–20, l’âge et les coordonnées',
  goals: ['Count from 0 to 20', 'Say how old you are', 'Give your phone number and email', 'Use the verb "haben" and ask yes/no questions'],
  goalsFr: ['Compter de 0 à 20', 'Dire ton âge', 'Donner ton numéro de téléphone et ton e-mail', 'Utiliser le verbe « haben » et poser des questions fermées'],
  steps: [
    { kind: 'intro', title: 'Zahlen im Alltag 🔢', titleFr: 'Les nombres au quotidien 🔢',
      scene: 'Exchanging phone numbers and ages at a language course.', sceneFr: 'On échange numéros de téléphone et âges à un cours de langue.',
      goals: ['Count from 0 to 20', 'Say your age with "Ich bin … Jahre alt"', 'Give a phone number and an email address', 'Use "haben" and answer yes/no questions'],
      goalsFr: ['Compter de 0 à 20', 'Dire ton âge avec « Ich bin … Jahre alt »', 'Donner un numéro de téléphone et une adresse e-mail', 'Utiliser « haben » et répondre à des questions fermées'] },

    { kind: 'vocab', item: { id: 'l4-zahl', german: 'die Zahl', english: 'the number', french: 'le nombre', gender: 'die', syllables: ['ZAHL'], pronunciation: 'dee TSAHL', example: { de: 'Zwölf ist eine Zahl.', en: 'Twelve is a number.', fr: 'Douze est un nombre.' } } },
    { kind: 'vocab', item: { id: 'l4-zaehlen', german: 'zählen', english: 'to count', french: 'compter', gender: null, syllables: ['ZÄH', 'len'], pronunciation: 'TSAY-len', example: { de: 'Wir zählen von null bis zwanzig.', en: 'We count from zero to twenty.', fr: 'Nous comptons de zéro à vingt.' } } },
    { kind: 'vocab', item: { id: 'l4-alter', german: 'das Alter', english: 'the age', french: 'l’âge', gender: 'das', syllables: ['AL', 'ter'], pronunciation: 'dahs AHL-ter', example: { de: 'Mein Alter? Ich bin 25.', en: 'My age? I am 25.', fr: 'Mon âge ? J’ai 25 ans.' } } },
    { kind: 'vocab', item: { id: 'l4-jahr', german: 'das Jahr', english: 'the year', french: 'l’année / an', gender: 'das', syllables: ['JAHR'], pronunciation: 'dahs YAAR', example: { de: 'Ich bin zwanzig Jahre alt.', en: 'I am twenty years old.', fr: 'J’ai vingt ans.' } } },
    { kind: 'vocab', item: { id: 'l4-nummer', german: 'die Nummer', english: 'the number', french: 'le numéro', gender: 'die', syllables: ['NUM', 'mer'], pronunciation: 'dee NOO-mer', example: { de: 'Wie ist deine Nummer?', en: 'What is your number?', fr: 'Quel est ton numéro ?' } } },
    { kind: 'vocab', item: { id: 'l4-telefonnummer', german: 'die Telefonnummer', english: 'the phone number', french: 'le numéro de téléphone', gender: 'die', syllables: ['te', 'le', 'FON', 'num', 'mer'], pronunciation: 'te-le-FOHN-noo-mer', example: { de: 'Meine Telefonnummer ist 0176…', en: 'My phone number is 0176…', fr: 'Mon numéro de téléphone est 0176…' } } },
    { kind: 'vocab', item: { id: 'l4-email', german: 'die E-Mail-Adresse', english: 'the email address', french: 'l’adresse e-mail', gender: 'die', syllables: ['E', 'mail', 'a', 'DRES', 'se'], pronunciation: 'EE-mayl-ah-DRESS-uh', example: { de: 'Meine E-Mail-Adresse ist anna@mail.de.', en: 'My email address is anna@mail.de.', fr: 'Mon adresse e-mail est anna@mail.de.' } } },
    { kind: 'vocab', item: { id: 'l4-haben', german: 'haben', english: 'to have', french: 'avoir', gender: null, syllables: ['HA', 'ben'], pronunciation: 'HAH-ben', example: { de: 'Ich habe eine Frage.', en: 'I have a question.', fr: 'J’ai une question.' } } },
    { kind: 'vocab', item: { id: 'l4-alt', german: 'alt', english: 'old', french: 'âgé / vieux', gender: null, syllables: ['ALT'], pronunciation: 'ahlt', example: { de: 'Wie alt bist du?', en: 'How old are you?', fr: 'Quel âge as-tu ?' } } },
    { kind: 'vocab', item: { id: 'l4-jahre-alt', german: 'Jahre alt', english: 'years old', french: 'ans (âge)', gender: null, syllables: ['JAH', 're', 'ALT'], pronunciation: 'YAA-ruh ahlt', example: { de: 'Sie ist dreißig Jahre alt.', en: 'She is thirty years old.', fr: 'Elle a trente ans.' } } },

    { kind: 'grammar', note: {
      id: 'l4-zahlen', title: 'The numbers 0–20', titleFr: 'Les nombres 0–20',
      explanationMd: 'German numbers to twenty:\n\n- 0 null · 1 eins · 2 zwei · 3 drei · 4 vier · 5 fünf\n- 6 sechs · 7 sieben · 8 acht · 9 neun · 10 zehn\n- 11 elf · 12 zwölf · 13 dreizehn · 14 vierzehn · 15 fünfzehn\n- 16 sechzehn · 17 siebzehn · 18 achtzehn · 19 neunzehn · 20 zwanzig\n\nFrom 13 to 19 you add **-zehn** (like English "-teen"). Watch out: **sechzehn** and **siebzehn** are shortened.',
      explanationMdFr: 'Les nombres allemands jusqu’à vingt :\n\n- 0 null · 1 eins · 2 zwei · 3 drei · 4 vier · 5 fünf\n- 6 sechs · 7 sieben · 8 acht · 9 neun · 10 zehn\n- 11 elf · 12 zwölf · 13 dreizehn · 14 vierzehn · 15 fünfzehn\n- 16 sechzehn · 17 siebzehn · 18 achtzehn · 19 neunzehn · 20 zwanzig\n\nDe 13 à 19, on ajoute **-zehn** (comme « -teen »). Attention : **sechzehn** et **siebzehn** sont raccourcis.',
      examples: [
        { de: 'drei, vier, fünf', en: 'three, four, five', fr: 'trois, quatre, cinq' },
        { de: 'Ich bin achtzehn Jahre alt.', en: 'I am eighteen years old.', fr: 'J’ai dix-huit ans.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l4-haben-note', title: 'The verb "haben" (to have)', titleFr: 'Le verbe « haben » (avoir)',
      explanationMd: '**haben** is irregular in the singular:\n\n- ich **habe** — I have\n- du **hast** — you have (informal)\n- er/sie/es **hat** — he/she/it has',
      explanationMdFr: '**haben** est irrégulier au singulier :\n\n- ich **habe** — j’ai\n- du **hast** — tu as (informel)\n- er/sie/es **hat** — il/elle/on a',
      examples: [
        { de: 'Ich habe eine E-Mail-Adresse.', en: 'I have an email address.', fr: 'J’ai une adresse e-mail.' },
        { de: 'Hast du eine Telefonnummer?', en: 'Do you have a phone number?', fr: 'As-tu un numéro de téléphone ?' },
        { de: 'Er hat zwei Kinder.', en: 'He has two children.', fr: 'Il a deux enfants.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l4-jano-fragen', title: 'Yes/No questions', titleFr: 'Les questions fermées (oui/non)',
      explanationMd: 'To ask a yes/no question, put the **verb first**, then the subject:\n\n- **Bist** du Student? — Are you a student?\n- **Hast** du Kinder? — Do you have children?\n\nAnswer with **Ja** (yes) or **Nein** (no).',
      explanationMdFr: 'Pour poser une question fermée, mets le **verbe en premier**, puis le sujet :\n\n- **Bist** du Student ? — Es-tu étudiant ?\n- **Hast** du Kinder ? — As-tu des enfants ?\n\nRéponds par **Ja** (oui) ou **Nein** (non).',
      examples: [
        { de: 'Bist du zwanzig Jahre alt? – Ja.', en: 'Are you twenty years old? – Yes.', fr: 'As-tu vingt ans ? – Oui.' },
        { de: 'Hast du eine Frage? – Nein.', en: 'Do you have a question? – No.', fr: 'As-tu une question ? – Non.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l4-e1', prompt: 'Ich ___ eine Frage. (haben)', answer: 'habe', hint: 'first person singular of haben', hintFr: 'première personne du singulier de haben' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l4-e2', prompt: 'Which number is "zwölf"?', promptFr: 'Quel nombre est « zwölf » ?', options: ['2', '12', '20'], answer: 1, explain: '"zwölf" is 12.', explainFr: '« zwölf » est 12.', hint: 'It sounds close to "twelve".', hintFr: 'Ça ressemble à « twelve » (douze).' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l4-e3', tokens: ['du', 'Hast', 'Kinder'], answer: ['Hast', 'du', 'Kinder'], hint: 'Yes/No question — the verb comes first.', hintFr: 'Question fermée — le verbe vient en premier.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l4-e4', pairs: [ { de: 'drei', en: 'three', fr: 'trois' }, { de: 'sieben', en: 'seven', fr: 'sept' }, { de: 'zwanzig', en: 'twenty', fr: 'vingt' } ], hint: 'Match each German number word to its value.', hintFr: 'Associe chaque nombre allemand à sa valeur.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l4-e5', prompt: 'Listen. How old is Anna?', promptFr: 'Écoute. Quel âge a Anna ?', audio: { ttsText: 'Hallo, ich bin Anna. Ich bin neunzehn Jahre alt.' }, options: ['16', '19', '20'], answer: 1, hint: 'Listen for the number right before "Jahre alt".', hintFr: 'Écoute le nombre juste avant « Jahre alt ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l4-e6', prompt: 'Wie ___ bist du? (old)', answer: 'alt', hint: 'the adjective meaning "old"', hintFr: 'l’adjectif qui signifie « vieux / âgé »' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l4-e7', word: 'Telefonnummer', answer: 'die', hint: 'Most German nouns ending in -er here are feminine; "Nummer" is die.', hintFr: 'Ici « Nummer » est féminin : die.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l4-e8', prompt: 'How do you say "I am 20 years old"?', promptFr: 'Comment dit-on « J’ai 20 ans » ?', options: ['Ich habe zwanzig Jahre.', 'Ich bin zwanzig Jahre alt.', 'Ich bin zwanzig Alter.'], answer: 1, explain: 'German uses "sein" for age: Ich bin … Jahre alt.', explainFr: 'L’allemand utilise « sein » pour l’âge : Ich bin … Jahre alt.', hint: 'German says you "are" a number of years old, not that you "have" years.', hintFr: 'En allemand on « est » âgé de X ans, on n’« a » pas X ans.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l4-e9', prompt: 'Du ___ eine E-Mail-Adresse. (haben)', answer: 'hast', hint: 'second person singular of haben', hintFr: 'deuxième personne du singulier de haben' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l4-e10', tokens: ['zwanzig', 'bin', 'Jahre', 'alt', 'Ich'], answer: ['Ich', 'bin', 'zwanzig', 'Jahre', 'alt'], hint: 'Statement: subject, verb, then the age.', hintFr: 'Affirmation : sujet, verbe, puis l’âge.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l4-e11', prompt: 'Listen. What is Tom’s phone number ending?', promptFr: 'Écoute. Par quels chiffres finit le numéro de Tom ?', audio: { ttsText: 'Meine Telefonnummer endet auf sieben, vier, drei.' }, options: ['7, 4, 3', '3, 4, 7', '7, 3, 4'], answer: 0, hint: 'Note the order: sieben, vier, drei.', hintFr: 'Note l’ordre : sieben, vier, drei.' } },

    { kind: 'pronunciation', focus: 'The "z" is pronounced "ts" (zwei, zwölf) and "ü" is rounded (fünf, zwölf)', focusFr: 'Le « z » se prononce « ts » (zwei, zwölf) et le « ü » est arrondi (fünf, zwölf)', items: [
      { id: 'l4-zwei-pron', german: 'zwei', english: 'two', french: 'deux', gender: null, syllables: ['ZWEI'], pronunciation: 'tsvai', example: { de: 'Ich habe zwei Kinder.', en: 'I have two children.', fr: 'J’ai deux enfants.' } },
      { id: 'l4-fuenf-pron', german: 'fünf', english: 'five', french: 'cinq', gender: null, syllables: ['FÜNF'], pronunciation: 'fuenf', example: { de: 'Fünf plus zwei ist sieben.', en: 'Five plus two is seven.', fr: 'Cinq plus deux font sept.' } },
      { id: 'l4-zwoelf-pron', german: 'zwölf', english: 'twelve', french: 'douze', gender: null, syllables: ['ZWÖLF'], pronunciation: 'tsvoelf', example: { de: 'Es ist zwölf Uhr.', en: 'It is twelve o’clock.', fr: 'Il est midi.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now count from 0 to 20, say your age with **Ich bin … Jahre alt**, give your phone number and email, and use **haben** to ask and answer yes/no questions. 🎉',
      summaryFr: 'Tu sais maintenant compter de 0 à 20, dire ton âge avec **Ich bin … Jahre alt**, donner ton numéro de téléphone et ton e-mail, et utiliser **haben** pour poser des questions fermées et y répondre. 🎉' },
  ],
};
