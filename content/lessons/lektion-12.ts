import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion12: Lesson = {
  id: 'l12', level: 'A1', module: 5, number: 22,
  title: { de: 'Wetter und Jahreszeiten', en: 'Weather and seasons', fr: 'La météo et les saisons' },
  theme: 'Describing the weather, the seasons, and using impersonal "es"', themeFr: 'Décrire la météo, les saisons, et utiliser le « es » impersonnel',
  goals: ['Describe the weather', 'Name the seasons and months', 'Use impersonal "es" (es regnet, es ist kalt)', 'Say what you do "im Sommer / im Winter"'], goalsFr: ['Décrire la météo', 'Nommer les saisons et les mois', 'Utiliser le « es » impersonnel (es regnet, es ist kalt)', 'Dire ce que tu fais « im Sommer / im Winter »'],
  canDo: g('Ich kann das Wetter beschreiben und über Jahreszeiten und Monate sprechen.', 'I can describe the weather and talk about seasons and months.', 'Je sais décrire le temps et parler des saisons et des mois.'),
  steps: [
    { kind: 'intro', title: 'Wetter und Jahreszeiten ☀️', titleFr: 'Météo et saisons ☀️',
      scene: 'Two friends chat about today’s weather, their favourite season and their birthdays.', sceneFr: 'Deux amis parlent du temps d’aujourd’hui, de leur saison préférée et de leurs anniversaires.',
      goals: ['Describe the weather with es', 'Name the seasons and say “in summer”', 'Name the months and say “in May”'],
      goalsFr: ['Décrire le temps avec es', 'Nommer les saisons et dire « en été »', 'Nommer les mois et dire « en mai »'] },

    // ───────────── 1 · Weather ─────────────
    { kind: 'chapter', title: 'Das Wetter', titleFr: 'Le temps', blurb: 'Weather uses es.', blurbFr: 'Le temps utilise es.' },

    { kind: 'situation', title: 'Wie ist das Wetter?', titleFr: 'Quel temps fait-il ?',
      setting: 'Ben and Mara plan the day.', settingFr: 'Ben et Mara organisent la journée.',
      lines: [
        line('Ben', 'Wie ist das Wetter heute?', 'What is the weather like today?', 'Quel temps fait-il aujourd’hui ?'),
        line('Mara', 'Heute ist es warm, und die Sonne scheint.', 'Today it is warm, and the sun is shining.', 'Aujourd’hui il fait chaud, et le soleil brille.'),
        line('Ben', 'Und morgen? Regnet es?', 'And tomorrow? Will it rain?', 'Et demain ? Va-t-il pleuvoir ?'),
        line('Mara', 'Ja, morgen regnet es. Es ist kalt.', 'Yes, tomorrow it rains. It is cold.', 'Oui, demain il pleut. Il fait froid.'),
        line('Ben', 'Ich mag Regen nicht.', 'I don’t like rain.', 'Je n’aime pas la pluie.'),
      ],
      words: [{ id: 'l12-regnen', german: 'regnen', english: 'to rain', french: 'pleuvoir', gender: null, syllables: ['REG', 'nen'], pronunciation: 'RAYG-nen', example: { de: 'Es regnet heute.', en: 'It is raining today.', fr: 'Il pleut aujourd’hui.' } }, { id: 'l12-scheinen', german: 'scheinen', english: 'to shine', french: 'briller', gender: null, syllables: ['SCHEI', 'nen'], pronunciation: 'SHINE-en', example: { de: 'Die Sonne scheint.', en: 'The sun shines.', fr: 'Le soleil brille.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l12-e11', prompt: 'What will the weather be like tomorrow?', promptFr: 'Quel temps fera-t-il demain ?', options: ['Rainy and cold', 'Sunny and warm', 'Snowy'], optionsFr: ['Pluvieux et froid', 'Ensoleillé et chaud', 'Neigeux'], answer: 0, explain: 'Mara says: “Morgen regnet es. Es ist kalt.”', explainFr: 'Mara dit : « Morgen regnet es. Es ist kalt. »', hint: 'Look at Mara’s second answer.', hintFr: 'Regarde la deuxième réponse de Mara.' } },

    { kind: 'wordgroup', title: 'Das Wetter', titleFr: 'Le temps',
      items: [{ id: 'l12-wetter', german: 'das Wetter', english: 'the weather', french: 'le temps / la météo', gender: 'das', syllables: ['WET', 'ter'], pronunciation: 'dahs VET-ter', example: { de: 'Wie ist das Wetter?', en: 'How is the weather?', fr: 'Quel temps fait-il ?' } }, { id: 'l12-sonne', german: 'die Sonne', english: 'the sun', french: 'le soleil', gender: 'die', syllables: ['SON', 'ne'], pronunciation: 'dee ZON-ne', example: { de: 'Die Sonne scheint.', en: 'The sun is shining.', fr: 'Le soleil brille.' } }, { id: 'l12-regen', german: 'der Regen', english: 'the rain', french: 'la pluie', gender: 'der', syllables: ['RE', 'gen'], pronunciation: 'dair RAY-gen', example: { de: 'Ich mag Regen nicht.', en: 'I don’t like rain.', fr: 'Je n’aime pas la pluie.' } }, { id: 'l12-schnee', german: 'der Schnee', english: 'the snow', french: 'la neige', gender: 'der', syllables: ['SCHNEE'], pronunciation: 'dair SHNAY', example: { de: 'Im Winter gibt es Schnee.', en: 'In winter there is snow.', fr: 'En hiver, il y a de la neige.' } }, { id: 'l12-warm', german: 'warm', english: 'warm', french: 'chaud', gender: null, syllables: ['WARM'], pronunciation: 'varm', example: { de: 'Heute ist es warm.', en: 'Today it is warm.', fr: 'Aujourd’hui, il fait chaud.' } }, { id: 'l12-kalt', german: 'kalt', english: 'cold', french: 'froid', gender: null, syllables: ['KALT'], pronunciation: 'kahlt', example: { de: 'Im Winter ist es kalt.', en: 'In winter it is cold.', fr: 'En hiver, il fait froid.' } }] },

    { kind: 'grammar', note: {
      id: 'l12-wetter-es', title: 'Weather with es', titleFr: 'La météo avec es',
      lead: 'Weather sentences need es as a dummy subject. Heute ist es kalt: the verb stays second.',
      leadFr: 'Les phrases météo ont besoin de es comme sujet fictif. Heute ist es kalt : le verbe reste en deuxième.',
      explanationMd: 'German weather sentences need a subject, so they use **es** (“it”) even though “it” is nothing: **Es regnet. Es schneit. Es ist kalt.** Things that really shine have a real subject: **Die Sonne scheint.** Remember the **verb stays second**: **Heute ist es kalt.**',
      explanationMdFr: 'Les phrases météo allemandes ont besoin d’un sujet : elles utilisent **es** (« il ») même si ce « il » ne désigne rien : **Es regnet. Es schneit. Es ist kalt.** Ce qui brille vraiment a un vrai sujet : **Die Sonne scheint.** N’oublie pas que le **verbe reste en deuxième** : **Heute ist es kalt.**',
      tables: [{ title: 'Weather sentences', titleFr: 'Phrases météo', headers: ['Weather', 'Sentence'], headersFr: ['Temps', 'Phrase'],
        rows: [['warm / kalt', 'Es ist warm. / Es ist kalt.'], ['rain', 'Es regnet.'], ['snow', 'Es schneit.'], ['sun', 'Die Sonne scheint.'], ['ask', 'Wie ist das Wetter?']],
        rowsFr: [['chaud / froid', 'Es ist warm. / Es ist kalt.'], ['pluie', 'Es regnet.'], ['neige', 'Es schneit.'], ['soleil', 'Die Sonne scheint.'], ['demander', 'Wie ist das Wetter ?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'regnet.', role: 'verb' }], en: 'It is raining.', fr: 'Il pleut.' },
        { parts: [{ text: 'Heute', role: 'time' }, { text: 'ist', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'kalt.', role: 'other' }], en: 'Today it is cold.', fr: 'Aujourd’hui il fait froid.' },
      ],
      contrast: {
        a: { label: 'es (dummy subject)', labelFr: 'es (sujet fictif)', note: 'regnet, schneit, ist kalt', noteFr: 'regnet, schneit, ist kalt', examples: [g('Es regnet in Hamburg.', 'It is raining in Hamburg.', 'Il pleut à Hambourg.'), g('Es schneit oft.', 'It snows often.', 'Il neige souvent.')] },
        b: { label: 'a real subject', labelFr: 'un vrai sujet', note: 'Die Sonne scheint', noteFr: 'Die Sonne scheint', examples: [g('Die Sonne scheint.', 'The sun is shining.', 'Le soleil brille.'), g('Der Schnee ist weiß.', 'The snow is white.', 'La neige est blanche.')] },
      },
      examples: [
        g('Heute ist es kalt.', 'Today it is cold.', 'Aujourd’hui il fait froid.'),
        g('Es regnet in Hamburg.', 'It is raining in Hamburg.', 'Il pleut à Hambourg.'),
        g('Die Sonne scheint.', 'The sun is shining.', 'Le soleil brille.'),
        g('Im Winter gibt es Schnee.', 'In winter there is snow.', 'En hiver, il y a de la neige.'),
        g('Wie ist das Wetter?', 'What is the weather like?', 'Quel temps fait-il ?'),
        g('Heute ist es warm.', 'Today it is warm.', 'Aujourd’hui il fait chaud.'),
      ],
      mistakes: [
        { wrong: 'Regnet heute.', right: 'Es regnet heute.', why: 'A weather sentence needs the subject es.', whyFr: 'Une phrase météo a besoin du sujet es.' },
        { wrong: 'Heute es ist kalt.', right: 'Heute ist es kalt.', why: 'The verb stays second: Heute ist es.', whyFr: 'Le verbe reste en deuxième : Heute ist es.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l12-e1', prompt: '___ regnet heute. (it — weather subject)', answer: 'Es', hint: 'the impersonal weather subject', hintFr: 'le sujet impersonnel de la météo' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l12-e2', prompt: 'What does "Es ist kalt" mean?', promptFr: 'Que signifie « Es ist kalt » ?', options: ['It is warm', 'It is cold', 'It is raining'], optionsFr: ['Il fait chaud', 'Il fait froid', 'Il pleut'], answer: 1, explain: '"kalt" means cold.', explainFr: '« kalt » signifie froid.', hint: 'Focus on the word "kalt".', hintFr: 'Concentre-toi sur le mot « kalt ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l12-e3', pairs: [{ de: 'die Sonne', en: 'sun', fr: 'soleil' }, { de: 'der Regen', en: 'rain', fr: 'pluie' }, { de: 'der Schnee', en: 'snow', fr: 'neige' }], hint: 'Match each weather word to its meaning.', hintFr: 'Associe chaque mot de météo à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l12-e8', tokens: ['ist', 'kalt', 'es', 'Heute'], answer: ['Heute', 'ist', 'es', 'kalt'], hint: 'Time word first, then verb, then "es".', hintFr: 'Mot de temps d’abord, puis le verbe, puis « es ».' } },

    // ───────────── 2 · Seasons ─────────────
    { kind: 'chapter', title: 'Die Jahreszeiten', titleFr: 'Les saisons', blurb: 'Spring, summer, autumn, winter, and “im”.', blurbFr: 'Printemps, été, automne, hiver, et « im ».' },

    { kind: 'situation', title: 'Meine Lieblings-Jahreszeit', titleFr: 'Ma saison préférée',
      setting: 'Mara and Ben talk about their favourite season.', settingFr: 'Mara et Ben parlent de leur saison préférée.',
      lines: [
        line('Mara', 'Welche Jahreszeit magst du?', 'Which season do you like?', 'Quelle saison aimes-tu ?'),
        line('Ben', 'Ich mag den Sommer. Im Sommer schwimme ich gern.', 'I like summer. In summer I like swimming.', 'J’aime l’été. En été, j’aime nager.'),
        line('Mara', 'Ich mag den Winter. Im Winter schneit es oft.', 'I like winter. In winter it often snows.', 'J’aime l’hiver. En hiver, il neige souvent.'),
        line('Ben', 'Aber im Winter ist es kalt!', 'But in winter it is cold!', 'Mais en hiver il fait froid !'),
      ],
      words: [{ id: 'l12-sommer', german: 'der Sommer', english: 'the summer', french: 'l’été', gender: 'der', syllables: ['SOM', 'mer'], pronunciation: 'dair ZOM-mer', example: { de: 'Im Sommer schwimme ich.', en: 'In summer I swim.', fr: 'En été, je nage.' } }, { id: 'l12-winter', german: 'der Winter', english: 'the winter', french: 'l’hiver', gender: 'der', syllables: ['WIN', 'ter'], pronunciation: 'dair VIN-ter', example: { de: 'Der Winter ist kalt.', en: 'Winter is cold.', fr: 'L’hiver est froid.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l12-e12', prompt: 'When does Ben like swimming?', promptFr: 'Quand Ben aime-t-il nager ?', options: ['In summer', 'In winter', 'In spring'], optionsFr: ['En été', 'En hiver', 'Au printemps'], answer: 0, explain: 'He says: “Im Sommer schwimme ich gern.”', explainFr: 'Il dit : « Im Sommer schwimme ich gern. »', hint: 'Look for “im”.', hintFr: 'Cherche « im ».' } },

    { kind: 'grammar', note: {
      id: 'l12-jahreszeiten', title: 'The seasons and “im”', titleFr: 'Les saisons et « im »',
      lead: 'All seasons are der. Say in summer with im Sommer.',
      leadFr: 'Toutes les saisons sont der. Dis en été avec im Sommer.',
      explanationMd: 'The four seasons (**die Jahreszeiten**) are all **der**: **der Frühling, der Sommer, der Herbst, der Winter**. To say **in** a season use **im** (**in + dem**): **im Sommer**, **im Winter**. With a season at the start of the sentence the **verb stays second**: **Im Winter schneit es.**',
      explanationMdFr: 'Les quatre saisons (**die Jahreszeiten**) sont toutes **der** : **der Frühling, der Sommer, der Herbst, der Winter**. Pour dire **en** une saison, utilise **im** (**in + dem**) : **im Sommer**, **im Winter**. Avec une saison en début de phrase, le **verbe reste en deuxième** : **Im Winter schneit es.**',
      tables: [{ title: 'Seasons', titleFr: 'Les saisons', headers: ['Season', 'in the …'], headersFr: ['Saison', 'au / en …'],
        rows: [['der Frühling', 'im Frühling'], ['der Sommer', 'im Sommer'], ['der Herbst', 'im Herbst'], ['der Winter', 'im Winter']],
        rowsFr: [['der Frühling', 'im Frühling'], ['der Sommer', 'im Sommer'], ['der Herbst', 'im Herbst'], ['der Winter', 'im Winter']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Im Sommer', role: 'time' }, { text: 'ist', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'warm.', role: 'other' }], en: 'In summer it is warm.', fr: 'En été, il fait chaud.' },
        { parts: [{ text: 'Im Winter', role: 'time' }, { text: 'schneit', role: 'verb' }, { text: 'es.', role: 'subject' }], en: 'In winter it snows.', fr: 'En hiver, il neige.' },
      ],
      contrast: {
        a: { label: 'im + season or month', labelFr: 'im + saison ou mois', note: 'im Sommer, im Mai', noteFr: 'im Sommer, im Mai', examples: [g('Im Sommer schwimme ich.', 'In summer I swim.', 'En été, je nage.'), g('Im Mai ist es schön.', 'In May it is nice.', 'En mai, il fait beau.')] },
        b: { label: 'am + day', labelFr: 'am + jour', note: 'am Montag', noteFr: 'am Montag', examples: [g('Am Montag arbeite ich.', 'On Monday I work.', 'Le lundi, je travaille.'), g('Am Samstag schlafe ich lange.', 'On Saturday I sleep in.', 'Le samedi, je dors tard.')] },
      },
      examples: [
        g('Im Sommer ist es warm.', 'In summer it is warm.', 'En été, il fait chaud.'),
        g('Im Winter schneit es.', 'In winter it snows.', 'En hiver, il neige.'),
        g('Im Sommer schwimme ich.', 'In summer I swim.', 'En été, je nage.'),
        g('Im Herbst regnet es oft.', 'In autumn it often rains.', 'En automne, il pleut souvent.'),
        g('Im Frühling ist es schön.', 'In spring it is lovely.', 'Au printemps, il fait beau.'),
        g('Der Winter ist kalt.', 'The winter is cold.', 'L’hiver est froid.'),
      ],
      mistakes: [
        { wrong: 'In Sommer schwimme ich.', right: 'Im Sommer schwimme ich.', why: 'in + dem becomes im.', whyFr: 'in + dem devient im.' },
        { wrong: 'Am Sommer ist es warm.', right: 'Im Sommer ist es warm.', why: 'am is for days; seasons take im.', whyFr: 'am s’emploie avec les jours ; les saisons prennent im.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l12-e4', prompt: '___ Sommer schwimme ich. (in the)', answer: 'Im', hint: 'in + dem = im, used for seasons', hintFr: 'in + dem = im, pour les saisons' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l12-e6', word: 'Sonne', answer: 'die', hint: '"Sonne" (sun) is feminine.', hintFr: '« Sonne » (soleil) est féminin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l12-e7', prompt: 'Which is a season (Jahreszeit)?', promptFr: 'Lequel est une saison (Jahreszeit) ?', options: ['der Montag', 'der Sommer', 'der Bahnhof'], answer: 1, explain: '"der Sommer" (summer) is a season.', explainFr: '« der Sommer » (été) est une saison.', hint: 'Which word names a time of year?', hintFr: 'Quel mot nomme une période de l’année ?' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l12-e9', prompt: 'Die Sonne ___. (to shine)', answer: 'scheint', hint: 'er/sie/es form of scheinen', hintFr: 'forme er/sie/es de scheinen' } },

    // ───────────── 3 · Months ─────────────
    { kind: 'chapter', title: 'Die Monate', titleFr: 'Les mois', blurb: 'The twelve months.', blurbFr: 'Les douze mois.' },

    { kind: 'situation', title: 'Wann hast du Geburtstag?', titleFr: 'Quand est ton anniversaire ?',
      setting: 'Ben and Mara talk about their birthdays.', settingFr: 'Ben et Mara parlent de leurs anniversaires.',
      lines: [
        line('Ben', 'Wann hast du Geburtstag, Mara?', 'When is your birthday, Mara?', 'Quand est ton anniversaire, Mara ?'),
        line('Mara', 'Mein Geburtstag ist im Mai. Und dein Geburtstag?', 'My birthday is in May. And your birthday?', 'Mon anniversaire est en mai. Et ton anniversaire ?'),
        line('Ben', 'Mein Geburtstag ist im Dezember.', 'My birthday is in December.', 'Mon anniversaire est en décembre.'),
        line('Mara', 'Im Dezember ist es kalt. Im Mai ist es schön!', 'In December it is cold. In May it is lovely!', 'En décembre il fait froid. En mai, il fait beau !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l12-e13', prompt: 'When is Mara’s birthday?', promptFr: 'Quand est l’anniversaire de Mara ?', options: ['In May', 'In December', 'In July'], optionsFr: ['En mai', 'En décembre', 'En juillet'], answer: 0, explain: 'She says: “Mein Geburtstag ist im Mai.”', explainFr: 'Elle dit : « Mein Geburtstag ist im Mai. »', hint: 'Mara answers first.', hintFr: 'Mara répond en premier.' } },

    { kind: 'grammar', note: {
      id: 'l12-monate', title: 'The twelve months', titleFr: 'Les douze mois',
      lead: 'All months are der. Say in May with im Mai.',
      leadFr: 'Tous les mois sont der. Dis en mai avec im Mai.',
      explanationMd: 'The twelve months are all **der** and, like the seasons, take **im**: **im Mai**, **im Dezember**. Most look like English; watch **Januar, März, Mai, Juni, Juli**. A birthday: **Mein Geburtstag ist im Mai.**',
      explanationMdFr: 'Les douze mois sont tous **der** et, comme les saisons, prennent **im** : **im Mai**, **im Dezember**. Beaucoup ressemblent au français ; fais attention à **Januar, März, Mai, Juni, Juli**. Un anniversaire : **Mein Geburtstag ist im Mai.**',
      tables: [
        { title: 'January to June', titleFr: 'Janvier à juin', headers: ['1', '2', '3', '4', '5', '6'], headersFr: ['1', '2', '3', '4', '5', '6'], rows: [['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni']], rowsFr: [['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni']] },
        { title: 'July to December', titleFr: 'Juillet à décembre', headers: ['7', '8', '9', '10', '11', '12'], headersFr: ['7', '8', '9', '10', '11', '12'], rows: [['Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']], rowsFr: [['Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']] },
      ],
      anatomy: [
        { parts: [{ text: 'Mein Geburtstag', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'im Mai.', role: 'time' }], en: 'My birthday is in May.', fr: 'Mon anniversaire est en mai.' },
        { parts: [{ text: 'Im Dezember', role: 'time' }, { text: 'ist', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'kalt.', role: 'other' }], en: 'In December it is cold.', fr: 'En décembre, il fait froid.' },
      ],
      contrast: {
        a: { label: 'im + month', labelFr: 'im + mois', note: 'in a month', noteFr: 'pendant un mois', examples: [g('Mein Geburtstag ist im Mai.', 'My birthday is in May.', 'Mon anniversaire est en mai.'), g('Im Dezember ist es kalt.', 'In December it is cold.', 'En décembre, il fait froid.')] },
        b: { label: 'am + day', labelFr: 'am + jour', note: 'on a day', noteFr: 'un jour précis', examples: [g('Der Kurs beginnt am Montag.', 'The course starts on Monday.', 'Le cours commence lundi.'), g('Am Freitag habe ich frei.', 'On Friday I have off.', 'Vendredi, j’ai congé.')] },
      },
      examples: [
        g('Im Dezember ist es kalt.', 'In December it is cold.', 'En décembre, il fait froid.'),
        g('Mein Geburtstag ist im Mai.', 'My birthday is in May.', 'Mon anniversaire est en mai.'),
        g('Im Juli fahre ich ans Meer.', 'In July I go to the sea.', 'En juillet, je vais à la mer.'),
        g('Im Januar schneit es oft.', 'In January it often snows.', 'En janvier, il neige souvent.'),
        g('Die Ferien beginnen im August.', 'The holidays start in August.', 'Les vacances commencent en août.'),
        g('Im September ist es noch warm.', 'In September it is still warm.', 'En septembre, il fait encore chaud.'),
      ],
      mistakes: [
        { wrong: 'In Mai ist es schön.', right: 'Im Mai ist es schön.', why: 'in + dem becomes im before a month.', whyFr: 'in + dem devient im devant un mois.' },
        { wrong: 'Mein Geburtstag ist am Mai.', right: 'Mein Geburtstag ist im Mai.', why: 'Months take im, not am.', whyFr: 'Les mois prennent im, pas am.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l12-e14', prompt: 'Mein Geburtstag ist ___ Mai. (in the)', promptFr: 'Mein Geburtstag ist ___ Mai. (en)', answer: 'im', hint: 'in + dem', hintFr: 'in + dem' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l12-e15', prompt: 'Which one is a month?', promptFr: 'Lequel est un mois ?', options: ['Dezember', 'Sommer', 'Montag'], answer: 0, explain: 'Dezember is a month; Sommer is a season and Montag a day.', explainFr: 'Dezember est un mois ; Sommer est une saison et Montag un jour.', hint: 'It is the last month of the year.', hintFr: 'C’est le dernier mois de l’année.' } },

    { kind: 'pronunciation', focus: 'The "w" is an English "v" (Wetter, Winter), and "sch" is "sh" (Schnee, scheinen)', focusFr: 'Le « w » est un « v » anglais (Wetter, Winter), et « sch » est « ch » (Schnee, scheinen)', items: [{ id: 'l12-wetter-pron', german: 'Wetter', english: 'weather', french: 'météo', gender: null, syllables: ['WET', 'ter'], pronunciation: 'VET-ter', example: { de: 'Das Wetter ist schön.', en: 'The weather is nice.', fr: 'Le temps est beau.' } }, { id: 'l12-schnee-pron', german: 'Schnee', english: 'snow', french: 'neige', gender: null, syllables: ['SCHNEE'], pronunciation: 'SHNAY', example: { de: 'Der Schnee ist weiß.', en: 'The snow is white.', fr: 'La neige est blanche.' } }] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l12-e5', prompt: 'Listen. How is the weather today?', promptFr: 'Écoute. Quel temps fait-il aujourd’hui ?', audio: { ttsText: 'Wie ist das Wetter heute? Heute ist es warm und die Sonne scheint.' }, options: ['Warm and sunny', 'Cold and snowy', 'Rainy'], optionsFr: ['Chaud et ensoleillé', 'Froid et neigeux', 'Pluvieux'], answer: 0, hint: 'Listen for "warm" and "die Sonne scheint".', hintFr: 'Écoute « warm » et « die Sonne scheint ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l12-e10', prompt: 'Listen. In which season does it snow?', promptFr: 'Écoute. En quelle saison neige-t-il ?', audio: { ttsText: 'Im Winter ist es kalt und es schneit oft.' }, options: ['Winter', 'Summer', 'Spring'], optionsFr: ['Hiver', 'Été', 'Printemps'], answer: 0, hint: 'Listen for the season at the start.', hintFr: 'Écoute la saison au début.' } },

    { kind: 'wrapup',
      summary: 'You can now describe the weather with **es** (**Es regnet. Es ist kalt.**), name the seasons and months, and say “in summer / in May” with **im**. 🎉',
      summaryFr: 'Tu sais maintenant décrire le temps avec **es** (**Es regnet. Es ist kalt.**), nommer les saisons et les mois, et dire « en été / en mai » avec **im**. 🎉',
      card: { title: 'Lesson 22 on one page', titleFr: 'La leçon 22 en une page', sections: [
        { heading: 'Weather', headingFr: 'Le temps', rows: [g('Es regnet. Es schneit. Es ist kalt / warm.', 'es is the subject', 'es est le sujet'), g('Die Sonne scheint.', 'a real subject', 'un vrai sujet'), g('Wie ist das Wetter?', 'What is the weather like?', 'Quel temps fait-il ?')] },
        { heading: 'Seasons and months', headingFr: 'Saisons et mois', rows: [g('im Frühling, im Sommer, im Herbst, im Winter', 'in + season', 'en / au + saison'), g('im Januar … im Dezember', 'in + month', 'en + mois'), g('Im Winter schneit es.', 'verb stays second', 'le verbe reste en deuxième')] },
      ] } },
  ],
};
