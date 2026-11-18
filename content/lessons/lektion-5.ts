import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion5: Lesson = {
  id: 'l5', level: 'A1', module: 2, number: 8,
  title: { de: 'Uhrzeit und Alltag', en: 'Time and daily routine', fr: 'L’heure et le quotidien' },
  theme: 'Telling the time, days of the week, and daily activities', themeFr: 'Dire l’heure, les jours de la semaine et les activités quotidiennes',
  goals: ['Tell the time with "Es ist … Uhr"', 'Name the days of the week', 'Talk about your daily routine', 'Use separable verbs like "aufstehen"'], goalsFr: ['Dire l’heure avec « Es ist … Uhr »', 'Nommer les jours de la semaine', 'Parler de ta routine quotidienne', 'Utiliser les verbes à particule comme « aufstehen »'],
  canDo: g('Ich kann die Uhrzeit und Wochentage nennen und meinen Tagesablauf beschreiben.', 'I can tell the time, name the days of the week and describe my daily routine.', 'Je sais dire l’heure, nommer les jours de la semaine et décrire ma journée.'),
  steps: [
    { kind: 'intro', title: 'Uhrzeit und Alltag ⏰', titleFr: 'L’heure et le quotidien ⏰',
      scene: 'Two classmates talk about time, days and their daily routine.', sceneFr: 'Deux camarades parlent de l’heure, des jours et de leur journée.',
      goals: ['Ask for and tell the time', 'Name the days and say “on Monday”', 'Describe your day with separable verbs', 'Keep the verb in second position'],
      goalsFr: ['Demander et dire l’heure', 'Nommer les jours et dire « le lundi »', 'Décrire ta journée avec des verbes séparables', 'Garder le verbe en deuxième position'] },

    // ───────────── 1 · The time ─────────────
    { kind: 'chapter', title: 'Die Uhrzeit', titleFr: 'L’heure', blurb: 'What time is it? And at what time?', blurbFr: 'Quelle heure est-il ? Et à quelle heure ?' },

    { kind: 'situation', title: 'Wie spät ist es?', titleFr: 'Quelle heure est-il ?',
      setting: 'Lena and Max are on the way to their German course.', settingFr: 'Lena et Max sont en route pour leur cours d’allemand.',
      lines: [
        line('Lena', 'Entschuldigung, wie spät ist es?', 'Excuse me, what time is it?', 'Excuse-moi, quelle heure est-il ?'),
        line('Max', 'Es ist halb neun.', 'It is half past eight.', 'Il est huit heures et demie.'),
        line('Lena', 'Oh, der Kurs beginnt um neun Uhr!', 'Oh, the course starts at nine o’clock!', 'Oh, le cours commence à neuf heures !'),
        line('Max', 'Ja, komm, wir gehen!', 'Yes, come on, let’s go!', 'Oui, viens, on y va !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l5-e11', prompt: 'What time is it in the dialogue?', promptFr: 'Quelle heure est-il dans le dialogue ?', options: ['8:30', '9:30', '9:00'], answer: 0, explain: '“Halb neun” means half an hour before nine, so 8:30.', explainFr: '« Halb neun » signifie une demi-heure avant neuf heures, donc 8 h 30.', hint: 'halb counts towards the next hour.', hintFr: 'halb compte vers l’heure suivante.' } },

    { kind: 'wordgroup', title: 'Uhr und Uhrzeit', titleFr: 'L’heure',
      items: [{ id: 'l5-uhr', german: 'die Uhr', english: 'the clock / o’clock', french: 'l’horloge / heure', gender: 'die', syllables: ['UHR'], pronunciation: 'dee OOR', example: { de: 'Es ist acht Uhr.', en: 'It is eight o’clock.', fr: 'Il est huit heures.' } }, { id: 'l5-uhrzeit', german: 'die Uhrzeit', english: 'the time (of day)', french: 'l’heure (qu’il est)', gender: 'die', syllables: ['UHR', 'zeit'], pronunciation: 'OOR-tsait', example: { de: 'Wie ist die Uhrzeit?', en: 'What is the time?', fr: 'Quelle heure est-il ?' } }] },

    { kind: 'grammar', note: {
      id: 'l5-uhrzeit', title: 'Telling the time', titleFr: 'Dire l’heure',
      lead: 'Es ist … says what time it is. um … says at what time. halb counts towards the next hour.',
      leadFr: 'Es ist … dit quelle heure il est. um … dit à quelle heure. halb compte vers l’heure suivante.',
      explanationMd: 'Ask **Wie spät ist es?** and answer **Es ist … Uhr**. To say **at** a time use **um**: **um acht Uhr**.\n\nThe tricky part is **halb**: it points to the **next** hour. **halb neun** is half an hour **before** nine, so **8:30**. Quarters use **Viertel nach / vor**.',
      explanationMdFr: 'Demande **Wie spät ist es ?** et réponds **Es ist … Uhr**. Pour dire **à** une heure, utilise **um** : **um acht Uhr**.\n\nLe piège est **halb** : il désigne l’heure **suivante**. **halb neun** est une demi-heure **avant** neuf heures, donc **8 h 30**. Les quarts se disent **Viertel nach / vor**.',
      tables: [{ title: 'Clock times', titleFr: 'Les heures', headers: ['Time', 'You say'], headersFr: ['Heure', 'On dit'],
        rows: [['8:00', 'Es ist acht Uhr.'], ['8:10', 'Es ist zehn nach acht.'], ['8:15', 'Es ist Viertel nach acht.'], ['8:30', 'Es ist halb neun.'], ['8:45', 'Es ist Viertel vor neun.'], ['8:50', 'Es ist zehn vor neun.']],
        rowsFr: [['8 h 00', 'Es ist acht Uhr.'], ['8 h 10', 'Es ist zehn nach acht.'], ['8 h 15', 'Es ist Viertel nach acht.'], ['8 h 30', 'Es ist halb neun.'], ['8 h 45', 'Es ist Viertel vor neun.'], ['8 h 50', 'Es ist zehn vor neun.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'halb neun.', role: 'time' }], en: 'It is half past eight.', fr: 'Il est huit heures et demie.' },
        { parts: [{ text: 'Der Kurs', role: 'subject' }, { text: 'beginnt', role: 'verb' }, { text: 'um neun Uhr.', role: 'time' }], en: 'The course starts at nine o’clock.', fr: 'Le cours commence à neuf heures.' },
      ],
      contrast: {
        a: { label: 'Es ist … (now)', labelFr: 'Es ist … (maintenant)', note: 'what time it is', noteFr: 'quelle heure il est', examples: [g('Es ist zehn Uhr.', 'It is ten o’clock.', 'Il est dix heures.'), g('Es ist halb eins.', 'It is half past twelve.', 'Il est midi et demi.')] },
        b: { label: 'um … (at)', labelFr: 'um … (à)', note: 'at what time something happens', noteFr: 'à quelle heure quelque chose a lieu', examples: [g('Der Kurs beginnt um neun Uhr.', 'The course starts at nine.', 'Le cours commence à neuf heures.'), g('Ich stehe um sieben Uhr auf.', 'I get up at seven.', 'Je me lève à sept heures.')] },
      },
      examples: [
        g('Wie spät ist es?', 'What time is it?', 'Quelle heure est-il ?'),
        g('Es ist zehn Uhr.', 'It is ten o’clock.', 'Il est dix heures.'),
        g('Der Kurs beginnt um neun Uhr.', 'The course starts at nine o’clock.', 'Le cours commence à neuf heures.'),
        g('Es ist halb neun.', 'It is half past eight.', 'Il est huit heures et demie.'),
        g('Es ist Viertel nach drei.', 'It is a quarter past three.', 'Il est trois heures et quart.'),
        g('Es ist Viertel vor sechs.', 'It is a quarter to six.', 'Il est six heures moins le quart.'),
        g('Wie ist die Uhrzeit?', 'What is the time?', 'Quelle est l’heure ?'),
      ],
      mistakes: [
        { wrong: 'Es ist halb acht. (8:30)', right: 'Es ist halb neun. (8:30)', why: 'halb points to the next hour: 8:30 is halb neun.', whyFr: 'halb désigne l’heure suivante : 8 h 30 se dit halb neun.' },
        { wrong: 'Der Kurs beginnt in neun Uhr.', right: 'Der Kurs beginnt um neun Uhr.', why: 'Use um for “at” a time.', whyFr: 'Utilise um pour « à » une heure.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l5-e1', prompt: 'Es ist acht ___. (o’clock)', answer: 'Uhr', hint: 'the word for "o’clock" / clock', hintFr: 'le mot pour « heure » (à l’horloge)' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l5-e8', prompt: 'How do you say "at nine o’clock"?', promptFr: 'Comment dit-on « à neuf heures » ?', options: ['in neun Uhr', 'um neun Uhr', 'am neun Uhr'], answer: 1, explain: 'Use "um" for clock times: um neun Uhr.', explainFr: 'On utilise « um » pour les heures : um neun Uhr.', hint: 'Which little word goes with a clock time?', hintFr: 'Quel petit mot accompagne une heure ?' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l5-e5', prompt: 'Listen. At what time does Lena get up?', promptFr: 'Écoute. À quelle heure Lena se lève-t-elle ?', audio: { ttsText: 'Ich heiße Lena. Ich stehe um sechs Uhr auf.' }, options: ['6:00', '7:00', '8:00'], answer: 0, hint: 'Listen for the number before "Uhr".', hintFr: 'Écoute le nombre avant « Uhr ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l5-e14', prompt: 'It is 7:30. Es ist halb ___.', promptFr: 'Il est 7 h 30. Es ist halb ___.', answer: 'acht', hint: 'halb points to the next hour', hintFr: 'halb désigne l’heure suivante' } },

    // ───────────── 2 · Days of the week ─────────────
    { kind: 'chapter', title: 'Die Wochentage', titleFr: 'Les jours de la semaine', blurb: 'Name the days, and keep the verb second.', blurbFr: 'Nommer les jours, et garder le verbe en deuxième.' },

    { kind: 'situation', title: 'Mein Wochenplan', titleFr: 'Mon planning de la semaine',
      setting: 'Max asks Lena about her week.', settingFr: 'Max interroge Lena sur sa semaine.',
      lines: [
        line('Max', 'Was machst du am Montag?', 'What do you do on Monday?', 'Que fais-tu le lundi ?'),
        line('Lena', 'Am Montag arbeite ich. Am Mittwoch habe ich Deutschkurs.', 'On Monday I work. On Wednesday I have German class.', 'Le lundi, je travaille. Le mercredi, j’ai cours d’allemand.'),
        line('Max', 'Und am Samstag?', 'And on Saturday?', 'Et le samedi ?'),
        line('Lena', 'Am Samstag schlafe ich lange. Am Sonntag arbeite ich nicht.', 'On Saturday I sleep in. On Sunday I don’t work.', 'Le samedi, je dors tard. Le dimanche, je ne travaille pas.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l5-e12', prompt: 'What does Lena have on Wednesday?', promptFr: 'Qu’a Lena le mercredi ?', options: ['German class', 'Work', 'A day off'], optionsFr: ['Un cours d’allemand', 'Du travail', 'Un jour de congé'], answer: 0, explain: 'She says: “Am Mittwoch habe ich Deutschkurs.”', explainFr: 'Elle dit : « Am Mittwoch habe ich Deutschkurs. »', hint: 'Look for “Mittwoch”.', hintFr: 'Cherche « Mittwoch ».' } },

    { kind: 'wordgroup', title: 'Tag, Woche, Montag', titleFr: 'Jour, semaine, lundi',
      note: 'All the days of the week are der: der Montag, der Dienstag …', noteFr: 'Tous les jours de la semaine sont der : der Montag, der Dienstag …',
      items: [{ id: 'l5-tag', german: 'der Tag', english: 'the day', french: 'le jour', gender: 'der', syllables: ['TAG'], pronunciation: 'dair TAHK', example: { de: 'Der Tag beginnt um sieben Uhr.', en: 'The day starts at seven o’clock.', fr: 'La journée commence à sept heures.' } }, { id: 'l5-woche', german: 'die Woche', english: 'the week', french: 'la semaine', gender: 'die', syllables: ['WO', 'che'], pronunciation: 'dee VOKH-uh', example: { de: 'Die Woche hat sieben Tage.', en: 'The week has seven days.', fr: 'La semaine a sept jours.' } }, { id: 'l5-montag', german: 'der Montag', english: 'Monday', french: 'lundi', gender: 'der', syllables: ['MON', 'tag'], pronunciation: 'dair MOHN-tahk', example: { de: 'Am Montag arbeite ich.', en: 'On Monday I work.', fr: 'Le lundi, je travaille.' } }] },

    { kind: 'grammar', note: {
      id: 'l5-wochentage', title: 'Days of the week and “am”', titleFr: 'Les jours de la semaine et « am »',
      lead: 'Say on Monday with am Montag. A day at the start of the sentence pushes the subject behind the verb.',
      leadFr: 'Dis le lundi avec am Montag. Un jour en début de phrase place le sujet derrière le verbe.',
      explanationMd: 'All seven days are **der** words. To say **on** a day use **am**: **am Montag**. For parts of the day add **-s**: **morgens, mittags, abends** (every morning, noon, evening).\n\nThe verb stays **second**. If you start with the day, the **subject follows the verb**: **Am Montag arbeite ich.**',
      explanationMdFr: 'Les sept jours sont des mots en **der**. Pour dire **le** lundi, utilise **am** : **am Montag**. Pour les moments de la journée, ajoute **-s** : **morgens, mittags, abends** (chaque matin, midi, soir).\n\nLe verbe reste **en deuxième**. Si tu commences par le jour, le **sujet suit le verbe** : **Am Montag arbeite ich.**',
      tables: [
        { title: 'The week', titleFr: 'La semaine', headers: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'], headersFr: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
          rows: [['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']], rowsFr: [['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']] },
        { title: 'Parts of the day', titleFr: 'Les moments de la journée', headers: ['morgens', 'mittags', 'abends', 'nachts'], headersFr: ['morgens', 'mittags', 'abends', 'nachts'],
          rows: [['in the morning', 'at noon', 'in the evening', 'at night']], rowsFr: [['le matin', 'à midi', 'le soir', 'la nuit']] },
      ],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'arbeite', role: 'verb' }, { text: 'am Montag.', role: 'time' }], en: 'I work on Monday.', fr: 'Je travaille le lundi.' },
        { parts: [{ text: 'Am Montag', role: 'time' }, { text: 'arbeite', role: 'verb' }, { text: 'ich.', role: 'subject' }], en: 'On Monday I work. (the verb stays second)', fr: 'Le lundi, je travaille. (le verbe reste en deuxième)' },
      ],
      contrast: {
        a: { label: 'Subject first', labelFr: 'Sujet en premier', note: 'Ich arbeite am Montag.', noteFr: 'Ich arbeite am Montag.', examples: [g('Ich habe am Freitag frei.', 'I have Friday off.', 'J’ai congé le vendredi.'), g('Ich schlafe am Sonntag lange.', 'I sleep in on Sunday.', 'Je dors tard le dimanche.')] },
        b: { label: 'Time first', labelFr: 'Temps en premier', note: 'Am Montag arbeite ich. Verb still second.', noteFr: 'Am Montag arbeite ich. Le verbe reste en deuxième.', examples: [g('Am Freitag habe ich frei.', 'On Friday I have off.', 'Le vendredi, j’ai congé.'), g('Am Sonntag schlafe ich lange.', 'On Sunday I sleep in.', 'Le dimanche, je dors tard.')] },
      },
      examples: [
        g('Am Montag arbeite ich.', 'On Monday I work.', 'Le lundi, je travaille.'),
        g('Am Freitag habe ich frei.', 'On Friday I have off.', 'Le vendredi, j’ai congé.'),
        g('Am Sonntag schlafe ich lange.', 'On Sunday I sleep in.', 'Le dimanche, je dors tard.'),
        g('Am Mittwoch habe ich Deutsch.', 'On Wednesday I have German.', 'Le mercredi, j’ai allemand.'),
        g('Morgens trinke ich Kaffee.', 'In the morning I drink coffee.', 'Le matin, je bois du café.'),
        g('Die Woche hat sieben Tage.', 'The week has seven days.', 'La semaine a sept jours.'),
        g('Abends lerne ich Deutsch.', 'In the evening I learn German.', 'Le soir, j’apprends l’allemand.'),
      ],
      mistakes: [
        { wrong: 'Am Montag ich arbeite.', right: 'Am Montag arbeite ich.', why: 'The verb stays in second position, so the subject follows it.', whyFr: 'Le verbe reste en deuxième position, donc le sujet le suit.' },
        { wrong: 'Ich arbeite in Montag.', right: 'Ich arbeite am Montag.', why: 'Use am for “on” a day.', whyFr: 'Utilise am pour « le » + jour.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l5-e2', prompt: 'Which day is "Mittwoch"?', promptFr: 'Quel jour est « Mittwoch » ?', options: ['Monday', 'Wednesday', 'Sunday'], answer: 1, explain: '"Mittwoch" (mid-week) is Wednesday.', explainFr: '« Mittwoch » (milieu de semaine) est mercredi.', hint: 'It literally means "mid-week".', hintFr: 'Ça signifie littéralement « milieu de semaine ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l5-e4', pairs: [{ de: 'Montag', en: 'Monday', fr: 'lundi' }, { de: 'Freitag', en: 'Friday', fr: 'vendredi' }, { de: 'Sonntag', en: 'Sunday', fr: 'dimanche' }], hint: 'Match each German day to its English name.', hintFr: 'Associe chaque jour allemand à son nom.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l5-e6', word: 'Woche', answer: 'die', hint: '"Woche" (week) is feminine.', hintFr: '« Woche » (semaine) est féminin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l5-e7', prompt: '___ Montag arbeite ich. (on)', answer: 'Am', hint: 'Use "am" to say "on" a day.', hintFr: 'Utilise « am » pour dire « le » tel jour.' } },

    // ───────────── 3 · Daily routine ─────────────
    { kind: 'chapter', title: 'Mein Tag und trennbare Verben', titleFr: 'Ma journée et les verbes séparables', blurb: 'Verbs with a prefix that jumps to the end.', blurbFr: 'Des verbes dont le préfixe saute à la fin.' },

    { kind: 'situation', title: 'Mein Tag', titleFr: 'Ma journée',
      setting: 'Max asks Lena about her typical day.', settingFr: 'Max interroge Lena sur sa journée type.',
      lines: [
        line('Max', 'Wann stehst du auf, Lena?', 'When do you get up, Lena?', 'À quelle heure te lèves-tu, Lena ?'),
        line('Lena', 'Ich stehe um sechs Uhr auf. Morgens trinke ich Kaffee.', 'I get up at six. In the morning I drink coffee.', 'Je me lève à six heures. Le matin, je bois du café.'),
        line('Max', 'Und mittags? Wo isst du?', 'And at noon? Where do you eat?', 'Et à midi ? Où manges-tu ?'),
        line('Lena', 'Mittags esse ich in der Kantine. Ich arbeite von neun bis fünf.', 'At noon I eat in the canteen. I work from nine to five.', 'À midi, je mange à la cantine. Je travaille de neuf à dix-sept heures.'),
        line('Max', 'Wie lange schläfst du?', 'How long do you sleep?', 'Combien de temps dors-tu ?'),
        line('Lena', 'Ich schlafe acht Stunden.', 'I sleep eight hours.', 'Je dors huit heures.'),
      ],
      words: [{ id: 'l5-aufstehen', german: 'aufstehen', english: 'to get up', french: 'se lever', gender: null, syllables: ['AUF', 'ste', 'hen'], pronunciation: 'OWF-shtay-en', example: { de: 'Ich stehe um sieben Uhr auf.', en: 'I get up at seven o’clock.', fr: 'Je me lève à sept heures.' } }, { id: 'l5-arbeiten', german: 'arbeiten', english: 'to work', french: 'travailler', gender: null, syllables: ['AR', 'bei', 'ten'], pronunciation: 'AR-bai-ten', example: { de: 'Ich arbeite von neun bis fünf.', en: 'I work from nine to five.', fr: 'Je travaille de neuf à cinq heures.' } }, { id: 'l5-essen', german: 'essen', english: 'to eat', french: 'manger', gender: null, syllables: ['ES', 'sen'], pronunciation: 'ESS-en', example: { de: 'Mittags esse ich in der Kantine.', en: 'At noon I eat in the canteen.', fr: 'À midi, je mange à la cantine.' } }, { id: 'l5-schlafen', german: 'schlafen', english: 'to sleep', french: 'dormir', gender: null, syllables: ['SCHLA', 'fen'], pronunciation: 'SHLAH-fen', example: { de: 'Ich schlafe acht Stunden.', en: 'I sleep eight hours.', fr: 'Je dors huit heures.' } }, { id: 'l5-morgens', german: 'morgens', english: 'in the morning', french: 'le matin', gender: null, syllables: ['MOR', 'gens'], pronunciation: 'MOR-gens', example: { de: 'Morgens trinke ich Kaffee.', en: 'In the morning I drink coffee.', fr: 'Le matin, je bois du café.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l5-e13', prompt: 'When does Lena get up?', promptFr: 'À quelle heure Lena se lève-t-elle ?', options: ['At six', 'At seven', 'At nine'], optionsFr: ['À six heures', 'À sept heures', 'À neuf heures'], answer: 0, explain: 'She says: “Ich stehe um sechs Uhr auf.”', explainFr: 'Elle dit : « Ich stehe um sechs Uhr auf. »', hint: 'Listen for “um … Uhr”.', hintFr: 'Cherche « um … Uhr ».' } },

    { kind: 'grammar', note: {
      id: 'l5-trennbar', title: 'Separable verbs: the prefix goes to the end', titleFr: 'Verbes séparables : le préfixe va à la fin',
      lead: 'In a main clause the prefix separates and stands at the very end.',
      leadFr: 'Dans une principale, le préfixe se sépare et se place tout à la fin.',
      explanationMd: 'Many German verbs have a **prefix** that comes off: **auf**|stehen, **an**|fangen, **ein**|kaufen, **mit**|kommen. In a normal sentence the **verb stays second** and the **prefix jumps to the end**: **Ich stehe um sieben Uhr auf.**\n\nIn the **infinitive** it stays together: aufstehen.',
      explanationMdFr: 'Beaucoup de verbes allemands ont un **préfixe** qui se détache : **auf**|stehen, **an**|fangen, **ein**|kaufen, **mit**|kommen. Dans une phrase normale, le **verbe reste en deuxième** et le **préfixe saute à la fin** : **Ich stehe um sieben Uhr auf.**\n\nÀ l’**infinitif**, il reste attaché : aufstehen.',
      tables: [
        { title: 'aufstehen (to get up)', titleFr: 'aufstehen (se lever)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['stehe … auf', 'stehst … auf', 'steht … auf', 'stehen … auf', 'steht … auf', 'stehen … auf']], rowsFr: [['stehe … auf', 'stehst … auf', 'steht … auf', 'stehen … auf', 'steht … auf', 'stehen … auf']] },
        { title: 'More separable verbs', titleFr: 'D’autres verbes séparables', headers: ['Infinitive', 'In a sentence'], headersFr: ['Infinitif', 'Dans une phrase'], rows: [['anfangen', 'Der Kurs fängt um neun Uhr an.'], ['einkaufen', 'Ich kaufe heute ein.'], ['mitkommen', 'Kommst du mit?']], rowsFr: [['anfangen', 'Der Kurs fängt um neun Uhr an.'], ['einkaufen', 'Ich kaufe heute ein.'], ['mitkommen', 'Kommst du mit?']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'stehe', role: 'verb' }, { text: 'um sieben Uhr', role: 'time' }, { text: 'auf.', role: 'verb' }], en: 'I get up at seven. (the two verb parts frame the sentence)', fr: 'Je me lève à sept heures. (les deux parties du verbe encadrent la phrase)' },
        { parts: [{ text: 'Stehst', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'früh', role: 'time' }, { text: 'auf?', role: 'verb' }], en: 'Do you get up early?', fr: 'Te lèves-tu tôt ?' },
      ],
      contrast: {
        a: { label: 'Statement', labelFr: 'Affirmation', note: 'verb second, prefix at the end', noteFr: 'verbe en deuxième, préfixe à la fin', examples: [g('Ich stehe um sechs Uhr auf.', 'I get up at six.', 'Je me lève à six heures.'), g('Der Kurs fängt um neun Uhr an.', 'The course starts at nine.', 'Le cours commence à neuf heures.')] },
        b: { label: 'Question', labelFr: 'Question', note: 'verb first, prefix still at the end', noteFr: 'verbe en premier, préfixe toujours à la fin', examples: [g('Wann stehst du auf?', 'When do you get up?', 'À quelle heure te lèves-tu ?'), g('Kommst du mit?', 'Are you coming along?', 'Tu viens avec nous ?')] },
      },
      examples: [
        g('Ich stehe um sechs Uhr auf.', 'I get up at six o’clock.', 'Je me lève à six heures.'),
        g('Wann stehst du auf?', 'When do you get up?', 'À quelle heure te lèves-tu ?'),
        g('Der Kurs fängt um neun Uhr an.', 'The course starts at nine o’clock.', 'Le cours commence à neuf heures.'),
        g('Ich kaufe heute ein.', 'I am shopping today.', 'Je fais les courses aujourd’hui.'),
        g('Kommst du mit?', 'Are you coming along?', 'Tu viens avec nous ?'),
        g('Mittags esse ich in der Kantine.', 'At noon I eat in the canteen.', 'À midi, je mange à la cantine.'),
        g('Ich arbeite von neun bis fünf.', 'I work from nine to five.', 'Je travaille de neuf à dix-sept heures.'),
      ],
      mistakes: [
        { wrong: 'Ich aufstehe um sieben Uhr.', right: 'Ich stehe um sieben Uhr auf.', why: 'The prefix leaves the verb and goes to the end.', whyFr: 'Le préfixe quitte le verbe et va à la fin.' },
        { wrong: 'Der Kurs anfängt um neun Uhr.', right: 'Der Kurs fängt um neun Uhr an.', why: 'Same for anfangen: an goes to the end.', whyFr: 'Pareil pour anfangen : an va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l5-e3', tokens: ['auf', 'stehe', 'um', 'sieben', 'Ich', 'Uhr'], answer: ['Ich', 'stehe', 'um', 'sieben', 'Uhr', 'auf'], hint: 'Separable verb: the prefix "auf" goes to the very end.', hintFr: 'Verbe à particule : la particule « auf » va tout à la fin.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l5-e9', tokens: ['ich', 'Kaffee', 'trinke', 'Morgens'], answer: ['Morgens', 'trinke', 'ich', 'Kaffee'], hint: 'The verb stays in second position, even after a time word.', hintFr: 'Le verbe reste en deuxième position, même après un mot de temps.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l5-e10', prompt: 'Listen. What does Max do on Sunday?', promptFr: 'Écoute. Que fait Max le dimanche ?', audio: { ttsText: 'Am Sonntag arbeite ich nicht. Ich schlafe lange.' }, options: ['He works', 'He sleeps in', 'He studies'], optionsFr: ['Il travaille', 'Il fait la grasse matinée', 'Il étudie'], answer: 1, hint: '"schlafen" means to sleep; "lange" means for a long time.', hintFr: '« schlafen » = dormir ; « lange » = longtemps.' } },

    { kind: 'pronunciation', focus: 'The "w" sounds like English "v" (Woche, Mittwoch) and "ch" is soft after i/e (ich)', focusFr: 'Le « w » se prononce comme « v » (Woche, Mittwoch) et « ch » est doux après i/e (ich)', items: [{ id: 'l5-woche-pron', german: 'Woche', english: 'week', french: 'semaine', gender: null, syllables: ['WO', 'che'], pronunciation: 'VOKH-uh', example: { de: 'Eine Woche hat sieben Tage.', en: 'A week has seven days.', fr: 'Une semaine a sept jours.' } }, { id: 'l5-mittwoch-pron', german: 'Mittwoch', english: 'Wednesday', french: 'mercredi', gender: null, syllables: ['MITT', 'woch'], pronunciation: 'MIT-vokh', example: { de: 'Am Mittwoch habe ich Deutsch.', en: 'On Wednesday I have German.', fr: 'Le mercredi, j’ai allemand.' } }] },

    { kind: 'wrapup',
      summary: 'You can now tell the time with **Es ist … / um …**, name the days with **am**, keep the verb **second** after a time, and use **separable verbs** like **aufstehen**. 🎉',
      summaryFr: 'Tu sais maintenant dire l’heure avec **Es ist … / um …**, nommer les jours avec **am**, garder le verbe **en deuxième** après un complément de temps, et utiliser des **verbes séparables** comme **aufstehen**. 🎉',
      card: { title: 'Lesson 8 on one page', titleFr: 'La leçon 8 en une page', sections: [
        { heading: 'The time', headingFr: 'L’heure', rows: [g('Wie spät ist es? – Es ist halb neun.', 'What time is it? – 8:30.', 'Quelle heure est-il ? – 8 h 30.'), g('um neun Uhr', 'at nine o’clock', 'à neuf heures'), g('Viertel nach / Viertel vor', 'quarter past / to', 'et quart / moins le quart')] },
        { heading: 'Days', headingFr: 'Les jours', rows: [g('Montag … Sonntag (all der)', 'Monday … Sunday', 'lundi … dimanche'), g('am Montag', 'on Monday', 'le lundi'), g('morgens, mittags, abends', 'in the morning, at noon, in the evening', 'le matin, à midi, le soir')] },
        { heading: 'Word order', headingFr: 'Ordre des mots', rows: [g('Am Montag arbeite ich.', 'Verb stays second.', 'Le verbe reste en deuxième.')] },
        { heading: 'Separable verbs', headingFr: 'Verbes séparables', rows: [g('Ich stehe um sieben Uhr auf.', 'prefix at the end', 'préfixe à la fin'), g('Kommst du mit?', 'question: verb first', 'question : verbe en premier')] },
      ] } },
  ],
};
