import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A2 lesson (Goethe A2 "Dienstleistungen und Behörden"): appointments, polite requests, indirect questions with ob, formal instructions.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const a2lektion26: Lesson = {
  id: 'a2-l26', level: 'A2', module: 7, number: 26,
  title: { de: 'Termine und Behörden', en: 'Appointments and offices', fr: 'Rendez-vous et administrations' },
  theme: 'Making and changing appointments, polite requests, indirect questions with ob and formal instructions',
  themeFr: 'Prendre et modifier un rendez-vous, demandes polies, questions indirectes avec ob et consignes formelles',
  goals: ['Make, move and cancel an appointment', 'Ask politely with Könnten Sie …? and Ich möchte wissen, ob …', 'Understand and give formal instructions with Sie'],
  goalsFr: ['Prendre, déplacer et annuler un rendez-vous', 'Demander poliment avec Könnten Sie …? et Ich möchte wissen, ob …', 'Comprendre et donner des consignes formelles avec Sie'],
  canDo: g('Ich kann einen Termin vereinbaren, höflich fragen und einfache Anweisungen auf einem Amt verstehen.', 'I can make an appointment, ask politely and understand simple instructions at an office.', 'Je sais prendre un rendez-vous, demander poliment et comprendre des consignes simples dans une administration.'),
  steps: [
    { kind: 'intro', title: 'Termine und Ämter 📅', titleFr: 'Rendez-vous et administrations 📅',
      scene: 'Lara needs a doctor’s appointment and has to register at the town hall.', sceneFr: 'Lara a besoin d’un rendez-vous chez le médecin et doit s’inscrire à la mairie.',
      goals: ['Make and change appointments', 'Polite requests and indirect questions', 'Formal instructions with Sie'],
      goalsFr: ['Prendre et modifier des rendez-vous', 'Demandes polies et questions indirectes', 'Consignes formelles avec Sie'] },

    // ───────────── 1 · Appointments ─────────────
    { kind: 'chapter', title: 'Einen Termin vereinbaren', titleFr: 'Prendre un rendez-vous', blurb: 'vereinbaren, verschieben, absagen.', blurbFr: 'convenir, déplacer, annuler.' },

    { kind: 'situation', title: 'In der Praxis', titleFr: 'Au cabinet',
      setting: 'Lara calls a doctor’s practice.', settingFr: 'Lara appelle un cabinet médical.',
      lines: [
        line('Praxis', 'Praxis Dr. Weber, guten Tag.', 'Dr Weber’s practice, good day.', 'Cabinet du Dr Weber, bonjour.'),
        line('Lara', 'Guten Tag, hier ist Lara Mbeki. Ich möchte einen Termin vereinbaren.', 'Good day, this is Lara Mbeki. I would like to make an appointment.', 'Bonjour, ici Lara Mbeki. Je voudrais prendre un rendez-vous.'),
        line('Praxis', 'Geht es am Dienstag um zehn Uhr?', 'Would Tuesday at ten work?', 'Mardi à dix heures, ça vous convient ?'),
        line('Lara', 'Leider habe ich dann einen anderen Termin. Können wir den Termin auf Mittwoch verschieben?', 'Unfortunately I have another appointment then. Can we move it to Wednesday?', 'Malheureusement, j’ai un autre rendez-vous à ce moment-là. Peut-on le déplacer à mercredi ?'),
        line('Praxis', 'Ja, Mittwoch um neun. Bringen Sie bitte Ihre Versichertenkarte mit.', 'Yes, Wednesday at nine. Please bring your insurance card.', 'Oui, mercredi à neuf heures. Apportez votre carte d’assurance, s’il vous plaît.'),
        line('Lara', 'Danke. Falls ich nicht kommen kann, sage ich den Termin rechtzeitig ab.', 'Thanks. If I can’t come, I will cancel the appointment in time.', 'Merci. Si je ne peux pas venir, j’annulerai le rendez-vous à temps.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l26-e1', prompt: 'When is the new appointment?', promptFr: 'Quand est le nouveau rendez-vous ?', options: ['Wednesday at nine', 'Tuesday at ten', 'Friday at eight'], optionsFr: ['Mercredi à neuf heures', 'Mardi à dix heures', 'Vendredi à huit heures'], answer: 0, explain: 'The practice says: “Ja, Mittwoch um neun.”', explainFr: 'Le cabinet dit : « Ja, Mittwoch um neun. »', hint: 'Look at the fifth line.', hintFr: 'Regarde la cinquième réplique.' } },

    { kind: 'wordgroup', title: 'Termin und Praxis', titleFr: 'Rendez-vous et cabinet',
      items: [
        word('a2l26-termin-vereinbaren', 'einen Termin vereinbaren', null, 'to make an appointment', 'prendre rendez-vous', ['ei', 'nen', 'ter', 'MIN', 'ver', 'EIN', 'ba', 'ren'], 'eye-nen ter-MEEN fer-INE-bah-ren', g('Ich möchte einen Termin vereinbaren.', 'I would like to make an appointment.', 'Je voudrais prendre rendez-vous.')),
        word('a2l26-verschieben', 'verschieben', null, 'to postpone / move', 'déplacer / reporter', ['ver', 'SCHIE', 'ben'], 'fer-SHEE-ben', g('Können wir den Termin verschieben?', 'Can we move the appointment?', 'Peut-on déplacer le rendez-vous ?')),
        word('a2l26-absagen', 'absagen', null, 'to cancel', 'annuler', ['AB', 'sa', 'gen'], 'AHP-zah-gen', g('Ich sage den Termin ab.', 'I am cancelling the appointment.', 'J’annule le rendez-vous.')),
        word('a2l26-praxis', 'die Praxis', 'die', 'the (doctor’s) practice', 'le cabinet médical', ['PRAK', 'sis'], 'PRAHK-sis', g('Die Praxis öffnet um acht.', 'The practice opens at eight.', 'Le cabinet ouvre à huit heures.')),
        word('a2l26-sprechstunde', 'die Sprechstunde', 'die', 'the consultation hours', 'les heures de consultation', ['SPRECH', 'stun', 'de'], 'SHPREKH-shtoon-duh', g('Die Sprechstunde ist von acht bis zwölf.', 'Consultation hours are from eight to twelve.', 'Les consultations sont de huit à douze heures.')),
        word('a2l26-versichertenkarte', 'die Versichertenkarte', 'die', 'the insurance card', 'la carte d’assuré', ['ver', 'SI', 'cher', 'ten', 'kar', 'te'], 'fer-ZI-kher-ten-KAR-tuh', g('Bringen Sie Ihre Versichertenkarte mit.', 'Bring your insurance card.', 'Apportez votre carte d’assuré.')),
      ] },

    { kind: 'wordgroup', title: 'Wann passt es?', titleFr: 'Quand cela convient-il ?',
      items: [
        word('a2l26-rechtzeitig', 'rechtzeitig', null, 'in time', 'à temps', ['RECHT', 'zei', 'tig'], 'REKHT-tsy-tikh', g('Bitte sagen Sie rechtzeitig ab.', 'Please cancel in time.', 'Annulez à temps, s’il vous plaît.')),
        word('a2l26-falls', 'falls', null, 'in case / if', 'au cas où / si', ['FALLS'], 'FALS', g('Falls ich nicht komme, rufe ich an.', 'If I don’t come, I will call.', 'Si je ne viens pas, j’appellerai.')),
        word('a2l26-passen', 'passen', null, 'to suit / fit', 'convenir', ['PAS', 'sen'], 'PAH-sen', g('Der Termin passt mir gut.', 'The appointment suits me well.', 'Le rendez-vous me convient bien.')),
        word('a2l26-vorher', 'vorher', null, 'beforehand', 'auparavant', ['vor', 'HER'], 'for-HAIR', g('Ich rufe vorher an.', 'I call beforehand.', 'J’appelle auparavant.')),
      ] },

    { kind: 'grammar', note: {
      id: 'a2l26-hoeflich', title: 'Polite requests: Könnten Sie …? / Würden Sie …?', titleFr: 'Demandes polies : Könnten Sie …? / Würden Sie …?',
      lead: 'Könnten Sie … / Würden Sie … + infinitive at the end is more polite than Können Sie …?',
      leadFr: 'Könnten Sie … / Würden Sie … + infinitif à la fin est plus poli que Können Sie …?',
      explanationMd: 'For **polite requests** use the **subjunctive forms** **könnten** and **würden** (you know them from the lessons on suggestions and wishes): **Könnten Sie mir bitte helfen? Würden Sie bitte kurz warten?** The **infinitive goes to the end**. They sound **softer** than **Können Sie …?** or the imperative. Add **bitte** and, to propose a time, use **Geht es am Dienstag um zehn Uhr?** or **Passt Ihnen Mittwoch?** To change an appointment: **Können wir den Termin verschieben?** To cancel: **Ich muss den Termin leider absagen.**',
      explanationMdFr: 'Pour des **demandes polies**, utilise les **formes du subjonctif** **könnten** et **würden** (tu les connais des leçons sur les propositions et les souhaits) : **Könnten Sie mir bitte helfen ? Würden Sie bitte kurz warten ?** L’**infinitif va à la fin**. Elles sont **plus douces** que **Können Sie …?** ou l’impératif. Ajoute **bitte** et, pour proposer une heure, utilise **Geht es am Dienstag um zehn Uhr ?** ou **Passt Ihnen Mittwoch ?** Pour changer un rendez-vous : **Können wir den Termin verschieben ?** Pour annuler : **Ich muss den Termin leider absagen.**',
      tables: [{ title: 'From direct to polite', titleFr: 'Du direct au poli', headers: ['Direct', 'Polite'], headersFr: ['Direct', 'Poli'],
        rows: [['Hilf mir!', 'Könnten Sie mir bitte helfen?'], ['Warten Sie!', 'Würden Sie bitte kurz warten?'], ['Wiederholen Sie das!', 'Könnten Sie das bitte wiederholen?'], ['Ich will einen Termin.', 'Ich möchte einen Termin vereinbaren.']],
        rowsFr: [['Hilf mir !', 'Könnten Sie mir bitte helfen ?'], ['Warten Sie !', 'Würden Sie bitte kurz warten ?'], ['Wiederholen Sie das !', 'Könnten Sie das bitte wiederholen ?'], ['Ich will einen Termin.', 'Ich möchte einen Termin vereinbaren.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Könnten', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'mir', role: 'dative' }, { text: 'bitte', role: 'other' }, { text: 'helfen?', role: 'verb' }], en: 'Could you please help me?', fr: 'Pourriez-vous m’aider, s’il vous plaît ?' },
        { parts: [{ text: 'Würden', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'bitte', role: 'other' }, { text: 'kurz', role: 'time' }, { text: 'warten?', role: 'verb' }], en: 'Would you please wait a moment?', fr: 'Voudriez-vous patienter un instant, s’il vous plaît ?' },
      ],
      contrast: {
        a: { label: 'Direct', labelFr: 'Direct', note: 'with friends', noteFr: 'entre amis', examples: [g('Kannst du mir helfen?', 'Can you help me?', 'Peux-tu m’aider ?'), g('Warte kurz!', 'Wait a moment!', 'Attends un instant !')] },
        b: { label: 'Polite', labelFr: 'Poli', note: 'at the office', noteFr: 'à l’administration', examples: [g('Könnten Sie mir helfen?', 'Could you help me?', 'Pourriez-vous m’aider ?'), g('Würden Sie kurz warten?', 'Would you wait a moment?', 'Voudriez-vous patienter un instant ?')] },
      },
      examples: [
        g('Könnten Sie mir bitte helfen?', 'Could you please help me?', 'Pourriez-vous m’aider, s’il vous plaît ?'),
        g('Würden Sie bitte kurz warten?', 'Would you please wait a moment?', 'Voudriez-vous patienter un instant, s’il vous plaît ?'),
        g('Könnten Sie das bitte wiederholen?', 'Could you repeat that, please?', 'Pourriez-vous répéter, s’il vous plaît ?'),
        g('Geht es am Dienstag um zehn Uhr?', 'Would Tuesday at ten work?', 'Mardi à dix heures, ça convient ?'),
        g('Können wir den Termin auf Mittwoch verschieben?', 'Can we move the appointment to Wednesday?', 'Peut-on déplacer le rendez-vous à mercredi ?'),
        g('Ich muss den Termin leider absagen.', 'I unfortunately have to cancel the appointment.', 'Je dois malheureusement annuler le rendez-vous.'),
      ],
      mistakes: [
        { wrong: 'Könnten Sie helfen mir?', right: 'Könnten Sie mir helfen?', why: 'The infinitive goes to the end.', whyFr: 'L’infinitif va à la fin.' },
        { wrong: 'Ich will einen Termin.', right: 'Ich möchte einen Termin vereinbaren.', why: '“Ich will” sounds too direct at an office.', whyFr: '« Ich will » est trop direct dans une administration.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l26-e2', prompt: '___ Sie mir bitte helfen? (polite: können)', promptFr: '___ Sie mir bitte helfen ? (poli : können)', answer: 'Könnten', hint: 'könnten = could', hintFr: 'könnten = pourriez' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l26-e3', pairs: [{ de: 'verschieben', en: 'to postpone', fr: 'reporter' }, { de: 'absagen', en: 'to cancel', fr: 'annuler' }, { de: 'die Praxis', en: 'the practice', fr: 'le cabinet' }, { de: 'rechtzeitig', en: 'in time', fr: 'à temps' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à son sens.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l26-e4', tokens: ['bitte', 'Würden', 'warten', 'Sie', 'kurz'], answer: ['Würden', 'Sie', 'bitte', 'kurz', 'warten'], hint: 'Würden first, infinitive last.', hintFr: 'Würden en premier, infinitif à la fin.' } },

    // ───────────── 2 · ob ─────────────
    { kind: 'chapter', title: 'Indirekte Fragen mit „ob“', titleFr: 'Questions indirectes avec « ob »', blurb: 'Ich möchte wissen, ob …', blurbFr: 'Je voudrais savoir si …' },

    { kind: 'situation', title: 'Auf dem Amt', titleFr: 'À la mairie',
      setting: 'Lara asks at the registration office.', settingFr: 'Lara demande des renseignements au bureau d’enregistrement.',
      lines: [
        line('Lara', 'Entschuldigung, ich möchte wissen, ob ich einen Termin brauche.', 'Excuse me, I would like to know whether I need an appointment.', 'Excusez-moi, je voudrais savoir si j’ai besoin d’un rendez-vous.'),
        line('Beamter', 'Ja. Wissen Sie, wann Sie umgezogen sind?', 'Yes. Do you know when you moved?', 'Oui. Savez-vous quand vous avez déménagé ?'),
        line('Lara', 'Ich weiß nicht mehr genau, wann das war. Können Sie mir sagen, wo ich das Formular bekomme?', 'I no longer know exactly when that was. Can you tell me where I get the form?', 'Je ne me souviens plus exactement quand c’était. Pouvez-vous me dire où je peux obtenir le formulaire ?'),
        line('Beamter', 'Ich frage nach, ob wir noch Formulare haben. Einen Moment bitte.', 'I’ll check whether we still have forms. One moment please.', 'Je vérifie si nous avons encore des formulaires. Un instant, s’il vous plaît.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l26-ob', title: 'Indirect questions: ob and question words', titleFr: 'Questions indirectes : ob et mots interrogatifs',
      lead: 'Yes/no question → ob. W-question → the same W-word. The verb goes to the end.',
      leadFr: 'Question oui/non → ob. Question en W → le même mot interrogatif. Le verbe va à la fin.',
      explanationMd: 'To ask **politely** or to **report a question**, make an **indirect question**. A **yes/no question** becomes **ob** (whether): **Brauche ich einen Termin?** → **Ich möchte wissen, ob ich einen Termin brauche.** A **W-question** keeps its **question word**: **Wann sind Sie umgezogen?** → **Wissen Sie, wann Sie umgezogen sind?** In both cases the **verb goes to the end** (like **weil / dass / wenn**) and a **comma** separates the clauses. Typical openers: **Ich möchte wissen, … · Können Sie mir sagen, … · Wissen Sie, … · Ich frage nach, …**',
      explanationMdFr: 'Pour demander **poliment** ou **rapporter une question**, forme une **question indirecte**. Une **question oui/non** devient **ob** (si) : **Brauche ich einen Termin ?** → **Ich möchte wissen, ob ich einen Termin brauche.** Une **question en W** garde son **mot interrogatif** : **Wann sind Sie umgezogen ?** → **Wissen Sie, wann Sie umgezogen sind ?** Dans les deux cas, le **verbe va à la fin** (comme **weil / dass / wenn**) et une **virgule** sépare les propositions. Amorces typiques : **Ich möchte wissen, … · Können Sie mir sagen, … · Wissen Sie, … · Ich frage nach, …**',
      tables: [{ title: 'Direct → indirect', titleFr: 'Direct → indirect', headers: ['Direct question', 'Indirect question'], headersFr: ['Question directe', 'Question indirecte'],
        rows: [['Brauche ich einen Termin?', 'Ich möchte wissen, ob ich einen Termin brauche.'], ['Wann sind Sie umgezogen?', 'Wissen Sie, wann Sie umgezogen sind?'], ['Wo bekomme ich das Formular?', 'Können Sie mir sagen, wo ich das Formular bekomme?'], ['Haben wir noch Formulare?', 'Ich frage nach, ob wir noch Formulare haben.']],
        rowsFr: [['Brauche ich einen Termin ?', 'Ich möchte wissen, ob ich einen Termin brauche.'], ['Wann sind Sie umgezogen ?', 'Wissen Sie, wann Sie umgezogen sind ?'], ['Wo bekomme ich das Formular ?', 'Können Sie mir sagen, wo ich das Formular bekomme ?'], ['Haben wir noch Formulare ?', 'Ich frage nach, ob wir noch Formulare haben.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'möchte', role: 'verb' }, { text: 'wissen,', role: 'verb' }, { text: 'ob', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'einen Termin', role: 'accusative' }, { text: 'brauche.', role: 'verb' }], en: 'I would like to know whether I need an appointment.', fr: 'Je voudrais savoir si j’ai besoin d’un rendez-vous.' },
        { parts: [{ text: 'Können', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'mir', role: 'dative' }, { text: 'sagen,', role: 'verb' }, { text: 'wo', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'das Formular', role: 'accusative' }, { text: 'bekomme?', role: 'verb' }], en: 'Can you tell me where I get the form?', fr: 'Pouvez-vous me dire où je peux obtenir le formulaire ?' },
      ],
      contrast: {
        a: { label: 'Yes/no → ob', labelFr: 'Oui/non → ob', note: 'whether', noteFr: 'si', examples: [g('Ich möchte wissen, ob ich einen Termin brauche.', 'I would like to know whether I need an appointment.', 'Je voudrais savoir si j’ai besoin d’un rendez-vous.'), g('Ich frage nach, ob wir noch Formulare haben.', 'I’ll check whether we still have forms.', 'Je vérifie si nous avons encore des formulaires.')] },
        b: { label: 'W-question → same word', labelFr: 'Question en W → même mot', note: 'wann, wo, wie …', noteFr: 'wann, wo, wie …', examples: [g('Wissen Sie, wann Sie umgezogen sind?', 'Do you know when you moved?', 'Savez-vous quand vous avez déménagé ?'), g('Können Sie mir sagen, wo ich das Formular bekomme?', 'Can you tell me where I get the form?', 'Pouvez-vous me dire où je peux obtenir le formulaire ?')] },
      },
      examples: [
        g('Ich möchte wissen, ob ich einen Termin brauche.', 'I would like to know whether I need an appointment.', 'Je voudrais savoir si j’ai besoin d’un rendez-vous.'),
        g('Wissen Sie, wann Sie umgezogen sind?', 'Do you know when you moved?', 'Savez-vous quand vous avez déménagé ?'),
        g('Können Sie mir sagen, wo ich das Formular bekomme?', 'Can you tell me where I get the form?', 'Pouvez-vous me dire où je peux obtenir le formulaire ?'),
        g('Ich frage nach, ob wir noch Formulare haben.', 'I’ll check whether we still have forms.', 'Je vérifie si nous avons encore des formulaires.'),
        g('Ich weiß nicht, ob er kommt.', 'I don’t know whether he is coming.', 'Je ne sais pas s’il vient.'),
        g('Können Sie mir sagen, wie spät es ist?', 'Can you tell me what time it is?', 'Pouvez-vous me dire quelle heure il est ?'),
      ],
      mistakes: [
        { wrong: 'Ich möchte wissen, ob brauche ich einen Termin.', right: 'Ich möchte wissen, ob ich einen Termin brauche.', why: 'After ob the verb goes last.', whyFr: 'Après ob, le verbe va en dernier.' },
        { wrong: 'Ich weiß nicht, ob wann er kommt.', right: 'Ich weiß nicht, wann er kommt.', why: 'A W-question keeps its own word — no ob.', whyFr: 'Une question en W garde son propre mot — pas de ob.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l26-e5', prompt: 'Ich möchte wissen, ___ ich einen Termin brauche.', promptFr: 'Ich möchte wissen, ___ ich einen Termin brauche.', answer: 'ob', hint: 'yes/no question → ob', hintFr: 'question oui/non → ob' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l26-e6', tokens: ['wissen', 'Ich', 'ob', 'möchte', 'er', 'kommt'], answer: ['Ich', 'möchte', 'wissen', 'ob', 'er', 'kommt'], hint: 'ob sends the verb to the end.', hintFr: 'ob envoie le verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l26-e7', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Wissen Sie, wann Sie umgezogen sind?', 'Wissen Sie, wann sind Sie umgezogen?', 'Wissen Sie, wann umgezogen Sie sind?'], optionsFr: ['Wissen Sie, wann Sie umgezogen sind ?', 'Wissen Sie, wann sind Sie umgezogen ?', 'Wissen Sie, wann umgezogen Sie sind ?'], answer: 0, explain: 'In an indirect question the verb goes to the end.', explainFr: 'Dans une question indirecte, le verbe va à la fin.', hint: 'verb last', hintFr: 'verbe à la fin' } },

    // ───────────── 3 · Formal instructions ─────────────
    { kind: 'chapter', title: 'Anweisungen auf dem Amt', titleFr: 'Consignes à l’administration', blurb: 'Bitte füllen Sie das Formular aus.', blurbFr: 'Bitte füllen Sie das Formular aus.' },

    { kind: 'situation', title: 'Das Formular', titleFr: 'Le formulaire',
      setting: 'The clerk gives Lara instructions.', settingFr: 'L’employé donne des consignes à Lara.',
      lines: [
        line('Beamter', 'Bitte füllen Sie das Formular aus und unterschreiben Sie hier.', 'Please fill in the form and sign here.', 'Remplissez le formulaire et signez ici, s’il vous plaît.'),
        line('Lara', 'Brauche ich Unterlagen?', 'Do I need documents?', 'Ai-je besoin de documents ?'),
        line('Beamter', 'Ja, bringen Sie bitte Ihren Pass und den Mietvertrag mit. Geben Sie alles am Schalter ab.', 'Yes, please bring your passport and the rental contract. Hand everything in at the counter.', 'Oui, apportez votre passeport et le contrat de location. Remettez tout au guichet.'),
        line('Lara', 'Und wenn ich Fragen habe?', 'And if I have questions?', 'Et si j’ai des questions ?'),
        line('Beamter', 'Dann fragen Sie bitte an der Information nach. Rufen Sie uns an, falls etwas fehlt.', 'Then please ask at the information desk. Call us if something is missing.', 'Alors demandez à l’accueil. Appelez-nous si quelque chose manque.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l26-e8', prompt: 'What must Lara bring?', promptFr: 'Que doit apporter Lara ?', options: ['Her passport and the rental contract', 'Only a pen', 'Her insurance card'], optionsFr: ['Son passeport et le contrat de location', 'Seulement un stylo', 'Sa carte d’assurance'], answer: 0, explain: 'The clerk says: “Bringen Sie bitte Ihren Pass und den Mietvertrag mit.”', explainFr: 'L’employé dit : « Bringen Sie bitte Ihren Pass und den Mietvertrag mit. »', hint: 'Look for “mitbringen”.', hintFr: 'Cherche « mitbringen ».' } },

    { kind: 'wordgroup', title: 'Formulare und Unterlagen', titleFr: 'Formulaires et documents',
      items: [
        word('a2l26-formular', 'das Formular', 'das', 'the form', 'le formulaire', ['for', 'mu', 'LAR'], 'for-moo-LAHR', g('Ich fülle das Formular aus.', 'I am filling in the form.', 'Je remplis le formulaire.')),
        word('a2l26-unterlagen', 'die Unterlagen', 'die', 'the documents', 'les documents', ['UN', 'ter', 'la', 'gen'], 'OON-ter-lah-gen', g('Bringen Sie alle Unterlagen mit.', 'Bring all the documents.', 'Apportez tous les documents.')),
        word('a2l26-schalter', 'der Schalter', 'der', 'the counter', 'le guichet', ['SCHAL', 'ter'], 'SHAL-ter', g('Geben Sie das am Schalter ab.', 'Hand it in at the counter.', 'Remettez-le au guichet.')),
        word('a2l26-ausfuellen', 'ausfüllen', null, 'to fill in', 'remplir', ['AUS', 'fül', 'len'], 'OWS-fuel-len', g('Füllen Sie das Formular aus.', 'Fill in the form.', 'Remplissez le formulaire.')),
        word('a2l26-unterschreiben', 'unterschreiben', null, 'to sign', 'signer', ['un', 'ter', 'SCHREI', 'ben'], 'oon-ter-SHRY-ben', g('Unterschreiben Sie bitte hier.', 'Please sign here.', 'Signez ici, s’il vous plaît.')),
        word('a2l26-abgeben', 'abgeben', null, 'to hand in', 'remettre', ['AB', 'ge', 'ben'], 'AHP-gay-ben', g('Geben Sie die Unterlagen ab.', 'Hand in the documents.', 'Remettez les documents.')),
      ] },

    { kind: 'grammar', note: {
      id: 'a2l26-imperativ-sie', title: 'Formal instructions: the Sie-imperative', titleFr: 'Consignes formelles : l’impératif de politesse',
      lead: 'Sie-imperative: verb first, Sie second. Separable verbs: the prefix goes to the end.',
      leadFr: 'Impératif en Sie : verbe en premier, Sie en second. Verbes séparables : le préfixe va à la fin.',
      explanationMd: 'Instructions to a person you address with **Sie**: the **verb comes first**, then **Sie** (same form as the infinitive): **Unterschreiben Sie hier. Rufen Sie uns an.** With **separable verbs** the **prefix goes to the end**: **Füllen Sie das Formular aus. Bringen Sie Ihren Pass mit. Geben Sie alles ab.** Add **bitte** to soften: **Bitte füllen Sie das Formular aus.** The exception is **sein**: **Seien Sie bitte pünktlich.** On signs and forms you also read the **infinitive**: **Bitte hier unterschreiben.**',
      explanationMdFr: 'Consignes à une personne à qui tu dis **Sie** : le **verbe vient en premier**, puis **Sie** (même forme que l’infinitif) : **Unterschreiben Sie hier. Rufen Sie uns an.** Avec les **verbes séparables**, le **préfixe va à la fin** : **Füllen Sie das Formular aus. Bringen Sie Ihren Pass mit. Geben Sie alles ab.** Ajoute **bitte** pour adoucir : **Bitte füllen Sie das Formular aus.** L’exception est **sein** : **Seien Sie bitte pünktlich.** Sur les panneaux et formulaires, tu lis aussi l’**infinitif** : **Bitte hier unterschreiben.**',
      tables: [{ title: 'Sie-imperative', titleFr: 'Impératif en Sie', headers: ['Infinitive', 'Sie-imperative'], headersFr: ['Infinitif', 'Impératif en Sie'],
        rows: [['unterschreiben', 'Unterschreiben Sie hier.'], ['ausfüllen', 'Füllen Sie das Formular aus.'], ['mitbringen', 'Bringen Sie Ihren Pass mit.'], ['abgeben', 'Geben Sie alles am Schalter ab.'], ['anrufen', 'Rufen Sie uns an.'], ['sein', 'Seien Sie bitte pünktlich.']],
        rowsFr: [['unterschreiben', 'Unterschreiben Sie hier.'], ['ausfüllen', 'Füllen Sie das Formular aus.'], ['mitbringen', 'Bringen Sie Ihren Pass mit.'], ['abgeben', 'Geben Sie alles am Schalter ab.'], ['anrufen', 'Rufen Sie uns an.'], ['sein', 'Seien Sie bitte pünktlich.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Füllen', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'das Formular', role: 'accusative' }, { text: 'aus.', role: 'verb' }], en: 'Fill in the form.', fr: 'Remplissez le formulaire.' },
        { parts: [{ text: 'Bringen', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'bitte', role: 'other' }, { text: 'Ihren Pass', role: 'accusative' }, { text: 'mit.', role: 'verb' }], en: 'Please bring your passport.', fr: 'Apportez votre passeport, s’il vous plaît.' },
      ],
      contrast: {
        a: { label: 'Formal (Sie)', labelFr: 'Formel (Sie)', note: 'at the office', noteFr: 'à l’administration', examples: [g('Füllen Sie das Formular aus.', 'Fill in the form.', 'Remplissez le formulaire.'), g('Rufen Sie uns an.', 'Call us.', 'Appelez-nous.')] },
        b: { label: 'Informal (du)', labelFr: 'Informel (du)', note: 'with friends', noteFr: 'entre amis', examples: [g('Füll das Formular aus!', 'Fill in the form!', 'Remplis le formulaire !'), g('Ruf uns an!', 'Call us!', 'Appelle-nous !')] },
      },
      examples: [
        g('Bitte füllen Sie das Formular aus.', 'Please fill in the form.', 'Remplissez le formulaire, s’il vous plaît.'),
        g('Unterschreiben Sie hier.', 'Sign here.', 'Signez ici.'),
        g('Bringen Sie bitte Ihren Pass und den Mietvertrag mit.', 'Please bring your passport and the rental contract.', 'Apportez votre passeport et le contrat de location.'),
        g('Geben Sie alles am Schalter ab.', 'Hand everything in at the counter.', 'Remettez tout au guichet.'),
        g('Rufen Sie uns an, falls etwas fehlt.', 'Call us if something is missing.', 'Appelez-nous si quelque chose manque.'),
        g('Seien Sie bitte pünktlich.', 'Please be on time.', 'Soyez à l’heure, s’il vous plaît.'),
      ],
      mistakes: [
        { wrong: 'Sie füllen das Formular aus!', right: 'Füllen Sie das Formular aus.', why: 'In an instruction the verb comes first.', whyFr: 'Dans une consigne, le verbe vient en premier.' },
        { wrong: 'Ausfüllen Sie das Formular.', right: 'Füllen Sie das Formular aus.', why: 'The prefix goes to the end.', whyFr: 'Le préfixe va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l26-e9', prompt: '___ Sie bitte das Formular aus. (ausfüllen)', promptFr: '___ Sie bitte das Formular aus. (ausfüllen)', answer: 'Füllen', hint: 'Sie-imperative: füllen … aus', hintFr: 'impératif en Sie : füllen … aus' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l26-e10', word: 'Formular', answer: 'das', hint: 'Neuter: das Formular.', hintFr: 'Neutre : das Formular.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l26-e11', prompt: 'Listen. What should she do?', promptFr: 'Écoute. Que doit-elle faire ?', audio: { ttsText: 'Bitte füllen Sie das Formular aus und unterschreiben Sie hier.' }, options: ['Fill in the form and sign', 'Wait outside', 'Call back tomorrow'], optionsFr: ['Remplir le formulaire et signer', 'Attendre dehors', 'Rappeler demain'], answer: 0, hint: 'ausfüllen, unterschreiben', hintFr: 'ausfüllen, unterschreiben' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l26-e12', prompt: 'Listen. What does she want to know?', promptFr: 'Écoute. Que veut-elle savoir ?', audio: { ttsText: 'Ich möchte wissen, ob ich einen Termin brauche.' }, options: ['Whether she needs an appointment', 'When the office closes', 'Where the form is'], optionsFr: ['Si elle a besoin d’un rendez-vous', 'Quand le bureau ferme', 'Où est le formulaire'], answer: 0, hint: 'ob …', hintFr: 'ob …' } },

    { kind: 'pronunciation', focus: 'The sch in Schalter and unterschreiben, and the ü in ausfüllen', focusFr: 'Le sch dans Schalter et unterschreiben, et le ü dans ausfüllen',
      items: [
        word('a2l26-schalter-pron', 'Schalter', null, 'counter', 'guichet', ['SCHAL', 'ter'], 'SHAL-ter', g('Der Schalter ist offen.', 'The counter is open.', 'Le guichet est ouvert.')),
        word('a2l26-unterschreiben-pron', 'unterschreiben', null, 'to sign', 'signer', ['un', 'ter', 'SCHREI', 'ben'], 'oon-ter-SHRY-ben', g('Bitte hier unterschreiben.', 'Please sign here.', 'Signez ici, s’il vous plaît.')),
        word('a2l26-ausfuellen-pron', 'ausfüllen', null, 'to fill in', 'remplir', ['AUS', 'fül', 'len'], 'OWS-fuel-len', g('Ich fülle das Formular aus.', 'I am filling in the form.', 'Je remplis le formulaire.')),
        word('a2l26-sprechstunde-pron', 'Sprechstunde', null, 'consultation hours', 'heures de consultation', ['SPRECH', 'stun', 'de'], 'SHPREKH-shtoon-duh', g('Die Sprechstunde beginnt um acht.', 'Consultation hours begin at eight.', 'La consultation commence à huit heures.')),
      ] },

    { kind: 'wrapup',
      summary: 'You can now **make and change an appointment**, ask **politely** (Könnten Sie …?, ob …) and follow **formal instructions** with the **Sie-imperative**. 🎉',
      summaryFr: 'Tu sais maintenant **prendre et modifier un rendez-vous**, demander **poliment** (Könnten Sie …?, ob …) et suivre des **consignes formelles** avec l’**impératif en Sie**. 🎉',
      card: { title: 'Offices on one page', titleFr: 'Les administrations en une page', sections: [
        { heading: 'Appointments', headingFr: 'Rendez-vous', rows: [g('einen Termin vereinbaren · verschieben · absagen', 'make · move · cancel', 'prendre · déplacer · annuler')] },
        { heading: 'Polite questions', headingFr: 'Questions polies', rows: [g('Könnten Sie … + infinitive?', 'infinitive at the end', 'infinitif à la fin'), g('Ich möchte wissen, ob … / wann …', 'verb at the end', 'verbe à la fin')] },
        { heading: 'Instructions', headingFr: 'Consignes', rows: [g('Füllen Sie das Formular aus.', 'verb first, prefix at the end', 'verbe d’abord, préfixe à la fin')] },
      ] } },
  ],
};
