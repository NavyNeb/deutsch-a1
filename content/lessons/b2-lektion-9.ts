import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion9: Lesson = {
  id: 'b2-l9', level: 'B2', module: 3, number: 9,
  title: { de: 'Vermutungen', en: 'Assumptions and guesses', fr: 'Suppositions et hypothèses' },
  theme: 'Expressing certainty and doubt: modal verbs for assumptions (muss, dürfte, könnte, kann), Futur I and Futur II, and adverbs like wahrscheinlich', themeFr: 'Exprimer certitude et doute : verbes modaux de supposition (muss, dürfte, könnte, kann), Futur I et Futur II, et adverbes comme wahrscheinlich',
  goals: ['Use modal verbs to express how sure you are', 'Form the Futur I and Futur II for assumptions', 'Refer to the past with "modal + Partizip II + haben/sein"', 'Choose adverbs that match your degree of certainty'], goalsFr: ['Utiliser les modaux pour dire ton degré de certitude', 'Former le Futur I et le Futur II pour les suppositions', 'Se référer au passé avec « modal + Partizip II + haben/sein »', 'Choisir les adverbes selon ton degré de certitude'],
  canDo: g('Ich kann Vermutungen über Gegenwart, Vergangenheit und Zukunft äußern und zeigen, wie sicher ich bin.', 'I can express assumptions about the present, the past and the future and show how sure I am.', 'Je sais exprimer des suppositions sur le présent, le passé et le futur et montrer à quel point j’en suis sûr.'),
  steps: [
    { kind: 'intro', title: 'Vermutungen: Wie sicher bist du? 🔍', titleFr: 'Suppositions : à quel point es-tu sûr ? 🔍',
      scene: 'Two colleagues wonder why Max is late — and every guess has a different degree of certainty.', sceneFr: 'Deux collègues se demandent pourquoi Max est en retard — et chaque supposition a un degré de certitude différent.',
      goals: ['Use modal verbs to show certainty', 'Guess about the past with modal + Partizip II + haben/sein', 'Use Futur I and II for assumptions and pick matching adverbs'],
      goalsFr: ['Utiliser les verbes modaux pour montrer la certitude', 'Supposer le passé avec modal + participe II + haben/sein', 'Utiliser Futur I et II pour les suppositions et choisir les adverbes adaptés'] },

    // ───────────── 1 · Modals as certainty ─────────────
    { kind: 'chapter', title: 'Modalverben: wie sicher?', titleFr: 'Verbes modaux : quel degré de certitude ?', blurb: 'muss · dürfte · könnte · kann nicht.', blurbFr: 'muss · dürfte · könnte · kann nicht.' },

    { kind: 'situation', title: 'Wo ist Max?', titleFr: 'Où est Max ?',
      setting: 'Max is not at his desk.', settingFr: 'Max n’est pas à son bureau.',
      lines: [
        line('Lea', 'Max ist nicht da. Er muss krank sein. Oder er dürfte im Stau stehen. Er könnte auch im Meeting sein.', 'Max is not here. He must be ill. Or he is probably stuck in traffic. He could also be in a meeting.', 'Max n’est pas là. Il doit être malade. Ou il est probablement dans les embouteillages. Il pourrait aussi être en réunion.'),
        line('Tom', 'Das kann nicht stimmen! Er hat gestern noch gesagt, er sei fit. Anscheinend ist er nicht zu Hause. Offenbar hat er verschlafen.', 'That can’t be true! He said yesterday that he was fit. Apparently he is not at home. Evidently he overslept.', 'Ça ne peut pas être vrai ! Hier encore il disait qu’il était en forme. Apparemment il n’est pas chez lui. Il a visiblement dormi trop longtemps.'),
        line('Lea', 'Ich vermute, dass er bestimmt gleich kommt. Vielleicht regnet es. Ich habe Zweifel, ob das stimmt. Möglicherweise verspätet sich der Zug. Sicherlich hat er eine Nachricht geschickt.', 'I suspect he will surely come any minute. Perhaps it is raining. I have doubts whether that is true. Possibly the train is late. Surely he has sent a message.', 'Je suppose qu’il arrivera sûrement bientôt. Peut-être qu’il pleut. J’ai des doutes sur la véracité de ça. Peut-être que le train a du retard. Il a sûrement envoyé un message.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l9-e11', prompt: 'What does Lea suspect about Max?', promptFr: 'Que suppose Lea à propos de Max ?', options: ['He will probably come soon', 'He quit his job', 'He is on holiday'], optionsFr: ['Il arrivera probablement bientôt', 'Il a démissionné', 'Il est en vacances'], answer: 0, explain: 'Lea says: “Ich vermute, dass er bestimmt gleich kommt.”', explainFr: 'Lea dit : « Ich vermute, dass er bestimmt gleich kommt. »', hint: 'Look for “vermute”.', hintFr: 'Cherche « vermute ».' } },

    { kind: 'wordgroup', title: 'Wie sicher bist du?', titleFr: 'À quel point es-tu sûr ?',
      items: [{ id: 'b2l9-sicherlich', german: 'sicherlich', english: 'surely / certainly', french: 'sûrement', gender: null, syllables: ['SI', 'cher', 'lich'], pronunciation: 'ZI-kher-likh', example: { de: 'Das war sicherlich ein Missverständnis.', en: 'That was certainly a misunderstanding.', fr: 'C’était sûrement un malentendu.' } }, { id: 'b2l9-bestimmt', german: 'bestimmt', english: 'surely', french: 'sûrement', gender: null, syllables: ['be', 'STIMMT'], pronunciation: 'be-SHTIMT', example: { de: 'Er hat es bestimmt vergessen.', en: 'He has surely forgotten it.', fr: 'Il l’a sûrement oublié.' } }, { id: 'b2l9-wahrscheinlich', german: 'wahrscheinlich', english: 'probably', french: 'probablement', gender: null, syllables: ['wahr', 'SCHEIN', 'lich'], pronunciation: 'vahr-SHINE-likh', example: { de: 'Er kommt wahrscheinlich später.', en: 'He will probably come later.', fr: 'Il viendra probablement plus tard.' } }, { id: 'b2l9-vielleicht', german: 'vielleicht', english: 'perhaps', french: 'peut-être', gender: null, syllables: ['viel', 'LEICHT'], pronunciation: 'fee-LYKHT', example: { de: 'Vielleicht regnet es morgen.', en: 'Perhaps it will rain tomorrow.', fr: 'Il pleuvra peut-être demain.' } }, { id: 'b2l9-moeglicherweise', german: 'möglicherweise', english: 'possibly', french: 'éventuellement', gender: null, syllables: ['MÖG', 'li', 'cher', 'wei', 'se'], pronunciation: 'MOEG-li-kher-VY-ze', example: { de: 'Möglicherweise verspätet sich der Zug.', en: 'The train may possibly be delayed.', fr: 'Le train sera peut-être en retard.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l9-e6', pairs: [{ de: 'sicherlich', en: 'certainly', fr: 'sûrement' }, { de: 'wahrscheinlich', en: 'probably', fr: 'probablement' }, { de: 'möglicherweise', en: 'possibly', fr: 'éventuellement' }, { de: 'anscheinend', en: 'apparently', fr: 'apparemment' }], hint: 'Match each adverb to its meaning.', hintFr: 'Associe chaque adverbe à sa signification.' } },

    { kind: 'wordgroup', title: 'Vermuten und zweifeln', titleFr: 'Supposer et douter',
      items: [{ id: 'b2l9-vermuten', german: 'vermuten', english: 'to assume / suspect', french: 'supposer', gender: null, syllables: ['ver', 'MU', 'ten'], pronunciation: 'fer-MOO-ten', example: { de: 'Ich vermute, dass er verschlafen hat.', en: 'I suspect he overslept.', fr: 'Je suppose qu’il a dormi trop longtemps.' } }, { id: 'b2l9-annehmen', german: 'annehmen', english: 'to suppose', french: 'supposer', gender: null, syllables: ['AN', 'neh', 'men'], pronunciation: 'AHN-nay-men', example: { de: 'Ich nehme an, dass es klappt.', en: 'I suppose it will work out.', fr: 'Je suppose que ça va marcher.' } }, { id: 'b2l9-anscheinend', german: 'anscheinend', english: 'apparently', french: 'apparemment', gender: null, syllables: ['AN', 'schei', 'nend'], pronunciation: 'AHN-shy-nent', example: { de: 'Anscheinend ist er krank.', en: 'Apparently he is ill.', fr: 'Apparemment il est malade.' } }, { id: 'b2l9-offenbar', german: 'offenbar', english: 'evidently', french: 'visiblement', gender: null, syllables: ['OF', 'fen', 'bar'], pronunciation: 'OF-fen-bar', example: { de: 'Er ist offenbar nicht zu Hause.', en: 'He is evidently not at home.', fr: 'Il n’est visiblement pas chez lui.' } }, { id: 'b2l9-zweifel', german: 'der Zweifel', english: 'the doubt', french: 'le doute', gender: 'der', syllables: ['ZWEI', 'fel'], pronunciation: 'dair TSVY-fel', example: { de: 'Ich habe Zweifel, ob das stimmt.', en: 'I have doubts whether that is right.', fr: 'J’ai des doutes sur la véracité.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l9-modal', title: 'Modal verbs as a certainty scale', titleFr: 'Les verbes modaux comme échelle de certitude',
      lead: 'muss ≈ 95 %, dürfte ≈ 80 %, könnte ≈ 50 %, kann nicht = impossible — all with a plain infinitive.',
      leadFr: 'muss ≈ 95 %, dürfte ≈ 80 %, könnte ≈ 50 %, kann nicht = impossible — tous avec un simple infinitif.',
      explanationMd: 'Modal verbs also express **how sure you are** (different from their usual meaning). **muss** + infinitive = **I am sure** (≈ 95 %): **Er muss zu Hause sein.** **dürfte** + infinitive = **probably** (≈ 80 %): **Er dürfte zu Hause sein.** **kann / könnte** + infinitive = **possibly** (≈ 50 %): **Er könnte zu Hause sein.** **kann nicht** = **impossible**: **Er kann nicht zu Hause sein.** — I am sure he is **not** home. The **infinitive** gives the **present** meaning: **Er muss krank sein.** Add **adverbs** to fine-tune: **sicherlich, bestimmt, wahrscheinlich, vielleicht, möglicherweise**.',
      explanationMdFr: 'Les verbes modaux expriment aussi **ton degré de certitude** (différent de leur sens habituel). **muss** + infinitif = **j’en suis sûr** (≈ 95 %) : **Er muss zu Hause sein.** **dürfte** + infinitif = **probablement** (≈ 80 %) : **Er dürfte zu Hause sein.** **kann / könnte** + infinitif = **peut-être** (≈ 50 %) : **Er könnte zu Hause sein.** **kann nicht** = **impossible** : **Er kann nicht zu Hause sein.** — je suis sûr qu’il **n’est pas** chez lui. L’**infinitif** donne le sens **présent** : **Er muss krank sein.** Ajoute des **adverbes** pour nuancer : **sicherlich, bestimmt, wahrscheinlich, vielleicht, möglicherweise**.',
      tables: [{ title: 'Certainty scale', titleFr: 'Échelle de certitude', headers: ['Modal', 'Meaning', 'Example'], headersFr: ['Modal', 'Sens', 'Exemple'],
        rows: [['muss', '≈ 95 % sure', 'Er muss zu Hause sein.'], ['dürfte', '≈ 80 % probably', 'Er dürfte zu Hause sein.'], ['kann / könnte', '≈ 50 % possibly', 'Er könnte zu Hause sein.'], ['kann nicht', 'impossible', 'Er kann nicht zu Hause sein.']],
        rowsFr: [['muss', '≈ 95 % sûr', 'Er muss zu Hause sein.'], ['dürfte', '≈ 80 % probablement', 'Er dürfte zu Hause sein.'], ['kann / könnte', '≈ 50 % peut-être', 'Er könnte zu Hause sein.'], ['kann nicht', 'impossible', 'Er kann nicht zu Hause sein.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'muss', role: 'verb' }, { text: 'zu Hause', role: 'place' }, { text: 'sein.', role: 'verb' }], en: 'He must be at home.', fr: 'Il doit être chez lui.' },
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'dürfte', role: 'verb' }, { text: 'nicht', role: 'other' }, { text: 'schwer', role: 'other' }, { text: 'sein.', role: 'verb' }], en: 'That probably isn’t hard.', fr: 'Ce n’est probablement pas difficile.' },
      ],
      contrast: {
        a: { label: 'Sure', labelFr: 'Sûr', note: 'muss', noteFr: 'muss', examples: [g('Sie muss sehr müde sein.', 'She must be very tired.', 'Elle doit être très fatiguée.'), g('Er muss zu Hause sein.', 'He must be at home.', 'Il doit être chez lui.')] },
        b: { label: 'Possible', labelFr: 'Possible', note: 'könnte', noteFr: 'könnte', examples: [g('Er könnte zu Hause sein.', 'He could be at home.', 'Il pourrait être chez lui.'), g('Das könnte stimmen.', 'That could be true.', 'Ça pourrait être vrai.')] },
      },
      examples: [
        g('Sie muss sehr müde sein.', 'She must be very tired.', 'Elle doit être très fatiguée.'),
        g('Das dürfte nicht schwer sein.', 'That probably isn’t hard.', 'Ce n’est probablement pas difficile.'),
        g('Er könnte im Meeting sein.', 'He could be in a meeting.', 'Il pourrait être en réunion.'),
        g('Das kann nicht stimmen!', 'That can’t be true!', 'Ça ne peut pas être vrai !'),
        g('Er muss krank sein.', 'He must be ill.', 'Il doit être malade.'),
        g('Er dürfte im Stau stehen.', 'He is probably stuck in traffic.', 'Il est probablement dans les embouteillages.'),
      ],
      mistakes: [
        { wrong: 'Er muss nicht zu Hause sein. (= impossible)', right: 'Er kann nicht zu Hause sein.', why: 'muss nicht = does not have to; “impossible” is kann nicht.', whyFr: 'muss nicht = n’a pas besoin de ; « impossible » se dit kann nicht.' },
        { wrong: 'Er dürfte zu Hause ist.', right: 'Er dürfte zu Hause sein.', why: 'After a modal the verb is an infinitive.', whyFr: 'Après un modal, le verbe est à l’infinitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l9-e1', prompt: 'Which modal expresses the HIGHEST certainty?', promptFr: 'Quel modal exprime la PLUS grande certitude ?', options: ['könnte', 'dürfte', 'muss'], answer: 2, explain: '"muss" = almost certain.', explainFr: '« muss » = presque certain.', hint: 'muss > dürfte > könnte', hintFr: 'muss > dürfte > könnte' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l9-e2', prompt: 'Er ___ zu Hause sein. (probably — dürfte)', answer: 'dürfte', hint: 'Konjunktiv II of dürfen', hintFr: 'Konjunktiv II de dürfen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l9-e8', prompt: 'Das ___ nicht stimmen! (can’t be true)', answer: 'kann', hint: 'kann nicht = impossible', hintFr: 'kann nicht = impossible' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l9-e7', prompt: 'Listen. How sure is the speaker?', promptFr: 'Écoute. À quel point le locuteur est-il sûr ?', audio: { ttsText: 'Er muss den Schlüssel verloren haben.' }, options: ['Very sure', 'Not sure at all', 'Asking permission'], optionsFr: ['Très sûr', 'Pas du tout sûr', 'Demande la permission'], answer: 0, hint: '"muss" = confident guess.', hintFr: '« muss » = supposition assurée.' } },

    // ───────────── 2 · Past and future guesses ─────────────
    { kind: 'chapter', title: 'Vergangenheit und Futur', titleFr: 'Passé et futur', blurb: 'modal + Partizip II + haben/sein · Futur I/II.', blurbFr: 'modal + participe II + haben/sein · Futur I/II.' },

    { kind: 'situation', title: 'Das hat er bestimmt vergessen', titleFr: 'Il a sûrement oublié',
      setting: 'Where is the key?', settingFr: 'Où est la clé ?',
      lines: [
        line('Lea', 'Er muss den Schlüssel verloren haben. Er muss das Auto gestohlen haben? Nein! Sie dürfte schon abgereist sein.', 'He must have lost the key. He must have stolen the car? No! She has probably already left.', 'Il doit avoir perdu la clé. Il doit avoir volé la voiture ? Non ! Elle est probablement déjà partie.'),
        line('Tom', 'Er wird zu Hause sein. Sie wird wohl schon schlafen. Er wird das vergessen haben.', 'He is probably at home. She is probably asleep already. He has probably forgotten it.', 'Il est probablement chez lui. Elle dort probablement déjà. Il a probablement oublié.'),
        line('Lea', 'Das war sicherlich ein Missverständnis. Er hat es bestimmt vergessen.', 'That was surely a misunderstanding. He surely forgot it.', 'C’était sûrement un malentendu. Il l’a sûrement oublié.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l9-e10', prompt: 'Listen. What does the speaker guess?', promptFr: 'Écoute. Que suppose le locuteur ?', audio: { ttsText: 'Sie wird wohl schon schlafen.' }, options: ['She is probably asleep', 'She is working', 'She is on holiday'], optionsFr: ['Elle dort probablement', 'Elle travaille', 'Elle est en vacances'], answer: 0, hint: 'wohl = probably.', hintFr: 'wohl = probablement.' } },

    { kind: 'grammar', note: {
      id: 'b2l9-vergangenheit', title: 'Guessing about the past and the future', titleFr: 'Supposer le passé et le futur',
      lead: 'Past guess: modal (present) + Partizip II + haben/sein. Futur I = assumption about the present; Futur II = guess about the past.',
      leadFr: 'Supposition passée : modal (présent) + participe II + haben/sein. Futur I = supposition sur le présent ; Futur II = supposition sur le passé.',
      explanationMd: '**Past guesses:** modal + **Partizip II + haben / sein** (the modal stays in the **present**): **Er muss das Auto gestohlen haben.** — he must have stolen the car. **Sie dürfte schon abgereist sein.** — she has probably already left. **Futur I** (**werden + Infinitiv**) can express an **assumption about the present**: **Er wird zu Hause sein.** — he is probably at home. **Futur II** (**werden + Partizip II + haben / sein**) guesses about the **past**: **Er wird das vergessen haben.** — he has probably forgotten it. **wohl, wahrscheinlich, sicher** often add certainty: **Sie wird wohl schon schlafen.**',
      explanationMdFr: '**Suppositions passées :** modal + **participe II + haben / sein** (le modal reste au **présent**) : **Er muss das Auto gestohlen haben.** — il doit avoir volé la voiture. **Sie dürfte schon abgereist sein.** — elle est probablement déjà partie. Le **Futur I** (**werden + infinitif**) peut exprimer une **supposition sur le présent** : **Er wird zu Hause sein.** — il est probablement chez lui. Le **Futur II** (**werden + participe II + haben / sein**) suppose le **passé** : **Er wird das vergessen haben.** — il a probablement oublié. **wohl, wahrscheinlich, sicher** ajoutent souvent de la certitude : **Sie wird wohl schon schlafen.**',
      tables: [{ title: 'Time reference', titleFr: 'Référence temporelle', headers: ['Form', 'Time', 'Example'], headersFr: ['Forme', 'Temps', 'Exemple'],
        rows: [['modal + infinitive', 'present', 'Er muss krank sein.'], ['modal + Part. II + haben/sein', 'past', 'Er muss den Schlüssel verloren haben.'], ['Futur I (wird + inf.)', 'present guess', 'Sie wird wohl schon schlafen.'], ['Futur II (wird + Part. II + haben)', 'past guess', 'Er wird das vergessen haben.']],
        rowsFr: [['modal + infinitif', 'présent', 'Er muss krank sein.'], ['modal + part. II + haben/sein', 'passé', 'Er muss den Schlüssel verloren haben.'], ['Futur I (wird + inf.)', 'supposition présent', 'Sie wird wohl schon schlafen.'], ['Futur II (wird + part. II + haben)', 'supposition passé', 'Er wird das vergessen haben.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'muss', role: 'verb' }, { text: 'den Schlüssel', role: 'accusative' }, { text: 'verloren haben.', role: 'verb' }], en: 'He must have lost the key.', fr: 'Il doit avoir perdu la clé.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'wird', role: 'verb' }, { text: 'das', role: 'accusative' }, { text: 'vergessen haben.', role: 'verb' }], en: 'He has probably forgotten it.', fr: 'Il a probablement oublié.' },
      ],
      contrast: {
        a: { label: 'Present guess', labelFr: 'Supposition présente', note: 'infinitive / Futur I', noteFr: 'infinitif / Futur I', examples: [g('Er muss krank sein.', 'He must be ill.', 'Il doit être malade.'), g('Sie wird wohl schon schlafen.', 'She is probably asleep already.', 'Elle dort probablement déjà.')] },
        b: { label: 'Past guess', labelFr: 'Supposition passée', note: 'Partizip II + haben/sein', noteFr: 'participe II + haben/sein', examples: [g('Er muss den Schlüssel verloren haben.', 'He must have lost the key.', 'Il doit avoir perdu la clé.'), g('Er wird das vergessen haben.', 'He has probably forgotten it.', 'Il a probablement oublié.')] },
      },
      examples: [
        g('Er muss den Schlüssel verloren haben.', 'He must have lost the key.', 'Il doit avoir perdu la clé.'),
        g('Sie dürfte schon abgereist sein.', 'She has probably already left.', 'Elle est probablement déjà partie.'),
        g('Sie wird wohl schon schlafen.', 'She is probably asleep already.', 'Elle dort probablement déjà.'),
        g('Er wird das vergessen haben.', 'He has probably forgotten it.', 'Il a probablement oublié.'),
        g('Er hat es bestimmt vergessen.', 'He surely forgot it.', 'Il l’a sûrement oublié.'),
        g('Das war sicherlich ein Missverständnis.', 'That was surely a misunderstanding.', 'C’était sûrement un malentendu.'),
      ],
      mistakes: [
        { wrong: 'Er musste das Auto gestohlen haben. (guess)', right: 'Er muss das Auto gestohlen haben.', why: 'For a guess the modal stays in the present; the past is in the Partizip II + haben.', whyFr: 'Pour une supposition, le modal reste au présent ; le passé est dans le participe II + haben.' },
        { wrong: 'Er wird das vergessen.', right: 'Er wird das vergessen haben.', why: 'Futur II for the past: wird + Partizip II + haben.', whyFr: 'Futur II pour le passé : wird + participe II + haben.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l9-e3', tokens: ['gestohlen', 'Er', 'das Auto', 'muss', 'haben'], answer: ['Er', 'muss', 'das Auto', 'gestohlen', 'haben'], hint: 'modal + Partizip II + haben at the end.', hintFr: 'modal + Partizip II + haben à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l9-e5', prompt: 'Er ___ wohl krank sein. (werden — Futur I)', answer: 'wird', hint: 'er wird', hintFr: 'er wird' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l9-e9', prompt: 'Which sentence guesses about the PAST?', promptFr: 'Quelle phrase suppose sur le PASSÉ ?', options: ['Er wird zu Hause sein.', 'Er wird das vergessen haben.', 'Er muss zu Hause sein.'], answer: 1, explain: 'Futur II (werden + Partizip II + haben) = guess about the past.', explainFr: 'Futur II (werden + Partizip II + haben) = supposition sur le passé.', hint: 'Look for Partizip II + haben.', hintFr: 'Cherche Partizip II + haben.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l9-e4', prompt: '"Sie dürfte schon abgereist sein." means …', promptFr: '« Sie dürfte schon abgereist sein. » signifie …', options: ['She has probably already left.', 'She is allowed to leave.', 'She must leave now.'], answer: 0, explain: 'dürfte + Partizip II + sein = probably … (past).', explainFr: 'dürfte + Partizip II + sein = probablement … (passé).', hint: 'probable guess about the past', hintFr: 'supposition probable sur le passé' } },

    { kind: 'pronunciation', focus: 'Stress the modal for certainty: "Er MUSS krank sein" (sure) vs. "Er KÖNNte krank sein" (maybe) — the stressed modal carries the speaker’s attitude', focusFr: 'Accentue le modal pour la certitude : « Er MUSS krank sein » (sûr) vs « Er KÖNNte krank sein » (peut-être) — le modal accentué porte l’attitude du locuteur', items: [{ id: 'b2l9-duerfte-pron', german: 'dürfte', english: 'probably (would be allowed)', french: 'devrait / probablement', gender: null, syllables: ['DÜRF', 'te'], pronunciation: 'DUERF-te', example: { de: 'Das dürfte stimmen.', en: 'That is probably right.', fr: 'Ça devrait être juste.' } }, { id: 'b2l9-wahrscheinlich-pron', german: 'wahrscheinlich', english: 'probably', french: 'probablement', gender: null, syllables: ['wahr', 'SCHEIN', 'lich'], pronunciation: 'vahr-SHINE-likh', example: { de: 'Er kommt wahrscheinlich.', en: 'He probably comes.', fr: 'Il viendra probablement.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **show how sure you are** with **muss / dürfte / könnte / kann nicht**, **guess about the past** with **modal + Partizip II + haben**, and use **Futur I / II** for assumptions. 🎉',
      summaryFr: 'Tu sais maintenant **montrer ton degré de certitude** avec **muss / dürfte / könnte / kann nicht**, **supposer le passé** avec **modal + participe II + haben**, et utiliser **Futur I / II** pour les suppositions. 🎉',
      card: { title: 'Assumptions on one page', titleFr: 'Les suppositions en une page', sections: [
        { heading: 'Certainty', headingFr: 'Certitude', rows: [g('muss ≈ 95 % · dürfte ≈ 80 %', 'könnte ≈ 50 % · kann nicht = 0', 'könnte ≈ 50 % · kann nicht = 0')] },
        { heading: 'Past', headingFr: 'Passé', rows: [g('modal + Partizip II + haben/sein', 'Er muss es gesehen haben.', 'Er muss es gesehen haben.')] },
        { heading: 'Futur', headingFr: 'Futur', rows: [g('Futur I → present guess', 'Er wird zu Hause sein.', 'Er wird zu Hause sein.'), g('Futur II → past guess', 'Er wird es vergessen haben.', 'Er wird es vergessen haben.')] },
      ] } },
  ],
};
