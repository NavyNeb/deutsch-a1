import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion11: Lesson = {
  id: 'a2-l11', level: 'A2', module: 4, number: 13,
  title: { de: 'Adjektive beschreiben', en: 'Describing with adjectives', fr: 'Décrire avec des adjectifs' },
  theme: 'Adjective endings before a noun (nominative and accusative)', themeFr: 'Les terminaisons des adjectifs devant un nom (nominatif et accusatif)',
  goals: ['Know that adjectives after "sein" take no ending', 'Add endings after der/die/das', 'Add endings after ein/eine', 'Handle the masculine accusative (-en)'], goalsFr: ['Savoir que les adjectifs après « sein » n’ont pas de terminaison', 'Ajouter les terminaisons après der/die/das', 'Ajouter les terminaisons après ein/eine', 'Gérer l’accusatif masculin (-en)'],
  canDo: g('Ich kann Dinge und Personen mit Adjektiven beschreiben und die richtige Endung nach der, ein und im Akkusativ wählen.', 'I can describe things and people with adjectives and choose the right ending after der, ein and in the accusative.', 'Je sais décrire des choses et des personnes avec des adjectifs et choisir la bonne terminaison après der, ein et à l’accusatif.'),
  steps: [
    { kind: 'intro', title: 'Adjektive und ihre Endungen 🧥', titleFr: 'Les adjectifs et leurs terminaisons 🧥',
      scene: 'Lara and Tim shop for a new coat and a bag — and have to describe everything.', sceneFr: 'Lara et Tim cherchent un nouveau manteau et un sac — et doivent tout décrire.',
      goals: ['Know that adjectives after “sein” take no ending', 'Add endings after der / die / das', 'Add endings after ein / eine and handle the masculine accusative'],
      goalsFr: ['Savoir que les adjectifs après « sein » n’ont pas de terminaison', 'Ajouter les terminaisons après der / die / das', 'Ajouter les terminaisons après ein / eine et gérer le masculin à l’accusatif'] },

    // ───────────── 1 · Describing ─────────────
    { kind: 'chapter', title: 'Beschreiben mit Adjektiven', titleFr: 'Décrire avec des adjectifs', blurb: 'new, old, friendly, boring.', blurbFr: 'neuf, vieux, aimable, ennuyeux.' },

    { kind: 'situation', title: 'Im Kaufhaus', titleFr: 'Au grand magasin',
      setting: 'Lara and Tim compare coats and bags.', settingFr: 'Lara et Tim comparent manteaux et sacs.',
      lines: [
        line('Lara', 'Der Mantel ist neu, aber er ist teuer. Die Tasche ist auch neu.', 'The coat is new, but it is expensive. The bag is new too.', 'Le manteau est neuf, mais il est cher. Le sac est neuf aussi.'),
        line('Tim', 'Das Auto vor dem Kaufhaus ist alt, aber nett. Ein altes Haus daneben ist interessant.', 'The car in front of the department store is old, but nice. An old house next to it is interesting.', 'La voiture devant le magasin est vieille, mais sympa. Une vieille maison à côté est intéressante.'),
        line('Lara', 'Die Verkäuferin ist sehr freundlich. Das Buch war langweilig, aber der Tag ist wunderbar!', 'The saleswoman is very friendly. The book was boring, but the day is wonderful!', 'La vendeuse est très aimable. Le livre était ennuyeux, mais la journée est merveilleuse !'),
        line('Tim', 'Ich nehme den blauen Mantel. Und du?', 'I’ll take the blue coat. And you?', 'Je prends le manteau bleu. Et toi ?'),
        line('Lara', 'Ich kaufe eine neue Tasche und einen warmen Mantel.', 'I’m buying a new bag and a warm coat.', 'J’achète un sac neuf et un manteau chaud.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l11-e11', prompt: 'What does Lara buy?', promptFr: 'Qu’achète Lara ?', options: ['A new bag and a warm coat', 'A blue coat', 'A new car'], optionsFr: ['Un sac neuf et un manteau chaud', 'Un manteau bleu', 'Une voiture neuve'], answer: 0, explain: 'She says: “Ich kaufe eine neue Tasche und einen warmen Mantel.”', explainFr: 'Elle dit : « Ich kaufe eine neue Tasche und einen warmen Mantel. »', hint: 'Look at Lara’s last line.', hintFr: 'Regarde la dernière réplique de Lara.' } },

    { kind: 'wordgroup', title: 'Eigenschaften', titleFr: 'Qualités',
      items: [{ id: 'a2l11-neu', german: 'neu', english: 'new', french: 'nouveau / neuf', gender: null, syllables: ['NEU'], pronunciation: 'noy', example: { de: 'Ich habe einen neuen Mantel.', en: 'I have a new coat.', fr: 'J’ai un nouveau manteau.' } }, { id: 'a2l11-alt', german: 'alt', english: 'old', french: 'vieux / ancien', gender: null, syllables: ['ALT'], pronunciation: 'ahlt', example: { de: 'Das ist ein altes Haus.', en: 'That is an old house.', fr: 'C’est une vieille maison.' } }, { id: 'a2l11-interessant', german: 'interessant', english: 'interesting', french: 'intéressant', gender: null, syllables: ['in', 'te', 'res', 'SANT'], pronunciation: 'in-te-res-SAHNT', example: { de: 'Ein interessantes Buch.', en: 'An interesting book.', fr: 'Un livre intéressant.' } }, { id: 'a2l11-langweilig', german: 'langweilig', english: 'boring', french: 'ennuyeux', gender: null, syllables: ['LANG', 'wei', 'lig'], pronunciation: 'LAHNG-vy-likh', example: { de: 'Der Film war langweilig.', en: 'The film was boring.', fr: 'Le film était ennuyeux.' } }, { id: 'a2l11-teuer2', german: 'teuer', english: 'expensive', french: 'cher', gender: null, syllables: ['TEU', 'er'], pronunciation: 'TOY-er', example: { de: 'Ein teures Auto.', en: 'An expensive car.', fr: 'Une voiture chère.' } }] },

    { kind: 'wordgroup', title: 'Menschen und Dinge', titleFr: 'Personnes et choses',
      items: [{ id: 'a2l11-freundlich', german: 'freundlich', english: 'friendly', french: 'aimable', gender: null, syllables: ['FREUND', 'lich'], pronunciation: 'FROYNT-likh', example: { de: 'Eine freundliche Frau.', en: 'A friendly woman.', fr: 'Une femme aimable.' } }, { id: 'a2l11-nett', german: 'nett', english: 'nice / kind', french: 'gentil', gender: null, syllables: ['NETT'], pronunciation: 'net', example: { de: 'Er ist ein netter Mann.', en: 'He is a nice man.', fr: 'C’est un homme gentil.' } }, { id: 'a2l11-wichtig2', german: 'wunderbar', english: 'wonderful', french: 'merveilleux', gender: null, syllables: ['WUN', 'der', 'bar'], pronunciation: 'VOON-der-bar', example: { de: 'Ein wunderbarer Tag!', en: 'A wonderful day!', fr: 'Une journée merveilleuse !' } }, { id: 'a2l11-mantel', german: 'der Mantel', english: 'the coat', french: 'le manteau', gender: 'der', syllables: ['MAN', 'tel'], pronunciation: 'dair MAHN-tel', example: { de: 'Der Mantel ist warm.', en: 'The coat is warm.', fr: 'Le manteau est chaud.' } }, { id: 'a2l11-tasche', german: 'die Tasche', english: 'the bag', french: 'le sac', gender: 'die', syllables: ['TA', 'sche'], pronunciation: 'dee TAH-she', example: { de: 'Die Tasche ist neu.', en: 'The bag is new.', fr: 'Le sac est neuf.' } }] },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l11-e1', prompt: 'Der Mantel ist ___. (new — predicate, no ending)', answer: 'neu', hint: 'after "ist" there is no ending', hintFr: 'après « ist » il n’y a pas de terminaison' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l11-e6', pairs: [{ de: 'neu', en: 'new', fr: 'nouveau' }, { de: 'alt', en: 'old', fr: 'vieux' }, { de: 'nett', en: 'nice', fr: 'gentil' }], hint: 'Match each adjective to its meaning.', hintFr: 'Associe chaque adjectif à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l11-e9', prompt: 'Which sentence has NO adjective ending (and is correct)?', promptFr: 'Quelle phrase n’a PAS de terminaison d’adjectif (et est correcte) ?', options: ['Das ist ein neu Auto.', 'Das Auto ist neu.', 'Der neu Mantel.'], answer: 1, explain: 'After "ist", the adjective has no ending: Das Auto ist neu.', explainFr: 'Après « ist », l’adjectif n’a pas de terminaison : Das Auto ist neu.', hint: 'Predicate adjectives (after sein) take no ending.', hintFr: 'Les adjectifs attributs (après sein) n’ont pas de terminaison.' } },

    // ───────────── 2 · after the definite article ─────────────
    { kind: 'chapter', title: 'Nach der, die, das: meist -e', titleFr: 'Après der, die, das : surtout -e', blurb: 'der neue Mantel.', blurbFr: 'der neue Mantel.' },

    { kind: 'situation', title: 'Der neue Mantel', titleFr: 'Le nouveau manteau',
      setting: 'The salesperson holds up the coat.', settingFr: 'La vendeuse présente le manteau.',
      lines: [
        line('Verkäuferin', 'Der neue Mantel ist sehr warm. Die neue Tasche passt dazu.', 'The new coat is very warm. The new bag matches it.', 'Le nouveau manteau est très chaud. Le nouveau sac va avec.'),
        line('Tim', 'Das neue Auto vor der Tür gehört Ihnen?', 'Does the new car outside the door belong to you?', 'La nouvelle voiture devant la porte est à vous ?'),
        line('Verkäuferin', 'Nein, die neuen Autos stehen dort drüben.', 'No, the new cars are over there.', 'Non, les voitures neuves sont là-bas.'),
        line('Lara', 'Ich nehme den neuen Mantel. Der Mantel ist ein Traum.', 'I’ll take the new coat. The coat is a dream.', 'Je prends le nouveau manteau. Le manteau est un rêve.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l11-nach-der', title: 'Adjective endings after der / die / das', titleFr: 'Terminaisons des adjectifs après der / die / das',
      lead: 'Before a noun, after der / die / das the ending is mostly -e. Plural and accusative masculine: -en.',
      leadFr: 'Devant un nom, après der / die / das, la terminaison est surtout -e. Pluriel et masculin à l’accusatif : -en.',
      explanationMd: 'After **sein** (the adjective **after the noun**) there is **no ending**: **Der Mantel ist neu.** Endings appear only when the adjective stands **before** the noun. After **der / die / das** (nominative) add **-e**: **der neue Mantel, die neue Tasche, das neue Auto**. **Plural**: **-en**: **die neuen Autos**. In the **accusative**, only the **masculine** changes: **den neuen Mantel** (**-en**).',
      explanationMdFr: 'Après **sein** (l’adjectif **après le nom**), il n’y a **pas de terminaison** : **Der Mantel ist neu.** Les terminaisons n’apparaissent que quand l’adjectif est **devant** le nom. Après **der / die / das** (nominatif), ajoute **-e** : **der neue Mantel, die neue Tasche, das neue Auto**. **Pluriel** : **-en** : **die neuen Autos**. À l’**accusatif**, seul le **masculin** change : **den neuen Mantel** (**-en**).',
      tables: [{ title: 'After der / die / das', titleFr: 'Après der / die / das', headers: ['Case', 'm', 'f', 'n', 'plural'], headersFr: ['Cas', 'm', 'f', 'n', 'pluriel'],
        rows: [['Nominative', 'der neue Mantel', 'die neue Tasche', 'das neue Auto', 'die neuen Autos'], ['Accusative', 'den neuen Mantel', 'die neue Tasche', 'das neue Auto', 'die neuen Autos']],
        rowsFr: [['Nominatif', 'der neue Mantel', 'die neue Tasche', 'das neue Auto', 'die neuen Autos'], ['Accusatif', 'den neuen Mantel', 'die neue Tasche', 'das neue Auto', 'die neuen Autos']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der neue Mantel', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'teuer.', role: 'other' }], en: 'The new coat is expensive.', fr: 'Le nouveau manteau est cher.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'nehme', role: 'verb' }, { text: 'den blauen Mantel.', role: 'accusative' }], en: 'I’ll take the blue coat.', fr: 'Je prends le manteau bleu.' },
      ],
      contrast: {
        a: { label: 'After sein: no ending', labelFr: 'Après sein : sans terminaison', note: 'Der Mantel ist neu.', noteFr: 'Der Mantel ist neu.', examples: [g('Das Buch ist interessant.', 'The book is interesting.', 'Le livre est intéressant.'), g('Die Frau ist freundlich.', 'The woman is friendly.', 'La femme est aimable.')] },
        b: { label: 'Before a noun: ending', labelFr: 'Devant un nom : terminaison', note: 'der neue Mantel', noteFr: 'der neue Mantel', examples: [g('Der neue Mantel ist teuer.', 'The new coat is expensive.', 'Le nouveau manteau est cher.'), g('Ich nehme den blauen Mantel.', 'I’ll take the blue coat.', 'Je prends le manteau bleu.')] },
      },
      examples: [
        g('Der Mantel ist neu.', 'The coat is new.', 'Le manteau est neuf.'),
        g('Der neue Mantel ist teuer.', 'The new coat is expensive.', 'Le nouveau manteau est cher.'),
        g('Ich nehme den blauen Mantel.', 'I’ll take the blue coat.', 'Je prends le manteau bleu.'),
        g('Die neue Tasche passt dazu.', 'The new bag matches it.', 'Le nouveau sac va avec.'),
        g('Das neue Auto steht vor der Tür.', 'The new car is outside the door.', 'La nouvelle voiture est devant la porte.'),
        g('Die neuen Autos stehen dort drüben.', 'The new cars are over there.', 'Les voitures neuves sont là-bas.'),
      ],
      mistakes: [
        { wrong: 'Der Mantel ist neue.', right: 'Der Mantel ist neu.', why: 'After sein there is no ending.', whyFr: 'Après sein, il n’y a pas de terminaison.' },
        { wrong: 'Ich nehme den neue Mantel.', right: 'Ich nehme den neuen Mantel.', why: 'Masculine accusative: -en.', whyFr: 'Masculin accusatif : -en.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l11-e2', prompt: 'der neu__ Mantel (nominative ending)', answer: 'e', hint: 'after der (nom) add -e', hintFr: 'après der (nom) ajoute -e' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l11-e8', prompt: 'eine freundlich__ Frau (nominative, feminine)', answer: 'e', hint: 'feminine after eine → -e', hintFr: 'féminin après eine → -e' } },

    // ───────────── 3 · after ein / eine ─────────────
    { kind: 'chapter', title: 'Nach ein, eine: -er / -e / -es', titleFr: 'Après ein, eine : -er / -e / -es', blurb: 'ein neuer Mantel, ein neues Auto.', blurbFr: 'ein neuer Mantel, ein neues Auto.' },

    { kind: 'situation', title: 'Ein netter Mann', titleFr: 'Un homme sympathique',
      setting: 'Mia tells a friend about her day.', settingFr: 'Mia raconte sa journée à une amie.',
      lines: [
        line('Mia', 'Ich habe einen neuen Mantel. Und ich kaufe eine neue Tasche.', 'I have a new coat. And I’m buying a new bag.', 'J’ai un nouveau manteau. Et j’achète un nouveau sac.'),
        line('Freundin', 'Und wer ist das? Das ist ein netter Mann!', 'And who is that? That is a nice man!', 'Et qui est-ce ? C’est un homme sympathique !'),
        line('Mia', 'Er ist mein Nachbar. Er hat ein altes Haus und ein interessantes Buch geschrieben.', 'He is my neighbour. He has an old house and wrote an interesting book.', 'C’est mon voisin. Il a une vieille maison et a écrit un livre intéressant.'),
        line('Freundin', 'Das ist ein wunderbarer Tag! Und er hat ein teures Auto.', 'That is a wonderful day! And he has an expensive car.', 'Quelle journée merveilleuse ! Et il a une voiture chère.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l11-nach-ein', title: 'Adjective endings after ein / eine', titleFr: 'Terminaisons des adjectifs après ein / eine',
      lead: 'After ein / eine the ending shows the gender: -er (m), -e (f), -es (n). Masculine accusative: -en.',
      leadFr: 'Après ein / eine, la terminaison montre le genre : -er (m), -e (f), -es (n). Masculin à l’accusatif : -en.',
      explanationMd: 'After **ein / eine** (nominative) the **ending shows the gender** because **ein** itself does not: **ein neuer Mantel** (**-er**), **eine neue Tasche** (**-e**), **ein neues Auto** (**-es**). In the **accusative**, only the **masculine** changes again: **einen neuen Mantel** (**-en**). Feminine and neuter keep their form: **eine neue Tasche, ein neues Auto**.',
      explanationMdFr: 'Après **ein / eine** (nominatif), la **terminaison montre le genre**, car **ein** ne le montre pas : **ein neuer Mantel** (**-er**), **eine neue Tasche** (**-e**), **ein neues Auto** (**-es**). À l’**accusatif**, seul le **masculin** change : **einen neuen Mantel** (**-en**). Le féminin et le neutre gardent leur forme : **eine neue Tasche, ein neues Auto**.',
      tables: [{ title: 'After ein / eine', titleFr: 'Après ein / eine', headers: ['Case', 'm', 'f', 'n'], headersFr: ['Cas', 'm', 'f', 'n'],
        rows: [['Nominative', 'ein neuer Mantel', 'eine neue Tasche', 'ein neues Auto'], ['Accusative', 'einen neuen Mantel', 'eine neue Tasche', 'ein neues Auto']],
        rowsFr: [['Nominatif', 'ein neuer Mantel', 'eine neue Tasche', 'ein neues Auto'], ['Accusatif', 'einen neuen Mantel', 'eine neue Tasche', 'ein neues Auto']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'ein netter Mann.', role: 'other' }], en: 'That is a nice man.', fr: 'C’est un homme sympathique.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'einen neuen Mantel.', role: 'accusative' }], en: 'I have a new coat.', fr: 'J’ai un nouveau manteau.' },
      ],
      contrast: {
        a: { label: 'Nominative (the subject)', labelFr: 'Nominatif (le sujet)', note: 'ein neuer Mantel', noteFr: 'ein neuer Mantel', examples: [g('Ein neuer Mantel ist teuer.', 'A new coat is expensive.', 'Un nouveau manteau est cher.'), g('Das ist ein netter Mann.', 'That is a nice man.', 'C’est un homme sympathique.')] },
        b: { label: 'Accusative (the object)', labelFr: 'Accusatif (l’objet)', note: 'einen neuen Mantel', noteFr: 'einen neuen Mantel', examples: [g('Ich habe einen neuen Mantel.', 'I have a new coat.', 'J’ai un nouveau manteau.'), g('Ich kaufe eine neue Tasche.', 'I buy a new bag.', 'J’achète un nouveau sac.')] },
      },
      examples: [
        g('Das ist ein netter Mann.', 'That is a nice man.', 'C’est un homme sympathique.'),
        g('Ich habe einen neuen Mantel.', 'I have a new coat.', 'J’ai un nouveau manteau.'),
        g('Ich kaufe eine neue Tasche.', 'I buy a new bag.', 'J’achète un nouveau sac.'),
        g('Das ist ein altes Haus.', 'That is an old house.', 'C’est une vieille maison.'),
        g('Er hat ein teures Auto.', 'He has an expensive car.', 'Il a une voiture chère.'),
        g('Das ist ein wunderbarer Tag!', 'That is a wonderful day!', 'Quelle journée merveilleuse !'),
      ],
      mistakes: [
        { wrong: 'Das ist ein neu Mantel.', right: 'Das ist ein neuer Mantel.', why: 'After ein the ending shows the gender: -er.', whyFr: 'Après ein, la terminaison montre le genre : -er.' },
        { wrong: 'Ich habe ein neuer Mantel.', right: 'Ich habe einen neuen Mantel.', why: 'Masculine accusative: einen … -en.', whyFr: 'Masculin accusatif : einen … -en.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l11-e3', prompt: 'Which is correct (nominative)?', promptFr: 'Quelle forme est correcte (nominatif) ?', options: ['ein neuer Mantel', 'ein neue Mantel', 'ein neues Mantel'], answer: 0, explain: 'Masculine after "ein" (nom) takes -er: ein neuer Mantel.', explainFr: 'Le masculin après « ein » (nom) prend -er : ein neuer Mantel.', hint: 'Mantel is masculine (der).', hintFr: 'Mantel est masculin (der).' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l11-e4', prompt: 'Which is correct?', promptFr: 'Quelle forme est correcte ?', options: ['ein neue Auto', 'ein neues Auto', 'ein neuer Auto'], answer: 1, explain: 'Neuter after "ein" (nom) takes -es: ein neues Auto.', explainFr: 'Le neutre après « ein » (nom) prend -es : ein neues Auto.', hint: 'Auto is neuter (das).', hintFr: 'Auto est neutre (das).' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l11-e5', prompt: 'Ich kaufe einen neu__ Mantel. (accusative, masculine)', answer: 'en', hint: 'masculine accusative → -en', hintFr: 'accusatif masculin → -en' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l11-e10', tokens: ['ein', 'ist', 'netter', 'Er', 'Mann'], answer: ['Er', 'ist', 'ein', 'netter', 'Mann'], hint: 'Subject, verb, then "ein netter Mann".', hintFr: 'Sujet, verbe, puis « ein netter Mann ».' } },

    { kind: 'pronunciation', focus: 'The "eu" in neu/freundlich is "oy"; keep endings light and unstressed (neue, neuen)', focusFr: 'Le « eu » de neu/freundlich est « oï » ; garde les terminaisons courtes et non accentuées (neue, neuen)', items: [{ id: 'a2l11-neu-pron', german: 'neu', english: 'new', french: 'nouveau', gender: null, syllables: ['NEU'], pronunciation: 'noy', example: { de: 'Der Mantel ist neu.', en: 'The coat is new.', fr: 'Le manteau est neuf.' } }, { id: 'a2l11-freundlich-pron', german: 'freundlich', english: 'friendly', french: 'aimable', gender: null, syllables: ['FREUND', 'lich'], pronunciation: 'FROYNT-likh', example: { de: 'Eine freundliche Frau.', en: 'A friendly woman.', fr: 'Une femme aimable.' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l11-e7', prompt: 'Listen. What does Mia buy?', promptFr: 'Écoute. Qu’achète Mia ?', audio: { ttsText: 'Ich kaufe eine neue Tasche und einen warmen Mantel.' }, options: ['A bag and a coat', 'A book and a bag', 'Shoes'], optionsFr: ['Un sac et un manteau', 'Un livre et un sac', 'Des chaussures'], answer: 0, hint: 'Listen for the two nouns.', hintFr: 'Écoute les deux noms.' } },

    { kind: 'wrapup',
      summary: 'You can now describe things and people: **no ending after sein**, **-e / -en after der**, and **-er / -e / -es after ein** (masculine accusative **-en**). 🎉',
      summaryFr: 'Tu sais maintenant décrire des choses et des personnes : **pas de terminaison après sein**, **-e / -en après der**, et **-er / -e / -es après ein** (masculin accusatif **-en**). 🎉',
      card: { title: 'Adjective endings on one page', titleFr: 'Les terminaisons des adjectifs en une page', sections: [
        { heading: 'After sein', headingFr: 'Après sein', rows: [g('Der Mantel ist neu.', 'no ending', 'sans terminaison')] },
        { heading: 'After der / die / das', headingFr: 'Après der / die / das', rows: [g('der neue · die neue · das neue', '-e', '-e'), g('die neuen · den neuen', 'plural and masc. acc.', 'pluriel et masc. acc.')] },
        { heading: 'After ein / eine', headingFr: 'Après ein / eine', rows: [g('ein neuer · eine neue · ein neues', '-er · -e · -es', '-er · -e · -es'), g('einen neuen Mantel', 'masculine accusative', 'masculin accusatif')] },
      ] } },
  ],
};
