import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A1 lesson: work, school and learning German (official A1 themes "Arbeit/Beruf" and "Erziehung/Ausbildung/Lernen").
// It also teaches the dative pronouns and verbs the official A1 grammar list asks for (helfen, danken, gehören).
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const lektion23: Lesson = {
  id: 'l23', level: 'A1', module: 2, number: 11,
  title: { de: 'Arbeit, Schule und Deutsch lernen', en: 'Work, school and learning German', fr: 'Travail, école et apprendre l’allemand' },
  theme: 'Workplace, course, how often, and verbs with the dative',
  themeFr: 'Lieu de travail, cours, fréquence, et verbes avec le datif',
  goals: ['Say where, as what and when you work', 'Talk about a course and how often you do things', 'Use helfen, danken and gehören with mir, dir, ihm, ihr'],
  goalsFr: ['Dire où, comme quoi et quand tu travailles', 'Parler d’un cours et de la fréquence', 'Utiliser helfen, danken et gehören avec mir, dir, ihm, ihr'],
  canDo: g('Ich kann sagen, wo und wann ich arbeite oder lerne, und über das Deutschlernen sprechen.', 'I can say where and when I work or study and talk about learning German.', 'Je sais dire où et quand je travaille ou j’étudie et parler de l’apprentissage de l’allemand.'),
  steps: [
    { kind: 'intro', title: 'Arbeit und Lernen 💼', titleFr: 'Travail et apprentissage 💼',
      scene: 'Tom and Nicole talk about work, their German course and how they learn.', sceneFr: 'Tom et Nicole parlent du travail, de leur cours d’allemand et de leur façon d’apprendre.',
      goals: ['Work: bei, als, von … bis', 'School: how often, jeden Tag, immer, oft, nie', 'Dative: Sie hilft mir. Das Buch gehört dir.'],
      goalsFr: ['Travail : bei, als, von … bis', 'École : fréquence, jeden Tag, immer, oft, nie', 'Datif : Sie hilft mir. Das Buch gehört dir.'] },

    // ───────────── 1 · Work ─────────────
    { kind: 'chapter', title: 'Arbeit', titleFr: 'Le travail', blurb: 'Where do you work? As what? When?', blurbFr: 'Où travailles-tu ? Comme quoi ? Quand ?' },

    { kind: 'situation', title: 'Wo arbeitest du?', titleFr: 'Où travailles-tu ?',
      setting: 'Tom asks Nicole about her work.', settingFr: 'Tom interroge Nicole sur son travail.',
      lines: [
        line('Tom', 'Wo arbeitest du, Nicole?', 'Where do you work, Nicole?', 'Où travailles-tu, Nicole ?'),
        line('Nicole', 'Ich arbeite bei einer Zeitung. Ich bin Journalistin.', 'I work at a newspaper. I am a journalist.', 'Je travaille dans un journal. Je suis journaliste.'),
        line('Tom', 'Von wann bis wann arbeitest du?', 'From when to when do you work?', 'De quand à quand travailles-tu ?'),
        line('Nicole', 'Von neun bis fünf. Am Freitag arbeite ich nur bis zwölf.', 'From nine to five. On Friday I only work until twelve.', 'De neuf à dix-sept heures. Le vendredi, je ne travaille que jusqu’à midi.'),
        line('Tom', 'Und dein Chef? Ist er nett?', 'And your boss? Is he nice?', 'Et ton chef ? Est-il sympa ?'),
        line('Nicole', 'Ja, mein Chef und meine Kollegen sind sehr nett.', 'Yes, my boss and my colleagues are very nice.', 'Oui, mon chef et mes collègues sont très sympathiques.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l23-e11', prompt: 'Until when does Nicole work on Friday?', promptFr: 'Jusqu’à quelle heure Nicole travaille-t-elle le vendredi ?', options: ['Until twelve', 'Until five', 'Until nine'], optionsFr: ['Jusqu’à midi', 'Jusqu’à dix-sept heures', 'Jusqu’à neuf heures'], answer: 0, explain: 'She says: “Am Freitag arbeite ich nur bis zwölf.”', explainFr: 'Elle dit : « Am Freitag arbeite ich nur bis zwölf. »', hint: 'Look for “Freitag”.', hintFr: 'Cherche « Freitag ».' } },

    { kind: 'wordgroup', title: 'Am Arbeitsplatz', titleFr: 'Sur le lieu de travail',
      items: [
        word('l23-arbeit', 'die Arbeit', 'die', 'the work, the job', 'le travail', ['AR', 'beit'], 'dee AR-bite', g('Die Arbeit beginnt um neun.', 'Work starts at nine.', 'Le travail commence à neuf heures.')),
        word('l23-chef', 'der Chef', 'der', 'the boss', 'le chef', ['CHEF'], 'dair SHEF', g('Mein Chef ist nett.', 'My boss is nice.', 'Mon chef est sympa.')),
        word('l23-kollege', 'der Kollege', 'der', 'the colleague (male)', 'le collègue', ['kol', 'LE', 'ge'], 'dair ko-LAY-guh', g('Mein Kollege heißt Tom.', 'My colleague is called Tom.', 'Mon collègue s’appelle Tom.')),
        word('l23-firma', 'die Firma', 'die', 'the company', 'l’entreprise', ['FIR', 'ma'], 'dee FIR-mah', g('Die Firma ist in Berlin.', 'The company is in Berlin.', 'L’entreprise est à Berlin.')),
        word('l23-buero', 'das Büro', 'das', 'the office', 'le bureau', ['bü', 'RO'], 'dahs bue-ROH', g('Das Büro ist im Erdgeschoss.', 'The office is on the ground floor.', 'Le bureau est au rez-de-chaussée.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l23-arbeit', title: 'Work: arbeiten bei, als and von … bis', titleFr: 'Travail : arbeiten bei, als et von … bis',
      lead: 'bei + employer, als + job, in + place, von … bis for the hours.',
      leadFr: 'bei + employeur, als + métier, in + lieu, von … bis pour les horaires.',
      explanationMd: 'Say **where you work** with **bei** + the **employer**: **bei einer Zeitung, bei Siemens** (**bei** always takes the **dative**). Say **as what** with **als** + job (no article): **als Journalistin**. For a **town** use **in**: **in Berlin**. The **hours** are **von … bis**: **von neun bis fünf**.',
      explanationMdFr: 'Dis **où tu travailles** avec **bei** + l’**employeur** : **bei einer Zeitung, bei Siemens** (**bei** prend toujours le **datif**). Dis **comme quoi** avec **als** + métier (sans article) : **als Journalistin**. Pour une **ville**, utilise **in** : **in Berlin**. Les **horaires** se disent **von … bis** : **von neun bis fünf**.',
      tables: [{ title: 'Talking about work', titleFr: 'Parler du travail', headers: ['You want to say', 'German'], headersFr: ['Tu veux dire', 'Allemand'],
        rows: [['the employer', 'Ich arbeite bei einer Zeitung.'], ['the job', 'Ich arbeite als Journalistin.'], ['the town', 'Ich arbeite in Berlin.'], ['the hours', 'Ich arbeite von neun bis fünf.'], ['until', 'Am Freitag arbeite ich nur bis zwölf.']],
        rowsFr: [['l’employeur', 'Ich arbeite bei einer Zeitung.'], ['le métier', 'Ich arbeite als Journalistin.'], ['la ville', 'Ich arbeite in Berlin.'], ['les horaires', 'Ich arbeite von neun bis fünf.'], ['jusqu’à', 'Am Freitag arbeite ich nur bis zwölf.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'arbeite', role: 'verb' }, { text: 'bei einer Zeitung.', role: 'dative' }], en: 'I work at a newspaper.', fr: 'Je travaille dans un journal.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'arbeite', role: 'verb' }, { text: 'von neun bis fünf.', role: 'time' }], en: 'I work from nine to five.', fr: 'Je travaille de neuf à dix-sept heures.' },
      ],
      contrast: {
        a: { label: 'bei + employer', labelFr: 'bei + employeur', note: 'bei einer Zeitung, bei Siemens', noteFr: 'bei einer Zeitung, bei Siemens', examples: [g('Ich arbeite bei Siemens.', 'I work at Siemens.', 'Je travaille chez Siemens.'), g('Er arbeitet bei einer Bank.', 'He works at a bank.', 'Il travaille dans une banque.')] },
        b: { label: 'in + town', labelFr: 'in + ville', note: 'in Berlin, in Hamburg', noteFr: 'in Berlin, in Hamburg', examples: [g('Ich arbeite in Berlin.', 'I work in Berlin.', 'Je travaille à Berlin.'), g('Sie arbeitet in Wien.', 'She works in Vienna.', 'Elle travaille à Vienne.')] },
      },
      examples: [
        g('Ich arbeite bei einer Zeitung.', 'I work at a newspaper.', 'Je travaille dans un journal.'),
        g('Ich arbeite von neun bis fünf.', 'I work from nine to five.', 'Je travaille de neuf à dix-sept heures.'),
        g('Mein Chef und meine Kollegen sind nett.', 'My boss and colleagues are nice.', 'Mon chef et mes collègues sont sympas.'),
        g('Das Büro ist in der Firma im Erdgeschoss.', 'The office is in the company on the ground floor.', 'Le bureau est dans l’entreprise au rez-de-chaussée.'),
        g('Er arbeitet bei einer Bank in Berlin.', 'He works at a bank in Berlin.', 'Il travaille dans une banque à Berlin.'),
        g('Am Freitag arbeite ich nur bis zwölf.', 'On Friday I only work until twelve.', 'Le vendredi, je ne travaille que jusqu’à midi.'),
      ],
      mistakes: [
        { wrong: 'Ich arbeite in Siemens.', right: 'Ich arbeite bei Siemens.', why: 'For an employer use bei, not in.', whyFr: 'Pour un employeur, utilise bei, pas in.' },
        { wrong: 'Ich arbeite von neun zu fünf.', right: 'Ich arbeite von neun bis fünf.', why: 'The pair is von … bis.', whyFr: 'Le couple est von … bis.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l23-e1', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Ich arbeite bei Siemens.', 'Ich arbeite in Siemens.', 'Ich arbeite an Siemens.'], answer: 0, explain: 'bei + employer.', explainFr: 'bei + employeur.', hint: 'Siemens is a company, not a town.', hintFr: 'Siemens est une entreprise, pas une ville.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l23-e2', prompt: 'Ich arbeite von neun ___ fünf.', promptFr: 'Ich arbeite von neun ___ fünf.', answer: 'bis', hint: 'von … ?', hintFr: 'von … ?' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l23-e3', prompt: 'Er arbeitet ___ einer Bank. (at)', promptFr: 'Er arbeitet ___ einer Bank. (dans)', answer: 'bei', hint: 'employer', hintFr: 'employeur' } },

    // ───────────── 2 · Course and frequency ─────────────
    { kind: 'chapter', title: 'Kurs und Häufigkeit', titleFr: 'Le cours et la fréquence', blurb: 'How often do you study?', blurbFr: 'À quelle fréquence étudies-tu ?' },

    { kind: 'situation', title: 'Im Deutschkurs', titleFr: 'Au cours d’allemand',
      setting: 'Frau Roth welcomes the class and explains the course.', settingFr: 'Mme Roth accueille la classe et explique le cours.',
      lines: [
        line('Frau Roth', 'Willkommen im Deutschkurs! Der Unterricht beginnt um neun Uhr.', 'Welcome to the German course! Lessons start at nine o’clock.', 'Bienvenue au cours d’allemand ! Le cours commence à neuf heures.'),
        line('Ben', 'Wie lange dauert der Kurs?', 'How long does the course last?', 'Combien de temps dure le cours ?'),
        line('Frau Roth', 'Der Kurs dauert drei Monate. Es gibt jeden Tag Hausaufgaben.', 'The course lasts three months. There is homework every day.', 'Le cours dure trois mois. Il y a des devoirs tous les jours.'),
        line('Nicole', 'Und wann ist die Prüfung?', 'And when is the exam?', 'Et quand est l’examen ?'),
        line('Frau Roth', 'Die Prüfung ist im Juli. Ihr müsst oft üben!', 'The exam is in July. You must practise often!', 'L’examen est en juillet. Vous devez souvent vous entraîner !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l23-e12', prompt: 'When is the exam?', promptFr: 'Quand est l’examen ?', options: ['In July', 'In three months', 'Every day'], optionsFr: ['En juillet', 'Dans trois mois', 'Tous les jours'], answer: 0, explain: 'Frau Roth says: “Die Prüfung ist im Juli.”', explainFr: 'Mme Roth dit : « Die Prüfung ist im Juli. »', hint: 'Look for “Prüfung”.', hintFr: 'Cherche « Prüfung ».' } },

    { kind: 'wordgroup', title: 'Schule und Kurs', titleFr: 'École et cours',
      items: [
        word('l23-kurs', 'der Kurs', 'der', 'the course', 'le cours (formation)', ['KURS'], 'dair KOORS', g('Der Kurs beginnt am Montag.', 'The course starts on Monday.', 'Le cours commence lundi.')),
        word('l23-unterricht', 'der Unterricht', 'der', 'the lesson, teaching', 'le cours, l’enseignement', ['UN', 'ter', 'richt'], 'dair OON-ter-rikht', g('Der Unterricht ist interessant.', 'The lesson is interesting.', 'Le cours est intéressant.')),
        word('l23-hausaufgabe', 'die Hausaufgabe', 'die', 'the homework', 'le devoir', ['HAUS', 'auf', 'ga', 'be'], 'dee HOWS-owf-gah-buh', g('Ich mache die Hausaufgabe.', 'I do the homework.', 'Je fais le devoir.')),
        word('l23-pruefung', 'die Prüfung', 'die', 'the exam', 'l’examen', ['PRÜ', 'fung'], 'dee PRUE-foong', g('Die Prüfung ist im Juli.', 'The exam is in July.', 'L’examen est en juillet.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l23-haeufigkeit', title: 'How often? immer, oft, manchmal, nie', titleFr: 'À quelle fréquence ? immer, oft, manchmal, nie',
      lead: 'Frequency words go after the verb. At the start of the sentence, the verb stays second.',
      leadFr: 'Les mots de fréquence se placent après le verbe. Au début de la phrase, le verbe reste en deuxième.',
      explanationMd: 'Frequency words answer **Wie oft?** (how often?): **immer** (always), **oft** (often), **manchmal** (sometimes), **selten** (rarely), **nie** (never). They stand **right after the verb**: **Ich lerne oft.** At the **start** of the sentence the **verb stays second**: **Oft lerne ich.** For “every day / week” use **jeden Tag, jede Woche** (the accusative, so **jeden** for a **der** word).',
      explanationMdFr: 'Les mots de fréquence répondent à **Wie oft ?** (à quelle fréquence ?) : **immer** (toujours), **oft** (souvent), **manchmal** (parfois), **selten** (rarement), **nie** (jamais). Ils se placent **juste après le verbe** : **Ich lerne oft.** Au **début** de la phrase, le **verbe reste en deuxième** : **Oft lerne ich.** Pour « tous les jours / semaines », utilise **jeden Tag, jede Woche** (l’accusatif, donc **jeden** pour un mot en **der**).',
      tables: [{ title: 'How often?', titleFr: 'À quelle fréquence ?', headers: ['German', 'Meaning', 'Example'], headersFr: ['Allemand', 'Sens', 'Exemple'],
        rows: [['immer', 'always', 'Ich lerne immer abends.'], ['oft', 'often', 'Wir üben oft.'], ['manchmal', 'sometimes', 'Manchmal habe ich frei.'], ['selten', 'rarely', 'Ich komme selten zu spät.'], ['nie', 'never', 'Ich arbeite nie am Sonntag.'], ['jeden Tag', 'every day', 'Es gibt jeden Tag Hausaufgaben.']],
        rowsFr: [['immer', 'toujours', 'Ich lerne immer abends.'], ['oft', 'souvent', 'Wir üben oft.'], ['manchmal', 'parfois', 'Manchmal habe ich frei.'], ['selten', 'rarement', 'Ich komme selten zu spät.'], ['nie', 'jamais', 'Ich arbeite nie am Sonntag.'], ['jeden Tag', 'tous les jours', 'Es gibt jeden Tag Hausaufgaben.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'lerne', role: 'verb' }, { text: 'oft', role: 'time' }, { text: 'Deutsch.', role: 'accusative' }], en: 'I often learn German.', fr: 'J’apprends souvent l’allemand.' },
        { parts: [{ text: 'Jeden Tag', role: 'time' }, { text: 'lerne', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'Deutsch.', role: 'accusative' }], en: 'Every day I learn German.', fr: 'Tous les jours, j’apprends l’allemand.' },
      ],
      contrast: {
        a: { label: 'After the verb', labelFr: 'Après le verbe', note: 'Ich lerne oft.', noteFr: 'Ich lerne oft.', examples: [g('Wir üben oft.', 'We often practise.', 'Nous nous entraînons souvent.'), g('Ich arbeite nie am Sonntag.', 'I never work on Sunday.', 'Je ne travaille jamais le dimanche.')] },
        b: { label: 'At the start', labelFr: 'Au début', note: 'Oft lerne ich. Verb stays second.', noteFr: 'Oft lerne ich. Le verbe reste en deuxième.', examples: [g('Oft üben wir.', 'We practise often.', 'Nous nous entraînons souvent.'), g('Manchmal habe ich frei.', 'Sometimes I have time off.', 'Parfois j’ai congé.')] },
      },
      examples: [
        g('Es gibt jeden Tag Hausaufgaben.', 'There is homework every day.', 'Il y a des devoirs tous les jours.'),
        g('Ihr müsst oft üben!', 'You must practise often!', 'Vous devez souvent vous entraîner !'),
        g('Ich lerne immer abends.', 'I always study in the evening.', 'J’étudie toujours le soir.'),
        g('Manchmal habe ich frei.', 'Sometimes I have time off.', 'Parfois j’ai congé.'),
        g('Ich komme selten zu spät.', 'I rarely come late.', 'Je viens rarement en retard.'),
        g('Ich arbeite nie am Sonntag.', 'I never work on Sunday.', 'Je ne travaille jamais le dimanche.'),
      ],
      mistakes: [
        { wrong: 'Ich nie arbeite am Sonntag.', right: 'Ich arbeite nie am Sonntag.', why: 'Frequency words stand after the verb.', whyFr: 'Les mots de fréquence se placent après le verbe.' },
        { wrong: 'Ich lerne jede Tag Deutsch.', right: 'Ich lerne jeden Tag Deutsch.', why: 'Tag is a der word: jeden.', whyFr: 'Tag est un mot en der : jeden.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l23-e4', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Ich arbeite nie am Sonntag.', 'Ich nie arbeite am Sonntag.', 'Nie ich arbeite am Sonntag.'], answer: 0, explain: 'The frequency word stands after the verb.', explainFr: 'Le mot de fréquence se place après le verbe.', hint: 'Verb second.', hintFr: 'Verbe en deuxième.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l23-e5', prompt: 'Es gibt ___ Tag Hausaufgaben. (every)', promptFr: 'Es gibt ___ Tag Hausaufgaben. (chaque)', answer: 'jeden', hint: 'Tag is a der word', hintFr: 'Tag est un mot en der' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l23-e6', tokens: ['üben', 'oft', 'Wir'], answer: ['Wir', 'üben', 'oft'], hint: 'Subject, verb, frequency word.', hintFr: 'Sujet, verbe, mot de fréquence.' } },

    // ───────────── 3 · Dative verbs ─────────────
    { kind: 'chapter', title: 'Deutsch lernen: helfen, danken, gehören', titleFr: 'Apprendre l’allemand : helfen, danken, gehören', blurb: 'Some verbs take a person in the dative.', blurbFr: 'Certains verbes prennent une personne au datif.' },

    { kind: 'situation', title: 'Wie lernst du Deutsch?', titleFr: 'Comment apprends-tu l’allemand ?',
      setting: 'Tom asks Nicole how she studies.', settingFr: 'Tom demande à Nicole comment elle étudie.',
      lines: [
        line('Tom', 'Wie lernst du Deutsch, Nicole?', 'How do you learn German, Nicole?', 'Comment apprends-tu l’allemand, Nicole ?'),
        line('Nicole', 'Ich höre jeden Tag Podcasts und ich lese kurze Texte.', 'I listen to podcasts every day and I read short texts.', 'J’écoute des podcasts tous les jours et je lis de courts textes.'),
        line('Tom', 'Sprichst du auch viel?', 'Do you also speak a lot?', 'Parles-tu aussi beaucoup ?'),
        line('Nicole', 'Ja, mit meiner Nachbarin. Sie hilft mir.', 'Yes, with my neighbour. She helps me.', 'Oui, avec ma voisine. Elle m’aide.'),
        line('Tom', 'Super! Ich danke dir für den Tipp. Das Buch gehört dir, oder?', 'Great! Thanks for the tip. The book is yours, isn’t it?', 'Super ! Merci pour le conseil. Le livre est à toi, non ?'),
        line('Nicole', 'Ja, es gehört mir. Du kannst es haben.', 'Yes, it’s mine. You can have it.', 'Oui, il est à moi. Tu peux le prendre.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l23-e13', prompt: 'Who helps Nicole?', promptFr: 'Qui aide Nicole ?', options: ['Her neighbour', 'Her boss', 'Tom'], optionsFr: ['Sa voisine', 'Son chef', 'Tom'], answer: 0, explain: 'She says: “Mit meiner Nachbarin. Sie hilft mir.”', explainFr: 'Elle dit : « Mit meiner Nachbarin. Sie hilft mir. »', hint: 'Look for “hilft”.', hintFr: 'Cherche « hilft ».' } },

    { kind: 'wordgroup', title: 'Deutsch lernen', titleFr: 'Apprendre l’allemand',
      items: [
        word('l23-lernen', 'lernen', null, 'to learn', 'apprendre', ['LER', 'nen'], 'LAIR-nen', g('Ich lerne jeden Tag Deutsch.', 'I learn German every day.', 'J’apprends l’allemand tous les jours.')),
        word('l23-ueben', 'üben', null, 'to practise', 's’entraîner', ['Ü', 'ben'], 'UE-ben', g('Wir üben oft zusammen.', 'We often practise together.', 'Nous nous entraînons souvent ensemble.')),
        word('l23-lesen', 'lesen', null, 'to read', 'lire', ['LE', 'sen'], 'LAY-zen', g('Ich lese kurze Texte.', 'I read short texts.', 'Je lis de courts textes.')),
        word('l23-hoeren', 'hören', null, 'to listen, to hear', 'écouter, entendre', ['HÖ', 'ren'], 'HER-ren', g('Ich höre jeden Tag Musik.', 'I listen to music every day.', 'J’écoute de la musique tous les jours.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l23-dativ-verben', title: 'helfen, danken, gehören and the dative pronouns', titleFr: 'helfen, danken, gehören et les pronoms au datif',
      lead: 'These verbs take the person in the dative: mir, dir, ihm, ihr, uns, euch, ihnen.',
      leadFr: 'Ces verbes prennent la personne au datif : mir, dir, ihm, ihr, uns, euch, ihnen.',
      explanationMd: 'A few verbs take the **person** in the **dative** instead of the accusative: **helfen** (to help), **danken** (to thank), **gehören** (to belong to), and the phrase **es geht mir gut**. Learn the **dative pronouns**: **mir, dir, ihm, ihr, uns, euch, ihnen / Ihnen**. You already met **mir** and **Ihnen** in lesson 1 (**Und dir? Wie geht es Ihnen?**).',
      explanationMdFr: 'Quelques verbes prennent la **personne** au **datif** au lieu de l’accusatif : **helfen** (aider), **danken** (remercier), **gehören** (appartenir à), et l’expression **es geht mir gut**. Apprends les **pronoms au datif** : **mir, dir, ihm, ihr, uns, euch, ihnen / Ihnen**. Tu as déjà rencontré **mir** et **Ihnen** à la leçon 1 (**Und dir ? Wie geht es Ihnen ?**).',
      tables: [{ title: 'Dative pronouns', titleFr: 'Pronoms au datif', headers: ['Subject', 'ich', 'du', 'er / es', 'sie', 'wir', 'ihr', 'sie / Sie'], headersFr: ['Sujet', 'ich', 'du', 'er / es', 'sie', 'wir', 'ihr', 'sie / Sie'],
        rows: [['Dative', 'mir', 'dir', 'ihm', 'ihr', 'uns', 'euch', 'ihnen / Ihnen']], rowsFr: [['Datif', 'mir', 'dir', 'ihm', 'ihr', 'uns', 'euch', 'ihnen / Ihnen']], highlightCol: 1 },
        { title: 'Verbs with the dative', titleFr: 'Verbes avec le datif', headers: ['Verb', 'Example'], headersFr: ['Verbe', 'Exemple'],
          rows: [['helfen', 'Sie hilft mir.'], ['danken', 'Ich danke dir.'], ['gehören', 'Das Buch gehört mir.'], ['es geht', 'Es geht mir gut.']],
          rowsFr: [['helfen', 'Sie hilft mir.'], ['danken', 'Ich danke dir.'], ['gehören', 'Das Buch gehört mir.'], ['es geht', 'Es geht mir gut.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'hilft', role: 'verb' }, { text: 'mir.', role: 'dative' }], en: 'She helps me.', fr: 'Elle m’aide.' },
        { parts: [{ text: 'Das Buch', role: 'subject' }, { text: 'gehört', role: 'verb' }, { text: 'dir.', role: 'dative' }], en: 'The book belongs to you.', fr: 'Le livre est à toi.' },
      ],
      contrast: {
        a: { label: 'Accusative: dich, mich …', labelFr: 'Accusatif : dich, mich …', note: 'sehen, lieben, brauchen', noteFr: 'sehen, lieben, brauchen', examples: [g('Ich sehe dich.', 'I see you.', 'Je te vois.'), g('Ich liebe dich.', 'I love you.', 'Je t’aime.')] },
        b: { label: 'Dative: dir, mir …', labelFr: 'Datif : dir, mir …', note: 'helfen, danken, gehören', noteFr: 'helfen, danken, gehören', examples: [g('Ich helfe dir.', 'I help you.', 'Je t’aide.'), g('Ich danke dir.', 'I thank you.', 'Je te remercie.')] },
      },
      examples: [
        g('Sie hilft mir.', 'She helps me.', 'Elle m’aide.'),
        g('Ich danke dir für den Tipp.', 'I thank you for the tip.', 'Je te remercie pour le conseil.'),
        g('Das Buch gehört mir.', 'The book belongs to me.', 'Le livre est à moi.'),
        g('Wem gehört die Jacke?', 'Whose jacket is it?', 'À qui est la veste ?'),
        g('Es geht mir gut.', 'I am fine.', 'Je vais bien.'),
        g('Kann ich dir helfen?', 'Can I help you?', 'Puis-je t’aider ?'),
        g('Ich danke Ihnen sehr.', 'I thank you very much.', 'Je vous remercie beaucoup.'),
      ],
      mistakes: [
        { wrong: 'Ich helfe dich.', right: 'Ich helfe dir.', why: 'helfen takes the dative: dir.', whyFr: 'helfen prend le datif : dir.' },
        { wrong: 'Das Buch gehört mich.', right: 'Das Buch gehört mir.', why: 'gehören takes the dative: mir.', whyFr: 'gehören prend le datif : mir.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l23-e7', prompt: 'Sie hilft ___. (me)', promptFr: 'Sie hilft ___. (moi)', answer: 'mir', hint: 'dative of ich', hintFr: 'datif de ich' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l23-e8', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Ich danke dir.', 'Ich danke dich.', 'Ich danke du.'], answer: 0, explain: 'danken takes the dative: dir.', explainFr: 'danken prend le datif : dir.', hint: 'dative of du.', hintFr: 'datif de du.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l23-e9', pairs: [{ de: 'mir', en: 'to me', fr: 'à moi' }, { de: 'dir', en: 'to you (informal)', fr: 'à toi' }, { de: 'ihm', en: 'to him', fr: 'à lui' }, { de: 'ihr', en: 'to her', fr: 'à elle' }], hint: 'The dative pronouns.', hintFr: 'Les pronoms au datif.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l23-e10', prompt: 'Listen. Whose is the book?', promptFr: 'Écoute. À qui est le livre ?', audio: { ttsText: 'Das Buch gehört mir. Du kannst es haben.' }, options: ['The speaker’s', 'The listener’s', 'The teacher’s'], optionsFr: ['À celui qui parle', 'À celui qui écoute', 'À l’enseignant'], answer: 0, hint: 'gehört mir', hintFr: 'gehört mir' } },

    { kind: 'wrapup',
      summary: 'You can now say **where and as what you work**, talk about a course and **how often** you do things, and use **helfen, danken, gehören** with **mir, dir, ihm, ihr**. 🎉',
      summaryFr: 'Tu sais maintenant dire **où et comme quoi tu travailles**, parler d’un cours et de **la fréquence** de tes actions, et utiliser **helfen, danken, gehören** avec **mir, dir, ihm, ihr**. 🎉',
      card: { title: 'Work and learning on one page', titleFr: 'Travail et apprentissage en une page', sections: [
        { heading: 'Work', headingFr: 'Travail', rows: [g('bei einer Zeitung · als Journalistin · in Berlin', 'employer · job · town', 'employeur · métier · ville'), g('von neun bis fünf', 'the hours', 'les horaires')] },
        { heading: 'How often', headingFr: 'Fréquence', rows: [g('immer · oft · manchmal · selten · nie', 'always … never', 'toujours … jamais'), g('jeden Tag, jede Woche', 'every day, every week', 'tous les jours, toutes les semaines')] },
        { heading: 'Dative', headingFr: 'Datif', rows: [g('mir · dir · ihm · ihr · uns · euch · ihnen', 'to me … to them', 'à moi … à eux'), g('Sie hilft mir. Ich danke dir. Das Buch gehört mir.', 'helfen, danken, gehören', 'helfen, danken, gehören')] },
      ] } },
  ],
};
