import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion7: Lesson = {
  id: 'b1-l7', level: 'B1', module: 2, number: 7,
  title: { de: 'Infinitiv mit „zu"', en: 'Infinitive with "zu"', fr: 'L’infinitif avec « zu »' },
  theme: 'Infinitive clauses with "zu" and purpose with "um … zu"', themeFr: 'Les propositions infinitives avec « zu » et le but avec « um … zu »',
  goals: ['Use "zu" + infinitive after certain verbs', 'Use "es ist wichtig, … zu …"', 'Express purpose with "um … zu"', 'Tell "um … zu" from "damit"'], goalsFr: ['Utiliser « zu » + infinitif après certains verbes', 'Utiliser « es ist wichtig, … zu … »', 'Exprimer le but avec « um … zu »', 'Distinguer « um … zu » de « damit »'],
  canDo: g('Ich kann Infinitivsätze mit „zu“ bilden, „es ist wichtig, … zu …“ verwenden und Zwecke mit „um … zu“ nennen.', 'I can build infinitive clauses with “zu”, use “es ist wichtig, … zu …” and give purposes with “um … zu”.', 'Je sais construire des propositions infinitives avec « zu », utiliser « es ist wichtig, … zu … » et indiquer des buts avec « um … zu ».'),
  steps: [
    { kind: 'intro', title: 'Infinitiv mit „zu“ 🎯', titleFr: 'L’infinitif avec « zu » 🎯',
      scene: 'Sara talks about her plans: what she tries, forgets, intends — and why she saves money.', sceneFr: 'Sara parle de ses projets : ce qu’elle essaie, oublie, a l’intention de faire — et pourquoi elle économise.',
      goals: ['Use zu + infinitive after certain verbs', 'Use “es ist wichtig, … zu …”', 'Express purpose with um … zu and tell it from damit'],
      goalsFr: ['Utiliser zu + infinitif après certains verbes', 'Utiliser « es ist wichtig, … zu … »', 'Exprimer un but avec um … zu et le distinguer de damit'] },

    // ───────────── 1 · zu + infinitive after verbs ─────────────
    { kind: 'chapter', title: 'Verben mit „zu“ + Infinitiv', titleFr: 'Verbes avec « zu » + infinitif', blurb: 'versuchen, vergessen, anfangen, aufhören.', blurbFr: 'versuchen, vergessen, anfangen, aufhören.' },

    { kind: 'situation', title: 'Meine Pläne', titleFr: 'Mes projets',
      setting: 'Sara talks with her flatmate.', settingFr: 'Sara parle avec sa colocataire.',
      lines: [
        line('Mitbewohnerin', 'Was hast du vor, Sara?', 'What are you planning, Sara?', 'Que prévois-tu, Sara ?'),
        line('Sara', 'Ich habe die Absicht, umzuziehen. Ich fange an, Deutsch zu lernen. Ich versuche, jeden Tag zu lernen.', 'I intend to move. I am starting to learn German. I try to study every day.', 'J’ai l’intention de déménager. Je commence à apprendre l’allemand. J’essaie d’étudier tous les jours.'),
        line('Mitbewohnerin', 'Und was vergisst du oft?', 'And what do you often forget?', 'Et que oublies-tu souvent ?'),
        line('Sara', 'Ich vergesse oft, Wasser zu trinken. Vergiss nicht, mich anzurufen! Ich schaffe es, pünktlich zu sein. Hör auf zu rauchen!', 'I often forget to drink water. Don’t forget to call me! I manage to be on time. Stop smoking!', 'J’oublie souvent de boire de l’eau. N’oublie pas de m’appeler ! J’arrive à être à l’heure. Arrête de fumer !'),
        line('Mitbewohnerin', 'Hast du Lust, ins Kino zu gehen?', 'Do you feel like going to the cinema?', 'As-tu envie d’aller au cinéma ?'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l7-e11', prompt: 'What does Sara often forget?', promptFr: 'Que oublie souvent Sara ?', options: ['To drink water', 'To call', 'To study'], optionsFr: ['De boire de l’eau', 'D’appeler', 'D’étudier'], answer: 0, explain: 'She says: “Ich vergesse oft, Wasser zu trinken.”', explainFr: 'Elle dit : « Ich vergesse oft, Wasser zu trinken. »', hint: 'Look for “vergesse”.', hintFr: 'Cherche « vergesse ».' } },

    { kind: 'wordgroup', title: 'Verben mit „zu“', titleFr: 'Verbes avec « zu »',
      items: [{ id: 'b1l7-versuchen', german: 'versuchen', english: 'to try', french: 'essayer', gender: null, syllables: ['ver', 'SU', 'chen'], pronunciation: 'fair-ZOO-khen', example: { de: 'Ich versuche, jeden Tag zu lernen.', en: 'I try to study every day.', fr: 'J’essaie d’étudier chaque jour.' } }, { id: 'b1l7-vergessen', german: 'vergessen', english: 'to forget', french: 'oublier', gender: null, syllables: ['ver', 'GES', 'sen'], pronunciation: 'fair-GESS-en', example: { de: 'Vergiss nicht, mich anzurufen.', en: 'Don’t forget to call me.', fr: 'N’oublie pas de m’appeler.' } }, { id: 'b1l7-anfangen', german: 'anfangen', english: 'to begin', french: 'commencer', gender: null, syllables: ['AN', 'fan', 'gen'], pronunciation: 'AHN-fahng-en', example: { de: 'Ich fange an, Deutsch zu lernen.', en: 'I begin to learn German.', fr: 'Je commence à apprendre l’allemand.' } }, { id: 'b1l7-aufhoeren', german: 'aufhören', english: 'to stop', french: 'arrêter', gender: null, syllables: ['AUF', 'hö', 'ren'], pronunciation: 'OWF-hoe-ren', example: { de: 'Hör auf zu rauchen!', en: 'Stop smoking!', fr: 'Arrête de fumer !' } }, { id: 'b1l7-vorhaben', german: 'vorhaben', english: 'to plan / intend', french: 'avoir l’intention', gender: null, syllables: ['VOR', 'ha', 'ben'], pronunciation: 'FOR-hah-ben', example: { de: 'Was hast du vor?', en: 'What are you planning?', fr: 'Qu’as-tu prévu ?' } }, { id: 'b1l7-schaffen', german: 'schaffen', english: 'to manage (to do)', french: 'réussir / arriver à', gender: null, syllables: ['SCHAF', 'fen'], pronunciation: 'SHAHF-fen', example: { de: 'Ich schaffe es, pünktlich zu sein.', en: 'I manage to be on time.', fr: 'J’arrive à être à l’heure.' } }, { id: 'b1l7-lust-haben', german: 'Lust haben', english: 'to feel like', french: 'avoir envie', gender: null, syllables: ['LUST', 'ha', 'ben'], pronunciation: 'LOOST HAH-ben', example: { de: 'Ich habe Lust, ins Kino zu gehen.', en: 'I feel like going to the cinema.', fr: 'J’ai envie d’aller au cinéma.' } }, { id: 'b1l7-absicht', german: 'die Absicht', english: 'the intention', french: 'l’intention', gender: 'die', syllables: ['AB', 'sicht'], pronunciation: 'dee AHP-zikht', example: { de: 'Ich habe die Absicht, umzuziehen.', en: 'I intend to move.', fr: 'J’ai l’intention de déménager.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l7-zu-infinitiv', title: 'zu + infinitive after verbs', titleFr: 'zu + infinitif après des verbes',
      lead: 'After many verbs: comma, … zu + infinitive at the end. Separable verbs: zu goes in the middle (anzurufen).',
      leadFr: 'Après beaucoup de verbes : virgule, … zu + infinitif à la fin. Verbes séparables : zu au milieu (anzurufen).',
      explanationMd: 'After many verbs use **zu + infinitive** at the **end**: **Ich versuche, Deutsch zu lernen. Ich vergesse oft, Wasser zu trinken.** Common triggers: **versuchen, vergessen, anfangen, aufhören, Lust haben, vorhaben, schaffen, Absicht haben**. With **separable verbs**, **zu** goes **in the middle** of the verb: **anzurufen, einzukaufen, aufzustehen**. Put a **comma** before the infinitive clause when it has **more than just zu + verb** (**…, Deutsch zu lernen**). The **modals** (**können, müssen, wollen …**) take the infinitive **without zu**: **Ich kann Deutsch lernen.**',
      explanationMdFr: 'Après beaucoup de verbes, utilise **zu + infinitif** à la **fin** : **Ich versuche, Deutsch zu lernen. Ich vergesse oft, Wasser zu trinken.** Déclencheurs courants : **versuchen, vergessen, anfangen, aufhören, Lust haben, vorhaben, schaffen, Absicht haben**. Avec les **verbes séparables**, **zu** va **au milieu** du verbe : **anzurufen, einzukaufen, aufzustehen**. Mets une **virgule** avant la proposition infinitive quand elle contient **plus que zu + verbe** (**…, Deutsch zu lernen**). Les **modaux** (**können, müssen, wollen …**) prennent l’infinitif **sans zu** : **Ich kann Deutsch lernen.**',
      tables: [{ title: 'zu + infinitive', titleFr: 'zu + infinitif', headers: ['Verb', 'Example'], headersFr: ['Verbe', 'Exemple'],
        rows: [['versuchen', 'Ich versuche, jeden Tag zu lernen.'], ['vergessen', 'Vergiss nicht, mich anzurufen.'], ['anfangen', 'Ich fange an, Deutsch zu lernen.'], ['aufhören', 'Hör auf zu rauchen!'], ['Lust haben', 'Ich habe Lust, ins Kino zu gehen.'], ['schaffen', 'Ich schaffe es, pünktlich zu sein.']],
        rowsFr: [['versuchen', 'Ich versuche, jeden Tag zu lernen.'], ['vergessen', 'Vergiss nicht, mich anzurufen.'], ['anfangen', 'Ich fange an, Deutsch zu lernen.'], ['aufhören', 'Hör auf zu rauchen !'], ['Lust haben', 'Ich habe Lust, ins Kino zu gehen.'], ['schaffen', 'Ich schaffe es, pünktlich zu sein.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'versuche,', role: 'verb' }, { text: 'jeden Tag', role: 'time' }, { text: 'zu lernen.', role: 'verb' }], en: 'I try to study every day.', fr: 'J’essaie d’étudier tous les jours.' },
        { parts: [{ text: 'Vergiss', role: 'verb' }, { text: 'nicht,', role: 'other' }, { text: 'mich', role: 'accusative' }, { text: 'anzurufen!', role: 'verb' }], en: 'Don’t forget to call me!', fr: 'N’oublie pas de m’appeler !' },
      ],
      contrast: {
        a: { label: 'Modal + infinitive', labelFr: 'Modal + infinitif', note: 'no zu', noteFr: 'sans zu', examples: [g('Ich kann Deutsch lernen.', 'I can learn German.', 'Je peux apprendre l’allemand.'), g('Ich muss pünktlich sein.', 'I have to be on time.', 'Je dois être à l’heure.')] },
        b: { label: 'Other verb + zu', labelFr: 'Autre verbe + zu', note: 'zu + infinitive', noteFr: 'zu + infinitif', examples: [g('Ich versuche, Deutsch zu lernen.', 'I try to learn German.', 'J’essaie d’apprendre l’allemand.'), g('Ich schaffe es, pünktlich zu sein.', 'I manage to be on time.', 'J’arrive à être à l’heure.')] },
      },
      examples: [
        g('Ich versuche, jeden Tag zu lernen.', 'I try to study every day.', 'J’essaie d’étudier tous les jours.'),
        g('Ich vergesse oft, Wasser zu trinken.', 'I often forget to drink water.', 'J’oublie souvent de boire de l’eau.'),
        g('Vergiss nicht, mich anzurufen.', 'Don’t forget to call me.', 'N’oublie pas de m’appeler.'),
        g('Er hat Lust, ins Kino zu gehen.', 'He feels like going to the cinema.', 'Il a envie d’aller au cinéma.'),
        g('Ich fange an, Deutsch zu lernen.', 'I am starting to learn German.', 'Je commence à apprendre l’allemand.'),
        g('Ich habe die Absicht, umzuziehen.', 'I intend to move.', 'J’ai l’intention de déménager.'),
      ],
      mistakes: [
        { wrong: 'Ich versuche, zu Deutsch lernen.', right: 'Ich versuche, Deutsch zu lernen.', why: 'zu goes directly before the infinitive.', whyFr: 'zu se place juste devant l’infinitif.' },
        { wrong: 'Vergiss nicht, zu anrufen.', right: 'Vergiss nicht, anzurufen.', why: 'With separable verbs zu goes in the middle.', whyFr: 'Avec les verbes séparables, zu va au milieu.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l7-e1', prompt: 'Ich versuche, Deutsch ___ lernen. (zu-particle)', answer: 'zu', hint: 'infinitive clause needs "zu"', hintFr: 'la proposition infinitive a besoin de « zu »' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l7-e4', prompt: 'Vergiss nicht, mich an___rufen. (separable verb + zu)', answer: 'zu', hint: 'with separable verbs, zu goes between prefix and stem: anzurufen', hintFr: 'avec les verbes séparables, zu va entre la particule et le radical : anzurufen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l7-e9', prompt: 'Ich habe Lust, ins Kino ___ gehen. (zu-particle)', answer: 'zu', hint: '"Lust haben, … zu …"', hintFr: '« Lust haben, … zu … »' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l7-e5', pairs: [{ de: 'versuchen', en: 'to try', fr: 'essayer' }, { de: 'aufhören', en: 'to stop', fr: 'arrêter' }, { de: 'vorhaben', en: 'to plan', fr: 'prévoir' }], hint: 'Match each verb to its meaning.', hintFr: 'Associe chaque verbe à sa signification.' } },

    // ───────────── 2 · Es ist wichtig, … zu … ─────────────
    { kind: 'chapter', title: '„Es ist wichtig, … zu …“', titleFr: '« Es ist wichtig, … zu … »', blurb: 'Impersonal expressions.', blurbFr: 'Expressions impersonnelles.' },

    { kind: 'situation', title: 'Gesund leben', titleFr: 'Vivre sainement',
      setting: 'A trainer gives advice.', settingFr: 'Un coach donne des conseils.',
      lines: [
        line('Trainer', 'Es ist wichtig, gesund zu essen. Es ist nicht leicht, eine Sprache zu lernen, aber es macht Spaß, Deutsch zu lernen.', 'It is important to eat healthily. It is not easy to learn a language, but it is fun to learn German.', 'Il est important de manger sainement. Ce n’est pas facile d’apprendre une langue, mais c’est amusant d’apprendre l’allemand.'),
        line('Sara', 'Es ist schön, dich zu sehen. Es ist Zeit, nach Hause zu gehen.', 'It is nice to see you. It is time to go home.', 'C’est agréable de te voir. Il est temps de rentrer.'),
        line('Trainer', 'Es ist wichtig, jeden Tag ein bisschen zu üben.', 'It is important to practise a little every day.', 'Il est important de s’entraîner un peu chaque jour.'),
      ],
      words: [{ id: 'b1l7-gesund2', german: 'gesund', english: 'healthy', french: 'sain', gender: null, syllables: ['ge', 'SUND'], pronunciation: 'ge-ZOONT', example: { de: 'Es ist wichtig, gesund zu essen.', en: 'It is important to eat healthily.', fr: 'Il est important de manger sainement.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l7-es-ist-wichtig', title: '“Es ist wichtig, … zu …”', titleFr: '« Es ist wichtig, … zu … »',
      lead: 'Es ist + adjective / noun, + … zu + infinitive. The comma sits before the zu-clause.',
      leadFr: 'Es ist + adjectif / nom, + … zu + infinitif. La virgule se place avant la proposition en zu.',
      explanationMd: 'Impersonal expressions also take **zu + infinitive**: **Es ist wichtig, gesund zu essen. Es ist schön, dich zu sehen. Es macht Spaß, Deutsch zu lernen. Es ist Zeit, nach Hause zu gehen. Es ist nicht leicht, eine Sprache zu lernen.** The pattern is **Es ist + adjective / noun** (or **Es macht + noun**), then a **comma**, then the **zu-clause**. The zu-clause **tells you what is important / nice / easy**. You can **start with the zu-clause**: **Gesund zu essen ist wichtig.** (no comma needed).',
      explanationMdFr: 'Les expressions impersonnelles prennent aussi **zu + infinitif** : **Es ist wichtig, gesund zu essen. Es ist schön, dich zu sehen. Es macht Spaß, Deutsch zu lernen. Es ist Zeit, nach Hause zu gehen. Es ist nicht leicht, eine Sprache zu lernen.** Le schéma est **Es ist + adjectif / nom** (ou **Es macht + nom**), puis une **virgule**, puis la **proposition en zu**. La proposition en zu **dit ce qui est important / agréable / facile**. Tu peux **commencer par la proposition en zu** : **Gesund zu essen ist wichtig.** (pas de virgule nécessaire).',
      tables: [{ title: 'Es ist … zu …', titleFr: 'Es ist … zu …', headers: ['Expression', 'Example'], headersFr: ['Expression', 'Exemple'],
        rows: [['Es ist wichtig, …', 'Es ist wichtig, gesund zu essen.'], ['Es ist schön, …', 'Es ist schön, dich zu sehen.'], ['Es macht Spaß, …', 'Es macht Spaß, Deutsch zu lernen.'], ['Es ist nicht leicht, …', 'Es ist nicht leicht, eine Sprache zu lernen.'], ['Es ist Zeit, …', 'Es ist Zeit, nach Hause zu gehen.']],
        rowsFr: [['Es ist wichtig, …', 'Es ist wichtig, gesund zu essen.'], ['Es ist schön, …', 'Es ist schön, dich zu sehen.'], ['Es macht Spaß, …', 'Es macht Spaß, Deutsch zu lernen.'], ['Es ist nicht leicht, …', 'Es ist nicht leicht, eine Sprache zu lernen.'], ['Es ist Zeit, …', 'Es ist Zeit, nach Hause zu gehen.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'wichtig,', role: 'other' }, { text: 'gesund', role: 'other' }, { text: 'zu essen.', role: 'verb' }], en: 'It is important to eat healthily.', fr: 'Il est important de manger sainement.' },
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'macht', role: 'verb' }, { text: 'Spaß,', role: 'accusative' }, { text: 'Deutsch', role: 'accusative' }, { text: 'zu lernen.', role: 'verb' }], en: 'It is fun to learn German.', fr: 'C’est amusant d’apprendre l’allemand.' },
      ],
      contrast: {
        a: { label: 'Es ist … , … zu …', labelFr: 'Es ist … , … zu …', note: 'es first', noteFr: 'es en premier', examples: [g('Es ist wichtig, gesund zu essen.', 'It is important to eat healthily.', 'Il est important de manger sainement.'), g('Es ist schön, dich zu sehen.', 'It is nice to see you.', 'C’est agréable de te voir.')] },
        b: { label: 'zu-clause first', labelFr: 'Proposition en zu d’abord', note: 'as the subject', noteFr: 'comme sujet', examples: [g('Gesund zu essen ist wichtig.', 'Eating healthily is important.', 'Manger sainement est important.'), g('Dich zu sehen ist schön.', 'Seeing you is nice.', 'Te voir est agréable.')] },
      },
      examples: [
        g('Es ist wichtig, gesund zu essen.', 'It is important to eat healthily.', 'Il est important de manger sainement.'),
        g('Es ist schön, dich zu sehen.', 'It is nice to see you.', 'C’est agréable de te voir.'),
        g('Es macht Spaß, Deutsch zu lernen.', 'It is fun to learn German.', 'C’est amusant d’apprendre l’allemand.'),
        g('Es ist nicht leicht, eine Sprache zu lernen.', 'It is not easy to learn a language.', 'Ce n’est pas facile d’apprendre une langue.'),
        g('Es ist Zeit, nach Hause zu gehen.', 'It is time to go home.', 'Il est temps de rentrer.'),
        g('Es ist wichtig, jeden Tag ein bisschen zu üben.', 'It is important to practise a little every day.', 'Il est important de s’entraîner un peu chaque jour.'),
      ],
      mistakes: [
        { wrong: 'Es ist wichtig, zu essen gesund.', right: 'Es ist wichtig, gesund zu essen.', why: 'zu + infinitive stands at the end.', whyFr: 'zu + infinitif se place à la fin.' },
        { wrong: 'Es ist wichtig, dass gesund zu essen.', right: 'Es ist wichtig, gesund zu essen.', why: 'No dass with zu + infinitive.', whyFr: 'Pas de dass avec zu + infinitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l7-e2', tokens: ['zu', 'gesund', 'essen', 'Es ist wichtig'], answer: ['Es ist wichtig', 'gesund', 'zu', 'essen'], hint: '"zu" + infinitive at the end.', hintFr: '« zu » + infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l7-e10', prompt: 'Listen. What is important according to the speaker?', promptFr: 'Écoute. Qu’est-ce qui est important selon le locuteur ?', audio: { ttsText: 'Es ist wichtig, jeden Tag ein bisschen zu üben.' }, options: ['To practise a little every day', 'To sleep more', 'To travel'], optionsFr: ['S’entraîner un peu chaque jour', 'Dormir plus', 'Voyager'], answer: 0, hint: 'Listen after "Es ist wichtig".', hintFr: 'Écoute après « Es ist wichtig ».' } },

    // ───────────── 3 · um … zu / damit ─────────────
    { kind: 'chapter', title: 'um … zu oder damit?', titleFr: 'um … zu ou damit ?', blurb: 'Purpose clauses.', blurbFr: 'Propositions de but.' },

    { kind: 'situation', title: 'Wozu spare ich?', titleFr: 'Pourquoi j’économise ?',
      setting: 'Sara explains why she saves, studies and gets up early.', settingFr: 'Sara explique pourquoi elle économise, étudie et se lève tôt.',
      lines: [
        line('Sara', 'Ich spare Geld, um eine Weltreise zu machen. Ich lerne Deutsch, um in Wien zu arbeiten.', 'I save money to take a world trip. I learn German to work in Vienna.', 'J’économise pour faire un tour du monde. J’apprends l’allemand pour travailler à Vienne.'),
        line('Sara', 'Ich stehe früh auf, um Sport zu machen. Sie geht zum Arzt, um gesund zu werden.', 'I get up early to do sport. She goes to the doctor to get healthy.', 'Je me lève tôt pour faire du sport. Elle va chez le médecin pour guérir.'),
        line('Sara', 'Mein Vater spart, damit ich studieren kann. Wir leihen ihm Geld, damit er das Auto kaufen kann.', 'My father saves so that I can study. We lend him money so that he can buy the car.', 'Mon père économise pour que je puisse étudier. Nous lui prêtons de l’argent pour qu’il puisse acheter la voiture.'),
      ],
      words: [{ id: 'b1l7-sparen2', german: 'sparen', english: 'to save (money)', french: 'économiser', gender: null, syllables: ['SPA', 'ren'], pronunciation: 'SHPAH-ren', example: { de: 'Ich spare, um zu reisen.', en: 'I save in order to travel.', fr: 'J’économise pour voyager.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l7-um-zu', title: 'um … zu and damit', titleFr: 'um … zu et damit',
      lead: 'Same subject → um … zu + infinitive. Different subjects → damit + full clause (verb last).',
      leadFr: 'Même sujet → um … zu + infinitif. Sujets différents → damit + proposition complète (verbe à la fin).',
      explanationMd: '**um … zu + infinitive** expresses a **purpose** (“in order to”) when **both clauses have the same subject**: **Ich lerne Deutsch, um in Wien zu arbeiten. Ich spare, um ein Auto zu kaufen.** If the **subjects are different**, use **damit** with a **full clause** (**verb last**): **Mein Vater spart, damit ich studieren kann.** The question is **Wozu …?** or **Warum …?**. With **separable verbs** **zu** sits in the middle: **um früh aufzustehen**.',
      explanationMdFr: '**um … zu + infinitif** exprime un **but** (« afin de ») quand **les deux propositions ont le même sujet** : **Ich lerne Deutsch, um in Wien zu arbeiten. Ich spare, um ein Auto zu kaufen.** Si les **sujets sont différents**, utilise **damit** avec une **proposition complète** (**verbe à la fin**) : **Mein Vater spart, damit ich studieren kann.** La question est **Wozu …?** ou **Warum …?**. Avec les **verbes séparables**, **zu** se place au milieu : **um früh aufzustehen**.',
      tables: [{ title: 'um … zu vs damit', titleFr: 'um … zu vs damit', headers: ['', 'um … zu', 'damit'], headersFr: ['', 'um … zu', 'damit'],
        rows: [['Subjects', 'the same', 'different'], ['Form', 'um + … + zu + infinitive', 'damit + subject … + verb last'], ['Example', 'Ich spare, um zu reisen.', 'Mein Vater spart, damit ich studieren kann.']],
        rowsFr: [['Sujets', 'les mêmes', 'différents'], ['Forme', 'um + … + zu + infinitif', 'damit + sujet … + verbe à la fin'], ['Exemple', 'Ich spare, um zu reisen.', 'Mein Vater spart, damit ich studieren kann.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'spare', role: 'verb' }, { text: 'Geld,', role: 'accusative' }, { text: 'um', role: 'connector' }, { text: 'eine Weltreise', role: 'accusative' }, { text: 'zu machen.', role: 'verb' }], en: 'I save money to take a world trip.', fr: 'J’économise pour faire un tour du monde.' },
        { parts: [{ text: 'Mein Vater', role: 'subject' }, { text: 'spart,', role: 'verb' }, { text: 'damit', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'studieren', role: 'verb' }, { text: 'kann.', role: 'verb' }], en: 'My father saves so that I can study.', fr: 'Mon père économise pour que je puisse étudier.' },
      ],
      contrast: {
        a: { label: 'Same subject: um … zu', labelFr: 'Même sujet : um … zu', note: 'zu + infinitive', noteFr: 'zu + infinitif', examples: [g('Ich stehe früh auf, um Sport zu machen.', 'I get up early to do sport.', 'Je me lève tôt pour faire du sport.'), g('Sie geht zum Arzt, um gesund zu werden.', 'She goes to the doctor to get healthy.', 'Elle va chez le médecin pour guérir.')] },
        b: { label: 'Different subjects: damit', labelFr: 'Sujets différents : damit', note: 'full clause', noteFr: 'proposition complète', examples: [g('Mein Vater spart, damit ich studieren kann.', 'My father saves so that I can study.', 'Mon père économise pour que je puisse étudier.'), g('Wir leihen ihm Geld, damit er das Auto kaufen kann.', 'We lend him money so that he can buy the car.', 'Nous lui prêtons de l’argent pour qu’il puisse acheter la voiture.')] },
      },
      examples: [
        g('Ich lerne Deutsch, um in Wien zu arbeiten.', 'I learn German to work in Vienna.', 'J’apprends l’allemand pour travailler à Vienne.'),
        g('Ich spare Geld, um eine Weltreise zu machen.', 'I save money to take a world trip.', 'J’économise pour faire un tour du monde.'),
        g('Ich stehe früh auf, um Sport zu machen.', 'I get up early to do sport.', 'Je me lève tôt pour faire du sport.'),
        g('Sie geht zum Arzt, um gesund zu werden.', 'She goes to the doctor to get healthy.', 'Elle va chez le médecin pour guérir.'),
        g('Mein Vater spart, damit ich studieren kann.', 'My father saves so that I can study.', 'Mon père économise pour que je puisse étudier.'),
        g('Wir leihen ihm Geld, damit er das Auto kaufen kann.', 'We lend him money so that he can buy the car.', 'Nous lui prêtons de l’argent pour qu’il puisse acheter la voiture.'),
      ],
      mistakes: [
        { wrong: 'Mein Vater spart, um ich studieren kann.', right: 'Mein Vater spart, damit ich studieren kann.', why: 'Different subjects need damit.', whyFr: 'Des sujets différents demandent damit.' },
        { wrong: 'Ich lerne Deutsch, damit ich arbeiten in Wien.', right: 'Ich lerne Deutsch, um in Wien zu arbeiten.', why: 'Same subject: um … zu.', whyFr: 'Même sujet : um … zu.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l7-e3', prompt: 'Which uses "um … zu" correctly?', promptFr: 'Laquelle utilise « um … zu » correctement ?', options: ['Ich lerne Deutsch, um ich arbeite.', 'Ich lerne Deutsch, um zu arbeiten.', 'Ich lerne Deutsch um arbeiten.'], answer: 1, explain: '"um" + … + "zu" + infinitive: um zu arbeiten.', explainFr: '« um » + … + « zu » + infinitif : um zu arbeiten.', hint: 'Need both "um" and "zu".', hintFr: 'Il faut « um » et « zu ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l7-e7', prompt: 'Same subject in both clauses — which do you use?', promptFr: 'Même sujet dans les deux propositions — laquelle utilises-tu ?', options: ['damit', 'um … zu', 'weil'], answer: 1, explain: 'Same subject → "um … zu"; different subjects → "damit".', explainFr: 'Même sujet → « um … zu » ; sujets différents → « damit ».', hint: 'The infinitive construction.', hintFr: 'La construction à l’infinitif.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l7-e8', tokens: ['zu', 'arbeiten', 'um', 'Wien', 'in'], answer: ['um', 'in', 'Wien', 'zu', 'arbeiten'], hint: 'um … zu + infinitive at the end.', hintFr: 'um … zu + infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l7-e6', prompt: 'Listen. Why does Sara save money?', promptFr: 'Écoute. Pourquoi Sara économise-t-elle ?', audio: { ttsText: 'Ich spare Geld, um eine Weltreise zu machen.' }, options: ['To travel the world', 'To buy a house', 'To study'], optionsFr: ['Pour faire le tour du monde', 'Pour acheter une maison', 'Pour étudier'], answer: 0, hint: 'Listen after "um".', hintFr: 'Écoute après « um ».' } },

    { kind: 'pronunciation', focus: 'The "zu" is short and unstressed; with separable verbs it hides inside the word (AN-zu-rufen)', focusFr: 'Le « zu » est court et non accentué ; avec les verbes séparables, il se glisse dans le mot (AN-zu-rufen)', items: [{ id: 'b1l7-anzurufen-pron', german: 'anzurufen', english: 'to call (inf. + zu)', french: 'appeler (inf. + zu)', gender: null, syllables: ['AN', 'zu', 'ru', 'fen'], pronunciation: 'AHN-tsoo-roo-fen', example: { de: 'Vergiss nicht, anzurufen.', en: 'Don’t forget to call.', fr: 'N’oublie pas d’appeler.' } }, { id: 'b1l7-umzu-pron', german: 'um … zu', english: 'in order to', french: 'pour', gender: null, syllables: ['um', 'zu'], pronunciation: 'oom … tsoo', example: { de: 'um zu lernen', en: 'in order to learn', fr: 'pour apprendre' } }] },

    { kind: 'wrapup',
      summary: 'You can now use **zu + infinitive** after verbs and in **“Es ist wichtig, … zu …”**, and name a **purpose** with **um … zu** (same subject) or **damit** (different subjects). 🎉',
      summaryFr: 'Tu sais maintenant utiliser **zu + infinitif** après des verbes et dans **« Es ist wichtig, … zu … »**, et indiquer un **but** avec **um … zu** (même sujet) ou **damit** (sujets différents). 🎉',
      card: { title: 'Infinitive clauses on one page', titleFr: 'Les propositions infinitives en une page', sections: [
        { heading: 'zu + infinitive', headingFr: 'zu + infinitif', rows: [g('versuchen · vergessen · anfangen · aufhören', 'verb + …, … zu + inf.', 'verbe + …, … zu + inf.'), g('anzurufen · einzukaufen', 'separable: zu in the middle', 'séparable : zu au milieu')] },
        { heading: 'Es ist … zu …', headingFr: 'Es ist … zu …', rows: [g('Es ist wichtig, gesund zu essen.', 'impersonal', 'impersonnel')] },
        { heading: 'Purpose', headingFr: 'But', rows: [g('um … zu', 'same subject', 'même sujet'), g('damit', 'different subjects, verb last', 'sujets différents, verbe à la fin')] },
      ] } },
  ],
};
