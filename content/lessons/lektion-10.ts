import type { Lesson } from '../types';

export const lektion10: Lesson = {
  id: 'l10', level: 'A1', module: 4, number: 10,
  title: { de: 'Gesundheit und Körper', en: 'Health and the body', fr: 'La santé et le corps' },
  theme: 'Body parts, saying what hurts, and the modals müssen / dürfen',
  themeFr: 'Les parties du corps, dire ce qui fait mal, et les modaux müssen / dürfen',
  goals: ['Name parts of the body', 'Say what hurts with "tut weh"', 'Talk to a doctor', 'Use the modal verbs "müssen" (must) and "dürfen" (may)'],
  goalsFr: ['Nommer les parties du corps', 'Dire ce qui fait mal avec « tut weh »', 'Parler à un médecin', 'Utiliser les verbes modaux « müssen » (devoir) et « dürfen » (avoir le droit)'],
  steps: [
    { kind: 'intro', title: 'Beim Arzt 🩺', titleFr: 'Chez le médecin 🩺',
      scene: 'A visit to the doctor: describing symptoms.', sceneFr: 'Une visite chez le médecin : décrire des symptômes.',
      goals: ['Name parts of the body', 'Say what hurts', 'Understand a doctor’s advice', 'Use "müssen" and "dürfen"'],
      goalsFr: ['Nommer les parties du corps', 'Dire ce qui fait mal', 'Comprendre les conseils du médecin', 'Utiliser « müssen » et « dürfen »'] },

    { kind: 'vocab', item: { id: 'l10-koerper', german: 'der Körper', english: 'the body', french: 'le corps', gender: 'der', syllables: ['KÖR', 'per'], pronunciation: 'dair KOER-per', example: { de: 'Der Körper braucht Schlaf.', en: 'The body needs sleep.', fr: 'Le corps a besoin de sommeil.' } } },
    { kind: 'vocab', item: { id: 'l10-kopf', german: 'der Kopf', english: 'the head', french: 'la tête', gender: 'der', syllables: ['KOPF'], pronunciation: 'dair KOPF', example: { de: 'Mein Kopf tut weh.', en: 'My head hurts.', fr: 'J’ai mal à la tête.' } } },
    { kind: 'vocab', item: { id: 'l10-hand', german: 'die Hand', english: 'the hand', french: 'la main', gender: 'die', syllables: ['HAND'], pronunciation: 'dee HAHNT', example: { de: 'Die Hand tut weh.', en: 'The hand hurts.', fr: 'La main fait mal.' } } },
    { kind: 'vocab', item: { id: 'l10-bein', german: 'das Bein', english: 'the leg', french: 'la jambe', gender: 'das', syllables: ['BEIN'], pronunciation: 'dahs BINE', example: { de: 'Das Bein ist gebrochen.', en: 'The leg is broken.', fr: 'La jambe est cassée.' } } },
    { kind: 'vocab', item: { id: 'l10-bauch', german: 'der Bauch', english: 'the stomach / belly', french: 'le ventre', gender: 'der', syllables: ['BAUCH'], pronunciation: 'dair BOWKH', example: { de: 'Mein Bauch tut weh.', en: 'My stomach hurts.', fr: 'J’ai mal au ventre.' } } },
    { kind: 'vocab', item: { id: 'l10-arzt', german: 'der Arzt', english: 'the doctor', french: 'le médecin', gender: 'der', syllables: ['ARZT'], pronunciation: 'dair ARTST', example: { de: 'Ich gehe zum Arzt.', en: 'I go to the doctor.', fr: 'Je vais chez le médecin.' } } },
    { kind: 'vocab', item: { id: 'l10-krank', german: 'krank', english: 'ill / sick', french: 'malade', gender: null, syllables: ['KRANK'], pronunciation: 'krahnk', example: { de: 'Ich bin krank.', en: 'I am ill.', fr: 'Je suis malade.' } } },
    { kind: 'vocab', item: { id: 'l10-gesund', german: 'gesund', english: 'healthy', french: 'en bonne santé', gender: null, syllables: ['ge', 'SUND'], pronunciation: 'ge-ZOONT', example: { de: 'Obst ist gesund.', en: 'Fruit is healthy.', fr: 'Les fruits sont bons pour la santé.' } } },
    { kind: 'vocab', item: { id: 'l10-muessen', german: 'müssen', english: 'must / to have to', french: 'devoir', gender: null, syllables: ['MÜS', 'sen'], pronunciation: 'MUES-sen', example: { de: 'Ich muss schlafen.', en: 'I have to sleep.', fr: 'Je dois dormir.' } } },
    { kind: 'vocab', item: { id: 'l10-duerfen', german: 'dürfen', english: 'may / to be allowed to', french: 'avoir le droit de', gender: null, syllables: ['DÜR', 'fen'], pronunciation: 'DUER-fen', example: { de: 'Du darfst nicht rauchen.', en: 'You are not allowed to smoke.', fr: 'Tu n’as pas le droit de fumer.' } } },

    { kind: 'grammar', note: {
      id: 'l10-tutweh', title: 'Saying what hurts: "tut weh"', titleFr: 'Dire ce qui fait mal : « tut weh »',
      explanationMd: 'Use **tut weh** (hurts) for one body part, or **tun weh** for several:\n\n- Der Kopf **tut weh**. — My head hurts.\n- Die Füße **tun weh**. — My feet hurt.\n\nAsk: **Was tut dir weh?** (What hurts?)',
      explanationMdFr: 'Utilise **tut weh** (fait mal) pour une partie du corps, ou **tun weh** pour plusieurs :\n\n- Der Kopf **tut weh**. — J’ai mal à la tête.\n- Die Füße **tun weh**. — J’ai mal aux pieds.\n\nDemande : **Was tut dir weh?** (Qu’est-ce qui te fait mal ?)',
      examples: [
        { de: 'Mein Bauch tut weh.', en: 'My stomach hurts.', fr: 'J’ai mal au ventre.' },
        { de: 'Was tut dir weh?', en: 'What hurts?', fr: 'Qu’est-ce qui te fait mal ?' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l10-muessen-note', title: 'The modal verb "müssen" (must)', titleFr: 'Le verbe modal « müssen » (devoir)',
      explanationMd: '**müssen** says what you have to do. The infinitive goes to the **end**:\n\n- ich **muss** — I must\n- du **musst** — you must\n- er/sie/es **muss** — he/she/it must\n\nIch **muss** zum Arzt **gehen**.',
      explanationMdFr: '**müssen** dit ce qu’on doit faire. L’infinitif va à la **fin** :\n\n- ich **muss** — je dois\n- du **musst** — tu dois\n- er/sie/es **muss** — il/elle/on doit\n\nIch **muss** zum Arzt **gehen**.',
      examples: [
        { de: 'Ich muss schlafen.', en: 'I have to sleep.', fr: 'Je dois dormir.' },
        { de: 'Du musst Wasser trinken.', en: 'You have to drink water.', fr: 'Tu dois boire de l’eau.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'l10-duerfen-note', title: 'The modal verb "dürfen" (may)', titleFr: 'Le verbe modal « dürfen » (avoir le droit)',
      explanationMd: '**dürfen** says what is allowed. With **nicht**, it means "must not":\n\n- ich **darf** — I may\n- du **darfst** — you may\n- er/sie/es **darf** — he/she/it may\n\nDu **darfst** hier **nicht** rauchen. — You must not smoke here.',
      explanationMdFr: '**dürfen** dit ce qui est permis. Avec **nicht**, cela signifie « ne pas avoir le droit » :\n\n- ich **darf** — j’ai le droit\n- du **darfst** — tu as le droit\n- er/sie/es **darf** — il/elle/on a le droit\n\nDu **darfst** hier **nicht** rauchen. — Tu n’as pas le droit de fumer ici.',
      examples: [
        { de: 'Darf ich hier essen?', en: 'May I eat here?', fr: 'Ai-je le droit de manger ici ?' },
        { de: 'Kinder dürfen das nicht.', en: 'Children are not allowed to do that.', fr: 'Les enfants n’ont pas le droit de faire ça.' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l10-e1', prompt: 'Ich ___ zum Arzt gehen. (müssen)', answer: 'muss', hint: 'first person singular of müssen', hintFr: 'première personne du singulier de müssen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l10-e2', prompt: 'What does "Mein Kopf tut weh" mean?', promptFr: 'Que signifie « Mein Kopf tut weh » ?', options: ['My head hurts', 'My head is big', 'I wash my head'], optionsFr: ['J’ai mal à la tête', 'Ma tête est grande', 'Je me lave la tête'], answer: 0, explain: '"tut weh" means "hurts".', explainFr: '« tut weh » signifie « fait mal ».', hint: 'Focus on "tut weh".', hintFr: 'Concentre-toi sur « tut weh ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l10-e3', word: 'Kopf', answer: 'der', hint: '"Kopf" (head) is masculine.', hintFr: '« Kopf » (tête) est masculin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l10-e4', pairs: [ { de: 'der Kopf', en: 'head', fr: 'tête' }, { de: 'die Hand', en: 'hand', fr: 'main' }, { de: 'das Bein', en: 'leg', fr: 'jambe' } ], hint: 'Match each body part to its meaning.', hintFr: 'Associe chaque partie du corps à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l10-e5', prompt: 'Listen. What hurts?', promptFr: 'Écoute. Qu’est-ce qui fait mal ?', audio: { ttsText: 'Guten Tag, Herr Doktor. Mein Bauch tut weh.' }, options: ['The stomach', 'The head', 'The hand'], optionsFr: ['Le ventre', 'La tête', 'La main'], answer: 0, hint: 'Listen for the body part before "tut weh".', hintFr: 'Écoute la partie du corps avant « tut weh ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l10-e6', prompt: 'Du ___ hier nicht rauchen. (dürfen)', answer: 'darfst', hint: 'second person singular of dürfen', hintFr: 'deuxième personne du singulier de dürfen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l10-e7', prompt: 'Which sentence means "I have to sleep"?', promptFr: 'Quelle phrase signifie « Je dois dormir » ?', options: ['Ich darf schlafen.', 'Ich muss schlafen.', 'Ich kann schlafen.'], answer: 1, explain: '"müssen" = must / have to.', explainFr: '« müssen » = devoir.', hint: 'Which modal means "must"?', hintFr: 'Quel modal signifie « devoir » ?' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l10-e8', tokens: ['gehen', 'muss', 'zum', 'Ich', 'Arzt'], answer: ['Ich', 'muss', 'zum', 'Arzt', 'gehen'], hint: 'Modal in second position, infinitive at the end.', hintFr: 'Modal en deuxième position, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l10-e9', prompt: 'Obst und Gemüse sind ___. (healthy)', answer: 'gesund', hint: 'the opposite of "krank"', hintFr: 'le contraire de « krank »' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l10-e10', prompt: 'Listen. What must the patient do?', promptFr: 'Écoute. Que doit faire le patient ?', audio: { ttsText: 'Sie sind krank. Sie müssen schlafen und viel Wasser trinken.' }, options: ['Sleep and drink water', 'Go to work', 'Do sport'], optionsFr: ['Dormir et boire de l’eau', 'Aller travailler', 'Faire du sport'], answer: 0, hint: 'Listen after "Sie müssen".', hintFr: 'Écoute après « Sie müssen ».' } },

    { kind: 'pronunciation', focus: 'The "z" is "ts" even in a cluster (Arzt = "artst"), and "ö" in Körper is rounded', focusFr: 'Le « z » se prononce « ts » même en groupe (Arzt = « artst »), et le « ö » de Körper est arrondi', items: [
      { id: 'l10-arzt-pron', german: 'Arzt', english: 'doctor', french: 'médecin', gender: null, syllables: ['ARZT'], pronunciation: 'artst', example: { de: 'Ich gehe zum Arzt.', en: 'I go to the doctor.', fr: 'Je vais chez le médecin.' } },
      { id: 'l10-koerper-pron', german: 'Körper', english: 'body', french: 'corps', gender: null, syllables: ['KÖR', 'per'], pronunciation: 'KOER-per', example: { de: 'Der Körper ist müde.', en: 'The body is tired.', fr: 'Le corps est fatigué.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now name parts of the body, say what hurts with **tut weh**, talk to a doctor, and use the modals **müssen** (must) and **dürfen** (may). 🎉',
      summaryFr: 'Tu sais maintenant nommer les parties du corps, dire ce qui fait mal avec **tut weh**, parler à un médecin, et utiliser les modaux **müssen** (devoir) et **dürfen** (avoir le droit). 🎉' },
  ],
};
