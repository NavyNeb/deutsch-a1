import type { Lesson } from '../types';
import { g, line, word } from '../author';

// Lesson 1, rebuilt in the redesigned format: dialogue first, words in groups, complete rule blocks,
// practice straight after each block, and a one-page summary card at the end.
// Ids of the words and exercises that existed before are kept, so saved words and results still match.

export const lektion1: Lesson = {
  id: 'l1', level: 'A1', module: 1, number: 1,
  title: { de: 'Hallo! Ich bin Nicole', en: 'Hello! I am Nicole', fr: 'Salut ! Je suis Nicole' },
  theme: 'Greetings & introducing yourself',
  themeFr: 'Salutations et présentations',
  goals: ['Greet and say goodbye', 'Introduce yourself', 'Say where you are from', 'Use the alphabet to spell your name'],
  goalsFr: ['Saluer et dire au revoir', 'Te présenter', 'Dire d’où tu viens', 'Utiliser l’alphabet pour épeler ton nom'],
  canDo: g('Ich kann grüßen und mich vorstellen.', 'I can greet people and introduce myself.', 'Je sais saluer et me présenter.'),
  steps: [
    { kind: 'intro', title: 'Willkommen! 👋', titleFr: 'Bienvenue ! 👋',
      scene: 'Two people meeting for the first time.', sceneFr: 'Deux personnes qui se rencontrent pour la première fois.',
      goals: ['Say hello and goodbye', 'Introduce yourself', 'Say where you are from', 'Spell your name using the alphabet'],
      goalsFr: ['Dire bonjour et au revoir', 'Te présenter', 'Dire d’où tu viens', 'Épeler ton nom en utilisant l’alphabet'] },

    // ───────────── 1 · Saying hello ─────────────
    { kind: 'chapter', title: 'Hallo sagen', titleFr: 'Dire bonjour',
      blurb: 'Greet a friend and a stranger.', blurbFr: 'Saluer un ami et un inconnu.' },

    { kind: 'situation', title: 'Im Sprachkurs', titleFr: 'Au cours de langue',
      setting: 'Nicole and Ben meet on the first day of their German course.',
      settingFr: 'Nicole et Ben se rencontrent le premier jour de leur cours d’allemand.',
      lines: [
        line('Ben', 'Hallo! Ich bin Ben. Und du?', 'Hello! I’m Ben. And you?', 'Salut ! Je suis Ben. Et toi ?'),
        line('Nicole', 'Hallo, Ben! Ich bin Nicole.', 'Hello, Ben! I’m Nicole.', 'Salut, Ben ! Je suis Nicole.'),
        line('Ben', 'Wie geht’s, Nicole?', 'How are you, Nicole?', 'Comment ça va, Nicole ?'),
        line('Nicole', 'Gut, danke. Und dir?', 'Fine, thanks. And you?', 'Bien, merci. Et toi ?'),
        line('Ben', 'Auch gut. Tschüss, bis morgen!', 'Also fine. Bye, see you tomorrow!', 'Bien aussi. Salut, à demain !'),
        line('Nicole', 'Tschüss!', 'Bye!', 'Salut !'),
      ],
      words: [
        word('l1-hallo', 'Hallo', null, 'Hello (informal)', 'Salut (informel)', ['ha', 'LO'], 'hah-LOH', g('Hallo, ich bin Nicole.', 'Hello, I am Nicole.', 'Salut, je suis Nicole.')),
        word('l1-wiegehts', 'Wie geht’s?', null, 'How are you? (informal)', 'Ça va ? (informel)', ['WIE', 'geht’s'], 'vee GAYTS', g('Hallo, Ben! Wie geht’s?', 'Hello, Ben! How are you?', 'Salut, Ben ! Comment ça va ?')),
        word('l1-gut', 'gut', null, 'good / fine', 'bien / bon', ['GUT'], 'goot', g('Mir geht es gut.', 'I’m doing well.', 'Je vais bien.')),
        word('l1-danke', 'danke', null, 'thanks / thank you', 'merci', ['DAN', 'ke'], 'DAHN-kuh', g('Danke, gut!', 'Thanks, fine!', 'Merci, ça va bien !')),
        word('l1-tschuess', 'Tschüss', null, 'Bye (informal)', 'Salut / Au revoir (informel)', ['TSCHÜSS'], 'chews', g('Tschüss, bis morgen!', 'Bye, see you tomorrow!', 'Salut, à demain !')),
      ] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e13', prompt: 'Ben asks “Wie geht’s?”. What does Nicole answer?', promptFr: 'Ben demande « Wie geht’s ? ». Que répond Nicole ?', options: ['Gut, danke.', 'Tschüss!', 'Ich bin Ben.'], answer: 0, explain: '“Wie geht’s?” asks how you are, so the answer is “Gut, danke.”', explainFr: '« Wie geht’s ? » demande comment tu vas, donc la réponse est « Gut, danke. »', hint: 'It is a question about how she feels.', hintFr: 'C’est une question sur la façon dont elle va.' } },

    { kind: 'situation', title: 'Beim Empfang', titleFr: 'À l’accueil',
      setting: 'Frau Schulz and Herr Meier meet at a business event. They have never met before.',
      settingFr: 'Mme Schulz et M. Meier se rencontrent lors d’un événement professionnel. Ils ne se sont jamais vus.',
      lines: [
        line('Frau Schulz', 'Guten Tag! Mein Name ist Schulz.', 'Good day! My name is Schulz.', 'Bonjour ! Mon nom est Schulz.'),
        line('Herr Meier', 'Guten Tag, Frau Schulz. Ich bin Meier. Freut mich!', 'Good day, Mrs Schulz. I’m Meier. Nice to meet you!', 'Bonjour, Madame Schulz. Je suis Meier. Enchanté !'),
        line('Frau Schulz', 'Freut mich auch. Wie geht es Ihnen?', 'Nice to meet you too. How are you?', 'Enchantée aussi. Comment allez-vous ?'),
        line('Herr Meier', 'Danke, gut. Und Ihnen?', 'Fine, thanks. And you?', 'Bien, merci. Et vous ?'),
        line('Frau Schulz', 'Auch gut, danke. Auf Wiedersehen, Herr Meier!', 'Also fine, thanks. Goodbye, Mr Meier!', 'Bien aussi, merci. Au revoir, Monsieur Meier !'),
        line('Herr Meier', 'Auf Wiedersehen, Frau Schulz!', 'Goodbye, Mrs Schulz!', 'Au revoir, Madame Schulz !'),
      ],
      words: [
        word('l1-gutentag', 'Guten Tag', null, 'Hello / Good day (formal)', 'Bonjour (formel)', ['GU', 'ten', 'TAG'], 'GOO-ten tahk', g('Guten Tag, Frau Meier.', 'Good day, Mrs Meier.', 'Bonjour, Madame Meier.')),
        word('l1-freutmich', 'Freut mich', null, 'Nice to meet you', 'Enchanté(e)', ['FREUT', 'mich'], 'FROYT mikh', g('Guten Tag, ich bin Meier. Freut mich!', 'Good day, I’m Meier. Nice to meet you!', 'Bonjour, je suis Meier. Enchanté !')),
        word('l1-wiegehtesihnen', 'Wie geht es Ihnen?', null, 'How are you? (formal)', 'Comment allez-vous ?', ['WIE', 'geht', 'es', 'IH', 'nen'], 'vee gayt es EE-nen', g('Guten Tag, Frau Schulz. Wie geht es Ihnen?', 'Good day, Mrs Schulz. How are you?', 'Bonjour, Madame Schulz. Comment allez-vous ?')),
        word('l1-aufwiedersehen', 'Auf Wiedersehen', null, 'Goodbye (formal)', 'Au revoir (formel)', ['auf', 'WIE', 'der', 'seh', 'en'], 'owf VEE-der-zay-en', g('Auf Wiedersehen, Frau Schulz!', 'Goodbye, Mrs Schulz!', 'Au revoir, Madame Schulz !')),
      ] },

    { kind: 'grammar', note: {
      id: 'l1-du-sie', title: 'du or Sie? Greeting people', titleFr: 'du ou Sie ? Saluer les gens',
      lead: 'Pick your greeting by who you talk to, and by the time of day.',
      leadFr: 'Choisis ta salutation selon la personne à qui tu parles et le moment de la journée.',
      explanationMd: 'German has two words for “you”. **du** is for friends, family, children and people you meet in a relaxed setting. **Sie** (always with a capital S) is for strangers, officials and anyone you would call Mr or Mrs. When you are not sure, use **Sie**.\n\nEach style has its own greetings and goodbyes, and the greeting also changes with the time of day.',
      explanationMdFr: 'L’allemand a deux façons de dire « tu / vous ». **du** s’emploie avec les amis, la famille, les enfants et dans un cadre détendu. **Sie** (toujours avec un S majuscule) s’emploie avec les inconnus, les administrations et toute personne que tu appellerais Monsieur ou Madame. Dans le doute, utilise **Sie**.\n\nChaque style a ses propres salutations et au revoir, et la salutation change aussi selon le moment de la journée.',
      tables: [{
        title: 'Greeting by time of day', titleFr: 'La salutation selon le moment de la journée',
        headers: ['Time', 'You say', 'Meaning'], headersFr: ['Moment', 'On dit', 'Sens'],
        rows: [['until about 10 o’clock', 'Guten Morgen', 'Good morning'], ['during the day', 'Guten Tag', 'Good day / hello'], ['in the evening', 'Guten Abend', 'Good evening'], ['before bed', 'Gute Nacht', 'Good night']],
        rowsFr: [['jusqu’à 10 h environ', 'Guten Morgen', 'Bonjour (le matin)'], ['dans la journée', 'Guten Tag', 'Bonjour'], ['le soir', 'Guten Abend', 'Bonsoir'], ['avant de dormir', 'Gute Nacht', 'Bonne nuit']],
        highlightCol: 1,
      }],
      contrast: {
        a: { label: 'du — informal', labelFr: 'du — informel', note: 'friends, family, classmates', noteFr: 'amis, famille, camarades',
          examples: [g('Hallo! Wie geht’s?', 'Hello! How are you?', 'Salut ! Comment ça va ?'), g('Und dir?', 'And you?', 'Et toi ?'), g('Tschüss!', 'Bye!', 'Salut !')] },
        b: { label: 'Sie — formal', labelFr: 'Sie — formel', note: 'strangers, teachers, officials', noteFr: 'inconnus, professeurs, administrations',
          examples: [g('Guten Tag! Wie geht es Ihnen?', 'Good day! How are you?', 'Bonjour ! Comment allez-vous ?'), g('Und Ihnen?', 'And you?', 'Et vous ?'), g('Auf Wiedersehen!', 'Goodbye!', 'Au revoir !')] },
      },
      examples: [
        g('Guten Morgen, Frau Schulz!', 'Good morning, Mrs Schulz!', 'Bonjour, Madame Schulz !'),
        g('Guten Tag, Herr Meier.', 'Good day, Mr Meier.', 'Bonjour, Monsieur Meier.'),
        g('Guten Abend, Frau Roth.', 'Good evening, Mrs Roth.', 'Bonsoir, Madame Roth.'),
        g('Gute Nacht, Ben!', 'Good night, Ben!', 'Bonne nuit, Ben !'),
        g('Hallo, Nicole! Wie geht’s?', 'Hello, Nicole! How are you?', 'Salut, Nicole ! Comment ça va ?'),
        g('Danke, gut. Und Ihnen?', 'Fine, thanks. And you?', 'Bien, merci. Et vous ?'),
        g('Tschüss, bis morgen!', 'Bye, see you tomorrow!', 'Salut, à demain !'),
      ],
      mistakes: [
        { wrong: 'Gute Tag, Frau Schulz!', right: 'Guten Tag, Frau Schulz!', why: 'It is Guten Morgen, Guten Tag, Guten Abend, all with -en. Only Gute Nacht ends in -e.', whyFr: 'On dit Guten Morgen, Guten Tag, Guten Abend, tous en -en. Seul Gute Nacht se termine en -e.' },
        { wrong: 'Tschüss, Herr Meier!', right: 'Auf Wiedersehen, Herr Meier!', why: 'Tschüss is for friends. With someone you call Sie, say Auf Wiedersehen.', whyFr: 'Tschüss est pour les amis. Avec une personne que tu vouvoies, dis Auf Wiedersehen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e2', prompt: 'Which is a formal greeting?', promptFr: 'Laquelle est une salutation formelle ?', options: ['Hallo', 'Guten Tag', 'Tschüss'], answer: 1, explain: '“Guten Tag” is the formal daytime greeting.', explainFr: '« Guten Tag » est la salutation formelle de la journée.', hint: 'Which one would you use with a stranger, not a friend?', hintFr: 'Laquelle utiliserais-tu avec un inconnu, pas avec un ami ?' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e14', prompt: 'It is 8 p.m. You meet your neighbour, Frau Braun. What do you say?', promptFr: 'Il est 20 h. Tu croises ta voisine, Frau Braun. Que dis-tu ?', options: ['Guten Morgen, Frau Braun!', 'Guten Abend, Frau Braun!', 'Gute Nacht, Frau Braun!'], answer: 1, explain: 'In the evening you say “Guten Abend”. “Gute Nacht” is only for going to bed.', explainFr: 'Le soir, on dit « Guten Abend ». « Gute Nacht » se dit seulement avant de dormir.', hint: 'Look at the time of day.', hintFr: 'Regarde le moment de la journée.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e15', prompt: 'Guten ___, Herr Meier! (it is 7 a.m.)', promptFr: 'Guten ___, Herr Meier ! (il est 7 h)', answer: 'Morgen', hint: 'Greeting for the morning', hintFr: 'La salutation du matin' } },

    // ───────────── 2 · Saying who you are ─────────────
    { kind: 'chapter', title: 'Sagen, wer du bist', titleFr: 'Dire qui tu es',
      blurb: 'Say your name with ich bin and ich heiße.', blurbFr: 'Dire ton nom avec ich bin et ich heiße.' },

    { kind: 'situation', title: 'Wie heißen Sie?', titleFr: 'Comment vous appelez-vous ?',
      setting: 'Nicole registers for the course. Frau Roth works at the front desk.',
      settingFr: 'Nicole s’inscrit au cours. Mme Roth travaille à l’accueil.',
      lines: [
        line('Frau Roth', 'Guten Tag! Ich bin Frau Roth. Wie heißen Sie?', 'Good day! I’m Mrs Roth. What is your name?', 'Bonjour ! Je suis Mme Roth. Comment vous appelez-vous ?'),
        line('Nicole', 'Guten Tag, Frau Roth. Ich heiße Nicole Nkemba.', 'Good day, Mrs Roth. My name is Nicole Nkemba.', 'Bonjour, Madame Roth. Je m’appelle Nicole Nkemba.'),
        line('Frau Roth', 'Nicole ist Ihr Vorname, und Nkemba ist Ihr Nachname?', 'Nicole is your first name, and Nkemba is your surname?', 'Nicole est votre prénom, et Nkemba est votre nom de famille ?'),
        line('Nicole', 'Ja, genau. Mein Vorname ist Nicole.', 'Yes, exactly. My first name is Nicole.', 'Oui, exactement. Mon prénom est Nicole.'),
      ],
      words: [
        word('l1-heissen', 'heißen', null, 'to be called', 's’appeler', ['HEI', 'ßen'], 'HIGH-sen', g('Wie heißt du?', 'What is your name?', 'Comment tu t’appelles ?')),
        word('l1-vorname', 'der Vorname', 'der', 'the first name', 'le prénom', ['VOR', 'na', 'me'], 'dair FOR-nah-muh', g('Mein Vorname ist Nicole.', 'My first name is Nicole.', 'Mon prénom est Nicole.')),
        word('l1-nachname', 'der Nachname', 'der', 'the surname', 'le nom de famille', ['NACH', 'na', 'me'], 'dair NAKH-nah-muh', g('Mein Nachname ist Nkemba.', 'My surname is Nkemba.', 'Mon nom de famille est Nkemba.')),
      ] },

    { kind: 'wordgroup', title: 'Namen, Titel und Antworten', titleFr: 'Noms, titres et réponses',
      note: 'Always learn a noun with its article: der = blue square, die = pink circle, das = yellow triangle.',
      noteFr: 'Apprends toujours un nom avec son article : der = carré bleu, die = cercle rose, das = triangle jaune.',
      items: [
        word('l1-name', 'der Name', 'der', 'the name', 'le nom', ['NA', 'me'], 'dair NAH-muh', g('Mein Name ist Nicole.', 'My name is Nicole.', 'Mon nom est Nicole.')),
        word('l1-herr', 'der Herr', 'der', 'Mr / the gentleman', 'Monsieur', ['HERR'], 'dair HEHR', g('Guten Tag, Herr Meier.', 'Good day, Mr Meier.', 'Bonjour, Monsieur Meier.')),
        word('l1-frau', 'die Frau', 'die', 'Mrs / the woman', 'Madame', ['FRAU'], 'dee FROW', g('Guten Tag, Frau Schulz.', 'Good day, Mrs Schulz.', 'Bonjour, Madame Schulz.')),
        word('l1-ja', 'ja', null, 'yes', 'oui', ['JA'], 'yah', g('Ja, ich bin Nicole.', 'Yes, I am Nicole.', 'Oui, je suis Nicole.')),
        word('l1-nein', 'nein', null, 'no', 'non', ['NEIN'], 'nine', g('Nein, ich bin Ben.', 'No, I am Ben.', 'Non, je suis Ben.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l1-sein', title: 'Saying who you are: sein and heißen', titleFr: 'Dire qui tu es : sein et heißen',
      lead: 'Use ich bin … or ich heiße … to give your name. The verb always sits in position 2.',
      leadFr: 'Utilise ich bin … ou ich heiße … pour dire ton nom. Le verbe est toujours en position 2.',
      explanationMd: '**sein** (to be) is irregular: learn its forms by heart. **heißen** (to be called) is regular, except that **du** and **er/sie/es** share the form **heißt**.\n\nIn a statement the **verb is the second item**: first the subject (or another starter), then the verb.',
      explanationMdFr: '**sein** (être) est irrégulier : apprends ses formes par cœur. **heißen** (s’appeler) est régulier, sauf que **du** et **er/sie/es** partagent la forme **heißt**.\n\nDans une phrase affirmative, le **verbe est le deuxième élément** : d’abord le sujet (ou un autre début de phrase), puis le verbe.',
      tables: [
        { title: 'sein (to be)', titleFr: 'sein (être)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'],
          rows: [['bin', 'bist', 'ist', 'sind', 'seid', 'sind']], rowsFr: [['bin', 'bist', 'ist', 'sind', 'seid', 'sind']] },
        { title: 'heißen (to be called)', titleFr: 'heißen (s’appeler)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'],
          rows: [['heiße', 'heißt', 'heißt', 'heißen', 'heißt', 'heißen']], rowsFr: [['heiße', 'heißt', 'heißt', 'heißen', 'heißt', 'heißen']] },
      ],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'Nicole.', role: 'other' }], en: 'I am Nicole.', fr: 'Je suis Nicole.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'heiße', role: 'verb' }, { text: 'Nicole Nkemba.', role: 'other' }], en: 'My name is Nicole Nkemba. (literally: I am called …)', fr: 'Je m’appelle Nicole Nkemba. (littéralement : je suis appelée …)' },
        { parts: [{ text: 'Wie', role: 'other' }, { text: 'heißt', role: 'verb' }, { text: 'du?', role: 'subject' }], en: 'What is your name?', fr: 'Comment tu t’appelles ?' },
      ],
      contrast: {
        a: { label: 'Ich bin …', labelFr: 'Ich bin …', note: 'I am … (a name, a job, who someone is)', noteFr: 'je suis … (un nom, un métier, qui est quelqu’un)',
          examples: [g('Ich bin Nicole.', 'I am Nicole.', 'Je suis Nicole.'), g('Er ist Ben.', 'He is Ben.', 'Il est Ben.')] },
        b: { label: 'Ich heiße …', labelFr: 'Ich heiße …', note: 'I am called … (only for names)', noteFr: 'je m’appelle … (seulement pour les noms)',
          examples: [g('Ich heiße Nicole.', 'My name is Nicole.', 'Je m’appelle Nicole.'), g('Wie heißt du?', 'What is your name?', 'Comment tu t’appelles ?')] },
      },
      examples: [
        g('Ich bin Nicole.', 'I am Nicole.', 'Je suis Nicole.'),
        g('Du bist Ben.', 'You are Ben.', 'Tu es Ben.'),
        g('Sie ist Frau Schulz.', 'She is Mrs Schulz.', 'Elle est Mme Schulz.'),
        g('Wir sind im Kurs.', 'We are in the course.', 'Nous sommes dans le cours.'),
        g('Ihr seid Freunde.', 'You are friends.', 'Vous êtes amis.'),
        g('Sie sind Herr Meier.', 'You are Mr Meier.', 'Vous êtes M. Meier.'),
        g('Ich heiße Nicole.', 'My name is Nicole.', 'Je m’appelle Nicole.'),
      ],
      mistakes: [
        { wrong: 'Ich bist Nicole.', right: 'Ich bin Nicole.', why: 'Every person has its own form: ich bin, du bist, er ist.', whyFr: 'Chaque personne a sa propre forme : ich bin, du bist, er ist.' },
        { wrong: 'Ich bin heiße Nicole.', right: 'Ich heiße Nicole.', why: 'Use one verb only: bin or heiße, never both.', whyFr: 'Utilise un seul verbe : bin ou heiße, jamais les deux.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e1', prompt: 'Ich ___ Nicole. (sein)', promptFr: 'Ich ___ Nicole. (sein)', answer: 'bin', hint: 'first person singular of sein', hintFr: 'première personne du singulier de sein' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e12', prompt: 'Wie ___ du? (heißen)', promptFr: 'Wie ___ du ? (heißen)', answer: 'heißt', hint: 'du-form of heißen', hintFr: 'forme du de heißen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e16', prompt: 'Wir ___ im Kurs.', promptFr: 'Wir ___ im Kurs.', options: ['bin', 'sind', 'seid'], answer: 1, explain: 'wir (we) goes with sind.', explainFr: 'wir (nous) va avec sind.', hint: 'Look at the table: which form goes with wir?', hintFr: 'Regarde le tableau : quelle forme va avec wir ?' } },

    // ───────────── 3 · Saying where you are from ─────────────
    { kind: 'chapter', title: 'Sagen, woher du kommst', titleFr: 'Dire d’où tu viens',
      blurb: 'Ask and answer with Woher kommst du?', blurbFr: 'Demander et répondre avec Woher kommst du ?' },

    { kind: 'situation', title: 'Woher kommst du?', titleFr: 'D’où viens-tu ?',
      setting: 'Nicole and Ben talk during the break.', settingFr: 'Nicole et Ben discutent pendant la pause.',
      lines: [
        line('Ben', 'Woher kommst du, Nicole?', 'Where are you from, Nicole?', 'D’où viens-tu, Nicole ?'),
        line('Nicole', 'Ich komme aus Kamerun. Und du?', 'I come from Cameroon. And you?', 'Je viens du Cameroun. Et toi ?'),
        line('Ben', 'Ich komme aus Deutschland, aus Hamburg.', 'I come from Germany, from Hamburg.', 'Je viens d’Allemagne, de Hambourg.'),
        line('Nicole', 'Und wo wohnst du?', 'And where do you live?', 'Et où habites-tu ?'),
        line('Ben', 'Ich wohne in Berlin.', 'I live in Berlin.', 'J’habite à Berlin.'),
      ],
      words: [
        word('l1-woher', 'woher', null, 'where from', 'd’où', ['wo', 'HER'], 'voh-HAIR', g('Woher kommst du?', 'Where are you from?', 'D’où viens-tu ?')),
        word('l1-kommen-aus', 'kommen aus', null, 'to come from', 'venir de', ['KOM', 'men', 'AUS'], 'KOM-en ows', g('Ich komme aus Kamerun.', 'I come from Cameroon.', 'Je viens du Cameroun.')),
        word('l1-wohnen', 'wohnen', null, 'to live (in a place)', 'habiter', ['WOH', 'nen'], 'VOH-nen', g('Ich wohne in Berlin.', 'I live in Berlin.', 'J’habite à Berlin.')),
        word('l1-kamerun', 'Kamerun', null, 'Cameroon', 'le Cameroun', ['ka', 'me', 'RUN'], 'KAH-meh-roon', g('Kamerun ist mein Land.', 'Cameroon is my country.', 'Le Cameroun est mon pays.')),
        word('l1-deutschland', 'Deutschland', null, 'Germany', 'l’Allemagne', ['DEUTSCH', 'land'], 'DOYTCH-lahnt', g('Er kommt aus Deutschland.', 'He comes from Germany.', 'Il vient d’Allemagne.')),
      ] },

    { kind: 'wordgroup', title: 'Länder', titleFr: 'Les pays',
      note: 'Most country names have no article. A few do: die Schweiz.', noteFr: 'La plupart des pays n’ont pas d’article. Quelques-uns en ont un : die Schweiz.',
      items: [
        word('l1-land', 'das Land', 'das', 'the country', 'le pays', ['LAND'], 'dahs LAHNT', g('Deutschland ist ein Land in Europa.', 'Germany is a country in Europe.', 'L’Allemagne est un pays d’Europe.')),
        word('l1-oesterreich', 'Österreich', null, 'Austria', 'l’Autriche', ['ÖS', 'ter', 'reich'], null, g('Sie kommt aus Österreich.', 'She comes from Austria.', 'Elle vient d’Autriche.')),
        word('l1-schweiz', 'die Schweiz', 'die', 'Switzerland', 'la Suisse', ['SCHWEIZ'], 'dee SHVITES', g('Er kommt aus der Schweiz.', 'He comes from Switzerland.', 'Il vient de Suisse.')),
        word('l1-frankreich', 'Frankreich', null, 'France', 'la France', ['FRANK', 'reich'], null, g('Ich komme aus Frankreich.', 'I come from France.', 'Je viens de France.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l1-wfragen', title: 'W-questions and “kommen”', titleFr: 'Les questions en W et « kommen »',
      lead: 'Ask with a question word first, then the verb. The verb is always second.',
      leadFr: 'Pose la question avec le mot interrogatif d’abord, puis le verbe. Le verbe est toujours en deuxième position.',
      explanationMd: 'A **W-question** starts with a question word (most of them start with **W**). The **verb comes second**, right after it, and the subject follows: **Woher kommst du?**\n\nTo answer, use the same verb: **Ich komme aus Kamerun.** After **aus** put the country or town you come from.\n\nA **yes/no question** has no question word, and the verb comes **first**.',
      explanationMdFr: 'Une **question en W** commence par un mot interrogatif (la plupart commencent par **W**). Le **verbe vient en deuxième**, juste après, puis le sujet : **Woher kommst du ?**\n\nPour répondre, reprends le même verbe : **Ich komme aus Kamerun.** Après **aus**, mets le pays ou la ville d’origine.\n\nUne **question fermée** (oui/non) n’a pas de mot interrogatif, et le verbe vient **en premier**.',
      tables: [
        { title: 'Four W-words', titleFr: 'Quatre mots en W', headers: ['W-word', 'Asks for', 'Example'], headersFr: ['Mot en W', 'Demande', 'Exemple'],
          rows: [['Wie?', 'how / what (a name)', 'Wie heißt du?'], ['Woher?', 'where from', 'Woher kommst du?'], ['Wo?', 'where', 'Wo wohnst du?'], ['Wer?', 'who', 'Wer ist das?']],
          rowsFr: [['Wie ?', 'comment', 'Wie heißt du?'], ['Woher ?', 'd’où', 'Woher kommst du?'], ['Wo ?', 'où', 'Wo wohnst du?'], ['Wer ?', 'qui', 'Wer ist das?']], highlightCol: 0 },
        { title: 'kommen (to come)', titleFr: 'kommen (venir)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'],
          rows: [['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen']], rowsFr: [['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen']] },
      ],
      anatomy: [
        { parts: [{ text: 'Woher', role: 'place' }, { text: 'kommst', role: 'verb' }, { text: 'du?', role: 'subject' }], en: 'Where are you from?', fr: 'D’où viens-tu ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'komme', role: 'verb' }, { text: 'aus Kamerun.', role: 'place' }], en: 'I come from Cameroon.', fr: 'Je viens du Cameroun.' },
        { parts: [{ text: 'Wo', role: 'place' }, { text: 'wohnst', role: 'verb' }, { text: 'du?', role: 'subject' }], en: 'Where do you live?', fr: 'Où habites-tu ?' },
      ],
      contrast: {
        a: { label: 'W-question', labelFr: 'Question en W', note: 'question word first, verb second', noteFr: 'mot interrogatif d’abord, verbe en deuxième',
          examples: [g('Woher kommst du?', 'Where are you from?', 'D’où viens-tu ?'), g('Wo wohnst du?', 'Where do you live?', 'Où habites-tu ?')] },
        b: { label: 'Yes/no question', labelFr: 'Question oui/non', note: 'verb first', noteFr: 'verbe en premier',
          examples: [g('Kommst du aus Kamerun?', 'Are you from Cameroon?', 'Viens-tu du Cameroun ?'), g('Wohnst du in Berlin?', 'Do you live in Berlin?', 'Habites-tu à Berlin ?')] },
      },
      examples: [
        g('Woher kommst du?', 'Where are you from?', 'D’où viens-tu ?'),
        g('Ich komme aus Kamerun.', 'I come from Cameroon.', 'Je viens du Cameroun.'),
        g('Woher kommt er?', 'Where is he from?', 'D’où vient-il ?'),
        g('Er kommt aus Österreich.', 'He comes from Austria.', 'Il vient d’Autriche.'),
        g('Wo wohnst du?', 'Where do you live?', 'Où habites-tu ?'),
        g('Ich wohne in Berlin.', 'I live in Berlin.', 'J’habite à Berlin.'),
        g('Kommst du aus Deutschland?', 'Are you from Germany?', 'Viens-tu d’Allemagne ?'),
        g('Sie kommt aus der Schweiz.', 'She comes from Switzerland.', 'Elle vient de Suisse.'),
      ],
      mistakes: [
        { wrong: 'Woher du kommst?', right: 'Woher kommst du?', why: 'After the question word comes the verb, not the subject.', whyFr: 'Après le mot interrogatif vient le verbe, pas le sujet.' },
        { wrong: 'Ich komme von Kamerun.', right: 'Ich komme aus Kamerun.', why: 'For the country or town you come from, say aus, not von.', whyFr: 'Pour le pays ou la ville d’origine, on dit aus, pas von (même si le français dit « de »).' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l1-e3', tokens: ['heißt', 'Wie', 'du'], answer: ['Wie', 'heißt', 'du'], hint: 'This is a question: the question word comes first, then the verb.', hintFr: 'C’est une question : le mot interrogatif vient en premier, puis le verbe.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e6', prompt: 'Ich ___ aus Kamerun. (kommen)', promptFr: 'Ich ___ aus Kamerun. (kommen)', answer: 'komme', hint: 'first person singular of kommen', hintFr: 'première personne du singulier de kommen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e7', prompt: 'How do you ask someone where they are from?', promptFr: 'Comment demande-t-on à quelqu’un d’où il vient ?', options: ['Wie heißt du?', 'Woher kommst du?', 'Wie buchstabiert man das?'], answer: 1, explain: '“Woher kommst du?” means “Where are you from?”', explainFr: '« Woher kommst du ? » signifie « D’où viens-tu ? »', hint: '“Woher” is the W-word that asks about a place of origin.', hintFr: '« Woher » est le mot en W qui demande une provenance.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l1-e4', prompt: 'Listen. Where is Nicole from?', promptFr: 'Écoute. D’où vient Nicole ?', audio: { ttsText: 'Hallo! Ich heiße Nicole. Ich komme aus Kamerun.' }, options: ['Cameroon', 'Germany', 'Austria'], optionsFr: ['Cameroun', 'Allemagne', 'Autriche'], answer: 0, hint: 'Listen for the country named right after “kommen aus”.', hintFr: 'Écoute le pays nommé juste après « kommen aus ».' } },

    // ───────────── 4 · Spelling your name ─────────────
    { kind: 'chapter', title: 'Deinen Namen buchstabieren', titleFr: 'Épeler ton nom',
      blurb: 'Learn the letters and spell aloud.', blurbFr: 'Apprendre les lettres et épeler à voix haute.' },

    { kind: 'situation', title: 'An der Rezeption', titleFr: 'À la réception',
      setting: 'Nicole gives her name at the language school.', settingFr: 'Nicole donne son nom à l’école de langues.',
      lines: [
        line('Rezeption', 'Wie ist Ihr Name, bitte?', 'What is your name, please?', 'Quel est votre nom, s’il vous plaît ?'),
        line('Nicole', 'Nkemba. Nicole Nkemba.', 'Nkemba. Nicole Nkemba.', 'Nkemba. Nicole Nkemba.'),
        line('Rezeption', 'Wie buchstabiert man das?', 'How do you spell that?', 'Comment ça s’épelle ?'),
        line('Nicole', 'N-K-E-M-B-A.', 'N-K-E-M-B-A.', 'N-K-E-M-B-A.'),
        line('Rezeption', 'Danke, Frau Nkemba. Willkommen!', 'Thank you, Mrs Nkemba. Welcome!', 'Merci, Madame Nkemba. Bienvenue !'),
      ],
      words: [
        word('l1-buchstabieren', 'buchstabieren', null, 'to spell', 'épeler', ['buch', 'sta', 'BIE', 'ren'], 'bookh-shtah-BEE-ren', g('Wie buchstabiert man das?', 'How do you spell that?', 'Comment ça s’épelle ?')),
        word('l1-bitte', 'bitte', null, 'please / you’re welcome', 's’il vous plaît / de rien', ['BIT', 'te'], 'BIT-uh', g('Noch einmal, bitte.', 'Once more, please.', 'Encore une fois, s’il vous plaît.')),
        word('l1-willkommen', 'willkommen', null, 'welcome', 'bienvenue', ['will', 'KOM', 'men'], 'vil-KOM-en', g('Willkommen in Berlin!', 'Welcome to Berlin!', 'Bienvenue à Berlin !')),
      ] },

    { kind: 'grammar', note: {
      id: 'l1-buchstabieren-note', title: 'The German alphabet', titleFr: 'L’alphabet allemand',
      lead: 'Spelling your name is the first thing people ask in Germany. Learn the letter names.',
      leadFr: 'Épeler ton nom est la première chose qu’on te demande en Allemagne. Apprends le nom des lettres.',
      explanationMd: 'German uses the same 26 letters as English, plus **ä, ö, ü** (Umlaute) and **ß** (the “sharp s”). Each letter has a German **name**. The tables show how to say them.\n\nTo ask for a spelling say **Wie buchstabiert man das?**, and to ask for a repeat say **Noch einmal, bitte.**',
      explanationMdFr: 'L’allemand utilise les mêmes 26 lettres que le français, plus **ä, ö, ü** (Umlaute) et **ß** (le « s dur »). Chaque lettre a un **nom** allemand. Les tableaux montrent comment les dire.\n\nPour demander une épellation, dis **Wie buchstabiert man das ?** ; pour demander de répéter, dis **Noch einmal, bitte.**',
      tables: [
        { title: 'A – G', titleFr: 'A – G', headers: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], headersFr: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], rows: [['ah', 'beh', 'tseh', 'deh', 'eh', 'eff', 'geh']], rowsFr: [['ah', 'beh', 'tseh', 'deh', 'eh', 'eff', 'geh']] },
        { title: 'H – N', titleFr: 'H – N', headers: ['H', 'I', 'J', 'K', 'L', 'M', 'N'], headersFr: ['H', 'I', 'J', 'K', 'L', 'M', 'N'], rows: [['hah', 'ee', 'yot', 'kah', 'ell', 'emm', 'enn']], rowsFr: [['hah', 'ee', 'yot', 'kah', 'ell', 'emm', 'enn']] },
        { title: 'O – T', titleFr: 'O – T', headers: ['O', 'P', 'Q', 'R', 'S', 'T'], headersFr: ['O', 'P', 'Q', 'R', 'S', 'T'], rows: [['oh', 'peh', 'koo', 'err', 'ess', 'teh']], rowsFr: [['oh', 'peh', 'koo', 'err', 'ess', 'teh']] },
        { title: 'U – Z', titleFr: 'U – Z', headers: ['U', 'V', 'W', 'X', 'Y', 'Z'], headersFr: ['U', 'V', 'W', 'X', 'Y', 'Z'], rows: [['oo', 'fow', 'veh', 'iks', 'ÜP-si-lon', 'tset']], rowsFr: [['oo', 'fow', 'veh', 'iks', 'ÜP-si-lon', 'tset']] },
        { title: 'Special letters', titleFr: 'Lettres spéciales', headers: ['Ä', 'Ö', 'Ü', 'ß'], headersFr: ['Ä', 'Ö', 'Ü', 'ß'], rows: [['a-Umlaut', 'o-Umlaut', 'u-Umlaut', 'Eszett']], rowsFr: [['a-Umlaut', 'o-Umlaut', 'u-Umlaut', 'Eszett']] },
      ],
      anatomy: [
        { parts: [{ text: 'Wie', role: 'other' }, { text: 'buchstabiert', role: 'verb' }, { text: 'man', role: 'subject' }, { text: 'das?', role: 'other' }], en: 'How do you spell that?', fr: 'Comment ça s’épelle ?' },
      ],
      examples: [
        g('Ich heiße Ben: B-E-N.', 'My name is Ben: B-E-N.', 'Je m’appelle Ben : B-E-N.'),
        g('Mein Nachname ist Meier: M-E-I-E-R.', 'My surname is Meier: M-E-I-E-R.', 'Mon nom de famille est Meier : M-E-I-E-R.'),
        g('Schulz: S-C-H-U-L-Z.', 'Schulz: S-C-H-U-L-Z.', 'Schulz : S-C-H-U-L-Z.'),
        g('Müller: M-Ü-L-L-E-R.', 'Müller: M-Ü-L-L-E-R.', 'Müller : M-Ü-L-L-E-R.'),
        g('Wie buchstabiert man das?', 'How do you spell that?', 'Comment ça s’épelle ?'),
        g('Noch einmal, bitte.', 'Once more, please.', 'Encore une fois, s’il vous plaît.'),
        g('Können Sie das bitte buchstabieren?', 'Can you spell that, please?', 'Pouvez-vous l’épeler, s’il vous plaît ?'),
      ],
      mistakes: [
        { wrong: 'Mein Name ist Meier: M-A-I-E-R.', right: 'Mein Name ist Meier: M-E-I-E-R.', why: 'The sound “eye” is written E-I. The letter I is always said “ee”, never “eye”.', whyFr: 'Le son « aïe » s’écrit E-I. La lettre I se dit toujours « i », jamais « aï ».' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e9', prompt: 'How do you ask someone to spell a word in German?', promptFr: 'Comment demande-t-on à quelqu’un d’épeler un mot en allemand ?', options: ['Wie buchstabiert man das?', 'Woher kommst du?', 'Guten Tag!'], answer: 0, explain: '“Wie buchstabiert man das?” asks someone to spell a word letter by letter.', explainFr: '« Wie buchstabiert man das ? » demande à quelqu’un d’épeler un mot lettre par lettre.', hint: 'Look for the option that contains the verb “buchstabieren” (to spell).', hintFr: 'Cherche l’option qui contient le verbe « buchstabieren » (épeler).' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l1-e10', prompt: 'Können Sie das bitte ___? (buchstabieren)', promptFr: 'Können Sie das bitte ___ ? (buchstabieren)', answer: 'buchstabieren', hint: 'infinitive: to spell', hintFr: 'infinitif : épeler' } },

    { kind: 'pronunciation', focus: 'The “ü” sound in Tschüss and the letter ß in heißen', focusFr: 'Le son « ü » dans Tschüss et la lettre ß dans heißen', items: [
      { id: 'l1-tschuess-pron', german: 'Tschüss', english: 'Bye', french: 'Salut', gender: null, syllables: ['TSCHÜSS'], pronunciation: 'chews', example: { de: 'Tschüss!', en: 'Bye!', fr: 'Salut !' } },
      { id: 'l1-heissen-pron', german: 'heißen', english: 'to be called', french: 's’appeler', gender: null, syllables: ['HEI', 'ßen'], pronunciation: 'HIGH-ssen', example: { de: 'Ich heiße Nicole.', en: 'My name is Nicole. (lit. I am called Nicole)', fr: 'Je m’appelle Nicole. (litt. je suis appelée Nicole)' } },
    ] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'match', id: 'l1-e5', pairs: [{ de: 'Hallo', en: 'Hello', fr: 'Salut' }, { de: 'Tschüss', en: 'Bye', fr: 'Au revoir' }, { de: 'Name', en: 'Name', fr: 'Nom' }], hint: 'Think about when you would say each word: arriving, leaving, or introducing yourself.', hintFr: 'Pense au moment où tu dirais chaque mot : en arrivant, en partant, ou en te présentant.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l1-e8', tokens: ['aus', 'komme', 'Kamerun', 'Ich'], answer: ['Ich', 'komme', 'aus', 'Kamerun'], hint: 'This is a statement: subject first, then the verb in second position.', hintFr: 'C’est une affirmation : le sujet d’abord, puis le verbe en deuxième position.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l1-e18', tokens: ['heiße', 'Ich', 'Nicole'], answer: ['Ich', 'heiße', 'Nicole'], hint: 'Subject first, then the verb.', hintFr: 'Le sujet d’abord, puis le verbe.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l1-e17', prompt: 'You meet your teacher, Herr Meier, at 9 a.m. What do you say?', promptFr: 'Tu rencontres ton professeur, Herr Meier, à 9 h. Que dis-tu ?', options: ['Tschüss, Meier!', 'Guten Morgen, Herr Meier!', 'Hallo Meier, wie geht’s?'], answer: 1, explain: 'A teacher is a “Sie” person, and in the morning you say “Guten Morgen”.', explainFr: 'Un professeur se vouvoie (Sie), et le matin on dit « Guten Morgen ».', hint: 'Formal and morning.', hintFr: 'Formel, et le matin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l1-e11', prompt: 'Listen. What is the man’s name?', promptFr: 'Écoute. Quel est le nom de l’homme ?', audio: { ttsText: 'Guten Tag! Ich bin Herr Meier. Ich komme aus Deutschland. Tschüss!' }, options: ['Herr Meier', 'Herr Fischer', 'Frau Meier'], answer: 0, hint: 'Listen for the name right after “Ich bin”.', hintFr: 'Écoute le nom juste après « Ich bin ».' } },

    { kind: 'wrapup',
      summary: 'You can now greet people (formal and informal), introduce yourself with **ich bin** and **ich heiße**, say where you come from with **kommen aus**, and spell your name. 🎉',
      summaryFr: 'Tu sais maintenant saluer les gens (formel et informel), te présenter avec **ich bin** et **ich heiße**, dire d’où tu viens avec **kommen aus**, et épeler ton nom. 🎉',
      card: { title: 'Lesson 1 on one page', titleFr: 'La leçon 1 en une page', sections: [
        { heading: 'Greet', headingFr: 'Saluer', rows: [
          g('Hallo! / Tschüss!', 'Hello! / Bye! (friends)', 'Salut ! (amis)'),
          g('Guten Tag! / Auf Wiedersehen!', 'Hello! / Goodbye! (formal)', 'Bonjour ! / Au revoir ! (formel)'),
          g('Wie geht’s? / Wie geht es Ihnen?', 'How are you? (du / Sie)', 'Ça va ? / Comment allez-vous ?'),
        ] },
        { heading: 'Say who you are', headingFr: 'Dire qui tu es', rows: [
          g('Ich bin Nicole.', 'I am Nicole.', 'Je suis Nicole.'),
          g('Ich heiße Nicole.', 'My name is Nicole.', 'Je m’appelle Nicole.'),
          g('Wie heißt du? / Wie heißen Sie?', 'What is your name? (du / Sie)', 'Comment tu t’appelles ? / Comment vous appelez-vous ?'),
        ] },
        { heading: 'Say where you are from', headingFr: 'Dire d’où tu viens', rows: [
          g('Woher kommst du?', 'Where are you from?', 'D’où viens-tu ?'),
          g('Ich komme aus Kamerun.', 'I come from Cameroon.', 'Je viens du Cameroun.'),
          g('Ich wohne in Berlin.', 'I live in Berlin.', 'J’habite à Berlin.'),
        ] },
        { heading: 'Spell', headingFr: 'Épeler', rows: [
          g('Wie buchstabiert man das?', 'How do you spell that?', 'Comment ça s’épelle ?'),
          g('Noch einmal, bitte.', 'Once more, please.', 'Encore une fois, s’il vous plaît.'),
        ] },
      ] } },
  ],
};
