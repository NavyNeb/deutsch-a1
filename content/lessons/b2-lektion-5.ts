import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion5: Lesson = {
  id: 'b2-l5', level: 'B2', module: 2, number: 5,
  title: { de: 'Partizipialattribute', en: 'Participle phrases before nouns', fr: 'Les participes épithètes développés' },
  theme: 'Extended attributes in front of a noun: das gestern veröffentlichte Buch, der lachende Mann, die zu lösende Aufgabe', themeFr: 'Épithètes développés devant un nom : das gestern veröffentlichte Buch, der lachende Mann, die zu lösende Aufgabe',
  goals: ['Form Partizip I and Partizip II as adjectives', 'Understand the "zu + Partizip I" form (die zu lösende Aufgabe)', 'Unpack a long participle phrase into a relative clause', 'Read formal news and academic texts'], goalsFr: ['Former le Partizip I et le Partizip II comme adjectifs', 'Comprendre la forme « zu + Partizip I » (die zu lösende Aufgabe)', 'Retransformer un long participe en proposition relative', 'Lire des textes de presse et universitaires'],
  canDo: g('Ich kann erweiterte Partizipialattribute vor einem Nomen bilden, verstehen und in einen Relativsatz auflösen.', 'I can form and understand extended participle phrases in front of a noun and unpack them into a relative clause.', 'Je sais former et comprendre des groupes participiaux étendus devant un nom et les transformer en proposition relative.'),
  steps: [
    { kind: 'intro', title: 'Partizipialattribute 📚', titleFr: 'Groupes participiaux 📚',
      scene: 'A news report uses long phrases before nouns. Unpacking them is the key to reading German quickly.', sceneFr: 'Un reportage utilise de longues expressions devant les noms. Les décomposer est la clé pour lire vite l’allemand.',
      goals: ['Form Partizip I and Partizip II as adjectives', 'Understand zu + Partizip I (die zu lösende Aufgabe)', 'Unpack a long participle phrase into a relative clause'],
      goalsFr: ['Former le participe I et II comme adjectifs', 'Comprendre zu + participe I (die zu lösende Aufgabe)', 'Décomposer une longue expression participiale en proposition relative'] },

    // ───────────── 1 · Participles as attributes ─────────────
    { kind: 'chapter', title: 'Partizip I und II als Attribut', titleFr: 'Participe I et II comme épithète', blurb: 'lachend, veröffentlicht, zu lösend.', blurbFr: 'lachend, veröffentlicht, zu lösend.' },

    { kind: 'situation', title: 'Die Nachrichten', titleFr: 'Les nouvelles',
      setting: 'A reporter reads the headlines.', settingFr: 'Une journaliste lit les gros titres.',
      lines: [
        line('Reporterin', 'Die steigenden Preise machen vielen Familien Sorgen. Das veröffentlichte Buch ist schon ausverkauft. Der lachende Mann winkt uns zu.', 'The rising prices worry many families. The published book is already sold out. The laughing man waves at us.', 'La hausse des prix inquiète beaucoup de familles. Le livre publié est déjà épuisé. L’homme qui rit nous fait signe.'),
        line('Reporterin', 'Die zu lösende Aufgabe ist schwer. Die zu beachtenden Regeln stehen hier. Das war ein überzeugendes Argument.', 'The task to be solved is hard. The rules to be observed are here. That was a convincing argument.', 'La tâche à résoudre est difficile. Les règles à respecter sont ici. C’était un argument convaincant.'),
        line('Reporterin', 'Die erforderlichen Unterlagen fehlen. Die verwendete Methode ist neu. Die kürzlich veröffentlichte Studie überrascht. Das ist ein bekannter Autor.', 'The required documents are missing. The method used is new. The recently published study is surprising. That is a well-known author.', 'Les documents requis manquent. La méthode utilisée est nouvelle. L’étude publiée récemment surprend. C’est un auteur connu.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l5-e11', prompt: 'What is already sold out?', promptFr: 'Qu’est-ce qui est déjà épuisé ?', options: ['The published book', 'The newspaper', 'The study'], optionsFr: ['Le livre publié', 'Le journal', 'L’étude'], answer: 0, explain: 'She says: “Das veröffentlichte Buch ist schon ausverkauft.”', explainFr: 'Elle dit : « Das veröffentlichte Buch ist schon ausverkauft. »', hint: 'Look for “veröffentlichte”.', hintFr: 'Cherche « veröffentlichte ».' } },

    { kind: 'wordgroup', title: 'Veröffentlichen und verwenden', titleFr: 'Publier et utiliser',
      items: [{ id: 'b2l5-veroeffentlichen', german: 'veröffentlichen', english: 'to publish', french: 'publier', gender: null, syllables: ['ver', 'Ö', 'ffent', 'li', 'chen'], pronunciation: 'fer-OEF-fent-li-khen', example: { de: 'Das Buch wurde gestern veröffentlicht.', en: 'The book was published yesterday.', fr: 'Le livre a été publié hier.' } }, { id: 'b2l5-studie', german: 'die Studie', english: 'the study', french: 'l’étude', gender: 'die', syllables: ['STU', 'die'], pronunciation: 'dee SHTOO-dee-e', example: { de: 'Die kürzlich veröffentlichte Studie überrascht.', en: 'The recently published study is surprising.', fr: 'L’étude publiée récemment surprend.' } }, { id: 'b2l5-verwenden', german: 'verwenden', english: 'to use', french: 'utiliser', gender: null, syllables: ['ver', 'WEN', 'den'], pronunciation: 'fer-VEN-den', example: { de: 'Die verwendete Methode ist neu.', en: 'The method used is new.', fr: 'La méthode utilisée est nouvelle.' } }, { id: 'b2l5-bekannt', german: 'bekannt', english: 'known / well-known', french: 'connu', gender: null, syllables: ['be', 'KANNT'], pronunciation: 'be-KAHNT', example: { de: 'Das ist ein bekannter Autor.', en: 'That is a well-known author.', fr: 'C’est un auteur connu.' } }, { id: 'b2l5-erforderlich', german: 'erforderlich', english: 'necessary / required', french: 'nécessaire', gender: null, syllables: ['er', 'FOR', 'der', 'lich'], pronunciation: 'er-FOR-der-likh', example: { de: 'Die erforderlichen Unterlagen fehlen.', en: 'The required documents are missing.', fr: 'Les documents requis manquent.' } }] },

    { kind: 'wordgroup', title: 'Aufgaben und Argumente', titleFr: 'Tâches et arguments',
      items: [{ id: 'b2l5-aufgabe', german: 'die Aufgabe', english: 'the task', french: 'la tâche', gender: 'die', syllables: ['AUF', 'ga', 'be'], pronunciation: 'dee OWF-gah-be', example: { de: 'Das ist eine schwierige Aufgabe.', en: 'That is a difficult task.', fr: 'C’est une tâche difficile.' } }, { id: 'b2l5-loesen', german: 'lösen', english: 'to solve', french: 'résoudre', gender: null, syllables: ['LÖ', 'sen'], pronunciation: 'LOE-zen', example: { de: 'Wir müssen das Problem lösen.', en: 'We have to solve the problem.', fr: 'Nous devons résoudre le problème.' } }, { id: 'b2l5-beachten', german: 'beachten', english: 'to observe / pay attention to', french: 'respecter', gender: null, syllables: ['be', 'ACH', 'ten'], pronunciation: 'be-AKH-ten', example: { de: 'Die zu beachtenden Regeln stehen hier.', en: 'The rules to be observed are listed here.', fr: 'Les règles à respecter sont ici.' } }, { id: 'b2l5-steigen', german: 'steigen', english: 'to rise', french: 'augmenter', gender: null, syllables: ['STEI', 'gen'], pronunciation: 'SHTY-gen', example: { de: 'Die steigenden Preise machen Sorgen.', en: 'The rising prices cause worry.', fr: 'La hausse des prix inquiète.' } }, { id: 'b2l5-ueberzeugend', german: 'überzeugend', english: 'convincing', french: 'convaincant', gender: null, syllables: ['ü', 'ber', 'ZEU', 'gend'], pronunciation: 'ue-ber-TSOY-gent', example: { de: 'Das war ein überzeugendes Argument.', en: 'That was a convincing argument.', fr: 'C’était un argument convaincant.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l5-partizipien', title: 'Partizip I, Partizip II and zu + Partizip I as attributes', titleFr: 'Participe I, participe II et zu + participe I comme épithètes',
      lead: 'Partizip I (infinitive + d) = active, simultaneous. Partizip II = passive / completed. zu + Partizip I = must / can be done.',
      leadFr: 'Participe I (infinitif + d) = actif, simultané. Participe II = passif / achevé. zu + participe I = doit / peut être fait.',
      explanationMd: 'Participles take **adjective endings** and can be **expanded with extra information in front of the noun**. **Partizip I** (infinitive + **-d**): **active, simultaneous** → **der lachende Mann** = der Mann, **der lacht**. **Partizip II**: **passive / completed** → **das veröffentlichte Buch** = das Buch, **das veröffentlicht wurde**. **zu + Partizip I** = **must / can be done** → **die zu lösende Aufgabe** = die Aufgabe, **die gelöst werden muss**. Endings follow the usual **adjective table** (**-e, -en, -er, -es**). **Transitive verbs** make **passive Partizip II**, **intransitive verbs with sein** make **active** ones (**die gestiegenen Preise**).',
      explanationMdFr: 'Les participes prennent des **terminaisons d’adjectif** et peuvent être **étendus avec des informations supplémentaires devant le nom**. **Participe I** (infinitif + **-d**) : **actif, simultané** → **der lachende Mann** = l’homme **qui rit**. **Participe II** : **passif / achevé** → **das veröffentlichte Buch** = le livre **qui a été publié**. **zu + participe I** = **doit / peut être fait** → **die zu lösende Aufgabe** = la tâche **qui doit être résolue**. Les terminaisons suivent le **tableau habituel des adjectifs** (**-e, -en, -er, -es**). Les **verbes transitifs** donnent un **participe II passif**, les **verbes intransitifs avec sein** un **sens actif** (**die gestiegenen Preise**).',
      tables: [{ title: 'Three participle forms', titleFr: 'Trois formes participiales', headers: ['Form', 'Meaning', 'Example', 'Relative clause'], headersFr: ['Forme', 'Sens', 'Exemple', 'Proposition relative'],
        rows: [['Partizip I', 'active, now', 'der lachende Mann', 'der Mann, der lacht'], ['Partizip II', 'passive, finished', 'das veröffentlichte Buch', 'das Buch, das veröffentlicht wurde'], ['zu + Partizip I', 'must / can be done', 'die zu lösende Aufgabe', 'die Aufgabe, die gelöst werden muss'], ['Partizip II (sein)', 'active, finished', 'die gestiegenen Preise', 'die Preise, die gestiegen sind']],
        rowsFr: [['participe I', 'actif, en cours', 'der lachende Mann', 'der Mann, der lacht'], ['participe II', 'passif, achevé', 'das veröffentlichte Buch', 'das Buch, das veröffentlicht wurde'], ['zu + participe I', 'doit / peut être fait', 'die zu lösende Aufgabe', 'die Aufgabe, die gelöst werden muss'], ['participe II (sein)', 'actif, achevé', 'die gestiegenen Preise', 'die Preise, die gestiegen sind']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Die zu lösende Aufgabe', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'schwer.', role: 'other' }], en: 'The task to be solved is hard.', fr: 'La tâche à résoudre est difficile.' },
        { parts: [{ text: 'Das veröffentlichte Buch', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'schon', role: 'time' }, { text: 'ausverkauft.', role: 'other' }], en: 'The published book is already sold out.', fr: 'Le livre publié est déjà épuisé.' },
      ],
      contrast: {
        a: { label: 'Relative clause', labelFr: 'Proposition relative', note: 'spoken, clear', noteFr: 'oral, clair', examples: [g('Die Aufgabe, die gelöst werden muss, ist schwer.', 'The task that must be solved is hard.', 'La tâche qui doit être résolue est difficile.'), g('Das Buch, das veröffentlicht wurde, ist ausverkauft.', 'The book that was published is sold out.', 'Le livre qui a été publié est épuisé.')] },
        b: { label: 'Participle phrase', labelFr: 'Groupe participial', note: 'written, compact', noteFr: 'écrit, compact', examples: [g('Die zu lösende Aufgabe ist schwer.', 'The task to be solved is hard.', 'La tâche à résoudre est difficile.'), g('Das veröffentlichte Buch ist ausverkauft.', 'The published book is sold out.', 'Le livre publié est épuisé.')] },
      },
      examples: [
        g('Der lachende Mann winkt uns zu.', 'The laughing man waves at us.', 'L’homme qui rit nous fait signe.'),
        g('Das veröffentlichte Buch ist schon ausverkauft.', 'The published book is already sold out.', 'Le livre publié est déjà épuisé.'),
        g('Die zu lösende Aufgabe ist schwer.', 'The task to be solved is hard.', 'La tâche à résoudre est difficile.'),
        g('Die steigenden Preise machen Sorgen.', 'The rising prices cause worry.', 'La hausse des prix inquiète.'),
        g('Die zu beachtenden Regeln stehen hier.', 'The rules to be observed are here.', 'Les règles à respecter sont ici.'),
        g('Die erforderlichen Unterlagen fehlen.', 'The required documents are missing.', 'Les documents requis manquent.'),
      ],
      mistakes: [
        { wrong: 'die lösende Aufgabe', right: 'die zu lösende Aufgabe', why: 'For a passive “must be done” meaning, use zu + Partizip I.', whyFr: 'Pour le sens passif « doit être fait », utilise zu + participe I.' },
        { wrong: 'das veröffentlichten Buch', right: 'das veröffentlichte Buch', why: 'After das the ending is -e.', whyFr: 'Après das, la terminaison est -e.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l5-e1', prompt: 'lachen → der ___ Mann (laughing)', answer: 'lachende', hint: 'Partizip I = infinitive + d + ending', hintFr: 'Partizip I = infinitif + d + terminaison' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l5-e2', prompt: 'veröffentlichen → das ___ Buch (published)', answer: 'veröffentlichte', hint: 'Partizip II + ending', hintFr: 'Partizip II + terminaison' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l5-e3', prompt: '"die zu lösende Aufgabe" means …', promptFr: '« die zu lösende Aufgabe » signifie …', options: ['the task that is solving', 'the task that must be solved', 'the task that was solved'], answer: 1, explain: 'zu + Partizip I = must / can be done.', explainFr: 'zu + Partizip I = doit / peut être fait.', hint: 'zu + Partizip I = necessity.', hintFr: 'zu + Partizip I = nécessité.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l5-e8', prompt: 'Die ___ Unterlagen fehlen. (required, from erfordern)', answer: 'erforderlichen', hint: 'plural noun → -en ending', hintFr: 'nom pluriel → terminaison -en' } },

    // ───────────── 2 · Unpacking ─────────────
    { kind: 'chapter', title: 'Lange Attribute auflösen', titleFr: 'Décomposer de longs attributs', blurb: 'Start at the participle.', blurbFr: 'Commence par le participe.' },

    { kind: 'situation', title: 'Ein Satz wie ein Paket', titleFr: 'Une phrase comme un paquet',
      setting: 'A teacher shows how to unpack a long phrase.', settingFr: 'Un professeur montre comment déballer une longue expression.',
      lines: [
        line('Lehrerin', 'Das gestern von der Redaktion veröffentlichte Buch. Fangen wir beim Partizip an: veröffentlicht. → Das Buch, das gestern von der Redaktion veröffentlicht wurde.', 'The book published yesterday by the editorial team. Let us start at the participle: published. → The book that was published yesterday by the editorial team.', 'Le livre publié hier par la rédaction. Commençons par le participe : publié. → Le livre qui a été publié hier par la rédaction.'),
        line('Schüler', 'Die in der Stadt lebenden Menschen sind zufrieden. Das von allen akzeptierte Ergebnis überrascht uns.', 'The people living in the city are satisfied. The result accepted by everyone surprises us.', 'Les gens vivant en ville sont satisfaits. Le résultat accepté par tous nous surprend.'),
        line('Lehrerin', 'Der Artikel öffnet die Gruppe, Partizip und Nomen schließen sie. Alles dazwischen gehört zum Partizip.', 'The article opens the phrase, the participle and noun close it. Everything in between belongs to the participle.', 'L’article ouvre le groupe, le participe et le nom le ferment. Tout ce qui est entre les deux appartient au participe.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b2l5-aufloesen', title: 'Unpacking an extended attribute', titleFr: 'Décomposer un attribut étendu',
      lead: 'The article opens the phrase; the participle + noun close it. Everything in between belongs to the participle. Turn it into a relative clause.',
      leadFr: 'L’article ouvre le groupe ; le participe + le nom le ferment. Tout ce qui est entre les deux appartient au participe. Transforme-le en proposition relative.',
      explanationMd: 'In **formal German**, **extra words sit between the article and the noun**: **das gestern von der Redaktion veröffentlichte Buch**. To understand it, **start at the participle and turn it into a relative clause**: **→ das Buch, das gestern von der Redaktion veröffentlicht wurde.** **Rule of thumb**: the **article opens** the phrase, the **participle + noun close it** — everything in between belongs to the participle. For a **Partizip I** use the **present** relative clause (**der Mann, der lacht**), for a **Partizip II** the **passive Präteritum** (**…, das veröffentlicht wurde**) or **sein-Perfekt**, for **zu + Partizip I** a **passive with muss / kann** (**…, die gelöst werden muss**).',
      explanationMdFr: 'Dans l’**allemand formel**, des **mots supplémentaires se placent entre l’article et le nom** : **das gestern von der Redaktion veröffentlichte Buch**. Pour le comprendre, **commence par le participe et transforme-le en proposition relative** : **→ das Buch, das gestern von der Redaktion veröffentlicht wurde.** **Règle simple** : l’**article ouvre** le groupe, le **participe + le nom le ferment** — tout ce qui est entre les deux appartient au participe. Pour un **participe I**, utilise la relative au **présent** (**der Mann, der lacht**), pour un **participe II** le **passif au prétérit** (**…, das veröffentlicht wurde**) ou le **Perfekt avec sein**, pour **zu + participe I** un **passif avec muss / kann** (**…, die gelöst werden muss**).',
      tables: [{ title: 'Phrase → relative clause', titleFr: 'Groupe → proposition relative', headers: ['Participle phrase', 'Relative clause'], headersFr: ['Groupe participial', 'Proposition relative'],
        rows: [['das gestern veröffentlichte Buch', 'das Buch, das gestern veröffentlicht wurde'], ['die in der Stadt lebenden Menschen', 'die Menschen, die in der Stadt leben'], ['das von allen akzeptierte Ergebnis', 'das Ergebnis, das von allen akzeptiert wurde'], ['die zu beachtenden Regeln', 'die Regeln, die beachtet werden müssen']],
        rowsFr: [['das gestern veröffentlichte Buch', 'das Buch, das gestern veröffentlicht wurde'], ['die in der Stadt lebenden Menschen', 'die Menschen, die in der Stadt leben'], ['das von allen akzeptierte Ergebnis', 'das Ergebnis, das von allen akzeptiert wurde'], ['die zu beachtenden Regeln', 'die Regeln, die beachtet werden müssen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Die in der Stadt lebenden', role: 'other' }, { text: 'Menschen', role: 'subject' }, { text: 'sind', role: 'verb' }, { text: 'zufrieden.', role: 'other' }], en: 'The people living in the city are satisfied.', fr: 'Les gens vivant en ville sont satisfaits.' },
        { parts: [{ text: 'Das von allen akzeptierte', role: 'other' }, { text: 'Ergebnis', role: 'subject' }, { text: 'überrascht', role: 'verb' }, { text: 'uns.', role: 'accusative' }], en: 'The result accepted by everyone surprises us.', fr: 'Le résultat accepté par tous nous surprend.' },
      ],
      contrast: {
        a: { label: 'Packed (formal)', labelFr: 'Compact (formel)', note: 'participle phrase', noteFr: 'groupe participial', examples: [g('Das gestern von der Redaktion veröffentlichte Buch ist ausverkauft.', 'The book published yesterday by the editorial team is sold out.', 'Le livre publié hier par la rédaction est épuisé.'), g('Die in der Stadt lebenden Menschen sind zufrieden.', 'The people living in the city are satisfied.', 'Les gens vivant en ville sont satisfaits.')] },
        b: { label: 'Unpacked (clear)', labelFr: 'Décomposé (clair)', note: 'relative clause', noteFr: 'proposition relative', examples: [g('Das Buch, das gestern von der Redaktion veröffentlicht wurde, ist ausverkauft.', 'The book that was published yesterday by the editorial team is sold out.', 'Le livre qui a été publié hier par la rédaction est épuisé.'), g('Die Menschen, die in der Stadt leben, sind zufrieden.', 'The people who live in the city are satisfied.', 'Les gens qui vivent en ville sont satisfaits.')] },
      },
      examples: [
        g('Das gestern von der Redaktion veröffentlichte Buch ist ausverkauft.', 'The book published yesterday by the editorial team is sold out.', 'Le livre publié hier par la rédaction est épuisé.'),
        g('Die in der Stadt lebenden Menschen sind zufrieden.', 'The people living in the city are satisfied.', 'Les gens vivant en ville sont satisfaits.'),
        g('Das von allen akzeptierte Ergebnis überrascht uns.', 'The result accepted by everyone surprises us.', 'Le résultat accepté par tous nous surprend.'),
        g('Die kürzlich veröffentlichte Studie überrascht.', 'The recently published study is surprising.', 'L’étude publiée récemment surprend.'),
        g('Die verwendete Methode ist neu.', 'The method used is new.', 'La méthode utilisée est nouvelle.'),
        g('Die zu beachtenden Regeln stehen hier.', 'The rules to be observed are here.', 'Les règles à respecter sont ici.'),
      ],
      mistakes: [
        { wrong: 'das veröffentlichte gestern Buch', right: 'das gestern veröffentlichte Buch', why: 'The participle stands right before the noun.', whyFr: 'Le participe se place juste devant le nom.' },
        { wrong: 'der lachend Mann', right: 'der lachende Mann', why: 'The participle needs an adjective ending.', whyFr: 'Le participe a besoin d’une terminaison d’adjectif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l5-e4', prompt: 'Turn into a relative clause: "der bellende Hund"', promptFr: 'Transforme en relative : « der bellende Hund »', options: ['der Hund, der bellt', 'der Hund, der gebellt wurde', 'der Hund, der bellen muss'], answer: 0, explain: 'Partizip I = active, simultaneous.', explainFr: 'Partizip I = actif, simultané.', hint: 'Active and happening now.', hintFr: 'Actif et en cours.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b2l5-e5', pairs: [{ de: 'die steigenden Preise', en: 'the rising prices', fr: 'la hausse des prix' }, { de: 'das veröffentlichte Buch', en: 'the published book', fr: 'le livre publié' }, { de: 'die zu beachtenden Regeln', en: 'the rules to be observed', fr: 'les règles à respecter' }], hint: 'Match each phrase to its meaning.', hintFr: 'Associe chaque expression à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l5-e9', prompt: 'Which unpacks "das gestern veröffentlichte Buch"?', promptFr: 'Laquelle décompose « das gestern veröffentlichte Buch » ?', options: ['das Buch, das gestern veröffentlicht wurde', 'das Buch, das gestern veröffentlicht', 'das Buch, das gestern veröffentlichen muss'], answer: 0, explain: 'Partizip II = passive: veröffentlicht wurde.', explainFr: 'Partizip II = passif : veröffentlicht wurde.', hint: 'Passive, completed.', hintFr: 'Passif, accompli.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l5-e7', tokens: ['ist', 'schwer', 'Die', 'zu lösende', 'Aufgabe'], answer: ['Die', 'zu lösende', 'Aufgabe', 'ist', 'schwer'], hint: 'Article – participle phrase – noun.', hintFr: 'Article – participe – nom.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l5-e6', prompt: 'Listen. What is the news about?', promptFr: 'Écoute. De quoi parle l’information ?', audio: { ttsText: 'Die steigenden Preise machen vielen Familien Sorgen.' }, options: ['Rising prices worry families', 'Prices fell', 'Families are moving'], optionsFr: ['La hausse des prix inquiète les familles', 'Les prix ont baissé', 'Les familles déménagent'], answer: 0, hint: 'steigend = rising.', hintFr: 'steigend = qui augmente.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l5-e10', prompt: 'Listen. What is described?', promptFr: 'Écoute. Qu’est-ce qui est décrit ?', audio: { ttsText: 'Das von allen akzeptierte Ergebnis überrascht uns.' }, options: ['A result accepted by everyone', 'A result nobody likes', 'A result still to come'], optionsFr: ['Un résultat accepté par tous', 'Un résultat que personne n’aime', 'Un résultat à venir'], answer: 0, hint: 'akzeptierte = accepted.', hintFr: 'akzeptierte = accepté.' } },

    { kind: 'pronunciation', focus: 'Long phrases need rhythm: pause lightly before the participle and stress it: "das gestern veröffentlichte BUCH"', focusFr: 'Les longues expressions demandent du rythme : fais une petite pause avant le participe et accentue-le : « das gestern veröffentlichte BUCH »', items: [{ id: 'b2l5-veroeffentlicht-pron', german: 'veröffentlicht', english: 'published', french: 'publié', gender: null, syllables: ['ver', 'Ö', 'ffent', 'licht'], pronunciation: 'fer-OEF-fent-likht', example: { de: 'Das veröffentlichte Buch.', en: 'The published book.', fr: 'Le livre publié.' } }, { id: 'b2l5-erforderlich-pron', german: 'erforderlich', english: 'required', french: 'nécessaire', gender: null, syllables: ['er', 'FOR', 'der', 'lich'], pronunciation: 'er-FOR-der-likh', example: { de: 'Es ist erforderlich.', en: 'It is required.', fr: 'C’est nécessaire.' } }] },

    { kind: 'wrapup',
      summary: 'You can now form and understand **participles before nouns** — **der lachende Mann, das veröffentlichte Buch, die zu lösende Aufgabe** — and **unpack** long phrases into **relative clauses**. 🎉',
      summaryFr: 'Tu sais maintenant former et comprendre les **participes devant les noms** — **der lachende Mann, das veröffentlichte Buch, die zu lösende Aufgabe** — et **décomposer** de longues expressions en **propositions relatives**. 🎉',
      card: { title: 'Participle phrases on one page', titleFr: 'Les groupes participiaux en une page', sections: [
        { heading: 'Three forms', headingFr: 'Trois formes', rows: [g('lachend · veröffentlicht · zu lösend', 'active · passive · must be done', 'actif · passif · doit être fait')] },
        { heading: 'Unpack', headingFr: 'Décomposer', rows: [g('article … participle + noun', 'start at the participle', 'commence par le participe')] },
      ] } },
  ],
};
