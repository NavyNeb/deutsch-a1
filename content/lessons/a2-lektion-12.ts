import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion12: Lesson = {
  id: 'a2-l12', level: 'A2', module: 6, number: 24,
  title: { de: 'Pläne und Zukunft', en: 'Plans and the future', fr: 'Projets et avenir' },
  theme: 'Talking about the future with "werden" and with the present tense', themeFr: 'Parler de l’avenir avec « werden » et avec le présent',
  goals: ['Talk about plans and the future', 'Form the future with "werden" + infinitive', 'Use the present tense with a time word for the future', 'Use "werden" to say what you will become'], goalsFr: ['Parler de projets et d’avenir', 'Former le futur avec « werden » + infinitif', 'Utiliser le présent avec un mot de temps pour l’avenir', 'Utiliser « werden » pour dire ce qu’on va devenir'],
  canDo: g('Ich kann über Pläne und die Zukunft sprechen: mit „werden“ + Infinitiv, mit dem Präsens und mit „werden“ für „etwas werden“.', 'I can talk about plans and the future: with “werden” + infinitive, with the present tense and with “werden” for “to become”.', 'Je sais parler de projets et d’avenir : avec « werden » + infinitif, avec le présent et avec « werden » pour « devenir ».'),
  steps: [
    { kind: 'intro', title: 'Pläne und Zukunft 🔮', titleFr: 'Projets et avenir 🔮',
      scene: 'Sara and Ben tell each other what they will do next year — move, study, work.', sceneFr: 'Sara et Ben se disent ce qu’ils feront l’an prochain — déménager, étudier, travailler.',
      goals: ['Talk about plans and the future', 'Form the future with werden + infinitive', 'Use the present tense with a time word for the future and werden for “to become”'],
      goalsFr: ['Parler de projets et d’avenir', 'Former le futur avec werden + infinitif', 'Utiliser le présent avec un mot de temps pour le futur et werden pour « devenir »'] },

    // ───────────── 1 · werden + infinitive ─────────────
    { kind: 'chapter', title: 'Das Futur mit „werden“', titleFr: 'Le futur avec « werden »', blurb: 'ich werde …', blurbFr: 'ich werde …' },

    { kind: 'situation', title: 'Was ist dein Plan?', titleFr: 'Quel est ton projet ?',
      setting: 'Sara and Ben talk after class.', settingFr: 'Sara et Ben discutent après le cours.',
      lines: [
        line('Ben', 'Was ist dein Plan für die Zukunft, Sara?', 'What is your plan for the future, Sara?', 'Quel est ton projet pour l’avenir, Sara ?'),
        line('Sara', 'Mein Ziel ist ein guter Job. Nächstes Jahr werde ich Medizin studieren.', 'My goal is a good job. Next year I will study medicine.', 'Mon objectif est un bon emploi. L’an prochain, j’étudierai la médecine.'),
        line('Ben', 'Ich werde nach Berlin ziehen. Wirst du Deutsch lernen?', 'I will move to Berlin. Will you learn German?', 'Je vais déménager à Berlin. Vas-tu apprendre l’allemand ?'),
        line('Sara', 'Ja, ich werde Deutsch lernen und einen Job finden. Ich hoffe, dass es klappt.', 'Yes, I will learn German and find a job. I hope it works out.', 'Oui, j’apprendrai l’allemand et je trouverai un travail. J’espère que ça marchera.'),
        line('Ben', 'Wir planen eine Reise, und ich komme wahrscheinlich später. Bis bald!', 'We’re planning a trip, and I’ll probably come later. See you soon!', 'Nous planifions un voyage, et j’arrive probablement plus tard. À bientôt !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l12-e11', prompt: 'What will Sara study next year?', promptFr: 'Qu’étudiera Sara l’an prochain ?', options: ['Medicine', 'Law', 'German'], optionsFr: ['La médecine', 'Le droit', 'L’allemand'], answer: 0, explain: 'She says: “Nächstes Jahr werde ich Medizin studieren.”', explainFr: 'Elle dit : « Nächstes Jahr werde ich Medizin studieren. »', hint: 'Look for “Medizin”.', hintFr: 'Cherche « Medizin ».' } },

    { kind: 'wordgroup', title: 'Pläne und Ziele', titleFr: 'Projets et objectifs',
      items: [{ id: 'a2l12-zukunft', german: 'die Zukunft', english: 'the future', french: 'l’avenir', gender: 'die', syllables: ['ZU', 'kunft'], pronunciation: 'dee TSOO-koonft', example: { de: 'Ich denke an die Zukunft.', en: 'I think about the future.', fr: 'Je pense à l’avenir.' } }, { id: 'a2l12-plan', german: 'der Plan', english: 'the plan', french: 'le projet / plan', gender: 'der', syllables: ['PLAN'], pronunciation: 'dair PLAHN', example: { de: 'Was ist dein Plan?', en: 'What is your plan?', fr: 'Quel est ton projet ?' } }, { id: 'a2l12-planen', german: 'planen', english: 'to plan', french: 'planifier', gender: null, syllables: ['PLA', 'nen'], pronunciation: 'PLAH-nen', example: { de: 'Wir planen eine Reise.', en: 'We are planning a trip.', fr: 'Nous planifions un voyage.' } }, { id: 'a2l12-ziel', german: 'das Ziel', english: 'the goal / aim', french: 'l’objectif / but', gender: 'das', syllables: ['ZIEL'], pronunciation: 'dahs TSEEL', example: { de: 'Mein Ziel ist ein guter Job.', en: 'My goal is a good job.', fr: 'Mon objectif est un bon emploi.' } }, { id: 'a2l12-studieren', german: 'studieren', english: 'to study (at university)', french: 'faire des études', gender: null, syllables: ['stu', 'DIE', 'ren'], pronunciation: 'shtoo-DEE-ren', example: { de: 'Ich werde Medizin studieren.', en: 'I will study medicine.', fr: 'Je vais étudier la médecine.' } }, { id: 'a2l12-hoffen', german: 'hoffen', english: 'to hope', french: 'espérer', gender: null, syllables: ['HOF', 'fen'], pronunciation: 'HOFF-en', example: { de: 'Ich hoffe, dass es klappt.', en: 'I hope that it works out.', fr: 'J’espère que ça marchera.' } }] },

    { kind: 'wordgroup', title: 'Zeit und Wahrscheinlichkeit', titleFr: 'Temps et probabilité',
      items: [{ id: 'a2l12-bald', german: 'bald', english: 'soon', french: 'bientôt', gender: null, syllables: ['BALD'], pronunciation: 'bahlt', example: { de: 'Bis bald!', en: 'See you soon!', fr: 'À bientôt !' } }, { id: 'a2l12-naechstes-jahr', german: 'nächstes Jahr', english: 'next year', french: 'l’année prochaine', gender: null, syllables: ['NÄCH', 'stes', 'JAHR'], pronunciation: 'NEKH-stes YAAR', example: { de: 'Nächstes Jahr ziehe ich um.', en: 'Next year I am moving.', fr: 'L’année prochaine, je déménage.' } }, { id: 'a2l12-wahrscheinlich', german: 'wahrscheinlich', english: 'probably', french: 'probablement', gender: null, syllables: ['wahr', 'SCHEIN', 'lich'], pronunciation: 'vaar-SHINE-likh', example: { de: 'Ich komme wahrscheinlich später.', en: 'I will probably come later.', fr: 'Je viendrai probablement plus tard.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l12-futur', title: 'The future with werden + infinitive', titleFr: 'Le futur avec werden + infinitif',
      lead: 'werden in position 2, the infinitive at the very end.',
      leadFr: 'werden en position 2, l’infinitif tout à la fin.',
      explanationMd: 'Form the future with **werden** in **position 2** and the **infinitive at the end**: **ich werde, du wirst, er / sie / es wird, wir werden, ihr werdet, sie werden**. **Ich werde nach Berlin ziehen. Wirst du Deutsch lernen?** Careful: **werden** is **irregular** (**du wirst, er wird**). Use **werden** for **predictions and intentions**: **Es wird regnen. Ich werde mehr Sport machen.**',
      explanationMdFr: 'Forme le futur avec **werden** en **position 2** et l’**infinitif à la fin** : **ich werde, du wirst, er / sie / es wird, wir werden, ihr werdet, sie werden**. **Ich werde nach Berlin ziehen. Wirst du Deutsch lernen ?** Attention : **werden** est **irrégulier** (**du wirst, er wird**). Utilise **werden** pour les **prévisions et les intentions** : **Es wird regnen. Ich werde mehr Sport machen.**',
      tables: [{ title: 'werden', titleFr: 'werden', headers: ['Person', 'werden', 'Example'], headersFr: ['Personne', 'werden', 'Exemple'],
        rows: [['ich', 'werde', 'Ich werde Deutsch lernen.'], ['du', 'wirst', 'Wirst du nach Berlin ziehen?'], ['er / sie / es', 'wird', 'Sie wird Ärztin werden.'], ['wir', 'werden', 'Wir werden umziehen.'], ['ihr', 'werdet', 'Werdet ihr kommen?'], ['sie / Sie', 'werden', 'Sie werden einen Job finden.']],
        rowsFr: [['ich', 'werde', 'Ich werde Deutsch lernen.'], ['du', 'wirst', 'Wirst du nach Berlin ziehen ?'], ['er / sie / es', 'wird', 'Sie wird Ärztin werden.'], ['wir', 'werden', 'Wir werden umziehen.'], ['ihr', 'werdet', 'Werdet ihr kommen ?'], ['sie / Sie', 'werden', 'Sie werden einen Job finden.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'werde', role: 'verb' }, { text: 'nach Berlin', role: 'place' }, { text: 'ziehen.', role: 'verb' }], en: 'I will move to Berlin.', fr: 'Je vais déménager à Berlin.' },
        { parts: [{ text: 'Wirst', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'Deutsch', role: 'accusative' }, { text: 'lernen?', role: 'verb' }], en: 'Will you learn German?', fr: 'Vas-tu apprendre l’allemand ?' },
      ],
      contrast: {
        a: { label: 'Statement', labelFr: 'Affirmation', note: 'werden in position 2', noteFr: 'werden en position 2', examples: [g('Ich werde einen Job finden.', 'I will find a job.', 'Je trouverai un travail.'), g('Sie wird Ärztin werden.', 'She will become a doctor.', 'Elle deviendra médecin.')] },
        b: { label: 'Question', labelFr: 'Question', note: 'werden in position 1', noteFr: 'werden en position 1', examples: [g('Wirst du Deutsch lernen?', 'Will you learn German?', 'Vas-tu apprendre l’allemand ?'), g('Werdet ihr kommen?', 'Will you come?', 'Viendrez-vous ?')] },
      },
      examples: [
        g('Ich werde einen Job finden.', 'I will find a job.', 'Je trouverai un travail.'),
        g('Sie wird Ärztin werden.', 'She will become a doctor.', 'Elle deviendra médecin.'),
        g('Ich werde nach Berlin ziehen.', 'I will move to Berlin.', 'Je vais déménager à Berlin.'),
        g('Wirst du Deutsch lernen?', 'Will you learn German?', 'Vas-tu apprendre l’allemand ?'),
        g('Es wird morgen regnen.', 'It will rain tomorrow.', 'Il pleuvra demain.'),
        g('Nächstes Jahr werde ich Medizin studieren.', 'Next year I will study medicine.', 'L’an prochain, j’étudierai la médecine.'),
      ],
      mistakes: [
        { wrong: 'Ich werde ziehen nach Berlin.', right: 'Ich werde nach Berlin ziehen.', why: 'The infinitive goes to the very end.', whyFr: 'L’infinitif va tout à la fin.' },
        { wrong: 'Du werdest Deutsch lernen.', right: 'Du wirst Deutsch lernen.', why: 'werden is irregular: du wirst.', whyFr: 'werden est irrégulier : du wirst.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l12-e1', prompt: 'Ich ___ Deutsch lernen. (werden — ich-form)', answer: 'werde', hint: 'future: ich werde + infinitive', hintFr: 'futur : ich werde + infinitif' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l12-e2', prompt: '___ du nach Berlin ziehen? (werden — du-form)', answer: 'Wirst', hint: 'werden: du wirst', hintFr: 'werden : du wirst' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l12-e3', tokens: ['ziehen', 'werde', 'Ich', 'nach', 'Berlin'], answer: ['Ich', 'werde', 'nach', 'Berlin', 'ziehen'], hint: 'werden in position 2, infinitive at the end.', hintFr: 'werden en position 2, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l12-e9', tokens: ['einen', 'werde', 'finden', 'Ich', 'Job'], answer: ['Ich', 'werde', 'einen', 'Job', 'finden'], hint: 'werden, then the object, then the infinitive at the end.', hintFr: 'werden, puis l’objet, puis l’infinitif à la fin.' } },

    // ───────────── 2 · Present for the future ─────────────
    { kind: 'chapter', title: 'Das Präsens für die Zukunft', titleFr: 'Le présent pour le futur', blurb: 'Morgen fahre ich nach Köln.', blurbFr: 'Morgen fahre ich nach Köln.' },

    { kind: 'situation', title: 'Morgen fahre ich nach Köln', titleFr: 'Demain, je vais à Cologne',
      setting: 'Ben tells Sara his week.', settingFr: 'Ben raconte sa semaine à Sara.',
      lines: [
        line('Ben', 'Morgen fahre ich nach Köln. Am Samstag treffe ich Freunde.', 'Tomorrow I’m going to Cologne. On Saturday I’m meeting friends.', 'Demain, je vais à Cologne. Samedi, je retrouve des amis.'),
        line('Sara', 'Heute Abend koche ich. Nächstes Jahr ziehe ich um.', 'Tonight I’m cooking. Next year I’m moving.', 'Ce soir, je cuisine. L’an prochain, je déménage.'),
        line('Ben', 'Nächstes Jahr werde ich nach Österreich ziehen und dort arbeiten.', 'Next year I will move to Austria and work there.', 'L’an prochain, je vais m’installer en Autriche et y travailler.'),
      ],
      words: [{ id: 'a2l12-werden', german: 'werden', english: 'will / to become', french: 'aller (futur) / devenir', gender: null, syllables: ['WER', 'den'], pronunciation: 'VAIR-den', example: { de: 'Ich werde Deutsch lernen.', en: 'I will learn German.', fr: 'Je vais apprendre l’allemand.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l12-praesens-zukunft', title: 'The present tense for the future', titleFr: 'Le présent pour le futur',
      lead: 'Present tense + a time word = future. werden is for predictions and intentions.',
      leadFr: 'Présent + mot de temps = futur. werden sert aux prévisions et intentions.',
      explanationMd: 'German often uses the **present tense with a time word** to talk about the future — especially for **fixed plans**: **Morgen fahre ich nach Köln. Nächstes Jahr ziehe ich um. Am Samstag treffe ich Freunde.** Use **werden** more for **predictions or intentions**: **Es wird regnen. Ich werde mehr schlafen.** The time word (**morgen, nächstes Jahr, heute Abend, bald**) tells you it is about the future.',
      explanationMdFr: 'L’allemand utilise souvent le **présent avec un mot de temps** pour parler du futur — surtout pour des **projets arrêtés** : **Morgen fahre ich nach Köln. Nächstes Jahr ziehe ich um. Am Samstag treffe ich Freunde.** Utilise **werden** plutôt pour les **prévisions ou intentions** : **Es wird regnen. Ich werde mehr schlafen.** Le mot de temps (**morgen, nächstes Jahr, heute Abend, bald**) indique qu’il s’agit du futur.',
      tables: [{ title: 'Two ways to say the future', titleFr: 'Deux façons de dire le futur', headers: ['Form', 'Use', 'Example'], headersFr: ['Forme', 'Emploi', 'Exemple'],
        rows: [['Present + time word', 'fixed plans', 'Morgen fahre ich nach Köln.'], ['werden + infinitive', 'predictions, intentions', 'Es wird morgen regnen.'], ['Present + time word', 'schedule', 'Am Samstag treffe ich Freunde.'], ['werden + infinitive', 'resolution', 'Ich werde mehr Sport machen.']],
        rowsFr: [['Présent + mot de temps', 'projets arrêtés', 'Morgen fahre ich nach Köln.'], ['werden + infinitif', 'prévisions, intentions', 'Es wird morgen regnen.'], ['Présent + mot de temps', 'programme', 'Am Samstag treffe ich Freunde.'], ['werden + infinitif', 'résolution', 'Ich werde mehr Sport machen.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Morgen', role: 'time' }, { text: 'fahre', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'nach Köln.', role: 'place' }], en: 'Tomorrow I am going to Cologne.', fr: 'Demain, je vais à Cologne.' },
        { parts: [{ text: 'Nächstes Jahr', role: 'time' }, { text: 'ziehe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'um.', role: 'verb' }], en: 'Next year I am moving.', fr: 'L’an prochain, je déménage.' },
      ],
      contrast: {
        a: { label: 'Present + time word', labelFr: 'Présent + mot de temps', note: 'a fixed plan', noteFr: 'un projet arrêté', examples: [g('Morgen fahre ich nach Köln.', 'Tomorrow I am going to Cologne.', 'Demain, je vais à Cologne.'), g('Heute Abend koche ich.', 'Tonight I am cooking.', 'Ce soir, je cuisine.')] },
        b: { label: 'werden + infinitive', labelFr: 'werden + infinitif', note: 'prediction, intention', noteFr: 'prévision, intention', examples: [g('Es wird morgen regnen.', 'It will rain tomorrow.', 'Il pleuvra demain.'), g('Ich werde Deutsch lernen.', 'I will learn German.', 'J’apprendrai l’allemand.')] },
      },
      examples: [
        g('Morgen fahre ich nach Köln.', 'Tomorrow I am going to Cologne.', 'Demain, je vais à Cologne.'),
        g('Nächstes Jahr ziehe ich um.', 'Next year I am moving.', 'L’an prochain, je déménage.'),
        g('Heute Abend koche ich.', 'Tonight I am cooking.', 'Ce soir, je cuisine.'),
        g('Am Samstag treffe ich Freunde.', 'On Saturday I am meeting friends.', 'Samedi, je retrouve des amis.'),
        g('Bald fahren wir in den Urlaub.', 'Soon we are going on holiday.', 'Bientôt, nous partons en vacances.'),
        g('Ich komme wahrscheinlich später.', 'I will probably come later.', 'J’arrive probablement plus tard.'),
      ],
      mistakes: [
        { wrong: 'Morgen ich fahre nach Köln.', right: 'Morgen fahre ich nach Köln.', why: 'After a time word the verb stays second.', whyFr: 'Après un mot de temps, le verbe reste en deuxième position.' },
        { wrong: 'Ich werde morgen fahre nach Köln.', right: 'Ich fahre morgen nach Köln.', why: 'With a time word the present is enough.', whyFr: 'Avec un mot de temps, le présent suffit.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l12-e8', prompt: 'Which sentence uses the present tense for a future plan?', promptFr: 'Quelle phrase utilise le présent pour un projet futur ?', options: ['Ich werde morgen fahren.', 'Morgen fahre ich nach Köln.', 'Ich bin gefahren.'], answer: 1, explain: 'Present + time word can express the future.', explainFr: 'Présent + mot de temps peut exprimer le futur.', hint: 'Look for present tense + a future time word.', hintFr: 'Cherche le présent + un mot de temps futur.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l12-e5', pairs: [{ de: 'bald', en: 'soon', fr: 'bientôt' }, { de: 'wahrscheinlich', en: 'probably', fr: 'probablement' }, { de: 'nächstes Jahr', en: 'next year', fr: 'l’année prochaine' }], hint: 'Match each time word to its meaning.', hintFr: 'Associe chaque mot de temps à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l12-e10', prompt: 'Listen. What is Ben’s plan for next year?', promptFr: 'Écoute. Quel est le projet de Ben pour l’année prochaine ?', audio: { ttsText: 'Nächstes Jahr werde ich nach Österreich ziehen und dort arbeiten.' }, options: ['Move to Austria and work', 'Stay home', 'Study music'], optionsFr: ['Déménager en Autriche et travailler', 'Rester à la maison', 'Étudier la musique'], answer: 0, hint: 'Listen after "werde ich nach …".', hintFr: 'Écoute après « werde ich nach … ».' } },

    // ───────────── 3 · werden = to become ─────────────
    { kind: 'chapter', title: '„werden“ = etwas werden', titleFr: '« werden » = devenir', blurb: 'Ich werde Lehrer. Es wird kalt.', blurbFr: 'Ich werde Lehrer. Es wird kalt.' },

    { kind: 'situation', title: 'Was wirst du?', titleFr: 'Que deviendras-tu ?',
      setting: 'Sara and Ben talk about careers and weather.', settingFr: 'Sara et Ben parlent de carrières et de météo.',
      lines: [
        line('Sara', 'Mein Bruder wird Ingenieur. Ich werde vielleicht Lehrerin.', 'My brother is becoming an engineer. I may become a teacher.', 'Mon frère devient ingénieur. Je deviendrai peut-être enseignante.'),
        line('Ben', 'Im Herbst wird es kälter. Es wird kalt!', 'In autumn it gets colder. It is getting cold!', 'En automne, il fait plus froid. Il commence à faire froid !'),
        line('Sara', 'Ich denke oft an die Zukunft. Die Zukunft ist offen.', 'I often think about the future. The future is open.', 'Je pense souvent à l’avenir. L’avenir est ouvert.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l12-werden-become', title: 'werden = to become', titleFr: 'werden = devenir',
      lead: 'werden alone (with a noun, no other infinitive) means “to become”: Ich werde Lehrer. Es wird kalt.',
      leadFr: 'werden seul (avec un nom, sans autre infinitif) signifie « devenir » : Ich werde Lehrer. Es wird kalt.',
      explanationMd: '**werden** on its own — with a **noun** or an **adjective** and **no other infinitive** — means **“to become”**: **Ich werde Lehrer. Es wird kalt. Im Herbst wird es kälter.** It has **no article** before a profession: **Mein Bruder wird Ingenieur.** Compare: **werden + infinitive** = **future** (**Ich werde lernen**); **werden + noun / adjective** = **to become** (**Ich werde Lehrer**).',
      explanationMdFr: '**werden** seul — avec un **nom** ou un **adjectif** et **sans autre infinitif** — signifie **« devenir »** : **Ich werde Lehrer. Es wird kalt. Im Herbst wird es kälter.** Il n’y a **pas d’article** devant une profession : **Mein Bruder wird Ingenieur.** Compare : **werden + infinitif** = **futur** (**Ich werde lernen**) ; **werden + nom / adjectif** = **devenir** (**Ich werde Lehrer**).',
      tables: [{ title: 'Two meanings of werden', titleFr: 'Deux sens de werden', headers: ['werden +', 'Meaning', 'Example'], headersFr: ['werden +', 'Sens', 'Exemple'],
        rows: [['infinitive', 'future', 'Ich werde Deutsch lernen.'], ['noun', 'to become', 'Mein Bruder wird Ingenieur.'], ['adjective', 'to get', 'Es wird kalt.'], ['comparative', 'to get more …', 'Im Herbst wird es kälter.']],
        rowsFr: [['infinitif', 'futur', 'Ich werde Deutsch lernen.'], ['nom', 'devenir', 'Mein Bruder wird Ingenieur.'], ['adjectif', 'devenir / commencer à', 'Es wird kalt.'], ['comparatif', 'devenir plus …', 'Im Herbst wird es kälter.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Mein Bruder', role: 'subject' }, { text: 'wird', role: 'verb' }, { text: 'Ingenieur.', role: 'other' }], en: 'My brother is becoming an engineer.', fr: 'Mon frère devient ingénieur.' },
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'wird', role: 'verb' }, { text: 'kalt.', role: 'other' }], en: 'It is getting cold.', fr: 'Il commence à faire froid.' },
      ],
      contrast: {
        a: { label: 'werden + infinitive', labelFr: 'werden + infinitif', note: 'future', noteFr: 'futur', examples: [g('Ich werde Lehrer werden.', 'I will become a teacher.', 'Je deviendrai enseignant.'), g('Sie wird nach Berlin ziehen.', 'She will move to Berlin.', 'Elle déménagera à Berlin.')] },
        b: { label: 'werden + noun / adjective', labelFr: 'werden + nom / adjectif', note: 'to become', noteFr: 'devenir', examples: [g('Ich werde Lehrer.', 'I am becoming a teacher.', 'Je deviens enseignant.'), g('Es wird kalt.', 'It is getting cold.', 'Il commence à faire froid.')] },
      },
      examples: [
        g('Mein Bruder wird Ingenieur.', 'My brother is becoming an engineer.', 'Mon frère devient ingénieur.'),
        g('Im Herbst wird es kälter.', 'In autumn it gets colder.', 'En automne, il fait plus froid.'),
        g('Es wird kalt.', 'It is getting cold.', 'Il commence à faire froid.'),
        g('Ich werde Lehrer.', 'I am becoming a teacher.', 'Je deviens enseignant.'),
        g('Sie wird bald Mutter.', 'She is going to be a mother soon.', 'Elle va bientôt devenir mère.'),
        g('Die Tage werden länger.', 'The days are getting longer.', 'Les jours rallongent.'),
      ],
      mistakes: [
        { wrong: 'Mein Bruder wird ein Ingenieur.', right: 'Mein Bruder wird Ingenieur.', why: 'No article before a profession after werden.', whyFr: 'Pas d’article devant une profession après werden.' },
        { wrong: 'Es wirdet kalt.', right: 'Es wird kalt.', why: 'er / es: wird.', whyFr: 'er / es : wird.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l12-e4', prompt: 'What does "Es wird kalt" mean?', promptFr: 'Que signifie « Es wird kalt » ?', options: ['It is cold', 'It is getting cold', 'It was cold'], optionsFr: ['Il fait froid', 'Il commence à faire froid', 'Il faisait froid'], answer: 1, explain: '"werden" here means "to become/get".', explainFr: '« werden » signifie ici « devenir / commencer à ».', hint: '"werden" = to become.', hintFr: '« werden » = devenir.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l12-e7', prompt: 'Mein Bruder ___ Ingenieur. (werden — er-form, "become")', answer: 'wird', hint: 'werden: er wird', hintFr: 'werden : er wird' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l12-e6', prompt: 'Listen. What will Sara study?', promptFr: 'Écoute. Qu’est-ce que Sara va étudier ?', audio: { ttsText: 'Nächstes Jahr werde ich Medizin studieren.' }, options: ['Medicine', 'Music', 'Maths'], optionsFr: ['La médecine', 'La musique', 'Les maths'], answer: 0, hint: 'Listen after "werde ich".', hintFr: 'Écoute après « werde ich ».' } },

    { kind: 'pronunciation', focus: 'The "w" in werden/wirst is a "v"; "z" in Zukunft/Ziel is "ts"', focusFr: 'Le « w » de werden/wirst est un « v » ; « z » de Zukunft/Ziel est « ts »', items: [{ id: 'a2l12-werden-pron', german: 'werden', english: 'will / become', french: 'aller / devenir', gender: null, syllables: ['WER', 'den'], pronunciation: 'VAIR-den', example: { de: 'Ich werde bald kommen.', en: 'I will come soon.', fr: 'Je viendrai bientôt.' } }, { id: 'a2l12-zukunft-pron', german: 'Zukunft', english: 'future', french: 'avenir', gender: null, syllables: ['ZU', 'kunft'], pronunciation: 'TSOO-koonft', example: { de: 'Die Zukunft ist offen.', en: 'The future is open.', fr: 'L’avenir est ouvert.' } }] },

    { kind: 'wrapup',
      summary: 'You can now talk about plans: **werden + infinitive**, the **present with a time word**, and **werden = to become**. 🎉',
      summaryFr: 'Tu sais maintenant parler de projets : **werden + infinitif**, le **présent avec un mot de temps**, et **werden = devenir**. 🎉',
      card: { title: 'The future on one page', titleFr: 'Le futur en une page', sections: [
        { heading: 'werden + infinitive', headingFr: 'werden + infinitif', rows: [g('ich werde · du wirst · er wird', 'position 2', 'position 2'), g('wir werden · ihr werdet · sie werden', 'infinitive at the end', 'infinitif à la fin')] },
        { heading: 'Present + time word', headingFr: 'Présent + mot de temps', rows: [g('Morgen fahre ich nach Köln.', 'fixed plan', 'projet arrêté')] },
        { heading: 'werden = to become', headingFr: 'werden = devenir', rows: [g('Ich werde Lehrer. · Es wird kalt.', 'noun / adjective', 'nom / adjectif')] },
      ] } },
  ],
};
