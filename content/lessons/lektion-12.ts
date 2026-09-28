import type { Lesson } from '../types';

export const lektion12: Lesson = {
  id: 'l12', level: 'A1', module: 4, number: 12,
  title: { de: 'Wetter und Jahreszeiten', en: 'Weather and seasons', fr: 'La météo et les saisons' },
  theme: 'Describing the weather, the seasons, and using impersonal "es"',
  themeFr: 'Décrire la météo, les saisons, et utiliser le « es » impersonnel',
  goals: ['Describe the weather', 'Name the seasons and months', 'Use impersonal "es" (es regnet, es ist kalt)', 'Say what you do "im Sommer / im Winter"'],
  goalsFr: ['Décrire la météo', 'Nommer les saisons et les mois', 'Utiliser le « es » impersonnel (es regnet, es ist kalt)', 'Dire ce que tu fais « im Sommer / im Winter »'],
  steps: [
    { kind: 'intro', title: 'Wie ist das Wetter? ☀️', titleFr: 'Quel temps fait-il ? ☀️',
      scene: 'Small talk about the weather and the seasons.', sceneFr: 'On bavarde sur la météo et les saisons.',
      goals: ['Describe today’s weather', 'Name the four seasons', 'Use "es" for the weather', 'Talk about activities in each season'],
      goalsFr: ['Décrire le temps du jour', 'Nommer les quatre saisons', 'Utiliser « es » pour la météo', 'Parler des activités de chaque saison'] },

    { kind: 'vocab', item: { id: 'l12-wetter', german: 'das Wetter', english: 'the weather', french: 'le temps / la météo', gender: 'das', syllables: ['WET', 'ter'], pronunciation: 'dahs VET-ter', example: { de: 'Wie ist das Wetter?', en: 'How is the weather?', fr: 'Quel temps fait-il ?' } } },
    { kind: 'vocab', item: { id: 'l12-sonne', german: 'die Sonne', english: 'the sun', french: 'le soleil', gender: 'die', syllables: ['SON', 'ne'], pronunciation: 'dee ZON-ne', example: { de: 'Die Sonne scheint.', en: 'The sun is shining.', fr: 'Le soleil brille.' } } },
    { kind: 'vocab', item: { id: 'l12-regen', german: 'der Regen', english: 'the rain', french: 'la pluie', gender: 'der', syllables: ['RE', 'gen'], pronunciation: 'dair RAY-gen', example: { de: 'Ich mag Regen nicht.', en: 'I don’t like rain.', fr: 'Je n’aime pas la pluie.' } } },
    { kind: 'vocab', item: { id: 'l12-schnee', german: 'der Schnee', english: 'the snow', french: 'la neige', gender: 'der', syllables: ['SCHNEE'], pronunciation: 'dair SHNAY', example: { de: 'Im Winter gibt es Schnee.', en: 'In winter there is snow.', fr: 'En hiver, il y a de la neige.' } } },
    { kind: 'vocab', item: { id: 'l12-warm', german: 'warm', english: 'warm', french: 'chaud', gender: null, syllables: ['WARM'], pronunciation: 'varm', example: { de: 'Heute ist es warm.', en: 'Today it is warm.', fr: 'Aujourd’hui, il fait chaud.' } } },
    { kind: 'vocab', item: { id: 'l12-kalt', german: 'kalt', english: 'cold', french: 'froid', gender: null, syllables: ['KALT'], pronunciation: 'kahlt', example: { de: 'Im Winter ist es kalt.', en: 'In winter it is cold.', fr: 'En hiver, il fait froid.' } } },
    { kind: 'vocab', item: { id: 'l12-sommer', german: 'der Sommer', english: 'the summer', french: 'l’été', gender: 'der', syllables: ['SOM', 'mer'], pronunciation: 'dair ZOM-mer', example: { de: 'Im Sommer schwimme ich.', en: 'In summer I swim.', fr: 'En été, je nage.' } } },
    { kind: 'vocab', item: { id: 'l12-winter', german: 'der Winter', english: 'the winter', french: 'l’hiver', gender: 'der', syllables: ['WIN', 'ter'], pronunciation: 'dair VIN-ter', example: { de: 'Der Winter ist kalt.', en: 'Winter is cold.', fr: 'L’hiver est froid.' } } },
    { kind: 'vocab', item: { id: 'l12-regnen', german: 'regnen', english: 'to rain', french: 'pleuvoir', gender: null, syllables: ['REG', 'nen'], pronunciation: 'RAYG-nen', example: { de: 'Es regnet heute.', en: 'It is raining today.', fr: 'Il pleut aujourd’hui.' } } },
    { kind: 'vocab', item: { id: 'l12-scheinen', german: 'scheinen', english: 'to shine', french: 'briller', gender: null, syllables: ['SCHEI', 'nen'], pronunciation: 'SHINE-en', example: { de: 'Die Sonne scheint.', en: 'The sun shines.', fr: 'Le soleil brille.' } } },

    { kind: 'grammar', note: {
      id: 'l12-es-wetter', title: 'Weather with impersonal "es"', titleFr: 'La météo avec « es » impersonnel',
      explanationMd: 'Weather uses **es** (it) as a dummy subject:\n\n- **Es ist** warm / kalt. — It is warm / cold.\n- **Es regnet.** — It is raining.\n- **Es schneit.** — It is snowing.\n- Die Sonne **scheint**. — The sun is shining.',
      explanationMdFr: 'La météo utilise **es** (il) comme sujet impersonnel :\n\n- **Es ist** warm / kalt. — Il fait chaud / froid.\n- **Es regnet.** — Il pleut.\n- **Es schneit.** — Il neige.\n- Die Sonne **scheint**. — Le soleil brille.',
      examples: [
        { de: 'Heute ist es kalt.', en: 'Today it is cold.', fr: 'Aujourd’hui, il fait froid.' },
        { de: 'Es regnet in Hamburg.', en: 'It is raining in Hamburg.', fr: 'Il pleut à Hambourg.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l12-jahreszeiten', title: 'The seasons and "im"', titleFr: 'Les saisons et « im »',
      explanationMd: 'The four seasons (**die Jahreszeiten**), all **der**:\n\n- der Frühling (spring), der Sommer (summer), der Herbst (autumn), der Winter (winter)\n\nUse **im** (in + dem) for a season or month: **im** Sommer, **im** Juli.',
      explanationMdFr: 'Les quatre saisons (**die Jahreszeiten**), toutes **der** :\n\n- der Frühling (printemps), der Sommer (été), der Herbst (automne), der Winter (hiver)\n\nUtilise **im** (in + dem) pour une saison ou un mois : **im** Sommer, **im** Juli.',
      examples: [
        { de: 'Im Sommer ist es warm.', en: 'In summer it is warm.', fr: 'En été, il fait chaud.' },
        { de: 'Im Winter schneit es.', en: 'In winter it snows.', fr: 'En hiver, il neige.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l12-monate', title: 'The months', titleFr: 'Les mois',
      explanationMd: 'The twelve months (all **der**):\n\n- Januar, Februar, März, April, Mai, Juni\n- Juli, August, September, Oktober, November, Dezember\n\nSay **im** for "in a month": **im** Mai, **im** Dezember.',
      explanationMdFr: 'Les douze mois (tous **der**) :\n\n- Januar, Februar, März, April, Mai, Juni\n- Juli, August, September, Oktober, November, Dezember\n\nDis **im** pour « en tel mois » : **im** Mai, **im** Dezember.',
      examples: [
        { de: 'Im Dezember ist es kalt.', en: 'In December it is cold.', fr: 'En décembre, il fait froid.' },
        { de: 'Mein Geburtstag ist im Mai.', en: 'My birthday is in May.', fr: 'Mon anniversaire est en mai.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l12-e1', prompt: '___ regnet heute. (it — weather subject)', answer: 'Es', hint: 'the impersonal weather subject', hintFr: 'le sujet impersonnel de la météo' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l12-e2', prompt: 'What does "Es ist kalt" mean?', promptFr: 'Que signifie « Es ist kalt » ?', options: ['It is warm', 'It is cold', 'It is raining'], optionsFr: ['Il fait chaud', 'Il fait froid', 'Il pleut'], answer: 1, explain: '"kalt" means cold.', explainFr: '« kalt » signifie froid.', hint: 'Focus on the word "kalt".', hintFr: 'Concentre-toi sur le mot « kalt ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l12-e3', pairs: [ { de: 'die Sonne', en: 'sun', fr: 'soleil' }, { de: 'der Regen', en: 'rain', fr: 'pluie' }, { de: 'der Schnee', en: 'snow', fr: 'neige' } ], hint: 'Match each weather word to its meaning.', hintFr: 'Associe chaque mot de météo à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l12-e4', prompt: '___ Sommer schwimme ich. (in the)', answer: 'Im', hint: 'in + dem = im, used for seasons', hintFr: 'in + dem = im, pour les saisons' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l12-e5', prompt: 'Listen. How is the weather today?', promptFr: 'Écoute. Quel temps fait-il aujourd’hui ?', audio: { ttsText: 'Wie ist das Wetter heute? Heute ist es warm und die Sonne scheint.' }, options: ['Warm and sunny', 'Cold and snowy', 'Rainy'], optionsFr: ['Chaud et ensoleillé', 'Froid et neigeux', 'Pluvieux'], answer: 0, hint: 'Listen for "warm" and "die Sonne scheint".', hintFr: 'Écoute « warm » et « die Sonne scheint ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l12-e6', word: 'Sonne', answer: 'die', hint: '"Sonne" (sun) is feminine.', hintFr: '« Sonne » (soleil) est féminin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l12-e7', prompt: 'Which is a season (Jahreszeit)?', promptFr: 'Lequel est une saison (Jahreszeit) ?', options: ['der Montag', 'der Sommer', 'der Bahnhof'], answer: 1, explain: '"der Sommer" (summer) is a season.', explainFr: '« der Sommer » (été) est une saison.', hint: 'Which word names a time of year?', hintFr: 'Quel mot nomme une période de l’année ?' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l12-e8', tokens: ['ist', 'kalt', 'es', 'Heute'], answer: ['Heute', 'ist', 'es', 'kalt'], hint: 'Time word first, then verb, then "es".', hintFr: 'Mot de temps d’abord, puis le verbe, puis « es ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l12-e9', prompt: 'Die Sonne ___. (to shine)', answer: 'scheint', hint: 'er/sie/es form of scheinen', hintFr: 'forme er/sie/es de scheinen' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l12-e10', prompt: 'Listen. In which season does it snow?', promptFr: 'Écoute. En quelle saison neige-t-il ?', audio: { ttsText: 'Im Winter ist es kalt und es schneit oft.' }, options: ['Winter', 'Summer', 'Spring'], optionsFr: ['Hiver', 'Été', 'Printemps'], answer: 0, hint: 'Listen for the season at the start.', hintFr: 'Écoute la saison au début.' } },

    { kind: 'pronunciation', focus: 'The "w" is an English "v" (Wetter, Winter), and "sch" is "sh" (Schnee, scheinen)', focusFr: 'Le « w » est un « v » anglais (Wetter, Winter), et « sch » est « ch » (Schnee, scheinen)', items: [
      { id: 'l12-wetter-pron', german: 'Wetter', english: 'weather', french: 'météo', gender: null, syllables: ['WET', 'ter'], pronunciation: 'VET-ter', example: { de: 'Das Wetter ist schön.', en: 'The weather is nice.', fr: 'Le temps est beau.' } },
      { id: 'l12-schnee-pron', german: 'Schnee', english: 'snow', french: 'neige', gender: null, syllables: ['SCHNEE'], pronunciation: 'SHNAY', example: { de: 'Der Schnee ist weiß.', en: 'The snow is white.', fr: 'La neige est blanche.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now describe the weather with impersonal **es** (es regnet, es ist kalt), name the seasons and months, and say what you do **im Sommer / im Winter**. That completes your first twelve A1 lessons — super gemacht! 🎉',
      summaryFr: 'Tu sais maintenant décrire la météo avec le **es** impersonnel (es regnet, es ist kalt), nommer les saisons et les mois, et dire ce que tu fais **im Sommer / im Winter**. Cela conclut tes douze premières leçons A1 — super gemacht ! 🎉' },
  ],
};
