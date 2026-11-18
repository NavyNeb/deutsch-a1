import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion8: Lesson = {
  id: 'b1-l8', level: 'B1', module: 4, number: 14,
  title: { de: 'Vorher und nachher', en: 'Before and after', fr: 'Avant et après' },
  theme: 'The past perfect (Plusquamperfekt) and telling events in order with "nachdem"', themeFr: 'Le plus-que-parfait (Plusquamperfekt) et l’ordre des événements avec « nachdem »',
  goals: ['Form the Plusquamperfekt (hatte/war + participle)', 'Show that one event happened before another', 'Use "nachdem" with the Plusquamperfekt', 'Order events with bevor, danach, zuerst'], goalsFr: ['Former le plus-que-parfait (hatte/war + participe)', 'Montrer qu’un événement a eu lieu avant un autre', 'Utiliser « nachdem » avec le plus-que-parfait', 'Ordonner les événements avec bevor, danach, zuerst'],
  canDo: g('Ich kann mit dem Plusquamperfekt und „nachdem“ erzählen, was vorher geschah, und Ereignisse in eine klare Reihenfolge bringen.', 'I can use the Plusquamperfekt and “nachdem” to tell what happened before, and put events in a clear order.', 'Je sais utiliser le plus-que-parfait et « nachdem » pour dire ce qui s’est passé avant, et ordonner clairement des événements.'),
  steps: [
    { kind: 'intro', title: 'Davor und danach ⏳', titleFr: 'Avant et après ⏳',
      scene: 'Tom arrives late: when he got there, the film had already started — and he tells the whole day in order.', sceneFr: 'Tom arrive en retard : quand il est arrivé, le film avait déjà commencé — et il raconte toute la journée dans l’ordre.',
      goals: ['Form the Plusquamperfekt (hatte / war + participle)', 'Use nachdem with the Plusquamperfekt', 'Order events with zuerst, danach, bevor, vorher'],
      goalsFr: ['Former le plus-que-parfait (hatte / war + participe)', 'Utiliser nachdem avec le plus-que-parfait', 'Ordonner les événements avec zuerst, danach, bevor, vorher'] },

    // ───────────── 1 · Plusquamperfekt ─────────────
    { kind: 'chapter', title: 'Das Plusquamperfekt', titleFr: 'Le plus-que-parfait', blurb: 'hatte / war + participle.', blurbFr: 'hatte / war + participe.' },

    { kind: 'situation', title: 'Als ich ankam …', titleFr: 'Quand je suis arrivé …',
      setting: 'Tom tells a friend why he was late.', settingFr: 'Tom explique à un ami pourquoi il était en retard.',
      lines: [
        line('Freundin', 'Warum bist du so spät?', 'Why are you so late?', 'Pourquoi es-tu si en retard ?'),
        line('Tom', 'Als ich ankam, war der Film schon gestartet. Der Zug war bereits abgefahren. Was ist passiert?', 'When I arrived the film had already started. The train had already left. What happened?', 'Quand je suis arrivé, le film avait déjà commencé. Le train était déjà parti. Que s’est-il passé ?'),
        line('Freundin', 'Wir hatten die Tickets vorher gekauft. Ich hatte schon gegessen. Ein wichtiges Ereignis!', 'We had bought the tickets beforehand. I had already eaten. An important event!', 'Nous avions acheté les billets avant. J’avais déjà mangé. Un événement important !'),
        line('Tom', 'Als Tom ankam, war der Film schon zu Ende. Plötzlich klingelte das Telefon. Ich habe alles erledigt.', 'When Tom arrived the film was already over. Suddenly the phone rang. I have got everything done.', 'Quand Tom est arrivé, le film était déjà fini. Soudain, le téléphone a sonné. J’ai tout réglé.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l8-e11', prompt: 'What had happened when Tom arrived?', promptFr: 'Que s’était-il passé quand Tom est arrivé ?', options: ['The film had already ended', 'The film had not started', 'The cinema was closed'], optionsFr: ['Le film était déjà terminé', 'Le film n’avait pas commencé', 'Le cinéma était fermé'], answer: 0, explain: 'The text says: “Als Tom ankam, war der Film schon zu Ende.”', explainFr: 'Le texte dit : « Als Tom ankam, war der Film schon zu Ende. »', hint: 'Look for “schon zu Ende”.', hintFr: 'Cherche « schon zu Ende ».' } },

    { kind: 'wordgroup', title: 'Ereignisse und Zeit', titleFr: 'Événements et temps',
      items: [{ id: 'b1l8-passieren', german: 'passieren', english: 'to happen', french: 'se passer / arriver', gender: null, syllables: ['pa', 'SSIE', 'ren'], pronunciation: 'pah-SEE-ren', example: { de: 'Was ist passiert?', en: 'What happened?', fr: 'Que s’est-il passé ?' } }, { id: 'b1l8-ereignis', german: 'das Ereignis', english: 'the event', french: 'l’événement', gender: 'das', syllables: ['er', 'EIG', 'nis'], pronunciation: 'dahs air-EYE-gnis', example: { de: 'Ein wichtiges Ereignis.', en: 'An important event.', fr: 'Un événement important.' } }, { id: 'b1l8-bereits', german: 'bereits', english: 'already', french: 'déjà', gender: null, syllables: ['be', 'REITS'], pronunciation: 'be-RYETS', example: { de: 'Der Zug war bereits abgefahren.', en: 'The train had already left.', fr: 'Le train était déjà parti.' } }, { id: 'b1l8-erledigen', german: 'erledigen', english: 'to get done / deal with', french: 'régler / faire', gender: null, syllables: ['er', 'LE', 'di', 'gen'], pronunciation: 'air-LAY-di-gen', example: { de: 'Ich habe alles erledigt.', en: 'I got everything done.', fr: 'J’ai tout réglé.' } }, { id: 'b1l8-ploetzlich', german: 'plötzlich', english: 'suddenly', french: 'soudain', gender: null, syllables: ['PLÖTZ', 'lich'], pronunciation: 'PLOETS-likh', example: { de: 'Plötzlich klingelte das Telefon.', en: 'Suddenly the phone rang.', fr: 'Soudain, le téléphone a sonné.' } }, { id: 'b1l8-vorher', german: 'vorher', english: 'beforehand', french: 'avant / auparavant', gender: null, syllables: ['VOR', 'her'], pronunciation: 'FOR-hair', example: { de: 'Ich hatte vorher schon gegessen.', en: 'I had already eaten beforehand.', fr: 'J’avais déjà mangé avant.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l8-plusquamperfekt', title: 'The Plusquamperfekt', titleFr: 'Le plus-que-parfait',
      lead: 'hatte / war (Präteritum of haben / sein) + participle at the end. It shows what happened before another past event.',
      leadFr: 'hatte / war (prétérit de haben / sein) + participe à la fin. Il montre ce qui s’est passé avant un autre événement passé.',
      explanationMd: 'The **Plusquamperfekt** describes something that happened **before another past event**. Form it like the **Perfekt**, but with the **Präteritum** of **haben / sein**: **hatte / war + participle**: **Ich hatte schon gegessen. Der Zug war bereits abgefahren.** The **participle goes to the end**. Choose **hatte or war** exactly as in the **Perfekt** (**movement / change of state → war**). Typical signal words: **schon, bereits, vorher, davor, noch nicht**: **Wir hatten die Tickets vorher gekauft.** Use it **together with the Präteritum** of the later event: **Als ich ankam, war der Film schon gestartet.**',
      explanationMdFr: 'Le **plus-que-parfait** décrit quelque chose qui s’est passé **avant un autre événement passé**. Forme-le comme le **Perfekt**, mais avec le **prétérit** de **haben / sein** : **hatte / war + participe** : **Ich hatte schon gegessen. Der Zug war bereits abgefahren.** Le **participe va à la fin**. Choisis **hatte ou war** exactement comme au **Perfekt** (**mouvement / changement d’état → war**). Mots-signaux : **schon, bereits, vorher, davor, noch nicht** : **Wir hatten die Tickets vorher gekauft.** Utilise-le **avec le prétérit** de l’événement postérieur : **Als ich ankam, war der Film schon gestartet.**',
      tables: [{ title: 'Plusquamperfekt', titleFr: 'Plus-que-parfait', headers: ['Person', 'hatte + participle', 'war + participle'], headersFr: ['Personne', 'hatte + participe', 'war + participe'],
        rows: [['ich', 'hatte gegessen', 'war gefahren'], ['du', 'hattest gegessen', 'warst gefahren'], ['er / sie / es', 'hatte gegessen', 'war gefahren'], ['wir', 'hatten gegessen', 'waren gefahren'], ['ihr', 'hattet gegessen', 'wart gefahren'], ['sie / Sie', 'hatten gegessen', 'waren gefahren']],
        rowsFr: [['ich', 'hatte gegessen', 'war gefahren'], ['du', 'hattest gegessen', 'warst gefahren'], ['er / sie / es', 'hatte gegessen', 'war gefahren'], ['wir', 'hatten gegessen', 'waren gefahren'], ['ihr', 'hattet gegessen', 'wart gefahren'], ['sie / Sie', 'hatten gegessen', 'waren gefahren']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'hatte', role: 'verb' }, { text: 'schon', role: 'time' }, { text: 'gegessen.', role: 'verb' }], en: 'I had already eaten.', fr: 'J’avais déjà mangé.' },
        { parts: [{ text: 'Der Zug', role: 'subject' }, { text: 'war', role: 'verb' }, { text: 'bereits', role: 'time' }, { text: 'abgefahren.', role: 'verb' }], en: 'The train had already left.', fr: 'Le train était déjà parti.' },
      ],
      contrast: {
        a: { label: 'Perfekt', labelFr: 'Perfekt', note: 'a past event', noteFr: 'un événement passé', examples: [g('Ich habe gegessen.', 'I ate.', 'J’ai mangé.'), g('Der Zug ist abgefahren.', 'The train has left.', 'Le train est parti.')] },
        b: { label: 'Plusquamperfekt', labelFr: 'Plus-que-parfait', note: 'before another past event', noteFr: 'avant un autre événement passé', examples: [g('Ich hatte schon gegessen.', 'I had already eaten.', 'J’avais déjà mangé.'), g('Der Zug war bereits abgefahren.', 'The train had already left.', 'Le train était déjà parti.')] },
      },
      examples: [
        g('Ich hatte schon gegessen.', 'I had already eaten.', 'J’avais déjà mangé.'),
        g('Der Zug war bereits abgefahren.', 'The train had already left.', 'Le train était déjà parti.'),
        g('Als ich ankam, war der Film schon gestartet.', 'When I arrived the film had already started.', 'Quand je suis arrivé, le film avait déjà commencé.'),
        g('Wir hatten die Tickets vorher gekauft.', 'We had bought the tickets beforehand.', 'Nous avions acheté les billets avant.'),
        g('Er war schon gegangen, als wir kamen.', 'He had already gone when we came.', 'Il était déjà parti quand nous sommes arrivés.'),
        g('Sie hatte alles erledigt.', 'She had got everything done.', 'Elle avait tout réglé.'),
      ],
      mistakes: [
        { wrong: 'Ich hatte gegangen.', right: 'Ich war gegangen.', why: 'gehen is a movement verb: war.', whyFr: 'gehen est un verbe de mouvement : war.' },
        { wrong: 'Ich hatte gegessen schon.', right: 'Ich hatte schon gegessen.', why: 'The participle goes to the end.', whyFr: 'Le participe va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l8-e1', prompt: 'Ich ___ schon gegessen. (haben — Plusquamperfekt, ich)', answer: 'hatte', hint: 'Plusquamperfekt uses hatte + participle', hintFr: 'le plus-que-parfait utilise hatte + participe' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l8-e2', prompt: 'Der Zug ___ bereits abgefahren. (sein — Plusquamperfekt)', answer: 'war', hint: 'movement verb → war + participle', hintFr: 'verbe de mouvement → war + participe' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l8-e6', prompt: 'Listen. What had happened when Tom arrived?', promptFr: 'Écoute. Que s’était-il passé quand Tom est arrivé ?', audio: { ttsText: 'Als Tom ankam, war der Film schon zu Ende.' }, options: ['The film had already ended', 'The film was starting', 'Nothing happened'], optionsFr: ['Le film était déjà terminé', 'Le film commençait', 'Rien'], answer: 0, hint: 'Listen for "war … zu Ende".', hintFr: 'Écoute « war … zu Ende ».' } },

    // ───────────── 2 · nachdem ─────────────
    { kind: 'chapter', title: '„nachdem“ + Plusquamperfekt', titleFr: '« nachdem » + plus-que-parfait', blurb: 'The earlier action in the nachdem-clause.', blurbFr: 'L’action antérieure dans la proposition en nachdem.' },

    { kind: 'situation', title: 'Nachdem ich gelernt hatte', titleFr: 'Après avoir étudié',
      setting: 'Tom tells a friend about his day.', settingFr: 'Tom raconte sa journée à un ami.',
      lines: [
        line('Tom', 'Nachdem ich gegessen hatte, ging ich schlafen. Nachdem wir angekommen waren, haben wir das Hotel gesucht.', 'After I had eaten I went to sleep. After we had arrived we looked for the hotel.', 'Après avoir mangé, je suis allé dormir. Après être arrivés, nous avons cherché l’hôtel.'),
        line('Freundin', 'Nachdem sie gelernt hatte, machte sie eine Pause. Nachdem ich gelernt hatte, habe ich eine Pause gemacht.', 'After she had studied she took a break. After I had studied I took a break.', 'Après avoir étudié, elle a fait une pause. Après avoir étudié, j’ai fait une pause.'),
        line('Tom', 'Nachdem ich geduscht hatte, frühstückte ich. Nachdem ich gegessen hatte …', 'After I had showered I had breakfast. After I had eaten …', 'Après m’être douché, j’ai pris mon petit-déjeuner. Après avoir mangé …'),
      ],
      words: [{ id: 'b1l8-nachdem', german: 'nachdem', english: 'after (conjunction)', french: 'après que', gender: null, syllables: ['nach', 'DEM'], pronunciation: 'nahkh-DAYM', example: { de: 'Nachdem ich gegessen hatte, ging ich.', en: 'After I had eaten, I left.', fr: 'Après avoir mangé, je suis parti.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l8-nachdem', title: 'nachdem + Plusquamperfekt', titleFr: 'nachdem + plus-que-parfait',
      lead: 'The earlier action (nachdem-clause) is in the Plusquamperfekt, the later action in the Perfekt / Präteritum. Verb last in the nachdem-clause.',
      leadFr: 'L’action antérieure (proposition en nachdem) est au plus-que-parfait, l’action postérieure au Perfekt / prétérit. Verbe à la fin dans la proposition en nachdem.',
      explanationMd: 'With **nachdem** (after), the **earlier action** is in the **Plusquamperfekt** and the **later action** in the **Perfekt or Präteritum**: **Nachdem ich gegessen hatte, ging ich schlafen. Nachdem wir angekommen waren, haben wir das Hotel gesucht.** The **verb group goes to the end** of the **nachdem-clause**; the **main clause starts with the verb** when it comes second. In everyday speech many people use the **Perfekt in both parts**: **Nachdem ich gegessen habe, bin ich schlafen gegangen.** — but the **Plusquamperfekt** is the **correct, precise** choice for **writing and exams**.',
      explanationMdFr: 'Avec **nachdem** (après que), l’**action antérieure** est au **plus-que-parfait** et l’**action postérieure** au **Perfekt ou prétérit** : **Nachdem ich gegessen hatte, ging ich schlafen. Nachdem wir angekommen waren, haben wir das Hotel gesucht.** Le **groupe verbal va à la fin** de la **proposition en nachdem** ; la **principale commence par le verbe** quand elle vient en second. Dans la langue courante, beaucoup utilisent le **Perfekt dans les deux parties** : **Nachdem ich gegessen habe, bin ich schlafen gegangen.** — mais le **plus-que-parfait** est le choix **correct et précis** pour l’**écrit et les examens**.',
      tables: [{ title: 'nachdem', titleFr: 'nachdem', headers: ['nachdem-clause (earlier)', 'main clause (later)'], headersFr: ['proposition en nachdem (avant)', 'principale (après)'],
        rows: [['Nachdem ich gegessen hatte,', 'ging ich schlafen.'], ['Nachdem wir angekommen waren,', 'haben wir das Hotel gesucht.'], ['Nachdem sie gelernt hatte,', 'machte sie eine Pause.'], ['Nachdem ich geduscht hatte,', 'frühstückte ich.']],
        rowsFr: [['Nachdem ich gegessen hatte,', 'ging ich schlafen.'], ['Nachdem wir angekommen waren,', 'haben wir das Hotel gesucht.'], ['Nachdem sie gelernt hatte,', 'machte sie eine Pause.'], ['Nachdem ich geduscht hatte,', 'frühstückte ich.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Nachdem', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'gegessen hatte,', role: 'verb' }, { text: 'ging', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'schlafen.', role: 'verb' }], en: 'After I had eaten I went to sleep.', fr: 'Après avoir mangé, je suis allé dormir.' },
        { parts: [{ text: 'Nachdem', role: 'connector' }, { text: 'wir', role: 'subject' }, { text: 'angekommen waren,', role: 'verb' }, { text: 'haben', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'das Hotel', role: 'accusative' }, { text: 'gesucht.', role: 'verb' }], en: 'After we had arrived we looked for the hotel.', fr: 'Après être arrivés, nous avons cherché l’hôtel.' },
      ],
      contrast: {
        a: { label: 'nachdem = after', labelFr: 'nachdem = après', note: 'earlier action in the nachdem-clause', noteFr: 'action antérieure dans la proposition en nachdem', examples: [g('Nachdem ich gegessen hatte, ging ich schlafen.', 'After I had eaten I went to sleep.', 'Après avoir mangé, je suis allé dormir.'), g('Nachdem sie gelernt hatte, machte sie eine Pause.', 'After she had studied she took a break.', 'Après avoir étudié, elle a fait une pause.')] },
        b: { label: 'bevor = before', labelFr: 'bevor = avant', note: 'later action in the bevor-clause', noteFr: 'action postérieure dans la proposition en bevor', examples: [g('Bevor ich schlafe, lese ich ein Buch.', 'Before I sleep I read a book.', 'Avant de dormir, je lis un livre.'), g('Bevor wir ins Hotel gingen, aßen wir.', 'Before we went to the hotel we ate.', 'Avant d’aller à l’hôtel, nous avons mangé.')] },
      },
      examples: [
        g('Nachdem ich gegessen hatte, ging ich schlafen.', 'After I had eaten I went to sleep.', 'Après avoir mangé, je suis allé dormir.'),
        g('Nachdem wir angekommen waren, haben wir das Hotel gesucht.', 'After we had arrived we looked for the hotel.', 'Après être arrivés, nous avons cherché l’hôtel.'),
        g('Nachdem sie gelernt hatte, machte sie eine Pause.', 'After she had studied she took a break.', 'Après avoir étudié, elle a fait une pause.'),
        g('Nachdem ich geduscht hatte, frühstückte ich.', 'After I had showered I had breakfast.', 'Après m’être douché, j’ai pris mon petit-déjeuner.'),
        g('Nachdem er gegangen war, räumten wir auf.', 'After he had left we tidied up.', 'Après son départ, nous avons rangé.'),
        g('Nachdem ich gelernt hatte, habe ich eine Pause gemacht.', 'After I had studied I took a break.', 'Après avoir étudié, j’ai fait une pause.'),
      ],
      mistakes: [
        { wrong: 'Nachdem ich gegessen hatte, ich ging schlafen.', right: 'Nachdem ich gegessen hatte, ging ich schlafen.', why: 'After the nachdem-clause the main verb comes next.', whyFr: 'Après la proposition en nachdem, le verbe principal suit.' },
        { wrong: 'Nachdem ich ging, …', right: 'Nachdem ich gegangen war, …', why: 'The earlier action needs the Plusquamperfekt.', whyFr: 'L’action antérieure demande le plus-que-parfait.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l8-e3', tokens: ['gegessen', 'ich', 'hatte', 'Nachdem'], answer: ['Nachdem', 'ich', 'gegessen', 'hatte'], hint: 'nachdem-clause: participle + hatte at the end.', hintFr: 'subordonnée nachdem : participe + hatte à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l8-e4', prompt: 'Which tense goes in the "nachdem"-clause?', promptFr: 'Quel temps va dans la subordonnée « nachdem » ?', options: ['Präsens', 'Plusquamperfekt', 'Futur'], answer: 1, explain: 'The earlier action (nachdem) uses the Plusquamperfekt.', explainFr: 'L’action antérieure (nachdem) utilise le plus-que-parfait.', hint: 'It happened before the other event.', hintFr: 'Elle a eu lieu avant l’autre événement.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l8-e8', prompt: 'Complete: "Nachdem wir angekommen ___, suchten wir das Hotel."', promptFr: 'Complète : « Nachdem wir angekommen ___, suchten wir das Hotel. »', options: ['hatten', 'waren', 'sind'], answer: 1, explain: '"ankommen" takes sein → waren angekommen.', explainFr: '« ankommen » prend sein → waren angekommen.', hint: 'Movement verb → war/waren.', hintFr: 'Verbe de mouvement → war/waren.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l8-e10', prompt: 'Listen. What did Mia do after studying?', promptFr: 'Écoute. Qu’a fait Mia après avoir étudié ?', audio: { ttsText: 'Nachdem ich gelernt hatte, habe ich eine Pause gemacht.' }, options: ['Took a break', 'Went to work', 'Cooked dinner'], optionsFr: ['Fait une pause', 'Allé travailler', 'Préparé le dîner'], answer: 0, hint: 'Listen to the main clause.', hintFr: 'Écoute la principale.' } },

    // ───────────── 3 · Sequencing ─────────────
    { kind: 'chapter', title: 'Reihenfolge: zuerst, danach, bevor', titleFr: 'L’ordre : zuerst, danach, bevor', blurb: 'Tell the day in order.', blurbFr: 'Raconter la journée dans l’ordre.' },

    { kind: 'situation', title: 'Mein Tag in Reihenfolge', titleFr: 'Ma journée dans l’ordre',
      setting: 'Tom lists his day.', settingFr: 'Tom énumère sa journée.',
      lines: [
        line('Tom', 'Zuerst mache ich die Hausaufgaben. Zuerst koche ich, danach esse ich. Danach sind wir ins Kino gegangen.', 'First I do my homework. First I cook, then I eat. Afterwards we went to the cinema.', 'D’abord je fais mes devoirs. D’abord je cuisine, ensuite je mange. Après, nous sommes allés au cinéma.'),
        line('Tom', 'Bevor ich gehe, esse ich. Bevor ich schlafe, lese ich ein Buch. Ich hatte vorher schon gegessen.', 'Before I go I eat. Before I sleep I read a book. I had already eaten beforehand.', 'Avant de partir, je mange. Avant de dormir, je lis un livre. J’avais déjà mangé avant.'),
        line('Tom', 'Schließlich bin ich eingeschlafen. Später habe ich noch einmal angerufen.', 'Finally I fell asleep. Later I called once more.', 'Finalement, je me suis endormi. Plus tard, j’ai encore appelé.'),
      ],
      words: [{ id: 'b1l8-zuerst', german: 'zuerst', english: 'first / at first', french: 'd’abord', gender: null, syllables: ['zu', 'ERST'], pronunciation: 'tsoo-AIRST', example: { de: 'Zuerst mache ich die Hausaufgaben.', en: 'First I do the homework.', fr: 'D’abord, je fais les devoirs.' } }, { id: 'b1l8-danach', german: 'danach', english: 'afterwards', french: 'ensuite', gender: null, syllables: ['da', 'NACH'], pronunciation: 'dah-NAHKH', example: { de: 'Danach sind wir ins Kino gegangen.', en: 'Afterwards we went to the cinema.', fr: 'Ensuite, nous sommes allés au cinéma.' } }, { id: 'b1l8-bevor', german: 'bevor', english: 'before (conjunction)', french: 'avant que', gender: null, syllables: ['be', 'VOR'], pronunciation: 'be-FOR', example: { de: 'Bevor ich gehe, esse ich.', en: 'Before I go, I eat.', fr: 'Avant de partir, je mange.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l8-reihenfolge', title: 'Sequencing words', titleFr: 'Mots d’ordre',
      lead: 'zuerst → dann / danach → schließlich. bevor + normal tense. vorher, später as adverbs.',
      leadFr: 'zuerst → dann / danach → schließlich. bevor + temps normal. vorher, später comme adverbes.',
      explanationMd: 'Order events clearly with **adverbs**: **zuerst** (first) → **dann / danach** (then, afterwards) → **schließlich** (finally); **vorher** (beforehand), **später** (later). They take **position 1**, so the **verb comes second**: **Zuerst mache ich die Hausaufgaben. Danach gehen wir ins Kino.** **bevor** (before) is a **conjunction**: **verb last**, and **no Plusquamperfekt** needed — use a **normal tense**: **Bevor ich gehe, esse ich.** Compare: **nachdem** needs the **Plusquamperfekt** (earlier action), **bevor** does **not**.',
      explanationMdFr: 'Ordonne clairement les événements avec des **adverbes** : **zuerst** (d’abord) → **dann / danach** (puis, ensuite) → **schließlich** (finalement) ; **vorher** (auparavant), **später** (plus tard). Ils occupent la **position 1**, donc le **verbe vient en deuxième** : **Zuerst mache ich die Hausaufgaben. Danach gehen wir ins Kino.** **bevor** (avant que) est une **conjonction** : **verbe à la fin**, et **pas de plus-que-parfait** nécessaire — utilise un **temps normal** : **Bevor ich gehe, esse ich.** Compare : **nachdem** demande le **plus-que-parfait** (action antérieure), **bevor** **non**.',
      tables: [{ title: 'Sequencing', titleFr: 'Ordre', headers: ['Word', 'Type', 'Example'], headersFr: ['Mot', 'Type', 'Exemple'],
        rows: [['zuerst · dann · danach · schließlich', 'adverb → verb second', 'Zuerst koche ich, danach esse ich.'], ['vorher · später', 'adverb', 'Ich hatte vorher schon gegessen.'], ['bevor', 'conjunction → verb last', 'Bevor ich schlafe, lese ich.'], ['nachdem', 'conjunction → Plusquamperfekt', 'Nachdem ich gegessen hatte, …']],
        rowsFr: [['zuerst · dann · danach · schließlich', 'adverbe → verbe en deuxième', 'Zuerst koche ich, danach esse ich.'], ['vorher · später', 'adverbe', 'Ich hatte vorher schon gegessen.'], ['bevor', 'conjonction → verbe à la fin', 'Bevor ich schlafe, lese ich.'], ['nachdem', 'conjonction → plus-que-parfait', 'Nachdem ich gegessen hatte, …']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Zuerst', role: 'time' }, { text: 'koche', role: 'verb' }, { text: 'ich,', role: 'subject' }, { text: 'danach', role: 'time' }, { text: 'esse', role: 'verb' }, { text: 'ich.', role: 'subject' }], en: 'First I cook, then I eat.', fr: 'D’abord je cuisine, ensuite je mange.' },
        { parts: [{ text: 'Bevor', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'schlafe,', role: 'verb' }, { text: 'lese', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'ein Buch.', role: 'accusative' }], en: 'Before I sleep I read a book.', fr: 'Avant de dormir, je lis un livre.' },
      ],
      contrast: {
        a: { label: 'Adverbs: verb second', labelFr: 'Adverbes : verbe en deuxième', note: 'zuerst, danach', noteFr: 'zuerst, danach', examples: [g('Zuerst koche ich, danach esse ich.', 'First I cook, then I eat.', 'D’abord je cuisine, ensuite je mange.'), g('Danach sind wir ins Kino gegangen.', 'Afterwards we went to the cinema.', 'Après, nous sommes allés au cinéma.')] },
        b: { label: 'Conjunctions: verb last', labelFr: 'Conjonctions : verbe à la fin', note: 'bevor, nachdem', noteFr: 'bevor, nachdem', examples: [g('Bevor ich schlafe, lese ich ein Buch.', 'Before I sleep I read a book.', 'Avant de dormir, je lis un livre.'), g('Nachdem ich gegessen hatte, ging ich.', 'After I had eaten I left.', 'Après avoir mangé, je suis parti.')] },
      },
      examples: [
        g('Zuerst koche ich, danach esse ich.', 'First I cook, then I eat.', 'D’abord je cuisine, ensuite je mange.'),
        g('Bevor ich schlafe, lese ich ein Buch.', 'Before I sleep I read a book.', 'Avant de dormir, je lis un livre.'),
        g('Danach sind wir ins Kino gegangen.', 'Afterwards we went to the cinema.', 'Après, nous sommes allés au cinéma.'),
        g('Zuerst mache ich die Hausaufgaben.', 'First I do my homework.', 'D’abord je fais mes devoirs.'),
        g('Ich hatte vorher schon gegessen.', 'I had already eaten beforehand.', 'J’avais déjà mangé avant.'),
        g('Schließlich bin ich eingeschlafen.', 'Finally I fell asleep.', 'Finalement, je me suis endormi.'),
      ],
      mistakes: [
        { wrong: 'Danach wir gingen ins Kino.', right: 'Danach gingen wir ins Kino.', why: 'After danach the verb comes second.', whyFr: 'Après danach, le verbe vient en deuxième.' },
        { wrong: 'Bevor ich hatte gegessen, ging ich.', right: 'Bevor ich ging, aß ich.', why: 'bevor needs a normal tense and the verb last.', whyFr: 'bevor demande un temps normal et le verbe à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'match', id: 'b1l8-e5', pairs: [{ de: 'zuerst', en: 'first', fr: 'd’abord' }, { de: 'danach', en: 'afterwards', fr: 'ensuite' }, { de: 'bevor', en: 'before', fr: 'avant que' }], hint: 'Match each sequencing word to its meaning.', hintFr: 'Associe chaque mot de séquence à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l8-e7', prompt: '___ ich schlafe, lese ich. (before)', answer: 'Bevor', hint: 'conjunction "before"', hintFr: 'conjonction « avant que »' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l8-e9', tokens: ['danach', 'wir', 'gingen', 'ins Kino'], answer: ['danach', 'gingen', 'wir', 'ins Kino'], hint: '"danach" in position 1 → verb second.', hintFr: '« danach » en position 1 → verbe en deuxième.' } },

    { kind: 'pronunciation', focus: 'Stress the second syllable: nachDEM, beVOR, daNACH, zuERST', focusFr: 'Accentue la deuxième syllabe : nachDEM, beVOR, daNACH, zuERST', items: [{ id: 'b1l8-nachdem-pron', german: 'nachdem', english: 'after', french: 'après que', gender: null, syllables: ['nach', 'DEM'], pronunciation: 'nahkh-DAYM', example: { de: 'Nachdem ich aß.', en: 'After I ate.', fr: 'Après avoir mangé.' } }, { id: 'b1l8-bereits-pron', german: 'bereits', english: 'already', french: 'déjà', gender: null, syllables: ['be', 'REITS'], pronunciation: 'be-RYETS', example: { de: 'Er war bereits weg.', en: 'He had already left.', fr: 'Il était déjà parti.' } }] },

    { kind: 'wrapup',
      summary: 'You can now tell **what happened before** with the **Plusquamperfekt** (**hatte / war + participle**), use **nachdem**, and order events with **zuerst, danach, bevor**. 🎉',
      summaryFr: 'Tu sais maintenant dire **ce qui s’est passé avant** avec le **plus-que-parfait** (**hatte / war + participe**), utiliser **nachdem**, et ordonner les événements avec **zuerst, danach, bevor**. 🎉',
      card: { title: 'Before and after on one page', titleFr: 'Avant et après en une page', sections: [
        { heading: 'Plusquamperfekt', headingFr: 'Plus-que-parfait', rows: [g('hatte / war + participle', 'before another past event', 'avant un autre événement passé')] },
        { heading: 'nachdem', headingFr: 'nachdem', rows: [g('Nachdem ich gegessen hatte, ging ich.', 'earlier action: Plusquamperfekt', 'action antérieure : plus-que-parfait')] },
        { heading: 'Order', headingFr: 'Ordre', rows: [g('zuerst · danach · schließlich', 'verb second', 'verbe en deuxième'), g('bevor + verb last', 'normal tense', 'temps normal')] },
      ] } },
  ],
};
