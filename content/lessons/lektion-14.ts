import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion14: Lesson = {
  id: 'l14', level: 'A1', module: 2, number: 9,
  title: { de: 'Verabredungen und Wortstellung', en: 'Making plans & word order', fr: 'Rendez-vous et ordre des mots' },
  theme: 'Arranging to meet, time words, and verb position', themeFr: 'Fixer un rendez-vous, les indications de temps et la place du verbe',
  goals: ['Suggest a meeting and answer: accept, decline, be unsure', 'Keep the verb in position 2', 'Start a sentence with a time word (inversion)', 'Use am, um and von … bis for time'], goalsFr: ['Proposer un rendez-vous et répondre : accepter, refuser, hésiter', 'Garder le verbe en position 2', 'Commencer une phrase par une indication de temps (inversion)', 'Utiliser am, um et von … bis pour le temps'],
  canDo: g('Ich kann mich verabreden, zusagen und absagen und sagen, wann etwas stattfindet.', 'I can arrange to meet, accept and decline, and say when something happens.', 'Je sais fixer un rendez-vous, accepter, refuser et dire quand quelque chose a lieu.'),
  steps: [
    { kind: 'intro', title: 'Verabredungen 📅', titleFr: 'Rendez-vous 📅',
      scene: 'Two friends plan an evening out.', sceneFr: 'Deux amis organisent une soirée.',
      goals: ['Suggest a meeting, accept, decline or say “maybe”', 'Say when with am, um and von … bis', 'Keep the verb in second position, even after a time word'],
      goalsFr: ['Proposer un rendez-vous, accepter, refuser ou dire « peut-être »', 'Dire quand avec am, um et von … bis', 'Garder le verbe en deuxième position, même après un complément de temps'] },

    // ───────────── 1 · Arranging to meet ─────────────
    { kind: 'chapter', title: 'Sich verabreden', titleFr: 'Se donner rendez-vous', blurb: 'Suggest, accept, decline.', blurbFr: 'Proposer, accepter, refuser.' },

    { kind: 'situation', title: 'Hast du Zeit?', titleFr: 'As-tu le temps ?',
      setting: 'Yara asks Jonas if he has time for the cinema.', settingFr: 'Yara demande à Jonas s’il a le temps d’aller au cinéma.',
      lines: [
        line('Yara', 'Hast du am Samstag Zeit, Jonas?', 'Do you have time on Saturday, Jonas?', 'As-tu le temps samedi, Jonas ?'),
        line('Jonas', 'Leider nicht. Am Samstag arbeite ich. Aber am Sonntag habe ich Zeit.', 'Unfortunately not. On Saturday I work. But on Sunday I have time.', 'Hélas non. Le samedi, je travaille. Mais le dimanche, j’ai le temps.'),
        line('Yara', 'Super! Hast du Lust auf Kino?', 'Great! Do you feel like going to the cinema?', 'Super ! As-tu envie d’aller au cinéma ?'),
        line('Jonas', 'Ja, gern! Um wie viel Uhr beginnt der Film?', 'Yes, gladly! At what time does the film start?', 'Oui, volontiers ! À quelle heure commence le film ?'),
        line('Yara', 'Um 19 Uhr. Treffen wir uns um sechs vor dem Kino?', 'At 7 pm. Shall we meet at six in front of the cinema?', 'À 19 h. On se retrouve à six heures devant le cinéma ?'),
        line('Jonas', 'Gute Idee! Bis Sonntag.', 'Good idea! See you Sunday.', 'Bonne idée ! À dimanche.'),
      ],
      words: [{ id: 'l14-zeit', german: 'die Zeit', english: 'the time (to spare)', french: 'le temps (libre)', gender: 'die', syllables: ['ZEIT'], pronunciation: 'dee tsite', example: { de: 'Hast du morgen Zeit?', en: 'Do you have time tomorrow?', fr: 'Tu as du temps demain ?' } }, { id: 'l14-lust', german: 'die Lust', english: 'the desire / feeling like it', french: 'l’envie', gender: 'die', syllables: ['LUST'], pronunciation: 'dee loost', example: { de: 'Hast du Lust auf Kino?', en: 'Do you feel like going to the cinema?', fr: 'Tu as envie d’aller au cinéma ?' } }, { id: 'l14-treffen', german: 'treffen', english: 'to meet', french: 'rencontrer / retrouver', gender: null, syllables: ['TREF', 'fen'], pronunciation: 'TREF-fen', example: { de: 'Ich treffe Yara um sechs Uhr.', en: 'I meet Yara at six o’clock.', fr: 'Je retrouve Yara à six heures.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l14-e11', prompt: 'On which day does Jonas have time?', promptFr: 'Quel jour Jonas a-t-il le temps ?', options: ['Sunday', 'Saturday', 'Friday'], optionsFr: ['Dimanche', 'Samedi', 'Vendredi'], answer: 0, explain: 'He works on Saturday: “Aber am Sonntag habe ich Zeit.”', explainFr: 'Il travaille le samedi : « Aber am Sonntag habe ich Zeit. »', hint: 'Look at Jonas’s first answer.', hintFr: 'Regarde la première réponse de Jonas.' } },

    { kind: 'wordgroup', title: 'Verabredung und Antwort', titleFr: 'Rendez-vous et réponse',
      items: [{ id: 'l14-verabredung', german: 'die Verabredung', english: 'the date / arrangement to meet', french: 'le rendez-vous (entre amis)', gender: 'die', syllables: ['fer', 'AP', 're', 'dung'], pronunciation: 'dee fair-AHP-ray-doong', example: { de: 'Ich habe heute eine Verabredung.', en: 'I have plans to meet someone today.', fr: 'J’ai un rendez-vous aujourd’hui.' } }, { id: 'l14-termin', german: 'der Termin', english: 'the appointment', french: 'le rendez-vous (officiel)', gender: 'der', syllables: ['ter', 'MIN'], pronunciation: 'dair ter-MEEN', example: { de: 'Am Dienstag habe ich einen Termin.', en: 'On Tuesday I have an appointment.', fr: 'Mardi, j’ai un rendez-vous.' } }, { id: 'l14-leider', german: 'leider', english: 'unfortunately', french: 'malheureusement', gender: null, syllables: ['LEI', 'der'], pronunciation: 'LIE-der', example: { de: 'Leider habe ich keine Zeit.', en: 'Unfortunately I have no time.', fr: 'Malheureusement, je n’ai pas le temps.' } }, { id: 'l14-vielleicht', german: 'vielleicht', english: 'maybe / perhaps', french: 'peut-être', gender: null, syllables: ['viel', 'LEICHT'], pronunciation: 'fee-LIKHT', example: { de: 'Vielleicht habe ich am Freitag Zeit.', en: 'Maybe I have time on Friday.', fr: 'Peut-être que j’ai du temps vendredi.' } }] },

    { kind: 'grammar', note: {
      id: 'l14-verabreden', title: 'Suggest, accept, decline', titleFr: 'Proposer, accepter, refuser',
      lead: 'Learn these as ready-made phrases. keine Zeit and keine Lust use keine, because Zeit and Lust are nouns.',
      leadFr: 'Apprends-les comme des phrases toutes faites. keine Zeit et keine Lust utilisent keine, car Zeit et Lust sont des noms.',
      explanationMd: 'Most of what you need for a meeting comes as **fixed phrases**. **Treffen wir uns …?** (“Shall we meet?”) is a fixed question. **Lust haben auf** + noun means “to feel like” something.\n\nTo decline, **keine Zeit** and **keine Lust** use **keine**, because **Zeit** and **Lust** are nouns (lesson 7).',
      explanationMdFr: 'Presque tout ce qu’il faut pour un rendez-vous existe en **phrases toutes faites**. **Treffen wir uns … ?** (« On se retrouve ? ») est une question figée. **Lust haben auf** + nom signifie « avoir envie de » quelque chose.\n\nPour refuser, **keine Zeit** et **keine Lust** utilisent **keine**, car **Zeit** et **Lust** sont des noms (leçon 7).',
      tables: [{ title: 'Useful phrases', titleFr: 'Phrases utiles', headers: ['You want to …', 'You say'], headersFr: ['Tu veux …', 'Tu dis'],
        rows: [['suggest', 'Hast du Zeit? / Hast du Lust auf Kino? / Treffen wir uns um 18 Uhr?'], ['accept', 'Ja, gern! / Gute Idee! / Das passt.'], ['decline', 'Leider nicht. / Tut mir leid, ich habe keine Zeit.'], ['say maybe', 'Vielleicht. / Ich weiß noch nicht.']],
        rowsFr: [['proposer', 'Hast du Zeit? / Hast du Lust auf Kino? / Treffen wir uns um 18 Uhr?'], ['accepter', 'Ja, gern! / Gute Idee! / Das passt.'], ['refuser', 'Leider nicht. / Tut mir leid, ich habe keine Zeit.'], ['dire peut-être', 'Vielleicht. / Ich weiß noch nicht.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Hast', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'Lust', role: 'accusative' }, { text: 'auf Kino?', role: 'other' }], en: 'Do you feel like the cinema?', fr: 'As-tu envie d’aller au cinéma ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'keine Zeit.', role: 'accusative' }], en: 'I have no time.', fr: 'Je n’ai pas le temps.' },
      ],
      contrast: {
        a: { label: 'keine Zeit / keine Lust', labelFr: 'keine Zeit / keine Lust', note: 'negates a noun: keine', noteFr: 'nie un nom : keine', examples: [g('Ich habe keine Zeit.', 'I have no time.', 'Je n’ai pas le temps.'), g('Ich habe keine Lust.', 'I do not feel like it.', 'Je n’ai pas envie.')] },
        b: { label: 'nicht', labelFr: 'nicht', note: 'negates a verb', noteFr: 'nie un verbe', examples: [g('Ich komme nicht.', 'I am not coming.', 'Je ne viens pas.'), g('Leider nicht.', 'Unfortunately not.', 'Hélas non.')] },
      },
      examples: [
        g('Hast du am Sonntag Zeit? – Ja, gern!', 'Do you have time on Sunday? – Yes, gladly!', 'As-tu le temps dimanche ? – Oui, volontiers !'),
        g('Hast du Lust auf Kino? – Leider nicht, ich habe keine Zeit.', 'Do you feel like the cinema? – Unfortunately not, I have no time.', 'As-tu envie d’aller au cinéma ? – Hélas non, je n’ai pas le temps.'),
        g('Treffen wir uns um sechs? – Gute Idee!', 'Shall we meet at six? – Good idea!', 'On se retrouve à six heures ? – Bonne idée !'),
        g('Ich habe heute eine Verabredung.', 'I have a date today.', 'J’ai un rendez-vous aujourd’hui.'),
        g('Am Dienstag habe ich einen Termin.', 'On Tuesday I have an appointment.', 'Mardi, j’ai un rendez-vous.'),
        g('Vielleicht habe ich am Freitag Zeit.', 'Maybe I have time on Friday.', 'Peut-être que j’ai le temps vendredi.'),
        g('Leider habe ich keine Zeit.', 'Unfortunately I have no time.', 'Hélas, je n’ai pas le temps.'),
      ],
      mistakes: [
        { wrong: 'Ich habe nicht Zeit.', right: 'Ich habe keine Zeit.', why: 'Zeit is a noun: negate it with keine.', whyFr: 'Zeit est un nom : nie-le avec keine.' },
        { wrong: 'Hast du Lust für Kino?', right: 'Hast du Lust auf Kino?', why: 'The fixed phrase is Lust haben auf.', whyFr: 'L’expression figée est Lust haben auf.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'match', id: 'l14-e5', pairs: [{ de: 'Ja, gern!', en: 'Yes, gladly!', fr: 'Oui, avec plaisir !' }, { de: 'Leider nicht.', en: 'Unfortunately not.', fr: 'Malheureusement non.' }, { de: 'Vielleicht.', en: 'Maybe.', fr: 'Peut-être.' }, { de: 'Ich habe keine Lust.', en: 'I do not feel like it.', fr: 'Je n’en ai pas envie.' }], hint: 'Match each reply to its meaning.', hintFr: 'Associe chaque réponse à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l14-e8', prompt: 'Tut mir leid, ich habe ___ Zeit.', promptFr: 'Tut mir leid, ich habe ___ Zeit.', answer: 'keine', hint: 'Zeit is a feminine noun: use kein + e.', hintFr: 'Zeit est un nom féminin : kein + e.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l14-e6', prompt: 'Listen. When does Jonas have time?', promptFr: 'Écoute. Quand Jonas a-t-il du temps ?', audio: { ttsText: 'Hast du am Samstag Zeit? – Leider nicht. Am Samstag arbeite ich. Aber am Sonntag habe ich Zeit.' }, options: ['On Saturday', 'On Sunday', 'On Monday'], optionsFr: ['Samedi', 'Dimanche', 'Lundi'], answer: 1, hint: 'Listen for "Aber am …".', hintFr: 'Écoute « Aber am … ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l14-e9', prompt: 'Listen. At what time do they meet?', promptFr: 'Écoute. À quelle heure se retrouvent-ils ?', audio: { ttsText: 'Treffen wir uns um sechs Uhr vor dem Kino?' }, options: ['At 5 o’clock', 'At 6 o’clock', 'At 8 o’clock'], optionsFr: ['À 5 heures', 'À 6 heures', 'À 8 heures'], answer: 1, hint: 'Listen for the number after "um".', hintFr: 'Écoute le nombre après « um ».' } },

    // ───────────── 2 · When? ─────────────
    { kind: 'chapter', title: 'Wann? am, um, von … bis', titleFr: 'Quand ? am, um, von … bis', blurb: 'Three small words for time.', blurbFr: 'Trois petits mots pour le temps.' },

    { kind: 'situation', title: 'Wann hast du Zeit?', titleFr: 'Quand as-tu le temps ?',
      setting: 'Yara and Jonas plan their week.', settingFr: 'Yara et Jonas planifient leur semaine.',
      lines: [
        line('Jonas', 'Wann hast du Zeit? Am Vormittag oder am Nachmittag?', 'When do you have time? In the morning or in the afternoon?', 'Quand as-tu le temps ? Le matin ou l’après-midi ?'),
        line('Yara', 'Am Vormittag lerne ich Deutsch. Am Nachmittag habe ich Zeit.', 'In the morning I learn German. In the afternoon I have time.', 'Le matin, j’apprends l’allemand. L’après-midi, j’ai le temps.'),
        line('Jonas', 'Von 14 bis 16 Uhr habe ich einen Termin.', 'From 2 to 4 pm I have an appointment.', 'De 14 h à 16 h, j’ai un rendez-vous.'),
        line('Yara', 'Dann treffen wir uns um halb fünf.', 'Then we’ll meet at half past four.', 'Alors on se retrouve à quatre heures et demie.'),
        line('Jonas', 'Und am Wochenende?', 'And at the weekend?', 'Et le week-end ?'),
        line('Yara', 'Am Wochenende schlafe ich lange.', 'At the weekend I sleep in.', 'Le week-end, je dors tard.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l14-e12', prompt: 'When do Yara and Jonas meet?', promptFr: 'Quand Yara et Jonas se retrouvent-ils ?', options: ['At half past four', 'At two', 'At four o’clock sharp'], optionsFr: ['À quatre heures et demie', 'À deux heures', 'À quatre heures pile'], answer: 0, explain: 'Yara says: “Dann treffen wir uns um halb fünf.”', explainFr: 'Yara dit : « Dann treffen wir uns um halb fünf. »', hint: 'halb fünf is 4:30.', hintFr: 'halb fünf = 4 h 30.' } },

    { kind: 'wordgroup', title: 'Tageszeiten', titleFr: 'Moments de la journée',
      note: 'All of them are der words except das Wochenende.', noteFr: 'Tous sont des mots en der, sauf das Wochenende.',
      items: [{ id: 'l14-vormittag', german: 'der Vormittag', english: 'the (late) morning', french: 'la matinée', gender: 'der', syllables: ['FOR', 'mit', 'tag'], pronunciation: 'dair FOR-mit-tahk', example: { de: 'Am Vormittag lerne ich Deutsch.', en: 'In the morning I study German.', fr: 'Le matin, j’apprends l’allemand.' } }, { id: 'l14-nachmittag', german: 'der Nachmittag', english: 'the afternoon', french: 'l’après-midi', gender: 'der', syllables: ['NACH', 'mit', 'tag'], pronunciation: 'dair NAHKH-mit-tahk', example: { de: 'Am Nachmittag habe ich Zeit.', en: 'In the afternoon I have time.', fr: 'L’après-midi, j’ai du temps.' } }, { id: 'l14-abend', german: 'der Abend', english: 'the evening', french: 'le soir', gender: 'der', syllables: ['A', 'bend'], pronunciation: 'dair AH-bent', example: { de: 'Am Abend gehe ich ins Kino.', en: 'In the evening I go to the cinema.', fr: 'Le soir, je vais au cinéma.' } }, { id: 'l14-wochenende', german: 'das Wochenende', english: 'the weekend', french: 'le week-end', gender: 'das', syllables: ['WO', 'chen', 'en', 'de'], pronunciation: 'dahss VOKH-en-en-de', example: { de: 'Am Wochenende schlafe ich lange.', en: 'At the weekend I sleep in.', fr: 'Le week-end, je dors longtemps.' } }] },

    { kind: 'grammar', note: {
      id: 'l14-am-um-bis', title: 'am, um and von … bis', titleFr: 'am, um et von … bis',
      lead: 'am + day or part of the day, um + clock time, von … bis for a period.',
      leadFr: 'am + jour ou moment de la journée, um + heure, von … bis pour une durée.',
      explanationMd: 'Three small words answer **Wann?** (when?):\n\n- **am** + day or part of the day: **am** Montag, **am** Abend, **am** Wochenende.\n- **um** + clock time: **um** 18 Uhr, **um** halb acht.\n- **von … bis** for a period: **von** 14 **bis** 16 Uhr.\n\nOne exception: **in der Nacht** (at night).',
      explanationMdFr: 'Trois petits mots répondent à **Wann ?** (quand ?) :\n\n- **am** + jour ou moment de la journée : **am** Montag, **am** Abend, **am** Wochenende.\n- **um** + heure : **um** 18 Uhr, **um** halb acht.\n- **von … bis** pour une période : **von** 14 **bis** 16 Uhr.\n\nUne exception : **in der Nacht** (la nuit).',
      tables: [{ title: 'When?', titleFr: 'Quand ?', headers: ['Word', 'Use', 'Example'], headersFr: ['Mot', 'Emploi', 'Exemple'],
        rows: [['am', 'day or part of the day', 'am Montag, am Abend'], ['um', 'clock time', 'um 18 Uhr, um halb acht'], ['von … bis', 'a period', 'von 14 bis 16 Uhr'], ['in der', 'night (exception)', 'in der Nacht']],
        rowsFr: [['am', 'jour ou moment de la journée', 'am Montag, am Abend'], ['um', 'heure', 'um 18 Uhr, um halb acht'], ['von … bis', 'une période', 'von 14 bis 16 Uhr'], ['in der', 'la nuit (exception)', 'in der Nacht']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Am Freitag', role: 'time' }, { text: 'gehe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'um 19 Uhr', role: 'time' }, { text: 'ins Konzert.', role: 'place' }], en: 'On Friday I go to the concert at 7 pm.', fr: 'Vendredi, je vais au concert à 19 h.' },
        { parts: [{ text: 'Von 14 bis 16 Uhr', role: 'time' }, { text: 'habe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'einen Termin.', role: 'accusative' }], en: 'From 2 to 4 pm I have an appointment.', fr: 'De 14 h à 16 h, j’ai un rendez-vous.' },
      ],
      contrast: {
        a: { label: 'am', labelFr: 'am', note: 'a day or part of the day', noteFr: 'un jour ou un moment de la journée', examples: [g('am Montag', 'on Monday', 'le lundi'), g('am Nachmittag', 'in the afternoon', 'l’après-midi')] },
        b: { label: 'um', labelFr: 'um', note: 'an exact clock time', noteFr: 'une heure précise', examples: [g('um 18 Uhr', 'at 6 pm', 'à 18 h'), g('um halb acht', 'at half past seven', 'à sept heures et demie')] },
      },
      examples: [
        g('Am Freitag gehe ich um 19 Uhr ins Konzert.', 'On Friday I go to the concert at 7 pm.', 'Vendredi, je vais au concert à 19 h.'),
        g('Von 14 bis 16 Uhr habe ich einen Termin.', 'From 2 to 4 pm I have an appointment.', 'De 14 h à 16 h, j’ai un rendez-vous.'),
        g('Wann treffen wir uns?', 'When are we meeting?', 'Quand se retrouve-t-on ?'),
        g('Am Vormittag lerne ich Deutsch.', 'In the morning I learn German.', 'Le matin, j’apprends l’allemand.'),
        g('Am Abend gehe ich ins Kino.', 'In the evening I go to the cinema.', 'Le soir, je vais au cinéma.'),
        g('Am Wochenende schlafe ich lange.', 'At the weekend I sleep in.', 'Le week-end, je dors tard.'),
        g('Um wie viel Uhr beginnt der Film?', 'At what time does the film start?', 'À quelle heure commence le film ?'),
      ],
      mistakes: [
        { wrong: 'Um Montag habe ich Zeit.', right: 'Am Montag habe ich Zeit.', why: 'Use am with a day.', whyFr: 'Utilise am avec un jour.' },
        { wrong: 'Der Film beginnt am 19 Uhr.', right: 'Der Film beginnt um 19 Uhr.', why: 'Use um with a clock time.', whyFr: 'Utilise um avec une heure.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l14-e2', prompt: '___ Samstag habe ich keine Zeit.', promptFr: '___ Samstag habe ich keine Zeit.', answer: 'Am', hint: 'Which small word goes with days of the week?', hintFr: 'Quel petit mot va avec les jours de la semaine ?' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l14-e3', prompt: 'Der Film beginnt ___ 20 Uhr.', promptFr: 'Der Film beginnt ___ 20 Uhr.', answer: 'um', hint: 'Which word goes with clock times?', hintFr: 'Quel mot va avec les heures ?' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l14-e7', prompt: 'What does "von 14 bis 16 Uhr" mean?', promptFr: 'Que signifie « von 14 bis 16 Uhr » ?', options: ['at 2 pm', 'from 2 to 4 pm', 'after 4 pm'], optionsFr: ['à 14 heures', 'de 14 à 16 heures', 'après 16 heures'], answer: 1, explain: '"von … bis" marks the beginning and the end of a period.', explainFr: '« von … bis » marque le début et la fin d’une période.', hint: '"von" = from, "bis" = until.', hintFr: '« von » = de, « bis » = jusqu’à.' } },

    // ───────────── 3 · Verb position ─────────────
    { kind: 'chapter', title: 'Das Verb steht auf Position 2', titleFr: 'Le verbe est en position 2', blurb: 'Start with a time word? The verb still comes second.', blurbFr: 'Tu commences par un complément de temps ? Le verbe reste en deuxième.' },

    { kind: 'situation', title: 'Heute Abend', titleFr: 'Ce soir',
      setting: 'Yara and Jonas say what they do this week.', settingFr: 'Yara et Jonas disent ce qu’ils font cette semaine.',
      lines: [
        line('Yara', 'Was machst du heute Abend?', 'What are you doing tonight?', 'Que fais-tu ce soir ?'),
        line('Jonas', 'Heute Abend gehe ich ins Konzert.', 'Tonight I am going to a concert.', 'Ce soir, je vais au concert.'),
        line('Yara', 'Und morgen?', 'And tomorrow?', 'Et demain ?'),
        line('Jonas', 'Morgen treffe ich Mara.', 'Tomorrow I am meeting Mara.', 'Demain, je retrouve Mara.'),
        line('Yara', 'Am Samstag besuche ich das Museum.', 'On Saturday I am visiting the museum.', 'Samedi, je visite le musée.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l14-e13', prompt: 'What does Jonas do this evening?', promptFr: 'Que fait Jonas ce soir ?', options: ['He goes to a concert', 'He visits a museum', 'He meets Mara'], optionsFr: ['Il va à un concert', 'Il visite un musée', 'Il retrouve Mara'], answer: 0, explain: 'He says: “Heute Abend gehe ich ins Konzert.”', explainFr: 'Il dit : « Heute Abend gehe ich ins Konzert. »', hint: 'Look for “heute Abend”.', hintFr: 'Cherche « heute Abend ».' } },

    { kind: 'wordgroup', title: 'Orte für die Freizeit', titleFr: 'Lieux de loisirs',
      items: [{ id: 'l14-kino', german: 'das Kino', english: 'the cinema', french: 'le cinéma', gender: 'das', syllables: ['KI', 'no'], pronunciation: 'dahss KEE-no', example: { de: 'Wir gehen ins Kino.', en: 'We are going to the cinema.', fr: 'Nous allons au cinéma.' } }, { id: 'l14-konzert', german: 'das Konzert', english: 'the concert', french: 'le concert', gender: 'das', syllables: ['kon', 'ZERT'], pronunciation: 'dahss kon-TSERT', example: { de: 'Das Konzert beginnt um 20 Uhr.', en: 'The concert starts at 8 pm.', fr: 'Le concert commence à 20 heures.' } }, { id: 'l14-museum', german: 'das Museum', english: 'the museum', french: 'le musée', gender: 'das', syllables: ['mu', 'ZE', 'um'], pronunciation: 'dahss moo-ZAY-oom', example: { de: 'Das Museum ist am Montag zu.', en: 'The museum is closed on Monday.', fr: 'Le musée est fermé le lundi.' } }] },

    { kind: 'grammar', note: {
      id: 'l14-verb-position', title: 'The verb stays in position 2', titleFr: 'Le verbe reste en position 2',
      lead: 'The conjugated verb is always the second element, even after a time word. The subject then follows it.',
      leadFr: 'Le verbe conjugué est toujours le deuxième élément, même après un complément de temps. Le sujet le suit alors.',
      explanationMd: 'In a German statement the **conjugated verb is always the second element** (not necessarily the second word). Position 1 can be the subject or something else: a time, a place.\n\nWhen **something other than the subject** is first, the **subject moves behind the verb** (this is called inversion). The meaning stays the same; only the emphasis changes.',
      explanationMdFr: 'Dans une phrase affirmative allemande, le **verbe conjugué est toujours le deuxième élément** (pas forcément le deuxième mot). La position 1 peut être le sujet ou autre chose : un temps, un lieu.\n\nQuand **autre chose que le sujet** est en premier, le **sujet passe derrière le verbe** (c’est l’inversion). Le sens reste le même ; seule l’insistance change.',
      tables: [{ title: 'Position 1, verb, rest', titleFr: 'Position 1, verbe, reste', headers: ['Position 1', 'Position 2 (verb)', 'Rest'], headersFr: ['Position 1', 'Position 2 (verbe)', 'Reste'],
        rows: [['Ich', 'habe', 'am Montag Zeit.'], ['Am Montag', 'habe', 'ich Zeit.'], ['Heute Abend', 'gehe', 'ich ins Kino.'], ['Morgen', 'treffe', 'ich Mara.']],
        rowsFr: [['Ich', 'habe', 'am Montag Zeit.'], ['Am Montag', 'habe', 'ich Zeit.'], ['Heute Abend', 'gehe', 'ich ins Kino.'], ['Morgen', 'treffe', 'ich Mara.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'gehe', role: 'verb' }, { text: 'heute Abend', role: 'time' }, { text: 'ins Kino.', role: 'place' }], en: 'I go to the cinema tonight.', fr: 'Je vais au cinéma ce soir.' },
        { parts: [{ text: 'Heute Abend', role: 'time' }, { text: 'gehe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'ins Kino.', role: 'place' }], en: 'Tonight I go to the cinema. (the verb is still second)', fr: 'Ce soir, je vais au cinéma. (le verbe est toujours en deuxième)' },
      ],
      contrast: {
        a: { label: 'Subject first', labelFr: 'Sujet en premier', note: 'Ich gehe heute Abend ins Kino.', noteFr: 'Ich gehe heute Abend ins Kino.', examples: [g('Ich habe am Samstag Zeit.', 'I have time on Saturday.', 'J’ai le temps samedi.'), g('Er arbeitet am Nachmittag.', 'He works in the afternoon.', 'Il travaille l’après-midi.')] },
        b: { label: 'Time first', labelFr: 'Temps en premier', note: 'Heute Abend gehe ich ins Kino.', noteFr: 'Heute Abend gehe ich ins Kino.', examples: [g('Am Samstag habe ich Zeit.', 'On Saturday I have time.', 'Samedi, j’ai le temps.'), g('Am Nachmittag arbeitet er.', 'In the afternoon he works.', 'L’après-midi, il travaille.')] },
      },
      examples: [
        g('Am Samstag habe ich Zeit.', 'On Saturday I have time.', 'Samedi, j’ai le temps.'),
        g('Heute Abend treffe ich Jonas.', 'This evening I am meeting Jonas.', 'Ce soir, je retrouve Jonas.'),
        g('Am Nachmittag arbeitet er.', 'In the afternoon he works.', 'L’après-midi, il travaille.'),
        g('Morgen gehe ich ins Museum.', 'Tomorrow I am going to the museum.', 'Demain, je vais au musée.'),
        g('Das Konzert beginnt um 20 Uhr.', 'The concert starts at 8 pm.', 'Le concert commence à 20 h.'),
        g('Das Museum ist am Montag zu.', 'The museum is closed on Monday.', 'Le musée est fermé le lundi.'),
        g('Heute habe ich Zeit.', 'Today I have time.', 'Aujourd’hui, j’ai le temps.'),
      ],
      mistakes: [
        { wrong: 'Am Montag ich habe Zeit.', right: 'Am Montag habe ich Zeit.', why: 'The verb must stay second, so the subject follows it.', whyFr: 'Le verbe doit rester en deuxième, donc le sujet le suit.' },
        { wrong: 'Heute Abend ich gehe ins Kino.', right: 'Heute Abend gehe ich ins Kino.', why: 'After “Heute Abend” comes the verb.', whyFr: 'Après « Heute Abend » vient le verbe.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l14-e1', tokens: ['habe', 'Am', 'ich', 'Montag', 'Zeit'], answer: ['Am', 'Montag', 'habe', 'ich', 'Zeit'], hint: 'Am Montag (position 1), then the verb, then the subject.', hintFr: 'Am Montag (position 1), puis le verbe, puis le sujet.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l14-e4', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Heute ich habe Zeit.', 'Heute habe ich Zeit.', 'Heute Zeit habe ich.'], answer: 1, explain: 'The verb must be in position 2, so the subject "ich" comes after it.', explainFr: 'Le verbe doit être en position 2, donc le sujet « ich » vient après.', hint: 'The conjugated verb is the 2nd element.', hintFr: 'Le verbe conjugué est le 2e élément.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l14-e10', tokens: ['Hast', 'Zeit', 'du', 'morgen'], answer: ['Hast', 'du', 'morgen', 'Zeit'], hint: 'A yes/no question: the verb goes first.', hintFr: 'Une question fermée : le verbe vient en premier.' } },

    { kind: 'pronunciation', focus: 'Stress and sounds in places and plans: Kino, Konzert, Museum, Termin', focusFr: 'Accent et sons dans les lieux et les projets : Kino, Konzert, Museum, Termin', items: [{ id: 'l14-kino-pron', german: 'das Kino', english: 'the cinema', french: 'le cinéma', gender: 'das', syllables: ['KI', 'no'], pronunciation: 'dahss KEE-no', example: { de: 'Wir gehen ins Kino.', en: 'We are going to the cinema.', fr: 'Nous allons au cinéma.' } }, { id: 'l14-konzert-pron', german: 'das Konzert', english: 'the concert', french: 'le concert', gender: 'das', syllables: ['kon', 'ZERT'], pronunciation: 'dahss kon-TSERT', example: { de: 'Das Konzert ist toll.', en: 'The concert is great.', fr: 'Le concert est génial.' } }, { id: 'l14-museum-pron', german: 'das Museum', english: 'the museum', french: 'le musée', gender: 'das', syllables: ['mu', 'ZE', 'um'], pronunciation: 'dahss moo-ZAY-oom', example: { de: 'Das Museum öffnet um zehn.', en: 'The museum opens at ten.', fr: 'Le musée ouvre à dix heures.' } }, { id: 'l14-termin-pron', german: 'der Termin', english: 'the appointment', french: 'le rendez-vous', gender: 'der', syllables: ['ter', 'MIN'], pronunciation: 'dair ter-MEEN', example: { de: 'Ich habe einen Termin.', en: 'I have an appointment.', fr: 'J’ai un rendez-vous.' } }, { id: 'l14-vielleicht-pron', german: 'vielleicht', english: 'maybe', french: 'peut-être', gender: null, syllables: ['viel', 'LEICHT'], pronunciation: 'fee-LIKHT', example: { de: 'Vielleicht komme ich mit.', en: 'Maybe I will come along.', fr: 'Peut-être que je viens.' } }] },

    { kind: 'wrapup',
      summary: 'You can now arrange to meet (**Hast du Zeit? – Gern! / Leider nicht.**), say when with **am, um, von … bis**, and keep the verb **second** even after a time word. 🎉',
      summaryFr: 'Tu sais maintenant te donner rendez-vous (**Hast du Zeit ? – Gern ! / Leider nicht.**), dire quand avec **am, um, von … bis**, et garder le verbe **en deuxième** même après un complément de temps. 🎉',
      card: { title: 'Lesson 9 on one page', titleFr: 'La leçon 9 en une page', sections: [
        { heading: 'Meeting', headingFr: 'Rendez-vous', rows: [g('Hast du Zeit? / Hast du Lust auf Kino?', 'suggest', 'proposer'), g('Ja, gern! / Gute Idee!', 'accept', 'accepter'), g('Leider nicht. / Ich habe keine Zeit.', 'decline', 'refuser'), g('Vielleicht.', 'maybe', 'peut-être')] },
        { heading: 'When?', headingFr: 'Quand ?', rows: [g('am Montag, am Abend', 'on a day, in a part of the day', 'le jour, le moment de la journée'), g('um 18 Uhr', 'at a time', 'à une heure'), g('von 14 bis 16 Uhr', 'from … to …', 'de … à …')] },
        { heading: 'Verb in position 2', headingFr: 'Verbe en position 2', rows: [g('Am Montag habe ich Zeit.', 'time first → subject after the verb', 'temps en premier → sujet après le verbe'), g('Heute Abend gehe ich ins Kino.', 'same rule', 'même règle')] },
      ] } },
  ],
};
