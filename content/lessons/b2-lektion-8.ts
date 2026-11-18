import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion8: Lesson = {
  id: 'b2-l8', level: 'B2', module: 3, number: 8,
  title: { de: 'Indirekte Rede im Alltag', en: 'Reported speech in daily life', fr: 'Le discours indirect au quotidien' },
  theme: 'Reporting statements, questions and requests: tenses of the indirect speech, pronoun changes, and Konjunktiv II as a substitute', themeFr: 'Rapporter affirmations, questions et demandes : temps du discours indirect, changement des pronoms et Konjunktiv II en remplacement',
  goals: ['Report statements, questions and requests', 'Choose the right tense (past via "habe/sei + Partizip II")', 'Adjust pronouns and time words', 'Use "würde" + infinitive when forms are unclear'], goalsFr: ['Rapporter affirmations, questions et demandes', 'Choisir le bon temps (passé avec « habe/sei + Partizip II »)', 'Adapter pronoms et expressions de temps', 'Utiliser « würde » + infinitif quand les formes sont ambiguës'],
  canDo: g('Ich kann Aussagen, Fragen und Aufforderungen in der indirekten Rede wiedergeben und die richtige Zeit wählen.', 'I can report statements, questions and requests in reported speech and choose the right tense.', 'Je sais rapporter des affirmations, des questions et des demandes au discours indirect et choisir le bon temps.'),
  steps: [
    { kind: 'intro', title: 'Indirekte Rede im Alltag 🗣️', titleFr: 'Le discours indirect au quotidien 🗣️',
      scene: 'You pass on what a colleague said, asked and requested — and the tense has to be right.', sceneFr: 'Tu transmets ce qu’un collègue a dit, demandé et exigé — et le temps doit être juste.',
      goals: ['Report statements, questions and requests', 'Choose the right tense for the past and the future', 'Use würde + infinitive when the forms are unclear'],
      goalsFr: ['Rapporter affirmations, questions et demandes', 'Choisir le bon temps pour le passé et le futur', 'Utiliser würde + infinitif quand les formes sont ambiguës'] },

    // ───────────── 1 · Statements, questions, requests ─────────────
    { kind: 'chapter', title: 'Aussagen, Fragen, Bitten', titleFr: 'Affirmations, questions, demandes', blurb: 'dass / ob / W-word / sollen / zu.', blurbFr: 'dass / ob / mot interrogatif / sollen / zu.' },

    { kind: 'situation', title: 'Was hat sie gesagt?', titleFr: 'Qu’a-t-elle dit ?',
      setting: 'A colleague returns from a meeting and passes things on.', settingFr: 'Un collègue revient d’une réunion et transmet des informations.',
      lines: [
        line('Jana', 'Der Chef erzählte, er sei umgezogen. Er fragte, ob ich schon gegessen habe, und bat mich, ihm zu helfen.', 'The boss told us he had moved. He asked whether I had already eaten, and asked me to help him.', 'Le chef a raconté qu’il avait déménagé. Il a demandé si j’avais déjà mangé, et m’a prié de l’aider.'),
        line('Jana', 'Er erkundigte sich, ob der Zug fahre, und fragte, wann er abfahre. Er sagt, ich solle morgen anrufen. Der Lehrer forderte uns auf, leise zu sein.', 'He enquired whether the train was running and asked when it left. He says I should call tomorrow. The teacher told us to be quiet.', 'Il s’est renseigné pour savoir si le train circulait et a demandé quand il partait. Il dit que je devrais appeler demain. Le professeur nous a demandé d’être silencieux.'),
        line('Jana', 'Richte ihm bitte aus, dass ich später komme. Sie merkte an, das sei nicht neu. Er wies den Vorwurf zurück, er habe angeblich nichts gewusst. Die Zeitung zitiert den Minister.', 'Please tell him I am coming later. She remarked that this was not new. He rejected the accusation that he allegedly knew nothing. The paper quotes the minister.', 'Dis-lui s’il te plaît que je viendrai plus tard. Elle a fait remarquer que ce n’était pas nouveau. Il a rejeté l’accusation selon laquelle il n’aurait soi-disant rien su. Le journal cite le ministre.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l8-e11', prompt: 'What did the teacher ask the class to do?', promptFr: 'Que le professeur a-t-il demandé à la classe ?', options: ['To be quiet', 'To open the books', 'To go home'], optionsFr: ['Être silencieux', 'Ouvrir les livres', 'Rentrer chez soi'], answer: 0, explain: 'The text says: “Der Lehrer forderte uns auf, leise zu sein.”', explainFr: 'Le texte dit : « Der Lehrer forderte uns auf, leise zu sein. »', hint: 'Look for “auffordern”.', hintFr: 'Cherche « auffordern ».' } },

    { kind: 'wordgroup', title: 'Wiedergeben: Verben', titleFr: 'Rapporter : les verbes',
      items: [{ id: 'b2l8-erzaehlen', german: 'erzählen', english: 'to tell', french: 'raconter', gender: null, syllables: ['er', 'ZÄH', 'len'], pronunciation: 'er-TSAY-len', example: { de: 'Sie erzählte, sie sei umgezogen.', en: 'She said she had moved.', fr: 'Elle a raconté avoir déménagé.' } }, { id: 'b2l8-ausrichten', german: 'ausrichten', english: 'to pass on (a message)', french: 'transmettre', gender: null, syllables: ['AUS', 'rich', 'ten'], pronunciation: 'OWS-rikh-ten', example: { de: 'Richte ihm bitte aus, dass ich später komme.', en: 'Please tell him that I’ll be late.', fr: 'Dis-lui que je viendrai plus tard.' } }, { id: 'b2l8-bitten', german: 'bitten um', english: 'to ask for', french: 'demander', gender: null, syllables: ['BIT', 'ten', 'um'], pronunciation: 'BIT-ten oom', example: { de: 'Er bat sie, ihm zu helfen.', en: 'He asked her to help him.', fr: 'Il lui a demandé de l’aider.' } }, { id: 'b2l8-auffordern', german: 'auffordern', english: 'to request / urge', french: 'inviter à', gender: null, syllables: ['AUF', 'for', 'dern'], pronunciation: 'OWF-for-dern', example: { de: 'Der Lehrer forderte uns auf, leise zu sein.', en: 'The teacher told us to be quiet.', fr: 'Le professeur nous a demandé de nous taire.' } }, { id: 'b2l8-anmerken', german: 'anmerken', english: 'to remark', french: 'faire remarquer', gender: null, syllables: ['AN', 'mer', 'ken'], pronunciation: 'AHN-mer-ken', example: { de: 'Sie merkte an, das sei nicht neu.', en: 'She remarked that this was not new.', fr: 'Elle a fait remarquer que ce n’était pas nouveau.' } }] },

    { kind: 'wordgroup', title: 'Fragen, zitieren, Vorwürfe', titleFr: 'Questionner, citer, reprocher',
      items: [{ id: 'b2l8-fragen', german: 'sich erkundigen', english: 'to enquire', french: 'se renseigner', gender: null, syllables: ['sich', 'er', 'KUN', 'di', 'gen'], pronunciation: 'zikh er-KOON-di-gen', example: { de: 'Er erkundigte sich, ob der Zug fahre.', en: 'He enquired whether the train was running.', fr: 'Il s’est renseigné pour savoir si le train circulait.' } }, { id: 'b2l8-wiedergeben', german: 'wiedergeben', english: 'to relay / reproduce', french: 'restituer', gender: null, syllables: ['WIE', 'der', 'ge', 'ben'], pronunciation: 'VEE-der-gay-ben', example: { de: 'Kannst du das genau wiedergeben?', en: 'Can you relay that exactly?', fr: 'Peux-tu le restituer exactement ?' } }, { id: 'b2l8-zitieren', german: 'zitieren', english: 'to quote', french: 'citer', gender: null, syllables: ['zi', 'TIE', 'ren'], pronunciation: 'tsi-TEE-ren', example: { de: 'Die Zeitung zitiert den Minister.', en: 'The paper quotes the minister.', fr: 'Le journal cite le ministre.' } }, { id: 'b2l8-angeblich', german: 'angeblich', english: 'allegedly', french: 'soi-disant', gender: null, syllables: ['AN', 'geb', 'lich'], pronunciation: 'AHN-gayp-likh', example: { de: 'Er hat angeblich nichts gewusst.', en: 'He allegedly knew nothing.', fr: 'Il n’aurait soi-disant rien su.' } }, { id: 'b2l8-vorwurf', german: 'der Vorwurf', english: 'the accusation', french: 'le reproche', gender: 'der', syllables: ['VOR', 'wurf'], pronunciation: 'dair FOR-voorf', example: { de: 'Er wies den Vorwurf zurück.', en: 'He rejected the accusation.', fr: 'Il a rejeté le reproche.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l8-satzarten', title: 'Reporting statements, questions and requests', titleFr: 'Rapporter affirmations, questions et demandes',
      lead: 'Statement → dass-clause (or main clause). Yes/no question → ob. W-question → keep the W-word. Request → sollen (Konj. I) or zu-infinitive.',
      leadFr: 'Affirmation → dass (ou principale). Question oui/non → ob. Question en W → garde le mot interrogatif. Demande → sollen (Konj. I) ou zu + infinitif.',
      explanationMd: '**Statement** → **dass-clause** (or a main clause without **dass**): **Sie sagt, dass sie müde sei.** = **Sie sagt, sie sei müde.** **Yes/no question** → **ob**: **Er fragt: „Kommst du?“ → Er fragt, ob ich komme.** **W-question** → keep the **W-word**: **Sie fragt, wann der Zug abfahre.** **Request / order** → **sollen** (Konjunktiv I) or a **zu-infinitive**: **Er sagt, ich solle warten.** / **Er bat mich, zu warten.** **Pronouns and time words shift**: **ich → er / sie**, **heute → an dem Tag**, **morgen → am nächsten Tag**, **hier → dort**.',
      explanationMdFr: '**Affirmation** → **proposition en dass** (ou principale sans **dass**) : **Sie sagt, dass sie müde sei.** = **Sie sagt, sie sei müde.** **Question oui/non** → **ob** : **Er fragt: « Kommst du? » → Er fragt, ob ich komme.** **Question en W** → garde le **mot interrogatif** : **Sie fragt, wann der Zug abfahre.** **Demande / ordre** → **sollen** (Konjunktiv I) ou **zu + infinitif** : **Er sagt, ich solle warten.** / **Er bat mich, zu warten.** **Pronoms et mots de temps changent** : **ich → er / sie**, **heute → an dem Tag**, **morgen → am nächsten Tag**, **hier → dort**.',
      tables: [{ title: 'Direct → reported', titleFr: 'Direct → rapporté', headers: ['Direct', 'Reported'], headersFr: ['Direct', 'Rapporté'],
        rows: [['„Ich bin müde.“', 'Sie sagt, sie sei müde.'], ['„Kommst du?“', 'Er fragt, ob ich komme.'], ['„Wann fährt der Zug?“', 'Sie fragt, wann der Zug abfahre.'], ['„Ruf morgen an!“', 'Er sagt, ich solle morgen anrufen.'], ['„Hilf mir!“', 'Er bat mich, ihm zu helfen.']],
        rowsFr: [['« Ich bin müde. »', 'Sie sagt, sie sei müde.'], ['« Kommst du? »', 'Er fragt, ob ich komme.'], ['« Wann fährt der Zug? »', 'Sie fragt, wann der Zug abfahre.'], ['« Ruf morgen an! »', 'Er sagt, ich solle morgen anrufen.'], ['« Hilf mir! »', 'Er bat mich, ihm zu helfen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'fragt,', role: 'verb' }, { text: 'ob', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'komme.', role: 'verb' }], en: 'He asks whether I am coming.', fr: 'Il demande si je viens.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'sagt,', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'solle', role: 'verb' }, { text: 'warten.', role: 'other' }], en: 'He says I should wait.', fr: 'Il dit que je devrais attendre.' },
      ],
      contrast: {
        a: { label: 'Question', labelFr: 'Question', note: 'ob / W-word', noteFr: 'ob / mot en W', examples: [g('Er fragt, ob ich komme.', 'He asks whether I am coming.', 'Il demande si je viens.'), g('Sie fragt, wann der Zug abfahre.', 'She asks when the train leaves.', 'Elle demande quand le train part.')] },
        b: { label: 'Request', labelFr: 'Demande', note: 'sollen / zu-infinitive', noteFr: 'sollen / zu + infinitif', examples: [g('Er sagt, ich solle warten.', 'He says I should wait.', 'Il dit que je devrais attendre.'), g('Er bat mich, zu warten.', 'He asked me to wait.', 'Il m’a prié d’attendre.')] },
      },
      examples: [
        g('Er fragte, ob sie schon gegessen habe.', 'He asked whether she had already eaten.', 'Il a demandé si elle avait déjà mangé.'),
        g('Sie sagte, ich solle morgen anrufen.', 'She said I should call tomorrow.', 'Elle a dit que je devrais appeler demain.'),
        g('Er erkundigte sich, ob der Zug fahre.', 'He enquired whether the train was running.', 'Il s’est renseigné pour savoir si le train circulait.'),
        g('Er bat sie, ihm zu helfen.', 'He asked her to help him.', 'Il lui a demandé de l’aider.'),
        g('Der Lehrer forderte uns auf, leise zu sein.', 'The teacher asked us to be quiet.', 'Le professeur nous a demandé d’être silencieux.'),
        g('Richte ihm bitte aus, dass ich später komme.', 'Please tell him I am coming later.', 'Dis-lui s’il te plaît que je viendrai plus tard.'),
      ],
      mistakes: [
        { wrong: 'Er fragt, kommst du?', right: 'Er fragt, ob ich komme.', why: 'Indirect question: ob + verb at the end, pronoun shifts.', whyFr: 'Question indirecte : ob + verbe à la fin, le pronom change.' },
        { wrong: 'Er sagt, ich warte hier.', right: 'Er sagt, ich solle dort warten.', why: 'A request becomes sollen; hier becomes dort.', whyFr: 'Une demande devient sollen ; hier devient dort.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l8-e1', prompt: 'Er fragt: „Kommst du?“ → Er fragt, ___ ich komme. (whether)', answer: 'ob', hint: 'yes/no question → ob', hintFr: 'question fermée → ob' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l8-e4', prompt: '„Warte hier!“ → Er sagt, ich …', promptFr: '« Warte hier ! » → Er sagt, ich …', options: ['warte dort', 'solle dort warten', 'muss warte'], answer: 1, explain: 'Orders become "sollen" (K I) and "hier" becomes "dort".', explainFr: 'Les ordres deviennent « sollen » (K I) et « hier » devient « dort ».', hint: 'request → solle', hintFr: 'demande → solle' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l8-e5', tokens: ['ich', 'komme', 'ob', 'Er fragt,'], answer: ['Er fragt,', 'ob', 'ich', 'komme'], hint: 'ob-clause: verb at the end.', hintFr: 'subordonnée en ob : verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l8-e7', prompt: 'Listen. What did he ask?', promptFr: 'Écoute. Qu’a-t-il demandé ?', audio: { ttsText: 'Er erkundigte sich, ob der Zug pünktlich fahre.' }, options: ['Whether the train runs on time', 'Where the station is', 'When the bus arrives'], optionsFr: ['Si le train circule à l’heure', 'Où est la gare', 'Quand arrive le bus'], answer: 0, hint: 'ob … fahre.', hintFr: 'ob … fahre.' } },

    // ───────────── 2 · Tenses ─────────────
    { kind: 'chapter', title: 'Zeiten und Ersatzformen', titleFr: 'Les temps et les formes de remplacement', blurb: 'Past with habe/sei + Partizip, future with werde, würde as substitute.', blurbFr: 'Passé avec habe/sei + participe, futur avec werde, würde en remplacement.' },

    { kind: 'situation', title: 'Wann war das?', titleFr: 'C’était quand ?',
      setting: 'Passing on news with different times.', settingFr: 'Transmettre des nouvelles à différents moments.',
      lines: [
        line('Jana', 'Er sagt: „Ich bin müde.“ → Er sagt, er sei müde. „Ich war krank.“ → Er sagt, er sei krank gewesen.', 'He says: “I am tired.” → He says he is tired. “I was ill.” → He says he was ill.', 'Il dit : « Je suis fatigué. » → Il dit qu’il est fatigué. « J’étais malade. » → Il dit qu’il était malade.'),
        line('Jana', 'Sie sagt, sie sei gestern in Berlin gewesen. „Ich komme morgen.“ → Er sagt, er werde kommen.', 'She says she was in Berlin yesterday. “I am coming tomorrow.” → He says he will come.', 'Elle dit qu’elle était à Berlin hier. « Je viens demain. » → Il dit qu’il viendra.'),
        line('Jana', 'Sie fragten: „Wir fragen morgen.“ → Sie sagten, sie würden morgen fragen. Sie sagten, sie würden morgen kommen.', 'They said: “We will ask tomorrow.” → They said they would ask tomorrow. They said they would come tomorrow.', 'Ils ont dit : « Nous demanderons demain. » → Ils ont dit qu’ils demanderaient demain. Ils ont dit qu’ils viendraient demain.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l8-e6', pairs: [{ de: 'heute', en: 'today', fr: 'aujourd’hui' }, { de: 'an dem Tag', en: 'that day (reported)', fr: 'ce jour-là' }, { de: 'hier', en: 'here', fr: 'ici' }, { de: 'dort', en: 'there (reported)', fr: 'là-bas' }], hint: 'Match direct and reported words.', hintFr: 'Associe les mots directs et rapportés.' } },

    { kind: 'grammar', note: {
      id: 'b2l8-zeiten', title: 'Tenses in reported speech', titleFr: 'Les temps dans le discours indirect',
      lead: 'Reported speech keeps the time relation, not the original tense: present → K I present, past → habe/sei + participle, future → werde + infinitive.',
      leadFr: 'Le discours indirect garde le rapport de temps, pas le temps d’origine : présent → K I présent, passé → habe/sei + participe, futur → werde + infinitif.',
      explanationMd: 'Indirect speech **keeps the time relation**, not the original tense. **Present** → **Konjunktiv I present**: **„Ich bin müde.“ → Er sagt, er sei müde.** **Any past** (Perfekt, Präteritum) → **habe / sei + Partizip II**: **„Ich war krank.“ → Er sagt, er sei krank gewesen.** **Future** → **werde + Infinitiv**: **„Ich komme morgen.“ → Er sagt, er werde kommen.** If the **K I form equals the indicative**, use the **Konjunktiv II**; if that also equals the **Präteritum** (regular verbs: **sie fragten**), use **würde + Infinitiv**: **Sie sagten, sie würden morgen fragen.**',
      explanationMdFr: 'Le discours indirect **garde le rapport de temps**, pas le temps d’origine. **Présent** → **Konjunktiv I présent** : **« Ich bin müde. » → Er sagt, er sei müde.** **Tout passé** (Perfekt, Präteritum) → **habe / sei + participe II** : **« Ich war krank. » → Er sagt, er sei krank gewesen.** **Futur** → **werde + infinitif** : **« Ich komme morgen. » → Er sagt, er werde kommen.** Si la **forme du K I est égale à l’indicatif**, utilise le **Konjunktiv II** ; si elle est aussi égale au **Präteritum** (verbes réguliers : **sie fragten**), utilise **würde + infinitif** : **Sie sagten, sie würden morgen fragen.**',
      tables: [{ title: 'Which form?', titleFr: 'Quelle forme ?', headers: ['Direct', 'Reported', 'Rule'], headersFr: ['Direct', 'Rapporté', 'Règle'],
        rows: [['„Ich bin müde.“', 'er sei müde', 'present → K I'], ['„Ich war krank.“', 'er sei krank gewesen', 'past → sei/habe + Part. II'], ['„Ich komme morgen.“', 'er werde kommen', 'future → werde + inf.'], ['„Wir fragen morgen.“', 'sie würden fragen', 'K I = indicative & K II = Präteritum → würde']],
        rowsFr: [['« Ich bin müde. »', 'er sei müde', 'présent → K I'], ['« Ich war krank. »', 'er sei krank gewesen', 'passé → sei/habe + part. II'], ['« Ich komme morgen. »', 'er werde kommen', 'futur → werde + inf.'], ['« Wir fragen morgen. »', 'sie würden fragen', 'K I = indicatif & K II = Präteritum → würde']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'sagt,', role: 'verb' }, { text: 'er', role: 'subject' }, { text: 'sei', role: 'verb' }, { text: 'krank', role: 'other' }, { text: 'gewesen.', role: 'verb' }], en: 'He says he was ill.', fr: 'Il dit qu’il était malade.' },
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'sagten,', role: 'verb' }, { text: 'sie', role: 'subject' }, { text: 'würden', role: 'verb' }, { text: 'morgen', role: 'time' }, { text: 'fragen.', role: 'verb' }], en: 'They said they would ask tomorrow.', fr: 'Ils ont dit qu’ils demanderaient demain.' },
      ],
      contrast: {
        a: { label: 'Past / future', labelFr: 'Passé / futur', note: 'sei gewesen · werde kommen', noteFr: 'sei gewesen · werde kommen', examples: [g('Er sagt, er sei krank gewesen.', 'He says he was ill.', 'Il dit qu’il était malade.'), g('Er sagt, er werde kommen.', 'He says he will come.', 'Il dit qu’il viendra.')] },
        b: { label: 'Substitute', labelFr: 'Remplacement', note: 'würde + infinitive', noteFr: 'würde + infinitif', examples: [g('Sie sagten, sie würden morgen fragen.', 'They said they would ask tomorrow.', 'Ils ont dit qu’ils demanderaient demain.'), g('Sie sagten, sie würden morgen kommen.', 'They said they would come tomorrow.', 'Ils ont dit qu’ils viendraient demain.')] },
      },
      examples: [
        g('Sie sagt, sie sei gestern in Berlin gewesen.', 'She says she was in Berlin yesterday.', 'Elle dit qu’elle était à Berlin hier.'),
        g('Er sagt, er werde morgen kommen.', 'He says he will come tomorrow.', 'Il dit qu’il viendra demain.'),
        g('Sie sagten, sie würden morgen kommen.', 'They said they would come tomorrow.', 'Ils ont dit qu’ils viendraient demain.'),
        g('Er behauptet, er habe nichts gewusst.', 'He claims he knew nothing.', 'Il prétend qu’il ne savait rien.'),
        g('Sie erzählte, sie sei umgezogen.', 'She told us she had moved.', 'Elle a raconté qu’elle avait déménagé.'),
        g('Er sagt, er sei müde.', 'He says he is tired.', 'Il dit qu’il est fatigué.'),
      ],
      mistakes: [
        { wrong: 'Er sagt, er war krank.', right: 'Er sagt, er sei krank gewesen.', why: 'For the past in reported speech use sei/habe + Partizip II.', whyFr: 'Pour le passé au discours indirect, utilise sei/habe + participe II.' },
        { wrong: 'Sie sagten, sie fragten morgen.', right: 'Sie sagten, sie würden morgen fragen.', why: 'fragten = Präteritum, so use würde + infinitive.', whyFr: 'fragten = Präteritum, donc utilise würde + infinitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l8-e2', prompt: '„Ich war krank.“ → Er sagt, er ___ krank gewesen. (sein — Konj. I)', answer: 'sei', hint: 'past → sei + Partizip II', hintFr: 'passé → sei + Partizip II' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l8-e3', prompt: '„Ich komme morgen.“ → Er sagt, er …', promptFr: '« Ich komme morgen. » → Er sagt, er …', options: ['komme morgen', 'werde kommen', 'sei gekommen'], answer: 1, explain: 'Future → werde + infinitive (or komme with a time word).', explainFr: 'Futur → werde + infinitif (ou komme avec un adverbe de temps).', hint: 'future', hintFr: 'futur' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l8-e9', prompt: '"Sie sagten, sie ___ morgen fragen." Konj. I = Präteritum form, so …', promptFr: '« Sie sagten, sie ___ morgen fragen. » K I = forme du Präteritum, donc …', options: ['fragen', 'fragten', 'würden'], answer: 2, explain: 'Use würde + infinitive when K I and K II are unclear.', explainFr: 'Utilise würde + infinitif quand K I et K II sont ambigus.', hint: 'würden fragen', hintFr: 'würden fragen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l8-e8', prompt: 'Sie sagt, ich ___ morgen anrufen. (sollen — Konj. I)', answer: 'solle', hint: 'ich solle', hintFr: 'ich solle' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l8-e10', prompt: 'Listen. What did she ask him to do?', promptFr: 'Écoute. Que lui a-t-elle demandé de faire ?', audio: { ttsText: 'Sie bat ihn, ihr beim Umzug zu helfen.' }, options: ['Help with the move', 'Cook dinner', 'Call the landlord'], optionsFr: ['Aider pour le déménagement', 'Préparer le dîner', 'Appeler le propriétaire'], answer: 0, hint: 'bitten + zu-infinitive.', hintFr: 'bitten + zu + infinitif.' } },

    { kind: 'pronunciation', focus: 'In reported speech keep a neutral, even voice: no strong emphasis on "ich" / "er" — the message is not yours', focusFr: 'Dans le discours rapporté, garde une voix neutre et régulière : pas d’accent fort sur « ich » / « er » — le message n’est pas le tien', items: [{ id: 'b2l8-erkundigen-pron', german: 'sich erkundigen', english: 'to enquire', french: 'se renseigner', gender: null, syllables: ['sich', 'er', 'KUN', 'di', 'gen'], pronunciation: 'zikh er-KOON-di-gen', example: { de: 'Er erkundigte sich nach dem Preis.', en: 'He enquired about the price.', fr: 'Il s’est renseigné sur le prix.' } }, { id: 'b2l8-angeblich-pron', german: 'angeblich', english: 'allegedly', french: 'soi-disant', gender: null, syllables: ['AN', 'geb', 'lich'], pronunciation: 'AHN-gayp-likh', example: { de: 'Das ist angeblich wahr.', en: 'That is allegedly true.', fr: 'C’est soi-disant vrai.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **report statements, questions and requests** (**dass / ob / sollen / zu**), choose the **right tense** (**sei gewesen, werde kommen**) and fall back on **würde + infinitive**. 🎉',
      summaryFr: 'Tu sais maintenant **rapporter affirmations, questions et demandes** (**dass / ob / sollen / zu**), choisir le **bon temps** (**sei gewesen, werde kommen**) et recourir à **würde + infinitif**. 🎉',
      card: { title: 'Reported speech on one page', titleFr: 'Le discours indirect en une page', sections: [
        { heading: 'Sentence types', headingFr: 'Types de phrases', rows: [g('statement → (dass) + K I', 'Sie sagt, sie sei müde.', 'Sie sagt, sie sei müde.'), g('question → ob / W-word', 'Er fragt, ob ich komme.', 'Er fragt, ob ich komme.'), g('request → solle / zu', 'Ich solle warten.', 'Ich solle warten.')] },
        { heading: 'Tenses', headingFr: 'Temps', rows: [g('past → sei/habe + Part. II', 'er sei gewesen', 'er sei gewesen'), g('future → werde + inf.', 'er werde kommen', 'er werde kommen'), g('unclear → würde + inf.', 'sie würden fragen', 'sie würden fragen')] },
      ] } },
  ],
};
