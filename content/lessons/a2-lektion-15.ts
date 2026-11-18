import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion15: Lesson = {
  id: 'a2-l15', level: 'A2', module: 4, number: 14,
  title: { de: 'Adjektive mit unbestimmtem Artikel und ohne Artikel', en: 'Adjectives after ein- and with no article', fr: 'Adjectifs après l’article indéfini et sans article' },
  theme: 'Shopping at the market: adjective endings after ein-/kein-/mein- (incl. dative) and with no article', themeFr: 'Faire ses courses au marché : terminaisons des adjectifs après ein-/kein-/mein- (datif inclus) et sans article',
  goals: ['Use adjective endings after ein-/kein-/mein- in the dative', 'Use adjective endings with no article (frische Brötchen)', 'Say what matters to you: Mir ist … wichtig', 'Ask for quantities and packaging in a shop'], goalsFr: ['Utiliser les terminaisons après ein-/kein-/mein- au datif', 'Utiliser les terminaisons sans article (frische Brötchen)', 'Dire ce qui compte pour toi : Mir ist … wichtig', 'Demander des quantités et des conditionnements dans un magasin'],
  canDo: g('Ich kann auf dem Markt einkaufen, Mengen nennen und sagen, was mir wichtig ist — mit den richtigen Adjektivendungen.', 'I can shop at the market, name quantities and say what matters to me — with the right adjective endings.', 'Je sais faire mes courses au marché, indiquer des quantités et dire ce qui m’importe — avec les bonnes terminaisons d’adjectifs.'),
  steps: [
    { kind: 'intro', title: 'Auf dem Markt 🍎', titleFr: 'Au marché 🍎',
      scene: 'Lena shops at the Saturday market and chats with the stallholders about fresh food.', sceneFr: 'Lena fait son marché du samedi et discute avec les marchands de produits frais.',
      goals: ['Use adjective endings after ein- / kein- / mein- in the dative', 'Use adjective endings with no article: frische Brötchen', 'Say what matters to you: Mir ist … wichtig, and ask for quantities'],
      goalsFr: ['Utiliser les terminaisons des adjectifs après ein- / kein- / mein- au datif', 'Utiliser les terminaisons sans article : frische Brötchen', 'Dire ce qui compte pour toi : Mir ist … wichtig, et demander des quantités'] },

    // ───────────── 1 · At the market ─────────────
    { kind: 'chapter', title: 'Einkaufen auf dem Markt', titleFr: 'Faire son marché', blurb: 'Fresh, cheap, good.', blurbFr: 'Frais, bon marché, bon.' },

    { kind: 'situation', title: 'Was darf es sein?', titleFr: 'Que puis-je vous servir ?',
      setting: 'Lena buys fruit and rolls at the market.', settingFr: 'Lena achète des fruits et des petits pains au marché.',
      lines: [
        line('Verkäufer', 'Guten Tag! Was darf es sein?', 'Good day! What can I get you?', 'Bonjour ! Que puis-je vous servir ?'),
        line('Lena', 'Ich nehme ein Pfund Tomaten und eine Flasche Wasser, bitte. Das Obst ist heute sehr süß, oder?', 'I’ll take a pound of tomatoes and a bottle of water, please. The fruit is very sweet today, isn’t it?', 'Je prends une livre de tomates et une bouteille d’eau, s’il vous plaît. Les fruits sont très sucrés aujourd’hui, non ?'),
        line('Verkäufer', 'Ja, und die Äpfel sind heute günstig. Der Stand mit dem Käse ist links.', 'Yes, and the apples are cheap today. The stall with the cheese is on the left.', 'Oui, et les pommes sont avantageuses aujourd’hui. L’étal de fromage est à gauche.'),
        line('Lena', 'Das Brot ist ganz frisch. Ich möchte auch zwei Brötchen und eine Packung Nudeln.', 'The bread is very fresh. I’d also like two rolls and a packet of pasta.', 'Le pain est tout frais. Je voudrais aussi deux petits pains et un paquet de pâtes.'),
        line('Verkäufer', 'Und frisches Gemüse für die Suppe? Wir haben auch Dosen mit Tomaten.', 'And fresh vegetables for the soup? We also have tins of tomatoes.', 'Et des légumes frais pour la soupe ? Nous avons aussi des boîtes de tomates.'),
      ],
      words: [{ id: 'a2l15-wasdarf', german: 'Was darf es sein?', english: 'What can I get you?', french: 'Que désirez-vous ?', gender: null, syllables: ['WAS', 'DARF', 'es', 'SEIN'], pronunciation: 'vahs dahrf es zine', example: { de: 'Guten Tag! Was darf es sein?', en: 'Hello! What can I get you?', fr: 'Bonjour ! Que désirez-vous ?' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l15-e12', prompt: 'What does Lena buy first?', promptFr: 'Que achète Lena en premier ?', options: ['A pound of tomatoes and a bottle of water', 'Two rolls', 'A packet of pasta'], optionsFr: ['Une livre de tomates et une bouteille d’eau', 'Deux petits pains', 'Un paquet de pâtes'], answer: 0, explain: 'She says: “Ich nehme ein Pfund Tomaten und eine Flasche Wasser.”', explainFr: 'Elle dit : « Ich nehme ein Pfund Tomaten und eine Flasche Wasser. »', hint: 'Look at Lena’s first line.', hintFr: 'Regarde la première réplique de Lena.' } },

    { kind: 'wordgroup', title: 'Der Markt', titleFr: 'Le marché',
      items: [{ id: 'a2l15-markt', german: 'der Markt', english: 'the market', french: 'le marché', gender: 'der', syllables: ['MARKT'], pronunciation: 'dair mahrkt', example: { de: 'Am Samstag gehe ich auf den Markt.', en: 'On Saturday I go to the market.', fr: 'Le samedi, je vais au marché.' } }, { id: 'a2l15-stand', german: 'der Stand', english: 'the stall', french: 'l’étal / le stand', gender: 'der', syllables: ['STAND'], pronunciation: 'dair shtahnt', example: { de: 'Der Stand mit dem Käse ist links.', en: 'The cheese stall is on the left.', fr: 'L’étal de fromage est à gauche.' } }, { id: 'a2l15-obst', german: 'das Obst', english: 'the fruit', french: 'les fruits', gender: 'das', syllables: ['OBST'], pronunciation: 'dahs ohpst', example: { de: 'Das Obst ist heute besonders süß.', en: 'The fruit is especially sweet today.', fr: 'Les fruits sont particulièrement sucrés aujourd’hui.' } }, { id: 'a2l15-gemuese', german: 'das Gemüse', english: 'the vegetables', french: 'les légumes', gender: 'das', syllables: ['ge', 'MÜ', 'se'], pronunciation: 'dahs ge-MUE-ze', example: { de: 'Ich kaufe frisches Gemüse für die Suppe.', en: 'I am buying fresh vegetables for the soup.', fr: 'J’achète des légumes frais pour la soupe.' } }, { id: 'a2l15-broetchen', german: 'das Brötchen', english: 'the bread roll', french: 'le petit pain', gender: 'das', syllables: ['BRÖT', 'chen'], pronunciation: 'dahs BROET-khen', example: { de: 'Zum Frühstück esse ich zwei Brötchen.', en: 'For breakfast I eat two rolls.', fr: 'Au petit-déjeuner, je mange deux petits pains.' } }] },

    { kind: 'wordgroup', title: 'Mengen und Qualität', titleFr: 'Quantités et qualité',
      items: [{ id: 'a2l15-pfund', german: 'das Pfund', english: 'the pound (500 g)', french: 'la livre (500 g)', gender: 'das', syllables: ['PFUND'], pronunciation: 'dahs pfoont', example: { de: 'Ich nehme ein Pfund Tomaten.', en: 'I’ll take a pound of tomatoes.', fr: 'Je prends une livre de tomates.' } }, { id: 'a2l15-flasche', german: 'die Flasche', english: 'the bottle', french: 'la bouteille', gender: 'die', syllables: ['FLA', 'sche'], pronunciation: 'dee FLAH-she', example: { de: 'Eine Flasche Wasser, bitte.', en: 'A bottle of water, please.', fr: 'Une bouteille d’eau, s’il vous plaît.' } }, { id: 'a2l15-dose', german: 'die Dose', english: 'the tin / can', french: 'la boîte de conserve', gender: 'die', syllables: ['DO', 'se'], pronunciation: 'dee DOH-ze', example: { de: 'Wir brauchen zwei Dosen Tomaten.', en: 'We need two tins of tomatoes.', fr: 'Il nous faut deux boîtes de tomates.' } }, { id: 'a2l15-packung', german: 'die Packung', english: 'the pack / packet', french: 'le paquet', gender: 'die', syllables: ['PA', 'ckung'], pronunciation: 'dee PAH-koong', example: { de: 'Eine Packung Nudeln kostet einen Euro.', en: 'A packet of pasta costs one euro.', fr: 'Un paquet de pâtes coûte un euro.' } }, { id: 'a2l15-frisch', german: 'frisch', english: 'fresh', french: 'frais', gender: null, syllables: ['FRISCH'], pronunciation: 'frish', example: { de: 'Das Brot ist ganz frisch.', en: 'The bread is really fresh.', fr: 'Le pain est tout frais.' } }, { id: 'a2l15-guenstig', german: 'günstig', english: 'cheap / good value', french: 'avantageux / bon marché', gender: null, syllables: ['GÜNS', 'tig'], pronunciation: 'GUENS-tikh', example: { de: 'Die Äpfel sind heute günstig.', en: 'The apples are good value today.', fr: 'Les pommes sont avantageuses aujourd’hui.' } }] },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l15-e10', word: 'Brötchen', answer: 'das', hint: 'Nouns ending in -chen are always neuter.', hintFr: 'Les noms en -chen sont toujours neutres.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l15-e5', pairs: [{ de: 'die Dose', en: 'the tin / can', fr: 'la boîte de conserve' }, { de: 'die Flasche', en: 'the bottle', fr: 'la bouteille' }, { de: 'die Packung', en: 'the pack', fr: 'le paquet' }, { de: 'das Pfund', en: 'the pound (500 g)', fr: 'la livre (500 g)' }], hint: 'Match each container or measure to its meaning.', hintFr: 'Associe chaque conditionnement ou mesure à sa signification.' } },

    // ───────────── 2 · No article ─────────────
    { kind: 'chapter', title: 'Ohne Artikel: frische Brötchen', titleFr: 'Sans article : frische Brötchen', blurb: 'The adjective shows the case.', blurbFr: 'L’adjectif montre le cas.' },

    { kind: 'situation', title: 'Frisches Brot, frischer Käse', titleFr: 'Pain frais, fromage frais',
      setting: 'Lena reads the stall signs.', settingFr: 'Lena lit les pancartes des étals.',
      lines: [
        line('Lena', 'Hier gibt es frisches Brot und frische Brötchen.', 'Here you can get fresh bread and fresh rolls.', 'Ici, il y a du pain frais et des petits pains frais.'),
        line('Verkäufer', 'Ich esse gern frischen Käse. Und Sie?', 'I like eating fresh cheese. And you?', 'J’aime manger du fromage frais. Et vous ?'),
        line('Lena', 'Ich auch. Aber wir haben heute keine frischen Tomaten.', 'Me too. But we have no fresh tomatoes today.', 'Moi aussi. Mais nous n’avons pas de tomates fraîches aujourd’hui.'),
        line('Verkäufer', 'Bei gutem Wetter ist der Markt voll.', 'In good weather the market is full.', 'Quand il fait beau, le marché est plein.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l15-ohne-artikel', title: 'Adjective endings with no article', titleFr: 'Terminaisons des adjectifs sans article',
      lead: 'With no article, the adjective shows the case: it takes the ending the article would have had.',
      leadFr: 'Sans article, l’adjectif montre le cas : il prend la terminaison que l’article aurait eue.',
      explanationMd: 'With **no article** (plural nouns, or foods and materials like **Brot, Milch, Käse**) the adjective takes the **ending the article would have had**: **frischer Käse, frische Milch, frisches Brot, frische Brötchen**. In the **accusative**, only the masculine changes (**frischen Käse**). In the **dative**: **mit frischem Käse, frischer Milch, frischem Brot, frischen Brötchen**. After **bei** and **mit**: **Bei gutem Wetter gehe ich auf den Markt.**',
      explanationMdFr: 'Sans **article** (noms au pluriel, ou aliments et matières comme **Brot, Milch, Käse**), l’adjectif prend la **terminaison que l’article aurait eue** : **frischer Käse, frische Milch, frisches Brot, frische Brötchen**. À l’**accusatif**, seul le masculin change (**frischen Käse**). Au **datif** : **mit frischem Käse, frischer Milch, frischem Brot, frischen Brötchen**. Après **bei** et **mit** : **Bei gutem Wetter gehe ich auf den Markt.**',
      tables: [{ title: 'No article', titleFr: 'Sans article', headers: ['Case', 'm (Käse)', 'f (Milch)', 'n (Brot)', 'plural (Brötchen)'], headersFr: ['Cas', 'm (Käse)', 'f (Milch)', 'n (Brot)', 'pluriel (Brötchen)'],
        rows: [['Nominative', 'frischer Käse', 'frische Milch', 'frisches Brot', 'frische Brötchen'], ['Accusative', 'frischen Käse', 'frische Milch', 'frisches Brot', 'frische Brötchen'], ['Dative', 'frischem Käse', 'frischer Milch', 'frischem Brot', 'frischen Brötchen']],
        rowsFr: [['Nominatif', 'frischer Käse', 'frische Milch', 'frisches Brot', 'frische Brötchen'], ['Accusatif', 'frischen Käse', 'frische Milch', 'frisches Brot', 'frische Brötchen'], ['Datif', 'frischem Käse', 'frischer Milch', 'frischem Brot', 'frischen Brötchen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Hier', role: 'place' }, { text: 'gibt', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'frisches Brot.', role: 'accusative' }], en: 'Here you can get fresh bread.', fr: 'Ici, il y a du pain frais.' },
        { parts: [{ text: 'Bei gutem Wetter', role: 'dative' }, { text: 'gehe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'auf den Markt.', role: 'place' }], en: 'In good weather I go to the market.', fr: 'Quand il fait beau, je vais au marché.' },
      ],
      contrast: {
        a: { label: 'With the article', labelFr: 'Avec l’article', note: 'the article shows the case', noteFr: 'l’article montre le cas', examples: [g('Der frische Käse ist günstig.', 'The fresh cheese is cheap.', 'Le fromage frais est avantageux.'), g('Ich nehme den frischen Käse.', 'I’ll take the fresh cheese.', 'Je prends le fromage frais.')] },
        b: { label: 'Without an article', labelFr: 'Sans article', note: 'the adjective shows the case', noteFr: 'l’adjectif montre le cas', examples: [g('Frischer Käse ist günstig.', 'Fresh cheese is cheap.', 'Le fromage frais est avantageux.'), g('Ich esse gern frischen Käse.', 'I like eating fresh cheese.', 'J’aime manger du fromage frais.')] },
      },
      examples: [
        g('Hier gibt es frisches Brot und frische Brötchen.', 'Here you can get fresh bread and fresh rolls.', 'Ici, il y a du pain frais et des petits pains frais.'),
        g('Ich esse gern frischen Käse.', 'I like eating fresh cheese.', 'J’aime manger du fromage frais.'),
        g('Bei gutem Wetter gehe ich auf den Markt.', 'When the weather is good, I go to the market.', 'Quand il fait beau, je vais au marché.'),
        g('Wir haben heute keine frischen Tomaten.', 'We have no fresh tomatoes today.', 'Nous n’avons pas de tomates fraîches aujourd’hui.'),
        g('Ich trinke gern kalte Milch.', 'I like drinking cold milk.', 'J’aime boire du lait froid.'),
        g('Mit frischem Gemüse koche ich eine Suppe.', 'With fresh vegetables I cook a soup.', 'Avec des légumes frais, je prépare une soupe.'),
      ],
      mistakes: [
        { wrong: 'Ich esse gern frische Käse.', right: 'Ich esse gern frischen Käse.', why: 'Masculine accusative with no article: -en.', whyFr: 'Masculin accusatif sans article : -en.' },
        { wrong: 'Bei gut Wetter gehe ich auf den Markt.', right: 'Bei gutem Wetter gehe ich auf den Markt.', why: 'After bei: dative -em, even without an article.', whyFr: 'Après bei : datif -em, même sans article.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l15-e1', prompt: 'Hier gibt es frisch__ Brötchen. (no article, plural)', promptFr: 'Hier gibt es frisch__ Brötchen. (sans article, pluriel)', answer: 'e', hint: 'plural, no article, nominative → -e', hintFr: 'pluriel, sans article, nominatif → -e' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l15-e2', prompt: 'Ich brauche ___ Käse. (no article, accusative, masculine)', promptFr: 'Ich brauche ___ Käse. (sans article, accusatif, masculin)', options: ['frische', 'frischen', 'frischer'], answer: 1, explain: 'Masculine accusative: the ending is -en, like "den".', explainFr: 'Accusatif masculin : la terminaison est -en, comme « den ».', hint: 'Käse is masculine; accusative → -en.', hintFr: 'Käse est masculin ; accusatif → -en.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l15-e8', prompt: 'Bei gut__ Wetter gehe ich auf den Markt. (bei + dative, neuter, no article)', promptFr: 'Bei gut__ Wetter gehe ich auf den Markt. (bei + datif, neutre, sans article)', answer: 'em', hint: 'dative, neuter, no article → -em', hintFr: 'datif, neutre, sans article → -em' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l15-e9', prompt: 'Wir haben heute keine ___ Tomaten.', promptFr: 'Wir haben heute keine ___ Tomaten.', options: ['frische', 'frischen', 'frisches'], answer: 1, explain: 'After keine + plural, the adjective ends in -en.', explainFr: 'Après keine + pluriel, l’adjectif se termine en -en.', hint: 'After kein-/mein- in the plural: always -en.', hintFr: 'Après kein-/mein- au pluriel : toujours -en.' } },

    // ───────────── 3 · dative + what matters ─────────────
    { kind: 'chapter', title: 'Dativ, Wichtiges, Mengen', titleFr: 'Datif, ce qui compte, quantités', blurb: 'mit einem netten Verkäufer · Mir ist … wichtig.', blurbFr: 'mit einem netten Verkäufer · Mir ist … wichtig.' },

    { kind: 'situation', title: 'Mir ist Qualität wichtig', titleFr: 'La qualité compte pour moi',
      setting: 'Lena explains why she shops here.', settingFr: 'Lena explique pourquoi elle fait ses courses ici.',
      lines: [
        line('Verkäufer', 'Warum kaufen Sie immer bei uns ein?', 'Why do you always shop with us?', 'Pourquoi faites-vous toujours vos courses chez nous ?'),
        line('Lena', 'Mir ist regionales Obst wichtig, und ich spreche gern mit einem netten Verkäufer.', 'Local fruit is important to me, and I like talking to a nice salesman.', 'Les fruits locaux comptent pour moi, et j’aime parler avec un vendeur sympathique.'),
        line('Verkäufer', 'Mir sind gute Preise wichtig. Ein Kilo rote Äpfel und zwei Flaschen Milch?', 'Good prices matter to me. A kilo of red apples and two bottles of milk?', 'Les bons prix comptent pour moi. Un kilo de pommes rouges et deux bouteilles de lait ?'),
        line('Lena', 'Gern. Ich kaufe lieber bei einem kleinen Bauern als im Supermarkt.', 'Gladly. I prefer buying from a small farmer than at the supermarket.', 'Volontiers. Je préfère acheter chez un petit paysan qu’au supermarché.'),
      ],
      words: [{ id: 'a2l15-wichtig', german: 'wichtig', english: 'important', french: 'important', gender: null, syllables: ['WICH', 'tig'], pronunciation: 'VIKH-tikh', example: { de: 'Mir ist ein guter Preis wichtig.', en: 'A good price is important to me.', fr: 'Un bon prix est important pour moi.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l15-dativ-wichtig', title: 'ein-words in the dative, Mir ist … wichtig, quantities', titleFr: 'Mots en ein- au datif, Mir ist … wichtig, quantités',
      lead: 'Dative and plural: always -en. Mir ist … wichtig. Measure word first, food stays in the basic form.',
      leadFr: 'Datif et pluriel : toujours -en. Mir ist … wichtig. La mesure d’abord, l’aliment reste à la forme de base.',
      explanationMd: 'In the **dative** the adjective after **ein- / kein- / mein-** is always **-en**: **mit einem netten Verkäufer, mit einer neuen Tasche, mit keinen neuen Autos**. To say what matters use **Mir ist … wichtig**: the thing is the **subject**, so the verb agrees: **ist** (singular) / **sind** (plural). For **quantities** the measure word comes first and the food **stays in the basic form**: **ein Kilo Äpfel, ein Pfund Käse, zwei Flaschen Wasser**. **Kilo, Pfund, Gramm** stay singular after a number.',
      explanationMdFr: 'Au **datif**, l’adjectif après **ein- / kein- / mein-** est toujours en **-en** : **mit einem netten Verkäufer, mit einer neuen Tasche, mit keinen neuen Autos**. Pour dire ce qui compte, utilise **Mir ist … wichtig** : la chose est le **sujet**, donc le verbe s’accorde : **ist** (singulier) / **sind** (pluriel). Pour les **quantités**, la mesure vient d’abord et l’aliment **reste à la forme de base** : **ein Kilo Äpfel, ein Pfund Käse, zwei Flaschen Wasser**. **Kilo, Pfund, Gramm** restent au singulier après un nombre.',
      tables: [{ title: 'Quantities', titleFr: 'Quantités', headers: ['Measure', 'German'], headersFr: ['Mesure', 'Allemand'],
        rows: [['ein Kilo', 'ein Kilo Äpfel · zwei Kilo Kartoffeln'], ['ein Pfund', 'ein Pfund Käse'], ['eine Flasche', 'zwei Flaschen Wasser'], ['eine Dose', 'eine Dose Tomaten'], ['eine Packung', 'eine Packung Nudeln']],
        rowsFr: [['ein Kilo', 'ein Kilo Äpfel · zwei Kilo Kartoffeln'], ['ein Pfund', 'ein Pfund Käse'], ['eine Flasche', 'zwei Flaschen Wasser'], ['eine Dose', 'eine Dose Tomaten'], ['eine Packung', 'eine Packung Nudeln']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Mir', role: 'dative' }, { text: 'ist', role: 'verb' }, { text: 'ein guter Preis', role: 'subject' }, { text: 'wichtig.', role: 'other' }], en: 'A good price is important to me.', fr: 'Un bon prix est important pour moi.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'spreche', role: 'verb' }, { text: 'mit einem netten Verkäufer.', role: 'dative' }], en: 'I am talking to a nice salesman.', fr: 'Je parle avec un vendeur sympathique.' },
      ],
      contrast: {
        a: { label: 'Dative after ein-', labelFr: 'Datif après ein-', note: 'always -en', noteFr: 'toujours -en', examples: [g('Ich spreche mit einem netten Verkäufer.', 'I am talking to a nice salesman.', 'Je parle avec un vendeur sympathique.'), g('Wir kaufen bei einem kleinen Bäcker ein.', 'We shop at a small bakery.', 'Nous achetons chez un petit boulanger.')] },
        b: { label: 'Mir ist … wichtig', labelFr: 'Mir ist … wichtig', note: 'ist / sind by the subject', noteFr: 'ist / sind selon le sujet', examples: [g('Mir ist ein guter Preis wichtig.', 'A good price is important to me.', 'Un bon prix est important pour moi.'), g('Mir sind frische Zutaten wichtig.', 'Fresh ingredients are important to me.', 'Les ingrédients frais sont importants pour moi.')] },
      },
      examples: [
        g('Ich spreche mit einem netten Verkäufer.', 'I am talking to a nice salesman.', 'Je parle avec un vendeur sympathique.'),
        g('Wir kaufen bei einem kleinen Bäcker ein.', 'We shop at a small bakery.', 'Nous achetons chez un petit boulanger.'),
        g('Mir ist regionales Obst wichtig.', 'Local fruit is important to me.', 'Les fruits locaux sont importants pour moi.'),
        g('Mir sind frische Zutaten wichtig.', 'Fresh ingredients are important to me.', 'Les ingrédients frais sont importants pour moi.'),
        g('Ich nehme ein Kilo rote Äpfel und zwei Flaschen Milch.', 'I’ll take a kilo of red apples and two bottles of milk.', 'Je prends un kilo de pommes rouges et deux bouteilles de lait.'),
        g('Eine Packung Nudeln kostet einen Euro.', 'A packet of pasta costs one euro.', 'Un paquet de pâtes coûte un euro.'),
      ],
      mistakes: [
        { wrong: 'Mir ist frische Zutaten wichtig.', right: 'Mir sind frische Zutaten wichtig.', why: 'The subject is plural: sind.', whyFr: 'Le sujet est au pluriel : sind.' },
        { wrong: 'Ich nehme zwei Kilos Äpfel.', right: 'Ich nehme zwei Kilo Äpfel.', why: 'Kilo stays singular after a number.', whyFr: 'Kilo reste au singulier après un nombre.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l15-e3', prompt: 'Ich spreche mit einem nett__ Verkäufer. (dative)', promptFr: 'Ich spreche mit einem nett__ Verkäufer. (datif)', answer: 'en', hint: 'dative → always -en after ein-', hintFr: 'datif → toujours -en après ein-' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l15-e4', prompt: 'Mir ___ gute Preise wichtig.', promptFr: 'Mir ___ gute Preise wichtig.', options: ['ist', 'sind', 'bin'], answer: 1, explain: '"Preise" is plural, so the verb is "sind".', explainFr: '« Preise » est au pluriel, le verbe est donc « sind ».', hint: 'What is the subject — one price or several?', hintFr: 'Quel est le sujet : un prix ou plusieurs ?' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l15-e6', tokens: ['Kilo', 'nehme', 'Äpfel', 'Ich', 'rote', 'ein'], answer: ['Ich', 'nehme', 'ein', 'Kilo', 'rote', 'Äpfel'], hint: 'Quantity first ("ein Kilo"), then adjective + noun.', hintFr: 'D’abord la quantité (« ein Kilo »), puis adjectif + nom.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l15-e7', prompt: 'Listen. What does the customer buy?', promptFr: 'Écoute. Qu’achète le client ?', audio: { ttsText: 'Guten Tag! Ich möchte zwei Flaschen Wasser und ein frisches Brot, bitte.' }, options: ['Two bottles of water and a fresh loaf', 'One bottle of water and fresh rolls', 'Two tins of tomatoes and cheese'], optionsFr: ['Deux bouteilles d’eau et un pain frais', 'Une bouteille d’eau et des petits pains frais', 'Deux boîtes de tomates et du fromage'], answer: 0, hint: 'Listen for the number before "Flaschen".', hintFr: 'Écoute le nombre avant « Flaschen ».' } },

    { kind: 'pronunciation', focus: 'The soft ch after ö/ä/ü/i (Brötchen) — and the umlauts ö, ü, ä in market words', focusFr: 'Le ch doux après ö/ä/ü/i (Brötchen) — et les tréma ö, ü, ä dans les mots du marché', items: [{ id: 'a2l15-broetchen-pron', german: 'das Brötchen', english: 'the bread roll', french: 'le petit pain', gender: 'das', syllables: ['BRÖT', 'chen'], pronunciation: 'dahs BROET-khen', example: { de: 'Ich möchte drei Brötchen.', en: 'I would like three rolls.', fr: 'Je voudrais trois petits pains.' } }, { id: 'a2l15-gemuese-pron', german: 'das Gemüse', english: 'the vegetables', french: 'les légumes', gender: 'das', syllables: ['ge', 'MÜ', 'se'], pronunciation: 'dahs ge-MUE-ze', example: { de: 'Das Gemüse ist frisch.', en: 'The vegetables are fresh.', fr: 'Les légumes sont frais.' } }, { id: 'a2l15-kaese-pron', german: 'der Käse', english: 'the cheese', french: 'le fromage', gender: 'der', syllables: ['KÄ', 'se'], pronunciation: 'dair KAY-ze', example: { de: 'Der Käse schmeckt super.', en: 'The cheese tastes great.', fr: 'Le fromage est délicieux.' } }, { id: 'a2l15-pfund-pron', german: 'das Pfund', english: 'the pound', french: 'la livre', gender: 'das', syllables: ['PFUND'], pronunciation: 'dahs pfoont', example: { de: 'Ein Pfund Kaffee, bitte.', en: 'A pound of coffee, please.', fr: 'Une livre de café, s’il vous plaît.' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l15-e11', prompt: 'Listen. What is important to Lena?', promptFr: 'Écoute. Qu’est-ce qui est important pour Lena ?', audio: { ttsText: 'Mir ist regionales Obst wichtig, und ich kaufe gern bei einem kleinen Bauern.' }, options: ['Local fruit', 'A low price', 'Organic bread'], optionsFr: ['Les fruits locaux', 'Un prix bas', 'Le pain bio'], answer: 0, hint: 'Listen right after "Mir ist".', hintFr: 'Écoute juste après « Mir ist ».' } },

    { kind: 'wrapup',
      summary: 'You can now shop at the market: adjective endings **with no article** and **in the dative**, **Mir ist … wichtig**, and quantities like **ein Kilo Äpfel**. 🎉',
      summaryFr: 'Tu sais maintenant faire ton marché : terminaisons d’adjectifs **sans article** et **au datif**, **Mir ist … wichtig**, et quantités comme **ein Kilo Äpfel**. 🎉',
      card: { title: 'At the market on one page', titleFr: 'Au marché en une page', sections: [
        { heading: 'No article', headingFr: 'Sans article', rows: [g('frischer Käse · frische Milch · frisches Brot', 'm · f · n', 'm · f · n'), g('frische Brötchen · mit frischem Käse', 'plural · dative', 'pluriel · datif')] },
        { heading: 'After ein- in the dative', headingFr: 'Après ein- au datif', rows: [g('mit einem netten Verkäufer', 'always -en', 'toujours -en')] },
        { heading: 'Shopping talk', headingFr: 'Faire ses achats', rows: [g('Mir ist … wichtig · Mir sind … wichtig', 'what matters', 'ce qui compte'), g('ein Kilo Äpfel · zwei Flaschen Wasser', 'measure first', 'la mesure d’abord')] },
      ] } },
  ],
};
