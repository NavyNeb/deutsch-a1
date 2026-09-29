import type { Lesson } from '../types';

export const a2lektion8: Lesson = {
  id: 'a2-l8', level: 'A2', module: 3, number: 8,
  title: { de: 'Wo oder wohin?', en: 'Where or where to?', fr: 'Où ou vers où ?' },
  theme: 'Two-way prepositions: accusative for direction, dative for location',
  themeFr: 'Les prépositions mixtes : accusatif pour la direction, datif pour le lieu',
  goals: ['Learn the two-way prepositions', 'Use the dative for location (Wo?)', 'Use the accusative for direction (Wohin?)', 'Use verb pairs like liegen/legen and stehen/stellen'],
  goalsFr: ['Apprendre les prépositions mixtes', 'Utiliser le datif pour le lieu (Wo?)', 'Utiliser l’accusatif pour la direction (Wohin?)', 'Utiliser les paires liegen/legen et stehen/stellen'],
  steps: [
    { kind: 'intro', title: 'Wo? Wohin? 📦', titleFr: 'Où ? Vers où ? 📦',
      scene: 'Tidying a room: where things are and where they go.', sceneFr: 'On range une pièce : où sont les choses et où elles vont.',
      goals: ['Learn in/an/auf/über/unter/neben/vor/hinter/zwischen', 'Use dative for location (Wo?)', 'Use accusative for direction (Wohin?)', 'Use liegen/legen and stehen/stellen'],
      goalsFr: ['Apprendre in/an/auf/über/unter/neben/vor/hinter/zwischen', 'Utiliser le datif pour le lieu (Wo?)', 'Utiliser l’accusatif pour la direction (Wohin?)', 'Utiliser liegen/legen et stehen/stellen'] },

    { kind: 'vocab', item: { id: 'a2l8-auf', german: 'auf', english: 'on / onto', french: 'sur', gender: null, syllables: ['AUF'], pronunciation: 'owf', example: { de: 'Das Buch liegt auf dem Tisch.', en: 'The book is on the table.', fr: 'Le livre est sur la table.' } } },
    { kind: 'vocab', item: { id: 'a2l8-unter', german: 'unter', english: 'under', french: 'sous', gender: null, syllables: ['UN', 'ter'], pronunciation: 'OON-ter', example: { de: 'Die Katze ist unter dem Tisch.', en: 'The cat is under the table.', fr: 'Le chat est sous la table.' } } },
    { kind: 'vocab', item: { id: 'a2l8-neben', german: 'neben', english: 'next to', french: 'à côté de', gender: null, syllables: ['NE', 'ben'], pronunciation: 'NAY-ben', example: { de: 'Der Stuhl steht neben dem Bett.', en: 'The chair is next to the bed.', fr: 'La chaise est à côté du lit.' } } },
    { kind: 'vocab', item: { id: 'a2l8-vor', german: 'vor', english: 'in front of', french: 'devant', gender: null, syllables: ['VOR'], pronunciation: 'for', example: { de: 'Das Auto steht vor dem Haus.', en: 'The car is in front of the house.', fr: 'La voiture est devant la maison.' } } },
    { kind: 'vocab', item: { id: 'a2l8-hinter', german: 'hinter', english: 'behind', french: 'derrière', gender: null, syllables: ['HIN', 'ter'], pronunciation: 'HIN-ter', example: { de: 'Der Garten ist hinter dem Haus.', en: 'The garden is behind the house.', fr: 'Le jardin est derrière la maison.' } } },
    { kind: 'vocab', item: { id: 'a2l8-zwischen', german: 'zwischen', english: 'between', french: 'entre', gender: null, syllables: ['ZWI', 'schen'], pronunciation: 'TSVISH-en', example: { de: 'Die Lampe ist zwischen den Betten.', en: 'The lamp is between the beds.', fr: 'La lampe est entre les lits.' } } },
    { kind: 'vocab', item: { id: 'a2l8-legen', german: 'legen', english: 'to lay / put down', french: 'poser (à plat)', gender: null, syllables: ['LE', 'gen'], pronunciation: 'LAY-gen', example: { de: 'Ich lege das Buch auf den Tisch.', en: 'I put the book on the table.', fr: 'Je pose le livre sur la table.' } } },
    { kind: 'vocab', item: { id: 'a2l8-liegen', german: 'liegen', english: 'to lie / be lying', french: 'être posé / être allongé', gender: null, syllables: ['LIE', 'gen'], pronunciation: 'LEE-gen', example: { de: 'Das Buch liegt auf dem Tisch.', en: 'The book is (lying) on the table.', fr: 'Le livre est (posé) sur la table.' } } },
    { kind: 'vocab', item: { id: 'a2l8-stellen', german: 'stellen', english: 'to put / place (upright)', french: 'mettre (debout)', gender: null, syllables: ['STEL', 'len'], pronunciation: 'SHTELL-en', example: { de: 'Ich stelle die Lampe auf den Tisch.', en: 'I put the lamp on the table.', fr: 'Je mets la lampe sur la table.' } } },
    { kind: 'vocab', item: { id: 'a2l8-wand', german: 'die Wand', english: 'the wall', french: 'le mur', gender: 'die', syllables: ['WAND'], pronunciation: 'dee VAHNT', example: { de: 'Das Bild hängt an der Wand.', en: 'The picture hangs on the wall.', fr: 'Le tableau est accroché au mur.' } } },

    { kind: 'grammar', note: {
      id: 'a2l8-wechsel', title: 'The two-way prepositions', titleFr: 'Les prépositions mixtes',
      explanationMd: 'These nine prepositions take **either** case:\n\n- **in, an, auf, über, unter, vor, hinter, neben, zwischen**\n\n- **Wo?** (location, no movement) → **dative**\n- **Wohin?** (direction, movement) → **accusative**',
      explanationMdFr: 'Ces neuf prépositions prennent **l’un ou l’autre** cas :\n\n- **in, an, auf, über, unter, vor, hinter, neben, zwischen**\n\n- **Wo?** (lieu, sans mouvement) → **datif**\n- **Wohin?** (direction, mouvement) → **accusatif**',
      examples: [
        { de: 'Wo ist das Buch? — Auf dem Tisch. (dative)', en: 'Where is the book? — On the table.', fr: 'Où est le livre ? — Sur la table.' },
        { de: 'Wohin legst du das Buch? — Auf den Tisch. (accusative)', en: 'Where do you put the book? — Onto the table.', fr: 'Où poses-tu le livre ? — Sur la table.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l8-ort-dativ', title: 'Location (Wo?) → dative', titleFr: 'Le lieu (Wo?) → datif',
      explanationMd: 'No movement = **dative**. Use "position" verbs like **liegen, stehen, hängen, sein**:\n\n- Das Buch **liegt auf dem** Tisch. (der → dem)\n- Das Bild **hängt an der** Wand. (die → der)\n- Die Katze ist **unter dem** Bett.',
      explanationMdFr: 'Pas de mouvement = **datif**. Utilise des verbes de « position » comme **liegen, stehen, hängen, sein** :\n\n- Das Buch **liegt auf dem** Tisch. (der → dem)\n- Das Bild **hängt an der** Wand. (die → der)\n- Die Katze ist **unter dem** Bett.',
      examples: [
        { de: 'Der Stuhl steht neben dem Tisch.', en: 'The chair stands next to the table.', fr: 'La chaise est à côté de la table.' },
        { de: 'Die Lampe ist auf dem Tisch.', en: 'The lamp is on the table.', fr: 'La lampe est sur la table.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l8-richtung-akk', title: 'Direction (Wohin?) → accusative', titleFr: 'La direction (Wohin?) → accusatif',
      explanationMd: 'Movement = **accusative**. Use "putting" verbs like **legen, stellen, hängen, gehen**:\n\n- Ich **lege** das Buch **auf den** Tisch. (der → den)\n- Ich **hänge** das Bild **an die** Wand. (die → die)\n- Ich **stelle** die Lampe **auf den** Tisch.',
      explanationMdFr: 'Mouvement = **accusatif**. Utilise des verbes de « déplacement » comme **legen, stellen, hängen, gehen** :\n\n- Ich **lege** das Buch **auf den** Tisch. (der → den)\n- Ich **hänge** das Bild **an die** Wand. (die → die)\n- Ich **stelle** die Lampe **auf den** Tisch.',
      examples: [
        { de: 'Ich stelle den Stuhl neben das Bett.', en: 'I put the chair next to the bed.', fr: 'Je mets la chaise à côté du lit.' },
        { de: 'Häng das Bild an die Wand!', en: 'Hang the picture on the wall!', fr: 'Accroche le tableau au mur !' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l8-e1', prompt: 'Das Buch liegt auf ___ Tisch. (location: der → ?)', answer: 'dem', hint: 'location = dative: der → dem', hintFr: 'lieu = datif : der → dem' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l8-e2', prompt: 'Ich lege das Buch auf ___ Tisch. (direction: der → ?)', answer: 'den', hint: 'direction = accusative: der → den', hintFr: 'direction = accusatif : der → den' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l8-e3', prompt: 'Which question asks about LOCATION?', promptFr: 'Quelle question porte sur le LIEU ?', options: ['Wohin?', 'Wo?', 'Woher?'], answer: 1, explain: '"Wo?" asks about location (dative).', explainFr: '« Wo? » porte sur le lieu (datif).', hint: '"Wohin" is direction; "Wo" is location.', hintFr: '« Wohin » = direction ; « Wo » = lieu.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l8-e4', pairs: [ { de: 'unter', en: 'under', fr: 'sous' }, { de: 'neben', en: 'next to', fr: 'à côté de' }, { de: 'zwischen', en: 'between', fr: 'entre' } ], hint: 'Match each preposition to its meaning.', hintFr: 'Associe chaque préposition à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l8-e5', prompt: 'Listen. Where is the cat?', promptFr: 'Écoute. Où est le chat ?', audio: { ttsText: 'Wo ist die Katze? Die Katze liegt unter dem Bett.' }, options: ['Under the bed', 'On the bed', 'Next to the bed'], optionsFr: ['Sous le lit', 'Sur le lit', 'À côté du lit'], answer: 0, hint: 'Listen for the preposition before "dem Bett".', hintFr: 'Écoute la préposition avant « dem Bett ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l8-e6', prompt: 'Which sentence shows DIRECTION (accusative)?', promptFr: 'Quelle phrase montre la DIRECTION (accusatif) ?', options: ['Das Bild hängt an der Wand.', 'Ich hänge das Bild an die Wand.', 'Das Bild ist an der Wand.'], answer: 1, explain: 'Movement + accusative: an die Wand.', explainFr: 'Mouvement + accusatif : an die Wand.', hint: 'Look for a verb of movement + "die".', hintFr: 'Cherche un verbe de mouvement + « die ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l8-e7', word: 'Wand', answer: 'die', hint: '"Wand" (wall) is feminine.', hintFr: '« Wand » (mur) est féminin.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l8-e8', tokens: ['dem', 'steht', 'Der', 'neben', 'Bett', 'Stuhl'], answer: ['Der', 'Stuhl', 'steht', 'neben', 'dem', 'Bett'], hint: 'Location with "steht" → dative "dem".', hintFr: 'Lieu avec « steht » → datif « dem ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l8-e9', prompt: 'Das Bild hängt an ___ Wand. (location: die → ?)', answer: 'der', hint: 'location = dative: die → der', hintFr: 'lieu = datif : die → der' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l8-e10', prompt: 'Listen. Where does Tom put the lamp?', promptFr: 'Écoute. Où Tom met-il la lampe ?', audio: { ttsText: 'Ich stelle die Lampe auf den Tisch.' }, options: ['Onto the table', 'Under the table', 'Next to the bed'], optionsFr: ['Sur la table', 'Sous la table', 'À côté du lit'], answer: 0, hint: 'Movement "stelle … auf den Tisch".', hintFr: 'Mouvement « stelle … auf den Tisch ».' } },

    { kind: 'pronunciation', focus: 'The "z" is "ts" (zwischen) and "w" is "v" (Wand, zwischen)', focusFr: 'Le « z » est « ts » (zwischen) et « w » est « v » (Wand, zwischen)', items: [
      { id: 'a2l8-zwischen-pron', german: 'zwischen', english: 'between', french: 'entre', gender: null, syllables: ['ZWI', 'schen'], pronunciation: 'TSVISH-en', example: { de: 'Zwischen den Häusern.', en: 'Between the houses.', fr: 'Entre les maisons.' } },
      { id: 'a2l8-wand-pron', german: 'Wand', english: 'wall', french: 'mur', gender: null, syllables: ['WAND'], pronunciation: 'VAHNT', example: { de: 'Das Bild ist an der Wand.', en: 'The picture is on the wall.', fr: 'Le tableau est au mur.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now use the two-way prepositions (in, an, auf, über, unter, vor, hinter, neben, zwischen): **Wo?** (location) → **dative**, **Wohin?** (direction) → **accusative**. Position verbs (liegen, stehen) take dative; movement verbs (legen, stellen) take accusative. 🎉',
      summaryFr: 'Tu sais maintenant utiliser les prépositions mixtes (in, an, auf, über, unter, vor, hinter, neben, zwischen) : **Wo?** (lieu) → **datif**, **Wohin?** (direction) → **accusatif**. Les verbes de position (liegen, stehen) prennent le datif ; les verbes de mouvement (legen, stellen) l’accusatif. 🎉' },
  ],
};
