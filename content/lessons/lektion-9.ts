import type { Lesson } from '../types';

export const lektion9: Lesson = {
  id: 'l9', level: 'A1', module: 3, number: 9,
  title: { de: 'Wohnen', en: 'Living / Home', fr: 'Le logement' },
  theme: 'Home, rooms, furniture, and saying what there is',
  themeFr: 'Le logement, les pièces, les meubles et dire ce qu’il y a',
  goals: ['Name rooms and furniture', 'Say where you live with "wohnen"', 'Use "es gibt" to say what there is', 'Say where something is with "in" and "auf"'],
  goalsFr: ['Nommer les pièces et les meubles', 'Dire où l’on habite avec « wohnen »', 'Utiliser « es gibt » pour dire ce qu’il y a', 'Dire où se trouve quelque chose avec « in » et « auf »'],
  steps: [
    { kind: 'intro', title: 'Mein Zuhause 🏠', titleFr: 'Chez moi 🏠',
      scene: 'Showing a friend around a new apartment.', sceneFr: 'On fait visiter un nouvel appartement à un ami.',
      goals: ['Name rooms and furniture', 'Say where you live', 'Describe what there is with "es gibt"', 'Say where things are'],
      goalsFr: ['Nommer les pièces et les meubles', 'Dire où tu habites', 'Décrire ce qu’il y a avec « es gibt »', 'Dire où se trouvent les choses'] },

    { kind: 'vocab', item: { id: 'l9-wohnung', german: 'die Wohnung', english: 'the apartment', french: 'l’appartement', gender: 'die', syllables: ['WOH', 'nung'], pronunciation: 'dee VOH-noong', example: { de: 'Meine Wohnung ist klein.', en: 'My apartment is small.', fr: 'Mon appartement est petit.' } } },
    { kind: 'vocab', item: { id: 'l9-haus', german: 'das Haus', english: 'the house', french: 'la maison', gender: 'das', syllables: ['HAUS'], pronunciation: 'dahs HOWSS', example: { de: 'Das Haus ist groß.', en: 'The house is big.', fr: 'La maison est grande.' } } },
    { kind: 'vocab', item: { id: 'l9-zimmer', german: 'das Zimmer', english: 'the room', french: 'la pièce / chambre', gender: 'das', syllables: ['ZIM', 'mer'], pronunciation: 'dahs TSIM-mer', example: { de: 'Die Wohnung hat drei Zimmer.', en: 'The apartment has three rooms.', fr: 'L’appartement a trois pièces.' } } },
    { kind: 'vocab', item: { id: 'l9-kueche', german: 'die Küche', english: 'the kitchen', french: 'la cuisine', gender: 'die', syllables: ['KÜ', 'che'], pronunciation: 'dee KUE-khe', example: { de: 'Ich koche in der Küche.', en: 'I cook in the kitchen.', fr: 'Je cuisine dans la cuisine.' } } },
    { kind: 'vocab', item: { id: 'l9-bad', german: 'das Bad', english: 'the bathroom', french: 'la salle de bain', gender: 'das', syllables: ['BAD'], pronunciation: 'dahs BAHT', example: { de: 'Das Bad ist klein.', en: 'The bathroom is small.', fr: 'La salle de bain est petite.' } } },
    { kind: 'vocab', item: { id: 'l9-tisch', german: 'der Tisch', english: 'the table', french: 'la table', gender: 'der', syllables: ['TISCH'], pronunciation: 'dair TISH', example: { de: 'Der Tisch ist neu.', en: 'The table is new.', fr: 'La table est neuve.' } } },
    { kind: 'vocab', item: { id: 'l9-stuhl', german: 'der Stuhl', english: 'the chair', french: 'la chaise', gender: 'der', syllables: ['STUHL'], pronunciation: 'dair SHTOOL', example: { de: 'Der Stuhl ist am Tisch.', en: 'The chair is by the table.', fr: 'La chaise est à côté de la table.' } } },
    { kind: 'vocab', item: { id: 'l9-bett', german: 'das Bett', english: 'the bed', french: 'le lit', gender: 'das', syllables: ['BETT'], pronunciation: 'dahs BET', example: { de: 'Das Bett ist im Schlafzimmer.', en: 'The bed is in the bedroom.', fr: 'Le lit est dans la chambre.' } } },
    { kind: 'vocab', item: { id: 'l9-wohnen', german: 'wohnen', english: 'to live / reside', french: 'habiter', gender: null, syllables: ['WOH', 'nen'], pronunciation: 'VOH-nen', example: { de: 'Ich wohne in Berlin.', en: 'I live in Berlin.', fr: 'J’habite à Berlin.' } } },
    { kind: 'vocab', item: { id: 'l9-esgibt', german: 'es gibt', english: 'there is / there are', french: 'il y a', gender: null, syllables: ['es', 'GIBT'], pronunciation: 'es GHIPT', example: { de: 'Es gibt einen Tisch.', en: 'There is a table.', fr: 'Il y a une table.' } } },

    { kind: 'grammar', note: {
      id: 'l9-wohnen-note', title: 'The verb "wohnen" (to live)', titleFr: 'Le verbe « wohnen » (habiter)',
      explanationMd: '**wohnen** is a regular verb. Ask **Wo wohnst du?** (Where do you live?):\n\n- ich **wohne** — I live\n- du **wohnst** — you live\n- er/sie/es **wohnt** — he/she/it lives\n\nUse **in** for the place: Ich wohne **in** Berlin.',
      explanationMdFr: '**wohnen** est un verbe régulier. Demande **Wo wohnst du?** (Où habites-tu ?) :\n\n- ich **wohne** — j’habite\n- du **wohnst** — tu habites\n- er/sie/es **wohnt** — il/elle/on habite\n\nUtilise **in** pour le lieu : Ich wohne **in** Berlin.',
      examples: [
        { de: 'Wo wohnst du?', en: 'Where do you live?', fr: 'Où habites-tu ?' },
        { de: 'Ich wohne in einer Wohnung.', en: 'I live in an apartment.', fr: 'J’habite dans un appartement.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l9-esgibt-note', title: '"es gibt" + accusative', titleFr: '« es gibt » + accusatif',
      explanationMd: '**es gibt** means "there is / there are" and takes the **accusative**:\n\n- Es gibt **einen** Tisch. (der → einen)\n- Es gibt **eine** Küche. (die → eine)\n- Es gibt **ein** Bad. (das → ein)',
      explanationMdFr: '**es gibt** signifie « il y a » et prend l’**accusatif** :\n\n- Es gibt **einen** Tisch. (der → einen)\n- Es gibt **eine** Küche. (die → eine)\n- Es gibt **ein** Bad. (das → ein)',
      examples: [
        { de: 'Es gibt einen Stuhl und einen Tisch.', en: 'There is a chair and a table.', fr: 'Il y a une chaise et une table.' },
        { de: 'Gibt es ein Bad?', en: 'Is there a bathroom?', fr: 'Y a-t-il une salle de bain ?' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l9-praepositionen', title: 'Saying where: "in" and "auf"', titleFr: 'Dire où : « in » et « auf »',
      explanationMd: 'To say where something is, use **in** (in) or **auf** (on) with the **dative** article:\n\n- in **der** Küche — in the kitchen (die → der)\n- auf **dem** Tisch — on the table (der → dem)\n- im Bad — in the bathroom (in + dem = **im**)',
      explanationMdFr: 'Pour dire où se trouve quelque chose, utilise **in** (dans) ou **auf** (sur) avec l’article au **datif** :\n\n- in **der** Küche — dans la cuisine (die → der)\n- auf **dem** Tisch — sur la table (der → dem)\n- im Bad — dans la salle de bain (in + dem = **im**)',
      examples: [
        { de: 'Das Bett ist im Schlafzimmer.', en: 'The bed is in the bedroom.', fr: 'Le lit est dans la chambre.' },
        { de: 'Der Kaffee ist auf dem Tisch.', en: 'The coffee is on the table.', fr: 'Le café est sur la table.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l9-e1', prompt: 'Ich ___ in Berlin. (wohnen)', answer: 'wohne', hint: 'first person singular of wohnen', hintFr: 'première personne du singulier de wohnen' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l9-e2', word: 'Küche', answer: 'die', hint: '"Küche" (kitchen) is feminine.', hintFr: '« Küche » (cuisine) est féminin.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l9-e3', word: 'Tisch', answer: 'der', hint: '"Tisch" (table) is masculine.', hintFr: '« Tisch » (table) est masculin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l9-e4', prompt: 'Es gibt ___ Tisch. (a — masculine accusative)', answer: 'einen', hint: 'es gibt takes the accusative: der → einen', hintFr: 'es gibt prend l’accusatif : der → einen' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l9-e5', pairs: [ { de: 'die Küche', en: 'kitchen', fr: 'cuisine' }, { de: 'das Bad', en: 'bathroom', fr: 'salle de bain' }, { de: 'das Bett', en: 'bed', fr: 'lit' } ], hint: 'Match each home word to its meaning.', hintFr: 'Associe chaque mot du logement à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l9-e6', prompt: 'Listen. How many rooms does the apartment have?', promptFr: 'Écoute. Combien de pièces a l’appartement ?', audio: { ttsText: 'Meine Wohnung ist schön. Es gibt drei Zimmer und eine Küche.' }, options: ['2', '3', '4'], answer: 1, hint: 'Listen for the number before "Zimmer".', hintFr: 'Écoute le nombre avant « Zimmer ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l9-e7', prompt: 'How do you say "in the kitchen"?', promptFr: 'Comment dit-on « dans la cuisine » ?', options: ['in die Küche', 'in der Küche', 'in dem Küche'], answer: 1, explain: 'Location uses the dative: die → der, so "in der Küche".', explainFr: 'Le lieu utilise le datif : die → der, donc « in der Küche ».', hint: 'Feminine "die" becomes "der" in the dative.', hintFr: 'Le féminin « die » devient « der » au datif.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l9-e8', tokens: ['einen', 'Es', 'Tisch', 'gibt'], answer: ['Es', 'gibt', 'einen', 'Tisch'], hint: '"Es gibt" first, then the object in the accusative.', hintFr: '« Es gibt » d’abord, puis l’objet à l’accusatif.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l9-e9', prompt: 'Der Kaffee ist auf ___ Tisch. (dative: der → ?)', answer: 'dem', hint: 'der → dem in the dative', hintFr: 'der → dem au datif' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l9-e10', prompt: 'Listen. Where is the bed?', promptFr: 'Écoute. Où est le lit ?', audio: { ttsText: 'Das Bett ist im Schlafzimmer und der Tisch ist in der Küche.' }, options: ['In the bedroom', 'In the kitchen', 'In the bathroom'], optionsFr: ['Dans la chambre', 'Dans la cuisine', 'Dans la salle de bain'], answer: 0, hint: 'Listen for "Bett ist im …".', hintFr: 'Écoute « Bett ist im … ».' } },

    { kind: 'pronunciation', focus: 'The "ü" in Küche is rounded, and its "ch" is the soft sound after a front vowel', focusFr: 'Le « ü » de Küche est arrondi, et son « ch » est le son doux après une voyelle antérieure', items: [
      { id: 'l9-kueche-pron', german: 'Küche', english: 'kitchen', french: 'cuisine', gender: null, syllables: ['KÜ', 'che'], pronunciation: 'KUE-khe', example: { de: 'Die Küche ist neu.', en: 'The kitchen is new.', fr: 'La cuisine est neuve.' } },
      { id: 'l9-wohnung-pron', german: 'Wohnung', english: 'apartment', french: 'appartement', gender: null, syllables: ['WOH', 'nung'], pronunciation: 'VOH-noong', example: { de: 'Die Wohnung ist groß.', en: 'The apartment is big.', fr: 'L’appartement est grand.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now name rooms and furniture, say where you live with **wohnen**, describe what there is with **es gibt** + accusative, and say where things are with **in** and **auf**. 🎉',
      summaryFr: 'Tu sais maintenant nommer les pièces et les meubles, dire où tu habites avec **wohnen**, décrire ce qu’il y a avec **es gibt** + accusatif, et dire où se trouvent les choses avec **in** et **auf**. 🎉' },
  ],
};
