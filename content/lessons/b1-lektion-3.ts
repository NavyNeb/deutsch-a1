import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion3: Lesson = {
  id: 'b1-l3', level: 'B1', module: 3, number: 9,
  title: { de: 'Relativsätze', en: 'Relative clauses', fr: 'Les propositions relatives' },
  theme: 'Adding information with relative clauses (der/die/das)', themeFr: 'Ajouter des informations avec les propositions relatives (der/die/das)',
  goals: ['Use relative pronouns der/die/das', 'Match the pronoun to the noun (gender/number)', 'Choose nominative or accusative relative pronouns', 'Put the verb at the end of the relative clause'], goalsFr: ['Utiliser les pronoms relatifs der/die/das', 'Accorder le pronom au nom (genre/nombre)', 'Choisir le pronom relatif au nominatif ou à l’accusatif', 'Mettre le verbe à la fin de la relative'],
  canDo: g('Ich kann Menschen, Orte und Dinge mit Relativsätzen genauer beschreiben, auch mit „alles, was …“.', 'I can describe people, places and things more precisely with relative clauses, also with “alles, was …”.', 'Je sais décrire plus précisément des personnes, des lieux et des choses avec des propositions relatives, aussi avec « alles, was … ».'),
  steps: [
    { kind: 'intro', title: 'Relativsätze 🔗', titleFr: 'Les propositions relatives 🔗',
      scene: 'Lara recommends books, places and people to a friend — and every sentence adds one more detail.', sceneFr: 'Lara recommande des livres, des lieux et des personnes à une amie — et chaque phrase ajoute un détail.',
      goals: ['Use der / die / das as relative pronouns', 'Choose nominative or accusative and match gender and number', 'Use was after alles, nichts, etwas, das'],
      goalsFr: ['Utiliser der / die / das comme pronoms relatifs', 'Choisir nominatif ou accusatif et accorder genre et nombre', 'Utiliser was après alles, nichts, etwas, das'] },

    // ───────────── 1 · Nominative ─────────────
    { kind: 'chapter', title: 'Der Relativsatz: Subjekt', titleFr: 'La relative : sujet', blurb: 'der / die / das as subject.', blurbFr: 'der / die / das sujet.' },

    { kind: 'situation', title: 'Wer ist das?', titleFr: 'Qui est-ce ?',
      setting: 'At a party Lara points out people.', settingFr: 'À une fête, Lara montre des personnes.',
      lines: [
        line('Lara', 'Ich kenne einen Mann, der Arzt ist. Das ist die Kollegin, die aus Wien kommt.', 'I know a man who is a doctor. That is the colleague who is from Vienna.', 'Je connais un homme qui est médecin. Voici la collègue qui vient de Vienne.'),
        line('Freundin', 'Und wer ist der Nachbar, der so laut ist?', 'And who is the neighbour who is so loud?', 'Et qui est le voisin qui fait tant de bruit ?'),
        line('Lara', 'Ein Mensch, der viel liest, ist selten laut. Die Kollegin, die Französisch spricht, hilft uns.', 'A person who reads a lot is rarely loud. The colleague who speaks French helps us.', 'Quelqu’un qui lit beaucoup est rarement bruyant. La collègue qui parle français nous aide.'),
        line('Freundin', 'Das ist ein Thema, das interessant ist. Der Ort, der ruhig ist, gefällt mir.', 'That is a topic that is interesting. The place that is quiet appeals to me.', 'C’est un sujet qui est intéressant. L’endroit qui est calme me plaît.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l3-e11', prompt: 'What does the colleague speak?', promptFr: 'Quelle langue parle la collègue ?', options: ['French', 'Italian', 'Spanish'], optionsFr: ['Le français', 'L’italien', 'L’espagnol'], answer: 0, explain: 'Lara says: “Die Kollegin, die Französisch spricht, hilft uns.”', explainFr: 'Lara dit : « Die Kollegin, die Französisch spricht, hilft uns. »', hint: 'Look for “Französisch”.', hintFr: 'Cherche « Französisch ».' } },

    { kind: 'wordgroup', title: 'Menschen, Orte, Dinge', titleFr: 'Personnes, lieux, choses',
      items: [{ id: 'b1l3-mensch', german: 'der Mensch', english: 'the person / human', french: 'la personne / l’humain', gender: 'der', syllables: ['MENSCH'], pronunciation: 'dair MENSH', example: { de: 'Ein Mensch, der viel liest.', en: 'A person who reads a lot.', fr: 'Une personne qui lit beaucoup.' } }, { id: 'b1l3-nachbar', german: 'der Nachbar', english: 'the neighbour', french: 'le voisin', gender: 'der', syllables: ['NACH', 'bar'], pronunciation: 'dair NAHKH-bar', example: { de: 'Der Nachbar, der laut ist.', en: 'The neighbour who is loud.', fr: 'Le voisin qui est bruyant.' } }, { id: 'b1l3-kollegin', german: 'die Kollegin', english: 'the colleague (f)', french: 'la collègue', gender: 'die', syllables: ['ko', 'lle', 'GIN'], pronunciation: 'ko-le-GHEEN', example: { de: 'Die Kollegin, die Französisch spricht.', en: 'The colleague who speaks French.', fr: 'La collègue qui parle français.' } }, { id: 'b1l3-ort', german: 'der Ort', english: 'the place', french: 'le lieu / l’endroit', gender: 'der', syllables: ['ORT'], pronunciation: 'dair ORT', example: { de: 'Ein Ort, der ruhig ist.', en: 'A place that is quiet.', fr: 'Un endroit qui est calme.' } }, { id: 'b1l3-ding', german: 'das Ding', english: 'the thing', french: 'la chose', gender: 'das', syllables: ['DING'], pronunciation: 'dahs DING', example: { de: 'Das Ding, das ich brauche.', en: 'The thing (that) I need.', fr: 'La chose dont j’ai besoin.' } }, { id: 'b1l3-thema', german: 'das Thema', english: 'the topic', french: 'le sujet / thème', gender: 'das', syllables: ['THE', 'ma'], pronunciation: 'dahs TAY-mah', example: { de: 'Ein Thema, das interessant ist.', en: 'A topic that is interesting.', fr: 'Un sujet qui est intéressant.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l3-nominativ', title: 'Relative pronoun as the subject', titleFr: 'Le pronom relatif sujet',
      lead: 'The relative pronoun matches the noun (gender, number). The verb goes to the end, commas around the clause.',
      leadFr: 'Le pronom relatif s’accorde avec le nom (genre, nombre). Le verbe va à la fin, virgules autour de la proposition.',
      explanationMd: 'A **relative clause** adds information about a noun. The **relative pronoun** (**der / die / das**) matches the noun’s **gender and number**; here it is the **subject** (nominative). The **verb goes to the end** and **commas** surround the clause: **Der Mann, der dort steht, …** (m), **Die Frau, die Deutsch spricht, …** (f), **Das Kind, das spielt, …** (n), **Die Leute, die warten, …** (plural). The clause usually stands **right after the noun** it describes.',
      explanationMdFr: 'Une **proposition relative** ajoute une information sur un nom. Le **pronom relatif** (**der / die / das**) s’accorde avec le **genre et le nombre** du nom ; ici c’est le **sujet** (nominatif). Le **verbe va à la fin** et des **virgules** encadrent la proposition : **Der Mann, der dort steht, …** (m), **Die Frau, die Deutsch spricht, …** (f), **Das Kind, das spielt, …** (n), **Die Leute, die warten, …** (pluriel). La proposition se place généralement **juste après le nom** qu’elle décrit.',
      tables: [{ title: 'Relative pronoun, nominative', titleFr: 'Pronom relatif, nominatif', headers: ['Noun', 'Pronoun', 'Example'], headersFr: ['Nom', 'Pronom', 'Exemple'],
        rows: [['m (der Mann)', 'der', 'Der Mann, der dort steht, ist Arzt.'], ['f (die Frau)', 'die', 'Die Frau, die Deutsch spricht, ist Lehrerin.'], ['n (das Kind)', 'das', 'Das Kind, das spielt, ist glücklich.'], ['plural (die Leute)', 'die', 'Die Leute, die warten, sind müde.']],
        rowsFr: [['m (der Mann)', 'der', 'Der Mann, der dort steht, ist Arzt.'], ['f (die Frau)', 'die', 'Die Frau, die Deutsch spricht, ist Lehrerin.'], ['n (das Kind)', 'das', 'Das Kind, das spielt, ist glücklich.'], ['pluriel (die Leute)', 'die', 'Die Leute, die warten, sind müde.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Mann,', role: 'subject' }, { text: 'der', role: 'connector' }, { text: 'neben mir', role: 'place' }, { text: 'wohnt,', role: 'verb' }, { text: 'ist', role: 'verb' }, { text: 'nett.', role: 'other' }], en: 'The man who lives next to me is nice.', fr: 'L’homme qui habite à côté de moi est sympa.' },
        { parts: [{ text: 'Das ist', role: 'other' }, { text: 'die Kollegin,', role: 'subject' }, { text: 'die', role: 'connector' }, { text: 'aus Wien', role: 'place' }, { text: 'kommt.', role: 'verb' }], en: 'That is the colleague who comes from Vienna.', fr: 'Voici la collègue qui vient de Vienne.' },
      ],
      contrast: {
        a: { label: 'Two sentences', labelFr: 'Deux phrases', note: 'repeat the noun', noteFr: 'on répète le nom', examples: [g('Ich kenne einen Mann. Er ist Arzt.', 'I know a man. He is a doctor.', 'Je connais un homme. Il est médecin.'), g('Das ist die Kollegin. Sie kommt aus Wien.', 'That is the colleague. She is from Vienna.', 'Voici la collègue. Elle vient de Vienne.')] },
        b: { label: 'With a relative clause', labelFr: 'Avec une relative', note: 'one sentence', noteFr: 'une seule phrase', examples: [g('Ich kenne einen Mann, der Arzt ist.', 'I know a man who is a doctor.', 'Je connais un homme qui est médecin.'), g('Das ist die Kollegin, die aus Wien kommt.', 'That is the colleague who comes from Vienna.', 'Voici la collègue qui vient de Vienne.')] },
      },
      examples: [
        g('Ich kenne einen Mann, der Arzt ist.', 'I know a man who is a doctor.', 'Je connais un homme qui est médecin.'),
        g('Das ist die Kollegin, die aus Wien kommt.', 'That is the colleague who comes from Vienna.', 'Voici la collègue qui vient de Vienne.'),
        g('Ein Mensch, der viel liest, ist selten laut.', 'A person who reads a lot is rarely loud.', 'Quelqu’un qui lit beaucoup est rarement bruyant.'),
        g('Das Kind, das spielt, ist glücklich.', 'The child who is playing is happy.', 'L’enfant qui joue est heureux.'),
        g('Der Nachbar, der laut ist, wohnt unten.', 'The neighbour who is loud lives downstairs.', 'Le voisin qui est bruyant habite en bas.'),
        g('Das ist ein Ort, der mir gefällt.', 'That is a place that I like.', 'C’est un endroit qui me plaît.'),
      ],
      mistakes: [
        { wrong: 'Die Frau, der Deutsch spricht, ist Lehrerin.', right: 'Die Frau, die Deutsch spricht, ist Lehrerin.', why: 'The pronoun follows the gender of the noun: die Frau → die.', whyFr: 'Le pronom suit le genre du nom : die Frau → die.' },
        { wrong: 'Der Mann, der dort steht, ist Arzt', right: 'Der Mann, der dort steht, ist Arzt.', why: 'Always put a comma after the relative clause.', whyFr: 'Mets toujours une virgule après la relative.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l3-e1', prompt: 'Der Mann, ___ dort steht, ist mein Nachbar. (m, nominative)', answer: 'der', hint: 'masculine subject → der', hintFr: 'sujet masculin → der' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l3-e2', prompt: 'Die Frau, ___ Deutsch spricht, ist Lehrerin. (f, nominative)', answer: 'die', hint: 'feminine subject → die', hintFr: 'sujet féminin → die' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l3-e4', prompt: 'Choose: "Das Kind, ___ spielt, ist glücklich."', promptFr: 'Choisis : « Das Kind, ___ spielt, ist glücklich. »', options: ['der', 'die', 'das'], answer: 2, explain: '"Kind" is neuter → das (subject).', explainFr: '« Kind » est neutre → das (sujet).', hint: 'Kind is neuter.', hintFr: 'Kind est neutre.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l3-e5', tokens: ['wohnt', 'der', 'hier', 'Der Mann'], answer: ['Der Mann', 'der', 'hier', 'wohnt'], hint: 'Relative pronoun after the noun, verb at the end.', hintFr: 'Pronom relatif après le nom, verbe à la fin.' } },

    // ───────────── 2 · Accusative ─────────────
    { kind: 'chapter', title: 'Der Relativsatz: Objekt', titleFr: 'La relative : objet', blurb: 'den, die, das as object.', blurbFr: 'den, die, das objet.' },

    { kind: 'situation', title: 'Das Buch, das ich lese', titleFr: 'Le livre que je lis',
      setting: 'Lara recommends books and films.', settingFr: 'Lara recommande des livres et des films.',
      lines: [
        line('Lara', 'Der Roman, den ich lese, ist spannend. Ich empfehle dir ein Buch, das gut ist.', 'The novel that I’m reading is exciting. I recommend a book to you that is good.', 'Le roman que je lis est passionnant. Je te recommande un livre qui est bien.'),
        line('Freundin', 'Und der Film, den du gesehen hast?', 'And the film that you saw?', 'Et le film que tu as vu ?'),
        line('Lara', 'Der Film, den ich gesehen habe, war gut. Die Stadt, die ich besucht habe, war schön. Das Buch, das ich kaufe, ist teuer.', 'The film that I watched was good. The city that I visited was beautiful. The book that I’m buying is expensive.', 'Le film que j’ai vu était bien. La ville que j’ai visitée était belle. Le livre que j’achète est cher.'),
        line('Freundin', 'Das ist das Thema, das mich interessiert. Der Film, der mir gefällt, läuft morgen.', 'That is the topic that interests me. The film that I like is on tomorrow.', 'C’est le sujet qui m’intéresse. Le film qui me plaît passe demain.'),
      ],
      words: [{ id: 'b1l3-roman', german: 'der Roman', english: 'the novel', french: 'le roman', gender: 'der', syllables: ['ro', 'MAN'], pronunciation: 'dair ro-MAHN', example: { de: 'Der Roman, den ich lese, ist spannend.', en: 'The novel (that) I’m reading is exciting.', fr: 'Le roman que je lis est captivant.' } }, { id: 'b1l3-kennen', german: 'kennen', english: 'to know (a person/place)', french: 'connaître', gender: null, syllables: ['KEN', 'nen'], pronunciation: 'KEN-nen', example: { de: 'Ich kenne die Frau, die dort wohnt.', en: 'I know the woman who lives there.', fr: 'Je connais la femme qui habite là.' } }, { id: 'b1l3-empfehlen', german: 'empfehlen', english: 'to recommend', french: 'recommander', gender: null, syllables: ['emp', 'FEH', 'len'], pronunciation: 'emp-FAY-len', example: { de: 'Ich empfehle dir ein Buch, das gut ist.', en: 'I recommend a book that is good.', fr: 'Je te recommande un livre qui est bien.' } }, { id: 'b1l3-gefallen', german: 'gefallen', english: 'to please / to like', french: 'plaire', gender: null, syllables: ['ge', 'FAL', 'len'], pronunciation: 'ge-FAHL-len', example: { de: 'Der Film, der mir gefällt.', en: 'The film that I like.', fr: 'Le film qui me plaît.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l3-akkusativ', title: 'Relative pronoun as the object', titleFr: 'Le pronom relatif objet',
      lead: 'As the object (accusative) only the masculine changes: den. die and das stay the same.',
      leadFr: 'Comme objet (accusatif), seul le masculin change : den. die et das restent identiques.',
      explanationMd: 'When the **relative pronoun** is the **object** of the relative clause, use the **accusative**: the **masculine becomes den**; **die / das / die** stay the same: **Der Roman, den ich lese, …** (m), **Die Frau, die ich kenne, …** (f), **Das Buch, das ich kaufe, …** (n), **Die Filme, die ich mag, …** (plural). Test: ask **“Wen oder was …?”** inside the relative clause — **Was lese ich? Den Roman** → **den**. The **subject of the relative clause** (**ich**) stands right after the pronoun and the **verb is last**; in the **Perfekt** the **auxiliary** is the last word (**gesehen habe**).',
      explanationMdFr: 'Quand le **pronom relatif** est le **complément d’objet** de la relative, utilise l’**accusatif** : le **masculin devient den** ; **die / das / die** restent identiques : **Der Roman, den ich lese, …** (m), **Die Frau, die ich kenne, …** (f), **Das Buch, das ich kaufe, …** (n), **Die Filme, die ich mag, …** (pluriel). Test : demande **« Wen oder was …? »** dans la relative — **Was lese ich ? Den Roman** → **den**. Le **sujet de la relative** (**ich**) se place juste après le pronom et le **verbe est en dernier** ; au **Perfekt**, l’**auxiliaire** est le dernier mot (**gesehen habe**).',
      tables: [{ title: 'Relative pronoun: nominative and accusative', titleFr: 'Pronom relatif : nominatif et accusatif', headers: ['Case', 'm', 'f', 'n', 'plural'], headersFr: ['Cas', 'm', 'f', 'n', 'pluriel'],
        rows: [['Nominative', 'der', 'die', 'das', 'die'], ['Accusative', 'den', 'die', 'das', 'die']],
        rowsFr: [['Nominatif', 'der', 'die', 'das', 'die'], ['Accusatif', 'den', 'die', 'das', 'die']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Roman,', role: 'accusative' }, { text: 'den', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'lese,', role: 'verb' }, { text: 'ist', role: 'verb' }, { text: 'spannend.', role: 'other' }], en: 'The novel that I’m reading is exciting.', fr: 'Le roman que je lis est passionnant.' },
        { parts: [{ text: 'Der Film,', role: 'accusative' }, { text: 'den', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'gesehen habe,', role: 'verb' }, { text: 'war', role: 'verb' }, { text: 'gut.', role: 'other' }], en: 'The film that I watched was good.', fr: 'Le film que j’ai vu était bien.' },
      ],
      contrast: {
        a: { label: 'Pronoun = subject', labelFr: 'Pronom = sujet', note: 'der · die · das', noteFr: 'der · die · das', examples: [g('Der Mann, der dort steht, ist Arzt.', 'The man who stands there is a doctor.', 'L’homme qui se tient là est médecin.'), g('Das Thema, das interessant ist, …', 'The topic that is interesting …', 'Le sujet qui est intéressant …')] },
        b: { label: 'Pronoun = object', labelFr: 'Pronom = objet', note: 'den · die · das', noteFr: 'den · die · das', examples: [g('Der Mann, den ich kenne, ist Arzt.', 'The man I know is a doctor.', 'L’homme que je connais est médecin.'), g('Das Thema, das mich interessiert, …', 'The topic that interests me …', 'Le sujet qui m’intéresse …')] },
      },
      examples: [
        g('Der Roman, den ich lese, ist spannend.', 'The novel that I’m reading is exciting.', 'Le roman que je lis est passionnant.'),
        g('Der Film, den ich gesehen habe, war gut.', 'The film that I watched was good.', 'Le film que j’ai vu était bien.'),
        g('Die Stadt, die ich besucht habe, war schön.', 'The city that I visited was beautiful.', 'La ville que j’ai visitée était belle.'),
        g('Das Buch, das ich kaufe, ist teuer.', 'The book that I’m buying is expensive.', 'Le livre que j’achète est cher.'),
        g('Das ist das Thema, das mich interessiert.', 'That is the topic that interests me.', 'C’est le sujet qui m’intéresse.'),
        g('Die Frau, die ich kenne, wohnt hier.', 'The woman I know lives here.', 'La femme que je connais habite ici.'),
      ],
      mistakes: [
        { wrong: 'Der Roman, der ich lese, ist spannend.', right: 'Der Roman, den ich lese, ist spannend.', why: 'The novel is the object: masculine accusative den.', whyFr: 'Le roman est l’objet : accusatif masculin den.' },
        { wrong: 'Der Film, den ich habe gesehen, war gut.', right: 'Der Film, den ich gesehen habe, war gut.', why: 'The auxiliary goes to the very end.', whyFr: 'L’auxiliaire va tout à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l3-e3', prompt: 'Der Roman, ___ ich lese, ist spannend. (m, accusative)', answer: 'den', hint: 'masculine object → den', hintFr: 'objet masculin → den' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l3-e7', prompt: 'Which relative pronoun is accusative masculine?', promptFr: 'Quel pronom relatif est masculin accusatif ?', options: ['der', 'den', 'das'], answer: 1, explain: 'Masculine accusative → den.', explainFr: 'Masculin accusatif → den.', hint: 'It’s the object form of "der".', hintFr: 'C’est la forme objet de « der ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l3-e8', prompt: 'Das Buch, ___ ich kaufe, ist teuer. (n, accusative)', answer: 'das', hint: 'neuter stays "das"', hintFr: 'le neutre reste « das »' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l3-e9', tokens: ['gesehen', 'den', 'ich', 'habe', 'Der Film'], answer: ['Der Film', 'den', 'ich', 'gesehen', 'habe'], hint: 'Accusative "den"; the verb (habe) goes last.', hintFr: 'Accusatif « den » ; le verbe (habe) en dernier.' } },

    // ───────────── 3 · was ─────────────
    { kind: 'chapter', title: 'alles, was … — „was“ als Relativpronomen', titleFr: 'alles, was … — « was » comme pronom relatif', blurb: 'alles, nichts, etwas, das + was.', blurbFr: 'alles, nichts, etwas, das + was.' },

    { kind: 'situation', title: 'Alles, was ich weiß', titleFr: 'Tout ce que je sais',
      setting: 'Lara and her friend talk about advice and surprises.', settingFr: 'Lara et son amie parlent de conseils et de surprises.',
      lines: [
        line('Freundin', 'Das ist alles, was ich weiß. Hast du etwas, was du mir empfehlen kannst?', 'That is all that I know. Do you have something you can recommend to me?', 'C’est tout ce que je sais. As-tu quelque chose à me recommander ?'),
        line('Lara', 'Es gibt nichts, was besser ist als dieses Café. Ich empfehle dir das Restaurant, das am Park liegt.', 'There is nothing that is better than this café. I recommend the restaurant that is by the park.', 'Il n’y a rien de mieux que ce café. Je te recommande le restaurant qui se trouve près du parc.'),
        line('Freundin', 'Das Beste, was ich je gegessen habe, war dort. Das ist das Schönste, was ich kenne.', 'The best thing I have ever eaten was there. That is the most beautiful thing I know.', 'Le meilleur que j’aie jamais mangé était là. C’est la plus belle chose que je connaisse.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l3-was', title: 'was as a relative pronoun', titleFr: 'was comme pronom relatif',
      lead: 'After alles, nichts, etwas, vieles, das Beste and a whole sentence: was, not das.',
      leadFr: 'Après alles, nichts, etwas, vieles, das Beste et une phrase entière : was, pas das.',
      explanationMd: 'After **alles, nichts, etwas, vieles, das Beste, das Schönste** (superlatives as nouns) and after a **whole sentence**, the relative pronoun is **was** (not **das**): **Das ist alles, was ich weiß. Es gibt nichts, was besser ist. Das Beste, was ich je gegessen habe, …** **was** stays **the same in every case**. The **verb goes to the end** as in every relative clause. Compare with a **specific noun**: **Das Restaurant, das am Park liegt, …** (das) vs **Das ist das Schönste, was ich kenne.** (was).',
      explanationMdFr: 'Après **alles, nichts, etwas, vieles, das Beste, das Schönste** (superlatifs substantivés) et après une **phrase entière**, le pronom relatif est **was** (pas **das**) : **Das ist alles, was ich weiß. Es gibt nichts, was besser ist. Das Beste, was ich je gegessen habe, …** **was** reste **identique à tous les cas**. Le **verbe va à la fin** comme dans toute relative. Compare avec un **nom précis** : **Das Restaurant, das am Park liegt, …** (das) vs **Das ist das Schönste, was ich kenne.** (was).',
      tables: [{ title: 'was or das?', titleFr: 'was ou das ?', headers: ['After', 'Pronoun', 'Example'], headersFr: ['Après', 'Pronom', 'Exemple'],
        rows: [['alles / nichts / etwas / vieles', 'was', 'Das ist alles, was ich weiß.'], ['das Beste / das Schönste', 'was', 'Das ist das Schönste, was ich kenne.'], ['a whole sentence', 'was', 'Er hat gewonnen, was mich freut.'], ['a specific noun (n)', 'das', 'Das Restaurant, das am Park liegt, …']],
        rowsFr: [['alles / nichts / etwas / vieles', 'was', 'Das ist alles, was ich weiß.'], ['das Beste / das Schönste', 'was', 'Das ist das Schönste, was ich kenne.'], ['une phrase entière', 'was', 'Er hat gewonnen, was mich freut.'], ['un nom précis (n)', 'das', 'Das Restaurant, das am Park liegt, …']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das ist', role: 'other' }, { text: 'alles,', role: 'accusative' }, { text: 'was', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'weiß.', role: 'verb' }], en: 'That is all I know.', fr: 'C’est tout ce que je sais.' },
        { parts: [{ text: 'Es gibt', role: 'verb' }, { text: 'nichts,', role: 'accusative' }, { text: 'was', role: 'connector' }, { text: 'besser', role: 'other' }, { text: 'ist.', role: 'verb' }], en: 'There is nothing that is better.', fr: 'Il n’y a rien de mieux.' },
      ],
      contrast: {
        a: { label: 'das = a specific neuter noun', labelFr: 'das = un nom neutre précis', note: 'das Buch, das …', noteFr: 'das Buch, das …', examples: [g('Das Buch, das ich kaufe, ist teuer.', 'The book that I’m buying is expensive.', 'Le livre que j’achète est cher.'), g('Das Restaurant, das am Park liegt, ist gut.', 'The restaurant that is by the park is good.', 'Le restaurant qui se trouve près du parc est bon.')] },
        b: { label: 'was = all, nothing, the best …', labelFr: 'was = tout, rien, le meilleur …', note: 'alles, was …', noteFr: 'alles, was …', examples: [g('Das ist alles, was ich weiß.', 'That is all I know.', 'C’est tout ce que je sais.'), g('Das Beste, was ich je gegessen habe, war dort.', 'The best thing I have ever eaten was there.', 'Le meilleur que j’aie jamais mangé était là.')] },
      },
      examples: [
        g('Das ist alles, was ich weiß.', 'That is all I know.', 'C’est tout ce que je sais.'),
        g('Es gibt nichts, was besser ist als dieses Café.', 'There is nothing that is better than this café.', 'Il n’y a rien de mieux que ce café.'),
        g('Hast du etwas, was du mir empfehlen kannst?', 'Do you have something you can recommend to me?', 'As-tu quelque chose à me recommander ?'),
        g('Das Beste, was ich je gegessen habe, war dort.', 'The best thing I have ever eaten was there.', 'Le meilleur que j’aie jamais mangé était là.'),
        g('Das ist das Schönste, was ich kenne.', 'That is the most beautiful thing I know.', 'C’est la plus belle chose que je connaisse.'),
        g('Ich empfehle dir das Restaurant, das am Park liegt.', 'I recommend the restaurant that is by the park.', 'Je te recommande le restaurant qui se trouve près du parc.'),
      ],
      mistakes: [
        { wrong: 'Das ist alles, das ich weiß.', right: 'Das ist alles, was ich weiß.', why: 'After alles the pronoun is was.', whyFr: 'Après alles, le pronom est was.' },
        { wrong: 'Das Buch, was ich kaufe, ist teuer.', right: 'Das Buch, das ich kaufe, ist teuer.', why: 'After a specific noun use das (what — was — is for alles, nichts …).', whyFr: 'Après un nom précis, utilise das (was est pour alles, nichts …).' },
      ] } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l3-e10', prompt: 'Listen. What is being recommended?', promptFr: 'Écoute. Que recommande-t-on ?', audio: { ttsText: 'Ich empfehle dir das Restaurant, das am Park liegt.' }, options: ['The restaurant by the park', 'The café in the city', 'The hotel'], optionsFr: ['Le restaurant près du parc', 'Le café en ville', 'L’hôtel'], answer: 0, hint: 'Listen after "das Restaurant, das …".', hintFr: 'Écoute après « das Restaurant, das … ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l3-e6', prompt: 'Listen. Who is the woman?', promptFr: 'Écoute. Qui est la femme ?', audio: { ttsText: 'Das ist die Frau, die neben uns wohnt.' }, options: ['The woman who lives next to us', 'The woman who works here', 'The woman from Berlin'], optionsFr: ['La femme qui habite à côté de nous', 'La femme qui travaille ici', 'La femme de Berlin'], answer: 0, hint: 'Listen after "die Frau, die …".', hintFr: 'Écoute après « die Frau, die … ».' } },

    { kind: 'pronunciation', focus: 'A tiny pause (the comma) sets off the relative clause; the pronoun der/die/das is unstressed', focusFr: 'Une petite pause (la virgule) détache la relative ; le pronom der/die/das est non accentué', items: [{ id: 'b1l3-mensch-pron', german: 'Mensch', english: 'person', french: 'personne', gender: null, syllables: ['MENSCH'], pronunciation: 'MENSH', example: { de: 'Ein Mensch, der hilft.', en: 'A person who helps.', fr: 'Une personne qui aide.' } }, { id: 'b1l3-roman-pron', german: 'Roman', english: 'novel', french: 'roman', gender: null, syllables: ['ro', 'MAN'], pronunciation: 'ro-MAHN', example: { de: 'Der Roman, den ich mag.', en: 'The novel that I like.', fr: 'Le roman que j’aime.' } }] },

    { kind: 'wrapup',
      summary: 'You can now describe people, places and things with **relative clauses**: **der / die / das** as subject, **den** as masculine object, and **was** after **alles, nichts, etwas**. 🎉',
      summaryFr: 'Tu sais maintenant décrire personnes, lieux et choses avec des **propositions relatives** : **der / die / das** sujet, **den** objet masculin, et **was** après **alles, nichts, etwas**. 🎉',
      card: { title: 'Relative clauses on one page', titleFr: 'Les relatives en une page', sections: [
        { heading: 'Pronouns', headingFr: 'Pronoms', rows: [g('Nom: der · die · das · die', 'subject', 'sujet'), g('Akk: den · die · das · die', 'only m changes', 'seul le m change')] },
        { heading: 'Position', headingFr: 'Position', rows: [g('right after the noun, commas on both sides', 'verb at the end', 'verbe à la fin')] },
        { heading: 'was', headingFr: 'was', rows: [g('alles · nichts · etwas · das Beste + was', 'not das', 'pas das')] },
      ] } },
  ],
};
