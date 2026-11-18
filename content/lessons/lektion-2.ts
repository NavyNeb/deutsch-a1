import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion2: Lesson = {
  id: 'l2', level: 'A1', module: 1, number: 5,
  title: { de: 'Ich bin Journalistin', en: 'I am a journalist', fr: 'Je suis journaliste' },
  theme: 'Jobs, marital status & numbers 1–100', themeFr: 'Métiers, état civil et les nombres de 1 à 100',
  goals: ['State your job', 'Give personal details (age and marital status)', 'Ask and answer yes/no questions', 'Negate statements with nicht'], goalsFr: ['Dire ton métier', 'Donner des informations personnelles (âge et état civil)', 'Poser et répondre à des questions fermées', 'Nier des phrases avec nicht'],
  canDo: g('Ich kann sagen, was ich beruflich mache, mein Alter nennen und Ja/Nein-Fragen beantworten.', 'I can say what I do for a living, give my age and answer yes/no questions.', 'Je sais dire mon métier, donner mon âge et répondre à des questions fermées.'),
  steps: [
    { kind: 'intro', title: 'Wer bist du, was machst du? 💼', titleFr: 'Qui es-tu, que fais-tu ? 💼',
      scene: 'Two people get to know each other at a party.', sceneFr: 'Deux personnes font connaissance lors d’une fête.',
      goals: ['Say what your job is', 'Use sein and arbeiten with every person', 'Say your age and marital status', 'Ask yes/no questions and say no with nicht'],
      goalsFr: ['Dire quel est ton métier', 'Utiliser sein et arbeiten avec toutes les personnes', 'Dire ton âge et ta situation familiale', 'Poser des questions fermées et dire non avec nicht'] },

    // ───────────── 1 · Jobs ─────────────
    { kind: 'chapter', title: 'Berufe', titleFr: 'Les métiers', blurb: 'Say what you do, for men and for women.', blurbFr: 'Dire ce que tu fais, au masculin et au féminin.' },

    { kind: 'situation', title: 'Auf der Party', titleFr: 'À la fête',
      setting: 'Nicole meets Tom at a party and they talk about their jobs.', settingFr: 'Nicole rencontre Tom à une fête et ils parlent de leur métier.',
      lines: [
        line('Tom', 'Was bist du von Beruf, Nicole?', 'What do you do for a living, Nicole?', 'Que fais-tu dans la vie, Nicole ?'),
        line('Nicole', 'Ich bin Journalistin. Und du?', 'I’m a journalist. And you?', 'Je suis journaliste. Et toi ?'),
        line('Tom', 'Ich bin Lehrer. Meine Frau ist Ärztin.', 'I’m a teacher. My wife is a doctor.', 'Je suis enseignant. Ma femme est médecin.'),
        line('Nicole', 'Arbeitest du in Berlin?', 'Do you work in Berlin?', 'Travailles-tu à Berlin ?'),
        line('Tom', 'Ja, ich arbeite als Lehrer in Berlin.', 'Yes, I work as a teacher in Berlin.', 'Oui, je travaille comme enseignant à Berlin.'),
        line('Nicole', 'Schön! Ich arbeite auch in Berlin.', 'Nice! I work in Berlin too.', 'Super ! Je travaille aussi à Berlin.'),
      ],
      words: [{ id: 'l2-beruf', german: 'der Beruf', english: 'the profession / job', french: 'la profession / le métier', gender: 'der', syllables: ['be', 'RUF'], pronunciation: 'dair buh-ROOF', example: { de: 'Was bist du von Beruf?', en: 'What is your profession?', fr: 'Quel est ton métier ?' } }, { id: 'l2-arbeiten', german: 'arbeiten (als)', english: 'to work (as)', french: 'travailler (comme / en tant que)', gender: null, syllables: ['AR', 'bei', 'ten'], pronunciation: 'AR-by-ten (ahls)', example: { de: 'Ich arbeite als Journalistin.', en: 'I work as a journalist.', fr: 'Je travaille comme journaliste.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e23', prompt: 'What is Tom’s job?', promptFr: 'Quel est le métier de Tom ?', options: ['Teacher', 'Doctor', 'Journalist'], optionsFr: ['Enseignant', 'Médecin', 'Journaliste'], answer: 0, explain: 'Tom says: “Ich bin Lehrer.” His wife is the doctor.', explainFr: 'Tom dit : « Ich bin Lehrer. » C’est sa femme qui est médecin.', hint: 'Tom answers the question “Was bist du von Beruf?”.', hintFr: 'Tom répond à la question « Was bist du von Beruf ? ».' } },

    { kind: 'wordgroup', title: 'Berufe: männlich und weiblich', titleFr: 'Les métiers : masculin et féminin',
      note: 'Learn the pair together: the woman’s job ends in -in.', noteFr: 'Apprends la paire ensemble : le métier au féminin se termine par -in.',
      items: [{ id: 'l2-journalist', german: 'der Journalist', english: 'the journalist (male)', french: 'le journaliste', gender: 'der', syllables: ['jour', 'na', 'LIST'], pronunciation: 'dair zhoor-nah-LIST', example: { de: 'Er ist Journalist.', en: 'He is a journalist.', fr: 'Il est journaliste.' } }, { id: 'l2-journalistin', german: 'die Journalistin', english: 'the journalist (female)', french: 'la journaliste', gender: 'die', syllables: ['jour', 'na', 'LIS', 'tin'], pronunciation: 'dee zhoor-nah-LIS-tin', example: { de: 'Ich bin Journalistin von Beruf.', en: 'I am a journalist by profession.', fr: 'Je suis journaliste de profession.' } }, { id: 'l2-arzt', german: 'der Arzt', english: 'the doctor (male)', french: 'le médecin', gender: 'der', syllables: ['ARZT'], pronunciation: 'dair AHRTST', example: { de: 'Mein Vater ist Arzt.', en: 'My father is a doctor.', fr: 'Mon père est médecin.' } }, { id: 'l2-aerztin', german: 'die Ärztin', english: 'the doctor (female)', french: 'la médecin', gender: 'die', syllables: ['ÄRZ', 'tin'], pronunciation: 'dee AIRTS-tin', example: { de: 'Sie ist Ärztin von Beruf.', en: 'She is a doctor by profession.', fr: 'Elle est médecin de profession.' } }, { id: 'l2-lehrer', german: 'der Lehrer', english: 'the teacher (male)', french: 'l\'enseignant / le professeur', gender: 'der', syllables: ['LEH', 'rer'], pronunciation: 'dair LAY-rer', example: { de: 'Er ist Lehrer.', en: 'He is a teacher.', fr: 'Il est enseignant.' } }, { id: 'l2-lehrerin', german: 'die Lehrerin', english: 'the teacher (female)', french: 'l\'enseignante / la professeure', gender: 'die', syllables: ['LEH', 're', 'rin'], pronunciation: 'dee LAY-reh-rin', example: { de: 'Ich bin Lehrerin von Beruf.', en: 'I am a teacher by profession.', fr: 'Je suis enseignante de profession.' } }, { id: 'l2-student', german: 'der Student', english: 'the student (male)', french: 'l\'étudiant', gender: 'der', syllables: ['stu', 'DENT'], pronunciation: 'dair shtoo-DENT', example: { de: 'Er ist Student.', en: 'He is a student.', fr: 'Il est étudiant.' } }, { id: 'l2-studentin', german: 'die Studentin', english: 'the student (female)', french: 'l\'étudiante', gender: 'die', syllables: ['stu', 'DEN', 'tin'], pronunciation: 'dee shtoo-DEN-tin', example: { de: 'Ich bin Studentin.', en: 'I am a student.', fr: 'Je suis étudiante.' } }] },

    { kind: 'grammar', note: {
      id: 'l2-berufe', title: 'Job words: -in makes it feminine', titleFr: 'Les métiers : -in met au féminin',
      lead: 'Add -in to talk about a woman. After sein, say the job without an article.',
      leadFr: 'Ajoute -in pour parler d’une femme. Après sein, dis le métier sans article.',
      explanationMd: 'Most job words have a **masculine** form and a **feminine** form with **-in**: der Lehrer → die Lehrerin. A few vowels get an umlaut: der Arzt → die **Ä**rztin.\n\nAfter **sein** and after **arbeiten als** you say the job **without an article**: **Ich bin Lehrer.** (not “ein Lehrer”).',
      explanationMdFr: 'La plupart des métiers ont une forme **masculine** et une forme **féminine** en **-in** : der Lehrer → die Lehrerin. Certaines voyelles prennent un tréma : der Arzt → die **Ä**rztin.\n\nAprès **sein** et après **arbeiten als**, on dit le métier **sans article** : **Ich bin Lehrer.** (pas « ein Lehrer »).',
      tables: [{ title: 'Masculine and feminine', titleFr: 'Masculin et féminin', headers: ['der (man)', 'die (woman)'], headersFr: ['der (homme)', 'die (femme)'],
        rows: [['der Lehrer', 'die Lehrerin'], ['der Journalist', 'die Journalistin'], ['der Student', 'die Studentin'], ['der Arzt', 'die Ärztin']],
        rowsFr: [['der Lehrer', 'die Lehrerin'], ['der Journalist', 'die Journalistin'], ['der Student', 'die Studentin'], ['der Arzt', 'die Ärztin']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'Journalistin.', role: 'other' }], en: 'I am a journalist. (no article)', fr: 'Je suis journaliste. (sans article)' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'arbeite', role: 'verb' }, { text: 'als', role: 'connector' }, { text: 'Lehrer.', role: 'other' }], en: 'I work as a teacher.', fr: 'Je travaille comme enseignant.' },
        { parts: [{ text: 'Was', role: 'other' }, { text: 'bist', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'von Beruf?', role: 'other' }], en: 'What do you do for a living?', fr: 'Que fais-tu dans la vie ?' },
      ],
      contrast: {
        a: { label: 'Ich bin …', labelFr: 'Ich bin …', note: 'the job after sein', noteFr: 'le métier après sein', examples: [g('Ich bin Lehrer.', 'I am a teacher.', 'Je suis enseignant.'), g('Sie ist Ärztin.', 'She is a doctor.', 'Elle est médecin.')] },
        b: { label: 'Ich arbeite als …', labelFr: 'Ich arbeite als …', note: 'the same idea with arbeiten', noteFr: 'la même idée avec arbeiten', examples: [g('Ich arbeite als Lehrer.', 'I work as a teacher.', 'Je travaille comme enseignant.'), g('Sie arbeitet als Ärztin.', 'She works as a doctor.', 'Elle travaille comme médecin.')] },
      },
      examples: [
        g('Ich bin Journalistin.', 'I am a journalist.', 'Je suis journaliste.'),
        g('Er ist Lehrer.', 'He is a teacher.', 'Il est enseignant.'),
        g('Sie ist Ärztin von Beruf.', 'She is a doctor by profession.', 'Elle est médecin de métier.'),
        g('Wir sind Studenten.', 'We are students.', 'Nous sommes étudiants.'),
        g('Mein Vater ist Arzt.', 'My father is a doctor.', 'Mon père est médecin.'),
        g('Was bist du von Beruf?', 'What do you do for a living?', 'Que fais-tu dans la vie ?'),
        g('Ich arbeite als Journalistin.', 'I work as a journalist.', 'Je travaille comme journaliste.'),
      ],
      mistakes: [
        { wrong: 'Ich bin eine Lehrerin.', right: 'Ich bin Lehrerin.', why: 'No article before a job after sein.', whyFr: 'Pas d’article devant un métier après sein.' },
        { wrong: 'Sie ist Lehrer.', right: 'Sie ist Lehrerin.', why: 'For a woman use the form with -in.', whyFr: 'Pour une femme, utilise la forme en -in.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l2-e1', word: 'Arzt', answer: 'der', hint: 'Think about the noun\'s gender — is it der, die, or das?', hintFr: 'Pense au genre du nom — der, die ou das ?' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l2-e2', word: 'Journalistin', answer: 'die', hint: 'Nouns ending in "-in" naming a person are almost always feminine.', hintFr: 'Les noms de personne qui se terminent par « -in » sont presque toujours féminins.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e4', prompt: 'Which is the correct feminine form of "der Lehrer"?', promptFr: 'Quelle est la forme féminine correcte de « der Lehrer » ?', options: ['die Lehrerin', 'die Lehrer', 'der Lehrerin'], answer: 0, explain: '"Lehrer" becomes "Lehrerin" for a female teacher.', explainFr: '« Lehrer » devient « Lehrerin » pour une enseignante.', hint: 'The feminine form adds an ending and switches the article to "die".', hintFr: 'La forme féminine ajoute une terminaison et l\'article devient « die ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l2-e5', pairs: [{ de: 'die Ärztin', en: 'the doctor (f)', fr: 'la médecin' }, { de: 'der Student', en: 'the student (m)', fr: 'l\'étudiant' }, { de: 'die Lehrerin', en: 'the teacher (f)', fr: 'l\'enseignante' }], hint: 'The article (der/die) already tells you whether it\'s a male or female form.', hintFr: 'L\'article (der/die) te dit déjà s\'il s\'agit d\'une forme masculine ou féminine.' } },

    // ───────────── 2 · sein and arbeiten ─────────────
    { kind: 'chapter', title: 'sein und arbeiten mit allen Personen', titleFr: 'sein et arbeiten avec toutes les personnes', blurb: 'The full forms, singular and plural.', blurbFr: 'Les formes complètes, au singulier et au pluriel.' },

    { kind: 'situation', title: 'Nach dem Kurs', titleFr: 'Après le cours',
      setting: 'Ana and Ben talk about who is who after the German course.', settingFr: 'Ana et Ben parlent de qui fait quoi après le cours d’allemand.',
      lines: [
        line('Ana', 'Seid ihr Studenten?', 'Are you students?', 'Êtes-vous étudiants ?'),
        line('Ben', 'Nein, wir sind Lehrer. Und ihr?', 'No, we are teachers. And you?', 'Non, nous sommes enseignants. Et vous ?'),
        line('Ana', 'Ich bin Studentin. Tom und Mia sind Ärzte.', 'I’m a student. Tom and Mia are doctors.', 'Je suis étudiante. Tom et Mia sont médecins.'),
        line('Ben', 'Wirklich? Arbeitet Tom in Berlin?', 'Really? Does Tom work in Berlin?', 'Vraiment ? Tom travaille-t-il à Berlin ?'),
        line('Ana', 'Ja, er arbeitet in Berlin. Mia arbeitet in Hamburg.', 'Yes, he works in Berlin. Mia works in Hamburg.', 'Oui, il travaille à Berlin. Mia travaille à Hambourg.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'l2-sein-arbeiten', title: 'sein and arbeiten in full', titleFr: 'sein et arbeiten au complet',
      lead: 'Each person has its own ending. Verbs with a stem in -t add an e.',
      leadFr: 'Chaque personne a sa propre terminaison. Les verbes dont le radical finit en -t ajoutent un e.',
      explanationMd: '**sein** (to be) is irregular: learn all six forms.\n\n**arbeiten** is regular, but its stem ends in **-t**. To keep it pronounceable, an **e** is added before the endings of **du**, **er/sie/es** and **ihr**: du arbeit**e**st, er arbeit**e**t, ihr arbeit**e**t.',
      explanationMdFr: '**sein** (être) est irrégulier : apprends les six formes.\n\n**arbeiten** est régulier, mais son radical se termine en **-t**. Pour rester prononçable, on ajoute un **e** avant les terminaisons de **du**, **er/sie/es** et **ihr** : du arbeit**e**st, er arbeit**e**t, ihr arbeit**e**t.',
      tables: [
        { title: 'sein (to be)', titleFr: 'sein (être)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['bin', 'bist', 'ist', 'sind', 'seid', 'sind']], rowsFr: [['bin', 'bist', 'ist', 'sind', 'seid', 'sind']] },
        { title: 'arbeiten (to work)', titleFr: 'arbeiten (travailler)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['arbeite', 'arbeitest', 'arbeitet', 'arbeiten', 'arbeitet', 'arbeiten']], rowsFr: [['arbeite', 'arbeitest', 'arbeitet', 'arbeiten', 'arbeitet', 'arbeiten']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'sind', role: 'verb' }, { text: 'Lehrer.', role: 'other' }], en: 'We are teachers.', fr: 'Nous sommes enseignants.' },
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'arbeitest', role: 'verb' }, { text: 'in Berlin.', role: 'place' }], en: 'You work in Berlin.', fr: 'Tu travailles à Berlin.' },
      ],
      contrast: {
        a: { label: 'normal stem', labelFr: 'radical normal', note: 'machen: du machst, er macht', noteFr: 'machen : du machst, er macht', examples: [g('Du machst viel.', 'You do a lot.', 'Tu fais beaucoup.'), g('Er macht Kaffee.', 'He makes coffee.', 'Il fait du café.')] },
        b: { label: 'stem in -t', labelFr: 'radical en -t', note: 'arbeiten: du arbeitest, er arbeitet', noteFr: 'arbeiten : du arbeitest, er arbeitet', examples: [g('Du arbeitest viel.', 'You work a lot.', 'Tu travailles beaucoup.'), g('Er arbeitet in Berlin.', 'He works in Berlin.', 'Il travaille à Berlin.')] },
      },
      examples: [
        g('Ich bin Studentin.', 'I am a student.', 'Je suis étudiante.'),
        g('Wir sind Lehrer.', 'We are teachers.', 'Nous sommes enseignants.'),
        g('Seid ihr verheiratet?', 'Are you (pl.) married?', 'Êtes-vous mariés ?'),
        g('Sie sind Journalisten.', 'They are journalists.', 'Ils sont journalistes.'),
        g('Du arbeitest in Berlin.', 'You work in Berlin.', 'Tu travailles à Berlin.'),
        g('Er arbeitet als Arzt.', 'He works as a doctor.', 'Il travaille comme médecin.'),
        g('Arbeitet ihr als Lehrer?', 'Do you (pl.) work as teachers?', 'Travaillez-vous comme enseignants ?'),
      ],
      mistakes: [
        { wrong: 'Du arbeitst in Berlin.', right: 'Du arbeitest in Berlin.', why: 'Stem in -t: add an e before -st.', whyFr: 'Radical en -t : ajoute un e avant -st.' },
        { wrong: 'Wir seid Lehrer.', right: 'Wir sind Lehrer.', why: 'seid goes with ihr; wir takes sind.', whyFr: 'seid va avec ihr ; wir prend sind.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e3', prompt: 'Ich ___ Journalistin von Beruf. (sein)', answer: 'bin', hint: 'first person singular of sein', hintFr: 'première personne du singulier de sein' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e6', tokens: ['als', 'Ich', 'Journalistin', 'arbeite'], answer: ['Ich', 'arbeite', 'als', 'Journalistin'], hint: 'In a German statement, the verb comes second.', hintFr: 'Dans une phrase allemande, le verbe est en deuxième position.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e19', prompt: 'Wir ___ Lehrer. (sein)', promptFr: 'Wir ___ Lehrer. (sein)', answer: 'sind', hint: 'wir takes the form sind', hintFr: 'wir prend la forme sind' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e20', prompt: 'Du ___ in Berlin. (arbeiten)', promptFr: 'Du ___ in Berlin. (arbeiten)', answer: 'arbeitest', hint: 'stem in -t: add an e', hintFr: 'radical en -t : ajoute un e' } },

    // ───────────── 3 · Age, status and numbers ─────────────
    { kind: 'chapter', title: 'Alter, Familienstand und Zahlen', titleFr: 'Âge, situation familiale et nombres', blurb: 'Say how old you are and count to one hundred.', blurbFr: 'Dire quel âge tu as et compter jusqu’à cent.' },

    { kind: 'situation', title: 'Wie alt bist du?', titleFr: 'Quel âge as-tu ?',
      setting: 'Ben and Nicole get to know each other better.', settingFr: 'Ben et Nicole font plus ample connaissance.',
      lines: [
        line('Ben', 'Wie alt bist du, Nicole?', 'How old are you, Nicole?', 'Quel âge as-tu, Nicole ?'),
        line('Nicole', 'Ich bin fünfundzwanzig Jahre alt. Und du?', 'I’m twenty-five years old. And you?', 'J’ai vingt-cinq ans. Et toi ?'),
        line('Ben', 'Ich bin dreißig. Bist du verheiratet?', 'I’m thirty. Are you married?', 'J’ai trente ans. Es-tu mariée ?'),
        line('Nicole', 'Nein, ich bin ledig. Und du?', 'No, I’m single. And you?', 'Non, je suis célibataire. Et toi ?'),
        line('Ben', 'Ich bin geschieden.', 'I’m divorced.', 'Je suis divorcé.'),
      ],
      words: [{ id: 'l2-alt', german: 'alt', english: 'old', french: 'vieux / âgé', gender: null, syllables: ['ALT'], pronunciation: 'AHLT', example: { de: 'Ich bin fünfundzwanzig Jahre alt.', en: 'I am twenty-five years old.', fr: 'J\'ai vingt-cinq ans.' } }, { id: 'l2-verheiratet', german: 'verheiratet', english: 'married', french: 'marié(e)', gender: null, syllables: ['ver', 'HEI', 'ra', 'tet'], pronunciation: 'fer-HIGH-rah-tet', example: { de: 'Bist du verheiratet?', en: 'Are you married?', fr: 'Es-tu marié(e) ?' } }, { id: 'l2-ledig', german: 'ledig', english: 'single (unmarried)', french: 'célibataire', gender: null, syllables: ['LE', 'dig'], pronunciation: 'LAY-dikh', example: { de: 'Nein, ich bin ledig.', en: 'No, I am single.', fr: 'Non, je suis célibataire.' } }, { id: 'l2-geschieden', german: 'geschieden', english: 'divorced', french: 'divorcé(e)', gender: null, syllables: ['ge', 'SCHIE', 'den'], pronunciation: 'guh-SHEE-den', example: { de: 'Meine Mutter ist geschieden.', en: 'My mother is divorced.', fr: 'Ma mère est divorcée.' } }] },

    { kind: 'wordgroup', title: 'Zahlen ab zwanzig', titleFr: 'Les nombres à partir de vingt',
      note: 'The tens end in -zig, except dreißig.', noteFr: 'Les dizaines se terminent en -zig, sauf dreißig.',
      items: [{ id: 'l2-zwanzig', german: 'zwanzig', english: 'twenty', french: 'vingt', gender: null, syllables: ['ZWAN', 'zig'], pronunciation: 'TSVAHN-tsikh', example: { de: 'Ich bin zwanzig Jahre alt.', en: 'I am twenty years old.', fr: 'J\'ai vingt ans.' } }, { id: 'l2-dreissig', german: 'dreißig', english: 'thirty', french: 'trente', gender: null, syllables: ['DREI', 'ßig'], pronunciation: 'DRY-sikh', example: { de: 'Er ist dreißig Jahre alt.', en: 'He is thirty years old.', fr: 'Il a trente ans.' } }, { id: 'l2-hundert', german: 'hundert', english: 'hundred', french: 'cent', gender: null, syllables: ['HUN', 'dert'], pronunciation: 'HOON-dert', example: { de: 'Ich zähle bis hundert.', en: 'I count to a hundred.', fr: 'Je compte jusqu\'à cent.' } }] },

    { kind: 'grammar', note: {
      id: 'l2-zahlen', title: 'Numbers from 20 to 100', titleFr: 'Les nombres de 20 à 100',
      lead: 'Say the units first, then und, then the tens: 25 = fünfundzwanzig.',
      leadFr: 'Dis les unités d’abord, puis und, puis la dizaine : 25 = fünfundzwanzig.',
      explanationMd: 'The tens are regular: **zwanzig, dreißig, vierzig …** For **21 to 99** German says the **units first**, then **und**, then the tens, and writes it as **one word**: 25 = **fünf**und**zwanzig** (five-and-twenty).\n\nTo give your age use **sein**: **Ich bin 25 Jahre alt.** Ask with **Wie alt bist du?**',
      explanationMdFr: 'Les dizaines sont régulières : **zwanzig, dreißig, vierzig …** De **21 à 99**, l’allemand dit **les unités d’abord**, puis **und**, puis la dizaine, et l’écrit en **un seul mot** : 25 = **fünf**und**zwanzig** (cinq-et-vingt).\n\nPour dire ton âge, utilise **sein** : **Ich bin 25 Jahre alt.** Demande avec **Wie alt bist du ?**',
      tables: [
        { title: 'The tens', titleFr: 'Les dizaines', headers: ['Number', 'German'], headersFr: ['Nombre', 'Allemand'],
          rows: [['20', 'zwanzig'], ['30', 'dreißig'], ['40', 'vierzig'], ['50', 'fünfzig'], ['60', 'sechzig'], ['70', 'siebzig'], ['80', 'achtzig'], ['90', 'neunzig'], ['100', 'hundert']],
          rowsFr: [['20', 'zwanzig'], ['30', 'dreißig'], ['40', 'vierzig'], ['50', 'fünfzig'], ['60', 'sechzig'], ['70', 'siebzig'], ['80', 'achtzig'], ['90', 'neunzig'], ['100', 'hundert']], highlightCol: 1 },
        { title: 'How 21 to 99 are built', titleFr: 'Comment se forment 21 à 99', headers: ['Number', 'Pattern', 'German'], headersFr: ['Nombre', 'Formule', 'Allemand'],
          rows: [['21', '1 + und + 20', 'einundzwanzig'], ['25', '5 + und + 20', 'fünfundzwanzig'], ['37', '7 + und + 30', 'siebenunddreißig'], ['99', '9 + und + 90', 'neunundneunzig']],
          rowsFr: [['21', '1 + und + 20', 'einundzwanzig'], ['25', '5 + und + 20', 'fünfundzwanzig'], ['37', '7 + und + 30', 'siebenunddreißig'], ['99', '9 + und + 90', 'neunundneunzig']], highlightCol: 2 },
      ],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'fünfundzwanzig', role: 'other' }, { text: 'Jahre alt.', role: 'other' }], en: 'I am twenty-five years old.', fr: 'J’ai vingt-cinq ans.' },
        { parts: [{ text: 'Wie alt', role: 'other' }, { text: 'bist', role: 'verb' }, { text: 'du?', role: 'subject' }], en: 'How old are you?', fr: 'Quel âge as-tu ?' },
      ],
      contrast: {
        a: { label: 'Units first', labelFr: 'Unités d’abord', note: 'German is the reverse of English', noteFr: 'L’allemand est l’inverse de l’anglais', examples: [g('fünfundzwanzig', 'twenty-five', 'vingt-cinq'), g('einunddreißig', 'thirty-one', 'trente et un')] },
        b: { label: 'Spelling traps', labelFr: 'Pièges d’orthographe', note: 'dreißig with ß; sechzig and siebzig lose letters', noteFr: 'dreißig avec ß ; sechzig et siebzig perdent des lettres', examples: [g('dreißig', 'thirty', 'trente'), g('sechzig, siebzig', 'sixty, seventy', 'soixante, soixante-dix')] },
      },
      examples: [
        g('Ich bin zwanzig Jahre alt.', 'I am twenty years old.', 'J’ai vingt ans.'),
        g('Er ist dreißig Jahre alt.', 'He is thirty years old.', 'Il a trente ans.'),
        g('Wie alt bist du?', 'How old are you?', 'Quel âge as-tu ?'),
        g('Meine Mutter ist achtundvierzig.', 'My mother is forty-eight.', 'Ma mère a quarante-huit ans.'),
        g('Mein Opa ist sechsundsiebzig.', 'My grandfather is seventy-six.', 'Mon grand-père a soixante-seize ans.'),
        g('Ich zähle bis hundert.', 'I count to a hundred.', 'Je compte jusqu’à cent.'),
        g('Bist du verheiratet? Nein, ich bin ledig.', 'Are you married? No, I am single.', 'Es-tu marié ? Non, je suis célibataire.'),
      ],
      mistakes: [
        { wrong: 'Ich bin zwanzig und fünf Jahre alt.', right: 'Ich bin fünfundzwanzig Jahre alt.', why: 'Write 21 to 99 as one word, units first.', whyFr: 'Écris 21 à 99 en un seul mot, unités d’abord.' },
        { wrong: 'Ich habe zwanzig Jahre.', right: 'Ich bin zwanzig Jahre alt.', why: 'German uses sein for age, not haben.', whyFr: 'En allemand on utilise sein pour l’âge, pas haben (avoir).' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e7', prompt: 'Ich bin fünfundzwanzig Jahre ___. (alt)', answer: 'alt', hint: 'adjective meaning "old"', hintFr: 'adjectif signifiant « vieux/âgé »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e8', prompt: 'Which word means "divorced"?', promptFr: 'Quel mot signifie « divorcé(e) » ?', options: ['ledig', 'verheiratet', 'geschieden'], answer: 2, explain: '"geschieden" means divorced.', explainFr: '« geschieden » signifie divorcé(e).', hint: 'The other two options mean "single" and "married".', hintFr: 'Les deux autres options signifient « célibataire » et « marié(e) ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l2-e9', pairs: [{ de: 'verheiratet', en: 'married', fr: 'marié(e)' }, { de: 'ledig', en: 'single', fr: 'célibataire' }, { de: 'geschieden', en: 'divorced', fr: 'divorcé(e)' }], hint: 'These are the three marital-status words from this lesson\'s vocab.', hintFr: 'Ce sont les trois mots d\'état civil du vocabulaire de cette leçon.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e10', tokens: ['bist', 'Wie', 'du', 'alt'], answer: ['Wie', 'alt', 'bist', 'du'], hint: 'This is a W-question: the question word starts the sentence, then the verb.', hintFr: 'C\'est une question en W : le mot interrogatif commence la phrase, puis vient le verbe.' } },

    // ───────────── 4 · Questions and no ─────────────
    { kind: 'chapter', title: 'Fragen und Verneinung', titleFr: 'Questions et négation', blurb: 'Yes/no questions, nicht and doch.', blurbFr: 'Questions fermées, nicht et doch.' },

    { kind: 'situation', title: 'Nein, nicht Studentin', titleFr: 'Non, pas étudiante',
      setting: 'Ben asks Nicole some questions. Some are negative.', settingFr: 'Ben pose des questions à Nicole. Certaines sont négatives.',
      lines: [
        line('Ben', 'Bist du Studentin?', 'Are you a student?', 'Es-tu étudiante ?'),
        line('Nicole', 'Nein, ich bin nicht Studentin. Ich bin Journalistin.', 'No, I’m not a student. I’m a journalist.', 'Non, je ne suis pas étudiante. Je suis journaliste.'),
        line('Ben', 'Arbeitest du nicht in Berlin?', 'Don’t you work in Berlin?', 'Ne travailles-tu pas à Berlin ?'),
        line('Nicole', 'Doch, ich arbeite in Berlin.', 'Yes, I do work in Berlin.', 'Si, je travaille à Berlin.'),
        line('Ben', 'Und du bist nicht verheiratet?', 'And you’re not married?', 'Et tu n’es pas mariée ?'),
        line('Nicole', 'Nein, ich bin nicht verheiratet.', 'No, I’m not married.', 'Non, je ne suis pas mariée.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'l2-ja-nein', title: 'Yes/no questions: verb first', titleFr: 'Questions fermées : le verbe en premier',
      lead: 'To ask a question with no question word, put the verb first.',
      leadFr: 'Pour poser une question sans mot interrogatif, mets le verbe en premier.',
      explanationMd: 'A **yes/no question** has no question word. The **verb moves to the front** and the subject follows: Du bist verheiratet. → **Bist du** verheiratet?\n\nAnswer with **Ja** (yes) or **Nein** (no) and a full sentence.',
      explanationMdFr: 'Une **question fermée** n’a pas de mot interrogatif. Le **verbe passe en tête** et le sujet suit : Du bist verheiratet. → **Bist du** verheiratet ?\n\nRéponds par **Ja** (oui) ou **Nein** (non) et une phrase complète.',
      tables: [{ title: 'Statement → question', titleFr: 'Affirmation → question', headers: ['Statement', 'Question'], headersFr: ['Affirmation', 'Question'],
        rows: [['Du bist verheiratet.', 'Bist du verheiratet?'], ['Du arbeitest als Ärztin.', 'Arbeitest du als Ärztin?'], ['Er ist Student.', 'Ist er Student?']],
        rowsFr: [['Du bist verheiratet.', 'Bist du verheiratet?'], ['Du arbeitest als Ärztin.', 'Arbeitest du als Ärztin?'], ['Er ist Student.', 'Ist er Student?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Bist', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'verheiratet?', role: 'other' }], en: 'Are you married? (verb first)', fr: 'Es-tu marié ? (verbe en premier)' },
        { parts: [{ text: 'Arbeitest', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'als Journalistin?', role: 'other' }], en: 'Do you work as a journalist?', fr: 'Travailles-tu comme journaliste ?' },
      ],
      contrast: {
        a: { label: 'Ja, …', labelFr: 'Ja, …', note: 'yes: agree with the question', noteFr: 'oui : tu confirmes', examples: [g('Bist du Student? Ja, ich bin Student.', 'Are you a student? Yes, I am.', 'Es-tu étudiant ? Oui, je le suis.')] },
        b: { label: 'Nein, …', labelFr: 'Nein, …', note: 'no: say what is true instead', noteFr: 'non : dis ce qui est vrai', examples: [g('Bist du Student? Nein, ich bin Lehrer.', 'Are you a student? No, I am a teacher.', 'Es-tu étudiant ? Non, je suis enseignant.')] },
      },
      examples: [
        g('Bist du Student?', 'Are you a student?', 'Es-tu étudiant ?'),
        g('Ja, ich bin Student.', 'Yes, I am a student.', 'Oui, je suis étudiant.'),
        g('Nein, ich bin Lehrer.', 'No, I am a teacher.', 'Non, je suis enseignant.'),
        g('Bist du verheiratet?', 'Are you married?', 'Es-tu marié ?'),
        g('Arbeitest du in Berlin?', 'Do you work in Berlin?', 'Travailles-tu à Berlin ?'),
        g('Seid ihr Lehrer?', 'Are you (pl.) teachers?', 'Êtes-vous enseignants ?'),
        g('Ist sie Ärztin?', 'Is she a doctor?', 'Est-elle médecin ?'),
      ],
      mistakes: [
        { wrong: 'Bist verheiratet du?', right: 'Bist du verheiratet?', why: 'Verb first, then the subject, then the rest.', whyFr: 'Verbe d’abord, puis le sujet, puis le reste.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e12', tokens: ['du', 'Bist', 'verheiratet'], answer: ['Bist', 'du', 'verheiratet'], hint: 'This is a yes/no question — the verb goes first, before the subject.', hintFr: 'C\'est une question fermée — le verbe vient en premier, avant le sujet.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e14', prompt: 'Bist du verheiratet? – ___, ich bin ledig. (Nein)', answer: 'Nein', hint: 'simple no — the question was not negative', hintFr: 'simple non — la question n\'était pas négative' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l2-e11', prompt: 'Listen. What is Sofia\'s job?', promptFr: 'Écoute. Quel est le métier de Sofia ?', audio: { ttsText: 'Ich heiße Sofia. Ich bin dreißig Jahre alt und ich arbeite als Ärztin. Ich bin nicht verheiratet, ich bin ledig.' }, options: ['Doctor', 'Teacher', 'Journalist'], optionsFr: ['Médecin', 'Enseignante', 'Journaliste'], answer: 0, hint: 'Listen for the profession right after "ich arbeite als".', hintFr: 'Écoute le métier juste après « ich arbeite als ».' } },

    { kind: 'grammar', note: {
      id: 'l2-nicht-doch', title: 'nicht, and doch for “yes, actually”', titleFr: 'nicht, et doch pour « si »',
      lead: 'nicht goes right before the word it negates, or at the end. doch says “yes” to a negative question.',
      leadFr: 'nicht se place juste avant le mot qu’il nie, ou à la fin. doch dit « si » à une question négative.',
      explanationMd: '**nicht** negates a sentence. In a short sentence it stands **at the end**: Ich arbeite **nicht**. Otherwise it stands **right before** the word it negates: Ich bin **nicht** verheiratet.\n\nWhen someone asks a **negative question** (“Aren’t you married?”) and the real answer is yes, say **doch**, not ja: **Doch, ich bin verheiratet.**',
      explanationMdFr: '**nicht** nie une phrase. Dans une phrase courte, il se place **à la fin** : Ich arbeite **nicht**. Sinon il se place **juste avant** le mot qu’il nie : Ich bin **nicht** verheiratet.\n\nQuand on te pose une **question négative** (« Tu n’es pas marié ? ») et que la vraie réponse est oui, dis **doch**, pas ja : **Doch, ich bin verheiratet.**',
      tables: [{ title: 'Where does nicht go?', titleFr: 'Où se place nicht ?', headers: ['Sentence', 'Rule'], headersFr: ['Phrase', 'Règle'],
        rows: [['Ich arbeite nicht.', 'at the end of a short sentence'], ['Ich bin nicht verheiratet.', 'before the word it negates'], ['Er arbeitet nicht als Arzt.', 'before als + job']],
        rowsFr: [['Ich arbeite nicht.', 'à la fin d’une phrase courte'], ['Ich bin nicht verheiratet.', 'avant le mot qu’il nie'], ['Er arbeitet nicht als Arzt.', 'avant als + métier']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'nicht', role: 'connector' }, { text: 'verheiratet.', role: 'other' }], en: 'I am not married.', fr: 'Je ne suis pas marié.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'arbeite', role: 'verb' }, { text: 'nicht.', role: 'connector' }], en: 'I do not work.', fr: 'Je ne travaille pas.' },
      ],
      contrast: {
        a: { label: 'Positive question', labelFr: 'Question positive', note: 'answer ja or nein', noteFr: 'réponds ja ou nein', examples: [g('Bist du verheiratet? Ja, ich bin verheiratet.', 'Are you married? Yes, I am.', 'Es-tu marié ? Oui.'), g('Bist du verheiratet? Nein, ich bin ledig.', 'Are you married? No, I am single.', 'Es-tu marié ? Non, je suis célibataire.')] },
        b: { label: 'Negative question', labelFr: 'Question négative', note: 'answer doch (yes) or nein (no)', noteFr: 'réponds doch (si) ou nein (non)', examples: [g('Bist du nicht verheiratet? Doch, ich bin verheiratet.', 'Aren’t you married? Yes, I am.', 'Tu n’es pas marié ? Si, je le suis.'), g('Bist du nicht verheiratet? Nein, ich bin ledig.', 'Aren’t you married? No, I am single.', 'Tu n’es pas marié ? Non, je suis célibataire.')] },
      },
      examples: [
        g('Ich bin nicht verheiratet.', 'I am not married.', 'Je ne suis pas marié.'),
        g('Er arbeitet nicht als Arzt.', 'He does not work as a doctor.', 'Il ne travaille pas comme médecin.'),
        g('Wir kommen nicht aus Deutschland.', 'We do not come from Germany.', 'Nous ne venons pas d’Allemagne.'),
        g('Ich arbeite nicht.', 'I do not work.', 'Je ne travaille pas.'),
        g('Bist du nicht Student? Doch!', 'Aren’t you a student? Yes, I am!', 'Tu n’es pas étudiant ? Si !'),
        g('Arbeitest du nicht als Ärztin? Doch, ich arbeite als Ärztin.', 'Don’t you work as a doctor? Yes, I do.', 'Tu ne travailles pas comme médecin ? Si, je travaille comme médecin.'),
      ],
      mistakes: [
        { wrong: 'Ich nicht arbeite.', right: 'Ich arbeite nicht.', why: 'nicht comes after the verb.', whyFr: 'nicht vient après le verbe.' },
        { wrong: 'Bist du nicht Student? Ja, ich bin Student.', right: 'Bist du nicht Student? Doch, ich bin Student.', why: 'To contradict a negative question say doch.', whyFr: 'Pour contredire une question négative, dis doch.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e13', prompt: 'Someone asks "Bist du nicht Student?" and you ARE a student. How do you answer?', promptFr: 'Quelqu\'un te demande « Bist du nicht Student? » et tu ES étudiant. Comment réponds-tu ?', options: ['Ja, ich bin Student.', 'Doch, ich bin Student.', 'Nein, ich bin Student.'], answer: 1, explain: '"Doch" contradicts a negative question.', explainFr: '« Doch » contredit une question négative.', hint: 'The question was negative ("nicht") — which word contradicts a negative question?', hintFr: 'La question était négative (« nicht ») — quel mot contredit une question négative ?' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l2-e15', prompt: 'Ich bin ___ verheiratet. (nicht)', answer: 'nicht', hint: 'negation word', hintFr: 'mot de négation' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e16', prompt: 'Where does "nicht" go in "Ich arbeite nicht"?', promptFr: 'Où se place « nicht » dans « Ich arbeite nicht » ?', options: ['At the beginning', 'At the end', 'It is never used'], optionsFr: ['Au début', 'À la fin', 'Il n\'est jamais utilisé'], answer: 1, explain: 'In a simple sentence, "nicht" often stands at the end.', explainFr: 'Dans une phrase simple, « nicht » se trouve souvent à la fin.', hint: 'Look at where "nicht" sits in the example sentence itself.', hintFr: 'Regarde où se trouve « nicht » dans la phrase donnée en exemple.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e17', tokens: ['als', 'arbeitet', 'Arzt', 'nicht', 'Er'], answer: ['Er', 'arbeitet', 'nicht', 'als', 'Arzt'], hint: 'Subject, then verb second, then "nicht" right before what it negates.', hintFr: 'Sujet, puis verbe en deuxième position, puis « nicht » juste avant ce qu\'il nie.' } },

    { kind: 'pronunciation', focus: 'The "z" sound (pronounced "ts") in words like zwanzig and the umlaut ä in Ärztin', focusFr: 'Le son « z » (prononcé « ts ») dans des mots comme zwanzig et le tréma ä dans Ärztin', items: [{ id: 'l2-zwanzig-pron', german: 'zwanzig', english: 'twenty', french: 'vingt', gender: null, syllables: ['ZWAN', 'zig'], pronunciation: 'TSVAHN-tsikh', example: { de: 'Ich bin zwanzig Jahre alt.', en: 'I am twenty years old.', fr: 'J\'ai vingt ans.' } }, { id: 'l2-aerztin-pron', german: 'die Ärztin', english: 'the doctor (female)', french: 'la médecin', gender: 'die', syllables: ['ÄRZ', 'tin'], pronunciation: 'dee AIRTS-tin', example: { de: 'Sie ist Ärztin von Beruf.', en: 'She is a doctor by profession.', fr: 'Elle est médecin de profession.' } }] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l2-e18', prompt: 'Listen. What is Herr Weber\'s marital status?', promptFr: 'Écoute. Quel est l\'état civil de Herr Weber ?', audio: { ttsText: 'Guten Tag, ich bin Herr Weber. Ich bin Lehrer von Beruf und zwanzig Jahre alt. Ich bin verheiratet.' }, options: ['Married', 'Single', 'Divorced'], optionsFr: ['Marié', 'Célibataire', 'Divorcé'], answer: 0, hint: 'Listen for the marital-status word at the very end of the clip.', hintFr: 'Écoute le mot d\'état civil tout à la fin du clip.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l2-e21', prompt: 'Ben asks “Und du bist nicht verheiratet?”. What does Nicole answer?', promptFr: 'Ben demande « Und du bist nicht verheiratet ? ». Que répond Nicole ?', options: ['Nein, ich bin nicht verheiratet.', 'Doch, ich bin verheiratet.', 'Ich bin dreißig Jahre alt.'], answer: 0, explain: 'She is single, so she says “Nein, ich bin nicht verheiratet.”', explainFr: 'Elle est célibataire, donc elle dit « Nein, ich bin nicht verheiratet. »', hint: 'Re-read the end of the dialogue.', hintFr: 'Relis la fin du dialogue.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l2-e22', tokens: ['du', 'nicht', 'Arbeitest', 'in Berlin'], answer: ['Arbeitest', 'du', 'nicht', 'in Berlin'], hint: 'Verb first, then du, then nicht.', hintFr: 'Verbe d’abord, puis du, puis nicht.' } },

    { kind: 'wrapup',
      summary: 'You can now say your job, use **sein** and **arbeiten** with every person, say your age and marital status, ask yes/no questions and answer with **ja, nein, doch** and **nicht**. 🎉',
      summaryFr: 'Tu sais maintenant dire ton métier, utiliser **sein** et **arbeiten** avec toutes les personnes, dire ton âge et ta situation familiale, poser des questions fermées et répondre avec **ja, nein, doch** et **nicht**. 🎉',
      card: { title: 'Lesson 5 on one page', titleFr: 'La leçon 5 en une page', sections: [
        { heading: 'Jobs', headingFr: 'Les métiers', rows: [g('Ich bin Lehrer. / Ich bin Lehrerin.', 'I am a teacher (m / f).', 'Je suis enseignant(e).'), g('Ich arbeite als Journalist.', 'I work as a journalist.', 'Je travaille comme journaliste.'), g('Was bist du von Beruf?', 'What do you do for a living?', 'Que fais-tu dans la vie ?')] },
        { heading: 'sein and arbeiten', headingFr: 'sein et arbeiten', rows: [g('ich bin, du bist, er ist, wir sind, ihr seid, sie sind', 'to be', 'être'), g('ich arbeite, du arbeitest, er arbeitet, wir arbeiten', 'to work', 'travailler')] },
        { heading: 'Age and status', headingFr: 'Âge et situation', rows: [g('Wie alt bist du?', 'How old are you?', 'Quel âge as-tu ?'), g('Ich bin fünfundzwanzig Jahre alt.', 'I am twenty-five.', 'J’ai vingt-cinq ans.'), g('verheiratet, ledig, geschieden', 'married, single, divorced', 'marié, célibataire, divorcé')] },
        { heading: 'Questions and no', headingFr: 'Questions et négation', rows: [g('Bist du verheiratet?', 'Are you married?', 'Es-tu marié ?'), g('Ich bin nicht verheiratet.', 'I am not married.', 'Je ne suis pas marié.'), g('Doch, ich bin verheiratet.', 'Yes I am (to a negative question).', 'Si, je le suis.')] },
      ] } },
  ],
};
