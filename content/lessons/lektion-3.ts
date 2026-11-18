import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion3: Lesson = {
  id: 'l3', level: 'A1', module: 1, number: 6,
  title: { de: 'Das ist meine Mutter', en: 'This is my mother', fr: 'C’est ma mère' },
  theme: 'Family, languages & numbers 100–1,000,000', themeFr: 'La famille, les langues et les nombres de 100 à 1 000 000',
  goals: ['Talk about your family', 'Say which languages you speak', 'Use possessives (mein/dein)', 'Use the definite article with the right gender'], goalsFr: ['Parler de ta famille', 'Dire quelles langues tu parles', 'Utiliser les possessifs (mein/dein)', 'Utiliser l’article défini avec le bon genre'],
  canDo: g('Ich kann über meine Familie und die Sprachen sprechen, die ich spreche.', 'I can talk about my family and the languages I speak.', 'Je sais parler de ma famille et des langues que je parle.'),
  steps: [
    { kind: 'intro', title: 'Meine Familie 👨‍👩‍👧', titleFr: 'Ma famille 👨‍👩‍👧',
      scene: 'Nicole shows Ben a photo of her family.', sceneFr: 'Nicole montre à Ben une photo de sa famille.',
      goals: ['Name the members of a family', 'Use der, die, das and the matching pronouns er, sie, es', 'Say “my” and “your” with mein and dein', 'Say which languages you speak', 'Read big numbers'],
      goalsFr: ['Nommer les membres d’une famille', 'Utiliser der, die, das et les pronoms er, sie, es', 'Dire « mon » et « ton » avec mein et dein', 'Dire quelles langues tu parles', 'Lire de grands nombres'] },

    // ───────────── 1 · Family ─────────────
    { kind: 'chapter', title: 'Die Familie', titleFr: 'La famille', blurb: 'Names for relatives, and the gender of every noun.', blurbFr: 'Les noms des proches, et le genre de chaque nom.' },

    { kind: 'situation', title: 'Ein Foto', titleFr: 'Une photo',
      setting: 'Nicole shows Ben a photo of her family.', settingFr: 'Nicole montre à Ben une photo de sa famille.',
      lines: [
        line('Ben', 'Wer ist das, Nicole?', 'Who is that, Nicole?', 'Qui est-ce, Nicole ?'),
        line('Nicole', 'Das ist meine Familie. Das ist mein Vater, und das ist meine Mutter.', 'That is my family. That is my father, and that is my mother.', 'Voici ma famille. Voici mon père, et voici ma mère.'),
        line('Ben', 'Hast du Geschwister?', 'Do you have siblings?', 'As-tu des frères et sœurs ?'),
        line('Nicole', 'Ja. Mein Bruder heißt Paul, und meine Schwester ist Studentin.', 'Yes. My brother is called Paul, and my sister is a student.', 'Oui. Mon frère s’appelle Paul, et ma sœur est étudiante.'),
        line('Ben', 'Und wo wohnt deine Großmutter?', 'And where does your grandmother live?', 'Et où habite ta grand-mère ?'),
        line('Nicole', 'Meine Großmutter wohnt in Yaoundé. Sie ist achtzig Jahre alt.', 'My grandmother lives in Yaoundé. She is eighty years old.', 'Ma grand-mère habite à Yaoundé. Elle a quatre-vingts ans.'),
      ],
      words: [{ id: 'l3-familie', german: 'die Familie', english: 'the family', french: 'la famille', gender: 'die', syllables: ['fa', 'MI', 'lie'], pronunciation: 'dee fah-MEE-lee-uh', example: { de: 'Meine Familie ist groß.', en: 'My family is big.', fr: 'Ma famille est grande.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e24', prompt: 'What is Nicole’s sister’s job?', promptFr: 'Quel est le métier de la sœur de Nicole ?', options: ['Student', 'Teacher', 'Doctor'], optionsFr: ['Étudiante', 'Enseignante', 'Médecin'], answer: 0, explain: 'Nicole says: “Meine Schwester ist Studentin.”', explainFr: 'Nicole dit : « Meine Schwester ist Studentin. »', hint: 'Look at what Nicole says about her sister.', hintFr: 'Regarde ce que Nicole dit de sa sœur.' } },

    { kind: 'wordgroup', title: 'Eltern und Geschwister', titleFr: 'Parents, frères et sœurs',
      note: 'Always learn the article with the noun.', noteFr: 'Apprends toujours l’article avec le nom.',
      items: [{ id: 'l3-mutter', german: 'die Mutter', english: 'the mother', french: 'la mère', gender: 'die', syllables: ['MUT', 'ter'], pronunciation: 'dee MOO-ter', example: { de: 'Das ist meine Mutter.', en: 'This is my mother.', fr: 'C’est ma mère.' } }, { id: 'l3-vater', german: 'der Vater', english: 'the father', french: 'le père', gender: 'der', syllables: ['VA', 'ter'], pronunciation: 'dair FAH-ter', example: { de: 'Das ist mein Vater.', en: 'This is my father.', fr: 'C’est mon père.' } }, { id: 'l3-eltern', german: 'die Eltern', english: 'the parents', french: 'les parents', gender: 'die', syllables: ['EL', 'tern'], pronunciation: 'dee EL-tern', example: { de: 'Meine Eltern kommen aus Kamerun.', en: 'My parents come from Cameroon.', fr: 'Mes parents viennent du Cameroun.' } }, { id: 'l3-bruder', german: 'der Bruder', english: 'the brother', french: 'le frère', gender: 'der', syllables: ['BRU', 'der'], pronunciation: 'dair BROO-der', example: { de: 'Mein Bruder heißt Paul.', en: 'My brother is called Paul.', fr: 'Mon frère s’appelle Paul.' } }, { id: 'l3-schwester', german: 'die Schwester', english: 'the sister', french: 'la sœur', gender: 'die', syllables: ['SCHWES', 'ter'], pronunciation: 'dee SHVES-ter', example: { de: 'Meine Schwester ist Studentin.', en: 'My sister is a student.', fr: 'Ma sœur est étudiante.' } }, { id: 'l3-geschwister', german: 'die Geschwister', english: 'the siblings', french: 'les frères et sœurs', gender: 'die', syllables: ['ge', 'SCHWIS', 'ter'], pronunciation: 'dee guh-SHVIS-ter', example: { de: 'Ich habe zwei Geschwister.', en: 'I have two siblings.', fr: 'J’ai deux frères et sœurs.' } }] },

    { kind: 'wordgroup', title: 'Kinder und Großeltern', titleFr: 'Enfants et grands-parents',
      items: [{ id: 'l3-sohn', german: 'der Sohn', english: 'the son', french: 'le fils', gender: 'der', syllables: ['SOHN'], pronunciation: 'dair ZOHN', example: { de: 'Mein Sohn ist zehn Jahre alt.', en: 'My son is ten years old.', fr: 'Mon fils a dix ans.' } }, { id: 'l3-tochter', german: 'die Tochter', english: 'the daughter', french: 'la fille', gender: 'die', syllables: ['TOCH', 'ter'], pronunciation: 'dee TOKH-ter', example: { de: 'Meine Tochter spricht Englisch.', en: 'My daughter speaks English.', fr: 'Ma fille parle anglais.' } }, { id: 'l3-kind', german: 'das Kind', english: 'the child', french: 'l’enfant', gender: 'das', syllables: ['KIND'], pronunciation: 'dahs KINT', example: { de: 'Das Kind spricht Deutsch und Englisch.', en: 'The child speaks German and English.', fr: 'L’enfant parle allemand et anglais.' } }, { id: 'l3-grossmutter', german: 'die Großmutter', english: 'the grandmother', french: 'la grand-mère', gender: 'die', syllables: ['GROSS', 'mut', 'ter'], pronunciation: 'dee GROHSS-moo-ter', example: { de: 'Meine Großmutter wohnt in Yaoundé.', en: 'My grandmother lives in Yaoundé.', fr: 'Ma grand-mère habite à Yaoundé.' } }, { id: 'l3-grossvater', german: 'der Großvater', english: 'the grandfather', french: 'le grand-père', gender: 'der', syllables: ['GROSS', 'va', 'ter'], pronunciation: 'dair GROHSS-fah-ter', example: { de: 'Mein Großvater ist verheiratet.', en: 'My grandfather is married.', fr: 'Mon grand-père est marié.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'l3-e4', pairs: [{ de: 'die Mutter', en: 'the mother', fr: 'la mère' }, { de: 'der Vater', en: 'the father', fr: 'le père' }, { de: 'die Geschwister', en: 'the siblings', fr: 'les frères et sœurs' }, { de: 'das Kind', en: 'the child', fr: 'l’enfant' }], hint: 'These are family members from this lesson\'s vocab — match each to its meaning.', hintFr: 'Ce sont des membres de la famille du vocabulaire de cette leçon — associe chacun à son sens.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e5', prompt: 'Meine Schwester und mein Bruder sind meine ___. (Geschwister)', answer: 'Geschwister', hint: 'siblings', hintFr: 'frères et sœurs' } },

    { kind: 'grammar', note: {
      id: 'l3-artikel', title: 'der, die, das: every noun has a gender', titleFr: 'der, die, das : chaque nom a un genre',
      lead: 'Learn the article with each noun. The pronoun follows the article: der → er, die → sie, das → es.',
      leadFr: 'Apprends l’article avec chaque nom. Le pronom suit l’article : der → er, die → sie, das → es.',
      explanationMd: 'Every German noun is **masculine (der)**, **feminine (die)** or **neuter (das)**. The gender is not about meaning, so learn the article **together with the noun**.\n\nThe **pronoun** that replaces a noun follows its article: **der** Vater → **er**, **die** Mutter → **sie**, **das** Kind → **es**. In the **plural** the article is always **die**, and the pronoun is **sie**.',
      explanationMdFr: 'Chaque nom allemand est **masculin (der)**, **féminin (die)** ou **neutre (das)**. Le genre ne dépend pas du sens : apprends donc l’article **avec le nom**.\n\nLe **pronom** qui remplace un nom suit son article : **der** Vater → **er**, **die** Mutter → **sie**, **das** Kind → **es**. Au **pluriel**, l’article est toujours **die** et le pronom est **sie**.',
      tables: [{ title: 'Article and pronoun', titleFr: 'Article et pronom', headers: ['Gender', 'Article', 'Example', 'Pronoun'], headersFr: ['Genre', 'Article', 'Exemple', 'Pronom'],
        rows: [['masculine', 'der', 'der Vater', 'er (he)'], ['feminine', 'die', 'die Mutter', 'sie (she)'], ['neuter', 'das', 'das Kind', 'es (it)'], ['plural', 'die', 'die Eltern', 'sie (they)']],
        rowsFr: [['masculin', 'der', 'der Vater', 'er (il)'], ['féminin', 'die', 'die Mutter', 'sie (elle)'], ['neutre', 'das', 'das Kind', 'es (il / elle)'], ['pluriel', 'die', 'die Eltern', 'sie (ils / elles)']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'die Mutter.', role: 'other' }], en: 'That is the mother.', fr: 'C’est la mère.' },
        { parts: [{ text: 'Die Mutter', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'Ärztin.', role: 'other' }], en: 'The mother is a doctor. (then: Sie ist Ärztin.)', fr: 'La mère est médecin. (puis : Sie ist Ärztin.)' },
      ],
      contrast: {
        a: { label: 'Singular', labelFr: 'Singulier', note: 'der, die or das', noteFr: 'der, die ou das', examples: [g('der Bruder, die Schwester, das Kind', 'the brother, the sister, the child', 'le frère, la sœur, l’enfant')] },
        b: { label: 'Plural', labelFr: 'Pluriel', note: 'always die', noteFr: 'toujours die', examples: [g('die Brüder, die Schwestern, die Kinder', 'the brothers, the sisters, the children', 'les frères, les sœurs, les enfants')] },
      },
      examples: [
        g('Der Vater und die Mutter sind die Eltern.', 'The father and the mother are the parents.', 'Le père et la mère sont les parents.'),
        g('Wo ist dein Vater? Er ist in Deutschland.', 'Where is your father? He is in Germany.', 'Où est ton père ? Il est en Allemagne.'),
        g('Wo ist deine Mutter? Sie ist zu Hause.', 'Where is your mother? She is at home.', 'Où est ta mère ? Elle est à la maison.'),
        g('Wo ist das Kind? Es ist hier.', 'Where is the child? It is here.', 'Où est l’enfant ? Il est ici.'),
        g('Die Kinder spielen.', 'The children are playing.', 'Les enfants jouent.'),
        g('Das ist das Kind von Frau Meier.', 'That is Mrs Meier’s child.', 'C’est l’enfant de Mme Meier.'),
        g('Die Eltern kommen aus Kamerun.', 'The parents come from Cameroon.', 'Les parents viennent du Cameroun.'),
      ],
      mistakes: [
        { wrong: 'Das Mutter ist Ärztin.', right: 'Die Mutter ist Ärztin.', why: 'Learn the article with the noun: Mutter is die.', whyFr: 'Apprends l’article avec le nom : Mutter est die.' },
        { wrong: 'Wo ist das Kind? Sie ist hier.', right: 'Wo ist das Kind? Es ist hier.', why: 'The pronoun follows the grammatical gender: das Kind → es.', whyFr: 'Le pronom suit le genre grammatical : das Kind → es.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l3-e1', word: 'Mutter', answer: 'die', hint: 'Think about the noun\'s gender — is it der, die, or das?', hintFr: 'Pense au genre du nom — der, die ou das ?' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l3-e2', word: 'Kind', answer: 'das', hint: 'This is one of the neuter family words.', hintFr: 'C\'est l\'un des mots de famille neutres.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l3-e3', word: 'Vater', answer: 'der', hint: 'Think about the noun\'s gender — is it der, die, or das?', hintFr: 'Pense au genre du nom — der, die ou das ?' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e13', prompt: 'What is the plural definite article for all German nouns, regardless of gender?', promptFr: 'Quel est l’article défini au pluriel pour tous les noms allemands, quel que soit leur genre ?', options: ['der', 'die', 'das'], answer: 1, explain: 'The plural article is always "die": die Kinder, die Eltern, die Geschwister.', explainFr: 'L’article au pluriel est toujours « die » : die Kinder, die Eltern, die Geschwister.', hint: 'The plural article is the same for every noun, no matter its singular gender.', hintFr: 'L\'article au pluriel est le même pour tous les noms, quel que soit leur genre au singulier.' } },

    { kind: 'grammar', note: {
      id: 'l3-possessiv', title: 'mein and dein: my and your', titleFr: 'mein et dein : mon et ton',
      lead: 'mein and dein take an extra -e with feminine nouns and with every plural.',
      leadFr: 'mein et dein prennent un -e supplémentaire avec les noms féminins et tous les pluriels.',
      explanationMd: '**mein** (my) and **dein** (your, informal) match the **gender** of the noun that follows. With **der** and **das** words they stay **mein / dein**; with **die** words and with every **plural** they add **-e**: **meine / deine**.',
      explanationMdFr: '**mein** (mon) et **dein** (ton) s’accordent avec le **genre** du nom qui suit. Avec les mots en **der** et **das**, ils restent **mein / dein** ; avec les mots en **die** et tous les **pluriels**, ils prennent **-e** : **meine / deine**.',
      tables: [{ title: 'mein and dein', titleFr: 'mein et dein', headers: ['Noun', 'my', 'your'], headersFr: ['Nom', 'mon / ma / mes', 'ton / ta / tes'],
        rows: [['der Vater', 'mein Vater', 'dein Vater'], ['die Mutter', 'meine Mutter', 'deine Mutter'], ['das Kind', 'mein Kind', 'dein Kind'], ['die Eltern', 'meine Eltern', 'deine Eltern']],
        rowsFr: [['der Vater', 'mein Vater', 'dein Vater'], ['die Mutter', 'meine Mutter', 'deine Mutter'], ['das Kind', 'mein Kind', 'dein Kind'], ['die Eltern', 'meine Eltern', 'deine Eltern']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'meine Mutter.', role: 'other' }], en: 'That is my mother.', fr: 'Voici ma mère.' },
        { parts: [{ text: 'Wie', role: 'other' }, { text: 'heißt', role: 'verb' }, { text: 'dein Bruder?', role: 'subject' }], en: 'What is your brother called?', fr: 'Comment s’appelle ton frère ?' },
      ],
      contrast: {
        a: { label: 'mein / dein', labelFr: 'mein / dein', note: 'with der and das words', noteFr: 'avec les mots en der et das', examples: [g('mein Vater, mein Kind', 'my father, my child', 'mon père, mon enfant'), g('Wie heißt dein Bruder?', 'What is your brother called?', 'Comment s’appelle ton frère ?')] },
        b: { label: 'meine / deine', labelFr: 'meine / deine', note: 'with die words and every plural', noteFr: 'avec les mots en die et tous les pluriels', examples: [g('meine Mutter, meine Eltern', 'my mother, my parents', 'ma mère, mes parents'), g('Wie heißt deine Schwester?', 'What is your sister called?', 'Comment s’appelle ta sœur ?')] },
      },
      examples: [
        g('Das ist mein Vater.', 'This is my father.', 'Voici mon père.'),
        g('Das ist meine Mutter.', 'This is my mother.', 'Voici ma mère.'),
        g('Das ist mein Kind.', 'This is my child.', 'Voici mon enfant.'),
        g('Meine Eltern kommen aus Kamerun.', 'My parents come from Cameroon.', 'Mes parents viennent du Cameroun.'),
        g('Wie heißt dein Bruder?', 'What is your brother called?', 'Comment s’appelle ton frère ?'),
        g('Wie heißt deine Schwester?', 'What is your sister called?', 'Comment s’appelle ta sœur ?'),
        g('Meine Familie ist groß.', 'My family is big.', 'Ma famille est grande.'),
      ],
      mistakes: [
        { wrong: 'Meine Vater ist Lehrer.', right: 'Mein Vater ist Lehrer.', why: 'Vater is der, so no -e.', whyFr: 'Vater est der, donc pas de -e.' },
        { wrong: 'Mein Mutter ist Ärztin.', right: 'Meine Mutter ist Ärztin.', why: 'Mutter is die, so add -e.', whyFr: 'Mutter est die, donc ajoute -e.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e8', prompt: '___ Vater ist Lehrer. (mein)', answer: 'Mein', hint: 'possessive for a der-word', hintFr: 'possessif pour un mot en der' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e9', prompt: '___ Mutter ist Ärztin. (mein)', answer: 'Meine', hint: 'possessive for a die-word', hintFr: 'possessif pour un mot en die' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e10', prompt: 'Which is correct for "my child"?', promptFr: 'Laquelle est correcte pour « mon enfant » ?', options: ['mein Kind', 'meine Kind', 'meiner Kind'], answer: 0, explain: '"Kind" is neuter (das), so the possessive is "mein".', explainFr: '« Kind » est neutre (das), donc le possessif est « mein ».', hint: 'What gender article does "Kind" take — der, die, or das?', hintFr: 'Quel article de genre prend « Kind » — der, die ou das ?' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e11', prompt: 'Which is correct for "your (informal) sister"?', promptFr: 'Laquelle est correcte pour « ta sœur » (informel) ?', options: ['dein Schwester', 'deine Schwester', 'deins Schwester'], answer: 1, explain: '"Schwester" is feminine (die), so the possessive is "deine".', explainFr: '« Schwester » est féminin (die), donc le possessif est « deine ».', hint: 'What gender article does "Schwester" take — der, die, or das?', hintFr: 'Quel article de genre prend « Schwester » — der, die ou das ?' } },

    // ───────────── 2 · Languages ─────────────
    { kind: 'chapter', title: 'Sprachen', titleFr: 'Les langues', blurb: 'Which languages do you speak? And a verb that changes its vowel.', blurbFr: 'Quelles langues parles-tu ? Et un verbe qui change de voyelle.' },

    { kind: 'situation', title: 'Welche Sprachen sprichst du?', titleFr: 'Quelles langues parles-tu ?',
      setting: 'Ben and Nicole talk about languages and holidays.', settingFr: 'Ben et Nicole parlent de langues et de vacances.',
      lines: [
        line('Ben', 'Welche Sprachen sprichst du, Nicole?', 'Which languages do you speak, Nicole?', 'Quelles langues parles-tu, Nicole ?'),
        line('Nicole', 'Ich spreche Französisch und Englisch. Und du?', 'I speak French and English. And you?', 'Je parle français et anglais. Et toi ?'),
        line('Ben', 'Ich spreche Deutsch und Spanisch.', 'I speak German and Spanish.', 'Je parle allemand et espagnol.'),
        line('Nicole', 'Spricht deine Schwester auch Spanisch?', 'Does your sister speak Spanish too?', 'Ta sœur parle-t-elle aussi espagnol ?'),
        line('Ben', 'Nein, sie spricht Französisch. Im Sommer fahre ich nach Spanien.', 'No, she speaks French. In summer I’m going to Spain.', 'Non, elle parle français. En été, je vais en Espagne.'),
        line('Nicole', 'Toll! Wir fahren im August nach Kamerun.', 'Great! We’re going to Cameroon in August.', 'Super ! Nous allons au Cameroun en août.'),
      ],
      words: [{ id: 'l3-sprechen', german: 'sprechen', english: 'to speak', french: 'parler', gender: null, syllables: ['SPRE', 'chen'], pronunciation: 'SHPREH-khen', example: { de: 'Wir sprechen Deutsch und Englisch.', en: 'We speak German and English.', fr: 'Nous parlons allemand et anglais.' } }, { id: 'l3-sprache', german: 'die Sprache', english: 'the language', french: 'la langue', gender: 'die', syllables: ['SPRA', 'che'], pronunciation: 'dee SHPRAH-khuh', example: { de: 'Deutsch ist eine Sprache.', en: 'German is a language.', fr: 'L’allemand est une langue.' } }, { id: 'l3-fahren', german: 'fahren', english: 'to drive / to travel', french: 'conduire / voyager', gender: null, syllables: ['FAH', 'ren'], pronunciation: 'FAH-ren', example: { de: 'Wir fahren nach Deutschland.', en: 'We are going to Germany.', fr: 'Nous allons en Allemagne.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e25', prompt: 'Which languages does Ben speak?', promptFr: 'Quelles langues Ben parle-t-il ?', options: ['German and Spanish', 'French and English', 'English and Spanish'], optionsFr: ['Allemand et espagnol', 'Français et anglais', 'Anglais et espagnol'], answer: 0, explain: 'Ben says: “Ich spreche Deutsch und Spanisch.”', explainFr: 'Ben dit : « Ich spreche Deutsch und Spanisch. »', hint: 'Look at Ben’s second line.', hintFr: 'Regarde la deuxième réplique de Ben.' } },

    { kind: 'wordgroup', title: 'Sprachen', titleFr: 'Les langues',
      note: 'Language names are capitalised in German, like all nouns.', noteFr: 'Les noms de langues prennent une majuscule en allemand, comme tous les noms.',
      items: [{ id: 'l3-deutsch', german: 'Deutsch', english: 'German (language)', french: 'l’allemand', gender: null, syllables: ['DEUTSCH'], pronunciation: 'DOYTCH', example: { de: 'Ich spreche Deutsch.', en: 'I speak German.', fr: 'Je parle allemand.' } }, { id: 'l3-englisch', german: 'Englisch', english: 'English (language)', french: 'l’anglais', gender: null, syllables: ['ENG', 'lisch'], pronunciation: 'ENG-lish', example: { de: 'Sprichst du Englisch?', en: 'Do you speak English?', fr: 'Parles-tu anglais ?' } }, { id: 'l3-franzoesisch', german: 'Französisch', english: 'French (language)', french: 'le français', gender: null, syllables: ['fran', 'ZÖ', 'sisch'], pronunciation: 'frahn-TSÖ-zish', example: { de: 'Meine Schwester spricht Französisch.', en: 'My sister speaks French.', fr: 'Ma sœur parle français.' } }, { id: 'l3-spanisch', german: 'Spanisch', english: 'Spanish (language)', french: 'l’espagnol', gender: null, syllables: ['SPA', 'nisch'], pronunciation: 'SHPAH-nish', example: { de: 'Er spricht Spanisch.', en: 'He speaks Spanish.', fr: 'Il parle espagnol.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'l3-e19', pairs: [{ de: 'Deutsch', en: 'German', fr: 'allemand' }, { de: 'Englisch', en: 'English', fr: 'anglais' }, { de: 'Französisch', en: 'French', fr: 'français' }, { de: 'Spanisch', en: 'Spanish', fr: 'espagnol' }], hint: 'These are the four language names from this lesson\'s vocab.', hintFr: 'Ce sont les quatre noms de langues du vocabulaire de cette leçon.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l3-e20', word: 'Sprache', answer: 'die', hint: 'Think about the noun\'s gender — is it der, die, or das?', hintFr: 'Pense au genre du nom — der, die ou das ?' } },

    { kind: 'grammar', note: {
      id: 'l3-vokalwechsel', title: 'sprechen and fahren: a changing vowel', titleFr: 'sprechen et fahren : une voyelle qui change',
      lead: 'Some verbs change their vowel in the du and er/sie/es forms.',
      leadFr: 'Certains verbes changent de voyelle aux formes du et er/sie/es.',
      explanationMd: 'Most verbs keep the same stem: ich lerne, du lernst, er lernt. A few important verbs **change the stem vowel** in **du** and **er/sie/es** only: **sprechen** (e → **i**) and **fahren** (a → **ä**). All other persons keep the normal stem.\n\nUse **sprechen** + language: **Ich spreche Deutsch.** Use **fahren nach** + place: **Wir fahren nach Deutschland.**',
      explanationMdFr: 'La plupart des verbes gardent le même radical : ich lerne, du lernst, er lernt. Quelques verbes importants **changent de voyelle** seulement à **du** et **er/sie/es** : **sprechen** (e → **i**) et **fahren** (a → **ä**). Les autres personnes gardent le radical normal.\n\nUtilise **sprechen** + langue : **Ich spreche Deutsch.** Utilise **fahren nach** + lieu : **Wir fahren nach Deutschland.**',
      tables: [
        { title: 'sprechen (to speak)', titleFr: 'sprechen (parler)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen']], rowsFr: [['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen']], highlightCol: 1 },
        { title: 'fahren (to drive, to go)', titleFr: 'fahren (conduire, aller)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren']], rowsFr: [['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'spricht', role: 'verb' }, { text: 'Französisch.', role: 'other' }], en: 'She speaks French.', fr: 'Elle parle français.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'fährt', role: 'verb' }, { text: 'nach Berlin.', role: 'place' }], en: 'He is going to Berlin.', fr: 'Il va à Berlin.' },
      ],
      contrast: {
        a: { label: 'regular verb', labelFr: 'verbe régulier', note: 'lernen: du lernst, er lernt', noteFr: 'lernen : du lernst, er lernt', examples: [g('Du lernst Deutsch.', 'You learn German.', 'Tu apprends l’allemand.'), g('Er lernt Spanisch.', 'He learns Spanish.', 'Il apprend l’espagnol.')] },
        b: { label: 'vowel change', labelFr: 'changement de voyelle', note: 'sprechen: du sprichst, er spricht', noteFr: 'sprechen : du sprichst, er spricht', examples: [g('Du sprichst Deutsch.', 'You speak German.', 'Tu parles allemand.'), g('Er spricht Spanisch.', 'He speaks Spanish.', 'Il parle espagnol.')] },
      },
      examples: [
        g('Ich spreche Deutsch.', 'I speak German.', 'Je parle allemand.'),
        g('Sprichst du Englisch?', 'Do you speak English?', 'Parles-tu anglais ?'),
        g('Sie spricht Französisch und Spanisch.', 'She speaks French and Spanish.', 'Elle parle français et espagnol.'),
        g('Wir fahren nach Deutschland.', 'We are going to Germany.', 'Nous allons en Allemagne.'),
        g('Fährst du nach Hause?', 'Are you going home?', 'Rentres-tu à la maison ?'),
        g('Mein Vater fährt nach Yaoundé.', 'My father is going to Yaoundé.', 'Mon père va à Yaoundé.'),
        g('Wir sprechen Deutsch und Englisch.', 'We speak German and English.', 'Nous parlons allemand et anglais.'),
      ],
      mistakes: [
        { wrong: 'Du sprechst Deutsch.', right: 'Du sprichst Deutsch.', why: 'With du the vowel changes: e becomes i.', whyFr: 'Avec du, la voyelle change : e devient i.' },
        { wrong: 'Er fahrt nach Berlin.', right: 'Er fährt nach Berlin.', why: 'With er/sie/es the vowel changes: a becomes ä.', whyFr: 'Avec er/sie/es, la voyelle change : a devient ä.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e15', prompt: 'Which sentence means "I speak German"?', promptFr: 'Quelle phrase signifie « Je parle allemand » ?', options: ['Ich spreche Deutsch.', 'Du sprichst Deutsch.', 'Er spricht Deutsch.'], answer: 0, explain: '"spreche" is the ich-form of sprechen.', explainFr: '« spreche » est la forme ich de sprechen.', hint: 'Which subject pronoun means "I"?', hintFr: 'Quel pronom sujet signifie « je » ?' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e16', prompt: 'Er ___ Spanisch. (sprechen)', answer: 'spricht', hint: 'er-form: vowel change e→i', hintFr: 'forme er : changement de voyelle e→i' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e17', prompt: 'Du ___ Französisch. (sprechen)', answer: 'sprichst', hint: 'du-form: vowel change e→i', hintFr: 'forme du : changement de voyelle e→i' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l3-e18', tokens: ['Deutsch', 'Ich', 'spreche'], answer: ['Ich', 'spreche', 'Deutsch'], hint: 'In a German statement, the verb comes second.', hintFr: 'Dans une phrase allemande, le verbe est en deuxième position.' } },

    // ───────────── 3 · Big numbers ─────────────
    { kind: 'chapter', title: 'Große Zahlen', titleFr: 'Les grands nombres', blurb: 'From one hundred to a million.', blurbFr: 'De cent à un million.' },

    { kind: 'situation', title: 'Wie viele Einwohner?', titleFr: 'Combien d’habitants ?',
      setting: 'Ben and Nicole compare two cities.', settingFr: 'Ben et Nicole comparent deux villes.',
      lines: [
        line('Ben', 'Wie viele Einwohner hat Berlin?', 'How many inhabitants does Berlin have?', 'Combien d’habitants Berlin compte-t-il ?'),
        line('Nicole', 'Berlin hat über drei Millionen Einwohner.', 'Berlin has over three million inhabitants.', 'Berlin compte plus de trois millions d’habitants.'),
        line('Ben', 'Und Yaoundé?', 'And Yaoundé?', 'Et Yaoundé ?'),
        line('Nicole', 'Yaoundé hat auch über eine Million.', 'Yaoundé also has over a million.', 'Yaoundé en compte aussi plus d’un million.'),
      ],
      words: [{ id: 'l3-million', german: 'eine Million', english: 'a million', french: 'un million', gender: null, syllables: ['EI', 'ne', 'Mil', 'li', 'ON'], pronunciation: 'EYE-nuh mil-lee-OHN', example: { de: 'Diese Stadt hat eine Million Einwohner.', en: 'This city has a million inhabitants.', fr: 'Cette ville a un million d’habitants.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e26', prompt: 'How many inhabitants does Berlin have, according to Nicole?', promptFr: 'Combien d’habitants Berlin compte-t-il, selon Nicole ?', options: ['More than three million', 'More than one million', 'About one thousand'], optionsFr: ['Plus de trois millions', 'Plus d’un million', 'Environ mille'], answer: 0, explain: 'She says: “Berlin hat über drei Millionen Einwohner.”', explainFr: 'Elle dit : « Berlin hat über drei Millionen Einwohner. »', hint: 'Look for the number before “Millionen”.', hintFr: 'Cherche le nombre avant « Millionen ».' } },

    { kind: 'wordgroup', title: 'Hundert und tausend', titleFr: 'Cent et mille',
      items: [{ id: 'l3-hundert', german: 'hundert', english: 'hundred', french: 'cent', gender: null, syllables: ['HUN', 'dert'], pronunciation: 'HOON-dert', example: { de: 'Hundert plus hundert sind zweihundert.', en: 'One hundred plus one hundred is two hundred.', fr: 'Cent plus cent égalent deux cents.' } }, { id: 'l3-tausend', german: 'tausend', english: 'thousand', french: 'mille', gender: null, syllables: ['TAU', 'send'], pronunciation: 'TOW-zent', example: { de: 'Ich zähle von hundert bis tausend.', en: 'I count from a hundred to a thousand.', fr: 'Je compte de cent à mille.' } }] },

    { kind: 'grammar', note: {
      id: 'l3-grosse-zahlen', title: 'Numbers from 100 to a million', titleFr: 'Les nombres de 100 à un million',
      lead: 'Build big numbers by joining the parts into one word, biggest first.',
      leadFr: 'Forme les grands nombres en réunissant les parties en un seul mot, du plus grand au plus petit.',
      explanationMd: '**hundert** and **tausend** are used without “ein”: **hundert**, **tausend**. Join the parts into **one word**, biggest first: 2,500 = **zweitausendfünfhundert**.\n\n**Million** is a **noun**: **eine Million**, **zwei Millionen**. German writes the thousands with a **dot** (**1.000**) and decimals with a **comma** (**1,50**), the opposite of English.',
      explanationMdFr: '**hundert** et **tausend** s’emploient sans « ein » : **hundert**, **tausend**. Réunis les parties en **un seul mot**, du plus grand au plus petit : 2 500 = **zweitausendfünfhundert**.\n\n**Million** est un **nom** : **eine Million**, **zwei Millionen**. L’allemand écrit les milliers avec un **point** (**1.000**) et les décimales avec une **virgule** (**1,50**).',
      tables: [{ title: 'Big numbers', titleFr: 'Grands nombres', headers: ['Number', 'German'], headersFr: ['Nombre', 'Allemand'],
        rows: [['100', 'hundert'], ['200', 'zweihundert'], ['1.000', 'tausend'], ['2.500', 'zweitausendfünfhundert'], ['10.000', 'zehntausend'], ['100.000', 'hunderttausend'], ['1.000.000', 'eine Million']],
        rowsFr: [['100', 'hundert'], ['200', 'zweihundert'], ['1.000', 'tausend'], ['2.500', 'zweitausendfünfhundert'], ['10.000', 'zehntausend'], ['100.000', 'hunderttausend'], ['1.000.000', 'eine Million']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Berlin', role: 'subject' }, { text: 'hat', role: 'verb' }, { text: 'über drei Millionen', role: 'other' }, { text: 'Einwohner.', role: 'accusative' }], en: 'Berlin has over three million inhabitants.', fr: 'Berlin compte plus de trois millions d’habitants.' },
      ],
      contrast: {
        a: { label: 'German writing', labelFr: 'Écriture allemande', note: 'dot for thousands, comma for decimals', noteFr: 'point pour les milliers, virgule pour les décimales', examples: [g('1.000,50 Euro', '1,000.50 euros', '1 000,50 euros')] },
        b: { label: 'English writing', labelFr: 'Écriture anglaise', note: 'comma for thousands, dot for decimals', noteFr: 'virgule pour les milliers, point pour les décimales', examples: [g('Tausend Euro und fünfzig Cent', 'one thousand euros and fifty cents', 'mille euros et cinquante centimes')] },
      },
      examples: [
        g('Hundert plus hundert sind zweihundert.', 'A hundred plus a hundred is two hundred.', 'Cent plus cent font deux cents.'),
        g('Ich zähle von hundert bis tausend.', 'I count from a hundred to a thousand.', 'Je compte de cent à mille.'),
        g('Diese Stadt hat eine Million Einwohner.', 'This city has a million inhabitants.', 'Cette ville compte un million d’habitants.'),
        g('Berlin hat über drei Millionen Einwohner.', 'Berlin has over three million inhabitants.', 'Berlin compte plus de trois millions d’habitants.'),
        g('Das Auto kostet zehntausend Euro.', 'The car costs ten thousand euros.', 'La voiture coûte dix mille euros.'),
        g('Das Jahr hat dreihundertfünfundsechzig Tage.', 'The year has three hundred and sixty-five days.', 'L’année a trois cent soixante-cinq jours.'),
      ],
      mistakes: [
        { wrong: 'Berlin hat zwei Million Einwohner.', right: 'Berlin hat zwei Millionen Einwohner.', why: 'Million is a noun: it gets a plural, -en.', whyFr: 'Million est un nom : il prend un pluriel, -en.' },
        { wrong: 'Das kostet eine tausend Euro.', right: 'Das kostet tausend Euro.', why: 'Say tausend without ein.', whyFr: 'Dis tausend sans ein.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e21', prompt: 'Which number is "tausend"?', promptFr: 'Quel est le nombre « tausend » ?', options: ['100', '1.000', '1.000.000'], answer: 1, explain: '"tausend" means one thousand (1.000).', explainFr: '« tausend » signifie mille (1 000).', hint: '"hundert" is 100 and "Million" is much bigger — tausend is in between.', hintFr: '« hundert » c\'est 100 et « Million » est bien plus grand — tausend est entre les deux.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e22', prompt: 'Which number is "eine Million"?', promptFr: 'Quel est le nombre « eine Million » ?', options: ['100', '1.000', '1.000.000'], answer: 2, explain: '"eine Million" means one million (1.000.000).', explainFr: '« eine Million » signifie un million (1 000 000).', hint: 'This is the biggest of the three numbers.', hintFr: 'C\'est le plus grand des trois nombres.' } },

    { kind: 'pronunciation', focus: 'The "ö" sound in Französisch and the stress on the first part of compound words like Großmutter', focusFr: 'Le son « ö » dans Französisch et l’accent sur la première partie des mots composés comme Großmutter', items: [{ id: 'l3-franzoesisch-pron', german: 'Französisch', english: 'French (language)', french: 'le français', gender: null, syllables: ['fran', 'ZÖ', 'sisch'], pronunciation: 'frahn-TSÖ-zish', example: { de: 'Meine Schwester spricht Französisch.', en: 'My sister speaks French.', fr: 'Ma sœur parle français.' } }, { id: 'l3-grossmutter-pron', german: 'die Großmutter', english: 'the grandmother', french: 'la grand-mère', gender: 'die', syllables: ['GROSS', 'mut', 'ter'], pronunciation: 'dee GROHSS-moo-ter', example: { de: 'Meine Großmutter wohnt in Yaoundé.', en: 'My grandmother lives in Yaoundé.', fr: 'Ma grand-mère habite à Yaoundé.' } }] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l3-e6', tokens: ['ist', 'Das', 'meine', 'Mutter'], answer: ['Das', 'ist', 'meine', 'Mutter'], hint: 'In a German statement, the verb comes second.', hintFr: 'Dans une phrase allemande, le verbe est en deuxième position.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l3-e12', tokens: ['heißt', 'dein', 'Wie', 'Bruder'], answer: ['Wie', 'heißt', 'dein', 'Bruder'], hint: 'This is a W-question: the question word starts the sentence, then the verb.', hintFr: 'C\'est une question en W : le mot interrogatif commence la phrase, puis vient le verbe.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e14', prompt: 'Das ist ___ Familie. (die)', answer: 'die', hint: 'definite article for "Familie" (feminine)', hintFr: 'article défini pour « Familie » (féminin)' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l3-e7', prompt: 'Listen. Which languages does the mother speak?', promptFr: 'Écoute. Quelles langues parle la mère ?', audio: { ttsText: 'Das ist meine Familie. Mein Vater heißt Michael, er ist Lehrer. Meine Mutter heißt Nicole, sie spricht Französisch und Englisch.' }, options: ['French and English', 'German and Spanish', 'English and Spanish'], optionsFr: ['Français et anglais', 'Allemand et espagnol', 'Anglais et espagnol'], answer: 0, hint: 'Listen for the two language names right after "sie spricht".', hintFr: 'Écoute les deux langues nommées juste après « sie spricht ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l3-e23', prompt: 'Listen. Where does the grandmother live?', promptFr: 'Écoute. Où habite la grand-mère ?', audio: { ttsText: 'Das ist meine Familie. Mein Bruder heißt Paul. Meine Großmutter wohnt in Yaoundé.' }, options: ['Yaoundé', 'Deutschland', 'Berlin'], optionsFr: ['Yaoundé', 'Allemagne', 'Berlin'], answer: 0, hint: 'Listen for the place name right after "meine Großmutter wohnt in".', hintFr: 'Écoute le lieu juste après « meine Großmutter wohnt in ».' } },

    { kind: 'wrapup',
      summary: 'You can now name family members with the right **der / die / das**, use **mein / meine** and **dein / deine**, say which languages you speak with **sprechen**, and read numbers up to a million. 🎉',
      summaryFr: 'Tu sais maintenant nommer les membres de la famille avec le bon **der / die / das**, utiliser **mein / meine** et **dein / deine**, dire quelles langues tu parles avec **sprechen**, et lire des nombres jusqu’au million. 🎉',
      card: { title: 'Lesson 6 on one page', titleFr: 'La leçon 6 en une page', sections: [
        { heading: 'Family', headingFr: 'La famille', rows: [g('der Vater, die Mutter, die Eltern', 'father, mother, parents', 'père, mère, parents'), g('der Bruder, die Schwester, die Geschwister', 'brother, sister, siblings', 'frère, sœur, frères et sœurs'), g('das Kind, der Sohn, die Tochter', 'child, son, daughter', 'enfant, fils, fille')] },
        { heading: 'Article and pronoun', headingFr: 'Article et pronom', rows: [g('der Vater → er', 'the father → he', 'le père → il'), g('die Mutter → sie', 'the mother → she', 'la mère → elle'), g('das Kind → es', 'the child → it', 'l’enfant → il / elle'), g('die Eltern → sie', 'the parents → they', 'les parents → ils')] },
        { heading: 'my and your', headingFr: 'mon et ton', rows: [g('mein Vater, mein Kind', 'der and das words', 'mots en der et das'), g('meine Mutter, meine Eltern', 'die words and plurals', 'mots en die et pluriels')] },
        { heading: 'Languages', headingFr: 'Les langues', rows: [g('Ich spreche Deutsch.', 'I speak German.', 'Je parle allemand.'), g('du sprichst, er spricht', 'e → i', 'e → i'), g('du fährst, er fährt', 'a → ä', 'a → ä')] },
      ] } },
  ],
};
