import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion2: Lesson = {
  id: 'a2-l2', level: 'A2', module: 1, number: 2,
  title: { de: 'Eine Reise', en: 'A journey', fr: 'Un voyage' },
  theme: 'The Perfekt with "sein" and separable verbs in the past', themeFr: 'Le Perfekt avec « sein » et les verbes à particule au passé',
  goals: ['Talk about a trip in the past', 'Form the Perfekt with "sein" for movement verbs', 'Use participles like gefahren, gegangen, geflogen', 'Put separable verbs in the Perfekt (angekommen)'], goalsFr: ['Parler d’un voyage au passé', 'Former le Perfekt avec « sein » pour les verbes de mouvement', 'Utiliser les participes comme gefahren, gegangen, geflogen', 'Mettre les verbes à particule au Perfekt (angekommen)'],
  canDo: g('Ich kann von einer Reise erzählen, mit sein im Perfekt und mit trennbaren Verben.', 'I can tell about a trip, using sein in the Perfekt and separable verbs.', 'Je sais raconter un voyage, avec sein au Perfekt et des verbes séparables.'),
  steps: [
    { kind: 'intro', title: 'Eine Reise ✈️', titleFr: 'Un voyage ✈️',
      scene: 'Sara tells a friend about her holiday trip.', sceneFr: 'Sara raconte son voyage de vacances à une amie.',
      goals: ['Form the Perfekt with sein for verbs of movement', 'Know participles such as gegangen, geflogen, gekommen, gewesen', 'Put separable verbs in the Perfekt: angekommen, abgefahren'],
      goalsFr: ['Former le Perfekt avec sein pour les verbes de mouvement', 'Connaître des participes comme gegangen, geflogen, gekommen, gewesen', 'Mettre des verbes séparables au Perfekt : angekommen, abgefahren'] },

    // ───────────── 1 · sein-Perfekt ─────────────
    { kind: 'chapter', title: 'Bewegung: sein + Partizip', titleFr: 'Mouvement : sein + participe', blurb: 'Where did you go, and how?', blurbFr: 'Où es-tu allé, et comment ?' },

    { kind: 'situation', title: 'Im Urlaub', titleFr: 'En vacances',
      setting: 'Sara tells her friend Nils about her holiday.', settingFr: 'Sara raconte ses vacances à son ami Nils.',
      lines: [
        line('Nils', 'Wie war dein Urlaub, Sara?', 'How was your holiday, Sara?', 'Comment étaient tes vacances, Sara ?'),
        line('Sara', 'Toll! Ich bin nach Spanien geflogen. Die Reise war schön.', 'Great! I flew to Spain. The trip was lovely.', 'Super ! Je suis allée en Espagne en avion. Le voyage était beau.'),
        line('Nils', 'Und dort? Bist du am Strand geblieben?', 'And there? Did you stay on the beach?', 'Et là-bas ? Es-tu restée à la plage ?'),
        line('Sara', 'Nein, wir sind jeden Tag ins Museum gegangen. Nur am Sonntag sind wir zu Hause geblieben.', 'No, we went to the museum every day. Only on Sunday we stayed at home.', 'Non, nous sommes allés au musée tous les jours. Seulement le dimanche, nous sommes restés à la maison.'),
        line('Nils', 'Und wie bist du zurückgekommen?', 'And how did you come back?', 'Et comment es-tu revenue ?'),
        line('Sara', 'Mit dem Flugzeug. Der Flug ist pünktlich gewesen.', 'By plane. The flight was on time.', 'En avion. Le vol était à l’heure.'),
      ],
      words: [{ id: 'a2l2-reise', german: 'die Reise', english: 'the journey / trip', french: 'le voyage', gender: 'die', syllables: ['REI', 'se'], pronunciation: 'dee RYE-ze', example: { de: 'Die Reise war schön.', en: 'The trip was nice.', fr: 'Le voyage était beau.' } }, { id: 'a2l2-urlaub', german: 'der Urlaub', english: 'the holiday / vacation', french: 'les vacances', gender: 'der', syllables: ['UR', 'laub'], pronunciation: 'dair OOR-lowp', example: { de: 'Im Urlaub bin ich nach Italien gefahren.', en: 'On holiday I travelled to Italy.', fr: 'En vacances, je suis allé en Italie.' } }, { id: 'a2l2-fliegen', german: 'fliegen', english: 'to fly', french: 'voler / prendre l’avion', gender: null, syllables: ['FLIE', 'gen'], pronunciation: 'FLEE-gen', example: { de: 'Ich bin nach Spanien geflogen.', en: 'I flew to Spain.', fr: 'J’ai pris l’avion pour l’Espagne.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l2-e11', prompt: 'How did Sara travel to Spain?', promptFr: 'Comment Sara est-elle allée en Espagne ?', options: ['She flew', 'She drove', 'She took the train'], optionsFr: ['En avion', 'En voiture', 'En train'], answer: 0, explain: 'She says: “Ich bin nach Spanien geflogen.”', explainFr: 'Elle dit : « Ich bin nach Spanien geflogen. »', hint: 'Look for “geflogen”.', hintFr: 'Cherche « geflogen ».' } },

    { kind: 'wordgroup', title: 'Bewegungsverben', titleFr: 'Verbes de mouvement',
      items: [{ id: 'a2l2-gehen', german: 'gehen', english: 'to go / walk', french: 'aller / marcher', gender: null, syllables: ['GE', 'hen'], pronunciation: 'GAY-en', example: { de: 'Ich bin ins Museum gegangen.', en: 'I went to the museum.', fr: 'Je suis allé au musée.' } }, { id: 'a2l2-bleiben', german: 'bleiben', english: 'to stay', french: 'rester', gender: null, syllables: ['BLEI', 'ben'], pronunciation: 'BLY-ben', example: { de: 'Ich bin zu Hause geblieben.', en: 'I stayed at home.', fr: 'Je suis resté à la maison.' } }, { id: 'a2l2-flughafen', german: 'der Flughafen', english: 'the airport', french: 'l’aéroport', gender: 'der', syllables: ['FLUG', 'ha', 'fen'], pronunciation: 'dair FLOOK-hah-fen', example: { de: 'Wir sind zum Flughafen gefahren.', en: 'We drove to the airport.', fr: 'Nous sommes allés à l’aéroport.' } }, { id: 'a2l2-schon', german: 'schon', english: 'already', french: 'déjà', gender: null, syllables: ['SCHON'], pronunciation: 'shohn', example: { de: 'Bist du schon angekommen?', en: 'Have you arrived already?', fr: 'Es-tu déjà arrivé ?' } }, { id: 'a2l2-pünktlich', german: 'pünktlich', english: 'on time / punctual', french: 'à l’heure / ponctuel', gender: null, syllables: ['PÜNKT', 'lich'], pronunciation: 'PUENKT-likh', example: { de: 'Der Zug war pünktlich.', en: 'The train was on time.', fr: 'Le train était à l’heure.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l2-sein-perfekt', title: 'The Perfekt with sein', titleFr: 'Le Perfekt avec sein',
      lead: 'Verbs of movement and change use sein. So do bleiben and sein itself.',
      leadFr: 'Les verbes de mouvement et de changement utilisent sein. bleiben et sein aussi.',
      explanationMd: 'Verbs that describe **movement from A to B** or a **change of state** make the Perfekt with **sein**: **Ich bin nach Berlin gefahren.** **bleiben** and **sein** also take **sein**: **Ich bin zu Hause geblieben. Er ist krank gewesen.** The frame is the same: **sein** in **position 2**, participle at the **end**. When a verb takes an **accusative object** (you do something *to* something) it usually takes **haben**.',
      explanationMdFr: 'Les verbes qui décrivent un **mouvement de A à B** ou un **changement d’état** forment le Perfekt avec **sein** : **Ich bin nach Berlin gefahren.** **bleiben** et **sein** prennent aussi **sein** : **Ich bin zu Hause geblieben. Er ist krank gewesen.** Le cadre est le même : **sein** en **position 2**, participe à la **fin**. Quand un verbe a un **complément à l’accusatif** (on fait quelque chose *à* quelque chose), il prend en général **haben**.',
      tables: [{ title: 'Movement participles', titleFr: 'Participes de mouvement', headers: ['Infinitive', 'Participle', 'Example'], headersFr: ['Infinitif', 'Participe', 'Exemple'],
        rows: [['gehen', 'gegangen', 'Wir sind ins Museum gegangen.'], ['fahren', 'gefahren', 'Ich bin nach Berlin gefahren.'], ['kommen', 'gekommen', 'Sie ist um zehn Uhr gekommen.'], ['fliegen', 'geflogen', 'Ich bin nach Spanien geflogen.'], ['bleiben', 'geblieben', 'Ich bin zu Hause geblieben.'], ['sein', 'gewesen', 'Er ist krank gewesen.']],
        rowsFr: [['gehen', 'gegangen', 'Wir sind ins Museum gegangen.'], ['fahren', 'gefahren', 'Ich bin nach Berlin gefahren.'], ['kommen', 'gekommen', 'Sie ist um zehn Uhr gekommen.'], ['fliegen', 'geflogen', 'Ich bin nach Spanien geflogen.'], ['bleiben', 'geblieben', 'Ich bin zu Hause geblieben.'], ['sein', 'gewesen', 'Er ist krank gewesen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'nach Spanien', role: 'place' }, { text: 'geflogen.', role: 'verb' }], en: 'I flew to Spain.', fr: 'Je suis allée en Espagne en avion.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'sind', role: 'verb' }, { text: 'jeden Tag', role: 'time' }, { text: 'ins Museum', role: 'place' }, { text: 'gegangen.', role: 'verb' }], en: 'We went to the museum every day.', fr: 'Nous sommes allés au musée tous les jours.' },
      ],
      contrast: {
        a: { label: 'sein: movement, change', labelFr: 'sein : mouvement, changement', note: 'to a place; staying; being', noteFr: 'vers un lieu ; rester ; être', examples: [g('Ich bin nach Berlin gefahren.', 'I went to Berlin.', 'Je suis allé à Berlin.'), g('Er ist krank gewesen.', 'He was ill.', 'Il a été malade.')] },
        b: { label: 'haben: action on something', labelFr: 'haben : action sur quelque chose', note: 'with an accusative object', noteFr: 'avec un complément à l’accusatif', examples: [g('Ich habe den Zug genommen.', 'I took the train.', 'J’ai pris le train.'), g('Ich habe einen Film gesehen.', 'I watched a film.', 'J’ai vu un film.')] },
      },
      examples: [
        g('Ich bin nach Spanien geflogen.', 'I flew to Spain.', 'Je suis allée en Espagne en avion.'),
        g('Sie ist um zehn Uhr gekommen.', 'She came at ten o’clock.', 'Elle est venue à dix heures.'),
        g('Wir sind nach Hause gegangen.', 'We went home.', 'Nous sommes rentrés.'),
        g('Er ist krank gewesen.', 'He was ill.', 'Il a été malade.'),
        g('Ich bin zu Hause geblieben.', 'I stayed at home.', 'Je suis resté à la maison.'),
        g('Wir sind zum Flughafen gefahren.', 'We drove to the airport.', 'Nous sommes allés à l’aéroport.'),
        g('Bist du schon angekommen?', 'Have you arrived already?', 'Es-tu déjà arrivé ?'),
      ],
      mistakes: [
        { wrong: 'Ich habe nach Berlin gefahren.', right: 'Ich bin nach Berlin gefahren.', why: 'Movement to a place takes sein.', whyFr: 'Un mouvement vers un lieu prend sein.' },
        { wrong: 'Wir haben zu Hause geblieben.', right: 'Wir sind zu Hause geblieben.', why: 'bleiben takes sein.', whyFr: 'bleiben prend sein.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l2-e1', prompt: 'Ich ___ nach Berlin gefahren. (sein — ich-form)', answer: 'bin', hint: 'movement verbs use "sein": ich bin', hintFr: 'les verbes de mouvement utilisent « sein » : ich bin' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l2-e2', prompt: 'Which verb uses "sein" in the Perfekt?', promptFr: 'Quel verbe utilise « sein » au Perfekt ?', options: ['kaufen', 'gehen', 'kochen'], answer: 1, explain: '"gehen" is a movement verb → sein: ich bin gegangen.', explainFr: '« gehen » est un verbe de mouvement → sein : ich bin gegangen.', hint: 'Which verb means a movement?', hintFr: 'Quel verbe exprime un mouvement ?' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l2-e4', pairs: [{ de: 'gehen', en: 'gegangen', fr: 'gegangen' }, { de: 'fliegen', en: 'geflogen', fr: 'geflogen' }, { de: 'kommen', en: 'gekommen', fr: 'gekommen' }], hint: 'Match each verb to its participle.', hintFr: 'Associe chaque verbe à son participe.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l2-e9', prompt: 'Wir ___ ins Kino gegangen. (sein — wir-form)', answer: 'sind', hint: 'wir + sein = wir sind', hintFr: 'wir + sein = wir sind' } },

    // ───────────── 2 · Separable verbs ─────────────
    { kind: 'chapter', title: 'Trennbare Verben im Perfekt', titleFr: 'Verbes séparables au Perfekt', blurb: 'The ge- goes in the middle.', blurbFr: 'Le ge- va au milieu.' },

    { kind: 'situation', title: 'Am Flughafen', titleFr: 'À l’aéroport',
      setting: 'Sara tells Nils about the day she arrived.', settingFr: 'Sara raconte à Nils le jour de son arrivée.',
      lines: [
        line('Nils', 'Wann bist du angekommen?', 'When did you arrive?', 'Quand es-tu arrivée ?'),
        line('Sara', 'Um zehn Uhr. Der Zug ist pünktlich angekommen.', 'At ten o’clock. The train arrived on time.', 'À dix heures. Le train est arrivé à l’heure.'),
        line('Nils', 'Und der Bus zum Hotel?', 'And the bus to the hotel?', 'Et le bus pour l’hôtel ?'),
        line('Sara', 'Der Bus ist schon um acht abgefahren. Wir sind mit dem Taxi gefahren.', 'The bus had already left at eight. We took a taxi.', 'Le bus était déjà parti à huit heures. Nous avons pris un taxi.'),
        line('Nils', 'Und am Abend?', 'And in the evening?', 'Et le soir ?'),
        line('Sara', 'Am Abend haben wir im Supermarkt eingekauft.', 'In the evening we did the shopping at the supermarket.', 'Le soir, nous avons fait les courses au supermarché.'),
      ],
      words: [{ id: 'a2l2-ankommen', german: 'ankommen', english: 'to arrive', french: 'arriver', gender: null, syllables: ['AN', 'kom', 'men'], pronunciation: 'AHN-kom-men', example: { de: 'Der Zug ist pünktlich angekommen.', en: 'The train arrived on time.', fr: 'Le train est arrivé à l’heure.' } }, { id: 'a2l2-abfahren', german: 'abfahren', english: 'to depart / leave', french: 'partir', gender: null, syllables: ['AB', 'fah', 'ren'], pronunciation: 'AHP-fah-ren', example: { de: 'Der Bus ist um acht abgefahren.', en: 'The bus left at eight.', fr: 'Le bus est parti à huit heures.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l2-e12', prompt: 'How did Sara get to the hotel?', promptFr: 'Comment Sara est-elle allée à l’hôtel ?', options: ['By taxi', 'By bus', 'On foot'], optionsFr: ['En taxi', 'En bus', 'À pied'], answer: 0, explain: 'The bus had left, so: “Wir sind mit dem Taxi gefahren.”', explainFr: 'Le bus était parti, donc : « Wir sind mit dem Taxi gefahren. »', hint: 'The bus had already left.', hintFr: 'Le bus était déjà parti.' } },

    { kind: 'grammar', note: {
      id: 'a2l2-trennbar', title: 'Separable verbs in the Perfekt', titleFr: 'Verbes séparables au Perfekt',
      lead: 'The ge- goes between the prefix and the stem: an + ge + kommen = angekommen.',
      leadFr: 'Le ge- va entre le préfixe et le radical : an + ge + kommen = angekommen.',
      explanationMd: 'A **separable verb** puts **-ge-** **between** the prefix and the stem: **ankommen → angekommen**, **abfahren → abgefahren**, **einkaufen → eingekauft**. The participle stays **in one piece** at the end of the sentence. The auxiliary follows the usual rule: **sein** for movement (**angekommen, abgefahren**), **haben** otherwise (**eingekauft**).',
      explanationMdFr: 'Un **verbe séparable** place **-ge-** **entre** le préfixe et le radical : **ankommen → angekommen**, **abfahren → abgefahren**, **einkaufen → eingekauft**. Le participe reste **d’un seul bloc** à la fin de la phrase. L’auxiliaire suit la règle habituelle : **sein** pour un mouvement (**angekommen, abgefahren**), **haben** sinon (**eingekauft**).',
      tables: [{ title: 'Separable participles', titleFr: 'Participes séparables', headers: ['Infinitive', 'Participle', 'Auxiliary + example'], headersFr: ['Infinitif', 'Participe', 'Auxiliaire + exemple'],
        rows: [['ankommen', 'angekommen', 'sein: Der Zug ist angekommen.'], ['abfahren', 'abgefahren', 'sein: Der Bus ist abgefahren.'], ['einkaufen', 'eingekauft', 'haben: Ich habe eingekauft.'], ['aufstehen', 'aufgestanden', 'sein: Ich bin früh aufgestanden.'], ['mitkommen', 'mitgekommen', 'sein: Er ist mitgekommen.']],
        rowsFr: [['ankommen', 'angekommen', 'sein : Der Zug ist angekommen.'], ['abfahren', 'abgefahren', 'sein : Der Bus ist abgefahren.'], ['einkaufen', 'eingekauft', 'haben : Ich habe eingekauft.'], ['aufstehen', 'aufgestanden', 'sein : Ich bin früh aufgestanden.'], ['mitkommen', 'mitgekommen', 'sein : Er ist mitgekommen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Zug', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'pünktlich', role: 'other' }, { text: 'angekommen.', role: 'verb' }], en: 'The train arrived on time.', fr: 'Le train est arrivé à l’heure.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'im Supermarkt', role: 'place' }, { text: 'eingekauft.', role: 'verb' }], en: 'I did the shopping at the supermarket.', fr: 'J’ai fait les courses au supermarché.' },
      ],
      contrast: {
        a: { label: 'Present: split', labelFr: 'Présent : séparé', note: 'Der Zug kommt an.', noteFr: 'Der Zug kommt an.', examples: [g('Der Zug kommt um zehn an.', 'The train arrives at ten.', 'Le train arrive à dix heures.'), g('Der Bus fährt um acht ab.', 'The bus leaves at eight.', 'Le bus part à huit heures.')] },
        b: { label: 'Perfekt: one block', labelFr: 'Perfekt : un seul bloc', note: 'ist angekommen', noteFr: 'ist angekommen', examples: [g('Der Zug ist um zehn angekommen.', 'The train arrived at ten.', 'Le train est arrivé à dix heures.'), g('Der Bus ist um acht abgefahren.', 'The bus left at eight.', 'Le bus est parti à huit heures.')] },
      },
      examples: [
        g('Der Zug ist pünktlich angekommen.', 'The train arrived on time.', 'Le train est arrivé à l’heure.'),
        g('Der Bus ist um acht abgefahren.', 'The bus left at eight.', 'Le bus est parti à huit heures.'),
        g('Ich habe im Supermarkt eingekauft.', 'I shopped at the supermarket.', 'J’ai fait les courses au supermarché.'),
        g('Bist du schon angekommen?', 'Have you arrived already?', 'Es-tu déjà arrivé ?'),
        g('Ich bin früh aufgestanden.', 'I got up early.', 'Je me suis levé tôt.'),
        g('Wir sind zum Flughafen gefahren.', 'We drove to the airport.', 'Nous sommes allés à l’aéroport.'),
      ],
      mistakes: [
        { wrong: 'Der Zug ist geankommen.', right: 'Der Zug ist angekommen.', why: 'ge- goes after the prefix, not before: an-ge-kommen.', whyFr: 'ge- va après le préfixe, pas avant : an-ge-kommen.' },
        { wrong: 'Ich habe eingekaufen im Supermarkt.', right: 'Ich habe im Supermarkt eingekauft.', why: 'The participle (eingekauft) goes to the very end.', whyFr: 'Le participe (eingekauft) va tout à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l2-e6', prompt: 'Der Zug ist pünktlich ___. (ankommen → participle)', answer: 'angekommen', hint: 'separable verb: an + ge + kommen', hintFr: 'verbe à particule : an + ge + kommen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l2-e7', prompt: 'What is the participle of "abfahren"?', promptFr: 'Quel est le participe de « abfahren » ?', options: ['abgefahren', 'gefahrab', 'abfahrt'], answer: 0, explain: 'Separable: ab + ge + fahren → abgefahren.', explainFr: 'Séparable : ab + ge + fahren → abgefahren.', hint: 'Put -ge- after the prefix "ab".', hintFr: 'Mets -ge- après la particule « ab ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l2-e3', tokens: ['gefahren', 'bin', 'nach', 'Ich', 'Italien'], answer: ['Ich', 'bin', 'nach', 'Italien', 'gefahren'], hint: 'sein in position 2, participle at the end.', hintFr: 'sein en position 2, participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l2-e8', tokens: ['geblieben', 'Hause', 'bin', 'zu', 'Ich'], answer: ['Ich', 'bin', 'zu', 'Hause', 'geblieben'], hint: '"bleiben" takes sein; participle at the end.', hintFr: '« bleiben » prend sein ; participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l2-e5', prompt: 'Listen. How did Sara travel to Spain?', promptFr: 'Écoute. Comment Sara est-elle allée en Espagne ?', audio: { ttsText: 'Im Urlaub bin ich nach Spanien geflogen. Es war toll.' }, options: ['She flew', 'She drove', 'She stayed home'], optionsFr: ['Elle a pris l’avion', 'Elle a conduit', 'Elle est restée chez elle'], answer: 0, hint: 'Listen for the participle after "bin ich nach Spanien".', hintFr: 'Écoute le participe après « bin ich nach Spanien ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l2-e10', prompt: 'Listen. When did the bus leave?', promptFr: 'Écoute. Quand le bus est-il parti ?', audio: { ttsText: 'Der Bus ist schon um acht Uhr abgefahren.' }, options: ['At eight', 'At nine', 'At ten'], optionsFr: ['À huit heures', 'À neuf heures', 'À dix heures'], answer: 0, hint: 'Listen for the time before "abgefahren".', hintFr: 'Écoute l’heure avant « abgefahren ».' } },

    { kind: 'pronunciation', focus: 'The "ei" is "eye" (Reise, bleiben) and "eu" is "oy" (Deutschland); long "u" in Urlaub', focusFr: 'Le « ei » est « aï » (Reise, bleiben) et « eu » est « oï » (Deutschland) ; « u » long dans Urlaub', items: [{ id: 'a2l2-reise-pron', german: 'Reise', english: 'journey', french: 'voyage', gender: null, syllables: ['REI', 'se'], pronunciation: 'RYE-ze', example: { de: 'Die Reise war lang.', en: 'The journey was long.', fr: 'Le voyage était long.' } }, { id: 'a2l2-urlaub-pron', german: 'Urlaub', english: 'holiday', french: 'vacances', gender: null, syllables: ['UR', 'laub'], pronunciation: 'OOR-lowp', example: { de: 'Der Urlaub war schön.', en: 'The holiday was lovely.', fr: 'Les vacances étaient belles.' } }] },

    { kind: 'wrapup',
      summary: 'You can now tell about a trip: **sein** + participle for movement (**gefahren, geflogen, gegangen, gekommen, geblieben, gewesen**) and **separable verbs** with **-ge-** in the middle (**angekommen, abgefahren, eingekauft**). 🎉',
      summaryFr: 'Tu sais maintenant raconter un voyage : **sein** + participe pour le mouvement (**gefahren, geflogen, gegangen, gekommen, geblieben, gewesen**) et les **verbes séparables** avec **-ge-** au milieu (**angekommen, abgefahren, eingekauft**). 🎉',
      card: { title: 'The Perfekt with sein on one page', titleFr: 'Le Perfekt avec sein en une page', sections: [
        { heading: 'sein or haben?', headingFr: 'sein ou haben ?', rows: [g('movement or change → sein', 'Ich bin gefahren. Ich bin geblieben.', 'Ich bin gefahren. Ich bin geblieben.'), g('action on something → haben', 'Ich habe einen Film gesehen.', 'Ich habe einen Film gesehen.')] },
        { heading: 'Participles', headingFr: 'Participes', rows: [g('gehen → gegangen · fahren → gefahren · kommen → gekommen', 'ge-…-en', 'ge-…-en'), g('fliegen → geflogen · bleiben → geblieben · sein → gewesen', 'ge-…-en', 'ge-…-en')] },
        { heading: 'Separable verbs', headingFr: 'Verbes séparables', rows: [g('ankommen → angekommen · abfahren → abgefahren', '-ge- in the middle', '-ge- au milieu'), g('einkaufen → eingekauft', 'haben', 'haben')] },
      ] } },
  ],
};
