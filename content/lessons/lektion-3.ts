import type { Lesson } from '../types';

export const lektion3: Lesson = {
  id: 'l3', number: 3,
  title: { de: 'Das ist meine Mutter', en: 'This is my mother' },
  theme: 'Family, languages & numbers 100–1,000,000',
  goals: ['Talk about your family', 'Say which languages you speak', 'Use possessives (mein/dein)', 'Use the definite article with the right gender'],
  steps: [
    { kind: 'intro', title: 'Willkommen zurück! 👋', scene: 'Someone shows a family photo and talks about their parents, siblings and grandparents.',
      goals: ['Talk about your family', 'Say which languages you speak', 'Use possessives (mein/dein)', 'Use the definite article with the right gender'] },

    { kind: 'vocab', item: { id: 'l3-familie', german: 'die Familie', english: 'the family', gender: 'die', syllables: ['fa', 'MI', 'lie'], pronunciation: 'dee fah-MEE-lee-uh', example: { de: 'Meine Familie ist groß.', en: 'My family is big.' } } },
    { kind: 'vocab', item: { id: 'l3-mutter', german: 'die Mutter', english: 'the mother', gender: 'die', syllables: ['MUT', 'ter'], pronunciation: 'dee MOO-ter', example: { de: 'Das ist meine Mutter.', en: 'This is my mother.' } } },
    { kind: 'vocab', item: { id: 'l3-vater', german: 'der Vater', english: 'the father', gender: 'der', syllables: ['VA', 'ter'], pronunciation: 'dair FAH-ter', example: { de: 'Das ist mein Vater.', en: 'This is my father.' } } },
    { kind: 'vocab', item: { id: 'l3-eltern', german: 'die Eltern', english: 'the parents', gender: 'die', syllables: ['EL', 'tern'], pronunciation: 'dee EL-tern', example: { de: 'Meine Eltern kommen aus Kamerun.', en: 'My parents come from Cameroon.' } } },
    { kind: 'vocab', item: { id: 'l3-bruder', german: 'der Bruder', english: 'the brother', gender: 'der', syllables: ['BRU', 'der'], pronunciation: 'dair BROO-der', example: { de: 'Mein Bruder heißt Paul.', en: 'My brother is called Paul.' } } },
    { kind: 'vocab', item: { id: 'l3-schwester', german: 'die Schwester', english: 'the sister', gender: 'die', syllables: ['SCHWES', 'ter'], pronunciation: 'dee SHVES-ter', example: { de: 'Meine Schwester ist Studentin.', en: 'My sister is a student.' } } },
    { kind: 'vocab', item: { id: 'l3-geschwister', german: 'die Geschwister', english: 'the siblings', gender: 'die', syllables: ['ge', 'SCHWIS', 'ter'], pronunciation: 'dee guh-SHVIS-ter', example: { de: 'Ich habe zwei Geschwister.', en: 'I have two siblings.' } } },
    { kind: 'vocab', item: { id: 'l3-sohn', german: 'der Sohn', english: 'the son', gender: 'der', syllables: ['SOHN'], pronunciation: 'dair ZOHN', example: { de: 'Mein Sohn ist zehn Jahre alt.', en: 'My son is ten years old.' } } },
    { kind: 'vocab', item: { id: 'l3-tochter', german: 'die Tochter', english: 'the daughter', gender: 'die', syllables: ['TOCH', 'ter'], pronunciation: 'dee TOKH-ter', example: { de: 'Meine Tochter spricht Englisch.', en: 'My daughter speaks English.' } } },
    { kind: 'vocab', item: { id: 'l3-kind', german: 'das Kind', english: 'the child', gender: 'das', syllables: ['KIND'], pronunciation: 'dahs KINT', example: { de: 'Das Kind spricht Deutsch und Englisch.', en: 'The child speaks German and English.' } } },
    { kind: 'vocab', item: { id: 'l3-grossmutter', german: 'die Großmutter', english: 'the grandmother', gender: 'die', syllables: ['GROSS', 'mut', 'ter'], pronunciation: 'dee GROHSS-moo-ter', example: { de: 'Meine Großmutter wohnt in Yaoundé.', en: 'My grandmother lives in Yaoundé.' } } },
    { kind: 'vocab', item: { id: 'l3-grossvater', german: 'der Großvater', english: 'the grandfather', gender: 'der', syllables: ['GROSS', 'va', 'ter'], pronunciation: 'dair GROHSS-fah-ter', example: { de: 'Mein Großvater ist verheiratet.', en: 'My grandfather is married.' } } },

    { kind: 'grammar', note: {
      id: 'l3-artikel', title: 'The definite article: der/die/das',
      explanationMd: 'Every German noun has a fixed grammatical gender: **der** (masculine), **die** (feminine), or **das** (neuter). You must learn the article together with the noun — der Vater, die Mutter, das Kind.\n\nIn the **plural**, the article is always **die**, no matter what the singular gender is:\n\n- der Bruder → die Brüder\n- die Schwester → die Schwestern\n- das Kind → die Kinder\n\nWords that only exist in the plural, like **die Eltern** (parents) and **die Geschwister** (siblings), also take **die**.',
      examples: [ { de: 'Der Vater und die Mutter sind die Eltern.', en: 'The father and the mother are the parents.' }, { de: 'Die Kinder spielen.', en: 'The children are playing.' }, { de: 'Das ist das Kind von Frau Meier.', en: 'That is Mrs Meier’s child.' } ] } },

    { kind: 'grammar', note: {
      id: 'l3-possessiv', title: 'Possessive articles: mein/dein',
      explanationMd: 'Possessive articles agree with the **gender** of the noun they describe, just like der/die/das:\n\n- **mein** Vater (der → mein) — my father\n- **meine** Mutter (die → meine) — my mother\n- **mein** Kind (das → mein) — my child\n- Plural: **meine** Eltern — my parents (the plural always uses *meine*)\n\nThe same pattern works for **dein** (your, informal): dein Vater, deine Mutter, dein Kind, deine Eltern.',
      examples: [ { de: 'Das ist mein Vater.', en: 'This is my father.' }, { de: 'Das ist meine Mutter.', en: 'This is my mother.' }, { de: 'Wie heißt dein Bruder?', en: 'What is your brother called?' } ] } },

    { kind: 'grammar', note: {
      id: 'l3-pronomen', title: 'Pronouns: er/es/sie',
      explanationMd: 'The pronoun that replaces a noun depends on the noun’s **grammatical gender**, not on whether it is a person:\n\n- **der** Vater → **er** (he)\n- **die** Mutter → **sie** (she)\n- **das** Kind → **es** (it)\n\nThe same rule applies to any der/die/das noun: der Bruder → er, die Schwester → sie, das Kind → es.',
      examples: [ { de: 'Wo ist dein Vater? — Er ist in Deutschland.', en: 'Where is your father? — He is in Germany.' }, { de: 'Wo ist deine Mutter? — Sie ist zu Hause.', en: 'Where is your mother? — She is at home.' }, { de: 'Wo ist das Kind? — Es ist hier.', en: 'Where is the child? — It is here.' } ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l3-e1', word: 'Mutter', answer: 'die' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l3-e2', word: 'Kind', answer: 'das' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l3-e3', word: 'Vater', answer: 'der' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l3-e4', pairs: [ { de: 'die Mutter', en: 'the mother' }, { de: 'der Vater', en: 'the father' }, { de: 'die Geschwister', en: 'the siblings' }, { de: 'das Kind', en: 'the child' } ] } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e5', prompt: 'Meine Schwester und mein Bruder sind meine ___. (Geschwister)', answer: 'Geschwister', hint: 'siblings' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l3-e6', tokens: ['ist', 'Das', 'meine', 'Mutter'], answer: ['Das', 'ist', 'meine', 'Mutter'] } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l3-e7', audio: { official: { lesson: 3, activity: '1' } }, options: ['A person describing their family members', 'A weather report', 'An order at a restaurant'], answer: 0 } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e8', prompt: '___ Vater ist Lehrer. (mein)', answer: 'Mein', hint: 'possessive for a der-word' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e9', prompt: '___ Mutter ist Ärztin. (mein)', answer: 'Meine', hint: 'possessive for a die-word' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e10', prompt: 'Which is correct for "my child"?', options: ['mein Kind', 'meine Kind', 'meiner Kind'], answer: 0, explain: '"Kind" is neuter (das), so the possessive is "mein".' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e11', prompt: 'Which is correct for "your (informal) sister"?', options: ['dein Schwester', 'deine Schwester', 'deins Schwester'], answer: 1, explain: '"Schwester" is feminine (die), so the possessive is "deine".' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l3-e12', tokens: ['heißt', 'dein', 'Wie', 'Bruder'], answer: ['Wie', 'heißt', 'dein', 'Bruder'] } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e13', prompt: 'What is the plural definite article for all German nouns, regardless of gender?', options: ['der', 'die', 'das'], answer: 1, explain: 'The plural article is always "die": die Kinder, die Eltern, die Geschwister.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e14', prompt: 'Das ist ___ Familie. (die)', answer: 'die', hint: 'definite article for "Familie" (feminine)' } },

    { kind: 'vocab', item: { id: 'l3-deutsch', german: 'Deutsch', english: 'German (language)', gender: null, syllables: ['DEUTSCH'], pronunciation: 'DOYTCH', example: { de: 'Ich spreche Deutsch.', en: 'I speak German.' } } },
    { kind: 'vocab', item: { id: 'l3-englisch', german: 'Englisch', english: 'English (language)', gender: null, syllables: ['ENG', 'lisch'], pronunciation: 'ENG-lish', example: { de: 'Sprichst du Englisch?', en: 'Do you speak English?' } } },
    { kind: 'vocab', item: { id: 'l3-franzoesisch', german: 'Französisch', english: 'French (language)', gender: null, syllables: ['fran', 'ZÖ', 'sisch'], pronunciation: 'frahn-TSÖ-zish', example: { de: 'Meine Schwester spricht Französisch.', en: 'My sister speaks French.' } } },
    { kind: 'vocab', item: { id: 'l3-spanisch', german: 'Spanisch', english: 'Spanish (language)', gender: null, syllables: ['SPA', 'nisch'], pronunciation: 'SHPAH-nish', example: { de: 'Er spricht Spanisch.', en: 'He speaks Spanish.' } } },
    { kind: 'vocab', item: { id: 'l3-sprache', german: 'die Sprache', english: 'the language', gender: 'die', syllables: ['SPRA', 'che'], pronunciation: 'dee SHPRAH-khuh', example: { de: 'Deutsch ist eine Sprache.', en: 'German is a language.' } } },
    { kind: 'vocab', item: { id: 'l3-sprechen', german: 'sprechen', english: 'to speak', gender: null, syllables: ['SPRE', 'chen'], pronunciation: 'SHPREH-khen', example: { de: 'Wir sprechen Deutsch und Englisch.', en: 'We speak German and English.' } } },

    { kind: 'grammar', note: {
      id: 'l3-sprechen-note', title: 'The verb "sprechen" — vowel change e → i',
      explanationMd: '**sprechen** (to speak) changes its stem vowel from **e** to **i** in the **du** and **er/sie/es** forms:\n\n- ich **spreche** — I speak\n- du **sprichst** — you speak\n- er/sie/es **spricht** — he/she/it speaks\n- wir **sprechen** — we speak\n- ihr **sprecht** — you (pl.) speak\n- sie/Sie **sprechen** — they/you speak',
      examples: [ { de: 'Ich spreche Deutsch.', en: 'I speak German.' }, { de: 'Sprichst du Englisch?', en: 'Do you speak English?' }, { de: 'Sie spricht Französisch und Spanisch.', en: 'She speaks French and Spanish.' } ],
      diagram: 'conjugation-table' } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e15', prompt: 'Which sentence means "I speak German"?', options: ['Ich spreche Deutsch.', 'Du sprichst Deutsch.', 'Er spricht Deutsch.'], answer: 0, explain: '"spreche" is the ich-form of sprechen.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e16', prompt: 'Er ___ Spanisch. (sprechen)', answer: 'spricht', hint: 'er-form: vowel change e→i' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l3-e17', prompt: 'Du ___ Französisch. (sprechen)', answer: 'sprichst', hint: 'du-form: vowel change e→i' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l3-e18', tokens: ['Deutsch', 'Ich', 'spreche'], answer: ['Ich', 'spreche', 'Deutsch'] } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l3-e19', pairs: [ { de: 'Deutsch', en: 'German' }, { de: 'Englisch', en: 'English' }, { de: 'Französisch', en: 'French' }, { de: 'Spanisch', en: 'Spanish' } ] } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l3-e20', word: 'Sprache', answer: 'die' } },

    { kind: 'vocab', item: { id: 'l3-hundert', german: 'hundert', english: 'hundred', gender: null, syllables: ['HUN', 'dert'], pronunciation: 'HOON-dert', example: { de: 'Hundert plus hundert sind zweihundert.', en: 'One hundred plus one hundred is two hundred.' } } },
    { kind: 'vocab', item: { id: 'l3-tausend', german: 'tausend', english: 'thousand', gender: null, syllables: ['TAU', 'send'], pronunciation: 'TOW-zent', example: { de: 'Ich zähle von hundert bis tausend.', en: 'I count from a hundred to a thousand.' } } },
    { kind: 'vocab', item: { id: 'l3-million', german: 'eine Million', english: 'a million', gender: null, syllables: ['EI', 'ne', 'Mil', 'li', 'ON'], pronunciation: 'EYE-nuh mil-lee-OHN', example: { de: 'Diese Stadt hat eine Million Einwohner.', en: 'This city has a million inhabitants.' } } },
    { kind: 'vocab', item: { id: 'l3-fahren', german: 'fahren', english: 'to drive / to travel', gender: null, syllables: ['FAH', 'ren'], pronunciation: 'FAH-ren', example: { de: 'Wir fahren nach Deutschland.', en: 'We are going to Germany.' } } },

    { kind: 'grammar', note: {
      id: 'l3-fahren-note', title: 'The verb "fahren" — vowel change a → ä',
      explanationMd: '**fahren** (to drive / to travel) changes its stem vowel from **a** to **ä** in the **du** and **er/sie/es** forms:\n\n- ich **fahre** — I drive\n- du **fährst** — you drive\n- er/sie/es **fährt** — he/she/it drives\n- wir **fahren** — we drive\n- ihr **fahrt** — you (pl.) drive\n- sie/Sie **fahren** — they/you drive',
      examples: [ { de: 'Wir fahren nach Deutschland.', en: 'We are going to Germany.' }, { de: 'Fährst du nach Hause?', en: 'Are you going home?' }, { de: 'Mein Vater fährt nach Yaoundé.', en: 'My father is going to Yaoundé.' } ],
      diagram: 'conjugation-table' } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e21', prompt: 'Which number is "tausend"?', options: ['100', '1.000', '1.000.000'], answer: 1, explain: '"tausend" means one thousand (1.000).' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l3-e22', prompt: 'Which number is "eine Million"?', options: ['100', '1.000', '1.000.000'], answer: 2, explain: '"eine Million" means one million (1.000.000).' } },

    { kind: 'pronunciation', focus: 'The "ö" sound in Französisch and the stress on the first part of compound words like Großmutter', items: [
      { id: 'l3-franzoesisch-pron', german: 'Französisch', english: 'French (language)', gender: null, syllables: ['fran', 'ZÖ', 'sisch'], pronunciation: 'frahn-TSÖ-zish', example: { de: 'Meine Schwester spricht Französisch.', en: 'My sister speaks French.' } },
      { id: 'l3-grossmutter-pron', german: 'die Großmutter', english: 'the grandmother', gender: 'die', syllables: ['GROSS', 'mut', 'ter'], pronunciation: 'dee GROHSS-moo-ter', example: { de: 'Meine Großmutter wohnt in Yaoundé.', en: 'My grandmother lives in Yaoundé.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now talk about your family, say which languages you speak with **sprechen**, use **mein/dein** with the correct gender, and use **der/die/das** — including the plural **die**. 🎉' },
  ],
};
