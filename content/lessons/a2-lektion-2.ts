import type { Lesson } from '../types';

export const a2lektion2: Lesson = {
  id: 'a2-l2', level: 'A2', module: 1, number: 2,
  title: { de: 'Eine Reise', en: 'A journey', fr: 'Un voyage' },
  theme: 'The Perfekt with "sein" and separable verbs in the past',
  themeFr: 'Le Perfekt avec « sein » et les verbes à particule au passé',
  goals: ['Talk about a trip in the past', 'Form the Perfekt with "sein" for movement verbs', 'Use participles like gefahren, gegangen, geflogen', 'Put separable verbs in the Perfekt (angekommen)'],
  goalsFr: ['Parler d’un voyage au passé', 'Former le Perfekt avec « sein » pour les verbes de mouvement', 'Utiliser les participes comme gefahren, gegangen, geflogen', 'Mettre les verbes à particule au Perfekt (angekommen)'],
  steps: [
    { kind: 'intro', title: 'Ich bin gereist ✈️', titleFr: 'J’ai voyagé ✈️',
      scene: 'Telling a friend about a recent trip.', sceneFr: 'On raconte un voyage récent à un ami.',
      goals: ['Talk about a past journey', 'Use "sein" + participle for movement', 'Learn participles of gehen, fahren, kommen, fliegen', 'Use separable verbs in the Perfekt'],
      goalsFr: ['Parler d’un voyage passé', 'Utiliser « sein » + participe pour le mouvement', 'Apprendre les participes de gehen, fahren, kommen, fliegen', 'Utiliser les verbes à particule au Perfekt'] },

    { kind: 'vocab', item: { id: 'a2l2-reise', german: 'die Reise', english: 'the journey / trip', french: 'le voyage', gender: 'die', syllables: ['REI', 'se'], pronunciation: 'dee RYE-ze', example: { de: 'Die Reise war schön.', en: 'The trip was nice.', fr: 'Le voyage était beau.' } } },
    { kind: 'vocab', item: { id: 'a2l2-urlaub', german: 'der Urlaub', english: 'the holiday / vacation', french: 'les vacances', gender: 'der', syllables: ['UR', 'laub'], pronunciation: 'dair OOR-lowp', example: { de: 'Im Urlaub bin ich nach Italien gefahren.', en: 'On holiday I travelled to Italy.', fr: 'En vacances, je suis allé en Italie.' } } },
    { kind: 'vocab', item: { id: 'a2l2-fliegen', german: 'fliegen', english: 'to fly', french: 'voler / prendre l’avion', gender: null, syllables: ['FLIE', 'gen'], pronunciation: 'FLEE-gen', example: { de: 'Ich bin nach Spanien geflogen.', en: 'I flew to Spain.', fr: 'J’ai pris l’avion pour l’Espagne.' } } },
    { kind: 'vocab', item: { id: 'a2l2-gehen', german: 'gehen', english: 'to go / walk', french: 'aller / marcher', gender: null, syllables: ['GE', 'hen'], pronunciation: 'GAY-en', example: { de: 'Ich bin ins Museum gegangen.', en: 'I went to the museum.', fr: 'Je suis allé au musée.' } } },
    { kind: 'vocab', item: { id: 'a2l2-bleiben', german: 'bleiben', english: 'to stay', french: 'rester', gender: null, syllables: ['BLEI', 'ben'], pronunciation: 'BLY-ben', example: { de: 'Ich bin zu Hause geblieben.', en: 'I stayed at home.', fr: 'Je suis resté à la maison.' } } },
    { kind: 'vocab', item: { id: 'a2l2-ankommen', german: 'ankommen', english: 'to arrive', french: 'arriver', gender: null, syllables: ['AN', 'kom', 'men'], pronunciation: 'AHN-kom-men', example: { de: 'Der Zug ist pünktlich angekommen.', en: 'The train arrived on time.', fr: 'Le train est arrivé à l’heure.' } } },
    { kind: 'vocab', item: { id: 'a2l2-abfahren', german: 'abfahren', english: 'to depart / leave', french: 'partir', gender: null, syllables: ['AB', 'fah', 'ren'], pronunciation: 'AHP-fah-ren', example: { de: 'Der Bus ist um acht abgefahren.', en: 'The bus left at eight.', fr: 'Le bus est parti à huit heures.' } } },
    { kind: 'vocab', item: { id: 'a2l2-flughafen', german: 'der Flughafen', english: 'the airport', french: 'l’aéroport', gender: 'der', syllables: ['FLUG', 'ha', 'fen'], pronunciation: 'dair FLOOK-hah-fen', example: { de: 'Wir sind zum Flughafen gefahren.', en: 'We drove to the airport.', fr: 'Nous sommes allés à l’aéroport.' } } },
    { kind: 'vocab', item: { id: 'a2l2-schon', german: 'schon', english: 'already', french: 'déjà', gender: null, syllables: ['SCHON'], pronunciation: 'shohn', example: { de: 'Bist du schon angekommen?', en: 'Have you arrived already?', fr: 'Es-tu déjà arrivé ?' } } },
    { kind: 'vocab', item: { id: 'a2l2-pünktlich', german: 'pünktlich', english: 'on time / punctual', french: 'à l’heure / ponctuel', gender: null, syllables: ['PÜNKT', 'lich'], pronunciation: 'PUENKT-likh', example: { de: 'Der Zug war pünktlich.', en: 'The train was on time.', fr: 'Le train était à l’heure.' } } },

    { kind: 'grammar', note: {
      id: 'a2l2-perfekt-sein', title: 'The Perfekt with "sein"', titleFr: 'Le Perfekt avec « sein »',
      explanationMd: 'Verbs of **movement** or **change of place** form the Perfekt with **sein** (not haben):\n\n- Ich **bin** nach Berlin **gefahren**. — I went to Berlin.\n- Wir **sind** ins Kino **gegangen**. — We went to the cinema.\n\n**bleiben** and **sein** also take sein: Ich **bin** zu Hause **geblieben**.',
      explanationMdFr: 'Les verbes de **mouvement** ou de **changement de lieu** forment le Perfekt avec **sein** (pas haben) :\n\n- Ich **bin** nach Berlin **gefahren**. — Je suis allé à Berlin.\n- Wir **sind** ins Kino **gegangen**. — Nous sommes allés au cinéma.\n\n**bleiben** et **sein** prennent aussi sein : Ich **bin** zu Hause **geblieben**.',
      examples: [
        { de: 'Ich bin nach Spanien geflogen.', en: 'I flew to Spain.', fr: 'J’ai pris l’avion pour l’Espagne.' },
        { de: 'Sie ist um zehn Uhr gekommen.', en: 'She came at ten o’clock.', fr: 'Elle est venue à dix heures.' },
      ],
      diagram: 'satzklammer' } },

    { kind: 'grammar', note: {
      id: 'a2l2-bewegungspartizipien', title: 'Movement participles', titleFr: 'Participes de mouvement',
      explanationMd: 'Common **sein**-verbs and their participles (mostly ge…en):\n\n- gehen → **gegangen** · fahren → **gefahren** · kommen → **gekommen**\n- fliegen → **geflogen** · bleiben → **geblieben** · sein → **gewesen**',
      explanationMdFr: 'Verbes courants avec **sein** et leurs participes (surtout ge…en) :\n\n- gehen → **gegangen** · fahren → **gefahren** · kommen → **gekommen**\n- fliegen → **geflogen** · bleiben → **geblieben** · sein → **gewesen**',
      examples: [
        { de: 'Wir sind nach Hause gegangen.', en: 'We went home.', fr: 'Nous sommes rentrés à la maison.' },
        { de: 'Er ist krank gewesen.', en: 'He was ill.', fr: 'Il a été malade.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l2-trennbar-perfekt', title: 'Separable verbs in the Perfekt', titleFr: 'Les verbes à particule au Perfekt',
      explanationMd: 'Separable verbs put **-ge-** between the prefix and the stem:\n\n- ankommen → **angekommen** · abfahren → **abgefahren** · einkaufen → **eingekauft**\n\nDer Zug **ist** pünktlich **angekommen**.',
      explanationMdFr: 'Les verbes à particule mettent **-ge-** entre la particule et le radical :\n\n- ankommen → **angekommen** · abfahren → **abgefahren** · einkaufen → **eingekauft**\n\nDer Zug **ist** pünktlich **angekommen**.',
      examples: [
        { de: 'Der Bus ist um acht abgefahren.', en: 'The bus left at eight.', fr: 'Le bus est parti à huit heures.' },
        { de: 'Ich habe im Supermarkt eingekauft.', en: 'I shopped at the supermarket.', fr: 'J’ai fait des courses au supermarché.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l2-e1', prompt: 'Ich ___ nach Berlin gefahren. (sein — ich-form)', answer: 'bin', hint: 'movement verbs use "sein": ich bin', hintFr: 'les verbes de mouvement utilisent « sein » : ich bin' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l2-e2', prompt: 'Which verb uses "sein" in the Perfekt?', promptFr: 'Quel verbe utilise « sein » au Perfekt ?', options: ['kaufen', 'gehen', 'kochen'], answer: 1, explain: '"gehen" is a movement verb → sein: ich bin gegangen.', explainFr: '« gehen » est un verbe de mouvement → sein : ich bin gegangen.', hint: 'Which verb means a movement?', hintFr: 'Quel verbe exprime un mouvement ?' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l2-e3', tokens: ['gefahren', 'bin', 'nach', 'Ich', 'Italien'], answer: ['Ich', 'bin', 'nach', 'Italien', 'gefahren'], hint: 'sein in position 2, participle at the end.', hintFr: 'sein en position 2, participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l2-e4', pairs: [ { de: 'gehen', en: 'gegangen', fr: 'gegangen' }, { de: 'fliegen', en: 'geflogen', fr: 'geflogen' }, { de: 'kommen', en: 'gekommen', fr: 'gekommen' } ], hint: 'Match each verb to its participle.', hintFr: 'Associe chaque verbe à son participe.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l2-e5', prompt: 'Listen. How did Sara travel to Spain?', promptFr: 'Écoute. Comment Sara est-elle allée en Espagne ?', audio: { ttsText: 'Im Urlaub bin ich nach Spanien geflogen. Es war toll.' }, options: ['She flew', 'She drove', 'She stayed home'], optionsFr: ['Elle a pris l’avion', 'Elle a conduit', 'Elle est restée chez elle'], answer: 0, hint: 'Listen for the participle after "bin ich nach Spanien".', hintFr: 'Écoute le participe après « bin ich nach Spanien ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l2-e6', prompt: 'Der Zug ist pünktlich ___. (ankommen → participle)', answer: 'angekommen', hint: 'separable verb: an + ge + kommen', hintFr: 'verbe à particule : an + ge + kommen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l2-e7', prompt: 'What is the participle of "abfahren"?', promptFr: 'Quel est le participe de « abfahren » ?', options: ['abgefahren', 'gefahrab', 'abfahrt'], answer: 0, explain: 'Separable: ab + ge + fahren → abgefahren.', explainFr: 'Séparable : ab + ge + fahren → abgefahren.', hint: 'Put -ge- after the prefix "ab".', hintFr: 'Mets -ge- après la particule « ab ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l2-e8', tokens: ['geblieben', 'Hause', 'bin', 'zu', 'Ich'], answer: ['Ich', 'bin', 'zu', 'Hause', 'geblieben'], hint: '"bleiben" takes sein; participle at the end.', hintFr: '« bleiben » prend sein ; participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l2-e9', prompt: 'Wir ___ ins Kino gegangen. (sein — wir-form)', answer: 'sind', hint: 'wir + sein = wir sind', hintFr: 'wir + sein = wir sind' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l2-e10', prompt: 'Listen. When did the bus leave?', promptFr: 'Écoute. Quand le bus est-il parti ?', audio: { ttsText: 'Der Bus ist schon um acht Uhr abgefahren.' }, options: ['At eight', 'At nine', 'At ten'], optionsFr: ['À huit heures', 'À neuf heures', 'À dix heures'], answer: 0, hint: 'Listen for the time before "abgefahren".', hintFr: 'Écoute l’heure avant « abgefahren ».' } },

    { kind: 'pronunciation', focus: 'The "ei" is "eye" (Reise, bleiben) and "eu" is "oy" (Deutschland); long "u" in Urlaub', focusFr: 'Le « ei » est « aï » (Reise, bleiben) et « eu » est « oï » (Deutschland) ; « u » long dans Urlaub', items: [
      { id: 'a2l2-reise-pron', german: 'Reise', english: 'journey', french: 'voyage', gender: null, syllables: ['REI', 'se'], pronunciation: 'RYE-ze', example: { de: 'Die Reise war lang.', en: 'The journey was long.', fr: 'Le voyage était long.' } },
      { id: 'a2l2-urlaub-pron', german: 'Urlaub', english: 'holiday', french: 'vacances', gender: null, syllables: ['UR', 'laub'], pronunciation: 'OOR-lowp', example: { de: 'Der Urlaub war schön.', en: 'The holiday was lovely.', fr: 'Les vacances étaient belles.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now talk about a trip in the past. Movement verbs form the Perfekt with **sein** (ich bin gefahren/geflogen/gegangen), **bleiben** and **sein** take sein too, and separable verbs put **-ge-** in the middle (angekommen, abgefahren). 🎉',
      summaryFr: 'Tu sais maintenant parler d’un voyage au passé. Les verbes de mouvement forment le Perfekt avec **sein** (ich bin gefahren/geflogen/gegangen), **bleiben** et **sein** prennent aussi sein, et les verbes à particule mettent **-ge-** au milieu (angekommen, abgefahren). 🎉' },
  ],
};
