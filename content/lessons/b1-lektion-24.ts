import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion24: Lesson = {
  id: 'b1-l24', level: 'B1', module: 5, number: 20,
  title: { de: 'Passiv im Präteritum und Perfekt', en: 'Passive in the past tenses', fr: 'Le passif au passé' },
  theme: 'Telling history: passive in the Präteritum and Perfekt, plus wishes about the past', themeFr: 'Raconter l’histoire : le passif au prétérit et au parfait, et les souhaits sur le passé',
  goals: ['Form the passive Präteritum (wurde … gebaut)', 'Form the passive Perfekt (ist … gebaut worden)', 'Summarise historical events and inventions', 'Say you wish you had been there (wäre … gewesen)'], goalsFr: ['Former le passif au prétérit (wurde … gebaut)', 'Former le passif au parfait (ist … gebaut worden)', 'Résumer des événements historiques et des inventions', 'Dire qu’on aurait aimé y être (wäre … gewesen)'],
  canDo: g('Ich kann historische Ereignisse im Passiv Präteritum und Perfekt erzählen und Wünsche zur Vergangenheit ausdrücken.', 'I can tell historical events in the passive Präteritum and Perfekt and express wishes about the past.', 'Je sais raconter des événements historiques au passif prétérit et au Perfekt et exprimer des souhaits sur le passé.'),
  steps: [
    { kind: 'intro', title: 'Geschichte erzählen 🏛️', titleFr: 'Raconter l’histoire 🏛️',
      scene: 'A history lesson: the Wall, the reunification, the euro — told with the passive past.', sceneFr: 'Un cours d’histoire : le Mur, la réunification, l’euro — racontés au passif passé.',
      goals: ['Form the passive Präteritum (wurde … gebaut)', 'Form the passive Perfekt (ist … gebaut worden)', 'Say you wish you had been there (wäre … gewesen)'],
      goalsFr: ['Former le passif prétérit (wurde … gebaut)', 'Former le passif Perfekt (ist … gebaut worden)', 'Dire que tu aurais aimé être là (wäre … gewesen)'] },

    // ───────────── 1 · Passive Präteritum ─────────────
    { kind: 'chapter', title: 'Passiv Präteritum: wurde / wurden', titleFr: 'Passif prétérit : wurde / wurden', blurb: 'History in texts.', blurbFr: 'L’histoire dans les textes.' },

    { kind: 'situation', title: 'Die Mauer', titleFr: 'Le Mur',
      setting: 'A history teacher tells about the Wall.', settingFr: 'Une professeure d’histoire parle du Mur.',
      lines: [
        line('Lehrerin', 'Die Mauer wurde 1961 gebaut. Die Berliner Mauer stand fast dreißig Jahre. Die Teilung Deutschlands dauerte 41 Jahre.', 'The Wall was built in 1961. The Berlin Wall stood for almost thirty years. The division of Germany lasted 41 years.', 'Le Mur a été construit en 1961. Le mur de Berlin est resté debout presque trente ans. La division de l’Allemagne a duré 41 ans.'),
        line('Lehrerin', 'Die Grenzen wurden 1989 geöffnet. Die BRD wurde 1949 gegründet. 1990 wurde Deutschland wiedervereinigt.', 'The borders were opened in 1989. The Federal Republic was founded in 1949. In 1990 Germany was reunified.', 'Les frontières ont été ouvertes en 1989. La RFA a été fondée en 1949. En 1990, l’Allemagne a été réunifiée.'),
        line('Schüler', 'Wer hat den Buchdruck erfunden? — Der Buchdruck wurde von Gutenberg erfunden. Der Euro wurde 2002 eingeführt.', 'Who invented printing? — Printing was invented by Gutenberg. The euro was introduced in 2002.', 'Qui a inventé l’imprimerie ? — L’imprimerie a été inventée par Gutenberg. L’euro a été introduit en 2002.'),
        line('Lehrerin', 'Viele Menschen wurden von der Nachricht überrascht. Die Sklaverei wurde abgeschafft. Freiheit ist ein wichtiges Recht.', 'Many people were surprised by the news. Slavery was abolished. Freedom is an important right.', 'Beaucoup de gens ont été surpris par la nouvelle. L’esclavage a été aboli. La liberté est un droit important.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l24-e13', prompt: 'When was Germany reunified?', promptFr: 'Quand l’Allemagne a-t-elle été réunifiée ?', options: ['1990', '1961', '2002'], optionsFr: ['1990', '1961', '2002'], answer: 0, explain: 'The teacher says: “1990 wurde Deutschland wiedervereinigt.”', explainFr: 'La professeure dit : « 1990 wurde Deutschland wiedervereinigt. »', hint: 'Look for “wiedervereinigt”.', hintFr: 'Cherche « wiedervereinigt ».' } },

    { kind: 'wordgroup', title: 'Politik und Geschichte', titleFr: 'Politique et histoire',
      items: [{ id: 'b1l24-geschichte', german: 'die Geschichte', english: 'history / story', french: 'l’histoire', gender: 'die', syllables: ['ge', 'SCHICH', 'te'], pronunciation: 'dee ge-SHIKH-teh', example: { de: 'Ich interessiere mich für Geschichte.', en: 'I am interested in history.', fr: 'Je m’intéresse à l’histoire.' } }, { id: 'b1l24-ereignis', german: 'das Ereignis', english: 'the event / occurrence', french: 'l’événement', gender: 'das', syllables: ['er', 'EIG', 'nis'], pronunciation: 'dahs air-EYEG-niss', example: { de: 'Der Mauerfall war ein historisches Ereignis.', en: 'The fall of the Wall was a historic event.', fr: 'La chute du Mur a été un événement historique.' } }, { id: 'b1l24-demokratie', german: 'die Demokratie', english: 'democracy', french: 'la démocratie', gender: 'die', syllables: ['de', 'mo', 'kra', 'TIE'], pronunciation: 'dee de-mo-krah-TEE', example: { de: 'In einer Demokratie dürfen alle wählen.', en: 'In a democracy everyone may vote.', fr: 'Dans une démocratie, tout le monde peut voter.' } }, { id: 'b1l24-mauer', german: 'die Mauer', english: 'the wall', french: 'le mur', gender: 'die', syllables: ['MAU', 'er'], pronunciation: 'dee MOW-er', example: { de: 'Die Berliner Mauer stand fast dreißig Jahre.', en: 'The Berlin Wall stood for almost thirty years.', fr: 'Le mur de Berlin est resté debout presque trente ans.' } }, { id: 'b1l24-grenze', german: 'die Grenze', english: 'the border', french: 'la frontière', gender: 'die', syllables: ['GREN', 'ze'], pronunciation: 'dee GREN-tseh', example: { de: 'Die Grenze wurde geöffnet.', en: 'The border was opened.', fr: 'La frontière a été ouverte.' } }, { id: 'b1l24-teilung', german: 'die Teilung', english: 'the division', french: 'la division', gender: 'die', syllables: ['TEI', 'lung'], pronunciation: 'dee TY-loong', example: { de: 'Die Teilung Deutschlands dauerte 41 Jahre.', en: 'The division of Germany lasted 41 years.', fr: 'La division de l’Allemagne a duré 41 ans.' } }, { id: 'b1l24-wiedervereinigung', german: 'die Wiedervereinigung', english: 'the reunification', french: 'la réunification', gender: 'die', syllables: ['WIE', 'der', 'ver', 'ei', 'ni', 'gung'], pronunciation: 'dee VEE-der-fair-EYE-nee-goong', example: { de: 'Die Wiedervereinigung wurde 1990 gefeiert.', en: 'The reunification was celebrated in 1990.', fr: 'La réunification a été célébrée en 1990.' } }, { id: 'b1l24-freiheit', german: 'die Freiheit', english: 'freedom', french: 'la liberté', gender: 'die', syllables: ['FREI', 'heit'], pronunciation: 'dee FRY-hite', example: { de: 'Meinungsfreiheit ist ein wichtiges Recht.', en: 'Freedom of speech is an important right.', fr: 'La liberté d’expression est un droit important.' } }] },

    { kind: 'wordgroup', title: 'Etwas gründen, einführen, erfinden', titleFr: 'Fonder, introduire, inventer',
      items: [{ id: 'b1l24-gruenden', german: 'gründen', english: 'to found', french: 'fonder', gender: null, syllables: ['GRÜN', 'den'], pronunciation: 'GRUEN-den', example: { de: 'Die Partei wurde 1980 gegründet.', en: 'The party was founded in 1980.', fr: 'Le parti a été fondé en 1980.' } }, { id: 'b1l24-einfuehren', german: 'einführen', english: 'to introduce', french: 'introduire', gender: null, syllables: ['EIN', 'füh', 'ren'], pronunciation: 'INE-fue-ren', example: { de: 'Der Euro wurde 2002 eingeführt.', en: 'The euro was introduced in 2002.', fr: 'L’euro a été introduit en 2002.' } }, { id: 'b1l24-erfinden', german: 'erfinden', english: 'to invent', french: 'inventer', gender: null, syllables: ['er', 'FIN', 'den'], pronunciation: 'air-FIN-den', example: { de: 'Der Buchdruck wurde von Gutenberg erfunden.', en: 'The printing press was invented by Gutenberg.', fr: 'L’imprimerie a été inventée par Gutenberg.' } }, { id: 'b1l24-abschaffen', german: 'abschaffen', english: 'to abolish', french: 'abolir', gender: null, syllables: ['AB', 'schaf', 'fen'], pronunciation: 'AHP-shahf-fen', example: { de: 'Die Sklaverei wurde abgeschafft.', en: 'Slavery was abolished.', fr: 'L’esclavage a été aboli.' } }, { id: 'b1l24-erfindung', german: 'die Erfindung', english: 'the invention', french: 'l’invention', gender: 'die', syllables: ['er', 'FIN', 'dung'], pronunciation: 'dee air-FIN-doong', example: { de: 'Das Fahrrad ist eine Erfindung des 19. Jahrhunderts.', en: 'The bicycle is an invention of the 19th century.', fr: 'La bicyclette est une invention du XIXe siècle.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l24-passiv-praeteritum', title: 'Passive Präteritum: wurde / wurden + participle', titleFr: 'Passif prétérit : wurde / wurden + participe',
      lead: 'wurde (singular) / wurden (plural) + participle at the end. Name the doer with von + dative.',
      leadFr: 'wurde (singulier) / wurden (pluriel) + participe à la fin. Nomme l’agent avec von + datif.',
      explanationMd: 'For the **past passive in texts** (history, news, reports) use **wurde** (singular) or **wurden** (plural) + the **participle** at the **end**: **Die Mauer wurde 1961 gebaut. Die Grenzen wurden 1989 geöffnet.** Name the **doer** with **von + dative**: **Der Buchdruck wurde von Gutenberg erfunden.** **Active → passive**: **Man führte 2002 den Euro ein. → 2002 wurde der Euro eingeführt.** The **time expression** often stands in **position 1** (**1990 wurde Deutschland wiedervereinigt.**) and the **verb stays second**. **Persons** can be the subject too: **Viele Menschen wurden von der Nachricht überrascht.**',
      explanationMdFr: 'Pour le **passif passé dans les textes** (histoire, actualités, comptes rendus), utilise **wurde** (singulier) ou **wurden** (pluriel) + le **participe** à la **fin** : **Die Mauer wurde 1961 gebaut. Die Grenzen wurden 1989 geöffnet.** Nomme l’**agent** avec **von + datif** : **Der Buchdruck wurde von Gutenberg erfunden.** **Actif → passif** : **Man führte 2002 den Euro ein. → 2002 wurde der Euro eingeführt.** L’**indication de temps** est souvent en **position 1** (**1990 wurde Deutschland wiedervereinigt.**) et le **verbe reste en deuxième**. Des **personnes** peuvent aussi être sujet : **Viele Menschen wurden von der Nachricht überrascht.**',
      tables: [{ title: 'Passive Präteritum', titleFr: 'Passif prétérit', headers: ['Subject', 'Auxiliary', 'Example'], headersFr: ['Sujet', 'Auxiliaire', 'Exemple'],
        rows: [['singular', 'wurde', 'Die Mauer wurde 1961 gebaut.'], ['plural', 'wurden', 'Die Grenzen wurden 1989 geöffnet.'], ['with the doer', 'wurde … von', 'Der Buchdruck wurde von Gutenberg erfunden.'], ['time first', 'wurde …', '1990 wurde Deutschland wiedervereinigt.']],
        rowsFr: [['singulier', 'wurde', 'Die Mauer wurde 1961 gebaut.'], ['pluriel', 'wurden', 'Die Grenzen wurden 1989 geöffnet.'], ['avec l’agent', 'wurde … von', 'Der Buchdruck wurde von Gutenberg erfunden.'], ['temps en premier', 'wurde …', '1990 wurde Deutschland wiedervereinigt.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Die Mauer', role: 'subject' }, { text: 'wurde', role: 'verb' }, { text: '1961', role: 'time' }, { text: 'gebaut.', role: 'verb' }], en: 'The Wall was built in 1961.', fr: 'Le Mur a été construit en 1961.' },
        { parts: [{ text: '1990', role: 'time' }, { text: 'wurde', role: 'verb' }, { text: 'Deutschland', role: 'subject' }, { text: 'wiedervereinigt.', role: 'verb' }], en: 'In 1990 Germany was reunified.', fr: 'En 1990, l’Allemagne a été réunifiée.' },
      ],
      contrast: {
        a: { label: 'Present passive', labelFr: 'Passif présent', note: 'wird gebaut', noteFr: 'wird gebaut', examples: [g('Das Haus wird gebaut.', 'The house is being built.', 'La maison est en construction.'), g('Die Autos werden verkauft.', 'The cars are sold.', 'Les voitures sont vendues.')] },
        b: { label: 'Passive Präteritum', labelFr: 'Passif prétérit', note: 'wurde gebaut', noteFr: 'wurde gebaut', examples: [g('Das Haus wurde 1990 gebaut.', 'The house was built in 1990.', 'La maison a été construite en 1990.'), g('Die Autos wurden verkauft.', 'The cars were sold.', 'Les voitures ont été vendues.')] },
      },
      examples: [
        g('Die Mauer wurde 1961 gebaut.', 'The Wall was built in 1961.', 'Le Mur a été construit en 1961.'),
        g('Die Grenzen wurden 1989 geöffnet.', 'The borders were opened in 1989.', 'Les frontières ont été ouvertes en 1989.'),
        g('Die BRD wurde 1949 gegründet.', 'The Federal Republic was founded in 1949.', 'La RFA a été fondée en 1949.'),
        g('1990 wurde Deutschland wiedervereinigt.', 'In 1990 Germany was reunified.', 'En 1990, l’Allemagne a été réunifiée.'),
        g('Der Buchdruck wurde von Gutenberg erfunden.', 'Printing was invented by Gutenberg.', 'L’imprimerie a été inventée par Gutenberg.'),
        g('Viele Menschen wurden von der Nachricht überrascht.', 'Many people were surprised by the news.', 'Beaucoup de gens ont été surpris par la nouvelle.'),
      ],
      mistakes: [
        { wrong: 'Die Mauer wurden 1961 gebaut.', right: 'Die Mauer wurde 1961 gebaut.', why: 'Singular subject: wurde.', whyFr: 'Sujet au singulier : wurde.' },
        { wrong: 'Die Mauer wurde gebauen.', right: 'Die Mauer wurde gebaut.', why: 'Use the participle gebaut.', whyFr: 'Utilise le participe gebaut.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l24-e1', prompt: 'Die Mauer ___ 1961 gebaut. (passive Präteritum, singular)', promptFr: 'Die Mauer ___ 1961 gebaut. (passif au prétérit, singulier)', answer: 'wurde', hint: 'singular → wurde', hintFr: 'singulier → wurde' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l24-e2', prompt: 'Die Grenzen ___ 1989 geöffnet. (passive Präteritum, plural)', promptFr: 'Die Grenzen ___ 1989 geöffnet. (passif au prétérit, pluriel)', answer: 'wurden', hint: 'plural → wurden', hintFr: 'pluriel → wurden' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l24-e5', tokens: ['gegründet', 'wurde', 'Die BRD', '1949'], answer: ['Die BRD', 'wurde', '1949', 'gegründet'], hint: 'Start with the subject; participle at the end.', hintFr: 'Commence par le sujet ; participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l24-e11', prompt: 'Der Buchdruck wurde ___ Gutenberg erfunden. (by)', promptFr: 'Der Buchdruck wurde ___ Gutenberg erfunden. (par)', answer: 'von', hint: 'the doer in a passive sentence', hintFr: 'l’auteur dans une phrase passive' } },

    // ───────────── 2 · Passive Perfekt ─────────────
    { kind: 'chapter', title: 'Passiv Perfekt: ist … worden', titleFr: 'Passif Perfekt : ist … worden', blurb: 'History in conversation.', blurbFr: 'L’histoire à l’oral.' },

    { kind: 'situation', title: 'Wusstest du das?', titleFr: 'Le savais-tu ?',
      setting: 'Two students talk about what they read.', settingFr: 'Deux étudiants parlent de ce qu’ils ont lu.',
      lines: [
        line('Schüler', 'Die Mauer ist gebaut worden. Die Grenzen sind geöffnet worden. Der Euro ist 2002 eingeführt worden.', 'The Wall was built. The borders were opened. The euro was introduced in 2002.', 'Le Mur a été construit. Les frontières ont été ouvertes. L’euro a été introduit en 2002.'),
        line('Schülerin', 'Wusstest du, dass die Stadt im Krieg zerstört worden ist? Es ist viel gebaut worden.', 'Did you know that the city was destroyed in the war? A lot has been built.', 'Savais-tu que la ville a été détruite pendant la guerre ? On a beaucoup construit.'),
        line('Schüler', 'Ich weiß, weil die Mauer gebaut worden ist. Sie ist gefallen — nicht „geworden“.', 'I know, because the Wall was built. It fell — not “became”.', 'Je le sais, parce que le Mur a été construit. Il est tombé — pas « devenu ».'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l24-passiv-perfekt', title: 'Passive Perfekt: ist / sind + participle + worden', titleFr: 'Passif Perfekt : ist / sind + participe + worden',
      lead: 'In conversation: ist / sind + participle + worden. Not geworden! In a subordinate clause the auxiliary is last.',
      leadFr: 'À l’oral : ist / sind + participe + worden. Pas geworden ! Dans une subordonnée, l’auxiliaire est en dernier.',
      explanationMd: 'In **conversation** the passive usually takes the **Perfekt**: **ist / sind + participle + worden**: **Die Mauer ist gebaut worden. Die Grenzen sind geöffnet worden.** Careful: the passive uses **worden**, **not geworden** (that is the participle of **werden = to become**). In a **subordinate clause** the **auxiliary stands last**: **…, weil die Mauer gebaut worden ist.** **Summary of the three tenses**: **Präsens: wird gebaut → Präteritum: wurde gebaut → Perfekt: ist gebaut worden.** Use the **Präteritum** in **texts**, the **Perfekt** in **speech**.',
      explanationMdFr: 'À l’**oral**, le passif prend généralement le **Perfekt** : **ist / sind + participe + worden** : **Die Mauer ist gebaut worden. Die Grenzen sind geöffnet worden.** Attention : le passif utilise **worden**, **pas geworden** (c’est le participe de **werden = devenir**). Dans une **subordonnée**, l’**auxiliaire est en dernier** : **…, weil die Mauer gebaut worden ist.** **Résumé des trois temps** : **Präsens : wird gebaut → Präteritum : wurde gebaut → Perfekt : ist gebaut worden.** Utilise le **Präteritum** dans les **textes**, le **Perfekt** à l’**oral**.',
      tables: [{ title: 'Passive in three tenses', titleFr: 'Passif aux trois temps', headers: ['Tense', 'Example'], headersFr: ['Temps', 'Exemple'],
        rows: [['Präsens', 'Die Mauer wird gebaut.'], ['Präteritum', 'Die Mauer wurde gebaut.'], ['Perfekt', 'Die Mauer ist gebaut worden.'], ['Subordinate clause', '…, weil die Mauer gebaut worden ist.']],
        rowsFr: [['Präsens', 'Die Mauer wird gebaut.'], ['Präteritum', 'Die Mauer wurde gebaut.'], ['Perfekt', 'Die Mauer ist gebaut worden.'], ['Subordonnée', '…, weil die Mauer gebaut worden ist.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Euro', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: '2002', role: 'time' }, { text: 'eingeführt worden.', role: 'verb' }], en: 'The euro was introduced in 2002.', fr: 'L’euro a été introduit en 2002.' },
        { parts: [{ text: 'Wusstest du,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'die Stadt', role: 'subject' }, { text: 'im Krieg', role: 'time' }, { text: 'zerstört worden ist?', role: 'verb' }], en: 'Did you know that the city was destroyed in the war?', fr: 'Savais-tu que la ville a été détruite pendant la guerre ?' },
      ],
      contrast: {
        a: { label: 'passive: worden', labelFr: 'passif : worden', note: 'ist … gebaut worden', noteFr: 'ist … gebaut worden', examples: [g('Die Mauer ist gebaut worden.', 'The Wall was built.', 'Le Mur a été construit.'), g('Der Euro ist eingeführt worden.', 'The euro was introduced.', 'L’euro a été introduit.')] },
        b: { label: 'werden = to become: geworden', labelFr: 'werden = devenir : geworden', note: 'ist … geworden', noteFr: 'ist … geworden', examples: [g('Er ist Lehrer geworden.', 'He became a teacher.', 'Il est devenu enseignant.'), g('Es ist kalt geworden.', 'It has become cold.', 'Il a fait froid.')] },
      },
      examples: [
        g('Der Euro ist 2002 eingeführt worden.', 'The euro was introduced in 2002.', 'L’euro a été introduit en 2002.'),
        g('Die Mauer ist gebaut worden.', 'The Wall was built.', 'Le Mur a été construit.'),
        g('Die Grenzen sind geöffnet worden.', 'The borders were opened.', 'Les frontières ont été ouvertes.'),
        g('Wusstest du, dass die Stadt im Krieg zerstört worden ist?', 'Did you know the city was destroyed in the war?', 'Savais-tu que la ville a été détruite pendant la guerre ?'),
        g('Es ist viel gebaut worden.', 'A lot has been built.', 'On a beaucoup construit.'),
        g('Er erzählte, weil die Mauer gebaut worden war.', 'He told it because the Wall had been built.', 'Il l’a raconté parce que le Mur avait été construit.'),
      ],
      mistakes: [
        { wrong: 'Die Mauer ist gebaut geworden.', right: 'Die Mauer ist gebaut worden.', why: 'The passive Perfekt uses worden.', whyFr: 'Le passif Perfekt utilise worden.' },
        { wrong: '…, weil die Mauer ist gebaut worden.', right: '…, weil die Mauer gebaut worden ist.', why: 'In a subordinate clause the auxiliary is last.', whyFr: 'Dans une subordonnée, l’auxiliaire est en dernier.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l24-e3', prompt: 'Which sentence is the passive Perfekt?', promptFr: 'Quelle phrase est au passif parfait ?', options: ['Der Euro wurde eingeführt.', 'Der Euro ist eingeführt worden.', 'Der Euro ist eingeführt geworden.'], optionsFr: ['Der Euro wurde eingeführt.', 'Der Euro ist eingeführt worden.', 'Der Euro ist eingeführt geworden.'], answer: 1, explain: 'Passive Perfekt = ist + participle + worden.', explainFr: 'Passif parfait = ist + participe + worden.', hint: 'Look for "worden" at the end.', hintFr: 'Cherche « worden » à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l24-e4', prompt: 'Die Stadt ist im Krieg zerstört ___. (passive Perfekt)', promptFr: 'Die Stadt ist im Krieg zerstört ___. (passif parfait)', answer: 'worden', hint: 'not "geworden"', hintFr: 'pas « geworden »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l24-e9', prompt: 'Which subordinate clause is correct?', promptFr: 'Quelle subordonnée est correcte ?', options: ['…, weil die Mauer gebaut worden ist.', '…, weil die Mauer ist gebaut worden.', '…, weil die Mauer gebaut geworden ist.'], optionsFr: ['…, weil die Mauer gebaut worden ist.', '…, weil die Mauer ist gebaut worden.', '…, weil die Mauer gebaut geworden ist.'], answer: 0, explain: 'The conjugated auxiliary “ist” stands last, after “worden”.', explainFr: 'L’auxiliaire conjugué « ist » est en dernière position, après « worden ».', hint: 'The conjugated verb goes last.', hintFr: 'Le verbe conjugué va en dernier.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l24-e7', prompt: 'Listen. When was Germany reunified?', promptFr: 'Écoute. Quand l’Allemagne a-t-elle été réunifiée ?', audio: { ttsText: 'Im Jahr 1990 wurde Deutschland wiedervereinigt.' }, options: ['1990', '1961', '2002'], answer: 0, hint: 'Listen for the year.', hintFr: 'Écoute l’année.' } },

    // ───────────── 3 · Wishes about the past ─────────────
    { kind: 'chapter', title: 'Wünsche zur Vergangenheit', titleFr: 'Souhaits sur le passé', blurb: 'wäre … gewesen, hätte … gesehen.', blurbFr: 'wäre … gewesen, hätte … gesehen.' },

    { kind: 'situation', title: 'Ich wäre gern dabei gewesen', titleFr: 'J’aurais aimé être là',
      setting: 'Students and Grandpa talk about the fall of the Wall.', settingFr: 'Des étudiants et grand-père parlent de la chute du Mur.',
      lines: [
        line('Schülerin', 'Ich wäre gern dabei gewesen, als die Mauer geöffnet wurde. Ich hätte gern gesehen, wie der Euro eingeführt wurde.', 'I would have liked to be there when the Wall was opened. I would have liked to see how the euro was introduced.', 'J’aurais aimé être là quand le Mur a été ouvert. J’aurais aimé voir comment l’euro a été introduit.'),
        line('Opa', 'Ich wäre gern bei der Wiedervereinigung dabei gewesen. Mein Opa hätte gern erlebt, wie die Grenze geöffnet wurde.', 'I would have liked to be there at the reunification. My grandpa would have liked to see the border being opened.', 'J’aurais aimé assister à la réunification. Mon grand-père aurait aimé voir comment la frontière a été ouverte.'),
        line('Schülerin', 'Das Fahrrad ist eine Erfindung des 19. Jahrhunderts. Ich wäre gern bei der Erfindung dabei gewesen.', 'The bicycle is an invention of the 19th century. I would have liked to be there at the invention.', 'Le vélo est une invention du XIXe siècle. J’aurais aimé être là lors de l’invention.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l24-wuensche', title: 'Wishes about the past', titleFr: 'Souhaits sur le passé',
      lead: 'hätte / wäre + participle, then als … / wie … + passive Präteritum.',
      leadFr: 'hätte / wäre + participe, puis als … / wie … + passif prétérit.',
      explanationMd: 'You know the **past Konjunktiv II**: **hätte / wäre + participle**. It is perfect for wishing you had **been there**: **Ich wäre gern dabei gewesen, als die Mauer geöffnet wurde.** **Ich hätte gern gesehen, wie der Euro eingeführt wurde.** The **second clause** (**als …** / **wie …**) tells the event — very often in the **passive Präteritum**. **gern** shows the **wish**: **Ich wäre gern … gewesen.** **Mein Opa hätte gern erlebt, wie …**',
      explanationMdFr: 'Tu connais le **Konjunktiv II passé** : **hätte / wäre + participe**. Il est parfait pour dire que tu **aurais aimé être là** : **Ich wäre gern dabei gewesen, als die Mauer geöffnet wurde.** **Ich hätte gern gesehen, wie der Euro eingeführt wurde.** La **seconde proposition** (**als …** / **wie …**) raconte l’événement — très souvent au **passif prétérit**. **gern** exprime le **souhait** : **Ich wäre gern … gewesen.** **Mein Opa hätte gern erlebt, wie …**',
      tables: [{ title: 'Wish + event', titleFr: 'Souhait + événement', headers: ['Wish', 'Event (passive Präteritum)'], headersFr: ['Souhait', 'Événement (passif prétérit)'],
        rows: [['Ich wäre gern dabei gewesen,', 'als die Mauer geöffnet wurde.'], ['Ich hätte gern gesehen,', 'wie der Euro eingeführt wurde.'], ['Mein Opa hätte gern erlebt,', 'wie die Grenze geöffnet wurde.'], ['Ich wäre gern bei der Wiedervereinigung dabei gewesen.', '']],
        rowsFr: [['Ich wäre gern dabei gewesen,', 'als die Mauer geöffnet wurde.'], ['Ich hätte gern gesehen,', 'wie der Euro eingeführt wurde.'], ['Mein Opa hätte gern erlebt,', 'wie die Grenze geöffnet wurde.'], ['Ich wäre gern bei der Wiedervereinigung dabei gewesen.', '']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'wäre', role: 'verb' }, { text: 'gern', role: 'other' }, { text: 'dabei gewesen,', role: 'verb' }, { text: 'als', role: 'connector' }, { text: 'die Mauer', role: 'subject' }, { text: 'geöffnet wurde.', role: 'verb' }], en: 'I would have liked to be there when the Wall was opened.', fr: 'J’aurais aimé être là quand le Mur a été ouvert.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'hätte', role: 'verb' }, { text: 'gern', role: 'other' }, { text: 'gesehen,', role: 'verb' }, { text: 'wie', role: 'connector' }, { text: 'der Euro', role: 'subject' }, { text: 'eingeführt wurde.', role: 'verb' }], en: 'I would have liked to see how the euro was introduced.', fr: 'J’aurais aimé voir comment l’euro a été introduit.' },
      ],
      contrast: {
        a: { label: 'Real past', labelFr: 'Passé réel', note: 'I was there', noteFr: 'j’y étais', examples: [g('Ich war dabei, als die Mauer geöffnet wurde.', 'I was there when the Wall was opened.', 'J’étais là quand le Mur a été ouvert.'), g('Ich habe gesehen, wie der Euro eingeführt wurde.', 'I saw how the euro was introduced.', 'J’ai vu comment l’euro a été introduit.')] },
        b: { label: 'Wish about the past', labelFr: 'Souhait sur le passé', note: 'I wasn’t there', noteFr: 'je n’y étais pas', examples: [g('Ich wäre gern dabei gewesen, als die Mauer geöffnet wurde.', 'I would have liked to be there when the Wall was opened.', 'J’aurais aimé être là quand le Mur a été ouvert.'), g('Ich hätte gern gesehen, wie der Euro eingeführt wurde.', 'I would have liked to see how the euro was introduced.', 'J’aurais aimé voir comment l’euro a été introduit.')] },
      },
      examples: [
        g('Ich wäre gern dabei gewesen, als die Mauer geöffnet wurde.', 'I would have liked to be there when the Wall was opened.', 'J’aurais aimé être là quand le Mur a été ouvert.'),
        g('Ich hätte gern gesehen, wie der Euro eingeführt wurde.', 'I would have liked to see how the euro was introduced.', 'J’aurais aimé voir comment l’euro a été introduit.'),
        g('Ich wäre gern bei der Wiedervereinigung dabei gewesen.', 'I would have liked to be there at the reunification.', 'J’aurais aimé assister à la réunification.'),
        g('Mein Opa hätte gern erlebt, wie die Grenze geöffnet wurde.', 'My grandpa would have liked to see the border being opened.', 'Mon grand-père aurait aimé voir comment la frontière a été ouverte.'),
        g('Das Fahrrad ist eine Erfindung des 19. Jahrhunderts.', 'The bicycle is an invention of the 19th century.', 'Le vélo est une invention du XIXe siècle.'),
        g('In einer Demokratie dürfen alle wählen.', 'In a democracy everyone may vote.', 'Dans une démocratie, tout le monde a le droit de voter.'),
      ],
      mistakes: [
        { wrong: 'Ich habe gern dabei gewesen.', right: 'Ich wäre gern dabei gewesen.', why: 'sein → wäre … gewesen.', whyFr: 'sein → wäre … gewesen.' },
        { wrong: 'Ich wäre gern dabei gewesen, als die Mauer wird geöffnet.', right: 'Ich wäre gern dabei gewesen, als die Mauer geöffnet wurde.', why: 'The event is told in the past: wurde.', whyFr: 'L’événement est raconté au passé : wurde.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l24-e8', prompt: 'Ich ___ gern dabei gewesen.', promptFr: 'Ich ___ gern dabei gewesen.', options: ['hätte', 'wäre', 'würde'], answer: 1, explain: '"gewesen" belongs to "sein", so the auxiliary is "wäre".', explainFr: '« gewesen » appartient à « sein », donc l’auxiliaire est « wäre ».', hint: 'Which auxiliary goes with "gewesen"?', hintFr: 'Quel auxiliaire va avec « gewesen » ?' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l24-e6', pairs: [{ de: '1961', en: 'The Wall was built', fr: 'Le Mur a été construit' }, { de: '1989', en: 'The border was opened', fr: 'La frontière a été ouverte' }, { de: '1990', en: 'Germany was reunified', fr: 'L’Allemagne a été réunifiée' }, { de: '2002', en: 'Euro cash was introduced', fr: 'L’euro fiduciaire a été introduit' }], hint: 'Match each year to the event.', hintFr: 'Associe chaque année à l’événement.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l24-e12', prompt: 'Listen. What does the speaker wish?', promptFr: 'Écoute. Que souhaite la personne ?', audio: { ttsText: 'Ich wäre gern dabei gewesen, als die Mauer geöffnet wurde.' }, options: ['To have been there when the Wall opened', 'To have watched the Wall being built', 'To visit Berlin next year'], optionsFr: ['Avoir été là à l’ouverture du Mur', 'Avoir assisté à la construction du Mur', 'Visiter Berlin l’année prochaine'], answer: 0, hint: 'Listen to the clause after "als".', hintFr: 'Écoute la proposition après « als ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b1l24-e10', word: 'Ereignis', answer: 'das', hint: 'Words ending in -nis are usually neuter.', hintFr: 'Les mots en -nis sont le plus souvent neutres.' } },

    { kind: 'pronunciation', focus: '"w" sounds like English "v": wurde, worden, Wiedervereinigung — and ei = "eye", ie = "ee"', focusFr: '« w » se prononce comme « v » : wurde, worden, Wiedervereinigung — et ei = « aïe », ie = « i long »', items: [{ id: 'b1l24-wurde-pron', german: 'wurde', english: 'was (passive auxiliary)', french: 'a été (auxiliaire du passif)', gender: null, syllables: ['WUR', 'de'], pronunciation: 'VOOR-deh', example: { de: 'Die Mauer wurde gebaut.', en: 'The wall was built.', fr: 'Le mur a été construit.' } }, { id: 'b1l24-worden-pron', german: 'worden', english: 'been (passive Perfekt)', french: 'été (passif parfait)', gender: null, syllables: ['WOR', 'den'], pronunciation: 'VOR-den', example: { de: 'Es ist viel gebaut worden.', en: 'A lot has been built.', fr: 'On a beaucoup construit.' } }, { id: 'b1l24-mauer-pron', german: 'die Mauer', english: 'the wall', french: 'le mur', gender: 'die', syllables: ['MAU', 'er'], pronunciation: 'dee MOW-er', example: { de: 'Die Mauer fiel 1989.', en: 'The Wall fell in 1989.', fr: 'Le Mur est tombé en 1989.' } }, { id: 'b1l24-freiheit-pron', german: 'die Freiheit', english: 'freedom', french: 'la liberté', gender: 'die', syllables: ['FREI', 'heit'], pronunciation: 'dee FRY-hite', example: { de: 'Freiheit ist wichtig.', en: 'Freedom is important.', fr: 'La liberté est importante.' } }] },

    { kind: 'wrapup',
      summary: 'You can now tell history with the **passive Präteritum** (**wurde … gebaut**), the **passive Perfekt** (**ist … gebaut worden**) and express **wishes about the past** (**wäre gern dabei gewesen**). 🎉',
      summaryFr: 'Tu sais maintenant raconter l’histoire avec le **passif prétérit** (**wurde … gebaut**), le **passif Perfekt** (**ist … gebaut worden**) et exprimer des **souhaits sur le passé** (**wäre gern dabei gewesen**). 🎉',
      card: { title: 'The passive in the past on one page', titleFr: 'Le passif au passé en une page', sections: [
        { heading: 'Three tenses', headingFr: 'Trois temps', rows: [g('wird gebaut · wurde gebaut · ist gebaut worden', 'Präsens · Präteritum · Perfekt', 'Präsens · Präteritum · Perfekt')] },
        { heading: 'Careful', headingFr: 'Attention', rows: [g('worden (passive) ≠ geworden (to become)', 'ist gebaut worden', 'ist gebaut worden')] },
        { heading: 'Wish', headingFr: 'Souhait', rows: [g('Ich wäre gern dabei gewesen, als …', 'wäre / hätte gern + participle', 'wäre / hätte gern + participe')] },
      ] } },
  ],
};
