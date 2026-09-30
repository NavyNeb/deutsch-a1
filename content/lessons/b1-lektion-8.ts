import type { Lesson } from '../types';

export const b1lektion8: Lesson = {
  id: 'b1-l8', level: 'B1', module: 4, number: 14,
  title: { de: 'Vorher und nachher', en: 'Before and after', fr: 'Avant et après' },
  theme: 'The past perfect (Plusquamperfekt) and telling events in order with "nachdem"',
  themeFr: 'Le plus-que-parfait (Plusquamperfekt) et l’ordre des événements avec « nachdem »',
  goals: ['Form the Plusquamperfekt (hatte/war + participle)', 'Show that one event happened before another', 'Use "nachdem" with the Plusquamperfekt', 'Order events with bevor, danach, zuerst'],
  goalsFr: ['Former le plus-que-parfait (hatte/war + participe)', 'Montrer qu’un événement a eu lieu avant un autre', 'Utiliser « nachdem » avec le plus-que-parfait', 'Ordonner les événements avec bevor, danach, zuerst'],
  steps: [
    { kind: 'intro', title: 'Was war zuerst? ⏮️', titleFr: 'Qu’est-ce qui s’est passé d’abord ? ⏮️',
      scene: 'Telling a story and making the order of events clear.', sceneFr: 'On raconte une histoire en clarifiant l’ordre des événements.',
      goals: ['Build the Plusquamperfekt', 'Express "had done" before another past event', 'Use "nachdem"', 'Sequence with bevor/danach/zuerst'],
      goalsFr: ['Construire le plus-que-parfait', 'Exprimer « avait fait » avant un autre passé', 'Utiliser « nachdem »', 'Séquencer avec bevor/danach/zuerst'] },

    { kind: 'vocab', item: { id: 'b1l8-nachdem', german: 'nachdem', english: 'after (conjunction)', french: 'après que', gender: null, syllables: ['nach', 'DEM'], pronunciation: 'nahkh-DAYM', example: { de: 'Nachdem ich gegessen hatte, ging ich.', en: 'After I had eaten, I left.', fr: 'Après avoir mangé, je suis parti.' } } },
    { kind: 'vocab', item: { id: 'b1l8-bevor', german: 'bevor', english: 'before (conjunction)', french: 'avant que', gender: null, syllables: ['be', 'VOR'], pronunciation: 'be-FOR', example: { de: 'Bevor ich gehe, esse ich.', en: 'Before I go, I eat.', fr: 'Avant de partir, je mange.' } } },
    { kind: 'vocab', item: { id: 'b1l8-vorher', german: 'vorher', english: 'beforehand', french: 'avant / auparavant', gender: null, syllables: ['VOR', 'her'], pronunciation: 'FOR-hair', example: { de: 'Ich hatte vorher schon gegessen.', en: 'I had already eaten beforehand.', fr: 'J’avais déjà mangé avant.' } } },
    { kind: 'vocab', item: { id: 'b1l8-danach', german: 'danach', english: 'afterwards', french: 'ensuite', gender: null, syllables: ['da', 'NACH'], pronunciation: 'dah-NAHKH', example: { de: 'Danach sind wir ins Kino gegangen.', en: 'Afterwards we went to the cinema.', fr: 'Ensuite, nous sommes allés au cinéma.' } } },
    { kind: 'vocab', item: { id: 'b1l8-zuerst', german: 'zuerst', english: 'first / at first', french: 'd’abord', gender: null, syllables: ['zu', 'ERST'], pronunciation: 'tsoo-AIRST', example: { de: 'Zuerst mache ich die Hausaufgaben.', en: 'First I do the homework.', fr: 'D’abord, je fais les devoirs.' } } },
    { kind: 'vocab', item: { id: 'b1l8-passieren', german: 'passieren', english: 'to happen', french: 'se passer / arriver', gender: null, syllables: ['pa', 'SSIE', 'ren'], pronunciation: 'pah-SEE-ren', example: { de: 'Was ist passiert?', en: 'What happened?', fr: 'Que s’est-il passé ?' } } },
    { kind: 'vocab', item: { id: 'b1l8-ereignis', german: 'das Ereignis', english: 'the event', french: 'l’événement', gender: 'das', syllables: ['er', 'EIG', 'nis'], pronunciation: 'dahs air-EYE-gnis', example: { de: 'Ein wichtiges Ereignis.', en: 'An important event.', fr: 'Un événement important.' } } },
    { kind: 'vocab', item: { id: 'b1l8-bereits', german: 'bereits', english: 'already', french: 'déjà', gender: null, syllables: ['be', 'REITS'], pronunciation: 'be-RYETS', example: { de: 'Der Zug war bereits abgefahren.', en: 'The train had already left.', fr: 'Le train était déjà parti.' } } },
    { kind: 'vocab', item: { id: 'b1l8-ploetzlich', german: 'plötzlich', english: 'suddenly', french: 'soudain', gender: null, syllables: ['PLÖTZ', 'lich'], pronunciation: 'PLOETS-likh', example: { de: 'Plötzlich klingelte das Telefon.', en: 'Suddenly the phone rang.', fr: 'Soudain, le téléphone a sonné.' } } },
    { kind: 'vocab', item: { id: 'b1l8-erledigen', german: 'erledigen', english: 'to get done / deal with', french: 'régler / faire', gender: null, syllables: ['er', 'LE', 'di', 'gen'], pronunciation: 'air-LAY-di-gen', example: { de: 'Ich habe alles erledigt.', en: 'I got everything done.', fr: 'J’ai tout réglé.' } } },

    { kind: 'grammar', note: {
      id: 'b1l8-plusquam', title: 'The Plusquamperfekt', titleFr: 'Le plus-que-parfait',
      explanationMd: 'The Plusquamperfekt describes something that happened **before** another past event. Form it like the Perfekt but with **hatte/war** (the Präteritum of haben/sein) + participle:\n\n- Ich **hatte** schon **gegessen**. — I had already eaten.\n- Der Zug **war** bereits **abgefahren**. — The train had already left.',
      explanationMdFr: 'Le plus-que-parfait décrit une action qui a eu lieu **avant** un autre événement passé. Forme-le comme le Perfekt mais avec **hatte/war** (le prétérit de haben/sein) + participe :\n\n- Ich **hatte** schon **gegessen**. — J’avais déjà mangé.\n- Der Zug **war** bereits **abgefahren**. — Le train était déjà parti.',
      examples: [
        { de: 'Als ich ankam, war der Film schon gestartet.', en: 'When I arrived, the film had already started.', fr: 'Quand je suis arrivé, le film avait déjà commencé.' },
        { de: 'Wir hatten die Tickets vorher gekauft.', en: 'We had bought the tickets beforehand.', fr: 'Nous avions acheté les billets avant.' },
      ],
      diagram: 'satzklammer' } },

    { kind: 'grammar', note: {
      id: 'b1l8-nachdem-note', title: '"nachdem" + Plusquamperfekt', titleFr: '« nachdem » + plus-que-parfait',
      explanationMd: 'With **nachdem** (after), the earlier action is in the **Plusquamperfekt**, and the later action in the **Perfekt/Präteritum**:\n\n- **Nachdem** ich **gegessen hatte**, **ging** ich schlafen.\n- **Nachdem** wir **angekommen waren**, **haben** wir das Hotel gesucht.\n\nThe verb goes to the end of the nachdem-clause.',
      explanationMdFr: 'Avec **nachdem** (après que), l’action antérieure est au **plus-que-parfait**, et l’action postérieure au **Perfekt/prétérit** :\n\n- **Nachdem** ich **gegessen hatte**, **ging** ich schlafen.\n- **Nachdem** wir **angekommen waren**, **haben** wir das Hotel gesucht.\n\nLe verbe va à la fin de la subordonnée nachdem.',
      examples: [
        { de: 'Nachdem sie gelernt hatte, machte sie eine Pause.', en: 'After she had studied, she took a break.', fr: 'Après avoir étudié, elle a fait une pause.' },
        { de: 'Nachdem ich geduscht hatte, frühstückte ich.', en: 'After I had showered, I had breakfast.', fr: 'Après m’être douché, j’ai pris le petit-déjeuner.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l8-reihenfolge', title: 'Sequencing words', titleFr: 'Les mots de séquence',
      explanationMd: 'Order events clearly with:\n\n- **zuerst** (first) → **dann/danach** (then/afterwards) → **schließlich** (finally)\n- **bevor** (before) + a normal tense: **Bevor** ich gehe, esse ich.\n- **vorher** (beforehand), **später** (later)',
      explanationMdFr: 'Ordonne clairement les événements avec :\n\n- **zuerst** (d’abord) → **dann/danach** (puis/ensuite) → **schließlich** (enfin)\n- **bevor** (avant que) + un temps normal : **Bevor** ich gehe, esse ich.\n- **vorher** (avant), **später** (plus tard)',
      examples: [
        { de: 'Zuerst koche ich, danach esse ich.', en: 'First I cook, then I eat.', fr: 'D’abord je cuisine, ensuite je mange.' },
        { de: 'Bevor ich schlafe, lese ich ein Buch.', en: 'Before I sleep, I read a book.', fr: 'Avant de dormir, je lis un livre.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l8-e1', prompt: 'Ich ___ schon gegessen. (haben — Plusquamperfekt, ich)', answer: 'hatte', hint: 'Plusquamperfekt uses hatte + participle', hintFr: 'le plus-que-parfait utilise hatte + participe' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l8-e2', prompt: 'Der Zug ___ bereits abgefahren. (sein — Plusquamperfekt)', answer: 'war', hint: 'movement verb → war + participle', hintFr: 'verbe de mouvement → war + participe' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l8-e3', tokens: ['gegessen', 'ich', 'hatte', 'Nachdem'], answer: ['Nachdem', 'ich', 'gegessen', 'hatte'], hint: 'nachdem-clause: participle + hatte at the end.', hintFr: 'subordonnée nachdem : participe + hatte à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l8-e4', prompt: 'Which tense goes in the "nachdem"-clause?', promptFr: 'Quel temps va dans la subordonnée « nachdem » ?', options: ['Präsens', 'Plusquamperfekt', 'Futur'], answer: 1, explain: 'The earlier action (nachdem) uses the Plusquamperfekt.', explainFr: 'L’action antérieure (nachdem) utilise le plus-que-parfait.', hint: 'It happened before the other event.', hintFr: 'Elle a eu lieu avant l’autre événement.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l8-e5', pairs: [ { de: 'zuerst', en: 'first', fr: 'd’abord' }, { de: 'danach', en: 'afterwards', fr: 'ensuite' }, { de: 'bevor', en: 'before', fr: 'avant que' } ], hint: 'Match each sequencing word to its meaning.', hintFr: 'Associe chaque mot de séquence à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l8-e6', prompt: 'Listen. What had happened when Tom arrived?', promptFr: 'Écoute. Que s’était-il passé quand Tom est arrivé ?', audio: { ttsText: 'Als Tom ankam, war der Film schon zu Ende.' }, options: ['The film had already ended', 'The film was starting', 'Nothing happened'], optionsFr: ['Le film était déjà terminé', 'Le film commençait', 'Rien'], answer: 0, hint: 'Listen for "war … zu Ende".', hintFr: 'Écoute « war … zu Ende ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l8-e7', prompt: '___ ich schlafe, lese ich. (before)', answer: 'Bevor', hint: 'conjunction "before"', hintFr: 'conjonction « avant que »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l8-e8', prompt: 'Complete: "Nachdem wir angekommen ___, suchten wir das Hotel."', promptFr: 'Complète : « Nachdem wir angekommen ___, suchten wir das Hotel. »', options: ['hatten', 'waren', 'sind'], answer: 1, explain: '"ankommen" takes sein → waren angekommen.', explainFr: '« ankommen » prend sein → waren angekommen.', hint: 'Movement verb → war/waren.', hintFr: 'Verbe de mouvement → war/waren.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l8-e9', tokens: ['danach', 'wir', 'gingen', 'ins Kino'], answer: ['danach', 'gingen', 'wir', 'ins Kino'], hint: '"danach" in position 1 → verb second.', hintFr: '« danach » en position 1 → verbe en deuxième.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l8-e10', prompt: 'Listen. What did Mia do after studying?', promptFr: 'Écoute. Qu’a fait Mia après avoir étudié ?', audio: { ttsText: 'Nachdem ich gelernt hatte, habe ich eine Pause gemacht.' }, options: ['Took a break', 'Went to work', 'Cooked dinner'], optionsFr: ['Fait une pause', 'Allé travailler', 'Préparé le dîner'], answer: 0, hint: 'Listen to the main clause.', hintFr: 'Écoute la principale.' } },

    { kind: 'pronunciation', focus: 'Stress the second syllable: nachDEM, beVOR, daNACH, zuERST', focusFr: 'Accentue la deuxième syllabe : nachDEM, beVOR, daNACH, zuERST', items: [
      { id: 'b1l8-nachdem-pron', german: 'nachdem', english: 'after', french: 'après que', gender: null, syllables: ['nach', 'DEM'], pronunciation: 'nahkh-DAYM', example: { de: 'Nachdem ich aß.', en: 'After I ate.', fr: 'Après avoir mangé.' } },
      { id: 'b1l8-bereits-pron', german: 'bereits', english: 'already', french: 'déjà', gender: null, syllables: ['be', 'REITS'], pronunciation: 'be-RYETS', example: { de: 'Er war bereits weg.', en: 'He had already left.', fr: 'Il était déjà parti.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now use the **Plusquamperfekt** (hatte/war + participle) for an action **before** another past action, combine it with **nachdem** (Nachdem ich gegessen hatte, ging ich), and order events with zuerst, danach, bevor. 🎉',
      summaryFr: 'Tu sais maintenant utiliser le **plus-que-parfait** (hatte/war + participe) pour une action **avant** une autre action passée, le combiner avec **nachdem** (Nachdem ich gegessen hatte, ging ich), et ordonner les événements avec zuerst, danach, bevor. 🎉' },
  ],
};
