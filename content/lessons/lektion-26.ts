import type { Lesson } from '../types';
import { g, line } from '../author';

// New A1 lesson: the capstone. It is built like the Goethe-Zertifikat A1 Start Deutsch 1 exam (listening, reading, writing, speaking)
// and reuses what lessons 1 to 25 taught. Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const lektion26: Lesson = {
  id: 'l26', level: 'A1', module: 6, number: 26,
  title: { de: 'Start Deutsch 1: Prüfungstraining', en: 'Start Deutsch 1: exam practice', fr: 'Start Deutsch 1 : entraînement à l’examen' },
  theme: 'Listening, reading, writing and speaking, in exam format',
  themeFr: 'Écouter, lire, écrire et parler, au format de l’examen',
  goals: ['Understand short announcements and messages', 'Read signs, notices and short texts', 'Fill in a form and write a short message', 'Ask questions and make requests in a conversation'],
  goalsFr: ['Comprendre de courtes annonces et messages', 'Lire panneaux, affiches et courts textes', 'Remplir un formulaire et écrire un court message', 'Poser des questions et faire des demandes dans une conversation'],
  canDo: g('Ich kann die vier Fertigkeiten auf A1-Niveau zeigen: hören, lesen, schreiben, sprechen.', 'I can show all four skills at A1 level: listening, reading, writing and speaking.', 'Je sais montrer les quatre compétences au niveau A1 : écouter, lire, écrire, parler.'),
  steps: [
    { kind: 'intro', title: 'Start Deutsch 1 📝', titleFr: 'Start Deutsch 1 📝',
      scene: 'Four short parts, like the real exam: Hören, Lesen, Schreiben, Sprechen.', sceneFr: 'Quatre courtes parties, comme le vrai examen : Hören, Lesen, Schreiben, Sprechen.',
      goals: ['Hören: short announcements and messages', 'Lesen: notices and short texts', 'Schreiben: a form and a message', 'Sprechen: questions and requests'],
      goalsFr: ['Hören : courtes annonces et messages', 'Lesen : affiches et courts textes', 'Schreiben : un formulaire et un message', 'Sprechen : questions et demandes'] },

    // ───────────── Hören ─────────────
    { kind: 'chapter', title: 'Hören', titleFr: 'Écouter', blurb: 'Listen for numbers, times, names and places.', blurbFr: 'Écouter les nombres, heures, noms et lieux.' },

    { kind: 'situation', title: 'Durchsagen und Nachrichten', titleFr: 'Annonces et messages',
      setting: 'At the exam you hear short texts twice. Read the dialogue to see what they sound like.', settingFr: 'À l’examen, tu entends de courts textes deux fois. Lis le dialogue pour voir à quoi ils ressemblent.',
      lines: [
        line('Lautsprecher', 'Achtung, eine Durchsage. Der Zug nach München fährt heute von Gleis fünf, nicht von Gleis drei.', 'Attention please. Today the train to Munich leaves from platform five, not platform three.', 'Attention, une annonce. Aujourd’hui le train pour Munich part de la voie cinq, pas de la voie trois.'),
        line('Anrufbeantworter', 'Hier ist Praxis Weber. Ihr Termin ist am Dienstag um zehn Uhr. Bitte rufen Sie bei Fragen an: null dreißig, eins zwei drei, vier fünf.', 'This is the Weber practice. Your appointment is on Tuesday at ten o’clock. Please call with questions: zero thirty, one two three, four five.', 'Ici le cabinet Weber. Votre rendez-vous est mardi à dix heures. Appelez en cas de questions : zéro trente, un deux trois, quatre cinq.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'l26-hoeren', title: 'Listening strategy', titleFr: 'Stratégie d’écoute',
      lead: 'Read the questions first. Listen for numbers, times, days, names and places. You hear everything twice.',
      leadFr: 'Lis d’abord les questions. Écoute les nombres, heures, jours, noms et lieux. Tu entends tout deux fois.',
      explanationMd: 'In the exam you hear each text **twice**. **Read the questions first** so you know what to listen for. At A1 the answers are almost always **numbers, times, days, names or places**. Do **not** try to understand every word: you only need the **key information**. Words like **nicht, aber, nur, leider** often change the answer.',
      explanationMdFr: 'À l’examen, tu entends chaque texte **deux fois**. **Lis d’abord les questions** pour savoir quoi écouter. En A1, les réponses sont presque toujours des **nombres, heures, jours, noms ou lieux**. N’essaie **pas** de comprendre chaque mot : il te faut seulement l’**information clé**. Des mots comme **nicht, aber, nur, leider** changent souvent la réponse.',
      tables: [{ title: 'What to listen for', titleFr: 'Quoi écouter', headers: ['Question word', 'Listen for', 'Example'], headersFr: ['Mot interrogatif', 'Écoute', 'Exemple'],
        rows: [['Wann? / Um wie viel Uhr?', 'a day or a time', 'am Dienstag um zehn Uhr'], ['Wo?', 'a place', 'Gleis fünf, vor dem Bahnhof'], ['Wie viel? / Was kostet …?', 'a number or a price', 'zwanzig Euro'], ['Wer? / Wie heißt …?', 'a name', 'Praxis Weber'], ['Was? / Warum?', 'a thing or a reason', 'denn es regnet']],
        rowsFr: [['Wann ? / Um wie viel Uhr ?', 'un jour ou une heure', 'am Dienstag um zehn Uhr'], ['Wo ?', 'un lieu', 'Gleis fünf, vor dem Bahnhof'], ['Wie viel ? / Was kostet … ?', 'un nombre ou un prix', 'zwanzig Euro'], ['Wer ? / Wie heißt … ?', 'un nom', 'Praxis Weber'], ['Was ? / Warum ?', 'une chose ou une raison', 'denn es regnet']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Zug', role: 'subject' }, { text: 'fährt', role: 'verb' }, { text: 'von Gleis fünf,', role: 'place' }, { text: 'nicht', role: 'connector' }, { text: 'von Gleis drei.', role: 'place' }], en: 'The train leaves from platform five, not platform three.', fr: 'Le train part de la voie cinq, pas de la voie trois.' },
        { parts: [{ text: 'Ihr Termin', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'am Dienstag', role: 'time' }, { text: 'um zehn Uhr.', role: 'time' }], en: 'Your appointment is on Tuesday at ten o’clock.', fr: 'Votre rendez-vous est mardi à dix heures.' },
      ],
      contrast: {
        a: { label: 'Key information', labelFr: 'Information clé', note: 'numbers, times, places', noteFr: 'nombres, heures, lieux', examples: [g('Der Zug fährt von Gleis fünf.', 'The train leaves from platform five.', 'Le train part de la voie cinq.'), g('Der Termin ist am Dienstag um zehn Uhr.', 'The appointment is on Tuesday at ten.', 'Le rendez-vous est mardi à dix heures.')] },
        b: { label: 'Small words that change it', labelFr: 'Petits mots qui changent tout', note: 'nicht, aber, nur, leider', noteFr: 'nicht, aber, nur, leider', examples: [g('Nicht von Gleis drei, sondern von Gleis fünf.', 'Not from platform three, but platform five.', 'Pas de la voie trois, mais de la voie cinq.'), g('Leider ist die Praxis am Montag geschlossen.', 'Unfortunately the practice is closed on Monday.', 'Hélas le cabinet est fermé le lundi.')] },
      },
      examples: [
        g('Der Zug nach München fährt von Gleis fünf.', 'The train to Munich leaves from platform five.', 'Le train pour Munich part de la voie cinq.'),
        g('Ihr Termin ist am Dienstag um zehn Uhr.', 'Your appointment is on Tuesday at ten.', 'Votre rendez-vous est mardi à dix heures.'),
        g('Bitte rufen Sie bei Fragen an.', 'Please call with questions.', 'Appelez en cas de questions, s’il vous plaît.'),
        g('Das Konzert beginnt um zwanzig Uhr.', 'The concert starts at eight p.m.', 'Le concert commence à vingt heures.'),
        g('Die Karten kosten zwölf Euro.', 'The tickets cost twelve euros.', 'Les billets coûtent douze euros.'),
        g('Das Geschäft ist am Sonntag geschlossen.', 'The shop is closed on Sunday.', 'Le magasin est fermé le dimanche.'),
      ],
      mistakes: [
        { wrong: 'Der Zug fährt von Gleis drei. (the announcement said: not three)', right: 'Der Zug fährt von Gleis fünf.', why: 'Listen for nicht and aber: they change the answer.', whyFr: 'Écoute nicht et aber : ils changent la réponse.' },
        { wrong: 'Der Termin ist um Dienstag.', right: 'Der Termin ist am Dienstag.', why: 'am for days, um for clock times.', whyFr: 'am pour les jours, um pour les heures.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l26-e1', prompt: 'Listen. From which platform does the train leave?', promptFr: 'Écoute. De quelle voie part le train ?', audio: { ttsText: 'Achtung, eine Durchsage. Der Zug nach München fährt heute von Gleis fünf, nicht von Gleis drei.' }, options: ['Platform 5', 'Platform 3', 'Platform 8'], optionsFr: ['Voie 5', 'Voie 3', 'Voie 8'], answer: 0, hint: 'nicht von Gleis drei', hintFr: 'nicht von Gleis drei' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l26-e2', prompt: 'Listen. When is the appointment?', promptFr: 'Écoute. Quand est le rendez-vous ?', audio: { ttsText: 'Hier ist Praxis Weber. Ihr Termin ist am Dienstag um zehn Uhr.' }, options: ['Tuesday at 10', 'Tuesday at 2', 'Thursday at 10'], optionsFr: ['Mardi à 10 h', 'Mardi à 14 h', 'Jeudi à 10 h'], answer: 0, hint: 'am Dienstag, um zehn Uhr', hintFr: 'am Dienstag, um zehn Uhr' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l26-e3', prompt: 'Listen. How much do the tickets cost?', promptFr: 'Écoute. Combien coûtent les billets ?', audio: { ttsText: 'Das Konzert beginnt um zwanzig Uhr. Die Karten kosten zwölf Euro.' }, options: ['12 euros', '20 euros', '2 euros'], answer: 0, hint: 'zwölf', hintFr: 'zwölf' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l26-e4', prompt: 'Listen. Why does the speaker stay at home?', promptFr: 'Écoute. Pourquoi la personne reste-t-elle chez elle ?', audio: { ttsText: 'Ich bleibe heute zu Hause, denn ich habe Fieber und Kopfschmerzen.' }, options: ['She is ill', 'It is raining', 'She is tired'], optionsFr: ['Elle est malade', 'Il pleut', 'Elle est fatiguée'], answer: 0, hint: 'denn …', hintFr: 'denn …' } },

    // ───────────── Lesen ─────────────
    { kind: 'chapter', title: 'Lesen', titleFr: 'Lire', blurb: 'Signs, notices and short texts. True or false?', blurbFr: 'Panneaux, affiches et courts textes. Vrai ou faux ?' },

    { kind: 'situation', title: 'Aushang im Supermarkt', titleFr: 'Affiche au supermarché',
      setting: 'A notice on the door of a supermarket.', settingFr: 'Une affiche sur la porte d’un supermarché.',
      lines: [
        line('Aushang', 'Liebe Kunden, wir haben von Montag bis Samstag von 8 bis 20 Uhr geöffnet. Am Sonntag und an Feiertagen bleibt der Supermarkt geschlossen.', 'Dear customers, we are open from Monday to Saturday from 8 to 20 hours. On Sunday and on public holidays the supermarket stays closed.', 'Chers clients, nous sommes ouverts du lundi au samedi de 8 h à 20 h. Le dimanche et les jours fériés, le supermarché reste fermé.'),
        line('Aushang', 'Bezahlen können Sie bar oder mit Karte. Für Fragen sprechen Sie bitte mit unserem Personal.', 'You can pay in cash or by card. For questions please talk to our staff.', 'Vous pouvez payer en espèces ou par carte. Pour toute question, adressez-vous à notre personnel.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'l26-lesen', title: 'Reading strategy: richtig or falsch', titleFr: 'Stratégie de lecture : richtig ou falsch',
      lead: 'Find the sentence that answers the question. Words like nur, nicht, bis and von … bis decide it.',
      leadFr: 'Trouve la phrase qui répond à la question. Des mots comme nur, nicht, bis et von … bis décident de la réponse.',
      explanationMd: 'In the reading part you decide **richtig** (true) or **falsch** (false) or choose **a, b or c**. **Find the sentence** in the text that answers the question, then check it **word by word**. Small words decide: **nur** (only), **nicht**, **bis** (until), **von … bis**, **geschlossen** (closed), **geöffnet** (open). You do **not** need to understand the whole text.',
      explanationMdFr: 'Dans la partie lecture, tu décides **richtig** (vrai) ou **falsch** (faux) ou tu choisis **a, b ou c**. **Trouve la phrase** du texte qui répond à la question, puis vérifie-la **mot à mot**. Les petits mots décident : **nur** (seulement), **nicht**, **bis** (jusqu’à), **von … bis**, **geschlossen** (fermé), **geöffnet** (ouvert). Tu n’as **pas** besoin de comprendre tout le texte.',
      tables: [{ title: 'Words on notices', titleFr: 'Mots des affiches', headers: ['German', 'Meaning', 'Example'], headersFr: ['Allemand', 'Sens', 'Exemple'],
        rows: [['geöffnet', 'open', 'Montag bis Samstag geöffnet'], ['geschlossen', 'closed', 'Sonntag geschlossen'], ['der Feiertag', 'public holiday', 'an Feiertagen geschlossen'], ['bar / mit Karte', 'cash / by card', 'bar oder mit Karte'], ['verboten / erlaubt', 'forbidden / allowed', 'Rauchen verboten']],
        rowsFr: [['geöffnet', 'ouvert', 'Montag bis Samstag geöffnet'], ['geschlossen', 'fermé', 'Sonntag geschlossen'], ['der Feiertag', 'jour férié', 'an Feiertagen geschlossen'], ['bar / mit Karte', 'espèces / par carte', 'bar oder mit Karte'], ['verboten / erlaubt', 'interdit / autorisé', 'Rauchen verboten']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'haben', role: 'verb' }, { text: 'von Montag bis Samstag', role: 'time' }, { text: 'geöffnet.', role: 'other' }], en: 'We are open from Monday to Saturday.', fr: 'Nous sommes ouverts du lundi au samedi.' },
        { parts: [{ text: 'Der Supermarkt', role: 'subject' }, { text: 'bleibt', role: 'verb' }, { text: 'am Sonntag', role: 'time' }, { text: 'geschlossen.', role: 'other' }], en: 'The supermarket stays closed on Sunday.', fr: 'Le supermarché reste fermé le dimanche.' },
      ],
      contrast: {
        a: { label: 'richtig', labelFr: 'richtig', note: 'the text says exactly this', noteFr: 'le texte dit exactement cela', examples: [g('Der Supermarkt ist am Samstag geöffnet.', 'The supermarket is open on Saturday.', 'Le supermarché est ouvert le samedi.'), g('Man kann mit Karte bezahlen.', 'You can pay by card.', 'On peut payer par carte.')] },
        b: { label: 'falsch', labelFr: 'falsch', note: 'the text says something different', noteFr: 'le texte dit autre chose', examples: [g('Der Supermarkt ist am Sonntag geöffnet.', 'The supermarket is open on Sunday. (false)', 'Le supermarché est ouvert le dimanche. (faux)'), g('Man kann nur bar bezahlen.', 'You can only pay in cash. (false)', 'On ne peut payer qu’en espèces. (faux)')] },
      },
      examples: [
        g('Wir haben von Montag bis Samstag geöffnet.', 'We are open from Monday to Saturday.', 'Nous sommes ouverts du lundi au samedi.'),
        g('Am Sonntag bleibt der Supermarkt geschlossen.', 'On Sunday the supermarket stays closed.', 'Le dimanche, le supermarché reste fermé.'),
        g('Bezahlen können Sie bar oder mit Karte.', 'You can pay in cash or by card.', 'Vous pouvez payer en espèces ou par carte.'),
        g('Für Fragen sprechen Sie mit unserem Personal.', 'For questions talk to our staff.', 'Pour toute question, adressez-vous à notre personnel.'),
        g('Das Museum ist am Montag zu.', 'The museum is closed on Monday.', 'Le musée est fermé le lundi.'),
        g('Rauchen ist hier verboten.', 'Smoking is forbidden here.', 'Fumer est interdit ici.'),
      ],
      mistakes: [
        { wrong: 'Der Supermarkt ist am Sonntag geöffnet.', right: 'Der Supermarkt ist am Sonntag geschlossen.', why: 'geöffnet means open, geschlossen means closed.', whyFr: 'geöffnet signifie ouvert, geschlossen signifie fermé.' },
        { wrong: 'Man darf nur bar bezahlen.', right: 'Man darf bar oder mit Karte bezahlen.', why: 'oder offers both; nur would mean only one.', whyFr: 'oder propose les deux ; nur n’en laisserait qu’un.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l26-e5', prompt: 'The supermarket is open on Sunday. richtig or falsch?', promptFr: 'Le supermarché est ouvert le dimanche. richtig ou falsch ?', options: ['falsch', 'richtig'], answer: 0, explain: 'The text says it stays closed on Sunday.', explainFr: 'Le texte dit qu’il reste fermé le dimanche.', hint: 'Look for “Sonntag”.', hintFr: 'Cherche « Sonntag ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l26-e6', prompt: 'You can pay by card. richtig or falsch?', promptFr: 'On peut payer par carte. richtig ou falsch ?', options: ['richtig', 'falsch'], answer: 0, explain: 'The text says: “bar oder mit Karte”.', explainFr: 'Le texte dit : « bar oder mit Karte ».', hint: 'Look for “bezahlen”.', hintFr: 'Cherche « bezahlen ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l26-e7', prompt: 'Until what time is the supermarket open?', promptFr: 'Jusqu’à quelle heure le supermarché est-il ouvert ?', options: ['20 Uhr', '18 Uhr', '8 Uhr'], answer: 0, explain: 'The text says: “von 8 bis 20 Uhr”.', explainFr: 'Le texte dit : « von 8 bis 20 Uhr ».', hint: 'von … bis …', hintFr: 'von … bis …' } },

    // ───────────── Schreiben ─────────────
    { kind: 'chapter', title: 'Schreiben', titleFr: 'Écrire', blurb: 'A form and a short message.', blurbFr: 'Un formulaire et un court message.' },

    { kind: 'situation', title: 'Aufgabe: Nachricht schreiben', titleFr: 'Tâche : écrire un message',
      setting: 'You write to your friend Mia. Say why you cannot come, and suggest a new time. Write 20 to 30 words.', settingFr: 'Tu écris à ton amie Mia. Dis pourquoi tu ne peux pas venir et propose une autre heure. Écris 20 à 30 mots.',
      lines: [
        line('Aufgabe', 'Sie können am Samstag nicht zu Mias Party kommen. Schreiben Sie: Warum? Was machen Sie stattdessen?', 'You cannot come to Mia’s party on Saturday. Write: Why? What will you do instead?', 'Tu ne peux pas venir à la fête de Mia samedi. Écris : pourquoi ? Que fais-tu à la place ?'),
        line('Beispiel', 'Liebe Mia, leider kann ich am Samstag nicht kommen, denn ich muss arbeiten. Hast du am Sonntag Zeit? Dann können wir Kaffee trinken. Liebe Grüße, Nicole', 'Dear Mia, unfortunately I cannot come on Saturday because I have to work. Do you have time on Sunday? Then we can have coffee. Love, Nicole', 'Chère Mia, hélas je ne peux pas venir samedi, car je dois travailler. As-tu le temps dimanche ? Alors nous pourrons prendre un café. Amitiés, Nicole'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'l26-schreiben', title: 'Writing strategy: answer every point', titleFr: 'Stratégie d’écriture : réponds à chaque point',
      lead: 'Greeting, one sentence per point, goodbye. Use short sentences and the patterns you know.',
      leadFr: 'Salutation, une phrase par point, au revoir. Utilise des phrases courtes et les modèles que tu connais.',
      explanationMd: 'The exam marks **whether you answer every point**, how **clear** your sentences are, and **correct words and forms**. Write a **greeting**, **one short sentence for each point**, a **goodbye** and your **name**. Use the patterns you know: **leider** + **kann ich nicht** + infinitive at the end, **denn** for a reason (verb stays second), **Hast du am Sonntag Zeit?** for a suggestion, **Dann können wir …** for a plan.',
      explanationMdFr: 'L’examen note **si tu réponds à chaque point**, la **clarté** de tes phrases et l’**exactitude des mots et des formes**. Écris une **salutation**, **une phrase courte par point**, un **au revoir** et ton **prénom**. Utilise les modèles que tu connais : **leider** + **kann ich nicht** + infinitif à la fin, **denn** pour une raison (le verbe reste en deuxième), **Hast du am Sonntag Zeit ?** pour une proposition, **Dann können wir …** pour un projet.',
      tables: [{ title: 'Useful building blocks', titleFr: 'Éléments utiles', headers: ['You want to say', 'You write'], headersFr: ['Tu veux dire', 'Tu écris'],
        rows: [['you cannot come', 'Leider kann ich am Samstag nicht kommen.'], ['a reason', '… denn ich muss arbeiten.'], ['a suggestion', 'Hast du am Sonntag Zeit?'], ['a plan', 'Dann können wir Kaffee trinken.'], ['goodbye', 'Liebe Grüße, Nicole']],
        rowsFr: [['tu ne peux pas venir', 'Leider kann ich am Samstag nicht kommen.'], ['une raison', '… denn ich muss arbeiten.'], ['une proposition', 'Hast du am Sonntag Zeit?'], ['un projet', 'Dann können wir Kaffee trinken.'], ['au revoir', 'Liebe Grüße, Nicole']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Leider', role: 'connector' }, { text: 'kann', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'am Samstag', role: 'time' }, { text: 'nicht', role: 'connector' }, { text: 'kommen.', role: 'verb' }], en: 'Unfortunately I cannot come on Saturday.', fr: 'Hélas je ne peux pas venir samedi.' },
        { parts: [{ text: 'Dann', role: 'connector' }, { text: 'können', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'Kaffee', role: 'accusative' }, { text: 'trinken.', role: 'verb' }], en: 'Then we can have coffee.', fr: 'Alors nous pourrons prendre un café.' },
      ],
      contrast: {
        a: { label: 'Too short', labelFr: 'Trop court', note: 'not every point answered', noteFr: 'tous les points ne sont pas traités', examples: [g('Ich kann nicht kommen.', 'I cannot come. (no reason, no plan)', 'Je ne peux pas venir. (ni raison, ni projet)'), g('Hallo Mia, nein.', 'Hello Mia, no. (too short)', 'Salut Mia, non. (trop court)')] },
        b: { label: 'Every point answered', labelFr: 'Tous les points traités', note: 'reason and plan', noteFr: 'raison et projet', examples: [g('Leider kann ich nicht kommen, denn ich muss arbeiten.', 'Unfortunately I cannot come because I have to work.', 'Hélas je ne peux pas venir, car je dois travailler.'), g('Hast du am Sonntag Zeit?', 'Do you have time on Sunday?', 'As-tu le temps dimanche ?')] },
      },
      examples: [
        g('Liebe Mia,', 'Dear Mia,', 'Chère Mia,'),
        g('Leider kann ich am Samstag nicht kommen.', 'Unfortunately I cannot come on Saturday.', 'Hélas je ne peux pas venir samedi.'),
        g('Ich muss arbeiten.', 'I have to work.', 'Je dois travailler.'),
        g('Hast du am Sonntag Zeit?', 'Do you have time on Sunday?', 'As-tu le temps dimanche ?'),
        g('Dann können wir Kaffee trinken.', 'Then we can have coffee.', 'Alors nous pourrons prendre un café.'),
        g('Liebe Grüße, Nicole', 'Love, Nicole', 'Amitiés, Nicole'),
      ],
      mistakes: [
        { wrong: 'Leider ich kann nicht kommen.', right: 'Leider kann ich nicht kommen.', why: 'After leider the verb stays second.', whyFr: 'Après leider, le verbe reste en deuxième.' },
        { wrong: 'Ich muss arbeiten, denn ich arbeiten muss.', right: 'Ich muss arbeiten, denn ich habe keine Zeit.', why: 'After denn, a normal main clause: no verb at the end.', whyFr: 'Après denn, une principale normale : pas de verbe à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l26-e8', tokens: ['kann', 'Leider', 'ich', 'nicht', 'kommen'], answer: ['Leider', 'kann', 'ich', 'nicht', 'kommen'], hint: 'Leider first, kann second, infinitive last.', hintFr: 'Leider en premier, kann en deuxième, infinitif en dernier.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l26-e9', prompt: 'Ich kann nicht kommen, ___ ich muss arbeiten. (because)', promptFr: 'Ich kann nicht kommen, ___ ich muss arbeiten. (car)', answer: 'denn', hint: 'denn', hintFr: 'denn' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l26-e10', prompt: 'Which message answers every point?', promptFr: 'Quel message répond à chaque point ?', options: ['Liebe Mia, leider kann ich nicht kommen, denn ich muss arbeiten. Hast du am Sonntag Zeit? Liebe Grüße, Nicole', 'Hallo Mia, nein.', 'Liebe Mia, ich komme nicht. Tschüss.'], answer: 0, explain: 'Only the first gives a reason and a suggestion.', explainFr: 'Seul le premier donne une raison et une proposition.', hint: 'Reason and plan.', hintFr: 'Raison et projet.' } },

    // ───────────── Sprechen ─────────────
    { kind: 'chapter', title: 'Sprechen', titleFr: 'Parler', blurb: 'Introduce yourself, ask questions, make requests.', blurbFr: 'Se présenter, poser des questions, faire des demandes.' },

    { kind: 'situation', title: 'Prüfung: Fragen und Bitten', titleFr: 'Examen : questions et demandes',
      setting: 'The speaking exam has three parts: introduce yourself, ask and answer questions about a word, make a request.', settingFr: 'L’examen oral a trois parties : se présenter, poser et répondre à des questions sur un mot, faire une demande.',
      lines: [
        line('Prüferin', 'Stellen Sie sich bitte vor: Name, Land, Wohnort, Sprachen, Beruf, Hobby.', 'Please introduce yourself: name, country, home town, languages, job, hobby.', 'Présentez-vous : nom, pays, lieu de résidence, langues, métier, loisir.'),
        line('Nicole', 'Ich heiße Nicole Nkemba. Ich komme aus Kamerun und wohne in Berlin. Ich spreche Französisch, Englisch und Deutsch. Ich bin Journalistin.', 'My name is Nicole Nkemba. I come from Cameroon and live in Berlin. I speak French, English and German. I am a journalist.', 'Je m’appelle Nicole Nkemba. Je viens du Cameroun et j’habite à Berlin. Je parle français, anglais et allemand. Je suis journaliste.'),
        line('Prüferin', 'Wort: Geschäft. Stellen Sie eine Frage.', 'Word: shop. Ask a question.', 'Mot : magasin. Posez une question.'),
        line('Nicole', 'Wann öffnet das Geschäft?', 'When does the shop open?', 'Quand le magasin ouvre-t-il ?'),
        line('Prüferin', 'Bitte: Sie möchten das Fenster zumachen. Was sagen Sie?', 'Request: you would like to close the window. What do you say?', 'Demande : vous voudriez fermer la fenêtre. Que dites-vous ?'),
        line('Nicole', 'Können Sie bitte das Fenster zumachen?', 'Can you please close the window?', 'Pouvez-vous fermer la fenêtre, s’il vous plaît ?'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'l26-sprechen', title: 'Speaking strategy: three parts', titleFr: 'Stratégie orale : trois parties',
      lead: 'Part 1: introduce yourself. Part 2: ask a question on a word card. Part 3: make a polite request.',
      leadFr: 'Partie 1 : te présenter. Partie 2 : poser une question sur une carte-mot. Partie 3 : faire une demande polie.',
      explanationMd: '**Part 1:** introduce yourself with the **six key words**: **Name, Land, Wohnort, Sprachen, Beruf, Hobby**. **Part 2:** you get a **word card** (**Geschäft, Essen, Urlaub …**) and ask a **question**: use **W-words** (**Wann? Wo? Wie viel? Was?**) with the verb **second**, or a **yes/no question** with the verb **first**. **Part 3:** you get a **request card** (close the window, lend a pen) and say **Können Sie bitte …?** (infinitive at the end) or **Kannst du bitte …?**',
      explanationMdFr: '**Partie 1 :** présente-toi avec les **six mots clés** : **Name, Land, Wohnort, Sprachen, Beruf, Hobby**. **Partie 2 :** tu reçois une **carte-mot** (**Geschäft, Essen, Urlaub …**) et tu poses une **question** : utilise les **mots en W** (**Wann ? Wo ? Wie viel ? Was ?**) avec le verbe **en deuxième**, ou une **question fermée** avec le verbe **en premier**. **Partie 3 :** tu reçois une **carte de demande** (fermer la fenêtre, prêter un stylo) et tu dis **Können Sie bitte … ?** (infinitif à la fin) ou **Kannst du bitte … ?**',
      tables: [
        { title: 'Part 1: introduce yourself', titleFr: 'Partie 1 : te présenter', headers: ['Key word', 'You say'], headersFr: ['Mot clé', 'Tu dis'],
          rows: [['Name', 'Ich heiße Nicole Nkemba.'], ['Land', 'Ich komme aus Kamerun.'], ['Wohnort', 'Ich wohne in Berlin.'], ['Sprachen', 'Ich spreche Französisch und Deutsch.'], ['Beruf', 'Ich bin Journalistin.'], ['Hobby', 'Ich höre gern Musik.']],
          rowsFr: [['Name', 'Ich heiße Nicole Nkemba.'], ['Land', 'Ich komme aus Kamerun.'], ['Wohnort', 'Ich wohne in Berlin.'], ['Sprachen', 'Ich spreche Französisch und Deutsch.'], ['Beruf', 'Ich bin Journalistin.'], ['Hobby', 'Ich höre gern Musik.']], highlightCol: 1 },
        { title: 'Part 2 and 3', titleFr: 'Parties 2 et 3', headers: ['Card', 'Your question or request'], headersFr: ['Carte', 'Ta question ou demande'],
          rows: [['Geschäft', 'Wann öffnet das Geschäft?'], ['Essen', 'Was essen Sie gern?'], ['Urlaub', 'Wo machen Sie Urlaub?'], ['window', 'Können Sie bitte das Fenster zumachen?'], ['pen', 'Kann ich bitte Ihren Stift haben?']],
          rowsFr: [['Geschäft', 'Wann öffnet das Geschäft ?'], ['Essen', 'Was essen Sie gern ?'], ['Urlaub', 'Wo machen Sie Urlaub ?'], ['fenêtre', 'Können Sie bitte das Fenster zumachen ?'], ['stylo', 'Kann ich bitte Ihren Stift haben ?']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Wann', role: 'other' }, { text: 'öffnet', role: 'verb' }, { text: 'das Geschäft?', role: 'subject' }], en: 'When does the shop open?', fr: 'Quand le magasin ouvre-t-il ?' },
        { parts: [{ text: 'Können', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'bitte', role: 'connector' }, { text: 'das Fenster', role: 'accusative' }, { text: 'zumachen?', role: 'verb' }], en: 'Can you please close the window?', fr: 'Pouvez-vous fermer la fenêtre, s’il vous plaît ?' },
      ],
      contrast: {
        a: { label: 'W-question', labelFr: 'Question en W', note: 'W-word first, verb second', noteFr: 'mot en W d’abord, verbe en deuxième', examples: [g('Wann öffnet das Geschäft?', 'When does the shop open?', 'Quand le magasin ouvre-t-il ?'), g('Wo machen Sie Urlaub?', 'Where do you go on holiday?', 'Où partez-vous en vacances ?')] },
        b: { label: 'Yes/no question', labelFr: 'Question fermée', note: 'verb first', noteFr: 'verbe en premier', examples: [g('Ist das Geschäft groß?', 'Is the shop big?', 'Le magasin est-il grand ?'), g('Essen Sie gern Fisch?', 'Do you like eating fish?', 'Aimez-vous manger du poisson ?')] },
      },
      examples: [
        g('Ich heiße Nicole Nkemba und komme aus Kamerun.', 'I am called Nicole Nkemba and come from Cameroon.', 'Je m’appelle Nicole Nkemba et je viens du Cameroun.'),
        g('Ich wohne in Berlin und spreche Deutsch.', 'I live in Berlin and speak German.', 'J’habite à Berlin et je parle allemand.'),
        g('Wann öffnet das Geschäft?', 'When does the shop open?', 'Quand le magasin ouvre-t-il ?'),
        g('Was essen Sie gern?', 'What do you like eating?', 'Qu’aimez-vous manger ?'),
        g('Können Sie bitte das Fenster zumachen?', 'Can you please close the window?', 'Pouvez-vous fermer la fenêtre, s’il vous plaît ?'),
        g('Kann ich bitte Ihren Stift haben?', 'May I have your pen, please?', 'Puis-je avoir votre stylo, s’il vous plaît ?'),
      ],
      mistakes: [
        { wrong: 'Wann das Geschäft öffnet?', right: 'Wann öffnet das Geschäft?', why: 'After the W-word comes the verb.', whyFr: 'Après le mot en W vient le verbe.' },
        { wrong: 'Können Sie das Fenster zumachen bitte?', right: 'Können Sie bitte das Fenster zumachen?', why: 'bitte goes before the object; the infinitive is last.', whyFr: 'bitte se place avant l’objet ; l’infinitif est en dernier.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l26-e11', tokens: ['öffnet', 'Wann', 'das Geschäft'], answer: ['Wann', 'öffnet', 'das Geschäft'], hint: 'W-word, verb, subject.', hintFr: 'Mot en W, verbe, sujet.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l26-e12', tokens: ['Sie', 'bitte', 'Können', 'das Fenster', 'zumachen'], answer: ['Können', 'Sie', 'bitte', 'das Fenster', 'zumachen'], hint: 'Modal first, infinitive last.', hintFr: 'Modal en premier, infinitif en dernier.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l26-e13', prompt: 'The card says “Essen”. Which question fits?', promptFr: 'La carte dit « Essen ». Quelle question convient ?', options: ['Was essen Sie gern?', 'Essen Sie Geschäft?', 'Wann Essen?'], answer: 0, explain: 'A W-question with the verb second.', explainFr: 'Une question en W avec le verbe en deuxième.', hint: 'W-word + verb.', hintFr: 'Mot en W + verbe.' } },

    { kind: 'wrapup',
      summary: 'You have practised the four exam skills at A1: **Hören** (key information), **Lesen** (richtig or falsch), **Schreiben** (answer every point) and **Sprechen** (introduce, ask, request). Well done: you are ready for the next level. 🎉',
      summaryFr: 'Tu as pratiqué les quatre compétences de l’examen en A1 : **Hören** (informations clés), **Lesen** (richtig ou falsch), **Schreiben** (réponds à chaque point) et **Sprechen** (te présenter, demander, requérir). Bravo : tu es prêt pour le niveau suivant. 🎉',
      card: { title: 'The A1 exam on one page', titleFr: 'L’examen A1 en une page', sections: [
        { heading: 'Hören and Lesen', headingFr: 'Hören et Lesen', rows: [g('Read the questions first.', 'then listen for numbers, times, places', 'puis écoute nombres, heures, lieux'), g('nicht · aber · nur · leider', 'small words decide', 'les petits mots décident')] },
        { heading: 'Schreiben', headingFr: 'Schreiben', rows: [g('Greeting, one sentence per point, goodbye, name', '20–30 words', '20–30 mots'), g('Leider kann ich nicht kommen, denn …', 'reason with denn', 'raison avec denn')] },
        { heading: 'Sprechen', headingFr: 'Sprechen', rows: [g('Name · Land · Wohnort · Sprachen · Beruf · Hobby', 'part 1', 'partie 1'), g('Wann öffnet das Geschäft?', 'part 2: a question', 'partie 2 : une question'), g('Können Sie bitte das Fenster zumachen?', 'part 3: a request', 'partie 3 : une demande')] },
      ] } },
  ],
};
