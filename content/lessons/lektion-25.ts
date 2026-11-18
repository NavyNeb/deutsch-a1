import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A1 lesson: yesterday, the first Perfekt. The official A1 grammar list contains the Perfekt of selected verbs:
// arbeiten, bleiben, essen, fahren, fragen, glauben, haben, lesen, lernen, machen, schlafen, sehen, passieren, trinken, verstehen.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const lektion25: Lesson = {
  id: 'l25', level: 'A1', module: 6, number: 24,
  title: { de: 'Gestern: das erste Perfekt', en: 'Yesterday: the first Perfekt', fr: 'Hier : le premier Perfekt' },
  theme: 'Telling what you did, with haben or sein and a participle',
  themeFr: 'Raconter ce que tu as fait, avec haben ou sein et un participe',
  goals: ['Build the Perfekt: haben + participle at the end', 'Know irregular participles and verbs without ge-', 'Use sein with fahren, bleiben and passieren'],
  goalsFr: ['Former le Perfekt : haben + participe à la fin', 'Connaître les participes irréguliers et les verbes sans ge-', 'Utiliser sein avec fahren, bleiben et passieren'],
  canDo: g('Ich kann einfach erzählen, was ich gestern gemacht habe.', 'I can say in simple terms what I did yesterday.', 'Je sais dire simplement ce que j’ai fait hier.'),
  steps: [
    { kind: 'intro', title: 'Was hast du gestern gemacht? ⏪', titleFr: 'Qu’as-tu fait hier ? ⏪',
      scene: 'Tom and Nicole talk about yesterday and the weekend.', sceneFr: 'Tom et Nicole parlent d’hier et du week-end.',
      goals: ['Ich habe Deutsch gelernt.', 'Ich habe gegessen, getrunken, gelesen, gesehen, verstanden.', 'Ich bin gefahren. Ich bin geblieben. Was ist passiert?'],
      goalsFr: ['Ich habe Deutsch gelernt.', 'Ich habe gegessen, getrunken, gelesen, gesehen, verstanden.', 'Ich bin gefahren. Ich bin geblieben. Was ist passiert ?'] },

    // ───────────── 1 · Regular participles ─────────────
    { kind: 'chapter', title: 'haben + Partizip', titleFr: 'haben + participe', blurb: 'The Perfekt of regular verbs.', blurbFr: 'Le Perfekt des verbes réguliers.' },

    { kind: 'situation', title: 'Was hast du gestern gemacht?', titleFr: 'Qu’as-tu fait hier ?',
      setting: 'Tom asks Nicole about her day yesterday.', settingFr: 'Tom interroge Nicole sur sa journée d’hier.',
      lines: [
        line('Tom', 'Was hast du gestern gemacht, Nicole?', 'What did you do yesterday, Nicole?', 'Qu’as-tu fait hier, Nicole ?'),
        line('Nicole', 'Gestern habe ich lange geschlafen. Dann habe ich Deutsch gelernt.', 'Yesterday I slept for a long time. Then I studied German.', 'Hier, j’ai dormi longtemps. Puis j’ai étudié l’allemand.'),
        line('Tom', 'Hast du auch gearbeitet?', 'Did you work too?', 'As-tu aussi travaillé ?'),
        line('Nicole', 'Nein, ich habe nicht gearbeitet. Ich habe Hausaufgaben gemacht.', 'No, I did not work. I did homework.', 'Non, je n’ai pas travaillé. J’ai fait mes devoirs.'),
        line('Tom', 'Und hast du Zeit gehabt für Sport?', 'And did you have time for sport?', 'Et as-tu eu le temps de faire du sport ?'),
        line('Nicole', 'Nein, leider nicht.', 'No, unfortunately not.', 'Non, hélas.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l25-e11', prompt: 'What did Nicole do after sleeping?', promptFr: 'Que a fait Nicole après avoir dormi ?', options: ['She studied German', 'She worked', 'She did sport'], optionsFr: ['Elle a étudié l’allemand', 'Elle a travaillé', 'Elle a fait du sport'], answer: 0, explain: 'She says: “Dann habe ich Deutsch gelernt.”', explainFr: 'Elle dit : « Dann habe ich Deutsch gelernt. »', hint: 'Look for “dann”.', hintFr: 'Cherche « dann ».' } },

    { kind: 'wordgroup', title: 'Regelmäßige Partizipien: ge…t', titleFr: 'Participes réguliers : ge…t',
      note: 'These participles are formed with ge- at the front and -t at the end.', noteFr: 'Ces participes se forment avec ge- devant et -t à la fin.',
      items: [
        word('l25-gearbeitet', 'gearbeitet', null, 'worked (arbeiten)', 'travaillé (arbeiten)', ['ge', 'AR', 'bei', 'tet'], 'guh-AR-bye-tet', g('Ich habe gestern gearbeitet.', 'I worked yesterday.', 'J’ai travaillé hier.')),
        word('l25-gelernt', 'gelernt', null, 'learned (lernen)', 'appris (lernen)', ['ge', 'LERNT'], 'guh-LAIRNT', g('Ich habe Deutsch gelernt.', 'I learned German.', 'J’ai appris l’allemand.')),
        word('l25-gemacht', 'gemacht', null, 'done, made (machen)', 'fait (machen)', ['ge', 'MACHT'], 'guh-MAKHT', g('Ich habe Hausaufgaben gemacht.', 'I did homework.', 'J’ai fait mes devoirs.')),
        word('l25-gehabt', 'gehabt', null, 'had (haben)', 'eu (haben)', ['ge', 'HABT'], 'guh-HAHPT', g('Ich habe keine Zeit gehabt.', 'I had no time.', 'Je n’ai pas eu le temps.')),
        word('l25-gefragt', 'gefragt', null, 'asked (fragen)', 'demandé (fragen)', ['ge', 'FRAGT'], 'guh-FRAHKT', g('Ich habe den Lehrer gefragt.', 'I asked the teacher.', 'J’ai demandé à l’enseignant.')),
        word('l25-geglaubt', 'geglaubt', null, 'believed (glauben)', 'cru (glauben)', ['ge', 'GLAUBT'], 'guh-GLOWPT', g('Ich habe das nicht geglaubt.', 'I did not believe that.', 'Je n’ai pas cru cela.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l25-perfekt-regelmaessig', title: 'The Perfekt: haben + participle at the end', titleFr: 'Le Perfekt : haben + participe à la fin',
      lead: 'Talk about the past with haben in position 2 and the participle at the very end. Regular verbs: ge-…-t.',
      leadFr: 'Parle du passé avec haben en position 2 et le participe tout à la fin. Verbes réguliers : ge-…-t.',
      explanationMd: 'In everyday German you talk about the past with the **Perfekt**: **haben** in **position 2** and the **participle** at the **very end** (the frame from lessons 10 and 18). **Regular verbs** make the participle with **ge-** in front and **-t** at the end: **lernen → gelernt**, **arbeiten → gearbeitet**. Time words like **gestern** can start the sentence, and the verb stays second: **Gestern habe ich gearbeitet.**',
      explanationMdFr: 'Dans l’allemand de tous les jours, on parle du passé avec le **Perfekt** : **haben** en **position 2** et le **participe** tout à la **fin** (le cadre des leçons 10 et 18). Les **verbes réguliers** forment le participe avec **ge-** devant et **-t** à la fin : **lernen → gelernt**, **arbeiten → gearbeitet**. Un mot de temps comme **gestern** peut ouvrir la phrase, et le verbe reste en deuxième : **Gestern habe ich gearbeitet.**',
      tables: [
        { title: 'haben (present) + participle', titleFr: 'haben (présent) + participe', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['habe', 'hast', 'hat', 'haben', 'habt', 'haben']], rowsFr: [['habe', 'hast', 'hat', 'haben', 'habt', 'haben']] },
        { title: 'Regular verbs', titleFr: 'Verbes réguliers', headers: ['Infinitive', 'Participle', 'Example'], headersFr: ['Infinitif', 'Participe', 'Exemple'],
          rows: [['lernen', 'gelernt', 'Ich habe Deutsch gelernt.'], ['machen', 'gemacht', 'Ich habe Hausaufgaben gemacht.'], ['arbeiten', 'gearbeitet', 'Ich habe nicht gearbeitet.'], ['haben', 'gehabt', 'Ich habe keine Zeit gehabt.'], ['fragen', 'gefragt', 'Ich habe den Lehrer gefragt.']],
          rowsFr: [['lernen', 'gelernt', 'Ich habe Deutsch gelernt.'], ['machen', 'gemacht', 'Ich habe Hausaufgaben gemacht.'], ['arbeiten', 'gearbeitet', 'Ich habe nicht gearbeitet.'], ['haben', 'gehabt', 'Ich habe keine Zeit gehabt.'], ['fragen', 'gefragt', 'Ich habe den Lehrer gefragt.']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'Deutsch', role: 'accusative' }, { text: 'gelernt.', role: 'verb' }], en: 'I learned German.', fr: 'J’ai appris l’allemand.' },
        { parts: [{ text: 'Gestern', role: 'time' }, { text: 'habe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'gearbeitet.', role: 'verb' }], en: 'Yesterday I worked.', fr: 'Hier, j’ai travaillé.' },
      ],
      contrast: {
        a: { label: 'Present', labelFr: 'Présent', note: 'one verb', noteFr: 'un seul verbe', examples: [g('Ich lerne Deutsch.', 'I learn German.', 'J’apprends l’allemand.'), g('Ich arbeite heute.', 'I work today.', 'Je travaille aujourd’hui.')] },
        b: { label: 'Perfekt', labelFr: 'Perfekt', note: 'haben second, participle last', noteFr: 'haben en deuxième, participe en dernier', examples: [g('Ich habe Deutsch gelernt.', 'I learned German.', 'J’ai appris l’allemand.'), g('Ich habe gestern gearbeitet.', 'I worked yesterday.', 'J’ai travaillé hier.')] },
      },
      examples: [
        g('Gestern habe ich lange geschlafen.', 'Yesterday I slept for a long time.', 'Hier, j’ai dormi longtemps.'),
        g('Ich habe Deutsch gelernt.', 'I learned German.', 'J’ai appris l’allemand.'),
        g('Hast du auch gearbeitet?', 'Did you work too?', 'As-tu aussi travaillé ?'),
        g('Ich habe nicht gearbeitet.', 'I did not work.', 'Je n’ai pas travaillé.'),
        g('Ich habe Hausaufgaben gemacht.', 'I did homework.', 'J’ai fait mes devoirs.'),
        g('Wir haben den Lehrer gefragt.', 'We asked the teacher.', 'Nous avons demandé à l’enseignant.'),
        g('Er hat keine Zeit gehabt.', 'He had no time.', 'Il n’a pas eu le temps.'),
      ],
      mistakes: [
        { wrong: 'Ich habe gelernt Deutsch.', right: 'Ich habe Deutsch gelernt.', why: 'The participle goes to the very end.', whyFr: 'Le participe va tout à la fin.' },
        { wrong: 'Ich lerne gestern Deutsch.', right: 'Ich habe gestern Deutsch gelernt.', why: 'For the past use haben + participle.', whyFr: 'Pour le passé, utilise haben + participe.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l25-e1', prompt: 'Ich habe Deutsch ___. (lernen)', promptFr: 'Ich habe Deutsch ___. (lernen)', answer: 'gelernt', hint: 'ge- + stem + -t', hintFr: 'ge- + radical + -t' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l25-e2', tokens: ['habe', 'Hausaufgaben', 'ich', 'gemacht', 'Gestern'], answer: ['Gestern', 'habe', 'ich', 'Hausaufgaben', 'gemacht'], hint: 'Gestern first, haben second, participle last.', hintFr: 'Gestern en premier, haben en deuxième, participe en dernier.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l25-e3', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Ich habe gestern gearbeitet.', 'Ich gearbeitet habe gestern.', 'Ich habe gearbeitet gestern.'], answer: 0, explain: 'haben second, participle last.', explainFr: 'haben en deuxième, participe en dernier.', hint: 'Participle at the very end.', hintFr: 'Participe tout à la fin.' } },

    // ───────────── 2 · Irregular participles ─────────────
    { kind: 'chapter', title: 'Unregelmäßige Partizipien', titleFr: 'Participes irréguliers', blurb: 'ge-…-en, and verbs with no ge-.', blurbFr: 'ge-…-en, et verbes sans ge-.' },

    { kind: 'situation', title: 'Was hast du gegessen?', titleFr: 'Qu’as-tu mangé ?',
      setting: 'Tom asks Nicole what she did in the evening.', settingFr: 'Tom demande à Nicole ce qu’elle a fait le soir.',
      lines: [
        line('Nicole', 'Gestern habe ich Brot gegessen und Tee getrunken.', 'Yesterday I ate bread and drank tea.', 'Hier, j’ai mangé du pain et bu du thé.'),
        line('Tom', 'Hast du ein Buch gelesen?', 'Did you read a book?', 'As-tu lu un livre ?'),
        line('Nicole', 'Ja, ich habe ein Buch gelesen und einen Film gesehen.', 'Yes, I read a book and watched a film.', 'Oui, j’ai lu un livre et vu un film.'),
        line('Tom', 'Hast du alles verstanden?', 'Did you understand everything?', 'As-tu tout compris ?'),
        line('Nicole', 'Nicht alles, aber viel!', 'Not everything, but a lot!', 'Pas tout, mais beaucoup !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l25-e12', prompt: 'What did Nicole do besides reading?', promptFr: 'Que a fait Nicole en plus de lire ?', options: ['She watched a film', 'She went swimming', 'She cooked'], optionsFr: ['Elle a regardé un film', 'Elle est allée nager', 'Elle a cuisiné'], answer: 0, explain: 'She says: “… und einen Film gesehen.”', explainFr: 'Elle dit : « … und einen Film gesehen. »', hint: 'Look for “gesehen”.', hintFr: 'Cherche « gesehen ».' } },

    { kind: 'wordgroup', title: 'Unregelmäßige Partizipien: ge…en', titleFr: 'Participes irréguliers : ge…en',
      note: 'Learn these by heart: the verb stem often changes.', noteFr: 'Apprends-les par cœur : le radical change souvent.',
      items: [
        word('l25-geschlafen', 'geschlafen', null, 'slept (schlafen)', 'dormi (schlafen)', ['ge', 'SCHLA', 'fen'], 'guh-SHLAH-fen', g('Ich habe acht Stunden geschlafen.', 'I slept eight hours.', 'J’ai dormi huit heures.')),
        word('l25-gegessen', 'gegessen', null, 'eaten (essen)', 'mangé (essen)', ['ge', 'GES', 'sen'], 'guh-GES-en', g('Ich habe Brot gegessen.', 'I ate bread.', 'J’ai mangé du pain.')),
        word('l25-getrunken', 'getrunken', null, 'drunk (trinken)', 'bu (trinken)', ['ge', 'TRUN', 'ken'], 'guh-TROON-ken', g('Ich habe Tee getrunken.', 'I drank tea.', 'J’ai bu du thé.')),
        word('l25-gelesen', 'gelesen', null, 'read (lesen)', 'lu (lesen)', ['ge', 'LE', 'sen'], 'guh-LAY-zen', g('Ich habe ein Buch gelesen.', 'I read a book.', 'J’ai lu un livre.')),
        word('l25-gesehen', 'gesehen', null, 'seen (sehen)', 'vu (sehen)', ['ge', 'SE', 'hen'], 'guh-ZAY-en', g('Ich habe einen Film gesehen.', 'I watched a film.', 'J’ai vu un film.')),
        word('l25-verstanden', 'verstanden', null, 'understood (verstehen)', 'compris (verstehen)', ['ver', 'STAN', 'den'], 'fair-SHTAHN-den', g('Ich habe alles verstanden.', 'I understood everything.', 'J’ai tout compris.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l25-perfekt-unregelmaessig', title: 'Irregular participles and verbs without ge-', titleFr: 'Participes irréguliers et verbes sans ge-',
      lead: 'Irregular verbs end in -en and often change the stem. Verbs with be-, ver-, er- and -ieren have no ge-.',
      leadFr: 'Les verbes irréguliers finissent en -en et changent souvent de radical. Les verbes en be-, ver-, er- et -ieren n’ont pas de ge-.',
      explanationMd: '**Irregular (strong) verbs** make the participle with **ge-** and **-en**, and the **stem often changes**: **trinken → getrunken**, **essen → gegessen**, **sehen → gesehen**. There is no rule: learn each participle with its verb. **No ge-** with **inseparable prefixes** (**be-, ver-, er-**) and with verbs in **-ieren**: **verstehen → verstanden**, **passieren → passiert**. The frame is the same: **haben** second, participle last.',
      explanationMdFr: 'Les **verbes irréguliers (forts)** forment le participe avec **ge-** et **-en**, et le **radical change souvent** : **trinken → getrunken**, **essen → gegessen**, **sehen → gesehen**. Il n’y a pas de règle : apprends chaque participe avec son verbe. **Pas de ge-** avec les **préfixes inséparables** (**be-, ver-, er-**) et les verbes en **-ieren** : **verstehen → verstanden**, **passieren → passiert**. Le cadre est le même : **haben** en deuxième, participe en dernier.',
      tables: [{ title: 'Irregular participles', titleFr: 'Participes irréguliers', headers: ['Infinitive', 'Participle', 'Example'], headersFr: ['Infinitif', 'Participe', 'Exemple'],
        rows: [['schlafen', 'geschlafen', 'Ich habe lange geschlafen.'], ['essen', 'gegessen', 'Ich habe Brot gegessen.'], ['trinken', 'getrunken', 'Ich habe Tee getrunken.'], ['lesen', 'gelesen', 'Ich habe ein Buch gelesen.'], ['sehen', 'gesehen', 'Ich habe einen Film gesehen.'], ['verstehen', 'verstanden (no ge-)', 'Ich habe alles verstanden.']],
        rowsFr: [['schlafen', 'geschlafen', 'Ich habe lange geschlafen.'], ['essen', 'gegessen', 'Ich habe Brot gegessen.'], ['trinken', 'getrunken', 'Ich habe Tee getrunken.'], ['lesen', 'gelesen', 'Ich habe ein Buch gelesen.'], ['sehen', 'gesehen', 'Ich habe einen Film gesehen.'], ['verstehen', 'verstanden (sans ge-)', 'Ich habe alles verstanden.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'Tee', role: 'accusative' }, { text: 'getrunken.', role: 'verb' }], en: 'I drank tea.', fr: 'J’ai bu du thé.' },
        { parts: [{ text: 'Hast', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'alles', role: 'accusative' }, { text: 'verstanden?', role: 'verb' }], en: 'Did you understand everything?', fr: 'As-tu tout compris ?' },
      ],
      contrast: {
        a: { label: 'with ge-', labelFr: 'avec ge-', note: 'most verbs', noteFr: 'la plupart des verbes', examples: [g('Ich habe ein Buch gelesen.', 'I read a book.', 'J’ai lu un livre.'), g('Ich habe lange geschlafen.', 'I slept for a long time.', 'J’ai dormi longtemps.')] },
        b: { label: 'without ge-', labelFr: 'sans ge-', note: 'be-, ver-, er-, -ieren', noteFr: 'be-, ver-, er-, -ieren', examples: [g('Ich habe alles verstanden.', 'I understood everything.', 'J’ai tout compris.'), g('Was ist passiert?', 'What happened?', 'Que s’est-il passé ?')] },
      },
      examples: [
        g('Gestern habe ich Brot gegessen und Tee getrunken.', 'Yesterday I ate bread and drank tea.', 'Hier, j’ai mangé du pain et bu du thé.'),
        g('Ich habe ein Buch gelesen.', 'I read a book.', 'J’ai lu un livre.'),
        g('Ich habe einen Film gesehen.', 'I watched a film.', 'J’ai vu un film.'),
        g('Hast du alles verstanden?', 'Did you understand everything?', 'As-tu tout compris ?'),
        g('Ich habe acht Stunden geschlafen.', 'I slept eight hours.', 'J’ai dormi huit heures.'),
        g('Wir haben Kaffee getrunken.', 'We drank coffee.', 'Nous avons bu du café.'),
        g('Er hat das nicht verstanden.', 'He did not understand that.', 'Il n’a pas compris cela.'),
      ],
      mistakes: [
        { wrong: 'Ich habe geessen.', right: 'Ich habe gegessen.', why: 'essen has an irregular participle: gegessen.', whyFr: 'essen a un participe irrégulier : gegessen.' },
        { wrong: 'Ich habe geverstanden.', right: 'Ich habe verstanden.', why: 'No ge- with the prefix ver-.', whyFr: 'Pas de ge- avec le préfixe ver-.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l25-e4', prompt: 'Ich habe Tee ___. (trinken)', promptFr: 'Ich habe Tee ___. (trinken)', answer: 'getrunken', hint: 'ge- + irregular stem + -en', hintFr: 'ge- + radical irrégulier + -en' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l25-e5', prompt: 'Ich habe alles ___. (verstehen)', promptFr: 'Ich habe alles ___. (verstehen)', answer: 'verstanden', hint: 'no ge-', hintFr: 'pas de ge-' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l25-e6', pairs: [{ de: 'essen', en: 'gegessen', fr: 'gegessen' }, { de: 'sehen', en: 'gesehen', fr: 'gesehen' }, { de: 'lesen', en: 'gelesen', fr: 'gelesen' }, { de: 'schlafen', en: 'geschlafen', fr: 'geschlafen' }], hint: 'Match each infinitive to its participle.', hintFr: 'Associe chaque infinitif à son participe.' } },

    // ───────────── 3 · sein-Perfekt ─────────────
    { kind: 'chapter', title: 'sein + Partizip', titleFr: 'sein + participe', blurb: 'Movement and change: fahren, bleiben, passieren.', blurbFr: 'Mouvement et changement : fahren, bleiben, passieren.' },

    { kind: 'situation', title: 'Wo warst du am Wochenende?', titleFr: 'Où étais-tu ce week-end ?',
      setting: 'Tom asks Nicole about her weekend trip.', settingFr: 'Tom interroge Nicole sur son voyage de week-end.',
      lines: [
        line('Tom', 'Wo warst du am Wochenende?', 'Where were you at the weekend?', 'Où étais-tu ce week-end ?'),
        line('Nicole', 'Ich bin nach Hamburg gefahren.', 'I went to Hamburg.', 'Je suis allée à Hambourg.'),
        line('Tom', 'Wie lange bist du geblieben?', 'How long did you stay?', 'Combien de temps es-tu restée ?'),
        line('Nicole', 'Zwei Tage. Es war schön, und nichts ist passiert.', 'Two days. It was lovely, and nothing happened.', 'Deux jours. C’était beau, et il ne s’est rien passé.'),
        line('Tom', 'Bist du mit dem Zug gefahren?', 'Did you go by train?', 'Y es-tu allée en train ?'),
        line('Nicole', 'Ja, mit dem Zug.', 'Yes, by train.', 'Oui, en train.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l25-e13', prompt: 'How did Nicole travel to Hamburg?', promptFr: 'Comment Nicole est-elle allée à Hambourg ?', options: ['By train', 'By car', 'By bus'], optionsFr: ['En train', 'En voiture', 'En bus'], answer: 0, explain: 'She says: “Ja, mit dem Zug.”', explainFr: 'Elle dit : « Ja, mit dem Zug. »', hint: 'Look at the last line.', hintFr: 'Regarde la dernière réplique.' } },

    { kind: 'wordgroup', title: 'Partizipien mit sein', titleFr: 'Participes avec sein',
      items: [
        word('l25-gefahren', 'gefahren', null, 'gone, driven (fahren)', 'allé, conduit (fahren)', ['ge', 'FA', 'ren'], 'guh-FAH-ren', g('Ich bin nach Hamburg gefahren.', 'I went to Hamburg.', 'Je suis allé à Hambourg.')),
        word('l25-geblieben', 'geblieben', null, 'stayed (bleiben)', 'resté (bleiben)', ['ge', 'BLIE', 'ben'], 'guh-BLEE-ben', g('Ich bin zwei Tage geblieben.', 'I stayed two days.', 'Je suis resté deux jours.')),
        word('l25-passiert', 'passiert', null, 'happened (passieren)', 'arrivé (passieren)', ['pas', 'SIERT'], 'pah-SEERT', g('Was ist passiert?', 'What happened?', 'Que s’est-il passé ?')),
      ] },

    { kind: 'grammar', note: {
      id: 'l25-perfekt-sein', title: 'sein + participle: movement and change', titleFr: 'sein + participe : mouvement et changement',
      lead: 'Verbs of movement and change use sein: Ich bin gefahren. Ich bin geblieben. Es ist passiert.',
      leadFr: 'Les verbes de mouvement et de changement utilisent sein : Ich bin gefahren. Ich bin geblieben. Es ist passiert.',
      explanationMd: 'Verbs that describe **movement from A to B** or a **change of state** use **sein** instead of haben: **fahren → ich bin gefahren**, **bleiben → ich bin geblieben**, **passieren → es ist passiert**. The rest stays the same: **sein** second, participle at the **end**. When in doubt, use **haben**.',
      explanationMdFr: 'Les verbes qui décrivent un **mouvement de A à B** ou un **changement d’état** utilisent **sein** au lieu de haben : **fahren → ich bin gefahren**, **bleiben → ich bin geblieben**, **passieren → es ist passiert**. Le reste ne change pas : **sein** en deuxième, participe à la **fin**. Dans le doute, utilise **haben**.',
      tables: [
        { title: 'sein (present) + participle', titleFr: 'sein (présent) + participe', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['bin', 'bist', 'ist', 'sind', 'seid', 'sind']], rowsFr: [['bin', 'bist', 'ist', 'sind', 'seid', 'sind']] },
        { title: 'haben or sein?', titleFr: 'haben ou sein ?', headers: ['With haben', 'With sein'], headersFr: ['Avec haben', 'Avec sein'],
          rows: [['Ich habe gearbeitet.', 'Ich bin gefahren.'], ['Ich habe Tee getrunken.', 'Ich bin zu Hause geblieben.'], ['Ich habe ein Buch gelesen.', 'Was ist passiert?']],
          rowsFr: [['Ich habe gearbeitet.', 'Ich bin gefahren.'], ['Ich habe Tee getrunken.', 'Ich bin zu Hause geblieben.'], ['Ich habe ein Buch gelesen.', 'Was ist passiert ?']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'nach Hamburg', role: 'place' }, { text: 'gefahren.', role: 'verb' }], en: 'I went to Hamburg.', fr: 'Je suis allée à Hambourg.' },
        { parts: [{ text: 'Wie lange', role: 'other' }, { text: 'bist', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'geblieben?', role: 'verb' }], en: 'How long did you stay?', fr: 'Combien de temps es-tu restée ?' },
      ],
      contrast: {
        a: { label: 'haben', labelFr: 'haben', note: 'actions with an object', noteFr: 'actions avec un objet', examples: [g('Ich habe Tee getrunken.', 'I drank tea.', 'J’ai bu du thé.'), g('Ich habe gearbeitet.', 'I worked.', 'J’ai travaillé.')] },
        b: { label: 'sein', labelFr: 'sein', note: 'movement and change', noteFr: 'mouvement et changement', examples: [g('Ich bin nach Hamburg gefahren.', 'I went to Hamburg.', 'Je suis allée à Hambourg.'), g('Was ist passiert?', 'What happened?', 'Que s’est-il passé ?')] },
      },
      examples: [
        g('Ich bin nach Hamburg gefahren.', 'I went to Hamburg.', 'Je suis allée à Hambourg.'),
        g('Wie lange bist du geblieben?', 'How long did you stay?', 'Combien de temps es-tu restée ?'),
        g('Es war schön, und nichts ist passiert.', 'It was lovely, and nothing happened.', 'C’était beau, et il ne s’est rien passé.'),
        g('Bist du mit dem Zug gefahren?', 'Did you go by train?', 'Y es-tu allée en train ?'),
        g('Wir sind zu Hause geblieben.', 'We stayed at home.', 'Nous sommes restés à la maison.'),
        g('Was ist gestern passiert?', 'What happened yesterday?', 'Que s’est-il passé hier ?'),
        g('Er ist nach Wien gefahren.', 'He went to Vienna.', 'Il est allé à Vienne.'),
      ],
      mistakes: [
        { wrong: 'Ich habe nach Hamburg gefahren.', right: 'Ich bin nach Hamburg gefahren.', why: 'Movement from A to B takes sein.', whyFr: 'Un mouvement de A à B prend sein.' },
        { wrong: 'Ich habe zu Hause geblieben.', right: 'Ich bin zu Hause geblieben.', why: 'bleiben takes sein.', whyFr: 'bleiben prend sein.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l25-e7', prompt: 'Ich ___ nach Hamburg gefahren. (sein)', promptFr: 'Ich ___ nach Hamburg gefahren. (sein)', answer: 'bin', hint: 'movement: sein', hintFr: 'mouvement : sein' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l25-e8', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Wir sind zu Hause geblieben.', 'Wir haben zu Hause geblieben.', 'Wir sind zu Hause gebleiben.'], answer: 0, explain: 'bleiben takes sein, and the participle is geblieben.', explainFr: 'bleiben prend sein, et le participe est geblieben.', hint: 'sein + geblieben.', hintFr: 'sein + geblieben.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l25-e9', tokens: ['bist', 'du', 'geblieben', 'lange', 'Wie'], answer: ['Wie', 'lange', 'bist', 'du', 'geblieben'], hint: 'W-question: sein second.', hintFr: 'Question en W : sein en deuxième.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l25-e10', prompt: 'Listen. What happened?', promptFr: 'Écoute. Que s’est-il passé ?', audio: { ttsText: 'Ich habe gestern lange geschlafen und dann bin ich zum Bahnhof gefahren.' }, options: ['She slept, then went to the station', 'She worked, then went home', 'She read a book'], optionsFr: ['Elle a dormi, puis elle est allée à la gare', 'Elle a travaillé, puis elle est rentrée', 'Elle a lu un livre'], answer: 0, hint: 'geschlafen … gefahren', hintFr: 'geschlafen … gefahren' } },

    { kind: 'wrapup',
      summary: 'You can now tell about the past with the **Perfekt**: **haben + participle** (**gelernt, gegessen, verstanden**) and **sein + participle** (**gefahren, geblieben, passiert**). 🎉',
      summaryFr: 'Tu sais maintenant raconter le passé avec le **Perfekt** : **haben + participe** (**gelernt, gegessen, verstanden**) et **sein + participe** (**gefahren, geblieben, passiert**). 🎉',
      card: { title: 'The first Perfekt on one page', titleFr: 'Le premier Perfekt en une page', sections: [
        { heading: 'Structure', headingFr: 'Structure', rows: [g('haben / sein second, participle at the end', 'the frame', 'le cadre'), g('Gestern habe ich Deutsch gelernt.', 'time first, verb still second', 'temps en premier, verbe toujours en deuxième')] },
        { heading: 'Participles', headingFr: 'Participes', rows: [g('lernen → gelernt · machen → gemacht · arbeiten → gearbeitet', 'regular: ge-…-t', 'régulier : ge-…-t'), g('essen → gegessen · trinken → getrunken · sehen → gesehen', 'irregular: ge-…-en', 'irrégulier : ge-…-en'), g('verstehen → verstanden · passieren → passiert', 'no ge-', 'sans ge-')] },
        { heading: 'sein', headingFr: 'sein', rows: [g('fahren → ich bin gefahren', 'movement', 'mouvement'), g('bleiben → ich bin geblieben', 'staying', 'rester'), g('passieren → es ist passiert', 'happening', 'arriver')] },
      ] } },
  ],
};
