import type { Lesson } from '../types';

export const a2lektion12: Lesson = {
  id: 'a2-l12', level: 'A2', module: 4, number: 12,
  title: { de: 'Pläne und Zukunft', en: 'Plans and the future', fr: 'Projets et avenir' },
  theme: 'Talking about the future with "werden" and with the present tense',
  themeFr: 'Parler de l’avenir avec « werden » et avec le présent',
  goals: ['Talk about plans and the future', 'Form the future with "werden" + infinitive', 'Use the present tense with a time word for the future', 'Use "werden" to say what you will become'],
  goalsFr: ['Parler de projets et d’avenir', 'Former le futur avec « werden » + infinitif', 'Utiliser le présent avec un mot de temps pour l’avenir', 'Utiliser « werden » pour dire ce qu’on va devenir'],
  steps: [
    { kind: 'intro', title: 'Was wirst du machen? 🚀', titleFr: 'Que vas-tu faire ? 🚀',
      scene: 'Talking about goals, plans, and what life will look like.', sceneFr: 'On parle d’objectifs, de projets et de l’avenir.',
      goals: ['Talk about future plans', 'Use "werden" + infinitive', 'Use the present tense for the future', 'Say what you will become with "werden"'],
      goalsFr: ['Parler de projets d’avenir', 'Utiliser « werden » + infinitif', 'Utiliser le présent pour l’avenir', 'Dire ce qu’on va devenir avec « werden »'] },

    { kind: 'vocab', item: { id: 'a2l12-zukunft', german: 'die Zukunft', english: 'the future', french: 'l’avenir', gender: 'die', syllables: ['ZU', 'kunft'], pronunciation: 'dee TSOO-koonft', example: { de: 'Ich denke an die Zukunft.', en: 'I think about the future.', fr: 'Je pense à l’avenir.' } } },
    { kind: 'vocab', item: { id: 'a2l12-werden', german: 'werden', english: 'will / to become', french: 'aller (futur) / devenir', gender: null, syllables: ['WER', 'den'], pronunciation: 'VAIR-den', example: { de: 'Ich werde Deutsch lernen.', en: 'I will learn German.', fr: 'Je vais apprendre l’allemand.' } } },
    { kind: 'vocab', item: { id: 'a2l12-plan', german: 'der Plan', english: 'the plan', french: 'le projet / plan', gender: 'der', syllables: ['PLAN'], pronunciation: 'dair PLAHN', example: { de: 'Was ist dein Plan?', en: 'What is your plan?', fr: 'Quel est ton projet ?' } } },
    { kind: 'vocab', item: { id: 'a2l12-planen', german: 'planen', english: 'to plan', french: 'planifier', gender: null, syllables: ['PLA', 'nen'], pronunciation: 'PLAH-nen', example: { de: 'Wir planen eine Reise.', en: 'We are planning a trip.', fr: 'Nous planifions un voyage.' } } },
    { kind: 'vocab', item: { id: 'a2l12-hoffen', german: 'hoffen', english: 'to hope', french: 'espérer', gender: null, syllables: ['HOF', 'fen'], pronunciation: 'HOFF-en', example: { de: 'Ich hoffe, dass es klappt.', en: 'I hope that it works out.', fr: 'J’espère que ça marchera.' } } },
    { kind: 'vocab', item: { id: 'a2l12-wahrscheinlich', german: 'wahrscheinlich', english: 'probably', french: 'probablement', gender: null, syllables: ['wahr', 'SCHEIN', 'lich'], pronunciation: 'vaar-SHINE-likh', example: { de: 'Ich komme wahrscheinlich später.', en: 'I will probably come later.', fr: 'Je viendrai probablement plus tard.' } } },
    { kind: 'vocab', item: { id: 'a2l12-bald', german: 'bald', english: 'soon', french: 'bientôt', gender: null, syllables: ['BALD'], pronunciation: 'bahlt', example: { de: 'Bis bald!', en: 'See you soon!', fr: 'À bientôt !' } } },
    { kind: 'vocab', item: { id: 'a2l12-naechstes-jahr', german: 'nächstes Jahr', english: 'next year', french: 'l’année prochaine', gender: null, syllables: ['NÄCH', 'stes', 'JAHR'], pronunciation: 'NEKH-stes YAAR', example: { de: 'Nächstes Jahr ziehe ich um.', en: 'Next year I am moving.', fr: 'L’année prochaine, je déménage.' } } },
    { kind: 'vocab', item: { id: 'a2l12-ziel', german: 'das Ziel', english: 'the goal / aim', french: 'l’objectif / but', gender: 'das', syllables: ['ZIEL'], pronunciation: 'dahs TSEEL', example: { de: 'Mein Ziel ist ein guter Job.', en: 'My goal is a good job.', fr: 'Mon objectif est un bon emploi.' } } },
    { kind: 'vocab', item: { id: 'a2l12-studieren', german: 'studieren', english: 'to study (at university)', french: 'faire des études', gender: null, syllables: ['stu', 'DIE', 'ren'], pronunciation: 'shtoo-DEE-ren', example: { de: 'Ich werde Medizin studieren.', en: 'I will study medicine.', fr: 'Je vais étudier la médecine.' } } },

    { kind: 'grammar', note: {
      id: 'a2l12-futur', title: 'The future with "werden" + infinitive', titleFr: 'Le futur avec « werden » + infinitif',
      explanationMd: 'Form the future with **werden** in position 2 and the **infinitive** at the **end**:\n\n- ich **werde**, du **wirst**, er/sie/es **wird**, wir **werden**\n\nIch **werde** nach Berlin **ziehen**. · **Wirst** du Deutsch **lernen**?',
      explanationMdFr: 'Forme le futur avec **werden** en position 2 et l’**infinitif** à la **fin** :\n\n- ich **werde**, du **wirst**, er/sie/es **wird**, wir **werden**\n\nIch **werde** nach Berlin **ziehen**. · **Wirst** du Deutsch **lernen** ?',
      examples: [
        { de: 'Ich werde einen Job finden.', en: 'I will find a job.', fr: 'Je vais trouver un emploi.' },
        { de: 'Sie wird Ärztin werden.', en: 'She will become a doctor.', fr: 'Elle va devenir médecin.' },
      ],
      diagram: 'satzklammer' } },

    { kind: 'grammar', note: {
      id: 'a2l12-praesens-futur', title: 'Present tense for the future', titleFr: 'Le présent pour l’avenir',
      explanationMd: 'German often uses the **present tense** with a **time word** to talk about the future — especially for fixed plans:\n\n- **Morgen** fahre ich nach Köln.\n- **Nächstes Jahr** ziehe ich um.\n\nUse **werden** more for predictions or intentions.',
      explanationMdFr: 'L’allemand utilise souvent le **présent** avec un **mot de temps** pour parler de l’avenir — surtout pour des projets fixés :\n\n- **Morgen** fahre ich nach Köln.\n- **Nächstes Jahr** ziehe ich um.\n\nUtilise **werden** plutôt pour les prédictions ou les intentions.',
      examples: [
        { de: 'Heute Abend koche ich.', en: 'Tonight I am cooking.', fr: 'Ce soir, je cuisine.' },
        { de: 'Am Samstag treffe ich Freunde.', en: 'On Saturday I am meeting friends.', fr: 'Samedi, je vois des amis.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l12-werden-beruf', title: '"werden" = to become', titleFr: '« werden » = devenir',
      explanationMd: '**werden** on its own (with a noun, no other infinitive) means "to become":\n\n- Ich **werde** Lehrer. — I am becoming a teacher.\n- Es **wird** kalt. — It is getting cold.',
      explanationMdFr: '**werden** seul (avec un nom, sans autre infinitif) signifie « devenir » :\n\n- Ich **werde** Lehrer. — Je deviens enseignant.\n- Es **wird** kalt. — Il commence à faire froid.',
      examples: [
        { de: 'Mein Bruder wird Ingenieur.', en: 'My brother is becoming an engineer.', fr: 'Mon frère devient ingénieur.' },
        { de: 'Im Herbst wird es kälter.', en: 'In autumn it gets colder.', fr: 'En automne, il fait plus froid.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l12-e1', prompt: 'Ich ___ Deutsch lernen. (werden — ich-form)', answer: 'werde', hint: 'future: ich werde + infinitive', hintFr: 'futur : ich werde + infinitif' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l12-e2', prompt: '___ du nach Berlin ziehen? (werden — du-form)', answer: 'Wirst', hint: 'werden: du wirst', hintFr: 'werden : du wirst' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l12-e3', tokens: ['ziehen', 'werde', 'Ich', 'nach', 'Berlin'], answer: ['Ich', 'werde', 'nach', 'Berlin', 'ziehen'], hint: 'werden in position 2, infinitive at the end.', hintFr: 'werden en position 2, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l12-e4', prompt: 'What does "Es wird kalt" mean?', promptFr: 'Que signifie « Es wird kalt » ?', options: ['It is cold', 'It is getting cold', 'It was cold'], optionsFr: ['Il fait froid', 'Il commence à faire froid', 'Il faisait froid'], answer: 1, explain: '"werden" here means "to become/get".', explainFr: '« werden » signifie ici « devenir / commencer à ».', hint: '"werden" = to become.', hintFr: '« werden » = devenir.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l12-e5', pairs: [ { de: 'bald', en: 'soon', fr: 'bientôt' }, { de: 'wahrscheinlich', en: 'probably', fr: 'probablement' }, { de: 'nächstes Jahr', en: 'next year', fr: 'l’année prochaine' } ], hint: 'Match each time word to its meaning.', hintFr: 'Associe chaque mot de temps à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l12-e6', prompt: 'Listen. What will Sara study?', promptFr: 'Écoute. Qu’est-ce que Sara va étudier ?', audio: { ttsText: 'Nächstes Jahr werde ich Medizin studieren.' }, options: ['Medicine', 'Music', 'Maths'], optionsFr: ['La médecine', 'La musique', 'Les maths'], answer: 0, hint: 'Listen after "werde ich".', hintFr: 'Écoute après « werde ich ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l12-e7', prompt: 'Mein Bruder ___ Ingenieur. (werden — er-form, "become")', answer: 'wird', hint: 'werden: er wird', hintFr: 'werden : er wird' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l12-e8', prompt: 'Which sentence uses the present tense for a future plan?', promptFr: 'Quelle phrase utilise le présent pour un projet futur ?', options: ['Ich werde morgen fahren.', 'Morgen fahre ich nach Köln.', 'Ich bin gefahren.'], answer: 1, explain: 'Present + time word can express the future.', explainFr: 'Présent + mot de temps peut exprimer le futur.', hint: 'Look for present tense + a future time word.', hintFr: 'Cherche le présent + un mot de temps futur.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l12-e9', tokens: ['einen', 'werde', 'finden', 'Ich', 'Job'], answer: ['Ich', 'werde', 'einen', 'Job', 'finden'], hint: 'werden, then the object, then the infinitive at the end.', hintFr: 'werden, puis l’objet, puis l’infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l12-e10', prompt: 'Listen. What is Ben’s plan for next year?', promptFr: 'Écoute. Quel est le projet de Ben pour l’année prochaine ?', audio: { ttsText: 'Nächstes Jahr werde ich nach Österreich ziehen und dort arbeiten.' }, options: ['Move to Austria and work', 'Stay home', 'Study music'], optionsFr: ['Déménager en Autriche et travailler', 'Rester à la maison', 'Étudier la musique'], answer: 0, hint: 'Listen after "werde ich nach …".', hintFr: 'Écoute après « werde ich nach … ».' } },

    { kind: 'pronunciation', focus: 'The "w" in werden/wirst is a "v"; "z" in Zukunft/Ziel is "ts"', focusFr: 'Le « w » de werden/wirst est un « v » ; « z » de Zukunft/Ziel est « ts »', items: [
      { id: 'a2l12-werden-pron', german: 'werden', english: 'will / become', french: 'aller / devenir', gender: null, syllables: ['WER', 'den'], pronunciation: 'VAIR-den', example: { de: 'Ich werde bald kommen.', en: 'I will come soon.', fr: 'Je viendrai bientôt.' } },
      { id: 'a2l12-zukunft-pron', german: 'Zukunft', english: 'future', french: 'avenir', gender: null, syllables: ['ZU', 'kunft'], pronunciation: 'TSOO-koonft', example: { de: 'Die Zukunft ist offen.', en: 'The future is open.', fr: 'L’avenir est ouvert.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now talk about the future: with **werden** + infinitive (Ich werde Deutsch lernen), with the **present tense** + a time word (Nächstes Jahr ziehe ich um), and use **werden** alone to mean "become" (Ich werde Lehrer). That completes A2 — herzlichen Glückwunsch! 🎉',
      summaryFr: 'Tu sais maintenant parler de l’avenir : avec **werden** + infinitif (Ich werde Deutsch lernen), avec le **présent** + un mot de temps (Nächstes Jahr ziehe ich um), et utiliser **werden** seul pour dire « devenir » (Ich werde Lehrer). Cela conclut le niveau A2 — herzlichen Glückwunsch ! 🎉' },
  ],
};
