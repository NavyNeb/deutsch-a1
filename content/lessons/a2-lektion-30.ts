import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A2 lesson: a check of the A2 level (reading, listening, grammar overview, writing) before B1.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const a2lektion30: Lesson = {
  id: 'a2-l30', level: 'A2', module: 7, number: 30,
  title: { de: 'A2 geschafft: Prüfungstraining', en: 'A2 done: exam training', fr: 'A2 terminé : entraînement à l’examen' },
  theme: 'A2 check: reading a mail, listening, the A2 grammar map and a short writing task',
  themeFr: 'Contrôle A2 : lire un e-mail, écouter, la carte de la grammaire A2 et un court exercice d’écriture',
  goals: ['Read and understand an everyday e-mail', 'Review the A2 grammar in one map', 'Write a short answer in correct German'],
  goalsFr: ['Lire et comprendre un e-mail du quotidien', 'Réviser la grammaire A2 en une carte', 'Écrire une courte réponse en allemand correct'],
  canDo: g('Ich kann einen Alltags-E-Mail verstehen, die wichtigste A2-Grammatik anwenden und eine kurze Antwort schreiben.', 'I can understand an everyday e-mail, apply the key A2 grammar and write a short reply.', 'Je sais comprendre un e-mail du quotidien, appliquer la grammaire A2 essentielle et écrire une courte réponse.'),
  steps: [
    { kind: 'intro', title: 'A2 geschafft! 🎓', titleFr: 'A2 terminé ! 🎓',
      scene: 'Lara has finished A2. A friend sends her an e-mail — and she answers it using everything she has learned.', sceneFr: 'Lara a terminé A2. Une amie lui envoie un e-mail — et elle répond en utilisant tout ce qu’elle a appris.',
      goals: ['Read an e-mail', 'The A2 grammar map', 'Write a short reply'],
      goalsFr: ['Lire un e-mail', 'La carte de la grammaire A2', 'Écrire une courte réponse'] },

    // ───────────── 1 · Reading ─────────────
    { kind: 'chapter', title: 'Lesen: Eine E-Mail von Sara', titleFr: 'Lecture : un e-mail de Sara', blurb: 'Who, what, when?', blurbFr: 'Qui, quoi, quand ?' },

    { kind: 'situation', title: 'Saras E-Mail', titleFr: 'L’e-mail de Sara',
      setting: 'Lara reads a long e-mail from her friend Sara in Vienna.', settingFr: 'Lara lit un long e-mail de son amie Sara à Vienne.',
      lines: [
        line('Sara', 'Liebe Lara, ich habe dir lange nicht geschrieben, weil ich viel gearbeitet habe. Entschuldige!', 'Dear Lara, I haven’t written to you for a long time because I worked a lot. Sorry!', 'Chère Lara, je ne t’ai pas écrit depuis longtemps parce que j’ai beaucoup travaillé. Excuse-moi !'),
        line('Sara', 'Seit ich in Wien wohne, habe ich neue Freunde gefunden. Letzten Monat bin ich in eine größere Wohnung umgezogen, die näher am Zentrum liegt.', 'Since I’ve lived in Vienna I’ve made new friends. Last month I moved to a bigger flat that is closer to the centre.', 'Depuis que j’habite à Vienne, j’ai trouvé de nouveaux amis. Le mois dernier, j’ai déménagé dans un appartement plus grand, plus proche du centre.'),
        line('Sara', 'Nächstes Jahr werde ich eine Ausbildung machen, um Krankenschwester zu werden. Ich freue mich schon darauf!', 'Next year I will start training to become a nurse. I’m already looking forward to it!', 'L’an prochain, je ferai une formation pour devenir infirmière. Je m’en réjouis déjà !'),
        line('Sara', 'Hast du Lust, mich im Mai zu besuchen? Wir könnten zusammen die Stadt besichtigen, obwohl es dann vielleicht regnet.', 'Would you like to visit me in May? We could see the city together, although it might rain then.', 'As-tu envie de me rendre visite en mai ? Nous pourrions visiter la ville ensemble, même s’il pleut peut-être alors.'),
        line('Sara', 'Schreib mir bitte bald! Liebe Grüße, deine Sara', 'Please write back soon! Love, your Sara', 'Écris-moi vite, s’il te plaît ! Amitiés, ta Sara'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l30-e1', prompt: 'Why is Sara writing to Lara?', promptFr: 'Pourquoi Sara écrit-elle à Lara ?', options: ['To invite her to visit in May', 'To sell her a flat', 'To ask for money'], optionsFr: ['Pour l’inviter à lui rendre visite en mai', 'Pour lui vendre un appartement', 'Pour lui demander de l’argent'], answer: 0, explain: 'Sara asks: “Hast du Lust, mich im Mai zu besuchen?”', explainFr: 'Sara demande : « Hast du Lust, mich im Mai zu besuchen ? »', hint: 'Look at the second-to-last paragraph.', hintFr: 'Regarde l’avant-dernier paragraphe.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l30-e2', prompt: 'What will Sara do next year?', promptFr: 'Que fera Sara l’an prochain ?', options: ['A training to become a nurse', 'Move to Berlin', 'Study law'], optionsFr: ['Une formation pour devenir infirmière', 'Déménager à Berlin', 'Faire du droit'], answer: 0, explain: 'She writes: “Nächstes Jahr werde ich eine Ausbildung machen.”', explainFr: 'Elle écrit : « Nächstes Jahr werde ich eine Ausbildung machen. »', hint: 'Look for “werde”.', hintFr: 'Cherche « werde ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l30-e3', prompt: 'Listen. Where is the new flat?', promptFr: 'Écoute. Où est le nouvel appartement ?', audio: { ttsText: 'Letzten Monat bin ich in eine größere Wohnung umgezogen, die näher am Zentrum liegt.' }, options: ['Closer to the centre', 'Far from the centre', 'In the old town'], optionsFr: ['Plus près du centre', 'Loin du centre', 'Dans la vieille ville'], answer: 0, hint: 'näher am Zentrum', hintFr: 'näher am Zentrum' } },

    { kind: 'wordgroup', title: 'Prüfungswörter', titleFr: 'Mots d’examen',
      items: [
        word('a2l30-nachricht', 'die Antwort', 'die', 'the answer / reply', 'la réponse', ['ANT', 'wort'], 'ANT-vort', g('Ich schreibe eine Antwort.', 'I am writing a reply.', 'J’écris une réponse.')),
        word('a2l30-pruefung', 'die Prüfung', 'die', 'the exam', 'l’examen', ['PRÜ', 'fung'], 'PRUE-foong', g('Die Prüfung ist im Juni.', 'The exam is in June.', 'L’examen a lieu en juin.')),
        word('a2l30-bestehen', 'bestehen', null, 'to pass (an exam)', 'réussir (un examen)', ['be', 'STE', 'hen'], 'buh-SHTAY-en', g('Ich möchte die Prüfung bestehen.', 'I want to pass the exam.', 'Je veux réussir l’examen.')),
        word('a2l30-wiederholen', 'wiederholen', null, 'to revise / repeat', 'réviser / répéter', ['wie', 'der', 'HO', 'len'], 'vee-der-HOH-len', g('Wir wiederholen die Grammatik.', 'We revise the grammar.', 'Nous révisons la grammaire.')),
        word('a2l30-uebung', 'die Übung', 'die', 'the exercise', 'l’exercice', ['Ü', 'bung'], 'UE-boong', g('Die Übung ist nicht schwer.', 'The exercise is not hard.', 'L’exercice n’est pas difficile.')),
        word('a2l30-wortschatz', 'der Wortschatz', 'der', 'the vocabulary', 'le vocabulaire', ['WORT', 'schatz'], 'VORT-shats', g('Mein Wortschatz wird größer.', 'My vocabulary is growing.', 'Mon vocabulaire s’enrichit.')),
      ] },

    // ───────────── 2 · Grammar map ─────────────
    { kind: 'chapter', title: 'Die A2-Grammatik auf einen Blick', titleFr: 'La grammaire A2 d’un coup d’œil', blurb: 'Cases, clauses, tenses.', blurbFr: 'Cas, propositions, temps.' },

    { kind: 'situation', title: 'Alles zusammen', titleFr: 'Tout ensemble',
      setting: 'Lara checks her notes before she writes back.', settingFr: 'Lara relit ses notes avant de répondre.',
      lines: [
        line('Lara', 'Ich weiß, dass ich viel gelernt habe. Obwohl es schwer war, habe ich nicht aufgegeben.', 'I know that I have learned a lot. Although it was hard, I did not give up.', 'Je sais que j’ai beaucoup appris. Bien que ce fût difficile, je n’ai pas abandonné.'),
        line('Lara', 'Wenn ich Zeit habe, wiederhole ich die Grammatik. Ich lerne, um die Prüfung zu bestehen.', 'When I have time, I revise the grammar. I study to pass the exam.', 'Quand j’ai du temps, je révise la grammaire. J’étudie pour réussir l’examen.'),
        line('Lara', 'Meine Freundin, die in Wien wohnt, hat mir geschrieben. Ich freue mich darauf, sie zu besuchen.', 'My friend who lives in Vienna wrote to me. I’m looking forward to visiting her.', 'Mon amie qui habite à Vienne m’a écrit. Je me réjouis de lui rendre visite.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l30-grammatik', title: 'The A2 grammar map', titleFr: 'La carte de la grammaire A2',
      lead: 'Four boxes to remember: cases, subordinate clauses, tenses, polite forms.',
      leadFr: 'Quatre boîtes à retenir : les cas, les subordonnées, les temps, les formes polies.',
      explanationMd: '**Cases:** after **mit, bei, von, zu, aus, nach, seit** → **dative**; **für, ohne, durch** → **accusative**; **wegen, trotz, während** → **genitive**; **in, an, auf, vor, hinter, neben, unter, über, zwischen** → **dative (Wo?)** or **accusative (Wohin?)**. **Subordinate clauses** (**weil, dass, wenn, als, ob, obwohl, bis, seit, damit**) send the **verb to the end**; **um … zu** + infinitive. **Tenses:** **Perfekt** for most verbs in speech, **Präteritum** for **sein, haben, modals** (and for stories), **werden + infinitive** or **present + time word** for the future. **Polite forms:** **Könnten Sie …?**, **Ich möchte wissen, ob …**, **Sehr geehrte …** — and the **Sie-imperative**.',
      explanationMdFr: '**Cas :** après **mit, bei, von, zu, aus, nach, seit** → **datif** ; **für, ohne, durch** → **accusatif** ; **wegen, trotz, während** → **génitif** ; **in, an, auf, vor, hinter, neben, unter, über, zwischen** → **datif (Wo ?)** ou **accusatif (Wohin ?)**. **Subordonnées** (**weil, dass, wenn, als, ob, obwohl, bis, seit, damit**) : **verbe à la fin** ; **um … zu** + infinitif. **Temps :** **Perfekt** pour la plupart des verbes à l’oral, **Präteritum** pour **sein, haben, modaux** (et dans les récits), **werden + infinitif** ou **présent + mot de temps** pour le futur. **Formes polies :** **Könnten Sie …?**, **Ich möchte wissen, ob …**, **Sehr geehrte …** — et l’**impératif en Sie**.',
      tables: [
        { title: 'Cases', titleFr: 'Les cas', headers: ['Case', 'Triggers', 'Example'], headersFr: ['Cas', 'Déclencheurs', 'Exemple'],
          rows: [['Dative', 'mit, bei, von, zu, aus, nach, seit', 'mit meinem Bruder'], ['Accusative', 'für, ohne, durch', 'für meine Mutter'], ['Genitive', 'wegen, trotz, während', 'wegen des Wetters'], ['Dative / Accusative', 'in, an, auf …', 'im Kino · ins Kino']],
          rowsFr: [['Datif', 'mit, bei, von, zu, aus, nach, seit', 'mit meinem Bruder'], ['Accusatif', 'für, ohne, durch', 'für meine Mutter'], ['Génitif', 'wegen, trotz, während', 'wegen des Wetters'], ['Datif / Accusatif', 'in, an, auf …', 'im Kino · ins Kino']], highlightCol: 1 },
        { title: 'Subordinate clauses (verb last)', titleFr: 'Subordonnées (verbe à la fin)', headers: ['Word', 'Meaning', 'Example'], headersFr: ['Mot', 'Sens', 'Exemple'],
          rows: [['weil', 'because', '…, weil ich müde bin.'], ['dass', 'that', 'Ich weiß, dass er kommt.'], ['wenn / als', 'when', 'Wenn ich Zeit habe … · Als ich zehn war …'], ['ob', 'whether', 'Ich weiß nicht, ob er kommt.'], ['obwohl', 'although', 'Obwohl es regnet, …'], ['um … zu', 'in order to', '…, um Deutsch zu lernen.']],
          rowsFr: [['weil', 'parce que', '…, weil ich müde bin.'], ['dass', 'que', 'Ich weiß, dass er kommt.'], ['wenn / als', 'quand', 'Wenn ich Zeit habe … · Als ich zehn war …'], ['ob', 'si', 'Ich weiß nicht, ob er kommt.'], ['obwohl', 'bien que', 'Obwohl es regnet, …'], ['um … zu', 'pour', '…, um Deutsch zu lernen.']], highlightCol: 0 },
      ],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'weiß,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'viel', role: 'other' }, { text: 'gelernt habe.', role: 'verb' }], en: 'I know that I have learned a lot.', fr: 'Je sais que j’ai beaucoup appris.' },
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'Zeit', role: 'accusative' }, { text: 'habe,', role: 'verb' }, { text: 'wiederhole', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'die Grammatik.', role: 'accusative' }], en: 'When I have time I revise the grammar.', fr: 'Quand j’ai du temps, je révise la grammaire.' },
      ],
      contrast: {
        a: { label: 'Verb in position 2', labelFr: 'Verbe en position 2', note: 'main clause', noteFr: 'principale', examples: [g('Ich habe viel gelernt.', 'I have learned a lot.', 'J’ai beaucoup appris.'), g('Deshalb bin ich stolz.', 'That is why I am proud.', 'C’est pourquoi je suis fière.')] },
        b: { label: 'Verb at the end', labelFr: 'Verbe à la fin', note: 'subordinate clause', noteFr: 'subordonnée', examples: [g('Ich bin stolz, weil ich viel gelernt habe.', 'I am proud because I have learned a lot.', 'Je suis fière parce que j’ai beaucoup appris.'), g('Ich lerne, um die Prüfung zu bestehen.', 'I study to pass the exam.', 'J’étudie pour réussir l’examen.')] },
      },
      examples: [
        g('Ich weiß, dass ich viel gelernt habe.', 'I know that I have learned a lot.', 'Je sais que j’ai beaucoup appris.'),
        g('Obwohl es schwer war, habe ich nicht aufgegeben.', 'Although it was hard, I did not give up.', 'Bien que ce fût difficile, je n’ai pas abandonné.'),
        g('Wenn ich Zeit habe, wiederhole ich die Grammatik.', 'When I have time, I revise the grammar.', 'Quand j’ai du temps, je révise la grammaire.'),
        g('Ich lerne, um die Prüfung zu bestehen.', 'I study to pass the exam.', 'J’étudie pour réussir l’examen.'),
        g('Meine Freundin, die in Wien wohnt, hat mir geschrieben.', 'My friend who lives in Vienna wrote to me.', 'Mon amie qui habite à Vienne m’a écrit.'),
        g('Ich freue mich darauf, sie zu besuchen.', 'I am looking forward to visiting her.', 'Je me réjouis de lui rendre visite.'),
      ],
      mistakes: [
        { wrong: 'Ich weiß, dass ich habe viel gelernt.', right: 'Ich weiß, dass ich viel gelernt habe.', why: 'Subordinate clause: verb (auxiliary) last.', whyFr: 'Subordonnée : verbe (auxiliaire) en dernier.' },
        { wrong: 'Ich lerne, um ich die Prüfung bestehe.', right: 'Ich lerne, um die Prüfung zu bestehen.', why: 'um … zu: zu + infinitive, no new subject.', whyFr: 'um … zu : zu + infinitif, sans nouveau sujet.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l30-e4', prompt: 'Ich lerne, ___ die Prüfung zu bestehen.', promptFr: 'Ich lerne, ___ die Prüfung zu bestehen.', answer: 'um', hint: 'um … zu', hintFr: 'um … zu' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l30-e5', prompt: 'Ich wohne seit ___ Jahr in Wien. (dative, n.)', promptFr: 'Ich wohne seit ___ Jahr in Wien. (datif, n.)', answer: 'einem', hint: 'seit + dative: einem', hintFr: 'seit + datif : einem' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l30-e6', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Ich weiß, dass er morgen kommt.', 'Ich weiß, dass kommt er morgen.', 'Ich weiß, dass er kommt morgen.'], optionsFr: ['Ich weiß, dass er morgen kommt.', 'Ich weiß, dass kommt er morgen.', 'Ich weiß, dass er kommt morgen.'], answer: 0, explain: 'After dass the verb goes last.', explainFr: 'Après dass, le verbe va en dernier.', hint: 'verb last', hintFr: 'verbe à la fin' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l30-e7', prompt: 'Das ist die App, ___ ich jeden Tag benutze.', promptFr: 'Das ist die App, ___ ich jeden Tag benutze.', options: ['die', 'der', 'den'], optionsFr: ['die', 'der', 'den'], answer: 0, explain: 'die App → die (feminine, the object).', explainFr: 'die App → die (féminin, objet).', hint: 'feminine → die', hintFr: 'féminin → die' } },

    // ───────────── 3 · Writing ─────────────
    { kind: 'chapter', title: 'Schreiben: Antwort an Sara', titleFr: 'Écrire : réponse à Sara', blurb: 'Thank, answer, suggest, close.', blurbFr: 'Remercier, répondre, proposer, terminer.' },

    { kind: 'situation', title: 'Laras Antwort', titleFr: 'La réponse de Lara',
      setting: 'Lara writes back to Sara.', settingFr: 'Lara répond à Sara.',
      lines: [
        line('Lara', 'Liebe Sara, vielen Dank für deine Nachricht! Entschuldige, dass ich so spät antworte.', 'Dear Sara, thank you for your message! Sorry that I’m replying so late.', 'Chère Sara, merci pour ton message ! Excuse-moi de répondre si tard.'),
        line('Lara', 'Ich freue mich, dass du eine größere Wohnung gefunden hast. Im Mai habe ich frei, deshalb komme ich gern nach Wien.', 'I’m glad that you found a bigger flat. I’m free in May, so I’d love to come to Vienna.', 'Je suis contente que tu aies trouvé un appartement plus grand. En mai, je suis libre, c’est pourquoi je viens volontiers à Vienne.'),
        line('Lara', 'Wir könnten auch ins Konzert gehen. Schreib mir bitte, wann es dir passt. Liebe Grüße, deine Lara', 'We could also go to a concert. Please tell me when it suits you. Love, your Lara', 'Nous pourrions aussi aller à un concert. Dis-moi quand cela te convient. Amitiés, ta Lara'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l30-e8', prompt: 'When does Lara want to visit?', promptFr: 'Quand Lara veut-elle rendre visite ?', options: ['In May', 'In June', 'Next year'], optionsFr: ['En mai', 'En juin', 'L’an prochain'], answer: 0, explain: 'She writes: “Im Mai habe ich frei.”', explainFr: 'Elle écrit : « Im Mai habe ich frei. »', hint: 'Look for “Mai”.', hintFr: 'Cherche « Mai ».' } },

    { kind: 'grammar', note: {
      id: 'a2l30-schreiben', title: 'A short reply: the five-sentence plan', titleFr: 'Une courte réponse : le plan en cinq phrases',
      lead: 'Thank, react, answer, suggest, close. Use weil / dass / deshalb and Könnten …',
      leadFr: 'Remercier, réagir, répondre, proposer, conclure. Utilise weil / dass / deshalb et Könnten …',
      explanationMd: 'In the **A2 writing exam** (about 30–40 words per point) follow this **five-sentence plan**: **1 · thank** (**Vielen Dank für …**), **2 · react** (**Ich freue mich, dass …**), **3 · answer the question** (**Im Mai habe ich frei, deshalb …**), **4 · suggest** (**Wir könnten …**), **5 · close** (**Liebe Grüße**). Check **three things**: the **verb is in position 2** in main clauses, the **verb is last** after **weil / dass / ob**, and the **ending of the article** matches the case.',
      explanationMdFr: 'À l’**examen d’écriture A2** (environ 30–40 mots par point), suis ce **plan en cinq phrases** : **1 · remercier** (**Vielen Dank für …**), **2 · réagir** (**Ich freue mich, dass …**), **3 · répondre à la question** (**Im Mai habe ich frei, deshalb …**), **4 · proposer** (**Wir könnten …**), **5 · conclure** (**Liebe Grüße**). Vérifie **trois choses** : le **verbe est en position 2** dans les principales, le **verbe est en dernier** après **weil / dass / ob**, et la **terminaison de l’article** correspond au cas.',
      tables: [{ title: 'Five sentences', titleFr: 'Cinq phrases', headers: ['Step', 'German'], headersFr: ['Étape', 'Allemand'],
        rows: [['1 · Thank', 'Vielen Dank für deine Nachricht!'], ['2 · React', 'Ich freue mich, dass du eine neue Wohnung hast.'], ['3 · Answer', 'Im Mai habe ich frei, deshalb komme ich gern.'], ['4 · Suggest', 'Wir könnten ins Konzert gehen.'], ['5 · Close', 'Liebe Grüße, deine Lara']],
        rowsFr: [['1 · Remercier', 'Vielen Dank für deine Nachricht !'], ['2 · Réagir', 'Ich freue mich, dass du eine neue Wohnung hast.'], ['3 · Répondre', 'Im Mai habe ich frei, deshalb komme ich gern.'], ['4 · Proposer', 'Wir könnten ins Konzert gehen.'], ['5 · Conclure', 'Liebe Grüße, deine Lara']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'freue', role: 'verb' }, { text: 'mich,', role: 'accusative' }, { text: 'dass', role: 'connector' }, { text: 'du', role: 'subject' }, { text: 'eine neue Wohnung', role: 'accusative' }, { text: 'hast.', role: 'verb' }], en: 'I’m glad that you have a new flat.', fr: 'Je suis contente que tu aies un nouvel appartement.' },
        { parts: [{ text: 'Im Mai', role: 'time' }, { text: 'habe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'frei,', role: 'other' }, { text: 'deshalb', role: 'connector' }, { text: 'komme', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'gern.', role: 'other' }], en: 'I’m free in May, so I’ll gladly come.', fr: 'En mai, je suis libre, c’est pourquoi je viens volontiers.' },
      ],
      contrast: {
        a: { label: 'Too short', labelFr: 'Trop court', note: 'no reason, no offer', noteFr: 'sans raison, sans proposition', examples: [g('Danke. Ich komme.', 'Thanks. I’ll come.', 'Merci. Je viens.'), g('Ja, Mai ist gut.', 'Yes, May is fine.', 'Oui, mai me convient.')] },
        b: { label: 'Complete', labelFr: 'Complet', note: 'thank, answer, suggest', noteFr: 'remercier, répondre, proposer', examples: [g('Vielen Dank! Im Mai habe ich frei, deshalb komme ich gern nach Wien.', 'Thank you! I’m free in May, so I’d love to come to Vienna.', 'Merci ! En mai, je suis libre, c’est pourquoi je viens volontiers à Vienne.'), g('Wir könnten ins Konzert gehen.', 'We could go to a concert.', 'Nous pourrions aller à un concert.')] },
      },
      examples: [
        g('Vielen Dank für deine Nachricht!', 'Thank you very much for your message!', 'Merci beaucoup pour ton message !'),
        g('Ich freue mich, dass du eine größere Wohnung gefunden hast.', 'I’m glad that you found a bigger flat.', 'Je suis contente que tu aies trouvé un appartement plus grand.'),
        g('Im Mai habe ich frei, deshalb komme ich gern nach Wien.', 'I’m free in May, so I’d love to come to Vienna.', 'En mai, je suis libre, c’est pourquoi je viens volontiers à Vienne.'),
        g('Wir könnten auch ins Konzert gehen.', 'We could also go to a concert.', 'Nous pourrions aussi aller à un concert.'),
        g('Schreib mir bitte, wann es dir passt.', 'Please tell me when it suits you.', 'Dis-moi quand cela te convient.'),
        g('Liebe Grüße, deine Lara', 'Love, your Lara', 'Amitiés, ta Lara'),
      ],
      mistakes: [
        { wrong: 'Ich freue mich, dass du hast eine Wohnung.', right: 'Ich freue mich, dass du eine Wohnung hast.', why: 'After dass the verb goes last.', whyFr: 'Après dass, le verbe va en dernier.' },
        { wrong: 'Im Mai ich habe frei.', right: 'Im Mai habe ich frei.', why: 'After a time phrase the verb is second.', whyFr: 'Après une indication de temps, le verbe est en deuxième.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l30-e9', prompt: 'Ich freue mich, ___ du eine neue Wohnung hast.', promptFr: 'Ich freue mich, ___ du eine neue Wohnung hast.', answer: 'dass', hint: 'that', hintFr: 'que' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l30-e10', tokens: ['Wir', 'ins', 'gehen', 'könnten', 'Konzert'], answer: ['Wir', 'könnten', 'ins', 'Konzert', 'gehen'], hint: 'könnten second, gehen last.', hintFr: 'könnten en deuxième, gehen à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l30-e11', prompt: 'Listen. Why does she study?', promptFr: 'Écoute. Pourquoi étudie-t-elle ?', audio: { ttsText: 'Ich lerne Deutsch, um die Prüfung zu bestehen.' }, options: ['To pass the exam', 'To find a flat', 'To meet friends'], optionsFr: ['Pour réussir l’examen', 'Pour trouver un appartement', 'Pour rencontrer des amis'], answer: 0, hint: 'um … zu', hintFr: 'um … zu' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l30-e12', prompt: 'Listen. What does she suggest?', promptFr: 'Écoute. Que propose-t-elle ?', audio: { ttsText: 'Wir könnten zusammen die Stadt besichtigen, obwohl es vielleicht regnet.' }, options: ['Visiting the city together', 'Staying at home', 'Cooking together'], optionsFr: ['Visiter la ville ensemble', 'Rester à la maison', 'Cuisiner ensemble'], answer: 0, hint: 'Wir könnten …', hintFr: 'Wir könnten …' } },

    { kind: 'pronunciation', focus: 'Long ü in Prüfung and Übung, and the sch in Wortschatz', focusFr: 'ü long dans Prüfung et Übung, et le sch dans Wortschatz',
      items: [
        word('a2l30-pruefung-pron', 'Prüfung', null, 'exam', 'examen', ['PRÜ', 'fung'], 'PRUE-foong', g('Die Prüfung ist bald.', 'The exam is soon.', 'L’examen est bientôt.')),
        word('a2l30-uebung-pron', 'Übung', null, 'exercise', 'exercice', ['Ü', 'bung'], 'UE-boong', g('Übung macht den Meister.', 'Practice makes perfect.', 'C’est en forgeant qu’on devient forgeron.')),
        word('a2l30-wortschatz-pron', 'Wortschatz', null, 'vocabulary', 'vocabulaire', ['WORT', 'schatz'], 'VORT-shats', g('Ich lerne neuen Wortschatz.', 'I am learning new vocabulary.', 'J’apprends du nouveau vocabulaire.')),
        word('a2l30-wiederholen-pron', 'wiederholen', null, 'to revise', 'réviser', ['wie', 'der', 'HO', 'len'], 'vee-der-HOH-len', g('Ich wiederhole jeden Tag.', 'I revise every day.', 'Je révise tous les jours.')),
      ] },

    { kind: 'wrapup',
      summary: 'You have reached the **end of A2**: you can read an e-mail, use cases and subordinate clauses, talk about past and future, and write a **five-sentence reply**. On to B1! 🎓',
      summaryFr: 'Tu as atteint la **fin de A2** : tu sais lire un e-mail, utiliser les cas et les subordonnées, parler du passé et du futur, et écrire une **réponse en cinq phrases**. En route vers B1 ! 🎓',
      card: { title: 'A2 on one page', titleFr: 'A2 en une page', sections: [
        { heading: 'Cases', headingFr: 'Cas', rows: [g('mit · bei · von · zu → dative', 'für · ohne → accusative', 'mit · bei · von · zu → datif'), g('wegen · trotz · während → genitive', 'in · an · auf → Wo? / Wohin?', 'wegen · trotz · während → génitif')] },
        { heading: 'Clauses', headingFr: 'Subordonnées', rows: [g('weil · dass · wenn · als · ob · obwohl · bis · seit', 'verb at the end', 'verbe à la fin'), g('um … zu · relative clauses', 'comma + verb last', 'virgule + verbe en dernier')] },
        { heading: 'Tenses and polite forms', headingFr: 'Temps et formes polies', rows: [g('Perfekt · Präteritum · werden', 'past and future', 'passé et futur'), g('Könnten Sie …? · Sehr geehrte …', 'polite', 'poli')] },
      ] } },
  ],
};
