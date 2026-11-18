import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion4: Lesson = {
  id: 'l4', level: 'A1', module: 1, number: 4,
  title: { de: 'Zahlen und Alter', en: 'Numbers and age', fr: 'Les nombres et l’âge' },
  theme: 'Numbers 0–20, age, and contact details', themeFr: 'Les nombres 0–20, l’âge et les coordonnées',
  goals: ['Count from 0 to 20', 'Say how old you are', 'Give your phone number and email', 'Use the verb "haben" and ask yes/no questions'], goalsFr: ['Compter de 0 à 20', 'Dire ton âge', 'Donner ton numéro de téléphone et ton e-mail', 'Utiliser le verbe « haben » et poser des questions fermées'],
  canDo: g('Ich kann bis zwanzig zählen, mein Alter und meine Kontaktdaten nennen und Ja/Nein-Fragen stellen.', 'I can count to twenty, give my age and contact details, and ask yes/no questions.', 'Je sais compter jusqu’à vingt, donner mon âge et mes coordonnées, et poser des questions fermées.'),
  steps: [
    { kind: 'intro', title: 'Zahlen und Kontakt 📞', titleFr: 'Nombres et contact 📞',
      scene: 'At the course desk, people swap phone numbers and e-mail addresses.', sceneFr: 'À l’accueil du cours, on échange numéros de téléphone et adresses e-mail.',
      goals: ['Count from 0 to 20', 'Say your age', 'Give your phone number and e-mail address', 'Use haben and ask yes/no questions'],
      goalsFr: ['Compter de 0 à 20', 'Dire ton âge', 'Donner ton numéro de téléphone et ton adresse e-mail', 'Utiliser haben et poser des questions fermées'] },

    // ───────────── 1 · Numbers 0 to 20 ─────────────
    { kind: 'chapter', title: 'Zahlen von 0 bis 20', titleFr: 'Les nombres de 0 à 20', blurb: 'Count, and read out a phone number.', blurbFr: 'Compter, et dire un numéro de téléphone.' },

    { kind: 'situation', title: 'Bei der Anmeldung', titleFr: 'À l’inscription',
      setting: 'Nicole and Ben swap phone numbers on the first day of the course.', settingFr: 'Nicole et Ben échangent leurs numéros de téléphone le premier jour du cours.',
      lines: [
        line('Nicole', 'Wie ist deine Telefonnummer, Ben?', 'What is your phone number, Ben?', 'Quel est ton numéro de téléphone, Ben ?'),
        line('Ben', 'Null eins sechs zwei, drei vier fünf, sieben acht.', 'Zero one six two, three four five, seven eight.', 'Zéro un six deux, trois quatre cinq, sept huit.'),
        line('Nicole', 'Null eins sechs zwei, drei vier fünf, sieben acht. Richtig?', 'Zero one six two, three four five, seven eight. Right?', 'Zéro un six deux, trois quatre cinq, sept huit. C’est bien ça ?'),
        line('Ben', 'Ja, richtig! Und deine Nummer?', 'Yes, right! And your number?', 'Oui, c’est ça ! Et ton numéro ?'),
        line('Nicole', 'Meine Nummer ist null eins sieben vier, eins zwei drei, vier fünf.', 'My number is zero one seven four, one two three, four five.', 'Mon numéro est zéro un sept quatre, un deux trois, quatre cinq.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l4-e12', prompt: 'How does Ben’s phone number start?', promptFr: 'Comment commence le numéro de téléphone de Ben ?', options: ['0162', '0171', '0174'], answer: 0, explain: 'Ben says: “Null eins sechs zwei …”', explainFr: 'Ben dit : « Null eins sechs zwei … »', hint: 'Listen for the first four digits Ben says.', hintFr: 'Retiens les quatre premiers chiffres que dit Ben.' } },

    { kind: 'wordgroup', title: 'Zahlen und Nummern', titleFr: 'Nombres et numéros',
      note: 'Two words for “number”: die Zahl is the quantity, die Nummer is the label (phone, house).', noteFr: 'Deux mots pour « nombre » : die Zahl est la quantité, die Nummer est l’étiquette (téléphone, maison).',
      items: [{ id: 'l4-zahl', german: 'die Zahl', english: 'the number', french: 'le nombre', gender: 'die', syllables: ['ZAHL'], pronunciation: 'dee TSAHL', example: { de: 'Zwölf ist eine Zahl.', en: 'Twelve is a number.', fr: 'Douze est un nombre.' } }, { id: 'l4-zaehlen', german: 'zählen', english: 'to count', french: 'compter', gender: null, syllables: ['ZÄH', 'len'], pronunciation: 'TSAY-len', example: { de: 'Wir zählen von null bis zwanzig.', en: 'We count from zero to twenty.', fr: 'Nous comptons de zéro à vingt.' } }, { id: 'l4-nummer', german: 'die Nummer', english: 'the number', french: 'le numéro', gender: 'die', syllables: ['NUM', 'mer'], pronunciation: 'dee NOO-mer', example: { de: 'Wie ist deine Nummer?', en: 'What is your number?', fr: 'Quel est ton numéro ?' } }, { id: 'l4-telefonnummer', german: 'die Telefonnummer', english: 'the phone number', french: 'le numéro de téléphone', gender: 'die', syllables: ['te', 'le', 'FON', 'num', 'mer'], pronunciation: 'te-le-FOHN-noo-mer', example: { de: 'Meine Telefonnummer ist 0176…', en: 'My phone number is 0176…', fr: 'Mon numéro de téléphone est 0176…' } }] },

    { kind: 'grammar', note: {
      id: 'l4-zahlen', title: 'The numbers 0 to 20', titleFr: 'Les nombres de 0 à 20',
      lead: 'From 13 to 19 add -zehn. Careful: sechzehn and siebzehn lose letters.',
      leadFr: 'De 13 à 19, ajoute -zehn. Attention : sechzehn et siebzehn perdent des lettres.',
      explanationMd: 'Learn **0 to 12** by heart. From **13 to 19** add **-zehn** to the unit (like English “-teen”): drei**zehn**, vier**zehn**. Two are shortened: **sechzehn** (not “sechszehn”) and **siebzehn** (not “siebenzehn”).\n\nOn the phone, Germans read a number **digit by digit** (**null** = 0). When you **count**, one is **eins**, but before a noun it is **ein**: **ein** Kind.',
      explanationMdFr: 'Apprends **0 à 12** par cœur. De **13 à 19**, ajoute **-zehn** à l’unité (comme « -teen » en anglais) : drei**zehn**, vier**zehn**. Deux sont raccourcis : **sechzehn** (pas « sechszehn ») et **siebzehn** (pas « siebenzehn »).\n\nAu téléphone, on lit un numéro **chiffre par chiffre** (**null** = 0). En **comptant**, un se dit **eins**, mais devant un nom il devient **ein** : **ein** Kind.',
      tables: [
        { title: '0 – 6', titleFr: '0 – 6', headers: ['0', '1', '2', '3', '4', '5', '6'], headersFr: ['0', '1', '2', '3', '4', '5', '6'], rows: [['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs']], rowsFr: [['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs']] },
        { title: '7 – 12', titleFr: '7 – 12', headers: ['7', '8', '9', '10', '11', '12'], headersFr: ['7', '8', '9', '10', '11', '12'], rows: [['sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf']], rowsFr: [['sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf']] },
        { title: '13 – 20', titleFr: '13 – 20', headers: ['13', '14', '15', '16', '17', '18', '19', '20'], headersFr: ['13', '14', '15', '16', '17', '18', '19', '20'], rows: [['dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn', 'zwanzig']], rowsFr: [['dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn', 'zwanzig']], highlightCol: 3 },
      ],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'achtzehn', role: 'other' }, { text: 'Jahre alt.', role: 'other' }], en: 'I am eighteen years old.', fr: 'J’ai dix-huit ans.' },
        { parts: [{ text: 'Meine Nummer', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'null eins sechs zwei.', role: 'other' }], en: 'My number is zero one six two.', fr: 'Mon numéro est zéro un six deux.' },
      ],
      contrast: {
        a: { label: 'eins / ein', labelFr: 'eins / ein', note: 'counting: eins; before a noun: ein', noteFr: 'en comptant : eins ; devant un nom : ein', examples: [g('eins, zwei, drei', 'one, two, three', 'un, deux, trois'), g('ein Kind, zwei Kinder', 'one child, two children', 'un enfant, deux enfants')] },
        b: { label: 'sechzehn / siebzehn', labelFr: 'sechzehn / siebzehn', note: 'shortened: sechs → sech-, sieben → sieb-', noteFr: 'raccourcis : sechs → sech-, sieben → sieb-', examples: [g('sechzehn = 16', 'sixteen', 'seize'), g('siebzehn = 17', 'seventeen', 'dix-sept')] },
      },
      examples: [
        g('Wir zählen von null bis zwanzig.', 'We count from zero to twenty.', 'Nous comptons de zéro à vingt.'),
        g('Drei, vier, fünf.', 'Three, four, five.', 'Trois, quatre, cinq.'),
        g('Fünf plus zwei ist sieben.', 'Five plus two is seven.', 'Cinq plus deux font sept.'),
        g('Zwölf ist eine Zahl.', 'Twelve is a number.', 'Douze est un nombre.'),
        g('Ich bin achtzehn Jahre alt.', 'I am eighteen years old.', 'J’ai dix-huit ans.'),
        g('Es ist zwölf Uhr.', 'It is twelve o’clock.', 'Il est midi.'),
        g('Meine Nummer ist null eins sieben vier.', 'My number is zero one seven four.', 'Mon numéro est zéro un sept quatre.'),
      ],
      mistakes: [
        { wrong: 'Ich bin sechszehn Jahre alt.', right: 'Ich bin sechzehn Jahre alt.', why: 'sechs loses its s in sechzehn.', whyFr: 'sechs perd son s dans sechzehn.' },
        { wrong: 'Ich bin siebenzehn Jahre alt.', right: 'Ich bin siebzehn Jahre alt.', why: 'sieben loses -en in siebzehn.', whyFr: 'sieben perd -en dans siebzehn.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l4-e2', prompt: 'Which number is "zwölf"?', promptFr: 'Quel nombre est « zwölf » ?', options: ['2', '12', '20'], answer: 1, explain: '"zwölf" is 12.', explainFr: '« zwölf » est 12.', hint: 'It sounds close to "twelve".', hintFr: 'Ça ressemble à « twelve » (douze).' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l4-e4', pairs: [{ de: 'drei', en: 'three', fr: 'trois' }, { de: 'sieben', en: 'seven', fr: 'sept' }, { de: 'zwanzig', en: 'twenty', fr: 'vingt' }], hint: 'Match each German number word to its value.', hintFr: 'Associe chaque nombre allemand à sa valeur.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l4-e7', word: 'Telefonnummer', answer: 'die', hint: 'Most German nouns ending in -er here are feminine; "Nummer" is die.', hintFr: 'Ici « Nummer » est féminin : die.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l4-e11', prompt: 'Listen. What is Tom’s phone number ending?', promptFr: 'Écoute. Par quels chiffres finit le numéro de Tom ?', audio: { ttsText: 'Meine Telefonnummer endet auf sieben, vier, drei.' }, options: ['7, 4, 3', '3, 4, 7', '7, 3, 4'], answer: 0, hint: 'Note the order: sieben, vier, drei.', hintFr: 'Note l’ordre : sieben, vier, drei.' } },

    // ───────────── 2 · Age and contact details ─────────────
    { kind: 'chapter', title: 'Alter und Kontakt', titleFr: 'Âge et coordonnées', blurb: 'How old are you? And your e-mail address?', blurbFr: 'Quel âge as-tu ? Et ton adresse e-mail ?' },

    { kind: 'situation', title: 'Wie alt bist du?', titleFr: 'Quel âge as-tu ?',
      setting: 'Frau Roth fills in a form with Ben.', settingFr: 'Mme Roth remplit un formulaire avec Ben.',
      lines: [
        line('Frau Roth', 'Wie alt bist du, Ben?', 'How old are you, Ben?', 'Quel âge as-tu, Ben ?'),
        line('Ben', 'Ich bin zwanzig Jahre alt.', 'I am twenty years old.', 'J’ai vingt ans.'),
        line('Frau Roth', 'Und wie ist deine E-Mail-Adresse?', 'And what is your e-mail address?', 'Et quelle est ton adresse e-mail ?'),
        line('Ben', 'Ben Punkt Weber at mail Punkt de.', 'ben.weber@mail.de', 'ben.weber@mail.de'),
        line('Frau Roth', 'Danke, Ben!', 'Thank you, Ben!', 'Merci, Ben !'),
      ],
      words: [{ id: 'l4-alter', german: 'das Alter', english: 'the age', french: 'l’âge', gender: 'das', syllables: ['AL', 'ter'], pronunciation: 'dahs AHL-ter', example: { de: 'Mein Alter? Ich bin 25.', en: 'My age? I am 25.', fr: 'Mon âge ? J’ai 25 ans.' } }, { id: 'l4-jahr', german: 'das Jahr', english: 'the year', french: 'l’année / an', gender: 'das', syllables: ['JAHR'], pronunciation: 'dahs YAAR', example: { de: 'Ich bin zwanzig Jahre alt.', en: 'I am twenty years old.', fr: 'J’ai vingt ans.' } }, { id: 'l4-alt', german: 'alt', english: 'old', french: 'âgé / vieux', gender: null, syllables: ['ALT'], pronunciation: 'ahlt', example: { de: 'Wie alt bist du?', en: 'How old are you?', fr: 'Quel âge as-tu ?' } }, { id: 'l4-jahre-alt', german: 'Jahre alt', english: 'years old', french: 'ans (âge)', gender: null, syllables: ['JAH', 're', 'ALT'], pronunciation: 'YAA-ruh ahlt', example: { de: 'Sie ist dreißig Jahre alt.', en: 'She is thirty years old.', fr: 'Elle a trente ans.' } }, { id: 'l4-email', german: 'die E-Mail-Adresse', english: 'the email address', french: 'l’adresse e-mail', gender: 'die', syllables: ['E', 'mail', 'a', 'DRES', 'se'], pronunciation: 'EE-mayl-ah-DRESS-uh', example: { de: 'Meine E-Mail-Adresse ist anna@mail.de.', en: 'My email address is anna@mail.de.', fr: 'Mon adresse e-mail est anna@mail.de.' } }] },

    { kind: 'grammar', note: {
      id: 'l4-alter-kontakt', title: 'Age and contact details', titleFr: 'Âge et coordonnées',
      lead: 'Age uses sein, not haben. For a phone number or e-mail address, say each part aloud.',
      leadFr: 'L’âge se dit avec sein, pas haben. Pour un numéro ou une adresse e-mail, dis chaque partie à voix haute.',
      explanationMd: 'To give your age use **sein** + number + **Jahre alt**: **Ich bin zwanzig Jahre alt.** Ask with **Wie alt bist du?** (in a conversation you may leave out “Jahre alt”: **Ich bin zwanzig.**).\n\nWhen you read an e-mail address aloud, say **@** as **at** and the dot as **Punkt**.',
      explanationMdFr: 'Pour dire ton âge, utilise **sein** + nombre + **Jahre alt** : **Ich bin zwanzig Jahre alt.** Demande avec **Wie alt bist du ?** (dans une conversation, tu peux omettre « Jahre alt » : **Ich bin zwanzig.**).\n\nEn lisant une adresse e-mail à voix haute, dis **@** comme **at** et le point comme **Punkt**.',
      tables: [
        { title: 'Question and answer', titleFr: 'Question et réponse', headers: ['Question', 'Answer'], headersFr: ['Question', 'Réponse'],
          rows: [['Wie alt bist du?', 'Ich bin zwanzig Jahre alt.'], ['Wie ist deine Telefonnummer?', 'Meine Nummer ist null eins sechs zwei …'], ['Wie ist deine E-Mail-Adresse?', 'Ben Punkt Weber at mail Punkt de.']],
          rowsFr: [['Wie alt bist du?', 'Ich bin zwanzig Jahre alt.'], ['Wie ist deine Telefonnummer?', 'Meine Nummer ist null eins sechs zwei …'], ['Wie ist deine E-Mail-Adresse?', 'Ben Punkt Weber at mail Punkt de.']], highlightCol: 1 },
        { title: 'Say the symbols', titleFr: 'Dire les symboles', headers: ['Symbol', 'You say'], headersFr: ['Symbole', 'On dit'],
          rows: [['@', 'at'], ['.', 'Punkt'], ['-', 'Bindestrich'], ['_', 'Unterstrich']], rowsFr: [['@', 'at'], ['.', 'Punkt'], ['-', 'Bindestrich'], ['_', 'Unterstrich']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Wie alt', role: 'other' }, { text: 'bist', role: 'verb' }, { text: 'du?', role: 'subject' }], en: 'How old are you?', fr: 'Quel âge as-tu ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'zwanzig', role: 'other' }, { text: 'Jahre alt.', role: 'other' }], en: 'I am twenty years old.', fr: 'J’ai vingt ans.' },
      ],
      contrast: {
        a: { label: 'Age: sein', labelFr: 'Âge : sein', note: 'German says “I am 20”', noteFr: 'L’allemand dit « je suis 20 »', examples: [g('Ich bin zwanzig Jahre alt.', 'I am twenty years old.', 'J’ai vingt ans.'), g('Sie ist dreißig Jahre alt.', 'She is thirty years old.', 'Elle a trente ans.')] },
        b: { label: 'Numbers and addresses', labelFr: 'Numéros et adresses', note: 'read each digit or part aloud', noteFr: 'lis chaque chiffre ou partie à voix haute', examples: [g('Meine Nummer ist null eins sechs zwei.', 'My number is zero one six two.', 'Mon numéro est zéro un six deux.'), g('Meine E-Mail-Adresse ist anna Punkt meier at mail Punkt de.', 'My e-mail address is anna.meier@mail.de.', 'Mon adresse e-mail est anna.meier@mail.de.')] },
      },
      examples: [
        g('Wie alt bist du?', 'How old are you?', 'Quel âge as-tu ?'),
        g('Ich bin zwanzig Jahre alt.', 'I am twenty years old.', 'J’ai vingt ans.'),
        g('Sie ist dreißig Jahre alt.', 'She is thirty years old.', 'Elle a trente ans.'),
        g('Mein Alter? Ich bin fünfundzwanzig.', 'My age? I am twenty-five.', 'Mon âge ? J’ai vingt-cinq ans.'),
        g('Wie ist deine Nummer?', 'What is your number?', 'Quel est ton numéro ?'),
        g('Meine Telefonnummer ist null eins sieben sechs.', 'My phone number is zero one seven six.', 'Mon numéro de téléphone est zéro un sept six.'),
        g('Meine E-Mail-Adresse ist anna Punkt meier at mail Punkt de.', 'My e-mail address is anna.meier@mail.de.', 'Mon adresse e-mail est anna.meier@mail.de.'),
      ],
      mistakes: [
        { wrong: 'Ich habe zwanzig Jahre.', right: 'Ich bin zwanzig Jahre alt.', why: 'German uses sein for age, not haben.', whyFr: 'En allemand on utilise sein pour l’âge, pas haben (avoir).' },
        { wrong: 'Wie alt hast du?', right: 'Wie alt bist du?', why: 'Ask the age with sein.', whyFr: 'Demande l’âge avec sein.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l4-e6', prompt: 'Wie ___ bist du? (old)', answer: 'alt', hint: 'the adjective meaning "old"', hintFr: 'l’adjectif qui signifie « vieux / âgé »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l4-e8', prompt: 'How do you say "I am 20 years old"?', promptFr: 'Comment dit-on « J’ai 20 ans » ?', options: ['Ich habe zwanzig Jahre.', 'Ich bin zwanzig Jahre alt.', 'Ich bin zwanzig Alter.'], answer: 1, explain: 'German uses "sein" for age: Ich bin … Jahre alt.', explainFr: 'L’allemand utilise « sein » pour l’âge : Ich bin … Jahre alt.', hint: 'German says you "are" a number of years old, not that you "have" years.', hintFr: 'En allemand on « est » âgé de X ans, on n’« a » pas X ans.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l4-e10', tokens: ['zwanzig', 'bin', 'Jahre', 'alt', 'Ich'], answer: ['Ich', 'bin', 'zwanzig', 'Jahre', 'alt'], hint: 'Statement: subject, verb, then the age.', hintFr: 'Affirmation : sujet, verbe, puis l’âge.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l4-e5', prompt: 'Listen. How old is Anna?', promptFr: 'Écoute. Quel âge a Anna ?', audio: { ttsText: 'Hallo, ich bin Anna. Ich bin neunzehn Jahre alt.' }, options: ['16', '19', '20'], answer: 1, hint: 'Listen for the number right before "Jahre alt".', hintFr: 'Écoute le nombre juste avant « Jahre alt ».' } },

    // ───────────── 3 · haben and questions ─────────────
    { kind: 'chapter', title: 'haben und Fragen', titleFr: 'haben et les questions', blurb: 'To have, and questions you answer with yes or no.', blurbFr: 'Avoir, et les questions auxquelles on répond par oui ou non.' },

    { kind: 'situation', title: 'Im Kurs', titleFr: 'Au cours',
      setting: 'Frau Roth asks the class about e-mail addresses.', settingFr: 'Mme Roth interroge la classe sur les adresses e-mail.',
      lines: [
        line('Frau Roth', 'Habt ihr eine E-Mail-Adresse?', 'Do you have an e-mail address?', 'Avez-vous une adresse e-mail ?'),
        line('Nicole', 'Ja, ich habe eine E-Mail-Adresse. Und Ben hat zwei.', 'Yes, I have an e-mail address. And Ben has two.', 'Oui, j’ai une adresse e-mail. Et Ben en a deux.'),
        line('Ben', 'Ja, ich habe zwei E-Mail-Adressen und eine Telefonnummer.', 'Yes, I have two e-mail addresses and a phone number.', 'Oui, j’ai deux adresses e-mail et un numéro de téléphone.'),
        line('Frau Roth', 'Gut. Habt ihr Fragen?', 'Good. Do you have questions?', 'Bien. Avez-vous des questions ?'),
        line('Nicole', 'Nein, danke.', 'No, thank you.', 'Non, merci.'),
      ],
      words: [{ id: 'l4-haben', german: 'haben', english: 'to have', french: 'avoir', gender: null, syllables: ['HA', 'ben'], pronunciation: 'HAH-ben', example: { de: 'Ich habe eine Frage.', en: 'I have a question.', fr: 'J’ai une question.' } }] },

    { kind: 'grammar', note: {
      id: 'l4-haben', title: 'haben: to have', titleFr: 'haben : avoir',
      lead: 'haben is irregular in du and er/sie/es: du hast, er hat.',
      leadFr: 'haben est irrégulier à du et er/sie/es : du hast, er hat.',
      explanationMd: '**haben** (to have) is irregular in **du** (hast) and **er/sie/es** (hat). Use it for things, people and questions you have: **Ich habe eine Frage.** Do **not** use it for age (**sein**).',
      explanationMdFr: '**haben** (avoir) est irrégulier à **du** (hast) et **er/sie/es** (hat). Utilise-le pour les choses, les personnes et les questions que tu as : **Ich habe eine Frage.** Ne l’utilise **pas** pour l’âge (**sein**).',
      tables: [{ title: 'haben (to have)', titleFr: 'haben (avoir)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['habe', 'hast', 'hat', 'haben', 'habt', 'haben']], rowsFr: [['habe', 'hast', 'hat', 'haben', 'habt', 'haben']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'eine Frage.', role: 'accusative' }], en: 'I have a question.', fr: 'J’ai une question.' },
        { parts: [{ text: 'Hast', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'eine Telefonnummer?', role: 'accusative' }], en: 'Do you have a phone number?', fr: 'As-tu un numéro de téléphone ?' },
      ],
      contrast: {
        a: { label: 'haben', labelFr: 'haben', note: 'to have: things, people, questions', noteFr: 'avoir : choses, personnes, questions', examples: [g('Ich habe zwei Kinder.', 'I have two children.', 'J’ai deux enfants.'), g('Er hat eine E-Mail-Adresse.', 'He has an e-mail address.', 'Il a une adresse e-mail.')] },
        b: { label: 'sein', labelFr: 'sein', note: 'to be: age, state, who you are', noteFr: 'être : âge, état, qui tu es', examples: [g('Ich bin zwanzig Jahre alt.', 'I am twenty years old.', 'J’ai vingt ans.'), g('Er ist Student.', 'He is a student.', 'Il est étudiant.')] },
      },
      examples: [
        g('Ich habe eine Frage.', 'I have a question.', 'J’ai une question.'),
        g('Hast du eine Telefonnummer?', 'Do you have a phone number?', 'As-tu un numéro de téléphone ?'),
        g('Er hat zwei Kinder.', 'He has two children.', 'Il a deux enfants.'),
        g('Ich habe eine E-Mail-Adresse.', 'I have an e-mail address.', 'J’ai une adresse e-mail.'),
        g('Habt ihr Fragen?', 'Do you (pl.) have questions?', 'Avez-vous des questions ?'),
        g('Wir haben Zeit.', 'We have time.', 'Nous avons le temps.'),
        g('Sie haben zwei Kinder.', 'They have two children.', 'Ils ont deux enfants.'),
      ],
      mistakes: [
        { wrong: 'Du habst eine Frage.', right: 'Du hast eine Frage.', why: 'haben is irregular: du hast.', whyFr: 'haben est irrégulier : du hast.' },
        { wrong: 'Er habt zwei Kinder.', right: 'Er hat zwei Kinder.', why: 'er/sie/es takes hat; habt belongs to ihr.', whyFr: 'er/sie/es prend hat ; habt appartient à ihr.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l4-e1', prompt: 'Ich ___ eine Frage. (haben)', answer: 'habe', hint: 'first person singular of haben', hintFr: 'première personne du singulier de haben' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l4-e9', prompt: 'Du ___ eine E-Mail-Adresse. (haben)', answer: 'hast', hint: 'second person singular of haben', hintFr: 'deuxième personne du singulier de haben' } },

    { kind: 'grammar', note: {
      id: 'l4-ja-nein', title: 'Yes/no questions: verb first', titleFr: 'Questions fermées : verbe en premier',
      lead: 'No question word? Put the verb first and answer ja or nein.',
      leadFr: 'Pas de mot interrogatif ? Mets le verbe en premier et réponds ja ou nein.',
      explanationMd: 'A **yes/no question** has no question word. The **verb comes first**, then the subject: **Hast du** Kinder? **Bist du** Student? Answer with **Ja** or **Nein** and a short sentence.',
      explanationMdFr: 'Une **question fermée** n’a pas de mot interrogatif. Le **verbe vient en premier**, puis le sujet : **Hast du** Kinder ? **Bist du** Student ? Réponds par **Ja** ou **Nein** et une courte phrase.',
      tables: [{ title: 'Statement → question', titleFr: 'Affirmation → question', headers: ['Statement', 'Question'], headersFr: ['Affirmation', 'Question'],
        rows: [['Du hast Kinder.', 'Hast du Kinder?'], ['Du bist Student.', 'Bist du Student?'], ['Er hat eine Frage.', 'Hat er eine Frage?']],
        rowsFr: [['Du hast Kinder.', 'Hast du Kinder?'], ['Du bist Student.', 'Bist du Student?'], ['Er hat eine Frage.', 'Hat er eine Frage?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Hast', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'Kinder?', role: 'accusative' }], en: 'Do you have children?', fr: 'As-tu des enfants ?' },
        { parts: [{ text: 'Bist', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'zwanzig Jahre alt?', role: 'other' }], en: 'Are you twenty years old?', fr: 'As-tu vingt ans ?' },
      ],
      contrast: {
        a: { label: 'W-question', labelFr: 'Question en W', note: 'question word first, verb second', noteFr: 'mot interrogatif d’abord, verbe en deuxième', examples: [g('Wie alt bist du?', 'How old are you?', 'Quel âge as-tu ?'), g('Wie heißt du?', 'What is your name?', 'Comment tu t’appelles ?')] },
        b: { label: 'Yes/no question', labelFr: 'Question fermée', note: 'verb first', noteFr: 'verbe en premier', examples: [g('Bist du zwanzig Jahre alt?', 'Are you twenty?', 'As-tu vingt ans ?'), g('Hast du Kinder?', 'Do you have children?', 'As-tu des enfants ?')] },
      },
      examples: [
        g('Hast du Kinder?', 'Do you have children?', 'As-tu des enfants ?'),
        g('Bist du Student?', 'Are you a student?', 'Es-tu étudiant ?'),
        g('Bist du zwanzig Jahre alt? Ja.', 'Are you twenty years old? Yes.', 'As-tu vingt ans ? Oui.'),
        g('Hast du eine Frage? Nein.', 'Do you have a question? No.', 'As-tu une question ? Non.'),
        g('Hat er eine E-Mail-Adresse?', 'Does he have an e-mail address?', 'A-t-il une adresse e-mail ?'),
        g('Seid ihr Studenten?', 'Are you (pl.) students?', 'Êtes-vous étudiants ?'),
      ],
      mistakes: [
        { wrong: 'Hast Kinder du?', right: 'Hast du Kinder?', why: 'Verb first, then the subject.', whyFr: 'Verbe d’abord, puis le sujet.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l4-e3', tokens: ['du', 'Hast', 'Kinder'], answer: ['Hast', 'du', 'Kinder'], hint: 'Yes/No question — the verb comes first.', hintFr: 'Question fermée — le verbe vient en premier.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l4-e13', prompt: 'Which one is a yes/no question?', promptFr: 'Laquelle est une question fermée ?', options: ['Wo wohnst du?', 'Hast du Kinder?', 'Woher kommst du?'], answer: 1, explain: 'It has no question word and the verb comes first.', explainFr: 'Elle n’a pas de mot interrogatif et le verbe vient en premier.', hint: 'Look for the one that starts with a verb.', hintFr: 'Cherche celle qui commence par un verbe.' } },

    { kind: 'pronunciation', focus: 'The "z" is pronounced "ts" (zwei, zwölf) and "ü" is rounded (fünf, zwölf)', focusFr: 'Le « z » se prononce « ts » (zwei, zwölf) et le « ü » est arrondi (fünf, zwölf)', items: [{ id: 'l4-zwei-pron', german: 'zwei', english: 'two', french: 'deux', gender: null, syllables: ['ZWEI'], pronunciation: 'tsvai', example: { de: 'Ich habe zwei Kinder.', en: 'I have two children.', fr: 'J’ai deux enfants.' } }, { id: 'l4-fuenf-pron', german: 'fünf', english: 'five', french: 'cinq', gender: null, syllables: ['FÜNF'], pronunciation: 'fuenf', example: { de: 'Fünf plus zwei ist sieben.', en: 'Five plus two is seven.', fr: 'Cinq plus deux font sept.' } }, { id: 'l4-zwoelf-pron', german: 'zwölf', english: 'twelve', french: 'douze', gender: null, syllables: ['ZWÖLF'], pronunciation: 'tsvoelf', example: { de: 'Es ist zwölf Uhr.', en: 'It is twelve o’clock.', fr: 'Il est midi.' } }] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l4-e14', tokens: ['du', 'eine', 'Hast', 'E-Mail-Adresse'], answer: ['Hast', 'du', 'eine', 'E-Mail-Adresse'], hint: 'Yes/no question: verb first.', hintFr: 'Question fermée : verbe en premier.' } },

    { kind: 'wrapup',
      summary: 'You can now count to twenty, give your age with **sein**, say a phone number and an e-mail address, use **haben**, and ask yes/no questions with the verb first. 🎉',
      summaryFr: 'Tu sais maintenant compter jusqu’à vingt, dire ton âge avec **sein**, donner un numéro de téléphone et une adresse e-mail, utiliser **haben**, et poser des questions fermées avec le verbe en premier. 🎉',
      card: { title: 'Lesson 4 on one page', titleFr: 'La leçon 4 en une page', sections: [
        { heading: 'Numbers', headingFr: 'Les nombres', rows: [g('null, eins, zwei, drei … zwölf', '0 to 12', '0 à 12'), g('dreizehn … neunzehn, zwanzig', '13 to 20 (-zehn)', '13 à 20 (-zehn)'), g('sechzehn, siebzehn', 'shortened', 'raccourcis')] },
        { heading: 'Age', headingFr: 'L’âge', rows: [g('Wie alt bist du?', 'How old are you?', 'Quel âge as-tu ?'), g('Ich bin zwanzig Jahre alt.', 'I am twenty years old.', 'J’ai vingt ans.')] },
        { heading: 'Contact details', headingFr: 'Coordonnées', rows: [g('Wie ist deine Telefonnummer?', 'What is your phone number?', 'Quel est ton numéro de téléphone ?'), g('@ = at, . = Punkt', 'say the symbols', 'dire les symboles')] },
        { heading: 'haben and questions', headingFr: 'haben et questions', rows: [g('ich habe, du hast, er hat, wir haben, ihr habt, sie haben', 'to have', 'avoir'), g('Hast du Kinder?', 'Do you have children? (verb first)', 'As-tu des enfants ? (verbe en premier)')] },
      ] } },
  ],
};
