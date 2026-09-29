import type { Lesson } from '../types';

export const b1lektion3: Lesson = {
  id: 'b1-l3', level: 'B1', module: 1, number: 3,
  title: { de: 'Relativsätze', en: 'Relative clauses', fr: 'Les propositions relatives' },
  theme: 'Adding information with relative clauses (der/die/das)',
  themeFr: 'Ajouter des informations avec les propositions relatives (der/die/das)',
  goals: ['Use relative pronouns der/die/das', 'Match the pronoun to the noun (gender/number)', 'Choose nominative or accusative relative pronouns', 'Put the verb at the end of the relative clause'],
  goalsFr: ['Utiliser les pronoms relatifs der/die/das', 'Accorder le pronom au nom (genre/nombre)', 'Choisir le pronom relatif au nominatif ou à l’accusatif', 'Mettre le verbe à la fin de la relative'],
  steps: [
    { kind: 'intro', title: 'Der Mann, der …', titleFr: 'L’homme qui …',
      scene: 'Describing people and things with extra detail.', sceneFr: 'On décrit des personnes et des choses avec plus de détails.',
      goals: ['Use der/die/das as relative pronouns', 'Match gender and number', 'Use nominative and accusative forms', 'Send the verb to the end'],
      goalsFr: ['Utiliser der/die/das comme pronoms relatifs', 'Accorder le genre et le nombre', 'Utiliser le nominatif et l’accusatif', 'Envoyer le verbe à la fin'] },

    { kind: 'vocab', item: { id: 'b1l3-mensch', german: 'der Mensch', english: 'the person / human', french: 'la personne / l’humain', gender: 'der', syllables: ['MENSCH'], pronunciation: 'dair MENSH', example: { de: 'Ein Mensch, der viel liest.', en: 'A person who reads a lot.', fr: 'Une personne qui lit beaucoup.' } } },
    { kind: 'vocab', item: { id: 'b1l3-ding', german: 'das Ding', english: 'the thing', french: 'la chose', gender: 'das', syllables: ['DING'], pronunciation: 'dahs DING', example: { de: 'Das Ding, das ich brauche.', en: 'The thing (that) I need.', fr: 'La chose dont j’ai besoin.' } } },
    { kind: 'vocab', item: { id: 'b1l3-kennen', german: 'kennen', english: 'to know (a person/place)', french: 'connaître', gender: null, syllables: ['KEN', 'nen'], pronunciation: 'KEN-nen', example: { de: 'Ich kenne die Frau, die dort wohnt.', en: 'I know the woman who lives there.', fr: 'Je connais la femme qui habite là.' } } },
    { kind: 'vocab', item: { id: 'b1l3-empfehlen', german: 'empfehlen', english: 'to recommend', french: 'recommander', gender: null, syllables: ['emp', 'FEH', 'len'], pronunciation: 'emp-FAY-len', example: { de: 'Ich empfehle dir ein Buch, das gut ist.', en: 'I recommend a book that is good.', fr: 'Je te recommande un livre qui est bien.' } } },
    { kind: 'vocab', item: { id: 'b1l3-ort', german: 'der Ort', english: 'the place', french: 'le lieu / l’endroit', gender: 'der', syllables: ['ORT'], pronunciation: 'dair ORT', example: { de: 'Ein Ort, der ruhig ist.', en: 'A place that is quiet.', fr: 'Un endroit qui est calme.' } } },
    { kind: 'vocab', item: { id: 'b1l3-nachbar', german: 'der Nachbar', english: 'the neighbour', french: 'le voisin', gender: 'der', syllables: ['NACH', 'bar'], pronunciation: 'dair NAHKH-bar', example: { de: 'Der Nachbar, der laut ist.', en: 'The neighbour who is loud.', fr: 'Le voisin qui est bruyant.' } } },
    { kind: 'vocab', item: { id: 'b1l3-kollegin', german: 'die Kollegin', english: 'the colleague (f)', french: 'la collègue', gender: 'die', syllables: ['ko', 'lle', 'GIN'], pronunciation: 'ko-le-GHEEN', example: { de: 'Die Kollegin, die Französisch spricht.', en: 'The colleague who speaks French.', fr: 'La collègue qui parle français.' } } },
    { kind: 'vocab', item: { id: 'b1l3-roman', german: 'der Roman', english: 'the novel', french: 'le roman', gender: 'der', syllables: ['ro', 'MAN'], pronunciation: 'dair ro-MAHN', example: { de: 'Der Roman, den ich lese, ist spannend.', en: 'The novel (that) I’m reading is exciting.', fr: 'Le roman que je lis est captivant.' } } },
    { kind: 'vocab', item: { id: 'b1l3-gefallen', german: 'gefallen', english: 'to please / to like', french: 'plaire', gender: null, syllables: ['ge', 'FAL', 'len'], pronunciation: 'ge-FAHL-len', example: { de: 'Der Film, der mir gefällt.', en: 'The film that I like.', fr: 'Le film qui me plaît.' } } },
    { kind: 'vocab', item: { id: 'b1l3-thema', german: 'das Thema', english: 'the topic', french: 'le sujet / thème', gender: 'das', syllables: ['THE', 'ma'], pronunciation: 'dahs TAY-mah', example: { de: 'Ein Thema, das interessant ist.', en: 'A topic that is interesting.', fr: 'Un sujet qui est intéressant.' } } },

    { kind: 'grammar', note: {
      id: 'b1l3-relativ-nom', title: 'Relative pronouns (nominative)', titleFr: 'Les pronoms relatifs (nominatif)',
      explanationMd: 'A relative clause adds info about a noun. The relative pronoun (**der/die/das**) matches the noun’s **gender/number**; here it is the **subject** (nominative). The verb goes to the **end**, and commas surround the clause:\n\n- Der Mann, **der** dort **steht**, … (m)\n- Die Frau, **die** Deutsch **spricht**, … (f)\n- Das Kind, **das** **spielt**, … (n)',
      explanationMdFr: 'Une relative ajoute une info sur un nom. Le pronom relatif (**der/die/das**) s’accorde en **genre/nombre** ; ici il est **sujet** (nominatif). Le verbe va à la **fin**, et des virgules entourent la relative :\n\n- Der Mann, **der** dort **steht**, … (m)\n- Die Frau, **die** Deutsch **spricht**, … (f)\n- Das Kind, **das** **spielt**, … (n)',
      examples: [
        { de: 'Ich kenne einen Mann, der Arzt ist.', en: 'I know a man who is a doctor.', fr: 'Je connais un homme qui est médecin.' },
        { de: 'Das ist die Kollegin, die aus Wien kommt.', en: 'That is the colleague who is from Vienna.', fr: 'C’est la collègue qui vient de Vienne.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l3-relativ-akk', title: 'Relative pronouns (accusative)', titleFr: 'Les pronoms relatifs (accusatif)',
      explanationMd: 'When the pronoun is the **object** of the relative clause, use the **accusative**: masculine becomes **den**; die/das stay the same:\n\n- Der Roman, **den** ich **lese**, … (m acc)\n- Die Frau, **die** ich **kenne**, … (f)\n- Das Buch, **das** ich **kaufe**, … (n)',
      explanationMdFr: 'Quand le pronom est le **complément d’objet** de la relative, utilise l’**accusatif** : le masculin devient **den** ; die/das ne changent pas :\n\n- Der Roman, **den** ich **lese**, … (m acc)\n- Die Frau, **die** ich **kenne**, … (f)\n- Das Buch, **das** ich **kaufe**, … (n)',
      examples: [
        { de: 'Der Film, den ich gesehen habe, war gut.', en: 'The film (that) I watched was good.', fr: 'Le film que j’ai vu était bon.' },
        { de: 'Das ist das Thema, das mich interessiert.', en: 'That is the topic that interests me.', fr: 'C’est le sujet qui m’intéresse.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l3-position', title: 'Position and commas', titleFr: 'Position et virgules',
      explanationMd: 'The relative clause usually comes **right after** the noun it describes, and is always set off by **commas**. The conjugated verb sits at the **very end**:\n\n- Der Mann, **der** neben mir **wohnt**, ist nett.\n- Kennst du das Café, **das** am Park **liegt**?',
      explanationMdFr: 'La relative vient généralement **juste après** le nom qu’elle décrit, et est toujours entourée de **virgules**. Le verbe conjugué est tout à la **fin** :\n\n- Der Mann, **der** neben mir **wohnt**, ist nett.\n- Kennst du das Café, **das** am Park **liegt** ?',
      examples: [
        { de: 'Die Stadt, die ich besucht habe, war schön.', en: 'The city (that) I visited was beautiful.', fr: 'La ville que j’ai visitée était belle.' },
        { de: 'Das ist ein Ort, der mir gefällt.', en: 'That is a place that I like.', fr: 'C’est un endroit qui me plaît.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l3-e1', prompt: 'Der Mann, ___ dort steht, ist mein Nachbar. (m, nominative)', answer: 'der', hint: 'masculine subject → der', hintFr: 'sujet masculin → der' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l3-e2', prompt: 'Die Frau, ___ Deutsch spricht, ist Lehrerin. (f, nominative)', answer: 'die', hint: 'feminine subject → die', hintFr: 'sujet féminin → die' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l3-e3', prompt: 'Der Roman, ___ ich lese, ist spannend. (m, accusative)', answer: 'den', hint: 'masculine object → den', hintFr: 'objet masculin → den' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l3-e4', prompt: 'Choose: "Das Kind, ___ spielt, ist glücklich."', promptFr: 'Choisis : « Das Kind, ___ spielt, ist glücklich. »', options: ['der', 'die', 'das'], answer: 2, explain: '"Kind" is neuter → das (subject).', explainFr: '« Kind » est neutre → das (sujet).', hint: 'Kind is neuter.', hintFr: 'Kind est neutre.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l3-e5', tokens: ['wohnt', 'der', 'hier', 'Der Mann'], answer: ['Der Mann', 'der', 'hier', 'wohnt'], hint: 'Relative pronoun after the noun, verb at the end.', hintFr: 'Pronom relatif après le nom, verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l3-e6', prompt: 'Listen. Who is the woman?', promptFr: 'Écoute. Qui est la femme ?', audio: { ttsText: 'Das ist die Frau, die neben uns wohnt.' }, options: ['The woman who lives next to us', 'The woman who works here', 'The woman from Berlin'], optionsFr: ['La femme qui habite à côté de nous', 'La femme qui travaille ici', 'La femme de Berlin'], answer: 0, hint: 'Listen after "die Frau, die …".', hintFr: 'Écoute après « die Frau, die … ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l3-e7', prompt: 'Which relative pronoun is accusative masculine?', promptFr: 'Quel pronom relatif est masculin accusatif ?', options: ['der', 'den', 'das'], answer: 1, explain: 'Masculine accusative → den.', explainFr: 'Masculin accusatif → den.', hint: 'It’s the object form of "der".', hintFr: 'C’est la forme objet de « der ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l3-e8', prompt: 'Das Buch, ___ ich kaufe, ist teuer. (n, accusative)', answer: 'das', hint: 'neuter stays "das"', hintFr: 'le neutre reste « das »' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l3-e9', tokens: ['gesehen', 'den', 'ich', 'habe', 'Der Film'], answer: ['Der Film', 'den', 'ich', 'gesehen', 'habe'], hint: 'Accusative "den"; the verb (habe) goes last.', hintFr: 'Accusatif « den » ; le verbe (habe) en dernier.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l3-e10', prompt: 'Listen. What is being recommended?', promptFr: 'Écoute. Que recommande-t-on ?', audio: { ttsText: 'Ich empfehle dir das Restaurant, das am Park liegt.' }, options: ['The restaurant by the park', 'The café in the city', 'The hotel'], optionsFr: ['Le restaurant près du parc', 'Le café en ville', 'L’hôtel'], answer: 0, hint: 'Listen after "das Restaurant, das …".', hintFr: 'Écoute après « das Restaurant, das … ».' } },

    { kind: 'pronunciation', focus: 'A tiny pause (the comma) sets off the relative clause; the pronoun der/die/das is unstressed', focusFr: 'Une petite pause (la virgule) détache la relative ; le pronom der/die/das est non accentué', items: [
      { id: 'b1l3-mensch-pron', german: 'Mensch', english: 'person', french: 'personne', gender: null, syllables: ['MENSCH'], pronunciation: 'MENSH', example: { de: 'Ein Mensch, der hilft.', en: 'A person who helps.', fr: 'Une personne qui aide.' } },
      { id: 'b1l3-roman-pron', german: 'Roman', english: 'novel', french: 'roman', gender: null, syllables: ['ro', 'MAN'], pronunciation: 'ro-MAHN', example: { de: 'Der Roman, den ich mag.', en: 'The novel that I like.', fr: 'Le roman que j’aime.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now add detail with **relative clauses**. The pronoun **der/die/das** matches the noun’s gender/number; use the **accusative** (masculine → **den**) when it’s the object; the verb goes to the **end**, inside commas. 🎉',
      summaryFr: 'Tu sais maintenant ajouter des détails avec les **propositions relatives**. Le pronom **der/die/das** s’accorde en genre/nombre ; utilise l’**accusatif** (masculin → **den**) quand c’est l’objet ; le verbe va à la **fin**, entre virgules. 🎉' },
  ],
};
