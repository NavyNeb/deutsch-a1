import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion9: Lesson = {
  id: 'l9', level: 'A1', module: 3, number: 14,
  title: { de: 'Wohnen', en: 'Living / Home', fr: 'Le logement' },
  theme: 'Home, rooms, furniture, and saying what there is', themeFr: 'Le logement, les pièces, les meubles et dire ce qu’il y a',
  goals: ['Name rooms and furniture', 'Say where you live with "wohnen"', 'Use "es gibt" to say what there is', 'Say where something is with "in" and "auf"'], goalsFr: ['Nommer les pièces et les meubles', 'Dire où l’on habite avec « wohnen »', 'Utiliser « es gibt » pour dire ce qu’il y a', 'Dire où se trouve quelque chose avec « in » et « auf »'],
  canDo: g('Ich kann sagen, wo ich wohne, meine Wohnung beschreiben und sagen, wo etwas ist.', 'I can say where I live, describe my home and say where something is.', 'Je sais dire où j’habite, décrire mon logement et dire où se trouve quelque chose.'),
  steps: [
    { kind: 'intro', title: 'Wohnen 🏠', titleFr: 'Le logement 🏠',
      scene: 'Mia tells Jonas about her flat.', sceneFr: 'Mia parle de son appartement à Jonas.',
      goals: ['Say where you live with wohnen', 'Name rooms and furniture', 'Say what there is with es gibt', 'Say where something is with in and auf'],
      goalsFr: ['Dire où tu habites avec wohnen', 'Nommer les pièces et les meubles', 'Dire ce qu’il y a avec es gibt', 'Dire où se trouve quelque chose avec in et auf'] },

    // ───────────── 1 · Where you live ─────────────
    { kind: 'chapter', title: 'Wo wohnst du?', titleFr: 'Où habites-tu ?', blurb: 'Say where you live and name the rooms.', blurbFr: 'Dire où tu habites et nommer les pièces.' },

    { kind: 'situation', title: 'Meine Wohnung', titleFr: 'Mon appartement',
      setting: 'Mia tells Jonas about her flat.', settingFr: 'Mia parle à Jonas de son appartement.',
      lines: [
        line('Jonas', 'Wo wohnst du, Mia?', 'Where do you live, Mia?', 'Où habites-tu, Mia ?'),
        line('Mia', 'Ich wohne in einer Wohnung in Berlin. Die Wohnung ist klein.', 'I live in a flat in Berlin. The flat is small.', 'J’habite dans un appartement à Berlin. L’appartement est petit.'),
        line('Jonas', 'Wie viele Zimmer hat sie?', 'How many rooms does it have?', 'Combien de pièces a-t-il ?'),
        line('Mia', 'Es gibt drei Zimmer, eine Küche und ein Bad.', 'There are three rooms, a kitchen and a bathroom.', 'Il y a trois pièces, une cuisine et une salle de bain.'),
        line('Jonas', 'Ich wohne in einem Haus.', 'I live in a house.', 'J’habite dans une maison.'),
      ],
      words: [{ id: 'l9-wohnen', german: 'wohnen', english: 'to live / reside', french: 'habiter', gender: null, syllables: ['WOH', 'nen'], pronunciation: 'VOH-nen', example: { de: 'Ich wohne in Berlin.', en: 'I live in Berlin.', fr: 'J’habite à Berlin.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l9-e11', prompt: 'How many rooms does Mia’s flat have?', promptFr: 'Combien de pièces a l’appartement de Mia ?', options: ['Three, plus a kitchen and a bathroom', 'Two', 'Five'], optionsFr: ['Trois, plus une cuisine et une salle de bain', 'Deux', 'Cinq'], answer: 0, explain: 'She says: “Es gibt drei Zimmer, eine Küche und ein Bad.”', explainFr: 'Elle dit : « Es gibt drei Zimmer, eine Küche und ein Bad. »', hint: 'Look for “drei Zimmer”.', hintFr: 'Cherche « drei Zimmer ».' } },

    { kind: 'wordgroup', title: 'Wohnung und Zimmer', titleFr: 'Logement et pièces',
      items: [{ id: 'l9-wohnung', german: 'die Wohnung', english: 'the apartment', french: 'l’appartement', gender: 'die', syllables: ['WOH', 'nung'], pronunciation: 'dee VOH-noong', example: { de: 'Meine Wohnung ist klein.', en: 'My apartment is small.', fr: 'Mon appartement est petit.' } }, { id: 'l9-haus', german: 'das Haus', english: 'the house', french: 'la maison', gender: 'das', syllables: ['HAUS'], pronunciation: 'dahs HOWSS', example: { de: 'Das Haus ist groß.', en: 'The house is big.', fr: 'La maison est grande.' } }, { id: 'l9-zimmer', german: 'das Zimmer', english: 'the room', french: 'la pièce / chambre', gender: 'das', syllables: ['ZIM', 'mer'], pronunciation: 'dahs TSIM-mer', example: { de: 'Die Wohnung hat drei Zimmer.', en: 'The apartment has three rooms.', fr: 'L’appartement a trois pièces.' } }, { id: 'l9-kueche', german: 'die Küche', english: 'the kitchen', french: 'la cuisine', gender: 'die', syllables: ['KÜ', 'che'], pronunciation: 'dee KUE-khe', example: { de: 'Ich koche in der Küche.', en: 'I cook in the kitchen.', fr: 'Je cuisine dans la cuisine.' } }, { id: 'l9-bad', german: 'das Bad', english: 'the bathroom', french: 'la salle de bain', gender: 'das', syllables: ['BAD'], pronunciation: 'dahs BAHT', example: { de: 'Das Bad ist klein.', en: 'The bathroom is small.', fr: 'La salle de bain est petite.' } }] },

    { kind: 'grammar', note: {
      id: 'l9-wohnen-note', title: 'wohnen: to live somewhere', titleFr: 'wohnen : habiter quelque part',
      lead: 'Ask Wo wohnst du? Answer with in + place. A city has no article, a building does.',
      leadFr: 'Demande Wo wohnst du ? Réponds avec in + lieu. Une ville n’a pas d’article, un bâtiment si.',
      explanationMd: '**wohnen** is a **regular** verb. Ask **Wo wohnst du?** and answer with **in** + place. A **city or country** has **no article**: **in Berlin**. A **building** takes the **dative** article: **in einer Wohnung**, **in einem Haus** (you will learn the dative in detail later; for now learn these two phrases).',
      explanationMdFr: '**wohnen** est un verbe **régulier**. Demande **Wo wohnst du ?** et réponds avec **in** + lieu. Une **ville ou un pays** n’a **pas d’article** : **in Berlin**. Un **bâtiment** prend l’article au **datif** : **in einer Wohnung**, **in einem Haus** (tu étudieras le datif en détail plus tard ; pour l’instant, retiens ces deux expressions).',
      tables: [{ title: 'wohnen (to live)', titleFr: 'wohnen (habiter)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['wohne', 'wohnst', 'wohnt', 'wohnen', 'wohnt', 'wohnen']], rowsFr: [['wohne', 'wohnst', 'wohnt', 'wohnen', 'wohnt', 'wohnen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'wohne', role: 'verb' }, { text: 'in Berlin.', role: 'place' }], en: 'I live in Berlin.', fr: 'J’habite à Berlin.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'wohne', role: 'verb' }, { text: 'in einer Wohnung.', role: 'place' }], en: 'I live in a flat.', fr: 'J’habite dans un appartement.' },
      ],
      contrast: {
        a: { label: 'in + city', labelFr: 'in + ville', note: 'no article', noteFr: 'pas d’article', examples: [g('Ich wohne in Berlin.', 'I live in Berlin.', 'J’habite à Berlin.'), g('Sie wohnt in Wien.', 'She lives in Vienna.', 'Elle habite à Vienne.')] },
        b: { label: 'in + building', labelFr: 'in + bâtiment', note: 'einer / einem', noteFr: 'einer / einem', examples: [g('Ich wohne in einer Wohnung.', 'I live in a flat.', 'J’habite dans un appartement.'), g('Er wohnt in einem Haus.', 'He lives in a house.', 'Il habite dans une maison.')] },
      },
      examples: [
        g('Wo wohnst du?', 'Where do you live?', 'Où habites-tu ?'),
        g('Ich wohne in einer Wohnung.', 'I live in a flat.', 'J’habite dans un appartement.'),
        g('Meine Wohnung ist klein.', 'My flat is small.', 'Mon appartement est petit.'),
        g('Das Haus ist groß.', 'The house is big.', 'La maison est grande.'),
        g('Die Wohnung hat drei Zimmer.', 'The flat has three rooms.', 'L’appartement a trois pièces.'),
        g('Wir wohnen in Hamburg.', 'We live in Hamburg.', 'Nous habitons à Hambourg.'),
        g('Das Bad ist klein.', 'The bathroom is small.', 'La salle de bain est petite.'),
      ],
      mistakes: [
        { wrong: 'Ich wohne an Berlin.', right: 'Ich wohne in Berlin.', why: 'Use in with a place where you live.', whyFr: 'Utilise in avec un lieu où l’on habite.' },
        { wrong: 'Er wohn in Wien.', right: 'Er wohnt in Wien.', why: 'er/sie/es takes -t.', whyFr: 'er/sie/es prend -t.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l9-e1', prompt: 'Ich ___ in Berlin. (wohnen)', answer: 'wohne', hint: 'first person singular of wohnen', hintFr: 'première personne du singulier de wohnen' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l9-e2', word: 'Küche', answer: 'die', hint: '"Küche" (kitchen) is feminine.', hintFr: '« Küche » (cuisine) est féminin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l9-e5', pairs: [{ de: 'die Küche', en: 'kitchen', fr: 'cuisine' }, { de: 'das Bad', en: 'bathroom', fr: 'salle de bain' }, { de: 'das Bett', en: 'bed', fr: 'lit' }], hint: 'Match each home word to its meaning.', hintFr: 'Associe chaque mot du logement à sa signification.' } },

    // ───────────── 2 · es gibt ─────────────
    { kind: 'chapter', title: 'Was es gibt: es gibt', titleFr: 'Ce qu’il y a : es gibt', blurb: 'Say what there is in a room.', blurbFr: 'Dire ce qu’il y a dans une pièce.' },

    { kind: 'situation', title: 'Gibt es …?', titleFr: 'Y a-t-il … ?',
      setting: 'Jonas asks what there is in Mia’s kitchen.', settingFr: 'Jonas demande ce qu’il y a dans la cuisine de Mia.',
      lines: [
        line('Jonas', 'Gibt es ein Sofa?', 'Is there a sofa?', 'Y a-t-il un canapé ?'),
        line('Mia', 'Nein, es gibt kein Sofa, aber es gibt einen Stuhl und einen Tisch.', 'No, there is no sofa, but there is a chair and a table.', 'Non, il n’y a pas de canapé, mais il y a une chaise et une table.'),
        line('Jonas', 'Und gibt es eine Lampe?', 'And is there a lamp?', 'Et y a-t-il une lampe ?'),
        line('Mia', 'Ja, es gibt zwei Lampen.', 'Yes, there are two lamps.', 'Oui, il y a deux lampes.'),
      ],
      words: [{ id: 'l9-esgibt', german: 'es gibt', english: 'there is / there are', french: 'il y a', gender: null, syllables: ['es', 'GIBT'], pronunciation: 'es GHIPT', example: { de: 'Es gibt einen Tisch.', en: 'There is a table.', fr: 'Il y a une table.' } }] },

    { kind: 'wordgroup', title: 'Möbel', titleFr: 'Les meubles',
      items: [{ id: 'l9-tisch', german: 'der Tisch', english: 'the table', french: 'la table', gender: 'der', syllables: ['TISCH'], pronunciation: 'dair TISH', example: { de: 'Der Tisch ist neu.', en: 'The table is new.', fr: 'La table est neuve.' } }, { id: 'l9-stuhl', german: 'der Stuhl', english: 'the chair', french: 'la chaise', gender: 'der', syllables: ['STUHL'], pronunciation: 'dair SHTOOL', example: { de: 'Der Stuhl ist am Tisch.', en: 'The chair is by the table.', fr: 'La chaise est à côté de la table.' } }, { id: 'l9-bett', german: 'das Bett', english: 'the bed', french: 'le lit', gender: 'das', syllables: ['BETT'], pronunciation: 'dahs BET', example: { de: 'Das Bett ist im Schlafzimmer.', en: 'The bed is in the bedroom.', fr: 'Le lit est dans la chambre.' } }] },

    { kind: 'grammar', note: {
      id: 'l9-esgibt-note', title: 'es gibt + accusative', titleFr: 'es gibt + accusatif',
      lead: 'es gibt means there is / there are. After it, only the masculine changes: einen.',
      leadFr: 'es gibt signifie il y a. Après, seul le masculin change : einen.',
      explanationMd: '**es gibt** means **“there is / there are”** and is always followed by the **accusative**, so the **masculine** becomes **einen** (as in lesson 7). The verb **gibt** does not change for singular or plural: **Es gibt einen Tisch. Es gibt zwei Lampen.**',
      explanationMdFr: '**es gibt** signifie **« il y a »** et est toujours suivi de l’**accusatif** : le **masculin** devient donc **einen** (comme à la leçon 7). Le verbe **gibt** ne change pas au singulier ou au pluriel : **Es gibt einen Tisch. Es gibt zwei Lampen.**',
      tables: [{ title: 'es gibt + …', titleFr: 'es gibt + …', headers: ['Gender', 'Sentence'], headersFr: ['Genre', 'Phrase'],
        rows: [['der Tisch', 'Es gibt einen Tisch.'], ['die Küche', 'Es gibt eine Küche.'], ['das Bad', 'Es gibt ein Bad.'], ['plural', 'Es gibt zwei Lampen.']],
        rowsFr: [['der Tisch', 'Es gibt einen Tisch.'], ['die Küche', 'Es gibt eine Küche.'], ['das Bad', 'Es gibt ein Bad.'], ['pluriel', 'Es gibt zwei Lampen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'gibt', role: 'verb' }, { text: 'einen Tisch.', role: 'accusative' }], en: 'There is a table.', fr: 'Il y a une table.' },
        { parts: [{ text: 'Gibt', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'ein Bad?', role: 'accusative' }], en: 'Is there a bathroom?', fr: 'Y a-t-il une salle de bain ?' },
      ],
      contrast: {
        a: { label: 'Es gibt … (exists)', labelFr: 'Es gibt … (existence)', note: 'there is something', noteFr: 'il y a quelque chose', examples: [g('Es gibt einen Stuhl.', 'There is a chair.', 'Il y a une chaise.'), g('Es gibt kein Sofa.', 'There is no sofa.', 'Il n’y a pas de canapé.')] },
        b: { label: 'Das ist … (identifies)', labelFr: 'Das ist … (identifie)', note: 'this is a thing', noteFr: 'c’est une chose', examples: [g('Das ist ein Stuhl.', 'That is a chair.', 'C’est une chaise.'), g('Das ist ein Bad.', 'That is a bathroom.', 'C’est une salle de bain.')] },
      },
      examples: [
        g('Es gibt einen Stuhl und einen Tisch.', 'There is a chair and a table.', 'Il y a une chaise et une table.'),
        g('Gibt es ein Bad?', 'Is there a bathroom?', 'Y a-t-il une salle de bain ?'),
        g('Es gibt eine Küche.', 'There is a kitchen.', 'Il y a une cuisine.'),
        g('Es gibt kein Sofa.', 'There is no sofa.', 'Il n’y a pas de canapé.'),
        g('Es gibt zwei Lampen.', 'There are two lamps.', 'Il y a deux lampes.'),
        g('Es gibt drei Zimmer.', 'There are three rooms.', 'Il y a trois pièces.'),
      ],
      mistakes: [
        { wrong: 'Es gibt ein Tisch.', right: 'Es gibt einen Tisch.', why: 'After es gibt the accusative is used: der → einen.', whyFr: 'Après es gibt on utilise l’accusatif : der → einen.' },
        { wrong: 'Es gibt zwei Lampen sind.', right: 'Es gibt zwei Lampen.', why: 'es gibt is the whole verb; do not add sind.', whyFr: 'es gibt est le verbe entier ; n’ajoute pas sind.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l9-e4', prompt: 'Es gibt ___ Tisch. (a — masculine accusative)', answer: 'einen', hint: 'es gibt takes the accusative: der → einen', hintFr: 'es gibt prend l’accusatif : der → einen' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l9-e8', tokens: ['einen', 'Es', 'Tisch', 'gibt'], answer: ['Es', 'gibt', 'einen', 'Tisch'], hint: '"Es gibt" first, then the object in the accusative.', hintFr: '« Es gibt » d’abord, puis l’objet à l’accusatif.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l9-e6', prompt: 'Listen. How many rooms does the apartment have?', promptFr: 'Écoute. Combien de pièces a l’appartement ?', audio: { ttsText: 'Meine Wohnung ist schön. Es gibt drei Zimmer und eine Küche.' }, options: ['2', '3', '4'], answer: 1, hint: 'Listen for the number before "Zimmer".', hintFr: 'Écoute le nombre avant « Zimmer ».' } },

    // ───────────── 3 · in and auf ─────────────
    { kind: 'chapter', title: 'Wo ist es? in und auf', titleFr: 'Où est-ce ? in et auf', blurb: 'Say where something is.', blurbFr: 'Dire où se trouve quelque chose.' },

    { kind: 'situation', title: 'Wo ist …?', titleFr: 'Où est … ?',
      setting: 'Jonas looks for things in Mia’s flat.', settingFr: 'Jonas cherche des choses dans l’appartement de Mia.',
      lines: [
        line('Jonas', 'Wo ist der Kaffee?', 'Where is the coffee?', 'Où est le café ?'),
        line('Mia', 'Der Kaffee ist auf dem Tisch.', 'The coffee is on the table.', 'Le café est sur la table.'),
        line('Jonas', 'Und wo ist das Bett?', 'And where is the bed?', 'Et où est le lit ?'),
        line('Mia', 'Das Bett ist im Schlafzimmer. Der Tisch ist in der Küche.', 'The bed is in the bedroom. The table is in the kitchen.', 'Le lit est dans la chambre. La table est dans la cuisine.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l9-e12', prompt: 'Where is the coffee?', promptFr: 'Où est le café ?', options: ['On the table', 'In the kitchen', 'In the bedroom'], optionsFr: ['Sur la table', 'Dans la cuisine', 'Dans la chambre'], answer: 0, explain: 'Mia says: “Der Kaffee ist auf dem Tisch.”', explainFr: 'Mia dit : « Der Kaffee ist auf dem Tisch. »', hint: 'Look for “auf”.', hintFr: 'Cherche « auf ».' } },

    { kind: 'grammar', note: {
      id: 'l9-in-auf', title: 'in and auf: where is it?', titleFr: 'in et auf : où est-ce ?',
      lead: 'Use in (inside) or auf (on top of). After them, the noun takes the dative: dem, der, dem.',
      leadFr: 'Utilise in (à l’intérieur) ou auf (dessus). Après, le nom prend le datif : dem, der, dem.',
      explanationMd: 'To say **where** something is, use **in** (inside) or **auf** (on top of) with the **dative** article: **der → dem**, **die → der**, **das → dem**. **in + dem** shrinks to **im**.\n\nThe dative is only a **small set of forms** you can learn as phrases for now: **auf dem Tisch, in der Küche, im Bad**.',
      explanationMdFr: 'Pour dire **où** est quelque chose, utilise **in** (à l’intérieur) ou **auf** (dessus) avec l’article au **datif** : **der → dem**, **die → der**, **das → dem**. **in + dem** se contracte en **im**.\n\nLe datif n’est qu’un **petit ensemble de formes** à retenir pour l’instant comme des expressions : **auf dem Tisch, in der Küche, im Bad**.',
      tables: [{ title: 'Where?', titleFr: 'Où ?', headers: ['Gender', 'in', 'auf'], headersFr: ['Genre', 'in', 'auf'],
        rows: [['der Tisch', 'in dem Tisch (rare)', 'auf dem Tisch'], ['die Küche', 'in der Küche', 'auf der Küche (rare)'], ['das Bad', 'im Bad (in dem)', 'auf dem Bad (rare)']],
        rowsFr: [['der Tisch', 'in dem Tisch (rare)', 'auf dem Tisch'], ['die Küche', 'in der Küche', 'auf der Küche (rare)'], ['das Bad', 'im Bad (in dem)', 'auf dem Bad (rare)']], highlightCol: 0 },
        { title: 'The dative article', titleFr: 'L’article au datif', headers: ['der', 'die', 'das'], headersFr: ['der', 'die', 'das'],
          rows: [['dem', 'der', 'dem']], rowsFr: [['dem', 'der', 'dem']] }],
      anatomy: [
        { parts: [{ text: 'Der Kaffee', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'auf dem Tisch.', role: 'dative' }], en: 'The coffee is on the table.', fr: 'Le café est sur la table.' },
        { parts: [{ text: 'Das Bett', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'im Schlafzimmer.', role: 'dative' }], en: 'The bed is in the bedroom.', fr: 'Le lit est dans la chambre.' },
      ],
      contrast: {
        a: { label: 'in', labelFr: 'in', note: 'inside a room or a building', noteFr: 'à l’intérieur d’une pièce ou d’un bâtiment', examples: [g('Der Tisch ist in der Küche.', 'The table is in the kitchen.', 'La table est dans la cuisine.'), g('Das Bett ist im Schlafzimmer.', 'The bed is in the bedroom.', 'Le lit est dans la chambre.')] },
        b: { label: 'auf', labelFr: 'auf', note: 'on top of a surface', noteFr: 'sur une surface', examples: [g('Der Kaffee ist auf dem Tisch.', 'The coffee is on the table.', 'Le café est sur la table.'), g('Das Handy ist auf dem Bett.', 'The phone is on the bed.', 'Le téléphone est sur le lit.')] },
      },
      examples: [
        g('Das Bett ist im Schlafzimmer.', 'The bed is in the bedroom.', 'Le lit est dans la chambre.'),
        g('Der Kaffee ist auf dem Tisch.', 'The coffee is on the table.', 'Le café est sur la table.'),
        g('Ich koche in der Küche.', 'I cook in the kitchen.', 'Je cuisine dans la cuisine.'),
        g('Der Stuhl ist am Tisch.', 'The chair is at the table.', 'La chaise est à la table.'),
        g('Das Buch ist im Bad.', 'The book is in the bathroom.', 'Le livre est dans la salle de bain.'),
        g('Die Lampe steht auf dem Tisch.', 'The lamp is on the table.', 'La lampe est sur la table.'),
      ],
      mistakes: [
        { wrong: 'Der Kaffee ist auf den Tisch.', right: 'Der Kaffee ist auf dem Tisch.', why: 'To say where something is, use the dative: dem.', whyFr: 'Pour dire où est quelque chose, utilise le datif : dem.' },
        { wrong: 'Der Tisch ist in die Küche.', right: 'Der Tisch ist in der Küche.', why: 'die becomes der in the dative.', whyFr: 'die devient der au datif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l9-e7', prompt: 'How do you say "in the kitchen"?', promptFr: 'Comment dit-on « dans la cuisine » ?', options: ['in die Küche', 'in der Küche', 'in dem Küche'], answer: 1, explain: 'Location uses the dative: die → der, so "in der Küche".', explainFr: 'Le lieu utilise le datif : die → der, donc « in der Küche ».', hint: 'Feminine "die" becomes "der" in the dative.', hintFr: 'Le féminin « die » devient « der » au datif.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l9-e9', prompt: 'Der Kaffee ist auf ___ Tisch. (dative: der → ?)', answer: 'dem', hint: 'der → dem in the dative', hintFr: 'der → dem au datif' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l9-e3', word: 'Tisch', answer: 'der', hint: '"Tisch" (table) is masculine.', hintFr: '« Tisch » (table) est masculin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l9-e10', prompt: 'Listen. Where is the bed?', promptFr: 'Écoute. Où est le lit ?', audio: { ttsText: 'Das Bett ist im Schlafzimmer und der Tisch ist in der Küche.' }, options: ['In the bedroom', 'In the kitchen', 'In the bathroom'], optionsFr: ['Dans la chambre', 'Dans la cuisine', 'Dans la salle de bain'], answer: 0, hint: 'Listen for "Bett ist im …".', hintFr: 'Écoute « Bett ist im … ».' } },

    { kind: 'pronunciation', focus: 'The "ü" in Küche is rounded, and its "ch" is the soft sound after a front vowel', focusFr: 'Le « ü » de Küche est arrondi, et son « ch » est le son doux après une voyelle antérieure', items: [{ id: 'l9-kueche-pron', german: 'Küche', english: 'kitchen', french: 'cuisine', gender: null, syllables: ['KÜ', 'che'], pronunciation: 'KUE-khe', example: { de: 'Die Küche ist neu.', en: 'The kitchen is new.', fr: 'La cuisine est neuve.' } }, { id: 'l9-wohnung-pron', german: 'Wohnung', english: 'apartment', french: 'appartement', gender: null, syllables: ['WOH', 'nung'], pronunciation: 'VOH-noong', example: { de: 'Die Wohnung ist groß.', en: 'The apartment is big.', fr: 'L’appartement est grand.' } }] },

    { kind: 'wrapup',
      summary: 'You can now say where you live with **wohnen**, name rooms and furniture, say what there is with **es gibt + einen**, and say where something is with **in / auf + dem / der**. 🎉',
      summaryFr: 'Tu sais maintenant dire où tu habites avec **wohnen**, nommer pièces et meubles, dire ce qu’il y a avec **es gibt + einen**, et dire où se trouve quelque chose avec **in / auf + dem / der**. 🎉',
      card: { title: 'Lesson 14 on one page', titleFr: 'La leçon 14 en une page', sections: [
        { heading: 'wohnen', headingFr: 'wohnen', rows: [g('Wo wohnst du? – Ich wohne in Berlin.', 'city: no article', 'ville : pas d’article'), g('in einer Wohnung, in einem Haus', 'building: einer / einem', 'bâtiment : einer / einem')] },
        { heading: 'es gibt', headingFr: 'es gibt', rows: [g('Es gibt einen Tisch, eine Küche, ein Bad.', 'there is …', 'il y a …')] },
        { heading: 'in and auf', headingFr: 'in et auf', rows: [g('dem / der / dem', 'dative: der / die / das', 'datif : der / die / das'), g('auf dem Tisch, in der Küche, im Bad', 'where is it?', 'où est-ce ?')] },
      ] } },
  ],
};
