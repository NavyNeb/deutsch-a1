import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion7: Lesson = {
  id: 'b2-l7', level: 'B2', module: 3, number: 7,
  title: { de: 'Konjunktiv I', en: 'Konjunktiv I', fr: 'Le Konjunktiv I' },
  theme: 'Reporting what others said in the news with the Konjunktiv I (er sei, sie habe, es gebe, er komme)', themeFr: 'Rapporter les propos d’autres personnes dans la presse avec le Konjunktiv I (er sei, sie habe, es gebe, er komme)',
  goals: ['Form the Konjunktiv I (stem + -e / -est / -e / -en / -et / -en)', 'Know sein as the irregular exception', 'Use it for indirect speech in reports', 'Switch to Konjunktiv II when forms are identical'], goalsFr: ['Former le Konjunktiv I (radical + -e / -est / -e / -en / -et / -en)', 'Connaître l’exception de sein', 'L’utiliser pour le discours indirect dans les comptes rendus', 'Passer au Konjunktiv II quand les formes sont identiques'],
  canDo: g('Ich kann den Konjunktiv I bilden und in Berichten verwenden und weiß, wann ich auf den Konjunktiv II ausweichen muss.', 'I can form the Konjunktiv I, use it in reports and know when to switch to the Konjunktiv II.', 'Je sais former le Konjunktiv I, l’utiliser dans des comptes rendus et savoir quand passer au Konjunktiv II.'),
  steps: [
    { kind: 'intro', title: 'Konjunktiv I: Nachrichten berichten 📺', titleFr: 'Konjunktiv I : rapporter les nouvelles 📺',
      scene: 'A newsreader reports what a minister, a witness and a spokesperson said — without taking sides.', sceneFr: 'Une présentatrice rapporte ce que disent un ministre, un témoin et un porte-parole — sans prendre parti.',
      goals: ['Form the Konjunktiv I', 'Know sein as the irregular exception', 'Switch to Konjunktiv II when the forms are identical'],
      goalsFr: ['Former le Konjunktiv I', 'Connaître sein comme exception irrégulière', 'Passer au Konjunktiv II quand les formes sont identiques'] },

    // ───────────── 1 · Forming ─────────────
    { kind: 'chapter', title: 'Konjunktiv I bilden', titleFr: 'Former le Konjunktiv I', blurb: 'Stem + -e, -est, -e, -en, -et, -en.', blurbFr: 'Radical + -e, -est, -e, -en, -et, -en.' },

    { kind: 'situation', title: 'Die Nachrichten', titleFr: 'Les nouvelles',
      setting: 'The news at nine.', settingFr: 'Le journal de neuf heures.',
      lines: [
        line('Sprecherin', 'Der Minister erklärte, er sei zuversichtlich. Die Zeitung berichtet, es gebe Probleme. Die Firma teilt mit, sie schließe das Werk.', 'The minister declared he was confident. The newspaper reports that there are problems. The company announces it is closing the plant.', 'Le ministre a déclaré qu’il était confiant. Le journal rapporte qu’il y a des problèmes. L’entreprise annonce qu’elle ferme l’usine.'),
        line('Sprecherin', 'Laut Polizei gebe es keine Verletzten. Er versicherte, alles sei in Ordnung. Er sagt, er komme morgen.', 'According to the police there are no injured. He assured that everything was fine. He says he is coming tomorrow.', 'Selon la police, il n’y a pas de blessés. Il a assuré que tout allait bien. Il dit qu’il vient demain.'),
        line('Sprecherin', 'Er bestreitet, dass er dort gewesen sei. Seine Aussage ist umstritten. Sie erklärte, die Zahlen seien korrekt.', 'He denies that he had been there. His statement is disputed. She declared that the figures were correct.', 'Il conteste avoir été là. Sa déclaration est controversée. Elle a déclaré que les chiffres étaient corrects.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l7-e11', prompt: 'What does the company announce?', promptFr: 'Qu’annonce l’entreprise ?', options: ['It is closing the plant', 'It is hiring', 'It is moving'], optionsFr: ['Elle ferme l’usine', 'Elle recrute', 'Elle déménage'], answer: 0, explain: 'The reader says: “Die Firma teilt mit, sie schließe das Werk.”', explainFr: 'La présentatrice dit : « Die Firma teilt mit, sie schließe das Werk. »', hint: 'Look for “schließe”.', hintFr: 'Cherche « schließe ».' } },

    { kind: 'wordgroup', title: 'Wer sagt etwas?', titleFr: 'Qui dit quelque chose ?',
      items: [{ id: 'b2l7-minister', german: 'der Minister', english: 'the minister', french: 'le ministre', gender: 'der', syllables: ['mi', 'NIS', 'ter'], pronunciation: 'dair mi-NIS-ter', example: { de: 'Der Minister erklärte, er sei zuversichtlich.', en: 'The minister said he was confident.', fr: 'Le ministre a déclaré être confiant.' } }, { id: 'b2l7-sprecher', german: 'der Sprecher', english: 'the spokesperson', french: 'le porte-parole', gender: 'der', syllables: ['SPRE', 'cher'], pronunciation: 'dair SHPRE-kher', example: { de: 'Der Sprecher sagte, man prüfe den Fall.', en: 'The spokesperson said the case is being examined.', fr: 'Le porte-parole a dit que le cas était examiné.' } }, { id: 'b2l7-zeuge', german: 'der Zeuge', english: 'the witness', french: 'le témoin', gender: 'der', syllables: ['ZEU', 'ge'], pronunciation: 'dair TSOY-ge', example: { de: 'Der Zeuge sagte, er habe nichts gesehen.', en: 'The witness said he had seen nothing.', fr: 'Le témoin a dit n’avoir rien vu.' } }, { id: 'b2l7-aussage', german: 'die Aussage', english: 'the statement', french: 'la déclaration', gender: 'die', syllables: ['AUS', 'sa', 'ge'], pronunciation: 'dee OWS-zah-ge', example: { de: 'Seine Aussage ist umstritten.', en: 'His statement is controversial.', fr: 'Sa déclaration est controversée.' } }, { id: 'b2l7-laut', german: 'laut', english: 'according to', french: 'selon', gender: null, syllables: ['LAUT'], pronunciation: 'lowt', example: { de: 'Laut Polizei gebe es keine Verletzten.', en: 'According to the police there are no injuries.', fr: 'Selon la police, il n’y a pas de blessés.' } }] },

    { kind: 'wordgroup', title: 'Berichten und bestreiten', titleFr: 'Rapporter et contester',
      items: [{ id: 'b2l7-erklaeren', german: 'erklären', english: 'to declare', french: 'déclarer', gender: null, syllables: ['er', 'KLÄ', 'ren'], pronunciation: 'er-KLAY-ren', example: { de: 'Sie erklärte, die Zahlen seien korrekt.', en: 'She stated the figures were correct.', fr: 'Elle a déclaré que les chiffres étaient corrects.' } }, { id: 'b2l7-berichten', german: 'berichten', english: 'to report', french: 'rapporter', gender: null, syllables: ['be', 'RICH', 'ten'], pronunciation: 'be-RIKH-ten', example: { de: 'Die Zeitung berichtet, es gebe Probleme.', en: 'The paper reports there are problems.', fr: 'Le journal rapporte qu’il y a des problèmes.' } }, { id: 'b2l7-mitteilen', german: 'mitteilen', english: 'to announce', french: 'communiquer', gender: null, syllables: ['MIT', 'tei', 'len'], pronunciation: 'MIT-ty-len', example: { de: 'Die Firma teilt mit, sie schließe das Werk.', en: 'The company announces it is closing the plant.', fr: 'L’entreprise annonce qu’elle ferme l’usine.' } }, { id: 'b2l7-bestreiten', german: 'bestreiten', english: 'to deny', french: 'contester', gender: null, syllables: ['be', 'STREI', 'ten'], pronunciation: 'be-SHTRY-ten', example: { de: 'Er bestreitet, dass er dort gewesen sei.', en: 'He denies having been there.', fr: 'Il conteste avoir été là.' } }, { id: 'b2l7-versichern', german: 'versichern', english: 'to assure', french: 'assurer', gender: null, syllables: ['ver', 'SI', 'chern'], pronunciation: 'fer-ZI-khern', example: { de: 'Er versicherte, alles sei in Ordnung.', en: 'He assured that everything was fine.', fr: 'Il a assuré que tout allait bien.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l7-bilden', title: 'Forming the Konjunktiv I', titleFr: 'Former le Konjunktiv I',
      lead: 'Infinitive stem + -e, -est, -e, -en, -et, -en. Mostly you need the er-form: er komme, sie habe, es gebe. sein is irregular: er sei.',
      leadFr: 'Radical de l’infinitif + -e, -est, -e, -en, -et, -en. Il te faut surtout la forme er : er komme, sie habe, es gebe. sein est irrégulier : er sei.',
      explanationMd: 'Take the **infinitive stem** and add the endings: **ich -e · du -est · er / sie / es -e · wir -en · ihr -et · sie -en**. In practice you mostly need the **third person singular**: **er komme, sie habe, es gebe, er könne, sie werde**. **sein is irregular**: **ich sei, du seist, er sei, wir seien, ihr seiet, sie seien** — the **only verb** that differs in **every person**. **Modals** keep the **same pattern**: **er könne, sie müsse, er wolle**. The Konjunktiv I has **no extra tense marker**: for the **past**, use **habe / sei + participle**: **Er sagt, er habe nichts gesehen.**',
      explanationMdFr: 'Prends le **radical de l’infinitif** et ajoute les terminaisons : **ich -e · du -est · er / sie / es -e · wir -en · ihr -et · sie -en**. En pratique, tu as surtout besoin de la **troisième personne du singulier** : **er komme, sie habe, es gebe, er könne, sie werde**. **sein est irrégulier** : **ich sei, du seist, er sei, wir seien, ihr seiet, sie seien** — le **seul verbe** qui diffère à **toutes les personnes**. Les **modaux** suivent le **même schéma** : **er könne, sie müsse, er wolle**. Le Konjunktiv I n’a **pas de marque de temps supplémentaire** : pour le **passé**, utilise **habe / sei + participe** : **Er sagt, er habe nichts gesehen.**',
      tables: [{ title: 'Konjunktiv I', titleFr: 'Konjunktiv I', headers: ['Person', 'sein', 'haben', 'kommen'], headersFr: ['Personne', 'sein', 'haben', 'kommen'],
        rows: [['ich', 'sei', 'habe', 'komme'], ['du', 'seist', 'habest', 'kommest'], ['er / sie / es', 'sei', 'habe', 'komme'], ['wir', 'seien', 'haben', 'kommen'], ['ihr', 'seiet', 'habet', 'kommet'], ['sie / Sie', 'seien', 'haben', 'kommen']],
        rowsFr: [['ich', 'sei', 'habe', 'komme'], ['du', 'seist', 'habest', 'kommest'], ['er / sie / es', 'sei', 'habe', 'komme'], ['wir', 'seien', 'haben', 'kommen'], ['ihr', 'seiet', 'habet', 'kommet'], ['sie / Sie', 'seien', 'haben', 'kommen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Minister', role: 'subject' }, { text: 'erklärte,', role: 'verb' }, { text: 'er', role: 'subject' }, { text: 'sei', role: 'verb' }, { text: 'zuversichtlich.', role: 'other' }], en: 'The minister declared he was confident.', fr: 'Le ministre a déclaré qu’il était confiant.' },
        { parts: [{ text: 'Die Zeitung', role: 'subject' }, { text: 'berichtet,', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'gebe', role: 'verb' }, { text: 'Probleme.', role: 'accusative' }], en: 'The newspaper reports that there are problems.', fr: 'Le journal rapporte qu’il y a des problèmes.' },
      ],
      contrast: {
        a: { label: 'Indicative', labelFr: 'Indicatif', note: 'a fact', noteFr: 'un fait', examples: [g('Er ist zuversichtlich.', 'He is confident.', 'Il est confiant.'), g('Es gibt Probleme.', 'There are problems.', 'Il y a des problèmes.')] },
        b: { label: 'Konjunktiv I', labelFr: 'Konjunktiv I', note: 'someone else’s words', noteFr: 'les paroles de quelqu’un d’autre', examples: [g('Der Minister erklärte, er sei zuversichtlich.', 'The minister declared he was confident.', 'Le ministre a déclaré qu’il était confiant.'), g('Die Zeitung berichtet, es gebe Probleme.', 'The newspaper reports that there are problems.', 'Le journal rapporte qu’il y a des problèmes.')] },
      },
      examples: [
        g('Der Minister sagt, er sei zuversichtlich.', 'The minister says he is confident.', 'Le ministre dit qu’il est confiant.'),
        g('Die Zeitung schreibt, es gebe Probleme.', 'The paper writes that there are problems.', 'Le journal écrit qu’il y a des problèmes.'),
        g('Die Firma teilt mit, sie schließe das Werk.', 'The company announces it is closing the plant.', 'L’entreprise annonce qu’elle ferme l’usine.'),
        g('Er versicherte, alles sei in Ordnung.', 'He assured that everything was fine.', 'Il a assuré que tout allait bien.'),
        g('Sie erklärte, die Zahlen seien korrekt.', 'She declared that the figures were correct.', 'Elle a déclaré que les chiffres étaient corrects.'),
        g('Er behauptet, er habe nichts gewusst.', 'He claims he knew nothing.', 'Il prétend qu’il ne savait rien.'),
      ],
      mistakes: [
        { wrong: 'Er sagt, er ist müde. (formal report)', right: 'Er sagt, er sei müde.', why: 'In a written report use the Konjunktiv I.', whyFr: 'Dans un compte rendu écrit, utilise le Konjunktiv I.' },
        { wrong: 'Er sagt, er kommt morgen. (formal report)', right: 'Er sagt, er komme morgen.', why: 'er komme = Konjunktiv I.', whyFr: 'er komme = Konjunktiv I.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l7-e1', prompt: 'Er sagt, er ___ zuversichtlich. (sein — Konjunktiv I)', answer: 'sei', hint: 'er sei', hintFr: 'er sei' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l7-e2', prompt: 'Sie sagt, sie ___ keine Zeit. (haben — Konjunktiv I)', answer: 'habe', hint: 'stem hab- + e', hintFr: 'radical hab- + e' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l7-e3', prompt: 'Which form is Konjunktiv I of "kommen" (er)?', promptFr: 'Quelle forme est le Konjunktiv I de « kommen » (er) ?', options: ['er kommt', 'er komme', 'er käme'], answer: 1, explain: 'stem komm- + e = komme.', explainFr: 'radical komm- + e = komme.', hint: 'stem + e', hintFr: 'radical + e' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l7-e8', prompt: 'Die Firma teilt mit, sie ___ das Werk. (schließen — Konjunktiv I)', answer: 'schließe', hint: 'stem schließ- + e', hintFr: 'radical schließ- + e' } },

    // ───────────── 2 · When to use I / II ─────────────
    { kind: 'chapter', title: 'Konjunktiv I oder II?', titleFr: 'Konjunktiv I ou II ?', blurb: 'Switch when the forms are identical.', blurbFr: 'Passer au II quand les formes sont identiques.' },

    { kind: 'situation', title: 'Sie sagen, sie hätten keine Zeit', titleFr: 'Ils disent qu’ils n’ont pas le temps',
      setting: 'Reporting a group.', settingFr: 'Rapporter les propos d’un groupe.',
      lines: [
        line('Sprecherin', 'Er sagt: „Ich habe keine Zeit.“ → Er sagt, er habe keine Zeit.', 'He says: “I have no time.” → He says he has no time.', 'Il dit : « Je n’ai pas le temps. » → Il dit qu’il n’a pas le temps.'),
        line('Sprecherin', 'Sie sagen: „Wir haben keine Zeit.“ → Sie sagen, sie hätten keine Zeit. (nicht: haben) Sie sagten, sie kämen später.', 'They say: “We have no time.” → They say they have no time. (not: haben) They said they would come later.', 'Ils disent : « Nous n’avons pas le temps. » → Ils disent qu’ils n’ont pas le temps. Ils ont dit qu’ils viendraient plus tard.'),
        line('Sprecherin', 'Die Politiker sagen, sie hätten keine Wahl. Er behauptet, er habe nichts gewusst. In der gesprochenen Sprache sagt man oft einfach: Er sagt, er hat keine Zeit.', 'The politicians say they have no choice. He claims he knew nothing. In spoken language people often simply say: he says he has no time.', 'Les politiciens disent qu’ils n’ont pas le choix. Il prétend qu’il ne savait rien. À l’oral, on dit souvent simplement : il dit qu’il n’a pas le temps.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b2l7-i-oder-ii', title: 'Konjunktiv I or Konjunktiv II?', titleFr: 'Konjunktiv I ou Konjunktiv II ?',
      lead: 'Konjunktiv I reports neutrally. If it looks identical to the present (wir haben, sie kommen), use Konjunktiv II instead.',
      leadFr: 'Le Konjunktiv I rapporte de façon neutre. S’il est identique au présent (wir haben, sie kommen), utilise le Konjunktiv II à la place.',
      explanationMd: 'Use **Konjunktiv I** to report **someone else’s words neutrally**, **without agreeing or disagreeing** (news, reports, exams): **Er sagt: „Ich habe keine Zeit.“ → Er sagt, er habe keine Zeit.** If the Konjunktiv I looks **identical to the normal present** (**ich / wir / sie** forms: **wir haben, sie kommen**), use the **Konjunktiv II** instead: **Sie sagen, sie hätten keine Zeit.** (not **haben**) **Sie sagten, sie kämen später.** In **spoken German**, many people use the **indicative** or **Konjunktiv II**; Konjunktiv I is mainly **written**. **Quotation, not opinion**: the **form** signals that you **report**, not that you **doubt**.',
      explanationMdFr: 'Utilise le **Konjunktiv I** pour rapporter les **paroles de quelqu’un d’autre de manière neutre**, **sans approuver ni contredire** (actualités, comptes rendus, examens) : **Er sagt: « Ich habe keine Zeit. » → Er sagt, er habe keine Zeit.** Si le Konjunktiv I est **identique au présent normal** (formes **ich / wir / sie** : **wir haben, sie kommen**), utilise le **Konjunktiv II** à la place : **Sie sagen, sie hätten keine Zeit.** (pas **haben**) **Sie sagten, sie kämen später.** À l’**oral**, beaucoup utilisent l’**indicatif** ou le **Konjunktiv II** ; le Konjunktiv I est surtout **écrit**. **Citation, pas opinion** : la **forme** signale que tu **rapportes**, pas que tu **doutes**.',
      tables: [{ title: 'I or II?', titleFr: 'I ou II ?', headers: ['Direct speech', 'Reported'], headersFr: ['Discours direct', 'Rapporté'],
        rows: [['„Ich habe keine Zeit.“', 'Er sagt, er habe keine Zeit.'], ['„Wir haben keine Zeit.“', 'Sie sagen, sie hätten keine Zeit. (not haben)'], ['„Sie kommen später.“', 'Sie sagten, sie kämen später. (not kommen)'], ['„Ich war nicht dort.“', 'Er bestreitet, dass er dort gewesen sei.']],
        rowsFr: [['« Ich habe keine Zeit. »', 'Er sagt, er habe keine Zeit.'], ['« Wir haben keine Zeit. »', 'Sie sagen, sie hätten keine Zeit. (pas haben)'], ['« Sie kommen später. »', 'Sie sagten, sie kämen später. (pas kommen)'], ['« Ich war nicht dort. »', 'Er bestreitet, dass er dort gewesen sei.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'sagen,', role: 'verb' }, { text: 'sie', role: 'subject' }, { text: 'hätten', role: 'verb' }, { text: 'keine Zeit.', role: 'accusative' }], en: 'They say they have no time.', fr: 'Ils disent qu’ils n’ont pas le temps.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'bestreitet,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'er', role: 'subject' }, { text: 'dort', role: 'place' }, { text: 'gewesen sei.', role: 'verb' }], en: 'He denies that he had been there.', fr: 'Il conteste avoir été là.' },
      ],
      contrast: {
        a: { label: 'Konjunktiv I', labelFr: 'Konjunktiv I', note: 'if the form is distinct', noteFr: 'si la forme est distincte', examples: [g('Er sagt, er habe keine Zeit.', 'He says he has no time.', 'Il dit qu’il n’a pas le temps.'), g('Sie sagt, sie komme morgen.', 'She says she is coming tomorrow.', 'Elle dit qu’elle vient demain.')] },
        b: { label: 'Konjunktiv II (substitute)', labelFr: 'Konjunktiv II (substitut)', note: 'if I would equal the present', noteFr: 'si le I serait égal au présent', examples: [g('Sie sagen, sie hätten keine Zeit.', 'They say they have no time.', 'Ils disent qu’ils n’ont pas le temps.'), g('Die Politiker sagen, sie hätten keine Wahl.', 'The politicians say they have no choice.', 'Les politiciens disent qu’ils n’ont pas le choix.')] },
      },
      examples: [
        g('Er sagt, er habe keine Zeit.', 'He says he has no time.', 'Il dit qu’il n’a pas le temps.'),
        g('Sie sagen, sie hätten keine Zeit.', 'They say they have no time.', 'Ils disent qu’ils n’ont pas le temps.'),
        g('Sie sagten, sie kämen später.', 'They said they would come later.', 'Ils ont dit qu’ils viendraient plus tard.'),
        g('Die Politiker sagen, sie hätten keine Wahl.', 'The politicians say they have no choice.', 'Les politiciens disent qu’ils n’ont pas le choix.'),
        g('Er behauptet, er habe nichts gewusst.', 'He claims he knew nothing.', 'Il prétend qu’il ne savait rien.'),
        g('Der Zeuge sagte, er habe nichts gesehen.', 'The witness said he had seen nothing.', 'Le témoin a dit qu’il n’avait rien vu.'),
      ],
      mistakes: [
        { wrong: 'Sie sagen, sie haben keine Zeit. (report)', right: 'Sie sagen, sie hätten keine Zeit.', why: 'haben (plural) equals the present: switch to hätten.', whyFr: 'haben (pluriel) équivaut au présent : passe à hätten.' },
        { wrong: 'Er sagt, er hätte keine Zeit. (when I is distinct)', right: 'Er sagt, er habe keine Zeit.', why: 'With er use the Konjunktiv I when it is distinct.', whyFr: 'Avec er, utilise le Konjunktiv I quand il est distinct.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l7-e4', prompt: '"Sie sagen, sie ___ keine Zeit." Which form works?', promptFr: '« Sie sagen, sie ___ keine Zeit. » Quelle forme convient ?', options: ['haben', 'habe', 'hätten'], answer: 2, explain: 'Konjunktiv I of "sie haben" equals the indicative, so use Konjunktiv II: hätten.', explainFr: 'Le Konjunktiv I de « sie haben » est identique à l’indicatif, donc Konjunktiv II : hätten.', hint: 'Identical to indicative → Konjunktiv II.', hintFr: 'Identique à l’indicatif → Konjunktiv II.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l7-e5', tokens: ['gebe', 'Probleme', 'es', 'Die Zeitung berichtet,'], answer: ['Die Zeitung berichtet,', 'es', 'gebe', 'Probleme'], hint: 'es gibt → es gebe', hintFr: 'es gibt → es gebe' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l7-e9', prompt: 'When is Konjunktiv I mainly used?', promptFr: 'Quand le Konjunktiv I est-il surtout utilisé ?', options: ['Polite requests', 'Neutral reporting of what someone said', 'Wishes about the past'], answer: 1, explain: 'It is the form of reported speech in news and reports.', explainFr: 'C’est la forme du discours rapporté dans la presse et les rapports.', hint: 'Think of newspapers.', hintFr: 'Pense aux journaux.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b2l7-e6', pairs: [{ de: 'er sei', en: 'he is (reported)', fr: 'il serait (rapporté)' }, { de: 'sie habe', en: 'she has (reported)', fr: 'elle aurait (rapporté)' }, { de: 'es gebe', en: 'there is (reported)', fr: 'il y aurait (rapporté)' }, { de: 'er komme', en: 'he comes (reported)', fr: 'il viendrait (rapporté)' }], hint: 'Match each Konjunktiv I form to its meaning.', hintFr: 'Associe chaque forme du Konjunktiv I à sa signification.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l7-e7', prompt: 'Listen. What does the witness say?', promptFr: 'Écoute. Que dit le témoin ?', audio: { ttsText: 'Der Zeuge sagte, er habe nichts gesehen.' }, options: ['He saw nothing', 'He saw everything', 'He was not there'], optionsFr: ['Il n’a rien vu', 'Il a tout vu', 'Il n’était pas là'], answer: 0, hint: '"habe gesehen" = reported "has seen".', hintFr: '« habe gesehen » = rapporté « a vu ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l7-e10', prompt: 'Listen. What does the spokesperson say?', promptFr: 'Écoute. Que dit le porte-parole ?', audio: { ttsText: 'Der Sprecher sagte, man prüfe den Fall.' }, options: ['The case is being examined', 'The case is closed', 'There is no case'], optionsFr: ['Le cas est examiné', 'Le cas est clos', 'Il n’y a pas de cas'], answer: 0, hint: 'prüfe = reported "examines".', hintFr: 'prüfe = rapporté « examine ».' } },

    { kind: 'pronunciation', focus: 'The final -e is clearly pronounced in Konjunktiv I: "er SEI", "sie HAbe", "es GEbe" — don’t swallow it', focusFr: 'Le -e final se prononce clairement au Konjunktiv I : « er SEI », « sie HAbe », « es GEbe » — ne l’avale pas', items: [{ id: 'b2l7-sei-pron', german: 'er sei', english: 'he is (reported)', french: 'il serait', gender: null, syllables: ['er', 'SEI'], pronunciation: 'er zy', example: { de: 'Er sagt, er sei müde.', en: 'He says he is tired.', fr: 'Il dit qu’il est fatigué.' } }, { id: 'b2l7-habe-pron', german: 'sie habe', english: 'she has (reported)', french: 'elle aurait', gender: null, syllables: ['sie', 'HA', 'be'], pronunciation: 'zee HAH-be', example: { de: 'Sie sagt, sie habe Zeit.', en: 'She says she has time.', fr: 'Elle dit qu’elle a le temps.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **form the Konjunktiv I** (**er sei, sie habe, es gebe, er komme**), use it to **report neutrally**, and **switch to the Konjunktiv II** when the forms are identical. 🎉',
      summaryFr: 'Tu sais maintenant **former le Konjunktiv I** (**er sei, sie habe, es gebe, er komme**), l’utiliser pour **rapporter de façon neutre**, et **passer au Konjunktiv II** quand les formes sont identiques. 🎉',
      card: { title: 'Konjunktiv I on one page', titleFr: 'Le Konjunktiv I en une page', sections: [
        { heading: 'Form', headingFr: 'Forme', rows: [g('stem + -e / -est / -e / -en / -et / -en', 'er komme · sie habe · es gebe', 'er komme · sie habe · es gebe'), g('sein: sei · seist · sei · seien', 'irregular', 'irrégulier')] },
        { heading: 'Use', headingFr: 'Emploi', rows: [g('neutral reporting in writing', 'news, reports, exams', 'actualités, comptes rendus, examens')] },
        { heading: 'Switch', headingFr: 'Basculer', rows: [g('if I = present → Konjunktiv II', 'sie hätten · sie kämen', 'sie hätten · sie kämen')] },
      ] } },
  ],
};
