import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion10: Lesson = {
  id: 'a2-l10', level: 'A2', module: 6, number: 22,
  title: { de: 'Früher war das anders', en: 'It was different back then', fr: 'Avant, c’était différent' },
  theme: 'The simple past (Präteritum) of sein, haben, and the modal verbs', themeFr: 'Le prétérit (Präteritum) de sein, haben et des verbes modaux',
  goals: ['Talk about the past with "war" and "hatte"', 'Use the Präteritum of modal verbs (konnte, musste …)', 'Tell a short story about your childhood', 'Know when to use Präteritum vs. Perfekt'], goalsFr: ['Parler du passé avec « war » et « hatte »', 'Utiliser le prétérit des modaux (konnte, musste …)', 'Raconter une courte histoire sur ton enfance', 'Savoir quand utiliser le prétérit ou le Perfekt'],
  canDo: g('Ich kann über früher erzählen: mit „war“, „hatte“ und den Modalverben im Präteritum, und weiß, wann Präteritum und wann Perfekt.', 'I can talk about the past with “war”, “hatte” and the modal verbs in the simple past, and know when to use Präteritum and when Perfekt.', 'Je sais parler du passé avec « war », « hatte » et les verbes modaux au prétérit, et je sais quand utiliser le prétérit ou le parfait.'),
  steps: [
    { kind: 'intro', title: 'Früher war alles anders 🕰️', titleFr: 'Avant, tout était différent 🕰️',
      scene: 'Anna and Tom share memories of their childhood and compare it with today.', sceneFr: 'Anna et Tom partagent leurs souvenirs d’enfance et les comparent à aujourd’hui.',
      goals: ['Use war and hatte', 'Use the Präteritum of the modal verbs (konnte, musste …)', 'Know when to use Präteritum vs Perfekt'],
      goalsFr: ['Utiliser war et hatte', 'Utiliser le prétérit des verbes modaux (konnte, musste …)', 'Savoir quand utiliser le prétérit ou le parfait'] },

    // ───────────── 1 · war and hatte ─────────────
    { kind: 'chapter', title: 'war und hatte', titleFr: 'war et hatte', blurb: 'Childhood and memories.', blurbFr: 'Enfance et souvenirs.' },

    { kind: 'situation', title: 'Meine Kindheit', titleFr: 'Mon enfance',
      setting: 'Anna and Tom look at old photos.', settingFr: 'Anna et Tom regardent de vieilles photos.',
      lines: [
        line('Tom', 'Erzähl mir eine Geschichte aus deiner Kindheit!', 'Tell me a story from your childhood!', 'Raconte-moi une histoire de ton enfance !'),
        line('Anna', 'Früher war alles anders. Damals hatte ich kein Handy, und das Leben war einfacher.', 'Everything was different back then. Back then I had no mobile phone, and life was simpler.', 'Avant, tout était différent. À l’époque, je n’avais pas de portable, et la vie était plus simple.'),
        line('Tom', 'Und die Schule?', 'And school?', 'Et l’école ?'),
        line('Anna', 'Ich war gern in der Schule. Als Kind war ich oft krank, aber ich war sehr glücklich.', 'I liked being at school. As a child I was often ill, but I was very happy.', 'J’aimais l’école. Enfant, j’étais souvent malade, mais j’étais très heureuse.'),
        line('Tom', 'Wir waren immer zusammen. Ich hatte nie Zeit und letztes Jahr war ich in Wien.', 'We were always together. I never had time and last year I was in Vienna.', 'Nous étions toujours ensemble. Je n’avais jamais le temps et l’an dernier j’étais à Vienne.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l10-e11', prompt: 'How was Anna as a child?', promptFr: 'Comment était Anna enfant ?', options: ['Often ill but happy', 'Always healthy', 'Always sad'], optionsFr: ['Souvent malade mais heureuse', 'Toujours en bonne santé', 'Toujours triste'], answer: 0, explain: 'She says: “Als Kind war ich oft krank, aber ich war sehr glücklich.”', explainFr: 'Elle dit : « Als Kind war ich oft krank, aber ich war sehr glücklich. »', hint: 'Look at Anna’s fourth line.', hintFr: 'Regarde la quatrième réplique d’Anna.' } },

    { kind: 'wordgroup', title: 'Erinnerungen', titleFr: 'Souvenirs',
      items: [{ id: 'a2l10-frueher', german: 'früher', english: 'earlier / in the past', french: 'avant / autrefois', gender: null, syllables: ['FRÜ', 'her'], pronunciation: 'FRUE-her', example: { de: 'Früher war alles anders.', en: 'In the past everything was different.', fr: 'Avant, tout était différent.' } }, { id: 'a2l10-damals', german: 'damals', english: 'back then', french: 'à l’époque', gender: null, syllables: ['DA', 'mals'], pronunciation: 'DAH-mahls', example: { de: 'Damals hatte ich kein Handy.', en: 'Back then I had no mobile.', fr: 'À l’époque, je n’avais pas de portable.' } }, { id: 'a2l10-kindheit', german: 'die Kindheit', english: 'the childhood', french: 'l’enfance', gender: 'die', syllables: ['KIND', 'heit'], pronunciation: 'dee KINT-hite', example: { de: 'Meine Kindheit war schön.', en: 'My childhood was lovely.', fr: 'Mon enfance était belle.' } }, { id: 'a2l10-schule', german: 'die Schule', english: 'the school', french: 'l’école', gender: 'die', syllables: ['SCHU', 'le'], pronunciation: 'dee SHOO-le', example: { de: 'Ich war gern in der Schule.', en: 'I liked being at school.', fr: 'J’aimais bien l’école.' } }, { id: 'a2l10-geschichte', german: 'die Geschichte', english: 'the story / history', french: 'l’histoire', gender: 'die', syllables: ['ge', 'SCHICH', 'te'], pronunciation: 'ge-SHIKH-te', example: { de: 'Erzähl mir eine Geschichte.', en: 'Tell me a story.', fr: 'Raconte-moi une histoire.' } }, { id: 'a2l10-leben', german: 'das Leben', english: 'the life', french: 'la vie', gender: 'das', syllables: ['LE', 'ben'], pronunciation: 'dahs LAY-ben', example: { de: 'Das Leben war einfacher.', en: 'Life was simpler.', fr: 'La vie était plus simple.' } }] },

    { kind: 'wordgroup', title: 'Wie oft?', titleFr: 'À quelle fréquence ?',
      items: [{ id: 'a2l10-oft', german: 'oft', english: 'often', french: 'souvent', gender: null, syllables: ['OFT'], pronunciation: 'oft', example: { de: 'Als Kind war ich oft krank.', en: 'As a child I was often ill.', fr: 'Enfant, j’étais souvent malade.' } }, { id: 'a2l10-nie', german: 'nie', english: 'never', french: 'jamais', gender: null, syllables: ['NIE'], pronunciation: 'nee', example: { de: 'Ich hatte nie Zeit.', en: 'I never had time.', fr: 'Je n’avais jamais le temps.' } }, { id: 'a2l10-immer', german: 'immer', english: 'always', french: 'toujours', gender: null, syllables: ['IM', 'mer'], pronunciation: 'IM-mer', example: { de: 'Wir waren immer zusammen.', en: 'We were always together.', fr: 'Nous étions toujours ensemble.' } }, { id: 'a2l10-letztes-jahr', german: 'letztes Jahr', english: 'last year', french: 'l’année dernière', gender: null, syllables: ['LETZ', 'tes', 'JAHR'], pronunciation: 'LETS-tes YAAR', example: { de: 'Letztes Jahr war ich in Wien.', en: 'Last year I was in Vienna.', fr: 'L’année dernière, j’étais à Vienne.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l10-sein-haben', title: 'Präteritum of sein and haben', titleFr: 'Prétérit de sein et haben',
      lead: 'For sein and haben Germans use the simple past even in speech: war, hatte.',
      leadFr: 'Pour sein et haben, les Allemands utilisent le prétérit même à l’oral : war, hatte.',
      explanationMd: 'For **sein** and **haben**, Germans use the **simple past (Präteritum)** even in **speech**: **sein** → **ich war, du warst, er / sie / es war, wir waren, ihr wart, sie waren**; **haben** → **ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten**. Note: **ich** and **er** have the **same** form (**war / hatte**). Use it with time words like **früher, damals, gestern, letztes Jahr**.',
      explanationMdFr: 'Pour **sein** et **haben**, les Allemands utilisent le **prétérit** même à l’**oral** : **sein** → **ich war, du warst, er / sie / es war, wir waren, ihr wart, sie waren** ; **haben** → **ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten**. Note : **ich** et **er** ont la **même** forme (**war / hatte**). Utilise-les avec des marqueurs de temps comme **früher, damals, gestern, letztes Jahr**.',
      tables: [{ title: 'sein and haben, Präteritum', titleFr: 'sein et haben, prétérit', headers: ['Person', 'sein', 'haben'], headersFr: ['Personne', 'sein', 'haben'],
        rows: [['ich', 'war', 'hatte'], ['du', 'warst', 'hattest'], ['er / sie / es', 'war', 'hatte'], ['wir', 'waren', 'hatten'], ['ihr', 'wart', 'hattet'], ['sie / Sie', 'waren', 'hatten']],
        rowsFr: [['ich', 'war', 'hatte'], ['du', 'warst', 'hattest'], ['er / sie / es', 'war', 'hatte'], ['wir', 'waren', 'hatten'], ['ihr', 'wart', 'hattet'], ['sie / Sie', 'waren', 'hatten']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Gestern', role: 'time' }, { text: 'war', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'krank.', role: 'other' }], en: 'Yesterday I was ill.', fr: 'Hier, j’étais malade.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'hatten', role: 'verb' }, { text: 'viel Spaß.', role: 'accusative' }], en: 'We had a lot of fun.', fr: 'Nous nous sommes bien amusés.' },
      ],
      contrast: {
        a: { label: 'Present', labelFr: 'Présent', note: 'ich bin, ich habe', noteFr: 'ich bin, ich habe', examples: [g('Heute bin ich müde.', 'Today I am tired.', 'Aujourd’hui, je suis fatigué.'), g('Ich habe keine Zeit.', 'I have no time.', 'Je n’ai pas le temps.')] },
        b: { label: 'Präteritum', labelFr: 'Prétérit', note: 'ich war, ich hatte', noteFr: 'ich war, ich hatte', examples: [g('Gestern war ich müde.', 'Yesterday I was tired.', 'Hier, j’étais fatigué.'), g('Ich hatte keine Zeit.', 'I had no time.', 'Je n’avais pas le temps.')] },
      },
      examples: [
        g('Gestern war ich krank.', 'Yesterday I was ill.', 'Hier, j’étais malade.'),
        g('Wir hatten viel Spaß.', 'We had a lot of fun.', 'Nous nous sommes bien amusés.'),
        g('Früher war alles anders.', 'Everything was different back then.', 'Avant, tout était différent.'),
        g('Damals hatte ich kein Handy.', 'Back then I had no mobile phone.', 'À l’époque, je n’avais pas de portable.'),
        g('Als Kind war ich oft krank.', 'As a child I was often ill.', 'Enfant, j’étais souvent malade.'),
        g('Wir waren immer zusammen.', 'We were always together.', 'Nous étions toujours ensemble.'),
      ],
      mistakes: [
        { wrong: 'Gestern ich war krank.', right: 'Gestern war ich krank.', why: 'The verb stays in position 2.', whyFr: 'Le verbe reste en position 2.' },
        { wrong: 'Ich hattete keine Zeit.', right: 'Ich hatte keine Zeit.', why: 'hatte already has the -te: no second ending.', whyFr: 'hatte a déjà le -te : pas de seconde terminaison.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l10-e1', prompt: 'Gestern ___ ich krank. (sein — Präteritum, ich)', answer: 'war', hint: 'sein in the simple past: ich war', hintFr: 'sein au prétérit : ich war' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l10-e2', prompt: 'Ich ___ keine Zeit. (haben — Präteritum, ich)', answer: 'hatte', hint: 'haben in the simple past: ich hatte', hintFr: 'haben au prétérit : ich hatte' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l10-e9', prompt: 'Wir ___ immer zusammen. (sein — Präteritum, wir)', answer: 'waren', hint: 'sein → wir waren', hintFr: 'sein → wir waren' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l10-e8', tokens: ['Zeit', 'hatte', 'keine', 'Ich', 'gestern'], answer: ['Ich', 'hatte', 'gestern', 'keine', 'Zeit'], hint: 'Subject, "hatte", time, then the object.', hintFr: 'Sujet, « hatte », le temps, puis l’objet.' } },

    // ───────────── 2 · modals ─────────────
    { kind: 'chapter', title: 'Modalverben im Präteritum', titleFr: 'Les verbes modaux au prétérit', blurb: 'konnte, musste, wollte, durfte, sollte.', blurbFr: 'konnte, musste, wollte, durfte, sollte.' },

    { kind: 'situation', title: 'Ich konnte nicht kommen', titleFr: 'Je n’ai pas pu venir',
      setting: 'Tom explains why he missed the party.', settingFr: 'Tom explique pourquoi il a manqué la fête.',
      lines: [
        line('Anna', 'Warum bist du gestern nicht gekommen?', 'Why didn’t you come yesterday?', 'Pourquoi n’es-tu pas venu hier ?'),
        line('Tom', 'Ich konnte nicht kommen, weil ich arbeiten musste.', 'I couldn’t come because I had to work.', 'Je n’ai pas pu venir parce que je devais travailler.'),
        line('Anna', 'Schade! Als Kind konnte ich schon lesen, aber ich durfte nicht lange aufbleiben.', 'Too bad! As a child I could already read, but I wasn’t allowed to stay up late.', 'Dommage ! Enfant, je savais déjà lire, mais je n’avais pas le droit de veiller tard.'),
        line('Tom', 'Ich wollte immer Pilot werden, aber ich sollte Lehrer werden.', 'I always wanted to become a pilot, but I was supposed to become a teacher.', 'Je voulais toujours devenir pilote, mais je devais devenir enseignant.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l10-modale', title: 'Modal verbs in the Präteritum', titleFr: 'Verbes modaux au prétérit',
      lead: 'Modals lose the umlaut and add -te: konnte, musste, wollte, durfte, sollte. ich and er have no ending.',
      leadFr: 'Les modaux perdent le tréma et ajoutent -te : konnte, musste, wollte, durfte, sollte. ich et er sans terminaison.',
      explanationMd: 'Modal verbs are also used in the **simple past**. They **lose the umlaut** and add **-te**: **können → konnte, müssen → musste, wollen → wollte, dürfen → durfte, sollen → sollte**. **ich** and **er** have **no ending** (**ich konnte, er konnte**). The second verb stays an **infinitive at the end**: **Ich konnte nicht kommen, weil ich arbeiten musste.** In speech Germans prefer the Präteritum of modals over the Perfekt.',
      explanationMdFr: 'Les verbes modaux s’emploient aussi au **prétérit**. Ils **perdent le tréma** et ajoutent **-te** : **können → konnte, müssen → musste, wollen → wollte, dürfen → durfte, sollen → sollte**. **ich** et **er** n’ont **pas de terminaison** (**ich konnte, er konnte**). Le second verbe reste à l’**infinitif à la fin** : **Ich konnte nicht kommen, weil ich arbeiten musste.** À l’oral, les Allemands préfèrent le prétérit des modaux au parfait.',
      tables: [{ title: 'Modals in the Präteritum', titleFr: 'Modaux au prétérit', headers: ['Infinitive', 'ich / er', 'wir / sie'], headersFr: ['Infinitif', 'ich / er', 'wir / sie'],
        rows: [['können', 'konnte', 'konnten'], ['müssen', 'musste', 'mussten'], ['wollen', 'wollte', 'wollten'], ['dürfen', 'durfte', 'durften'], ['sollen', 'sollte', 'sollten']],
        rowsFr: [['können', 'konnte', 'konnten'], ['müssen', 'musste', 'mussten'], ['wollen', 'wollte', 'wollten'], ['dürfen', 'durfte', 'durften'], ['sollen', 'sollte', 'sollten']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'konnte', role: 'verb' }, { text: 'nicht', role: 'other' }, { text: 'kommen.', role: 'verb' }], en: 'I couldn’t come.', fr: 'Je n’ai pas pu venir.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'musste', role: 'verb' }, { text: 'gestern', role: 'time' }, { text: 'arbeiten.', role: 'verb' }], en: 'I had to work yesterday.', fr: 'J’ai dû travailler hier.' },
      ],
      contrast: {
        a: { label: 'Present modal', labelFr: 'Modal au présent', note: 'ich kann, ich muss', noteFr: 'ich kann, ich muss', examples: [g('Ich kann nicht kommen.', 'I can’t come.', 'Je ne peux pas venir.'), g('Ich muss arbeiten.', 'I have to work.', 'Je dois travailler.')] },
        b: { label: 'Past modal', labelFr: 'Modal au passé', note: 'ich konnte, ich musste', noteFr: 'ich konnte, ich musste', examples: [g('Ich konnte nicht kommen.', 'I couldn’t come.', 'Je n’ai pas pu venir.'), g('Ich musste gestern arbeiten.', 'I had to work yesterday.', 'J’ai dû travailler hier.')] },
      },
      examples: [
        g('Ich musste gestern arbeiten.', 'I had to work yesterday.', 'J’ai dû travailler hier.'),
        g('Als Kind konnte ich schon lesen.', 'As a child I could already read.', 'Enfant, je savais déjà lire.'),
        g('Ich konnte nicht kommen, weil ich arbeiten musste.', 'I couldn’t come because I had to work.', 'Je n’ai pas pu venir parce que je devais travailler.'),
        g('Wir durften nicht lange aufbleiben.', 'We weren’t allowed to stay up late.', 'Nous n’avions pas le droit de veiller tard.'),
        g('Er wollte immer Pilot werden.', 'He always wanted to become a pilot.', 'Il voulait toujours devenir pilote.'),
        g('Du solltest mehr schlafen.', 'You should sleep more.', 'Tu devrais dormir plus.'),
      ],
      mistakes: [
        { wrong: 'Ich könnte nicht kommen. (past)', right: 'Ich konnte nicht kommen.', why: 'Past: konnte, without the umlaut.', whyFr: 'Passé : konnte, sans tréma.' },
        { wrong: 'Ich müsste gestern arbeiten. (past)', right: 'Ich musste gestern arbeiten.', why: 'Past: musste, without the umlaut.', whyFr: 'Passé : musste, sans tréma.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l10-e3', prompt: 'What is the Präteritum of "müssen" (ich)?', promptFr: 'Quel est le prétérit de « müssen » (ich) ?', options: ['müsste', 'musste', 'muss'], answer: 1, explain: 'müssen → musste (no umlaut in the past).', explainFr: 'müssen → musste (pas de tréma au passé).', hint: 'The umlaut disappears.', hintFr: 'Le tréma disparaît.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l10-e4', pairs: [{ de: 'können', en: 'konnte', fr: 'konnte' }, { de: 'wollen', en: 'wollte', fr: 'wollte' }, { de: 'dürfen', en: 'durfte', fr: 'durfte' }], hint: 'Match each modal to its simple-past form.', hintFr: 'Associe chaque modal à sa forme au prétérit.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l10-e6', prompt: 'Ich ___ nicht kommen. (können — Präteritum, ich)', answer: 'konnte', hint: 'können → konnte', hintFr: 'können → konnte' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l10-e10', prompt: 'Listen. Why couldn’t Tom come?', promptFr: 'Écoute. Pourquoi Tom n’a-t-il pas pu venir ?', audio: { ttsText: 'Ich konnte nicht kommen, weil ich arbeiten musste.' }, options: ['He had to work', 'He was ill', 'He had no money'], optionsFr: ['Il devait travailler', 'Il était malade', 'Il n’avait pas d’argent'], answer: 0, hint: 'Listen after "weil ich".', hintFr: 'Écoute après « weil ich ».' } },

    // ───────────── 3 · Präteritum or Perfekt ─────────────
    { kind: 'chapter', title: 'Präteritum oder Perfekt?', titleFr: 'Prétérit ou parfait ?', blurb: 'Speech and writing.', blurbFr: 'Oral et écrit.' },

    { kind: 'situation', title: 'Ich war im Kino', titleFr: 'J’étais au cinéma',
      setting: 'Tom tells about his evening.', settingFr: 'Tom raconte sa soirée.',
      lines: [
        line('Tom', 'Ich war im Kino und habe einen Film gesehen.', 'I was at the cinema and watched a film.', 'J’étais au cinéma et j’ai vu un film.'),
        line('Anna', 'Und danach?', 'And afterwards?', 'Et après ?'),
        line('Tom', 'Ich hatte Hunger und habe eine Pizza gegessen.', 'I was hungry and ate a pizza.', 'J’avais faim et j’ai mangé une pizza.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l10-praet-perfekt', title: 'Präteritum or Perfekt?', titleFr: 'Prétérit ou parfait ?',
      lead: 'In speech: Präteritum for sein, haben and modals; Perfekt for most other verbs. In writing: Präteritum for all.',
      leadFr: 'À l’oral : prétérit pour sein, haben et les modaux ; parfait pour la plupart des autres verbes. À l’écrit : prétérit pour tous.',
      explanationMd: 'In **everyday speech**: use the **Präteritum** for **sein, haben and the modals** (**war, hatte, konnte …**), and the **Perfekt** for most **other verbs** (**Ich habe gespielt, ich bin gefahren**). In **writing** (stories, reports) the Präteritum is used for **all verbs**. So you will hear **mixed** sentences: **Ich war im Kino und habe einen Film gesehen. Ich hatte Hunger und habe eine Pizza gegessen.**',
      explanationMdFr: 'Dans la **langue de tous les jours** : utilise le **prétérit** pour **sein, haben et les modaux** (**war, hatte, konnte …**), et le **parfait** pour la plupart des **autres verbes** (**Ich habe gespielt, ich bin gefahren**). À l’**écrit** (récits, comptes rendus), le prétérit s’emploie pour **tous les verbes**. Tu entendras donc des phrases **mixtes** : **Ich war im Kino und habe einen Film gesehen. Ich hatte Hunger und habe eine Pizza gegessen.**',
      tables: [{ title: 'Which past?', titleFr: 'Quel passé ?', headers: ['Verb type', 'Speech', 'Writing'], headersFr: ['Type de verbe', 'Oral', 'Écrit'],
        rows: [['sein, haben, modals', 'Präteritum (war, hatte, konnte)', 'Präteritum'], ['most other verbs', 'Perfekt (habe gespielt, bin gefahren)', 'Präteritum (spielte, fuhr)']],
        rowsFr: [['sein, haben, modaux', 'Prétérit (war, hatte, konnte)', 'Prétérit'], ['la plupart des autres verbes', 'Parfait (habe gespielt, bin gefahren)', 'Prétérit (spielte, fuhr)']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'war', role: 'verb' }, { text: 'im Kino', role: 'place' }, { text: 'und', role: 'connector' }, { text: 'habe', role: 'verb' }, { text: 'einen Film', role: 'accusative' }, { text: 'gesehen.', role: 'verb' }], en: 'I was at the cinema and watched a film.', fr: 'J’étais au cinéma et j’ai vu un film.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'hatte', role: 'verb' }, { text: 'Hunger', role: 'accusative' }, { text: 'und', role: 'connector' }, { text: 'habe', role: 'verb' }, { text: 'eine Pizza', role: 'accusative' }, { text: 'gegessen.', role: 'verb' }], en: 'I was hungry and ate a pizza.', fr: 'J’avais faim et j’ai mangé une pizza.' },
      ],
      contrast: {
        a: { label: 'Speech', labelFr: 'Oral', note: 'war + Perfekt', noteFr: 'war + parfait', examples: [g('Ich war im Kino und habe einen Film gesehen.', 'I was at the cinema and watched a film.', 'J’étais au cinéma et j’ai vu un film.'), g('Ich hatte Hunger und habe eine Pizza gegessen.', 'I was hungry and ate a pizza.', 'J’avais faim et j’ai mangé une pizza.')] },
        b: { label: 'Writing', labelFr: 'Écrit', note: 'Präteritum for all', noteFr: 'prétérit pour tous', examples: [g('Ich war im Kino und sah einen Film.', 'I was at the cinema and saw a film.', 'J’étais au cinéma et je vis un film.'), g('Ich hatte Hunger und aß eine Pizza.', 'I was hungry and ate a pizza.', 'J’avais faim et mangeai une pizza.')] },
      },
      examples: [
        g('Ich war im Kino und habe einen Film gesehen.', 'I was at the cinema and watched a film.', 'J’étais au cinéma et j’ai vu un film.'),
        g('Ich hatte Hunger und habe eine Pizza gegessen.', 'I was hungry and ate a pizza.', 'J’avais faim et j’ai mangé une pizza.'),
        g('Gestern war ich zu Hause und habe gekocht.', 'Yesterday I was at home and cooked.', 'Hier, j’étais à la maison et j’ai cuisiné.'),
        g('Ich musste lange warten und bin dann nach Hause gegangen.', 'I had to wait long and then went home.', 'J’ai dû attendre longtemps puis je suis rentré.'),
        g('Wir waren in Wien und haben viele Museen besucht.', 'We were in Vienna and visited many museums.', 'Nous étions à Vienne et avons visité de nombreux musées.'),
        g('Er hatte Zeit und hat mir geholfen.', 'He had time and helped me.', 'Il avait du temps et m’a aidé.'),
      ],
      mistakes: [
        { wrong: 'Ich habe im Kino gewesen.', right: 'Ich war im Kino.', why: 'For sein use the Präteritum: war.', whyFr: 'Pour sein, utilise le prétérit : war.' },
        { wrong: 'Ich spielte gestern Fußball. (in speech)', right: 'Ich habe gestern Fußball gespielt.', why: 'In speech most verbs take the Perfekt.', whyFr: 'À l’oral, la plupart des verbes prennent le parfait.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l10-e7', prompt: 'Which verb normally uses the Präteritum in speech?', promptFr: 'Quel verbe utilise normalement le prétérit à l’oral ?', options: ['spielen', 'sein', 'kaufen'], answer: 1, explain: 'sein, haben and modals use the Präteritum in speech.', explainFr: 'sein, haben et les modaux utilisent le prétérit à l’oral.', hint: 'Not a normal action verb.', hintFr: 'Pas un verbe d’action ordinaire.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l10-e5', prompt: 'Listen. How was Anna as a child?', promptFr: 'Écoute. Comment était Anna enfant ?', audio: { ttsText: 'Als Kind war ich oft krank, aber ich war sehr glücklich.' }, options: ['Often ill but happy', 'Always healthy', 'Never at school'], optionsFr: ['Souvent malade mais heureuse', 'Toujours en bonne santé', 'Jamais à l’école'], answer: 0, hint: 'Listen for "krank" and "glücklich".', hintFr: 'Écoute « krank » et « glücklich ».' } },

    { kind: 'pronunciation', focus: 'Long "a" in war/waren; the modal past forms are short (konnte, musste) with no umlaut', focusFr: 'Le « a » long dans war/waren ; les modaux au passé sont brefs (konnte, musste) sans tréma', items: [{ id: 'a2l10-war-pron', german: 'war', english: 'was', french: 'était', gender: null, syllables: ['WAR'], pronunciation: 'vaar', example: { de: 'Ich war zu Hause.', en: 'I was at home.', fr: 'J’étais à la maison.' } }, { id: 'a2l10-konnte-pron', german: 'konnte', english: 'could', french: 'pouvait', gender: null, syllables: ['KONN', 'te'], pronunciation: 'KON-te', example: { de: 'Ich konnte nicht schlafen.', en: 'I couldn’t sleep.', fr: 'Je ne pouvais pas dormir.' } }] },

    { kind: 'wrapup',
      summary: 'You can now talk about the past with **war and hatte**, the modals **konnte, musste, wollte, durfte, sollte** — and you know **Präteritum vs Perfekt**. 🎉',
      summaryFr: 'Tu sais maintenant parler du passé avec **war et hatte**, les modaux **konnte, musste, wollte, durfte, sollte** — et tu sais choisir entre **prétérit et parfait**. 🎉',
      card: { title: 'The simple past on one page', titleFr: 'Le prétérit en une page', sections: [
        { heading: 'sein and haben', headingFr: 'sein et haben', rows: [g('war · warst · war · waren · wart · waren', 'sein', 'sein'), g('hatte · hattest · hatte · hatten · hattet · hatten', 'haben', 'haben')] },
        { heading: 'Modals', headingFr: 'Modaux', rows: [g('konnte · musste · wollte · durfte · sollte', 'no umlaut', 'sans tréma')] },
        { heading: 'Speech vs writing', headingFr: 'Oral vs écrit', rows: [g('Speech: Präteritum for sein, haben, modals; Perfekt for the rest', 'everyday', 'au quotidien'), g('Writing: Präteritum for all', 'stories, reports', 'récits, comptes rendus')] },
      ] } },
  ],
};
