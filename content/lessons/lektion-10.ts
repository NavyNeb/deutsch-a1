import type { Lesson } from '../types';
import { g, line, word } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept; three symptom words are new.

export const lektion10: Lesson = {
  id: 'l10', level: 'A1', module: 4, number: 19,
  title: { de: 'Gesundheit und Körper', en: 'Health and the body', fr: 'La santé et le corps' },
  theme: 'Body parts, saying what hurts, and the modals müssen / dürfen', themeFr: 'Les parties du corps, dire ce qui fait mal, et les modaux müssen / dürfen',
  goals: ['Name parts of the body', 'Say what hurts with "tut weh"', 'Talk to a doctor', 'Use the modal verbs "müssen" (must) and "dürfen" (may)'], goalsFr: ['Nommer les parties du corps', 'Dire ce qui fait mal avec « tut weh »', 'Parler à un médecin', 'Utiliser les verbes modaux « müssen » (devoir) et « dürfen » (avoir le droit)'],
  canDo: g('Ich kann beim Arzt sagen, was mir wehtut, und einen Rat verstehen.', 'I can say at the doctor’s what hurts and understand advice.', 'Je sais dire chez le médecin ce qui me fait mal et comprendre un conseil.'),
  steps: [
    { kind: 'intro', title: 'Gesundheit und Körper 🩺', titleFr: 'Santé et corps 🩺',
      scene: 'A patient visits the doctor.', sceneFr: 'Un patient va chez le médecin.',
      goals: ['Name parts of the body', 'Say what hurts with tut weh', 'Understand a doctor’s advice with müssen and dürfen'],
      goalsFr: ['Nommer des parties du corps', 'Dire ce qui fait mal avec tut weh', 'Comprendre un conseil du médecin avec müssen et dürfen'] },

    // ───────────── 1 · Body and pain ─────────────
    { kind: 'chapter', title: 'Körper und Schmerzen', titleFr: 'Le corps et la douleur', blurb: 'Name the body and say what hurts.', blurbFr: 'Nommer le corps et dire ce qui fait mal.' },

    { kind: 'situation', title: 'Beim Arzt', titleFr: 'Chez le médecin',
      setting: 'A patient describes the problem to the doctor.', settingFr: 'Un patient décrit son problème au médecin.',
      lines: [
        line('Ärztin', 'Guten Tag! Was tut Ihnen weh?', 'Good day! What hurts?', 'Bonjour ! Qu’est-ce qui vous fait mal ?'),
        line('Patient', 'Mein Kopf tut weh, und mein Bauch auch.', 'My head hurts, and my stomach too.', 'J’ai mal à la tête, et au ventre aussi.'),
        line('Ärztin', 'Haben Sie Fieber?', 'Do you have a fever?', 'Avez-vous de la fièvre ?'),
        line('Patient', 'Ja, ich bin krank. Ich habe Fieber und Husten.', 'Yes, I am ill. I have a fever and a cough.', 'Oui, je suis malade. J’ai de la fièvre et de la toux.'),
        line('Ärztin', 'Sie müssen im Bett bleiben und viel Wasser trinken.', 'You must stay in bed and drink a lot of water.', 'Vous devez rester au lit et boire beaucoup d’eau.'),
        line('Patient', 'Danke, Frau Doktor.', 'Thank you, doctor.', 'Merci, docteur.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l10-e11', prompt: 'What hurts the patient?', promptFr: 'Qu’est-ce qui fait mal au patient ?', options: ['The head and the stomach', 'The leg', 'The hand'], optionsFr: ['La tête et le ventre', 'La jambe', 'La main'], answer: 0, explain: 'He says: “Mein Kopf tut weh, und mein Bauch auch.”', explainFr: 'Il dit : « Mein Kopf tut weh, und mein Bauch auch. »', hint: 'Listen to the first answer.', hintFr: 'Écoute la première réponse.' } },

    { kind: 'wordgroup', title: 'Der Körper', titleFr: 'Le corps',
      items: [{ id: 'l10-koerper', german: 'der Körper', english: 'the body', french: 'le corps', gender: 'der', syllables: ['KÖR', 'per'], pronunciation: 'dair KOER-per', example: { de: 'Der Körper braucht Schlaf.', en: 'The body needs sleep.', fr: 'Le corps a besoin de sommeil.' } }, { id: 'l10-kopf', german: 'der Kopf', english: 'the head', french: 'la tête', gender: 'der', syllables: ['KOPF'], pronunciation: 'dair KOPF', example: { de: 'Mein Kopf tut weh.', en: 'My head hurts.', fr: 'J’ai mal à la tête.' } }, { id: 'l10-hand', german: 'die Hand', english: 'the hand', french: 'la main', gender: 'die', syllables: ['HAND'], pronunciation: 'dee HAHNT', example: { de: 'Die Hand tut weh.', en: 'The hand hurts.', fr: 'La main fait mal.' } }, { id: 'l10-bein', german: 'das Bein', english: 'the leg', french: 'la jambe', gender: 'das', syllables: ['BEIN'], pronunciation: 'dahs BINE', example: { de: 'Das Bein ist gebrochen.', en: 'The leg is broken.', fr: 'La jambe est cassée.' } }, { id: 'l10-bauch', german: 'der Bauch', english: 'the stomach / belly', french: 'le ventre', gender: 'der', syllables: ['BAUCH'], pronunciation: 'dair BOWKH', example: { de: 'Mein Bauch tut weh.', en: 'My stomach hurts.', fr: 'J’ai mal au ventre.' } }] },

    { kind: 'wordgroup', title: 'Gesundheit', titleFr: 'La santé',
      note: 'Fieber, Husten and Kopfschmerzen are words you will hear at every doctor’s office.', noteFr: 'Fieber, Husten et Kopfschmerzen sont des mots que tu entendras dans chaque cabinet médical.',
      items: [
        { id: 'l10-arzt', german: 'der Arzt', english: 'the doctor', french: 'le médecin', gender: 'der', syllables: ['ARZT'], pronunciation: 'dair ARTST', example: { de: 'Ich gehe zum Arzt.', en: 'I go to the doctor.', fr: 'Je vais chez le médecin.' } }, { id: 'l10-krank', german: 'krank', english: 'ill / sick', french: 'malade', gender: null, syllables: ['KRANK'], pronunciation: 'krahnk', example: { de: 'Ich bin krank.', en: 'I am ill.', fr: 'Je suis malade.' } }, { id: 'l10-gesund', german: 'gesund', english: 'healthy', french: 'en bonne santé', gender: null, syllables: ['ge', 'SUND'], pronunciation: 'ge-ZOONT', example: { de: 'Obst ist gesund.', en: 'Fruit is healthy.', fr: 'Les fruits sont bons pour la santé.' } },
        word('l10-fieber', 'das Fieber', 'das', 'the fever', 'la fièvre', ['FIE', 'ber'], 'dahs FEE-ber', g('Ich habe Fieber.', 'I have a fever.', 'J’ai de la fièvre.')),
        word('l10-husten', 'der Husten', 'der', 'the cough', 'la toux', ['HUS', 'ten'], 'dair HOO-sten', g('Ich habe Husten.', 'I have a cough.', 'J’ai de la toux.')),
        word('l10-kopfschmerzen', 'die Kopfschmerzen', 'die', 'the headache', 'le mal de tête', ['KOPF', 'schmer', 'zen'], 'dee KOPF-shmer-tsen', g('Ich habe Kopfschmerzen.', 'I have a headache.', 'J’ai mal à la tête.')),
      ] },

    { kind: 'exercise', exercise: { type: 'match', id: 'l10-e4', pairs: [{ de: 'der Kopf', en: 'head', fr: 'tête' }, { de: 'die Hand', en: 'hand', fr: 'main' }, { de: 'das Bein', en: 'leg', fr: 'jambe' }], hint: 'Match each body part to its meaning.', hintFr: 'Associe chaque partie du corps à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'l10-tut-weh', title: 'tut weh: saying what hurts', titleFr: 'tut weh : dire ce qui fait mal',
      lead: 'The body part is the subject: Der Kopf tut weh. Several parts: tun weh.',
      leadFr: 'La partie du corps est le sujet : Der Kopf tut weh. Plusieurs parties : tun weh.',
      explanationMd: 'In German the **body part is the subject** and **tut weh** is the verb: **Der Kopf tut weh.** (literally “the head does hurt”). For **several** parts use **tun weh**: **Die Füße tun weh.** Ask **Was tut dir weh?** (informal) or **Was tut Ihnen weh?** (formal). You can also name a symptom with **haben**: **Ich habe Kopfschmerzen.**',
      explanationMdFr: 'En allemand, la **partie du corps est le sujet** et **tut weh** est le verbe : **Der Kopf tut weh.** (littéralement « la tête fait mal »). Pour **plusieurs** parties, utilise **tun weh** : **Die Füße tun weh.** Demande **Was tut dir weh ?** (familier) ou **Was tut Ihnen weh ?** (formel). Tu peux aussi nommer un symptôme avec **haben** : **Ich habe Kopfschmerzen.**',
      tables: [{ title: 'tut weh / tun weh', titleFr: 'tut weh / tun weh', headers: ['One part', 'Several parts'], headersFr: ['Une partie', 'Plusieurs parties'],
        rows: [['Der Kopf tut weh.', 'Die Füße tun weh.'], ['Mein Bauch tut weh.', 'Meine Beine tun weh.'], ['Die Hand tut weh.', 'Die Hände tun weh.']],
        rowsFr: [['Der Kopf tut weh.', 'Die Füße tun weh.'], ['Mein Bauch tut weh.', 'Meine Beine tun weh.'], ['Die Hand tut weh.', 'Die Hände tun weh.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Mein Kopf', role: 'subject' }, { text: 'tut', role: 'verb' }, { text: 'weh.', role: 'verb' }], en: 'My head hurts.', fr: 'J’ai mal à la tête.' },
        { parts: [{ text: 'Was', role: 'other' }, { text: 'tut', role: 'verb' }, { text: 'Ihnen', role: 'dative' }, { text: 'weh?', role: 'verb' }], en: 'What hurts? (formal)', fr: 'Qu’est-ce qui vous fait mal ? (formel)' },
      ],
      contrast: {
        a: { label: 'tut weh', labelFr: 'tut weh', note: 'one body part', noteFr: 'une partie du corps', examples: [g('Mein Bauch tut weh.', 'My stomach hurts.', 'J’ai mal au ventre.'), g('Die Hand tut weh.', 'My hand hurts.', 'J’ai mal à la main.')] },
        b: { label: 'tun weh', labelFr: 'tun weh', note: 'several body parts', noteFr: 'plusieurs parties du corps', examples: [g('Die Füße tun weh.', 'My feet hurt.', 'J’ai mal aux pieds.'), g('Meine Beine tun weh.', 'My legs hurt.', 'J’ai mal aux jambes.')] },
      },
      examples: [
        g('Mein Bauch tut weh.', 'My stomach hurts.', 'J’ai mal au ventre.'),
        g('Was tut dir weh?', 'What hurts?', 'Qu’est-ce qui te fait mal ?'),
        g('Der Kopf tut weh.', 'My head hurts.', 'J’ai mal à la tête.'),
        g('Die Füße tun weh.', 'My feet hurt.', 'J’ai mal aux pieds.'),
        g('Ich habe Kopfschmerzen.', 'I have a headache.', 'J’ai mal à la tête.'),
        g('Ich bin krank.', 'I am ill.', 'Je suis malade.'),
        g('Obst und Gemüse sind gesund.', 'Fruit and vegetables are healthy.', 'Les fruits et les légumes sont sains.'),
      ],
      mistakes: [
        { wrong: 'Meine Beine tut weh.', right: 'Meine Beine tun weh.', why: 'Plural subject: tun weh.', whyFr: 'Sujet pluriel : tun weh.' },
        { wrong: 'Mein Kopf ist weh.', right: 'Mein Kopf tut weh.', why: 'The verb is tun, not sein.', whyFr: 'Le verbe est tun, pas sein.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l10-e2', prompt: 'What does "Mein Kopf tut weh" mean?', promptFr: 'Que signifie « Mein Kopf tut weh » ?', options: ['My head hurts', 'My head is big', 'I wash my head'], optionsFr: ['J’ai mal à la tête', 'Ma tête est grande', 'Je me lave la tête'], answer: 0, explain: '"tut weh" means "hurts".', explainFr: '« tut weh » signifie « fait mal ».', hint: 'Focus on "tut weh".', hintFr: 'Concentre-toi sur « tut weh ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l10-e5', prompt: 'Listen. What hurts?', promptFr: 'Écoute. Qu’est-ce qui fait mal ?', audio: { ttsText: 'Guten Tag, Herr Doktor. Mein Bauch tut weh.' }, options: ['The stomach', 'The head', 'The hand'], optionsFr: ['Le ventre', 'La tête', 'La main'], answer: 0, hint: 'Listen for the body part before "tut weh".', hintFr: 'Écoute la partie du corps avant « tut weh ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l10-e3', word: 'Kopf', answer: 'der', hint: '"Kopf" (head) is masculine.', hintFr: '« Kopf » (tête) est masculin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l10-e9', prompt: 'Obst und Gemüse sind ___. (healthy)', answer: 'gesund', hint: 'the opposite of "krank"', hintFr: 'le contraire de « krank »' } },

    // ───────────── 2 · The doctor's advice ─────────────
    { kind: 'chapter', title: 'Der Rat des Arztes', titleFr: 'Le conseil du médecin', blurb: 'What you must and may do.', blurbFr: 'Ce que tu dois et peux faire.' },

    { kind: 'situation', title: 'Ratschläge', titleFr: 'Les conseils',
      setting: 'The patient asks the doctor what he may do.', settingFr: 'Le patient demande au médecin ce qu’il peut faire.',
      lines: [
        line('Ärztin', 'Sie müssen viel schlafen.', 'You must sleep a lot.', 'Vous devez beaucoup dormir.'),
        line('Patient', 'Darf ich arbeiten?', 'May I work?', 'Puis-je travailler ?'),
        line('Ärztin', 'Nein, Sie dürfen nicht arbeiten. Sie müssen im Bett bleiben.', 'No, you may not work. You must stay in bed.', 'Non, vous ne devez pas travailler. Vous devez rester au lit.'),
        line('Patient', 'Darf ich Kaffee trinken?', 'May I drink coffee?', 'Puis-je boire du café ?'),
        line('Ärztin', 'Sie dürfen Tee trinken. Das ist gesund.', 'You may drink tea. That is healthy.', 'Vous pouvez boire du thé. C’est sain.'),
      ],
      words: [{ id: 'l10-muessen', german: 'müssen', english: 'must / to have to', french: 'devoir', gender: null, syllables: ['MÜS', 'sen'], pronunciation: 'MUES-sen', example: { de: 'Ich muss schlafen.', en: 'I have to sleep.', fr: 'Je dois dormir.' } }, { id: 'l10-duerfen', german: 'dürfen', english: 'may / to be allowed to', french: 'avoir le droit de', gender: null, syllables: ['DÜR', 'fen'], pronunciation: 'DUER-fen', example: { de: 'Du darfst nicht rauchen.', en: 'You are not allowed to smoke.', fr: 'Tu n’as pas le droit de fumer.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l10-e12', prompt: 'May the patient work?', promptFr: 'Le patient peut-il travailler ?', options: ['No, he must stay in bed', 'Yes, but only a little', 'Yes, at home'], optionsFr: ['Non, il doit rester au lit', 'Oui, mais un peu', 'Oui, à la maison'], answer: 0, explain: 'The doctor says: “Sie dürfen nicht arbeiten. Sie müssen im Bett bleiben.”', explainFr: 'La médecin dit : « Sie dürfen nicht arbeiten. Sie müssen im Bett bleiben. »', hint: 'Look for “nicht arbeiten”.', hintFr: 'Cherche « nicht arbeiten ».' } },

    { kind: 'grammar', note: {
      id: 'l10-rat', title: 'Advice with Sie müssen and Sie dürfen', titleFr: 'Conseils avec Sie müssen et Sie dürfen',
      lead: 'Doctors use Sie müssen (you must) and Sie dürfen (you may). Remember: nicht dürfen = forbidden.',
      leadFr: 'Les médecins utilisent Sie müssen (vous devez) et Sie dürfen (vous pouvez). Rappel : nicht dürfen = interdit.',
      explanationMd: 'With **Sie** (formal) the modals take the **plural** forms: **Sie müssen**, **Sie dürfen**. The frame is the one you know: modal in **position 2**, infinitive at the **end**: **Sie müssen im Bett bleiben.** Remember from lesson 18: **nicht dürfen** = **forbidden**, **nicht müssen** = **not necessary**.',
      explanationMdFr: 'Avec **Sie** (formel), les modaux prennent les formes du **pluriel** : **Sie müssen**, **Sie dürfen**. Le cadre est celui que tu connais : modal en **position 2**, infinitif à la **fin** : **Sie müssen im Bett bleiben.** Rappel de la leçon 18 : **nicht dürfen** = **interdit**, **nicht müssen** = **pas nécessaire**.',
      tables: [{ title: 'Doctor’s advice', titleFr: 'Les conseils du médecin', headers: ['Doctor says', 'Meaning'], headersFr: ['Le médecin dit', 'Sens'],
        rows: [['Sie müssen viel schlafen.', 'You must sleep a lot.'], ['Sie müssen viel Wasser trinken.', 'You must drink a lot of water.'], ['Sie dürfen nicht arbeiten.', 'You may not work.'], ['Sie dürfen Tee trinken.', 'You may drink tea.']],
        rowsFr: [['Sie müssen viel schlafen.', 'Vous devez beaucoup dormir.'], ['Sie müssen viel Wasser trinken.', 'Vous devez boire beaucoup d’eau.'], ['Sie dürfen nicht arbeiten.', 'Vous ne devez pas travailler.'], ['Sie dürfen Tee trinken.', 'Vous pouvez boire du thé.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'müssen', role: 'verb' }, { text: 'im Bett', role: 'place' }, { text: 'bleiben.', role: 'verb' }], en: 'You must stay in bed.', fr: 'Vous devez rester au lit.' },
        { parts: [{ text: 'Darf', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'arbeiten?', role: 'verb' }], en: 'May I work?', fr: 'Puis-je travailler ?' },
      ],
      contrast: {
        a: { label: 'müssen: advice', labelFr: 'müssen : conseil', note: 'you have to do this', noteFr: 'tu dois le faire', examples: [g('Ich muss zum Arzt gehen.', 'I have to go to the doctor.', 'Je dois aller chez le médecin.'), g('Du musst Wasser trinken.', 'You have to drink water.', 'Tu dois boire de l’eau.')] },
        b: { label: 'nicht dürfen: ban', labelFr: 'nicht dürfen : interdiction', note: 'do not do this', noteFr: 'ne le fais pas', examples: [g('Du darfst hier nicht rauchen.', 'You must not smoke here.', 'Tu ne dois pas fumer ici.'), g('Kinder dürfen das nicht.', 'Children are not allowed to do that.', 'Les enfants n’ont pas le droit de faire ça.')] },
      },
      examples: [
        g('Ich muss schlafen.', 'I have to sleep.', 'Je dois dormir.'),
        g('Du musst Wasser trinken.', 'You have to drink water.', 'Tu dois boire de l’eau.'),
        g('Darf ich hier essen?', 'May I eat here?', 'Puis-je manger ici ?'),
        g('Kinder dürfen das nicht.', 'Children are not allowed to do that.', 'Les enfants n’ont pas le droit de faire ça.'),
        g('Ich muss zum Arzt gehen.', 'I have to go to the doctor.', 'Je dois aller chez le médecin.'),
        g('Sie müssen im Bett bleiben.', 'You must stay in bed.', 'Vous devez rester au lit.'),
        g('Du darfst hier nicht rauchen.', 'You must not smoke here.', 'Tu ne dois pas fumer ici.'),
      ],
      mistakes: [
        { wrong: 'Sie müssen nicht rauchen. (meaning: it is forbidden)', right: 'Sie dürfen nicht rauchen.', why: 'Forbidden is nicht dürfen.', whyFr: 'Interdit se dit nicht dürfen.' },
        { wrong: 'Sie müssen bleiben im Bett.', right: 'Sie müssen im Bett bleiben.', why: 'The infinitive goes to the very end.', whyFr: 'L’infinitif va tout à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l10-e1', prompt: 'Ich ___ zum Arzt gehen. (müssen)', answer: 'muss', hint: 'first person singular of müssen', hintFr: 'première personne du singulier de müssen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l10-e6', prompt: 'Du ___ hier nicht rauchen. (dürfen)', answer: 'darfst', hint: 'second person singular of dürfen', hintFr: 'deuxième personne du singulier de dürfen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l10-e7', prompt: 'Which sentence means "I have to sleep"?', promptFr: 'Quelle phrase signifie « Je dois dormir » ?', options: ['Ich darf schlafen.', 'Ich muss schlafen.', 'Ich kann schlafen.'], answer: 1, explain: '"müssen" = must / have to.', explainFr: '« müssen » = devoir.', hint: 'Which modal means "must"?', hintFr: 'Quel modal signifie « devoir » ?' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l10-e8', tokens: ['gehen', 'muss', 'zum', 'Ich', 'Arzt'], answer: ['Ich', 'muss', 'zum', 'Arzt', 'gehen'], hint: 'Modal in second position, infinitive at the end.', hintFr: 'Modal en deuxième position, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l10-e10', prompt: 'Listen. What must the patient do?', promptFr: 'Écoute. Que doit faire le patient ?', audio: { ttsText: 'Sie sind krank. Sie müssen schlafen und viel Wasser trinken.' }, options: ['Sleep and drink water', 'Go to work', 'Do sport'], optionsFr: ['Dormir et boire de l’eau', 'Aller travailler', 'Faire du sport'], answer: 0, hint: 'Listen after "Sie müssen".', hintFr: 'Écoute après « Sie müssen ».' } },

    { kind: 'pronunciation', focus: 'The "z" is "ts" even in a cluster (Arzt = "artst"), and "ö" in Körper is rounded', focusFr: 'Le « z » se prononce « ts » même en groupe (Arzt = « artst »), et le « ö » de Körper est arrondi', items: [{ id: 'l10-arzt-pron', german: 'Arzt', english: 'doctor', french: 'médecin', gender: null, syllables: ['ARZT'], pronunciation: 'artst', example: { de: 'Ich gehe zum Arzt.', en: 'I go to the doctor.', fr: 'Je vais chez le médecin.' } }, { id: 'l10-koerper-pron', german: 'Körper', english: 'body', french: 'corps', gender: null, syllables: ['KÖR', 'per'], pronunciation: 'KOER-per', example: { de: 'Der Körper ist müde.', en: 'The body is tired.', fr: 'Le corps est fatigué.' } }] },

    { kind: 'wrapup',
      summary: 'You can now name parts of the body, say what hurts with **tut weh / tun weh**, name symptoms with **haben**, and understand advice with **müssen** and **dürfen**. 🎉',
      summaryFr: 'Tu sais maintenant nommer des parties du corps, dire ce qui fait mal avec **tut weh / tun weh**, nommer des symptômes avec **haben**, et comprendre des conseils avec **müssen** et **dürfen**. 🎉',
      card: { title: 'Lesson 19 on one page', titleFr: 'La leçon 19 en une page', sections: [
        { heading: 'What hurts?', headingFr: 'Qu’est-ce qui fait mal ?', rows: [g('Mein Kopf tut weh. / Die Füße tun weh.', 'one part / several parts', 'une partie / plusieurs parties'), g('Was tut dir / Ihnen weh?', 'informal / formal', 'familier / formel'), g('Ich habe Fieber / Husten / Kopfschmerzen.', 'symptoms', 'symptômes')] },
        { heading: 'Advice', headingFr: 'Conseils', rows: [g('Sie müssen im Bett bleiben.', 'you must', 'vous devez'), g('Sie dürfen nicht arbeiten.', 'you may not', 'vous ne devez pas'), g('Darf ich …?', 'May I …?', 'Puis-je … ?')] },
      ] } },
  ],
};
