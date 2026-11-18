import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion19: Lesson = {
  id: 'l19', level: 'A1', module: 5, number: 23,
  title: { de: 'Datum, Ordnungszahlen und Wünsche', en: 'Dates, ordinals and wishes', fr: 'Dates, nombres ordinaux et souhaits' },
  theme: 'Saying dates, inviting people and expressing wishes', themeFr: 'Dire la date, inviter et exprimer des souhaits',
  goals: ['Count with ordinal numbers: der erste … der dreißigste', 'Say dates with "am" and name the months', 'Understand and write a party invitation', 'Express wishes with "ich würde gern / am liebsten …"', 'Congratulate people'], goalsFr: ['Compter avec les nombres ordinaux : der erste … der dreißigste', 'Dire la date avec « am » et nommer les mois', 'Comprendre et écrire une invitation', 'Exprimer des souhaits avec « ich würde gern / am liebsten … »', 'Féliciter quelqu’un'],
  canDo: g('Ich kann ein Datum nennen, zu einer Party einladen, Wünsche äußern und gratulieren.', 'I can say a date, invite people to a party, express wishes and congratulate.', 'Je sais dire une date, inviter à une fête, exprimer des souhaits et féliciter.'),
  steps: [
    { kind: 'intro', title: 'Datum, Feste und Wünsche 🎉', titleFr: 'Dates, fêtes et souhaits 🎉',
      scene: 'Friends plan a birthday party and talk about their wishes.', sceneFr: 'Des amis organisent une fête d’anniversaire et parlent de leurs souhaits.',
      goals: ['Count with ordinal numbers: der erste … der dreißigste', 'Say dates with am', 'Invite people and congratulate them', 'Express wishes with ich würde gern / am liebsten'],
      goalsFr: ['Compter avec les nombres ordinaux : der erste … der dreißigste', 'Dire les dates avec am', 'Inviter et féliciter', 'Exprimer des souhaits avec ich würde gern / am liebsten'] },

    // ───────────── 1 · Ordinal numbers ─────────────
    { kind: 'chapter', title: 'Ordnungszahlen', titleFr: 'Les nombres ordinaux', blurb: 'The first, the third, the thirtieth.', blurbFr: 'Le premier, le troisième, le trentième.' },

    { kind: 'situation', title: 'Wann ist die Party?', titleFr: 'Quand est la fête ?',
      setting: 'Lena and Tom plan Lena’s birthday party.', settingFr: 'Lena et Tom organisent la fête d’anniversaire de Lena.',
      lines: [
        line('Tom', 'Wann hast du Geburtstag, Lena?', 'When is your birthday, Lena?', 'Quand est ton anniversaire, Lena ?'),
        line('Lena', 'Am dritten Mai. Und wann ist die Party?', 'On the third of May. And when is the party?', 'Le trois mai. Et quand est la fête ?'),
        line('Tom', 'Die Party ist am fünften Mai, um acht Uhr.', 'The party is on the fifth of May, at eight o’clock.', 'La fête est le cinq mai, à huit heures.'),
        line('Lena', 'Super! Heute ist der siebte April, dann sind es noch vier Wochen.', 'Great! Today is the seventh of April, so it is four weeks away.', 'Super ! Aujourd’hui nous sommes le sept avril, il reste donc quatre semaines.'),
      ],
      words: [{ id: 'l19-datum', german: 'das Datum', english: 'the date', french: 'la date', gender: 'das', syllables: ['DA', 'tum'], pronunciation: 'dahs DAH-toom', example: { de: 'Welches Datum haben wir heute?', en: 'What is the date today?', fr: 'Quelle est la date aujourd’hui ?' } }, { id: 'l19-monat', german: 'der Monat', english: 'the month', french: 'le mois', gender: 'der', syllables: ['MO', 'nat'], pronunciation: 'dair MOH-naht', example: { de: 'Ein Jahr hat zwölf Monate.', en: 'A year has twelve months.', fr: 'Une année a douze mois.' } }, { id: 'l19-geburtstag', german: 'der Geburtstag', english: 'the birthday', french: 'l’anniversaire', gender: 'der', syllables: ['ge', 'BURTS', 'tag'], pronunciation: 'dair geh-BOORTS-tahk', example: { de: 'Heute ist mein Geburtstag!', en: 'Today is my birthday!', fr: 'Aujourd’hui, c’est mon anniversaire !' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l19-e13', prompt: 'When is the party?', promptFr: 'Quand est la fête ?', options: ['On the fifth of May', 'On the third of May', 'On the seventh of April'], optionsFr: ['Le cinq mai', 'Le trois mai', 'Le sept avril'], answer: 0, explain: 'Tom says: “Die Party ist am fünften Mai.”', explainFr: 'Tom dit : « Die Party ist am fünften Mai. »', hint: 'The birthday is on the 3rd, the party later.', hintFr: 'L’anniversaire est le 3, la fête plus tard.' } },

    { kind: 'wordgroup', title: 'Feste und Feiern', titleFr: 'Fêtes et célébrations',
      items: [{ id: 'l19-party', german: 'die Party', english: 'the party', french: 'la fête / la soirée', gender: 'die', syllables: ['PAR', 'ty'], pronunciation: 'dee PAR-tee', example: { de: 'Die Party beginnt um acht.', en: 'The party starts at eight.', fr: 'La fête commence à huit heures.' } }, { id: 'l19-hochzeit', german: 'die Hochzeit', english: 'the wedding', french: 'le mariage', gender: 'die', syllables: ['HOCH', 'zeit'], pronunciation: 'dee HOKH-tsite', example: { de: 'Die Hochzeit ist im Juni.', en: 'The wedding is in June.', fr: 'Le mariage a lieu en juin.' } }, { id: 'l19-geschenk', german: 'das Geschenk', english: 'the gift', french: 'le cadeau', gender: 'das', syllables: ['ge', 'SCHENK'], pronunciation: 'dahs geh-SHENK', example: { de: 'Das Geschenk ist für dich.', en: 'The gift is for you.', fr: 'Le cadeau est pour toi.' } }, { id: 'l19-kuchen', german: 'der Kuchen', english: 'the cake', french: 'le gâteau', gender: 'der', syllables: ['KU', 'chen'], pronunciation: 'dair KOO-khen', example: { de: 'Ich backe einen Kuchen.', en: 'I am baking a cake.', fr: 'Je fais un gâteau.' } }, { id: 'l19-feiern', german: 'feiern', english: 'to celebrate', french: 'fêter', gender: null, syllables: ['FEI', 'ern'], pronunciation: 'FY-ern', example: { de: 'Wir feiern im Garten.', en: 'We are celebrating in the garden.', fr: 'Nous fêtons ça dans le jardin.' } }, { id: 'l19-silvester', german: 'Silvester', english: 'New Year’s Eve', french: 'la Saint-Sylvestre', gender: null, syllables: ['sil', 'VES', 'ter'], pronunciation: 'zil-VES-ter', example: { de: 'An Silvester feiern wir mit Freunden.', en: 'On New Year’s Eve we celebrate with friends.', fr: 'Le 31 décembre, nous fêtons avec des amis.' } }] },

    { kind: 'grammar', note: {
      id: 'l19-ordnungszahlen', title: 'Ordinal numbers: der erste … der dreißigste', titleFr: 'Les nombres ordinaux : der erste … der dreißigste',
      lead: 'Up to 19 add -te. Four are irregular: erste, dritte, siebte, achte. From 20 add -ste.',
      leadFr: 'Jusqu’à 19, ajoute -te. Quatre sont irréguliers : erste, dritte, siebte, achte. À partir de 20, ajoute -ste.',
      explanationMd: 'Ordinals tell the **order** (“third”). In writing, a number plus a **dot**: **3.** = der dritte. **1 to 19** add **-te** (**vierte, fünfte, sechste …**). **Four are irregular**: **erste, dritte, siebte, achte**. **From 20** add **-ste**: **zwanzigste, dreißigste**. An ordinal is an **adjective**, so it takes an ending: **der dritte Mai**, **am dritten Mai**.',
      explanationMdFr: 'Les ordinaux disent l’**ordre** (« troisième »). À l’écrit, un nombre suivi d’un **point** : **3.** = der dritte. **De 1 à 19**, ajoute **-te** (**vierte, fünfte, sechste …**). **Quatre sont irréguliers** : **erste, dritte, siebte, achte**. **À partir de 20**, ajoute **-ste** : **zwanzigste, dreißigste**. Un ordinal est un **adjectif**, il prend donc une terminaison : **der dritte Mai**, **am dritten Mai**.',
      tables: [
        { title: 'The irregular four', titleFr: 'Les quatre irréguliers', headers: ['1.', '3.', '7.', '8.'], headersFr: ['1.', '3.', '7.', '8.'], rows: [['erste', 'dritte', 'siebte', 'achte']], rowsFr: [['erste', 'dritte', 'siebte', 'achte']] },
        { title: 'Regular ordinals', titleFr: 'Ordinaux réguliers', headers: ['Number', 'Ordinal', 'Rule'], headersFr: ['Nombre', 'Ordinal', 'Règle'],
          rows: [['2.', 'zweite', '+ -te'], ['5.', 'fünfte', '+ -te'], ['12.', 'zwölfte', '+ -te'], ['19.', 'neunzehnte', '+ -te'], ['20.', 'zwanzigste', '+ -ste'], ['30.', 'dreißigste', '+ -ste']],
          rowsFr: [['2.', 'zweite', '+ -te'], ['5.', 'fünfte', '+ -te'], ['12.', 'zwölfte', '+ -te'], ['19.', 'neunzehnte', '+ -te'], ['20.', 'zwanzigste', '+ -ste'], ['30.', 'dreißigste', '+ -ste']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Heute', role: 'time' }, { text: 'ist', role: 'verb' }, { text: 'der siebte', role: 'subject' }, { text: 'Juni.', role: 'other' }], en: 'Today is the seventh of June.', fr: 'Aujourd’hui nous sommes le sept juin.' },
        { parts: [{ text: 'Der erste Mai', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'ein Feiertag.', role: 'other' }], en: 'The first of May is a public holiday.', fr: 'Le premier mai est un jour férié.' },
      ],
      contrast: {
        a: { label: 'up to 19: -te', labelFr: 'jusqu’à 19 : -te', note: 'with four irregular forms', noteFr: 'avec quatre formes irrégulières', examples: [g('der zweite, der fünfte, der zwölfte', '2nd, 5th, 12th', '2e, 5e, 12e'), g('der erste, dritte, siebte, achte', '1st, 3rd, 7th, 8th (irregular)', '1er, 3e, 7e, 8e (irréguliers)')] },
        b: { label: 'from 20: -ste', labelFr: 'à partir de 20 : -ste', note: 'regular', noteFr: 'régulier', examples: [g('der zwanzigste', 'the 20th', 'le 20e'), g('der dreißigste', 'the 30th', 'le 30e')] },
      },
      examples: [
        g('Der erste Mai ist ein Feiertag.', 'The first of May is a public holiday.', 'Le premier mai est un jour férié.'),
        g('Heute ist der siebte Juni.', 'Today is the seventh of June.', 'Aujourd’hui nous sommes le sept juin.'),
        g('Der dreißigste April ist ein Montag.', 'The thirtieth of April is a Monday.', 'Le trente avril est un lundi.'),
        g('Der zwölfte Juli ist ein Samstag.', 'The twelfth of July is a Saturday.', 'Le douze juillet est un samedi.'),
        g('Der dritte Mai ist mein Geburtstag.', 'The third of May is my birthday.', 'Le trois mai est mon anniversaire.'),
        g('Welches Datum haben wir heute?', 'What is today’s date?', 'Quelle est la date aujourd’hui ?'),
      ],
      mistakes: [
        { wrong: 'Heute ist der dreite Juni.', right: 'Heute ist der dritte Juni.', why: 'dritte is irregular: dritte, not dreite.', whyFr: 'dritte est irrégulier : dritte, pas dreite.' },
        { wrong: 'Der zwanzigte Mai', right: 'Der zwanzigste Mai', why: 'From 20 the ending is -ste.', whyFr: 'À partir de 20, la terminaison est -ste.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l19-e1', prompt: 'How do you say "the third" (3.)?', promptFr: 'Comment dit-on « le troisième » (3.) ?', options: ['der dritte', 'der dreite', 'der drite'], answer: 0, explain: '1., 3., 7. and 8. are irregular: erste, dritte, siebte, achte.', explainFr: '1., 3., 7. et 8. sont irréguliers : erste, dritte, siebte, achte.', hint: 'One of the four irregular ordinals.', hintFr: 'L’un des quatre ordinaux irréguliers.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l19-e2', prompt: 'Der 1. Mai = der ___ Mai.', promptFr: 'Der 1. Mai = der ___ Mai.', answer: 'erste', hint: 'Irregular: not "einte"!', hintFr: 'Irrégulier : pas « einte » !' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l19-e3', pairs: [{ de: 'der siebte', en: '7th', fr: '7e' }, { de: 'der achte', en: '8th', fr: '8e' }, { de: 'der zwölfte', en: '12th', fr: '12e' }, { de: 'der dreißigste', en: '30th', fr: '30e' }], hint: 'Remember: 20 and above take -ste.', hintFr: 'Rappel : à partir de 20, on met -ste.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l19-e12', word: 'Datum', answer: 'das', hint: 'Many words ending in -um are neuter.', hintFr: 'Beaucoup de mots en -um sont neutres.' } },

    // ───────────── 2 · Dates ─────────────
    { kind: 'chapter', title: 'Das Datum: am dritten Mai', titleFr: 'La date : am dritten Mai', blurb: 'Say on which day, and invite friends.', blurbFr: 'Dire à quelle date, et inviter des amis.' },

    { kind: 'situation', title: 'Die Einladung', titleFr: 'L’invitation',
      setting: 'Lena writes an invitation to her friends.', settingFr: 'Lena écrit une invitation à ses amis.',
      lines: [
        line('Lena', 'Ich schreibe eine Einladung. Die Party ist am fünften Mai.', 'I’m writing an invitation. The party is on the fifth of May.', 'J’écris une invitation. La fête est le cinq mai.'),
        line('Tom', 'Wir sind vom ersten bis zum vierzehnten August im Urlaub. Aber im Mai habe ich Zeit.', 'We’re on holiday from the first to the fourteenth of August. But in May I have time.', 'Nous sommes en vacances du premier au quatorze août. Mais en mai, j’ai le temps.'),
        line('Lena', 'Prima! Bringst du einen Kuchen mit?', 'Great! Will you bring a cake?', 'Super ! Apportes-tu un gâteau ?'),
        line('Tom', 'Ja, und ein Geschenk.', 'Yes, and a present.', 'Oui, et un cadeau.'),
      ],
      words: [{ id: 'l19-einladung', german: 'die Einladung', english: 'the invitation', french: 'l’invitation', gender: 'die', syllables: ['EIN', 'la', 'dung'], pronunciation: 'dee YNE-lah-doong', example: { de: 'Ich schreibe eine Einladung.', en: 'I am writing an invitation.', fr: 'J’écris une invitation.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l19-e14', prompt: 'What does Tom bring to the party?', promptFr: 'Qu’apporte Tom à la fête ?', options: ['A cake and a present', 'Only a cake', 'Only drinks'], optionsFr: ['Un gâteau et un cadeau', 'Seulement un gâteau', 'Seulement des boissons'], answer: 0, explain: 'He says: “Ja, und ein Geschenk.” after the cake.', explainFr: 'Il dit : « Ja, und ein Geschenk. » après le gâteau.', hint: 'Read the last two lines.', hintFr: 'Lis les deux dernières répliques.' } },

    { kind: 'grammar', note: {
      id: 'l19-datum', title: 'Saying the date', titleFr: 'Dire la date',
      lead: 'On a date: am + ordinal + -en. From … to …: vom … bis zum ….',
      leadFr: 'À une date : am + ordinal + -en. De … à … : vom … bis zum ….',
      explanationMd: 'To say **on which day** something happens, use **am** + ordinal + **-en**: **am dritten Mai**, **am ersten Januar**. Ask **Der Wievielte ist heute?** and answer **Heute ist der zwölfte.** For a period say **vom … bis zum …**: **vom ersten bis zum vierzehnten August**. With only a month use **im**: **im Mai**.',
      explanationMdFr: 'Pour dire **à quelle date** quelque chose a lieu, utilise **am** + ordinal + **-en** : **am dritten Mai**, **am ersten Januar**. Demande **Der Wievielte ist heute ?** et réponds **Heute ist der zwölfte.** Pour une période, dis **vom … bis zum …** : **vom ersten bis zum vierzehnten August**. Avec seulement un mois, utilise **im** : **im Mai**.',
      tables: [{ title: 'Saying a date', titleFr: 'Dire une date', headers: ['Written', 'You say'], headersFr: ['Écrit', 'On dit'],
        rows: [['3. Mai', 'der dritte Mai / am dritten Mai'], ['1. Januar', 'der erste Januar / am ersten Januar'], ['20. Oktober', 'am zwanzigsten Oktober'], ['1.–14. August', 'vom ersten bis zum vierzehnten August'], ['Mai', 'im Mai']],
        rowsFr: [['3. Mai', 'der dritte Mai / am dritten Mai'], ['1. Januar', 'der erste Januar / am ersten Januar'], ['20. Oktober', 'am zwanzigsten Oktober'], ['1.–14. August', 'vom ersten bis zum vierzehnten August'], ['Mai', 'im Mai']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'am zwölften Juli', role: 'time' }, { text: 'Geburtstag.', role: 'accusative' }], en: 'My birthday is on the twelfth of July.', fr: 'Mon anniversaire est le douze juillet.' },
        { parts: [{ text: 'Die Party', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'am fünften August.', role: 'time' }], en: 'The party is on the fifth of August.', fr: 'La fête est le cinq août.' },
      ],
      contrast: {
        a: { label: 'am + ordinal + -en', labelFr: 'am + ordinal + -en', note: 'a precise day', noteFr: 'un jour précis', examples: [g('Ich habe am zwölften Juli Geburtstag.', 'My birthday is on the twelfth of July.', 'Mon anniversaire est le douze juillet.'), g('Die Party ist am fünften August.', 'The party is on the fifth of August.', 'La fête est le cinq août.')] },
        b: { label: 'im + month', labelFr: 'im + mois', note: 'a whole month', noteFr: 'un mois entier', examples: [g('Die Hochzeit ist im Juni.', 'The wedding is in June.', 'Le mariage est en juin.'), g('Im Mai habe ich Zeit.', 'In May I have time.', 'En mai, j’ai le temps.')] },
      },
      examples: [
        g('Ich habe am zwölften Juli Geburtstag.', 'My birthday is on the twelfth of July.', 'Mon anniversaire est le douze juillet.'),
        g('Die Party ist am fünften August.', 'The party is on the fifth of August.', 'La fête est le cinq août.'),
        g('Wir sind vom ersten bis zum vierzehnten August im Urlaub.', 'We are on holiday from the first to the fourteenth of August.', 'Nous sommes en vacances du premier au quatorze août.'),
        g('Der Wievielte ist heute?', 'What is the date today?', 'Quelle est la date aujourd’hui ?'),
        g('Heute ist der zwölfte.', 'Today is the twelfth.', 'Aujourd’hui nous sommes le douze.'),
        g('Die Hochzeit ist im Juni.', 'The wedding is in June.', 'Le mariage est en juin.'),
      ],
      mistakes: [
        { wrong: 'Die Party ist am fünfte Mai.', right: 'Die Party ist am fünften Mai.', why: 'After am the ordinal ends in -en.', whyFr: 'Après am, l’ordinal se termine en -en.' },
        { wrong: 'Ich habe im zwölften Juli Geburtstag.', right: 'Ich habe am zwölften Juli Geburtstag.', why: 'A date takes am; only a month alone takes im.', whyFr: 'Une date prend am ; seul un mois seul prend im.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l19-e4', prompt: 'Ich habe ___ zwölften Juli Geburtstag.', promptFr: 'Ich habe ___ zwölften Juli Geburtstag.', answer: 'am', hint: 'A date on a specific day: am + ordinal.', hintFr: 'Une date précise : am + ordinal.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l19-e5', prompt: 'How do you say "on the 3rd of May"?', promptFr: 'Comment dit-on « le 3 mai » ?', options: ['am dritten Mai', 'am dritte Mai', 'im dritten Mai'], answer: 0, explain: 'After "am" the ordinal takes -en: am dritten Mai.', explainFr: 'Après « am », l’ordinal prend -en : am dritten Mai.', hint: 'am + ordinal + -en', hintFr: 'am + ordinal + -en' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l19-e6', tokens: ['Geburtstag', 'Ich', 'am', 'habe', 'fünften', 'August'], answer: ['Ich', 'habe', 'am', 'fünften', 'August', 'Geburtstag'], hint: 'Start with "Ich habe", then the date, then "Geburtstag".', hintFr: 'Commence par « Ich habe », puis la date, puis « Geburtstag ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l19-e7', prompt: 'Listen. When is the birthday?', promptFr: 'Écoute. Quand est l’anniversaire ?', audio: { ttsText: 'Mein Geburtstag ist am siebzehnten Oktober.' }, options: ['October 17', 'October 7', 'July 17'], optionsFr: ['17 octobre', '7 octobre', '17 juillet'], answer: 0, hint: 'Listen for "siebzehnten" — seven-teen.', hintFr: 'Écoute « siebzehnten » — dix-sept.' } },

    // ───────────── 3 · Wishes and congratulations ─────────────
    { kind: 'chapter', title: 'Wünsche und Glückwünsche', titleFr: 'Souhaits et félicitations', blurb: 'What would you love to do?', blurbFr: 'Qu’aimerais-tu faire ?' },

    { kind: 'situation', title: 'Alles Gute!', titleFr: 'Bon anniversaire !',
      setting: 'At the party, friends congratulate Lena and talk about their wishes.', settingFr: 'À la fête, des amis félicitent Lena et parlent de leurs souhaits.',
      lines: [
        line('Tom', 'Alles Gute zum Geburtstag, Lena! Herzlichen Glückwunsch!', 'Happy birthday, Lena! Congratulations!', 'Bon anniversaire, Lena ! Félicitations !'),
        line('Lena', 'Danke! Hast du einen Wunsch?', 'Thank you! Do you have a wish?', 'Merci ! As-tu un souhait ?'),
        line('Tom', 'Ich würde gern nach Italien fahren.', 'I would like to travel to Italy.', 'J’aimerais aller en Italie.'),
        line('Lena', 'Ich würde am liebsten jeden Tag feiern!', 'Most of all I would love to celebrate every day!', 'J’aimerais surtout faire la fête tous les jours !'),
      ],
      words: [{ id: 'l19-glueckwunsch', german: 'der Glückwunsch', english: 'the congratulation', french: 'la félicitation', gender: 'der', syllables: ['GLÜCK', 'wunsch'], pronunciation: 'dair GLEWK-voonsh', example: { de: 'Herzlichen Glückwunsch!', en: 'Congratulations!', fr: 'Félicitations !' } }, { id: 'l19-wunsch', german: 'der Wunsch', english: 'the wish', french: 'le souhait', gender: 'der', syllables: ['WUNSCH'], pronunciation: 'dair voonsh', example: { de: 'Hast du einen Wunsch?', en: 'Do you have a wish?', fr: 'As-tu un souhait ?' } }, { id: 'l19-wuerde', german: 'würde', english: 'would', french: 'je voudrais / j’aimerais (avec un infinitif)', gender: null, syllables: ['WÜR', 'de'], pronunciation: 'VUER-deh', example: { de: 'Ich würde gern tanzen.', en: 'I would like to dance.', fr: 'J’aimerais danser.' } }, { id: 'l19-amliebsten', german: 'am liebsten', english: 'most of all / I’d love to', french: 'le plus volontiers / ce que je préfère', gender: null, syllables: ['am', 'LIEB', 'sten'], pronunciation: 'ahm LEEP-sten', example: { de: 'Ich tanze am liebsten.', en: 'Most of all, I like to dance.', fr: 'Ce que je préfère, c’est danser.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l19-e15', prompt: 'What would Tom like to do?', promptFr: 'Qu’aimerait faire Tom ?', options: ['Travel to Italy', 'Celebrate every day', 'Bake a cake'], optionsFr: ['Aller en Italie', 'Faire la fête tous les jours', 'Faire un gâteau'], answer: 0, explain: 'He says: “Ich würde gern nach Italien fahren.”', explainFr: 'Il dit : « Ich würde gern nach Italien fahren. »', hint: 'Look for “würde gern”.', hintFr: 'Cherche « würde gern ».' } },

    { kind: 'grammar', note: {
      id: 'l19-wuensche', title: 'Wishes with würde gern and congratulations', titleFr: 'Les souhaits avec würde gern et les félicitations',
      lead: 'würde + gern (or am liebsten) + infinitive at the end: a soft, dreamy wish.',
      leadFr: 'würde + gern (ou am liebsten) + infinitif à la fin : un souhait doux, rêveur.',
      explanationMd: 'To say what you **would like to do**, use **würde** + **gern** (or **am liebsten**, “most of all”) and the **infinitive at the end**: **Ich würde gern reisen.** It sounds softer and more dreamy than **Ich will …**. For **congratulations** learn the fixed phrases: **Alles Gute zum Geburtstag! Herzlichen Glückwunsch! Frohe Weihnachten! Viel Glück!**',
      explanationMdFr: 'Pour dire ce que tu **aimerais faire**, utilise **würde** + **gern** (ou **am liebsten**, « surtout ») et l’**infinitif à la fin** : **Ich würde gern reisen.** C’est plus doux et plus rêveur que **Ich will …**. Pour les **félicitations**, apprends les expressions toutes faites : **Alles Gute zum Geburtstag ! Herzlichen Glückwunsch ! Frohe Weihnachten ! Viel Glück !**',
      tables: [
        { title: 'würde (would)', titleFr: 'würde (conditionnel)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden']], rowsFr: [['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden']], highlightCol: 0 },
        { title: 'Good wishes', titleFr: 'Bons vœux', headers: ['When', 'You say'], headersFr: ['Quand', 'On dit'], rows: [['birthday', 'Alles Gute zum Geburtstag!'], ['congratulations', 'Herzlichen Glückwunsch!'], ['Christmas', 'Frohe Weihnachten!'], ['luck', 'Viel Glück!'], ['illness', 'Gute Besserung!']], rowsFr: [['anniversaire', 'Alles Gute zum Geburtstag!'], ['félicitations', 'Herzlichen Glückwunsch!'], ['Noël', 'Frohe Weihnachten!'], ['chance', 'Viel Glück!'], ['maladie', 'Gute Besserung!']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'würde', role: 'verb' }, { text: 'gern', role: 'connector' }, { text: 'nach Italien', role: 'place' }, { text: 'fahren.', role: 'verb' }], en: 'I would like to travel to Italy.', fr: 'J’aimerais aller en Italie.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'würde', role: 'verb' }, { text: 'am liebsten', role: 'connector' }, { text: 'jeden Tag', role: 'time' }, { text: 'feiern.', role: 'verb' }], en: 'Most of all I would love to celebrate every day.', fr: 'J’aimerais surtout faire la fête tous les jours.' },
      ],
      contrast: {
        a: { label: 'Ich will …', labelFr: 'Ich will …', note: 'direct and strong', noteFr: 'direct et fort', examples: [g('Ich will nach Italien fahren.', 'I want to travel to Italy.', 'Je veux aller en Italie.'), g('Ich will lange schlafen.', 'I want to sleep late.', 'Je veux dormir tard.')] },
        b: { label: 'Ich würde gern …', labelFr: 'Ich würde gern …', note: 'soft, polite, dreamy', noteFr: 'doux, poli, rêveur', examples: [g('Ich würde gern nach Italien fahren.', 'I would like to travel to Italy.', 'J’aimerais aller en Italie.'), g('Ich würde gern lange schlafen.', 'I would like to sleep late.', 'J’aimerais dormir tard.')] },
      },
      examples: [
        g('Ich würde gern eine Party machen.', 'I would like to throw a party.', 'J’aimerais organiser une fête.'),
        g('Wir würden am liebsten am Meer feiern.', 'Most of all we would love to celebrate by the sea.', 'Nous aimerions surtout faire la fête au bord de la mer.'),
        g('Alles Gute zum Geburtstag, Lena!', 'Happy birthday, Lena!', 'Bon anniversaire, Lena !'),
        g('Herzlichen Glückwunsch!', 'Congratulations!', 'Félicitations !'),
        g('Ich würde am liebsten lange schlafen.', 'Most of all I would love to sleep late.', 'J’aimerais surtout dormir tard.'),
        g('Ich würde gern nach Italien fahren, aber ich habe keine Zeit.', 'I would like to travel to Italy, but I have no time.', 'J’aimerais aller en Italie, mais je n’ai pas le temps.'),
      ],
      mistakes: [
        { wrong: 'Ich würde gern fahren nach Italien.', right: 'Ich würde gern nach Italien fahren.', why: 'The infinitive goes to the very end.', whyFr: 'L’infinitif va tout à la fin.' },
        { wrong: 'Ich würde gern zu fahren nach Italien.', right: 'Ich würde gern nach Italien fahren.', why: 'No “zu” after würde.', whyFr: 'Pas de « zu » après würde.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l19-e8', prompt: 'Ich ___ am liebsten jeden Tag feiern. (would)', promptFr: 'Ich ___ am liebsten jeden Tag feiern. (je voudrais)', answer: 'würde', hint: 'würde + infinitive at the end', hintFr: 'würde + infinitif à la fin' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l19-e9', prompt: 'It is your friend’s birthday. What do you say?', promptFr: 'C’est l’anniversaire de ton ami. Que dis-tu ?', options: ['Frohe Weihnachten!', 'Alles Gute zum Geburtstag!', 'Gute Besserung!'], answer: 1, explain: '"Alles Gute zum Geburtstag!" is the standard birthday wish.', explainFr: '« Alles Gute zum Geburtstag ! » est le vœu d’anniversaire standard.', hint: 'Look for the word "Geburtstag".', hintFr: 'Cherche le mot « Geburtstag ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l19-e10', tokens: ['schlafen', 'am', 'Ich', 'lange', 'liebsten', 'würde'], answer: ['Ich', 'würde', 'am', 'liebsten', 'lange', 'schlafen'], hint: 'The infinitive "schlafen" goes at the very end.', hintFr: 'L’infinitif « schlafen » va tout à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l19-e11', prompt: 'Listen. What would she like to do?', promptFr: 'Écoute. Qu’aimerait-elle faire ?', audio: { ttsText: 'Ich würde gern nach Italien fahren, aber ich habe keine Zeit.' }, options: ['Travel to Italy', 'Stay at home', 'Go to a party'], optionsFr: ['Voyager en Italie', 'Rester à la maison', 'Aller à une fête'], answer: 0, hint: 'Listen for what comes after "würde gern".', hintFr: 'Écoute ce qui vient après « würde gern ».' } },

    { kind: 'pronunciation', focus: 'ü, ö, ß and the tricky "chs" in sechste', focusFr: 'ü, ö, ß et le « chs » difficile dans sechste', items: [{ id: 'l19-wuerde-pron', german: 'würde', english: 'would', french: 'je voudrais', gender: null, syllables: ['WÜR', 'de'], pronunciation: 'VUER-deh', example: { de: 'Ich würde gern kommen.', en: 'I would love to come.', fr: 'J’aimerais venir.' } }, { id: 'l19-zwoelfte-pron', german: 'zwölfte', english: 'twelfth', french: 'douzième', gender: null, syllables: ['ZWÖLF', 'te'], pronunciation: 'TSVOELF-teh', example: { de: 'Der zwölfte Juli ist ein Samstag.', en: 'The twelfth of July is a Saturday.', fr: 'Le douze juillet tombe un samedi.' } }, { id: 'l19-dreissigste-pron', german: 'dreißigste', english: 'thirtieth', french: 'trentième', gender: null, syllables: ['DREI', 'ßig', 'ste'], pronunciation: 'DRY-ssikh-steh', example: { de: 'Der dreißigste Juni ist ein Feiertag.', en: 'The thirtieth of June is a holiday.', fr: 'Le trente juin est un jour férié.' } }, { id: 'l19-sechste-pron', german: 'sechste', english: 'sixth', french: 'sixième', gender: null, syllables: ['SECHS', 'te'], pronunciation: 'ZEKS-teh', example: { de: 'Am sechsten Mai feiern wir.', en: 'On the sixth of May we celebrate.', fr: 'Le six mai, nous fêtons.' } }, { id: 'l19-glueckwunsch-pron', german: 'Glückwunsch', english: 'congratulations', french: 'félicitations', gender: 'der', syllables: ['GLÜCK', 'wunsch'], pronunciation: 'GLEWK-voonsh', example: { de: 'Herzlichen Glückwunsch!', en: 'Congratulations!', fr: 'Félicitations !' } }] },

    { kind: 'wrapup',
      summary: 'You can now use **ordinal numbers**, say a **date** with **am** (**am dritten Mai**), invite and congratulate people, and express wishes with **ich würde gern / am liebsten**. 🎉',
      summaryFr: 'Tu sais maintenant utiliser les **nombres ordinaux**, dire une **date** avec **am** (**am dritten Mai**), inviter et féliciter, et exprimer des souhaits avec **ich würde gern / am liebsten**. 🎉',
      card: { title: 'Lesson 23 on one page', titleFr: 'La leçon 23 en une page', sections: [
        { heading: 'Ordinals', headingFr: 'Ordinaux', rows: [g('erste, dritte, siebte, achte', 'irregular', 'irréguliers'), g('2.–19.: + -te', 'zweite … neunzehnte', 'zweite … neunzehnte'), g('20.–31.: + -ste', 'zwanzigste, dreißigste', 'zwanzigste, dreißigste')] },
        { heading: 'Dates', headingFr: 'Les dates', rows: [g('am dritten Mai', 'on the 3rd of May', 'le 3 mai'), g('vom ersten bis zum vierzehnten August', 'from … to …', 'du … au …'), g('im Mai', 'in May', 'en mai')] },
        { heading: 'Wishes', headingFr: 'Souhaits', rows: [g('Ich würde gern reisen.', 'I would like to travel.', 'J’aimerais voyager.'), g('Alles Gute zum Geburtstag!', 'Happy birthday!', 'Bon anniversaire !'), g('Herzlichen Glückwunsch!', 'Congratulations!', 'Félicitations !')] },
      ] } },
  ],
};
