import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion5: Lesson = {
  id: 'a2-l5', level: 'A2', module: 3, number: 10,
  title: { de: 'Der Dativ', en: 'The dative case', fr: 'Le datif' },
  theme: 'The dative: indirect objects, dative verbs, and dative pronouns', themeFr: 'Le datif : compléments d’objet indirect, verbes au datif et pronoms au datif',
  goals: ['Use the dative for the indirect object', 'Use the dative articles (dem/der/dem/den)', 'Use dative verbs like helfen and gehören', 'Use dative pronouns (mir, dir, ihm …)'], goalsFr: ['Utiliser le datif pour le complément d’objet indirect', 'Utiliser les articles au datif (dem/der/dem/den)', 'Utiliser les verbes au datif comme helfen et gehören', 'Utiliser les pronoms au datif (mir, dir, ihm …)'],
  canDo: g('Ich kann sagen, wem ich etwas gebe, schenke oder zeige, und die Verben helfen, danken und gehören richtig benutzen.', 'I can say who I give, gift or show something to, and use the verbs helfen, danken and gehören correctly.', 'Je sais dire à qui je donne, offre ou montre quelque chose, et utiliser correctement les verbes helfen, danken et gehören.'),
  steps: [
    { kind: 'intro', title: 'Der Dativ 🎁', titleFr: 'Le datif 🎁',
      scene: 'Lara prepares a birthday party. She gives, shows and thanks — and everything goes to someone.', sceneFr: 'Lara prépare une fête d’anniversaire. Elle donne, montre et remercie — et tout va à quelqu’un.',
      goals: ['Use the dative for the indirect object (the receiver)', 'Use the dative articles dem / der / dem / den', 'Use the dative verbs and pronouns: helfen, danken, gehören, mir, dir, ihm'],
      goalsFr: ['Utiliser le datif pour le complément d’objet indirect (le destinataire)', 'Utiliser les articles du datif dem / der / dem / den', 'Utiliser les verbes et pronoms du datif : helfen, danken, gehören, mir, dir, ihm'] },

    // ───────────── 1 · Receivers ─────────────
    { kind: 'chapter', title: 'Wem gibst du etwas?', titleFr: 'À qui donnes-tu quelque chose ?', blurb: 'The receiver is dative.', blurbFr: 'Le destinataire est au datif.' },

    { kind: 'situation', title: 'Geschenke für alle', titleFr: 'Des cadeaux pour tous',
      setting: 'Lara wraps presents with Tim.', settingFr: 'Lara emballe des cadeaux avec Tim.',
      lines: [
        line('Tim', 'Für wen ist das Geschenk?', 'Who is the gift for?', 'Pour qui est le cadeau ?'),
        line('Lara', 'Ich schenke meiner Mutter Blumen. Und ich gebe dem Kind einen Apfel.', 'I’m giving my mother flowers. And I’m giving the child an apple.', 'J’offre des fleurs à ma mère. Et je donne une pomme à l’enfant.'),
        line('Tim', 'Und dem Mann dort?', 'And the man over there?', 'Et à l’homme là-bas ?'),
        line('Lara', 'Dem Mann gebe ich das Buch. Ich zeige dir auch die Karte der Stadt.', 'I’m giving the man the book. I’ll also show you the map of the city.', 'Je donne le livre à l’homme. Je te montre aussi le plan de la ville.'),
        line('Tim', 'Danke! Ich helfe dir beim Einpacken.', 'Thanks! I’ll help you wrap.', 'Merci ! Je t’aide à emballer.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l5-e11', prompt: 'What does Lara give the child?', promptFr: 'Que donne Lara à l’enfant ?', options: ['An apple', 'A book', 'Flowers'], optionsFr: ['Une pomme', 'Un livre', 'Des fleurs'], answer: 0, explain: 'She says: “Ich gebe dem Kind einen Apfel.”', explainFr: 'Elle dit : « Ich gebe dem Kind einen Apfel. »', hint: 'Look for “dem Kind”.', hintFr: 'Cherche « dem Kind ».' } },

    { kind: 'wordgroup', title: 'Geben und zeigen', titleFr: 'Donner et montrer',
      items: [{ id: 'a2l5-geben', german: 'geben', english: 'to give', french: 'donner', gender: null, syllables: ['GE', 'ben'], pronunciation: 'GAY-ben', example: { de: 'Ich gebe dem Kind das Buch.', en: 'I give the child the book.', fr: 'Je donne le livre à l’enfant.' } }, { id: 'a2l5-schenken', german: 'schenken', english: 'to give (as a gift)', french: 'offrir', gender: null, syllables: ['SCHEN', 'ken'], pronunciation: 'SHENK-en', example: { de: 'Ich schenke meiner Mutter Blumen.', en: 'I give my mother flowers.', fr: 'J’offre des fleurs à ma mère.' } }, { id: 'a2l5-zeigen', german: 'zeigen', english: 'to show', french: 'montrer', gender: null, syllables: ['ZEI', 'gen'], pronunciation: 'TSY-gen', example: { de: 'Ich zeige dir die Stadt.', en: 'I show you the city.', fr: 'Je te montre la ville.' } }, { id: 'a2l5-kind', german: 'das Kind', english: 'the child', french: 'l’enfant', gender: 'das', syllables: ['KIND'], pronunciation: 'dahs KINT', example: { de: 'Ich gebe dem Kind einen Apfel.', en: 'I give the child an apple.', fr: 'Je donne une pomme à l’enfant.' } }, { id: 'a2l5-geschenk', german: 'das Geschenk', english: 'the gift', french: 'le cadeau', gender: 'das', syllables: ['ge', 'SCHENK'], pronunciation: 'dahs ge-SHENK', example: { de: 'Das Geschenk ist für dich.', en: 'The gift is for you.', fr: 'Le cadeau est pour toi.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l5-dativ-artikel', title: 'The dative articles', titleFr: 'Les articles du datif',
      lead: 'The receiver takes the dative: der → dem, die → der, das → dem, plural → den (+ -n).',
      leadFr: 'Le destinataire prend le datif : der → dem, die → der, das → dem, pluriel → den (+ -n).',
      explanationMd: 'The **indirect object** (the **receiver**) takes the **dative**. The articles change: **der → dem**, **die → der**, **das → dem**, plural **die → den** (and the noun adds **-n**). The question is **Wem?** (to whom?). Many verbs have **two objects**: the receiver (**dative**, a person) and the thing (**accusative**): **Ich gebe dem Kind einen Apfel.** The dative person normally comes **before** the thing.',
      explanationMdFr: 'Le **complément d’objet indirect** (le **destinataire**) prend le **datif**. Les articles changent : **der → dem**, **die → der**, **das → dem**, pluriel **die → den** (et le nom prend **-n**). La question est **Wem ?** (à qui ?). Beaucoup de verbes ont **deux compléments** : le destinataire (**datif**, une personne) et la chose (**accusatif**) : **Ich gebe dem Kind einen Apfel.** La personne au datif vient normalement **avant** la chose.',
      tables: [{ title: 'Articles by case', titleFr: 'Articles par cas', headers: ['Case', 'm', 'f', 'n', 'plural'], headersFr: ['Cas', 'm', 'f', 'n', 'pluriel'],
        rows: [['Nominative', 'der Mann', 'die Frau', 'das Kind', 'die Kinder'], ['Accusative', 'den Mann', 'die Frau', 'das Kind', 'die Kinder'], ['Dative', 'dem Mann', 'der Frau', 'dem Kind', 'den Kindern']],
        rowsFr: [['Nominatif', 'der Mann', 'die Frau', 'das Kind', 'die Kinder'], ['Accusatif', 'den Mann', 'die Frau', 'das Kind', 'die Kinder'], ['Datif', 'dem Mann', 'der Frau', 'dem Kind', 'den Kindern']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'gebe', role: 'verb' }, { text: 'dem Kind', role: 'dative' }, { text: 'einen Apfel.', role: 'accusative' }], en: 'I give the child an apple.', fr: 'Je donne une pomme à l’enfant.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'schenke', role: 'verb' }, { text: 'der Frau', role: 'dative' }, { text: 'Blumen.', role: 'accusative' }], en: 'I give the woman flowers.', fr: 'J’offre des fleurs à la femme.' },
      ],
      contrast: {
        a: { label: 'Dative = to whom?', labelFr: 'Datif = à qui ?', note: 'the receiver', noteFr: 'le destinataire', examples: [g('Ich gebe dem Kind einen Apfel.', 'I give the child an apple.', 'Je donne une pomme à l’enfant.'), g('Ich schenke meiner Mutter Blumen.', 'I give my mother flowers.', 'J’offre des fleurs à ma mère.')] },
        b: { label: 'Accusative = what?', labelFr: 'Accusatif = quoi ?', note: 'the thing', noteFr: 'la chose', examples: [g('Ich gebe dem Kind einen Apfel.', 'I give the child an apple.', 'Je donne une pomme à l’enfant.'), g('Ich zeige dir die Stadt.', 'I show you the city.', 'Je te montre la ville.')] },
      },
      examples: [
        g('Ich gebe dem Kind einen Apfel.', 'I give the child an apple.', 'Je donne une pomme à l’enfant.'),
        g('Ich schenke der Frau Blumen.', 'I give the woman flowers.', 'J’offre des fleurs à la femme.'),
        g('Ich gebe dem Mann das Buch.', 'I give the man the book.', 'Je donne le livre à l’homme.'),
        g('Ich zeige den Kindern die Stadt.', 'I show the children the city.', 'Je montre la ville aux enfants.'),
        g('Wir schenken unserem Opa ein Buch.', 'We give our grandpa a book.', 'Nous offrons un livre à notre grand-père.'),
        g('Die Lehrerin gibt den Schülern Hausaufgaben.', 'The teacher gives the pupils homework.', 'La professeure donne des devoirs aux élèves.'),
      ],
      mistakes: [
        { wrong: 'Ich gebe den Kind einen Apfel.', right: 'Ich gebe dem Kind einen Apfel.', why: 'das Kind is neuter: dative dem.', whyFr: 'das Kind est neutre : datif dem.' },
        { wrong: 'Ich zeige die Kinder die Stadt.', right: 'Ich zeige den Kindern die Stadt.', why: 'Plural dative: den + -n.', whyFr: 'Datif pluriel : den + -n.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l5-e1', prompt: 'Ich gebe ___ Kind das Buch. (dative: das → ?)', answer: 'dem', hint: 'das → dem in the dative', hintFr: 'das → dem au datif' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l5-e8', prompt: 'Ich schenke ___ Frau Blumen. (dative: die → ?)', answer: 'der', hint: 'die → der in the dative', hintFr: 'die → der au datif' } },

    // ───────────── 2 · Dative verbs ─────────────
    { kind: 'chapter', title: 'Verben mit Dativ', titleFr: 'Verbes avec datif', blurb: 'helfen, danken, gehören, gefallen.', blurbFr: 'helfen, danken, gehören, gefallen.' },

    { kind: 'situation', title: 'Kannst du mir helfen?', titleFr: 'Peux-tu m’aider ?',
      setting: 'Tim asks a stranger and a friend for help.', settingFr: 'Tim demande de l’aide à un inconnu puis à un ami.',
      lines: [
        line('Tim', 'Entschuldigung, kannst du mir bitte helfen?', 'Excuse me, can you please help me?', 'Excusez-moi, pouvez-vous m’aider, s’il vous plaît ?'),
        line('Frau', 'Ja gern. Das Buch gehört Ihnen?', 'Of course. Does the book belong to you?', 'Oui, volontiers. Ce livre est à vous ?'),
        line('Tim', 'Nein, es gehört mir nicht. Es gehört meinem Bruder.', 'No, it does not belong to me. It belongs to my brother.', 'Non, il n’est pas à moi. Il est à mon frère.'),
        line('Frau', 'Das Bild an der Wand gefällt mir sehr.', 'I like the picture on the wall very much.', 'J’aime beaucoup le tableau au mur.'),
        line('Tim', 'Danke! Ich danke Ihnen für die Hilfe.', 'Thanks! I thank you for the help.', 'Merci ! Je vous remercie pour votre aide.'),
      ],
      words: [{ id: 'a2l5-helfen', german: 'helfen', english: 'to help (+ dative)', french: 'aider (+ datif)', gender: null, syllables: ['HEL', 'fen'], pronunciation: 'HELL-fen', example: { de: 'Kannst du mir helfen?', en: 'Can you help me?', fr: 'Peux-tu m’aider ?' } }, { id: 'a2l5-danken', german: 'danken', english: 'to thank (+ dative)', french: 'remercier (+ datif)', gender: null, syllables: ['DAN', 'ken'], pronunciation: 'DAHNK-en', example: { de: 'Ich danke dir.', en: 'I thank you.', fr: 'Je te remercie.' } }, { id: 'a2l5-gehoeren', german: 'gehören', english: 'to belong to (+ dative)', french: 'appartenir à (+ datif)', gender: null, syllables: ['ge', 'HÖ', 'ren'], pronunciation: 'ge-HOE-ren', example: { de: 'Das Buch gehört mir.', en: 'The book belongs to me.', fr: 'Le livre m’appartient.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l5-dativverben', title: 'Dative verbs', titleFr: 'Les verbes avec datif',
      lead: 'Some verbs take only a dative object: helfen, danken, gehören, gefallen.',
      leadFr: 'Certains verbes n’ont qu’un complément au datif : helfen, danken, gehören, gefallen.',
      explanationMd: 'Some verbs **always** take the **dative**, even when they have **only one object**: **helfen** (to help), **danken** (to thank), **gehören** (to belong to), **gefallen** (to like, to please). English often uses a direct object (“help me”) — German uses the **dative**: **Ich helfe dir.** **Das Buch gehört mir.** **Das Bild gefällt mir.** (lit. the picture pleases me). Learn them as pairs: **helfen + Dat.**',
      explanationMdFr: 'Certains verbes prennent **toujours** le **datif**, même avec **un seul complément** : **helfen** (aider), **danken** (remercier), **gehören** (appartenir à), **gefallen** (plaire). Le français emploie souvent un complément direct (« m’aider ») — l’allemand utilise le **datif** : **Ich helfe dir.** **Das Buch gehört mir.** **Das Bild gefällt mir.** (litt. le tableau me plaît). Apprends-les en paires : **helfen + Dat.**',
      tables: [{ title: 'Dative verbs', titleFr: 'Verbes avec datif', headers: ['Verb', 'Meaning', 'Example'], headersFr: ['Verbe', 'Sens', 'Exemple'],
        rows: [['helfen', 'to help', 'Ich helfe dir.'], ['danken', 'to thank', 'Ich danke dir.'], ['gehören', 'to belong to', 'Das Buch gehört mir.'], ['gefallen', 'to please', 'Das Bild gefällt mir.']],
        rowsFr: [['helfen', 'aider', 'Ich helfe dir.'], ['danken', 'remercier', 'Ich danke dir.'], ['gehören', 'appartenir à', 'Das Buch gehört mir.'], ['gefallen', 'plaire', 'Das Bild gefällt mir.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Kannst', role: 'verb' }, { text: 'du', role: 'subject' }, { text: 'mir', role: 'dative' }, { text: 'helfen?', role: 'verb' }], en: 'Can you help me?', fr: 'Peux-tu m’aider ?' },
        { parts: [{ text: 'Das Auto', role: 'subject' }, { text: 'gehört', role: 'verb' }, { text: 'meinem Bruder.', role: 'dative' }], en: 'The car belongs to my brother.', fr: 'La voiture appartient à mon frère.' },
      ],
      contrast: {
        a: { label: 'Dative verb', labelFr: 'Verbe avec datif', note: 'helfen + dative', noteFr: 'helfen + datif', examples: [g('Ich helfe dem Kind.', 'I help the child.', 'J’aide l’enfant.'), g('Das Bild gefällt mir.', 'I like the picture.', 'Le tableau me plaît.')] },
        b: { label: 'Accusative verb', labelFr: 'Verbe avec accusatif', note: 'sehen + accusative', noteFr: 'sehen + accusatif', examples: [g('Ich sehe das Kind.', 'I see the child.', 'Je vois l’enfant.'), g('Ich kenne den Mann.', 'I know the man.', 'Je connais l’homme.')] },
      },
      examples: [
        g('Kannst du mir helfen?', 'Can you help me?', 'Peux-tu m’aider ?'),
        g('Das Auto gehört meinem Bruder.', 'The car belongs to my brother.', 'La voiture appartient à mon frère.'),
        g('Ich danke dir für die Hilfe.', 'I thank you for the help.', 'Je te remercie pour ton aide.'),
        g('Das Bild gefällt mir sehr.', 'I like the picture very much.', 'Le tableau me plaît beaucoup.'),
        g('Wir helfen den Kindern.', 'We help the children.', 'Nous aidons les enfants.'),
        g('Gehört das Buch dir?', 'Does the book belong to you?', 'Ce livre est-il à toi ?'),
      ],
      mistakes: [
        { wrong: 'Ich helfe dich.', right: 'Ich helfe dir.', why: 'helfen takes the dative.', whyFr: 'helfen prend le datif.' },
        { wrong: 'Das Buch gehört mich.', right: 'Das Buch gehört mir.', why: 'gehören takes the dative.', whyFr: 'gehören prend le datif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l5-e7', prompt: 'Which verb always takes the dative?', promptFr: 'Quel verbe prend toujours le datif ?', options: ['kaufen', 'helfen', 'sehen'], answer: 1, explain: '"helfen" is a dative verb: helfen + dative.', explainFr: '« helfen » est un verbe au datif : helfen + datif.', hint: 'One of these means "to help".', hintFr: 'L’un d’eux signifie « aider ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l5-e3', tokens: ['dir', 'Ich', 'helfe'], answer: ['Ich', 'helfe', 'dir'], hint: '"helfen" takes the dative pronoun.', hintFr: '« helfen » prend le pronom au datif.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l5-e10', prompt: 'Listen. What does Tom ask for?', promptFr: 'Écoute. Que demande Tom ?', audio: { ttsText: 'Entschuldigung, kannst du mir bitte helfen?' }, options: ['For help', 'For the time', 'For money'], optionsFr: ['De l’aide', 'L’heure', 'De l’argent'], answer: 0, hint: 'Listen for "helfen".', hintFr: 'Écoute « helfen ».' } },

    // ───────────── 3 · Pronouns ─────────────
    { kind: 'chapter', title: 'Dativpronomen', titleFr: 'Les pronoms au datif', blurb: 'mir, dir, ihm, ihr, uns, euch, ihnen.', blurbFr: 'mir, dir, ihm, ihr, uns, euch, ihnen.' },

    { kind: 'situation', title: 'Wie geht es dir?', titleFr: 'Comment vas-tu ?',
      setting: 'Lara and Tim give and ask, all with pronouns.', settingFr: 'Lara et Tim donnent et demandent, avec des pronoms.',
      lines: [
        line('Lara', 'Gib mir bitte das Salz. Ich gebe dir dafür das Brot.', 'Please pass me the salt. In return I’ll give you the bread.', 'Passe-moi le sel, s’il te plaît. En échange, je te donne le pain.'),
        line('Tim', 'Gern. Ich gebe ihm das Geld, und ich schenke ihr die Blumen.', 'Gladly. I’ll give him the money, and I’ll give her the flowers.', 'Volontiers. Je lui donne l’argent, et je lui offre les fleurs.'),
        line('Lara', 'Wie geht es dir heute?', 'How are you today?', 'Comment vas-tu aujourd’hui ?'),
        line('Tim', 'Mir geht es gut! Und euch?', 'I am well! And you two?', 'Moi, ça va bien ! Et vous ?'),
      ],
      words: [{ id: 'a2l5-mir', german: 'mir', english: '(to) me (dative)', french: '(à) moi (datif)', gender: null, syllables: ['MIR'], pronunciation: 'meer', example: { de: 'Gib mir das Buch.', en: 'Give me the book.', fr: 'Donne-moi le livre.' } }, { id: 'a2l5-dir', german: 'dir', english: '(to) you (dative)', french: '(à) toi (datif)', gender: null, syllables: ['DIR'], pronunciation: 'deer', example: { de: 'Ich helfe dir.', en: 'I help you.', fr: 'Je t’aide.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l5-dativpronomen', title: 'Dative pronouns', titleFr: 'Les pronoms au datif',
      lead: 'ich → mir, du → dir, er → ihm, sie → ihr, es → ihm, wir → uns, ihr → euch, sie → ihnen.',
      leadFr: 'ich → mir, du → dir, er → ihm, sie → ihr, es → ihm, wir → uns, ihr → euch, sie → ihnen.',
      explanationMd: 'The personal pronouns in the **dative**: **ich → mir**, **du → dir**, **er → ihm**, **sie → ihr**, **es → ihm**, **wir → uns**, **ihr → euch**, **sie → ihnen**, **Sie → Ihnen**. With **two pronouns** the **accusative** comes first: **Ich gebe es dir.** With a noun and a pronoun the **pronoun** comes first: **Ich gebe ihm das Buch.** **Wie geht es dir?** literally means “how goes it to you?”.',
      explanationMdFr: 'Les pronoms personnels au **datif** : **ich → mir**, **du → dir**, **er → ihm**, **sie → ihr**, **es → ihm**, **wir → uns**, **ihr → euch**, **sie → ihnen**, **Sie → Ihnen**. Avec **deux pronoms**, l’**accusatif** vient d’abord : **Ich gebe es dir.** Avec un nom et un pronom, le **pronom** vient d’abord : **Ich gebe ihm das Buch.** **Wie geht es dir ?** signifie littéralement « comment cela va-t-il à toi ? ».',
      tables: [{ title: 'Dative pronouns', titleFr: 'Pronoms au datif', headers: ['Nominative', 'Dative', 'Example'], headersFr: ['Nominatif', 'Datif', 'Exemple'],
        rows: [['ich', 'mir', 'Gib mir bitte das Salz.'], ['du', 'dir', 'Ich helfe dir.'], ['er / es', 'ihm', 'Ich gebe ihm das Geld.'], ['sie (she)', 'ihr', 'Ich schenke ihr Blumen.'], ['wir', 'uns', 'Er zeigt uns die Stadt.'], ['ihr', 'euch', 'Wie geht es euch?'], ['sie (they) / Sie', 'ihnen / Ihnen', 'Ich danke Ihnen.']],
        rowsFr: [['ich', 'mir', 'Gib mir bitte das Salz.'], ['du', 'dir', 'Ich helfe dir.'], ['er / es', 'ihm', 'Ich gebe ihm das Geld.'], ['sie (elle)', 'ihr', 'Ich schenke ihr Blumen.'], ['wir', 'uns', 'Er zeigt uns die Stadt.'], ['ihr', 'euch', 'Wie geht es euch ?'], ['sie (ils) / Sie', 'ihnen / Ihnen', 'Ich danke Ihnen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'gebe', role: 'verb' }, { text: 'ihm', role: 'dative' }, { text: 'das Buch.', role: 'accusative' }], en: 'I give him the book.', fr: 'Je lui donne le livre.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'gebe', role: 'verb' }, { text: 'es', role: 'accusative' }, { text: 'dir.', role: 'dative' }], en: 'I give it to you.', fr: 'Je te le donne.' },
      ],
      contrast: {
        a: { label: 'Noun + pronoun', labelFr: 'Nom + pronom', note: 'pronoun first', noteFr: 'le pronom d’abord', examples: [g('Ich gebe ihm das Buch.', 'I give him the book.', 'Je lui donne le livre.'), g('Er zeigt uns die Stadt.', 'He shows us the city.', 'Il nous montre la ville.')] },
        b: { label: 'Two pronouns', labelFr: 'Deux pronoms', note: 'accusative first', noteFr: 'accusatif d’abord', examples: [g('Ich gebe es dir.', 'I give it to you.', 'Je te le donne.'), g('Er zeigt sie uns.', 'He shows it (f.) to us.', 'Il nous la montre.')] },
      },
      examples: [
        g('Ich gebe ihm das Buch.', 'I give him the book.', 'Je lui donne le livre.'),
        g('Ich schenke ihr die Blumen.', 'I give her the flowers.', 'Je lui offre les fleurs.'),
        g('Wie geht es dir?', 'How are you?', 'Comment vas-tu ?'),
        g('Gib mir bitte das Salz.', 'Please give me the salt.', 'Passe-moi le sel, s’il te plaît.'),
        g('Ich danke Ihnen für die Hilfe.', 'I thank you for the help.', 'Je vous remercie pour votre aide.'),
        g('Er zeigt uns die Stadt.', 'He shows us the city.', 'Il nous montre la ville.'),
      ],
      mistakes: [
        { wrong: 'Ich gebe das Buch ihm.', right: 'Ich gebe ihm das Buch.', why: 'A pronoun comes before the noun.', whyFr: 'Le pronom vient avant le nom.' },
        { wrong: 'Wie geht es du?', right: 'Wie geht es dir?', why: 'Dative: dir.', whyFr: 'Datif : dir.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l5-e2', prompt: 'Which pronoun is dative for "ich"?', promptFr: 'Quel pronom est le datif de « ich » ?', options: ['mich', 'mir', 'mein'], answer: 1, explain: 'ich → mir in the dative (mich is accusative).', explainFr: 'ich → mir au datif (mich est l’accusatif).', hint: 'Not "mich" (that is accusative).', hintFr: 'Pas « mich » (c’est l’accusatif).' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l5-e4', pairs: [{ de: 'ich', en: 'mir', fr: 'mir' }, { de: 'du', en: 'dir', fr: 'dir' }, { de: 'er', en: 'ihm', fr: 'ihm' }], hint: 'Match each pronoun to its dative form.', hintFr: 'Associe chaque pronom à sa forme au datif.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l5-e6', prompt: 'Kannst du ___ helfen? (to me)', answer: 'mir', hint: 'dative pronoun for "me"', hintFr: 'pronom au datif pour « moi »' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l5-e9', tokens: ['ihm', 'das', 'gebe', 'Buch', 'Ich'], answer: ['Ich', 'gebe', 'ihm', 'das', 'Buch'], hint: 'Subject, verb, dative (receiver), then accusative (thing).', hintFr: 'Sujet, verbe, datif (celui qui reçoit), puis accusatif (la chose).' } },

    { kind: 'pronunciation', focus: 'Dative endings -m and -r are unstressed and short (dem, der, mir, ihm)', focusFr: 'Les terminaisons du datif -m et -r sont courtes et non accentuées (dem, der, mir, ihm)', items: [{ id: 'a2l5-dem-pron', german: 'dem Kind', english: 'to the child', french: 'à l’enfant', gender: null, syllables: ['dem', 'KIND'], pronunciation: 'dem KINT', example: { de: 'Ich helfe dem Kind.', en: 'I help the child.', fr: 'J’aide l’enfant.' } }, { id: 'a2l5-ihm-pron', german: 'ihm', english: '(to) him', french: '(à) lui', gender: null, syllables: ['IHM'], pronunciation: 'eem', example: { de: 'Ich gebe ihm das Geld.', en: 'I give him the money.', fr: 'Je lui donne l’argent.' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l5-e5', prompt: 'Listen. Who does the book belong to?', promptFr: 'Écoute. À qui appartient le livre ?', audio: { ttsText: 'Das ist nicht dein Buch. Das Buch gehört mir.' }, options: ['To me (the speaker)', 'To you', 'To the child'], optionsFr: ['À moi (le locuteur)', 'À toi', 'À l’enfant'], answer: 0, hint: 'Listen for "gehört mir".', hintFr: 'Écoute « gehört mir ».' } },

    { kind: 'wrapup',
      summary: 'You can now name the **receiver** with the dative (**dem, der, dem, den**), use **helfen, danken, gehören, gefallen**, and the **dative pronouns** mir, dir, ihm, ihr, uns, euch, ihnen. 🎉',
      summaryFr: 'Tu sais maintenant nommer le **destinataire** avec le datif (**dem, der, dem, den**), utiliser **helfen, danken, gehören, gefallen**, et les **pronoms au datif** mir, dir, ihm, ihr, uns, euch, ihnen. 🎉',
      card: { title: 'The dative on one page', titleFr: 'Le datif en une page', sections: [
        { heading: 'Articles', headingFr: 'Articles', rows: [g('dem · der · dem · den (+ -n)', 'm · f · n · plural', 'm · f · n · pluriel')] },
        { heading: 'Dative verbs', headingFr: 'Verbes avec datif', rows: [g('helfen · danken · gehören · gefallen', 'always + dative', 'toujours + datif')] },
        { heading: 'Pronouns', headingFr: 'Pronoms', rows: [g('mir · dir · ihm · ihr · ihm', 'ich · du · er · sie · es', 'ich · du · er · sie · es'), g('uns · euch · ihnen · Ihnen', 'wir · ihr · sie · Sie', 'wir · ihr · sie · Sie')] },
      ] } },
  ],
};
