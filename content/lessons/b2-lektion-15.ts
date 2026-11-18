import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion15: Lesson = {
  id: 'b2-l15', level: 'B2', module: 5, number: 15,
  title: { de: 'Relativsätze erweitert', en: 'Advanced relative clauses', fr: 'Relatives avancées' },
  theme: 'Relative clauses with wer/was, wo(r)- compounds, the genitive relative pronoun (dessen/deren) and relative clauses with prepositions', themeFr: 'Relatives avec wer/was, composés en wo(r)-, pronom relatif au génitif (dessen/deren) et relatives avec prépositions',
  goals: ['Use "wer" and "was" as relative pronouns', 'Use "dessen / deren" for possession', 'Use "wo(r)-" compounds with prepositions', 'Build long, elegant sentences with relative clauses'], goalsFr: ['Utiliser « wer » et « was » comme pronoms relatifs', 'Utiliser « dessen / deren » pour la possession', 'Utiliser les composés en « wo(r)- » avec prépositions', 'Construire de longues phrases élégantes avec des relatives'],
  canDo: g('Ich kann Relativsätze mit wer/was, dessen/deren und wo(r)-Komposita bilden und lange, elegante Sätze schreiben.', 'I can build relative clauses with wer/was, dessen/deren and wo(r)- compounds and write long, elegant sentences.', 'Je sais construire des relatives avec wer/was, dessen/deren et des composés en wo(r)- et écrire des phrases longues et élégantes.'),
  steps: [
    { kind: 'intro', title: 'Relativsätze für Fortgeschrittene 🔗', titleFr: 'Relatives avancées 🔗',
      scene: 'A book club talks about an author, a novel and what moved them.', sceneFr: 'Un club de lecture parle d’un auteur, d’un roman et de ce qui les a touchés.',
      goals: ['Use wer and was as relative pronouns', 'Say “whose” with dessen / deren', 'Use wo(r)- compounds (worüber, wofür, woran)'],
      goalsFr: ['Utiliser wer et was comme pronoms relatifs', 'Dire « dont » avec dessen / deren', 'Utiliser les composés en wo(r)- (worüber, wofür, woran)'] },

    // ───────────── 1 · wer / was ─────────────
    { kind: 'chapter', title: 'wer und was', titleFr: 'wer et was', blurb: 'Whoever · everything that · which.', blurbFr: 'Celui qui · tout ce que · ce qui.' },

    { kind: 'situation', title: 'Im Buchclub', titleFr: 'Au club de lecture',
      setting: 'The book club meets on Thursday.', settingFr: 'Le club de lecture se réunit jeudi.',
      lines: [
        line('Lena', 'Wer rastet, der rostet. Wer viel liest, der lernt viel. Alles, was er sagt, ist wahr.', 'He who rests rusts. Whoever reads a lot learns a lot. Everything he says is true.', 'Qui se repose rouille. Celui qui lit beaucoup apprend beaucoup. Tout ce qu’il dit est vrai.'),
        line('Jonas', 'Das ist das Wesen der Sache. Er hat gewonnen, was mich freut. Er kam zu spät, was mich ärgerte.', 'That is the nature of the matter. He won, which makes me happy. He arrived late, which annoyed me.', 'C’est l’essence de la chose. Il a gagné, ce qui me réjouit. Il est arrivé en retard, ce qui m’a agacé.'),
        line('Lena', 'Das Buch, dessen Autor ich kenne, ist neu. Der Autor, dessen Roman ich lese, ist jung. Er will etwas verfassen, was alle lesen.', 'The book whose author I know is new. The author whose novel I am reading is young. He wants to write something that everyone reads.', 'Le livre dont je connais l’auteur est nouveau. L’auteur dont je lis le roman est jeune. Il veut écrire quelque chose que tout le monde lit.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l15-e11', prompt: 'Why is Jonas annoyed?', promptFr: 'Pourquoi Jonas est-il agacé ?', options: ['He arrived late', 'He lost the book', 'He did not win'], optionsFr: ['Il est arrivé en retard', 'Il a perdu le livre', 'Il n’a pas gagné'], answer: 0, explain: 'Jonas says: “Er kam zu spät, was mich ärgerte.”', explainFr: 'Jonas dit : « Er kam zu spät, was mich ärgerte. »', hint: 'Look for “ärgerte”.', hintFr: 'Cherche « ärgerte ».' } },

    { kind: 'wordgroup', title: 'Wer, was, Wesen', titleFr: 'Wer, was, essence',
      items: [{ id: 'b2l15-wer', german: 'wer', english: 'whoever / he who', french: 'celui qui', gender: null, syllables: ['WER'], pronunciation: 'vair', example: { de: 'Wer rastet, der rostet.', en: 'He who rests, rusts.', fr: 'Qui se repose, rouille.' } }, { id: 'b2l15-alles-was', german: 'alles, was', english: 'everything that', french: 'tout ce qui', gender: null, syllables: ['AL', 'les', 'WAS'], pronunciation: 'AL-les vas', example: { de: 'Alles, was er sagt, ist wahr.', en: 'Everything he says is true.', fr: 'Tout ce qu’il dit est vrai.' } }, { id: 'b2l15-wesen', german: 'das Wesen', english: 'the nature / being', french: 'l’être / la nature', gender: 'das', syllables: ['das', 'WE', 'sen'], pronunciation: 'das VAY-zen', example: { de: 'Das ist das Wesen der Sache.', en: 'That is the nature of the matter.', fr: 'C’est la nature de la chose.' } }, { id: 'b2l15-verfassen', german: 'verfassen', english: 'to write / compose', french: 'rédiger', gender: null, syllables: ['ver', 'FAS', 'sen'], pronunciation: 'fer-FAS-sen', example: { de: 'Das Buch, dessen Autor ich kenne, ist neu.', en: 'The book whose author I know is new.', fr: 'Le livre dont je connais l’auteur est nouveau.' } }, { id: 'b2l15-autor', german: 'der Autor', english: 'the author', french: 'l’auteur', gender: 'der', syllables: ['der', 'AU', 'tor'], pronunciation: 'dair OW-tor', example: { de: 'Der Autor, dessen Roman ich lese, ist jung.', en: 'The author whose novel I am reading is young.', fr: 'L’auteur dont je lis le roman est jeune.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l15-wer-was', title: 'wer and was as relative pronouns', titleFr: 'wer et was comme pronoms relatifs',
      lead: 'wer = whoever (main clause often starts with der/die). was after alles, etwas, nichts, das — and was for a whole clause.',
      leadFr: 'wer = celui qui (la principale commence souvent par der/die). was après alles, etwas, nichts, das — et was pour toute une proposition.',
      explanationMd: '**wer** = “whoever / he who” (people, no antecedent): **Wer lernt, der kommt weiter.** The main clause often starts with **der / die**. **was** = “what / everything that” after **alles, etwas, nichts, das, vieles**: **Alles, was er sagt, ist wahr.** / **Das ist das, was ich meine.** **was** also refers to a **whole clause**: **Er kam zu spät, was mich ärgerte.** The **case of wer** follows the verb in its own clause: **Wen ich frage, der …** (Akk.), **Wem ich helfe, der …** (Dat.).',
      explanationMdFr: '**wer** = « celui qui » (personnes, sans antécédent) : **Wer lernt, der kommt weiter.** La principale commence souvent par **der / die**. **was** = « ce que / tout ce que » après **alles, etwas, nichts, das, vieles** : **Alles, was er sagt, ist wahr.** / **Das ist das, was ich meine.** **was** renvoie aussi à **toute une proposition** : **Er kam zu spät, was mich ärgerte.** Le **cas de wer** suit le verbe de sa propre proposition : **Wen ich frage, der …** (Akk.), **Wem ich helfe, der …** (Dat.).',
      tables: [{ title: 'wer / was', titleFr: 'wer / was', headers: ['Pronoun', 'Refers to', 'Example'], headersFr: ['Pronom', 'Renvoie à', 'Exemple'],
        rows: [['wer', 'any person', 'Wer viel liest, der lernt viel.'], ['was', 'alles / etwas / nichts / das', 'Alles, was er sagt, ist wahr.'], ['was', 'a whole clause', 'Er hat gewonnen, was mich freut.'], ['wen / wem', 'case follows the verb', 'Wem ich helfe, der dankt mir.']],
        rowsFr: [['wer', 'toute personne', 'Wer viel liest, der lernt viel.'], ['was', 'alles / etwas / nichts / das', 'Alles, was er sagt, ist wahr.'], ['was', 'toute une proposition', 'Er hat gewonnen, was mich freut.'], ['wen / wem', 'le cas suit le verbe', 'Wem ich helfe, der dankt mir.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Wer', role: 'subject' }, { text: 'viel', role: 'other' }, { text: 'liest,', role: 'verb' }, { text: 'der', role: 'subject' }, { text: 'lernt', role: 'verb' }, { text: 'viel.', role: 'other' }], en: 'Whoever reads a lot learns a lot.', fr: 'Celui qui lit beaucoup apprend beaucoup.' },
        { parts: [{ text: 'Er', role: 'subject' }, { text: 'hat', role: 'verb' }, { text: 'gewonnen,', role: 'verb' }, { text: 'was', role: 'connector' }, { text: 'mich', role: 'accusative' }, { text: 'freut.', role: 'verb' }], en: 'He won, which makes me happy.', fr: 'Il a gagné, ce qui me réjouit.' },
      ],
      contrast: {
        a: { label: 'wer (people)', labelFr: 'wer (personnes)', note: 'no antecedent', noteFr: 'sans antécédent', examples: [g('Wer rastet, der rostet.', 'He who rests rusts.', 'Qui se repose rouille.'), g('Wer viel liest, der lernt viel.', 'Whoever reads a lot learns a lot.', 'Celui qui lit beaucoup apprend beaucoup.')] },
        b: { label: 'was (things / clause)', labelFr: 'was (choses / proposition)', note: 'after alles, etwas, nichts', noteFr: 'après alles, etwas, nichts', examples: [g('Alles, was er sagt, ist wahr.', 'Everything he says is true.', 'Tout ce qu’il dit est vrai.'), g('Er kam zu spät, was mich ärgerte.', 'He arrived late, which annoyed me.', 'Il est arrivé en retard, ce qui m’a agacé.')] },
      },
      examples: [
        g('Wer viel liest, der lernt viel.', 'Whoever reads a lot learns a lot.', 'Celui qui lit beaucoup apprend beaucoup.'),
        g('Er hat gewonnen, was mich freut.', 'He won, which makes me happy.', 'Il a gagné, ce qui me réjouit.'),
        g('Alles, was er sagt, ist wahr.', 'Everything he says is true.', 'Tout ce qu’il dit est vrai.'),
        g('Das ist das, was ich meine.', 'That is what I mean.', 'C’est ce que je veux dire.'),
        g('Wer rastet, der rostet.', 'He who rests rusts.', 'Qui se repose rouille.'),
        g('Nichts, was er tut, überrascht mich.', 'Nothing he does surprises me.', 'Rien de ce qu’il fait ne me surprend.'),
      ],
      mistakes: [
        { wrong: 'Alles, das er sagt, ist wahr.', right: 'Alles, was er sagt, ist wahr.', why: 'After alles / nichts / etwas use was, not das.', whyFr: 'Après alles / nichts / etwas, utilise was, pas das.' },
        { wrong: 'Er kam zu spät, das mich ärgerte.', right: 'Er kam zu spät, was mich ärgerte.', why: 'A relative clause about a whole clause uses was.', whyFr: 'Une relative portant sur toute une proposition utilise was.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l15-e3', prompt: '"Alles, ___ er sagt, ist wahr."', promptFr: '« Alles, ___ er sagt, ist wahr. »', options: ['das', 'was', 'wer'], answer: 1, explain: 'After "alles" use "was".', explainFr: 'Après « alles », utilise « was ».', hint: 'alles → was', hintFr: 'alles → was' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l15-e5', prompt: 'Complete: "Er kam zu spät, ___ mich ärgerte."', promptFr: 'Complète : « Er kam zu spät, ___ mich ärgerte. »', options: ['was', 'das', 'dessen'], answer: 0, explain: '"was" refers to a whole clause.', explainFr: '« was » reprend toute la proposition.', hint: 'refers to the whole clause', hintFr: 'reprend toute la proposition' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b2l15-e6', pairs: [{ de: 'worüber', en: 'about which', fr: 'au sujet de quoi' }, { de: 'wofür', en: 'for which', fr: 'pour quoi' }, { de: 'dessen', en: 'whose (m/n)', fr: 'dont (m/n)' }, { de: 'deren', en: 'whose (f/pl)', fr: 'dont (f/pl)' }], hint: 'Match each relative word to its meaning.', hintFr: 'Associe chaque mot relatif à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l15-e9', prompt: 'Which is correct for people?', promptFr: 'Quelle forme est correcte pour des personnes ?', options: ['der Mann, womit ich sprach', 'der Mann, mit dem ich sprach', 'der Mann, mit was ich sprach'], answer: 1, explain: 'Persons: preposition + relative pronoun.', explainFr: 'Personnes : préposition + pronom relatif.', hint: 'person → mit dem', hintFr: 'personne → mit dem' } },

    // ───────────── 2 · dessen/deren, wo(r)- ─────────────
    { kind: 'chapter', title: 'dessen, deren und wo(r)-', titleFr: 'dessen, deren et wo(r)-', blurb: 'Whose · about which.', blurbFr: 'Dont · à propos duquel.' },

    { kind: 'situation', title: 'Worüber sprechen wir?', titleFr: 'De quoi parle-t-on ?',
      setting: 'The club discusses the novel.', settingFr: 'Le club discute du roman.',
      lines: [
        line('Lena', 'Der Mann, dessen Auto hier steht, ist Arzt. Die Frau, deren Sohn hier arbeitet, kommt heute. Das ist es, worüber wir gesprochen haben.', 'The man whose car is parked here is a doctor. The woman whose son works here comes today. That is what we talked about.', 'L’homme dont la voiture est garée ici est médecin. La femme dont le fils travaille ici vient aujourd’hui. C’est de cela que nous avons parlé.'),
        line('Jonas', 'Ich weiß nicht, woran es liegt. Das ist etwas, wofür ich dankbar bin. Das ist etwas, worauf ich mich freue. Der Mann, mit dem ich sprach, ist Autor.', 'I do not know what it is due to. That is something I am grateful for. That is something I look forward to. The man I spoke with is an author.', 'Je ne sais pas à quoi cela tient. C’est quelque chose dont je suis reconnaissant. C’est quelque chose que j’attends avec impatience. L’homme avec qui j’ai parlé est auteur.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'dessen, deren, wo(r)-', titleFr: 'dessen, deren, wo(r)-',
      items: [{ id: 'b2l15-dessen', german: 'dessen', english: 'whose (m/n)', french: 'dont (masc./neutre)', gender: null, syllables: ['DES', 'sen'], pronunciation: 'DES-sen', example: { de: 'Der Mann, dessen Auto hier steht, ist Arzt.', en: 'The man whose car is parked here is a doctor.', fr: 'L’homme dont la voiture est garée ici est médecin.' } }, { id: 'b2l15-deren', german: 'deren', english: 'whose (f/pl)', french: 'dont (fém./pluriel)', gender: null, syllables: ['DE', 'ren'], pronunciation: 'DAY-ren', example: { de: 'Die Frau, deren Sohn hier arbeitet, kommt heute.', en: 'The woman whose son works here comes today.', fr: 'La femme dont le fils travaille ici vient aujourd’hui.' } }, { id: 'b2l15-worueber', german: 'worüber', english: 'about which', french: 'au sujet de quoi', gender: null, syllables: ['wo', 'RÜ', 'ber'], pronunciation: 'vo-RUE-ber', example: { de: 'Das ist es, worüber wir gesprochen haben.', en: 'That is what we talked about.', fr: 'C’est ce dont nous avons parlé.' } }, { id: 'b2l15-woran', german: 'woran', english: 'of which / on which', french: 'à quoi', gender: null, syllables: ['wo', 'RAN'], pronunciation: 'vo-RAHN', example: { de: 'Ich weiß nicht, woran es liegt.', en: 'I do not know what it is due to.', fr: 'Je ne sais pas à quoi cela tient.' } }, { id: 'b2l15-wofuer', german: 'wofür', english: 'for which', french: 'pour quoi', gender: null, syllables: ['wo', 'FÜR'], pronunciation: 'vo-FUER', example: { de: 'Das ist etwas, wofür ich dankbar bin.', en: 'That is something I am grateful for.', fr: 'C’est quelque chose pour lequel je suis reconnaissant.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l15-dessen-wor', title: 'dessen / deren and wo(r)- compounds', titleFr: 'dessen / deren et composés en wo(r)-',
      lead: 'dessen (m/n) and deren (f/pl) = whose, followed by a noun without article. wo(r)- + preposition replaces preposition + was for things.',
      leadFr: 'dessen (m/n) et deren (f/pl) = dont, suivis d’un nom sans article. wo(r)- + préposition remplace préposition + was pour les choses.',
      explanationMd: '**Genitive relative pronoun** — “whose”: **dessen** (masculine / neuter), **deren** (feminine / plural), followed by the noun **without an article**: **Der Mann, dessen Auto hier steht, …** **Die Frau, deren Sohn hier arbeitet, …** **wo(r)- compounds** replace **preposition + was** for things: **das, worüber wir sprachen** (über was). Use **wo + preposition** (**wor-** before a vowel): **womit, wofür, worauf, woran, worüber**. For **people**, use **preposition + relative pronoun**: **der Mann, mit dem ich sprach**.',
      explanationMdFr: '**Pronom relatif au génitif** — « dont » : **dessen** (masculin / neutre), **deren** (féminin / pluriel), suivis du nom **sans article** : **Der Mann, dessen Auto hier steht, …** **Die Frau, deren Sohn hier arbeitet, …** Les **composés en wo(r)-** remplacent **préposition + was** pour les choses : **das, worüber wir sprachen** (über was). Utilise **wo + préposition** (**wor-** devant une voyelle) : **womit, wofür, worauf, woran, worüber**. Pour les **personnes**, utilise **préposition + pronom relatif** : **der Mann, mit dem ich sprach**.',
      tables: [{ title: 'Genitive relative pronoun', titleFr: 'Pronom relatif au génitif', headers: ['Gender', 'Pronoun', 'Example'], headersFr: ['Genre', 'Pronom', 'Exemple'],
        rows: [['masculine', 'dessen', 'der Mann, dessen Auto hier steht'], ['neuter', 'dessen', 'das Kind, dessen Mutter hier arbeitet'], ['feminine', 'deren', 'die Frau, deren Sohn hier arbeitet'], ['plural', 'deren', 'die Leute, deren Kinder spielen']],
        rowsFr: [['masculin', 'dessen', 'der Mann, dessen Auto hier steht'], ['neutre', 'dessen', 'das Kind, dessen Mutter hier arbeitet'], ['féminin', 'deren', 'die Frau, deren Sohn hier arbeitet'], ['pluriel', 'deren', 'die Leute, deren Kinder spielen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das Buch,', role: 'subject' }, { text: 'dessen', role: 'connector' }, { text: 'Autor', role: 'subject' }, { text: 'ich', role: 'subject' }, { text: 'kenne,', role: 'verb' }, { text: 'ist', role: 'verb' }, { text: 'neu.', role: 'other' }], en: 'The book whose author I know is new.', fr: 'Le livre dont je connais l’auteur est nouveau.' },
        { parts: [{ text: 'Das ist etwas,', role: 'other' }, { text: 'worauf', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'mich', role: 'accusative' }, { text: 'freue.', role: 'verb' }], en: 'That is something I look forward to.', fr: 'C’est quelque chose que j’attends avec impatience.' },
      ],
      contrast: {
        a: { label: 'Things: wo(r)-', labelFr: 'Choses : wo(r)-', note: 'worüber, wofür, worauf', noteFr: 'worüber, wofür, worauf', examples: [g('Das ist etwas, worauf ich mich freue.', 'That is something I look forward to.', 'C’est quelque chose que j’attends avec impatience.'), g('Das ist es, worüber wir gesprochen haben.', 'That is what we talked about.', 'C’est de cela que nous avons parlé.')] },
        b: { label: 'People: preposition + pronoun', labelFr: 'Personnes : préposition + pronom', note: 'mit dem, auf die', noteFr: 'mit dem, auf die', examples: [g('Der Mann, mit dem ich sprach, ist Autor.', 'The man I spoke with is an author.', 'L’homme avec qui j’ai parlé est auteur.'), g('Die Frau, auf die ich warte, kommt gleich.', 'The woman I am waiting for is coming soon.', 'La femme que j’attends arrive bientôt.')] },
      },
      examples: [
        g('Das Buch, dessen Autor ich kenne, ist spannend.', 'The book whose author I know is exciting.', 'Le livre dont je connais l’auteur est passionnant.'),
        g('Das ist etwas, worauf ich mich freue.', 'That is something I look forward to.', 'C’est quelque chose que j’attends avec impatience.'),
        g('Der Mann, dessen Auto hier steht, ist Arzt.', 'The man whose car is here is a doctor.', 'L’homme dont la voiture est ici est médecin.'),
        g('Die Frau, deren Sohn hier arbeitet, kommt heute.', 'The woman whose son works here comes today.', 'La femme dont le fils travaille ici vient aujourd’hui.'),
        g('Ich weiß nicht, woran es liegt.', 'I do not know what it is due to.', 'Je ne sais pas à quoi cela tient.'),
        g('Das ist etwas, wofür ich dankbar bin.', 'That is something I am grateful for.', 'C’est quelque chose dont je suis reconnaissant.'),
      ],
      mistakes: [
        { wrong: 'Der Mann, dessen das Auto hier steht', right: 'Der Mann, dessen Auto hier steht', why: 'dessen / deren replace the article: no article after them.', whyFr: 'dessen / deren remplacent l’article : pas d’article après eux.' },
        { wrong: 'Der Mann, womit ich sprach', right: 'Der Mann, mit dem ich sprach', why: 'wo(r)- compounds are for things, not for people.', whyFr: 'Les composés en wo(r)- sont pour les choses, pas pour les personnes.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l15-e1', prompt: 'Der Mann, ___ Auto hier steht, ist Arzt. (whose)', answer: 'dessen', hint: 'masculine genitive relative', hintFr: 'relatif au génitif masculin' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l15-e2', prompt: 'Die Frau, ___ Sohn hier arbeitet, kommt heute. (whose)', answer: 'deren', hint: 'feminine → deren', hintFr: 'féminin → deren' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l15-e4', prompt: 'Das ist etwas, ___ ich mich freue. (wo-compound with auf)', answer: 'worauf', hint: 'wo + r + auf', hintFr: 'wo + r + auf' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l15-e7', tokens: ['Autor', 'Das', 'dessen', 'ich', 'Buch', 'kenne', 'ist', 'neu'], answer: ['Das', 'Buch', 'dessen', 'Autor', 'ich', 'kenne', 'ist', 'neu'], hint: 'dessen + noun without article; verb of the relative clause at the end.', hintFr: 'dessen + nom sans article ; verbe de la relative à la fin.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l15-e8', prompt: 'Listen. Who is the doctor?', promptFr: 'Écoute. Qui est le médecin ?', audio: { ttsText: 'Der Mann, dessen Auto hier steht, ist Arzt.' }, options: ['The owner of the car', 'The driver of the bus', 'The neighbour'], optionsFr: ['Le propriétaire de la voiture', 'Le chauffeur du bus', 'Le voisin'], answer: 0, hint: 'dessen = whose.', hintFr: 'dessen = dont.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l15-e10', prompt: 'Listen. What is the speaker grateful for?', promptFr: 'Écoute. De quoi le locuteur est-il reconnaissant ?', audio: { ttsText: 'Das ist etwas, wofür ich sehr dankbar bin.' }, options: ['Something he is thankful for', 'Something he dislikes', 'Something he forgot'], optionsFr: ['Quelque chose dont il est reconnaissant', 'Quelque chose qu’il n’aime pas', 'Quelque chose qu’il a oublié'], answer: 0, hint: 'wofür = for which.', hintFr: 'wofür = pour lequel.' } },

    { kind: 'pronunciation', focus: 'wo-compounds stress the preposition: "woRÜber", "woFÜR", "woRAN"; dessen / deren are light and unstressed', focusFr: 'Les composés en wo- accentuent la préposition : « woRÜber », « woFÜR », « woRAN » ; dessen / deren restent légers et atones', items: [{ id: 'b2l15-worueber-pron', german: 'worüber', english: 'about which', french: 'dont / au sujet de quoi', gender: null, syllables: ['wo', 'RÜ', 'ber'], pronunciation: 'vo-RUE-ber', example: { de: 'Worüber sprichst du?', en: 'What are you talking about?', fr: 'De quoi parles-tu ?' } }, { id: 'b2l15-dessen-pron', german: 'dessen', english: 'whose', french: 'dont', gender: null, syllables: ['DES', 'sen'], pronunciation: 'DES-sen', example: { de: 'Der Mann, dessen Hund bellt.', en: 'The man whose dog barks.', fr: 'L’homme dont le chien aboie.' } }] },

    { kind: 'wrapup',
      summary: 'You can now use **wer / was**, **dessen / deren** and **wo(r)- compounds** (**worüber, wofür, worauf**) to build rich relative clauses. 🎉',
      summaryFr: 'Tu sais maintenant utiliser **wer / was**, **dessen / deren** et les **composés en wo(r)-** (**worüber, wofür, worauf**) pour construire des relatives riches. 🎉',
      card: { title: 'Relative clauses on one page', titleFr: 'Les relatives en une page', sections: [
        { heading: 'wer / was', headingFr: 'wer / was', rows: [g('wer … der …', 'Wer lernt, der kommt weiter.', 'Wer lernt, der kommt weiter.'), g('alles / etwas / nichts, was …', 'Alles, was er sagt …', 'Alles, was er sagt …')] },
        { heading: 'Whose', headingFr: 'Dont', rows: [g('dessen (m/n) · deren (f/pl)', 'no article after it', 'pas d’article après')] },
        { heading: 'wo(r)-', headingFr: 'wo(r)-', rows: [g('worüber · wofür · worauf · woran', 'things only', 'choses seulement'), g('people: mit dem · auf die', 'preposition + pronoun', 'préposition + pronom')] },
      ] } },
  ],
};
