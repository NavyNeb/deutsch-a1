import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion23: Lesson = {
  id: 'b2-l23', level: 'B2', module: 8, number: 23,
  title: { de: 'Bildung und Lebenslauf', en: 'Education and career paths', fr: 'Éducation et parcours' },
  theme: 'Education systems, lifelong learning and career planning; infinitive constructions (um … zu, ohne … zu, (an)statt … zu) and "zu" with nouns', themeFr: 'Systèmes éducatifs, formation tout au long de la vie et plan de carrière ; constructions infinitives (um … zu, ohne … zu, (an)statt … zu) et « zu » avec noms',
  goals: ['Describe education systems and qualifications', 'Talk about lifelong learning', 'Use infinitive clauses with um, ohne, (an)statt', 'Use "zu + infinitive" after nouns and adjectives'], goalsFr: ['Décrire systèmes éducatifs et diplômes', 'Parler de formation continue', 'Employer les infinitives avec um, ohne, (an)statt', 'Employer « zu + infinitif » après noms et adjectifs'],
  canDo: g('Ich kann über Ausbildung und Karriere sprechen und Infinitivsätze mit um … zu, ohne … zu, statt … zu sowie zu + Infinitiv nach Nomen und Adjektiven bilden.', 'I can talk about education and career and form infinitive clauses with um … zu, ohne … zu, statt … zu and zu + infinitive after nouns and adjectives.', 'Je sais parler de formation et de carrière et former des infinitives avec um … zu, ohne … zu, statt … zu et zu + infinitif après noms et adjectifs.'),
  steps: [
    { kind: 'intro', title: 'Bildung und Karriere 🎓', titleFr: 'Formation et carrière 🎓',
      scene: 'A career advisor helps a student compare training, studies and further education.', sceneFr: 'Un conseiller d’orientation aide un étudiant à comparer formation, études et formation continue.',
      goals: ['Describe training, studies and qualifications', 'Use um … zu, ohne … zu, statt … zu', 'Use zu + infinitive after nouns and adjectives'],
      goalsFr: ['Décrire formation, études et diplômes', 'Utiliser um … zu, ohne … zu, statt … zu', 'Utiliser zu + infinitif après noms et adjectifs'] },

    // ───────────── 1 · Education and infinitive clauses ─────────────
    { kind: 'chapter', title: 'Ausbildung und Studium', titleFr: 'Formation et études', blurb: 'um … zu · ohne … zu · statt … zu.', blurbFr: 'um … zu · ohne … zu · statt … zu.' },

    { kind: 'situation', title: 'Beim Studienberater', titleFr: 'Chez le conseiller d’orientation',
      setting: 'A student talks to the advisor.', settingFr: 'Un étudiant parle au conseiller.',
      lines: [
        line('Berater', 'Sie macht eine Ausbildung zur Krankenschwester. Nach dem Studium sucht er Arbeit. Er hat einen Abschluss in Informatik. Sie bekommt ein Stipendium.', 'She is training to be a nurse. After his studies he looks for work. He has a degree in computer science. She gets a scholarship.', 'Elle fait une formation d’infirmière. Après ses études, il cherche du travail. Il a un diplôme en informatique. Elle obtient une bourse.'),
        line('Studentin', 'Er lernt Deutsch, um in Berlin zu arbeiten. Sie studiert, um später Ärztin zu werden. Sie ging, ohne sich zu verabschieden.', 'He learns German in order to work in Berlin. She studies in order to become a doctor later. She left without saying goodbye.', 'Il apprend l’allemand pour travailler à Berlin. Elle étudie pour devenir médecin plus tard. Elle est partie sans dire au revoir.'),
        line('Berater', 'Statt zu lernen, schaut er Filme. Er lernt, damit seine Eltern stolz sind. Der Abschluss wird in Deutschland anerkannt. Sie hofft, ein Stipendium für das Studium im Ausland zu bekommen.', 'Instead of studying he watches films. He studies so that his parents are proud. The degree is recognised in Germany. She hopes to get a scholarship for studying abroad.', 'Au lieu d’étudier, il regarde des films. Il étudie pour que ses parents soient fiers. Le diplôme est reconnu en Allemagne. Elle espère obtenir une bourse pour étudier à l’étranger.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l23-e11', prompt: 'Why does he learn German?', promptFr: 'Pourquoi apprend-il l’allemand ?', options: ['To work in Berlin', 'To impress his parents only', 'To avoid studying'], optionsFr: ['Pour travailler à Berlin', 'Seulement pour impressionner ses parents', 'Pour éviter d’étudier'], answer: 0, explain: 'The text says: “Er lernt Deutsch, um in Berlin zu arbeiten.”', explainFr: 'Le texte dit : « Er lernt Deutsch, um in Berlin zu arbeiten. »', hint: 'Look for “um … zu”.', hintFr: 'Cherche « um … zu ».' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l23-e7', prompt: 'Listen. Why does he learn German?', promptFr: 'Écoute. Pourquoi apprend-il l’allemand ?', audio: { ttsText: 'Er lernt Deutsch, um in Berlin zu arbeiten.' }, options: ['To work in Berlin', 'To visit friends', 'To pass a test'], optionsFr: ['Pour travailler à Berlin', 'Pour voir des amis', 'Pour réussir un test'], answer: 0, hint: 'um … zu', hintFr: 'um … zu' } },

    { kind: 'wordgroup', title: 'Bildungsweg', titleFr: 'Parcours de formation',
      items: [{ id: 'b2l23-ausbildung', german: 'die Ausbildung', english: 'the vocational training', french: 'la formation professionnelle', gender: 'die', syllables: ['die', 'AUS', 'bil', 'dung'], pronunciation: 'dee OWS-bil-doong', example: { de: 'Sie macht eine Ausbildung zur Krankenschwester.', en: 'She is training to be a nurse.', fr: 'Elle fait une formation d’infirmière.' } }, { id: 'b2l23-studium', german: 'das Studium', english: 'the university studies', french: 'les études', gender: 'das', syllables: ['das', 'STU', 'di', 'um'], pronunciation: 'das SHTOO-dee-oom', example: { de: 'Nach dem Studium sucht er Arbeit.', en: 'After his studies he is looking for work.', fr: 'Après ses études, il cherche du travail.' } }, { id: 'b2l23-abschluss', german: 'der Abschluss', english: 'the degree / qualification', french: 'le diplôme', gender: 'der', syllables: ['der', 'AB', 'schluss'], pronunciation: 'dair AHP-shloos', example: { de: 'Er hat einen Abschluss in Informatik.', en: 'He has a degree in computer science.', fr: 'Il a un diplôme en informatique.' } }, { id: 'b2l23-stipendium', german: 'das Stipendium', english: 'the scholarship', french: 'la bourse', gender: 'das', syllables: ['das', 'sti', 'PEN', 'di', 'um'], pronunciation: 'das shti-PEN-dee-oom', example: { de: 'Sie bekommt ein Stipendium.', en: 'She receives a scholarship.', fr: 'Elle reçoit une bourse.' } }, { id: 'b2l23-anerkennen', german: 'anerkennen', english: 'to recognise (a qualification)', french: 'reconnaître (un diplôme)', gender: null, syllables: ['AN', 'er', 'ken', 'nen'], pronunciation: 'AHN-er-ken-nen', example: { de: 'Der Abschluss wird in Deutschland anerkannt.', en: 'The degree is recognised in Germany.', fr: 'Le diplôme est reconnu en Allemagne.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l23-e6', pairs: [{ de: 'die Ausbildung', en: 'vocational training', fr: 'formation pro' }, { de: 'das Studium', en: 'university studies', fr: 'études' }, { de: 'der Abschluss', en: 'degree', fr: 'diplôme' }, { de: 'das Stipendium', en: 'scholarship', fr: 'bourse' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l23-e8', prompt: 'Statt ___ lernen, schaut er Filme. (zu)', answer: 'zu', hint: 'statt zu + infinitive', hintFr: 'statt zu + infinitif' } },

    { kind: 'grammar', note: {
      id: 'b2l23-infinitiv', title: 'Infinitive clauses: um … zu, ohne … zu, (an)statt … zu', titleFr: 'Infinitives : um … zu, ohne … zu, (an)statt … zu',
      lead: 'Same subject → infinitive clause with zu (comma). Different subjects → damit / ohne dass / (an)statt dass.',
      leadFr: 'Même sujet → infinitive avec zu (virgule). Sujets différents → damit / ohne dass / (an)statt dass.',
      explanationMd: 'When the **subject is the same** in both parts, use an **infinitive clause** with **zu** (comma before it): **um … zu** — purpose: **Er lernt Deutsch, um in Berlin zu arbeiten.** **ohne … zu** — without: **Sie ging, ohne sich zu verabschieden.** **(an)statt … zu** — instead of: **Statt zu lernen, schaut er Filme.** With **different subjects**, use **damit / ohne dass / (an)statt dass**: **Er lernt, damit seine Eltern stolz sind.** **Separable verbs**: **zu goes inside**: **aufzustehen, einzukaufen, mitzumachen.**',
      explanationMdFr: 'Quand le **sujet est le même** dans les deux parties, utilise une **infinitive** avec **zu** (virgule devant) : **um … zu** — but : **Er lernt Deutsch, um in Berlin zu arbeiten.** **ohne … zu** — sans : **Sie ging, ohne sich zu verabschieden.** **(an)statt … zu** — au lieu de : **Statt zu lernen, schaut er Filme.** Avec des **sujets différents**, utilise **damit / ohne dass / (an)statt dass** : **Er lernt, damit seine Eltern stolz sind.** **Verbes séparables** : **zu va au milieu** : **aufzustehen, einzukaufen, mitzumachen.**',
      tables: [{ title: 'Infinitive clauses', titleFr: 'Infinitives', headers: ['Meaning', 'Same subject', 'Different subjects'], headersFr: ['Sens', 'Même sujet', 'Sujets différents'],
        rows: [['purpose', 'um … zu', 'damit'], ['without', 'ohne … zu', 'ohne dass'], ['instead of', '(an)statt … zu', '(an)statt dass']],
        rowsFr: [['but', 'um … zu', 'damit'], ['sans', 'ohne … zu', 'ohne dass'], ['au lieu de', '(an)statt … zu', '(an)statt dass']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'lernt', role: 'verb' }, { text: 'Deutsch,', role: 'accusative' }, { text: 'um', role: 'connector' }, { text: 'in Berlin', role: 'place' }, { text: 'zu arbeiten.', role: 'verb' }], en: 'He learns German in order to work in Berlin.', fr: 'Il apprend l’allemand pour travailler à Berlin.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'lernt,', role: 'verb' }, { text: 'damit', role: 'connector' }, { text: 'seine Eltern', role: 'subject' }, { text: 'stolz sind.', role: 'verb' }], en: 'He studies so that his parents are proud.', fr: 'Il étudie pour que ses parents soient fiers.' },
      ],
      contrast: {
        a: { label: 'Same subject', labelFr: 'Même sujet', note: 'um … zu', noteFr: 'um … zu', examples: [g('Sie studiert, um später Ärztin zu werden.', 'She studies in order to become a doctor later.', 'Elle étudie pour devenir médecin plus tard.'), g('Statt zu lernen, schaut er Filme.', 'Instead of studying he watches films.', 'Au lieu d’étudier, il regarde des films.')] },
        b: { label: 'Different subjects', labelFr: 'Sujets différents', note: 'damit', noteFr: 'damit', examples: [g('Er lernt, damit seine Eltern stolz sind.', 'He studies so that his parents are proud.', 'Il étudie pour que ses parents soient fiers.'), g('Sie ging, ohne dass jemand es merkte.', 'She left without anyone noticing.', 'Elle est partie sans que personne ne s’en aperçoive.')] },
      },
      examples: [
        g('Sie studiert, um später Ärztin zu werden.', 'She studies in order to become a doctor later.', 'Elle étudie pour devenir médecin plus tard.'),
        g('Statt zu lernen, schaut er Filme.', 'Instead of studying he watches films.', 'Au lieu d’étudier, il regarde des films.'),
        g('Er lernt Deutsch, um in Berlin zu arbeiten.', 'He learns German in order to work in Berlin.', 'Il apprend l’allemand pour travailler à Berlin.'),
        g('Sie ging, ohne sich zu verabschieden.', 'She left without saying goodbye.', 'Elle est partie sans dire au revoir.'),
        g('Er lernt, damit seine Eltern stolz sind.', 'He studies so that his parents are proud.', 'Il étudie pour que ses parents soient fiers.'),
        g('Er steht früh auf, um pünktlich anzukommen.', 'He gets up early to arrive on time.', 'Il se lève tôt pour arriver à l’heure.'),
      ],
      mistakes: [
        { wrong: 'Er lernt, um seine Eltern stolz sind.', right: 'Er lernt, damit seine Eltern stolz sind.', why: 'Different subjects need damit, not um … zu.', whyFr: 'Des sujets différents demandent damit, pas um … zu.' },
        { wrong: 'Er steht früh auf, um zu pünktlich ankommen.', right: 'Er steht früh auf, um pünktlich anzukommen.', why: 'With separable verbs zu goes inside: anzukommen.', whyFr: 'Avec les verbes séparables, zu va à l’intérieur : anzukommen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l23-e1', prompt: 'Er lernt Deutsch, ___ in Berlin zu arbeiten. (in order)', answer: 'um', hint: 'um … zu = purpose', hintFr: 'um … zu = but' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l23-e2', prompt: 'Sie ging, ___ sich zu verabschieden. (without)', answer: 'ohne', hint: 'ohne … zu', hintFr: 'ohne … zu' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l23-e3', prompt: 'Different subjects: "Er lernt, ___ seine Eltern stolz sind."', promptFr: 'Sujets différents : « Er lernt, ___ seine Eltern stolz sind. »', options: ['um', 'damit', 'ohne zu'], answer: 1, explain: 'Different subjects → damit.', explainFr: 'Sujets différents → damit.', hint: 'two subjects', hintFr: 'deux sujets' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l23-e4', tokens: ['studiert', 'um', 'Sie', 'zu werden', 'Ärztin'], answer: ['Sie', 'studiert', 'um', 'Ärztin', 'zu werden'], hint: 'um + object + zu + infinitive.', hintFr: 'um + complément + zu + infinitif.' } },

    // ───────────── 2 · Lifelong learning ─────────────
    { kind: 'chapter', title: 'Lebenslang lernen', titleFr: 'Apprendre toute la vie', blurb: 'zu + infinitive after nouns and adjectives.', blurbFr: 'zu + infinitif après noms et adjectifs.' },

    { kind: 'situation', title: 'Weiterbildung', titleFr: 'Formation continue',
      setting: 'A talk about further training.', settingFr: 'Un exposé sur la formation continue.',
      lines: [
        line('Referent', 'Weiterbildung ist im Beruf wichtig. Lebenslanges Lernen ist heute normal. Es fehlen Fachkräfte in der Pflege. Sprachkenntnisse sind eine wichtige Fähigkeit.', 'Further training is important at work. Lifelong learning is normal today. Skilled workers are lacking in care. Language skills are an important ability.', 'La formation continue est importante dans le métier. L’apprentissage tout au long de la vie est normal aujourd’hui. Il manque de personnel qualifié dans les soins. Les connaissances linguistiques sont une compétence importante.'),
        line('Referent', 'Es ist wichtig, ein Leben lang zu lernen. Ich habe die Absicht, eine Weiterbildung zu machen. Ich habe die Möglichkeit, im Ausland zu studieren. Die Berufswahl fällt vielen schwer.', 'It is important to keep learning all your life. I intend to do further training. I have the possibility of studying abroad. The choice of career is hard for many.', 'Il est important d’apprendre toute sa vie. J’ai l’intention de suivre une formation continue. J’ai la possibilité d’étudier à l’étranger. Le choix du métier est difficile pour beaucoup.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l23-e10', prompt: 'Listen. What does she hope?', promptFr: 'Écoute. Qu’espère-t-elle ?', audio: { ttsText: 'Sie hofft, ein Stipendium für das Studium im Ausland zu bekommen.' }, options: ['To get a scholarship', 'To find a flat', 'To change jobs'], optionsFr: ['Obtenir une bourse', 'Trouver un appartement', 'Changer de travail'], answer: 0, hint: 'hoffen + zu', hintFr: 'hoffen + zu' } },

    { kind: 'wordgroup', title: 'Beruf und Lernen', titleFr: 'Métier et apprentissage',
      items: [{ id: 'b2l23-weiterbildung', german: 'die Weiterbildung', english: 'further training', french: 'la formation continue', gender: 'die', syllables: ['die', 'WEI', 'ter', 'bil', 'dung'], pronunciation: 'dee VY-ter-bil-doong', example: { de: 'Weiterbildung ist im Beruf wichtig.', en: 'Further training is important at work.', fr: 'La formation continue est importante au travail.' } }, { id: 'b2l23-fachkraft', german: 'die Fachkraft', english: 'the skilled worker', french: 'le professionnel qualifié', gender: 'die', syllables: ['die', 'FACH', 'kraft'], pronunciation: 'dee FAKH-kraft', example: { de: 'Es fehlen Fachkräfte in der Pflege.', en: 'There is a shortage of skilled workers in nursing.', fr: 'Il manque des professionnels qualifiés dans les soins.' } }, { id: 'b2l23-faehigkeit', german: 'die Fähigkeit', english: 'the ability / skill', french: 'la capacité', gender: 'die', syllables: ['die', 'FÄ', 'hig', 'keit'], pronunciation: 'dee FAY-ikh-kite', example: { de: 'Sprachkenntnisse sind eine wichtige Fähigkeit.', en: 'Language skills are an important ability.', fr: 'Les compétences linguistiques sont une capacité importante.' } }, { id: 'b2l23-lernen', german: 'lebenslanges Lernen', english: 'lifelong learning', french: 'formation tout au long de la vie', gender: null, syllables: ['LE', 'bens', 'lan', 'ges', 'LER', 'nen'], pronunciation: 'LAY-bens-lahn-ges LER-nen', example: { de: 'Lebenslanges Lernen ist heute normal.', en: 'Lifelong learning is normal today.', fr: 'La formation tout au long de la vie est normale aujourd’hui.' } }, { id: 'b2l23-berufswahl', german: 'die Berufswahl', english: 'the career choice', french: 'le choix de carrière', gender: 'die', syllables: ['die', 'be', 'RUFS', 'wahl'], pronunciation: 'dee be-ROOFS-vahl', example: { de: 'Die Berufswahl fällt vielen schwer.', en: 'Choosing a career is hard for many.', fr: 'Le choix de carrière est difficile pour beaucoup.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l23-zu-infinitiv', title: 'zu + infinitive after nouns and adjectives', titleFr: 'zu + infinitif après noms et adjectifs',
      lead: 'Nouns (die Möglichkeit, die Absicht), adjectives (wichtig, schwierig) and verbs of intention (hoffen, versuchen) take zu + infinitive.',
      leadFr: 'Les noms (die Möglichkeit, die Absicht), adjectifs (wichtig, schwierig) et verbes d’intention (hoffen, versuchen) prennent zu + infinitif.',
      explanationMd: 'Many **nouns** and **adjectives** take an infinitive with **zu**: **Nouns:** **die Möglichkeit, die Absicht, die Lust, die Zeit, der Plan, die Chance**: **Ich habe die Möglichkeit, im Ausland zu studieren.** **Adjectives:** **schwierig, einfach, wichtig, notwendig, bereit, fähig**: **Es ist wichtig, früh zu lernen.** **Verbs of intention:** **beginnen, vorhaben, hoffen, versuchen**: **Er hofft, ein Stipendium zu bekommen.** A **noun phrase** can also replace it: **die Möglichkeit zum Studium im Ausland.** Always put a **comma** before the infinitive clause when it has more than **zu + verb**.',
      explanationMdFr: 'Beaucoup de **noms** et d’**adjectifs** prennent un infinitif avec **zu** : **Noms :** **die Möglichkeit, die Absicht, die Lust, die Zeit, der Plan, die Chance** : **Ich habe die Möglichkeit, im Ausland zu studieren.** **Adjectifs :** **schwierig, einfach, wichtig, notwendig, bereit, fähig** : **Es ist wichtig, früh zu lernen.** **Verbes d’intention :** **beginnen, vorhaben, hoffen, versuchen** : **Er hofft, ein Stipendium zu bekommen.** Un **groupe nominal** peut aussi le remplacer : **die Möglichkeit zum Studium im Ausland.** Mets toujours une **virgule** devant l’infinitive quand elle contient plus que **zu + verbe**.',
      tables: [{ title: 'zu + infinitive', titleFr: 'zu + infinitif', headers: ['After', 'Examples', 'Sentence'], headersFr: ['Après', 'Exemples', 'Phrase'],
        rows: [['nouns', 'die Möglichkeit, die Absicht, die Chance', 'Ich habe die Möglichkeit, im Ausland zu studieren.'], ['adjectives', 'wichtig, schwierig, notwendig', 'Es ist wichtig, früh zu lernen.'], ['verbs', 'hoffen, versuchen, vorhaben', 'Er hofft, ein Stipendium zu bekommen.'], ['noun phrase', 'die Möglichkeit zum Studium', 'die Möglichkeit zum Studium im Ausland']],
        rowsFr: [['noms', 'die Möglichkeit, die Absicht, die Chance', 'Ich habe die Möglichkeit, im Ausland zu studieren.'], ['adjectifs', 'wichtig, schwierig, notwendig', 'Es ist wichtig, früh zu lernen.'], ['verbes', 'hoffen, versuchen, vorhaben', 'Er hofft, ein Stipendium zu bekommen.'], ['groupe nominal', 'die Möglichkeit zum Studium', 'die Möglichkeit zum Studium im Ausland']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'wichtig,', role: 'other' }, { text: 'ein Leben lang', role: 'time' }, { text: 'zu lernen.', role: 'verb' }], en: 'It is important to keep learning all your life.', fr: 'Il est important d’apprendre toute sa vie.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'die Absicht,', role: 'accusative' }, { text: 'eine Weiterbildung', role: 'accusative' }, { text: 'zu machen.', role: 'verb' }], en: 'I intend to do further training.', fr: 'J’ai l’intention de suivre une formation continue.' },
      ],
      contrast: {
        a: { label: 'Infinitive clause', labelFr: 'Infinitive', note: 'zu + verb', noteFr: 'zu + verbe', examples: [g('Ich habe die Möglichkeit, im Ausland zu studieren.', 'I have the possibility of studying abroad.', 'J’ai la possibilité d’étudier à l’étranger.'), g('Es ist wichtig, früh zu lernen.', 'It is important to learn early.', 'Il est important d’apprendre tôt.')] },
        b: { label: 'Noun phrase', labelFr: 'Groupe nominal', note: 'noun + zu + noun', noteFr: 'nom + zu + nom', examples: [g('die Möglichkeit zum Studium im Ausland', 'the possibility of studying abroad', 'la possibilité d’étudier à l’étranger'), g('die Absicht zur Weiterbildung', 'the intention of further training', 'l’intention de se former')] },
      },
      examples: [
        g('Es ist wichtig, ein Leben lang zu lernen.', 'It is important to keep learning all your life.', 'Il est important d’apprendre toute sa vie.'),
        g('Ich habe die Absicht, eine Weiterbildung zu machen.', 'I intend to do further training.', 'J’ai l’intention de suivre une formation continue.'),
        g('Er hofft, ein Stipendium zu bekommen.', 'He hopes to get a scholarship.', 'Il espère obtenir une bourse.'),
        g('Ich habe die Möglichkeit, im Ausland zu studieren.', 'I have the possibility of studying abroad.', 'J’ai la possibilité d’étudier à l’étranger.'),
        g('Es ist schwierig, einen Beruf zu wählen.', 'It is difficult to choose a profession.', 'Il est difficile de choisir un métier.'),
        g('Er hat vor, nächstes Jahr zu studieren.', 'He plans to study next year.', 'Il prévoit d’étudier l’an prochain.'),
      ],
      mistakes: [
        { wrong: 'Es ist wichtig, lernen.', right: 'Es ist wichtig, zu lernen.', why: 'After an adjective use zu + infinitive.', whyFr: 'Après un adjectif, utilise zu + infinitif.' },
        { wrong: 'Ich habe die Absicht, zu eine Weiterbildung machen.', right: 'Ich habe die Absicht, eine Weiterbildung zu machen.', why: 'zu stands directly before the infinitive.', whyFr: 'zu se place juste avant l’infinitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l23-e5', prompt: 'Es ist wichtig, früh ___ lernen. (zu)', answer: 'zu', hint: 'wichtig + zu + infinitive', hintFr: 'wichtig + zu + infinitif' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l23-e9', prompt: 'Where does "zu" go with "aufstehen"?', promptFr: 'Où va « zu » avec « aufstehen » ?', options: ['aufzustehen', 'zu aufstehen', 'auf zu stehen'], answer: 0, explain: 'Separable verbs: zu inside.', explainFr: 'Verbes séparables : zu à l’intérieur.', hint: 'zu inside the verb', hintFr: 'zu dans le verbe' } },

    { kind: 'pronunciation', focus: 'In "um … zu" clauses, pause slightly at the comma and let the pitch rise before the final infinitive: "…, um in Berlin zu ARbeiten."', focusFr: 'Dans les propositions en « um … zu », fais une légère pause à la virgule et monte avant l’infinitif final : « …, um in Berlin zu ARbeiten. »', items: [{ id: 'b2l23-abschluss-pron', german: 'Abschluss', english: 'degree', french: 'diplôme', gender: null, syllables: ['AB', 'schluss'], pronunciation: 'AHP-shloos', example: { de: 'Er hat einen Abschluss.', en: 'He has a degree.', fr: 'Il a un diplôme.' } }, { id: 'b2l23-weiterbildung-pron', german: 'Weiterbildung', english: 'further training', french: 'formation continue', gender: null, syllables: ['WEI', 'ter', 'bil', 'dung'], pronunciation: 'VY-ter-bil-doong', example: { de: 'Weiterbildung lohnt sich.', en: 'Further training pays off.', fr: 'La formation continue vaut le coup.' } }] },

    { kind: 'wrapup',
      summary: 'You can now talk about **education and careers** and use **um … zu, ohne … zu, statt … zu** plus **zu + infinitive** after nouns and adjectives. 🎉',
      summaryFr: 'Tu sais maintenant parler de **formation et de carrière** et utiliser **um … zu, ohne … zu, statt … zu** ainsi que **zu + infinitif** après noms et adjectifs. 🎉',
      card: { title: 'Infinitive clauses on one page', titleFr: 'Les infinitives en une page', sections: [
        { heading: 'Same subject', headingFr: 'Même sujet', rows: [g('um … zu · ohne … zu · (an)statt … zu', 'comma before it', 'virgule devant')] },
        { heading: 'Different subject', headingFr: 'Sujet différent', rows: [g('damit · ohne dass · (an)statt dass', 'verb at the end', 'verbe à la fin')] },
        { heading: 'After nouns/adjectives', headingFr: 'Après noms/adjectifs', rows: [g('die Möglichkeit, … zu …', 'noun + zu + inf.', 'nom + zu + inf.'), g('Es ist wichtig, … zu …', 'adjective + zu + inf.', 'adjectif + zu + inf.')] },
      ] } },
  ],
};
