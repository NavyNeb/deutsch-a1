import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion6: Lesson = {
  id: 'a2-l6', level: 'A2', module: 3, number: 12,
  title: { de: 'Kleidung und Aussehen', en: 'Clothes and appearance', fr: 'Les vêtements et l’apparence' },
  theme: 'Clothing, colours, and describing how people look', themeFr: 'Les vêtements, les couleurs et décrire l’apparence des gens',
  goals: ['Name clothes and colours', 'Use the verb "tragen" (to wear)', 'Say what you put on with "anziehen"', 'Describe how someone looks with "aussehen"'], goalsFr: ['Nommer les vêtements et les couleurs', 'Utiliser le verbe « tragen » (porter)', 'Dire ce qu’on met avec « anziehen »', 'Décrire l’apparence avec « aussehen »'],
  canDo: g('Ich kann Kleidung und Farben benennen, sagen, was ich trage, und beschreiben, wie jemand aussieht.', 'I can name clothes and colours, say what I am wearing and describe how someone looks.', 'Je sais nommer des vêtements et des couleurs, dire ce que je porte et décrire l’allure de quelqu’un.'),
  steps: [
    { kind: 'intro', title: 'Kleidung und Aussehen 👗', titleFr: 'Vêtements et apparence 👗',
      scene: 'Lara and Tim go shopping before a party and comment on each other’s outfits.', sceneFr: 'Lara et Tim vont faire du shopping avant une fête et commentent leurs tenues.',
      goals: ['Name clothes and colours', 'Use tragen and anziehen', 'Describe how someone looks with aussehen'],
      goalsFr: ['Nommer des vêtements et des couleurs', 'Utiliser tragen et anziehen', 'Décrire l’allure de quelqu’un avec aussehen'] },

    // ───────────── 1 · Clothes and colours ─────────────
    { kind: 'chapter', title: 'Kleidung und Farben', titleFr: 'Vêtements et couleurs', blurb: 'What are you wearing?', blurbFr: 'Que portes-tu ?' },

    { kind: 'situation', title: 'Was ziehe ich an?', titleFr: 'Que vais-je mettre ?',
      setting: 'In front of the wardrobe Lara asks Tim for his opinion.', settingFr: 'Devant l’armoire, Lara demande son avis à Tim.',
      lines: [
        line('Lara', 'Was trage ich heute Abend? Die Kleidung im Schrank ist alt.', 'What shall I wear this evening? The clothes in the wardrobe are old.', 'Que vais-je porter ce soir ? Les vêtements de l’armoire sont vieux.'),
        line('Tim', 'Ich trage ein weißes Hemd und eine schwarze Hose. Und du?', 'I’m wearing a white shirt and black trousers. And you?', 'Je porte une chemise blanche et un pantalon noir. Et toi ?'),
        line('Lara', 'Ich trage heute eine rote Jacke und braune Schuhe. Welche Farbe gefällt dir?', 'Today I’m wearing a red jacket and brown shoes. Which colour do you like?', 'Aujourd’hui je porte une veste rouge et des chaussures marron. Quelle couleur te plaît ?'),
        line('Tim', 'Rot ist schön! Die Jacke ist wirklich neu.', 'Red is nice! The jacket really is new.', 'Le rouge est joli ! La veste est vraiment neuve.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l6-e11', prompt: 'What colour are Lara’s shoes?', promptFr: 'De quelle couleur sont les chaussures de Lara ?', options: ['Brown', 'Black', 'White'], optionsFr: ['Marron', 'Noires', 'Blanches'], answer: 0, explain: 'She says: “… und braune Schuhe.”', explainFr: 'Elle dit : « … und braune Schuhe. »', hint: 'Look at Lara’s second line.', hintFr: 'Regarde la deuxième réplique de Lara.' } },

    { kind: 'wordgroup', title: 'Kleidung', titleFr: 'Les vêtements',
      items: [{ id: 'a2l6-kleidung', german: 'die Kleidung', english: 'the clothing', french: 'les vêtements', gender: 'die', syllables: ['KLEI', 'dung'], pronunciation: 'dee KLY-doong', example: { de: 'Die Kleidung ist neu.', en: 'The clothing is new.', fr: 'Les vêtements sont neufs.' } }, { id: 'a2l6-hemd', german: 'das Hemd', english: 'the shirt', french: 'la chemise', gender: 'das', syllables: ['HEMD'], pronunciation: 'dahs HEMT', example: { de: 'Das Hemd ist weiß.', en: 'The shirt is white.', fr: 'La chemise est blanche.' } }, { id: 'a2l6-hose', german: 'die Hose', english: 'the trousers', french: 'le pantalon', gender: 'die', syllables: ['HO', 'se'], pronunciation: 'dee HOH-ze', example: { de: 'Die Hose ist schwarz.', en: 'The trousers are black.', fr: 'Le pantalon est noir.' } }, { id: 'a2l6-jacke', german: 'die Jacke', english: 'the jacket', french: 'la veste', gender: 'die', syllables: ['JA', 'cke'], pronunciation: 'dee YAH-ke', example: { de: 'Die Jacke ist rot.', en: 'The jacket is red.', fr: 'La veste est rouge.' } }, { id: 'a2l6-schuhe', german: 'die Schuhe', english: 'the shoes', french: 'les chaussures', gender: 'die', syllables: ['SCHU', 'he'], pronunciation: 'dee SHOO-e', example: { de: 'Die Schuhe sind braun.', en: 'The shoes are brown.', fr: 'Les chaussures sont marron.' } }] },

    { kind: 'wordgroup', title: 'Farben und Eindruck', titleFr: 'Couleurs et impression',
      items: [{ id: 'a2l6-farbe', german: 'die Farbe', english: 'the colour', french: 'la couleur', gender: 'die', syllables: ['FAR', 'be'], pronunciation: 'dee FAR-be', example: { de: 'Welche Farbe magst du?', en: 'Which colour do you like?', fr: 'Quelle couleur aimes-tu ?' } }, { id: 'a2l6-schoen', german: 'schön', english: 'beautiful / nice', french: 'beau / joli', gender: null, syllables: ['SCHÖN'], pronunciation: 'shoen', example: { de: 'Die Jacke ist schön.', en: 'The jacket is nice.', fr: 'La veste est jolie.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l6-farben', title: 'Colours', titleFr: 'Les couleurs',
      lead: 'After sein the colour has no ending. Before a noun it takes an ending: eine rote Jacke.',
      leadFr: 'Après sein, la couleur n’a pas de terminaison. Devant un nom, elle en prend une : eine rote Jacke.',
      explanationMd: 'Common colours: **rot, blau, grün, gelb, schwarz, weiß, braun**. After **sein** the colour has **no ending**: **Die Jacke ist rot.** Before a noun it gets an **ending** like **ein-** words: **eine rote Jacke** (f), **ein weißes Hemd** (n), **einen blauen Pullover** (m, accusative), **schwarze Schuhe** (plural, no article). You will learn the full ending system later — copy these patterns for now.',
      explanationMdFr: 'Couleurs courantes : **rot, blau, grün, gelb, schwarz, weiß, braun**. Après **sein**, la couleur n’a **pas de terminaison** : **Die Jacke ist rot.** Devant un nom, elle prend une **terminaison** comme les mots en **ein-** : **eine rote Jacke** (f), **ein weißes Hemd** (n), **einen blauen Pullover** (m, accusatif), **schwarze Schuhe** (pluriel, sans article). Tu apprendras tout le système plus tard — copie ces modèles pour l’instant.',
      tables: [{ title: 'Colours', titleFr: 'Les couleurs', headers: ['Colour', 'After sein', 'Before a noun'], headersFr: ['Couleur', 'Après sein', 'Devant un nom'],
        rows: [['rot', 'Die Jacke ist rot.', 'eine rote Jacke'], ['blau', 'Das Hemd ist blau.', 'ein blaues Hemd'], ['schwarz', 'Meine Schuhe sind schwarz.', 'schwarze Schuhe'], ['weiß', 'Die Hose ist weiß.', 'eine weiße Hose'], ['braun', 'Der Mantel ist braun.', 'ein brauner Mantel']],
        rowsFr: [['rot', 'Die Jacke ist rot.', 'eine rote Jacke'], ['blau', 'Das Hemd ist blau.', 'ein blaues Hemd'], ['schwarz', 'Meine Schuhe sind schwarz.', 'schwarze Schuhe'], ['weiß', 'Die Hose ist weiß.', 'eine weiße Hose'], ['braun', 'Der Mantel ist braun.', 'ein brauner Mantel']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Die Jacke', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'rot.', role: 'other' }], en: 'The jacket is red.', fr: 'La veste est rouge.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'trage', role: 'verb' }, { text: 'eine rote Jacke.', role: 'accusative' }], en: 'I am wearing a red jacket.', fr: 'Je porte une veste rouge.' },
      ],
      contrast: {
        a: { label: 'After sein: no ending', labelFr: 'Après sein : sans terminaison', note: 'rot, blau, schwarz', noteFr: 'rot, blau, schwarz', examples: [g('Das Hemd ist blau.', 'The shirt is blue.', 'La chemise est bleue.'), g('Meine Schuhe sind schwarz.', 'My shoes are black.', 'Mes chaussures sont noires.')] },
        b: { label: 'Before a noun: ending', labelFr: 'Devant un nom : terminaison', note: 'rote, blaues', noteFr: 'rote, blaues', examples: [g('Ich trage eine rote Jacke.', 'I am wearing a red jacket.', 'Je porte une veste rouge.'), g('Sie kauft ein blaues Hemd.', 'She buys a blue shirt.', 'Elle achète une chemise bleue.')] },
      },
      examples: [
        g('Das Hemd ist blau.', 'The shirt is blue.', 'La chemise est bleue.'),
        g('Meine Schuhe sind schwarz.', 'My shoes are black.', 'Mes chaussures sont noires.'),
        g('Ich trage eine rote Jacke.', 'I am wearing a red jacket.', 'Je porte une veste rouge.'),
        g('Er trägt ein weißes Hemd und eine schwarze Hose.', 'He is wearing a white shirt and black trousers.', 'Il porte une chemise blanche et un pantalon noir.'),
        g('Die Schuhe sind braun.', 'The shoes are brown.', 'Les chaussures sont marron.'),
        g('Welche Farbe magst du?', 'Which colour do you like?', 'Quelle couleur aimes-tu ?'),
      ],
      mistakes: [
        { wrong: 'Die Jacke ist rote.', right: 'Die Jacke ist rot.', why: 'After sein the colour has no ending.', whyFr: 'Après sein, la couleur n’a pas de terminaison.' },
        { wrong: 'Ich trage eine rot Jacke.', right: 'Ich trage eine rote Jacke.', why: 'Before a noun the colour needs an ending.', whyFr: 'Devant un nom, la couleur a besoin d’une terminaison.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l6-e3', word: 'Jacke', answer: 'die', hint: '"Jacke" is feminine.', hintFr: '« Jacke » est féminin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l6-e4', pairs: [{ de: 'rot', en: 'red', fr: 'rouge' }, { de: 'blau', en: 'blue', fr: 'bleu' }, { de: 'schwarz', en: 'black', fr: 'noir' }], hint: 'Match each colour to its meaning.', hintFr: 'Associe chaque couleur à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l6-e7', prompt: 'Das Hemd ist ___. (white)', answer: 'weiß', hint: 'the colour "white"', hintFr: 'la couleur « blanc »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l6-e9', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Die Schuhe ist braun.', 'Die Schuhe sind braun.', 'Die Schuhe bin braun.'], answer: 1, explain: '"Schuhe" is plural → sind.', explainFr: '« Schuhe » est au pluriel → sind.', hint: 'Shoes are plural.', hintFr: 'Les chaussures sont au pluriel.' } },

    // ───────────── 2 · tragen ─────────────
    { kind: 'chapter', title: 'tragen und anziehen', titleFr: 'tragen et anziehen', blurb: 'Wearing and putting on.', blurbFr: 'Porter et mettre.' },

    { kind: 'situation', title: 'Es ist kalt', titleFr: 'Il fait froid',
      setting: 'Nina gets dressed for a cold evening.', settingFr: 'Nina s’habille pour une soirée froide.',
      lines: [
        line('Nina', 'Es ist kalt. Ich ziehe eine warme Jacke an.', 'It’s cold. I’m putting on a warm jacket.', 'Il fait froid. Je mets une veste chaude.'),
        line('Tim', 'Und was trägst du darunter?', 'And what are you wearing underneath?', 'Et que portes-tu en dessous ?'),
        line('Nina', 'Ich trage ein blaues Hemd. Du trägst auch eine Jacke, oder?', 'I’m wearing a blue shirt. You’re wearing a jacket too, right?', 'Je porte une chemise bleue. Tu portes aussi une veste, non ?'),
        line('Tim', 'Ja, ich ziehe die Schuhe an und dann gehen wir.', 'Yes, I’ll put my shoes on and then we go.', 'Oui, je mets mes chaussures et nous partons.'),
      ],
      words: [{ id: 'a2l6-tragen', german: 'tragen', english: 'to wear / carry', french: 'porter', gender: null, syllables: ['TRA', 'gen'], pronunciation: 'TRAH-gen', example: { de: 'Ich trage eine Jacke.', en: 'I am wearing a jacket.', fr: 'Je porte une veste.' } }, { id: 'a2l6-anziehen', german: 'anziehen', english: 'to put on', french: 'mettre / enfiler', gender: null, syllables: ['AN', 'zie', 'hen'], pronunciation: 'AHN-tsee-en', example: { de: 'Ich ziehe die Schuhe an.', en: 'I put on the shoes.', fr: 'Je mets les chaussures.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l6-tragen', title: 'tragen (to wear) and anziehen (to put on)', titleFr: 'tragen (porter) et anziehen (mettre)',
      lead: 'tragen changes a → ä for du and er. anziehen is separable: Ich ziehe die Schuhe an.',
      leadFr: 'tragen change a → ä pour du et er. anziehen est séparable : Ich ziehe die Schuhe an.',
      explanationMd: '**tragen** (to wear, to carry) changes its vowel in the **du / er** forms (**a → ä**): **ich trage, du trägst, er trägt**. **anziehen** (to put on) is **separable**: the prefix **an** goes to the **end**: **Ich ziehe eine Jacke an.** Compare: **tragen** = what you **are wearing**; **anziehen** = the action of **putting it on**.',
      explanationMdFr: '**tragen** (porter) change de voyelle aux formes **du / er** (**a → ä**) : **ich trage, du trägst, er trägt**. **anziehen** (mettre un vêtement) est **séparable** : le préfixe **an** va à la **fin** : **Ich ziehe eine Jacke an.** Compare : **tragen** = ce que tu **portes** ; **anziehen** = l’action de **l’enfiler**.',
      tables: [{ title: 'tragen', titleFr: 'tragen', headers: ['Person', 'tragen', 'Example'], headersFr: ['Personne', 'tragen', 'Exemple'],
        rows: [['ich', 'trage', 'Ich trage eine Jacke.'], ['du', 'trägst', 'Du trägst ein blaues Hemd.'], ['er / sie / es', 'trägt', 'Sie trägt eine rote Jacke.'], ['wir', 'tragen', 'Wir tragen Schuhe.'], ['ihr', 'tragt', 'Ihr tragt Hüte.'], ['sie / Sie', 'tragen', 'Sie tragen Mäntel.']],
        rowsFr: [['ich', 'trage', 'Ich trage eine Jacke.'], ['du', 'trägst', 'Du trägst ein blaues Hemd.'], ['er / sie / es', 'trägt', 'Sie trägt eine rote Jacke.'], ['wir', 'tragen', 'Wir tragen Schuhe.'], ['ihr', 'tragt', 'Ihr tragt Hüte.'], ['sie / Sie', 'tragen', 'Sie tragen Mäntel.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'trägt', role: 'verb' }, { text: 'eine rote Jacke.', role: 'accusative' }], en: 'She is wearing a red jacket.', fr: 'Elle porte une veste rouge.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'ziehe', role: 'verb' }, { text: 'die Schuhe', role: 'accusative' }, { text: 'an.', role: 'verb' }], en: 'I put the shoes on.', fr: 'Je mets les chaussures.' },
      ],
      contrast: {
        a: { label: 'tragen = state', labelFr: 'tragen = état', note: 'what you wear', noteFr: 'ce que tu portes', examples: [g('Was trägst du heute?', 'What are you wearing today?', 'Que portes-tu aujourd’hui ?'), g('Er trägt einen schwarzen Mantel.', 'He is wearing a black coat.', 'Il porte un manteau noir.')] },
        b: { label: 'anziehen = action', labelFr: 'anziehen = action', note: 'putting it on', noteFr: 'l’enfiler', examples: [g('Ich ziehe eine warme Jacke an.', 'I put on a warm jacket.', 'Je mets une veste chaude.'), g('Zieh die Schuhe an!', 'Put your shoes on!', 'Mets tes chaussures !')] },
      },
      examples: [
        g('Sie trägt eine rote Jacke.', 'She is wearing a red jacket.', 'Elle porte une veste rouge.'),
        g('Was trägst du heute?', 'What are you wearing today?', 'Que portes-tu aujourd’hui ?'),
        g('Ich ziehe eine warme Jacke an.', 'I put on a warm jacket.', 'Je mets une veste chaude.'),
        g('Ich ziehe die Schuhe an.', 'I put on my shoes.', 'Je mets mes chaussures.'),
        g('Er trägt ein weißes Hemd.', 'He is wearing a white shirt.', 'Il porte une chemise blanche.'),
        g('Ihr tragt heute alle blaue Hemden.', 'You are all wearing blue shirts today.', 'Vous portez tous des chemises bleues aujourd’hui.'),
      ],
      mistakes: [
        { wrong: 'Du tragst ein Hemd.', right: 'Du trägst ein Hemd.', why: 'tragen changes a → ä for du and er.', whyFr: 'tragen change a → ä pour du et er.' },
        { wrong: 'Ich anziehe eine Jacke.', right: 'Ich ziehe eine Jacke an.', why: 'anziehen is separable: an goes to the end.', whyFr: 'anziehen est séparable : an va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l6-e1', prompt: 'Ich ___ eine Jacke. (tragen — ich-form)', answer: 'trage', hint: 'first person singular of tragen', hintFr: 'première personne du singulier de tragen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l6-e2', prompt: 'Du ___ ein blaues Hemd. (tragen — du-form)', answer: 'trägst', hint: 'du-form has an umlaut: a → ä', hintFr: 'la forme « du » a un tréma : a → ä' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l6-e8', tokens: ['an', 'ziehe', 'eine', 'Jacke', 'Ich'], answer: ['Ich', 'ziehe', 'eine', 'Jacke', 'an'], hint: 'Separable verb: "an" goes to the very end.', hintFr: 'Verbe à particule : « an » va tout à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l6-e10', prompt: 'Listen. What is Nina putting on?', promptFr: 'Écoute. Que met Nina ?', audio: { ttsText: 'Es ist kalt. Ich ziehe eine warme Jacke an.' }, options: ['A warm jacket', 'Shoes', 'A shirt'], optionsFr: ['Une veste chaude', 'Des chaussures', 'Une chemise'], answer: 0, hint: 'Listen for what comes after "Ich ziehe".', hintFr: 'Écoute ce qui vient après « Ich ziehe ».' } },

    // ───────────── 3 · aussehen ─────────────
    { kind: 'chapter', title: 'Wie sieht er aus?', titleFr: 'Comment est-il ?', blurb: 'aussehen: describe looks.', blurbFr: 'aussehen : décrire l’allure.' },

    { kind: 'situation', title: 'Du siehst gut aus!', titleFr: 'Tu es très bien !',
      setting: 'Tim and Lara arrive at the party.', settingFr: 'Tim et Lara arrivent à la fête.',
      lines: [
        line('Tim', 'Wow, du siehst heute gut aus!', 'Wow, you look good today!', 'Waouh, tu es très bien aujourd’hui !'),
        line('Lara', 'Danke! Wie sieht die Jacke aus? Ist sie nicht zu bunt?', 'Thanks! What does the jacket look like? Isn’t it too colourful?', 'Merci ! Comment est la veste ? N’est-elle pas trop colorée ?'),
        line('Tim', 'Nein, sie sieht sehr schön aus. Die Schuhe passen auch.', 'No, it looks very nice. The shoes match too.', 'Non, elle est très jolie. Les chaussures vont bien aussi.'),
      ],
      words: [{ id: 'a2l6-aussehen', german: 'aussehen', english: 'to look / appear', french: 'avoir l’air', gender: null, syllables: ['AUS', 'se', 'hen'], pronunciation: 'OWS-say-en', example: { de: 'Du siehst gut aus!', en: 'You look good!', fr: 'Tu as l’air en forme !' } }] },

    { kind: 'grammar', note: {
      id: 'a2l6-aussehen', title: 'Describing looks: aussehen', titleFr: 'Décrire l’allure : aussehen',
      lead: 'aussehen is separable: er sieht gut aus. Ask: Wie sieht … aus?',
      leadFr: 'aussehen est séparable : er sieht gut aus. Question : Wie sieht … aus ?',
      explanationMd: '**aussehen** (to look, to appear) is **separable** and changes its vowel (**e → ie**): **ich sehe aus, du siehst aus, er sieht aus**. The prefix **aus** goes to the **end**. Ask **Wie sieht … aus?** (What does … look like?) and answer with an adjective: **Er sieht müde aus. Die Jacke sieht schön aus.** Add **gut, schön, toll, müde** to compliment or describe.',
      explanationMdFr: '**aussehen** (avoir l’air) est **séparable** et change de voyelle (**e → ie**) : **ich sehe aus, du siehst aus, er sieht aus**. Le préfixe **aus** va à la **fin**. Demande **Wie sieht … aus ?** (À quoi ressemble … ?) et réponds avec un adjectif : **Er sieht müde aus. Die Jacke sieht schön aus.** Ajoute **gut, schön, toll, müde** pour complimenter ou décrire.',
      tables: [{ title: 'aussehen', titleFr: 'aussehen', headers: ['Person', 'aussehen', 'Example'], headersFr: ['Personne', 'aussehen', 'Exemple'],
        rows: [['ich', 'sehe … aus', 'Ich sehe müde aus.'], ['du', 'siehst … aus', 'Du siehst gut aus.'], ['er / sie / es', 'sieht … aus', 'Die Jacke sieht schön aus.'], ['wir', 'sehen … aus', 'Wir sehen toll aus.'], ['ihr', 'seht … aus', 'Ihr seht müde aus.'], ['sie / Sie', 'sehen … aus', 'Sie sehen glücklich aus.']],
        rowsFr: [['ich', 'sehe … aus', 'Ich sehe müde aus.'], ['du', 'siehst … aus', 'Du siehst gut aus.'], ['er / sie / es', 'sieht … aus', 'Die Jacke sieht schön aus.'], ['wir', 'sehen … aus', 'Wir sehen toll aus.'], ['ihr', 'seht … aus', 'Ihr seht müde aus.'], ['sie / Sie', 'sehen … aus', 'Sie sehen glücklich aus.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'siehst', role: 'verb' }, { text: 'heute', role: 'time' }, { text: 'gut', role: 'other' }, { text: 'aus.', role: 'verb' }], en: 'You look good today.', fr: 'Tu es très bien aujourd’hui.' },
        { parts: [{ text: 'Wie', role: 'other' }, { text: 'sieht', role: 'verb' }, { text: 'die Jacke', role: 'subject' }, { text: 'aus?', role: 'verb' }], en: 'What does the jacket look like?', fr: 'Comment est la veste ?' },
      ],
      contrast: {
        a: { label: 'aussehen = look', labelFr: 'aussehen = avoir l’air', note: 'appearance', noteFr: 'apparence', examples: [g('Du siehst heute gut aus.', 'You look good today.', 'Tu es très bien aujourd’hui.'), g('Wie sieht die Jacke aus?', 'What does the jacket look like?', 'Comment est la veste ?')] },
        b: { label: 'sehen = see', labelFr: 'sehen = voir', note: 'with the eyes', noteFr: 'avec les yeux', examples: [g('Ich sehe die Jacke.', 'I see the jacket.', 'Je vois la veste.'), g('Siehst du den Bus?', 'Do you see the bus?', 'Vois-tu le bus ?')] },
      },
      examples: [
        g('Du siehst heute gut aus.', 'You look good today.', 'Tu es très bien aujourd’hui.'),
        g('Wie sieht die Jacke aus?', 'What does the jacket look like?', 'Comment est la veste ?'),
        g('Er sieht müde aus.', 'He looks tired.', 'Il a l’air fatigué.'),
        g('Die Schuhe sehen toll aus.', 'The shoes look great.', 'Les chaussures sont superbes.'),
        g('Ich ziehe eine warme Jacke an.', 'I put on a warm jacket.', 'Je mets une veste chaude.'),
        g('Wie sehe ich aus?', 'How do I look?', 'Comment suis-je ?'),
      ],
      mistakes: [
        { wrong: 'Du aussiehst gut.', right: 'Du siehst gut aus.', why: 'aussehen is separable: aus goes to the end.', whyFr: 'aussehen est séparable : aus va à la fin.' },
        { wrong: 'Er sehst müde aus.', right: 'Er sieht müde aus.', why: 'sehen → sieht (e → ie).', whyFr: 'sehen → sieht (e → ie).' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l6-e6', prompt: 'How do you say "You look good"?', promptFr: 'Comment dit-on « Tu as bonne mine » ?', options: ['Du siehst gut aus.', 'Du bist gut aus.', 'Du aussiehst gut.'], answer: 0, explain: '"aussehen" is separable: Du siehst … aus.', explainFr: '« aussehen » est séparable : Du siehst … aus.', hint: 'The prefix "aus" goes to the end.', hintFr: 'La particule « aus » va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l6-e5', prompt: 'Listen. What colour is the jacket?', promptFr: 'Écoute. De quelle couleur est la veste ?', audio: { ttsText: 'Ich trage heute eine rote Jacke und schwarze Schuhe.' }, options: ['Red', 'Blue', 'Green'], optionsFr: ['Rouge', 'Bleue', 'Verte'], answer: 0, hint: 'Listen for the colour before "Jacke".', hintFr: 'Écoute la couleur avant « Jacke ».' } },

    { kind: 'pronunciation', focus: 'The "ö" in schön is rounded, and "ei" in weiß is "eye" with a sharp ß', focusFr: 'Le « ö » de schön est arrondi, et « ei » de weiß est « aï » avec un ß net', items: [{ id: 'a2l6-schoen-pron', german: 'schön', english: 'nice', french: 'joli', gender: null, syllables: ['SCHÖN'], pronunciation: 'shoen', example: { de: 'Die Jacke ist schön.', en: 'The jacket is nice.', fr: 'La veste est jolie.' } }, { id: 'a2l6-weiss-pron', german: 'weiß', english: 'white', french: 'blanc', gender: null, syllables: ['WEISS'], pronunciation: 'vice', example: { de: 'Das Hemd ist weiß.', en: 'The shirt is white.', fr: 'La chemise est blanche.' } }] },

    { kind: 'wrapup',
      summary: 'You can now name **clothes and colours**, use **tragen** (du trägst) and **anziehen**, and describe looks with **aussehen**. 🎉',
      summaryFr: 'Tu sais maintenant nommer les **vêtements et les couleurs**, utiliser **tragen** (du trägst) et **anziehen**, et décrire l’allure avec **aussehen**. 🎉',
      card: { title: 'Clothes on one page', titleFr: 'Les vêtements en une page', sections: [
        { heading: 'Colours', headingFr: 'Couleurs', rows: [g('Die Jacke ist rot.', 'no ending after sein', 'sans terminaison après sein'), g('eine rote Jacke', 'ending before a noun', 'terminaison devant un nom')] },
        { heading: 'Verbs', headingFr: 'Verbes', rows: [g('ich trage · du trägst · er trägt', 'a → ä', 'a → ä'), g('Ich ziehe die Schuhe an.', 'separable', 'séparable'), g('Du siehst gut aus.', 'aussehen, separable', 'aussehen, séparable')] },
      ] } },
  ],
};
