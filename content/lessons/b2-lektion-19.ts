import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion19: Lesson = {
  id: 'b2-l19', level: 'B2', module: 7, number: 19,
  title: { de: 'Wissenschaft und Technik', en: 'Science and technology', fr: 'Science et technologie' },
  theme: 'Research, innovation and describing processes: Vorgangspassiv vs. Zustandspassiv, and sequence words (zunächst, anschließend, schließlich)', themeFr: 'Recherche, innovation et description de processus : passif d’action vs passif d’état, et mots de séquence (zunächst, anschließend, schließlich)',
  goals: ['Talk about research, experiments and inventions', 'Describe a process step by step', 'Distinguish Vorgangspassiv (wird gemacht) from Zustandspassiv (ist gemacht)', 'Use sequence words and technical vocabulary'], goalsFr: ['Parler de recherche, d’expériences et d’inventions', 'Décrire un processus étape par étape', 'Distinguer passif d’action (wird gemacht) et passif d’état (ist gemacht)', 'Employer les mots de séquence et le vocabulaire technique'],
  canDo: g('Ich kann Abläufe Schritt für Schritt beschreiben und Vorgangs- und Zustandspassiv unterscheiden.', 'I can describe processes step by step and distinguish the process passive from the state passive.', 'Je sais décrire des processus étape par étape et distinguer le passif d’action du passif d’état.'),
  steps: [
    { kind: 'intro', title: 'Forschung und Technik 🔬', titleFr: 'Recherche et technique 🔬',
      scene: 'In a lab, a researcher describes an experiment — what is done, and what state things are in.', sceneFr: 'Dans un laboratoire, un chercheur décrit une expérience — ce qui est fait, et dans quel état sont les choses.',
      goals: ['Describe a process with zunächst, anschließend, schließlich', 'Use the Vorgangspassiv (wird gemacht)', 'Use the Zustandspassiv (ist gemacht)'],
      goalsFr: ['Décrire un processus avec zunächst, anschließend, schließlich', 'Utiliser le Vorgangspassiv (wird gemacht)', 'Utiliser le Zustandspassiv (ist gemacht)'] },

    // ───────────── 1 · Process ─────────────
    { kind: 'chapter', title: 'Abläufe beschreiben', titleFr: 'Décrire des processus', blurb: 'zunächst · anschließend · schließlich + wird … gemacht.', blurbFr: 'zunächst · anschließend · schließlich + wird … gemacht.' },

    { kind: 'situation', title: 'Im Labor', titleFr: 'Au laboratoire',
      setting: 'A researcher explains the experiment.', settingFr: 'Une chercheuse explique l’expérience.',
      lines: [
        line('Forscherin', 'Wir untersuchen die Proben im Labor. Zunächst wird die Probe gewogen. Anschließend wird sie erhitzt.', 'We examine the samples in the lab. First the sample is weighed. Afterwards it is heated.', 'Nous examinons les échantillons au laboratoire. D’abord l’échantillon est pesé. Ensuite il est chauffé.'),
        line('Forscherin', 'Schließlich wird das Ergebnis notiert. Der Versuch wurde dreimal wiederholt. Die Ergebnisse sind eindeutig.', 'Finally the result is noted. The experiment was repeated three times. The results are clear.', 'Enfin le résultat est noté. L’expérience a été répétée trois fois. Les résultats sont clairs.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l19-e11', prompt: 'What happens after the sample is weighed?', promptFr: 'Que se passe-t-il après la pesée de l’échantillon ?', options: ['It is heated', 'It is thrown away', 'It is frozen'], optionsFr: ['Il est chauffé', 'Il est jeté', 'Il est congelé'], answer: 0, explain: 'The researcher says: “Anschließend wird sie erhitzt.”', explainFr: 'La chercheuse dit : « Anschließend wird sie erhitzt. »', hint: 'Look for “anschließend”.', hintFr: 'Cherche « anschließend ».' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l19-e7', prompt: 'Listen. What happens first?', promptFr: 'Écoute. Que se passe-t-il d’abord ?', audio: { ttsText: 'Zunächst wird die Probe gewogen, anschließend wird sie erhitzt.' }, options: ['The sample is weighed', 'The sample is heated', 'The sample is thrown away'], optionsFr: ['L’échantillon est pesé', 'L’échantillon est chauffé', 'L’échantillon est jeté'], answer: 0, hint: 'zunächst = first.', hintFr: 'zunächst = d’abord.' } },

    { kind: 'wordgroup', title: 'Schritt für Schritt', titleFr: 'Étape par étape',
      items: [{ id: 'b2l19-zunaechst', german: 'zunächst', english: 'first of all', french: 'tout d’abord', gender: null, syllables: ['zu', 'NÄCHST'], pronunciation: 'tsoo-NEKST', example: { de: 'Zunächst wird die Probe gewogen.', en: 'First of all the sample is weighed.', fr: 'Tout d’abord on pèse l’échantillon.' } }, { id: 'b2l19-anschliessend', german: 'anschließend', english: 'afterwards', french: 'ensuite', gender: null, syllables: ['AN', 'schlie', 'ßend'], pronunciation: 'AHN-shlee-sent', example: { de: 'Anschließend wird sie erhitzt.', en: 'Afterwards it is heated.', fr: 'Ensuite elle est chauffée.' } }, { id: 'b2l19-schliesslich', german: 'schließlich', english: 'finally / in the end', french: 'finalement', gender: null, syllables: ['SCHLIE', 'ßlich'], pronunciation: 'SHLEES-likh', example: { de: 'Schließlich wird das Ergebnis notiert.', en: 'Finally the result is noted.', fr: 'Enfin le résultat est noté.' } }, { id: 'b2l19-untersuchen', german: 'untersuchen', english: 'to examine', french: 'examiner', gender: null, syllables: ['un', 'ter', 'ZU', 'chen'], pronunciation: 'oon-ter-ZOO-khen', example: { de: 'Wir untersuchen die Proben im Labor.', en: 'We examine the samples in the lab.', fr: 'Nous examinons les échantillons au laboratoire.' } }, { id: 'b2l19-versuch', german: 'der Versuch', english: 'the experiment / attempt', french: 'l’expérience', gender: 'der', syllables: ['der', 'ver', 'SUCH'], pronunciation: 'dair fer-ZOOKH', example: { de: 'Der Versuch wurde dreimal wiederholt.', en: 'The experiment was repeated three times.', fr: 'L’expérience a été répétée trois fois.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l19-vorgang', title: 'The process passive: werden + Partizip II', titleFr: 'Le passif d’action : werden + participe II',
      lead: 'werden + Partizip II describes the process; add zunächst, dann, anschließend, danach, schließlich for the steps.',
      leadFr: 'werden + participe II décrit le processus ; ajoute zunächst, dann, anschließend, danach, schließlich pour les étapes.',
      explanationMd: '**Vorgangspassiv** (action): **werden + Partizip II** — the **process**: **Die Tür wird geschlossen.** (someone is closing it) **Die Tür wurde geschlossen.** (past) For processes, add **zunächst, dann, anschließend, danach, schließlich**: **Zunächst wird die Probe gewogen, anschließend wird sie erhitzt.** The **agent** is mostly omitted; if named, use **von + Dativ** (person) or **durch + Akk.** (cause / means): **von dem Team, durch einen Fehler.** The **subject** of the passive is what the active sentence had as **accusative object**: **Man wiegt die Probe → Die Probe wird gewogen.**',
      explanationMdFr: '**Vorgangspassiv** (action) : **werden + participe II** — le **processus** : **Die Tür wird geschlossen.** (quelqu’un la ferme) **Die Tür wurde geschlossen.** (passé) Pour les processus, ajoute **zunächst, dann, anschließend, danach, schließlich** : **Zunächst wird die Probe gewogen, anschließend wird sie erhitzt.** L’**agent** est le plus souvent omis ; s’il est nommé, utilise **von + datif** (personne) ou **durch + Akk.** (cause / moyen) : **von dem Team, durch einen Fehler.** Le **sujet** du passif est ce qui était **complément d’objet direct** à l’actif : **Man wiegt die Probe → Die Probe wird gewogen.**',
      tables: [{ title: 'Process passive', titleFr: 'Passif d’action', headers: ['Tense', 'Form', 'Example'], headersFr: ['Temps', 'Forme', 'Exemple'],
        rows: [['present', 'wird + Partizip II', 'Die Probe wird gewogen.'], ['past', 'wurde + Partizip II', 'Der Versuch wurde wiederholt.'], ['perfect', 'ist … worden', 'Die Probe ist gewogen worden.'], ['with modal', 'muss + Part. II + werden', 'Die Probe muss gewogen werden.']],
        rowsFr: [['présent', 'wird + participe II', 'Die Probe wird gewogen.'], ['passé', 'wurde + participe II', 'Der Versuch wurde wiederholt.'], ['parfait', 'ist … worden', 'Die Probe ist gewogen worden.'], ['avec modal', 'muss + part. II + werden', 'Die Probe muss gewogen werden.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Zunächst', role: 'connector' }, { text: 'wird', role: 'verb' }, { text: 'die Probe', role: 'subject' }, { text: 'gewogen.', role: 'verb' }], en: 'First the sample is weighed.', fr: 'D’abord l’échantillon est pesé.' },
        { parts: [{ text: 'Der Versuch', role: 'subject' }, { text: 'wurde', role: 'verb' }, { text: 'dreimal', role: 'time' }, { text: 'wiederholt.', role: 'verb' }], en: 'The experiment was repeated three times.', fr: 'L’expérience a été répétée trois fois.' },
      ],
      contrast: {
        a: { label: 'Active', labelFr: 'Actif', note: 'who acts', noteFr: 'qui agit', examples: [g('Man wiegt die Probe.', 'One weighs the sample.', 'On pèse l’échantillon.'), g('Das Team wiederholte den Versuch.', 'The team repeated the experiment.', 'L’équipe a répété l’expérience.')] },
        b: { label: 'Process passive', labelFr: 'Passif d’action', note: 'what happens', noteFr: 'ce qui se passe', examples: [g('Die Probe wird gewogen.', 'The sample is weighed.', 'L’échantillon est pesé.'), g('Der Versuch wurde dreimal wiederholt.', 'The experiment was repeated three times.', 'L’expérience a été répétée trois fois.')] },
      },
      examples: [
        g('Zunächst wird die Probe gewogen, danach wird sie erhitzt.', 'First the sample is weighed, then it is heated.', 'D’abord l’échantillon est pesé, puis il est chauffé.'),
        g('Schließlich wird das Ergebnis notiert.', 'Finally the result is noted.', 'Enfin le résultat est noté.'),
        g('Der Versuch wurde dreimal wiederholt.', 'The experiment was repeated three times.', 'L’expérience a été répétée trois fois.'),
        g('Die Proben werden im Labor untersucht.', 'The samples are examined in the lab.', 'Les échantillons sont examinés au laboratoire.'),
        g('Die Batterie wird von dem Team entwickelt.', 'The battery is developed by the team.', 'La batterie est développée par l’équipe.'),
        g('Der Fehler wurde durch ein Gerät verursacht.', 'The error was caused by a device.', 'L’erreur a été causée par un appareil.'),
      ],
      mistakes: [
        { wrong: 'Die Probe ist gewogen. (describing the action)', right: 'Die Probe wird gewogen.', why: 'An ongoing action needs werden, not sein.', whyFr: 'Une action en cours demande werden, pas sein.' },
        { wrong: 'Der Versuch wird dreimal wiederholt worden.', right: 'Der Versuch wurde dreimal wiederholt.', why: 'Keep the tense simple: wurde + Partizip II.', whyFr: 'Garde le temps simple : wurde + participe II.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l19-e2', prompt: 'Zunächst ___ die Probe gewogen. (werden — action passive)', answer: 'wird', hint: 'werden + Partizip II', hintFr: 'werden + Partizip II' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l19-e4', tokens: ['wird', 'Zunächst', 'gewogen', 'die Probe'], answer: ['Zunächst', 'wird', 'die Probe', 'gewogen'], hint: 'Sequence word first, then wird, participle last.', hintFr: 'Mot de séquence d’abord, puis wird, participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l19-e5', prompt: 'Which sequence word means "finally"?', promptFr: 'Quel mot de séquence signifie « finalement » ?', options: ['zunächst', 'anschließend', 'schließlich'], answer: 2, explain: '"schließlich" = finally.', explainFr: '« schließlich » = finalement.', hint: 'last step', hintFr: 'dernière étape' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l19-e8', prompt: 'Der Versuch ___ dreimal wiederholt. (wurde — past passive)', answer: 'wurde', hint: 'past: wurde + Partizip II', hintFr: 'passé : wurde + Partizip II' } },

    // ───────────── 2 · State passive ─────────────
    { kind: 'chapter', title: 'Zustandspassiv und Technik', titleFr: 'Passif d’état et technique', blurb: 'ist geschlossen · ist ausgeschaltet.', blurbFr: 'ist geschlossen · ist ausgeschaltet.' },

    { kind: 'situation', title: 'Der Zustand', titleFr: 'L’état des choses',
      setting: 'A tour of the research centre.', settingFr: 'Une visite du centre de recherche.',
      lines: [
        line('Führer', 'Die Tür ist geschlossen. Das Gerät ist ausgeschaltet. Das Labor ist am Wochenende geschlossen.', 'The door is closed. The device is switched off. The lab is closed at weekends.', 'La porte est fermée. L’appareil est éteint. Le laboratoire est fermé le week-end.'),
        line('Führer', 'Die Forschung macht große Fortschritte. Das Internet ist eine große Erfindung. Das Team entwickelt eine neue Batterie. Künstliche Intelligenz verändert die Arbeit.', 'Research is making great progress. The internet is a great invention. The team is developing a new battery. Artificial intelligence is changing work.', 'La recherche fait de grands progrès. Internet est une grande invention. L’équipe développe une nouvelle batterie. L’intelligence artificielle transforme le travail.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Forschung und Technik', titleFr: 'Recherche et technique',
      items: [{ id: 'b2l19-forschung', german: 'die Forschung', english: 'the research', french: 'la recherche', gender: 'die', syllables: ['FOR', 'schung'], pronunciation: 'dee FOR-shoong', example: { de: 'Die Forschung macht große Fortschritte.', en: 'Research is making great progress.', fr: 'La recherche fait de grands progrès.' } }, { id: 'b2l19-erfindung', german: 'die Erfindung', english: 'the invention', french: 'l’invention', gender: 'die', syllables: ['er', 'FIN', 'dung'], pronunciation: 'dee er-FIN-doong', example: { de: 'Das Internet ist eine große Erfindung.', en: 'The internet is a great invention.', fr: 'Internet est une grande invention.' } }, { id: 'b2l19-entwickeln', german: 'entwickeln', english: 'to develop', french: 'développer', gender: null, syllables: ['ent', 'WI', 'ckeln'], pronunciation: 'ent-VIK-keln', example: { de: 'Das Team entwickelt eine neue Batterie.', en: 'The team is developing a new battery.', fr: 'L’équipe développe une nouvelle batterie.' } }, { id: 'b2l19-geraet', german: 'das Gerät', english: 'the device', french: 'l’appareil', gender: 'das', syllables: ['das', 'ge', 'RÄT'], pronunciation: 'das ge-RET', example: { de: 'Das Gerät ist ausgeschaltet.', en: 'The device is switched off.', fr: 'L’appareil est éteint.' } }, { id: 'b2l19-kuenstliche-intelligenz', german: 'die künstliche Intelligenz', english: 'artificial intelligence', french: 'l’intelligence artificielle', gender: 'die', syllables: ['KÜNST', 'li', 'che', 'in', 'tel', 'li', 'GENZ'], pronunciation: 'dee KUENST-li-khe in-tel-li-GENTS', example: { de: 'Künstliche Intelligenz verändert die Arbeit.', en: 'Artificial intelligence is changing work.', fr: 'L’intelligence artificielle transforme le travail.' } }, { id: 'b2l19-ergebnis', german: 'das Ergebnis', english: 'the result', french: 'le résultat', gender: 'das', syllables: ['er', 'GEB', 'nis'], pronunciation: 'das er-GAYP-nis', example: { de: 'Die Ergebnisse sind eindeutig.', en: 'The results are clear.', fr: 'Les résultats sont clairs.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l19-e6', pairs: [{ de: 'die Forschung', en: 'research', fr: 'recherche' }, { de: 'der Versuch', en: 'experiment', fr: 'expérience' }, { de: 'untersuchen', en: 'to examine', fr: 'examiner' }, { de: 'das Gerät', en: 'device', fr: 'appareil' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l19-zustand', title: 'The state passive: sein + Partizip II', titleFr: 'Le passif d’état : sein + participe II',
      lead: 'sein + Partizip II describes the result or state; compare with werden + Partizip II for the action.',
      leadFr: 'sein + participe II décrit le résultat ou l’état ; compare avec werden + participe II pour l’action.',
      explanationMd: '**Zustandspassiv** (state): **sein + Partizip II** — the **result**: **Die Tür ist geschlossen.** (it is shut now) **Das Gerät ist ausgeschaltet.** Compare: **Die Tür wird geschlossen.** = someone is closing it **now**; **Die Tür ist geschlossen.** = it **is** shut. The state passive is common with **opening hours** and **notices**: **Das Labor ist am Wochenende geschlossen.** **Past** with **war**: **Die Tür war geschlossen.** The state is usually the **result** of an earlier action: **Zuerst wurde die Tür geschlossen. Jetzt ist sie geschlossen.**',
      explanationMdFr: '**Zustandspassiv** (état) : **sein + participe II** — le **résultat** : **Die Tür ist geschlossen.** (elle est fermée maintenant) **Das Gerät ist ausgeschaltet.** Compare : **Die Tür wird geschlossen.** = quelqu’un la ferme **en ce moment** ; **Die Tür ist geschlossen.** = elle **est** fermée. Le passif d’état est courant pour les **horaires** et les **avis** : **Das Labor ist am Wochenende geschlossen.** **Passé** avec **war** : **Die Tür war geschlossen.** L’état est généralement le **résultat** d’une action antérieure : **Zuerst wurde die Tür geschlossen. Jetzt ist sie geschlossen.**',
      tables: [{ title: 'Action vs. state', titleFr: 'Action vs. état', headers: ['Action (werden)', 'State (sein)'], headersFr: ['Action (werden)', 'État (sein)'],
        rows: [['Die Tür wird geschlossen.', 'Die Tür ist geschlossen.'], ['Das Gerät wird ausgeschaltet.', 'Das Gerät ist ausgeschaltet.'], ['Das Labor wird geschlossen.', 'Das Labor ist am Wochenende geschlossen.'], ['Die Probe wurde erhitzt.', 'Die Probe war erhitzt.']],
        rowsFr: [['Die Tür wird geschlossen.', 'Die Tür ist geschlossen.'], ['Das Gerät wird ausgeschaltet.', 'Das Gerät ist ausgeschaltet.'], ['Das Labor wird geschlossen.', 'Das Labor ist am Wochenende geschlossen.'], ['Die Probe wurde erhitzt.', 'Die Probe war erhitzt.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das Gerät', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'ausgeschaltet.', role: 'other' }], en: 'The device is switched off.', fr: 'L’appareil est éteint.' },
        { parts: [{ text: 'Das Labor', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'am Wochenende', role: 'time' }, { text: 'geschlossen.', role: 'other' }], en: 'The lab is closed at weekends.', fr: 'Le laboratoire est fermé le week-end.' },
      ],
      contrast: {
        a: { label: 'Process (werden)', labelFr: 'Processus (werden)', note: 'happening now', noteFr: 'en train de se faire', examples: [g('Die Tür wird geschlossen.', 'The door is being closed.', 'La porte est en train d’être fermée.'), g('Das Gerät wird ausgeschaltet.', 'The device is being switched off.', 'L’appareil est en train d’être éteint.')] },
        b: { label: 'State (sein)', labelFr: 'État (sein)', note: 'result', noteFr: 'résultat', examples: [g('Die Tür ist geschlossen.', 'The door is closed.', 'La porte est fermée.'), g('Das Gerät ist ausgeschaltet.', 'The device is switched off.', 'L’appareil est éteint.')] },
      },
      examples: [
        g('Die Tür ist geschlossen.', 'The door is closed.', 'La porte est fermée.'),
        g('Das Gerät ist ausgeschaltet.', 'The device is switched off.', 'L’appareil est éteint.'),
        g('Das Labor ist am Wochenende geschlossen.', 'The lab is closed at weekends.', 'Le laboratoire est fermé le week-end.'),
        g('Die Ergebnisse sind eindeutig.', 'The results are clear.', 'Les résultats sont clairs.'),
        g('Die Tür war geschlossen.', 'The door was closed.', 'La porte était fermée.'),
        g('Zuerst wurde die Tür geschlossen, jetzt ist sie geschlossen.', 'First the door was closed, now it is closed.', 'D’abord la porte a été fermée, maintenant elle est fermée.'),
      ],
      mistakes: [
        { wrong: 'Das Labor wird am Wochenende geschlossen. (state)', right: 'Das Labor ist am Wochenende geschlossen.', why: 'For a notice about a state use sein.', whyFr: 'Pour un avis sur un état, utilise sein.' },
        { wrong: 'Die Tür ist geschlossen worden. (state now)', right: 'Die Tür ist geschlossen.', why: 'worden belongs to the action passive; the state needs only sein + Partizip II.', whyFr: 'worden appartient au passif d’action ; l’état demande seulement sein + participe II.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l19-e1', prompt: 'Which describes a STATE (result)?', promptFr: 'Lequel décrit un ÉTAT (résultat) ?', options: ['Die Tür wird geschlossen.', 'Die Tür ist geschlossen.', 'Die Tür wurde geschlossen.'], answer: 1, explain: 'sein + Partizip II = state.', explainFr: 'sein + Partizip II = état.', hint: 'sein = state', hintFr: 'sein = état' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l19-e3', prompt: 'Das Gerät ___ ausgeschaltet. (sein — state)', answer: 'ist', hint: 'sein + Partizip II', hintFr: 'sein + Partizip II' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l19-e9', prompt: 'How do you name the cause/means in a passive sentence?', promptFr: 'Comment nomme-t-on la cause/le moyen dans une phrase passive ?', options: ['von + Dativ', 'durch + Akkusativ', 'mit + Genitiv'], answer: 1, explain: 'durch + Akk. for cause/means; von + Dat. for a person.', explainFr: 'durch + acc. pour cause/moyen ; von + dat. pour une personne.', hint: 'durch', hintFr: 'durch' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l19-e10', prompt: 'Listen. What is the state of the lab?', promptFr: 'Écoute. Quel est l’état du laboratoire ?', audio: { ttsText: 'Das Labor ist am Wochenende geschlossen.' }, options: ['Closed at weekends', 'Open all night', 'Under construction'], optionsFr: ['Fermé le week-end', 'Ouvert toute la nuit', 'En travaux'], answer: 0, hint: 'ist geschlossen = state.', hintFr: 'ist geschlossen = état.' } },

    { kind: 'pronunciation', focus: 'Sequence words carry a clear stress to signal each step: "zuNÄCHST", "ANschließend", "SCHLIEßlich"', focusFr: 'Les mots de séquence portent un accent net pour marquer chaque étape : « zuNÄCHST », « ANschließend », « SCHLIEßlich »', items: [{ id: 'b2l19-zunaechst-pron', german: 'zunächst', english: 'first of all', french: 'd’abord', gender: null, syllables: ['zu', 'NÄCHST'], pronunciation: 'tsoo-NEKST', example: { de: 'Zunächst lesen wir.', en: 'First we read.', fr: 'D’abord nous lisons.' } }, { id: 'b2l19-schliesslich-pron', german: 'schließlich', english: 'finally', french: 'finalement', gender: null, syllables: ['SCHLIE', 'ßlich'], pronunciation: 'SHLEES-likh', example: { de: 'Schließlich sind wir fertig.', en: 'Finally we are done.', fr: 'Enfin nous avons fini.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **describe processes** (**zunächst wird … , anschließend wird …, schließlich wird …**) and tell **action** (**wird geschlossen**) from **state** (**ist geschlossen**). 🎉',
      summaryFr: 'Tu sais maintenant **décrire des processus** (**zunächst wird … , anschließend wird …, schließlich wird …**) et distinguer l’**action** (**wird geschlossen**) de l’**état** (**ist geschlossen**). 🎉',
      card: { title: 'Passive types on one page', titleFr: 'Les types de passif en une page', sections: [
        { heading: 'Action', headingFr: 'Action', rows: [g('werden + Partizip II', 'Die Probe wird gewogen.', 'Die Probe wird gewogen.'), g('past: wurde + Partizip II', 'wurde wiederholt', 'wurde wiederholt')] },
        { heading: 'State', headingFr: 'État', rows: [g('sein + Partizip II', 'Die Tür ist geschlossen.', 'Die Tür ist geschlossen.')] },
        { heading: 'Steps', headingFr: 'Étapes', rows: [g('zunächst · anschließend · schließlich', 'sequence words', 'mots de séquence'), g('agent: von + Dat. · durch + Akk.', 'person · cause', 'personne · cause')] },
      ] } },
  ],
};
