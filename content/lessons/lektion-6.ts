import type { Lesson } from '../types';

export const lektion6: Lesson = {
  id: 'l6', level: 'A1', module: 2, number: 6,
  title: { de: 'Essen und Trinken', en: 'Food and drink', fr: 'Manger et boire' },
  theme: 'Food, drinks, articles, and saying what you like',
  themeFr: 'La nourriture, les boissons, les articles et dire ce qu’on aime',
  goals: ['Name common foods and drinks', 'Use der/die/das and ein/eine with food', 'Say what you like with "mögen"', 'Order politely with "Ich möchte …"'],
  goalsFr: ['Nommer des aliments et des boissons courants', 'Utiliser der/die/das et ein/eine avec la nourriture', 'Dire ce qu’on aime avec « mögen »', 'Commander poliment avec « Ich möchte … »'],
  steps: [
    { kind: 'intro', title: 'Guten Appetit! 🍎', titleFr: 'Bon appétit ! 🍎',
      scene: 'Ordering breakfast at a café.', sceneFr: 'On commande le petit-déjeuner dans un café.',
      goals: ['Name foods and drinks', 'Use the right article for food nouns', 'Say what you like and don’t like', 'Order politely in a café'],
      goalsFr: ['Nommer des aliments et des boissons', 'Utiliser le bon article pour la nourriture', 'Dire ce qu’on aime et n’aime pas', 'Commander poliment dans un café'] },

    { kind: 'vocab', item: { id: 'l6-brot', german: 'das Brot', english: 'the bread', french: 'le pain', gender: 'das', syllables: ['BROT'], pronunciation: 'dahs BROHT', example: { de: 'Ich esse Brot zum Frühstück.', en: 'I eat bread for breakfast.', fr: 'Je mange du pain au petit-déjeuner.' } } },
    { kind: 'vocab', item: { id: 'l6-apfel', german: 'der Apfel', english: 'the apple', french: 'la pomme', gender: 'der', syllables: ['AP', 'fel'], pronunciation: 'dair AP-fel', example: { de: 'Der Apfel ist rot.', en: 'The apple is red.', fr: 'La pomme est rouge.' } } },
    { kind: 'vocab', item: { id: 'l6-wasser', german: 'das Wasser', english: 'the water', french: 'l’eau', gender: 'das', syllables: ['WAS', 'ser'], pronunciation: 'dahs VASS-er', example: { de: 'Ich trinke Wasser.', en: 'I drink water.', fr: 'Je bois de l’eau.' } } },
    { kind: 'vocab', item: { id: 'l6-kaffee', german: 'der Kaffee', english: 'the coffee', french: 'le café', gender: 'der', syllables: ['KAF', 'fee'], pronunciation: 'dair KAH-fay', example: { de: 'Ein Kaffee, bitte.', en: 'A coffee, please.', fr: 'Un café, s’il vous plaît.' } } },
    { kind: 'vocab', item: { id: 'l6-milch', german: 'die Milch', english: 'the milk', french: 'le lait', gender: 'die', syllables: ['MILCH'], pronunciation: 'dee MILKH', example: { de: 'Kaffee mit Milch, bitte.', en: 'Coffee with milk, please.', fr: 'Café au lait, s’il vous plaît.' } } },
    { kind: 'vocab', item: { id: 'l6-fruehstueck', german: 'das Frühstück', english: 'the breakfast', french: 'le petit-déjeuner', gender: 'das', syllables: ['FRÜH', 'stück'], pronunciation: 'dahs FRUE-shtuek', example: { de: 'Das Frühstück ist um acht Uhr.', en: 'Breakfast is at eight o’clock.', fr: 'Le petit-déjeuner est à huit heures.' } } },
    { kind: 'vocab', item: { id: 'l6-trinken', german: 'trinken', english: 'to drink', french: 'boire', gender: null, syllables: ['TRIN', 'ken'], pronunciation: 'TRINK-en', example: { de: 'Was trinkst du?', en: 'What do you drink?', fr: 'Que bois-tu ?' } } },
    { kind: 'vocab', item: { id: 'l6-moegen', german: 'mögen', english: 'to like', french: 'aimer (bien)', gender: null, syllables: ['MÖ', 'gen'], pronunciation: 'MOE-gen', example: { de: 'Ich mag Kaffee.', en: 'I like coffee.', fr: 'J’aime le café.' } } },
    { kind: 'vocab', item: { id: 'l6-hunger', german: 'der Hunger', english: 'the hunger', french: 'la faim', gender: 'der', syllables: ['HUN', 'ger'], pronunciation: 'dair HOONG-er', example: { de: 'Ich habe Hunger.', en: 'I am hungry. (lit. I have hunger)', fr: 'J’ai faim.' } } },
    { kind: 'vocab', item: { id: 'l6-lecker', german: 'lecker', english: 'tasty / delicious', french: 'délicieux', gender: null, syllables: ['LEK', 'ker'], pronunciation: 'LEK-er', example: { de: 'Das Brot ist lecker!', en: 'The bread is tasty!', fr: 'Le pain est délicieux !' } } },

    { kind: 'grammar', note: {
      id: 'l6-moegen-note', title: 'The verb "mögen" (to like)', titleFr: 'Le verbe « mögen » (aimer)',
      explanationMd: '**mögen** says what you like:\n\n- ich **mag** — I like\n- du **magst** — you like (informal)\n- er/sie/es **mag** — he/she/it likes\n\nFor "don’t like", add **nicht**: Ich mag Milch **nicht**.',
      explanationMdFr: '**mögen** dit ce qu’on aime :\n\n- ich **mag** — j’aime\n- du **magst** — tu aimes (informel)\n- er/sie/es **mag** — il/elle/on aime\n\nPour « ne pas aimer », ajoute **nicht** : Ich mag Milch **nicht**.',
      examples: [
        { de: 'Ich mag Kaffee.', en: 'I like coffee.', fr: 'J’aime le café.' },
        { de: 'Magst du Brot?', en: 'Do you like bread?', fr: 'Aimes-tu le pain ?' },
        { de: 'Sie mag Wasser nicht.', en: 'She doesn’t like water.', fr: 'Elle n’aime pas l’eau.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l6-ein-eine', title: 'The article "ein / eine" (a / an)', titleFr: 'L’article « ein / eine » (un / une)',
      explanationMd: 'The indefinite article changes with gender:\n\n- **ein** Apfel (der) — an apple\n- **eine** Milch (die) — a milk\n- **ein** Brot (das) — a bread\n\nSo **der/das → ein**, and **die → eine**.',
      explanationMdFr: 'L’article indéfini change selon le genre :\n\n- **ein** Apfel (der) — une pomme\n- **eine** Milch (die) — un lait\n- **ein** Brot (das) — un pain\n\nDonc **der/das → ein**, et **die → eine**.',
      examples: [
        { de: 'Ich möchte einen Kaffee.', en: 'I would like a coffee.', fr: 'Je voudrais un café.' },
        { de: 'Das ist ein Apfel.', en: 'That is an apple.', fr: 'C’est une pomme.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l6-moechten', title: 'Ordering with "Ich möchte …"', titleFr: 'Commander avec « Ich möchte … »',
      explanationMd: 'To order politely, use **Ich möchte …** (I would like …):\n\n- **Ich möchte** einen Kaffee, bitte.\n- **Möchtest du** ein Wasser?\n\nAdd **bitte** (please) to be polite.',
      explanationMdFr: 'Pour commander poliment, utilise **Ich möchte …** (je voudrais …) :\n\n- **Ich möchte** einen Kaffee, bitte.\n- **Möchtest du** ein Wasser ?\n\nAjoute **bitte** (s’il te plaît) pour être poli.',
      examples: [
        { de: 'Ich möchte ein Brot, bitte.', en: 'I would like a bread, please.', fr: 'Je voudrais un pain, s’il vous plaît.' },
        { de: 'Möchtest du einen Kaffee?', en: 'Would you like a coffee?', fr: 'Veux-tu un café ?' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l6-e1', prompt: 'Ich ___ Kaffee. (mögen, ich-form)', answer: 'mag', hint: 'first person singular of mögen', hintFr: 'première personne du singulier de mögen' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l6-e2', word: 'Apfel', answer: 'der', hint: '"Apfel" is masculine.', hintFr: '« Apfel » est masculin.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l6-e3', word: 'Wasser', answer: 'das', hint: '"Wasser" is neuter.', hintFr: '« Wasser » est neutre.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l6-e4', prompt: 'How do you politely order a coffee?', promptFr: 'Comment commande-t-on poliment un café ?', options: ['Ich mag Kaffee.', 'Ich möchte einen Kaffee, bitte.', 'Kaffee!'], answer: 1, explain: '"Ich möchte … bitte" is the polite way to order.', explainFr: '« Ich möchte … bitte » est la façon polie de commander.', hint: 'Look for "möchte" and "bitte".', hintFr: 'Cherche « möchte » et « bitte ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l6-e5', pairs: [ { de: 'Brot', en: 'bread', fr: 'pain' }, { de: 'Wasser', en: 'water', fr: 'eau' }, { de: 'Kaffee', en: 'coffee', fr: 'café' } ], hint: 'Match each food/drink word to its meaning.', hintFr: 'Associe chaque aliment/boisson à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l6-e6', prompt: 'Ich habe ___. (I am hungry)', answer: 'Hunger', hint: 'German says "I have hunger".', hintFr: 'L’allemand dit « j’ai faim » = « ich habe Hunger ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l6-e7', prompt: 'Listen. What does the guest order?', promptFr: 'Écoute. Que commande le client ?', audio: { ttsText: 'Guten Tag! Ich möchte einen Kaffee mit Milch, bitte.' }, options: ['Coffee with milk', 'Water', 'Bread'], optionsFr: ['Café au lait', 'Eau', 'Pain'], answer: 0, hint: 'Listen after "Ich möchte".', hintFr: 'Écoute après « Ich möchte ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l6-e8', tokens: ['einen', 'möchte', 'Kaffee', 'Ich'], answer: ['Ich', 'möchte', 'einen', 'Kaffee'], hint: 'Subject, verb, then what you would like.', hintFr: 'Sujet, verbe, puis ce que tu voudrais.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l6-e9', prompt: 'Which article goes with "die Milch"?', promptFr: 'Quel article va avec « die Milch » ?', options: ['ein', 'eine', 'der'], answer: 1, explain: 'die → eine, so "eine Milch".', explainFr: 'die → eine, donc « eine Milch ».', hint: 'Feminine (die) nouns take "eine".', hintFr: 'Les noms féminins (die) prennent « eine ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l6-e10', prompt: 'Das Brot ist ___! (delicious)', answer: 'lecker', hint: 'the adjective meaning "tasty"', hintFr: 'l’adjectif qui signifie « délicieux »' } },

    { kind: 'pronunciation', focus: 'The "ö" in mögen and "ü" in Frühstück are rounded front vowels', focusFr: 'Le « ö » de mögen et le « ü » de Frühstück sont des voyelles antérieures arrondies', items: [
      { id: 'l6-moegen-pron', german: 'mögen', english: 'to like', french: 'aimer', gender: null, syllables: ['MÖ', 'gen'], pronunciation: 'MOE-gen', example: { de: 'Ich mag Tee.', en: 'I like tea.', fr: 'J’aime le thé.' } },
      { id: 'l6-fruehstueck-pron', german: 'Frühstück', english: 'breakfast', french: 'petit-déjeuner', gender: null, syllables: ['FRÜH', 'stück'], pronunciation: 'FRUE-shtuek', example: { de: 'Das Frühstück ist lecker.', en: 'Breakfast is tasty.', fr: 'Le petit-déjeuner est délicieux.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now name foods and drinks, choose the right article (ein/eine), say what you like with **mögen**, and order politely with **Ich möchte … bitte**. 🎉',
      summaryFr: 'Tu sais maintenant nommer des aliments et des boissons, choisir le bon article (ein/eine), dire ce que tu aimes avec **mögen**, et commander poliment avec **Ich möchte … bitte**. 🎉' },
  ],
};
