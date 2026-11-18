import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion13: Lesson = {
  id: 'a2-l13', level: 'A2', module: 1, number: 3,
  title: { de: 'Familie, Beruf und Besitz', en: 'Family, work and belongings', fr: 'Famille, métier et possession' },
  theme: 'Family history, professions and possessive articles in all cases', themeFr: 'Histoire de famille, métiers et articles possessifs à tous les cas',
  goals: ['Use all possessive articles: mein, dein, sein, ihr, unser, euer, ihr, Ihr', 'Choose the right ending in Nominativ, Akkusativ and Dativ', 'Talk about relatives and their jobs', 'Tell a short family story with "war"'], goalsFr: ['Utiliser tous les articles possessifs : mein, dein, sein, ihr, unser, euer, ihr, Ihr', 'Choisir la bonne terminaison au nominatif, à l’accusatif et au datif', 'Parler des membres de la famille et de leurs métiers', 'Raconter une courte histoire de famille avec « war »'],
  canDo: g('Ich kann über meine Familie und ihre Berufe erzählen und alle Possessivartikel richtig verwenden.', 'I can talk about my family and their jobs and use all possessive articles correctly.', 'Je sais parler de ma famille et de leurs métiers et utiliser correctement tous les articles possessifs.'),
  steps: [
    { kind: 'intro', title: 'Familie, Beruf und Besitz 👨‍👩‍👧‍👦', titleFr: 'Famille, métier et possession 👨‍👩‍👧‍👦',
      scene: 'Lara tells Tim about her relatives, their jobs and where they live.', sceneFr: 'Lara raconte à Tim ses proches, leurs métiers et où ils habitent.',
      goals: ['Name relatives and professions', 'Choose the right possessive article for every owner', 'Choose the right ending in nominative, accusative and dative'],
      goalsFr: ['Nommer des proches et des professions', 'Choisir le bon article possessif pour chaque possesseur', 'Choisir la bonne terminaison au nominatif, à l’accusatif et au datif'] },

    // ───────────── 1 · Who owns it? ─────────────
    { kind: 'chapter', title: 'Wem gehört es? Alle Possessivartikel', titleFr: 'À qui est-ce ? Tous les articles possessifs', blurb: 'One article for every owner.', blurbFr: 'Un article pour chaque possesseur.' },

    { kind: 'situation', title: 'Meine Familie', titleFr: 'Ma famille',
      setting: 'Tim asks Lara about her family.', settingFr: 'Tim interroge Lara sur sa famille.',
      lines: [
        line('Tim', 'Erzähl mir von deiner Familie, Lara!', 'Tell me about your family, Lara!', 'Parle-moi de ta famille, Lara !'),
        line('Lara', 'Gern. Mein Opa war Bäcker. Er ist immer um vier Uhr aufgestanden.', 'Gladly. My grandpa was a baker. He always got up at four.', 'Volontiers. Mon grand-père était boulanger. Il se levait toujours à quatre heures.'),
        line('Tim', 'Und dein Onkel und deine Tante?', 'And your uncle and your aunt?', 'Et ton oncle et ta tante ?'),
        line('Lara', 'Meine Tante ist Ingenieurin, und mein Onkel ist Verkäufer. Sie wohnen in Hamburg.', 'My aunt is an engineer, and my uncle is a salesman. They live in Hamburg.', 'Ma tante est ingénieure, et mon oncle est vendeur. Ils habitent à Hambourg.'),
        line('Tim', 'Hast du auch Cousins?', 'Do you have cousins too?', 'As-tu aussi des cousins ?'),
        line('Lara', 'Ja, meine Cousine studiert in Wien. Mein Neffe ist fünf Jahre alt, und meine Nichte spielt gern Fußball.', 'Yes, my cousin studies in Vienna. My nephew is five years old, and my niece likes playing football.', 'Oui, ma cousine étudie à Vienne. Mon neveu a cinq ans, et ma nièce aime jouer au football.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l13-e13', prompt: 'What was Lara’s grandpa?', promptFr: 'Quel était le métier du grand-père de Lara ?', options: ['A baker', 'An engineer', 'A salesman'], optionsFr: ['Boulanger', 'Ingénieur', 'Vendeur'], answer: 0, explain: 'She says: “Mein Opa war Bäcker.”', explainFr: 'Elle dit : « Mein Opa war Bäcker. »', hint: 'Look at Lara’s first answer.', hintFr: 'Regarde la première réponse de Lara.' } },

    { kind: 'wordgroup', title: 'Verwandte', titleFr: 'Les proches',
      items: [{ id: 'a2l13-opa', german: 'der Opa', english: 'the grandpa', french: 'le papi / le grand-père', gender: 'der', syllables: ['O', 'pa'], pronunciation: 'dair OH-pah', example: { de: 'Mein Opa war Bäcker.', en: 'My grandpa was a baker.', fr: 'Mon grand-père était boulanger.' } }, { id: 'a2l13-onkel', german: 'der Onkel', english: 'the uncle', french: 'l’oncle', gender: 'der', syllables: ['ON', 'kel'], pronunciation: 'dair ON-kel', example: { de: 'Mein Onkel wohnt in Hamburg.', en: 'My uncle lives in Hamburg.', fr: 'Mon oncle habite à Hambourg.' } }, { id: 'a2l13-tante', german: 'die Tante', english: 'the aunt', french: 'la tante', gender: 'die', syllables: ['TAN', 'te'], pronunciation: 'dee TAHN-teh', example: { de: 'Meine Tante arbeitet im Krankenhaus.', en: 'My aunt works at the hospital.', fr: 'Ma tante travaille à l’hôpital.' } }, { id: 'a2l13-cousin', german: 'der Cousin / die Cousine', english: 'the cousin (male / female)', french: 'le cousin / la cousine', gender: 'der', syllables: ['cou', 'SIN'], pronunciation: 'dair koo-ZEN / dee koo-ZEE-neh', example: { de: 'Meine Cousine studiert in Wien.', en: 'My cousin studies in Vienna.', fr: 'Ma cousine étudie à Vienne.' } }, { id: 'a2l13-neffe', german: 'der Neffe', english: 'the nephew', french: 'le neveu', gender: 'der', syllables: ['NEF', 'fe'], pronunciation: 'dair NEF-feh', example: { de: 'Mein Neffe ist fünf Jahre alt.', en: 'My nephew is five years old.', fr: 'Mon neveu a cinq ans.' } }, { id: 'a2l13-nichte', german: 'die Nichte', english: 'the niece', french: 'la nièce', gender: 'die', syllables: ['NICH', 'te'], pronunciation: 'dee NIKH-teh', example: { de: 'Meine Nichte spielt gern Fußball.', en: 'My niece likes playing football.', fr: 'Ma nièce aime jouer au football.' } }, { id: 'a2l13-schwiegermutter', german: 'die Schwiegermutter', english: 'the mother-in-law', french: 'la belle-mère', gender: 'die', syllables: ['SCHWIE', 'ger', 'mut', 'ter'], pronunciation: 'dee SHVEE-ger-moot-ter', example: { de: 'Meine Schwiegermutter kocht sehr gut.', en: 'My mother-in-law cooks very well.', fr: 'Ma belle-mère cuisine très bien.' } }] },

    { kind: 'wordgroup', title: 'Berufe und Arbeit', titleFr: 'Métiers et travail',
      items: [{ id: 'a2l13-baecker', german: 'der Bäcker / die Bäckerin', english: 'the baker', french: 'le boulanger / la boulangère', gender: 'der', syllables: ['BÄ', 'cker'], pronunciation: 'dair BEK-ker', example: { de: 'Der Bäcker steht um vier Uhr auf.', en: 'The baker gets up at four o’clock.', fr: 'Le boulanger se lève à quatre heures.' } }, { id: 'a2l13-ingenieur', german: 'der Ingenieur / die Ingenieurin', english: 'the engineer', french: 'l’ingénieur / l’ingénieure', gender: 'der', syllables: ['in', 'ge', 'NIEUR'], pronunciation: 'dair in-zhen-YUR', example: { de: 'Ihr Mann ist Ingenieur.', en: 'Her husband is an engineer.', fr: 'Son mari est ingénieur.' } }, { id: 'a2l13-verkaeufer', german: 'der Verkäufer / die Verkäuferin', english: 'the salesperson', french: 'le vendeur / la vendeuse', gender: 'der', syllables: ['ver', 'KÄU', 'fer'], pronunciation: 'dair fair-KOY-fer', example: { de: 'Sein Bruder ist Verkäufer.', en: 'His brother is a salesman.', fr: 'Son frère est vendeur.' } }, { id: 'a2l13-kollege', german: 'der Kollege / die Kollegin', english: 'the colleague', french: 'le collègue / la collègue', gender: 'der', syllables: ['kol', 'LE', 'ge'], pronunciation: 'dair kol-LAY-geh', example: { de: 'Mein Kollege heißt Jan.', en: 'My colleague is called Jan.', fr: 'Mon collègue s’appelle Jan.' } }, { id: 'a2l13-chef', german: 'der Chef / die Chefin', english: 'the boss', french: 'le chef / la cheffe', gender: 'der', syllables: ['CHEF'], pronunciation: 'dair shef', example: { de: 'Unsere Chefin ist sehr nett.', en: 'Our boss is very nice.', fr: 'Notre cheffe est très sympa.' } }, { id: 'a2l13-firma', german: 'die Firma', english: 'the company', french: 'l’entreprise', gender: 'die', syllables: ['FIR', 'ma'], pronunciation: 'dee FEER-mah', example: { de: 'Unsere Firma ist nicht groß.', en: 'Our company is not big.', fr: 'Notre entreprise n’est pas grande.' } }, { id: 'a2l13-buero', german: 'das Büro', english: 'the office', french: 'le bureau', gender: 'das', syllables: ['bü', 'RO'], pronunciation: 'dahs bew-ROH', example: { de: 'Mein Büro ist im dritten Stock.', en: 'My office is on the third floor.', fr: 'Mon bureau est au troisième étage.' } }] },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l13-e12', word: 'Firma', answer: 'die', hint: 'Words ending in -a are often feminine.', hintFr: 'Les mots en -a sont souvent féminins.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l13-e8', tokens: ['Opa', 'war', 'Mein', 'Bäcker'], answer: ['Mein', 'Opa', 'war', 'Bäcker'], hint: 'Possessive + noun first, then the verb.', hintFr: 'D’abord l’article possessif + nom, puis le verbe.' } },

    { kind: 'grammar', note: {
      id: 'a2l13-possessiv', title: 'All possessive articles', titleFr: 'Tous les articles possessifs',
      lead: 'The owner decides the stem (mein, dein, sein, ihr, unser, euer, ihr, Ihr). The noun decides the ending.',
      leadFr: 'Le possesseur décide le radical (mein, dein, sein, ihr, unser, euer, ihr, Ihr). Le nom décide la terminaison.',
      explanationMd: 'Every person has its own possessive article. It depends on **who owns** something: **ich → mein**, **du → dein**, **er / es → sein**, **sie → ihr**, **wir → unser**, **ihr → euer**, **sie (they) → ihr**, **Sie → Ihr**. The **ending** depends on the **noun** that follows (gender, number, case): **seine Mutter, seinen Vater**. Careful: **euer** loses its second **e** before an ending (**eure, euren**), and **Ihr** with a capital is the formal “your”.',
      explanationMdFr: 'Chaque personne a son article possessif. Il dépend de **qui possède** : **ich → mein**, **du → dein**, **er / es → sein**, **sie → ihr**, **wir → unser**, **ihr → euer**, **sie (ils) → ihr**, **Sie → Ihr**. La **terminaison** dépend du **nom** qui suit (genre, nombre, cas) : **seine Mutter, seinen Vater**. Attention : **euer** perd son deuxième **e** devant une terminaison (**eure, euren**), et **Ihr** avec une majuscule est le « votre » de politesse.',
      tables: [{ title: 'The owner decides the stem', titleFr: 'Le possesseur décide le radical', headers: ['Owner', 'Possessive', 'Example'], headersFr: ['Possesseur', 'Possessif', 'Exemple'],
        rows: [['ich', 'mein', 'Mein Opa war Bäcker.'], ['du', 'dein', 'Wo arbeitet deine Tante?'], ['er / es', 'sein', 'Sein Bruder ist Verkäufer.'], ['sie (she)', 'ihr', 'Anna liebt ihren Beruf.'], ['wir', 'unser', 'Unser Haus ist neu.'], ['ihr (you, pl.)', 'euer', 'Wo ist eure Mutter?'], ['sie (they)', 'ihr', 'Sie besuchen ihre Oma.'], ['Sie (formal)', 'Ihr', 'Wie heißt Ihr Chef?']],
        rowsFr: [['ich', 'mein', 'Mein Opa war Bäcker.'], ['du', 'dein', 'Wo arbeitet deine Tante?'], ['er / es', 'sein', 'Sein Bruder ist Verkäufer.'], ['sie (elle)', 'ihr', 'Anna liebt ihren Beruf.'], ['wir', 'unser', 'Unser Haus ist neu.'], ['ihr (vous, pl.)', 'euer', 'Wo ist eure Mutter?'], ['sie (ils)', 'ihr', 'Sie besuchen ihre Oma.'], ['Sie (politesse)', 'Ihr', 'Wie heißt Ihr Chef?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Anna', role: 'subject' }, { text: 'liebt', role: 'verb' }, { text: 'ihren Beruf.', role: 'accusative' }], en: 'Anna loves her job.', fr: 'Anna aime son métier.' },
        { parts: [{ text: 'Tom und Lea', role: 'subject' }, { text: 'besuchen', role: 'verb' }, { text: 'ihre Oma.', role: 'accusative' }], en: 'Tom and Lea visit their grandma.', fr: 'Tom et Lea rendent visite à leur grand-mère.' },
      ],
      contrast: {
        a: { label: 'sein / ihr / Ihr', labelFr: 'sein / ihr / Ihr', note: 'his · her or their · formal your', noteFr: 'son (à lui) · son (à elle) ou leur · votre (politesse)', examples: [g('Tom liebt seinen Beruf.', 'Tom loves his job.', 'Tom aime son métier.'), g('Wie heißt Ihr Chef, Frau Weber?', 'What is your boss’s name, Ms Weber?', 'Comment s’appelle votre chef, Madame Weber ?')] },
        b: { label: 'unser / euer', labelFr: 'unser / euer', note: 'our · your (plural)', noteFr: 'notre · votre (pluriel)', examples: [g('Unsere Chefin ist sehr nett.', 'Our boss is very nice.', 'Notre cheffe est très sympa.'), g('Kinder, wo sind eure Jacken?', 'Children, where are your jackets?', 'Les enfants, où sont vos vestes ?')] },
      },
      examples: [
        g('Anna liebt ihren Beruf.', 'Anna loves her job.', 'Anna aime son métier.'),
        g('Tom und Lea besuchen ihre Oma.', 'Tom and Lea visit their grandma.', 'Tom et Lea rendent visite à leur grand-mère.'),
        g('Wie heißt Ihr Chef, Frau Weber?', 'What is your boss’s name, Ms Weber?', 'Comment s’appelle votre chef, Madame Weber ?'),
        g('Kinder, wo sind eure Jacken?', 'Children, where are your jackets?', 'Les enfants, où sont vos vestes ?'),
        g('Unser Haus ist neu.', 'Our house is new.', 'Notre maison est neuve.'),
        g('Mein Kollege heißt Jan.', 'My colleague is called Jan.', 'Mon collègue s’appelle Jan.'),
        g('Unsere Firma ist nicht groß.', 'Our company is not big.', 'Notre entreprise n’est pas grande.'),
      ],
      mistakes: [
        { wrong: 'Anna liebt seinen Beruf. (her own job)', right: 'Anna liebt ihren Beruf.', why: 'A woman’s own things take ihr-.', whyFr: 'Les affaires d’une femme prennent ihr-.' },
        { wrong: 'Kinder, wo sind euere Jacken?', right: 'Kinder, wo sind eure Jacken?', why: 'euer loses its second e before an ending.', whyFr: 'euer perd son deuxième e devant une terminaison.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'match', id: 'a2l13-e7', pairs: [{ de: 'wir', en: 'unser (our)', fr: 'unser (notre)' }, { de: 'ihr (you, plural)', en: 'euer (your)', fr: 'euer (votre)' }, { de: 'Sie (formal)', en: 'Ihr (your)', fr: 'Ihr (votre)' }, { de: 'sie (they)', en: 'ihr (their)', fr: 'ihr (leur)' }], hint: 'Match each pronoun with its possessive article.', hintFr: 'Associe chaque pronom à son article possessif.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l13-e1', prompt: 'Das ist ___ Haus. (wir)', promptFr: 'Das ist ___ Haus. (wir)', options: ['unser', 'unsere', 'unseren'], answer: 0, explain: '"das Haus" is neuter and Nominativ, so no ending: unser Haus.', explainFr: '« das Haus » est neutre au nominatif, donc pas de terminaison : unser Haus.', hint: 'Neuter in the Nominativ: no ending.', hintFr: 'Neutre au nominatif : pas de terminaison.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l13-e4', prompt: 'Anna kennt ___ Chef gut. (her)', promptFr: 'Anna kennt ___ Chef gut. (son, à elle)', options: ['ihr', 'ihren', 'ihrem'], answer: 1, explain: '"der Chef" is masculine, Akkusativ (object): ihren Chef.', explainFr: '« der Chef » est masculin à l’accusatif (COD) : ihren Chef.', hint: 'Direct object, masculine → -en.', hintFr: 'COD, masculin → -en.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l13-e11', prompt: 'Kinder, wo ist ___ Mutter?', promptFr: 'Les enfants, où est ___ Mutter ?', options: ['euer', 'eure', 'euere'], answer: 1, explain: '"euer" loses its second e before an ending: eure Mutter.', explainFr: '« euer » perd son deuxième e devant une terminaison : eure Mutter.', hint: 'Feminine ending -e, and the middle e disappears.', hintFr: 'Terminaison féminine -e, et le e du milieu disparaît.' } },

    // ───────────── 2 · Nominative and accusative ─────────────
    { kind: 'chapter', title: 'Nominativ und Akkusativ', titleFr: 'Nominatif et accusatif', blurb: 'The same endings as ein and kein.', blurbFr: 'Les mêmes terminaisons que ein et kein.' },

    { kind: 'situation', title: 'Wen besuchst du?', titleFr: 'Chez qui vas-tu ?',
      setting: 'Tim and Lara talk about the weekend.', settingFr: 'Tim et Lara parlent du week-end.',
      lines: [
        line('Tim', 'Wen besuchst du am Wochenende?', 'Whom are you visiting at the weekend?', 'Chez qui vas-tu ce week-end ?'),
        line('Lara', 'Ich besuche meinen Onkel in Hamburg. Und du?', 'I’m visiting my uncle in Hamburg. And you?', 'Je rends visite à mon oncle à Hambourg. Et toi ?'),
        line('Tim', 'Ich besuche meine Schwiegermutter. Sie kocht sehr gut.', 'I’m visiting my mother-in-law. She cooks very well.', 'Je rends visite à ma belle-mère. Elle cuisine très bien.'),
        line('Lara', 'Kennst du unseren Chef?', 'Do you know our boss?', 'Connais-tu notre chef ?'),
        line('Tim', 'Ja, aber ich kenne seine Frau nicht.', 'Yes, but I don’t know his wife.', 'Oui, mais je ne connais pas sa femme.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l13-e14', prompt: 'Whom does Lara visit at the weekend?', promptFr: 'Chez qui Lara va-t-elle ce week-end ?', options: ['Her uncle', 'Her aunt', 'Her grandpa'], optionsFr: ['Son oncle', 'Sa tante', 'Son grand-père'], answer: 0, explain: 'She says: “Ich besuche meinen Onkel in Hamburg.”', explainFr: 'Elle dit : « Ich besuche meinen Onkel in Hamburg. »', hint: 'Look for “meinen”.', hintFr: 'Cherche « meinen ».' } },

    { kind: 'grammar', note: {
      id: 'a2l13-nom-akk', title: 'Possessive articles in nominative and accusative', titleFr: 'Les possessifs au nominatif et à l’accusatif',
      lead: 'Same endings as ein / kein. Only the masculine changes between nominative and accusative: -en.',
      leadFr: 'Les mêmes terminaisons que ein / kein. Seul le masculin change entre nominatif et accusatif : -en.',
      explanationMd: 'Possessive articles take the **same endings as ein / kein**. Only the **masculine** changes between nominative and accusative (**-en**): feminine and plural always end in **-e**, neuter has no ending. Use the **nominative** for the subject and after **sein, werden, heißen**; use the **accusative** for the direct object (**besuchen, lieben, haben, kennen, brauchen**).',
      explanationMdFr: 'Les articles possessifs prennent les **mêmes terminaisons que ein / kein**. Seul le **masculin** change entre nominatif et accusatif (**-en**) : le féminin et le pluriel finissent toujours en **-e**, le neutre n’a pas de terminaison. Utilise le **nominatif** pour le sujet et après **sein, werden, heißen** ; utilise l’**accusatif** pour le complément d’objet direct (**besuchen, lieben, haben, kennen, brauchen**).',
      tables: [{ title: 'mein- in nominative and accusative', titleFr: 'mein- au nominatif et à l’accusatif', headers: ['Case', 'm (der)', 'f (die)', 'n (das)', 'plural'], headersFr: ['Cas', 'm (der)', 'f (die)', 'n (das)', 'pluriel'],
        rows: [['Nominative', 'mein Vater', 'meine Mutter', 'mein Kind', 'meine Eltern'], ['Accusative', 'meinen Vater', 'meine Mutter', 'mein Kind', 'meine Eltern']],
        rowsFr: [['Nominatif', 'mein Vater', 'meine Mutter', 'mein Kind', 'meine Eltern'], ['Accusatif', 'meinen Vater', 'meine Mutter', 'mein Kind', 'meine Eltern']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Mein Onkel', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'Ingenieur.', role: 'other' }], en: 'My uncle is an engineer.', fr: 'Mon oncle est ingénieur.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'besuche', role: 'verb' }, { text: 'meinen Onkel', role: 'accusative' }, { text: 'in Hamburg.', role: 'place' }], en: 'I visit my uncle in Hamburg.', fr: 'Je rends visite à mon oncle à Hambourg.' },
      ],
      contrast: {
        a: { label: 'Nominative: the subject', labelFr: 'Nominatif : le sujet', note: 'mein Onkel', noteFr: 'mein Onkel', examples: [g('Mein Onkel ist Ingenieur.', 'My uncle is an engineer.', 'Mon oncle est ingénieur.'), g('Unser Chef ist nett.', 'Our boss is nice.', 'Notre chef est sympa.')] },
        b: { label: 'Accusative: the object', labelFr: 'Accusatif : l’objet', note: 'meinen Onkel', noteFr: 'meinen Onkel', examples: [g('Ich besuche meinen Onkel in Hamburg.', 'I visit my uncle in Hamburg.', 'Je rends visite à mon oncle à Hambourg.'), g('Sie kennt unseren Chef nicht.', 'She does not know our boss.', 'Elle ne connaît pas notre chef.')] },
      },
      examples: [
        g('Mein Onkel ist Ingenieur.', 'My uncle is an engineer.', 'Mon oncle est ingénieur.'),
        g('Ich besuche meinen Onkel in Hamburg.', 'I visit my uncle in Hamburg.', 'Je rends visite à mon oncle à Hambourg.'),
        g('Sie kennt unseren Chef nicht.', 'She does not know our boss.', 'Elle ne connaît pas notre chef.'),
        g('Wir haben unsere Firma 2019 gegründet.', 'We founded our company in 2019.', 'Nous avons fondé notre entreprise en 2019.'),
        g('Ich kenne seine Frau nicht.', 'I do not know his wife.', 'Je ne connais pas sa femme.'),
        g('Meine Schwiegermutter kocht sehr gut.', 'My mother-in-law cooks very well.', 'Ma belle-mère cuisine très bien.'),
      ],
      mistakes: [
        { wrong: 'Ich besuche mein Onkel.', right: 'Ich besuche meinen Onkel.', why: 'Onkel is masculine and is the object: -en.', whyFr: 'Onkel est masculin et complément d’objet : -en.' },
        { wrong: 'Ich kenne meinen Mutter nicht.', right: 'Ich kenne meine Mutter nicht.', why: 'Feminine nouns do not change: meine.', whyFr: 'Les noms féminins ne changent pas : meine.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l13-e2', prompt: 'Wo arbeitet ___ Tante? (your, du — Nominativ)', promptFr: 'Wo arbeitet ___ Tante ? (ton, du — nominatif)', answer: 'deine', hint: '"die Tante" is feminine: dein + e', hintFr: '« die Tante » est féminin : dein + e' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l13-e3', prompt: 'Ich besuche ___ Onkel in Hamburg. (my — Akkusativ)', promptFr: 'Ich besuche ___ Onkel in Hamburg. (mon — accusatif)', answer: 'meinen', hint: 'Masculine in the Akkusativ: -en', hintFr: 'Masculin à l’accusatif : -en' } },

    // ───────────── 3 · Dative ─────────────
    { kind: 'chapter', title: 'Possessivartikel im Dativ', titleFr: 'Les possessifs au datif', blurb: 'mit meinem Bruder, bei meinen Eltern.', blurbFr: 'mit meinem Bruder, bei meinen Eltern.' },

    { kind: 'situation', title: 'Mit wem?', titleFr: 'Avec qui ?',
      setting: 'Tim asks Lara who she lives with and calls.', settingFr: 'Tim demande à Lara avec qui elle vit et téléphone.',
      lines: [
        line('Tim', 'Mit wem wohnst du?', 'Who do you live with?', 'Avec qui habites-tu ?'),
        line('Lara', 'Ich wohne bei meinen Eltern.', 'I live with my parents.', 'J’habite chez mes parents.'),
        line('Tim', 'Und telefonierst du oft mit deiner Schwester?', 'And do you often phone your sister?', 'Et téléphones-tu souvent à ta sœur ?'),
        line('Lara', 'Ja, jeden Tag. Heute gratulieren wir unserem Opa zum Geburtstag.', 'Yes, every day. Today we congratulate our grandpa on his birthday.', 'Oui, tous les jours. Aujourd’hui, nous souhaitons un bon anniversaire à notre grand-père.'),
        line('Tim', 'Wie schön! Grüß ihn von mir.', 'How nice! Say hello to him from me.', 'Comme c’est bien ! Salue-le de ma part.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l13-e15', prompt: 'Who does Lara live with?', promptFr: 'Avec qui Lara habite-t-elle ?', options: ['Her parents', 'Her sister', 'Her grandpa'], optionsFr: ['Ses parents', 'Sa sœur', 'Son grand-père'], answer: 0, explain: 'She says: “Ich wohne bei meinen Eltern.”', explainFr: 'Elle dit : « Ich wohne bei meinen Eltern. »', hint: 'Look for “bei”.', hintFr: 'Cherche « bei ».' } },

    { kind: 'grammar', note: {
      id: 'a2l13-dativ', title: 'Possessive articles in the dative', titleFr: 'Les possessifs au datif',
      lead: 'Dative endings: -em (m, n), -er (f), -en (plural, and the noun adds -n).',
      leadFr: 'Terminaisons du datif : -em (m, n), -er (f), -en (pluriel, et le nom prend -n).',
      explanationMd: 'In the **dative** the endings are **-em** (masculine, neuter), **-er** (feminine) and **-en** (plural, and the noun adds **-n**: **Eltern, Kindern, Freunden**). You need the dative after **mit, bei, von, zu, nach, aus** and for the **indirect object** (**geben, schenken, helfen, gehören, gratulieren**).',
      explanationMdFr: 'Au **datif**, les terminaisons sont **-em** (masculin, neutre), **-er** (féminin) et **-en** (pluriel, et le nom prend **-n** : **Eltern, Kindern, Freunden**). Il te faut le datif après **mit, bei, von, zu, nach, aus** et pour le **complément d’objet indirect** (**geben, schenken, helfen, gehören, gratulieren**).',
      tables: [{ title: 'mein- in all cases', titleFr: 'mein- à tous les cas', headers: ['Case', 'm (der)', 'f (die)', 'n (das)', 'plural'], headersFr: ['Cas', 'm (der)', 'f (die)', 'n (das)', 'pluriel'],
        rows: [['Nominative', 'mein', 'meine', 'mein', 'meine'], ['Accusative', 'meinen', 'meine', 'mein', 'meine'], ['Dative', 'meinem', 'meiner', 'meinem', 'meinen (+ -n)']],
        rowsFr: [['Nominatif', 'mein', 'meine', 'mein', 'meine'], ['Accusatif', 'meinen', 'meine', 'mein', 'meine'], ['Datif', 'meinem', 'meiner', 'meinem', 'meinen (+ -n)']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'wohne', role: 'verb' }, { text: 'bei meinen Eltern.', role: 'dative' }], en: 'I live with my parents.', fr: 'J’habite chez mes parents.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'telefoniert', role: 'verb' }, { text: 'mit seiner Schwester.', role: 'dative' }], en: 'He phones his sister.', fr: 'Il téléphone à sa sœur.' },
      ],
      contrast: {
        a: { label: 'After mit, bei, von, zu', labelFr: 'Après mit, bei, von, zu', note: 'always dative', noteFr: 'toujours le datif', examples: [g('Ich wohne bei meinen Eltern.', 'I live with my parents.', 'J’habite chez mes parents.'), g('Er telefoniert mit seiner Schwester.', 'He phones his sister.', 'Il téléphone à sa sœur.')] },
        b: { label: 'Indirect object', labelFr: 'Objet indirect', note: 'gratulieren, helfen, geben', noteFr: 'gratulieren, helfen, geben', examples: [g('Wir gratulieren unserem Opa zum Geburtstag.', 'We congratulate our grandpa on his birthday.', 'Nous félicitons notre grand-père pour son anniversaire.'), g('Habt ihr euren Kollegen schon geholfen?', 'Have you already helped your colleagues?', 'Avez-vous déjà aidé vos collègues ?')] },
      },
      examples: [
        g('Ich wohne bei meinen Eltern.', 'I live with my parents.', 'J’habite chez mes parents.'),
        g('Er telefoniert mit seiner Schwester.', 'He phones his sister.', 'Il téléphone à sa sœur.'),
        g('Wir gratulieren unserem Opa zum Geburtstag.', 'We congratulate our grandpa on his birthday.', 'Nous félicitons notre grand-père pour son anniversaire.'),
        g('Habt ihr euren Kollegen schon geholfen?', 'Have you already helped your colleagues?', 'Avez-vous déjà aidé vos collègues ?'),
        g('Sie spielt mit ihrem Neffen.', 'She plays with her nephew.', 'Elle joue avec son neveu.'),
        g('Ich fahre zu meiner Tante.', 'I am going to my aunt’s.', 'Je vais chez ma tante.'),
      ],
      mistakes: [
        { wrong: 'Ich wohne bei meine Eltern.', right: 'Ich wohne bei meinen Eltern.', why: 'bei takes the dative: plural -en.', whyFr: 'bei prend le datif : pluriel -en.' },
        { wrong: 'Er telefoniert mit sein Schwester.', right: 'Er telefoniert mit seiner Schwester.', why: 'Feminine dative: -er.', whyFr: 'Datif féminin : -er.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l13-e5', prompt: 'Ich wohne bei ___ Eltern. (my — Dativ plural)', promptFr: 'Ich wohne bei ___ Eltern. (mes — datif pluriel)', answer: 'meinen', hint: 'Dativ plural always ends in -en.', hintFr: 'Datif pluriel : toujours -en.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l13-e6', prompt: 'Er telefoniert mit ___ Schwester. (his — Dativ)', promptFr: 'Er telefoniert mit ___ Schwester. (sa, à lui — datif)', answer: 'seiner', hint: 'Feminine in the Dativ: -er', hintFr: 'Féminin au datif : -er' } },

    { kind: 'pronunciation', focus: 'eu = "oy", and the sound of ü in Büro / Bäcker', focusFr: 'eu = « oy », et le son ü dans Büro / Bäcker', items: [{ id: 'a2l13-euer-pron', german: 'euer', english: 'your (plural)', french: 'votre (pluriel)', gender: null, syllables: ['EU', 'er'], pronunciation: 'OY-er', example: { de: 'Wo ist euer Auto?', en: 'Where is your car?', fr: 'Où est votre voiture ?' } }, { id: 'a2l13-unser-pron', german: 'unser', english: 'our', french: 'notre', gender: null, syllables: ['UN', 'ser'], pronunciation: 'OON-zer', example: { de: 'Unser Haus ist neu.', en: 'Our house is new.', fr: 'Notre maison est neuve.' } }, { id: 'a2l13-schwiegermutter-pron', german: 'Schwiegermutter', english: 'mother-in-law', french: 'belle-mère', gender: 'die', syllables: ['SCHWIE', 'ger', 'mut', 'ter'], pronunciation: 'SHVEE-ger-moot-ter', example: { de: 'Ihre Schwiegermutter ist nett.', en: 'Her mother-in-law is nice.', fr: 'Sa belle-mère est gentille.' } }, { id: 'a2l13-buero-pron', german: 'Büro', english: 'office', french: 'bureau', gender: 'das', syllables: ['bü', 'RO'], pronunciation: 'bew-ROH', example: { de: 'Mein Büro ist hell.', en: 'My office is bright.', fr: 'Mon bureau est lumineux.' } }, { id: 'a2l13-ingenieur-pron', german: 'Ingenieur', english: 'engineer', french: 'ingénieur', gender: 'der', syllables: ['in', 'ge', 'NIEUR'], pronunciation: 'in-zhen-YUR', example: { de: 'Mein Vater ist Ingenieur.', en: 'My father is an engineer.', fr: 'Mon père est ingénieur.' } }] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l13-e9', prompt: 'Listen. What is the uncle’s job?', promptFr: 'Écoute. Quel est le métier de l’oncle ?', audio: { ttsText: 'Meine Tante ist Ingenieurin und mein Onkel ist Bäcker.' }, options: ['Baker', 'Engineer', 'Teacher'], optionsFr: ['Boulanger', 'Ingénieur', 'Enseignant'], answer: 0, hint: 'Listen for "Onkel".', hintFr: 'Écoute « Onkel ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l13-e10', prompt: 'Listen. Who does the speaker live with?', promptFr: 'Écoute. Chez qui habite la personne ?', audio: { ttsText: 'Ich wohne bei meiner Tante.' }, options: ['Her aunt', 'Her parents', 'Her uncle'], optionsFr: ['Sa tante', 'Ses parents', 'Son oncle'], answer: 0, hint: '"meiner" is feminine singular in the Dativ.', hintFr: '« meiner » est le féminin singulier au datif.' } },

    { kind: 'wrapup',
      summary: 'You can now use **all possessive articles** (mein, dein, sein, ihr, unser, euer, ihr, Ihr) with the right ending in **nominative, accusative and dative**, and talk about relatives and their jobs. 🎉',
      summaryFr: 'Tu sais maintenant utiliser **tous les articles possessifs** (mein, dein, sein, ihr, unser, euer, ihr, Ihr) avec la bonne terminaison au **nominatif, à l’accusatif et au datif**, et parler de tes proches et de leurs métiers. 🎉',
      card: { title: 'Possessive articles on one page', titleFr: 'Les articles possessifs en une page', sections: [
        { heading: 'The stems', headingFr: 'Les radicaux', rows: [g('mein · dein · sein · ihr · unser · euer · ihr · Ihr', 'by owner', 'selon le possesseur')] },
        { heading: 'The endings (with mein-)', headingFr: 'Les terminaisons (avec mein-)', rows: [g('Nom: mein · meine · mein · meine', 'm · f · n · plural', 'm · f · n · pluriel'), g('Akk: meinen · meine · mein · meine', 'only m changes', 'seul le m change'), g('Dat: meinem · meiner · meinem · meinen', 'dative', 'datif')] },
        { heading: 'Careful', headingFr: 'Attention', rows: [g('euer → eure, euren', 'loses the second e', 'perd le deuxième e'), g('Ihr (capital) = formal your', 'Ihr Chef, Frau Weber?', 'Ihr Chef, Frau Weber ?')] },
      ] } },
  ],
};
