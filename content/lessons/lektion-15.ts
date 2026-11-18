import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion15: Lesson = {
  id: 'l15', level: 'A1', module: 3, number: 15,
  title: { de: 'Mein Haus, dein Haus', en: 'My house, your house', fr: 'Ma maison, ta maison' },
  theme: 'Rooms, possessives sein / ihr, names with -s, and giving opinions', themeFr: 'Les pièces, les possessifs sein / ihr, les noms propres avec -s et donner son avis',
  goals: ['Name rooms and parts of a house', 'Say "his" and "her" with sein / ihr', 'Say whose house it is: Ottos Haus', 'Ask and give opinions: "Wie findest du …?"'], goalsFr: ['Nommer les pièces et les parties d’une maison', 'Dire « son / sa » avec sein / ihr', 'Dire à qui est la maison : Ottos Haus', 'Demander et donner son avis : « Wie findest du … ? »'],
  canDo: g('Ich kann ein Haus beschreiben, sagen, wem etwas gehört, und meine Meinung dazu äußern.', 'I can describe a house, say who owns something and give my opinion about it.', 'Je sais décrire une maison, dire à qui appartient quelque chose et donner mon avis.'),
  steps: [
    { kind: 'intro', title: 'Mein Haus, dein Haus 🏡', titleFr: 'Ma maison, ta maison 🏡',
      scene: 'Lina and Sam visit their neighbour Otto.', sceneFr: 'Lina et Sam rendent visite à leur voisin Otto.',
      goals: ['Name the rooms and parts of a house', 'Say whose it is: Ottos Haus', 'Say “his” and “her”: sein and ihr', 'Ask and give an opinion with Wie findest du …?'],
      goalsFr: ['Nommer les pièces et les parties d’une maison', 'Dire à qui c’est : Ottos Haus', 'Dire « son / sa » : sein et ihr', 'Demander et donner un avis avec Wie findest du … ?'] },

    // ───────────── 1 · Whose house? ─────────────
    { kind: 'chapter', title: 'Wessen Haus? Ottos Haus', titleFr: 'À qui la maison ? Ottos Haus', blurb: 'The house, its rooms and its owner.', blurbFr: 'La maison, ses pièces et son propriétaire.' },

    { kind: 'situation', title: 'Bei Otto', titleFr: 'Chez Otto',
      setting: 'Sam shows Lina the house of his neighbour.', settingFr: 'Sam montre à Lina la maison de son voisin.',
      lines: [
        line('Sam', 'Das ist Ottos Haus. Otto ist mein Nachbar.', 'That is Otto’s house. Otto is my neighbour.', 'Voici la maison d’Otto. Otto est mon voisin.'),
        line('Lina', 'Schön! Es hat einen Garten und eine Garage.', 'Nice! It has a garden and a garage.', 'Joli ! Elle a un jardin et un garage.'),
        line('Sam', 'Sein Wohnzimmer ist gemütlich, und seine Küche ist hell.', 'His living room is cosy, and his kitchen is bright.', 'Son salon est confortable, et sa cuisine est lumineuse.'),
        line('Lina', 'Wie findest du den Keller?', 'What do you think of the cellar?', 'Comment trouves-tu la cave ?'),
        line('Sam', 'Ich finde ihn hässlich und dunkel.', 'I think it’s ugly and dark.', 'Je la trouve laide et sombre.'),
      ],
      words: [{ id: 'l15-nachbar', german: 'der Nachbar', english: 'the neighbour (male)', french: 'le voisin', gender: 'der', syllables: ['NACH', 'bar'], pronunciation: 'dair NAHKH-bar', example: { de: 'Mein Nachbar heißt Otto.', en: 'My neighbour is called Otto.', fr: 'Mon voisin s’appelle Otto.' } }, { id: 'l15-gemuetlich', german: 'gemütlich', english: 'cosy', french: 'confortable / douillet', gender: null, syllables: ['ge', 'MÜT', 'lich'], pronunciation: 'ge-MUET-likh', example: { de: 'Das Wohnzimmer ist gemütlich.', en: 'The living room is cosy.', fr: 'Le salon est douillet.' } }, { id: 'l15-hell', german: 'hell', english: 'bright / light', french: 'lumineux / clair', gender: null, syllables: ['HELL'], pronunciation: 'hell', example: { de: 'Die Küche ist sehr hell.', en: 'The kitchen is very bright.', fr: 'La cuisine est très lumineuse.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l15-e12', prompt: 'Who is Otto?', promptFr: 'Qui est Otto ?', options: ['Sam’s neighbour', 'Lina’s brother', 'The landlord'], optionsFr: ['Le voisin de Sam', 'Le frère de Lina', 'Le propriétaire'], answer: 0, explain: 'Sam says: “Otto ist mein Nachbar.”', explainFr: 'Sam dit : « Otto ist mein Nachbar. »', hint: 'Look at Sam’s first line.', hintFr: 'Regarde la première réplique de Sam.' } },

    { kind: 'wordgroup', title: 'Haus und Zimmer', titleFr: 'Maison et pièces',
      items: [{ id: 'l15-wohnzimmer', german: 'das Wohnzimmer', english: 'the living room', french: 'le salon', gender: 'das', syllables: ['WOHN', 'zim', 'mer'], pronunciation: 'dahss VOHN-tsim-mer', example: { de: 'Das Wohnzimmer hat ein Sofa.', en: 'The living room has a sofa.', fr: 'Le salon a un canapé.' } }, { id: 'l15-schlafzimmer', german: 'das Schlafzimmer', english: 'the bedroom', french: 'la chambre', gender: 'das', syllables: ['SCHLAF', 'zim', 'mer'], pronunciation: 'dahss SHLAHF-tsim-mer', example: { de: 'Sein Schlafzimmer ist ruhig.', en: 'His bedroom is quiet.', fr: 'Sa chambre est calme.' } }, { id: 'l15-keller', german: 'der Keller', english: 'the cellar / basement', french: 'la cave', gender: 'der', syllables: ['KEL', 'ler'], pronunciation: 'dair KEL-ler', example: { de: 'Der Keller ist dunkel.', en: 'The cellar is dark.', fr: 'La cave est sombre.' } }, { id: 'l15-balkon', german: 'der Balkon', english: 'the balcony', french: 'le balcon', gender: 'der', syllables: ['bal', 'KON'], pronunciation: 'dair bal-KOHN', example: { de: 'Ich frühstücke auf dem Balkon.', en: 'I have breakfast on the balcony.', fr: 'Je prends le petit-déjeuner sur le balcon.' } }, { id: 'l15-garten', german: 'der Garten', english: 'the garden', french: 'le jardin', gender: 'der', syllables: ['GAR', 'ten'], pronunciation: 'dair GAR-ten', example: { de: 'Ihr Garten ist sehr groß.', en: 'Her garden is very big.', fr: 'Son jardin est très grand.' } }, { id: 'l15-garage', german: 'die Garage', english: 'the garage', french: 'le garage', gender: 'die', syllables: ['ga', 'RA', 'ge'], pronunciation: 'dee gah-RAH-zhe', example: { de: 'Das Auto steht in der Garage.', en: 'The car is in the garage.', fr: 'La voiture est dans le garage.' } }, { id: 'l15-erdgeschoss', german: 'das Erdgeschoss', english: 'the ground floor', french: 'le rez-de-chaussée', gender: 'das', syllables: ['ERD', 'ge', 'schoss'], pronunciation: 'dahss AIRT-ge-shoss', example: { de: 'Die Küche ist im Erdgeschoss.', en: 'The kitchen is on the ground floor.', fr: 'La cuisine est au rez-de-chaussée.' } }, { id: 'l15-miete', german: 'die Miete', english: 'the rent', french: 'le loyer', gender: 'die', syllables: ['MIE', 'te'], pronunciation: 'dee MEE-te', example: { de: 'Die Miete ist nicht teuer.', en: 'The rent is not expensive.', fr: 'Le loyer n’est pas cher.' } }] },

    { kind: 'grammar', note: {
      id: 'l15-namen-s', title: 'Whose is it? Ottos Haus', titleFr: 'À qui est-ce ? Ottos Haus',
      lead: 'With a first name add -s and put the name before the noun. No apostrophe.',
      leadFr: 'Avec un prénom, ajoute -s et place le prénom avant le nom. Pas d’apostrophe.',
      explanationMd: 'To say who something belongs to, **add -s to the first name and put it before the noun**: **Ottos Haus**. German uses **no apostrophe** (unlike English “Otto’s”). Names that end in **s, ß, x, z** just get an apostrophe: **Max’ Zimmer**.\n\nIn speech you often hear **von + name** instead: **das Haus von Otto**.',
      explanationMdFr: 'Pour dire à qui appartient quelque chose, **ajoute -s au prénom et place-le avant le nom** : **Ottos Haus**. L’allemand n’utilise **pas d’apostrophe** (contrairement à l’anglais « Otto’s »). Les prénoms qui finissent par **s, ß, x, z** reçoivent seulement une apostrophe : **Max’ Zimmer**.\n\nÀ l’oral, on entend souvent **von + prénom** : **das Haus von Otto**.',
      tables: [{ title: 'Name + noun', titleFr: 'Prénom + nom', headers: ['Name', 'With -s', 'With von'], headersFr: ['Prénom', 'Avec -s', 'Avec von'],
        rows: [['Otto', 'Ottos Haus', 'das Haus von Otto'], ['Lina', 'Linas Garten', 'der Garten von Lina'], ['Max', 'Max’ Zimmer', 'das Zimmer von Max']],
        rowsFr: [['Otto', 'Ottos Haus', 'das Haus von Otto'], ['Lina', 'Linas Garten', 'der Garten von Lina'], ['Max', 'Max’ Zimmer', 'das Zimmer von Max']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'Ottos Haus.', role: 'other' }], en: 'That is Otto’s house.', fr: 'C’est la maison d’Otto.' },
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'die Wohnung', role: 'other' }, { text: 'von Sam.', role: 'other' }], en: 'That is Sam’s flat.', fr: 'C’est l’appartement de Sam.' },
      ],
      contrast: {
        a: { label: 'Name + -s', labelFr: 'Prénom + -s', note: 'short and common in writing', noteFr: 'court et fréquent à l’écrit', examples: [g('Das ist Ottos Haus.', 'That is Otto’s house.', 'C’est la maison d’Otto.'), g('Linas Küche ist sehr hell.', 'Lina’s kitchen is very bright.', 'La cuisine de Lina est très lumineuse.')] },
        b: { label: 'von + name', labelFr: 'von + prénom', note: 'common in speech, works with every name', noteFr: 'fréquent à l’oral, marche avec tous les prénoms', examples: [g('Das ist die Wohnung von Sam.', 'That is Sam’s flat.', 'C’est l’appartement de Sam.'), g('Das ist das Haus von Otto.', 'That is Otto’s house.', 'C’est la maison d’Otto.')] },
      },
      examples: [
        g('Das ist Ottos Haus.', 'That is Otto’s house.', 'C’est la maison d’Otto.'),
        g('Linas Küche ist sehr hell.', 'Lina’s kitchen is very bright.', 'La cuisine de Lina est très lumineuse.'),
        g('Das ist die Wohnung von Sam.', 'That is Sam’s flat.', 'C’est l’appartement de Sam.'),
        g('Ottos Garten ist schön.', 'Otto’s garden is beautiful.', 'Le jardin d’Otto est beau.'),
        g('Max’ Zimmer ist klein.', 'Max’s room is small.', 'La chambre de Max est petite.'),
        g('Das Auto steht in Ottos Garage.', 'The car is in Otto’s garage.', 'La voiture est dans le garage d’Otto.'),
      ],
      mistakes: [
        { wrong: 'Das ist Otto’s Haus.', right: 'Das ist Ottos Haus.', why: 'German has no apostrophe before the -s of a name.', whyFr: 'L’allemand n’a pas d’apostrophe avant le -s d’un prénom.' },
        { wrong: 'Das ist das Haus Ottos.', right: 'Das ist Ottos Haus.', why: 'In everyday German put the name before the noun.', whyFr: 'En allemand courant, place le prénom avant le nom.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l15-e3', prompt: 'How do you say "Otto’s house"?', promptFr: 'Comment dit-on « la maison d’Otto » ?', options: ['Ottos Haus', 'Otto Haus', 'Haus Ottos’'], answer: 0, explain: 'Add -s to the name and put it before the noun, without an apostrophe.', explainFr: 'On ajoute -s au prénom et on le place avant le nom, sans apostrophe.', hint: 'Name + s, then the noun.', hintFr: 'Prénom + s, puis le nom.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l15-e9', prompt: 'Das ist die Wohnung ___ Sam. (= Sams Wohnung)', promptFr: 'Das ist die Wohnung ___ Sam. (= Sams Wohnung)', answer: 'von', hint: 'The spoken alternative to the name + s form.', hintFr: 'L’alternative orale à la forme nom + s.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l15-e8', word: 'Balkon', answer: 'der', hint: 'Masculine: "ein Balkon", "auf dem Balkon".', hintFr: 'Masculin : « ein Balkon », « auf dem Balkon ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l15-e5', pairs: [{ de: 'hässlich', en: 'ugly', fr: 'laid' }, { de: 'gemütlich', en: 'cosy', fr: 'douillet' }, { de: 'hell', en: 'bright', fr: 'lumineux' }, { de: 'toll', en: 'great', fr: 'génial' }], hint: 'Match each adjective to its meaning.', hintFr: 'Associe chaque adjectif à sa signification.' } },

    // ───────────── 2 · sein and ihr ─────────────
    { kind: 'chapter', title: 'sein und ihr: sein Haus, ihr Garten', titleFr: 'sein et ihr : son maison, son jardin', blurb: 'Say “his” and “her”.', blurbFr: 'Dire « son / sa ».' },

    { kind: 'situation', title: 'Sein Haus, ihr Garten', titleFr: 'Sa maison, son jardin',
      setting: 'Sam and Lina compare the houses of Lina and Otto.', settingFr: 'Sam et Lina comparent les maisons de Lina et d’Otto.',
      lines: [
        line('Sam', 'Hat Lina einen Garten?', 'Does Lina have a garden?', 'Lina a-t-elle un jardin ?'),
        line('Lina', 'Ja, mein Garten ist groß, und meine Küche ist klein.', 'Yes, my garden is big, and my kitchen is small.', 'Oui, mon jardin est grand, et ma cuisine est petite.'),
        line('Sam', 'Und Otto? Hat er eine Garage?', 'And Otto? Does he have a garage?', 'Et Otto ? A-t-il un garage ?'),
        line('Lina', 'Ja, seine Garage ist alt. Er zeigt seinen Keller nicht gern.', 'Yes, his garage is old. He doesn’t like showing his cellar.', 'Oui, son garage est vieux. Il n’aime pas montrer sa cave.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l15-e13', prompt: 'Whose garden is big?', promptFr: 'À qui est le grand jardin ?', options: ['Lina’s', 'Otto’s', 'Sam’s'], optionsFr: ['À Lina', 'À Otto', 'À Sam'], answer: 0, explain: 'Lina says: “Mein Garten ist groß.”', explainFr: 'Lina dit : « Mein Garten ist groß. »', hint: 'Lina talks about her own garden.', hintFr: 'Lina parle de son propre jardin.' } },

    { kind: 'grammar', note: {
      id: 'l15-sein-ihr', title: 'sein and ihr: his and her', titleFr: 'sein et ihr : son / sa',
      lead: 'The owner decides sein or ihr. The noun decides the ending: -e for die words and plurals, -en for masculine objects.',
      leadFr: 'Le possesseur décide sein ou ihr. Le nom décide la terminaison : -e pour les mots en die et les pluriels, -en pour les objets masculins.',
      explanationMd: 'Like **mein** and **dein**, the possessive **sein** (his, its) and **ihr** (her) agree with the **noun they describe**. The **owner** decides **sein** (a man or a thing) or **ihr** (a woman). The **noun** decides the ending: none for **der / das** words, **-e** for **die** words and plurals. In the **accusative** only the **masculine** adds **-en**: **seinen, ihren**.',
      explanationMdFr: 'Comme **mein** et **dein**, le possessif **sein** (son, sa du possesseur masculin) et **ihr** (son, sa de la possesseuse) s’accordent avec le **nom qu’ils décrivent**. Le **possesseur** décide **sein** (un homme ou une chose) ou **ihr** (une femme). Le **nom** décide la terminaison : aucune pour les mots en **der / das**, **-e** pour les mots en **die** et les pluriels. À l’**accusatif**, seul le **masculin** prend **-en** : **seinen, ihren**.',
      tables: [{ title: 'sein and ihr', titleFr: 'sein et ihr', headers: ['Noun', 'his (Otto)', 'her (Lina)'], headersFr: ['Nom', 'son / sa (Otto)', 'son / sa (Lina)'],
        rows: [['der Garten (subject)', 'sein Garten', 'ihr Garten'], ['die Garage', 'seine Garage', 'ihre Garage'], ['das Haus', 'sein Haus', 'ihr Haus'], ['die Fenster (plural)', 'seine Fenster', 'ihre Fenster'], ['der Balkon (object)', 'seinen Balkon', 'ihren Balkon']],
        rowsFr: [['der Garten (sujet)', 'sein Garten', 'ihr Garten'], ['die Garage', 'seine Garage', 'ihre Garage'], ['das Haus', 'sein Haus', 'ihr Haus'], ['die Fenster (pluriel)', 'seine Fenster', 'ihre Fenster'], ['der Balkon (objet)', 'seinen Balkon', 'ihren Balkon']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Sein Haus', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'klein.', role: 'other' }], en: 'His house is small.', fr: 'Sa maison est petite.' },
        { parts: [{ text: 'Lina', role: 'subject' }, { text: 'mag', role: 'verb' }, { text: 'ihren Balkon.', role: 'accusative' }], en: 'Lina likes her balcony.', fr: 'Lina aime son balcon.' },
      ],
      contrast: {
        a: { label: 'sein (Otto)', labelFr: 'sein (Otto)', note: 'the owner is a man or a thing', noteFr: 'le possesseur est un homme ou une chose', examples: [g('Otto zeigt seinen Garten.', 'Otto shows his garden.', 'Otto montre son jardin.'), g('Sein Haus hat keinen Keller.', 'His house has no cellar.', 'Sa maison n’a pas de cave.')] },
        b: { label: 'ihr (Lina)', labelFr: 'ihr (Lina)', note: 'the owner is a woman', noteFr: 'la possesseuse est une femme', examples: [g('Lina mag ihre Küche sehr.', 'Lina likes her kitchen a lot.', 'Lina aime beaucoup sa cuisine.'), g('Ihr Garten ist sehr groß.', 'Her garden is very big.', 'Son jardin est très grand.')] },
      },
      examples: [
        g('Otto zeigt seinen Garten.', 'Otto shows his garden.', 'Otto montre son jardin.'),
        g('Lina mag ihre Küche sehr.', 'Lina likes her kitchen a lot.', 'Lina aime beaucoup sa cuisine.'),
        g('Sein Haus hat keinen Keller.', 'His house has no cellar.', 'Sa maison n’a pas de cave.'),
        g('Ihr Garten ist sehr groß.', 'Her garden is very big.', 'Son jardin est très grand.'),
        g('Seine Garage ist alt.', 'His garage is old.', 'Son garage est vieux.'),
        g('Er mag sein Wohnzimmer.', 'He likes his living room.', 'Il aime son salon.'),
        g('Sie zeigt ihren Balkon.', 'She shows her balcony.', 'Elle montre son balcon.'),
      ],
      mistakes: [
        { wrong: 'Otto zeigt sein Garten.', right: 'Otto zeigt seinen Garten.', why: 'Garten is masculine and is the object: seinen.', whyFr: 'Garten est masculin et complément d’objet : seinen.' },
        { wrong: 'Lina mag seine Küche. (her own kitchen)', right: 'Lina mag ihre Küche.', why: 'For a woman’s own things use ihr-.', whyFr: 'Pour les affaires d’une femme, utilise ihr-.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l15-e1', prompt: 'Lina hat einen Garten. ___ Garten ist groß.', promptFr: 'Lina hat einen Garten. ___ Garten ist groß.', answer: 'Ihr', hint: 'A woman owns it: use "her".', hintFr: 'C’est à une femme : utilise « son (à elle) ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l15-e2', prompt: 'Otto hat eine Küche. ___ Küche ist klein.', promptFr: 'Otto hat eine Küche. ___ Küche ist klein.', answer: 'Seine', hint: 'A man owns it, and Küche is feminine: sein + e', hintFr: 'C’est à un homme et Küche est féminin : sein + e' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l15-e4', prompt: 'Sie liebt ___ Balkon. (Lina, ihr + accusative masculine)', promptFr: 'Sie liebt ___ Balkon. (Lina, ihr + accusatif masculin)', answer: 'ihren', hint: 'Only the masculine adds -en in the accusative.', hintFr: 'Seul le masculin ajoute -en à l’accusatif.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l15-e11', prompt: 'Sam shows his kitchen. Which sentence is right?', promptFr: 'Sam montre sa cuisine. Quelle phrase est correcte ?', options: ['Sam zeigt sein Küche.', 'Sam zeigt seine Küche.', 'Sam zeigt ihre Küche.'], answer: 1, explain: 'Sam is a man → sein; Küche is feminine → seine.', explainFr: 'Sam est un homme → sein ; Küche est féminin → seine.', hint: 'Who owns it, and what gender is the noun?', hintFr: 'À qui est-ce, et quel est le genre du nom ?' } },

    // ───────────── 3 · Opinions ─────────────
    { kind: 'chapter', title: 'Wie findest du …?', titleFr: 'Comment trouves-tu … ?', blurb: 'Ask for an opinion and give one.', blurbFr: 'Demander un avis et en donner un.' },

    { kind: 'situation', title: 'Meinungen', titleFr: 'Avis',
      setting: 'Lina asks Sam what he thinks of Otto’s house.', settingFr: 'Lina demande à Sam ce qu’il pense de la maison d’Otto.',
      lines: [
        line('Lina', 'Wie findest du das Haus?', 'What do you think of the house?', 'Comment trouves-tu la maison ?'),
        line('Sam', 'Ich finde es toll!', 'I think it’s great!', 'Je la trouve super !'),
        line('Lina', 'Und den Garten?', 'And the garden?', 'Et le jardin ?'),
        line('Sam', 'Ich finde ihn schön, aber zu klein.', 'I think it’s nice, but too small.', 'Je le trouve joli, mais trop petit.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l15-e14', prompt: 'What does Sam think of the garden?', promptFr: 'Que pense Sam du jardin ?', options: ['Nice, but too small', 'Ugly and dark', 'Great and big'], optionsFr: ['Joli, mais trop petit', 'Laid et sombre', 'Super et grand'], answer: 0, explain: 'He says: “Ich finde ihn schön, aber zu klein.”', explainFr: 'Il dit : « Ich finde ihn schön, aber zu klein. »', hint: 'Look at Sam’s last line.', hintFr: 'Regarde la dernière réplique de Sam.' } },

    { kind: 'wordgroup', title: 'Meinungen', titleFr: 'Avis',
      items: [{ id: 'l15-schoen', german: 'schön', english: 'beautiful / nice', french: 'beau / joli', gender: null, syllables: ['SCHÖN'], pronunciation: 'shoen', example: { de: 'Der Garten ist schön.', en: 'The garden is beautiful.', fr: 'Le jardin est beau.' } }, { id: 'l15-haesslich', german: 'hässlich', english: 'ugly', french: 'laid', gender: null, syllables: ['HÄSS', 'lich'], pronunciation: 'HESS-likh', example: { de: 'Die Lampe ist hässlich.', en: 'The lamp is ugly.', fr: 'La lampe est moche.' } }, { id: 'l15-toll', german: 'toll', english: 'great / fantastic', french: 'génial / super', gender: null, syllables: ['TOLL'], pronunciation: 'toll', example: { de: 'Ich finde das Haus toll!', en: 'I think the house is great!', fr: 'Je trouve la maison géniale !' } }] },

    { kind: 'grammar', note: {
      id: 'l15-meinung', title: 'Wie findest du …? Giving an opinion', titleFr: 'Wie findest du … ? Donner son avis',
      lead: 'Ask Wie findest du …? Answer Ich finde … + adjective. The adjective never takes an ending here.',
      leadFr: 'Demande Wie findest du … ? Réponds Ich finde … + adjectif. L’adjectif ne prend aucune terminaison ici.',
      explanationMd: 'Ask **Wie findest du …?** The thing is in the **accusative**, and you answer with a **pronoun**: **der → ihn**, **die → sie**, **das → es**. After **sein** or **finden** the **adjective has no ending**: **Der Garten ist schön. Ich finde ihn schön.** Make it stronger or weaker with **sehr** (very), **zu** (too), **nicht so** (not so).',
      explanationMdFr: 'Demande **Wie findest du … ?** La chose est à l’**accusatif**, et tu réponds avec un **pronom** : **der → ihn**, **die → sie**, **das → es**. Après **sein** ou **finden**, l’**adjectif n’a pas de terminaison** : **Der Garten ist schön. Ich finde ihn schön.** Renforce ou nuance avec **sehr** (très), **zu** (trop), **nicht so** (pas si).',
      tables: [{ title: 'Question and pronoun answer', titleFr: 'Question et réponse avec pronom', headers: ['Question', 'Answer'], headersFr: ['Question', 'Réponse'],
        rows: [['Wie findest du das Haus?', 'Ich finde es toll.'], ['Wie findest du den Garten?', 'Ich finde ihn schön.'], ['Wie findest du die Küche?', 'Ich finde sie hell.']],
        rowsFr: [['Wie findest du das Haus?', 'Ich finde es toll.'], ['Wie findest du den Garten?', 'Ich finde ihn schön.'], ['Wie findest du die Küche?', 'Ich finde sie hell.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wie', role: 'other' }, { text: 'findest', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'den Garten?', role: 'accusative' }], en: 'What do you think of the garden?', fr: 'Comment trouves-tu le jardin ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'finde', role: 'verb' }, { text: 'ihn', role: 'accusative' }, { text: 'schön.', role: 'other' }], en: 'I think it is nice.', fr: 'Je le trouve joli.' },
      ],
      contrast: {
        a: { label: 'sehr / toll', labelFr: 'sehr / toll', note: 'stronger', noteFr: 'plus fort', examples: [g('Das Sofa ist sehr gemütlich.', 'The sofa is very cosy.', 'Le canapé est très confortable.'), g('Ich finde das Haus toll!', 'I think the house is great!', 'Je trouve la maison super !')] },
        b: { label: 'zu / nicht so', labelFr: 'zu / nicht so', note: 'a reservation', noteFr: 'une réserve', examples: [g('Ich finde den Keller zu dunkel.', 'I think the cellar is too dark.', 'Je trouve la cave trop sombre.'), g('Das Bad ist nicht so gemütlich.', 'The bathroom is not so cosy.', 'La salle de bain n’est pas si confortable.')] },
      },
      examples: [
        g('Wie findest du Ottos Haus? – Ich finde es toll!', 'What do you think of Otto’s house? – I think it’s great!', 'Comment trouves-tu la maison d’Otto ? – Je la trouve super !'),
        g('Ich finde den Keller zu dunkel.', 'I think the cellar is too dark.', 'Je trouve la cave trop sombre.'),
        g('Das Sofa ist sehr gemütlich.', 'The sofa is very cosy.', 'Le canapé est très confortable.'),
        g('Die Küche ist sehr hell.', 'The kitchen is very bright.', 'La cuisine est très lumineuse.'),
        g('Ich finde die Lampe hässlich.', 'I think the lamp is ugly.', 'Je trouve la lampe laide.'),
        g('Der Garten ist schön.', 'The garden is beautiful.', 'Le jardin est beau.'),
        g('Wie findest du die Wohnung?', 'What do you think of the flat?', 'Comment trouves-tu l’appartement ?'),
      ],
      mistakes: [
        { wrong: 'Ich finde ihm schön.', right: 'Ich finde ihn schön.', why: 'The thing you judge is the accusative object: ihn.', whyFr: 'La chose que tu juges est l’objet à l’accusatif : ihn.' },
        { wrong: 'Ich finde der Garten schön.', right: 'Ich finde den Garten schön.', why: 'After finden the noun is accusative: der → den.', whyFr: 'Après finden, le nom est à l’accusatif : der → den.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l15-e7', tokens: ['du', 'Wie', 'das', 'findest', 'Haus'], answer: ['Wie', 'findest', 'du', 'das', 'Haus'], hint: 'Question word first, then the verb, then the subject.', hintFr: 'Mot interrogatif d’abord, puis le verbe, puis le sujet.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l15-e6', prompt: 'Listen. What is too small?', promptFr: 'Écoute. Qu’est-ce qui est trop petit ?', audio: { ttsText: 'Ich finde Ottos Haus toll, aber der Garten ist zu klein.' }, options: ['The house', 'The garden', 'The kitchen'], optionsFr: ['La maison', 'Le jardin', 'La cuisine'], answer: 1, hint: 'Listen for "zu klein".', hintFr: 'Écoute « zu klein ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l15-e10', prompt: 'Listen. Which room is cosy?', promptFr: 'Écoute. Quelle pièce est douillette ?', audio: { ttsText: 'Mein Nachbar hat ein Haus mit Garten. Sein Keller ist dunkel, aber sein Wohnzimmer ist sehr gemütlich.' }, options: ['The cellar', 'The garden', 'The living room'], optionsFr: ['La cave', 'Le jardin', 'Le salon'], answer: 2, hint: 'Listen for "gemütlich".', hintFr: 'Écoute « gemütlich ».' } },

    { kind: 'pronunciation', focus: 'Umlauts and the soft "ch" in -lich: gemütlich, hässlich', focusFr: 'Les trémas et le « ch » doux de -lich : gemütlich, hässlich', items: [{ id: 'l15-gemuetlich-pron', german: 'gemütlich', english: 'cosy', french: 'douillet', gender: null, syllables: ['ge', 'MÜT', 'lich'], pronunciation: 'ge-MUET-likh', example: { de: 'Das Sofa ist gemütlich.', en: 'The sofa is cosy.', fr: 'Le canapé est confortable.' } }, { id: 'l15-haesslich-pron', german: 'hässlich', english: 'ugly', french: 'laid', gender: null, syllables: ['HÄSS', 'lich'], pronunciation: 'HESS-likh', example: { de: 'Der Teppich ist hässlich.', en: 'The carpet is ugly.', fr: 'Le tapis est moche.' } }, { id: 'l15-schlafzimmer-pron', german: 'das Schlafzimmer', english: 'the bedroom', french: 'la chambre', gender: 'das', syllables: ['SCHLAF', 'zim', 'mer'], pronunciation: 'dahss SHLAHF-tsim-mer', example: { de: 'Mein Schlafzimmer ist klein.', en: 'My bedroom is small.', fr: 'Ma chambre est petite.' } }, { id: 'l15-erdgeschoss-pron', german: 'das Erdgeschoss', english: 'the ground floor', french: 'le rez-de-chaussée', gender: 'das', syllables: ['ERD', 'ge', 'schoss'], pronunciation: 'dahss AIRT-ge-shoss', example: { de: 'Ich wohne im Erdgeschoss.', en: 'I live on the ground floor.', fr: 'J’habite au rez-de-chaussée.' } }, { id: 'l15-schoen-pron', german: 'schön', english: 'beautiful', french: 'beau', gender: null, syllables: ['SCHÖN'], pronunciation: 'shoen', example: { de: 'Der Balkon ist schön.', en: 'The balcony is beautiful.', fr: 'Le balcon est beau.' } }] },

    { kind: 'wrapup',
      summary: 'You can now name the parts of a house, say **Ottos Haus**, use **sein / ihr**, and ask and give opinions with **Wie findest du …? – Ich finde es / ihn / sie …**. 🎉',
      summaryFr: 'Tu sais maintenant nommer les parties d’une maison, dire **Ottos Haus**, utiliser **sein / ihr**, et demander et donner un avis avec **Wie findest du … ? – Ich finde es / ihn / sie …**. 🎉',
      card: { title: 'Lesson 15 on one page', titleFr: 'La leçon 15 en une page', sections: [
        { heading: 'Whose?', headingFr: 'À qui ?', rows: [g('Ottos Haus, Linas Garten', 'name + -s, no apostrophe', 'prénom + -s, pas d’apostrophe'), g('das Haus von Otto', 'with von', 'avec von')] },
        { heading: 'his and her', headingFr: 'son / sa', rows: [g('sein / seine / sein', 'the owner is a man', 'le possesseur est un homme'), g('ihr / ihre / ihr', 'the owner is a woman', 'la possesseuse est une femme'), g('seinen, ihren', 'masculine object', 'objet masculin')] },
        { heading: 'Opinions', headingFr: 'Avis', rows: [g('Wie findest du den Garten?', 'What do you think of it?', 'Comment le trouves-tu ?'), g('Ich finde ihn schön. / es toll. / sie hell.', 'ihn · es · sie', 'ihn · es · sie'), g('sehr, zu, nicht so', 'intensity', 'intensité')] },
      ] } },
  ],
};
