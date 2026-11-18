import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New B1 lesson (Goethe B1 "Erzählen"): narrative tenses, time conjunctions, reported speech with dass / ob, sentence adverbs.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const b1lektion27: Lesson = {
  id: 'b1-l27', level: 'B1', module: 7, number: 27,
  title: { de: 'Eine Geschichte erzählen', en: 'Telling a story', fr: 'Raconter une histoire' },
  theme: 'Narrative tenses, time conjunctions, reported speech with dass / ob and sentence adverbs',
  themeFr: 'Temps du récit, conjonctions de temps, discours rapporté avec dass / ob et adverbes de phrase',
  goals: ['Tell a story with Präteritum and Plusquamperfekt', 'Link events with als, während, nachdem, sobald, seit', 'Report what someone said with dass / ob and add your attitude with sentence adverbs'],
  goalsFr: ['Raconter une histoire au Präteritum et au plus-que-parfait', 'Relier les événements avec als, während, nachdem, sobald, seit', 'Rapporter ce que quelqu’un a dit avec dass / ob et ajouter ton attitude avec des adverbes de phrase'],
  canDo: g('Ich kann eine Geschichte klar und lebendig erzählen, wiedergeben, was jemand gesagt hat, und meine Haltung ausdrücken.', 'I can tell a story clearly and vividly, report what someone said and express my attitude.', 'Je sais raconter une histoire clairement et vivement, rapporter ce que quelqu’un a dit et exprimer mon attitude.'),
  steps: [
    { kind: 'intro', title: 'Eine Geschichte erzählen 📖', titleFr: 'Raconter une histoire 📖',
      scene: 'Nora tells her friends about a surprising trip: what happened first, what she had already done and what everyone said.', sceneFr: 'Nora raconte à ses amis un voyage surprenant : ce qui s’est passé d’abord, ce qu’elle avait déjà fait et ce que chacun a dit.',
      goals: ['Narrative tenses', 'Time conjunctions', 'Reported speech and sentence adverbs'],
      goalsFr: ['Temps du récit', 'Conjonctions de temps', 'Discours rapporté et adverbes de phrase'] },

    // ───────────── 1 · Narrative tenses ─────────────
    { kind: 'chapter', title: 'Präteritum und Plusquamperfekt', titleFr: 'Präteritum et plus-que-parfait', blurb: 'What happened — and what had happened before.', blurbFr: 'Ce qui s’est passé — et ce qui s’était passé avant.' },

    { kind: 'situation', title: 'Meine Reise nach Wien', titleFr: 'Mon voyage à Vienne',
      setting: 'Nora tells her friends about her trip.', settingFr: 'Nora raconte son voyage à ses amis.',
      lines: [
        line('Nora', 'Als ich in Wien ankam, hatte ich meinen Koffer schon verloren. Ich hatte die Tickets vorher gekauft, aber der Zug war bereits abgefahren.', 'When I arrived in Vienna I had already lost my suitcase. I had bought the tickets beforehand, but the train had already left.', 'Quand je suis arrivée à Vienne, j’avais déjà perdu ma valise. J’avais acheté les billets avant, mais le train était déjà parti.'),
        line('Freund', 'Und was hast du dann gemacht?', 'And what did you do then?', 'Et qu’as-tu fait ensuite ?'),
        line('Nora', 'Zuerst suchte ich das Fundbüro. Danach rief ich meine Freundin an. Plötzlich klingelte mein Handy, und eine Stimme sagte: „Ihr Koffer ist hier.“', 'First I looked for the lost-property office. Afterwards I called my friend. Suddenly my phone rang and a voice said: “Your suitcase is here.”', 'D’abord j’ai cherché le bureau des objets trouvés. Ensuite j’ai appelé mon amie. Soudain, mon téléphone a sonné et une voix a dit : « Votre valise est ici. »'),
        line('Freund', 'Schließlich hattest du Glück!', 'In the end you were lucky!', 'Finalement, tu as eu de la chance !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l27-e1', prompt: 'What had Nora already lost when she arrived?', promptFr: 'Que Nora avait-elle déjà perdu à son arrivée ?', options: ['Her suitcase', 'Her phone', 'Her ticket'], optionsFr: ['Sa valise', 'Son téléphone', 'Son billet'], answer: 0, explain: 'She says: “…hatte ich meinen Koffer schon verloren.”', explainFr: 'Elle dit : « …hatte ich meinen Koffer schon verloren. »', hint: 'Look for “schon verloren”.', hintFr: 'Cherche « schon verloren ».' } },

    { kind: 'wordgroup', title: 'Eine Reise erzählen', titleFr: 'Raconter un voyage',
      items: [
        word('b1l27-koffer', 'der Koffer', 'der', 'the suitcase', 'la valise', ['KOF', 'fer'], 'KOF-fer', g('Mein Koffer ist schwer.', 'My suitcase is heavy.', 'Ma valise est lourde.')),
        word('b1l27-fundbuero', 'das Fundbüro', 'das', 'the lost-property office', 'le bureau des objets trouvés', ['FUND', 'bü', 'ro'], 'FOONT-bue-roh', g('Ich gehe zum Fundbüro.', 'I go to the lost-property office.', 'Je vais au bureau des objets trouvés.')),
        word('b1l27-stimme', 'die Stimme', 'die', 'the voice', 'la voix', ['STIM', 'me'], 'SHTIM-muh', g('Eine Stimme sagte etwas.', 'A voice said something.', 'Une voix a dit quelque chose.')),
        word('b1l27-glueck', 'das Glück', 'das', 'luck / happiness', 'la chance / le bonheur', ['GLÜCK'], 'GLUEK', g('Ich hatte Glück.', 'I was lucky.', 'J’ai eu de la chance.')),
        word('b1l27-verlieren', 'verlieren', null, 'to lose', 'perdre', ['ver', 'LIE', 'ren'], 'fer-LEE-ren', g('Ich habe meinen Schlüssel verloren.', 'I lost my key.', 'J’ai perdu ma clé.')),
        word('b1l27-erleben', 'erleben', null, 'to experience', 'vivre / éprouver', ['er', 'LE', 'ben'], 'air-LAY-ben', g('Ich habe viel erlebt.', 'I experienced a lot.', 'J’ai beaucoup vécu.')),
      ] },

    { kind: 'grammar', note: {
      id: 'b1l27-erzaehltempus', title: 'Narrative tenses: Präteritum and Plusquamperfekt', titleFr: 'Temps du récit : Präteritum et plus-que-parfait',
      lead: 'Main storyline: Präteritum. What had happened earlier: Plusquamperfekt. In speech: Perfekt for the storyline.',
      leadFr: 'Fil principal : Präteritum. Ce qui s’était passé avant : plus-que-parfait. À l’oral : Perfekt pour le fil principal.',
      explanationMd: 'A **written or told story** uses the **Präteritum** for the **main storyline** (**ich suchte, ich rief an, es klingelte**) and the **Plusquamperfekt** (**hatte / war + participle**) for what **had already happened earlier** (**Ich hatte meinen Koffer schon verloren.**). In **everyday speech** you tell the storyline in the **Perfekt** (**Ich habe das Fundbüro gesucht.**) and keep **war / hatte** and the **modals** in the Präteritum. **Time words** guide the listener: **zuerst, danach, plötzlich, schließlich, vorher, bereits, schon**.',
      explanationMdFr: 'Une **histoire écrite ou racontée** utilise le **Präteritum** pour le **fil principal** (**ich suchte, ich rief an, es klingelte**) et le **plus-que-parfait** (**hatte / war + participe**) pour ce qui **s’était déjà passé avant** (**Ich hatte meinen Koffer schon verloren.**). Dans la **langue courante**, tu racontes le fil principal au **Perfekt** (**Ich habe das Fundbüro gesucht.**) et gardes **war / hatte** et les **modaux** au Präteritum. Les **mots de temps** guident l’auditeur : **zuerst, danach, plötzlich, schließlich, vorher, bereits, schon**.',
      tables: [{ title: 'Which tense?', titleFr: 'Quel temps ?', headers: ['What', 'Tense', 'Example'], headersFr: ['Quoi', 'Temps', 'Exemple'],
        rows: [['main events (writing)', 'Präteritum', 'Zuerst suchte ich das Fundbüro.'], ['main events (speech)', 'Perfekt', 'Zuerst habe ich das Fundbüro gesucht.'], ['earlier events', 'Plusquamperfekt', 'Ich hatte meinen Koffer schon verloren.'], ['sein / haben / modals', 'Präteritum', 'Ich war müde. Ich musste warten.']],
        rowsFr: [['événements principaux (écrit)', 'Präteritum', 'Zuerst suchte ich das Fundbüro.'], ['événements principaux (oral)', 'Perfekt', 'Zuerst habe ich das Fundbüro gesucht.'], ['événements antérieurs', 'plus-que-parfait', 'Ich hatte meinen Koffer schon verloren.'], ['sein / haben / modaux', 'Präteritum', 'Ich war müde. Ich musste warten.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Als', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'ankam,', role: 'verb' }, { text: 'hatte', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'meinen Koffer', role: 'accusative' }, { text: 'schon verloren.', role: 'verb' }], en: 'When I arrived I had already lost my suitcase.', fr: 'Quand je suis arrivée, j’avais déjà perdu ma valise.' },
        { parts: [{ text: 'Plötzlich', role: 'time' }, { text: 'klingelte', role: 'verb' }, { text: 'mein Handy.', role: 'subject' }], en: 'Suddenly my phone rang.', fr: 'Soudain, mon téléphone a sonné.' },
      ],
      contrast: {
        a: { label: 'Told in speech', labelFr: 'Raconté à l’oral', note: 'Perfekt', noteFr: 'Perfekt', examples: [g('Ich habe das Fundbüro gesucht und meine Freundin angerufen.', 'I looked for the lost-property office and called my friend.', 'J’ai cherché le bureau des objets trouvés et appelé mon amie.'), g('Plötzlich hat mein Handy geklingelt.', 'Suddenly my phone rang.', 'Soudain, mon téléphone a sonné.')] },
        b: { label: 'Told in writing', labelFr: 'Raconté à l’écrit', note: 'Präteritum + Plusquamperfekt', noteFr: 'Präteritum + plus-que-parfait', examples: [g('Ich suchte das Fundbüro und rief meine Freundin an.', 'I looked for the lost-property office and called my friend.', 'Je cherchai le bureau des objets trouvés et appelai mon amie.'), g('Ich hatte meinen Koffer schon verloren.', 'I had already lost my suitcase.', 'J’avais déjà perdu ma valise.')] },
      },
      examples: [
        g('Als ich in Wien ankam, hatte ich meinen Koffer schon verloren.', 'When I arrived in Vienna I had already lost my suitcase.', 'Quand je suis arrivée à Vienne, j’avais déjà perdu ma valise.'),
        g('Ich hatte die Tickets vorher gekauft, aber der Zug war bereits abgefahren.', 'I had bought the tickets beforehand, but the train had already left.', 'J’avais acheté les billets avant, mais le train était déjà parti.'),
        g('Zuerst suchte ich das Fundbüro.', 'First I looked for the lost-property office.', 'D’abord j’ai cherché le bureau des objets trouvés.'),
        g('Plötzlich klingelte mein Handy.', 'Suddenly my phone rang.', 'Soudain, mon téléphone a sonné.'),
        g('Schließlich hatte ich Glück.', 'In the end I was lucky.', 'Finalement, j’ai eu de la chance.'),
        g('Ich habe viel erlebt.', 'I experienced a lot.', 'J’ai beaucoup vécu.'),
      ],
      mistakes: [
        { wrong: 'Als ich ankam, verlor ich meinen Koffer schon.', right: 'Als ich ankam, hatte ich meinen Koffer schon verloren.', why: 'The earlier event needs the Plusquamperfekt.', whyFr: 'L’événement antérieur demande le plus-que-parfait.' },
        { wrong: 'Plötzlich das Handy klingelte.', right: 'Plötzlich klingelte das Handy.', why: 'After a time word the verb is second.', whyFr: 'Après un mot de temps, le verbe est en deuxième.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l27-e2', prompt: 'Als ich ankam, ___ der Zug schon abgefahren. (sein)', promptFr: 'Als ich ankam, ___ der Zug schon abgefahren. (sein)', answer: 'war', hint: 'Plusquamperfekt: war + participle', hintFr: 'plus-que-parfait : war + participe' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l27-e3', prompt: 'Which sentence uses the Plusquamperfekt correctly?', promptFr: 'Quelle phrase utilise correctement le plus-que-parfait ?', options: ['Ich hatte meinen Schlüssel verloren, bevor ich nach Hause kam.', 'Ich hatte meinen Schlüssel verlieren, bevor ich nach Hause kam.', 'Ich habe hatte meinen Schlüssel verloren.'], optionsFr: ['Ich hatte meinen Schlüssel verloren, bevor ich nach Hause kam.', 'Ich hatte meinen Schlüssel verlieren, bevor ich nach Hause kam.', 'Ich habe hatte meinen Schlüssel verloren.'], answer: 0, explain: 'hatte + participle (verloren).', explainFr: 'hatte + participe (verloren).', hint: 'hatte + participle at the end', hintFr: 'hatte + participe à la fin' } },

    // ───────────── 2 · Time conjunctions ─────────────
    { kind: 'chapter', title: 'Zeit-Konjunktionen: als, während, nachdem, sobald, seit', titleFr: 'Conjonctions de temps : als, während, nachdem, sobald, seit', blurb: 'Link events in time.', blurbFr: 'Relier les événements dans le temps.' },

    { kind: 'situation', title: 'Sobald ich ankam', titleFr: 'Dès que je suis arrivée',
      setting: 'Nora gives more details.', settingFr: 'Nora donne plus de détails.',
      lines: [
        line('Nora', 'Als ich ankam, regnete es. Während ich wartete, rief ich meine Mutter an. Nachdem ich gegessen hatte, ging ich ins Hotel.', 'When I arrived it was raining. While I waited I called my mother. After I had eaten I went to the hotel.', 'Quand je suis arrivée, il pleuvait. Pendant que j’attendais, j’ai appelé ma mère. Après avoir mangé, je suis allée à l’hôtel.'),
        line('Freund', 'Und seitdem? Sobald du dein Handy hattest, hast du uns geschrieben?', 'And since then? As soon as you had your phone you wrote to us?', 'Et depuis ? Dès que tu as eu ton téléphone, tu nous as écrit ?'),
        line('Nora', 'Ja! Sobald ich das Handy hatte, schrieb ich euch. Seit ich zurück bin, erzähle ich allen davon.', 'Yes! As soon as I had the phone I wrote to you. Since I have been back I have been telling everyone about it.', 'Oui ! Dès que j’ai eu le téléphone, je vous ai écrit. Depuis que je suis rentrée, j’en parle à tout le monde.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l27-zeitkonj', title: 'Time conjunctions', titleFr: 'Conjonctions de temps',
      lead: 'als (one past event), wenn (repeated), während (same time), nachdem (after), bevor (before), sobald (as soon as), seit(dem) (since). Verb last.',
      leadFr: 'als (un événement passé), wenn (répété), während (en même temps), nachdem (après), bevor (avant), sobald (dès que), seit(dem) (depuis). Verbe à la fin.',
      explanationMd: 'All **time conjunctions** send the **verb to the end**: **als** (one past event) · **wenn** (repeated / present, future) · **während** (at the same time) · **nachdem** (after — earlier action in the **Plusquamperfekt**) · **bevor** (before) · **sobald** (as soon as) · **seit / seitdem** (since). **Als ich ankam, regnete es.** **Während ich wartete, rief ich an.** **Nachdem ich gegessen hatte, ging ich.** **Sobald ich das Handy hatte, schrieb ich euch.** **Seit ich zurück bin, erzähle ich davon.** If the **conjunction clause comes first**, the **main clause starts with its verb**.',
      explanationMdFr: 'Toutes les **conjonctions de temps** envoient le **verbe à la fin** : **als** (un événement passé) · **wenn** (répété / présent, futur) · **während** (en même temps) · **nachdem** (après — action antérieure au **plus-que-parfait**) · **bevor** (avant) · **sobald** (dès que) · **seit / seitdem** (depuis). **Als ich ankam, regnete es.** **Während ich wartete, rief ich an.** **Nachdem ich gegessen hatte, ging ich.** **Sobald ich das Handy hatte, schrieb ich euch.** **Seit ich zurück bin, erzähle ich davon.** Si la **proposition en conjonction vient en premier**, la **principale commence par son verbe**.',
      tables: [{ title: 'Time conjunctions', titleFr: 'Conjonctions de temps', headers: ['Conjunction', 'Meaning', 'Example'], headersFr: ['Conjonction', 'Sens', 'Exemple'],
        rows: [['als', 'when (once, past)', 'Als ich ankam, regnete es.'], ['während', 'while', 'Während ich wartete, rief ich an.'], ['nachdem', 'after', 'Nachdem ich gegessen hatte, ging ich.'], ['bevor', 'before', 'Bevor ich ging, bezahlte ich.'], ['sobald', 'as soon as', 'Sobald ich das Handy hatte, schrieb ich euch.'], ['seit(dem)', 'since', 'Seit ich zurück bin, erzähle ich davon.']],
        rowsFr: [['als', 'quand (une fois, passé)', 'Als ich ankam, regnete es.'], ['während', 'pendant que', 'Während ich wartete, rief ich an.'], ['nachdem', 'après que', 'Nachdem ich gegessen hatte, ging ich.'], ['bevor', 'avant que', 'Bevor ich ging, bezahlte ich.'], ['sobald', 'dès que', 'Sobald ich das Handy hatte, schrieb ich euch.'], ['seit(dem)', 'depuis que', 'Seit ich zurück bin, erzähle ich davon.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Sobald', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'das Handy', role: 'accusative' }, { text: 'hatte,', role: 'verb' }, { text: 'schrieb', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'euch.', role: 'dative' }], en: 'As soon as I had the phone I wrote to you.', fr: 'Dès que j’ai eu le téléphone, je vous ai écrit.' },
        { parts: [{ text: 'Während', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'wartete,', role: 'verb' }, { text: 'rief', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'meine Mutter', role: 'accusative' }, { text: 'an.', role: 'verb' }], en: 'While I waited I called my mother.', fr: 'Pendant que j’attendais, j’ai appelé ma mère.' },
      ],
      contrast: {
        a: { label: 'als: once', labelFr: 'als : une fois', note: 'past', noteFr: 'passé', examples: [g('Als ich ankam, regnete es.', 'When I arrived it was raining.', 'Quand je suis arrivée, il pleuvait.'), g('Als ich klein war, wohnten wir in Wien.', 'When I was small we lived in Vienna.', 'Quand j’étais petite, nous habitions à Vienne.')] },
        b: { label: 'wenn: repeated', labelFr: 'wenn : répété', note: 'every time', noteFr: 'chaque fois', examples: [g('Wenn ich nach Wien fahre, besuche ich meine Tante.', 'Whenever I go to Vienna I visit my aunt.', 'Chaque fois que je vais à Vienne, je rends visite à ma tante.'), g('Immer wenn es regnete, blieb ich zu Hause.', 'Whenever it rained I stayed at home.', 'Chaque fois qu’il pleuvait, je restais à la maison.')] },
      },
      examples: [
        g('Als ich ankam, regnete es.', 'When I arrived it was raining.', 'Quand je suis arrivée, il pleuvait.'),
        g('Während ich wartete, rief ich meine Mutter an.', 'While I waited I called my mother.', 'Pendant que j’attendais, j’ai appelé ma mère.'),
        g('Nachdem ich gegessen hatte, ging ich ins Hotel.', 'After I had eaten I went to the hotel.', 'Après avoir mangé, je suis allée à l’hôtel.'),
        g('Sobald ich das Handy hatte, schrieb ich euch.', 'As soon as I had the phone I wrote to you.', 'Dès que j’ai eu le téléphone, je vous ai écrit.'),
        g('Seit ich zurück bin, erzähle ich allen davon.', 'Since I have been back I tell everyone about it.', 'Depuis que je suis rentrée, j’en parle à tout le monde.'),
        g('Bevor ich ging, bezahlte ich das Zimmer.', 'Before I left I paid for the room.', 'Avant de partir, j’ai payé la chambre.'),
      ],
      mistakes: [
        { wrong: 'Wenn ich ankam, regnete es. (once, past)', right: 'Als ich ankam, regnete es.', why: 'A single past event takes als.', whyFr: 'Un événement passé unique prend als.' },
        { wrong: 'Sobald ich hatte das Handy, …', right: 'Sobald ich das Handy hatte, …', why: 'After sobald the verb goes last.', whyFr: 'Après sobald, le verbe va en dernier.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l27-e4', prompt: '___ ich gegessen hatte, ging ich ins Hotel. (after)', promptFr: '___ ich gegessen hatte, ging ich ins Hotel. (après que)', answer: 'Nachdem', hint: 'earlier action: Plusquamperfekt', hintFr: 'action antérieure : plus-que-parfait' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l27-e5', tokens: ['rief', 'wartete', 'Während', 'ich', 'ich', 'an', 'Mutter', 'meine'], answer: ['Während', 'ich', 'wartete', 'rief', 'ich', 'meine', 'Mutter', 'an'], hint: 'während-clause first, then the main verb.', hintFr: 'proposition en während d’abord, puis le verbe principal.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l27-e6', prompt: '___ ich das Handy hatte, schrieb ich euch. (as soon as)', promptFr: '___ ich das Handy hatte, schrieb ich euch. (dès que)', options: ['Sobald', 'Seit', 'Bevor'], optionsFr: ['Sobald', 'Seit', 'Bevor'], answer: 0, explain: 'sobald = as soon as.', explainFr: 'sobald = dès que.', hint: 'as soon as', hintFr: 'dès que' } },

    // ───────────── 3 · Reported speech ─────────────
    { kind: 'chapter', title: 'Wiedergeben, was jemand sagt', titleFr: 'Rapporter ce que quelqu’un dit', blurb: 'dass, ob, question words — and sentence adverbs.', blurbFr: 'dass, ob, mots interrogatifs — et adverbes de phrase.' },

    { kind: 'situation', title: 'Was hat sie gesagt?', titleFr: 'Qu’a-t-elle dit ?',
      setting: 'Nora reports what people told her.', settingFr: 'Nora rapporte ce que les gens lui ont dit.',
      lines: [
        line('Nora', 'Die Frau am Schalter sagte, dass mein Koffer im Fundbüro sei — oder besser: dass er dort ist. Sie fragte, ob ich eine Quittung habe.', 'The woman at the counter said that my suitcase is in the lost-property office. She asked whether I had a receipt.', 'La femme au guichet a dit que ma valise était au bureau des objets trouvés. Elle a demandé si j’avais un reçu.'),
        line('Freund', 'Und dein Freund? Was hat er gefragt?', 'And your friend? What did he ask?', 'Et ton ami ? Qu’a-t-il demandé ?'),
        line('Nora', 'Er wollte wissen, wo ich war und wann ich zurückkomme. Zum Glück war alles in Ordnung. Leider war der Koffer nass. Überraschenderweise fehlte nichts.', 'He wanted to know where I was and when I would come back. Luckily everything was fine. Unfortunately the suitcase was wet. Surprisingly nothing was missing.', 'Il voulait savoir où j’étais et quand je reviendrais. Heureusement, tout allait bien. Malheureusement, la valise était mouillée. Étonnamment, rien ne manquait.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l27-wiedergabe', title: 'Reporting speech and sentence adverbs', titleFr: 'Rapporter des paroles et adverbes de phrase',
      lead: 'Statement → dass-clause. Yes/no question → ob. W-question → same question word. Sentence adverbs show your attitude.',
      leadFr: 'Affirmation → proposition en dass. Question oui/non → ob. Question en W → même mot interrogatif. Les adverbes de phrase montrent ton attitude.',
      explanationMd: 'To **report** what someone said, use **sagen, fragen, wissen wollen** + a **subordinate clause with the verb last**: a **statement** → **dass**: **Sie sagte, dass der Koffer im Fundbüro ist.** a **yes/no question** → **ob**: **Sie fragte, ob ich eine Quittung habe.** a **W-question** → the **same question word**: **Er wollte wissen, wo ich war und wann ich zurückkomme.** In everyday German the **indicative** is used (the formal **subjunctive** is for B2). **Sentence adverbs** show your **attitude**: **zum Glück** (luckily), **leider** (unfortunately), **überraschenderweise** (surprisingly), **hoffentlich** (hopefully), **natürlich**, **tatsächlich**. They stand in **position 1** or the **middle field**.',
      explanationMdFr: 'Pour **rapporter** ce que quelqu’un a dit, utilise **sagen, fragen, wissen wollen** + une **subordonnée avec le verbe à la fin** : une **affirmation** → **dass** : **Sie sagte, dass der Koffer im Fundbüro ist.** une **question oui/non** → **ob** : **Sie fragte, ob ich eine Quittung habe.** une **question en W** → le **même mot interrogatif** : **Er wollte wissen, wo ich war und wann ich zurückkomme.** Dans l’allemand courant, on utilise l’**indicatif** (le **subjonctif** formel est pour le B2). Les **adverbes de phrase** montrent ton **attitude** : **zum Glück** (heureusement), **leider** (malheureusement), **überraschenderweise** (étonnamment), **hoffentlich** (j’espère), **natürlich**, **tatsächlich**. Ils se placent en **position 1** ou dans le **champ du milieu**.',
      tables: [{ title: 'Reporting', titleFr: 'Rapporter', headers: ['Direct', 'Reported'], headersFr: ['Direct', 'Rapporté'],
        rows: [['„Der Koffer ist im Fundbüro.“', 'Sie sagte, dass der Koffer im Fundbüro ist.'], ['„Haben Sie eine Quittung?“', 'Sie fragte, ob ich eine Quittung habe.'], ['„Wo bist du?“', 'Er wollte wissen, wo ich war.'], ['„Wann kommst du zurück?“', 'Er wollte wissen, wann ich zurückkomme.']],
        rowsFr: [['« Der Koffer ist im Fundbüro. »', 'Sie sagte, dass der Koffer im Fundbüro ist.'], ['« Haben Sie eine Quittung ? »', 'Sie fragte, ob ich eine Quittung habe.'], ['« Wo bist du ? »', 'Er wollte wissen, wo ich war.'], ['« Wann kommst du zurück ? »', 'Er wollte wissen, wann ich zurückkomme.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'fragte,', role: 'verb' }, { text: 'ob', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'eine Quittung', role: 'accusative' }, { text: 'habe.', role: 'verb' }], en: 'She asked whether I had a receipt.', fr: 'Elle a demandé si j’avais un reçu.' },
        { parts: [{ text: 'Zum Glück', role: 'other' }, { text: 'war', role: 'verb' }, { text: 'alles', role: 'subject' }, { text: 'in Ordnung.', role: 'other' }], en: 'Luckily everything was fine.', fr: 'Heureusement, tout allait bien.' },
      ],
      contrast: {
        a: { label: 'Direct speech', labelFr: 'Discours direct', note: 'quotation marks', noteFr: 'guillemets', examples: [g('Sie sagte: „Der Koffer ist hier.“', 'She said: “The suitcase is here.”', 'Elle a dit : « La valise est ici. »'), g('Er fragte: „Wo bist du?“', 'He asked: “Where are you?”', 'Il a demandé : « Où es-tu ? »')] },
        b: { label: 'Reported speech', labelFr: 'Discours rapporté', note: 'subordinate clause', noteFr: 'subordonnée', examples: [g('Sie sagte, dass der Koffer hier ist.', 'She said that the suitcase is here.', 'Elle a dit que la valise est ici.'), g('Er fragte, wo ich bin.', 'He asked where I was.', 'Il a demandé où j’étais.')] },
      },
      examples: [
        g('Sie sagte, dass der Koffer im Fundbüro ist.', 'She said that the suitcase is in the lost-property office.', 'Elle a dit que la valise est au bureau des objets trouvés.'),
        g('Sie fragte, ob ich eine Quittung habe.', 'She asked whether I had a receipt.', 'Elle a demandé si j’avais un reçu.'),
        g('Er wollte wissen, wo ich war und wann ich zurückkomme.', 'He wanted to know where I was and when I would come back.', 'Il voulait savoir où j’étais et quand je reviendrais.'),
        g('Zum Glück war alles in Ordnung.', 'Luckily everything was fine.', 'Heureusement, tout allait bien.'),
        g('Leider war der Koffer nass.', 'Unfortunately the suitcase was wet.', 'Malheureusement, la valise était mouillée.'),
        g('Überraschenderweise fehlte nichts.', 'Surprisingly nothing was missing.', 'Étonnamment, rien ne manquait.'),
      ],
      mistakes: [
        { wrong: 'Sie sagte, dass ist der Koffer hier.', right: 'Sie sagte, dass der Koffer hier ist.', why: 'After dass the verb goes last.', whyFr: 'Après dass, le verbe va en dernier.' },
        { wrong: 'Sie fragte, dass ich eine Quittung habe.', right: 'Sie fragte, ob ich eine Quittung habe.', why: 'A question needs ob, not dass.', whyFr: 'Une question demande ob, pas dass.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l27-e7', prompt: 'Sie fragte, ___ ich eine Quittung habe.', promptFr: 'Sie fragte, ___ ich eine Quittung habe.', answer: 'ob', hint: 'yes/no question → ob', hintFr: 'question oui/non → ob' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l27-e8', prompt: 'Which sentence adverb means “unfortunately”?', promptFr: 'Quel adverbe de phrase signifie « malheureusement » ?', options: ['Leider', 'Zum Glück', 'Hoffentlich'], optionsFr: ['Leider', 'Zum Glück', 'Hoffentlich'], answer: 0, explain: 'leider = unfortunately.', explainFr: 'leider = malheureusement.', hint: 'the opposite of zum Glück', hintFr: 'le contraire de zum Glück' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l27-e9', prompt: 'Listen. What did the woman at the counter ask?', promptFr: 'Écoute. Qu’a demandé la femme au guichet ?', audio: { ttsText: 'Sie fragte, ob ich eine Quittung habe.' }, options: ['Whether she had a receipt', 'Where she lived', 'When she would leave'], optionsFr: ['Si elle avait un reçu', 'Où elle habitait', 'Quand elle partirait'], answer: 0, hint: 'ob …', hintFr: 'ob …' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l27-e10', prompt: 'Listen. How did the story end?', promptFr: 'Écoute. Comment l’histoire s’est-elle terminée ?', audio: { ttsText: 'Zum Glück war alles in Ordnung, und überraschenderweise fehlte nichts.' }, options: ['Everything was fine', 'The suitcase was lost', 'Something was missing'], optionsFr: ['Tout allait bien', 'La valise était perdue', 'Il manquait quelque chose'], answer: 0, hint: 'zum Glück', hintFr: 'zum Glück' } },

    { kind: 'pronunciation', focus: 'The ü in Fundbüro and Glück, the ch in Quittung vs Koffer, and the long ie in verlieren', focusFr: 'Le ü dans Fundbüro et Glück, la différence entre Quittung et Koffer, et le ie long dans verlieren',
      items: [
        word('b1l27-fundbuero-pron', 'Fundbüro', null, 'lost-property office', 'objets trouvés', ['FUND', 'bü', 'ro'], 'FOONT-bue-roh', g('Das Fundbüro ist geöffnet.', 'The lost-property office is open.', 'Le bureau des objets trouvés est ouvert.')),
        word('b1l27-glueck-pron', 'Glück', null, 'luck', 'chance', ['GLÜCK'], 'GLUEK', g('Viel Glück!', 'Good luck!', 'Bonne chance !')),
        word('b1l27-verlieren-pron', 'verlieren', null, 'to lose', 'perdre', ['ver', 'LIE', 'ren'], 'fer-LEE-ren', g('Ich will nichts verlieren.', 'I don’t want to lose anything.', 'Je ne veux rien perdre.')),
        word('b1l27-erleben-pron', 'erleben', null, 'to experience', 'vivre', ['er', 'LE', 'ben'], 'air-LAY-ben', g('Das muss man erleben.', 'You have to experience that.', 'Il faut le vivre.')),
      ] },

    { kind: 'wrapup',
      summary: 'You can now **tell a story** with **Präteritum and Plusquamperfekt**, link events with **als, während, nachdem, sobald, seit**, and **report speech** with **dass / ob / question words** — adding **zum Glück, leider**. 🎉',
      summaryFr: 'Tu sais maintenant **raconter une histoire** avec **Präteritum et plus-que-parfait**, relier les événements avec **als, während, nachdem, sobald, seit**, et **rapporter des paroles** avec **dass / ob / mots interrogatifs** — en ajoutant **zum Glück, leider**. 🎉',
      card: { title: 'Telling a story on one page', titleFr: 'Raconter une histoire en une page', sections: [
        { heading: 'Tenses', headingFr: 'Temps', rows: [g('Präteritum = storyline', 'Plusquamperfekt = earlier', 'plus-que-parfait = avant')] },
        { heading: 'Time conjunctions', headingFr: 'Conjonctions de temps', rows: [g('als · während · nachdem · bevor · sobald · seit(dem)', 'verb at the end', 'verbe à la fin')] },
        { heading: 'Reporting', headingFr: 'Rapporter', rows: [g('dass · ob · question word', 'Sie sagte, dass … · Sie fragte, ob …', 'Sie sagte, dass … · Sie fragte, ob …'), g('zum Glück · leider · überraschenderweise', 'sentence adverbs', 'adverbes de phrase')] },
      ] } },
  ],
};
