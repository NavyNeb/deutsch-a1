import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion26: Lesson = {
  id: 'b2-l26', level: 'B2', module: 9, number: 26,
  title: { de: 'Redewendungen und Register', en: 'Idioms and register', fr: 'Expressions idiomatiques et registres' },
  theme: 'Common idioms, colloquial vs. formal language, and adapting your style to the situation', themeFr: 'Expressions idiomatiques courantes, langage familier vs formel, et adaptation du style à la situation',
  goals: ['Understand and use 12 common idioms', 'Distinguish colloquial, neutral and formal register', 'Choose the register that suits the situation', 'Recognise the effect of word choice'], goalsFr: ['Comprendre et employer 12 expressions idiomatiques courantes', 'Distinguer registres familier, neutre et formel', 'Choisir le registre adapté à la situation', 'Reconnaître l’effet du choix des mots'],
  canDo: g('Ich kann gängige Redewendungen verstehen und passend einsetzen und das Register an die Situation anpassen.', 'I can understand and use common idioms appropriately and adapt my register to the situation.', 'Je sais comprendre et employer à propos des expressions idiomatiques courantes et adapter mon registre à la situation.'),
  steps: [
    { kind: 'intro', title: 'Redewendungen und Register 🗣️', titleFr: 'Expressions idiomatiques et registre 🗣️',
      scene: 'Between friends you drop idioms; in a letter to your landlord you choose every word with care.', sceneFr: 'Entre amis, tu glisses des expressions idiomatiques ; dans une lettre à ton propriétaire, tu choisis chaque mot avec soin.',
      goals: ['Understand and use common idioms', 'Tell colloquial, neutral and formal register apart', 'Choose the register that suits the situation'],
      goalsFr: ['Comprendre et employer des expressions courantes', 'Distinguer registre familier, neutre et soutenu', 'Choisir le registre adapté à la situation'] },

    // ───────────── 1 · Idioms ─────────────
    { kind: 'chapter', title: 'Redewendungen', titleFr: 'Expressions idiomatiques', blurb: 'Learn them whole, use them sparingly.', blurbFr: 'Apprends-les entières, utilise-les avec mesure.' },

    { kind: 'situation', title: 'Unter Freunden', titleFr: 'Entre amis',
      setting: 'Friends chat before an exam.', settingFr: 'Des amis discutent avant un examen.',
      lines: [
        line('Jule', 'Ich drücke dir die Daumen für die Prüfung! Bei dem Vortrag habe ich nur Bahnhof verstanden. Bei dem Projekt steckt irgendwo der Wurm drin.', 'I’m keeping my fingers crossed for your exam! In that talk I understood nothing. Something is going wrong somewhere in that project.', 'Je croise les doigts pour ton examen ! Pendant l’exposé, je n’ai rien compris. Il y a quelque chose qui cloche quelque part dans ce projet.'),
        line('Ben', 'Hast du Tomaten auf den Augen? Der Schlüssel liegt doch da! Mit dieser Analyse hast du den Nagel auf den Kopf getroffen. Der Vorschlag trifft ins Schwarze.', 'Are you blind? The key is right there! With this analysis you hit the nail on the head. The proposal hits the mark.', 'Tu as des yeux pour ne pas voir ? La clé est juste là ! Avec cette analyse, tu as mis le doigt dessus. La proposition fait mouche.'),
        line('Jule', 'Das Thema Rente ist ein heißes Eisen, darüber redet niemand gern. Wir sollten Gras über die Sache wachsen lassen. Er sieht den Wald vor lauter Bäumen nicht. Sie ist sauer auf ihren Bruder. Da haben wir aber Schwein gehabt!', 'The topic of pensions is a hot potato, nobody likes talking about it. We should let the matter blow over. He cannot see the wood for the trees. She is cross with her brother. We were lucky there!', 'Le sujet des retraites est un sujet brûlant, personne n’aime en parler. Nous devrions laisser l’affaire se tasser. Il ne voit pas la forêt derrière les arbres. Elle est fâchée contre son frère. Là, on a eu de la chance !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l26-e11', prompt: 'What does “ein heißes Eisen” describe?', promptFr: 'Que décrit « ein heißes Eisen » ?', options: ['A sensitive topic', 'A cooking tool', 'A cheap offer'], optionsFr: ['Un sujet délicat', 'Un ustensile de cuisine', 'Une offre bon marché'], answer: 0, explain: 'Jule says: “Das Thema Rente ist ein heißes Eisen, darüber redet niemand gern.”', explainFr: 'Jule dit : « Das Thema Rente ist ein heißes Eisen, darüber redet niemand gern. »', hint: 'Look at what follows: nobody likes talking about it.', hintFr: 'Regarde la suite : personne n’aime en parler.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l26-e7', prompt: 'Listen. What does the speaker mean?', promptFr: 'Écoute. Que veut dire le locuteur ?', audio: { ttsText: 'Das Thema Rente ist ein heißes Eisen, darüber redet niemand gern.' }, options: ['It is a sensitive topic', 'It is a boring topic', 'It is a funny topic'], optionsFr: ['C’est un sujet sensible', 'C’est un sujet ennuyeux', 'C’est un sujet drôle'], answer: 0, hint: 'heißes Eisen', hintFr: 'heißes Eisen' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l26-e10', prompt: 'Listen. How does the speaker feel?', promptFr: 'Écoute. Comment se sent le locuteur ?', audio: { ttsText: 'Da haben wir aber Schwein gehabt, das hätte schlimm enden können!' }, options: ['Lucky', 'Angry', 'Sad'], optionsFr: ['Chanceux', 'En colère', 'Triste'], answer: 0, hint: 'Schwein haben', hintFr: 'Schwein haben' } },

    { kind: 'wordgroup', title: 'Bilder im Kopf', titleFr: 'Des images en tête',
      items: [{ id: 'b2l26-wurm', german: 'Da steckt der Wurm drin.', english: 'Something is going wrong.', french: 'Il y a un os.', gender: null, syllables: ['da', 'STECKT', 'der', 'WURM', 'drin'], pronunciation: 'dah shtekt dair voorm drin', example: { de: 'Bei dem Projekt steckt irgendwo der Wurm drin.', en: 'Something is wrong with the project somewhere.', fr: 'Il y a un os quelque part dans le projet.' } }, { id: 'b2l26-daumen', german: 'die Daumen drücken', english: 'to keep one’s fingers crossed', french: 'croiser les doigts', gender: null, syllables: ['die', 'DAU', 'men', 'DRÜ', 'cken'], pronunciation: 'dee DOW-men DRUE-ken', example: { de: 'Ich drücke dir die Daumen für die Prüfung!', en: 'I’ll keep my fingers crossed for your exam!', fr: 'Je croise les doigts pour ton examen !' } }, { id: 'b2l26-tomaten', german: 'Tomaten auf den Augen haben', english: 'to be blind to the obvious', french: 'avoir des œillères', gender: null, syllables: ['to', 'MA', 'ten', 'auf', 'den', 'AU', 'gen', 'ha', 'ben'], pronunciation: 'to-MAH-ten owf dayn OW-gen HAH-ben', example: { de: 'Hast du Tomaten auf den Augen? Der Schlüssel liegt doch da!', en: 'Are you blind? The key is right there!', fr: 'Tu as des œillères ? La clé est juste là !' } }, { id: 'b2l26-bahnhof', german: 'Ich verstehe nur Bahnhof.', english: 'It’s all Greek to me.', french: 'Je n’y comprends rien.', gender: null, syllables: ['ich', 'ver', 'STE', 'he', 'nur', 'BAHN', 'hof'], pronunciation: 'ikh fer-SHTAY-e noor BAHN-hohf', example: { de: 'Bei dem Vortrag habe ich nur Bahnhof verstanden.', en: 'In the lecture it was all Greek to me.', fr: 'Pendant la conférence, je n’ai rien compris.' } }, { id: 'b2l26-nagel', german: 'den Nagel auf den Kopf treffen', english: 'to hit the nail on the head', french: 'mettre le doigt dessus', gender: null, syllables: ['den', 'NA', 'gel', 'auf', 'den', 'KOPF', 'TREF', 'fen'], pronunciation: 'dayn NAH-gel owf dayn kopf TREF-fen', example: { de: 'Mit dieser Analyse hast du den Nagel auf den Kopf getroffen.', en: 'With this analysis you hit the nail on the head.', fr: 'Avec cette analyse, tu as mis le doigt dessus.' } }] },

    { kind: 'wordgroup', title: 'Noch mehr Redewendungen', titleFr: 'Encore des expressions',
      items: [{ id: 'b2l26-gras', german: 'Gras über etwas wachsen lassen', english: 'to let things blow over', french: 'laisser passer l’orage', gender: null, syllables: ['GRAS', 'ü', 'ber', 'ET', 'was', 'WACH', 'sen', 'LAS', 'sen'], pronunciation: 'grahs ue-ber ET-vas VAK-sen LAS-sen', example: { de: 'Wir sollten Gras über die Sache wachsen lassen.', en: 'We should let the matter blow over.', fr: 'Nous devrions laisser passer l’orage.' } }, { id: 'b2l26-eisen', german: 'ein heißes Eisen', english: 'a hot potato', french: 'un sujet brûlant', gender: null, syllables: ['ein', 'HEI', 'ßes', 'EI', 'sen'], pronunciation: 'ine HY-ses EYE-zen', example: { de: 'Das Thema Rente ist ein heißes Eisen.', en: 'Pensions is a hot potato.', fr: 'Les retraites sont un sujet brûlant.' } }, { id: 'b2l26-licht', german: 'ins Schwarze treffen', english: 'to hit the mark', french: 'faire mouche', gender: null, syllables: ['ins', 'SCHWAR', 'ze', 'TREF', 'fen'], pronunciation: 'ins SHVAR-tse TREF-fen', example: { de: 'Der Vorschlag trifft ins Schwarze.', en: 'The proposal hits the mark.', fr: 'La proposition fait mouche.' } }, { id: 'b2l26-baeume', german: 'den Wald vor lauter Bäumen nicht sehen', english: 'not to see the wood for the trees', french: 'ne pas voir la forêt pour les arbres', gender: null, syllables: ['den', 'WALD', 'vor', 'LAU', 'ter', 'BÄU', 'men', 'nicht', 'SEH', 'en'], pronunciation: 'dayn valt for LOW-ter BOY-men nikht ZAY-en', example: { de: 'Er sieht den Wald vor lauter Bäumen nicht.', en: 'He can’t see the wood for the trees.', fr: 'Il ne voit pas la forêt pour les arbres.' } }] },

    { kind: 'wordgroup', title: 'Gefühle', titleFr: 'Sentiments',
      items: [{ id: 'b2l26-sauer', german: 'sauer sein auf', english: 'to be cross with', french: 'en vouloir à', gender: null, syllables: ['SAU', 'er', 'sein', 'auf'], pronunciation: 'ZOW-er zine owf', example: { de: 'Sie ist sauer auf ihren Bruder.', en: 'She is cross with her brother.', fr: 'Elle en veut à son frère.' } }, { id: 'b2l26-schwein', german: 'Schwein haben', english: 'to be lucky (colloquial)', french: 'avoir de la chance (familier)', gender: null, syllables: ['SCHWEIN', 'HA', 'ben'], pronunciation: 'shvine HAH-ben', example: { de: 'Da haben wir aber Schwein gehabt!', en: 'We were really lucky there!', fr: 'On a vraiment eu de la chance !' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l26-e5', pairs: [{ de: 'ein heißes Eisen', en: 'a hot potato', fr: 'un sujet brûlant' }, { de: 'Schwein haben', en: 'to be lucky', fr: 'avoir de la chance' }, { de: 'sauer sein auf', en: 'to be cross with', fr: 'en vouloir à' }, { de: 'ins Schwarze treffen', en: 'to hit the mark', fr: 'faire mouche' }], hint: 'Match each idiom to its meaning.', hintFr: 'Associe chaque idiome à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l26-idiome', title: 'Idioms: learn them whole', titleFr: 'Expressions idiomatiques : apprends-les entières',
      lead: 'An idiom has a fixed form and a figurative meaning. Only the verb is conjugated; many are colloquial.',
      leadFr: 'Une expression idiomatique a une forme fixe et un sens figuré. Seul le verbe se conjugue ; beaucoup sont familières.',
      explanationMd: 'An **idiom** has a **fixed form** and a **figurative meaning** — don’t translate word by word. **Keep the form**: **den Nagel auf den Kopf treffen** (not “treffen den Nagel …”). Only the **verb is conjugated**: **Du hast den Nagel auf den Kopf getroffen.** Many are **colloquial**: fine among friends, **risky** in exams or formal letters. Use idioms **where they fit**; one good idiom is better than five forced ones. Compare **register**: **Ich bin sauer.** (colloquial) · **Ich bin verärgert.** (neutral) · **Ich bin über die Entscheidung verstimmt.** (formal).',
      explanationMdFr: 'Une **expression idiomatique** a une **forme fixe** et un **sens figuré** — ne traduis pas mot à mot. **Garde la forme** : **den Nagel auf den Kopf treffen** (pas « treffen den Nagel … »). Seul le **verbe se conjugue** : **Du hast den Nagel auf den Kopf getroffen.** Beaucoup sont **familières** : très bien entre amis, **risquées** aux examens ou dans les lettres formelles. Utilise-les **à bon escient** ; une bonne expression vaut mieux que cinq forcées. Compare le **registre** : **Ich bin sauer.** (familier) · **Ich bin verärgert.** (neutre) · **Ich bin über die Entscheidung verstimmt.** (soutenu).',
      tables: [{ title: 'Idioms', titleFr: 'Expressions', headers: ['Idiom', 'Meaning'], headersFr: ['Expression', 'Sens'],
        rows: [['Da steckt der Wurm drin.', 'Something is going wrong.'], ['die Daumen drücken', 'to keep one’s fingers crossed'], ['Ich verstehe nur Bahnhof.', 'I understand nothing.'], ['den Nagel auf den Kopf treffen', 'to hit the nail on the head'], ['ein heißes Eisen', 'a hot potato'], ['Schwein haben', 'to be lucky']],
        rowsFr: [['Da steckt der Wurm drin.', 'Quelque chose cloche.'], ['die Daumen drücken', 'croiser les doigts'], ['Ich verstehe nur Bahnhof.', 'Je ne comprends rien.'], ['den Nagel auf den Kopf treffen', 'mettre le doigt dessus'], ['ein heißes Eisen', 'un sujet brûlant'], ['Schwein haben', 'avoir de la chance']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'hast', role: 'verb' }, { text: 'den Nagel', role: 'accusative' }, { text: 'auf den Kopf', role: 'other' }, { text: 'getroffen.', role: 'verb' }], en: 'You hit the nail on the head.', fr: 'Tu as mis le doigt dessus.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'drücke', role: 'verb' }, { text: 'dir', role: 'other' }, { text: 'die Daumen.', role: 'accusative' }], en: 'I’m keeping my fingers crossed for you.', fr: 'Je croise les doigts pour toi.' },
      ],
      contrast: {
        a: { label: 'Literal', labelFr: 'Littéral', note: 'word by word', noteFr: 'mot à mot', examples: [g('Er sieht den Wald nicht, weil Bäume davor stehen.', 'He does not see the forest because trees stand in front.', 'Il ne voit pas la forêt parce que des arbres sont devant.'), g('Ich drücke deinen Daumen.', 'I press your thumb.', 'J’appuie sur ton pouce.')] },
        b: { label: 'Idiomatic', labelFr: 'Idiomatique', note: 'figurative', noteFr: 'figuré', examples: [g('Er sieht den Wald vor lauter Bäumen nicht.', 'He cannot see the wood for the trees.', 'Il ne voit pas la forêt derrière les arbres.'), g('Ich drücke dir die Daumen!', 'I’m keeping my fingers crossed for you!', 'Je croise les doigts pour toi !')] },
      },
      examples: [
        g('Das Thema ist ein heißes Eisen.', 'The topic is a hot potato.', 'Le sujet est brûlant.'),
        g('Ich drücke dir die Daumen!', 'I’m keeping my fingers crossed for you!', 'Je croise les doigts pour toi !'),
        g('Mit dieser Analyse hast du den Nagel auf den Kopf getroffen.', 'With this analysis you hit the nail on the head.', 'Avec cette analyse, tu as mis le doigt dessus.'),
        g('Bei dem Projekt steckt irgendwo der Wurm drin.', 'Something is going wrong somewhere in that project.', 'Il y a quelque chose qui cloche quelque part dans ce projet.'),
        g('Da haben wir aber Schwein gehabt!', 'We were lucky there!', 'Là, on a eu de la chance !'),
        g('Der Vorschlag trifft ins Schwarze.', 'The proposal hits the mark.', 'La proposition fait mouche.'),
      ],
      mistakes: [
        { wrong: 'Ich drücke dir den Daumen.', right: 'Ich drücke dir die Daumen.', why: 'The idiom uses the plural: die Daumen.', whyFr: 'L’expression utilise le pluriel : die Daumen.' },
        { wrong: 'Er trifft auf den Kopf den Nagel.', right: 'Er trifft den Nagel auf den Kopf.', why: 'Keep the fixed word order of the idiom.', whyFr: 'Garde l’ordre fixe des mots de l’expression.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l26-e1', prompt: '"Ich verstehe nur Bahnhof" means …', promptFr: '« Ich verstehe nur Bahnhof » signifie …', options: ['I understand nothing', 'I am at the station', 'I understand everything'], answer: 0, explain: 'Idiom: it’s all Greek to me.', explainFr: 'Idiome : je n’y comprends rien.', hint: 'figurative', hintFr: 'sens figuré' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l26-e2', prompt: 'Ich drücke dir die ___ ! (fingers crossed)', answer: 'Daumen', hint: 'die Daumen drücken', hintFr: 'die Daumen drücken' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l26-e4', prompt: 'Du hast den Nagel auf den Kopf ___ . (hit)', answer: 'getroffen', hint: 'treffen → getroffen', hintFr: 'treffen → getroffen' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l26-e8', tokens: ['Ich', 'dir', 'drücke', 'die', 'Daumen'], answer: ['Ich', 'drücke', 'dir', 'die', 'Daumen'], hint: 'drücken + dir + die Daumen', hintFr: 'drücken + dir + die Daumen' } },

    // ───────────── 2 · Registers ─────────────
    { kind: 'chapter', title: 'Drei Register', titleFr: 'Trois registres', blurb: 'colloquial → neutral → formal.', blurbFr: 'familier → neutre → soutenu.' },

    { kind: 'situation', title: 'Ein Wort, drei Töne', titleFr: 'Un mot, trois tons',
      setting: 'Jule explains the same message to a friend, a colleague and a landlord.', settingFr: 'Jule explique le même message à un ami, à un collègue et à un propriétaire.',
      lines: [
        line('Jule', 'Das ist Mist. → Das ist schlecht. → Das ist unbefriedigend. Ich habe keinen Bock. → Ich habe keine Lust. → Ich möchte davon absehen.', 'That is rubbish. → That is bad. → That is unsatisfactory. I can’t be bothered. → I don’t feel like it. → I would like to refrain.', 'C’est nul. → C’est mauvais. → C’est insatisfaisant. J’ai pas envie. → Je n’ai pas envie. → Je préférerais m’en abstenir.'),
        line('Jule', 'kriegen → bekommen → erhalten. Kohle → Geld → finanzielle Mittel. Kannst du …? → Könntest du …? → Wären Sie so freundlich, …?', 'to get → to receive → to obtain. Dough → money → financial means. Can you …? → Could you …? → Would you be so kind as to …?', 'avoir → recevoir → obtenir. Fric → argent → moyens financiers. Tu peux … ? → Tu pourrais … ? → Auriez-vous l’amabilité de … ?'),
        line('Jule', 'Man muss das passende Register wählen. In der Umgangssprache sagt man oft „krass“. Ich habe keine Lust, aber ich komme mit. Wären Sie so freundlich, mir die Unterlagen zu schicken?', 'One has to choose the fitting register. In colloquial speech people often say “krass”. I don’t feel like it, but I’ll come along. Would you be so kind as to send me the documents?', 'Il faut choisir le registre qui convient. Dans la langue familière, on dit souvent « krass ». Je n’ai pas envie, mais je viens quand même. Auriez-vous l’amabilité de m’envoyer les documents ?'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Sprachebene', titleFr: 'Niveau de langue',
      items: [{ id: 'b2l26-register', german: 'das Register', english: 'the register / style level', french: 'le registre', gender: 'das', syllables: ['das', 're', 'GIS', 'ter'], pronunciation: 'das re-GIS-ter', example: { de: 'Man muss das passende Register wählen.', en: 'You have to choose the right register.', fr: 'Il faut choisir le registre adapté.' } }, { id: 'b2l26-umgangssprache', german: 'die Umgangssprache', english: 'colloquial language', french: 'la langue familière', gender: 'die', syllables: ['die', 'UM', 'gangs', 'spra', 'che'], pronunciation: 'dee OOM-gahngs-shprah-khe', example: { de: 'In der Umgangssprache sagt man oft „krass“.', en: 'In colloquial language people often say "krass".', fr: 'Dans la langue familière, on dit souvent « krass ».' } }] },

    { kind: 'grammar', note: {
      id: 'b2l26-register', title: 'Three registers: colloquial, neutral, formal', titleFr: 'Trois registres : familier, neutre, soutenu',
      lead: 'Choose by audience, medium and purpose; mixing registers sounds odd — no slang in a formal e-mail.',
      leadFr: 'Choisis selon l’interlocuteur, le support et le but ; mélanger les registres sonne bizarre — pas d’argot dans un e-mail formel.',
      explanationMd: '**Das ist Mist.** → **Das ist schlecht.** → **Das ist unbefriedigend.** **Ich hab’ keinen Bock.** → **Ich habe keine Lust.** → **Ich möchte davon absehen.** **kriegen** → **bekommen** → **erhalten**. **Kohle** → **Geld** → **finanzielle Mittel**. **Kannst du …?** → **Könntest du …?** → **Wären Sie so freundlich, …?** (colloquial → neutral → formal). Choose by **audience** (friends vs. boss), **medium** (chat vs. letter) and **purpose**. **Mixing registers sounds odd**: no slang in a formal e-mail.',
      explanationMdFr: '**Das ist Mist.** → **Das ist schlecht.** → **Das ist unbefriedigend.** **Ich hab’ keinen Bock.** → **Ich habe keine Lust.** → **Ich möchte davon absehen.** **kriegen** → **bekommen** → **erhalten**. **Kohle** → **Geld** → **finanzielle Mittel**. **Kannst du …?** → **Könntest du …?** → **Wären Sie so freundlich, …?** (familier → neutre → soutenu). Choisis selon l’**interlocuteur** (amis vs. chef), le **support** (chat vs. lettre) et le **but**. **Mélanger les registres sonne bizarre** : pas d’argot dans un e-mail formel.',
      tables: [{ title: 'Registers', titleFr: 'Registres', headers: ['Colloquial', 'Neutral', 'Formal'], headersFr: ['Familier', 'Neutre', 'Soutenu'],
        rows: [['Das ist Mist.', 'Das ist schlecht.', 'Das ist unbefriedigend.'], ['Ich habe keinen Bock.', 'Ich habe keine Lust.', 'Ich möchte davon absehen.'], ['kriegen', 'bekommen', 'erhalten'], ['Kohle', 'Geld', 'finanzielle Mittel'], ['Kannst du …?', 'Könntest du …?', 'Wären Sie so freundlich, …?']],
        rowsFr: [['Das ist Mist.', 'Das ist schlecht.', 'Das ist unbefriedigend.'], ['Ich habe keinen Bock.', 'Ich habe keine Lust.', 'Ich möchte davon absehen.'], ['kriegen', 'bekommen', 'erhalten'], ['Kohle', 'Geld', 'finanzielle Mittel'], ['Kannst du …?', 'Könntest du …?', 'Wären Sie so freundlich, …?']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Wären', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'so freundlich,', role: 'other' }, { text: 'mir', role: 'other' }, { text: 'die Unterlagen', role: 'accusative' }, { text: 'zu schicken?', role: 'verb' }], en: 'Would you be so kind as to send me the documents?', fr: 'Auriez-vous l’amabilité de m’envoyer les documents ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'habe', role: 'verb' }, { text: 'keine Lust,', role: 'accusative' }, { text: 'aber', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'komme', role: 'verb' }, { text: 'mit.', role: 'other' }], en: 'I don’t feel like it, but I’ll come along.', fr: 'Je n’ai pas envie, mais je viens quand même.' },
      ],
      contrast: {
        a: { label: 'To a friend', labelFr: 'À un ami', note: 'colloquial', noteFr: 'familier', examples: [g('Ich hab’ keinen Bock.', 'I can’t be bothered.', 'J’ai pas envie.'), g('Kannst du mir mal helfen?', 'Can you help me?', 'Tu peux m’aider ?')] },
        b: { label: 'To a landlord', labelFr: 'À un propriétaire', note: 'formal', noteFr: 'soutenu', examples: [g('Ich möchte davon absehen.', 'I would like to refrain.', 'Je préférerais m’en abstenir.'), g('Wären Sie so freundlich, mir die Unterlagen zu schicken?', 'Would you be so kind as to send me the documents?', 'Auriez-vous l’amabilité de m’envoyer les documents ?')] },
      },
      examples: [
        g('Ich habe keine Lust, aber ich komme mit.', 'I don’t feel like it, but I’ll come along.', 'Je n’ai pas envie, mais je viens quand même.'),
        g('Wären Sie so freundlich, mir die Unterlagen zu schicken?', 'Would you be so kind as to send me the documents?', 'Auriez-vous l’amabilité de m’envoyer les documents ?'),
        g('Leider muss ich feststellen, dass die Heizung defekt ist.', 'Unfortunately I must note that the heating is broken.', 'Malheureusement je dois constater que le chauffage est en panne.'),
        g('In der Umgangssprache sagt man oft „krass“.', 'In colloquial speech people often say “krass”.', 'Dans la langue familière, on dit souvent « krass ».'),
        g('Man muss das passende Register wählen.', 'One has to choose the fitting register.', 'Il faut choisir le registre qui convient.'),
        g('Ich bin über die Entscheidung verstimmt.', 'I am displeased about the decision.', 'Je suis contrarié par la décision.'),
      ],
      mistakes: [
        { wrong: 'Sehr geehrte Damen und Herren, die Heizung ist voll Mist.', right: 'Sehr geehrte Damen und Herren, die Heizung ist defekt.', why: 'No slang in a formal letter.', whyFr: 'Pas d’argot dans une lettre formelle.' },
        { wrong: 'Hallo Chef, ich beantrage hiermit meinen Urlaub!!!', right: 'Hallo, ich würde gern Urlaub nehmen.', why: 'Match the register to the audience: neutral for a boss you know.', whyFr: 'Adapte le registre à l’interlocuteur : neutre pour un chef que tu connais.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l26-e3', prompt: 'Which is the FORMAL equivalent of "kriegen"?', promptFr: 'Quel est l’équivalent FORMEL de « kriegen » ?', options: ['bekommen', 'erhalten', 'abholen'], answer: 1, explain: 'kriegen (colloq.) → bekommen → erhalten (formal).', explainFr: 'kriegen (fam.) → bekommen → erhalten (formel).', hint: 'most formal', hintFr: 'le plus formel' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l26-e6', prompt: 'Which register is "Ich habe keinen Bock"?', promptFr: 'Quel registre est « Ich habe keinen Bock » ?', options: ['formal', 'neutral', 'colloquial'], answer: 2, explain: '"Bock haben" is slang.', explainFr: '« Bock haben » est de l’argot.', hint: 'slang', hintFr: 'argot' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l26-e9', prompt: 'You write to your landlord. Which is best?', promptFr: 'Tu écris à ton propriétaire. Laquelle est la meilleure ?', options: ['Ey, die Heizung ist Mist!', 'Leider muss ich feststellen, dass die Heizung defekt ist.', 'Heizung kaputt, mach was!'], answer: 1, explain: 'Formal register for a formal situation.', explainFr: 'Registre formel pour une situation formelle.', hint: 'formal', hintFr: 'formel' } },

    { kind: 'pronunciation', focus: 'Idioms are spoken as one fluent chunk with a stress on the key noun: "den NAgel auf den KOPF treffen", "ein HEIßes EIsen"', focusFr: 'Les idiomes se disent comme un bloc fluide avec accent sur le nom clé : « den NAgel auf den KOPF treffen », « ein HEIßes EIsen »', items: [{ id: 'b2l26-umgangssprache-pron', german: 'Umgangssprache', english: 'colloquial language', french: 'langue familière', gender: null, syllables: ['UM', 'gangs', 'spra', 'che'], pronunciation: 'OOM-gahngs-shprah-khe', example: { de: 'Das ist Umgangssprache.', en: 'That is colloquial.', fr: 'C’est familier.' } }, { id: 'b2l26-redewendung-pron', german: 'Redewendung', english: 'idiom', french: 'expression idiomatique', gender: null, syllables: ['RE', 'de', 'wen', 'dung'], pronunciation: 'RAY-de-ven-doong', example: { de: 'Eine typische Redewendung.', en: 'A typical idiom.', fr: 'Une expression typique.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **use common idioms** (**die Daumen drücken, den Nagel auf den Kopf treffen, ein heißes Eisen**) and **switch register** between colloquial, neutral and formal. 🎉',
      summaryFr: 'Tu sais maintenant **employer des expressions courantes** (**die Daumen drücken, den Nagel auf den Kopf treffen, ein heißes Eisen**) et **changer de registre** entre familier, neutre et soutenu. 🎉',
      card: { title: 'Idioms and register on one page', titleFr: 'Expressions et registre en une page', sections: [
        { heading: 'Idioms', headingFr: 'Expressions', rows: [g('learn the fixed form', 'only the verb changes', 'seul le verbe change'), g('use sparingly', 'one good idiom is enough', 'une bonne expression suffit')] },
        { heading: 'Register', headingFr: 'Registre', rows: [g('kriegen → bekommen → erhalten', 'colloquial → neutral → formal', 'familier → neutre → soutenu'), g('Kannst du … → Könntest du … → Wären Sie so freundlich …', 'politeness', 'politesse')] },
      ] } },
  ],
};
