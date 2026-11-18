import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion21: Lesson = {
  id: 'a2-l21', level: 'A2', module: 3, number: 11,
  title: { de: 'Geschenke und Verben mit Dativ und Akkusativ', en: 'Gifts and verbs with dative + accusative', fr: 'Cadeaux et verbes avec datif + accusatif' },
  theme: 'Verbs with two objects (dative + accusative), object order, and celebrations', themeFr: 'Verbes à deux compléments (datif + accusatif), ordre des compléments et fêtes',
  goals: ['Use verbs with two objects: schenken, geben, schicken, bringen, zeigen, empfehlen', 'Put the dative before the accusative with nouns', 'Put pronouns first: "Ich gebe es ihm"', 'Talk about presents, parties and birthdays'], goalsFr: ['Utiliser des verbes à deux compléments : schenken, geben, schicken, bringen, zeigen, empfehlen', 'Placer le datif avant l’accusatif avec des noms', 'Placer les pronoms en premier : « Ich gebe es ihm »', 'Parler de cadeaux, de fêtes et d’anniversaires'],
  canDo: g('Ich kann Geschenke und Feiern planen und Sätze mit Dativ- und Akkusativobjekt in der richtigen Reihenfolge bauen.', 'I can plan gifts and parties and build sentences with a dative and an accusative object in the right order.', 'Je sais planifier des cadeaux et des fêtes et construire des phrases avec un complément au datif et à l’accusatif dans le bon ordre.'),
  steps: [
    { kind: 'intro', title: 'Geschenke und Feiern 🎂', titleFr: 'Cadeaux et fêtes 🎂',
      scene: 'Lara and Tim secretly plan a surprise party for Lena. Who brings what to whom?', sceneFr: 'Lara et Tim préparent en secret une fête surprise pour Lena. Qui apporte quoi à qui ?',
      goals: ['Use verbs with two objects: schenken, geben, schicken, bringen, zeigen, empfehlen', 'Put the dative before the accusative with nouns', 'Put pronouns first: “Ich gebe es ihm”'],
      goalsFr: ['Utiliser les verbes à deux compléments : schenken, geben, schicken, bringen, zeigen, empfehlen', 'Mettre le datif avant l’accusatif avec des noms', 'Mettre les pronoms d’abord : « Ich gebe es ihm »'] },

    // ───────────── 1 · Party planning ─────────────
    { kind: 'chapter', title: 'Die Feier planen', titleFr: 'Préparer la fête', blurb: 'Party, guests and gifts.', blurbFr: 'Fête, invités et cadeaux.' },

    { kind: 'situation', title: 'Eine Überraschung für Lena', titleFr: 'Une surprise pour Lena',
      setting: 'Lara and Tim whisper on the phone.', settingFr: 'Lara et Tim chuchotent au téléphone.',
      lines: [
        line('Lara', 'Die Feier beginnt um acht Uhr. Es ist eine Überraschung für Lena!', 'The party starts at eight. It’s a surprise for Lena!', 'La fête commence à huit heures. C’est une surprise pour Lena !'),
        line('Tim', 'Wer backt die Torte? Alle Gäste bringen etwas mit.', 'Who is baking the cake? All guests bring something.', 'Qui prépare le gâteau ? Tous les invités apportent quelque chose.'),
        line('Lara', 'Ich schenke Lena einen Schal. Ich verpacke das Geschenk heute Abend.', 'I’m giving Lena a scarf. I’ll wrap the gift tonight.', 'J’offre une écharpe à Lena. J’emballe le cadeau ce soir.'),
        line('Tim', 'Ich schicke ihr eine Karte. Und ich gratuliere ihr morgen persönlich.', 'I’ll send her a card. And I’ll congratulate her in person tomorrow.', 'Je lui envoie une carte. Et je la félicite demain en personne.'),
        line('Lara', 'Das Paket kommt morgen an. Kannst du mir ein Restaurant für danach empfehlen?', 'The parcel arrives tomorrow. Can you recommend a restaurant for afterwards?', 'Le colis arrive demain. Peux-tu me recommander un restaurant pour après ?'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l21-e13', prompt: 'What does Lara give Lena?', promptFr: 'Que donne Lara à Lena ?', options: ['A scarf', 'A book', 'A cake'], optionsFr: ['Une écharpe', 'Un livre', 'Un gâteau'], answer: 0, explain: 'She says: “Ich schenke Lena einen Schal.”', explainFr: 'Elle dit : « Ich schenke Lena einen Schal. »', hint: 'Look for “schenke”.', hintFr: 'Cherche « schenke ».' } },

    { kind: 'wordgroup', title: 'Die Feier', titleFr: 'La fête',
      items: [{ id: 'a2l21-feier', german: 'die Feier', english: 'the celebration / party', french: 'la fête', gender: 'die', syllables: ['FEI', 'er'], pronunciation: 'dee FY-er', example: { de: 'Die Feier beginnt um acht Uhr.', en: 'The party starts at eight o’clock.', fr: 'La fête commence à vingt heures.' } }, { id: 'a2l21-ueberraschung', german: 'die Überraschung', english: 'the surprise', french: 'la surprise', gender: 'die', syllables: ['ü', 'ber', 'RA', 'schung'], pronunciation: 'dee ue-ber-RASH-oong', example: { de: 'Die Party ist eine Überraschung für Lena.', en: 'The party is a surprise for Lena.', fr: 'La fête est une surprise pour Lena.' } }, { id: 'a2l21-gast', german: 'der Gast', english: 'the guest', french: 'l’invité', gender: 'der', syllables: ['GAST'], pronunciation: 'dair gahst', example: { de: 'Alle Gäste bringen etwas mit.', en: 'All the guests bring something.', fr: 'Tous les invités apportent quelque chose.' } }, { id: 'a2l21-torte', german: 'die Torte', english: 'the cake (layered)', french: 'le gâteau', gender: 'die', syllables: ['TOR', 'te'], pronunciation: 'dee TOR-teh', example: { de: 'Wer backt die Torte?', en: 'Who is baking the cake?', fr: 'Qui prépare le gâteau ?' } }, { id: 'a2l21-karte', german: 'die Karte', english: 'the card', french: 'la carte', gender: 'die', syllables: ['KAR', 'te'], pronunciation: 'dee KAR-teh', example: { de: 'Ich schreibe dir eine Karte.', en: 'I’ll write you a card.', fr: 'Je t’écrirai une carte.' } }, { id: 'a2l21-paket', german: 'das Paket', english: 'the parcel', french: 'le colis', gender: 'das', syllables: ['pa', 'KET'], pronunciation: 'dahs pa-KAYT', example: { de: 'Das Paket kommt morgen an.', en: 'The parcel arrives tomorrow.', fr: 'Le colis arrive demain.' } }] },

    { kind: 'wordgroup', title: 'Schenken und verschicken', titleFr: 'Offrir et envoyer',
      items: [{ id: 'a2l21-empfehlen', german: 'empfehlen', english: 'to recommend', french: 'recommander', gender: null, syllables: ['emp', 'FEH', 'len'], pronunciation: 'emp-FAY-len', example: { de: 'Kannst du mir ein Restaurant empfehlen?', en: 'Can you recommend a restaurant to me?', fr: 'Peux-tu me recommander un restaurant ?' } }, { id: 'a2l21-schicken', german: 'schicken', english: 'to send', french: 'envoyer', gender: null, syllables: ['SCHI', 'cken'], pronunciation: 'SHIK-en', example: { de: 'Ich schicke dir ein Foto.', en: 'I’m sending you a photo.', fr: 'Je t’envoie une photo.' } }, { id: 'a2l21-bringen', german: 'bringen', english: 'to bring', french: 'apporter', gender: null, syllables: ['BRIN', 'gen'], pronunciation: 'BRING-en', example: { de: 'Ich bringe dir morgen das Buch.', en: 'I’ll bring you the book tomorrow.', fr: 'Je t’apporte le livre demain.' } }, { id: 'a2l21-kaufen', german: 'kaufen', english: 'to buy', french: 'acheter', gender: null, syllables: ['KAU', 'fen'], pronunciation: 'KOW-fen', example: { de: 'Ich kaufe meiner Schwester eine Tasche.', en: 'I’m buying my sister a bag.', fr: 'J’achète un sac à ma sœur.' } }, { id: 'a2l21-leihen', german: 'leihen', english: 'to lend', french: 'prêter', gender: null, syllables: ['LEI', 'hen'], pronunciation: 'LY-en', example: { de: 'Kannst du mir dein Fahrrad leihen?', en: 'Can you lend me your bike?', fr: 'Peux-tu me prêter ton vélo ?' } }, { id: 'a2l21-gratulieren', german: 'gratulieren', english: 'to congratulate (+ dative)', french: 'féliciter (+ datif)', gender: null, syllables: ['gra', 'tu', 'LIE', 'ren'], pronunciation: 'grah-too-LEE-ren', example: { de: 'Ich gratuliere dir zum Geburtstag.', en: 'Happy birthday to you! (lit. I congratulate you on your birthday.)', fr: 'Je te souhaite un joyeux anniversaire ! (litt. je te félicite pour ton anniversaire.)' } }, { id: 'a2l21-verpacken', german: 'verpacken', english: 'to wrap / pack', french: 'emballer', gender: null, syllables: ['ver', 'PA', 'cken'], pronunciation: 'fair-PAK-en', example: { de: 'Ich verpacke das Geschenk.', en: 'I’m wrapping the present.', fr: 'J’emballe le cadeau.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'a2l21-e4', pairs: [{ de: 'empfehlen', en: 'to recommend', fr: 'recommander' }, { de: 'schicken', en: 'to send', fr: 'envoyer' }, { de: 'bringen', en: 'to bring', fr: 'apporter' }, { de: 'leihen', en: 'to lend', fr: 'prêter' }], hint: 'All four take a dative and an accusative object.', hintFr: 'Les quatre prennent un complément au datif et un à l’accusatif.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l21-e8', word: 'Torte', answer: 'die', hint: 'Feminine: die Torte, die Torten.', hintFr: 'Féminin : die Torte, die Torten.' } },

    // ───────────── 2 · Two objects ─────────────
    { kind: 'chapter', title: 'Zwei Objekte im Satz', titleFr: 'Deux compléments dans la phrase', blurb: 'Dative = person, accusative = thing.', blurbFr: 'Datif = personne, accusatif = chose.' },

    { kind: 'situation', title: 'Wer bekommt was?', titleFr: 'Qui reçoit quoi ?',
      setting: 'The two split the list of gifts.', settingFr: 'Tous deux se partagent la liste des cadeaux.',
      lines: [
        line('Tim', 'Wir schenken dem Geburtstagskind eine Torte.', 'We’re giving the birthday child a cake.', 'Nous offrons un gâteau à l’enfant dont c’est l’anniversaire.'),
        line('Lara', 'Der Kellner empfiehlt den Gästen die Suppe. Und ich schicke meinem Freund eine Karte.', 'The waiter recommends the soup to the guests. And I’m sending my friend a card.', 'Le serveur recommande la soupe aux clients. Et j’envoie une carte à mon ami.'),
        line('Tim', 'Er kauft ein Geschenk für seine Schwester. Sie zeigt ihrem Bruder das Zimmer.', 'He is buying a present for his sister. She’s showing her brother the room.', 'Il achète un cadeau pour sa sœur. Elle montre la chambre à son frère.'),
        line('Lara', 'Ich bringe dir morgen das Buch. Kannst du mir dein Fahrrad leihen?', 'I’ll bring you the book tomorrow. Can you lend me your bike?', 'Je t’apporte le livre demain. Peux-tu me prêter ton vélo ?'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l21-zwei-objekte', title: 'Verbs with two objects', titleFr: 'Verbes à deux compléments',
      lead: 'The person who receives = dative. The thing = accusative. With two nouns the dative comes first.',
      leadFr: 'La personne qui reçoit = datif. La chose = accusatif. Avec deux noms, le datif vient d’abord.',
      explanationMd: 'Many verbs of giving, showing and telling have **two objects**: the **person** who receives → **dative** (**wem?**), the **thing** → **accusative** (**was?**): **geben, schenken, schicken, bringen, zeigen, empfehlen, kaufen, leihen, erklären**. When **both** are nouns, the usual order is **dative → accusative**: **Ich gebe dem Kind den Ball.** Time words come before the objects: **Ich schicke dir morgen ein Paket.** For gifts you can also use **für + accusative**: **ein Geschenk für meine Mutter.**',
      explanationMdFr: 'Beaucoup de verbes de don, de monstration et de parole ont **deux compléments** : la **personne** qui reçoit → **datif** (**wem ?**), la **chose** → **accusatif** (**was ?**) : **geben, schenken, schicken, bringen, zeigen, empfehlen, kaufen, leihen, erklären**. Quand **les deux** sont des noms, l’ordre habituel est **datif → accusatif** : **Ich gebe dem Kind den Ball.** Les mots de temps passent avant les compléments : **Ich schicke dir morgen ein Paket.** Pour les cadeaux, tu peux aussi utiliser **für + accusatif** : **ein Geschenk für meine Mutter.**',
      tables: [{ title: 'Dative and accusative articles', titleFr: 'Articles au datif et à l’accusatif', headers: ['', 'der', 'die', 'das', 'plural'], headersFr: ['', 'der', 'die', 'das', 'pluriel'],
        rows: [['Dative (person)', 'dem', 'der', 'dem', 'den'], ['Accusative (thing)', 'den', 'die', 'das', 'die']],
        rowsFr: [['Datif (personne)', 'dem', 'der', 'dem', 'den'], ['Accusatif (chose)', 'den', 'die', 'das', 'die']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'schicke', role: 'verb' }, { text: 'der Freundin', role: 'dative' }, { text: 'einen Brief.', role: 'accusative' }], en: 'I send my friend an letter.', fr: 'J’envoie une lettre à mon amie.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'kauft', role: 'verb' }, { text: 'seiner Freundin', role: 'dative' }, { text: 'Blumen.', role: 'accusative' }], en: 'He buys his girlfriend flowers.', fr: 'Il achète des fleurs à son amie.' },
      ],
      contrast: {
        a: { label: 'Dative + accusative', labelFr: 'Datif + accusatif', note: 'two nouns: person first', noteFr: 'deux noms : la personne d’abord', examples: [g('Ich schenke meiner Mutter einen Schal.', 'I’m giving my mother a scarf.', 'J’offre une écharpe à ma mère.'), g('Sie zeigt ihrem Bruder das Zimmer.', 'She shows her brother the room.', 'Elle montre la chambre à son frère.')] },
        b: { label: 'für + accusative', labelFr: 'für + accusatif', note: 'a gift for someone', noteFr: 'un cadeau pour quelqu’un', examples: [g('Er kauft ein Geschenk für seine Schwester.', 'He buys a present for his sister.', 'Il achète un cadeau pour sa sœur.'), g('Ich kaufe eine Tasche für meine Mutter.', 'I buy a bag for my mother.', 'J’achète un sac pour ma mère.')] },
      },
      examples: [
        g('Ich schenke meiner Mutter einen Schal.', 'I’m giving my mother a scarf.', 'J’offre une écharpe à ma mère.'),
        g('Der Kellner empfiehlt den Gästen die Suppe.', 'The waiter recommends the soup to the guests.', 'Le serveur recommande la soupe aux clients.'),
        g('Sie zeigt ihrem Bruder das Zimmer.', 'She shows her brother the room.', 'Elle montre la chambre à son frère.'),
        g('Wir schenken dem Geburtstagskind eine Torte.', 'We are giving the birthday child a cake.', 'Nous offrons un gâteau à l’enfant dont c’est l’anniversaire.'),
        g('Ich schicke meinem Freund eine Karte.', 'I’m sending my friend a card.', 'J’envoie une carte à mon ami.'),
        g('Er kauft ein Geschenk für seine Schwester.', 'He buys a present for his sister.', 'Il achète un cadeau pour sa sœur.'),
      ],
      mistakes: [
        { wrong: 'Ich schenke einen Schal meiner Mutter.', right: 'Ich schenke meiner Mutter einen Schal.', why: 'With two nouns, the person (dative) comes first.', whyFr: 'Avec deux noms, la personne (datif) vient d’abord.' },
        { wrong: 'Ich schenke meine Mutter einen Schal.', right: 'Ich schenke meiner Mutter einen Schal.', why: 'The receiver is dative: meiner.', whyFr: 'Le destinataire est au datif : meiner.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l21-e1', prompt: 'Ich schenke ___ Mutter ein Buch. (die Mutter → dative, my)', promptFr: 'Ich schenke ___ Mutter ein Buch. (die Mutter → datif, mon/ma)', answer: 'meiner', hint: 'Feminine dative: meiner (like der).', hintFr: 'Datif féminin : meiner (comme der).' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l21-e2', prompt: 'Which sentence has the correct order of the two nouns?', promptFr: 'Quelle phrase a le bon ordre des deux noms ?', options: ['Ich schenke einen Schal meiner Mutter.', 'Ich schenke meiner Mutter einen Schal.', 'Ich schenke meine Mutter einen Schal.'], optionsFr: ['Ich schenke einen Schal meiner Mutter.', 'Ich schenke meiner Mutter einen Schal.', 'Ich schenke meine Mutter einen Schal.'], answer: 1, explain: 'Dative (person) first, then accusative (thing) — and "Mutter" needs the dative "meiner".', explainFr: 'Datif (personne) d’abord, puis accusatif (chose) — et « Mutter » demande le datif « meiner ».', hint: 'Person before thing.', hintFr: 'La personne avant la chose.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l21-e3', tokens: ['schicke', 'Ich', 'Freund', 'eine', 'meinem', 'Karte'], answer: ['Ich', 'schicke', 'meinem', 'Freund', 'eine', 'Karte'], hint: 'Subject, verb, dative (person), accusative (thing).', hintFr: 'Sujet, verbe, datif (personne), accusatif (chose).' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l21-e12', prompt: 'Ich schenke meiner Mutter ___ Schal. (der Schal → a, accusative)', promptFr: 'Ich schenke meiner Mutter ___ Schal. (der Schal → un, accusatif)', answer: 'einen', hint: 'Masculine accusative: ein → einen.', hintFr: 'Masculin à l’accusatif : ein → einen.' } },

    // ───────────── 3 · Pronouns ─────────────
    { kind: 'chapter', title: 'Mit Pronomen: „Ich gebe es ihm“', titleFr: 'Avec des pronoms : « Ich gebe es ihm »', blurb: 'Pronouns jump to the front.', blurbFr: 'Les pronoms passent devant.' },

    { kind: 'situation', title: 'Ich gebe es ihr', titleFr: 'Je le lui donne',
      setting: 'Lara answers Tim’s questions with pronouns.', settingFr: 'Lara répond aux questions de Tim avec des pronoms.',
      lines: [
        line('Tim', 'Und das Geschenk? Wann gibst du es ihr?', 'And the present? When do you give it to her?', 'Et le cadeau ? Quand le lui donnes-tu ?'),
        line('Lara', 'Ich gebe es ihr morgen.', 'I’ll give it to her tomorrow.', 'Je le lui donne demain.'),
        line('Tim', 'Und die Karte?', 'And the card?', 'Et la carte ?'),
        line('Lara', 'Die Karte schicke ich dir heute. Den Kuchen bringe ich euch am Samstag.', 'I’m sending you the card today. I’ll bring you the cake on Saturday.', 'Je t’envoie la carte aujourd’hui. Je vous apporte le gâteau samedi.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l21-e14', prompt: 'When does Lara give the present?', promptFr: 'Quand Lara donne-t-elle le cadeau ?', options: ['Tomorrow', 'Today', 'On Saturday'], optionsFr: ['Demain', 'Aujourd’hui', 'Samedi'], answer: 0, explain: 'She says: “Ich gebe es ihr morgen.”', explainFr: 'Elle dit : « Ich gebe es ihr morgen. »', hint: 'Look for “morgen”.', hintFr: 'Cherche « morgen ».' } },

    { kind: 'grammar', note: {
      id: 'a2l21-pronomen', title: 'Order with pronouns', titleFr: 'L’ordre avec les pronoms',
      lead: 'Pronouns come before nouns. Two pronouns: accusative first, then dative (es ihm).',
      leadFr: 'Les pronoms viennent avant les noms. Deux pronoms : accusatif d’abord, puis datif (es ihm).',
      explanationMd: '**Pronouns come before nouns.** **Ich gebe dem Kind das Buch.** → **Ich gebe es dem Kind.** (accusative pronoun first) → **Ich gebe ihm das Buch.** (dative pronoun first) → **Ich gebe es ihm.** (both pronouns: **accusative → dative**). Accusative pronouns: **der → ihn, die → sie, das → es, plural → sie**. Dative pronouns: **mir, dir, ihm, ihr, ihm, uns, euch, ihnen**.',
      explanationMdFr: '**Les pronoms viennent avant les noms.** **Ich gebe dem Kind das Buch.** → **Ich gebe es dem Kind.** (pronom accusatif d’abord) → **Ich gebe ihm das Buch.** (pronom datif d’abord) → **Ich gebe es ihm.** (deux pronoms : **accusatif → datif**). Pronoms à l’accusatif : **der → ihn, die → sie, das → es, pluriel → sie**. Pronoms au datif : **mir, dir, ihm, ihr, ihm, uns, euch, ihnen**.',
      tables: [{ title: 'Word order', titleFr: 'Ordre des mots', headers: ['Objects', 'Order', 'Example'], headersFr: ['Compléments', 'Ordre', 'Exemple'],
        rows: [['noun + noun', 'dative → accusative', 'Ich gebe dem Kind das Buch.'], ['pronoun + noun', 'pronoun → noun', 'Ich gebe ihm das Buch.'], ['noun + pronoun', 'pronoun → noun', 'Ich gebe es dem Kind.'], ['pronoun + pronoun', 'accusative → dative', 'Ich gebe es ihm.']],
        rowsFr: [['nom + nom', 'datif → accusatif', 'Ich gebe dem Kind das Buch.'], ['pronom + nom', 'pronom → nom', 'Ich gebe ihm das Buch.'], ['nom + pronom', 'pronom → nom', 'Ich gebe es dem Kind.'], ['pronom + pronom', 'accusatif → datif', 'Ich gebe es ihm.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'gebe', role: 'verb' }, { text: 'es', role: 'accusative' }, { text: 'ihm.', role: 'dative' }], en: 'I give it to him.', fr: 'Je le lui donne.' },
        { parts: [{ text: 'Die Karte?', role: 'other' }, { text: 'Ich', role: 'subject' }, { text: 'schicke', role: 'verb' }, { text: 'sie', role: 'accusative' }, { text: 'dir', role: 'dative' }, { text: 'heute.', role: 'time' }], en: 'The card? I’m sending it to you today.', fr: 'La carte ? Je te l’envoie aujourd’hui.' },
      ],
      contrast: {
        a: { label: 'Two nouns', labelFr: 'Deux noms', note: 'dative first', noteFr: 'datif d’abord', examples: [g('Ich gebe dem Kind das Buch.', 'I give the child the book.', 'Je donne le livre à l’enfant.'), g('Er schenkt seiner Frau Blumen.', 'He gives his wife flowers.', 'Il offre des fleurs à sa femme.')] },
        b: { label: 'Two pronouns', labelFr: 'Deux pronoms', note: 'accusative first', noteFr: 'accusatif d’abord', examples: [g('Ich gebe es ihm.', 'I give it to him.', 'Je le lui donne.'), g('Ich schicke sie dir heute.', 'I’m sending it to you today.', 'Je te l’envoie aujourd’hui.')] },
      },
      examples: [
        g('Das Geschenk? Ich gebe es ihr morgen.', 'The present? I’ll give it to her tomorrow.', 'Le cadeau ? Je le lui donne demain.'),
        g('Die Karte? Ich schicke sie dir heute.', 'The card? I’m sending it to you today.', 'La carte ? Je te l’envoie aujourd’hui.'),
        g('Den Kuchen bringe ich euch am Samstag.', 'I’ll bring you the cake on Saturday.', 'Je vous apporte le gâteau samedi.'),
        g('Ich gebe ihm das Buch.', 'I give him the book.', 'Je lui donne le livre.'),
        g('Ich gebe es dem Kind.', 'I give it to the child.', 'Je le donne à l’enfant.'),
        g('Ich schenke es ihr.', 'I’m giving it to her.', 'Je le lui offre.'),
      ],
      mistakes: [
        { wrong: 'Ich gebe ihm es.', right: 'Ich gebe es ihm.', why: 'Two pronouns: accusative first.', whyFr: 'Deux pronoms : accusatif d’abord.' },
        { wrong: 'Ich gebe das Buch ihm.', right: 'Ich gebe ihm das Buch.', why: 'A pronoun comes before the noun.', whyFr: 'Le pronom vient avant le nom.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l21-e6', prompt: 'Ich gebe das Buch meinem Bruder. → Ich gebe ___ ihm. (das Buch → pronoun)', promptFr: 'Ich gebe das Buch meinem Bruder. → Ich gebe ___ ihm. (das Buch → pronom)', answer: 'es', hint: 'Accusative pronoun for das: es.', hintFr: 'Pronom à l’accusatif pour das : es.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l21-e7', prompt: 'Sie zeigt ___ das Foto. (to me)', promptFr: 'Sie zeigt ___ das Foto. (à moi)', answer: 'mir', hint: 'Dative pronoun for "ich".', hintFr: 'Pronom au datif pour « ich ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l21-e10', tokens: ['es', 'Ich', 'ihr', 'schenke'], answer: ['Ich', 'schenke', 'es', 'ihr'], hint: 'Two pronouns: accusative (es) before dative (ihr).', hintFr: 'Deux pronoms : accusatif (es) avant datif (ihr).' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l21-e9', prompt: 'Which verb takes only a dative object (no accusative)?', promptFr: 'Quel verbe ne prend qu’un complément au datif (pas d’accusatif) ?', options: ['gratulieren', 'schenken', 'bringen'], optionsFr: ['gratulieren', 'schenken', 'bringen'], answer: 0, explain: '"Ich gratuliere dir" — only a dative. schenken and bringen have two objects.', explainFr: '« Ich gratuliere dir » — seulement un datif. schenken et bringen ont deux compléments.', hint: 'Think of "Ich gratuliere dir zum Geburtstag."', hintFr: 'Pense à « Ich gratuliere dir zum Geburtstag. »' } },

    { kind: 'pronunciation', focus: 'Stress on the second syllable (empfehlen, verpacken, Paket) and the ü in Überraschung', focusFr: 'Accent sur la deuxième syllabe (empfehlen, verpacken, Paket) et le ü de Überraschung', items: [{ id: 'a2l21-empfehlen-pron', german: 'empfehlen', english: 'to recommend', french: 'recommander', gender: null, syllables: ['emp', 'FEH', 'len'], pronunciation: 'emp-FAY-len', example: { de: 'Was kannst du empfehlen?', en: 'What can you recommend?', fr: 'Que peux-tu recommander ?' } }, { id: 'a2l21-verpacken-pron', german: 'verpacken', english: 'to wrap', french: 'emballer', gender: null, syllables: ['ver', 'PA', 'cken'], pronunciation: 'fair-PAK-en', example: { de: 'Ich verpacke das Geschenk schön.', en: 'I wrap the present nicely.', fr: 'J’emballe joliment le cadeau.' } }, { id: 'a2l21-paket-pron', german: 'das Paket', english: 'the parcel', french: 'le colis', gender: 'das', syllables: ['pa', 'KET'], pronunciation: 'dahs pa-KAYT', example: { de: 'Das Paket ist schwer.', en: 'The parcel is heavy.', fr: 'Le colis est lourd.' } }, { id: 'a2l21-ueberraschung-pron', german: 'die Überraschung', english: 'the surprise', french: 'la surprise', gender: 'die', syllables: ['ü', 'ber', 'RA', 'schung'], pronunciation: 'dee ue-ber-RASH-oong', example: { de: 'Das ist eine tolle Überraschung!', en: 'That is a great surprise!', fr: 'Quelle belle surprise !' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l21-e5', prompt: 'Listen. What will the speaker do?', promptFr: 'Écoute. Que va faire le locuteur ?', audio: { ttsText: 'Ich bringe dir morgen das Paket.' }, options: ['Bring the parcel tomorrow', 'Send the parcel yesterday', 'Buy a parcel'], optionsFr: ['Apporter le colis demain', 'Envoyer le colis hier', 'Acheter un colis'], answer: 0, hint: 'Listen for "bringe" and "morgen".', hintFr: 'Écoute « bringe » et « morgen ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l21-e11', prompt: 'Listen. What is the speaker asking for?', promptFr: 'Écoute. Que demande le locuteur ?', audio: { ttsText: 'Kannst du mir ein Buch empfehlen?' }, options: ['A book recommendation', 'To borrow a book', 'A book as a gift'], optionsFr: ['Une recommandation de livre', 'Emprunter un livre', 'Un livre en cadeau'], answer: 0, hint: 'Listen for the verb at the end.', hintFr: 'Écoute le verbe à la fin.' } },

    { kind: 'wrapup',
      summary: 'You can now build sentences with **two objects** — nouns (**dative first**) and pronouns (**es ihm**) — and talk about gifts and parties. 🎉',
      summaryFr: 'Tu sais maintenant construire des phrases à **deux compléments** — noms (**datif d’abord**) et pronoms (**es ihm**) — et parler de cadeaux et de fêtes. 🎉',
      card: { title: 'Two objects on one page', titleFr: 'Deux compléments en une page', sections: [
        { heading: 'Verbs', headingFr: 'Verbes', rows: [g('geben · schenken · schicken · bringen', 'dative + accusative', 'datif + accusatif'), g('zeigen · empfehlen · kaufen · leihen', 'dative + accusative', 'datif + accusatif')] },
        { heading: 'Order', headingFr: 'Ordre', rows: [g('dem Kind + das Buch', 'two nouns: dative first', 'deux noms : datif d’abord'), g('es + ihm', 'two pronouns: accusative first', 'deux pronoms : accusatif d’abord')] },
        { heading: 'Gifts', headingFr: 'Cadeaux', rows: [g('ein Geschenk für meine Mutter', 'für + accusative', 'für + accusatif'), g('gratulieren + dative', 'only a dative object', 'seulement un datif')] },
      ] } },
  ],
};
