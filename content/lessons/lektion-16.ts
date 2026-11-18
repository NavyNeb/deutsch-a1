import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion16: Lesson = {
  id: 'l16', level: 'A1', module: 4, number: 18,
  title: { de: 'Regeln und Verbote', en: 'Rules and prohibitions', fr: 'Règles et interdictions' },
  theme: 'Rules and signs with dürfen, müssen and man', themeFr: 'Règles et panneaux avec dürfen, müssen et man',
  goals: ['Read and say rules: "Hier darf man nicht …"', 'Use verboten and erlaubt', 'Tell "nicht dürfen" (forbidden) from "nicht müssen" (not necessary)', 'Put the modal in position 2 and the infinitive at the end'], goalsFr: ['Lire et dire des règles : « Hier darf man nicht … »', 'Utiliser verboten et erlaubt', 'Distinguer « nicht dürfen » (interdit) de « nicht müssen » (pas nécessaire)', 'Placer le modal en position 2 et l’infinitif à la fin'],
  canDo: g('Ich kann Regeln und Verbote verstehen und sagen, was man darf und was man muss.', 'I can understand rules and prohibitions and say what one may and must do.', 'Je sais comprendre les règles et les interdictions et dire ce qu’on peut et doit faire.'),
  steps: [
    { kind: 'intro', title: 'Regeln und Verbote 🚭', titleFr: 'Règles et interdictions 🚭',
      scene: 'Two friends read the rules on a sign in the park.', sceneFr: 'Deux amis lisent les règles sur un panneau dans le parc.',
      goals: ['Read and say rules with dürfen and man', 'Tell nicht dürfen (forbidden) from nicht müssen (not necessary)', 'Put the modal in position 2 and the infinitive at the end'],
      goalsFr: ['Lire et dire des règles avec dürfen et man', 'Distinguer nicht dürfen (interdit) de nicht müssen (pas nécessaire)', 'Placer le modal en position 2 et l’infinitif à la fin'] },

    // ───────────── 1 · dürfen and müssen ─────────────
    { kind: 'chapter', title: 'dürfen und müssen', titleFr: 'dürfen et müssen', blurb: 'What you may and must do.', blurbFr: 'Ce que tu peux et dois faire.' },

    { kind: 'situation', title: 'Im Park', titleFr: 'Dans le parc',
      setting: 'Lena and Paul read a sign at the park entrance.', settingFr: 'Lena et Paul lisent un panneau à l’entrée du parc.',
      lines: [
        line('Lena', 'Was steht auf dem Schild?', 'What does the sign say?', 'Que dit le panneau ?'),
        line('Paul', 'Hier darf man nicht rauchen. Rauchen ist verboten.', 'You may not smoke here. Smoking is forbidden.', 'Ici on n’a pas le droit de fumer. Fumer est interdit.'),
        line('Lena', 'Und Hunde? Dürfen Hunde auf die Wiese?', 'And dogs? Are dogs allowed on the lawn?', 'Et les chiens ? Ont-ils le droit d’aller sur la pelouse ?'),
        line('Paul', 'Nein, Hunde müssen an der Leine sein. Auf der Wiese dürfen sie nicht laufen.', 'No, dogs must be on a leash. They may not run on the lawn.', 'Non, les chiens doivent être tenus en laisse. Ils n’ont pas le droit de courir sur la pelouse.'),
        line('Lena', 'Picknicken ist erlaubt.', 'Picnicking is allowed.', 'Pique-niquer est autorisé.'),
      ],
      words: [{ id: 'l16-man', german: 'man', english: 'one / you / people (in general)', french: 'on', gender: null, syllables: ['MAN'], pronunciation: 'mahn', example: { de: 'Hier darf man nicht laut sein.', en: 'You must not be loud here.', fr: 'On n’a pas le droit d’être bruyant ici.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l16-e12', prompt: 'What is forbidden in the park?', promptFr: 'Qu’est-ce qui est interdit dans le parc ?', options: ['Smoking', 'Picnicking', 'Walking'], optionsFr: ['Fumer', 'Pique-niquer', 'Marcher'], answer: 0, explain: 'The sign says: “Hier darf man nicht rauchen. Rauchen ist verboten.”', explainFr: 'Le panneau dit : « Hier darf man nicht rauchen. Rauchen ist verboten. »', hint: 'Look for “verboten”.', hintFr: 'Cherche « verboten ».' } },

    { kind: 'wordgroup', title: 'Regeln im Park', titleFr: 'Les règles dans le parc',
      items: [{ id: 'l16-regel', german: 'die Regel', english: 'the rule (pl. Regeln)', french: 'la règle (pl. Regeln)', gender: 'die', syllables: ['RE', 'gel'], pronunciation: 'dee RAY-gel', example: { de: 'Im Park gibt es viele Regeln.', en: 'There are many rules in the park.', fr: 'Dans le parc, il y a beaucoup de règles.' } }, { id: 'l16-schild', german: 'das Schild', english: 'the sign (pl. Schilder)', french: 'le panneau (pl. Schilder)', gender: 'das', syllables: ['SCHILD'], pronunciation: 'dahss shilt', example: { de: 'Das Schild ist rot.', en: 'The sign is red.', fr: 'Le panneau est rouge.' } }, { id: 'l16-hund', german: 'der Hund', english: 'the dog (pl. Hunde)', french: 'le chien (pl. Hunde)', gender: 'der', syllables: ['HUND'], pronunciation: 'dair hoont', example: { de: 'Der Hund ist freundlich.', en: 'The dog is friendly.', fr: 'Le chien est gentil.' } }, { id: 'l16-leine', german: 'die Leine', english: 'the leash', french: 'la laisse', gender: 'die', syllables: ['LEI', 'ne'], pronunciation: 'dee LIE-ne', example: { de: 'Der Hund ist an der Leine.', en: 'The dog is on the leash.', fr: 'Le chien est en laisse.' } }, { id: 'l16-wiese', german: 'die Wiese', english: 'the meadow / lawn', french: 'la pelouse / le pré', gender: 'die', syllables: ['WIE', 'se'], pronunciation: 'dee VEE-ze', example: { de: 'Auf der Wiese darf man liegen.', en: 'You may lie on the lawn.', fr: 'On a le droit de s’allonger sur la pelouse.' } }, { id: 'l16-verboten', german: 'verboten', english: 'forbidden', french: 'interdit', gender: null, syllables: ['ver', 'BO', 'ten'], pronunciation: 'fair-BOH-ten', example: { de: 'Rauchen ist hier verboten.', en: 'Smoking is forbidden here.', fr: 'Il est interdit de fumer ici.' } }, { id: 'l16-erlaubt', german: 'erlaubt', english: 'allowed', french: 'permis / autorisé', gender: null, syllables: ['er', 'LAUBT'], pronunciation: 'er-LOWPT', example: { de: 'Picknicken ist erlaubt.', en: 'Picnicking is allowed.', fr: 'Le pique-nique est autorisé.' } }] },

    { kind: 'grammar', note: {
      id: 'l16-modal', title: 'dürfen and müssen: all forms', titleFr: 'dürfen et müssen : toutes les formes',
      lead: 'The singular has a different stem from the plural, and ich looks the same as er/sie/es/man. man is perfect for rules.',
      leadFr: 'Le singulier a un radical différent du pluriel, et ich ressemble à er/sie/es/man. man est parfait pour les règles.',
      explanationMd: '**dürfen** (to be allowed to) and **müssen** (to have to) are **modal verbs**. The **singular** has its own stem (**darf, muss**), the **plural** another (**dürf-, müss-**). Note that **ich** and **er/sie/es/man** have the **same form**.\n\n**man** (one, people in general) takes the **er/sie/es** form and is perfect for rules: **Hier darf man nicht parken.**',
      explanationMdFr: '**dürfen** (avoir le droit de) et **müssen** (devoir) sont des **verbes modaux**. Le **singulier** a son radical (**darf, muss**), le **pluriel** un autre (**dürf-, müss-**). Note que **ich** et **er/sie/es/man** ont la **même forme**.\n\n**man** (on) prend la forme **er/sie/es** et convient parfaitement aux règles : **Hier darf man nicht parken.**',
      tables: [
        { title: 'dürfen (may)', titleFr: 'dürfen (avoir le droit)', headers: ['ich', 'du', 'er / sie / es / man', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es / man', 'wir', 'ihr', 'sie / Sie'], rows: [['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen']], rowsFr: [['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen']], highlightCol: 2 },
        { title: 'müssen (must)', titleFr: 'müssen (devoir)', headers: ['ich', 'du', 'er / sie / es / man', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es / man', 'wir', 'ihr', 'sie / Sie'], rows: [['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen']], rowsFr: [['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen']], highlightCol: 2 },
      ],
      anatomy: [
        { parts: [{ text: 'Hier', role: 'place' }, { text: 'darf', role: 'verb' }, { text: 'man', role: 'subject' }, { text: 'nicht', role: 'connector' }, { text: 'parken.', role: 'verb' }], en: 'You may not park here.', fr: 'On n’a pas le droit de se garer ici.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'müssen', role: 'verb' }, { text: 'an der Ampel', role: 'place' }, { text: 'warten.', role: 'verb' }], en: 'We have to wait at the traffic light.', fr: 'Nous devons attendre au feu.' },
      ],
      contrast: {
        a: { label: 'dürfen: permission', labelFr: 'dürfen : permission', note: 'allowed or not', noteFr: 'autorisé ou non', examples: [g('Darf man hier Fahrrad fahren?', 'Is one allowed to cycle here?', 'A-t-on le droit de faire du vélo ici ?'), g('Ihr dürft hier nicht spielen.', 'You (pl.) may not play here.', 'Vous n’avez pas le droit de jouer ici.')] },
        b: { label: 'müssen: obligation', labelFr: 'müssen : obligation', note: 'no choice', noteFr: 'pas le choix', examples: [g('Wir müssen an der Ampel warten.', 'We have to wait at the traffic light.', 'Nous devons attendre au feu.'), g('Bei Rot müssen Autos warten.', 'At red, cars have to wait.', 'Au rouge, les voitures doivent attendre.')] },
      },
      examples: [
        g('Ihr dürft hier nicht spielen.', 'You (pl.) may not play here.', 'Vous n’avez pas le droit de jouer ici.'),
        g('Wir müssen an der Ampel warten.', 'We have to wait at the traffic light.', 'Nous devons attendre au feu.'),
        g('Darf man hier Fahrrad fahren?', 'Is one allowed to cycle here?', 'A-t-on le droit de faire du vélo ici ?'),
        g('Hier darf man nicht parken.', 'You may not park here.', 'On n’a pas le droit de se garer ici.'),
        g('Ich muss jetzt gehen.', 'I have to go now.', 'Je dois partir maintenant.'),
        g('Du musst einen Helm haben.', 'You have to have a helmet.', 'Tu dois avoir un casque.'),
        g('Hunde dürfen nicht auf die Wiese.', 'Dogs are not allowed on the lawn.', 'Les chiens n’ont pas le droit d’aller sur la pelouse.'),
      ],
      mistakes: [
        { wrong: 'Ihr dürfen hier nicht spielen.', right: 'Ihr dürft hier nicht spielen.', why: 'ihr takes dürft.', whyFr: 'ihr prend dürft.' },
        { wrong: 'Man dürfen hier nicht rauchen.', right: 'Man darf hier nicht rauchen.', why: 'man takes the er/sie/es form: darf.', whyFr: 'man prend la forme er/sie/es : darf.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l16-e1', prompt: 'Hier ___ man nicht parken. (dürfen)', promptFr: 'Hier ___ man nicht parken. (dürfen)', answer: 'darf', hint: '"man" takes the same form as "er/sie/es".', hintFr: '« man » prend la même forme que « er/sie/es ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l16-e2', prompt: 'Wir ___ an der Ampel warten. (müssen)', promptFr: 'Wir ___ an der Ampel warten. (müssen)', answer: 'müssen', hint: 'wir → same as the infinitive.', hintFr: 'wir → comme l’infinitif.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l16-e8', prompt: 'Ihr ___ hier nicht spielen. (dürfen)', promptFr: 'Ihr ___ hier nicht spielen. (dürfen)', answer: 'dürft', hint: 'ihr → stem dürf- + t', hintFr: 'ihr → radical dürf- + t' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l16-e11', word: 'Regel', answer: 'die', hint: 'Plural: die Regeln — it is feminine.', hintFr: 'Pluriel : die Regeln — c’est un féminin.' } },

    // ───────────── 2 · Forbidden or not necessary ─────────────
    { kind: 'chapter', title: 'Verboten oder nicht nötig?', titleFr: 'Interdit ou pas nécessaire ?', blurb: 'nicht dürfen and nicht müssen mean very different things.', blurbFr: 'nicht dürfen et nicht müssen signifient des choses très différentes.' },

    { kind: 'situation', title: 'Muss ich warten?', titleFr: 'Dois-je attendre ?',
      setting: 'Paul has a car and asks Lena about the rules.', settingFr: 'Paul a une voiture et interroge Lena sur les règles.',
      lines: [
        line('Paul', 'Darf ich hier parken?', 'May I park here?', 'Ai-je le droit de me garer ici ?'),
        line('Lena', 'Nein, Parken ist hier verboten. Du darfst hier nicht parken.', 'No, parking is forbidden here. You may not park here.', 'Non, se garer est interdit ici. Tu n’as pas le droit de te garer ici.'),
        line('Paul', 'Muss ich an der Ampel warten?', 'Do I have to wait at the traffic light?', 'Dois-je attendre au feu ?'),
        line('Lena', 'Nein, du musst nicht warten. Die Ampel ist grün.', 'No, you don’t have to wait. The light is green.', 'Non, tu n’as pas besoin d’attendre. Le feu est vert.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l16-e13', prompt: 'Why does Paul not have to wait?', promptFr: 'Pourquoi Paul n’a-t-il pas besoin d’attendre ?', options: ['The light is green', 'Waiting is forbidden', 'He has no car'], optionsFr: ['Le feu est vert', 'Attendre est interdit', 'Il n’a pas de voiture'], answer: 0, explain: 'Lena says: “Du musst nicht warten. Die Ampel ist grün.”', explainFr: 'Lena dit : « Du musst nicht warten. Die Ampel ist grün. »', hint: 'Read Lena’s last line.', hintFr: 'Lis la dernière réplique de Lena.' } },

    { kind: 'grammar', note: {
      id: 'l16-nicht-duerfen-muessen', title: 'nicht dürfen vs nicht müssen', titleFr: 'nicht dürfen ou nicht müssen',
      lead: 'nicht dürfen = forbidden. nicht müssen = not necessary, but allowed.',
      leadFr: 'nicht dürfen = interdit. nicht müssen = pas nécessaire, mais autorisé.',
      explanationMd: 'The two negations mean **very different** things:\n\n- **nicht dürfen** = it is **forbidden**: **Hier darf man nicht parken.** (= Parken ist **verboten**.)\n- **nicht müssen** = it is **not necessary** (you may, but you do not have to): **Du musst nicht kommen.**\n\nThe adjectives **verboten** and **erlaubt** follow **sein**: **Rauchen ist verboten. Picknicken ist erlaubt.**',
      explanationMdFr: 'Les deux négations signifient des choses **très différentes** :\n\n- **nicht dürfen** = c’est **interdit** : **Hier darf man nicht parken.** (= Parken ist **verboten**.)\n- **nicht müssen** = ce n’est **pas nécessaire** (tu peux, mais tu n’y es pas obligé) : **Du musst nicht kommen.**\n\nLes adjectifs **verboten** et **erlaubt** suivent **sein** : **Rauchen ist verboten. Picknicken ist erlaubt.**',
      tables: [{ title: 'Two negations', titleFr: 'Deux négations', headers: ['German', 'Meaning', 'Example'], headersFr: ['Allemand', 'Sens', 'Exemple'],
        rows: [['nicht dürfen', 'forbidden', 'Hier darf man nicht parken.'], ['nicht müssen', 'not necessary', 'Du musst nicht warten.'], ['verboten sein', 'to be forbidden', 'Rauchen ist verboten.'], ['erlaubt sein', 'to be allowed', 'Picknicken ist erlaubt.']],
        rowsFr: [['nicht dürfen', 'interdit', 'Hier darf man nicht parken.'], ['nicht müssen', 'pas nécessaire', 'Du musst nicht warten.'], ['verboten sein', 'être interdit', 'Rauchen ist verboten.'], ['erlaubt sein', 'être autorisé', 'Picknicken ist erlaubt.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'darfst', role: 'verb' }, { text: 'hier', role: 'place' }, { text: 'nicht', role: 'connector' }, { text: 'parken.', role: 'verb' }], en: 'You may not park here. (forbidden)', fr: 'Tu n’as pas le droit de te garer ici. (interdit)' },
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'musst', role: 'verb' }, { text: 'nicht', role: 'connector' }, { text: 'warten.', role: 'verb' }], en: 'You don’t have to wait. (not necessary)', fr: 'Tu n’as pas besoin d’attendre. (pas nécessaire)' },
      ],
      contrast: {
        a: { label: 'nicht dürfen', labelFr: 'nicht dürfen', note: 'it is forbidden, do not do it', noteFr: 'c’est interdit, ne le fais pas', examples: [g('Hunde dürfen nicht auf die Wiese.', 'Dogs are not allowed on the lawn.', 'Les chiens n’ont pas le droit d’aller sur la pelouse.'), g('Parken ist hier verboten.', 'Parking is forbidden here.', 'Se garer est interdit ici.')] },
        b: { label: 'nicht müssen', labelFr: 'nicht müssen', note: 'you can, but you do not have to', noteFr: 'tu peux, mais tu n’y es pas obligé', examples: [g('Du musst nicht warten, die Ampel ist grün.', 'You do not have to wait, the light is green.', 'Tu n’as pas besoin d’attendre, le feu est vert.'), g('Ihr müsst nicht kommen.', 'You do not have to come.', 'Vous n’êtes pas obligés de venir.')] },
      },
      examples: [
        g('Hunde dürfen nicht auf die Wiese.', 'Dogs are not allowed on the lawn.', 'Les chiens n’ont pas le droit d’aller sur la pelouse.'),
        g('Du musst nicht warten, die Ampel ist grün.', 'You do not have to wait, the light is green.', 'Tu n’as pas besoin d’attendre, le feu est vert.'),
        g('Parken ist hier verboten, das ist gefährlich.', 'Parking is forbidden here, it is dangerous.', 'Se garer est interdit ici, c’est dangereux.'),
        g('Picknicken ist erlaubt.', 'Picnicking is allowed.', 'Pique-niquer est autorisé.'),
        g('Du darfst nicht rauchen.', 'You may not smoke.', 'Tu n’as pas le droit de fumer.'),
        g('Du musst nicht kommen.', 'You do not have to come.', 'Tu n’es pas obligé de venir.'),
      ],
      mistakes: [
        { wrong: 'Hier musst man nicht rauchen. (meaning: forbidden)', right: 'Hier darf man nicht rauchen.', why: 'Forbidden is nicht dürfen, not nicht müssen.', whyFr: 'Interdit se dit nicht dürfen, pas nicht müssen.' },
        { wrong: 'Du darfst nicht kommen. (meaning: not necessary)', right: 'Du musst nicht kommen.', why: 'Not necessary is nicht müssen.', whyFr: 'Pas nécessaire se dit nicht müssen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l16-e3', prompt: 'A sign says "Rauchen verboten". What does it mean?', promptFr: 'Un panneau indique « Rauchen verboten ». Que signifie-t-il ?', options: ['You may not smoke here.', 'You must smoke here.', 'You may smoke here.'], optionsFr: ['Il est interdit de fumer ici.', 'Il faut fumer ici.', 'On peut fumer ici.'], answer: 0, explain: '"verboten" = forbidden.', explainFr: '« verboten » = interdit.', hint: '"verboten" is the opposite of "erlaubt".', hintFr: '« verboten » est le contraire de « erlaubt ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l16-e4', prompt: 'What does "Du musst nicht kommen" mean?', promptFr: 'Que signifie « Du musst nicht kommen » ?', options: ['You are not allowed to come.', 'You do not have to come.', 'You must come.'], optionsFr: ['Tu n’as pas le droit de venir.', 'Tu n’es pas obligé de venir.', 'Tu dois venir.'], answer: 1, explain: '"nicht müssen" = not necessary. "nicht dürfen" would mean forbidden.', explainFr: '« nicht müssen » = pas nécessaire. « nicht dürfen » signifierait interdit.', hint: 'Is it forbidden, or just not necessary?', hintFr: 'Est-ce interdit, ou simplement pas nécessaire ?' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l16-e9', prompt: 'Listen. When may the cars drive?', promptFr: 'Écoute. Quand les voitures peuvent-elles rouler ?', audio: { ttsText: 'Bei Rot müssen Autos warten. Bei Grün dürfen sie fahren.' }, options: ['At red', 'At green', 'Never'], optionsFr: ['Au rouge', 'Au vert', 'Jamais'], answer: 1, hint: 'Listen for "dürfen".', hintFr: 'Écoute « dürfen ».' } },

    // ───────────── 3 · Word order ─────────────
    { kind: 'chapter', title: 'Modalverb und Infinitiv', titleFr: 'Verbe modal et infinitif', blurb: 'Modal verb in position 2, infinitive at the end.', blurbFr: 'Verbe modal en position 2, infinitif à la fin.' },

    { kind: 'situation', title: 'Verkehrsregeln', titleFr: 'Règles de circulation',
      setting: 'Lena explains the traffic rules to Paul.', settingFr: 'Lena explique le code de la route à Paul.',
      lines: [
        line('Lena', 'Was muss man an der Ampel machen?', 'What must one do at the traffic light?', 'Que doit-on faire au feu ?'),
        line('Paul', 'Bei Rot müssen Autos warten. Bei Grün dürfen sie fahren.', 'At red, cars must wait. At green they may go.', 'Au rouge, les voitures doivent attendre. Au vert, elles peuvent rouler.'),
        line('Lena', 'Und Kinder? Müssen sie einen Helm haben?', 'And children? Do they have to have a helmet?', 'Et les enfants ? Doivent-ils avoir un casque ?'),
        line('Paul', 'Ja, Kinder müssen einen Helm haben. Ohne Helm ist es gefährlich.', 'Yes, children must have a helmet. Without a helmet it is dangerous.', 'Oui, les enfants doivent avoir un casque. Sans casque, c’est dangereux.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l16-e14', prompt: 'Who must wear a helmet?', promptFr: 'Qui doit porter un casque ?', options: ['Children', 'Dogs', 'Cars'], optionsFr: ['Les enfants', 'Les chiens', 'Les voitures'], answer: 0, explain: 'Paul says: “Kinder müssen einen Helm haben.”', explainFr: 'Paul dit : « Kinder müssen einen Helm haben. »', hint: 'Look for “Helm”.', hintFr: 'Cherche « Helm ».' } },

    { kind: 'wordgroup', title: 'Verkehr und Gefahr', titleFr: 'Circulation et danger',
      items: [{ id: 'l16-ampel', german: 'die Ampel', english: 'the traffic light (pl. Ampeln)', french: 'le feu de signalisation (pl. Ampeln)', gender: 'die', syllables: ['AM', 'pel'], pronunciation: 'dee AHM-pel', example: { de: 'An der Ampel ist es rot.', en: 'At the traffic light it is red.', fr: 'Au feu, c’est rouge.' } }, { id: 'l16-helm', german: 'der Helm', english: 'the helmet (pl. Helme)', french: 'le casque (pl. Helme)', gender: 'der', syllables: ['HELM'], pronunciation: 'dair helm', example: { de: 'Kinder müssen einen Helm haben.', en: 'Children must have a helmet.', fr: 'Les enfants doivent avoir un casque.' } }, { id: 'l16-parken', german: 'parken', english: 'to park', french: 'se garer / stationner', gender: null, syllables: ['PAR', 'ken'], pronunciation: 'PAR-ken', example: { de: 'Hier darf man nicht parken.', en: 'You may not park here.', fr: 'On n’a pas le droit de se garer ici.' } }, { id: 'l16-rauchen', german: 'rauchen', english: 'to smoke', french: 'fumer', gender: null, syllables: ['RAU', 'chen'], pronunciation: 'ROW-khen', example: { de: 'Im Bus darf man nicht rauchen.', en: 'You may not smoke on the bus.', fr: 'On n’a pas le droit de fumer dans le bus.' } }, { id: 'l16-warten', german: 'warten', english: 'to wait', french: 'attendre', gender: null, syllables: ['WAR', 'ten'], pronunciation: 'VAR-ten', example: { de: 'Bei Rot müssen wir warten.', en: 'At red we have to wait.', fr: 'Au rouge, nous devons attendre.' } }, { id: 'l16-gefaehrlich', german: 'gefährlich', english: 'dangerous', french: 'dangereux', gender: null, syllables: ['ge', 'FÄHR', 'lich'], pronunciation: 'ge-FAIR-likh', example: { de: 'Die Straße ist gefährlich.', en: 'The street is dangerous.', fr: 'La rue est dangereuse.' } }] },

    { kind: 'grammar', note: {
      id: 'l16-satzklammer', title: 'Modal verb in position 2, infinitive at the end', titleFr: 'Verbe modal en position 2, infinitif à la fin',
      lead: 'The modal is the conjugated verb: position 2. The second verb stays in the infinitive, at the very end. nicht stands just before it.',
      leadFr: 'Le modal est le verbe conjugué : position 2. Le deuxième verbe reste à l’infinitif, tout à la fin. nicht se place juste avant.',
      explanationMd: 'The **modal** verb is the **conjugated** verb, so it stands in **position 2** (you know this frame from lesson 10). The second verb stays in the **infinitive** at the **very end**, and **nicht** comes just **before** it. If you start with a place or time, the **subject follows the verb**. In a **question** the modal comes first.',
      explanationMdFr: 'Le verbe **modal** est le verbe **conjugué** : il se place en **position 2** (tu connais ce cadre depuis la leçon 10). Le deuxième verbe reste à l’**infinitif**, **tout à la fin**, et **nicht** se place juste **avant**. Si tu commences par un lieu ou un temps, le **sujet suit le verbe**. Dans une **question**, le modal vient en premier.',
      tables: [{ title: 'The frame', titleFr: 'Le cadre', headers: ['Position 1', 'Modal (2)', 'Middle', 'Infinitive (end)'], headersFr: ['Position 1', 'Modal (2)', 'Milieu', 'Infinitif (fin)'],
        rows: [['Man', 'darf', 'hier nicht', 'parken.'], ['Hier', 'darf', 'man nicht', 'parken.'], ['Darf', 'man', 'hier', 'parken?'], ['Kinder', 'müssen', 'einen Helm', 'haben.']],
        rowsFr: [['Man', 'darf', 'hier nicht', 'parken.'], ['Hier', 'darf', 'man nicht', 'parken.'], ['Darf', 'man', 'hier', 'parken ?'], ['Kinder', 'müssen', 'einen Helm', 'haben.']], highlightCol: 3 }],
      anatomy: [
        { parts: [{ text: 'Im Park', role: 'place' }, { text: 'darf', role: 'verb' }, { text: 'man', role: 'subject' }, { text: 'nicht laut Musik', role: 'accusative' }, { text: 'hören.', role: 'verb' }], en: 'You may not listen to loud music in the park.', fr: 'On n’a pas le droit d’écouter de la musique fort dans le parc.' },
        { parts: [{ text: 'Darf', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'hier mein Fahrrad', role: 'accusative' }, { text: 'parken?', role: 'verb' }], en: 'May I park my bike here?', fr: 'Puis-je garer mon vélo ici ?' },
      ],
      contrast: {
        a: { label: 'Statement', labelFr: 'Affirmation', note: 'modal second, infinitive last', noteFr: 'modal en deuxième, infinitif en dernier', examples: [g('Man darf hier nicht parken.', 'You may not park here.', 'On n’a pas le droit de se garer ici.'), g('Bei Rot müssen Autos warten.', 'At red, cars have to wait.', 'Au rouge, les voitures doivent attendre.')] },
        b: { label: 'Question', labelFr: 'Question', note: 'modal first, infinitive last', noteFr: 'modal en premier, infinitif en dernier', examples: [g('Darf man hier parken?', 'May one park here?', 'A-t-on le droit de se garer ici ?'), g('Müssen Kinder einen Helm haben?', 'Do children have to have a helmet?', 'Les enfants doivent-ils avoir un casque ?')] },
      },
      examples: [
        g('Bei Rot müssen Autos warten.', 'At red, cars have to wait.', 'Au rouge, les voitures doivent attendre.'),
        g('Im Park darf man nicht laut Musik hören.', 'You may not listen to loud music in the park.', 'On n’a pas le droit d’écouter de la musique fort dans le parc.'),
        g('Darf ich hier mein Fahrrad parken?', 'May I park my bike here?', 'Puis-je garer mon vélo ici ?'),
        g('Man darf hier nicht rauchen.', 'You may not smoke here.', 'On n’a pas le droit de fumer ici.'),
        g('Kinder müssen einen Helm haben.', 'Children must have a helmet.', 'Les enfants doivent avoir un casque.'),
        g('Hier darf man nicht laut sein.', 'You may not be loud here.', 'On n’a pas le droit d’être bruyant ici.'),
        g('Die Straße ist gefährlich.', 'The street is dangerous.', 'La rue est dangereuse.'),
      ],
      mistakes: [
        { wrong: 'Man darf parken nicht hier.', right: 'Man darf hier nicht parken.', why: 'nicht stands before the infinitive at the end.', whyFr: 'nicht se place avant l’infinitif final.' },
        { wrong: 'Hier man darf nicht parken.', right: 'Hier darf man nicht parken.', why: 'After “Hier” the verb comes second, then the subject.', whyFr: 'Après « Hier », le verbe vient en deuxième, puis le sujet.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l16-e5', tokens: ['man', 'darf', 'nicht', 'Hier', 'parken'], answer: ['Hier', 'darf', 'man', 'nicht', 'parken'], hint: 'Hier (pos. 1), modal (pos. 2), man, nicht, infinitive at the end.', hintFr: 'Hier (pos. 1), modal (pos. 2), man, nicht, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l16-e10', prompt: 'Which sentence has the correct word order?', promptFr: 'Quelle phrase a le bon ordre des mots ?', options: ['Man darf hier rauchen nicht.', 'Man darf hier nicht rauchen.', 'Man hier darf nicht rauchen.'], answer: 1, explain: 'Modal in position 2, "nicht" and the infinitive at the end.', explainFr: 'Modal en position 2, « nicht » et l’infinitif à la fin.', hint: 'The infinitive is the very last word.', hintFr: 'L’infinitif est le tout dernier mot.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l16-e6', pairs: [{ de: 'verboten', en: 'forbidden', fr: 'interdit' }, { de: 'erlaubt', en: 'allowed', fr: 'permis' }, { de: 'gefährlich', en: 'dangerous', fr: 'dangereux' }, { de: 'die Regel', en: 'the rule', fr: 'la règle' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l16-e7', prompt: 'Listen. Where must dogs be in the park?', promptFr: 'Écoute. Où les chiens doivent-ils être dans le parc ?', audio: { ttsText: 'Im Park müssen Hunde an der Leine sein. Auf der Wiese dürfen sie nicht laufen.' }, options: ['On a leash', 'On the lawn', 'At home'], optionsFr: ['En laisse', 'Sur la pelouse', 'À la maison'], answer: 0, hint: 'Listen for "müssen" and the word after "an der".', hintFr: 'Écoute « müssen » et le mot après « an der ».' } },

    { kind: 'pronunciation', focus: 'The ü in dürfen/müssen and the long e in verboten, erlaubt: lips rounded for ü', focusFr: 'Le ü dans dürfen/müssen et les mots verboten, erlaubt : lèvres arrondies pour ü', items: [{ id: 'l16-duerfen-pron', german: 'dürfen', english: 'to be allowed to', french: 'avoir le droit de', gender: null, syllables: ['DÜR', 'fen'], pronunciation: 'DUER-fen', example: { de: 'Hier dürfen wir spielen.', en: 'We may play here.', fr: 'Ici, nous avons le droit de jouer.' } }, { id: 'l16-muessen-pron', german: 'müssen', english: 'to have to', french: 'devoir', gender: null, syllables: ['MÜS', 'sen'], pronunciation: 'MUES-sen', example: { de: 'Wir müssen warten.', en: 'We have to wait.', fr: 'Nous devons attendre.' } }, { id: 'l16-verboten-pron', german: 'verboten', english: 'forbidden', french: 'interdit', gender: null, syllables: ['ver', 'BO', 'ten'], pronunciation: 'fair-BOH-ten', example: { de: 'Das ist verboten!', en: 'That is forbidden!', fr: 'C’est interdit !' } }, { id: 'l16-erlaubt-pron', german: 'erlaubt', english: 'allowed', french: 'permis', gender: null, syllables: ['er', 'LAUBT'], pronunciation: 'er-LOWPT', example: { de: 'Ist das erlaubt?', en: 'Is that allowed?', fr: 'Est-ce permis ?' } }, { id: 'l16-gefaehrlich-pron', german: 'gefährlich', english: 'dangerous', french: 'dangereux', gender: null, syllables: ['ge', 'FÄHR', 'lich'], pronunciation: 'ge-FAIR-likh', example: { de: 'Das ist zu gefährlich.', en: 'That is too dangerous.', fr: 'C’est trop dangereux.' } }] },

    { kind: 'wrapup',
      summary: 'You can now read and say rules with **dürfen, müssen** and **man**, tell **nicht dürfen** (forbidden) from **nicht müssen** (not necessary), and build the frame **modal … infinitive**. 🎉',
      summaryFr: 'Tu sais maintenant lire et dire des règles avec **dürfen, müssen** et **man**, distinguer **nicht dürfen** (interdit) de **nicht müssen** (pas nécessaire), et construire le cadre **modal … infinitif**. 🎉',
      card: { title: 'Lesson 18 on one page', titleFr: 'La leçon 18 en une page', sections: [
        { heading: 'dürfen / müssen', headingFr: 'dürfen / müssen', rows: [g('ich darf / muss, du darfst / musst, man darf / muss', 'singular', 'singulier'), g('wir dürfen / müssen, ihr dürft / müsst', 'plural', 'pluriel')] },
        { heading: 'Forbidden or not necessary?', headingFr: 'Interdit ou pas nécessaire ?', rows: [g('Hier darf man nicht parken.', 'forbidden', 'interdit'), g('Du musst nicht warten.', 'not necessary', 'pas nécessaire'), g('verboten / erlaubt', 'forbidden / allowed', 'interdit / autorisé')] },
        { heading: 'The frame', headingFr: 'Le cadre', rows: [g('Man darf hier nicht parken.', 'modal 2nd, infinitive last', 'modal en 2e, infinitif en dernier'), g('Darf man hier parken?', 'question: modal first', 'question : modal en premier')] },
      ] } },
  ],
};
