import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion14: Lesson = {
  id: 'b1-l14', level: 'B1', module: 1, number: 3,
  title: { de: 'Lebenslauf und Präteritum', en: 'CV and the simple past', fr: 'CV et prétérit' },
  theme: 'Describing a work history with the Präteritum (regular, irregular and mixed verbs)', themeFr: 'Décrire un parcours professionnel avec le prétérit (verbes réguliers, irréguliers et mixtes)',
  goals: ['Form the Präteritum of regular verbs (arbeitete)', 'Use irregular verbs with a vowel change (ging, schrieb)', 'Use mixed verbs (brachte, wusste, kannte)', 'Describe a career in formal written German'], goalsFr: ['Former le prétérit des verbes réguliers (arbeitete)', 'Utiliser les verbes irréguliers à changement de voyelle (ging, schrieb)', 'Utiliser les verbes mixtes (brachte, wusste, kannte)', 'Décrire un parcours en allemand écrit formel'],
  canDo: g('Ich kann einen Lebenslauf und eine berufliche Laufbahn im Präteritum beschreiben, auch mit unregelmäßigen und gemischten Verben.', 'I can describe a CV and a career in the simple past, including irregular and mixed verbs.', 'Je sais décrire un CV et un parcours professionnel au prétérit, y compris avec des verbes irréguliers et mixtes.'),
  steps: [
    { kind: 'intro', title: 'Lebenslauf und Laufbahn 📄', titleFr: 'CV et parcours professionnel 📄',
      scene: 'Jonas writes his CV and a cover letter. Every stage of his career is told in the Präteritum.', sceneFr: 'Jonas rédige son CV et une lettre de motivation. Chaque étape de sa carrière est racontée au prétérit.',
      goals: ['Form the Präteritum of regular verbs', 'Use irregular and mixed verbs (ging, schrieb, brachte, wusste)', 'Describe a career in formal written German'],
      goalsFr: ['Former le prétérit des verbes réguliers', 'Utiliser des verbes irréguliers et mixtes (ging, schrieb, brachte, wusste)', 'Décrire un parcours dans un allemand écrit formel'] },

    // ───────────── 1 · CV vocabulary and regular verbs ─────────────
    { kind: 'chapter', title: 'Lebenslauf und regelmäßige Verben', titleFr: 'CV et verbes réguliers', blurb: 'arbeitete, erledigte, kündigte.', blurbFr: 'arbeitete, erledigte, kündigte.' },

    { kind: 'situation', title: 'Jonas’ Lebenslauf', titleFr: 'Le CV de Jonas',
      setting: 'Jonas explains his CV to an adviser at the job centre.', settingFr: 'Jonas explique son CV à un conseiller du pôle emploi.',
      lines: [
        line('Beraterin', 'Erzählen Sie mir etwas über Ihre Berufserfahrung.', 'Tell me something about your work experience.', 'Parlez-moi de votre expérience professionnelle.'),
        line('Jonas', 'Nach der Schule machte ich ein Praktikum bei einer Bank. Danach begann ich eine Ausbildung.', 'After school I did an internship at a bank. Then I began a vocational training.', 'Après l’école, j’ai fait un stage dans une banque. Ensuite, j’ai commencé une formation.'),
        line('Beraterin', 'Und in Ihrer ersten Stelle? Was gehörte zu Ihren Aufgaben?', 'And in your first job? What were your duties?', 'Et dans votre premier emploi ? Quelles étaient vos tâches ?'),
        line('Jonas', 'Ich erledigte alle Aufträge pünktlich und arbeitete zuverlässig. Im Arbeitszeugnis stand: Er war immer pünktlich.', 'I carried out all orders on time and worked reliably. The reference said: he was always punctual.', 'J’ai traité toutes les commandes à temps et travaillé de façon fiable. Dans le certificat de travail, il était écrit : il était toujours ponctuel.'),
        line('Beraterin', 'Warum kündigten Sie?', 'Why did you quit?', 'Pourquoi avez-vous démissionné ?'),
        line('Jonas', 'Ich kündigte zum Jahresende, weil die Firma drei neue Mitarbeiter einstellte und ich eine neue Aufgabe suchte.', 'I gave notice at the end of the year because the company hired three new employees and I wanted a new task.', 'J’ai donné mon préavis à la fin de l’année parce que l’entreprise a embauché trois nouveaux employés et que je cherchais une nouvelle mission.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l14-e13', prompt: 'What did Jonas do first after school?', promptFr: 'Que fit Jonas en premier après l’école ?', options: ['An internship at a bank', 'A training as a cook', 'He travelled'], optionsFr: ['Un stage dans une banque', 'Une formation de cuisinier', 'Il a voyagé'], answer: 0, explain: 'He says: “Nach der Schule machte ich ein Praktikum bei einer Bank.”', explainFr: 'Il dit : « Nach der Schule machte ich ein Praktikum bei einer Bank. »', hint: 'Look for “Nach der Schule”.', hintFr: 'Cherche « Nach der Schule ».' } },

    { kind: 'wordgroup', title: 'Bewerbung und Lebenslauf', titleFr: 'Candidature et CV',
      items: [{ id: 'b1l14-lebenslauf', german: 'der Lebenslauf', english: 'the CV / résumé', french: 'le CV', gender: 'der', syllables: ['LE', 'bens', 'lauf'], pronunciation: 'dair LAY-bens-lowf', example: { de: 'Mein Lebenslauf ist zwei Seiten lang.', en: 'My CV is two pages long.', fr: 'Mon CV fait deux pages.' } }, { id: 'b1l14-bewerbung', german: 'die Bewerbung', english: 'the application', french: 'la candidature', gender: 'die', syllables: ['be', 'WER', 'bung'], pronunciation: 'dee be-VAIR-boong', example: { de: 'Ich schicke meine Bewerbung heute ab.', en: 'I am sending off my application today.', fr: 'J’envoie ma candidature aujourd’hui.' } }, { id: 'b1l14-berufserfahrung', german: 'die Berufserfahrung', english: 'the work experience', french: 'l’expérience professionnelle', gender: 'die', syllables: ['be', 'RUFS', 'er', 'fah', 'rung'], pronunciation: 'dee be-ROOFS-er-fah-roong', example: { de: 'Sie hat zehn Jahre Berufserfahrung.', en: 'She has ten years of work experience.', fr: 'Elle a dix ans d’expérience professionnelle.' } }, { id: 'b1l14-praktikum', german: 'das Praktikum', english: 'the internship', french: 'le stage', gender: 'das', syllables: ['PRAK', 'ti', 'kum'], pronunciation: 'dahs PRAHK-tee-koom', example: { de: 'Er machte ein Praktikum bei einer Bank.', en: 'He did an internship at a bank.', fr: 'Il a fait un stage dans une banque.' } }, { id: 'b1l14-ausbildung', german: 'die Ausbildung', english: 'the vocational training', french: 'la formation professionnelle', gender: 'die', syllables: ['AUS', 'bil', 'dung'], pronunciation: 'dee OWS-bil-doong', example: { de: 'Nach der Schule begann sie eine Ausbildung.', en: 'After school she began a vocational training.', fr: 'Après l’école, elle a commencé une formation professionnelle.' } }, { id: 'b1l14-zeugnis', german: 'das Arbeitszeugnis', english: 'the reference letter (from an employer)', french: 'le certificat de travail', gender: 'das', syllables: ['AR', 'beits', 'zeug', 'nis'], pronunciation: 'dahs AR-bites-tsoyg-niss', example: { de: 'Im Arbeitszeugnis stand: Er war immer pünktlich.', en: 'The reference said: He was always punctual.', fr: 'Le certificat disait : il était toujours ponctuel.' } }, { id: 'b1l14-referenz', german: 'die Referenz', english: 'the reference', french: 'la référence', gender: 'die', syllables: ['re', 'fe', 'RENZ'], pronunciation: 'dee ray-fay-RENTS', example: { de: 'Als Referenz nannte er seinen früheren Chef.', en: 'As a reference he named his former boss.', fr: 'Comme référence, il a cité son ancien chef.' } }] },

    { kind: 'wordgroup', title: 'Arbeit und Wechsel', titleFr: 'Travail et changement',
      items: [{ id: 'b1l14-aufgabe', german: 'die Aufgabe', english: 'the task / duty', french: 'la tâche', gender: 'die', syllables: ['AUF', 'ga', 'be'], pronunciation: 'dee OWF-gah-buh', example: { de: 'Zu ihren Aufgaben gehörte der Kundenkontakt.', en: 'Her duties included customer contact.', fr: 'Le contact avec la clientèle faisait partie de ses tâches.' } }, { id: 'b1l14-erledigen', german: 'erledigen', english: 'to take care of / to get done', french: 's’occuper de / régler', gender: null, syllables: ['er', 'LE', 'di', 'gen'], pronunciation: 'er-LAY-dee-gen', example: { de: 'Sie erledigte alle Aufträge pünktlich.', en: 'She took care of all orders on time.', fr: 'Elle a traité toutes les commandes à temps.' } }, { id: 'b1l14-zuverlaessig', german: 'zuverlässig', english: 'reliable', french: 'fiable', gender: null, syllables: ['ZU', 'ver', 'läs', 'sig'], pronunciation: 'TSOO-fer-less-ikh', example: { de: 'Er arbeitete immer zuverlässig.', en: 'He always worked reliably.', fr: 'Il travaillait toujours de façon fiable.' } }, { id: 'b1l14-bewerben', german: 'sich bewerben (um)', english: 'to apply (for)', french: 'postuler (à)', gender: null, syllables: ['be', 'WER', 'ben'], pronunciation: 'zikh be-VAIR-ben', example: { de: 'Ich bewarb mich im Mai um die Stelle.', en: 'I applied for the position in May.', fr: 'J’ai postulé à ce poste en mai.' } }, { id: 'b1l14-kuendigen', german: 'kündigen', english: 'to quit / to give notice', french: 'démissionner / résilier', gender: null, syllables: ['KÜN', 'di', 'gen'], pronunciation: 'KUEN-dee-gen', example: { de: 'Er kündigte seine Stelle zum Jahresende.', en: 'He gave notice on his job for the end of the year.', fr: 'Il a démissionné de son poste pour la fin de l’année.' } }, { id: 'b1l14-einstellen', german: 'einstellen', english: 'to hire', french: 'embaucher', gender: null, syllables: ['EIN', 'stel', 'len'], pronunciation: 'INE-shtel-len', example: { de: 'Die Firma stellte drei neue Mitarbeiter ein.', en: 'The company hired three new employees.', fr: 'L’entreprise a embauché trois nouveaux employés.' } }, { id: 'b1l14-kenntnisse', german: 'die Kenntnisse (Pl.)', english: 'the skills / knowledge', french: 'les connaissances / compétences', gender: 'die', syllables: ['KENNT', 'nis', 'se'], pronunciation: 'dee KENT-niss-uh', example: { de: 'Ich habe gute Sprachkenntnisse.', en: 'I have good language skills.', fr: 'J’ai de bonnes connaissances linguistiques.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l14-regelmaessig', title: 'Präteritum of regular verbs: stem + -te', titleFr: 'Prétérit des verbes réguliers : radical + -te',
      lead: 'Regular verbs add -te to the stem. ich and er/sie/es have no extra ending. Stems in -t / -d add -ete.',
      leadFr: 'Les verbes réguliers ajoutent -te au radical. ich et er/sie/es sans terminaison. Radicaux en -t / -d : -ete.',
      explanationMd: 'Regular (**weak**) verbs add **-te** to the stem, then the personal ending. In the **ich** and **er / sie / es** forms there is **no extra ending**: **ich arbeitete, du arbeitetest, er arbeitete, wir arbeiteten, ihr arbeitetet, sie arbeiteten**. Stems ending in **-t** or **-d** insert an **-e-** (**arbeitete, badete**). Otherwise it is simply **-te**: **machen → machte, erledigen → erledigte, kündigen → kündigte**. **Separable verbs** split as in the present: **Die Firma stellte ihn ein.**',
      explanationMdFr: 'Les verbes réguliers (**faibles**) ajoutent **-te** au radical, puis la terminaison personnelle. Aux formes **ich** et **er / sie / es**, il n’y a **pas de terminaison en plus** : **ich arbeitete, du arbeitetest, er arbeitete, wir arbeiteten, ihr arbeitetet, sie arbeiteten**. Les radicaux en **-t** ou **-d** insèrent un **-e-** (**arbeitete, badete**). Sinon c’est simplement **-te** : **machen → machte, erledigen → erledigte, kündigen → kündigte**. Les **verbes séparables** se séparent comme au présent : **Die Firma stellte ihn ein.**',
      tables: [{ title: 'arbeiten', titleFr: 'arbeiten', headers: ['Person', 'Präteritum', 'Example'], headersFr: ['Personne', 'Prétérit', 'Exemple'],
        rows: [['ich', 'arbeitete', 'Ich arbeitete drei Jahre in einem Hotel.'], ['du', 'arbeitetest', 'Du arbeitetest in Köln.'], ['er / sie / es', 'arbeitete', 'Sie erledigte ihre Aufgaben zuverlässig.'], ['wir', 'arbeiteten', 'Wir kündigten im Dezember.'], ['ihr', 'arbeitetet', 'Ihr arbeitetet viel.'], ['sie / Sie', 'arbeiteten', 'Sie arbeiteten zusammen.']],
        rowsFr: [['ich', 'arbeitete', 'Ich arbeitete drei Jahre in einem Hotel.'], ['du', 'arbeitetest', 'Du arbeitetest in Köln.'], ['er / sie / es', 'arbeitete', 'Sie erledigte ihre Aufgaben zuverlässig.'], ['wir', 'arbeiteten', 'Wir kündigten im Dezember.'], ['ihr', 'arbeitetet', 'Ihr arbeitetet viel.'], ['sie / Sie', 'arbeiteten', 'Sie arbeiteten zusammen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'arbeitete', role: 'verb' }, { text: 'drei Jahre', role: 'time' }, { text: 'in einem Hotel.', role: 'place' }], en: 'I worked in a hotel for three years.', fr: 'J’ai travaillé trois ans dans un hôtel.' },
        { parts: [{ text: 'Die Firma', role: 'subject' }, { text: 'stellte', role: 'verb' }, { text: 'drei neue Mitarbeiter', role: 'accusative' }, { text: 'ein.', role: 'verb' }], en: 'The company hired three new employees.', fr: 'L’entreprise a embauché trois nouveaux employés.' },
      ],
      contrast: {
        a: { label: 'Present', labelFr: 'Présent', note: 'now', noteFr: 'maintenant', examples: [g('Er arbeitet bei einer Bank.', 'He works at a bank.', 'Il travaille dans une banque.'), g('Sie erledigt ihre Aufgaben.', 'She carries out her tasks.', 'Elle accomplit ses tâches.')] },
        b: { label: 'Präteritum', labelFr: 'Prétérit', note: 'then', noteFr: 'alors', examples: [g('Er arbeitete bei einer Bank.', 'He worked at a bank.', 'Il travaillait dans une banque.'), g('Sie erledigte ihre Aufgaben zuverlässig.', 'She carried out her tasks reliably.', 'Elle accomplissait ses tâches de manière fiable.')] },
      },
      examples: [
        g('Ich arbeitete drei Jahre in einem Hotel.', 'I worked in a hotel for three years.', 'J’ai travaillé trois ans dans un hôtel.'),
        g('Sie erledigte ihre Aufgaben zuverlässig.', 'She carried out her tasks reliably.', 'Elle accomplissait ses tâches de manière fiable.'),
        g('Wir kündigten im Dezember.', 'We gave notice in December.', 'Nous avons donné notre préavis en décembre.'),
        g('Er machte ein Praktikum bei einer Bank.', 'He did an internship at a bank.', 'Il a fait un stage dans une banque.'),
        g('Die Firma stellte drei neue Mitarbeiter ein.', 'The company hired three new employees.', 'L’entreprise a embauché trois nouveaux employés.'),
        g('Ich suchte lange eine Stelle.', 'I looked for a job for a long time.', 'J’ai longtemps cherché un emploi.'),
      ],
      mistakes: [
        { wrong: 'Er arbeittete in Zürich.', right: 'Er arbeitete in Zürich.', why: 'Only one -te after the inserted -e-.', whyFr: 'Un seul -te après le -e- inséré.' },
        { wrong: 'Die Firma stellte ein ihn.', right: 'Die Firma stellte ihn ein.', why: 'The prefix goes to the end.', whyFr: 'Le préfixe va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l14-e1', prompt: 'Letztes Jahr ___ ich in einer Bäckerei. (arbeiten → Präteritum)', promptFr: 'L’année dernière, je ___ dans une boulangerie. (arbeiten → prétérit)', answer: 'arbeitete', hint: 'stem ends in -t → arbeit + e + te', hintFr: 'radical en -t → arbeit + e + te' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b1l14-e11', word: 'Lebenslauf', answer: 'der', hint: 'a compound: the last part is "Lauf" (m)', hintFr: 'un mot composé : la dernière partie est « Lauf » (m)' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b1l14-e12', word: 'Berufserfahrung', answer: 'die', hint: 'nouns ending in -ung are feminine', hintFr: 'les noms en -ung sont féminins' } },

    // ───────────── 2 · Irregular and mixed ─────────────
    { kind: 'chapter', title: 'Unregelmäßige und gemischte Verben', titleFr: 'Verbes irréguliers et mixtes', blurb: 'ging, schrieb, brachte, wusste.', blurbFr: 'ging, schrieb, brachte, wusste.' },

    { kind: 'situation', title: 'Das Anschreiben', titleFr: 'La lettre de motivation',
      setting: 'Jonas reads his application letter aloud.', settingFr: 'Jonas lit sa lettre de motivation à voix haute.',
      lines: [
        line('Jonas', 'Ich schrieb zehn Bewerbungen und bekam zwei Einladungen. Ich bewarb mich im Mai um die Stelle.', 'I wrote ten applications and received two invitations. I applied for the job in May.', 'J’ai écrit dix candidatures et reçu deux invitations. J’ai postulé au poste en mai.'),
        line('Jonas', 'Nach dem Studium fand ich schnell eine Stelle. Ich brachte viel Erfahrung mit.', 'After university I quickly found a job. I brought a lot of experience with me.', 'Après les études, j’ai vite trouvé un emploi. J’ai apporté beaucoup d’expérience.'),
        line('Jonas', 'Ich kannte die Firma und wusste, was sie suchte. Ich dachte, die Aufgabe passte zu mir, und blieb dort zwei Jahre.', 'I knew the company and knew what it was looking for. I thought the task suited me, and stayed there two years.', 'Je connaissais l’entreprise et savais ce qu’elle cherchait. Je pensais que la tâche me convenait et y suis resté deux ans.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l14-unregelmaessig', title: 'Irregular and mixed verbs', titleFr: 'Verbes irréguliers et mixtes',
      lead: 'Irregular verbs change the stem vowel, no -te. Mixed verbs change the stem and add -te (brachte, wusste).',
      leadFr: 'Les verbes irréguliers changent la voyelle du radical, sans -te. Les verbes mixtes changent le radical et ajoutent -te (brachte, wusste).',
      explanationMd: '**Irregular (strong) verbs** change their **stem vowel** and take **no -te**. Endings: **ich –, du -st, er / sie / es –, wir -en, ihr -t, sie -en**: **gehen → ging, schreiben → schrieb, finden → fand, kommen → kam, bleiben → blieb, bekommen → bekam, sich bewerben → bewarb sich**. **Mixed verbs** change the stem **and** add **-te**: **bringen → brachte, denken → dachte, kennen → kannte, wissen → wusste, nennen → nannte**. Irregular verbs must be **learned** — always memorise the **three forms**: **gehen – ging – ist gegangen**.',
      explanationMdFr: 'Les **verbes irréguliers (forts)** changent leur **voyelle radicale** et n’ont **pas de -te**. Terminaisons : **ich –, du -st, er / sie / es –, wir -en, ihr -t, sie -en** : **gehen → ging, schreiben → schrieb, finden → fand, kommen → kam, bleiben → blieb, bekommen → bekam, sich bewerben → bewarb sich**. Les **verbes mixtes** changent le radical **et** ajoutent **-te** : **bringen → brachte, denken → dachte, kennen → kannte, wissen → wusste, nennen → nannte**. Les verbes irréguliers doivent être **appris** — mémorise toujours les **trois formes** : **gehen – ging – ist gegangen**.',
      tables: [{ title: 'Three forms', titleFr: 'Trois formes', headers: ['Infinitive', 'Präteritum', 'Perfekt'], headersFr: ['Infinitif', 'Prétérit', 'Parfait'],
        rows: [['gehen', 'ging', 'ist gegangen'], ['schreiben', 'schrieb', 'hat geschrieben'], ['finden', 'fand', 'hat gefunden'], ['bleiben', 'blieb', 'ist geblieben'], ['bringen (mixed)', 'brachte', 'hat gebracht'], ['wissen (mixed)', 'wusste', 'hat gewusst'], ['kennen (mixed)', 'kannte', 'hat gekannt']],
        rowsFr: [['gehen', 'ging', 'ist gegangen'], ['schreiben', 'schrieb', 'hat geschrieben'], ['finden', 'fand', 'hat gefunden'], ['bleiben', 'blieb', 'ist geblieben'], ['bringen (mixte)', 'brachte', 'hat gebracht'], ['wissen (mixte)', 'wusste', 'hat gewusst'], ['kennen (mixte)', 'kannte', 'hat gekannt']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Nach dem Studium', role: 'time' }, { text: 'fand', role: 'verb' }, { text: 'er', role: 'subject' }, { text: 'schnell', role: 'other' }, { text: 'eine Stelle.', role: 'accusative' }], en: 'After university he quickly found a job.', fr: 'Après les études, il a vite trouvé un emploi.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'kannte', role: 'verb' }, { text: 'die Firma', role: 'accusative' }, { text: 'und', role: 'connector' }, { text: 'wusste,', role: 'verb' }, { text: 'was sie suchte.', role: 'other' }], en: 'He knew the company and knew what it was looking for.', fr: 'Il connaissait l’entreprise et savait ce qu’elle cherchait.' },
      ],
      contrast: {
        a: { label: 'Irregular: vowel change', labelFr: 'Irrégulier : changement de voyelle', note: 'ging, schrieb, fand', noteFr: 'ging, schrieb, fand', examples: [g('Ich schrieb zehn Bewerbungen.', 'I wrote ten applications.', 'J’ai écrit dix candidatures.'), g('Sie fand eine gute Stelle.', 'She found a good job.', 'Elle a trouvé un bon emploi.')] },
        b: { label: 'Mixed: vowel change + -te', labelFr: 'Mixte : voyelle + -te', note: 'brachte, wusste, kannte', noteFr: 'brachte, wusste, kannte', examples: [g('Sie brachte Erfahrung mit.', 'She brought experience with her.', 'Elle apportait de l’expérience.'), g('Ich wusste die Antwort.', 'I knew the answer.', 'Je connaissais la réponse.')] },
      },
      examples: [
        g('Nach dem Studium fand er schnell eine Stelle.', 'After university he quickly found a job.', 'Après les études, il a vite trouvé un emploi.'),
        g('Ich schrieb zehn Bewerbungen und bekam zwei Einladungen.', 'I wrote ten applications and received two invitations.', 'J’ai écrit dix candidatures et reçu deux invitations.'),
        g('Er kannte die Firma und wusste, was sie suchte.', 'He knew the company and knew what it was looking for.', 'Il connaissait l’entreprise et savait ce qu’elle cherchait.'),
        g('Ich bewarb mich im Mai um die Stelle.', 'I applied for the job in May.', 'J’ai postulé au poste en mai.'),
        g('Sie brachte viel Erfahrung mit.', 'She brought a lot of experience with her.', 'Elle apportait beaucoup d’expérience.'),
        g('Wir blieben zwei Jahre in Lyon.', 'We stayed two years in Lyon.', 'Nous sommes restés deux ans à Lyon.'),
      ],
      mistakes: [
        { wrong: 'Er gehte nach Wien.', right: 'Er ging nach Wien.', why: 'gehen is irregular: ging.', whyFr: 'gehen est irrégulier : ging.' },
        { wrong: 'Ich bringte Erfahrung mit.', right: 'Ich brachte Erfahrung mit.', why: 'bringen is a mixed verb: brachte.', whyFr: 'bringen est un verbe mixte : brachte.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l14-e2', prompt: 'What is the Präteritum of "gehen" (er …)?', promptFr: 'Quel est le prétérit de « gehen » (er …) ?', options: ['gehte', 'ging', 'gegangen'], answer: 1, explain: '"gehen" is irregular: gehen – ging – ist gegangen.', explainFr: '« gehen » est irrégulier : gehen – ging – ist gegangen.', hint: 'Irregular verbs change the vowel and take no -te.', hintFr: 'Les verbes irréguliers changent de voyelle et n’ont pas de -te.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l14-e3', prompt: 'Sie ___ drei Bewerbungen. (schreiben → Präteritum, sie = they)', promptFr: 'Elles ___ trois candidatures. (schreiben → prétérit)', answer: 'schrieben', hint: 'schrieb + -en for wir/sie', hintFr: 'schrieb + -en pour wir/sie' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l14-e4', pairs: [{ de: 'bringen', en: 'brachte', fr: 'brachte' }, { de: 'wissen', en: 'wusste', fr: 'wusste' }, { de: 'finden', en: 'fand', fr: 'fand' }, { de: 'bleiben', en: 'blieb', fr: 'blieb' }], hint: 'Match each infinitive with its Präteritum (3rd person singular).', hintFr: 'Associe chaque infinitif à son prétérit (3e personne du singulier).' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l14-e6', prompt: 'Er ___ die Firma schon. (kennen → Präteritum, mixed verb)', promptFr: 'Il ___ déjà l’entreprise. (kennen → prétérit, verbe mixte)', answer: 'kannte', hint: 'mixed verb: new vowel (a) + -te', hintFr: 'verbe mixte : nouvelle voyelle (a) + -te' } },

    // ───────────── 3 · Written style ─────────────
    { kind: 'chapter', title: 'Die Laufbahn schriftlich erzählen', titleFr: 'Raconter une carrière à l’écrit', blurb: 'Präteritum in writing, Perfekt in speech.', blurbFr: 'Prétérit à l’écrit, Perfekt à l’oral.' },

    { kind: 'situation', title: 'Ein Arbeitszeugnis', titleFr: 'Un certificat de travail',
      setting: 'An employer writes a reference letter.', settingFr: 'Un employeur rédige un certificat de travail.',
      lines: [
        line('Arbeitgeber', 'Von 2019 bis 2022 arbeitete Frau Berger als Verkäuferin, danach leitete sie eine Filiale.', 'From 2019 to 2022 Ms Berger worked as a sales assistant, then she managed a branch.', 'De 2019 à 2022, Mme Berger a travaillé comme vendeuse, puis elle a dirigé une filiale.'),
        line('Arbeitgeber', 'Sie erledigte ihre Aufgaben stets zuverlässig und zu unserer vollen Zufriedenheit.', 'She always carried out her tasks reliably and to our complete satisfaction.', 'Elle a toujours accompli ses tâches de manière fiable et à notre entière satisfaction.'),
        line('Frau Berger', 'Seit 2023 arbeite ich bei einer Softwarefirma. Zuerst machte ich ein Praktikum, anschließend bewarb ich mich um eine Stelle.', 'Since 2023 I have been working at a software company. First I did an internship, then I applied for a job.', 'Depuis 2023, je travaille dans une entreprise de logiciels. D’abord j’ai fait un stage, ensuite j’ai postulé à un poste.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l14-schriftlich', title: 'Telling a career: the written style', titleFr: 'Raconter une carrière : le style écrit',
      lead: 'In writing use the Präteritum; in speech the Perfekt. Time markers give the story its structure.',
      leadFr: 'À l’écrit, utilise le prétérit ; à l’oral, le Perfekt. Les marqueurs de temps structurent le récit.',
      explanationMd: 'In **writing** (cover letters, reports, references, biographies) German prefers the **Präteritum**. In **conversation** you usually say the **Perfekt** (**Ich habe drei Jahre in Köln gearbeitet.**); only **sein, haben** and the **modals** are also common in the Präteritum when speaking. **Time markers** structure the story: **2018 bis 2021 · von … bis … · seit 2021** (still true) · **zuerst, danach, anschließend, später, zuletzt** · **nach + dative, vor + dative, im Jahr 2019**. **Reference letters** use a **formal style**: **Er erledigte seine Aufgaben stets zuverlässig und zu unserer vollen Zufriedenheit.**',
      explanationMdFr: 'À l’**écrit** (lettres de motivation, comptes rendus, certificats, biographies), l’allemand préfère le **prétérit**. À l’**oral**, on utilise le plus souvent le **Perfekt** (**Ich habe drei Jahre in Köln gearbeitet.**) ; seuls **sein, haben** et les **modaux** sont aussi courants au prétérit à l’oral. Les **marqueurs de temps** structurent le récit : **2018 bis 2021 · von … bis … · seit 2021** (toujours vrai) · **zuerst, danach, anschließend, später, zuletzt** · **nach + datif, vor + datif, im Jahr 2019**. Les **certificats de travail** emploient un **style formel** : **Er erledigte seine Aufgaben stets zuverlässig und zu unserer vollen Zufriedenheit.**',
      tables: [{ title: 'Speech vs writing', titleFr: 'Oral vs écrit', headers: ['', 'Speech', 'Writing'], headersFr: ['', 'Oral', 'Écrit'],
        rows: [['Most verbs', 'Ich habe drei Jahre in Köln gearbeitet.', 'Ich arbeitete drei Jahre in Köln.'], ['sein / haben / modals', 'Ich war Verkäuferin.', 'Ich war Verkäuferin.'], ['Time words', 'Danach habe ich gekündigt.', 'Danach kündigte ich.']],
        rowsFr: [['La plupart des verbes', 'Ich habe drei Jahre in Köln gearbeitet.', 'Ich arbeitete drei Jahre in Köln.'], ['sein / haben / modaux', 'Ich war Verkäuferin.', 'Ich war Verkäuferin.'], ['Mots de temps', 'Danach habe ich gekündigt.', 'Danach kündigte ich.']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Von 2019 bis 2022', role: 'time' }, { text: 'arbeitete', role: 'verb' }, { text: 'sie', role: 'subject' }, { text: 'als Verkäuferin.', role: 'other' }], en: 'From 2019 to 2022 she worked as a sales assistant.', fr: 'De 2019 à 2022, elle a travaillé comme vendeuse.' },
        { parts: [{ text: 'Zuerst', role: 'time' }, { text: 'machte', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'ein Praktikum,', role: 'accusative' }, { text: 'anschließend', role: 'time' }, { text: 'bewarb', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'mich', role: 'accusative' }, { text: 'um eine Stelle.', role: 'accusative' }], en: 'First I did an internship, then I applied for a job.', fr: 'D’abord j’ai fait un stage, ensuite j’ai postulé à un poste.' },
      ],
      contrast: {
        a: { label: 'Speech', labelFr: 'Oral', note: 'Perfekt', noteFr: 'Perfekt', examples: [g('Ich habe drei Jahre in einem Hotel gearbeitet.', 'I worked in a hotel for three years.', 'J’ai travaillé trois ans dans un hôtel.'), g('Dann habe ich gekündigt.', 'Then I quit.', 'Puis j’ai démissionné.')] },
        b: { label: 'Writing', labelFr: 'Écrit', note: 'Präteritum', noteFr: 'Prétérit', examples: [g('Ich arbeitete drei Jahre in einem Hotel.', 'I worked in a hotel for three years.', 'J’ai travaillé trois ans dans un hôtel.'), g('Dann kündigte ich.', 'Then I quit.', 'Puis j’ai démissionné.')] },
      },
      examples: [
        g('Von 2019 bis 2022 arbeitete sie als Verkäuferin, danach leitete sie eine Filiale.', 'From 2019 to 2022 she worked as a sales assistant, then she managed a branch.', 'De 2019 à 2022, elle a travaillé comme vendeuse, puis elle a dirigé une filiale.'),
        g('Zuerst machte ich ein Praktikum, anschließend bewarb ich mich um eine Ausbildung.', 'First I did an internship, then I applied for a vocational training.', 'D’abord j’ai fait un stage, ensuite j’ai postulé à une formation.'),
        g('Seit 2023 arbeite ich bei einer Softwarefirma.', 'Since 2023 I have been working at a software company.', 'Depuis 2023, je travaille dans une entreprise de logiciels.'),
        g('Er erledigte seine Aufgaben stets zuverlässig.', 'He always carried out his tasks reliably.', 'Il accomplissait toujours ses tâches de manière fiable.'),
        g('Im Jahr 2019 bewarb er sich um eine Ausbildung.', 'In 2019 he applied for a vocational training.', 'En 2019, il a postulé à une formation.'),
        g('Zuletzt leitete sie ein Team von zehn Personen.', 'Finally she led a team of ten people.', 'Enfin, elle a dirigé une équipe de dix personnes.'),
      ],
      mistakes: [
        { wrong: 'Seit 2023 arbeitete ich bei einer Softwarefirma. (still true)', right: 'Seit 2023 arbeite ich bei einer Softwarefirma.', why: 'seit + still true → present.', whyFr: 'seit + toujours vrai → présent.' },
        { wrong: 'Danach ich kündigte.', right: 'Danach kündigte ich.', why: 'After a time word the verb is second.', whyFr: 'Après un mot de temps, le verbe est en deuxième.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l14-e8', prompt: 'Which sentence fits a formal reference letter?', promptFr: 'Quelle phrase convient à un certificat de travail formel ?', options: ['Er hat seine Aufgaben zuverlässig erledigt, glaube ich.', 'Er erledigte seine Aufgaben stets zuverlässig.', 'Der war echt zuverlässig.'], answer: 1, explain: 'Written, formal style uses the Präteritum and neutral wording.', explainFr: 'Le style écrit formel utilise le prétérit et un vocabulaire neutre.', hint: 'Look for the Präteritum and no casual words.', hintFr: 'Cherche le prétérit et aucun mot familier.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l14-e7', tokens: ['bewarb', 'Danach', 'bei', 'sie', 'einer', 'Firma', 'sich'], answer: ['Danach', 'bewarb', 'sie', 'sich', 'bei', 'einer', 'Firma'], hint: 'Verb second after "Danach", then subject and reflexive pronoun.', hintFr: 'Verbe en deuxième position après « Danach », puis sujet et pronom réfléchi.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l14-e10', prompt: 'Wir ___ zwei Jahre in Lyon. (bleiben → Präteritum)', promptFr: 'Nous ___ deux ans à Lyon. (bleiben → prétérit)', answer: 'blieben', hint: 'blieb + -en', hintFr: 'blieb + -en' } },

    { kind: 'pronunciation', focus: 'The Präteritum ending -te is short and clear (arbeitete); "ch" after a, o, u is a throaty sound (brachte, dachte)', focusFr: 'La terminaison -te du prétérit est courte et nette (arbeitete) ; « ch » après a, o, u est un son guttural (brachte, dachte)', items: [{ id: 'b1l14-arbeitete-pron', german: 'arbeitete', english: 'worked', french: 'travaillait', gender: null, syllables: ['AR', 'bei', 'te', 'te'], pronunciation: 'AR-by-te-tuh', example: { de: 'Er arbeitete in Zürich.', en: 'He worked in Zurich.', fr: 'Il travaillait à Zurich.' } }, { id: 'b1l14-brachte-pron', german: 'brachte', english: 'brought', french: 'apportait', gender: null, syllables: ['BRACH', 'te'], pronunciation: 'BRAHKH-tuh', example: { de: 'Sie brachte Erfahrung mit.', en: 'She brought experience with her.', fr: 'Elle apportait de l’expérience.' } }, { id: 'b1l14-wusste-pron', german: 'wusste', english: 'knew', french: 'savait', gender: null, syllables: ['WUSS', 'te'], pronunciation: 'VOOSS-tuh', example: { de: 'Ich wusste die Antwort.', en: 'I knew the answer.', fr: 'Je connaissais la réponse.' } }, { id: 'b1l14-schrieb-pron', german: 'schrieb', english: 'wrote', french: 'écrivait', gender: null, syllables: ['SCHRIEB'], pronunciation: 'shreep', example: { de: 'Er schrieb einen Lebenslauf.', en: 'He wrote a CV.', fr: 'Il a écrit un CV.' } }, { id: 'b1l14-fand-pron', german: 'fand', english: 'found', french: 'trouvait', gender: null, syllables: ['FAND'], pronunciation: 'fahnt', example: { de: 'Sie fand eine gute Stelle.', en: 'She found a good job.', fr: 'Elle a trouvé un bon poste.' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l14-e5', prompt: 'Listen. Where did Anna apply?', promptFr: 'Écoute. Où Anna a-t-elle postulé ?', audio: { ttsText: 'Anna bewarb sich im Mai bei einer Bank. Im Juni bekam sie die Stelle.' }, options: ['At a bank', 'At a hotel', 'At a school'], optionsFr: ['Dans une banque', 'Dans un hôtel', 'Dans une école'], answer: 0, hint: 'Listen for the place after "bei".', hintFr: 'Écoute le lieu après « bei ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l14-e9', prompt: 'Listen. What happened in 2022?', promptFr: 'Écoute. Que s’est-il passé en 2022 ?', audio: { ttsText: 'Von 2019 bis 2022 arbeitete Jonas als Koch. Dann kündigte er und ging nach Wien.' }, options: ['He quit and moved to Vienna', 'He started as a cook', 'He was hired as a manager'], optionsFr: ['Il a démissionné et est parti à Vienne', 'Il a débuté comme cuisinier', 'Il a été embauché comme directeur'], answer: 0, hint: 'Listen for "kündigte" and "ging".', hintFr: 'Écoute « kündigte » et « ging ».' } },

    { kind: 'wrapup',
      summary: 'You can now tell a **career in the Präteritum**: **regular verbs (-te)**, **irregular** (ging, schrieb) and **mixed** (brachte, wusste) — in a **written style**. 🎉',
      summaryFr: 'Tu sais maintenant raconter une **carrière au prétérit** : **verbes réguliers (-te)**, **irréguliers** (ging, schrieb) et **mixtes** (brachte, wusste) — dans un **style écrit**. 🎉',
      card: { title: 'Präteritum on one page', titleFr: 'Le prétérit en une page', sections: [
        { heading: 'Regular', headingFr: 'Réguliers', rows: [g('arbeitete · erledigte · kündigte', 'stem + -te', 'radical + -te')] },
        { heading: 'Irregular and mixed', headingFr: 'Irréguliers et mixtes', rows: [g('ging · schrieb · fand · blieb', 'vowel change, no -te', 'changement de voyelle, sans -te'), g('brachte · wusste · kannte · dachte', 'vowel change + -te', 'voyelle + -te')] },
        { heading: 'Style', headingFr: 'Style', rows: [g('Writing = Präteritum', 'CV, references', 'CV, certificats'), g('Speech = Perfekt', 'except sein / haben / modals', 'sauf sein / haben / modaux')] },
      ] } },
  ],
};
