import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A1 lesson: short messages and forms. The official A1 writing tasks are filling in a form and writing a short message (20 to 30 words).
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const lektion24: Lesson = {
  id: 'l24', level: 'A1', module: 6, number: 25,
  title: { de: 'Kurze Nachrichten und Formulare', en: 'Short messages and forms', fr: 'Messages courts et formulaires' },
  theme: 'Filling in a form, writing a message and a short e-mail',
  themeFr: 'Remplir un formulaire, écrire un message et un court e-mail',
  goals: ['Fill in a form with name, date of birth, address', 'Write a short message to a friend', 'Write a polite e-mail to make an appointment'],
  goalsFr: ['Remplir un formulaire avec nom, date de naissance, adresse', 'Écrire un court message à un ami', 'Écrire un e-mail poli pour prendre rendez-vous'],
  canDo: g('Ich kann ein Formular ausfüllen und eine kurze Nachricht oder E-Mail schreiben.', 'I can fill in a form and write a short message or e-mail.', 'Je sais remplir un formulaire et écrire un court message ou e-mail.'),
  steps: [
    { kind: 'intro', title: 'Schreiben auf A1 ✍️', titleFr: 'Écrire en A1 ✍️',
      scene: 'Nicole registers for a course and writes messages.', sceneFr: 'Nicole s’inscrit à un cours et écrit des messages.',
      goals: ['A form: Name, Vorname, Geburtsdatum, Adresse', 'A message to a friend: 20 to 30 words', 'An e-mail: Sehr geehrte …, Mit freundlichen Grüßen'],
      goalsFr: ['Un formulaire : Name, Vorname, Geburtsdatum, Adresse', 'Un message à un ami : 20 à 30 mots', 'Un e-mail : Sehr geehrte …, Mit freundlichen Grüßen'] },

    // ───────────── 1 · The form ─────────────
    { kind: 'chapter', title: 'Das Formular', titleFr: 'Le formulaire', blurb: 'Name, date of birth, address.', blurbFr: 'Nom, date de naissance, adresse.' },

    { kind: 'situation', title: 'Am Empfang', titleFr: 'À l’accueil',
      setting: 'Nicole registers for a course. The clerk helps her fill in the form.', settingFr: 'Nicole s’inscrit à un cours. L’employé l’aide à remplir le formulaire.',
      lines: [
        line('Mitarbeiter', 'Bitte füllen Sie das Formular aus. Wie ist Ihr Nachname?', 'Please fill in the form. What is your surname?', 'Veuillez remplir le formulaire. Quel est votre nom de famille ?'),
        line('Nicole', 'Nkemba.', 'Nkemba.', 'Nkemba.'),
        line('Mitarbeiter', 'Und Ihr Vorname und Ihr Geburtsdatum?', 'And your first name and your date of birth?', 'Et votre prénom et votre date de naissance ?'),
        line('Nicole', 'Nicole. Ich bin am dritten Mai geboren: der 3. Mai 1999.', 'Nicole. I was born on the third of May: 3 May 1999.', 'Nicole. Je suis née le trois mai : le 3 mai 1999.'),
        line('Mitarbeiter', 'Staatsangehörigkeit?', 'Nationality?', 'Nationalité ?'),
        line('Nicole', 'Kamerunisch. Meine Adresse ist Goethestraße 7, 10115 Berlin.', 'Cameroonian. My address is Goethestraße 7, 10115 Berlin.', 'Camerounaise. Mon adresse est Goethestraße 7, 10115 Berlin.'),
        line('Mitarbeiter', 'Danke. Bitte unterschreiben Sie hier.', 'Thank you. Please sign here.', 'Merci. Veuillez signer ici.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l24-e11', prompt: 'What is Nicole’s date of birth?', promptFr: 'Quelle est la date de naissance de Nicole ?', options: ['3 May 1999', '5 March 1999', '3 May 1990'], answer: 0, explain: 'She says: “der 3. Mai 1999”.', explainFr: 'Elle dit : « der 3. Mai 1999 ».', hint: 'Day first, then month.', hintFr: 'Le jour d’abord, puis le mois.' } },

    { kind: 'wordgroup', title: 'Auf dem Formular', titleFr: 'Sur le formulaire',
      items: [
        word('l24-formular', 'das Formular', 'das', 'the form', 'le formulaire', ['for', 'mu', 'LAR'], 'dahs for-moo-LAHR', g('Bitte füllen Sie das Formular aus.', 'Please fill in the form.', 'Veuillez remplir le formulaire.')),
        word('l24-adresse', 'die Adresse', 'die', 'the address', 'l’adresse', ['a', 'DRES', 'se'], 'dee ah-DRES-uh', g('Meine Adresse ist Goethestraße 7.', 'My address is Goethestraße 7.', 'Mon adresse est Goethestraße 7.')),
        word('l24-geburtsdatum', 'das Geburtsdatum', 'das', 'the date of birth', 'la date de naissance', ['ge', 'BURTS', 'da', 'tum'], 'dahs guh-BOORTS-dah-toom', g('Mein Geburtsdatum ist der 3. Mai 1999.', 'My date of birth is 3 May 1999.', 'Ma date de naissance est le 3 mai 1999.')),
        word('l24-staatsangehoerigkeit', 'die Staatsangehörigkeit', 'die', 'the nationality', 'la nationalité', ['STAATS', 'an', 'ge', 'HÖ', 'rig', 'keit'], 'dee SHTAHTS-ahn-guh-her-rikh-kite', g('Meine Staatsangehörigkeit ist kamerunisch.', 'My nationality is Cameroonian.', 'Ma nationalité est camerounaise.')),
        word('l24-unterschrift', 'die Unterschrift', 'die', 'the signature', 'la signature', ['UN', 'ter', 'schrift'], 'dee OON-ter-shrift', g('Hier ist Platz für die Unterschrift.', 'Here is room for the signature.', 'Voici la place pour la signature.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l24-formular', title: 'A form: the fields and the order', titleFr: 'Un formulaire : les champs et l’ordre',
      lead: 'Dates go day.month.year. An address goes street, number, postcode, town.',
      leadFr: 'Les dates se notent jour.mois.année. Une adresse se note rue, numéro, code postal, ville.',
      explanationMd: 'A German form asks for the same few things. The **date** is written **day.month.year**: **03.05.1999**. An **address** goes **street and house number first**, then the **postcode** and the **town**: **Goethestraße 7, 10115 Berlin**. **Name** is the **surname**, **Vorname** the **first name**. Phone numbers and e-mail addresses you know from lesson 4.',
      explanationMdFr: 'Un formulaire allemand demande toujours les mêmes choses. La **date** s’écrit **jour.mois.année** : **03.05.1999**. Une **adresse** s’écrit **rue et numéro d’abord**, puis le **code postal** et la **ville** : **Goethestraße 7, 10115 Berlin**. **Name** est le **nom de famille**, **Vorname** le **prénom**. Les numéros de téléphone et les adresses e-mail, tu les connais depuis la leçon 4.',
      tables: [{ title: 'Fields on a form', titleFr: 'Champs d’un formulaire', headers: ['Field', 'Meaning', 'Example'], headersFr: ['Champ', 'Sens', 'Exemple'],
        rows: [['Name', 'surname', 'Nkemba'], ['Vorname', 'first name', 'Nicole'], ['Geburtsdatum', 'date of birth', '03.05.1999'], ['Geburtsort', 'place of birth', 'Yaoundé'], ['Staatsangehörigkeit', 'nationality', 'kamerunisch'], ['Adresse', 'address', 'Goethestraße 7, 10115 Berlin'], ['Telefon / E-Mail', 'contact', '0176 1234567'], ['Unterschrift', 'signature', '(you sign)']],
        rowsFr: [['Name', 'nom de famille', 'Nkemba'], ['Vorname', 'prénom', 'Nicole'], ['Geburtsdatum', 'date de naissance', '03.05.1999'], ['Geburtsort', 'lieu de naissance', 'Yaoundé'], ['Staatsangehörigkeit', 'nationalité', 'kamerunisch'], ['Adresse', 'adresse', 'Goethestraße 7, 10115 Berlin'], ['Telefon / E-Mail', 'contact', '0176 1234567'], ['Unterschrift', 'signature', '(tu signes)']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Meine Adresse', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'Goethestraße 7,', role: 'place' }, { text: '10115 Berlin.', role: 'place' }], en: 'My address is Goethestraße 7, 10115 Berlin.', fr: 'Mon adresse est Goethestraße 7, 10115 Berlin.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'am 3. Mai 1999', role: 'time' }, { text: 'geboren.', role: 'verb' }], en: 'I was born on 3 May 1999.', fr: 'Je suis née le 3 mai 1999.' },
      ],
      contrast: {
        a: { label: 'German order', labelFr: 'Ordre allemand', note: 'day.month.year; street number, postcode town', noteFr: 'jour.mois.année ; rue numéro, code postal ville', examples: [g('03.05.1999', 'the third of May 1999', 'le trois mai 1999'), g('Goethestraße 7, 10115 Berlin', 'street, number, postcode, town', 'rue, numéro, code postal, ville')] },
        b: { label: 'English order', labelFr: 'Ordre anglais', note: 'month/day/year; number street, town postcode', noteFr: 'mois/jour/année ; numéro rue, ville code postal', examples: [g('Das Datum 05.03.1999 ist der fünfte März.', 'The date 05.03.1999 is the 5th of March.', 'La date 05.03.1999 est le cinq mars.'), g('Die Postleitzahl steht vor der Stadt.', 'The postcode comes before the town.', 'Le code postal vient avant la ville.')] },
      },
      examples: [
        g('Wie ist Ihr Nachname?', 'What is your surname?', 'Quel est votre nom de famille ?'),
        g('Mein Geburtsdatum ist der 3. Mai 1999.', 'My date of birth is 3 May 1999.', 'Ma date de naissance est le 3 mai 1999.'),
        g('Ich bin in Yaoundé geboren.', 'I was born in Yaoundé.', 'Je suis née à Yaoundé.'),
        g('Meine Staatsangehörigkeit ist kamerunisch.', 'My nationality is Cameroonian.', 'Ma nationalité est camerounaise.'),
        g('Meine Adresse ist Goethestraße 7, 10115 Berlin.', 'My address is Goethestraße 7, 10115 Berlin.', 'Mon adresse est Goethestraße 7, 10115 Berlin.'),
        g('Bitte unterschreiben Sie hier.', 'Please sign here.', 'Veuillez signer ici.'),
      ],
      mistakes: [
        { wrong: 'Berlin 10115, 7 Goethestraße', right: 'Goethestraße 7, 10115 Berlin', why: 'Street and number first, then postcode and town.', whyFr: 'Rue et numéro d’abord, puis code postal et ville.' },
        { wrong: 'Mein Geburtsdatum ist der 05.03.1999. (meaning 3 May)', right: 'Mein Geburtsdatum ist der 03.05.1999.', why: 'Day first, then month: 03.05 is the third of May.', whyFr: 'Le jour d’abord, puis le mois : 03.05 est le trois mai.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l24-e1', prompt: 'What is the correct order of an address?', promptFr: 'Quel est l’ordre correct d’une adresse ?', options: ['Goethestraße 7, 10115 Berlin', '10115 Berlin, Goethestraße 7', '7 Goethestraße, Berlin 10115'], answer: 0, explain: 'Street and number, then postcode and town.', explainFr: 'Rue et numéro, puis code postal et ville.', hint: 'Street first.', hintFr: 'La rue d’abord.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l24-e2', prompt: 'Bitte ___ Sie hier. (sign — unterschreiben)', promptFr: 'Bitte ___ Sie hier. (signer — unterschreiben)', answer: 'unterschreiben', hint: 'a polite command: infinitive then Sie', hintFr: 'un ordre poli : infinitif puis Sie' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l24-e3', pairs: [{ de: 'Vorname', en: 'first name', fr: 'prénom' }, { de: 'Geburtsdatum', en: 'date of birth', fr: 'date de naissance' }, { de: 'Staatsangehörigkeit', en: 'nationality', fr: 'nationalité' }, { de: 'Unterschrift', en: 'signature', fr: 'signature' }], hint: 'Match each form field to its meaning.', hintFr: 'Associe chaque champ à son sens.' } },

    // ───────────── 2 · A message to a friend ─────────────
    { kind: 'chapter', title: 'Eine Nachricht an einen Freund', titleFr: 'Un message à un ami', blurb: 'Twenty to thirty words, clear and friendly.', blurbFr: 'Vingt à trente mots, clairs et amicaux.' },

    { kind: 'situation', title: 'Eine Nachricht', titleFr: 'Un message',
      setting: 'Nicole texts Ben because her bus is late.', settingFr: 'Nicole écrit à Ben parce que son bus est en retard.',
      lines: [
        line('Nicole', 'Hallo Ben, ich komme heute etwas später. Der Bus hat Verspätung. Beginnt der Kurs um neun Uhr? Bis gleich, Nicole', 'Hello Ben, I’m coming a little later today. The bus is late. Does the course start at nine? See you soon, Nicole', 'Salut Ben, j’arrive un peu plus tard aujourd’hui. Le bus est en retard. Le cours commence-t-il à neuf heures ? À tout de suite, Nicole'),
        line('Ben', 'Hallo Nicole, ja, der Kurs beginnt um neun. Kein Problem, ich warte auf dich. Bis gleich! Ben', 'Hello Nicole, yes, the course starts at nine. No problem, I’ll wait for you. See you soon! Ben', 'Salut Nicole, oui, le cours commence à neuf heures. Pas de problème, je t’attends. À tout de suite ! Ben'),
        line('Nicole', 'Danke! Ich bin in zehn Minuten da.', 'Thanks! I will be there in ten minutes.', 'Merci ! J’arrive dans dix minutes.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l24-e12', prompt: 'Why is Nicole late?', promptFr: 'Pourquoi Nicole est-elle en retard ?', options: ['The bus is late', 'She is ill', 'She has no time'], optionsFr: ['Le bus est en retard', 'Elle est malade', 'Elle n’a pas le temps'], answer: 0, explain: 'She writes: “Der Bus hat Verspätung.”', explainFr: 'Elle écrit : « Der Bus hat Verspätung. »', hint: 'Look at the first message.', hintFr: 'Regarde le premier message.' } },

    { kind: 'wordgroup', title: 'Nachrichten-Wörter', titleFr: 'Mots pour les messages',
      items: [
        word('l24-postkarte', 'die Postkarte', 'die', 'the postcard', 'la carte postale', ['POST', 'kar', 'te'], 'dee POST-kar-tuh', g('Ich schreibe eine Postkarte.', 'I am writing a postcard.', 'J’écris une carte postale.')),
        word('l24-verspaetung', 'die Verspätung', 'die', 'the delay', 'le retard', ['ver', 'SPÄ', 'tung'], 'dee fair-SHPAY-toong', g('Der Zug hat Verspätung.', 'The train is late.', 'Le train a du retard.')),
        word('l24-bisgleich', 'Bis gleich!', null, 'See you in a moment!', 'À tout de suite !', ['BIS', 'GLEICH'], 'bis GLYKH', g('Bis gleich, ich komme sofort!', 'See you in a moment, I’m coming right away!', 'À tout de suite, j’arrive !')),
        word('l24-vielegruesse', 'Viele Grüße', null, 'Best wishes (closing)', 'Cordialement (formule finale)', ['VIE', 'le', 'GRÜ', 'ße'], 'FEE-luh GRUE-suh', g('Viele Grüße, Nicole', 'Best wishes, Nicole', 'Cordialement, Nicole')),
        word('l24-liebegruesse', 'Liebe Grüße', null, 'Love (closing, friends)', 'Amitiés (formule finale, amis)', ['LIE', 'be', 'GRÜ', 'ße'], 'LEE-buh GRUE-suh', g('Liebe Grüße an deine Familie!', 'Love to your family!', 'Amitiés à ta famille !')),
      ] },

    { kind: 'grammar', note: {
      id: 'l24-nachricht', title: 'A short message: the four parts', titleFr: 'Un court message : les quatre parties',
      lead: 'Greeting, two or three clear sentences, goodbye, name. For the exam, write 20 to 30 words and answer every point.',
      leadFr: 'Salutation, deux ou trois phrases claires, au revoir, prénom. À l’examen, écris 20 à 30 mots et réponds à chaque point.',
      explanationMd: 'A short message has **four parts**: the **greeting** (**Hallo Ben,**), **two or three short sentences** with what you want to say, the **goodbye** (**Bis gleich!** or **Liebe Grüße**), and your **name**. Keep sentences short, use **denn** or **und** to join them, and answer **every point** you were asked. After the greeting the next word starts with a **small letter** unless it is a noun.',
      explanationMdFr: 'Un court message a **quatre parties** : la **salutation** (**Hallo Ben,**), **deux ou trois phrases courtes** avec ce que tu veux dire, l’**au revoir** (**Bis gleich !** ou **Liebe Grüße**), et ton **prénom**. Garde des phrases courtes, utilise **denn** ou **und** pour les relier, et réponds à **chaque point** demandé. Après la salutation, le mot suivant prend une **minuscule** sauf si c’est un nom.',
      tables: [{ title: 'The four parts', titleFr: 'Les quatre parties', headers: ['Part', 'Informal', 'Formal'], headersFr: ['Partie', 'Familier', 'Formel'],
        rows: [['greeting', 'Hallo Ben, / Liebe Anna,', 'Sehr geehrte Frau Roth,'], ['content', 'Ich komme später, denn der Bus hat Verspätung.', 'Ich möchte einen Termin vereinbaren.'], ['goodbye', 'Bis gleich! / Liebe Grüße', 'Mit freundlichen Grüßen'], ['name', 'Nicole', 'Nicole Nkemba']],
        rowsFr: [['salutation', 'Hallo Ben, / Liebe Anna,', 'Sehr geehrte Frau Roth,'], ['contenu', 'Ich komme später, denn der Bus hat Verspätung.', 'Ich möchte einen Termin vereinbaren.'], ['au revoir', 'Bis gleich ! / Liebe Grüße', 'Mit freundlichen Grüßen'], ['prénom', 'Nicole', 'Nicole Nkemba']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Bus', role: 'subject' }, { text: 'hat', role: 'verb' }, { text: 'Verspätung.', role: 'accusative' }], en: 'The bus is late.', fr: 'Le bus a du retard.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'komme', role: 'verb' }, { text: 'heute', role: 'time' }, { text: 'etwas später.', role: 'time' }], en: 'I am coming a little later today.', fr: 'J’arrive un peu plus tard aujourd’hui.' },
      ],
      contrast: {
        a: { label: 'To a friend', labelFr: 'À un ami', note: 'Hallo … / Bis gleich / Liebe Grüße', noteFr: 'Hallo … / Bis gleich / Liebe Grüße', examples: [g('Hallo Ben, ich komme etwas später.', 'Hello Ben, I’m coming a little later.', 'Salut Ben, j’arrive un peu plus tard.'), g('Bis gleich! Liebe Grüße, Nicole', 'See you soon! Love, Nicole', 'À tout de suite ! Amitiés, Nicole')] },
        b: { label: 'To someone you call Sie', labelFr: 'À quelqu’un que tu vouvoies', note: 'Sehr geehrte … / Mit freundlichen Grüßen', noteFr: 'Sehr geehrte … / Mit freundlichen Grüßen', examples: [g('Sehr geehrte Frau Roth, ich komme später.', 'Dear Mrs Roth, I will be late.', 'Madame Roth, j’arriverai en retard.'), g('Mit freundlichen Grüßen, Nicole Nkemba', 'Yours sincerely, Nicole Nkemba', 'Cordialement, Nicole Nkemba')] },
      },
      examples: [
        g('Hallo Ben, ich komme heute etwas später.', 'Hello Ben, I’m coming a little later today.', 'Salut Ben, j’arrive un peu plus tard aujourd’hui.'),
        g('Der Bus hat Verspätung.', 'The bus is late.', 'Le bus a du retard.'),
        g('Beginnt der Kurs um neun Uhr?', 'Does the course start at nine?', 'Le cours commence-t-il à neuf heures ?'),
        g('Bis gleich, Nicole', 'See you soon, Nicole', 'À tout de suite, Nicole'),
        g('Ich schreibe dir eine Postkarte aus Hamburg.', 'I’m writing you a postcard from Hamburg.', 'Je t’écris une carte postale de Hambourg.'),
        g('Viele Grüße aus Berlin!', 'Best wishes from Berlin!', 'Cordialement de Berlin !'),
      ],
      mistakes: [
        { wrong: 'Sehr geehrte Frau Roth, bis gleich!', right: 'Sehr geehrte Frau Roth, mit freundlichen Grüßen', why: 'Match the closing to the greeting: formal with formal.', whyFr: 'Accorde la formule finale à la salutation : formel avec formel.' },
        { wrong: 'Hallo Ben, Ich komme später.', right: 'Hallo Ben, ich komme später.', why: 'After the greeting comma the sentence starts with a small letter.', whyFr: 'Après la virgule de la salutation, la phrase commence par une minuscule.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l24-e4', prompt: 'You write to your friend Anna. Which greeting is best?', promptFr: 'Tu écris à ton amie Anna. Quelle salutation est la meilleure ?', options: ['Liebe Anna,', 'Sehr geehrte Frau Anna,', 'Guten Tag, Anna Meier,'], answer: 0, explain: 'For a friend: “Liebe Anna,”.', explainFr: 'Pour une amie : « Liebe Anna, ».', hint: 'A friend, informal.', hintFr: 'Une amie, familier.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l24-e5', tokens: ['Verspätung', 'hat', 'Der Bus'], answer: ['Der Bus', 'hat', 'Verspätung'], hint: 'Subject, verb, object.', hintFr: 'Sujet, verbe, objet.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l24-e6', prompt: 'Ich komme später, ___ der Bus hat Verspätung. (because)', promptFr: 'Ich komme später, ___ der Bus hat Verspätung. (car)', answer: 'denn', hint: 'denn does not change the word order', hintFr: 'denn ne change pas l’ordre des mots' } },

    // ───────────── 3 · An e-mail ─────────────
    { kind: 'chapter', title: 'Eine E-Mail schreiben', titleFr: 'Écrire un e-mail', blurb: 'Make an appointment politely.', blurbFr: 'Prendre rendez-vous poliment.' },

    { kind: 'situation', title: 'Eine E-Mail an die Ärztin', titleFr: 'Un e-mail à la médecin',
      setting: 'Nicole writes to a doctor to ask for an appointment.', settingFr: 'Nicole écrit à une médecin pour demander un rendez-vous.',
      lines: [
        line('Nicole', 'Sehr geehrte Frau Doktor Weber, ich möchte einen Termin vereinbaren. Ich habe Kopfschmerzen.', 'Dear Dr Weber, I would like to make an appointment. I have a headache.', 'Madame le docteur Weber, je voudrais prendre rendez-vous. J’ai mal à la tête.'),
        line('Praxis', 'Gern. Wann haben Sie Zeit?', 'Gladly. When do you have time?', 'Volontiers. Quand avez-vous le temps ?'),
        line('Nicole', 'Hätten Sie am Dienstag um zehn Uhr einen Termin? Mit freundlichen Grüßen, Nicole Nkemba', 'Would you have an appointment on Tuesday at ten? Yours sincerely, Nicole Nkemba', 'Auriez-vous un rendez-vous mardi à dix heures ? Cordialement, Nicole Nkemba'),
        line('Praxis', 'Ja, Dienstag um zehn Uhr passt. Bis dann!', 'Yes, Tuesday at ten suits us. See you then!', 'Oui, mardi à dix heures convient. À mardi !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l24-e13', prompt: 'When is the appointment?', promptFr: 'Quand est le rendez-vous ?', options: ['Tuesday at ten', 'Monday at nine', 'Friday at two'], optionsFr: ['Mardi à dix heures', 'Lundi à neuf heures', 'Vendredi à quatorze heures'], answer: 0, explain: 'The practice says: “Dienstag um zehn Uhr passt.”', explainFr: 'Le cabinet dit : « Dienstag um zehn Uhr passt. »', hint: 'Look at the last line.', hintFr: 'Regarde la dernière réplique.' } },

    { kind: 'grammar', note: {
      id: 'l24-email', title: 'A polite e-mail: Ich möchte … and Hätten Sie …?', titleFr: 'Un e-mail poli : Ich möchte … et Hätten Sie … ?',
      lead: 'Use Ich möchte … and the chunks Hätten Sie …? / Könnten Sie …? for polite requests. Close with Mit freundlichen Grüßen.',
      leadFr: 'Utilise Ich möchte … et les blocs Hätten Sie … ? / Könnten Sie … ? pour des demandes polies. Termine avec Mit freundlichen Grüßen.',
      explanationMd: 'In a formal e-mail start with **Sehr geehrte Frau … / Sehr geehrter Herr …,** and end with **Mit freundlichen Grüßen**. Ask politely with **Ich möchte …** and with two **ready-made chunks** (taught as phrases at A1): **Hätten Sie …?** (“would you have …?”) and **Könnten Sie …?** (“could you …?”). **Don’t** say **Ich will …** (too direct) and **don’t** use **du**.',
      explanationMdFr: 'Dans un e-mail formel, commence par **Sehr geehrte Frau … / Sehr geehrter Herr …,** et termine par **Mit freundlichen Grüßen**. Demande poliment avec **Ich möchte …** et avec deux **blocs tout faits** (appris comme expressions en A1) : **Hätten Sie … ?** (« auriez-vous … ? ») et **Könnten Sie … ?** (« pourriez-vous … ? »). **Ne dis pas** **Ich will …** (trop direct) et **n’utilise pas** **du**.',
      tables: [{ title: 'Polite chunks', titleFr: 'Blocs polis', headers: ['You want to …', 'Write'], headersFr: ['Tu veux …', 'Écris'],
        rows: [['ask for an appointment', 'Ich möchte einen Termin vereinbaren.'], ['propose a time', 'Hätten Sie am Dienstag um zehn Uhr einen Termin?'], ['ask for help', 'Könnten Sie mir bitte antworten?'], ['say thank you', 'Vielen Dank für Ihre Hilfe.'], ['close', 'Mit freundlichen Grüßen']],
        rowsFr: [['demander un rendez-vous', 'Ich möchte einen Termin vereinbaren.'], ['proposer une heure', 'Hätten Sie am Dienstag um zehn Uhr einen Termin?'], ['demander de l’aide', 'Könnten Sie mir bitte antworten?'], ['remercier', 'Vielen Dank für Ihre Hilfe.'], ['terminer', 'Mit freundlichen Grüßen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'möchte', role: 'verb' }, { text: 'einen Termin', role: 'accusative' }, { text: 'vereinbaren.', role: 'verb' }], en: 'I would like to make an appointment.', fr: 'Je voudrais prendre rendez-vous.' },
        { parts: [{ text: 'Hätten', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'am Dienstag', role: 'time' }, { text: 'einen Termin?', role: 'accusative' }], en: 'Would you have an appointment on Tuesday?', fr: 'Auriez-vous un rendez-vous mardi ?' },
      ],
      contrast: {
        a: { label: 'Ich möchte …', labelFr: 'Ich möchte …', note: 'polite wish', noteFr: 'souhait poli', examples: [g('Ich möchte einen Termin vereinbaren.', 'I would like to make an appointment.', 'Je voudrais prendre rendez-vous.'), g('Ich möchte bitte einen Kaffee.', 'I would like a coffee, please.', 'Je voudrais un café, s’il vous plaît.')] },
        b: { label: 'Ich will …', labelFr: 'Ich will …', note: 'too direct in a formal message', noteFr: 'trop direct dans un message formel', examples: [g('Ich will einen Termin.', 'I want an appointment. (too blunt)', 'Je veux un rendez-vous. (trop direct)'), g('Ich will Kaffee.', 'I want coffee. (too blunt)', 'Je veux du café. (trop direct)')] },
      },
      examples: [
        g('Sehr geehrte Frau Doktor Weber,', 'Dear Dr Weber,', 'Madame le docteur Weber,'),
        g('Ich möchte einen Termin vereinbaren.', 'I would like to make an appointment.', 'Je voudrais prendre rendez-vous.'),
        g('Hätten Sie am Dienstag um zehn Uhr einen Termin?', 'Would you have an appointment on Tuesday at ten?', 'Auriez-vous un rendez-vous mardi à dix heures ?'),
        g('Könnten Sie mir bitte antworten?', 'Could you please reply to me?', 'Pourriez-vous me répondre, s’il vous plaît ?'),
        g('Vielen Dank für Ihre Hilfe.', 'Thank you very much for your help.', 'Merci beaucoup pour votre aide.'),
        g('Mit freundlichen Grüßen, Nicole Nkemba', 'Yours sincerely, Nicole Nkemba', 'Cordialement, Nicole Nkemba'),
      ],
      mistakes: [
        { wrong: 'Ich will einen Termin.', right: 'Ich möchte einen Termin vereinbaren.', why: 'In a formal message use möchte, not will.', whyFr: 'Dans un message formel, utilise möchte, pas will.' },
        { wrong: 'Hallo Frau Doktor, ich möchte einen Termin. Tschüss!', right: 'Sehr geehrte Frau Doktor Weber, ich möchte einen Termin vereinbaren. Mit freundlichen Grüßen', why: 'Formal greeting and formal goodbye.', whyFr: 'Salutation formelle et au revoir formel.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l24-e7', prompt: 'Which closing fits a formal e-mail?', promptFr: 'Quelle formule finale convient à un e-mail formel ?', options: ['Mit freundlichen Grüßen', 'Tschüss!', 'Bis gleich!'], answer: 0, explain: 'Formal: “Mit freundlichen Grüßen”.', explainFr: 'Formel : « Mit freundlichen Grüßen ».', hint: 'It starts with “Mit”.', hintFr: 'Elle commence par « Mit ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l24-e8', tokens: ['möchte', 'Ich', 'vereinbaren', 'einen Termin'], answer: ['Ich', 'möchte', 'einen Termin', 'vereinbaren'], hint: 'möchte second, infinitive last.', hintFr: 'möchte en deuxième, infinitif en dernier.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l24-e9', prompt: '___ Sie am Dienstag einen Termin? (hätten)', promptFr: '___ Sie am Dienstag einen Termin ? (hätten)', answer: 'Hätten', hint: 'a polite question, verb first', hintFr: 'une question polie, verbe en premier' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l24-e10', prompt: 'Listen. What does the speaker want?', promptFr: 'Écoute. Que veut la personne ?', audio: { ttsText: 'Sehr geehrte Frau Weber, ich möchte einen Termin vereinbaren. Mit freundlichen Grüßen.' }, options: ['An appointment', 'A parcel', 'A coffee'], optionsFr: ['Un rendez-vous', 'Un colis', 'Un café'], answer: 0, hint: 'Termin', hintFr: 'Termin' } },

    { kind: 'wrapup',
      summary: 'You can now fill in a **form**, write a **short message** (greeting, 2–3 sentences, goodbye, name) and a **polite e-mail** with **Ich möchte … / Hätten Sie …?**. 🎉',
      summaryFr: 'Tu sais maintenant remplir un **formulaire**, écrire un **court message** (salutation, 2–3 phrases, au revoir, prénom) et un **e-mail poli** avec **Ich möchte … / Hätten Sie … ?**. 🎉',
      card: { title: 'Writing on one page', titleFr: 'L’écriture en une page', sections: [
        { heading: 'Form', headingFr: 'Formulaire', rows: [g('Name · Vorname · Geburtsdatum · Adresse · Unterschrift', 'the fields', 'les champs'), g('03.05.1999 · Goethestraße 7, 10115 Berlin', 'date and address order', 'ordre date et adresse')] },
        { heading: 'Message', headingFr: 'Message', rows: [g('Hallo Ben, … Bis gleich! Nicole', 'friend: greeting, content, goodbye, name', 'ami : salutation, contenu, au revoir, prénom'), g('Liebe Grüße · Viele Grüße', 'closings', 'formules finales')] },
        { heading: 'Formal e-mail', headingFr: 'E-mail formel', rows: [g('Sehr geehrte Frau …, … Mit freundlichen Grüßen', 'formal frame', 'cadre formel'), g('Ich möchte … · Hätten Sie …? · Könnten Sie …?', 'polite chunks', 'blocs polis')] },
      ] } },
  ],
};
