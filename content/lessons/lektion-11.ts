import type { Lesson } from '../types';

export const lektion11: Lesson = {
  id: 'l11', level: 'A1', module: 4, number: 13,
  title: { de: 'Verkehr und Wege', en: 'Transport and directions', fr: 'Les transports et le chemin' },
  theme: 'Getting around: transport, directions, and mit + dative',
  themeFr: 'Se déplacer : transports, directions, et mit + datif',
  goals: ['Name means of transport', 'Say how you travel with "mit dem …"', 'Ask for and give directions', 'Use the irregular verb "fahren"'],
  goalsFr: ['Nommer les moyens de transport', 'Dire comment tu voyages avec « mit dem … »', 'Demander et indiquer le chemin', 'Utiliser le verbe irrégulier « fahren »'],
  steps: [
    { kind: 'intro', title: 'Wie komme ich …? 🚌', titleFr: 'Comment aller … ? 🚌',
      scene: 'Asking a stranger for the way to the station.', sceneFr: 'On demande son chemin vers la gare à un inconnu.',
      goals: ['Name means of transport', 'Say how you get somewhere', 'Ask for and understand directions', 'Use "fahren" correctly'],
      goalsFr: ['Nommer les moyens de transport', 'Dire comment tu te rends quelque part', 'Demander et comprendre le chemin', 'Utiliser « fahren » correctement'] },

    { kind: 'vocab', item: { id: 'l11-bus', german: 'der Bus', english: 'the bus', french: 'le bus', gender: 'der', syllables: ['BUS'], pronunciation: 'dair BOOSS', example: { de: 'Ich fahre mit dem Bus.', en: 'I go by bus.', fr: 'Je prends le bus.' } } },
    { kind: 'vocab', item: { id: 'l11-zug', german: 'der Zug', english: 'the train', french: 'le train', gender: 'der', syllables: ['ZUG'], pronunciation: 'dair TSOOK', example: { de: 'Der Zug fährt um acht Uhr.', en: 'The train leaves at eight o’clock.', fr: 'Le train part à huit heures.' } } },
    { kind: 'vocab', item: { id: 'l11-auto', german: 'das Auto', english: 'the car', french: 'la voiture', gender: 'das', syllables: ['AU', 'to'], pronunciation: 'dahs OW-toh', example: { de: 'Wir fahren mit dem Auto.', en: 'We go by car.', fr: 'Nous y allons en voiture.' } } },
    { kind: 'vocab', item: { id: 'l11-fahrrad', german: 'das Fahrrad', english: 'the bicycle', french: 'le vélo', gender: 'das', syllables: ['FAHR', 'rad'], pronunciation: 'dahs FAAR-raht', example: { de: 'Ich fahre Fahrrad.', en: 'I ride a bike.', fr: 'Je fais du vélo.' } } },
    { kind: 'vocab', item: { id: 'l11-bahnhof', german: 'der Bahnhof', english: 'the train station', french: 'la gare', gender: 'der', syllables: ['BAHN', 'hof'], pronunciation: 'dair BAAN-hohf', example: { de: 'Wo ist der Bahnhof?', en: 'Where is the train station?', fr: 'Où est la gare ?' } } },
    { kind: 'vocab', item: { id: 'l11-strasse', german: 'die Straße', english: 'the street', french: 'la rue', gender: 'die', syllables: ['STRA', 'ße'], pronunciation: 'dee SHTRAH-ssuh', example: { de: 'Gehen Sie die Straße geradeaus.', en: 'Go straight along the street.', fr: 'Continuez tout droit dans la rue.' } } },
    { kind: 'vocab', item: { id: 'l11-fahren', german: 'fahren', english: 'to go (by vehicle) / to drive', french: 'aller (en véhicule) / conduire', gender: null, syllables: ['FAH', 'ren'], pronunciation: 'FAA-ren', example: { de: 'Ich fahre nach Berlin.', en: 'I travel to Berlin.', fr: 'Je vais à Berlin.' } } },
    { kind: 'vocab', item: { id: 'l11-links', german: 'links', english: 'left', french: 'à gauche', gender: null, syllables: ['LINKS'], pronunciation: 'links', example: { de: 'Gehen Sie links.', en: 'Go left.', fr: 'Allez à gauche.' } } },
    { kind: 'vocab', item: { id: 'l11-rechts', german: 'rechts', english: 'right', french: 'à droite', gender: null, syllables: ['RECHTS'], pronunciation: 'rekhts', example: { de: 'Die Post ist rechts.', en: 'The post office is on the right.', fr: 'La poste est à droite.' } } },
    { kind: 'vocab', item: { id: 'l11-geradeaus', german: 'geradeaus', english: 'straight ahead', french: 'tout droit', gender: null, syllables: ['ge', 'ra', 'de', 'AUS'], pronunciation: 'ge-RAH-de-owss', example: { de: 'Gehen Sie geradeaus.', en: 'Go straight ahead.', fr: 'Allez tout droit.' } } },

    { kind: 'grammar', note: {
      id: 'l11-mit-dativ', title: 'Transport with "mit" + dative', titleFr: 'Les transports avec « mit » + datif',
      explanationMd: '**mit** (by/with) takes the **dative**:\n\n- mit **dem** Bus (der → dem)\n- mit **dem** Auto (das → dem)\n- mit **der** Bahn (die → der)\n\nIch fahre **mit dem** Zug nach Berlin.',
      explanationMdFr: '**mit** (en/avec) prend le **datif** :\n\n- mit **dem** Bus (der → dem)\n- mit **dem** Auto (das → dem)\n- mit **der** Bahn (die → der)\n\nIch fahre **mit dem** Zug nach Berlin.',
      examples: [
        { de: 'Ich fahre mit dem Bus.', en: 'I go by bus.', fr: 'Je prends le bus.' },
        { de: 'Wir fahren mit dem Auto.', en: 'We go by car.', fr: 'Nous y allons en voiture.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l11-fahren-note', title: 'The verb "fahren" (to go / drive)', titleFr: 'Le verbe « fahren » (aller / conduire)',
      explanationMd: '**fahren** changes its vowel in the **du**/**er** forms (a → ä):\n\n- ich **fahre** — I go\n- du **fährst** — you go\n- er/sie/es **fährt** — he/she/it goes',
      explanationMdFr: '**fahren** change de voyelle aux formes **du**/**er** (a → ä) :\n\n- ich **fahre** — je vais\n- du **fährst** — tu vas\n- er/sie/es **fährt** — il/elle/on va',
      examples: [
        { de: 'Du fährst mit dem Fahrrad.', en: 'You ride a bike.', fr: 'Tu vas à vélo.' },
        { de: 'Der Zug fährt um neun Uhr.', en: 'The train leaves at nine.', fr: 'Le train part à neuf heures.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l11-wege', title: 'Asking for the way', titleFr: 'Demander son chemin',
      explanationMd: 'Ask: **Wie komme ich zum Bahnhof?** (How do I get to the station?)\n\nDirections use the polite imperative (**Gehen Sie …**):\n\n- Gehen Sie **geradeaus**. — Go straight ahead.\n- Dann **links** / **rechts**. — Then left / right.',
      explanationMdFr: 'Demande : **Wie komme ich zum Bahnhof?** (Comment aller à la gare ?)\n\nLes directions utilisent l’impératif poli (**Gehen Sie …**) :\n\n- Gehen Sie **geradeaus**. — Allez tout droit.\n- Dann **links** / **rechts**. — Puis à gauche / à droite.',
      examples: [
        { de: 'Wie komme ich zum Bahnhof?', en: 'How do I get to the station?', fr: 'Comment aller à la gare ?' },
        { de: 'Gehen Sie geradeaus, dann rechts.', en: 'Go straight ahead, then right.', fr: 'Allez tout droit, puis à droite.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l11-e1', prompt: 'Ich fahre mit ___ Bus. (dative: der → ?)', answer: 'dem', hint: 'der → dem after "mit"', hintFr: 'der → dem après « mit »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l11-e2', prompt: 'What does "geradeaus" mean?', promptFr: 'Que signifie « geradeaus » ?', options: ['left', 'right', 'straight ahead'], optionsFr: ['à gauche', 'à droite', 'tout droit'], answer: 2, explain: '"geradeaus" = straight ahead.', explainFr: '« geradeaus » = tout droit.', hint: 'It is the direction that is neither left nor right.', hintFr: 'C’est la direction qui n’est ni à gauche ni à droite.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l11-e3', prompt: 'Du ___ mit dem Fahrrad. (fahren)', answer: 'fährst', hint: 'du-form of fahren has an umlaut: a → ä', hintFr: 'la forme « du » de fahren a un tréma : a → ä' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l11-e4', pairs: [ { de: 'links', en: 'left', fr: 'à gauche' }, { de: 'rechts', en: 'right', fr: 'à droite' }, { de: 'geradeaus', en: 'straight ahead', fr: 'tout droit' } ], hint: 'Match each direction word to its meaning.', hintFr: 'Associe chaque mot de direction à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l11-e5', prompt: 'Listen. How does Paul travel to Berlin?', promptFr: 'Écoute. Comment Paul va-t-il à Berlin ?', audio: { ttsText: 'Ich heiße Paul. Ich fahre mit dem Zug nach Berlin.' }, options: ['By train', 'By car', 'By bike'], optionsFr: ['En train', 'En voiture', 'À vélo'], answer: 0, hint: 'Listen after "mit dem".', hintFr: 'Écoute après « mit dem ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l11-e6', word: 'Straße', answer: 'die', hint: '"Straße" (street) is feminine.', hintFr: '« Straße » (rue) est féminin.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l11-e7', tokens: ['dem', 'fahre', 'mit', 'Bus', 'Ich'], answer: ['Ich', 'fahre', 'mit', 'dem', 'Bus'], hint: 'Subject, verb, then "mit dem …".', hintFr: 'Sujet, verbe, puis « mit dem … ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l11-e8', prompt: 'How do you ask the way to the station?', promptFr: 'Comment demande-t-on le chemin de la gare ?', options: ['Wo fährt der Bus?', 'Wie komme ich zum Bahnhof?', 'Was kostet der Zug?'], answer: 1, explain: '"Wie komme ich zum …?" asks for directions.', explainFr: '« Wie komme ich zum …? » demande le chemin.', hint: 'Look for "Wie komme ich …".', hintFr: 'Cherche « Wie komme ich … ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l11-e9', prompt: 'Die Post ist ___. (on the right)', answer: 'rechts', hint: 'the opposite of "links"', hintFr: 'le contraire de « links »' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l11-e10', prompt: 'Listen. Which way should you go first?', promptFr: 'Écoute. Dans quelle direction faut-il aller d’abord ?', audio: { ttsText: 'Gehen Sie geradeaus, dann links. Der Bahnhof ist rechts.' }, options: ['Straight ahead', 'Right', 'Back'], optionsFr: ['Tout droit', 'À droite', 'En arrière'], answer: 0, hint: 'Listen for the first direction word.', hintFr: 'Écoute le premier mot de direction.' } },

    { kind: 'pronunciation', focus: 'Long "a" in fahren/Bahnhof, and "ß" is a sharp "s" in Straße', focusFr: 'Le « a » long dans fahren/Bahnhof, et « ß » est un « s » net dans Straße', items: [
      { id: 'l11-bahnhof-pron', german: 'Bahnhof', english: 'station', french: 'gare', gender: null, syllables: ['BAHN', 'hof'], pronunciation: 'BAAN-hohf', example: { de: 'Der Bahnhof ist groß.', en: 'The station is big.', fr: 'La gare est grande.' } },
      { id: 'l11-strasse-pron', german: 'Straße', english: 'street', french: 'rue', gender: null, syllables: ['STRA', 'ße'], pronunciation: 'SHTRAH-ssuh', example: { de: 'Die Straße ist lang.', en: 'The street is long.', fr: 'La rue est longue.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now name means of transport, say how you travel with **mit dem …**, ask for and give directions (links, rechts, geradeaus), and use **fahren** (du fährst). 🎉',
      summaryFr: 'Tu sais maintenant nommer les moyens de transport, dire comment tu voyages avec **mit dem …**, demander et indiquer le chemin (links, rechts, geradeaus), et utiliser **fahren** (du fährst). 🎉' },
  ],
};
