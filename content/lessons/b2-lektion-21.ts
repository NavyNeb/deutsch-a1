import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion21: Lesson = {
  id: 'b2-l21', level: 'B2', module: 7, number: 21,
  title: { de: 'Politik und Recht', en: 'Politics and law', fr: 'Politique et droit' },
  theme: 'Institutions, elections, rights and duties: formal political vocabulary and nouns with prepositions (das Recht auf, die Pflicht zu, die Forderung nach)', themeFr: 'Institutions, élections, droits et devoirs : vocabulaire politique formel et noms avec prépositions (das Recht auf, die Pflicht zu, die Forderung nach)',
  goals: ['Talk about elections, parties and institutions', 'Discuss rights and duties', 'Use nouns with fixed prepositions', 'Follow and report political news'], goalsFr: ['Parler d’élections, de partis et d’institutions', 'Discuter de droits et de devoirs', 'Employer des noms à préposition fixe', 'Suivre et rapporter l’actualité politique'],
  canDo: g('Ich kann politische Nachrichten verstehen und wiedergeben und Substantive mit festen Präpositionen richtig verwenden.', 'I can understand and report political news and use nouns with fixed prepositions correctly.', 'Je sais comprendre et rapporter des nouvelles politiques et utiliser correctement les noms à préposition fixe.'),
  steps: [
    { kind: 'intro', title: 'Politik und Recht 🏛️', titleFr: 'Politique et droit 🏛️',
      scene: 'Election night: results, coalition talks and a new law — you follow and report the news.', sceneFr: 'Soirée électorale : résultats, négociations de coalition et nouvelle loi — tu suis et rapportes l’actualité.',
      goals: ['Talk about elections, parliament and government', 'Report political news with neutral verbs and Konjunktiv I', 'Use das Recht auf, die Pflicht zu, die Forderung nach'],
      goalsFr: ['Parler des élections, du parlement et du gouvernement', 'Rapporter l’actualité politique avec des verbes neutres et le Konjunktiv I', 'Utiliser das Recht auf, die Pflicht zu, die Forderung nach'] },

    // ───────────── 1 · Institutions and reporting ─────────────
    { kind: 'chapter', title: 'Wahlen und Institutionen', titleFr: 'Élections et institutions', blurb: 'Who decides — and how to report it.', blurbFr: 'Qui décide — et comment le rapporter.' },

    { kind: 'situation', title: 'Wahlabend', titleFr: 'Soirée électorale',
      setting: 'The evening news after the election.', settingFr: 'Le journal du soir après l’élection.',
      lines: [
        line('Sprecherin', 'Die Wahl findet im September statt. Der Bundestag beschließt das Gesetz. Die Regierung plant Steuersenkungen.', 'The election takes place in September. The Bundestag passes the law. The government is planning tax cuts.', 'L’élection a lieu en septembre. Le Bundestag adopte la loi. Le gouvernement prévoit des baisses d’impôts.'),
        line('Sprecherin', 'Die Parteien verhandeln über eine Koalition. Die Abstimmung ergab eine klare Mehrheit für die Reform. Die Mehrheit stimmte dafür. Das Gesetz tritt nächstes Jahr in Kraft.', 'The parties are negotiating a coalition. The vote produced a clear majority for the reform. The majority voted for it. The law comes into force next year.', 'Les partis négocient une coalition. Le vote a donné une nette majorité pour la réforme. La majorité a voté pour. La loi entre en vigueur l’an prochain.'),
        line('Sprecherin', 'Die Ministerin kündigte an, das Gesetz werde im Mai in Kraft treten. Der Sprecher bestritt, dass es Probleme gebe. Die Opposition kritisiert den Plan scharf.', 'The minister announced that the law would come into force in May. The spokesman denied that there were problems. The opposition sharply criticises the plan.', 'La ministre a annoncé que la loi entrerait en vigueur en mai. Le porte-parole a contesté qu’il y ait des problèmes. L’opposition critique vivement le plan.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l21-e11', prompt: 'When will the law come into force, according to the minister?', promptFr: 'Quand la loi entrera-t-elle en vigueur, selon la ministre ?', options: ['In May', 'In September', 'Next week'], optionsFr: ['En mai', 'En septembre', 'La semaine prochaine'], answer: 0, explain: 'The text says: “…, das Gesetz werde im Mai in Kraft treten.”', explainFr: 'Le texte dit : « …, das Gesetz werde im Mai in Kraft treten. »', hint: 'Look for “werde … in Kraft treten”.', hintFr: 'Cherche « werde … in Kraft treten ».' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l21-e10', prompt: 'Listen. What is the result?', promptFr: 'Écoute. Quel est le résultat ?', audio: { ttsText: 'Die Abstimmung ergab eine klare Mehrheit für die Reform.' }, options: ['A clear majority for the reform', 'No decision', 'A defeat'], optionsFr: ['Une nette majorité pour la réforme', 'Aucune décision', 'Une défaite'], answer: 0, hint: 'klare Mehrheit', hintFr: 'nette majorité' } },

    { kind: 'wordgroup', title: 'Wahl und Regierung', titleFr: 'Élection et gouvernement',
      items: [{ id: 'b2l21-wahl', german: 'die Wahl', english: 'the election', french: 'l’élection', gender: 'die', syllables: ['WAHL'], pronunciation: 'dee vahl', example: { de: 'Die Wahl findet im September statt.', en: 'The election takes place in September.', fr: 'L’élection a lieu en septembre.' } }, { id: 'b2l21-bundestag', german: 'der Bundestag', english: 'the federal parliament', french: 'le Bundestag', gender: 'der', syllables: ['der', 'BUN', 'des', 'tag'], pronunciation: 'dair BOON-des-tahk', example: { de: 'Der Bundestag beschließt das Gesetz.', en: 'The Bundestag passes the law.', fr: 'Le Bundestag adopte la loi.' } }, { id: 'b2l21-regierung', german: 'die Regierung', english: 'the government', french: 'le gouvernement', gender: 'die', syllables: ['die', 're', 'GIE', 'rung'], pronunciation: 'dee re-GEE-roong', example: { de: 'Die Regierung plant Steuersenkungen.', en: 'The government plans tax cuts.', fr: 'Le gouvernement prévoit des baisses d’impôts.' } }, { id: 'b2l21-koalition', german: 'die Koalition', english: 'the coalition', french: 'la coalition', gender: 'die', syllables: ['die', 'ko', 'a', 'li', 'TION'], pronunciation: 'dee ko-ah-li-TSYOHN', example: { de: 'Die Parteien verhandeln über eine Koalition.', en: 'The parties negotiate a coalition.', fr: 'Les partis négocient une coalition.' } }] },

    { kind: 'wordgroup', title: 'Gesetze und Abstimmungen', titleFr: 'Lois et votes',
      items: [{ id: 'b2l21-gesetz', german: 'das Gesetz', english: 'the law', french: 'la loi', gender: 'das', syllables: ['das', 'ge', 'SETZ'], pronunciation: 'das ge-ZETS', example: { de: 'Das Gesetz tritt nächstes Jahr in Kraft.', en: 'The law comes into force next year.', fr: 'La loi entre en vigueur l’an prochain.' } }, { id: 'b2l21-abstimmung', german: 'die Abstimmung', english: 'the vote', french: 'le vote', gender: 'die', syllables: ['die', 'AB', 'stim', 'mung'], pronunciation: 'dee AHP-shtim-moong', example: { de: 'Die Abstimmung ergab eine klare Mehrheit.', en: 'The vote produced a clear majority.', fr: 'Le vote a donné une nette majorité.' } }, { id: 'b2l21-mehrheit', german: 'die Mehrheit', english: 'the majority', french: 'la majorité', gender: 'die', syllables: ['die', 'MEHR', 'heit'], pronunciation: 'dee MAIR-hite', example: { de: 'Die Mehrheit stimmte dafür.', en: 'The majority voted in favour.', fr: 'La majorité a voté pour.' } }, { id: 'b2l21-beschliessen', german: 'beschließen', english: 'to decide / pass', french: 'décider / adopter', gender: null, syllables: ['be', 'SCHLIE', 'ßen'], pronunciation: 'be-SHLEE-sen', example: { de: 'Das Parlament beschließt die Reform.', en: 'The parliament passes the reform.', fr: 'Le parlement adopte la réforme.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l21-e6', pairs: [{ de: 'die Wahl', en: 'election', fr: 'élection' }, { de: 'das Gesetz', en: 'law', fr: 'loi' }, { de: 'die Mehrheit', en: 'majority', fr: 'majorité' }, { de: 'beschließen', en: 'to pass / decide', fr: 'adopter / décider' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l21-berichten', title: 'Reporting politics: neutral verbs and Konjunktiv I', titleFr: 'Rapporter la politique : verbes neutres et Konjunktiv I',
      lead: 'Neutral reporting verbs (ankündigen, bestreiten, einräumen …) + Konjunktiv I; headlines use the present tense and nominal style.',
      leadFr: 'Verbes de rapport neutres (ankündigen, bestreiten, einräumen …) + Konjunktiv I ; les titres utilisent le présent et le style nominal.',
      explanationMd: 'Political news uses **neutral reporting verbs** and often the **Konjunktiv I** (see lesson 7): **fordern, kritisieren, betonen, ankündigen, bestätigen, bestreiten, einräumen** (to concede). **Die Ministerin kündigte an, das Gesetz werde im Mai in Kraft treten.** **Der Sprecher bestritt, dass es Probleme gebe.** **Headlines** use the **present tense** for past events and the **nominal style**: **Regierung beschließt Reform** · **Streit um Steuern**. Verbs in the **news** are mostly **third person**, often with **laut** for the source: **Laut Regierung …**',
      explanationMdFr: 'Les nouvelles politiques utilisent des **verbes de rapport neutres** et souvent le **Konjunktiv I** (voir leçon 7) : **fordern, kritisieren, betonen, ankündigen, bestätigen, bestreiten, einräumen** (concéder). **Die Ministerin kündigte an, das Gesetz werde im Mai in Kraft treten.** **Der Sprecher bestritt, dass es Probleme gebe.** Les **titres** utilisent le **présent** pour des faits passés et le **style nominal** : **Regierung beschließt Reform** · **Streit um Steuern**. Les verbes dans les **nouvelles** sont surtout à la **troisième personne**, souvent avec **laut** pour la source : **Laut Regierung …**',
      tables: [{ title: 'Reporting verbs', titleFr: 'Verbes de rapport', headers: ['Verb', 'Meaning', 'Example'], headersFr: ['Verbe', 'Sens', 'Exemple'],
        rows: [['ankündigen', 'announce', 'Die Ministerin kündigte an, das Gesetz werde in Kraft treten.'], ['bestreiten', 'deny', 'Der Sprecher bestritt, dass es Probleme gebe.'], ['einräumen', 'concede', 'Die Regierung räumte Fehler ein.'], ['kritisieren', 'criticise', 'Die Opposition kritisiert den Plan scharf.'], ['betonen / fordern', 'stress / demand', 'Sie betonte, die Reform sei notwendig.']],
        rowsFr: [['ankündigen', 'annoncer', 'Die Ministerin kündigte an, das Gesetz werde in Kraft treten.'], ['bestreiten', 'contester', 'Der Sprecher bestritt, dass es Probleme gebe.'], ['einräumen', 'concéder', 'Die Regierung räumte Fehler ein.'], ['kritisieren', 'critiquer', 'Die Opposition kritisiert den Plan scharf.'], ['betonen / fordern', 'souligner / exiger', 'Sie betonte, die Reform sei notwendig.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Die Ministerin', role: 'subject' }, { text: 'kündigte', role: 'verb' }, { text: 'an,', role: 'other' }, { text: 'das Gesetz', role: 'subject' }, { text: 'werde', role: 'verb' }, { text: 'im Mai', role: 'time' }, { text: 'in Kraft treten.', role: 'verb' }], en: 'The minister announced the law would come into force in May.', fr: 'La ministre a annoncé que la loi entrerait en vigueur en mai.' },
        { parts: [{ text: 'Der Sprecher', role: 'subject' }, { text: 'bestritt,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'es', role: 'subject' }, { text: 'Probleme', role: 'accusative' }, { text: 'gebe.', role: 'verb' }], en: 'The spokesman denied that there were problems.', fr: 'Le porte-parole a contesté qu’il y ait des problèmes.' },
      ],
      contrast: {
        a: { label: 'Headline', labelFr: 'Titre', note: 'present + nominal', noteFr: 'présent + nominal', examples: [g('Regierung beschließt Reform', 'Government passes reform', 'Le gouvernement adopte la réforme'), g('Streit um Steuern', 'Dispute over taxes', 'Dispute autour des impôts')] },
        b: { label: 'Report', labelFr: 'Compte rendu', note: 'reporting verb + Konj. I', noteFr: 'verbe de rapport + Konj. I', examples: [g('Die Ministerin kündigte an, das Gesetz werde in Kraft treten.', 'The minister announced the law would come into force.', 'La ministre a annoncé que la loi entrerait en vigueur.'), g('Der Sprecher bestritt, dass es Probleme gebe.', 'The spokesman denied that there were problems.', 'Le porte-parole a contesté qu’il y ait des problèmes.')] },
      },
      examples: [
        g('Die Ministerin kündigte an, das Gesetz werde bald in Kraft treten.', 'The minister announced the law would soon come into force.', 'La ministre a annoncé que la loi entrerait bientôt en vigueur.'),
        g('Die Opposition kritisiert den Plan scharf.', 'The opposition sharply criticises the plan.', 'L’opposition critique vivement le plan.'),
        g('Der Sprecher bestritt, dass es Probleme gebe.', 'The spokesman denied that there were problems.', 'Le porte-parole a contesté qu’il y ait des problèmes.'),
        g('Die Regierung räumte Fehler ein.', 'The government conceded mistakes.', 'Le gouvernement a reconnu des erreurs.'),
        g('Sie betonte, die Reform sei notwendig.', 'She stressed that the reform was necessary.', 'Elle a souligné que la réforme était nécessaire.'),
        g('Die Abstimmung ergab eine klare Mehrheit für die Reform.', 'The vote produced a clear majority for the reform.', 'Le vote a donné une nette majorité pour la réforme.'),
      ],
      mistakes: [
        { wrong: 'Der Sprecher bestritt, dass es Probleme gibt. (formal report)', right: 'Der Sprecher bestritt, dass es Probleme gebe.', why: 'Formal reports use the Konjunktiv I.', whyFr: 'Les comptes rendus formels utilisent le Konjunktiv I.' },
        { wrong: 'Die Regierung einräumte Fehler.', right: 'Die Regierung räumte Fehler ein.', why: 'einräumen is separable: the prefix goes to the end.', whyFr: 'einräumen est séparable : le préfixe va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l21-e4', prompt: 'Who passes laws in Germany?', promptFr: 'Qui adopte les lois en Allemagne ?', options: ['der Bundestag', 'die Polizei', 'der Zoll'], answer: 0, explain: 'The Bundestag is the federal parliament.', explainFr: 'Le Bundestag est le parlement fédéral.', hint: 'parliament', hintFr: 'parlement' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l21-e5', tokens: ['Mehrheit', 'Die', 'stimmte', 'dafür'], answer: ['Die', 'Mehrheit', 'stimmte', 'dafür'], hint: 'Subject – verb – dafür.', hintFr: 'Sujet – verbe – dafür.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l21-e7', prompt: 'Listen. What was announced?', promptFr: 'Écoute. Qu’est-ce qui a été annoncé ?', audio: { ttsText: 'Die Ministerin kündigte an, das Gesetz werde im Mai in Kraft treten.' }, options: ['A law starts in May', 'An election is cancelled', 'The minister resigns'], optionsFr: ['Une loi entre en vigueur en mai', 'Une élection est annulée', 'La ministre démissionne'], answer: 0, hint: 'in Kraft treten', hintFr: 'in Kraft treten' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l21-e9', prompt: 'Which verb means "to concede"?', promptFr: 'Quel verbe signifie « concéder » ?', options: ['einräumen', 'beschließen', 'ankündigen'], answer: 0, explain: 'einräumen = to concede / admit.', explainFr: 'einräumen = concéder / admettre.', hint: 'einräumen', hintFr: 'einräumen' } },

    // ───────────── 2 · Rights and duties ─────────────
    { kind: 'chapter', title: 'Rechte und Pflichten', titleFr: 'Droits et devoirs', blurb: 'das Recht auf · die Pflicht zu · die Forderung nach.', blurbFr: 'das Recht auf · die Pflicht zu · die Forderung nach.' },

    { kind: 'situation', title: 'Bürger und Staat', titleFr: 'Citoyens et État',
      setting: 'A civics class.', settingFr: 'Un cours d’éducation civique.',
      lines: [
        line('Lehrer', 'Jeder hat das Recht auf Bildung. Es besteht die Pflicht zur Anmeldung. Die Forderung nach höheren Löhnen wächst.', 'Everyone has the right to education. There is a duty to register. The demand for higher wages is growing.', 'Chacun a droit à l’éducation. Il existe une obligation de s’inscrire. La revendication de salaires plus élevés grandit.'),
        line('Lehrer', 'Die Meinungsfreiheit ist ein Grundrecht. Die Kritik an der Regierung wird lauter. Das Interesse an Politik wächst. Die Hoffnung auf Frieden bleibt. Die Angst vor Krieg ist groß.', 'Freedom of speech is a fundamental right. Criticism of the government is growing louder. Interest in politics is growing. The hope for peace remains. The fear of war is great.', 'La liberté d’expression est un droit fondamental. La critique du gouvernement se fait plus forte. L’intérêt pour la politique grandit. L’espoir de paix demeure. La peur de la guerre est grande.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Rechte und Forderungen', titleFr: 'Droits et revendications',
      items: [{ id: 'b2l21-recht', german: 'das Recht auf', english: 'the right to', french: 'le droit à', gender: 'das', syllables: ['das', 'RECHT', 'auf'], pronunciation: 'das rekht owf', example: { de: 'Jeder hat das Recht auf Bildung.', en: 'Everyone has the right to education.', fr: 'Chacun a droit à l’éducation.' } }, { id: 'b2l21-pflicht', german: 'die Pflicht zu', english: 'the duty to', french: 'le devoir de', gender: 'die', syllables: ['die', 'PFLICHT', 'zu'], pronunciation: 'dee pflikht tsoo', example: { de: 'Es besteht die Pflicht zur Anmeldung.', en: 'There is a duty to register.', fr: 'Il y a une obligation de déclaration.' } }, { id: 'b2l21-forderung', german: 'die Forderung nach', english: 'the demand for', french: 'l’exigence de', gender: 'die', syllables: ['die', 'FOR', 'de', 'rung', 'nach'], pronunciation: 'dee FOR-de-roong nahkh', example: { de: 'Die Forderung nach höheren Löhnen wächst.', en: 'The demand for higher wages grows.', fr: 'L’exigence de hausses de salaires grandit.' } }, { id: 'b2l21-grundrecht', german: 'das Grundrecht', english: 'the fundamental right', french: 'le droit fondamental', gender: 'das', syllables: ['das', 'GRUND', 'recht'], pronunciation: 'das GROONT-rekht', example: { de: 'Die Meinungsfreiheit ist ein Grundrecht.', en: 'Freedom of speech is a fundamental right.', fr: 'La liberté d’expression est un droit fondamental.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l21-nomen-praep', title: 'Nouns with prepositions', titleFr: 'Noms avec prépositions',
      lead: 'Many abstract nouns keep the preposition of their related verb: das Recht auf, die Pflicht zu, die Forderung nach, das Interesse an, die Angst vor.',
      leadFr: 'Beaucoup de noms abstraits gardent la préposition du verbe apparenté : das Recht auf, die Pflicht zu, die Forderung nach, das Interesse an, die Angst vor.',
      explanationMd: 'Many abstract nouns keep the preposition of their **related verb**: **das Recht auf** + Akk.: **das Recht auf Bildung**. **die Pflicht zu** + Dat.: **die Pflicht zur Teilnahme**. **die Forderung nach** + Dat.: **die Forderung nach mehr Geld**. **das Interesse an** + Dat.: **das Interesse an Politik**. **die Angst vor** + Dat.: **die Angst vor Krieg**. **die Hoffnung auf** + Akk.: **die Hoffnung auf Frieden**. **die Kritik an** + Dat.: **die Kritik an der Regierung**. Learn the **noun + preposition** pair as **one unit**.',
      explanationMdFr: 'Beaucoup de noms abstraits gardent la préposition de leur **verbe apparenté** : **das Recht auf** + Akk. : **das Recht auf Bildung**. **die Pflicht zu** + Dat. : **die Pflicht zur Teilnahme**. **die Forderung nach** + Dat. : **die Forderung nach mehr Geld**. **das Interesse an** + Dat. : **das Interesse an Politik**. **die Angst vor** + Dat. : **die Angst vor Krieg**. **die Hoffnung auf** + Akk. : **die Hoffnung auf Frieden**. **die Kritik an** + Dat. : **die Kritik an der Regierung**. Apprends le couple **nom + préposition** comme **un tout**.',
      tables: [{ title: 'Nouns with prepositions', titleFr: 'Noms avec prépositions', headers: ['Noun', 'Preposition + case', 'Example'], headersFr: ['Nom', 'Préposition + cas', 'Exemple'],
        rows: [['das Recht', 'auf + Akk.', 'das Recht auf Bildung'], ['die Pflicht', 'zu + Dat.', 'die Pflicht zur Anmeldung'], ['die Forderung', 'nach + Dat.', 'die Forderung nach höheren Löhnen'], ['das Interesse', 'an + Dat.', 'das Interesse an Politik'], ['die Angst', 'vor + Dat.', 'die Angst vor Krieg'], ['die Kritik', 'an + Dat.', 'die Kritik an der Regierung']],
        rowsFr: [['das Recht', 'auf + Akk.', 'das Recht auf Bildung'], ['die Pflicht', 'zu + Dat.', 'die Pflicht zur Anmeldung'], ['die Forderung', 'nach + Dat.', 'die Forderung nach höheren Löhnen'], ['das Interesse', 'an + Dat.', 'das Interesse an Politik'], ['die Angst', 'vor + Dat.', 'die Angst vor Krieg'], ['die Kritik', 'an + Dat.', 'die Kritik an der Regierung']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Jeder', role: 'subject' }, { text: 'hat', role: 'verb' }, { text: 'das Recht', role: 'accusative' }, { text: 'auf Bildung.', role: 'other' }], en: 'Everyone has the right to education.', fr: 'Chacun a droit à l’éducation.' },
        { parts: [{ text: 'Die Forderung', role: 'subject' }, { text: 'nach höheren Löhnen', role: 'other' }, { text: 'wächst.', role: 'verb' }], en: 'The demand for higher wages is growing.', fr: 'La revendication de salaires plus élevés grandit.' },
      ],
      contrast: {
        a: { label: 'Verb', labelFr: 'Verbe', note: 'same preposition', noteFr: 'même préposition', examples: [g('Sie hoffen auf Frieden.', 'They hope for peace.', 'Ils espèrent la paix.'), g('Sie fordern höhere Löhne.', 'They demand higher wages.', 'Ils exigent des salaires plus élevés.')] },
        b: { label: 'Noun', labelFr: 'Nom', note: 'noun + preposition', noteFr: 'nom + préposition', examples: [g('Die Hoffnung auf Frieden bleibt.', 'The hope for peace remains.', 'L’espoir de paix demeure.'), g('Die Forderung nach höheren Löhnen wächst.', 'The demand for higher wages is growing.', 'La revendication de salaires plus élevés grandit.')] },
      },
      examples: [
        g('Jeder Mensch hat das Recht auf Bildung.', 'Every person has the right to education.', 'Chaque personne a droit à l’éducation.'),
        g('Die Kritik an der Regierung wird lauter.', 'The criticism of the government grows louder.', 'La critique du gouvernement se fait plus forte.'),
        g('Es besteht die Pflicht zur Anmeldung.', 'There is a duty to register.', 'Il existe une obligation de s’inscrire.'),
        g('Die Forderung nach höheren Löhnen wächst.', 'The demand for higher wages is growing.', 'La revendication de salaires plus élevés grandit.'),
        g('Das Interesse an Politik wächst.', 'Interest in politics is growing.', 'L’intérêt pour la politique grandit.'),
        g('Die Angst vor Krieg ist groß.', 'The fear of war is great.', 'La peur de la guerre est grande.'),
      ],
      mistakes: [
        { wrong: 'das Recht für Bildung', right: 'das Recht auf Bildung', why: 'The noun Recht takes auf, not für.', whyFr: 'Le nom Recht prend auf, pas für.' },
        { wrong: 'die Angst von Krieg', right: 'die Angst vor Krieg', why: 'Angst takes vor + dative.', whyFr: 'Angst prend vor + datif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l21-e1', prompt: 'Jeder hat das Recht ___ Bildung. (to)', answer: 'auf', hint: 'das Recht auf', hintFr: 'das Recht auf' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l21-e2', prompt: 'Die Forderung ___ höheren Löhnen wächst. (for)', answer: 'nach', hint: 'die Forderung nach', hintFr: 'die Forderung nach' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l21-e3', prompt: 'Which preposition? "die Angst ___ Krieg"', promptFr: 'Quelle préposition ? « die Angst ___ Krieg »', options: ['vor', 'auf', 'an'], answer: 0, explain: 'die Angst vor + Dativ', explainFr: 'die Angst vor + datif', hint: 'Angst vor', hintFr: 'Angst vor' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l21-e8', prompt: 'Die Meinungsfreiheit ist ein ___ . (fundamental right)', answer: 'Grundrecht', hint: 'das Grundrecht', hintFr: 'das Grundrecht' } },

    { kind: 'pronunciation', focus: 'Latin-origin words stress the last syllable: "KoaliTION", "ReGIErung" (stem), "PartEI" — contrast with German stress on the first syllable', focusFr: 'Les mots d’origine latine accentuent la dernière syllabe : « KoaliTION », « ReGIErung », « PartEI » — à comparer avec l’accent allemand sur la 1re syllabe', items: [{ id: 'b2l21-koalition-pron', german: 'Koalition', english: 'coalition', french: 'coalition', gender: null, syllables: ['ko', 'a', 'li', 'TION'], pronunciation: 'ko-ah-li-TSYOHN', example: { de: 'Die Koalition hält.', en: 'The coalition holds.', fr: 'La coalition tient.' } }, { id: 'b2l21-regierung-pron', german: 'Regierung', english: 'government', french: 'gouvernement', gender: null, syllables: ['re', 'GIE', 'rung'], pronunciation: 're-GEE-roong', example: { de: 'Die Regierung entscheidet.', en: 'The government decides.', fr: 'Le gouvernement décide.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **report political news** (**kündigte an, bestritt, räumte ein** + Konjunktiv I) and use **nouns with prepositions** (**das Recht auf, die Pflicht zu, die Forderung nach**). 🎉',
      summaryFr: 'Tu sais maintenant **rapporter l’actualité politique** (**kündigte an, bestritt, räumte ein** + Konjunktiv I) et utiliser des **noms avec prépositions** (**das Recht auf, die Pflicht zu, die Forderung nach**). 🎉',
      card: { title: 'Politics on one page', titleFr: 'La politique en une page', sections: [
        { heading: 'Reporting', headingFr: 'Rapporter', rows: [g('ankündigen · bestreiten · einräumen', '+ Konjunktiv I', '+ Konjunktiv I'), g('headline: present + nominal', 'Regierung beschließt Reform', 'Regierung beschließt Reform')] },
        { heading: 'Nouns + preposition', headingFr: 'Noms + préposition', rows: [g('Recht auf · Hoffnung auf', '+ Akk.', '+ Akk.'), g('Pflicht zu · Forderung nach · Angst vor · Kritik an', '+ Dat.', '+ Dat.')] },
      ] } },
  ],
};
