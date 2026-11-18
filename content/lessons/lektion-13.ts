import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion13: Lesson = {
  id: 'l13', level: 'A1', module: 2, number: 7,
  title: { de: 'Gegenstände und Plural', en: 'Things and plurals', fr: 'Les objets et le pluriel' },
  theme: 'Everyday objects, the plural, and "kein / keine"', themeFr: 'Les objets du quotidien, le pluriel et « kein / keine »',
  goals: ['Ask "Was ist das?" and name objects', 'Form the plural of German nouns', 'Say what something is not with "kein / keine"', 'Say what you need or do not need: "Ich brauche keinen …"'], goalsFr: ['Demander « Was ist das ? » et nommer des objets', 'Former le pluriel des noms allemands', 'Dire ce que quelque chose n’est pas avec « kein / keine »', 'Dire ce dont on a besoin ou non : « Ich brauche keinen … »'],
  canDo: g('Ich kann Gegenstände benennen, den Plural bilden und sagen, was ich nicht habe oder brauche.', 'I can name objects, form the plural and say what I do not have or need.', 'Je sais nommer des objets, former le pluriel et dire ce que je n’ai pas ou dont je n’ai pas besoin.'),
  steps: [
    { kind: 'intro', title: 'Dinge im Alltag 🔑', titleFr: 'Les objets du quotidien 🔑',
      scene: 'Nicole and Ben sort out things in a shared room.', sceneFr: 'Nicole et Ben trient des affaires dans une pièce commune.',
      goals: ['Ask “Was ist das?” and name everyday objects', 'Form the plural of German nouns', 'Say “not a” with kein and keine', 'Say what you need or do not need'],
      goalsFr: ['Demander « Was ist das ? » et nommer des objets du quotidien', 'Former le pluriel des noms allemands', 'Dire « pas de » avec kein et keine', 'Dire ce dont tu as besoin ou non'] },

    // ───────────── 1 · Things and the plural ─────────────
    { kind: 'chapter', title: 'Dinge und der Plural', titleFr: 'Les objets et le pluriel', blurb: 'Name things, then say there are several.', blurbFr: 'Nommer les choses, puis dire qu’il y en a plusieurs.' },

    { kind: 'situation', title: 'Was ist das?', titleFr: 'Qu’est-ce que c’est ?',
      setting: 'Ben points at things in a room and Nicole names them.', settingFr: 'Ben montre des objets dans une pièce et Nicole les nomme.',
      lines: [
        line('Ben', 'Was ist das?', 'What is that?', 'Qu’est-ce que c’est ?'),
        line('Nicole', 'Das ist ein Regal. Das ist kein Schrank.', 'That is a shelf. That is not a wardrobe.', 'C’est une étagère. Ce n’est pas une armoire.'),
        line('Ben', 'Und was sind das?', 'And what are those?', 'Et qu’est-ce que c’est, ça (pluriel) ?'),
        line('Nicole', 'Das sind Bücher. Und das sind Schlüssel.', 'Those are books. And those are keys.', 'Ce sont des livres. Et ce sont des clés.'),
        line('Ben', 'Wie viele Bücher hast du?', 'How many books do you have?', 'Combien de livres as-tu ?'),
        line('Nicole', 'Ich habe drei Bücher und zwei Handys.', 'I have three books and two phones.', 'J’ai trois livres et deux téléphones.'),
      ],
      words: [{ id: 'l13-was-ist-das', german: 'Was ist das?', english: 'What is that?', french: 'Qu’est-ce que c’est ?', gender: null, syllables: ['WAS', 'IST', 'DAS'], pronunciation: 'vahss ist dahss', example: { de: 'Was ist das? – Das ist ein Regal.', en: 'What is that? – That is a shelf.', fr: 'Qu’est-ce que c’est ? – C’est une étagère.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l13-e12', prompt: 'Nicole says “Das sind Bücher.” What does that mean?', promptFr: 'Nicole dit « Das sind Bücher. » Que cela signifie-t-il ?', options: ['Those are books.', 'That is a book.', 'Those are not books.'], optionsFr: ['Ce sont des livres.', 'C’est un livre.', 'Ce ne sont pas des livres.'], answer: 0, explain: '“Das sind” introduces several things, so “Bücher” is plural.', explainFr: '« Das sind » introduit plusieurs choses, donc « Bücher » est au pluriel.', hint: 'sind goes with a plural.', hintFr: 'sind va avec un pluriel.' } },

    { kind: 'wordgroup', title: 'Möbel', titleFr: 'Les meubles',
      note: 'The plural is part of the word. Learn it together with the noun.', noteFr: 'Le pluriel fait partie du mot. Apprends-le avec le nom.',
      items: [{ id: 'l13-schrank', german: 'der Schrank', english: 'the cupboard / wardrobe (pl. Schränke)', french: 'l’armoire (pl. Schränke)', gender: 'der', syllables: ['SCHRANK'], pronunciation: 'dair shrahnk', example: { de: 'Wir haben zwei Schränke.', en: 'We have two cupboards.', fr: 'Nous avons deux armoires.' } }, { id: 'l13-regal', german: 'das Regal', english: 'the shelf (pl. Regale)', french: 'l’étagère (pl. Regale)', gender: 'das', syllables: ['re', 'GAL'], pronunciation: 'dahss re-GAHL', example: { de: 'Das Regal ist neu.', en: 'The shelf is new.', fr: 'L’étagère est neuve.' } }, { id: 'l13-sofa', german: 'das Sofa', english: 'the sofa (pl. Sofas)', french: 'le canapé (pl. Sofas)', gender: 'das', syllables: ['SO', 'fa'], pronunciation: 'dahss ZOH-fah', example: { de: 'Das Sofa ist sehr bequem.', en: 'The sofa is very comfortable.', fr: 'Le canapé est très confortable.' } }, { id: 'l13-lampe', german: 'die Lampe', english: 'the lamp (pl. Lampen)', french: 'la lampe (pl. Lampen)', gender: 'die', syllables: ['LAM', 'pe'], pronunciation: 'dee LAHM-pe', example: { de: 'Die Lampe steht neben dem Bett.', en: 'The lamp is next to the bed.', fr: 'La lampe est à côté du lit.' } }, { id: 'l13-fenster', german: 'das Fenster', english: 'the window (pl. Fenster)', french: 'la fenêtre (pl. Fenster)', gender: 'das', syllables: ['FENS', 'ter'], pronunciation: 'dahss FENS-ter', example: { de: 'Das Zimmer hat zwei Fenster.', en: 'The room has two windows.', fr: 'La pièce a deux fenêtres.' } }] },

    { kind: 'wordgroup', title: 'Kleine Dinge', titleFr: 'Petits objets',
      items: [{ id: 'l13-stift', german: 'der Stift', english: 'the pen / pencil (pl. Stifte)', french: 'le stylo / crayon (pl. Stifte)', gender: 'der', syllables: ['STIFT'], pronunciation: 'dair shtift', example: { de: 'Ich brauche einen Stift.', en: 'I need a pen.', fr: 'J’ai besoin d’un stylo.' } }, { id: 'l13-buch', german: 'das Buch', english: 'the book (pl. Bücher)', french: 'le livre (pl. Bücher)', gender: 'das', syllables: ['BUCH'], pronunciation: 'dahss bookh', example: { de: 'Auf dem Tisch liegen drei Bücher.', en: 'Three books are lying on the table.', fr: 'Trois livres sont posés sur la table.' } }, { id: 'l13-schluessel', german: 'der Schlüssel', english: 'the key (pl. Schlüssel)', french: 'la clé (pl. Schlüssel)', gender: 'der', syllables: ['SCHLÜS', 'sel'], pronunciation: 'dair SHLUES-sel', example: { de: 'Wo ist mein Schlüssel?', en: 'Where is my key?', fr: 'Où est ma clé ?' } }, { id: 'l13-tasche', german: 'die Tasche', english: 'the bag (pl. Taschen)', french: 'le sac (pl. Taschen)', gender: 'die', syllables: ['TA', 'sche'], pronunciation: 'dee TAH-she', example: { de: 'Die Tasche ist schwer.', en: 'The bag is heavy.', fr: 'Le sac est lourd.' } }, { id: 'l13-handy', german: 'das Handy', english: 'the mobile phone (pl. Handys)', french: 'le portable (pl. Handys)', gender: 'das', syllables: ['HEN', 'dy'], pronunciation: 'dahss HEN-dee', example: { de: 'Mein Handy ist neu.', en: 'My phone is new.', fr: 'Mon portable est neuf.' } }, { id: 'l13-laptop', german: 'der Laptop', english: 'the laptop (pl. Laptops)', french: 'l’ordinateur portable (pl. Laptops)', gender: 'der', syllables: ['LEP', 'top'], pronunciation: 'dair LEP-top', example: { de: 'Er hat einen Laptop.', en: 'He has a laptop.', fr: 'Il a un ordinateur portable.' } }, { id: 'l13-drucker', german: 'der Drucker', english: 'the printer (pl. Drucker)', french: 'l’imprimante (pl. Drucker)', gender: 'der', syllables: ['DRU', 'cker'], pronunciation: 'dair DROO-ker', example: { de: 'Der Drucker ist kaputt.', en: 'The printer is broken.', fr: 'L’imprimante est en panne.' } }, { id: 'l13-brille', german: 'die Brille', english: 'the glasses (pl. Brillen)', french: 'les lunettes (pl. Brillen)', gender: 'die', syllables: ['BRIL', 'le'], pronunciation: 'dee BRIL-le', example: { de: 'Ich suche meine Brille.', en: 'I am looking for my glasses.', fr: 'Je cherche mes lunettes.' } }] },

    { kind: 'grammar', note: {
      id: 'l13-plural', title: 'The plural: five patterns', titleFr: 'Le pluriel : cinq modèles',
      lead: 'In the plural the article is always die. The noun changes in one of five ways, so learn the plural with every noun.',
      leadFr: 'Au pluriel, l’article est toujours die. Le nom change de cinq façons : apprends donc le pluriel avec chaque nom.',
      explanationMd: 'The plural article is always **die**, whatever the singular gender was. The noun itself changes in one of **five ways**. There is no perfect rule, but two tips help: most **die** nouns take **-n / -en**, and nouns ending in **-el** or **-er** usually **stay the same**.',
      explanationMdFr: 'L’article du pluriel est toujours **die**, quel que soit le genre du singulier. Le nom change de **cinq façons**. Il n’y a pas de règle parfaite, mais deux repères aident : la plupart des noms en **die** prennent **-n / -en**, et les noms en **-el** ou **-er** **ne changent généralement pas**.',
      tables: [{ title: 'Five plural patterns', titleFr: 'Cinq modèles de pluriel', headers: ['Pattern', 'Singular', 'Plural'], headersFr: ['Modèle', 'Singulier', 'Pluriel'],
        rows: [['-e / ¨e', 'der Stift, der Schrank', 'die Stifte, die Schränke'], ['-(e)n', 'die Lampe, die Tasche', 'die Lampen, die Taschen'], ['-s (foreign words)', 'das Handy, das Sofa', 'die Handys, die Sofas'], ['-er / ¨er', 'das Buch', 'die Bücher'], ['no ending', 'der Schlüssel, das Fenster', 'die Schlüssel, die Fenster']],
        rowsFr: [['-e / ¨e', 'der Stift, der Schrank', 'die Stifte, die Schränke'], ['-(e)n', 'die Lampe, die Tasche', 'die Lampen, die Taschen'], ['-s (mots étrangers)', 'das Handy, das Sofa', 'die Handys, die Sofas'], ['-er / ¨er', 'das Buch', 'die Bücher'], ['aucune terminaison', 'der Schlüssel, das Fenster', 'die Schlüssel, die Fenster']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Die Bücher', role: 'subject' }, { text: 'liegen', role: 'verb' }, { text: 'im Regal.', role: 'place' }], en: 'The books are lying on the shelf.', fr: 'Les livres sont posés sur l’étagère.' },
        { parts: [{ text: 'Das Zimmer', role: 'subject' }, { text: 'hat', role: 'verb' }, { text: 'zwei Fenster.', role: 'accusative' }], en: 'The room has two windows.', fr: 'La pièce a deux fenêtres.' },
      ],
      contrast: {
        a: { label: 'adds -n / -en', labelFr: 'ajoute -n / -en', note: 'typical for die nouns', noteFr: 'typique des noms en die', examples: [g('die Lampe → die Lampen', 'lamp → lamps', 'lampe → lampes'), g('die Tasche → die Taschen', 'bag → bags', 'sac → sacs')] },
        b: { label: 'no change', labelFr: 'ne change pas', note: 'typical for nouns ending in -el and -er', noteFr: 'typique des noms en -el et -er', examples: [g('der Schlüssel → die Schlüssel', 'key → keys', 'clé → clés'), g('das Fenster → die Fenster', 'window → windows', 'fenêtre → fenêtres')] },
      },
      examples: [
        g('Das Zimmer hat zwei Fenster und drei Lampen.', 'The room has two windows and three lamps.', 'La pièce a deux fenêtres et trois lampes.'),
        g('Die Bücher liegen im Regal.', 'The books are on the shelf.', 'Les livres sont sur l’étagère.'),
        g('Wir brauchen zwei Schränke.', 'We need two wardrobes.', 'Nous avons besoin de deux armoires.'),
        g('Auf dem Tisch liegen drei Bücher.', 'Three books are on the table.', 'Trois livres sont sur la table.'),
        g('Ich habe zwei Handys.', 'I have two phones.', 'J’ai deux téléphones.'),
        g('Die Schlüssel sind hier.', 'The keys are here.', 'Les clés sont ici.'),
        g('Die Taschen sind schwer.', 'The bags are heavy.', 'Les sacs sont lourds.'),
      ],
      mistakes: [
        { wrong: 'Die Buchs liegen im Regal.', right: 'Die Bücher liegen im Regal.', why: 'Buch takes -er and an umlaut: Bücher.', whyFr: 'Buch prend -er et un tréma : Bücher.' },
        { wrong: 'Ich habe zwei Handy.', right: 'Ich habe zwei Handys.', why: 'Foreign words usually add -s.', whyFr: 'Les mots étrangers ajoutent en général -s.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l13-e1', word: 'Regal', answer: 'das', hint: 'Learn it with its article: das Regal (neuter).', hintFr: 'Apprends-le avec son article : das Regal (neutre).' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l13-e2', prompt: 'What is the plural of "das Buch"?', promptFr: 'Quel est le pluriel de « das Buch » ?', options: ['die Buchs', 'die Bücher', 'die Buchen'], answer: 1, explain: 'Das Buch → die Bücher: ¨er plural with an umlaut.', explainFr: 'Das Buch → die Bücher : pluriel en ¨er avec un tréma.', hint: 'The vowel gets an umlaut and -er is added.', hintFr: 'La voyelle prend un tréma et on ajoute -er.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l13-e4', pairs: [{ de: 'der Schrank', en: 'die Schränke', fr: 'die Schränke' }, { de: 'die Lampe', en: 'die Lampen', fr: 'die Lampen' }, { de: 'das Handy', en: 'die Handys', fr: 'die Handys' }, { de: 'das Fenster', en: 'die Fenster', fr: 'die Fenster' }], hint: 'Match each singular word to its plural.', hintFr: 'Associe chaque singulier à son pluriel.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l13-e8', prompt: 'What is the plural of "der Schlüssel"?', promptFr: 'Quel est le pluriel de « der Schlüssel » ?', options: ['die Schlüsseln', 'die Schlüssel', 'die Schlüssele'], answer: 1, explain: 'Nouns ending in -el stay the same in the plural.', explainFr: 'Les noms en -el restent identiques au pluriel.', hint: 'Words ending in -el often have no plural ending.', hintFr: 'Les mots en -el n’ont souvent pas de terminaison au pluriel.' } },

    // ───────────── 2 · kein and keine ─────────────
    { kind: 'chapter', title: 'kein und keine', titleFr: 'kein et keine', blurb: 'Say “not a” and “no”.', blurbFr: 'Dire « pas un » et « aucun ».' },

    { kind: 'situation', title: 'Nein, kein Tisch', titleFr: 'Non, pas une table',
      setting: 'Nicole guesses what Ben is holding. She is always wrong.', settingFr: 'Nicole devine ce que Ben tient. Elle se trompe toujours.',
      lines: [
        line('Nicole', 'Ist das ein Tisch?', 'Is that a table?', 'Est-ce une table ?'),
        line('Ben', 'Nein, das ist kein Tisch. Das ist ein Schrank.', 'No, that is not a table. That is a wardrobe.', 'Non, ce n’est pas une table. C’est une armoire.'),
        line('Nicole', 'Ist das eine Lampe?', 'Is that a lamp?', 'Est-ce une lampe ?'),
        line('Ben', 'Nein, das ist keine Lampe. Das ist eine Brille.', 'No, that is not a lamp. That is a pair of glasses.', 'Non, ce n’est pas une lampe. Ce sont des lunettes.'),
        line('Nicole', 'Und das? Sind das Bücher?', 'And that? Are those books?', 'Et ça ? Ce sont des livres ?'),
        line('Ben', 'Nein, das sind keine Bücher. Das sind Schlüssel.', 'No, those are not books. Those are keys.', 'Non, ce ne sont pas des livres. Ce sont des clés.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l13-e13', prompt: 'Is it a lamp? What does Ben say it is?', promptFr: 'Est-ce une lampe ? Que dit Ben que c’est ?', options: ['A pair of glasses', 'A wardrobe', 'Keys'], optionsFr: ['Des lunettes', 'Une armoire', 'Des clés'], answer: 0, explain: 'Ben says: “Das ist keine Lampe. Das ist eine Brille.”', explainFr: 'Ben dit : « Das ist keine Lampe. Das ist eine Brille. »', hint: 'Look at Ben’s second answer.', hintFr: 'Regarde la deuxième réponse de Ben.' } },

    { kind: 'grammar', note: {
      id: 'l13-kein', title: 'kein and keine: “not a”', titleFr: 'kein et keine : « pas de »',
      lead: 'kein negates a noun. nicht negates a verb or an adjective.',
      leadFr: 'kein nie un nom. nicht nie un verbe ou un adjectif.',
      explanationMd: 'To say “not a”, put **k** in front of **ein**: **ein** Tisch → **kein** Tisch. It has the same endings as **ein / eine**, plus **keine** for every **plural**.\n\nUse **kein** with **nouns** (that had **ein** or no article). Use **nicht** (lesson 5) with **verbs, adjectives and names**.',
      explanationMdFr: 'Pour dire « pas de / pas un », mets **k** devant **ein** : **ein** Tisch → **kein** Tisch. Il a les mêmes terminaisons que **ein / eine**, plus **keine** pour tout **pluriel**.\n\nUtilise **kein** avec les **noms** (qui avaient **ein** ou pas d’article). Utilise **nicht** avec les **verbes, adjectifs et noms propres**.',
      tables: [{ title: 'ein → kein', titleFr: 'ein → kein', headers: ['Gender', 'ein', 'kein'], headersFr: ['Genre', 'ein', 'kein'],
        rows: [['der Tisch', 'ein Tisch', 'kein Tisch'], ['die Lampe', 'eine Lampe', 'keine Lampe'], ['das Sofa', 'ein Sofa', 'kein Sofa'], ['plural: die Bücher', '(no article)', 'keine Bücher']],
        rowsFr: [['der Tisch', 'ein Tisch', 'kein Tisch'], ['die Lampe', 'eine Lampe', 'keine Lampe'], ['das Sofa', 'ein Sofa', 'kein Sofa'], ['pluriel : die Bücher', '(pas d’article)', 'keine Bücher']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'kein Tisch.', role: 'other' }], en: 'That is not a table.', fr: 'Ce n’est pas une table.' },
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'sind', role: 'verb' }, { text: 'keine Bücher.', role: 'other' }], en: 'Those are not books.', fr: 'Ce ne sont pas des livres.' },
      ],
      contrast: {
        a: { label: 'kein + noun', labelFr: 'kein + nom', note: 'negates the thing', noteFr: 'nie la chose', examples: [g('Das ist kein Tisch.', 'That is not a table.', 'Ce n’est pas une table.'), g('Ich habe keine Zeit.', 'I have no time.', 'Je n’ai pas le temps.')] },
        b: { label: 'nicht', labelFr: 'nicht', note: 'negates a verb or an adjective', noteFr: 'nie un verbe ou un adjectif', examples: [g('Ich arbeite nicht.', 'I do not work.', 'Je ne travaille pas.'), g('Das Sofa ist nicht neu.', 'The sofa is not new.', 'Le canapé n’est pas neuf.')] },
      },
      examples: [
        g('Das ist kein Stuhl, das ist ein Schrank.', 'That is not a chair, it is a wardrobe.', 'Ce n’est pas une chaise, c’est une armoire.'),
        g('Was sind das? Das sind Schlüssel.', 'What are those? Those are keys.', 'Qu’est-ce que c’est ? Ce sont des clés.'),
        g('Das ist keine Brille.', 'That is not a pair of glasses.', 'Ce ne sont pas des lunettes.'),
        g('Das ist kein Regal.', 'That is not a shelf.', 'Ce n’est pas une étagère.'),
        g('Das sind keine Stifte.', 'Those are not pens.', 'Ce ne sont pas des stylos.'),
        g('Das ist kein Handy.', 'That is not a phone.', 'Ce n’est pas un téléphone.'),
      ],
      mistakes: [
        { wrong: 'Das ist nicht ein Tisch.', right: 'Das ist kein Tisch.', why: 'To negate a noun with ein, use kein.', whyFr: 'Pour nier un nom précédé de ein, utilise kein.' },
        { wrong: 'Das sind nicht Bücher.', right: 'Das sind keine Bücher.', why: 'A plural noun without an article takes keine.', whyFr: 'Un nom pluriel sans article prend keine.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l13-e3', prompt: 'Das ist ___ Tisch. Das ist ein Schrank.', promptFr: 'Das ist ___ Tisch. Das ist ein Schrank.', answer: 'kein', hint: 'Negation of "ein Tisch" (masculine, nominative).', hintFr: 'Négation de « ein Tisch » (masculin, nominatif).' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l13-e7', tokens: ['keine', 'ist', 'Lampe', 'Das'], answer: ['Das', 'ist', 'keine', 'Lampe'], hint: 'Das ist + kein/keine + noun.', hintFr: 'Das ist + kein/keine + nom.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l13-e9', prompt: 'Listen. What is it?', promptFr: 'Écoute. Qu’est-ce que c’est ?', audio: { ttsText: 'Was ist das? Das ist kein Tisch. Das ist ein Regal.' }, options: ['A table', 'A shelf', 'A lamp'], optionsFr: ['Une table', 'Une étagère', 'Une lampe'], answer: 1, hint: 'Listen after "kein" and after "ein".', hintFr: 'Écoute ce qui suit « kein » et « ein ».' } },

    // ───────────── 3 · Needing things ─────────────
    { kind: 'chapter', title: 'Ich brauche keinen …', titleFr: 'Je n’ai pas besoin de …', blurb: 'What you need, have, look for. Only the masculine changes.', blurbFr: 'Ce dont tu as besoin, ce que tu as, ce que tu cherches. Seul le masculin change.' },

    { kind: 'situation', title: 'Beim Einrichten', titleFr: 'En emménageant',
      setting: 'Nicole and Ben furnish her new room.', settingFr: 'Nicole et Ben aménagent sa nouvelle chambre.',
      lines: [
        line('Ben', 'Brauchst du einen Laptop?', 'Do you need a laptop?', 'As-tu besoin d’un ordinateur portable ?'),
        line('Nicole', 'Nein, ich brauche keinen Laptop. Ich habe ein Handy.', 'No, I don’t need a laptop. I have a phone.', 'Non, je n’ai pas besoin d’ordinateur portable. J’ai un téléphone.'),
        line('Ben', 'Brauchst du ein Sofa?', 'Do you need a sofa?', 'As-tu besoin d’un canapé ?'),
        line('Nicole', 'Nein, ich habe schon ein Sofa. Aber ich suche eine Lampe.', 'No, I already have a sofa. But I’m looking for a lamp.', 'Non, j’ai déjà un canapé. Mais je cherche une lampe.'),
        line('Ben', 'Hier ist eine Lampe!', 'Here is a lamp!', 'Voici une lampe !'),
        line('Nicole', 'Super, danke!', 'Great, thanks!', 'Super, merci !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l13-e14', prompt: 'What is Nicole looking for?', promptFr: 'Que cherche Nicole ?', options: ['A lamp', 'A laptop', 'A sofa'], optionsFr: ['Une lampe', 'Un ordinateur portable', 'Un canapé'], answer: 0, explain: 'She says: “Aber ich suche eine Lampe.”', explainFr: 'Elle dit : « Aber ich suche eine Lampe. »', hint: 'Look at what comes after “suchen”.', hintFr: 'Regarde ce qui suit « suchen ».' } },

    { kind: 'grammar', note: {
      id: 'l13-einen', title: 'einen and keinen: the masculine changes', titleFr: 'einen et keinen : le masculin change',
      lead: 'After haben, brauchen and suchen, only masculine nouns change: ein → einen, kein → keinen.',
      leadFr: 'Après haben, brauchen et suchen, seuls les noms masculins changent : ein → einen, kein → keinen.',
      explanationMd: 'After **haben, brauchen** and **suchen** the noun is the **direct object** (the accusative case, which you will study in depth later). The good news: **only the masculine changes**: **ein → einen**, **kein → keinen**. Neuter, feminine and plural stay as they are.',
      explanationMdFr: 'Après **haben, brauchen** et **suchen**, le nom est le **complément d’objet direct** (l’accusatif, que tu étudieras en détail plus tard). Bonne nouvelle : **seul le masculin change** : **ein → einen**, **kein → keinen**. Le neutre, le féminin et le pluriel restent identiques.',
      tables: [{ title: 'Object forms', titleFr: 'Formes de l’objet', headers: ['Gender', 'a / an', 'no'], headersFr: ['Genre', 'un / une', 'pas de'],
        rows: [['der (masculine)', 'einen Drucker', 'keinen Drucker'], ['das (neuter)', 'ein Sofa', 'kein Sofa'], ['die (feminine)', 'eine Lampe', 'keine Lampe'], ['plural', '– Bücher', 'keine Bücher']],
        rowsFr: [['der (masculin)', 'einen Drucker', 'keinen Drucker'], ['das (neutre)', 'ein Sofa', 'kein Sofa'], ['die (féminin)', 'eine Lampe', 'keine Lampe'], ['pluriel', '– Bücher', 'keine Bücher']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'brauche', role: 'verb' }, { text: 'keinen Laptop.', role: 'accusative' }], en: 'I do not need a laptop.', fr: 'Je n’ai pas besoin d’ordinateur portable.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'suche', role: 'verb' }, { text: 'eine Lampe.', role: 'accusative' }], en: 'I am looking for a lamp.', fr: 'Je cherche une lampe.' },
      ],
      contrast: {
        a: { label: 'Das ist … (naming)', labelFr: 'Das ist … (nommer)', note: 'ein Stift, no change', noteFr: 'ein Stift, aucun changement', examples: [g('Das ist ein Stift.', 'That is a pen.', 'C’est un stylo.'), g('Das ist kein Drucker.', 'That is not a printer.', 'Ce n’est pas une imprimante.')] },
        b: { label: 'Ich brauche … (object)', labelFr: 'Ich brauche … (objet)', note: 'masculine: einen Stift', noteFr: 'masculin : einen Stift', examples: [g('Ich brauche einen Stift.', 'I need a pen.', 'J’ai besoin d’un stylo.'), g('Ich brauche keinen Drucker.', 'I do not need a printer.', 'Je n’ai pas besoin d’imprimante.')] },
      },
      examples: [
        g('Ich brauche keinen Laptop, ich habe ein Handy.', 'I do not need a laptop, I have a phone.', 'Je n’ai pas besoin d’ordinateur portable, j’ai un téléphone.'),
        g('Fenja hat kein Regal, aber zwei Schränke.', 'Fenja has no shelf, but two wardrobes.', 'Fenja n’a pas d’étagère, mais deux armoires.'),
        g('Malik sucht keine Lampe, er sucht seinen Schlüssel.', 'Malik is not looking for a lamp, he is looking for his key.', 'Malik ne cherche pas de lampe, il cherche sa clé.'),
        g('Ich brauche einen Stift.', 'I need a pen.', 'J’ai besoin d’un stylo.'),
        g('Ich habe ein Sofa.', 'I have a sofa.', 'J’ai un canapé.'),
        g('Ich habe keine Bücher.', 'I have no books.', 'Je n’ai pas de livres.'),
        g('Er hat einen Drucker.', 'He has a printer.', 'Il a une imprimante.'),
      ],
      mistakes: [
        { wrong: 'Ich brauche ein Laptop.', right: 'Ich brauche einen Laptop.', why: 'Laptop is masculine, so the object form is einen.', whyFr: 'Laptop est masculin : la forme de l’objet est einen.' },
        { wrong: 'Ich habe keinen Sofa.', right: 'Ich habe kein Sofa.', why: 'Sofa is neuter: no -en.', whyFr: 'Sofa est neutre : pas de -en.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l13-e6', prompt: 'Ich brauche ___ Stuhl. (Ich habe schon drei.)', promptFr: 'Ich brauche ___ Stuhl. (J’en ai déjà trois.)', answer: 'keinen', hint: 'Masculine accusative: kein + en', hintFr: 'Accusatif masculin : kein + en' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l13-e11', tokens: ['brauche', 'keinen', 'Ich', 'Drucker'], answer: ['Ich', 'brauche', 'keinen', 'Drucker'], hint: 'Subject, verb, then keinen + masculine noun.', hintFr: 'Sujet, verbe, puis keinen + nom masculin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l13-e5', prompt: 'Listen. What does the speaker need?', promptFr: 'Écoute. De quoi la personne a-t-elle besoin ?', audio: { ttsText: 'Ich brauche keinen Laptop, aber ich brauche ein Handy.' }, options: ['A phone', 'A laptop', 'A printer'], optionsFr: ['Un portable', 'Un ordinateur portable', 'Une imprimante'], answer: 0, hint: 'Listen for "keinen" (not needed) and "aber" (but).', hintFr: 'Écoute « keinen » (pas besoin) et « aber » (mais).' } },

    { kind: 'pronunciation', focus: 'Umlauts in plurals: ä, ü — round your lips for ü, keep them spread for ä', focusFr: 'Les trémas au pluriel : ä, ü — arrondis les lèvres pour ü, garde-les étirées pour ä', items: [{ id: 'l13-buecher-pron', german: 'die Bücher', english: 'the books', french: 'les livres', gender: null, syllables: ['BÜ', 'cher'], pronunciation: 'dee BUE-kher', example: { de: 'Die Bücher sind neu.', en: 'The books are new.', fr: 'Les livres sont neufs.' } }, { id: 'l13-schraenke-pron', german: 'die Schränke', english: 'the cupboards', french: 'les armoires', gender: null, syllables: ['SCHRÄN', 'ke'], pronunciation: 'dee SHREN-ke', example: { de: 'Die Schränke sind groß.', en: 'The cupboards are big.', fr: 'Les armoires sont grandes.' } }, { id: 'l13-schluessel-pron', german: 'die Schlüssel', english: 'the keys', french: 'les clés', gender: null, syllables: ['SCHLÜS', 'sel'], pronunciation: 'dee SHLUES-sel', example: { de: 'Wo sind die Schlüssel?', en: 'Where are the keys?', fr: 'Où sont les clés ?' } }, { id: 'l13-stuehle-pron', german: 'die Stühle', english: 'the chairs', french: 'les chaises', gender: null, syllables: ['STÜH', 'le'], pronunciation: 'dee SHTUE-le', example: { de: 'Wir brauchen vier Stühle.', en: 'We need four chairs.', fr: 'Il nous faut quatre chaises.' } }, { id: 'l13-tueren-pron', german: 'die Türen', english: 'the doors', french: 'les portes', gender: null, syllables: ['TÜ', 'ren'], pronunciation: 'dee TUE-ren', example: { de: 'Die Türen sind offen.', en: 'The doors are open.', fr: 'Les portes sont ouvertes.' } }] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l13-e10', prompt: 'Ich habe zwei ___. (das Handy → plural)', promptFr: 'Ich habe zwei ___. (das Handy → pluriel)', answer: 'Handys', hint: 'Foreign words usually add -s.', hintFr: 'Les mots étrangers prennent souvent -s.' } },

    { kind: 'wrapup',
      summary: 'You can now name everyday things, form the **plural**, say **kein / keine**, and say what you need with **einen / keinen**. 🎉',
      summaryFr: 'Tu sais maintenant nommer des objets du quotidien, former le **pluriel**, dire **kein / keine**, et dire ce dont tu as besoin avec **einen / keinen**. 🎉',
      card: { title: 'Lesson 7 on one page', titleFr: 'La leçon 7 en une page', sections: [
        { heading: 'Ask', headingFr: 'Demander', rows: [g('Was ist das? – Das ist ein Regal.', 'What is that? – That is a shelf.', 'Qu’est-ce que c’est ? – C’est une étagère.'), g('Was sind das? – Das sind Bücher.', 'What are those? – Those are books.', 'Qu’est-ce que c’est (pluriel) ? – Ce sont des livres.')] },
        { heading: 'Plural patterns', headingFr: 'Modèles de pluriel', rows: [g('-e / ¨e: Stifte, Schränke', 'der words', 'mots en der'), g('-(e)n: Lampen, Taschen', 'die words', 'mots en die'), g('-s: Handys, Sofas', 'foreign words', 'mots étrangers'), g('-er: Bücher', 'with umlaut', 'avec tréma'), g('no ending: Schlüssel, Fenster', '-el, -er', '-el, -er')] },
        { heading: 'kein / keine', headingFr: 'kein / keine', rows: [g('kein Tisch, kein Sofa, keine Lampe, keine Bücher', 'not a / no', 'pas de / aucun')] },
        { heading: 'Object forms', headingFr: 'Formes de l’objet', rows: [g('einen / keinen + der word', 'masculine changes', 'le masculin change'), g('ein / eine / – + others', 'no change', 'pas de changement')] },
      ] } },
  ],
};
