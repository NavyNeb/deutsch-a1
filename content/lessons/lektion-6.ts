import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion6: Lesson = {
  id: 'l6', level: 'A1', module: 3, number: 12,
  title: { de: 'Essen und Trinken', en: 'Food and drink', fr: 'Manger et boire' },
  theme: 'Food, drinks, articles, and saying what you like', themeFr: 'La nourriture, les boissons, les articles et dire ce qu’on aime',
  goals: ['Name common foods and drinks', 'Use der/die/das and ein/eine with food', 'Say what you like with "mögen"', 'Order politely with "Ich möchte …"'], goalsFr: ['Nommer des aliments et des boissons courants', 'Utiliser der/die/das et ein/eine avec la nourriture', 'Dire ce qu’on aime avec « mögen »', 'Commander poliment avec « Ich möchte … »'],
  canDo: g('Ich kann Essen und Trinken benennen, sagen, was ich mag, und höflich bestellen.', 'I can name food and drink, say what I like and order politely.', 'Je sais nommer des aliments et des boissons, dire ce que j’aime et commander poliment.'),
  steps: [
    { kind: 'intro', title: 'Essen und Trinken ☕', titleFr: 'Manger et boire ☕',
      scene: 'Breakfast with a friend, then an order at a café.', sceneFr: 'Petit-déjeuner avec une amie, puis une commande au café.',
      goals: ['Name common foods and drinks', 'Use ein and eine', 'Say what you like with mögen', 'Order politely with Ich möchte …'],
      goalsFr: ['Nommer des aliments et boissons courants', 'Utiliser ein et eine', 'Dire ce que tu aimes avec mögen', 'Commander poliment avec Ich möchte …'] },

    // ───────────── 1 · Food and articles ─────────────
    { kind: 'chapter', title: 'Essen, Trinken und Artikel', titleFr: 'Aliments, boissons et articles', blurb: 'Name food and say “a”.', blurbFr: 'Nommer les aliments et dire « un / une ».' },

    { kind: 'situation', title: 'Beim Frühstück', titleFr: 'Au petit-déjeuner',
      setting: 'Mia and Jonas have breakfast together.', settingFr: 'Mia et Jonas prennent le petit-déjeuner ensemble.',
      lines: [
        line('Mia', 'Guten Morgen, Jonas! Hast du Hunger?', 'Good morning, Jonas! Are you hungry?', 'Bonjour, Jonas ! As-tu faim ?'),
        line('Jonas', 'Ja, ich habe Hunger. Ich esse Brot und einen Apfel.', 'Yes, I’m hungry. I’m eating bread and an apple.', 'Oui, j’ai faim. Je mange du pain et une pomme.'),
        line('Mia', 'Ich trinke Wasser. Und du?', 'I’m drinking water. And you?', 'Je bois de l’eau. Et toi ?'),
        line('Jonas', 'Ich trinke Kaffee mit Milch.', 'I’m drinking coffee with milk.', 'Je bois du café au lait.'),
        line('Mia', 'Das Brot ist lecker!', 'The bread is delicious!', 'Le pain est délicieux !'),
        line('Jonas', 'Ja, sehr lecker!', 'Yes, very delicious!', 'Oui, très bon !'),
      ],
      words: [{ id: 'l6-hunger', german: 'der Hunger', english: 'the hunger', french: 'la faim', gender: 'der', syllables: ['HUN', 'ger'], pronunciation: 'dair HOONG-er', example: { de: 'Ich habe Hunger.', en: 'I am hungry. (lit. I have hunger)', fr: 'J’ai faim.' } }, { id: 'l6-trinken', german: 'trinken', english: 'to drink', french: 'boire', gender: null, syllables: ['TRIN', 'ken'], pronunciation: 'TRINK-en', example: { de: 'Was trinkst du?', en: 'What do you drink?', fr: 'Que bois-tu ?' } }, { id: 'l6-lecker', german: 'lecker', english: 'tasty / delicious', french: 'délicieux', gender: null, syllables: ['LEK', 'ker'], pronunciation: 'LEK-er', example: { de: 'Das Brot ist lecker!', en: 'The bread is tasty!', fr: 'Le pain est délicieux !' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l6-e11', prompt: 'What does Jonas drink?', promptFr: 'Que boit Jonas ?', options: ['Coffee with milk', 'Water', 'Tea'], optionsFr: ['Du café au lait', 'De l’eau', 'Du thé'], answer: 0, explain: 'He says: “Ich trinke Kaffee mit Milch.”', explainFr: 'Il dit : « Ich trinke Kaffee mit Milch. »', hint: 'Mia drinks water; Jonas drinks something else.', hintFr: 'Mia boit de l’eau ; Jonas boit autre chose.' } },

    { kind: 'wordgroup', title: 'Essen und Trinken', titleFr: 'Aliments et boissons',
      note: 'Learn the article with each word: das Brot, der Apfel, die Milch.', noteFr: 'Apprends l’article avec chaque mot : das Brot, der Apfel, die Milch.',
      items: [{ id: 'l6-brot', german: 'das Brot', english: 'the bread', french: 'le pain', gender: 'das', syllables: ['BROT'], pronunciation: 'dahs BROHT', example: { de: 'Ich esse Brot zum Frühstück.', en: 'I eat bread for breakfast.', fr: 'Je mange du pain au petit-déjeuner.' } }, { id: 'l6-apfel', german: 'der Apfel', english: 'the apple', french: 'la pomme', gender: 'der', syllables: ['AP', 'fel'], pronunciation: 'dair AP-fel', example: { de: 'Der Apfel ist rot.', en: 'The apple is red.', fr: 'La pomme est rouge.' } }, { id: 'l6-wasser', german: 'das Wasser', english: 'the water', french: 'l’eau', gender: 'das', syllables: ['WAS', 'ser'], pronunciation: 'dahs VASS-er', example: { de: 'Ich trinke Wasser.', en: 'I drink water.', fr: 'Je bois de l’eau.' } }, { id: 'l6-kaffee', german: 'der Kaffee', english: 'the coffee', french: 'le café', gender: 'der', syllables: ['KAF', 'fee'], pronunciation: 'dair KAH-fay', example: { de: 'Ein Kaffee, bitte.', en: 'A coffee, please.', fr: 'Un café, s’il vous plaît.' } }, { id: 'l6-milch', german: 'die Milch', english: 'the milk', french: 'le lait', gender: 'die', syllables: ['MILCH'], pronunciation: 'dee MILKH', example: { de: 'Kaffee mit Milch, bitte.', en: 'Coffee with milk, please.', fr: 'Café au lait, s’il vous plaît.' } }, { id: 'l6-fruehstueck', german: 'das Frühstück', english: 'the breakfast', french: 'le petit-déjeuner', gender: 'das', syllables: ['FRÜH', 'stück'], pronunciation: 'dahs FRUE-shtuek', example: { de: 'Das Frühstück ist um acht Uhr.', en: 'Breakfast is at eight o’clock.', fr: 'Le petit-déjeuner est à huit heures.' } }] },

    { kind: 'grammar', note: {
      id: 'l6-ein-eine', title: 'ein and eine: “a”', titleFr: 'ein et eine : « un / une »',
      lead: 'der and das words take ein, die words take eine. After most verbs of eating, the masculine becomes einen.',
      leadFr: 'Les mots en der et das prennent ein, les mots en die prennent eine. Après la plupart des verbes comme essen, le masculin devient einen.',
      explanationMd: 'The indefinite article follows the **gender**: **ein** Apfel (der), **ein** Brot (das), **eine** Milch (die). When the noun is the **object** of verbs like **essen, möchten, brauchen**, the **masculine** changes: **ein → einen** (you met this in lesson 7).',
      explanationMdFr: 'L’article indéfini suit le **genre** : **ein** Apfel (der), **ein** Brot (das), **eine** Milch (die). Quand le nom est **complément d’objet** de verbes comme **essen, möchten, brauchen**, le **masculin** change : **ein → einen** (vu à la leçon 7).',
      tables: [{ title: 'ein / eine', titleFr: 'ein / eine', headers: ['Gender', 'That is …', 'I eat / want …'], headersFr: ['Genre', 'Das ist …', 'Je mange / je veux …'],
        rows: [['der Apfel', 'ein Apfel', 'einen Apfel'], ['die Milch', 'eine Milch', 'eine Milch'], ['das Brot', 'ein Brot', 'ein Brot']],
        rowsFr: [['der Apfel', 'ein Apfel', 'einen Apfel'], ['die Milch', 'eine Milch', 'eine Milch'], ['das Brot', 'ein Brot', 'ein Brot']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'ein Apfel.', role: 'other' }], en: 'That is an apple.', fr: 'C’est une pomme.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'esse', role: 'verb' }, { text: 'einen Apfel.', role: 'accusative' }], en: 'I am eating an apple.', fr: 'Je mange une pomme.' },
      ],
      contrast: {
        a: { label: 'Das ist … (naming)', labelFr: 'Das ist … (nommer)', note: 'ein Apfel', noteFr: 'ein Apfel', examples: [g('Das ist ein Apfel.', 'That is an apple.', 'C’est une pomme.'), g('Das ist eine Milch.', 'That is a milk.', 'C’est un lait.')] },
        b: { label: 'Ich esse … (object)', labelFr: 'Ich esse … (objet)', note: 'einen Apfel', noteFr: 'einen Apfel', examples: [g('Ich esse einen Apfel.', 'I am eating an apple.', 'Je mange une pomme.'), g('Ich möchte einen Kaffee.', 'I would like a coffee.', 'Je voudrais un café.')] },
      },
      examples: [
        g('Das ist ein Apfel.', 'That is an apple.', 'C’est une pomme.'),
        g('Ich möchte einen Kaffee.', 'I would like a coffee.', 'Je voudrais un café.'),
        g('Ich esse ein Brot.', 'I am eating a bread.', 'Je mange un pain.'),
        g('Wir trinken eine Milch.', 'We are drinking a milk.', 'Nous buvons un lait.'),
        g('Der Apfel ist rot.', 'The apple is red.', 'La pomme est rouge.'),
        g('Ich esse Brot zum Frühstück.', 'I eat bread for breakfast.', 'Je mange du pain au petit-déjeuner.'),
        g('Das Frühstück ist um acht Uhr.', 'Breakfast is at eight o’clock.', 'Le petit-déjeuner est à huit heures.'),
      ],
      mistakes: [
        { wrong: 'Ich esse ein Apfel.', right: 'Ich esse einen Apfel.', why: 'Apfel is masculine, so the object form is einen.', whyFr: 'Apfel est masculin : la forme de l’objet est einen.' },
        { wrong: 'Das ist eine Brot.', right: 'Das ist ein Brot.', why: 'Brot is neuter: ein.', whyFr: 'Brot est neutre : ein.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l6-e2', word: 'Apfel', answer: 'der', hint: '"Apfel" is masculine.', hintFr: '« Apfel » est masculin.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l6-e3', word: 'Wasser', answer: 'das', hint: '"Wasser" is neuter.', hintFr: '« Wasser » est neutre.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l6-e5', pairs: [{ de: 'Brot', en: 'bread', fr: 'pain' }, { de: 'Wasser', en: 'water', fr: 'eau' }, { de: 'Kaffee', en: 'coffee', fr: 'café' }], hint: 'Match each food/drink word to its meaning.', hintFr: 'Associe chaque aliment/boisson à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l6-e9', prompt: 'Which article goes with "die Milch"?', promptFr: 'Quel article va avec « die Milch » ?', options: ['ein', 'eine', 'der'], answer: 1, explain: 'die → eine, so "eine Milch".', explainFr: 'die → eine, donc « eine Milch ».', hint: 'Feminine (die) nouns take "eine".', hintFr: 'Les noms féminins (die) prennent « eine ».' } },

    // ───────────── 2 · mögen ─────────────
    { kind: 'chapter', title: 'mögen: was ich mag', titleFr: 'mögen : ce que j’aime', blurb: 'Say what you like and what you do not like.', blurbFr: 'Dire ce que tu aimes et ce que tu n’aimes pas.' },

    { kind: 'situation', title: 'Was magst du?', titleFr: 'Qu’aimes-tu ?',
      setting: 'Mia and Jonas talk about what they like.', settingFr: 'Mia et Jonas parlent de ce qu’ils aiment.',
      lines: [
        line('Mia', 'Magst du Kaffee?', 'Do you like coffee?', 'Aimes-tu le café ?'),
        line('Jonas', 'Ja, ich mag Kaffee. Aber Milch mag ich nicht.', 'Yes, I like coffee. But I don’t like milk.', 'Oui, j’aime le café. Mais je n’aime pas le lait.'),
        line('Mia', 'Ich mag Wasser und Tee.', 'I like water and tea.', 'J’aime l’eau et le thé.'),
        line('Jonas', 'Magst du Brot?', 'Do you like bread?', 'Aimes-tu le pain ?'),
        line('Mia', 'Ja, sehr gern!', 'Yes, very much!', 'Oui, beaucoup !'),
      ],
      words: [{ id: 'l6-moegen', german: 'mögen', english: 'to like', french: 'aimer (bien)', gender: null, syllables: ['MÖ', 'gen'], pronunciation: 'MOE-gen', example: { de: 'Ich mag Kaffee.', en: 'I like coffee.', fr: 'J’aime le café.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l6-e12', prompt: 'What does Jonas not like?', promptFr: 'Qu’est-ce que Jonas n’aime pas ?', options: ['Milk', 'Coffee', 'Bread'], optionsFr: ['Le lait', 'Le café', 'Le pain'], answer: 0, explain: 'He says: “Aber Milch mag ich nicht.”', explainFr: 'Il dit : « Aber Milch mag ich nicht. »', hint: 'Look for “nicht”.', hintFr: 'Cherche « nicht ».' } },

    { kind: 'grammar', note: {
      id: 'l6-moegen-note', title: 'mögen: to like', titleFr: 'mögen : aimer',
      lead: 'mögen goes with a noun: Ich mag Kaffee. With a verb, use gern.',
      leadFr: 'mögen s’emploie avec un nom : Ich mag Kaffee. Avec un verbe, utilise gern.',
      explanationMd: '**mögen** (to like) is irregular in the singular: **ich mag, du magst, er/sie/es mag**. Use it with a **noun**: **Ich mag Kaffee.** To say you like **doing** something, use **gern** with the verb (lesson 10): **Ich trinke gern Kaffee.** For “don’t like”, add **nicht**.',
      explanationMdFr: '**mögen** (aimer) est irrégulier au singulier : **ich mag, du magst, er/sie/es mag**. Utilise-le avec un **nom** : **Ich mag Kaffee.** Pour dire que tu aimes **faire** quelque chose, utilise **gern** avec le verbe (leçon 10) : **Ich trinke gern Kaffee.** Pour « je n’aime pas », ajoute **nicht**.',
      tables: [{ title: 'mögen (to like)', titleFr: 'mögen (aimer)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen']], rowsFr: [['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'mag', role: 'verb' }, { text: 'Kaffee.', role: 'accusative' }], en: 'I like coffee.', fr: 'J’aime le café.' },
        { parts: [{ text: 'Magst', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'Brot?', role: 'accusative' }], en: 'Do you like bread?', fr: 'Aimes-tu le pain ?' },
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'mag', role: 'verb' }, { text: 'Wasser', role: 'accusative' }, { text: 'nicht.', role: 'connector' }], en: 'She does not like water.', fr: 'Elle n’aime pas l’eau.' },
      ],
      contrast: {
        a: { label: 'mögen + noun', labelFr: 'mögen + nom', note: 'I like the thing', noteFr: 'j’aime la chose', examples: [g('Ich mag Kaffee.', 'I like coffee.', 'J’aime le café.'), g('Er mag Brot.', 'He likes bread.', 'Il aime le pain.')] },
        b: { label: 'verb + gern', labelFr: 'verbe + gern', note: 'I like doing it', noteFr: 'j’aime le faire', examples: [g('Ich trinke gern Kaffee.', 'I like drinking coffee.', 'J’aime boire du café.'), g('Er isst gern Brot.', 'He likes eating bread.', 'Il aime manger du pain.')] },
      },
      examples: [
        g('Ich mag Kaffee.', 'I like coffee.', 'J’aime le café.'),
        g('Magst du Brot?', 'Do you like bread?', 'Aimes-tu le pain ?'),
        g('Sie mag Wasser nicht.', 'She does not like water.', 'Elle n’aime pas l’eau.'),
        g('Wir mögen Äpfel.', 'We like apples.', 'Nous aimons les pommes.'),
        g('Ich trinke gern Kaffee.', 'I like drinking coffee.', 'J’aime boire du café.'),
        g('Mögt ihr Milch?', 'Do you (pl.) like milk?', 'Aimez-vous le lait ?'),
      ],
      mistakes: [
        { wrong: 'Du mag Kaffee.', right: 'Du magst Kaffee.', why: 'du takes magst.', whyFr: 'du prend magst.' },
        { wrong: 'Ich mag trinken Kaffee.', right: 'Ich trinke gern Kaffee.', why: 'With a verb, use gern, not mögen.', whyFr: 'Avec un verbe, utilise gern, pas mögen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l6-e1', prompt: 'Ich ___ Kaffee. (mögen, ich-form)', answer: 'mag', hint: 'first person singular of mögen', hintFr: 'première personne du singulier de mögen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l6-e6', prompt: 'Ich habe ___. (I am hungry)', answer: 'Hunger', hint: 'German says "I have hunger".', hintFr: 'L’allemand dit « j’ai faim » = « ich habe Hunger ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l6-e10', prompt: 'Das Brot ist ___! (delicious)', answer: 'lecker', hint: 'the adjective meaning "tasty"', hintFr: 'l’adjectif qui signifie « délicieux »' } },

    // ───────────── 3 · Ordering ─────────────
    { kind: 'chapter', title: 'Höflich bestellen', titleFr: 'Commander poliment', blurb: 'Ich möchte …, bitte.', blurbFr: 'Ich möchte …, bitte.' },

    { kind: 'situation', title: 'Im Café', titleFr: 'Au café',
      setting: 'Mia orders in a café.', settingFr: 'Mia passe commande dans un café.',
      lines: [
        line('Kellner', 'Guten Tag! Was möchten Sie?', 'Good day! What would you like?', 'Bonjour ! Que désirez-vous ?'),
        line('Mia', 'Ich möchte einen Kaffee mit Milch, bitte.', 'I would like a coffee with milk, please.', 'Je voudrais un café au lait, s’il vous plaît.'),
        line('Kellner', 'Gern. Möchten Sie auch etwas essen?', 'Gladly. Would you also like something to eat?', 'Volontiers. Désirez-vous aussi manger quelque chose ?'),
        line('Mia', 'Ja, ein Brot, bitte.', 'Yes, a bread, please.', 'Oui, un pain, s’il vous plaît.'),
        line('Kellner', 'Kommt sofort!', 'Coming right up!', 'Tout de suite !'),
        line('Mia', 'Danke!', 'Thank you!', 'Merci !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l6-e13', prompt: 'What does Mia order to eat?', promptFr: 'Que commande Mia à manger ?', options: ['Bread', 'An apple', 'Nothing'], optionsFr: ['Du pain', 'Une pomme', 'Rien'], answer: 0, explain: 'She says: “Ja, ein Brot, bitte.”', explainFr: 'Elle dit : « Ja, ein Brot, bitte. »', hint: 'Look at Mia’s second answer.', hintFr: 'Regarde la deuxième réponse de Mia.' } },

    { kind: 'grammar', note: {
      id: 'l6-moechte', title: 'Ich möchte …: ordering politely', titleFr: 'Ich möchte … : commander poliment',
      lead: 'möchte is the polite “I would like”. Add bitte. Use möchten Sie with strangers.',
      leadFr: 'möchte est le « je voudrais » poli. Ajoute bitte. Utilise möchten Sie avec les inconnus.',
      explanationMd: '**Ich möchte …** means “I would like …” and is the polite way to order or ask for something. It works like the modal verb **können**: **möchte** in **position 2**, the thing you want after it. Always add **bitte**. With strangers or staff use **Sie**: **Möchten Sie …?**',
      explanationMdFr: '**Ich möchte …** signifie « je voudrais … » et c’est la façon polie de commander ou de demander. Il se place comme le modal **können** : **möchte** en **position 2**, puis ce que tu veux. Ajoute toujours **bitte**. Avec des inconnus ou du personnel, utilise **Sie** : **Möchten Sie … ?**',
      tables: [{ title: 'möchten (would like)', titleFr: 'möchten (vouloir, poliment)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten']], rowsFr: [['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'möchte', role: 'verb' }, { text: 'einen Kaffee,', role: 'accusative' }, { text: 'bitte.', role: 'connector' }], en: 'I would like a coffee, please.', fr: 'Je voudrais un café, s’il vous plaît.' },
        { parts: [{ text: 'Möchtest', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'ein Wasser?', role: 'accusative' }], en: 'Would you like a water?', fr: 'Voudrais-tu une eau ?' },
      ],
      contrast: {
        a: { label: 'du (friends)', labelFr: 'du (amis)', note: 'Möchtest du …?', noteFr: 'Möchtest du … ?', examples: [g('Möchtest du einen Kaffee?', 'Would you like a coffee?', 'Voudrais-tu un café ?'), g('Möchtest du ein Brot?', 'Would you like a bread?', 'Voudrais-tu un pain ?')] },
        b: { label: 'Sie (strangers, staff)', labelFr: 'Sie (inconnus, personnel)', note: 'Möchten Sie …?', noteFr: 'Möchten Sie … ?', examples: [g('Was möchten Sie?', 'What would you like?', 'Que désirez-vous ?'), g('Möchten Sie auch etwas essen?', 'Would you also like something to eat?', 'Désirez-vous aussi manger quelque chose ?')] },
      },
      examples: [
        g('Ich möchte einen Kaffee, bitte.', 'I would like a coffee, please.', 'Je voudrais un café, s’il vous plaît.'),
        g('Ich möchte ein Brot, bitte.', 'I would like a bread, please.', 'Je voudrais un pain, s’il vous plaît.'),
        g('Möchtest du einen Kaffee?', 'Would you like a coffee?', 'Voudrais-tu un café ?'),
        g('Was möchten Sie?', 'What would you like?', 'Que désirez-vous ?'),
        g('Ich möchte Kaffee mit Milch.', 'I would like coffee with milk.', 'Je voudrais du café au lait.'),
        g('Wir möchten zwei Wasser, bitte.', 'We would like two waters, please.', 'Nous voudrions deux eaux, s’il vous plaît.'),
      ],
      mistakes: [
        { wrong: 'Ich will einen Kaffee.', right: 'Ich möchte einen Kaffee, bitte.', why: 'will sounds like a demand; möchte and bitte are polite.', whyFr: 'will sonne comme un ordre ; möchte et bitte sont polis.' },
        { wrong: 'Ich möchte ein Kaffee.', right: 'Ich möchte einen Kaffee.', why: 'Kaffee is masculine: einen.', whyFr: 'Kaffee est masculin : einen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l6-e4', prompt: 'How do you politely order a coffee?', promptFr: 'Comment commande-t-on poliment un café ?', options: ['Ich mag Kaffee.', 'Ich möchte einen Kaffee, bitte.', 'Kaffee!'], answer: 1, explain: '"Ich möchte … bitte" is the polite way to order.', explainFr: '« Ich möchte … bitte » est la façon polie de commander.', hint: 'Look for "möchte" and "bitte".', hintFr: 'Cherche « möchte » et « bitte ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l6-e8', tokens: ['einen', 'möchte', 'Kaffee', 'Ich'], answer: ['Ich', 'möchte', 'einen', 'Kaffee'], hint: 'Subject, verb, then what you would like.', hintFr: 'Sujet, verbe, puis ce que tu voudrais.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l6-e7', prompt: 'Listen. What does the guest order?', promptFr: 'Écoute. Que commande le client ?', audio: { ttsText: 'Guten Tag! Ich möchte einen Kaffee mit Milch, bitte.' }, options: ['Coffee with milk', 'Water', 'Bread'], optionsFr: ['Café au lait', 'Eau', 'Pain'], answer: 0, hint: 'Listen after "Ich möchte".', hintFr: 'Écoute après « Ich möchte ».' } },

    { kind: 'pronunciation', focus: 'The "ö" in mögen and "ü" in Frühstück are rounded front vowels', focusFr: 'Le « ö » de mögen et le « ü » de Frühstück sont des voyelles antérieures arrondies', items: [{ id: 'l6-moegen-pron', german: 'mögen', english: 'to like', french: 'aimer', gender: null, syllables: ['MÖ', 'gen'], pronunciation: 'MOE-gen', example: { de: 'Ich mag Tee.', en: 'I like tea.', fr: 'J’aime le thé.' } }, { id: 'l6-fruehstueck-pron', german: 'Frühstück', english: 'breakfast', french: 'petit-déjeuner', gender: null, syllables: ['FRÜH', 'stück'], pronunciation: 'FRUE-shtuek', example: { de: 'Das Frühstück ist lecker.', en: 'Breakfast is tasty.', fr: 'Le petit-déjeuner est délicieux.' } }] },

    { kind: 'wrapup',
      summary: 'You can now name food and drink, use **ein / eine**, say what you like with **mögen**, and order politely with **Ich möchte …, bitte**. 🎉',
      summaryFr: 'Tu sais maintenant nommer des aliments et des boissons, utiliser **ein / eine**, dire ce que tu aimes avec **mögen**, et commander poliment avec **Ich möchte …, bitte**. 🎉',
      card: { title: 'Lesson 12 on one page', titleFr: 'La leçon 12 en une page', sections: [
        { heading: 'Articles', headingFr: 'Articles', rows: [g('ein Apfel / einen Apfel', 'der word: subject / object', 'mot en der : sujet / objet'), g('eine Milch', 'die word', 'mot en die'), g('ein Brot', 'das word', 'mot en das')] },
        { heading: 'mögen', headingFr: 'mögen', rows: [g('ich mag, du magst, er mag', 'I like …', 'j’aime …'), g('Ich mag Kaffee. / Ich trinke gern Kaffee.', 'noun: mögen · verb: gern', 'nom : mögen · verbe : gern')] },
        { heading: 'Ordering', headingFr: 'Commander', rows: [g('Ich möchte einen Kaffee, bitte.', 'I would like a coffee, please.', 'Je voudrais un café, s’il vous plaît.'), g('Was möchten Sie?', 'What would you like? (formal)', 'Que désirez-vous ? (formel)')] },
      ] } },
  ],
};
