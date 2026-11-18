import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A2 lesson (Goethe A2 "Medien und Kommunikation"): internet and apps, relative clauses, da- and wo-compounds.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const a2lektion29: Lesson = {
  id: 'a2-l29', level: 'A2', module: 7, number: 29,
  title: { de: 'Medien und Internet', en: 'Media and the internet', fr: 'Médias et internet' },
  theme: 'Apps and the internet, relative clauses with der / die / das, verbs with prepositions and da- / wo- compounds',
  themeFr: 'Applications et internet, propositions relatives avec der / die / das, verbes à préposition et composés en da- / wo-',
  goals: ['Talk about apps, the internet and the phone', 'Build relative clauses with der, die, das', 'Use verbs with prepositions and da- / wo- compounds'],
  goalsFr: ['Parler d’applications, d’internet et du téléphone', 'Construire des propositions relatives avec der, die, das', 'Utiliser des verbes à préposition et les composés en da- / wo-'],
  canDo: g('Ich kann über Internet und Apps sprechen, Dinge mit Relativsätzen beschreiben und Fragen mit „Worauf …?“ stellen.', 'I can talk about the internet and apps, describe things with relative clauses and ask questions with “Worauf …?”.', 'Je sais parler d’internet et d’applications, décrire des choses avec des propositions relatives et poser des questions avec « Worauf …? ».'),
  steps: [
    { kind: 'intro', title: 'Internet und Apps 📱', titleFr: 'Internet et applications 📱',
      scene: 'Lara helps her grandma with a new smartphone and explains which apps are useful.', sceneFr: 'Lara aide sa grand-mère avec un nouveau smartphone et explique quelles applications sont utiles.',
      goals: ['Vocabulary for the internet and apps', 'Relative clauses', 'Worauf warten Sie? — Ich warte darauf.'],
      goalsFr: ['Vocabulaire d’internet et des applications', 'Propositions relatives', 'Worauf warten Sie ? — Ich warte darauf.'] },

    // ───────────── 1 · Vocabulary and relative clauses (nominative) ─────────────
    { kind: 'chapter', title: 'Apps, die man braucht', titleFr: 'Des applications utiles', blurb: 'der / die / das as relative pronouns.', blurbFr: 'der / die / das comme pronoms relatifs.' },

    { kind: 'situation', title: 'Das neue Smartphone', titleFr: 'Le nouveau smartphone',
      setting: 'Lara explains the phone to her grandma.', settingFr: 'Lara explique le téléphone à sa grand-mère.',
      lines: [
        line('Lara', 'Oma, das ist die App, die den Zug anzeigt. Und das ist der Knopf, der das Telefon einschaltet.', 'Grandma, this is the app that shows the train. And this is the button that switches the phone on.', 'Mamie, voici l’application qui indique le train. Et voici le bouton qui allume le téléphone.'),
        line('Oma', 'Und das Ding, das so laut klingelt?', 'And the thing that rings so loudly?', 'Et le truc qui sonne si fort ?'),
        line('Lara', 'Das ist der Wecker. Du brauchst ein Passwort, das niemand kennt, für dein Konto.', 'That is the alarm clock. You need a password that nobody knows for your account.', 'C’est le réveil. Tu as besoin d’un mot de passe que personne ne connaît pour ton compte.'),
        line('Oma', 'Und wie komme ich ins Netz?', 'And how do I get online?', 'Et comment me connecter à internet ?'),
        line('Lara', 'Mit dem WLAN. Du kannst auch Fotos herunterladen, die dir gefallen.', 'With the Wi-Fi. You can also download photos that you like.', 'Avec le Wi-Fi. Tu peux aussi télécharger des photos qui te plaisent.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l29-e1', prompt: 'What does the app show?', promptFr: 'Que montre l’application ?', options: ['The train', 'The weather', 'The news'], optionsFr: ['Le train', 'La météo', 'Les actualités'], answer: 0, explain: 'Lara says: “…die App, die den Zug anzeigt.”', explainFr: 'Lara dit : « …die App, die den Zug anzeigt. »', hint: 'Look for “anzeigt”.', hintFr: 'Cherche « anzeigt ».' } },

    { kind: 'wordgroup', title: 'Smartphone und Netz', titleFr: 'Smartphone et réseau',
      items: [
        word('a2l29-app', 'die App', 'die', 'the app', 'l’application', ['APP'], 'EP', g('Die App ist kostenlos.', 'The app is free.', 'L’application est gratuite.')),
        word('a2l29-konto', 'das Konto', 'das', 'the account', 'le compte', ['KON', 'to'], 'KON-toh', g('Ich habe ein Konto.', 'I have an account.', 'J’ai un compte.')),
        word('a2l29-passwort', 'das Passwort', 'das', 'the password', 'le mot de passe', ['PASS', 'wort'], 'PAS-vort', g('Mein Passwort ist geheim.', 'My password is secret.', 'Mon mot de passe est secret.')),
        word('a2l29-netz', 'das Netz', 'das', 'the network', 'le réseau', ['NETZ'], 'NETS', g('Hier gibt es kein Netz.', 'There is no network here.', 'Il n’y a pas de réseau ici.')),
        word('a2l29-herunterladen', 'herunterladen', null, 'to download', 'télécharger', ['he', 'RUN', 'ter', 'la', 'den'], 'hair-OON-ter-lah-den', g('Ich lade ein Foto herunter.', 'I download a photo.', 'Je télécharge une photo.')),
        word('a2l29-bildschirm', 'der Bildschirm', 'der', 'the screen', 'l’écran', ['BILD', 'schirm'], 'BILT-shirm', g('Der Bildschirm ist zu klein.', 'The screen is too small.', 'L’écran est trop petit.')),
      ] },

    { kind: 'grammar', note: {
      id: 'a2l29-relativsatz-nom', title: 'Relative clauses: der, die, das as the subject', titleFr: 'Propositions relatives : der, die, das sujet',
      lead: 'The relative pronoun has the gender of the noun it refers to. The verb goes to the end of the relative clause.',
      leadFr: 'Le pronom relatif a le genre du nom auquel il se rapporte. Le verbe va à la fin de la relative.',
      explanationMd: 'A **relative clause** describes a noun: **Das ist die App, die den Zug anzeigt.** The **relative pronoun** takes the **gender and number** of the noun it refers to (**die App → die**), and its **case** from its **role in the relative clause**. As the **subject** (nominative): **der** (m), **die** (f), **das** (n), **die** (plural). The **conjugated verb goes to the end** of the relative clause and a **comma** separates it from the main clause: **Das ist der Knopf, der das Telefon einschaltet.**',
      explanationMdFr: 'Une **proposition relative** décrit un nom : **Das ist die App, die den Zug anzeigt.** Le **pronom relatif** prend le **genre et le nombre** du nom auquel il se rapporte (**die App → die**), et son **cas** selon son **rôle dans la relative**. Comme **sujet** (nominatif) : **der** (m), **die** (f), **das** (n), **die** (pluriel). Le **verbe conjugué va à la fin** de la relative et une **virgule** la sépare de la principale : **Das ist der Knopf, der das Telefon einschaltet.**',
      tables: [{ title: 'Relative pronoun as subject', titleFr: 'Pronom relatif sujet', headers: ['Gender', 'Pronoun', 'Example'], headersFr: ['Genre', 'Pronom', 'Exemple'],
        rows: [['m', 'der', 'Das ist der Knopf, der das Telefon einschaltet.'], ['f', 'die', 'Das ist die App, die den Zug anzeigt.'], ['n', 'das', 'Das Ding, das so laut klingelt, ist der Wecker.'], ['plural', 'die', 'Das sind die Fotos, die mir gefallen.']],
        rowsFr: [['m', 'der', 'Das ist der Knopf, der das Telefon einschaltet.'], ['f', 'die', 'Das ist die App, die den Zug anzeigt.'], ['n', 'das', 'Das Ding, das so laut klingelt, ist der Wecker.'], ['pluriel', 'die', 'Das sind die Fotos, die mir gefallen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das ist', role: 'other' }, { text: 'die App,', role: 'subject' }, { text: 'die', role: 'connector' }, { text: 'den Zug', role: 'accusative' }, { text: 'anzeigt.', role: 'verb' }], en: 'This is the app that shows the train.', fr: 'Voici l’application qui indique le train.' },
        { parts: [{ text: 'Das ist', role: 'other' }, { text: 'der Knopf,', role: 'subject' }, { text: 'der', role: 'connector' }, { text: 'das Telefon', role: 'accusative' }, { text: 'einschaltet.', role: 'verb' }], en: 'This is the button that switches the phone on.', fr: 'Voici le bouton qui allume le téléphone.' },
      ],
      contrast: {
        a: { label: 'Two sentences', labelFr: 'Deux phrases', note: 'repeat the noun', noteFr: 'on répète le nom', examples: [g('Das ist eine App. Die App zeigt den Zug an.', 'This is an app. The app shows the train.', 'Voici une application. L’application indique le train.'), g('Das ist ein Knopf. Der Knopf schaltet das Telefon ein.', 'This is a button. The button switches the phone on.', 'Voici un bouton. Le bouton allume le téléphone.')] },
        b: { label: 'One sentence with a relative clause', labelFr: 'Une phrase avec une relative', note: 'der / die / das', noteFr: 'der / die / das', examples: [g('Das ist die App, die den Zug anzeigt.', 'This is the app that shows the train.', 'Voici l’application qui indique le train.'), g('Das ist der Knopf, der das Telefon einschaltet.', 'This is the button that switches the phone on.', 'Voici le bouton qui allume le téléphone.')] },
      },
      examples: [
        g('Das ist die App, die den Zug anzeigt.', 'This is the app that shows the train.', 'Voici l’application qui indique le train.'),
        g('Das ist der Knopf, der das Telefon einschaltet.', 'This is the button that switches the phone on.', 'Voici le bouton qui allume le téléphone.'),
        g('Das Ding, das so laut klingelt, ist der Wecker.', 'The thing that rings so loudly is the alarm clock.', 'Le truc qui sonne si fort est le réveil.'),
        g('Du brauchst ein Passwort, das niemand kennt.', 'You need a password that nobody knows.', 'Tu as besoin d’un mot de passe que personne ne connaît.'),
        g('Ich kenne einen Mann, der in einer Bank arbeitet.', 'I know a man who works in a bank.', 'Je connais un homme qui travaille dans une banque.'),
        g('Das sind die Fotos, die mir gefallen.', 'These are the photos that I like.', 'Ce sont les photos qui me plaisent.'),
      ],
      mistakes: [
        { wrong: 'Das ist die App, der den Zug anzeigt.', right: 'Das ist die App, die den Zug anzeigt.', why: 'The pronoun matches the gender of the noun: die App → die.', whyFr: 'Le pronom suit le genre du nom : die App → die.' },
        { wrong: 'Das ist die App, die zeigt den Zug an.', right: 'Das ist die App, die den Zug anzeigt.', why: 'The verb goes to the end of the relative clause.', whyFr: 'Le verbe va à la fin de la proposition relative.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l29-e2', prompt: 'Das ist die App, ___ den Zug anzeigt.', promptFr: 'Das ist die App, ___ den Zug anzeigt.', answer: 'die', hint: 'die App → die', hintFr: 'die App → die' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l29-e3', word: 'Passwort', answer: 'das', hint: 'Neuter: das Passwort.', hintFr: 'Neutre : das Passwort.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l29-e4', pairs: [{ de: 'das Netz', en: 'the network', fr: 'le réseau' }, { de: 'herunterladen', en: 'to download', fr: 'télécharger' }, { de: 'der Bildschirm', en: 'the screen', fr: 'l’écran' }, { de: 'das Konto', en: 'the account', fr: 'le compte' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à son sens.' } },

    // ───────────── 2 · Relative accusative ─────────────
    { kind: 'chapter', title: 'Das, was ich benutze: Akkusativ', titleFr: 'Ce que j’utilise : accusatif', blurb: 'den, die, das as the object.', blurbFr: 'den, die, das comme complément.' },

    { kind: 'situation', title: 'Welche App meinst du?', titleFr: 'Quelle application veux-tu dire ?',
      setting: 'Oma asks which app Lara uses most.', settingFr: 'Mamie demande quelle application Lara utilise le plus.',
      lines: [
        line('Oma', 'Welche App benutzt du am meisten?', 'Which app do you use most?', 'Quelle application utilises-tu le plus ?'),
        line('Lara', 'Das ist die App, die ich jeden Tag benutze. Und das ist der Film, den ich gestern gesehen habe.', 'That is the app I use every day. And that is the film that I saw yesterday.', 'C’est l’application que j’utilise tous les jours. Et c’est le film que j’ai vu hier.'),
        line('Oma', 'Und das Bild, das du mir geschickt hast?', 'And the picture that you sent me?', 'Et l’image que tu m’as envoyée ?'),
        line('Lara', 'Das ist das Foto, das ich im Urlaub gemacht habe. Die Leute, die du siehst, sind meine Freunde.', 'That is the photo I took on holiday. The people you see are my friends.', 'C’est la photo que j’ai prise en vacances. Les gens que tu vois sont mes amis.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l29-relativsatz-akk', title: 'Relative clauses: den, die, das as the object', titleFr: 'Propositions relatives : den, die, das objet',
      lead: 'As the object the masculine relative pronoun is den. The others do not change.',
      leadFr: 'Comme objet, le pronom relatif masculin est den. Les autres ne changent pas.',
      explanationMd: 'When the relative pronoun is the **direct object** (accusative) of the relative clause, **only the masculine changes**: **der → den**. **die** (f), **das** (n) and **die** (plural) stay the same: **Das ist der Film, den ich gestern gesehen habe. Das ist die App, die ich benutze. Das ist das Foto, das ich gemacht habe.** The **subject** of the relative clause (**ich**) comes right after the pronoun, and the **verb is last** (with the **Perfekt**, the **auxiliary** is the last word: **gesehen habe**).',
      explanationMdFr: 'Quand le pronom relatif est le **complément d’objet direct** (accusatif) de la relative, **seul le masculin change** : **der → den**. **die** (f), **das** (n) et **die** (pluriel) restent identiques : **Das ist der Film, den ich gestern gesehen habe. Das ist die App, die ich benutze. Das ist das Foto, das ich gemacht habe.** Le **sujet** de la relative (**ich**) vient juste après le pronom, et le **verbe est en dernier** (au **parfait**, l’**auxiliaire** est le dernier mot : **gesehen habe**).',
      tables: [{ title: 'Relative pronoun: nominative and accusative', titleFr: 'Pronom relatif : nominatif et accusatif', headers: ['Case', 'm', 'f', 'n', 'plural'], headersFr: ['Cas', 'm', 'f', 'n', 'pluriel'],
        rows: [['Nominative', 'der', 'die', 'das', 'die'], ['Accusative', 'den', 'die', 'das', 'die']],
        rowsFr: [['Nominatif', 'der', 'die', 'das', 'die'], ['Accusatif', 'den', 'die', 'das', 'die']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das ist', role: 'other' }, { text: 'der Film,', role: 'accusative' }, { text: 'den', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'gestern', role: 'time' }, { text: 'gesehen habe.', role: 'verb' }], en: 'That is the film that I saw yesterday.', fr: 'C’est le film que j’ai vu hier.' },
        { parts: [{ text: 'Das ist', role: 'other' }, { text: 'das Foto,', role: 'accusative' }, { text: 'das', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'im Urlaub', role: 'place' }, { text: 'gemacht habe.', role: 'verb' }], en: 'That is the photo I took on holiday.', fr: 'C’est la photo que j’ai prise en vacances.' },
      ],
      contrast: {
        a: { label: 'Pronoun = subject', labelFr: 'Pronom = sujet', note: 'verb follows directly', noteFr: 'le verbe suit directement', examples: [g('Das ist die App, die den Zug anzeigt.', 'This is the app that shows the train.', 'Voici l’application qui indique le train.'), g('Ich kenne einen Mann, der hier arbeitet.', 'I know a man who works here.', 'Je connais un homme qui travaille ici.')] },
        b: { label: 'Pronoun = object', labelFr: 'Pronom = objet', note: 'ich … comes after', noteFr: 'ich … vient après', examples: [g('Das ist der Film, den ich gesehen habe.', 'That is the film that I saw.', 'C’est le film que j’ai vu.'), g('Das ist die App, die ich benutze.', 'That is the app that I use.', 'C’est l’application que j’utilise.')] },
      },
      examples: [
        g('Das ist der Film, den ich gestern gesehen habe.', 'That is the film that I saw yesterday.', 'C’est le film que j’ai vu hier.'),
        g('Das ist die App, die ich jeden Tag benutze.', 'That is the app that I use every day.', 'C’est l’application que j’utilise tous les jours.'),
        g('Das ist das Foto, das ich im Urlaub gemacht habe.', 'That is the photo I took on holiday.', 'C’est la photo que j’ai prise en vacances.'),
        g('Die Leute, die du siehst, sind meine Freunde.', 'The people you see are my friends.', 'Les gens que tu vois sont mes amis.'),
        g('Wo ist das Bild, das du mir geschickt hast?', 'Where is the picture that you sent me?', 'Où est l’image que tu m’as envoyée ?'),
        g('Der Mann, den ich gestern getroffen habe, arbeitet hier.', 'The man I met yesterday works here.', 'L’homme que j’ai rencontré hier travaille ici.'),
      ],
      mistakes: [
        { wrong: 'Das ist der Film, der ich gesehen habe.', right: 'Das ist der Film, den ich gesehen habe.', why: 'The film is the object: masculine accusative den.', whyFr: 'Le film est l’objet : accusatif masculin den.' },
        { wrong: 'Das ist die App, die habe ich benutzt.', right: 'Das ist die App, die ich benutzt habe.', why: 'The auxiliary goes to the very end.', whyFr: 'L’auxiliaire va tout à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l29-e5', prompt: 'Das ist der Film, ___ ich gestern gesehen habe.', promptFr: 'Das ist der Film, ___ ich gestern gesehen habe.', answer: 'den', hint: 'masculine accusative: den', hintFr: 'accusatif masculin : den' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l29-e6', tokens: ['Foto', 'das', 'ist', 'gemacht', 'ich', 'habe', 'das', 'Das'], answer: ['Das', 'ist', 'das', 'Foto', 'das', 'ich', 'gemacht', 'habe'], hint: 'The relative clause ends with the auxiliary.', hintFr: 'La relative se termine par l’auxiliaire.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l29-e7', prompt: 'Die Leute, ___ du siehst, sind meine Freunde.', promptFr: 'Die Leute, ___ du siehst, sind meine Freunde.', options: ['die', 'der', 'den'], optionsFr: ['die', 'der', 'den'], answer: 0, explain: 'Plural: die (nominative and accusative).', explainFr: 'Pluriel : die (nominatif et accusatif).', hint: 'plural → die', hintFr: 'pluriel → die' } },

    // ───────────── 3 · da- / wo- compounds ─────────────
    { kind: 'chapter', title: 'Worauf warten Sie? — Darauf!', titleFr: 'Worauf warten Sie ? — Darauf !', blurb: 'da- and wo- compounds.', blurbFr: 'composés en da- et wo-.' },

    { kind: 'situation', title: 'Worauf wartest du?', titleFr: 'Qu’attends-tu ?',
      setting: 'Lara and Tim talk about their phones and habits.', settingFr: 'Lara et Tim parlent de leurs téléphones et habitudes.',
      lines: [
        line('Tim', 'Worauf wartest du?', 'What are you waiting for?', 'Qu’attends-tu ?'),
        line('Lara', 'Ich warte auf eine Nachricht. Ich warte darauf seit einer Stunde.', 'I am waiting for a message. I have been waiting for it for an hour.', 'J’attends un message. Je l’attends depuis une heure.'),
        line('Tim', 'Ich ärgere mich über das langsame Netz. Ich ärgere mich oft darüber.', 'I get annoyed about the slow network. I often get annoyed about it.', 'Je m’énerve à cause du réseau lent. Je m’en énerve souvent.'),
        line('Lara', 'Woran denkst du? — Ich denke an das Wochenende. Und Oma freut sich auf den Besuch. Sie freut sich darauf.', 'What are you thinking about? — I am thinking of the weekend. And Grandma is looking forward to the visit. She is looking forward to it.', 'À quoi penses-tu ? — Je pense au week-end. Et mamie se réjouit de la visite. Elle s’en réjouit.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l29-da-wo', title: 'da- and wo- compounds', titleFr: 'composés en da- et wo-',
      lead: 'For things: wo(r)- + preposition asks, da(r)- + preposition answers. For people: preposition + pronoun.',
      leadFr: 'Pour les choses : wo(r)- + préposition demande, da(r)- + préposition répond. Pour les personnes : préposition + pronom.',
      explanationMd: 'Many verbs take a **fixed preposition** (**warten auf, sich ärgern über, denken an, sich freuen auf**). For **things**, ask with **wo(r)- + preposition** and answer with **da(r)- + preposition**: **Worauf wartest du? — Ich warte darauf.** Add **-r-** before a **vowel**: **wo-r-auf, da-r-über, wo-r-an**. For **people** use the **preposition + pronoun**: **Auf wen wartest du? — Ich warte auf ihn.** The **da- compound** also replaces **a preposition + noun** to avoid repeating it: **Ich ärgere mich über das Netz. → Ich ärgere mich darüber.**',
      explanationMdFr: 'Beaucoup de verbes prennent une **préposition fixe** (**warten auf, sich ärgern über, denken an, sich freuen auf**). Pour les **choses**, demande avec **wo(r)- + préposition** et réponds avec **da(r)- + préposition** : **Worauf wartest du ? — Ich warte darauf.** Ajoute **-r-** devant une **voyelle** : **wo-r-auf, da-r-über, wo-r-an**. Pour les **personnes**, utilise **préposition + pronom** : **Auf wen wartest du ? — Ich warte auf ihn.** Le **composé en da-** remplace aussi **préposition + nom** pour éviter la répétition : **Ich ärgere mich über das Netz. → Ich ärgere mich darüber.**',
      tables: [{ title: 'Things and people', titleFr: 'Choses et personnes', headers: ['Verb', 'Things', 'People'], headersFr: ['Verbe', 'Choses', 'Personnes'],
        rows: [['warten auf', 'Worauf? → darauf', 'Auf wen? → auf ihn / sie'], ['sich ärgern über', 'Worüber? → darüber', 'Über wen? → über ihn / sie'], ['denken an', 'Woran? → daran', 'An wen? → an ihn / sie'], ['sich freuen auf', 'Worauf? → darauf', 'Auf wen? → auf ihn / sie']],
        rowsFr: [['warten auf', 'Worauf ? → darauf', 'Auf wen ? → auf ihn / sie'], ['sich ärgern über', 'Worüber ? → darüber', 'Über wen ? → über ihn / sie'], ['denken an', 'Woran ? → daran', 'An wen ? → an ihn / sie'], ['sich freuen auf', 'Worauf ? → darauf', 'Auf wen ? → auf ihn / sie']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Worauf', role: 'connector' }, { text: 'wartest', role: 'verb' }, { text: 'du?', role: 'subject' }], en: 'What are you waiting for?', fr: 'Qu’attends-tu ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'warte', role: 'verb' }, { text: 'darauf.', role: 'accusative' }], en: 'I am waiting for it.', fr: 'Je l’attends.' },
      ],
      contrast: {
        a: { label: 'Things: da- / wo-', labelFr: 'Choses : da- / wo-', note: 'darauf, worauf', noteFr: 'darauf, worauf', examples: [g('Worauf wartest du? — Ich warte darauf.', 'What are you waiting for? — I am waiting for it.', 'Qu’attends-tu ? — Je l’attends.'), g('Ich ärgere mich oft darüber.', 'I often get annoyed about it.', 'Je m’en énerve souvent.')] },
        b: { label: 'People: preposition + pronoun', labelFr: 'Personnes : préposition + pronom', note: 'auf ihn', noteFr: 'auf ihn', examples: [g('Auf wen wartest du? — Auf ihn.', 'Whom are you waiting for? — For him.', 'Qui attends-tu ? — Lui.'), g('Ich freue mich auf sie.', 'I am looking forward to seeing her.', 'Je me réjouis de la voir.')] },
      },
      examples: [
        g('Worauf wartest du? — Ich warte darauf.', 'What are you waiting for? — I am waiting for it.', 'Qu’attends-tu ? — Je l’attends.'),
        g('Ich ärgere mich oft darüber.', 'I often get annoyed about it.', 'Je m’en énerve souvent.'),
        g('Woran denkst du? — Ich denke an das Wochenende.', 'What are you thinking about? — I am thinking of the weekend.', 'À quoi penses-tu ? — Je pense au week-end.'),
        g('Sie freut sich darauf.', 'She is looking forward to it.', 'Elle s’en réjouit.'),
        g('Auf wen wartest du? — Auf meinen Bruder.', 'Whom are you waiting for? — For my brother.', 'Qui attends-tu ? — Mon frère.'),
        g('Wofür interessierst du dich? — Dafür interessiere ich mich sehr.', 'What are you interested in? — I am very interested in that.', 'Qu’est-ce qui t’intéresse ? — Cela m’intéresse beaucoup.'),
      ],
      mistakes: [
        { wrong: 'Ich warte auf es.', right: 'Ich warte darauf.', why: 'For things use da(r)- + preposition.', whyFr: 'Pour les choses, utilise da(r)- + préposition.' },
        { wrong: 'Wo wartest du auf?', right: 'Worauf wartest du?', why: 'Wo + r + auf, joined into one word.', whyFr: 'Wo + r + auf, soudés en un mot.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l29-e8', prompt: '___ wartest du? — Ich warte auf eine Nachricht.', promptFr: '___ wartest du ? — Ich warte auf eine Nachricht.', answer: 'Worauf', hint: 'wo + r + auf', hintFr: 'wo + r + auf' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l29-e9', prompt: 'Ich ärgere mich oft ___. (über das Netz)', promptFr: 'Ich ärgere mich oft ___. (über das Netz)', answer: 'darüber', hint: 'da + r + über', hintFr: 'da + r + über' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l29-e10', prompt: 'Listen. What is she waiting for?', promptFr: 'Écoute. Qu’attend-elle ?', audio: { ttsText: 'Ich warte auf eine Nachricht. Ich warte darauf seit einer Stunde.' }, options: ['A message', 'A train', 'A friend'], optionsFr: ['Un message', 'Un train', 'Un ami'], answer: 0, hint: 'warten auf …', hintFr: 'warten auf …' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l29-e11', prompt: 'Listen. What is the password like?', promptFr: 'Écoute. Comment est le mot de passe ?', audio: { ttsText: 'Du brauchst ein Passwort, das niemand kennt.' }, options: ['Nobody knows it', 'It is very long', 'It is the same everywhere'], optionsFr: ['Personne ne le connaît', 'Il est très long', 'Il est le même partout'], answer: 0, hint: 'das niemand kennt', hintFr: 'das niemand kennt' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l29-e12', prompt: 'Which is correct for a person?', promptFr: 'Laquelle est correcte pour une personne ?', options: ['Ich warte auf ihn.', 'Ich warte darauf ihn.', 'Ich warte daran.'], optionsFr: ['Ich warte auf ihn.', 'Ich warte darauf ihn.', 'Ich warte daran.'], answer: 0, explain: 'For people: preposition + pronoun.', explainFr: 'Pour les personnes : préposition + pronom.', hint: 'people → auf ihn', hintFr: 'personnes → auf ihn' } },

    { kind: 'pronunciation', focus: 'The ä/e in Netz, the long ü in darüber and the sch in Bildschirm', focusFr: 'Le e dans Netz, le ü long dans darüber et le sch dans Bildschirm',
      items: [
        word('a2l29-netz-pron', 'Netz', null, 'network', 'réseau', ['NETZ'], 'NETS', g('Das Netz ist schlecht.', 'The network is bad.', 'Le réseau est mauvais.')),
        word('a2l29-bildschirm-pron', 'Bildschirm', null, 'screen', 'écran', ['BILD', 'schirm'], 'BILT-shirm', g('Der Bildschirm ist kaputt.', 'The screen is broken.', 'L’écran est cassé.')),
        word('a2l29-darueber-pron', 'darüber', null, 'about it', 'à ce sujet', ['da', 'RÜ', 'ber'], 'dah-RUE-ber', g('Ich denke darüber nach.', 'I am thinking about it.', 'J’y réfléchis.')),
        word('a2l29-passwort-pron', 'Passwort', null, 'password', 'mot de passe', ['PASS', 'wort'], 'PAS-vort', g('Wie ist dein Passwort?', 'What is your password?', 'Quel est ton mot de passe ?')),
      ] },

    { kind: 'wrapup',
      summary: 'You can now describe things with **relative clauses** (**die App, die …**, **der Film, den …**) and ask and answer with **Worauf …? — Darauf**. 🎉',
      summaryFr: 'Tu sais maintenant décrire des choses avec des **propositions relatives** (**die App, die …**, **der Film, den …**) et demander et répondre avec **Worauf …? — Darauf**. 🎉',
      card: { title: 'Relative clauses on one page', titleFr: 'Les relatives en une page', sections: [
        { heading: 'Relative pronouns', headingFr: 'Pronoms relatifs', rows: [g('Nom: der · die · das · die', 'subject', 'sujet'), g('Akk: den · die · das · die', 'only m changes', 'seul le m change')] },
        { heading: 'Word order', headingFr: 'Ordre des mots', rows: [g('…, die ich benutze.', 'verb at the end, comma before', 'verbe à la fin, virgule avant'), g('…, den ich gesehen habe.', 'auxiliary last', 'auxiliaire en dernier')] },
        { heading: 'da- / wo-', headingFr: 'da- / wo-', rows: [g('Worauf? — Darauf.', 'things', 'choses'), g('Auf wen? — Auf ihn.', 'people', 'personnes')] },
      ] } },
  ],
};
