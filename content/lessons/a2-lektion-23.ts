import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion23: Lesson = {
  id: 'a2-l23', level: 'A2', module: 4, number: 16,
  title: { de: 'Welch-? Dies-? Der da!', en: 'Which? This one! That one!', fr: 'Lequel ? Celui-ci ! Celui-là !' },
  theme: 'Asking "which?" with welch-, pointing with dies- and der/die/das', themeFr: 'Demander « lequel ? » avec welch-, montrer avec dies- et der/die/das',
  goals: ['Ask "Welcher / Welchen / Welches / Welche …?"', 'Point at things with dieser / diese / dieses', 'Answer with a demonstrative pronoun: Den da! Die hier!', 'Choose and describe things in a shop or at the lost-property desk'], goalsFr: ['Demander « Welcher / Welchen / Welches / Welche … ? »', 'Montrer des objets avec dieser / diese / dieses', 'Répondre avec un pronom démonstratif : Den da ! Die hier !', 'Choisir et décrire des objets dans un magasin ou au bureau des objets trouvés'],
  canDo: g('Ich kann fragen „Welcher …?“, mit „dieser“ auf etwas zeigen und mit „Den da!“ antworten — im Geschäft und im Fundbüro.', 'I can ask “Which …?”, point with “dieser” and answer “That one there!” — in a shop and at the lost-property office.', 'Je sais demander « Lequel … ? », montrer avec « dieser » et répondre « Celui-là ! » — dans un magasin et au bureau des objets trouvés.'),
  steps: [
    { kind: 'intro', title: 'Welcher? Dieser! Den da! 👓', titleFr: 'Lequel ? Celui-ci ! Celui-là ! 👓',
      scene: 'Lara shops for a dress and a scarf, then loses her glasses — and has to describe exactly which ones.', sceneFr: 'Lara cherche une robe et une écharpe, puis perd ses lunettes — et doit décrire exactement lesquelles.',
      goals: ['Ask “Welcher / Welchen / Welches / Welche …?”', 'Point at things with dieser / diese / dieses', 'Answer with a demonstrative pronoun: Den da! Die hier!'],
      goalsFr: ['Demander « Welcher / Welchen / Welches / Welche …? »', 'Montrer des choses avec dieser / diese / dieses', 'Répondre avec un pronom démonstratif : Den da ! Die hier !'] },

    // ───────────── 1 · Which one? ─────────────
    { kind: 'chapter', title: 'Welcher? Welche? Welches?', titleFr: 'Lequel ? Laquelle ?', blurb: 'Choose in a shop.', blurbFr: 'Choisir dans un magasin.' },

    { kind: 'situation', title: 'In der Boutique', titleFr: 'À la boutique',
      setting: 'Lara asks the shop assistant to show her things.', settingFr: 'Lara demande à la vendeuse de lui montrer des articles.',
      lines: [
        line('Verkäuferin', 'Guten Tag! Ich zeige Ihnen drei Hosen und ein Kleid. Welches Kleid gefällt Ihnen?', 'Good day! I’ll show you three pairs of trousers and a dress. Which dress do you like?', 'Bonjour ! Je vous montre trois pantalons et une robe. Quelle robe vous plaît ?'),
        line('Lara', 'Dieses Kleid ist mir zu teuer. Welchen Schal haben Sie? Ich brauche einen warmen Schal.', 'This dress is too expensive for me. Which scarf do you have? I need a warm scarf.', 'Cette robe est trop chère pour moi. Quelle écharpe avez-vous ? J’ai besoin d’une écharpe chaude.'),
        line('Verkäuferin', 'Dieser Schal ist warm und weich. Hier ist auch eine Mütze für den Winter.', 'This scarf is warm and soft. Here is also a cap for winter.', 'Cette écharpe est chaude et douce. Voici aussi un bonnet pour l’hiver.'),
        line('Lara', 'Such dir eine Farbe aus, hat meine Mutter gesagt. Darf ich die Jacke anprobieren?', '“Choose a colour,” my mother said. May I try on the jacket?', '« Choisis une couleur », a dit ma mère. Puis-je essayer la veste ?'),
        line('Verkäuferin', 'Natürlich. Mit welchem Gürtel möchten Sie sie tragen?', 'Of course. Which belt would you like to wear with it?', 'Bien sûr. Avec quelle ceinture voulez-vous la porter ?'),
      ],
      words: [{ id: 'a2l23-welcher', german: 'welcher / welche / welches', english: 'which', french: 'quel / quelle / quels', gender: null, syllables: ['WEL', 'cher'], pronunciation: 'VELL-kher', example: { de: 'Welcher Schal gefällt dir?', en: 'Which scarf do you like?', fr: 'Quelle écharpe te plaît ?' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l23-e13', prompt: 'What does Lara need?', promptFr: 'De quoi Lara a-t-elle besoin ?', options: ['A warm scarf', 'A new dress', 'An umbrella'], optionsFr: ['D’une écharpe chaude', 'D’une nouvelle robe', 'D’un parapluie'], answer: 0, explain: 'She says: “Ich brauche einen warmen Schal.”', explainFr: 'Elle dit : « Ich brauche einen warmen Schal. »', hint: 'Look at Lara’s second line.', hintFr: 'Regarde la deuxième réplique de Lara.' } },

    { kind: 'wordgroup', title: 'Kleidung und Zubehör', titleFr: 'Vêtements et accessoires',
      items: [{ id: 'a2l23-kleid', german: 'das Kleid', english: 'the dress', french: 'la robe', gender: 'das', syllables: ['KLEID'], pronunciation: 'dahs klite', example: { de: 'Welches Kleid gefällt dir?', en: 'Which dress do you like?', fr: 'Quelle robe te plaît ?' } }, { id: 'a2l23-schal', german: 'der Schal', english: 'the scarf', french: 'l’écharpe', gender: 'der', syllables: ['SCHAL'], pronunciation: 'dair shahl', example: { de: 'Dieser Schal ist warm und weich.', en: 'This scarf is warm and soft.', fr: 'Cette écharpe est chaude et douce.' } }, { id: 'a2l23-muetze', german: 'die Mütze', english: 'the cap / hat', french: 'le bonnet / la casquette', gender: 'die', syllables: ['MÜT', 'ze'], pronunciation: 'dee MUET-seh', example: { de: 'Im Winter trage ich eine Mütze.', en: 'In winter I wear a hat.', fr: 'En hiver, je porte un bonnet.' } }, { id: 'a2l23-regenschirm', german: 'der Regenschirm', english: 'the umbrella', french: 'le parapluie', gender: 'der', syllables: ['RE', 'gen', 'schirm'], pronunciation: 'dair RAY-gen-sheerm', example: { de: 'Ich brauche einen Regenschirm.', en: 'I need an umbrella.', fr: 'J’ai besoin d’un parapluie.' } }, { id: 'a2l23-brille', german: 'die Brille', english: 'the glasses', french: 'les lunettes', gender: 'die', syllables: ['BRIL', 'le'], pronunciation: 'dee BRILL-eh', example: { de: 'Meine Brille liegt auf dem Tisch.', en: 'My glasses are on the table.', fr: 'Mes lunettes sont sur la table.' } }, { id: 'a2l23-schluessel', german: 'der Schlüssel', english: 'the key', french: 'la clé', gender: 'der', syllables: ['SCHLÜS', 'sel'], pronunciation: 'dair SHLUESS-el', example: { de: 'Wo ist mein Schlüssel?', en: 'Where is my key?', fr: 'Où est ma clé ?' } }, { id: 'a2l23-ausweis', german: 'der Ausweis', english: 'the ID card', french: 'la carte d’identité / la pièce d’identité', gender: 'der', syllables: ['AUS', 'weis'], pronunciation: 'dair OWSS-vise', example: { de: 'Haben Sie Ihren Ausweis dabei?', en: 'Do you have your ID with you?', fr: 'Avez-vous votre pièce d’identité sur vous ?' } }] },

    { kind: 'wordgroup', title: 'Im Geschäft', titleFr: 'Dans le magasin',
      items: [{ id: 'a2l23-verkaeuferin', german: 'die Verkäuferin', english: 'the shop assistant (f)', french: 'la vendeuse', gender: 'die', syllables: ['Ver', 'KÄU', 'fe', 'rin'], pronunciation: 'dee fair-KOY-feh-rin', example: { de: 'Die Verkäuferin zeigt mir drei Hosen.', en: 'The shop assistant shows me three pairs of trousers.', fr: 'La vendeuse me montre trois pantalons.' } }, { id: 'a2l23-aussuchen', german: 'aussuchen', english: 'to choose / pick out', french: 'choisir', gender: null, syllables: ['AUS', 'su', 'chen'], pronunciation: 'OWSS-zoo-khen', example: { de: 'Such dir eine Farbe aus!', en: 'Pick a colour!', fr: 'Choisis une couleur !' } }, { id: 'a2l23-anprobieren', german: 'anprobieren', english: 'to try on', french: 'essayer (un vêtement)', gender: null, syllables: ['AN', 'pro', 'bie', 'ren'], pronunciation: 'AHN-pro-bee-ren', example: { de: 'Darf ich die Jacke anprobieren?', en: 'May I try on the jacket?', fr: 'Puis-je essayer la veste ?' } }, { id: 'a2l23-meinen', german: 'meinen', english: 'to mean / to be talking about', french: 'vouloir dire / parler de', gender: null, syllables: ['MEI', 'nen'], pronunciation: 'MY-nen', example: { de: 'Welche Tasche meinst du?', en: 'Which bag do you mean?', fr: 'De quel sac parles-tu ?' } }, { id: 'a2l23-genau', german: 'genau', english: 'exactly', french: 'exactement', gender: null, syllables: ['ge', 'NAU'], pronunciation: 'ge-NOW', example: { de: 'Ja genau, den meine ich!', en: 'Yes exactly, that’s the one I mean!', fr: 'Oui, exactement, c’est celui-là que je veux dire !' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'a2l23-e4', pairs: [{ de: 'die Brille', en: 'the glasses', fr: 'les lunettes' }, { de: 'der Schlüssel', en: 'the key', fr: 'la clé' }, { de: 'der Ausweis', en: 'the ID card', fr: 'la pièce d’identité' }, { de: 'die Mütze', en: 'the cap', fr: 'le bonnet' }], hint: 'Match each object to its meaning.', hintFr: 'Associe chaque objet à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l23-e10', word: 'Kleid', answer: 'das', hint: 'Learn it with its article: das Kleid.', hintFr: 'À apprendre avec son article : das Kleid.' } },

    { kind: 'grammar', note: {
      id: 'a2l23-welch', title: 'Asking “which?” with welch-', titleFr: 'Demander « lequel ? » avec welch-',
      lead: 'welch- takes the same endings as der / die / das. The case follows the noun’s job in the sentence.',
      leadFr: 'welch- prend les mêmes terminaisons que der / die / das. Le cas suit le rôle du nom dans la phrase.',
      explanationMd: '**welch-** (“which”) stands **before a noun** and takes the **same endings as der / die / das**: **welcher** Schal (m), **welche** Jacke (f), **welches** Kleid (n), **welche** Schuhe (plural). The **case** depends on the **job of the noun**: in **Welches Kleid gefällt dir?** the dress is the **subject** (nominative; **dir** is the dative person). In **Welchen Schal nimmst du?** the scarf is the **object** (accusative). After a preposition: **mit welchem Bus**.',
      explanationMdFr: '**welch-** (« quel ») se place **devant un nom** et prend les **mêmes terminaisons que der / die / das** : **welcher** Schal (m), **welche** Jacke (f), **welches** Kleid (n), **welche** Schuhe (pluriel). Le **cas** dépend du **rôle du nom** : dans **Welches Kleid gefällt dir ?**, la robe est le **sujet** (nominatif ; **dir** est la personne au datif). Dans **Welchen Schal nimmst du ?**, l’écharpe est l’**objet** (accusatif). Après une préposition : **mit welchem Bus**.',
      tables: [{ title: 'welch-', titleFr: 'welch-', headers: ['Case', 'm', 'f', 'n', 'plural'], headersFr: ['Cas', 'm', 'f', 'n', 'pluriel'],
        rows: [['Nominative', 'welcher Schal', 'welche Jacke', 'welches Kleid', 'welche Schuhe'], ['Accusative', 'welchen Schal', 'welche Jacke', 'welches Kleid', 'welche Schuhe'], ['Dative', 'welchem Schal', 'welcher Jacke', 'welchem Kleid', 'welchen Schuhen']],
        rowsFr: [['Nominatif', 'welcher Schal', 'welche Jacke', 'welches Kleid', 'welche Schuhe'], ['Accusatif', 'welchen Schal', 'welche Jacke', 'welches Kleid', 'welche Schuhe'], ['Datif', 'welchem Schal', 'welcher Jacke', 'welchem Kleid', 'welchen Schuhen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Welches Kleid', role: 'subject' }, { text: 'gefällt', role: 'verb' }, { text: 'dir?', role: 'dative' }], en: 'Which dress do you like?', fr: 'Quelle robe te plaît ?' },
        { parts: [{ text: 'Welchen Schal', role: 'accusative' }, { text: 'nimmst', role: 'verb' }, { text: 'du?', role: 'subject' }], en: 'Which scarf are you taking?', fr: 'Quelle écharpe prends-tu ?' },
      ],
      contrast: {
        a: { label: 'welch- = subject', labelFr: 'welch- = sujet', note: 'nominative', noteFr: 'nominatif', examples: [g('Welches Kleid gefällt dir?', 'Which dress do you like?', 'Quelle robe te plaît ?'), g('Welcher Schal ist warm?', 'Which scarf is warm?', 'Quelle écharpe est chaude ?')] },
        b: { label: 'welch- = object', labelFr: 'welch- = objet', note: 'accusative', noteFr: 'accusatif', examples: [g('Welchen Schal nimmst du?', 'Which scarf are you taking?', 'Quelle écharpe prends-tu ?'), g('Mit welchem Bus fährst du nach Hause?', 'Which bus do you take home?', 'Quel bus prends-tu pour rentrer ?')] },
      },
      examples: [
        g('Welches Kleid gefällt dir?', 'Which dress do you like?', 'Quelle robe te plaît ?'),
        g('Welchen Schal nimmst du?', 'Which scarf are you taking?', 'Quelle écharpe prends-tu ?'),
        g('Mit welchem Bus fährst du nach Hause?', 'Which bus do you take home?', 'Quel bus prends-tu pour rentrer ?'),
        g('Welche Jacke meinst du?', 'Which jacket do you mean?', 'Quelle veste veux-tu dire ?'),
        g('Welche Schuhe passen zu der Hose?', 'Which shoes go with the trousers?', 'Quelles chaussures vont avec le pantalon ?'),
        g('Welchen Kindern hilfst du?', 'Which children are you helping?', 'Quels enfants aides-tu ?'),
      ],
      mistakes: [
        { wrong: 'Welcher Schal nimmst du?', right: 'Welchen Schal nimmst du?', why: 'The scarf is the object: accusative -en.', whyFr: 'L’écharpe est l’objet : accusatif -en.' },
        { wrong: 'Mit welchen Bus fährst du?', right: 'Mit welchem Bus fährst du?', why: 'mit takes the dative: welchem.', whyFr: 'mit prend le datif : welchem.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l23-e1', prompt: '___ Kleid gefällt dir? (welch-, das Kleid, nominative)', promptFr: '___ Kleid gefällt dir ? (welch-, das Kleid, nominatif)', answer: 'Welches', hint: 'Neuter nominative: welches', hintFr: 'Neutre au nominatif : welches' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l23-e3', prompt: '___ Schal meinst du? (the scarf is the object)', promptFr: '___ Schal meinst du ? (l’écharpe est le complément d’objet)', options: ['Welcher', 'Welchen', 'Welches'], answer: 1, explain: 'Masculine accusative: welcher → welchen.', explainFr: 'Masculin à l’accusatif : welcher → welchen.', hint: 'Der Schal is masculine; it is the object of "meinen".', hintFr: 'Der Schal est masculin ; c’est le complément de « meinen ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l23-e8', prompt: 'Mit ___ Bus fährst du zur Arbeit? (welch-, der Bus, dative)', promptFr: 'Mit ___ Bus fährst du zur Arbeit? (welch-, datif) — « Avec quel bus vas-tu au travail ? »', answer: 'welchem', hint: 'mit + dative: welcher → welchem', hintFr: 'mit + datif : welcher → welchem' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l23-e7', tokens: ['Kleid', 'gefällt', 'Welches', 'dir'], answer: ['Welches', 'Kleid', 'gefällt', 'dir'], hint: 'Question word + noun first, then the verb, then "dir".', hintFr: 'Mot interrogatif + nom d’abord, puis le verbe, puis « dir ».' } },

    // ───────────── 2 · dieser ─────────────
    { kind: 'chapter', title: 'dieser, diese, dieses', titleFr: 'dieser, diese, dieses', blurb: 'This scarf, this dress.', blurbFr: 'Cette écharpe, cette robe.' },

    { kind: 'situation', title: 'Dieses oder das da?', titleFr: 'Celui-ci ou celui-là ?',
      setting: 'Lara compares what the assistant shows her.', settingFr: 'Lara compare ce que la vendeuse lui montre.',
      lines: [
        line('Lara', 'Diesen Schal nehme ich. Dieses Kleid ist schön, aber die Hose da gefällt mir besser.', 'I’ll take this scarf. This dress is nice, but I like the trousers over there better.', 'Je prends cette écharpe. Cette robe est jolie, mais le pantalon là-bas me plaît mieux.'),
        line('Verkäuferin', 'In diesem Geschäft ist alles billiger. Der Schal hier kostet nur zehn Euro.', 'In this shop everything is cheaper. The scarf here costs only ten euros.', 'Dans ce magasin, tout est moins cher. L’écharpe ici ne coûte que dix euros.'),
        line('Lara', 'Und die Mütze da? Ich mag diese Mütze.', 'And the cap there? I like this cap.', 'Et le bonnet là-bas ? J’aime ce bonnet.'),
      ],
      words: [{ id: 'a2l23-dieser', german: 'dieser / diese / dieses', english: 'this / these', french: 'ce / cette / ces', gender: null, syllables: ['DIE', 'ser'], pronunciation: 'DEE-zer', example: { de: 'Dieses Kleid ist mir zu teuer.', en: 'This dress is too expensive for me.', fr: 'Cette robe est trop chère pour moi.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l23-dies', title: 'Pointing with dies-', titleFr: 'Montrer avec dies-',
      lead: 'dies- declines exactly like welch-. “der Schal hier” = this scarf here; “der Schal da” = that scarf there.',
      leadFr: 'dies- se décline exactement comme welch-. « der Schal hier » = cette écharpe ici ; « der Schal da » = cette écharpe-là.',
      explanationMd: '**dies-** (“this / these”) is declined **exactly like welch-**: **dieser** Schal · **diesen** Schal · mit **diesem** Schal; **diese** Jacke · mit **dieser** Jacke; **dieses** Kleid · mit **diesem** Kleid; **diese** Schuhe · mit **diesen** Schuhen. So the answer to “Welchen Schal?” can be “**Diesen** Schal.” In everyday speech people also say **der Schal hier** (this scarf here) or **der Schal da** (that scarf there).',
      explanationMdFr: '**dies-** (« ce / cette / ces ») se décline **exactement comme welch-** : **dieser** Schal · **diesen** Schal · mit **diesem** Schal ; **diese** Jacke · mit **dieser** Jacke ; **dieses** Kleid · mit **diesem** Kleid ; **diese** Schuhe · mit **diesen** Schuhen. La réponse à « Welchen Schal ? » peut donc être « **Diesen** Schal. » Dans la langue courante, on dit aussi **der Schal hier** (cette écharpe-ci) ou **der Schal da** (cette écharpe-là).',
      tables: [{ title: 'dies-', titleFr: 'dies-', headers: ['Case', 'm', 'f', 'n', 'plural'], headersFr: ['Cas', 'm', 'f', 'n', 'pluriel'],
        rows: [['Nominative', 'dieser Schal', 'diese Jacke', 'dieses Kleid', 'diese Schuhe'], ['Accusative', 'diesen Schal', 'diese Jacke', 'dieses Kleid', 'diese Schuhe'], ['Dative', 'diesem Schal', 'dieser Jacke', 'diesem Kleid', 'diesen Schuhen']],
        rowsFr: [['Nominatif', 'dieser Schal', 'diese Jacke', 'dieses Kleid', 'diese Schuhe'], ['Accusatif', 'diesen Schal', 'diese Jacke', 'dieses Kleid', 'diese Schuhe'], ['Datif', 'diesem Schal', 'dieser Jacke', 'diesem Kleid', 'diesen Schuhen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Diesen Schal', role: 'accusative' }, { text: 'nehme', role: 'verb' }, { text: 'ich.', role: 'subject' }], en: 'I’ll take this scarf.', fr: 'Je prends cette écharpe.' },
        { parts: [{ text: 'In diesem Geschäft', role: 'dative' }, { text: 'ist', role: 'verb' }, { text: 'alles', role: 'subject' }, { text: 'billiger.', role: 'other' }], en: 'In this shop everything is cheaper.', fr: 'Dans ce magasin, tout est moins cher.' },
      ],
      contrast: {
        a: { label: 'hier = near', labelFr: 'hier = près', note: 'der Schal hier', noteFr: 'der Schal hier', examples: [g('Der Schal hier kostet zehn Euro.', 'The scarf here costs ten euros.', 'L’écharpe ici coûte dix euros.'), g('Diese Mütze hier ist warm.', 'This cap here is warm.', 'Ce bonnet-ci est chaud.')] },
        b: { label: 'da = far', labelFr: 'da = loin', note: 'die Hose da', noteFr: 'die Hose da', examples: [g('Die Hose da gefällt mir besser.', 'I like the trousers over there better.', 'Le pantalon là-bas me plaît mieux.'), g('Die Mütze da ist schön.', 'The cap over there is nice.', 'Le bonnet là-bas est joli.')] },
      },
      examples: [
        g('Diesen Schal nehme ich.', 'I’ll take this scarf.', 'Je prends cette écharpe.'),
        g('Dieses Kleid ist schön, aber die Hose da gefällt mir besser.', 'This dress is nice, but I like the trousers over there better.', 'Cette robe est jolie, mais le pantalon là-bas me plaît mieux.'),
        g('In diesem Geschäft ist alles billiger.', 'In this shop everything is cheaper.', 'Dans ce magasin, tout est moins cher.'),
        g('Dieser Schal ist warm und weich.', 'This scarf is warm and soft.', 'Cette écharpe est chaude et douce.'),
        g('Diese Schuhe passen gut.', 'These shoes fit well.', 'Ces chaussures vont bien.'),
        g('Ich nehme diese Jacke.', 'I’ll take this jacket.', 'Je prends cette veste.'),
      ],
      mistakes: [
        { wrong: 'Dieser Schal nehme ich.', right: 'Diesen Schal nehme ich.', why: 'The scarf is the object: accusative diesen.', whyFr: 'L’écharpe est l’objet : accusatif diesen.' },
        { wrong: 'In diesen Geschäft ist alles billig.', right: 'In diesem Geschäft ist alles billig.', why: 'in + dative: diesem.', whyFr: 'in + datif : diesem.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l23-e2', prompt: 'Ich nehme ___ Schal. (dieser, der Schal, accusative)', promptFr: 'Ich nehme ___ Schal. (dieser, accusatif) — « Je prends cette écharpe. »', answer: 'diesen', hint: 'Masculine accusative: dieser → diesen', hintFr: 'Masculin à l’accusatif : dieser → diesen' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l23-e9', prompt: 'Listen. Which glasses does she take?', promptFr: 'Écoute. Quelles lunettes prend-elle ?', audio: { ttsText: 'Ich nehme diese Brille, nicht die da.' }, options: ['The pair close to her', 'The pair over there', 'Both pairs'], optionsFr: ['Celles qui sont près d’elle', 'Celles qui sont là-bas', 'Les deux paires'], answer: 0, hint: '"diese" = this one; "die da" = that one there.', hintFr: '« diese » = celle-ci ; « die da » = celle-là.' } },

    // ───────────── 3 · Der da! ─────────────
    { kind: 'chapter', title: 'Den da! Die hier!', titleFr: 'Celui-là ! Celle-ci !', blurb: 'Demonstrative pronouns.', blurbFr: 'Pronoms démonstratifs.' },

    { kind: 'situation', title: 'Im Fundbüro', titleFr: 'Au bureau des objets trouvés',
      setting: 'Lara lost something on the train. The clerk shows her items.', settingFr: 'Lara a perdu quelque chose dans le train. L’employé lui montre des objets.',
      lines: [
        line('Angestellter', 'Ist das Ihre Brille? Haben Sie Ihren Ausweis dabei?', 'Is that your pair of glasses? Do you have your ID card with you?', 'Ce sont vos lunettes ? Avez-vous votre carte d’identité sur vous ?'),
        line('Lara', 'Welche Brille meinen Sie? Die hier? — Nein, die da. Meine Brille liegt auf dem Tisch.', 'Which glasses do you mean? These here? — No, those there. My glasses are on the table.', 'Quelles lunettes voulez-vous dire ? Celles-ci ? — Non, celles-là. Mes lunettes sont sur la table.'),
        line('Angestellter', 'Welchen Schlüssel suchen Sie? Den da?', 'Which key are you looking for? That one?', 'Quelle clé cherchez-vous ? Celle-là ?'),
        line('Lara', 'Ja genau, den meine ich! Und welchen Regenschirm? Den da!', 'Yes exactly, that’s the one I mean! And which umbrella? That one there!', 'Oui exactement, c’est celle-là ! Et quel parapluie ? Celui-là !'),
        line('Angestellter', 'Welchen Kindern gehört der Ball? — Denen da.', 'Which children does the ball belong to? — Those over there.', 'À quels enfants appartient le ballon ? — À ceux-là.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l23-e14', prompt: 'Where are Lara’s glasses?', promptFr: 'Où sont les lunettes de Lara ?', options: ['On the table', 'On the train', 'In her bag'], optionsFr: ['Sur la table', 'Dans le train', 'Dans son sac'], answer: 0, explain: 'She says: “Meine Brille liegt auf dem Tisch.”', explainFr: 'Elle dit : « Meine Brille liegt auf dem Tisch. »', hint: 'Look for “Tisch”.', hintFr: 'Cherche « Tisch ».' } },

    { kind: 'grammar', note: {
      id: 'a2l23-der-da', title: 'Demonstrative pronouns: Den da!', titleFr: 'Pronoms démonstratifs : Den da !',
      lead: 'When the noun is clear, don’t repeat it: use der / die / das as a stressed pronoun — often with da or hier.',
      leadFr: 'Quand le nom est clair, ne le répète pas : utilise der / die / das comme pronom accentué — souvent avec da ou hier.',
      explanationMd: 'When the noun is clear, don’t repeat it: use **der / die / das** as a **pronoun** — spoken with **stress**, often with **da** (there) or **hier** (here). Forms: **Nominative**: **der · die · das · die**. **Accusative**: **den · die · das · die**. **Dative**: **dem · der · dem · denen** — only the **dative plural** differs from the article: **denen**. The pronoun often stands in **first position**: **Die finde ich toll.** (the verb stays second).',
      explanationMdFr: 'Quand le nom est clair, ne le répète pas : utilise **der / die / das** comme **pronom** — prononcé avec **accent**, souvent avec **da** (là) ou **hier** (ici). Formes : **Nominatif** : **der · die · das · die**. **Accusatif** : **den · die · das · die**. **Datif** : **dem · der · dem · denen** — seul le **datif pluriel** diffère de l’article : **denen**. Le pronom est souvent en **première position** : **Die finde ich toll.** (le verbe reste en deuxième).',
      tables: [{ title: 'der / die / das as pronouns', titleFr: 'der / die / das comme pronoms', headers: ['Case', 'm', 'f', 'n', 'plural'], headersFr: ['Cas', 'm', 'f', 'n', 'pluriel'],
        rows: [['Nominative', 'der', 'die', 'das', 'die'], ['Accusative', 'den', 'die', 'das', 'die'], ['Dative', 'dem', 'der', 'dem', 'denen']],
        rowsFr: [['Nominatif', 'der', 'die', 'das', 'die'], ['Accusatif', 'den', 'die', 'das', 'die'], ['Datif', 'dem', 'der', 'dem', 'denen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Welchen Schal meinst du?', role: 'other' }, { text: '— Den', role: 'accusative' }, { text: 'da!', role: 'place' }], en: 'Which scarf do you mean? — That one there!', fr: 'Quelle écharpe veux-tu dire ? — Celle-là !' },
        { parts: [{ text: 'Die', role: 'accusative' }, { text: 'finde', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'toll.', role: 'other' }], en: 'That one I find great.', fr: 'Celle-là, je la trouve super.' },
      ],
      contrast: {
        a: { label: 'Article + noun', labelFr: 'Article + nom', note: 'the noun is named', noteFr: 'le nom est nommé', examples: [g('Ich brauche den Regenschirm.', 'I need the umbrella.', 'J’ai besoin du parapluie.'), g('Ich mag die Mütze.', 'I like the cap.', 'J’aime le bonnet.')] },
        b: { label: 'Pronoun', labelFr: 'Pronom', note: 'the noun is dropped', noteFr: 'le nom est omis', examples: [g('Welchen Regenschirm brauchst du? — Den da!', 'Which umbrella do you need? — That one there!', 'Quel parapluie te faut-il ? — Celui-là !'), g('Welche Mütze? Die hier? — Nein, die da.', 'Which cap? This one here? — No, the one there.', 'Quel bonnet ? Celui-ci ? — Non, celui-là.')] },
      },
      examples: [
        g('Welchen Regenschirm brauchst du? — Den da!', 'Which umbrella do you need? — That one there!', 'Quel parapluie te faut-il ? — Celui-là !'),
        g('Welche Mütze? Die hier? — Nein, die da.', 'Which cap? This one here? — No, the one there.', 'Quel bonnet ? Celui-ci ? — Non, celui-là.'),
        g('Welchen Kindern hilfst du? — Denen da.', 'Which children are you helping? — Those over there.', 'Quels enfants aides-tu ? — Ceux-là.'),
        g('Welchen Schal meinst du? — Den da! — Ja genau, den meine ich!', 'Which scarf do you mean? — That one! — Yes exactly, that’s the one!', 'Quelle écharpe veux-tu dire ? — Celle-là ! — Oui exactement, c’est celle-là !'),
        g('Die finde ich toll.', 'That one I find great.', 'Celle-là, je la trouve super.'),
        g('Welche Hose? — Die da!', 'Which trousers? — Those over there!', 'Quel pantalon ? — Celui-là !'),
      ],
      mistakes: [
        { wrong: 'Welchen Kindern hilfst du? — Die da.', right: 'Welchen Kindern hilfst du? — Denen da.', why: 'Dative plural: denen.', whyFr: 'Datif pluriel : denen.' },
        { wrong: 'Welchen Schal meinst du? — Der da!', right: 'Welchen Schal meinst du? — Den da!', why: 'It is the object: accusative den.', whyFr: 'C’est l’objet : accusatif den.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l23-e6', prompt: 'Welchen Regenschirm brauchst du? — ___ da.', promptFr: 'De quel parapluie as-tu besoin ? — ___ da.', options: ['Der', 'Den', 'Dem'], answer: 1, explain: 'Masculine accusative as a pronoun: den.', explainFr: 'Masculin à l’accusatif comme pronom : den.', hint: 'The same case as "Welchen".', hintFr: 'Le même cas que « Welchen ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l23-e11', prompt: 'Welchen Kindern hilfst du? — ___ da.', promptFr: 'Quels enfants aides-tu ? — ___ da.', options: ['Die', 'Denen', 'Den'], answer: 1, explain: 'helfen takes the dative; the dative plural pronoun is "denen".', explainFr: 'helfen se construit avec le datif ; le pronom au datif pluriel est « denen ».', hint: 'Dative plural: only this form is special.', hintFr: 'Datif pluriel : c’est la seule forme particulière.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l23-e12', prompt: 'Welche Hose? — ___ da! (die Hose, accusative pronoun)', promptFr: 'Quel pantalon ? — ___ da ! (die Hose, pronom à l’accusatif)', answer: 'Die', hint: 'Feminine accusative = nominative: die', hintFr: 'Féminin : accusatif = nominatif : die' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l23-e5', prompt: 'Listen. Which jacket does she mean?', promptFr: 'Écoute. De quelle veste parle-t-elle ?', audio: { ttsText: 'Welche Jacke meinst du? Die blaue? Nein, die schwarze da.' }, options: ['The blue one', 'The black one', 'The red one'], optionsFr: ['La bleue', 'La noire', 'La rouge'], answer: 1, hint: 'Listen to the answer after "Nein".', hintFr: 'Écoute la réponse après « Nein ».' } },

    { kind: 'pronunciation', focus: 'Stress and the ch in welch- (soft "kh"), and ü in Mütze / Schlüssel', focusFr: 'L’accent et le ch de welch- (« kh » doux), et le ü de Mütze / Schlüssel', items: [{ id: 'a2l23-welchen-pron', german: 'welchen', english: 'which (masc., accusative)', french: 'quel (masc., accusatif)', gender: null, syllables: ['WEL', 'chen'], pronunciation: 'VELL-khen', example: { de: 'Welchen Schal nimmst du?', en: 'Which scarf are you taking?', fr: 'Quelle écharpe prends-tu ?' } }, { id: 'a2l23-diesen-pron', german: 'diesen', english: 'this (masc., accusative)', french: 'ce (masc., accusatif)', gender: null, syllables: ['DIE', 'sen'], pronunciation: 'DEE-zen', example: { de: 'Diesen nehme ich.', en: 'I’ll take this one.', fr: 'Je prends celui-ci.' } }, { id: 'a2l23-muetze-pron', german: 'die Mütze', english: 'the cap', french: 'le bonnet', gender: 'die', syllables: ['MÜT', 'ze'], pronunciation: 'dee MUET-seh', example: { de: 'Die Mütze da ist schön.', en: 'That cap there is nice.', fr: 'Ce bonnet-là est joli.' } }, { id: 'a2l23-schluessel-pron', german: 'der Schlüssel', english: 'the key', french: 'la clé', gender: 'der', syllables: ['SCHLÜS', 'sel'], pronunciation: 'dair SHLUESS-el', example: { de: 'Den Schlüssel meine ich.', en: 'That’s the key I mean.', fr: 'C’est cette clé que je veux dire.' } }] },

    { kind: 'wrapup',
      summary: 'You can now ask **Welcher …?**, point with **dieser**, and answer with **Den da! Die hier! Denen da!** — in a shop and at the lost-property office. 🎉',
      summaryFr: 'Tu sais maintenant demander **Welcher …?**, montrer avec **dieser**, et répondre **Den da ! Die hier ! Denen da !** — dans un magasin et au bureau des objets trouvés. 🎉',
      card: { title: 'Which one? on one page', titleFr: 'Lequel ? en une page', sections: [
        { heading: 'welch- and dies-', headingFr: 'welch- et dies-', rows: [g('welcher · welchen · welches · welche', 'm nom · m acc · n · f/plural', 'm nom · m acc · n · f/pluriel'), g('dieser · diesen · dieses · diese', 'same endings', 'mêmes terminaisons')] },
        { heading: 'Pronouns', headingFr: 'Pronoms', rows: [g('der · den · die · das', 'nominative · accusative', 'nominatif · accusatif'), g('denen', 'dative plural only', 'seulement datif pluriel')] },
        { heading: 'Pointing', headingFr: 'Montrer', rows: [g('hier = near · da = far', 'der Schal hier · die Hose da', 'der Schal hier · die Hose da')] },
      ] } },
  ],
};
