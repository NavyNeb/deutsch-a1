import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion8: Lesson = {
  id: 'a2-l8', level: 'A2', module: 2, number: 8,
  title: { de: 'Wo oder wohin?', en: 'Where or where to?', fr: 'Où ou vers où ?' },
  theme: 'Two-way prepositions: accusative for direction, dative for location', themeFr: 'Les prépositions mixtes : accusatif pour la direction, datif pour le lieu',
  goals: ['Learn the two-way prepositions', 'Use the dative for location (Wo?)', 'Use the accusative for direction (Wohin?)', 'Use verb pairs like liegen/legen and stehen/stellen'], goalsFr: ['Apprendre les prépositions mixtes', 'Utiliser le datif pour le lieu (Wo?)', 'Utiliser l’accusatif pour la direction (Wohin?)', 'Utiliser les paires liegen/legen et stehen/stellen'],
  canDo: g('Ich kann sagen, wo etwas steht, liegt oder hängt, und wohin ich etwas stelle, lege oder hänge.', 'I can say where something stands, lies or hangs, and where I put, lay or hang something.', 'Je sais dire où quelque chose se trouve (debout, couché ou suspendu) et où je le pose, le couche ou le suspends.'),
  steps: [
    { kind: 'intro', title: 'Wo? Wohin? Wechselpräpositionen 🏠', titleFr: 'Wo ? Wohin ? Prépositions mixtes 🏠',
      scene: 'Lara and Tim set up their new flat and argue about where everything goes.', sceneFr: 'Lara et Tim aménagent leur nouvel appartement et se disputent sur la place de chaque chose.',
      goals: ['Learn the nine two-way prepositions', 'Use the dative for location (Wo?) and the accusative for direction (Wohin?)', 'Pair the verbs liegen/legen, stehen/stellen, hängen/hängen'],
      goalsFr: ['Apprendre les neuf prépositions mixtes', 'Utiliser le datif pour le lieu (Wo ?) et l’accusatif pour la direction (Wohin ?)', 'Associer les verbes liegen/legen, stehen/stellen, hängen/hängen'] },

    // ───────────── 1 · Where is it? ─────────────
    { kind: 'chapter', title: 'Wo ist es? Position', titleFr: 'Où est-ce ? La position', blurb: 'Location = dative.', blurbFr: 'Le lieu = datif.' },

    { kind: 'situation', title: 'Wo steht das Sofa?', titleFr: 'Où est le canapé ?',
      setting: 'Tim phones Lara from the moving truck.', settingFr: 'Tim appelle Lara depuis le camion de déménagement.',
      lines: [
        line('Tim', 'Wo ist denn die Lampe? Ich finde sie nicht.', 'Where is the lamp? I can’t find it.', 'Où est la lampe ? Je ne la trouve pas.'),
        line('Lara', 'Die Lampe steht auf dem Tisch, und das Buch liegt neben dem Bett.', 'The lamp is on the table, and the book is next to the bed.', 'La lampe est sur la table, et le livre est à côté du lit.'),
        line('Tim', 'Und die Katze?', 'And the cat?', 'Et le chat ?'),
        line('Lara', 'Die Katze ist unter dem Tisch. Der Stuhl steht vor dem Fenster.', 'The cat is under the table. The chair is in front of the window.', 'Le chat est sous la table. La chaise est devant la fenêtre.'),
        line('Tim', 'Und der Garten?', 'And the garden?', 'Et le jardin ?'),
        line('Lara', 'Der Garten ist hinter dem Haus. Das Bild hängt an der Wand zwischen den Fenstern.', 'The garden is behind the house. The picture hangs on the wall between the windows.', 'Le jardin est derrière la maison. Le tableau est accroché au mur, entre les fenêtres.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l8-e11', prompt: 'Where is the cat?', promptFr: 'Où est le chat ?', options: ['Under the table', 'On the table', 'Behind the house'], optionsFr: ['Sous la table', 'Sur la table', 'Derrière la maison'], answer: 0, explain: 'Lara says: “Die Katze ist unter dem Tisch.”', explainFr: 'Lara dit : « Die Katze ist unter dem Tisch. »', hint: 'Look for “unter”.', hintFr: 'Cherche « unter ».' } },

    { kind: 'wordgroup', title: 'Wo? — die Präpositionen', titleFr: 'Wo ? — les prépositions',
      items: [{ id: 'a2l8-auf', german: 'auf', english: 'on / onto', french: 'sur', gender: null, syllables: ['AUF'], pronunciation: 'owf', example: { de: 'Das Buch liegt auf dem Tisch.', en: 'The book is on the table.', fr: 'Le livre est sur la table.' } }, { id: 'a2l8-unter', german: 'unter', english: 'under', french: 'sous', gender: null, syllables: ['UN', 'ter'], pronunciation: 'OON-ter', example: { de: 'Die Katze ist unter dem Tisch.', en: 'The cat is under the table.', fr: 'Le chat est sous la table.' } }, { id: 'a2l8-neben', german: 'neben', english: 'next to', french: 'à côté de', gender: null, syllables: ['NE', 'ben'], pronunciation: 'NAY-ben', example: { de: 'Der Stuhl steht neben dem Bett.', en: 'The chair is next to the bed.', fr: 'La chaise est à côté du lit.' } }, { id: 'a2l8-vor', german: 'vor', english: 'in front of', french: 'devant', gender: null, syllables: ['VOR'], pronunciation: 'for', example: { de: 'Das Auto steht vor dem Haus.', en: 'The car is in front of the house.', fr: 'La voiture est devant la maison.' } }, { id: 'a2l8-hinter', german: 'hinter', english: 'behind', french: 'derrière', gender: null, syllables: ['HIN', 'ter'], pronunciation: 'HIN-ter', example: { de: 'Der Garten ist hinter dem Haus.', en: 'The garden is behind the house.', fr: 'Le jardin est derrière la maison.' } }, { id: 'a2l8-zwischen', german: 'zwischen', english: 'between', french: 'entre', gender: null, syllables: ['ZWI', 'schen'], pronunciation: 'TSVISH-en', example: { de: 'Die Lampe ist zwischen den Betten.', en: 'The lamp is between the beds.', fr: 'La lampe est entre les lits.' } }, { id: 'a2l8-wand', german: 'die Wand', english: 'the wall', french: 'le mur', gender: 'die', syllables: ['WAND'], pronunciation: 'dee VAHNT', example: { de: 'Das Bild hängt an der Wand.', en: 'The picture hangs on the wall.', fr: 'Le tableau est accroché au mur.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l8-wechsel', title: 'The two-way prepositions', titleFr: 'Les prépositions mixtes',
      lead: 'Nine prepositions take either case: in, an, auf, über, unter, vor, hinter, neben, zwischen. Wo? → dative. Wohin? → accusative.',
      leadFr: 'Neuf prépositions prennent l’un ou l’autre cas : in, an, auf, über, unter, vor, hinter, neben, zwischen. Wo ? → datif. Wohin ? → accusatif.',
      explanationMd: 'These **nine prepositions** take **either** case: **in, an, auf, über, unter, vor, hinter, neben, zwischen**. The **question** decides the case: **Wo?** (location, no movement) → **dative**; **Wohin?** (direction, movement) → **accusative**. Use **position verbs** for location (**liegen, stehen, hängen, sein**) and **putting verbs** for direction (**legen, stellen, hängen, gehen**).',
      explanationMdFr: 'Ces **neuf prépositions** prennent **l’un ou l’autre** cas : **in, an, auf, über, unter, vor, hinter, neben, zwischen**. C’est la **question** qui décide du cas : **Wo ?** (lieu, sans mouvement) → **datif** ; **Wohin ?** (direction, mouvement) → **accusatif**. Utilise des **verbes de position** pour le lieu (**liegen, stehen, hängen, sein**) et des **verbes de mise en place** pour la direction (**legen, stellen, hängen, gehen**).',
      tables: [{ title: 'Wo? or Wohin?', titleFr: 'Wo ? ou Wohin ?', headers: ['Question', 'Case', 'm', 'f', 'n', 'plural'], headersFr: ['Question', 'Cas', 'm', 'f', 'n', 'pluriel'],
        rows: [['Wo? (location)', 'Dative', 'auf dem Tisch', 'an der Wand', 'in dem Haus (im)', 'zwischen den Betten'], ['Wohin? (direction)', 'Accusative', 'auf den Tisch', 'an die Wand', 'in das Haus (ins)', 'zwischen die Betten']],
        rowsFr: [['Wo ? (lieu)', 'Datif', 'auf dem Tisch', 'an der Wand', 'in dem Haus (im)', 'zwischen den Betten'], ['Wohin ? (direction)', 'Accusatif', 'auf den Tisch', 'an die Wand', 'in das Haus (ins)', 'zwischen die Betten']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das Buch', role: 'subject' }, { text: 'liegt', role: 'verb' }, { text: 'auf dem Tisch.', role: 'dative' }], en: 'The book is lying on the table.', fr: 'Le livre est posé sur la table.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'lege', role: 'verb' }, { text: 'das Buch', role: 'accusative' }, { text: 'auf den Tisch.', role: 'accusative' }], en: 'I put the book on the table.', fr: 'Je pose le livre sur la table.' },
      ],
      contrast: {
        a: { label: 'Wo? → dative', labelFr: 'Wo ? → datif', note: 'no movement', noteFr: 'sans mouvement', examples: [g('Das Buch liegt auf dem Tisch.', 'The book is lying on the table.', 'Le livre est posé sur la table.'), g('Die Katze ist unter dem Bett.', 'The cat is under the bed.', 'Le chat est sous le lit.')] },
        b: { label: 'Wohin? → accusative', labelFr: 'Wohin ? → accusatif', note: 'movement', noteFr: 'mouvement', examples: [g('Ich lege das Buch auf den Tisch.', 'I put the book on the table.', 'Je pose le livre sur la table.'), g('Die Katze springt unter das Bett.', 'The cat jumps under the bed.', 'Le chat saute sous le lit.')] },
      },
      examples: [
        g('Das Buch liegt auf dem Tisch.', 'The book is lying on the table.', 'Le livre est posé sur la table.'),
        g('Ich lege das Buch auf den Tisch.', 'I put the book on the table.', 'Je pose le livre sur la table.'),
        g('Die Katze ist unter dem Tisch.', 'The cat is under the table.', 'Le chat est sous la table.'),
        g('Der Stuhl steht neben dem Bett.', 'The chair stands next to the bed.', 'La chaise est à côté du lit.'),
        g('Der Garten ist hinter dem Haus.', 'The garden is behind the house.', 'Le jardin est derrière la maison.'),
        g('Die Lampe ist zwischen den Betten.', 'The lamp is between the beds.', 'La lampe est entre les lits.'),
      ],
      mistakes: [
        { wrong: 'Das Buch liegt auf den Tisch.', right: 'Das Buch liegt auf dem Tisch.', why: 'liegen = location (Wo?), so the dative.', whyFr: 'liegen = lieu (Wo ?), donc le datif.' },
        { wrong: 'Ich lege das Buch auf dem Tisch.', right: 'Ich lege das Buch auf den Tisch.', why: 'legen = direction (Wohin?), so the accusative.', whyFr: 'legen = direction (Wohin ?), donc l’accusatif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l8-e1', prompt: 'Das Buch liegt auf ___ Tisch. (location: der → ?)', answer: 'dem', hint: 'location = dative: der → dem', hintFr: 'lieu = datif : der → dem' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l8-e3', prompt: 'Which question asks about LOCATION?', promptFr: 'Quelle question porte sur le LIEU ?', options: ['Wohin?', 'Wo?', 'Woher?'], answer: 1, explain: '"Wo?" asks about location (dative).', explainFr: '« Wo? » porte sur le lieu (datif).', hint: '"Wohin" is direction; "Wo" is location.', hintFr: '« Wohin » = direction ; « Wo » = lieu.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l8-e4', pairs: [{ de: 'unter', en: 'under', fr: 'sous' }, { de: 'neben', en: 'next to', fr: 'à côté de' }, { de: 'zwischen', en: 'between', fr: 'entre' }], hint: 'Match each preposition to its meaning.', hintFr: 'Associe chaque préposition à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l8-e9', prompt: 'Das Bild hängt an ___ Wand. (location: die → ?)', answer: 'der', hint: 'location = dative: die → der', hintFr: 'lieu = datif : die → der' } },

    // ───────────── 2 · Where to? ─────────────
    { kind: 'chapter', title: 'Wohin kommt es? Richtung', titleFr: 'Où le met-on ? La direction', blurb: 'legen, stellen, hängen: accusative.', blurbFr: 'legen, stellen, hängen : accusatif.' },

    { kind: 'situation', title: 'Wohin stellen wir das?', titleFr: 'Où met-on cela ?',
      setting: 'Both put things in their places.', settingFr: 'Tous deux mettent chaque chose à sa place.',
      lines: [
        line('Lara', 'Ich stelle die Lampe auf den Tisch. Und das Buch lege ich neben das Bett.', 'I’ll put the lamp on the table. And I’ll lay the book next to the bed.', 'Je mets la lampe sur la table. Et je pose le livre à côté du lit.'),
        line('Tim', 'Ich hänge das Bild an die Wand zwischen die Fenster.', 'I’ll hang the picture on the wall between the windows.', 'J’accroche le tableau au mur entre les fenêtres.'),
        line('Lara', 'Stell den Stuhl bitte vor das Fenster!', 'Please put the chair in front of the window!', 'Mets la chaise devant la fenêtre, s’il te plaît !'),
        line('Tim', 'Und die Katze setze ich unter den Tisch. Dort schläft sie gern.', 'And I’ll put the cat under the table. She likes to sleep there.', 'Et je mets le chat sous la table. Il aime y dormir.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Verben der Bewegung: legen, stellen, liegen', titleFr: 'Verbes de mise en place : legen, stellen, liegen',
      items: [{ id: 'a2l8-legen', german: 'legen', english: 'to lay / put down', french: 'poser (à plat)', gender: null, syllables: ['LE', 'gen'], pronunciation: 'LAY-gen', example: { de: 'Ich lege das Buch auf den Tisch.', en: 'I put the book on the table.', fr: 'Je pose le livre sur la table.' } }, { id: 'a2l8-liegen', german: 'liegen', english: 'to lie / be lying', french: 'être posé / être allongé', gender: null, syllables: ['LIE', 'gen'], pronunciation: 'LEE-gen', example: { de: 'Das Buch liegt auf dem Tisch.', en: 'The book is (lying) on the table.', fr: 'Le livre est (posé) sur la table.' } }, { id: 'a2l8-stellen', german: 'stellen', english: 'to put / place (upright)', french: 'mettre (debout)', gender: null, syllables: ['STEL', 'len'], pronunciation: 'SHTELL-en', example: { de: 'Ich stelle die Lampe auf den Tisch.', en: 'I put the lamp on the table.', fr: 'Je mets la lampe sur la table.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l8-verbpaare', title: 'Verb pairs: liegen–legen, stehen–stellen, hängen–hängen', titleFr: 'Paires de verbes : liegen–legen, stehen–stellen, hängen–hängen',
      lead: 'Position verb + dative (Wo?). Putting verb + accusative (Wohin?).',
      leadFr: 'Verbe de position + datif (Wo ?). Verbe de mise en place + accusatif (Wohin ?).',
      explanationMd: 'For many things German has **two verbs**: one for the **position** (answers **Wo?**, dative) and one for **putting** it there (answers **Wohin?**, accusative). **liegen** (lies) – **legen** (lay); **stehen** (stands) – **stellen** (put upright); **hängen** (hangs) – **hängen** (hang up). The putting verbs are **regular**; **liegen** and **stehen** are **irregular** (Perfekt: **hat gelegen / hat gestanden**).',
      explanationMdFr: 'Pour beaucoup de choses, l’allemand a **deux verbes** : un pour la **position** (répond à **Wo ?**, datif) et un pour la **mise en place** (répond à **Wohin ?**, accusatif). **liegen** (être couché) – **legen** (coucher) ; **stehen** (être debout) – **stellen** (mettre debout) ; **hängen** (être suspendu) – **hängen** (suspendre). Les verbes de mise en place sont **réguliers** ; **liegen** et **stehen** sont **irréguliers** (parfait : **hat gelegen / hat gestanden**).',
      tables: [{ title: 'Position and putting', titleFr: 'Position et mise en place', headers: ['Position (Wo? + dative)', 'Putting (Wohin? + accusative)'], headersFr: ['Position (Wo ? + datif)', 'Mise en place (Wohin ? + accusatif)'],
        rows: [['liegen → Das Buch liegt auf dem Tisch.', 'legen → Ich lege das Buch auf den Tisch.'], ['stehen → Die Lampe steht auf dem Tisch.', 'stellen → Ich stelle die Lampe auf den Tisch.'], ['hängen → Das Bild hängt an der Wand.', 'hängen → Ich hänge das Bild an die Wand.'], ['sitzen → Die Katze sitzt unter dem Tisch.', 'setzen → Ich setze die Katze unter den Tisch.']],
        rowsFr: [['liegen → Das Buch liegt auf dem Tisch.', 'legen → Ich lege das Buch auf den Tisch.'], ['stehen → Die Lampe steht auf dem Tisch.', 'stellen → Ich stelle die Lampe auf den Tisch.'], ['hängen → Das Bild hängt an der Wand.', 'hängen → Ich hänge das Bild an die Wand.'], ['sitzen → Die Katze sitzt unter dem Tisch.', 'setzen → Ich setze die Katze unter den Tisch.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'stelle', role: 'verb' }, { text: 'die Lampe', role: 'accusative' }, { text: 'auf den Tisch.', role: 'accusative' }], en: 'I put the lamp on the table.', fr: 'Je mets la lampe sur la table.' },
        { parts: [{ text: 'Das Bild', role: 'subject' }, { text: 'hängt', role: 'verb' }, { text: 'an der Wand.', role: 'dative' }], en: 'The picture hangs on the wall.', fr: 'Le tableau est accroché au mur.' },
      ],
      contrast: {
        a: { label: 'Position', labelFr: 'Position', note: 'liegen, stehen, hängen → dative', noteFr: 'liegen, stehen, hängen → datif', examples: [g('Die Lampe steht auf dem Tisch.', 'The lamp stands on the table.', 'La lampe est sur la table.'), g('Das Bild hängt an der Wand.', 'The picture hangs on the wall.', 'Le tableau est accroché au mur.')] },
        b: { label: 'Putting', labelFr: 'Mise en place', note: 'legen, stellen, hängen → accusative', noteFr: 'legen, stellen, hängen → accusatif', examples: [g('Ich stelle die Lampe auf den Tisch.', 'I put the lamp on the table.', 'Je mets la lampe sur la table.'), g('Ich hänge das Bild an die Wand.', 'I hang the picture on the wall.', 'J’accroche le tableau au mur.')] },
      },
      examples: [
        g('Ich stelle die Lampe auf den Tisch.', 'I put the lamp on the table.', 'Je mets la lampe sur la table.'),
        g('Ich stelle den Stuhl neben das Bett.', 'I put the chair next to the bed.', 'Je mets la chaise à côté du lit.'),
        g('Ich hänge das Bild an die Wand.', 'I hang the picture on the wall.', 'J’accroche le tableau au mur.'),
        g('Häng das Bild an die Wand!', 'Hang the picture on the wall!', 'Accroche le tableau au mur !'),
        g('Ich lege das Buch neben das Bett.', 'I lay the book next to the bed.', 'Je pose le livre à côté du lit.'),
        g('Die Katze sitzt unter dem Tisch.', 'The cat is sitting under the table.', 'Le chat est assis sous la table.'),
      ],
      mistakes: [
        { wrong: 'Ich liege das Buch auf den Tisch.', right: 'Ich lege das Buch auf den Tisch.', why: 'To put something somewhere: legen, not liegen.', whyFr: 'Pour poser quelque chose : legen, pas liegen.' },
        { wrong: 'Das Bild hängt an die Wand.', right: 'Das Bild hängt an der Wand.', why: 'hängen (position) → dative.', whyFr: 'hängen (position) → datif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l8-e2', prompt: 'Ich lege das Buch auf ___ Tisch. (direction: der → ?)', answer: 'den', hint: 'direction = accusative: der → den', hintFr: 'direction = accusatif : der → den' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l8-e6', prompt: 'Which sentence shows DIRECTION (accusative)?', promptFr: 'Quelle phrase montre la DIRECTION (accusatif) ?', options: ['Das Bild hängt an der Wand.', 'Ich hänge das Bild an die Wand.', 'Das Bild ist an der Wand.'], answer: 1, explain: 'Movement + accusative: an die Wand.', explainFr: 'Mouvement + accusatif : an die Wand.', hint: 'Look for a verb of movement + "die".', hintFr: 'Cherche un verbe de mouvement + « die ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l8-e8', tokens: ['dem', 'steht', 'Der', 'neben', 'Bett', 'Stuhl'], answer: ['Der', 'Stuhl', 'steht', 'neben', 'dem', 'Bett'], hint: 'Location with "steht" → dative "dem".', hintFr: 'Lieu avec « steht » → datif « dem ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l8-e7', word: 'Wand', answer: 'die', hint: '"Wand" (wall) is feminine.', hintFr: '« Wand » (mur) est féminin.' } },

    { kind: 'pronunciation', focus: 'The "z" is "ts" (zwischen) and "w" is "v" (Wand, zwischen)', focusFr: 'Le « z » est « ts » (zwischen) et « w » est « v » (Wand, zwischen)', items: [{ id: 'a2l8-zwischen-pron', german: 'zwischen', english: 'between', french: 'entre', gender: null, syllables: ['ZWI', 'schen'], pronunciation: 'TSVISH-en', example: { de: 'Zwischen den Häusern.', en: 'Between the houses.', fr: 'Entre les maisons.' } }, { id: 'a2l8-wand-pron', german: 'Wand', english: 'wall', french: 'mur', gender: null, syllables: ['WAND'], pronunciation: 'VAHNT', example: { de: 'Das Bild ist an der Wand.', en: 'The picture is on the wall.', fr: 'Le tableau est au mur.' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l8-e5', prompt: 'Listen. Where is the cat?', promptFr: 'Écoute. Où est le chat ?', audio: { ttsText: 'Wo ist die Katze? Die Katze liegt unter dem Bett.' }, options: ['Under the bed', 'On the bed', 'Next to the bed'], optionsFr: ['Sous le lit', 'Sur le lit', 'À côté du lit'], answer: 0, hint: 'Listen for the preposition before "dem Bett".', hintFr: 'Écoute la préposition avant « dem Bett ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l8-e10', prompt: 'Listen. Where does Tom put the lamp?', promptFr: 'Écoute. Où Tom met-il la lampe ?', audio: { ttsText: 'Ich stelle die Lampe auf den Tisch.' }, options: ['Onto the table', 'Under the table', 'Next to the bed'], optionsFr: ['Sur la table', 'Sous la table', 'À côté du lit'], answer: 0, hint: 'Movement "stelle … auf den Tisch".', hintFr: 'Mouvement « stelle … auf den Tisch ».' } },

    { kind: 'wrapup',
      summary: 'You can now choose **dative or accusative** after the nine two-way prepositions and use the pairs **liegen–legen** and **stehen–stellen**. 🎉',
      summaryFr: 'Tu sais maintenant choisir entre **datif et accusatif** après les neuf prépositions mixtes et utiliser les paires **liegen–legen** et **stehen–stellen**. 🎉',
      card: { title: 'Two-way prepositions on one page', titleFr: 'Les prépositions mixtes en une page', sections: [
        { heading: 'The nine', headingFr: 'Les neuf', rows: [g('in · an · auf · über · unter', 'two-way', 'mixtes'), g('vor · hinter · neben · zwischen', 'two-way', 'mixtes')] },
        { heading: 'The rule', headingFr: 'La règle', rows: [g('Wo? → dative', 'location, no movement', 'lieu, sans mouvement'), g('Wohin? → accusative', 'direction, movement', 'direction, mouvement')] },
        { heading: 'Verb pairs', headingFr: 'Paires de verbes', rows: [g('liegen → legen', 'lies → lay', 'être couché → coucher'), g('stehen → stellen', 'stands → put upright', 'être debout → mettre debout'), g('hängen → hängen', 'hangs → hang up', 'être suspendu → suspendre')] },
      ] } },
  ],
};
