import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion18: Lesson = {
  id: 'a2-l18', level: 'A2', module: 2, number: 6,
  title: { de: 'Vorschläge machen', en: 'Making suggestions', fr: 'Faire des propositions' },
  theme: 'Suggestions and advice with könnte / sollte, sport and leisure, and time adverbs like "montags"', themeFr: 'Propositions et conseils avec könnte / sollte, sport et loisirs, et adverbes de temps comme « montags »',
  goals: ['Suggest something with "Wir könnten …"', 'Give advice with "Du solltest …"', 'Agree and disagree politely', 'Say when you do things with montags, abends, vormittags'], goalsFr: ['Proposer quelque chose avec « Wir könnten … »', 'Donner un conseil avec « Du solltest … »', 'Accepter et refuser poliment', 'Dire quand on fait les choses avec montags, abends, vormittags'],
  canDo: g('Ich kann etwas vorschlagen, Rat geben, höflich zustimmen oder widersprechen und sagen, wann ich etwas regelmäßig tue.', 'I can suggest something, give advice, agree or disagree politely and say when I regularly do something.', 'Je sais proposer quelque chose, donner un conseil, approuver ou contredire poliment et dire quand je fais quelque chose régulièrement.'),
  steps: [
    { kind: 'intro', title: 'Vorschläge und Ratschläge 💪', titleFr: 'Propositions et conseils 💪',
      scene: 'Lara wants to get fit. Tim has ideas, Mia has advice, and everybody has a different day.', sceneFr: 'Lara veut se mettre en forme. Tim a des idées, Mia a des conseils, et chacun a un jour différent.',
      goals: ['Suggest with “könnte” and advise with “sollte”', 'Agree and disagree politely', 'Say when you do things: montags, abends'],
      goalsFr: ['Proposer avec « könnte » et conseiller avec « sollte »', 'Approuver et contredire poliment', 'Dire quand tu fais les choses : montags, abends'] },

    // ───────────── 1 · Sport and health ─────────────
    { kind: 'chapter', title: 'Sport und Gesundheit', titleFr: 'Sport et santé', blurb: 'Getting fit in your week.', blurbFr: 'Se mettre en forme dans ta semaine.' },

    { kind: 'situation', title: 'Ich will fit werden', titleFr: 'Je veux être en forme',
      setting: 'Lara asks Tim and Mia for ideas.', settingFr: 'Lara demande des idées à Tim et Mia.',
      lines: [
        line('Lara', 'Ich brauche euren Rat. Ich will zwei Kilo abnehmen und gesünder leben.', 'I need your advice. I want to lose two kilos and live healthier.', 'J’ai besoin de vos conseils. Je veux perdre deux kilos et vivre plus sainement.'),
        line('Tim', 'Ich habe einen Vorschlag: Wir könnten montags im Park joggen.', 'I have a suggestion: we could jog in the park on Mondays.', 'J’ai une proposition : nous pourrions courir au parc le lundi.'),
        line('Mia', 'Du solltest auch regelmäßig trainieren. Das Fitnessstudio neben dem Bahnhof ist gut.', 'You should also work out regularly. The gym next to the station is good.', 'Tu devrais aussi t’entraîner régulièrement. La salle de sport près de la gare est bien.'),
        line('Lara', 'Und der Sportverein? Mein Bruder ist dort Mitglied.', 'And the sports club? My brother is a member there.', 'Et le club de sport ? Mon frère en est membre.'),
        line('Tim', 'Wie wäre es mit einem Kurs im Verein? Das ist gesund und macht Spaß.', 'How about a class at the club? It is healthy and fun.', 'Et si on prenait un cours au club ? C’est sain et agréable.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l18-e13', prompt: 'What does Lara want?', promptFr: 'Que veut Lara ?', options: ['Lose two kilos and live healthier', 'Run a marathon', 'Change jobs'], optionsFr: ['Perdre deux kilos et vivre plus sainement', 'Courir un marathon', 'Changer de travail'], answer: 0, explain: 'She says: “Ich will zwei Kilo abnehmen und gesünder leben.”', explainFr: 'Elle dit : « Ich will zwei Kilo abnehmen und gesünder leben. »', hint: 'Look at her first line.', hintFr: 'Regarde sa première réplique.' } },

    { kind: 'wordgroup', title: 'Sport treiben', titleFr: 'Faire du sport',
      items: [{ id: 'a2l18-joggen', german: 'joggen', english: 'to jog', french: 'faire du jogging', gender: null, syllables: ['JOG', 'gen'], pronunciation: 'JOG-en', example: { de: 'Ich jogge gern im Park.', en: 'I like jogging in the park.', fr: 'J’aime faire du jogging dans le parc.' } }, { id: 'a2l18-trainieren', german: 'trainieren', english: 'to train / work out', french: 's’entraîner', gender: null, syllables: ['tra', 'NIE', 'ren'], pronunciation: 'trah-NEE-ren', example: { de: 'Wir trainieren zweimal pro Woche.', en: 'We work out twice a week.', fr: 'Nous nous entraînons deux fois par semaine.' } }, { id: 'a2l18-fitnessstudio', german: 'das Fitnessstudio', english: 'the gym', french: 'la salle de sport', gender: 'das', syllables: ['FIT', 'ness', 'STU', 'dio'], pronunciation: 'dahs FIT-ness-shtoo-dee-oh', example: { de: 'Das Fitnessstudio liegt neben dem Bahnhof.', en: 'The gym is next to the station.', fr: 'La salle de sport est à côté de la gare.' } }, { id: 'a2l18-verein', german: 'der Verein', english: 'the club (association)', french: 'le club / l’association', gender: 'der', syllables: ['ver', 'EIN'], pronunciation: 'dair fair-INE', example: { de: 'Mein Bruder ist im Sportverein.', en: 'My brother is in the sports club.', fr: 'Mon frère est dans le club de sport.' } }, { id: 'a2l18-abnehmen', german: 'abnehmen', english: 'to lose weight', french: 'perdre du poids / maigrir', gender: null, syllables: ['AB', 'neh', 'men'], pronunciation: 'AHP-nay-men', example: { de: 'Er will zwei Kilo abnehmen.', en: 'He wants to lose two kilos.', fr: 'Il veut perdre deux kilos.' } }] },

    { kind: 'wordgroup', title: 'Rat und Zustimmung', titleFr: 'Conseil et accord',
      items: [{ id: 'a2l18-vorschlag', german: 'der Vorschlag', english: 'the suggestion', french: 'la proposition', gender: 'der', syllables: ['VOR', 'schlag'], pronunciation: 'dair FOR-shlahk', example: { de: 'Ich habe einen Vorschlag.', en: 'I have a suggestion.', fr: 'J’ai une proposition.' } }, { id: 'a2l18-rat', german: 'der Rat', english: 'the advice', french: 'le conseil', gender: 'der', syllables: ['RAT'], pronunciation: 'dair raht', example: { de: 'Ich brauche deinen Rat.', en: 'I need your advice.', fr: 'J’ai besoin de ton conseil.' } }, { id: 'a2l18-gesund', german: 'gesund', english: 'healthy', french: 'sain / en bonne santé', gender: null, syllables: ['ge', 'SUND'], pronunciation: 'ge-ZOONT', example: { de: 'Obst und Gemüse sind gesund.', en: 'Fruit and vegetables are healthy.', fr: 'Les fruits et les légumes sont sains.' } }, { id: 'a2l18-regelmaessig', german: 'regelmäßig', english: 'regularly', french: 'régulièrement', gender: null, syllables: ['RE', 'gel', 'mä', 'ßig'], pronunciation: 'RAY-gel-may-sikh', example: { de: 'Ich trainiere regelmäßig.', en: 'I work out regularly.', fr: 'Je m’entraîne régulièrement.' } }, { id: 'a2l18-einverstanden', german: 'einverstanden', english: 'agreed / fine by me', french: 'd’accord', gender: null, syllables: ['EIN', 'ver', 'stan', 'den'], pronunciation: 'INE-fair-shtahn-den', example: { de: 'Einverstanden! Dann bis Montag.', en: 'Agreed! See you Monday, then.', fr: 'D’accord ! Alors à lundi.' } }, { id: 'a2l18-wie-waere-es', german: 'Wie wäre es mit …?', english: 'How about …?', french: 'Et si on faisait … ? / Que dirais-tu de … ?', gender: null, syllables: ['wie', 'WÄ', 're', 'es', 'mit'], pronunciation: 'vee VAY-reh ess mit', example: { de: 'Wie wäre es mit einem Spaziergang?', en: 'How about a walk?', fr: 'Que dirais-tu d’une promenade ?' } }] },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l18-e8', word: 'Fitnessstudio', answer: 'das', hint: 'Words ending in -studio are neuter.', hintFr: 'Les mots en -studio sont neutres.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l18-e9', word: 'Verein', answer: 'der', hint: 'Many nouns with ver- are masculine: der Verein.', hintFr: 'Beaucoup de noms en ver- sont masculins : der Verein.' } },

    // ───────────── 2 · könnte / sollte ─────────────
    { kind: 'chapter', title: 'könnte und sollte', titleFr: 'könnte et sollte', blurb: 'Suggest and advise, softly.', blurbFr: 'Proposer et conseiller, tout en douceur.' },

    { kind: 'situation', title: 'Wir könnten …', titleFr: 'Nous pourrions …',
      setting: 'The three friends plan their first week.', settingFr: 'Les trois amis planifient leur première semaine.',
      lines: [
        line('Tim', 'Wir könnten montags und donnerstags abends joggen gehen.', 'We could go jogging on Mondays and Thursdays in the evening.', 'Nous pourrions courir le lundi et le jeudi soir.'),
        line('Mia', 'Und am Samstag könnten wir schwimmen gehen.', 'And on Saturday we could go swimming.', 'Et samedi, nous pourrions aller nager.'),
        line('Lara', 'Gute Idee! Was sollte ich noch ändern?', 'Good idea! What else should I change?', 'Bonne idée ! Que devrais-je encore changer ?'),
        line('Mia', 'Du solltest weniger Kaffee und mehr Wasser trinken. Und ihr solltet früher ins Bett gehen.', 'You should drink less coffee and more water. And you two should go to bed earlier.', 'Tu devrais boire moins de café et plus d’eau. Et vous devriez vous coucher plus tôt.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l18-e14', prompt: 'What does Mia advise Lara to drink?', promptFr: 'Que conseille Mia à Lara de boire ?', options: ['Less coffee, more water', 'More coffee', 'Only tea'], optionsFr: ['Moins de café, plus d’eau', 'Plus de café', 'Seulement du thé'], answer: 0, explain: 'She says: “Du solltest weniger Kaffee und mehr Wasser trinken.”', explainFr: 'Elle dit : « Du solltest weniger Kaffee und mehr Wasser trinken. »', hint: 'Look for “solltest”.', hintFr: 'Cherche « solltest ».' } },

    { kind: 'grammar', note: {
      id: 'a2l18-koennte-sollte', title: 'Suggestions and advice: könnte / sollte', titleFr: 'Propositions et conseils : könnte / sollte',
      lead: 'könnte = suggestion (“we could”). sollte = advice (“you should”). The second verb goes to the end.',
      leadFr: 'könnte = proposition (« nous pourrions »). sollte = conseil (« tu devrais »). Le second verbe va à la fin.',
      explanationMd: 'To make a **polite suggestion**, use **könnte** (could). For **friendly advice**, use **sollte** (should). Both are **modal verbs**, so the second verb goes to the **end** as an infinitive. Careful: **konnte** (past of können) is **not** **könnte** (suggestion) — the **umlaut** matters! **sollte** looks like a past tense, but in a suggestion it refers to the **present or future**.',
      explanationMdFr: 'Pour faire une **proposition polie**, utilise **könnte** (pourrait). Pour un **conseil amical**, utilise **sollte** (devrait). Ce sont deux **verbes modaux** : le second verbe va à la **fin** à l’infinitif. Attention : **konnte** (passé de können) n’est **pas** **könnte** (proposition) — le **tréma** compte ! **sollte** ressemble à un passé, mais dans un conseil il se rapporte au **présent ou au futur**.',
      tables: [{ title: 'könnte and sollte', titleFr: 'könnte et sollte', headers: ['Person', 'könnte', 'sollte'], headersFr: ['Personne', 'könnte', 'sollte'],
        rows: [['ich', 'könnte', 'sollte'], ['du', 'könntest', 'solltest'], ['er / sie / es', 'könnte', 'sollte'], ['wir', 'könnten', 'sollten'], ['ihr', 'könntet', 'solltet'], ['sie / Sie', 'könnten', 'sollten']],
        rowsFr: [['ich', 'könnte', 'sollte'], ['du', 'könntest', 'solltest'], ['er / sie / es', 'könnte', 'sollte'], ['wir', 'könnten', 'sollten'], ['ihr', 'könntet', 'solltet'], ['sie / Sie', 'könnten', 'sollten']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'könnten', role: 'verb' }, { text: 'montags', role: 'time' }, { text: 'joggen gehen.', role: 'verb' }], en: 'We could go jogging on Mondays.', fr: 'Nous pourrions courir le lundi.' },
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'solltest', role: 'verb' }, { text: 'mehr Wasser', role: 'accusative' }, { text: 'trinken.', role: 'verb' }], en: 'You should drink more water.', fr: 'Tu devrais boire plus d’eau.' },
      ],
      contrast: {
        a: { label: 'könnte = suggestion', labelFr: 'könnte = proposition', note: 'we could …', noteFr: 'nous pourrions …', examples: [g('Wir könnten am Samstag schwimmen gehen.', 'We could go swimming on Saturday.', 'Nous pourrions aller nager samedi.'), g('Du könntest im Verein anfangen.', 'You could start at the club.', 'Tu pourrais commencer au club.')] },
        b: { label: 'sollte = advice', labelFr: 'sollte = conseil', note: 'you should …', noteFr: 'tu devrais …', examples: [g('Du solltest regelmäßig trainieren.', 'You should work out regularly.', 'Tu devrais t’entraîner régulièrement.'), g('Ihr solltet früher ins Bett gehen.', 'You should go to bed earlier.', 'Vous devriez vous coucher plus tôt.')] },
      },
      examples: [
        g('Wir könnten am Samstag schwimmen gehen.', 'We could go swimming on Saturday.', 'Nous pourrions aller nager samedi.'),
        g('Du solltest regelmäßig trainieren.', 'You should work out regularly.', 'Tu devrais t’entraîner régulièrement.'),
        g('Ihr solltet früher ins Bett gehen.', 'You should go to bed earlier.', 'Vous devriez vous coucher plus tôt.'),
        g('Du könntest im Verein anfangen.', 'You could start at the club.', 'Tu pourrais commencer au club.'),
        g('Sie könnten mitkommen.', 'They could come along.', 'Ils pourraient venir avec nous.'),
        g('Er sollte weniger Kaffee trinken.', 'He should drink less coffee.', 'Il devrait boire moins de café.'),
      ],
      mistakes: [
        { wrong: 'Wir konnten joggen gehen. (suggestion)', right: 'Wir könnten joggen gehen.', why: 'konnte is the past, könnte is the suggestion.', whyFr: 'konnte est le passé, könnte est la proposition.' },
        { wrong: 'Du solltest trinken mehr Wasser.', right: 'Du solltest mehr Wasser trinken.', why: 'The infinitive goes to the end.', whyFr: 'L’infinitif va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l18-e1', prompt: 'Wir ___ montags joggen gehen. (können → suggestion, wir)', promptFr: 'Wir ___ montags joggen gehen. (können → proposition, wir)', answer: 'könnten', hint: 'könnte + -n for wir', hintFr: 'könnte + -n pour wir' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l18-e2', prompt: 'Which sentence is a suggestion?', promptFr: 'Quelle phrase est une proposition ?', options: ['Ich konnte gestern nicht kommen.', 'Wir könnten heute Abend schwimmen gehen.', 'Er kann sehr gut schwimmen.'], optionsFr: ['Ich konnte gestern nicht kommen.', 'Wir könnten heute Abend schwimmen gehen.', 'Er kann sehr gut schwimmen.'], answer: 1, explain: '"könnten" with the umlaut is the polite suggestion form; "konnte" is past.', explainFr: '« könnten » avec tréma est la forme de la proposition polie ; « konnte » est au passé.', hint: 'Look for the umlaut: könnte.', hintFr: 'Cherche le tréma : könnte.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l18-e6', prompt: 'Du ___ mehr Wasser trinken. (sollen → advice, du)', promptFr: 'Du ___ mehr Wasser trinken. (sollen → conseil, du)', answer: 'solltest', hint: 'sollte + -st for du', hintFr: 'sollte + -st pour du' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l18-e10', tokens: ['solltest', 'Du', 'trainieren', 'regelmäßig'], answer: ['Du', 'solltest', 'regelmäßig', 'trainieren'], hint: 'Subject, sollte-form, adverb, infinitive at the end.', hintFr: 'Sujet, forme de sollte, adverbe, infinitif à la fin.' } },

    // ───────────── 3 · Polite agreement and routine ─────────────
    { kind: 'chapter', title: 'Zustimmen, widersprechen, Routinen', titleFr: 'Approuver, contredire, routines', blurb: 'Wie wäre es mit …? — montags, abends.', blurbFr: 'Wie wäre es mit …? — montags, abends.' },

    { kind: 'situation', title: 'Das passt mir nicht', titleFr: 'Ça ne me convient pas',
      setting: 'Tim suggests Sunday, but Lara has other plans.', settingFr: 'Tim propose dimanche, mais Lara a d’autres projets.',
      lines: [
        line('Tim', 'Wir könnten sonntags joggen gehen.', 'We could go jogging on Sundays.', 'Nous pourrions courir le dimanche.'),
        line('Lara', 'Sonntags passt mir leider nicht. Wie wäre es mit samstags?', 'Sundays don’t suit me, unfortunately. How about Saturdays?', 'Le dimanche ne me convient malheureusement pas. Et le samedi ?'),
        line('Tim', 'Samstags geht bei mir. Vormittags arbeite ich, nachmittags habe ich frei.', 'Saturdays work for me. I work in the morning, I’m free in the afternoon.', 'Le samedi, ça marche pour moi. Le matin je travaille, l’après-midi je suis libre.'),
        line('Lara', 'Dann treffen wir uns zwischen 18 und 19 Uhr. Einverstanden?', 'Then we meet between 6 and 7 p.m. Agreed?', 'Alors retrouvons-nous entre 18 et 19 heures. D’accord ?'),
        line('Tim', 'Einverstanden! Dann bis Samstag.', 'Agreed! See you Saturday then.', 'D’accord ! À samedi alors.'),
      ],
      words: [{ id: 'a2l18-montags', german: 'montags', english: 'on Mondays (every Monday)', french: 'le lundi (chaque lundi)', gender: null, syllables: ['MON', 'tags'], pronunciation: 'MOHN-tahks', example: { de: 'Montags gehe ich schwimmen.', en: 'On Mondays I go swimming.', fr: 'Le lundi, je vais nager.' } }, { id: 'a2l18-vormittags', german: 'vormittags', english: 'in the morning (before noon)', french: 'le matin (avant midi)', gender: null, syllables: ['VOR', 'mit', 'tags'], pronunciation: 'FOR-mit-tahks', example: { de: 'Vormittags arbeite ich, nachmittags trainiere ich.', en: 'In the morning I work, in the afternoon I work out.', fr: 'Le matin je travaille, l’après-midi je m’entraîne.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l18-e15', prompt: 'Which day do Tim and Lara choose?', promptFr: 'Quel jour Tim et Lara choisissent-ils ?', options: ['Saturday', 'Sunday', 'Monday'], optionsFr: ['Samedi', 'Dimanche', 'Lundi'], answer: 0, explain: 'Sunday does not suit Lara; they agree on Saturdays (“Einverstanden! Dann bis Samstag.”).', explainFr: 'Le dimanche ne convient pas à Lara ; ils se mettent d’accord sur samedi (« Einverstanden ! Dann bis Samstag. »).', hint: 'Look at the last lines.', hintFr: 'Regarde les dernières répliques.' } },

    { kind: 'grammar', note: {
      id: 'a2l18-vorschlaege', title: 'Suggesting, agreeing, disagreeing politely', titleFr: 'Proposer, approuver, contredire poliment',
      lead: 'Suggest with “Wir könnten …” or “Wie wäre es mit …?”. Disagree with a reason or an alternative.',
      leadFr: 'Propose avec « Wir könnten … » ou « Wie wäre es mit …? ». Contredis avec une raison ou une alternative.',
      explanationMd: '**Suggesting:** **Wir könnten …** + infinitive, **Wie wäre es mit** + **dative** noun (**mit** always takes the dative: **mit einem Spaziergang**), or **An deiner Stelle würde ich …** (If I were you, I would …). **Agreeing:** **Gute Idee! · Einverstanden! · Das machen wir.** **Disagreeing politely:** never just “no” — give a **reason** or an **alternative**: **Das passt mir leider nicht. Wie wäre es mit Dienstag?**',
      explanationMdFr: '**Proposer :** **Wir könnten …** + infinitif, **Wie wäre es mit** + nom au **datif** (**mit** prend toujours le datif : **mit einem Spaziergang**), ou **An deiner Stelle würde ich …** (À ta place, je …). **Approuver :** **Gute Idee ! · Einverstanden ! · Das machen wir.** **Contredire poliment :** jamais un simple « non » — donne une **raison** ou une **alternative** : **Das passt mir leider nicht. Wie wäre es mit Dienstag ?**',
      tables: [{ title: 'Three steps of a polite talk', titleFr: 'Les trois temps d’un échange poli', headers: ['Step', 'German'], headersFr: ['Étape', 'Allemand'],
        rows: [['Suggest', 'Wir könnten … · Wie wäre es mit einem Spaziergang?'], ['Agree', 'Gute Idee! · Einverstanden! · Das machen wir.'], ['Disagree', 'Das passt mir leider nicht. Wie wäre es mit Dienstag?'], ['Prefer', 'Ich würde lieber schwimmen gehen.']],
        rowsFr: [['Proposer', 'Wir könnten … · Wie wäre es mit einem Spaziergang ?'], ['Approuver', 'Gute Idee ! · Einverstanden ! · Das machen wir.'], ['Contredire', 'Das passt mir leider nicht. Wie wäre es mit Dienstag ?'], ['Préférer', 'Ich würde lieber schwimmen gehen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wie wäre es', role: 'verb' }, { text: 'mit einem Kurs', role: 'dative' }, { text: 'im Fitnessstudio?', role: 'place' }], en: 'How about a class at the gym?', fr: 'Et si on prenait un cours à la salle de sport ?' },
        { parts: [{ text: 'An deiner Stelle', role: 'other' }, { text: 'würde', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'mehr', role: 'other' }, { text: 'schlafen.', role: 'verb' }], en: 'If I were you, I would sleep more.', fr: 'À ta place, je dormirais plus.' },
      ],
      contrast: {
        a: { label: 'Agree', labelFr: 'Approuver', note: 'short and warm', noteFr: 'court et chaleureux', examples: [g('Einverstanden! Dann bis Montag.', 'Agreed! See you Monday then.', 'D’accord ! À lundi alors.'), g('Gute Idee! Das machen wir.', 'Good idea! Let’s do that.', 'Bonne idée ! On fait ça.')] },
        b: { label: 'Disagree politely', labelFr: 'Contredire poliment', note: 'reason or alternative', noteFr: 'raison ou alternative', examples: [g('Sonntags passt mir leider nicht. Geht es auch samstags?', 'Sundays don’t suit me, unfortunately. Does Saturday work too?', 'Le dimanche ne me convient malheureusement pas. Le samedi, ça va aussi ?'), g('Das ist nicht so mein Ding, aber ich komme gern mit.', 'That is not really my thing, but I’ll gladly come along.', 'Ce n’est pas trop mon truc, mais je viens volontiers.')] },
      },
      examples: [
        g('Wie wäre es mit einem Kurs im Fitnessstudio?', 'How about a class at the gym?', 'Et si on prenait un cours à la salle de sport ?'),
        g('An deiner Stelle würde ich mehr schlafen.', 'If I were you, I would sleep more.', 'À ta place, je dormirais plus.'),
        g('Einverstanden! Dann bis Montag.', 'Agreed! See you Monday then.', 'D’accord ! À lundi alors.'),
        g('Sonntags passt mir leider nicht. Geht es auch samstags?', 'Sundays don’t suit me, unfortunately. Does Saturday work too?', 'Le dimanche ne me convient malheureusement pas. Le samedi, ça va aussi ?'),
        g('Hm, ich würde lieber schwimmen gehen.', 'Hm, I would rather go swimming.', 'Hm, j’irais plutôt nager.'),
        g('Das ist nicht so mein Ding, aber ich komme gern mit.', 'That is not really my thing, but I’ll gladly come along.', 'Ce n’est pas trop mon truc, mais je viens volontiers.'),
      ],
      mistakes: [
        { wrong: 'Wie wäre es mit ein Spaziergang?', right: 'Wie wäre es mit einem Spaziergang?', why: 'mit is always followed by the dative.', whyFr: 'mit est toujours suivi du datif.' },
        { wrong: 'Nein, das will ich nicht.', right: 'Das passt mir leider nicht. Wie wäre es mit Dienstag?', why: 'Give a reason or an alternative, not a flat no.', whyFr: 'Donne une raison ou une alternative, pas un non sec.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l18-e12', prompt: 'Wie wäre es ___ einem Spaziergang?', promptFr: 'Wie wäre es ___ einem Spaziergang ?', answer: 'mit', hint: 'This preposition takes the dative: "einem".', hintFr: 'Cette préposition prend le datif : « einem ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l18-e7', prompt: 'A friend says: "Wir könnten sonntags joggen gehen." You prefer another day. Which is the politest answer?', promptFr: 'Un ami dit : « Wir könnten sonntags joggen gehen. » Tu préfères un autre jour. Quelle réponse est la plus polie ?', options: ['Nein, das ist dumm.', 'Sonntags passt mir leider nicht. Wie wäre es mit samstags?', 'Ich gehe nie joggen!'], optionsFr: ['Non, c’est bête.', 'Le dimanche, ça ne me convient malheureusement pas. Et si on faisait samedi ?', 'Je ne fais jamais de jogging !'], answer: 1, explain: 'Give a reason and offer an alternative.', explainFr: 'Donne une raison et propose une alternative.', hint: 'Polite = reason + alternative.', hintFr: 'Poli = raison + alternative.' } },

    { kind: 'grammar', note: {
      id: 'a2l18-routinen', title: 'Routines: montags, morgens, abends', titleFr: 'Routines : montags, morgens, abends',
      lead: 'Add -s to a day or part of the day: it happens regularly. am Montag = one day, montags = every Monday.',
      leadFr: 'Ajoute -s à un jour ou à un moment de la journée : cela arrive régulièrement. am Montag = un jour, montags = chaque lundi.',
      explanationMd: 'Add **-s** to a day or a part of the day to say it happens **regularly**: **montags** (every Monday), **samstags** (every Saturday), **morgens, vormittags, mittags, nachmittags, abends, nachts**. Compare: **am Montag** = this **one** Monday; **montags** = **every** Monday. You can combine them: **montags abends**. For a time window use **zwischen** + dative: **zwischen 18 und 19 Uhr**.',
      explanationMdFr: 'Ajoute **-s** à un jour ou à un moment de la journée pour dire que cela arrive **régulièrement** : **montags** (chaque lundi), **samstags** (chaque samedi), **morgens, vormittags, mittags, nachmittags, abends, nachts**. Compare : **am Montag** = ce **seul** lundi ; **montags** = **chaque** lundi. Tu peux les combiner : **montags abends**. Pour une plage horaire, utilise **zwischen** + datif : **zwischen 18 und 19 Uhr**.',
      tables: [{ title: 'Regularly', titleFr: 'Régulièrement', headers: ['Word', 'Meaning', 'Example'], headersFr: ['Mot', 'Sens', 'Exemple'],
        rows: [['montags', 'every Monday', 'Montags gehe ich schwimmen.'], ['morgens', 'in the morning', 'Morgens jogge ich.'], ['vormittags', 'before noon', 'Vormittags arbeite ich.'], ['nachmittags', 'in the afternoon', 'Nachmittags trainiere ich.'], ['abends', 'in the evening', 'Abends koche ich.']],
        rowsFr: [['montags', 'chaque lundi', 'Montags gehe ich schwimmen.'], ['morgens', 'le matin', 'Morgens jogge ich.'], ['vormittags', 'avant midi', 'Vormittags arbeite ich.'], ['nachmittags', 'l’après-midi', 'Nachmittags trainiere ich.'], ['abends', 'le soir', 'Abends koche ich.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Dienstags und donnerstags', role: 'time' }, { text: 'gehe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'ins Fitnessstudio.', role: 'place' }], en: 'On Tuesdays and Thursdays I go to the gym.', fr: 'Le mardi et le jeudi, je vais à la salle de sport.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'treffen', role: 'verb' }, { text: 'uns', role: 'other' }, { text: 'zwischen 18 und 19 Uhr.', role: 'time' }], en: 'We meet between 6 and 7 p.m.', fr: 'Nous nous retrouvons entre 18 et 19 heures.' },
      ],
      contrast: {
        a: { label: 'am Montag', labelFr: 'am Montag', note: 'one single Monday', noteFr: 'un seul lundi', examples: [g('Am Montag habe ich einen Termin.', 'On Monday I have an appointment.', 'Lundi, j’ai un rendez-vous.'), g('Am Samstag gehen wir schwimmen.', 'On Saturday we go swimming.', 'Samedi, nous allons nager.')] },
        b: { label: 'montags', labelFr: 'montags', note: 'every Monday', noteFr: 'chaque lundi', examples: [g('Montags gehe ich schwimmen.', 'On Mondays I go swimming.', 'Le lundi, je vais nager.'), g('Morgens jogge ich, abends koche ich.', 'In the morning I jog, in the evening I cook.', 'Le matin je cours, le soir je cuisine.')] },
      },
      examples: [
        g('Dienstags und donnerstags gehe ich ins Fitnessstudio.', 'On Tuesdays and Thursdays I go to the gym.', 'Le mardi et le jeudi, je vais à la salle de sport.'),
        g('Morgens jogge ich, abends koche ich.', 'In the morning I jog, in the evening I cook.', 'Le matin je cours, le soir je cuisine.'),
        g('Wir treffen uns zwischen 18 und 19 Uhr.', 'We meet between 6 and 7 p.m.', 'Nous nous retrouvons entre 18 et 19 heures.'),
        g('Vormittags arbeite ich, nachmittags trainiere ich.', 'I work before noon and train in the afternoon.', 'Je travaille avant midi et je m’entraîne l’après-midi.'),
        g('Montags abends gehe ich schwimmen.', 'On Monday evenings I go swimming.', 'Le lundi soir, je vais nager.'),
        g('Samstags schlafe ich lange.', 'On Saturdays I sleep in.', 'Le samedi, je dors longtemps.'),
      ],
      mistakes: [
        { wrong: 'Ich gehe am Montag schwimmen. (every week)', right: 'Ich gehe montags schwimmen.', why: 'For a habit, use the -s form.', whyFr: 'Pour une habitude, utilise la forme en -s.' },
        { wrong: 'Montags ich gehe schwimmen.', right: 'Montags gehe ich schwimmen.', why: 'The verb stays in position 2.', whyFr: 'Le verbe reste en position 2.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l18-e3', tokens: ['abends', 'Wir', 'schwimmen', 'könnten', 'gehen'], answer: ['Wir', 'könnten', 'abends', 'schwimmen', 'gehen'], hint: 'The modal verb is in position 2, the infinitive at the end.', hintFr: 'Le verbe modal est en position 2, l’infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l18-e4', pairs: [{ de: 'montags', en: 'every Monday', fr: 'chaque lundi' }, { de: 'morgens', en: 'in the morning', fr: 'le matin' }, { de: 'abends', en: 'in the evening', fr: 'le soir' }, { de: 'nachmittags', en: 'in the afternoon', fr: 'l’après-midi' }], hint: 'Adverbs with -s describe regular routines.', hintFr: 'Les adverbes en -s décrivent des habitudes régulières.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l18-e5', prompt: 'Listen. When do they go jogging?', promptFr: 'Écoute. Quand vont-ils courir ?', audio: { ttsText: 'Wir könnten montags und donnerstags abends joggen gehen.' }, options: ['Mondays and Thursdays in the evening', 'Mondays and Tuesdays in the morning', 'Every day at noon'], optionsFr: ['Le lundi et le jeudi soir', 'Le lundi et le mardi matin', 'Tous les jours à midi'], answer: 0, hint: 'Listen for the two days and "abends".', hintFr: 'Écoute les deux jours et « abends ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l18-e11', prompt: 'Listen. What does the trainer advise?', promptFr: 'Écoute. Que conseille l’entraîneur ?', audio: { ttsText: 'Du solltest weniger Kaffee und mehr Wasser trinken.' }, options: ['Drink less coffee and more water', 'Drink more coffee', 'Sleep longer in the morning'], optionsFr: ['Boire moins de café et plus d’eau', 'Boire plus de café', 'Dormir plus longtemps le matin'], answer: 0, hint: 'Listen to "weniger" and "mehr".', hintFr: 'Écoute « weniger » et « mehr ».' } },

    { kind: 'pronunciation', focus: 'The umlaut in könnte makes a rounded ö; "sollte" has a short o; -ch after i is soft (regelmäßig)', focusFr: 'Le tréma de könnte donne un ö arrondi ; « sollte » a un o bref ; -ch après i est doux (regelmäßig)', items: [{ id: 'a2l18-koennte-pron', german: 'könnte', english: 'could (suggestion)', french: 'pourrait (proposition)', gender: null, syllables: ['KÖNN', 'te'], pronunciation: 'KOEN-teh', example: { de: 'Wir könnten joggen gehen.', en: 'We could go jogging.', fr: 'Nous pourrions aller courir.' } }, { id: 'a2l18-koennten-pron', german: 'könnten', english: 'could (wir / sie)', french: 'pourrions / pourraient', gender: null, syllables: ['KÖNN', 'ten'], pronunciation: 'KOEN-ten', example: { de: 'Sie könnten mitkommen.', en: 'They could come along.', fr: 'Ils pourraient venir avec nous.' } }, { id: 'a2l18-sollte-pron', german: 'sollte', english: 'should', french: 'devrait', gender: null, syllables: ['SOLL', 'te'], pronunciation: 'ZOL-teh', example: { de: 'Du solltest mehr schlafen.', en: 'You should sleep more.', fr: 'Tu devrais dormir plus.' } }, { id: 'a2l18-montags-pron', german: 'montags', english: 'on Mondays', french: 'le lundi', gender: null, syllables: ['MON', 'tags'], pronunciation: 'MOHN-tahks', example: { de: 'Montags trainiere ich.', en: 'On Mondays I work out.', fr: 'Le lundi, je m’entraîne.' } }, { id: 'a2l18-regelmaessig-pron', german: 'regelmäßig', english: 'regularly', french: 'régulièrement', gender: null, syllables: ['RE', 'gel', 'mä', 'ßig'], pronunciation: 'RAY-gel-may-sikh', example: { de: 'Er isst regelmäßig Obst.', en: 'He eats fruit regularly.', fr: 'Il mange régulièrement des fruits.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **suggest** (könnte), **advise** (sollte), **agree and disagree politely** and say **when** you do things regularly (montags, abends). 🎉',
      summaryFr: 'Tu sais maintenant **proposer** (könnte), **conseiller** (sollte), **approuver et contredire poliment** et dire **quand** tu fais les choses régulièrement (montags, abends). 🎉',
      card: { title: 'Suggestions on one page', titleFr: 'Les propositions en une page', sections: [
        { heading: 'könnte / sollte', headingFr: 'könnte / sollte', rows: [g('Wir könnten … + infinitive', 'suggestion', 'proposition'), g('Du solltest … + infinitive', 'advice', 'conseil'), g('könnte ≠ konnte', 'umlaut!', 'tréma !')] },
        { heading: 'Polite talk', headingFr: 'Échange poli', rows: [g('Wie wäre es mit + dative?', 'How about …?', 'Et si …?'), g('Einverstanden! · Gute Idee!', 'agree', 'approuver'), g('Das passt mir leider nicht.', 'disagree + alternative', 'contredire + alternative')] },
        { heading: 'Routines', headingFr: 'Routines', rows: [g('montags · abends', 'every Monday · every evening', 'chaque lundi · chaque soir'), g('zwischen 18 und 19 Uhr', 'between … and …', 'entre … et …')] },
      ] } },
  ],
};
