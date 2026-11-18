import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion17: Lesson = {
  id: 'a2-l17', level: 'A2', module: 2, number: 7,
  title: { de: 'Zeitangaben', en: 'Expressing time', fr: 'Exprimer le temps' },
  theme: 'Events and festivals: von … bis, von … an, seit, über, zwischen, dates and times of day', themeFr: 'Événements et festivals : von … bis, von … an, seit, über, zwischen, dates et moments de la journée',
  goals: ['Say when something starts, ends and how long it lasts (von … bis, von … an)', 'Say how long something has been going on (seit + Dativ)', 'Use über + Akkusativ and zwischen + Dativ for time', 'Read a festival programme and make plans'], goalsFr: ['Dire quand quelque chose commence, finit et combien de temps cela dure (von … bis, von … an)', 'Dire depuis combien de temps quelque chose dure (seit + datif)', 'Utiliser über + accusatif et zwischen + datif pour le temps', 'Lire un programme de festival et faire des projets'],
  canDo: g('Ich kann ein Festivalprogramm lesen und sagen, wann etwas beginnt, endet und wie lange es dauert.', 'I can read a festival programme and say when something starts, ends and how long it lasts.', 'Je sais lire un programme de festival et dire quand quelque chose commence, finit et combien de temps cela dure.'),
  steps: [
    { kind: 'intro', title: 'Feste und Zeitangaben 🎪', titleFr: 'Fêtes et indications de temps 🎪',
      scene: 'Lara and Tim study the programme of a summer festival and plan their weekend.', sceneFr: 'Lara et Tim étudient le programme d’un festival d’été et planifient leur week-end.',
      goals: ['Read a programme with times and dates', 'Say when something starts, ends and how long it lasts', 'Use seit, über and zwischen correctly'],
      goalsFr: ['Lire un programme avec horaires et dates', 'Dire quand quelque chose commence, finit et combien de temps cela dure', 'Utiliser correctement seit, über et zwischen'] },

    // ───────────── 1 · Programme ─────────────
    { kind: 'chapter', title: 'Das Festivalprogramm', titleFr: 'Le programme du festival', blurb: 'von … bis, von … an.', blurbFr: 'von … bis, von … an.' },

    { kind: 'situation', title: 'Was läuft wann?', titleFr: 'Que se passe-t-il quand ?',
      setting: 'Lara reads the festival flyer to Tim.', settingFr: 'Lara lit le dépliant du festival à Tim.',
      lines: [
        line('Lara', 'Schau, das Festival ist jedes Jahr im Juli. Es dauert von Freitag bis Sonntag.', 'Look, the festival is every July. It lasts from Friday to Sunday.', 'Regarde, le festival a lieu chaque année en juillet. Il dure du vendredi au dimanche.'),
        line('Tim', 'Und wann spielt die Band auf der Bühne?', 'And when does the band play on the stage?', 'Et quand le groupe joue-t-il sur scène ?'),
        line('Lara', 'Am Nachmittag. Am Vormittag gibt es eine Ausstellung von vielen Künstlern.', 'In the afternoon. In the morning there is an exhibition by many artists.', 'L’après-midi. Le matin, il y a une exposition de nombreux artistes.'),
        line('Tim', 'Wie lange ist die Ausstellung geöffnet?', 'How long is the exhibition open?', 'Jusqu’à quand l’exposition est-elle ouverte ?'),
        line('Lara', 'Von 10 bis 18 Uhr. Und von 18 Uhr an ist der Eintritt frei.', 'From 10 to 6 p.m. And from 6 p.m. on, admission is free.', 'De 10 à 18 heures. Et à partir de 18 heures, l’entrée est gratuite.'),
        line('Tim', 'Super! Dann kaufen wir die Eintrittskarten für Samstag.', 'Great! Then we’ll buy the tickets for Saturday.', 'Super ! Alors nous achetons les billets pour samedi.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l17-e13', prompt: 'When is admission free?', promptFr: 'Quand l’entrée est-elle gratuite ?', options: ['From 6 p.m. on', 'In the morning', 'On Sunday only'], optionsFr: ['À partir de 18 heures', 'Le matin', 'Seulement le dimanche'], answer: 0, explain: 'Lara says: “Von 18 Uhr an ist der Eintritt frei.”', explainFr: 'Lara dit : « Von 18 Uhr an ist der Eintritt frei. »', hint: 'Look for “von … an”.', hintFr: 'Cherche « von … an ».' } },

    { kind: 'wordgroup', title: 'Veranstaltung', titleFr: 'Manifestation',
      items: [{ id: 'a2l17-veranstaltung', german: 'die Veranstaltung', english: 'the event', french: 'l’événement / la manifestation', gender: 'die', syllables: ['ver', 'AN', 'stal', 'tung'], pronunciation: 'dee fer-AHN-shtahl-toong', example: { de: 'Die Veranstaltung ist am Samstag im Park.', en: 'The event is on Saturday in the park.', fr: 'L’événement a lieu samedi dans le parc.' } }, { id: 'a2l17-festival', german: 'das Festival', english: 'the festival', french: 'le festival', gender: 'das', syllables: ['FES', 'ti', 'val'], pronunciation: 'dahs FES-ti-vahl', example: { de: 'Das Festival ist jedes Jahr im August.', en: 'The festival takes place every August.', fr: 'Le festival a lieu chaque année en août.' } }, { id: 'a2l17-eintrittskarte', german: 'die Eintrittskarte', english: 'the ticket (admission)', french: 'le billet d’entrée', gender: 'die', syllables: ['EIN', 'tritts', 'kar', 'te'], pronunciation: 'dee INE-trits-kar-te', example: { de: 'Die Eintrittskarte kostet zwölf Euro.', en: 'The ticket costs twelve euros.', fr: 'Le billet d’entrée coûte douze euros.' } }, { id: 'a2l17-buehne', german: 'die Bühne', english: 'the stage', french: 'la scène', gender: 'die', syllables: ['BÜH', 'ne'], pronunciation: 'dee BUE-ne', example: { de: 'Die Band steht schon auf der Bühne.', en: 'The band is already on the stage.', fr: 'Le groupe est déjà sur scène.' } }, { id: 'a2l17-kuenstler', german: 'der Künstler', english: 'the artist', french: 'l’artiste', gender: 'der', syllables: ['KÜNST', 'ler'], pronunciation: 'dair KUENST-ler', example: { de: 'Viele Künstler zeigen ihre Bilder.', en: 'Many artists are showing their paintings.', fr: 'Beaucoup d’artistes montrent leurs tableaux.' } }, { id: 'a2l17-programm', german: 'das Programm', english: 'the programme', french: 'le programme', gender: 'das', syllables: ['pro', 'GRAMM'], pronunciation: 'dahs pro-GRAHM', example: { de: 'Im Programm steht ein Konzert um 20 Uhr.', en: 'The programme lists a concert at 8 p.m.', fr: 'Le programme indique un concert à 20 heures.' } }, { id: 'a2l17-ausstellung', german: 'die Ausstellung', english: 'the exhibition', french: 'l’exposition', gender: 'die', syllables: ['AUS', 'stel', 'lung'], pronunciation: 'dee OWS-shtel-loong', example: { de: 'Die Ausstellung ist täglich geöffnet.', en: 'The exhibition is open daily.', fr: 'L’exposition est ouverte tous les jours.' } }] },

    { kind: 'wordgroup', title: 'Zeit', titleFr: 'Le temps',
      items: [{ id: 'a2l17-termin', german: 'der Termin', english: 'the appointment / date', french: 'le rendez-vous / la date', gender: 'der', syllables: ['ter', 'MIN'], pronunciation: 'dair ter-MEEN', example: { de: 'Ich habe am Freitag einen Termin.', en: 'I have an appointment on Friday.', fr: 'J’ai un rendez-vous vendredi.' } }, { id: 'a2l17-vormittag', german: 'der Vormittag', english: 'the (late) morning', french: 'la matinée', gender: 'der', syllables: ['VOR', 'mit', 'tag'], pronunciation: 'dair FOHR-mit-tahk', example: { de: 'Am Vormittag ist es noch ruhig.', en: 'In the morning it is still quiet.', fr: 'Le matin, c’est encore calme.' } }, { id: 'a2l17-nachmittag', german: 'der Nachmittag', english: 'the afternoon', french: 'l’après-midi', gender: 'der', syllables: ['NACH', 'mit', 'tag'], pronunciation: 'dair NAHKH-mit-tahk', example: { de: 'Am Nachmittag spielt die Band.', en: 'In the afternoon the band plays.', fr: 'L’après-midi, le groupe joue.' } }, { id: 'a2l17-dauern', german: 'dauern', english: 'to last', french: 'durer', gender: null, syllables: ['DAU', 'ern'], pronunciation: 'DOW-ern', example: { de: 'Wie lange dauert das Konzert?', en: 'How long does the concert last?', fr: 'Combien de temps dure le concert ?' } }, { id: 'a2l17-bis', german: 'bis', english: 'until / to', french: 'jusqu’à', gender: null, syllables: ['BIS'], pronunciation: 'biss', example: { de: 'Die Party dauert bis Mitternacht.', en: 'The party lasts until midnight.', fr: 'La fête dure jusqu’à minuit.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l17-von-bis', title: 'von … bis and von … an (ab)', titleFr: 'von … bis et von … an (ab)',
      lead: 'von … bis = start and end. von … an / ab = only the start.',
      leadFr: 'von … bis = début et fin. von … an / ab = seulement le début.',
      explanationMd: 'Use **von … bis** for a **start and an end**, and **von … an** (or **ab**) when only the **start** is given. For dates say **am 3. Mai** (am dritten Mai) and **vom 3. bis zum 5. Mai** (**vom** = von dem, **zum** = zu dem). Useful questions: **Wann?**, **Von wann bis wann?**, **Ab wann?** and **Wie lange?**',
      explanationMdFr: 'Utilise **von … bis** pour un **début et une fin**, et **von … an** (ou **ab**) quand seul le **début** est donné. Pour les dates, dis **am 3. Mai** (am dritten Mai) et **vom 3. bis zum 5. Mai** (**vom** = von dem, **zum** = zu dem). Questions utiles : **Wann ?**, **Von wann bis wann ?**, **Ab wann ?** et **Wie lange ?**',
      tables: [{ title: 'Start and end', titleFr: 'Début et fin', headers: ['Structure', 'Example', 'Question'], headersFr: ['Structure', 'Exemple', 'Question'],
        rows: [['von … bis', 'Von 10 bis 18 Uhr ist die Ausstellung geöffnet.', 'Von wann bis wann?'], ['von … an', 'Von 18 Uhr an ist der Eintritt frei.', 'Ab wann?'], ['ab', 'Ab 18 Uhr ist der Eintritt frei.', 'Ab wann?'], ['vom … bis zum …', 'Das Festival läuft vom 3. bis zum 5. Juli.', 'Wann? / Wie lange?']],
        rowsFr: [['von … bis', 'Von 10 bis 18 Uhr ist die Ausstellung geöffnet.', 'Von wann bis wann ?'], ['von … an', 'Von 18 Uhr an ist der Eintritt frei.', 'Ab wann ?'], ['ab', 'Ab 18 Uhr ist der Eintritt frei.', 'Ab wann ?'], ['vom … bis zum …', 'Das Festival läuft vom 3. bis zum 5. Juli.', 'Wann ? / Combien de temps ?']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Das Festival', role: 'subject' }, { text: 'dauert', role: 'verb' }, { text: 'von Freitag bis Sonntag.', role: 'time' }], en: 'The festival lasts from Friday to Sunday.', fr: 'Le festival dure du vendredi au dimanche.' },
        { parts: [{ text: 'Von 18 Uhr an', role: 'time' }, { text: 'ist', role: 'verb' }, { text: 'der Eintritt', role: 'subject' }, { text: 'frei.', role: 'other' }], en: 'From 6 p.m. on, admission is free.', fr: 'À partir de 18 heures, l’entrée est gratuite.' },
      ],
      contrast: {
        a: { label: 'von … bis', labelFr: 'von … bis', note: 'start and end', noteFr: 'début et fin', examples: [g('Das Festival dauert von Freitag bis Sonntag.', 'The festival lasts from Friday to Sunday.', 'Le festival dure du vendredi au dimanche.'), g('Die Ausstellung ist von 10 bis 18 Uhr geöffnet.', 'The exhibition is open from 10 to 6.', 'L’exposition est ouverte de 10 à 18 heures.')] },
        b: { label: 'von … an / ab', labelFr: 'von … an / ab', note: 'start only', noteFr: 'début seulement', examples: [g('Von 18 Uhr an ist der Eintritt frei.', 'From 6 p.m. on, admission is free.', 'À partir de 18 heures, l’entrée est gratuite.'), g('Ab wann ist der Eintritt frei?', 'From when is admission free?', 'À partir de quand l’entrée est-elle gratuite ?')] },
      },
      examples: [
        g('Das Festival dauert von Freitag bis Sonntag.', 'The festival lasts from Friday to Sunday.', 'Le festival dure du vendredi au dimanche.'),
        g('Die Ausstellung ist von 10 bis 18 Uhr geöffnet.', 'The exhibition is open from 10 to 6.', 'L’exposition est ouverte de 10 à 18 heures.'),
        g('Von 18 Uhr an ist der Eintritt frei.', 'From 6 p.m. on, admission is free.', 'À partir de 18 heures, l’entrée est gratuite.'),
        g('Das Festival läuft vom 3. bis zum 5. Juli.', 'The festival runs from 3 to 5 July.', 'Le festival a lieu du 3 au 5 juillet.'),
        g('Ab wann ist der Eintritt frei? — Von 18 Uhr an.', 'From when is admission free? — From 6 p.m. on.', 'À partir de quand l’entrée est-elle gratuite ? — À partir de 18 heures.'),
        g('Die Party dauert bis Mitternacht.', 'The party lasts until midnight.', 'La fête dure jusqu’à minuit.'),
      ],
      mistakes: [
        { wrong: 'Das Festival dauert von Freitag zu Sonntag.', right: 'Das Festival dauert von Freitag bis Sonntag.', why: 'The end of a period is bis, not zu.', whyFr: 'La fin d’une période se dit bis, pas zu.' },
        { wrong: 'Wir kommen am 3. bis 5. Juli.', right: 'Wir kommen vom 3. bis zum 5. Juli.', why: 'With dates use vom … bis zum …', whyFr: 'Avec des dates, utilise vom … bis zum …' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l17-e1', prompt: 'Das Festival dauert ___ Freitag bis Sonntag.', promptFr: 'Das Festival dauert ___ Freitag bis Sonntag.', answer: 'von', hint: 'von … bis', hintFr: 'von … bis' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l17-e4', prompt: 'Von 10 Uhr ___ ist die Ausstellung geöffnet. (from … onwards)', promptFr: 'Von 10 Uhr ___ ist die Ausstellung geöffnet. (à partir de)', answer: 'an', hint: 'von … an', hintFr: 'von … an' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l17-e7', tokens: ['bis', 'Das', 'von', 'dauert', 'Freitag', 'Festival', 'Sonntag'], answer: ['Das', 'Festival', 'dauert', 'von', 'Freitag', 'bis', 'Sonntag'], hint: 'Subject + verb, then "von … bis …".', hintFr: 'Sujet + verbe, puis « von … bis … ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l17-e8', prompt: 'Listen. On which day is the exhibition closed?', promptFr: 'Écoute. Quel jour l’exposition est-elle fermée ?', audio: { ttsText: 'Die Ausstellung ist von Dienstag bis Sonntag geöffnet. Montags ist sie geschlossen.' }, options: ['Monday', 'Sunday', 'Tuesday'], optionsFr: ['Lundi', 'Dimanche', 'Mardi'], answer: 0, hint: 'Listen for "geschlossen".', hintFr: 'Écoute « geschlossen ».' } },

    // ───────────── 2 · seit ─────────────
    { kind: 'chapter', title: 'seit: Was dauert schon an?', titleFr: 'seit : ce qui dure déjà', blurb: 'seit + Dativ, Präsens.', blurbFr: 'seit + datif, présent.' },

    { kind: 'situation', title: 'Seit wann machst du das?', titleFr: 'Depuis quand fais-tu cela ?',
      setting: 'At the festival Lara meets a musician.', settingFr: 'Au festival, Lara rencontre une musicienne.',
      lines: [
        line('Lara', 'Wow, du spielst toll! Seit wann spielst du Gitarre?', 'Wow, you play great! Since when have you been playing guitar?', 'Waouh, tu joues très bien ! Depuis quand joues-tu de la guitare ?'),
        line('Sara', 'Seit drei Jahren. Und ich wohne seit dem 1. Mai in Wien.', 'For three years. And I have lived in Vienna since 1 May.', 'Depuis trois ans. Et j’habite à Vienne depuis le 1er mai.'),
        line('Lara', 'Wie schön! Wir warten schon seit zwei Stunden auf die nächste Band.', 'How nice! We have been waiting for the next band for two hours.', 'Comme c’est bien ! Nous attendons le prochain groupe depuis deux heures.'),
        line('Sara', 'Es regnet seit einer Woche, aber heute ist es zum Glück trocken.', 'It has been raining for a week, but luckily it is dry today.', 'Il pleut depuis une semaine, mais heureusement il fait sec aujourd’hui.'),
      ],
      words: [{ id: 'a2l17-seit', german: 'seit', english: 'since / for (up to now)', french: 'depuis', gender: null, syllables: ['SEIT'], pronunciation: 'zite', example: { de: 'Ich spiele seit zwei Jahren Gitarre.', en: 'I have been playing guitar for two years.', fr: 'Je joue de la guitare depuis deux ans.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l17-e14', prompt: 'How long has Sara been playing guitar?', promptFr: 'Depuis combien de temps Sara joue-t-elle de la guitare ?', options: ['Three years', 'Three months', 'Three days'], optionsFr: ['Trois ans', 'Trois mois', 'Trois jours'], answer: 0, explain: 'She says: “Seit drei Jahren.”', explainFr: 'Elle dit : « Seit drei Jahren. »', hint: 'Look for “seit”.', hintFr: 'Cherche « seit ».' } },

    { kind: 'grammar', note: {
      id: 'a2l17-seit', title: 'seit + dative', titleFr: 'seit + datif',
      lead: 'seit = it started in the past and is still true now. Dative + present tense.',
      leadFr: 'seit = cela a commencé dans le passé et c’est encore vrai maintenant. Datif + présent.',
      explanationMd: '**seit** (since / for) says that something **started in the past and is still true now**. It takes the **dative**, and the verb stays in the **present tense**: **Ich lerne seit einem Jahr Deutsch.** Plural dative adds **-n**: **seit zwei Stunden**. Questions: **Seit wann …?** (starting point) or **Wie lange …?** (duration).',
      explanationMdFr: '**seit** (depuis) dit que quelque chose a **commencé dans le passé et dure encore**. Il prend le **datif**, et le verbe reste au **présent** : **Ich lerne seit einem Jahr Deutsch.** Au pluriel, le datif ajoute **-n** : **seit zwei Stunden**. Questions : **Seit wann …?** (point de départ) ou **Wie lange …?** (durée).',
      tables: [{ title: 'seit + dative', titleFr: 'seit + datif', headers: ['Gender', 'seit + dative', 'Example'], headersFr: ['Genre', 'seit + datif', 'Exemple'],
        rows: [['m', 'seit einem / dem', 'seit einem Monat · seit dem 1. Mai'], ['f', 'seit einer / der', 'seit einer Woche · seit der Schulzeit'], ['n', 'seit einem / dem', 'seit einem Jahr'], ['plural', 'seit zwei … + -n', 'seit zwei Stunden · seit drei Jahren']],
        rowsFr: [['m', 'seit einem / dem', 'seit einem Monat · seit dem 1. Mai'], ['f', 'seit einer / der', 'seit einer Woche · seit der Schulzeit'], ['n', 'seit einem / dem', 'seit einem Jahr'], ['pluriel', 'seit zwei … + -n', 'seit zwei Stunden · seit drei Jahren']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'lerne', role: 'verb' }, { text: 'seit einem Jahr', role: 'time' }, { text: 'Deutsch.', role: 'accusative' }], en: 'I have been learning German for a year.', fr: 'J’apprends l’allemand depuis un an.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'warten', role: 'verb' }, { text: 'seit zwei Stunden.', role: 'time' }], en: 'We have been waiting for two hours.', fr: 'Nous attendons depuis deux heures.' },
      ],
      contrast: {
        a: { label: 'seit + present', labelFr: 'seit + présent', note: 'still going on', noteFr: 'cela dure encore', examples: [g('Ich lerne seit einem Jahr Deutsch.', 'I have been learning German for a year.', 'J’apprends l’allemand depuis un an.'), g('Es regnet seit einer Woche.', 'It has been raining for a week.', 'Il pleut depuis une semaine.')] },
        b: { label: 'vor + dative', labelFr: 'vor + datif', note: 'finished, in the past', noteFr: 'terminé, dans le passé', examples: [g('Vor einem Jahr habe ich angefangen.', 'A year ago I started.', 'Il y a un an, j’ai commencé.'), g('Vor einer Woche hat es geregnet.', 'A week ago it rained.', 'Il y a une semaine, il a plu.')] },
      },
      examples: [
        g('Ich lerne seit einem Jahr Deutsch.', 'I have been learning German for a year.', 'J’apprends l’allemand depuis un an.'),
        g('Seit wann spielst du Gitarre? — Seit drei Jahren.', 'Since when have you been playing guitar? — For three years.', 'Depuis quand joues-tu de la guitare ? — Depuis trois ans.'),
        g('Er wohnt seit der Schulzeit hier.', 'He has lived here since school days.', 'Il habite ici depuis l’école.'),
        g('Wir warten seit zwei Stunden.', 'We have been waiting for two hours.', 'Nous attendons depuis deux heures.'),
        g('Es regnet seit einer Woche.', 'It has been raining for a week.', 'Il pleut depuis une semaine.'),
        g('Ich wohne seit dem 1. Mai in Wien.', 'I have lived in Vienna since 1 May.', 'J’habite à Vienne depuis le 1er mai.'),
      ],
      mistakes: [
        { wrong: 'Ich habe seit einem Jahr Deutsch gelernt.', right: 'Ich lerne seit einem Jahr Deutsch.', why: 'seit goes with the present tense.', whyFr: 'seit va avec le présent.' },
        { wrong: 'Wir warten seit zwei Stunden.', right: 'Wir warten seit zwei Stunden.', why: 'Correct — the dative plural of Stunde is Stunden.', whyFr: 'Correct — le datif pluriel de Stunde est Stunden.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l17-e2', prompt: 'Ich lerne ___ einem Jahr Deutsch. (since / for)', promptFr: 'Ich lerne ___ einem Jahr Deutsch. (depuis)', answer: 'seit', hint: 'Still going on now → seit + dative.', hintFr: 'Ça continue maintenant → seit + datif.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l17-e5', prompt: 'Wir warten seit zwei Stunde__. (dative plural)', promptFr: 'Wir warten seit zwei Stunde__. (datif pluriel)', answer: 'n', hint: 'dative plural adds -n', hintFr: 'le datif pluriel ajoute -n' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l17-e9', prompt: 'Seit ___ Woche regnet es.', promptFr: 'Seit ___ Woche regnet es.', options: ['einer', 'eine', 'einem'], answer: 0, explain: '"seit" takes the dative; feminine dative: einer Woche.', explainFr: '« seit » veut le datif ; datif féminin : einer Woche.', hint: 'die Woche → dative feminine.', hintFr: 'die Woche → datif féminin.' } },

    // ───────────── 3 · über / zwischen ─────────────
    { kind: 'chapter', title: 'über, zwischen, Tageszeiten', titleFr: 'über, zwischen, moments de la journée', blurb: 'Lange Zeiträume und Zeitfenster.', blurbFr: 'Longues durées et créneaux.' },

    { kind: 'situation', title: 'Wann ist Pause?', titleFr: 'Quand est la pause ?',
      setting: 'The friends plan their Saturday at the festival.', settingFr: 'Les amis planifient leur samedi au festival.',
      lines: [
        line('Tim', 'Die Führung beginnt um 15 Uhr und dauert über eine Stunde.', 'The tour begins at 3 p.m. and lasts more than an hour.', 'La visite guidée commence à 15 heures et dure plus d’une heure.'),
        line('Lara', 'Zwischen 14 und 16 Uhr spielt keine Band. Da ist Pause.', 'Between 2 and 4 p.m. no band plays. That’s the break.', 'Entre 14 et 16 heures, aucun groupe ne joue. C’est la pause.'),
        line('Tim', 'Am Vormittag bleiben wir im Hotel, am Abend gehen wir zum Konzert.', 'In the morning we stay at the hotel, in the evening we go to the concert.', 'Le matin, nous restons à l’hôtel, le soir nous allons au concert.'),
        line('Lara', 'Und wir bleiben über das Wochenende in Wien.', 'And we’ll stay in Vienna over the weekend.', 'Et nous restons à Vienne pendant tout le week-end.'),
      ],
      words: [{ id: 'a2l17-zwischen', german: 'zwischen', english: 'between', french: 'entre', gender: null, syllables: ['ZWI', 'schen'], pronunciation: 'TSVISH-en', example: { de: 'Zwischen 14 und 16 Uhr ist Pause.', en: 'Between 2 and 4 p.m. there is a break.', fr: 'Entre 14 et 16 heures, il y a une pause.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l17-ueber-zwischen', title: 'über + accusative, zwischen + dative', titleFr: 'über + accusatif, zwischen + datif',
      lead: 'über = for more than / over. zwischen = a time window. Times of day: am Vormittag, am Abend, in der Nacht.',
      leadFr: 'über = plus de / pendant. zwischen = une plage horaire. Moments : am Vormittag, am Abend, in der Nacht.',
      explanationMd: '**über + accusative** names a **longer stretch** of time (“for more than”, “over”): **über eine Stunde**, **über das Wochenende**. **zwischen + dative** marks a **time window**: **zwischen 14 und 16 Uhr**, **zwischen dem 5. und 7. Mai**. Times of day: **am Vormittag**, **am Nachmittag**, **am Abend**, **in der Nacht**.',
      explanationMdFr: '**über + accusatif** nomme une **longue durée** (« plus de », « pendant ») : **über eine Stunde**, **über das Wochenende**. **zwischen + datif** marque une **plage horaire** : **zwischen 14 und 16 Uhr**, **zwischen dem 5. und 7. Mai**. Moments de la journée : **am Vormittag**, **am Nachmittag**, **am Abend**, **in der Nacht**.',
      tables: [{ title: 'More time words', titleFr: 'D’autres mots de temps', headers: ['Word', 'Case', 'Example'], headersFr: ['Mot', 'Cas', 'Exemple'],
        rows: [['über', 'accusative', 'Die Führung dauert über eine Stunde.'], ['zwischen', 'dative', 'Zwischen 14 und 16 Uhr ist Pause.'], ['am Vormittag', 'dative', 'Am Vormittag ist es ruhig.'], ['in der Nacht', 'dative', 'In der Nacht schläft die Stadt.']],
        rowsFr: [['über', 'accusatif', 'Die Führung dauert über eine Stunde.'], ['zwischen', 'datif', 'Zwischen 14 und 16 Uhr ist Pause.'], ['am Vormittag', 'datif', 'Am Vormittag ist es ruhig.'], ['in der Nacht', 'datif', 'In der Nacht schläft die Stadt.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Die Führung', role: 'subject' }, { text: 'dauert', role: 'verb' }, { text: 'über eine Stunde.', role: 'time' }], en: 'The tour lasts more than an hour.', fr: 'La visite dure plus d’une heure.' },
        { parts: [{ text: 'Zwischen 14 und 16 Uhr', role: 'time' }, { text: 'spielt', role: 'verb' }, { text: 'keine Band.', role: 'subject' }], en: 'Between 2 and 4 p.m. no band plays.', fr: 'Entre 14 et 16 heures, aucun groupe ne joue.' },
      ],
      contrast: {
        a: { label: 'über + accusative', labelFr: 'über + accusatif', note: 'a long stretch', noteFr: 'une longue durée', examples: [g('Das Festival läuft über drei Wochen.', 'The festival runs for over three weeks.', 'Le festival dure plus de trois semaines.'), g('Wir bleiben über das Wochenende in Wien.', 'We stay in Vienna over the weekend.', 'Nous restons à Vienne tout le week-end.')] },
        b: { label: 'zwischen + dative', labelFr: 'zwischen + datif', note: 'a time window', noteFr: 'une plage horaire', examples: [g('Zwischen 14 und 16 Uhr ist Pause.', 'Between 2 and 4 p.m. is the break.', 'Entre 14 et 16 heures, c’est la pause.'), g('Zwischen dem 5. und 7. Mai bin ich nicht da.', 'Between 5 and 7 May I am not here.', 'Entre le 5 et le 7 mai, je ne suis pas là.')] },
      },
      examples: [
        g('Die Führung dauert über eine Stunde.', 'The tour lasts more than an hour.', 'La visite dure plus d’une heure.'),
        g('Das Festival läuft über drei Wochen.', 'The festival runs for over three weeks.', 'Le festival dure plus de trois semaines.'),
        g('Wir bleiben über das Wochenende in Wien.', 'We stay in Vienna over the weekend.', 'Nous restons à Vienne tout le week-end.'),
        g('Zwischen 14 und 16 Uhr spielt keine Band.', 'Between 2 and 4 p.m. no band plays.', 'Entre 14 et 16 heures, aucun groupe ne joue.'),
        g('Zwischen dem 5. und 7. Mai bin ich nicht da.', 'Between 5 and 7 May I am not here.', 'Entre le 5 et le 7 mai, je ne suis pas là.'),
        g('Am Vormittag bleiben wir im Hotel, am Abend gehen wir zum Konzert.', 'In the morning we stay at the hotel, in the evening we go to the concert.', 'Le matin, nous restons à l’hôtel, le soir nous allons au concert.'),
      ],
      mistakes: [
        { wrong: 'Wir bleiben über dem Wochenende.', right: 'Wir bleiben über das Wochenende.', why: 'über with a time stretch takes the accusative.', whyFr: 'über avec une durée prend l’accusatif.' },
        { wrong: 'Die Probe ist zwischen 14 und 16 Uhr von.', right: 'Die Probe ist zwischen 14 und 16 Uhr.', why: 'Just zwischen … und … — no extra word.', whyFr: 'Juste zwischen … und … — pas de mot en plus.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l17-e12', prompt: 'Die Probe ist ___ 14 und 16 Uhr.', promptFr: 'Die Probe ist ___ 14 und 16 Uhr.', options: ['zwischen', 'seit', 'über'], answer: 0, explain: '"zwischen … und …" marks a time window.', explainFr: '« zwischen … und … » marque une fenêtre de temps.', hint: 'Two times, joined with "und".', hintFr: 'Deux heures, reliées par « und ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l17-e11', prompt: 'Wir bleiben ___ das Wochenende in Wien. (over)', promptFr: 'Wir bleiben ___ das Wochenende in Wien. (pendant)', answer: 'über', hint: 'über + accusative for a stretch of time', hintFr: 'über + accusatif pour une période' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l17-e10', prompt: 'Listen. How long does the tour last?', promptFr: 'Écoute. Combien de temps dure la visite ?', audio: { ttsText: 'Die Führung beginnt um 15 Uhr und dauert über eine Stunde.' }, options: ['More than an hour', 'Exactly fifteen minutes', 'Three hours'], optionsFr: ['Plus d’une heure', 'Exactement quinze minutes', 'Trois heures'], answer: 0, hint: 'Listen for "über".', hintFr: 'Écoute « über ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l17-e3', prompt: 'Which question asks for the duration?', promptFr: 'Quelle question demande la durée ?', options: ['Seit wann?', 'Wie lange?', 'Ab wann?'], answer: 1, explain: '"Wie lange?" = how long; "Ab wann?" asks for the start; "Seit wann?" for a starting point in the past.', explainFr: '« Wie lange ? » = combien de temps ; « Ab wann ? » demande le début ; « Seit wann ? » un point de départ dans le passé.', hint: 'Think "how long".', hintFr: 'Pense à « combien de temps ».' } },

    { kind: 'pronunciation', focus: 'The umlaut ü (round lips, say "ee") in über, Bühne, Künstler — and "zw" = "tsv"', focusFr: 'Le tréma ü (lèvres arrondies, dis « i ») dans über, Bühne, Künstler — et « zw » = « tsv »', items: [{ id: 'a2l17-ueber-pron', german: 'über', english: 'over / above', french: 'sur / pendant', gender: null, syllables: ['Ü', 'ber'], pronunciation: 'UE-ber', example: { de: 'Das Fest dauert über zwei Tage.', en: 'The party lasts over two days.', fr: 'La fête dure plus de deux jours.' } }, { id: 'a2l17-buehne-pron', german: 'die Bühne', english: 'the stage', french: 'la scène', gender: 'die', syllables: ['BÜH', 'ne'], pronunciation: 'dee BUE-ne', example: { de: 'Die Bühne ist groß.', en: 'The stage is big.', fr: 'La scène est grande.' } }, { id: 'a2l17-kuenstler-pron', german: 'der Künstler', english: 'the artist', french: 'l’artiste', gender: 'der', syllables: ['KÜNST', 'ler'], pronunciation: 'dair KUENST-ler', example: { de: 'Der Künstler malt ein Bild.', en: 'The artist is painting a picture.', fr: 'L’artiste peint un tableau.' } }, { id: 'a2l17-zwischen-pron', german: 'zwischen', english: 'between', french: 'entre', gender: null, syllables: ['ZWI', 'schen'], pronunciation: 'TSVISH-en', example: { de: 'Zwischen Montag und Mittwoch.', en: 'Between Monday and Wednesday.', fr: 'Entre lundi et mercredi.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'a2l17-e6', pairs: [{ de: 'von … bis', en: 'from … to', fr: 'de … à' }, { de: 'seit', en: 'since / for', fr: 'depuis' }, { de: 'zwischen', en: 'between', fr: 'entre' }, { de: 'über', en: 'over / for more than', fr: 'pendant / plus de' }], hint: 'Match each time word to its meaning.', hintFr: 'Associe chaque mot de temps à sa signification.' } },

    { kind: 'wrapup',
      summary: 'You can now read a **festival programme**, say **von … bis / von … an**, **seit + dative**, and use **über** and **zwischen** for time. 🎉',
      summaryFr: 'Tu sais maintenant lire un **programme de festival**, dire **von … bis / von … an**, **seit + datif**, et utiliser **über** et **zwischen** pour le temps. 🎉',
      card: { title: 'Time expressions on one page', titleFr: 'Les expressions de temps en une page', sections: [
        { heading: 'Start and end', headingFr: 'Début et fin', rows: [g('von … bis · vom … bis zum …', 'start and end', 'début et fin'), g('von … an · ab', 'start only', 'début seulement')] },
        { heading: 'seit', headingFr: 'seit', rows: [g('seit + dative + present', 'still going on', 'cela dure encore'), g('Seit wann? · Wie lange?', 'questions', 'questions')] },
        { heading: 'über · zwischen', headingFr: 'über · zwischen', rows: [g('über + accusative', 'more than / over', 'plus de / pendant'), g('zwischen + dative', 'time window', 'plage horaire'), g('am Vormittag · am Abend · in der Nacht', 'times of day', 'moments de la journée')] },
      ] } },
  ],
};
