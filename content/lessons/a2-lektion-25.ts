import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A2 lesson (Goethe A2 "Arbeit und Beruf"): applying for a job, workplace rules, purpose with um … zu.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const a2lektion25: Lesson = {
  id: 'a2-l25', level: 'A2', module: 7, number: 25,
  title: { de: 'Im Beruf: Bewerbung und Regeln', en: 'At work: applying and workplace rules', fr: 'Au travail : candidature et règles' },
  theme: 'Job applications, workplace rules and saying why you do something with um … zu',
  themeFr: 'Candidatures, règles au travail et dire pourquoi on fait quelque chose avec um … zu',
  goals: ['Apply for a job and talk about your experience', 'Say what you may, must and need not do at work', 'Give a purpose with um … zu'],
  goalsFr: ['Postuler à un emploi et parler de ton expérience', 'Dire ce que tu peux, dois ou n’as pas besoin de faire au travail', 'Donner un but avec um … zu'],
  canDo: g('Ich kann mich bewerben, über Arbeitsregeln sprechen und mit „um … zu“ einen Zweck nennen.', 'I can apply for a job, talk about workplace rules and name a purpose with “um … zu”.', 'Je sais postuler, parler des règles au travail et indiquer un but avec « um … zu ».'),
  steps: [
    { kind: 'intro', title: 'Im Beruf 💼', titleFr: 'Au travail 💼',
      scene: 'Lara applies for a job in a café, and her first week at work brings new rules.', sceneFr: 'Lara postule dans un café, et sa première semaine de travail apporte de nouvelles règles.',
      goals: ['Apply and talk about experience', 'man darf / man muss / man muss nicht', 'um … zu for purpose'],
      goalsFr: ['Postuler et parler d’expérience', 'man darf / man muss / man muss nicht', 'um … zu pour le but'] },

    // ───────────── 1 · Applying ─────────────
    { kind: 'chapter', title: 'Bewerbung und Vorstellungsgespräch', titleFr: 'Candidature et entretien', blurb: 'Stelle, Erfahrung, Aufgaben.', blurbFr: 'Poste, expérience, tâches.' },

    { kind: 'situation', title: 'Das Vorstellungsgespräch', titleFr: 'L’entretien d’embauche',
      setting: 'Lara talks to the manager of a café.', settingFr: 'Lara parle avec le responsable d’un café.',
      lines: [
        line('Chefin', 'Guten Tag, Frau Mbeki. Sie haben sich um die Stelle als Servicekraft beworben.', 'Good day, Ms Mbeki. You applied for the job as a service assistant.', 'Bonjour, Madame Mbeki. Vous avez postulé au poste d’employée de service.'),
        line('Lara', 'Ja. Ich habe zwei Jahre in einem Restaurant gearbeitet und habe Erfahrung mit Kunden.', 'Yes. I worked in a restaurant for two years and have experience with customers.', 'Oui. J’ai travaillé deux ans dans un restaurant et j’ai de l’expérience avec les clients.'),
        line('Chefin', 'Was sind Ihre Aufgaben dort gewesen?', 'What were your tasks there?', 'Quelles étaient vos tâches là-bas ?'),
        line('Lara', 'Ich habe Gäste bedient, Kaffee gekocht und die Kasse gemacht.', 'I served guests, made coffee and ran the till.', 'J’ai servi les clients, préparé du café et tenu la caisse.'),
        line('Chefin', 'Die Stelle ist in Teilzeit, 20 Stunden pro Woche. Das Gehalt ist 1.400 Euro brutto.', 'The job is part-time, 20 hours a week. The salary is 1,400 euros gross.', 'Le poste est à temps partiel, 20 heures par semaine. Le salaire est de 1 400 euros brut.'),
        line('Lara', 'Das passt gut. Wann bekomme ich den Vertrag?', 'That suits me well. When do I get the contract?', 'Cela me convient bien. Quand recevrai-je le contrat ?'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l25-e1', prompt: 'How many hours a week is the job?', promptFr: 'Combien d’heures par semaine fait le poste ?', options: ['20', '40', '10'], optionsFr: ['20', '40', '10'], answer: 0, explain: 'The manager says: “20 Stunden pro Woche.”', explainFr: 'La responsable dit : « 20 Stunden pro Woche. »', hint: 'Look for “Teilzeit”.', hintFr: 'Cherche « Teilzeit ».' } },

    { kind: 'wordgroup', title: 'Stelle und Bewerbung', titleFr: 'Poste et candidature',
      items: [
        word('a2l25-stelle', 'die Stelle', 'die', 'the job / position', 'le poste', ['STEL', 'le'], 'SHTEL-luh', g('Ich suche eine neue Stelle.', 'I am looking for a new job.', 'Je cherche un nouveau poste.')),
        word('a2l25-bewerbung', 'die Bewerbung', 'die', 'the application', 'la candidature', ['be', 'WER', 'bung'], 'buh-VER-boong', g('Ich schreibe eine Bewerbung.', 'I am writing an application.', 'J’écris une candidature.')),
        word('a2l25-vorstellungsgespraech', 'das Vorstellungsgespräch', 'das', 'the job interview', 'l’entretien d’embauche', ['VOR', 'stel', 'lungs', 'ge', 'spräch'], 'FOR-shtel-oongs-guh-shprayKH', g('Morgen habe ich ein Vorstellungsgespräch.', 'Tomorrow I have a job interview.', 'Demain, j’ai un entretien d’embauche.')),
        word('a2l25-erfahrung', 'die Erfahrung', 'die', 'the experience', 'l’expérience', ['er', 'FAH', 'rung'], 'air-FAH-roong', g('Ich habe Erfahrung im Verkauf.', 'I have experience in sales.', 'J’ai de l’expérience dans la vente.')),
        word('a2l25-aufgabe', 'die Aufgabe', 'die', 'the task', 'la tâche', ['AUF', 'ga', 'be'], 'OWF-gah-buh', g('Meine Aufgabe ist der Service.', 'My task is the service.', 'Ma tâche est le service.')),
        word('a2l25-gehalt', 'das Gehalt', 'das', 'the salary', 'le salaire', ['ge', 'HALT'], 'guh-HALT', g('Das Gehalt ist gut.', 'The salary is good.', 'Le salaire est bon.')),
      ] },

    { kind: 'wordgroup', title: 'Vertrag und Arbeitszeit', titleFr: 'Contrat et horaires',
      items: [
        word('a2l25-vertrag', 'der Vertrag', 'der', 'the contract', 'le contrat', ['ver', 'TRAG'], 'fer-TRAHK', g('Ich unterschreibe den Vertrag.', 'I am signing the contract.', 'Je signe le contrat.')),
        word('a2l25-teilzeit', 'die Teilzeit', 'die', 'part-time', 'le temps partiel', ['TEIL', 'zeit'], 'TILE-tsite', g('Sie arbeitet in Teilzeit.', 'She works part-time.', 'Elle travaille à temps partiel.')),
        word('a2l25-vollzeit', 'die Vollzeit', 'die', 'full-time', 'le temps plein', ['VOLL', 'zeit'], 'FOL-tsite', g('Er arbeitet in Vollzeit.', 'He works full-time.', 'Il travaille à temps plein.')),
        word('a2l25-sich-bewerben', 'sich bewerben um', null, 'to apply for', 'postuler à', ['sich', 'be', 'WER', 'ben'], 'zikh buh-VER-ben', g('Ich bewerbe mich um die Stelle.', 'I am applying for the job.', 'Je postule au poste.')),
      ] },

    { kind: 'grammar', note: {
      id: 'a2l25-bewerbung', title: 'Applying: sich bewerben um + accusative', titleFr: 'Postuler : sich bewerben um + accusatif',
      lead: 'sich bewerben um + accusative. Say your experience with the Perfekt and your skills with “Ich habe Erfahrung in / mit …”.',
      leadFr: 'sich bewerben um + accusatif. Dis ton expérience au Perfekt et tes compétences avec « Ich habe Erfahrung in / mit … ».',
      explanationMd: '**sich bewerben um** (to apply for) is a **reflexive verb with a fixed preposition**: **Ich bewerbe mich um die Stelle** (**um + accusative**). Tell your **experience** with the **Perfekt**: **Ich habe zwei Jahre in einem Restaurant gearbeitet.** and your **skills** with **Erfahrung in / mit**: **Ich habe Erfahrung mit Kunden.** The question for a task is **Was sind Ihre Aufgaben?** and for time **Wie viele Stunden pro Woche?**',
      explanationMdFr: '**sich bewerben um** (postuler à) est un **verbe pronominal avec préposition fixe** : **Ich bewerbe mich um die Stelle** (**um + accusatif**). Raconte ton **expérience** au **Perfekt** : **Ich habe zwei Jahre in einem Restaurant gearbeitet.** et tes **compétences** avec **Erfahrung in / mit** : **Ich habe Erfahrung mit Kunden.** La question pour une tâche est **Was sind Ihre Aufgaben ?** et pour la durée **Wie viele Stunden pro Woche ?**',
      tables: [{ title: 'Useful phrases', titleFr: 'Formules utiles', headers: ['Situation', 'German'], headersFr: ['Situation', 'Allemand'],
        rows: [['Applying', 'Ich bewerbe mich um die Stelle als Servicekraft.'], ['Experience', 'Ich habe zwei Jahre in einem Restaurant gearbeitet.'], ['Skills', 'Ich habe Erfahrung mit Kunden.'], ['Hours', 'Die Stelle ist in Teilzeit, 20 Stunden pro Woche.'], ['Contract', 'Wann bekomme ich den Vertrag?']],
        rowsFr: [['Postuler', 'Ich bewerbe mich um die Stelle als Servicekraft.'], ['Expérience', 'Ich habe zwei Jahre in einem Restaurant gearbeitet.'], ['Compétences', 'Ich habe Erfahrung mit Kunden.'], ['Horaires', 'Die Stelle ist in Teilzeit, 20 Stunden pro Woche.'], ['Contrat', 'Wann bekomme ich den Vertrag ?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bewerbe', role: 'verb' }, { text: 'mich', role: 'accusative' }, { text: 'um die Stelle.', role: 'accusative' }], en: 'I am applying for the job.', fr: 'Je postule au poste.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'zwei Jahre', role: 'time' }, { text: 'in einem Restaurant', role: 'place' }, { text: 'gearbeitet.', role: 'verb' }], en: 'I worked in a restaurant for two years.', fr: 'J’ai travaillé deux ans dans un restaurant.' },
      ],
      contrast: {
        a: { label: 'Present', labelFr: 'Présent', note: 'what you are doing now', noteFr: 'ce que tu fais maintenant', examples: [g('Ich bewerbe mich um die Stelle.', 'I am applying for the job.', 'Je postule au poste.'), g('Ich arbeite in einem Café.', 'I work in a café.', 'Je travaille dans un café.')] },
        b: { label: 'Perfekt', labelFr: 'Perfekt', note: 'your experience', noteFr: 'ton expérience', examples: [g('Ich habe in einem Restaurant gearbeitet.', 'I worked in a restaurant.', 'J’ai travaillé dans un restaurant.'), g('Ich habe Gäste bedient.', 'I served guests.', 'J’ai servi des clients.')] },
      },
      examples: [
        g('Ich bewerbe mich um die Stelle als Servicekraft.', 'I am applying for the job as a service assistant.', 'Je postule au poste d’employée de service.'),
        g('Ich habe zwei Jahre in einem Restaurant gearbeitet.', 'I worked in a restaurant for two years.', 'J’ai travaillé deux ans dans un restaurant.'),
        g('Ich habe Erfahrung mit Kunden.', 'I have experience with customers.', 'J’ai de l’expérience avec les clients.'),
        g('Ich habe Gäste bedient und die Kasse gemacht.', 'I served guests and ran the till.', 'J’ai servi les clients et tenu la caisse.'),
        g('Die Stelle ist in Teilzeit, 20 Stunden pro Woche.', 'The job is part-time, 20 hours a week.', 'Le poste est à temps partiel, 20 heures par semaine.'),
        g('Wann bekomme ich den Vertrag?', 'When do I get the contract?', 'Quand recevrai-je le contrat ?'),
      ],
      mistakes: [
        { wrong: 'Ich bewerbe mich für die Stelle.', right: 'Ich bewerbe mich um die Stelle.', why: 'sich bewerben goes with um, not für.', whyFr: 'sich bewerben va avec um, pas für.' },
        { wrong: 'Ich arbeite zwei Jahre in einem Restaurant. (experience)', right: 'Ich habe zwei Jahre in einem Restaurant gearbeitet.', why: 'Finished experience: Perfekt.', whyFr: 'Expérience terminée : Perfekt.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l25-e2', prompt: 'Ich bewerbe mich ___ die Stelle.', promptFr: 'Ich bewerbe mich ___ die Stelle.', answer: 'um', hint: 'sich bewerben um', hintFr: 'sich bewerben um' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l25-e3', word: 'Gehalt', answer: 'das', hint: 'Neuter: das Gehalt.', hintFr: 'Neutre : das Gehalt.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l25-e4', pairs: [{ de: 'die Stelle', en: 'the job', fr: 'le poste' }, { de: 'der Vertrag', en: 'the contract', fr: 'le contrat' }, { de: 'die Erfahrung', en: 'the experience', fr: 'l’expérience' }, { de: 'das Gehalt', en: 'the salary', fr: 'le salaire' }], hint: 'Match each German word to its meaning.', hintFr: 'Associe chaque mot allemand à son sens.' } },

    // ───────────── 2 · Rules ─────────────
    { kind: 'chapter', title: 'Regeln am Arbeitsplatz', titleFr: 'Règles au travail', blurb: 'man darf, man muss, man muss nicht.', blurbFr: 'man darf, man muss, man muss nicht.' },

    { kind: 'situation', title: 'Die erste Woche', titleFr: 'La première semaine',
      setting: 'A colleague explains the rules to Lara.', settingFr: 'Une collègue explique les règles à Lara.',
      lines: [
        line('Kollegin', 'Willkommen! Du musst um acht Uhr hier sein. Die Pause ist um zwölf.', 'Welcome! You have to be here at eight. The break is at twelve.', 'Bienvenue ! Tu dois être ici à huit heures. La pause est à midi.'),
        line('Lara', 'Darf man hier rauchen?', 'May one smoke here?', 'A-t-on le droit de fumer ici ?'),
        line('Kollegin', 'Nein, man darf nicht rauchen, nur draußen. Und man soll immer freundlich sein.', 'No, one must not smoke, only outside. And one should always be friendly.', 'Non, on n’a pas le droit de fumer, seulement dehors. Et on doit toujours être aimable.'),
        line('Lara', 'Muss ich auch am Samstag arbeiten?', 'Do I also have to work on Saturday?', 'Dois-je aussi travailler le samedi ?'),
        line('Kollegin', 'Nein, du musst nicht am Samstag arbeiten. Überstunden sind freiwillig. Die Besprechung ist montags.', 'No, you don’t have to work on Saturday. Overtime is voluntary. The meeting is on Mondays.', 'Non, tu n’as pas besoin de travailler le samedi. Les heures supplémentaires sont facultatives. La réunion a lieu le lundi.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l25-e5', prompt: 'Does Lara have to work on Saturday?', promptFr: 'Lara doit-elle travailler le samedi ?', options: ['No, she does not have to', 'Yes, always', 'Only in the afternoon'], optionsFr: ['Non, elle n’y est pas obligée', 'Oui, toujours', 'Seulement l’après-midi'], answer: 0, explain: 'The colleague says: “Du musst nicht am Samstag arbeiten.”', explainFr: 'La collègue dit : « Du musst nicht am Samstag arbeiten. »', hint: 'Look for “musst nicht”.', hintFr: 'Cherche « musst nicht ».' } },

    { kind: 'wordgroup', title: 'Arbeitsalltag', titleFr: 'Le quotidien au travail',
      items: [
        word('a2l25-pause', 'die Pause', 'die', 'the break', 'la pause', ['PAU', 'se'], 'POW-zuh', g('Die Pause ist um zwölf.', 'The break is at twelve.', 'La pause est à midi.')),
        word('a2l25-besprechung', 'die Besprechung', 'die', 'the meeting', 'la réunion', ['be', 'SPRE', 'chung'], 'buh-SHPRE-khoong', g('Die Besprechung ist montags.', 'The meeting is on Mondays.', 'La réunion a lieu le lundi.')),
        word('a2l25-ueberstunden', 'die Überstunden', 'die', 'the overtime', 'les heures supplémentaires', ['Ü', 'ber', 'stun', 'den'], 'UE-ber-shtoon-den', g('Ich mache keine Überstunden.', 'I do not do overtime.', 'Je ne fais pas d’heures supplémentaires.')),
        word('a2l25-regel', 'die Regel', 'die', 'the rule', 'la règle', ['RE', 'gel'], 'RAY-gel', g('Das ist eine wichtige Regel.', 'That is an important rule.', 'C’est une règle importante.')),
        word('a2l25-freiwillig', 'freiwillig', null, 'voluntary', 'facultatif', ['FREI', 'wil', 'lig'], 'FRY-vil-ikh', g('Überstunden sind freiwillig.', 'Overtime is voluntary.', 'Les heures supplémentaires sont facultatives.')),
        word('a2l25-rauchen', 'rauchen', null, 'to smoke', 'fumer', ['RAU', 'chen'], 'ROW-khen', g('Hier darf man nicht rauchen.', 'One must not smoke here.', 'Ici, on n’a pas le droit de fumer.')),
      ] },

    { kind: 'grammar', note: {
      id: 'a2l25-man-modal', title: 'man darf / man muss / man muss nicht', titleFr: 'man darf / man muss / man muss nicht',
      lead: 'man = people in general. nicht dürfen = forbidden; nicht müssen = not necessary.',
      leadFr: 'man = les gens en général. nicht dürfen = interdit ; nicht müssen = pas nécessaire.',
      explanationMd: '**man** (one, people in general) uses the **er-form**: **Man darf hier nicht rauchen.** Careful with **negation**: **nicht dürfen** = **forbidden** (**Man darf nicht rauchen.**), but **nicht müssen** = **not necessary** (**Du musst nicht am Samstag arbeiten.** = you may, but you don’t have to). **sollen** gives a **recommendation or instruction from someone else**: **Man soll immer freundlich sein.** The infinitive goes to the **end**.',
      explanationMdFr: '**man** (on) utilise la **forme de er** : **Man darf hier nicht rauchen.** Attention à la **négation** : **nicht dürfen** = **interdit** (**Man darf nicht rauchen.**), mais **nicht müssen** = **pas nécessaire** (**Du musst nicht am Samstag arbeiten.** = tu peux, mais tu n’y es pas obligé). **sollen** exprime une **recommandation ou une instruction venant d’un autre** : **Man soll immer freundlich sein.** L’infinitif va à la **fin**.',
      tables: [{ title: 'Modals at work', titleFr: 'Modaux au travail', headers: ['Modal', 'Meaning', 'Example'], headersFr: ['Modal', 'Sens', 'Exemple'],
        rows: [['müssen', 'have to', 'Du musst um acht Uhr hier sein.'], ['nicht müssen', 'do not have to', 'Du musst nicht am Samstag arbeiten.'], ['dürfen', 'may', 'Darf man hier essen?'], ['nicht dürfen', 'must not (forbidden)', 'Man darf nicht rauchen.'], ['sollen', 'should / be supposed to', 'Man soll immer freundlich sein.']],
        rowsFr: [['müssen', 'devoir', 'Du musst um acht Uhr hier sein.'], ['nicht müssen', 'ne pas avoir besoin de', 'Du musst nicht am Samstag arbeiten.'], ['dürfen', 'avoir le droit de', 'Darf man hier essen ?'], ['nicht dürfen', 'ne pas avoir le droit (interdit)', 'Man darf nicht rauchen.'], ['sollen', 'devoir (instruction)', 'Man soll immer freundlich sein.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Man', role: 'subject' }, { text: 'darf', role: 'verb' }, { text: 'hier', role: 'place' }, { text: 'nicht', role: 'other' }, { text: 'rauchen.', role: 'verb' }], en: 'One must not smoke here.', fr: 'On n’a pas le droit de fumer ici.' },
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'musst', role: 'verb' }, { text: 'nicht', role: 'other' }, { text: 'am Samstag', role: 'time' }, { text: 'arbeiten.', role: 'verb' }], en: 'You don’t have to work on Saturday.', fr: 'Tu n’as pas besoin de travailler le samedi.' },
      ],
      contrast: {
        a: { label: 'nicht dürfen = forbidden', labelFr: 'nicht dürfen = interdit', note: 'you may not', noteFr: 'tu n’as pas le droit', examples: [g('Man darf hier nicht rauchen.', 'One must not smoke here.', 'On n’a pas le droit de fumer ici.'), g('Du darfst nicht zu spät kommen.', 'You must not come late.', 'Tu ne dois pas arriver en retard.')] },
        b: { label: 'nicht müssen = not necessary', labelFr: 'nicht müssen = pas nécessaire', note: 'it is your choice', noteFr: 'c’est ton choix', examples: [g('Du musst nicht am Samstag arbeiten.', 'You don’t have to work on Saturday.', 'Tu n’as pas besoin de travailler le samedi.'), g('Überstunden sind freiwillig.', 'Overtime is voluntary.', 'Les heures supplémentaires sont facultatives.')] },
      },
      examples: [
        g('Du musst um acht Uhr hier sein.', 'You have to be here at eight.', 'Tu dois être ici à huit heures.'),
        g('Darf man hier rauchen?', 'May one smoke here?', 'A-t-on le droit de fumer ici ?'),
        g('Man darf nicht rauchen, nur draußen.', 'One must not smoke, only outside.', 'On n’a pas le droit de fumer, seulement dehors.'),
        g('Du musst nicht am Samstag arbeiten.', 'You don’t have to work on Saturday.', 'Tu n’as pas besoin de travailler le samedi.'),
        g('Man soll immer freundlich sein.', 'One should always be friendly.', 'On doit toujours être aimable.'),
        g('Die Besprechung ist montags.', 'The meeting is on Mondays.', 'La réunion a lieu le lundi.'),
      ],
      mistakes: [
        { wrong: 'Man muss nicht rauchen. (forbidden)', right: 'Man darf nicht rauchen.', why: 'Forbidden = nicht dürfen.', whyFr: 'Interdit = nicht dürfen.' },
        { wrong: 'Du darfst nicht am Samstag arbeiten. (not necessary)', right: 'Du musst nicht am Samstag arbeiten.', why: 'Not necessary = nicht müssen.', whyFr: 'Pas nécessaire = nicht müssen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l25-e6', prompt: 'Hier ___ man nicht rauchen. (forbidden)', promptFr: 'Hier ___ man nicht rauchen. (interdit)', answer: 'darf', hint: 'forbidden = darf nicht', hintFr: 'interdit = darf nicht' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l25-e7', prompt: '“Du musst nicht kommen” means …', promptFr: '« Du musst nicht kommen » signifie …', options: ['You don’t have to come', 'You must not come', 'You can’t come'], optionsFr: ['Tu n’as pas besoin de venir', 'Tu ne dois pas venir', 'Tu ne peux pas venir'], answer: 0, explain: 'nicht müssen = not necessary.', explainFr: 'nicht müssen = pas nécessaire.', hint: 'müssen + nicht', hintFr: 'müssen + nicht' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l25-e8', tokens: ['darf', 'nicht', 'man', 'rauchen', 'Hier'], answer: ['Hier', 'darf', 'man', 'nicht', 'rauchen'], hint: 'Hier first, darf second, rauchen last.', hintFr: 'Hier en premier, darf en deuxième, rauchen à la fin.' } },

    // ───────────── 3 · um … zu ─────────────
    { kind: 'chapter', title: 'Wozu? um … zu', titleFr: 'Pourquoi faire ? um … zu', blurb: 'Purpose with um … zu.', blurbFr: 'Le but avec um … zu.' },

    { kind: 'situation', title: 'Wozu machst du das?', titleFr: 'À quoi cela sert-il ?',
      setting: 'Lara and Tim talk about why they work.', settingFr: 'Lara et Tim parlent de la raison pour laquelle ils travaillent.',
      lines: [
        line('Tim', 'Warum arbeitest du in Teilzeit?', 'Why do you work part-time?', 'Pourquoi travailles-tu à temps partiel ?'),
        line('Lara', 'Ich arbeite in Teilzeit, um Deutsch zu lernen. Ich gehe zum Kurs, um eine Prüfung zu bestehen.', 'I work part-time to learn German. I go to the course to pass an exam.', 'Je travaille à temps partiel pour apprendre l’allemand. Je vais au cours pour réussir un examen.'),
        line('Tim', 'Ich spare Geld, um eine Reise zu machen. Ich schreibe eine Bewerbung, um die Stelle zu bekommen.', 'I save money to take a trip. I am writing an application to get the job.', 'J’économise pour faire un voyage. J’écris une candidature pour obtenir le poste.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l25-um-zu', title: 'Purpose with um … zu', titleFr: 'Le but avec um … zu',
      lead: 'um + … + zu + infinitive at the end. Same subject in both parts.',
      leadFr: 'um + … + zu + infinitif à la fin. Même sujet dans les deux parties.',
      explanationMd: 'To say **why** or **for what purpose** you do something, use **um … zu + infinitive**: **Ich arbeite in Teilzeit, um Deutsch zu lernen.** The **infinitive with zu goes to the end**, **um** stands after the comma. Both parts must have the **same subject**. With a **separable verb**, **zu** goes **between** prefix and verb: **um früh aufzustehen**. The question is **Wozu …?** or **Warum …?**',
      explanationMdFr: 'Pour dire **pourquoi** ou **dans quel but** tu fais quelque chose, utilise **um … zu + infinitif** : **Ich arbeite in Teilzeit, um Deutsch zu lernen.** L’**infinitif avec zu va à la fin**, **um** vient après la virgule. Les deux parties doivent avoir le **même sujet**. Avec un **verbe séparable**, **zu** se place **entre** le préfixe et le verbe : **um früh aufzustehen**. La question est **Wozu …?** ou **Warum …?**',
      tables: [{ title: 'um … zu', titleFr: 'um … zu', headers: ['Main clause', 'um … zu'], headersFr: ['Principale', 'um … zu'],
        rows: [['Ich arbeite in Teilzeit,', 'um Deutsch zu lernen.'], ['Ich gehe zum Kurs,', 'um eine Prüfung zu bestehen.'], ['Er spart Geld,', 'um eine Reise zu machen.'], ['Sie steht früh auf,', 'um pünktlich zu sein.']],
        rowsFr: [['Ich arbeite in Teilzeit,', 'um Deutsch zu lernen.'], ['Ich gehe zum Kurs,', 'um eine Prüfung zu bestehen.'], ['Er spart Geld,', 'um eine Reise zu machen.'], ['Sie steht früh auf,', 'um pünktlich zu sein.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'arbeite', role: 'verb' }, { text: 'in Teilzeit,', role: 'place' }, { text: 'um', role: 'connector' }, { text: 'Deutsch', role: 'accusative' }, { text: 'zu lernen.', role: 'verb' }], en: 'I work part-time to learn German.', fr: 'Je travaille à temps partiel pour apprendre l’allemand.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'spart', role: 'verb' }, { text: 'Geld,', role: 'accusative' }, { text: 'um', role: 'connector' }, { text: 'eine Reise', role: 'accusative' }, { text: 'zu machen.', role: 'verb' }], en: 'He saves money to take a trip.', fr: 'Il économise pour faire un voyage.' },
      ],
      contrast: {
        a: { label: 'um … zu', labelFr: 'um … zu', note: 'same subject', noteFr: 'même sujet', examples: [g('Ich gehe zum Kurs, um eine Prüfung zu bestehen.', 'I go to the course to pass an exam.', 'Je vais au cours pour réussir un examen.'), g('Sie steht früh auf, um pünktlich zu sein.', 'She gets up early to be on time.', 'Elle se lève tôt pour être à l’heure.')] },
        b: { label: 'weil', labelFr: 'weil', note: 'a reason, any subject', noteFr: 'une raison, n’importe quel sujet', examples: [g('Ich gehe zum Kurs, weil ich eine Prüfung machen muss.', 'I go to the course because I have to take an exam.', 'Je vais au cours parce que je dois passer un examen.'), g('Sie steht früh auf, weil der Zug um sechs fährt.', 'She gets up early because the train leaves at six.', 'Elle se lève tôt parce que le train part à six heures.')] },
      },
      examples: [
        g('Ich arbeite in Teilzeit, um Deutsch zu lernen.', 'I work part-time to learn German.', 'Je travaille à temps partiel pour apprendre l’allemand.'),
        g('Ich gehe zum Kurs, um eine Prüfung zu bestehen.', 'I go to the course to pass an exam.', 'Je vais au cours pour réussir un examen.'),
        g('Er spart Geld, um eine Reise zu machen.', 'He saves money to take a trip.', 'Il économise pour faire un voyage.'),
        g('Ich schreibe eine Bewerbung, um die Stelle zu bekommen.', 'I am writing an application to get the job.', 'J’écris une candidature pour obtenir le poste.'),
        g('Sie steht früh auf, um pünktlich zu sein.', 'She gets up early to be on time.', 'Elle se lève tôt pour être à l’heure.'),
        g('Wozu brauchst du das? — Um mit Kunden zu sprechen.', 'What do you need that for? — To talk to customers.', 'À quoi cela te sert-il ? — À parler aux clients.'),
      ],
      mistakes: [
        { wrong: 'Ich arbeite, um ich Deutsch lerne.', right: 'Ich arbeite, um Deutsch zu lernen.', why: 'um … zu has no new subject, just zu + infinitive.', whyFr: 'um … zu n’a pas de nouveau sujet, seulement zu + infinitif.' },
        { wrong: 'Er steht früh um aufzustehen.', right: 'Er steht früh auf, um pünktlich zu sein.', why: 'um … zu comes after the comma and ends the sentence.', whyFr: 'um … zu vient après la virgule et termine la phrase.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l25-e9', prompt: 'Ich lerne Deutsch, um in Deutschland ___ arbeiten.', promptFr: 'Ich lerne Deutsch, um in Deutschland ___ arbeiten.', answer: 'zu', hint: 'um … zu + infinitive', hintFr: 'um … zu + infinitif' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l25-e10', tokens: ['zu', 'Teilzeit', 'Ich', 'um', 'lernen', 'arbeite', 'Deutsch', 'in'], answer: ['Ich', 'arbeite', 'in', 'Teilzeit', 'um', 'Deutsch', 'zu', 'lernen'], hint: 'um … zu comes last.', hintFr: 'um … zu vient en dernier.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l25-e11', prompt: 'Listen. Why does she go to the course?', promptFr: 'Écoute. Pourquoi va-t-elle au cours ?', audio: { ttsText: 'Ich gehe zum Kurs, um eine Prüfung zu bestehen.' }, options: ['To pass an exam', 'To meet friends', 'To find a flat'], optionsFr: ['Pour réussir un examen', 'Pour rencontrer des amis', 'Pour trouver un appartement'], answer: 0, hint: 'um … zu', hintFr: 'um … zu' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l25-e12', prompt: 'Listen. What is the rule?', promptFr: 'Écoute. Quelle est la règle ?', audio: { ttsText: 'Man darf hier nicht rauchen, nur draußen.' }, options: ['No smoking inside', 'No talking', 'No phones'], optionsFr: ['Interdiction de fumer à l’intérieur', 'Interdiction de parler', 'Interdiction des téléphones'], answer: 0, hint: 'nicht rauchen', hintFr: 'nicht rauchen' } },

    { kind: 'pronunciation', focus: 'Long ü in Überstunden, and the soft ch in Besprechung and Erfahrung', focusFr: 'ü long dans Überstunden, et le ch doux dans Besprechung et Erfahrung',
      items: [
        word('a2l25-ueberstunden-pron', 'Überstunden', null, 'overtime', 'heures supplémentaires', ['Ü', 'ber', 'stun', 'den'], 'UE-ber-shtoon-den', g('Er macht viele Überstunden.', 'He does a lot of overtime.', 'Il fait beaucoup d’heures supplémentaires.')),
        word('a2l25-besprechung-pron', 'Besprechung', null, 'meeting', 'réunion', ['be', 'SPRE', 'chung'], 'buh-SHPRE-khoong', g('Die Besprechung beginnt um neun.', 'The meeting starts at nine.', 'La réunion commence à neuf heures.')),
        word('a2l25-erfahrung-pron', 'Erfahrung', null, 'experience', 'expérience', ['er', 'FAH', 'rung'], 'air-FAH-roong', g('Ich habe viel Erfahrung.', 'I have a lot of experience.', 'J’ai beaucoup d’expérience.')),
        word('a2l25-vorstellungsgespraech-pron', 'Vorstellungsgespräch', null, 'job interview', 'entretien d’embauche', ['VOR', 'stel', 'lungs', 'ge', 'spräch'], 'FOR-shtel-oongs-guh-shprayKH', g('Das Vorstellungsgespräch war gut.', 'The job interview went well.', 'L’entretien s’est bien passé.')),
      ] },

    { kind: 'wrapup',
      summary: 'You can now **apply for a job**, talk about **rules** (darf / muss / muss nicht) and name a **purpose** with **um … zu**. 🎉',
      summaryFr: 'Tu sais maintenant **postuler**, parler de **règles** (darf / muss / muss nicht) et indiquer un **but** avec **um … zu**. 🎉',
      card: { title: 'Work on one page', titleFr: 'Le travail en une page', sections: [
        { heading: 'Applying', headingFr: 'Postuler', rows: [g('Ich bewerbe mich um die Stelle.', 'sich bewerben um + accusative', 'sich bewerben um + accusatif'), g('Ich habe Erfahrung mit …', 'experience', 'expérience')] },
        { heading: 'Rules', headingFr: 'Règles', rows: [g('nicht dürfen = forbidden', 'Man darf nicht rauchen.', 'Man darf nicht rauchen.'), g('nicht müssen = not necessary', 'Du musst nicht kommen.', 'Du musst nicht kommen.')] },
        { heading: 'Purpose', headingFr: 'But', rows: [g('um … zu + infinitive', 'same subject', 'même sujet')] },
      ] } },
  ],
};
