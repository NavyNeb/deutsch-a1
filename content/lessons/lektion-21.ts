import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A1 lesson: survival phrases. The official A1 speech acts include asking for repetition, thanking and apologising.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const lektion21: Lesson = {
  id: 'l21', level: 'A1', module: 1, number: 3,
  title: { de: 'Wie bitte? Langsamer, bitte!', en: 'Sorry? Slowly, please!', fr: 'Pardon ? Plus lentement, s’il vous plaît !' },
  theme: 'Asking for help, asking for words, thanking and apologising',
  themeFr: 'Demander de l’aide, demander des mots, remercier et s’excuser',
  goals: ['Say when you do not understand and ask someone to repeat', 'Ask how to say or spell a word', 'Thank, apologise and react politely'],
  goalsFr: ['Dire que tu ne comprends pas et demander de répéter', 'Demander comment dire ou écrire un mot', 'Remercier, s’excuser et réagir poliment'],
  canDo: g('Ich kann um Hilfe bitten, wenn ich etwas nicht verstehe, und höflich reagieren.', 'I can ask for help when I do not understand something and react politely.', 'Je sais demander de l’aide quand je ne comprends pas et réagir poliment.'),
  steps: [
    { kind: 'intro', title: 'Überlebenssätze 🆘', titleFr: 'Phrases de survie 🆘',
      scene: 'Real conversations are fast. These phrases keep you in the conversation.', sceneFr: 'Les vraies conversations sont rapides. Ces phrases te gardent dans la conversation.',
      goals: ['Wie bitte? Langsamer, bitte. Ich verstehe nicht.', 'Wie sagt man …? Was bedeutet …? Wie schreibt man das?', 'Danke, bitte, Entschuldigung, Es tut mir leid'],
      goalsFr: ['Wie bitte ? Langsamer, bitte. Ich verstehe nicht.', 'Wie sagt man … ? Was bedeutet … ? Wie schreibt man das ?', 'Danke, bitte, Entschuldigung, Es tut mir leid'] },

    // ───────────── 1 · I do not understand ─────────────
    { kind: 'chapter', title: 'Ich verstehe nicht', titleFr: 'Je ne comprends pas', blurb: 'Ask someone to repeat or to slow down.', blurbFr: 'Demander de répéter ou de ralentir.' },

    { kind: 'situation', title: 'In der Bäckerei', titleFr: 'À la boulangerie',
      setting: 'Nicole buys bread and does not understand the price.', settingFr: 'Nicole achète du pain et ne comprend pas le prix.',
      lines: [
        line('Verkäuferin', 'Das macht sieben Euro neunzig.', 'That makes seven euros ninety.', 'Cela fait sept euros quatre-vingt-dix.'),
        line('Nicole', 'Wie bitte? Können Sie das wiederholen?', 'Pardon? Can you repeat that?', 'Pardon ? Pouvez-vous répéter ?'),
        line('Verkäuferin', 'Sieben Euro neunzig.', 'Seven euros ninety.', 'Sept euros quatre-vingt-dix.'),
        line('Nicole', 'Langsamer, bitte. Ich verstehe nicht so gut Deutsch.', 'Slower, please. I don’t understand German very well.', 'Plus lentement, s’il vous plaît. Je ne comprends pas très bien l’allemand.'),
        line('Verkäuferin', 'Kein Problem. Sieben – Euro – neunzig.', 'No problem. Seven – euros – ninety.', 'Pas de problème. Sept – euros – quatre-vingt-dix.'),
        line('Nicole', 'Danke, jetzt verstehe ich.', 'Thanks, now I understand.', 'Merci, maintenant je comprends.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l21-e11', prompt: 'What does Nicole ask the shop assistant to do first?', promptFr: 'Que demande d’abord Nicole à la vendeuse ?', options: ['Repeat it', 'Write it down', 'Speak English'], optionsFr: ['Répéter', 'L’écrire', 'Parler anglais'], answer: 0, explain: 'She says: “Wie bitte? Können Sie das wiederholen?”', explainFr: 'Elle dit : « Wie bitte ? Können Sie das wiederholen ? »', hint: 'Look at Nicole’s first answer.', hintFr: 'Regarde la première réponse de Nicole.' } },

    { kind: 'wordgroup', title: 'Hilfe-Sätze', titleFr: 'Phrases d’aide',
      note: 'Learn these as whole phrases. They are the most useful sentences you will ever say.', noteFr: 'Apprends-les comme des phrases entières. Ce sont les phrases les plus utiles que tu diras jamais.',
      items: [
        word('l21-wiebitte', 'Wie bitte?', null, 'Pardon? / Sorry?', 'Pardon ? / Comment ?', ['WIE', 'BIT', 'te'], 'vee BIT-uh', g('Wie bitte? Ich verstehe nicht.', 'Pardon? I don’t understand.', 'Pardon ? Je ne comprends pas.')),
        word('l21-langsamer', 'Langsamer, bitte.', null, 'Slower, please.', 'Plus lentement, s’il vous plaît.', ['LANG', 'sa', 'mer', 'BIT', 'te'], 'LAHNG-zah-mer BIT-uh', g('Langsamer, bitte. Ich lerne Deutsch.', 'Slower, please. I am learning German.', 'Plus lentement, s’il vous plaît. J’apprends l’allemand.')),
        word('l21-nochmal', 'Noch einmal, bitte.', null, 'Once more, please.', 'Encore une fois, s’il vous plaît.', ['NOCH', 'EIN', 'mal', 'BIT', 'te'], 'nokh INE-mahl BIT-uh', g('Noch einmal, bitte. Wie heißt du?', 'Once more, please. What is your name?', 'Encore une fois, s’il vous plaît. Comment tu t’appelles ?')),
        word('l21-verstehe-nicht', 'Ich verstehe nicht.', null, 'I don’t understand.', 'Je ne comprends pas.', ['ICH', 'ver', 'STE', 'he', 'NICHT'], 'ikh fair-SHTAY-uh nikht', g('Ich verstehe nicht. Sprechen Sie Englisch?', 'I don’t understand. Do you speak English?', 'Je ne comprends pas. Parlez-vous anglais ?')),
        word('l21-wiederholen', 'wiederholen', null, 'to repeat', 'répéter', ['WIE', 'der', 'HO', 'len'], 'VEE-der-hoh-len', g('Können Sie das wiederholen?', 'Can you repeat that?', 'Pouvez-vous répéter cela ?')),
      ] },

    { kind: 'grammar', note: {
      id: 'l21-hilfe', title: 'Asking for help: Können Sie das wiederholen?', titleFr: 'Demander de l’aide : Können Sie das wiederholen ?',
      lead: 'Learn the four phrases by heart. The question uses the modal frame: Können in position 1, the infinitive at the end.',
      leadFr: 'Apprends les quatre phrases par cœur. La question utilise le cadre modal : Können en position 1, l’infinitif à la fin.',
      explanationMd: 'When you do not understand, say **Wie bitte?** or **Ich verstehe nicht.** To get help, ask politely with **Können Sie …?** (formal) or **Kannst du …?** (informal). The second verb goes to the **end** (the frame you know from lesson 10): **Können Sie das wiederholen?**',
      explanationMdFr: 'Quand tu ne comprends pas, dis **Wie bitte ?** ou **Ich verstehe nicht.** Pour obtenir de l’aide, demande poliment avec **Können Sie … ?** (formel) ou **Kannst du … ?** (familier). Le deuxième verbe va à la **fin** (le cadre de la leçon 10) : **Können Sie das wiederholen ?**',
      tables: [{ title: 'Asking for help', titleFr: 'Demander de l’aide', headers: ['Situation', 'You say'], headersFr: ['Situation', 'Tu dis'],
        rows: [['you did not hear', 'Wie bitte?'], ['you do not understand', 'Ich verstehe nicht.'], ['too fast', 'Langsamer, bitte.'], ['say it again', 'Noch einmal, bitte. / Können Sie das wiederholen?'], ['you need English', 'Sprechen Sie Englisch?']],
        rowsFr: [['tu n’as pas entendu', 'Wie bitte?'], ['tu ne comprends pas', 'Ich verstehe nicht.'], ['trop vite', 'Langsamer, bitte.'], ['redis-le', 'Noch einmal, bitte. / Können Sie das wiederholen?'], ['tu as besoin de l’anglais', 'Sprechen Sie Englisch?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Können', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'das', role: 'accusative' }, { text: 'wiederholen?', role: 'verb' }], en: 'Can you repeat that?', fr: 'Pouvez-vous répéter cela ?' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'verstehe', role: 'verb' }, { text: 'nicht.', role: 'connector' }], en: 'I don’t understand.', fr: 'Je ne comprends pas.' },
      ],
      contrast: {
        a: { label: 'Sie (formal)', labelFr: 'Sie (formel)', note: 'shops, offices, strangers', noteFr: 'magasins, administrations, inconnus', examples: [g('Können Sie das wiederholen?', 'Can you repeat that?', 'Pouvez-vous répéter cela ?'), g('Sprechen Sie Englisch?', 'Do you speak English?', 'Parlez-vous anglais ?')] },
        b: { label: 'du (informal)', labelFr: 'du (familier)', note: 'friends, classmates', noteFr: 'amis, camarades', examples: [g('Kannst du das wiederholen?', 'Can you repeat that?', 'Peux-tu répéter cela ?'), g('Sprichst du Englisch?', 'Do you speak English?', 'Parles-tu anglais ?')] },
      },
      examples: [
        g('Wie bitte? Ich habe das nicht gehört.', 'Pardon? I did not hear that.', 'Pardon ? Je n’ai pas entendu.'),
        g('Ich verstehe nicht so gut Deutsch.', 'I don’t understand German very well.', 'Je ne comprends pas très bien l’allemand.'),
        g('Langsamer, bitte.', 'Slower, please.', 'Plus lentement, s’il vous plaît.'),
        g('Noch einmal, bitte.', 'Once more, please.', 'Encore une fois, s’il vous plaît.'),
        g('Können Sie das wiederholen?', 'Can you repeat that?', 'Pouvez-vous répéter cela ?'),
        g('Kannst du bitte langsamer sprechen?', 'Can you please speak more slowly?', 'Peux-tu parler plus lentement, s’il te plaît ?'),
        g('Sprechen Sie Englisch?', 'Do you speak English?', 'Parlez-vous anglais ?'),
      ],
      mistakes: [
        { wrong: 'Können Sie wiederholen das?', right: 'Können Sie das wiederholen?', why: 'The infinitive goes to the very end.', whyFr: 'L’infinitif va tout à la fin.' },
        { wrong: 'Ich nicht verstehe.', right: 'Ich verstehe nicht.', why: 'nicht comes after the verb.', whyFr: 'nicht vient après le verbe.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l21-e1', prompt: 'You did not hear what someone said. What do you say?', promptFr: 'Tu n’as pas entendu ce que quelqu’un a dit. Que dis-tu ?', options: ['Wie bitte?', 'Danke schön!', 'Guten Tag!'], answer: 0, explain: '“Wie bitte?” means “Pardon?”.', explainFr: '« Wie bitte ? » signifie « Pardon ? ».', hint: 'You want the person to say it again.', hintFr: 'Tu veux que la personne le redise.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l21-e2', tokens: ['Sie', 'das', 'Können', 'wiederholen'], answer: ['Können', 'Sie', 'das', 'wiederholen'], hint: 'Modal first, infinitive last.', hintFr: 'Modal en premier, infinitif en dernier.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l21-e3', prompt: 'Ich ___ nicht. (verstehen)', promptFr: 'Ich ___ nicht. (verstehen)', answer: 'verstehe', hint: 'ich-form of verstehen', hintFr: 'forme ich de verstehen' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l21-e4', prompt: 'Listen. What does the speaker ask for?', promptFr: 'Écoute. Que demande la personne ?', audio: { ttsText: 'Langsamer, bitte. Ich lerne noch Deutsch.' }, options: ['To speak more slowly', 'To repeat the price', 'To spell the name'], optionsFr: ['De parler plus lentement', 'De répéter le prix', 'D’épeler le nom'], answer: 0, hint: 'Listen for the first word.', hintFr: 'Écoute le premier mot.' } },

    // ───────────── 2 · Asking for words ─────────────
    { kind: 'chapter', title: 'Wie sagt man …?', titleFr: 'Comment dit-on … ?', blurb: 'Ask for words, meanings and spelling.', blurbFr: 'Demander des mots, des sens et l’orthographe.' },

    { kind: 'situation', title: 'Im Kurs', titleFr: 'Au cours',
      setting: 'Nicole asks Frau Roth about words.', settingFr: 'Nicole interroge Mme Roth sur des mots.',
      lines: [
        line('Nicole', 'Entschuldigung, wie sagt man „bread“ auf Deutsch?', 'Excuse me, how do you say “bread” in German?', 'Excusez-moi, comment dit-on « bread » en allemand ?'),
        line('Frau Roth', 'Man sagt „das Brot“.', 'You say “das Brot”.', 'On dit « das Brot ».'),
        line('Nicole', 'Und was bedeutet „Tschüss“?', 'And what does “Tschüss” mean?', 'Et que signifie « Tschüss » ?'),
        line('Frau Roth', '„Tschüss“ bedeutet „bye“.', '“Tschüss” means “bye”.', '« Tschüss » signifie « au revoir ».'),
        line('Nicole', 'Wie schreibt man das?', 'How do you spell that?', 'Comment ça s’écrit ?'),
        line('Frau Roth', 'T-S-C-H-Ü-S-S.', 'T-S-C-H-Ü-S-S.', 'T-S-C-H-Ü-S-S.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l21-e12', prompt: 'What does “Tschüss” mean?', promptFr: 'Que signifie « Tschüss » ?', options: ['Bye', 'Thanks', 'Sorry'], optionsFr: ['Au revoir', 'Merci', 'Pardon'], answer: 0, explain: 'Frau Roth says: “Tschüss bedeutet bye.”', explainFr: 'Mme Roth dit : « Tschüss bedeutet bye. »', hint: 'Look at Frau Roth’s second answer.', hintFr: 'Regarde la deuxième réponse de Mme Roth.' } },

    { kind: 'wordgroup', title: 'Fragen im Kurs', titleFr: 'Questions en cours',
      items: [
        word('l21-sagen', 'sagen', null, 'to say', 'dire', ['SA', 'gen'], 'ZAH-gen', g('Wie sagt man das auf Deutsch?', 'How do you say that in German?', 'Comment dit-on cela en allemand ?')),
        word('l21-bedeuten', 'bedeuten', null, 'to mean', 'signifier', ['be', 'DEU', 'ten'], 'buh-DOY-ten', g('Was bedeutet das Wort?', 'What does the word mean?', 'Que signifie ce mot ?')),
        word('l21-schreiben', 'schreiben', null, 'to write, to spell', 'écrire, épeler', ['SCHREI', 'ben'], 'SHRY-ben', g('Wie schreibt man das?', 'How do you spell that?', 'Comment ça s’écrit ?')),
        word('l21-wort', 'das Wort', 'das', 'the word', 'le mot', ['WORT'], 'dahs VORT', g('Das Wort ist neu.', 'The word is new.', 'Le mot est nouveau.')),
      ] },

    { kind: 'grammar', note: {
      id: 'l21-woerter', title: 'Asking about words', titleFr: 'Poser des questions sur les mots',
      lead: 'man is a general “one”: Wie sagt man …? These questions are W-questions: verb second.',
      leadFr: 'man est un « on » général : Wie sagt man … ? Ces questions sont des questions en W : verbe en deuxième.',
      explanationMd: 'To learn a language you need five questions. They are **W-questions**, so the **verb stays second**. **man** (“one, you in general”) takes the same form as **er/sie/es**: **Wie sagt man …? Wie schreibt man …?** Use quotation marks for the word: „bread“.',
      explanationMdFr: 'Pour apprendre une langue, il te faut cinq questions. Ce sont des **questions en W**, donc le **verbe reste en deuxième**. **man** (« on ») prend la même forme que **er/sie/es** : **Wie sagt man … ? Wie schreibt man … ?** Mets le mot entre guillemets : „bread“.',
      tables: [{ title: 'Five questions for learners', titleFr: 'Cinq questions pour apprenants', headers: ['Question', 'Use'], headersFr: ['Question', 'Emploi'],
        rows: [['Wie sagt man „bread“ auf Deutsch?', 'how to say a word'], ['Was bedeutet „Tschüss“?', 'what a word means'], ['Wie schreibt man das?', 'how to spell it'], ['Wie spricht man das aus?', 'how to pronounce it'], ['Was heißt das auf Englisch?', 'translate into English']],
        rowsFr: [['Wie sagt man „bread“ auf Deutsch?', 'comment dire un mot'], ['Was bedeutet „Tschüss“?', 'ce que signifie un mot'], ['Wie schreibt man das?', 'comment l’épeler'], ['Wie spricht man das aus?', 'comment le prononcer'], ['Was heißt das auf Englisch?', 'traduire en anglais']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Wie', role: 'other' }, { text: 'sagt', role: 'verb' }, { text: 'man', role: 'subject' }, { text: '„bread“', role: 'other' }, { text: 'auf Deutsch?', role: 'other' }], en: 'How do you say “bread” in German?', fr: 'Comment dit-on « bread » en allemand ?' },
        { parts: [{ text: 'Was', role: 'other' }, { text: 'bedeutet', role: 'verb' }, { text: '„Tschüss“?', role: 'subject' }], en: 'What does “Tschüss” mean?', fr: 'Que signifie « Tschüss » ?' },
      ],
      contrast: {
        a: { label: 'man (general)', labelFr: 'man (général)', note: 'anyone, in general', noteFr: 'n’importe qui, en général', examples: [g('Wie schreibt man das?', 'How do you spell that?', 'Comment ça s’écrit ?'), g('Man sagt „das Brot“.', 'You say “das Brot”.', 'On dit « das Brot ».')] },
        b: { label: 'du / Sie (you)', labelFr: 'du / Sie (toi / vous)', note: 'a specific person', noteFr: 'une personne précise', examples: [g('Wie schreibst du dein Wort?', 'How do you write your word?', 'Comment écris-tu ton mot ?'), g('Wie heißen Sie?', 'What is your name?', 'Comment vous appelez-vous ?')] },
      },
      examples: [
        g('Wie sagt man „bread“ auf Deutsch?', 'How do you say “bread” in German?', 'Comment dit-on « bread » en allemand ?'),
        g('Man sagt „das Brot“.', 'You say “das Brot”.', 'On dit « das Brot ».'),
        g('Was bedeutet „Tschüss“?', 'What does “Tschüss” mean?', 'Que signifie « Tschüss » ?'),
        g('Wie schreibt man das?', 'How do you spell that?', 'Comment ça s’écrit ?'),
        g('Wie spricht man das aus?', 'How do you pronounce that?', 'Comment ça se prononce ?'),
        g('Was heißt das auf Englisch?', 'What is that in English?', 'Comment dit-on cela en anglais ?'),
      ],
      mistakes: [
        { wrong: 'Wie sagen man „bread“?', right: 'Wie sagt man „bread“?', why: 'man takes the er/sie/es form: sagt.', whyFr: 'man prend la forme er/sie/es : sagt.' },
        { wrong: 'Was bedeuten „Tschüss“?', right: 'Was bedeutet „Tschüss“?', why: 'One word: bedeutet.', whyFr: 'Un seul mot : bedeutet.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l21-e5', prompt: 'How do you ask for the German word for “bread”?', promptFr: 'Comment demande-t-on le mot allemand pour « bread » ?', options: ['Wie sagt man „bread“ auf Deutsch?', 'Wie schreibt man „bread“?', 'Was bedeutet „bread“?'], answer: 0, explain: '“auf Deutsch” asks for the German word.', explainFr: '« auf Deutsch » demande le mot allemand.', hint: 'You want to say it in German.', hintFr: 'Tu veux le dire en allemand.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l21-e6', prompt: 'Wie ___ man das? (to spell)', promptFr: 'Wie ___ man das ? (épeler)', answer: 'schreibt', hint: 'man takes the er-form', hintFr: 'man prend la forme er' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l21-e7', pairs: [{ de: 'Wie sagt man …?', en: 'How do you say …?', fr: 'Comment dit-on … ?' }, { de: 'Was bedeutet …?', en: 'What does … mean?', fr: 'Que signifie … ?' }, { de: 'Wie schreibt man das?', en: 'How do you spell that?', fr: 'Comment ça s’écrit ?' }], hint: 'Match the question to its meaning.', hintFr: 'Associe la question à son sens.' } },

    // ───────────── 3 · Thanks and sorry ─────────────
    { kind: 'chapter', title: 'Danke, bitte, Entschuldigung', titleFr: 'Merci, s’il vous plaît, pardon', blurb: 'The small words that make you polite.', blurbFr: 'Les petits mots qui te rendent poli.' },

    { kind: 'situation', title: 'Auf der Straße', titleFr: 'Dans la rue',
      setting: 'Nicole bumps into a man and then asks him for help.', settingFr: 'Nicole bouscule un homme puis lui demande de l’aide.',
      lines: [
        line('Nicole', 'Oh, Entschuldigung! Es tut mir leid.', 'Oh, excuse me! I am sorry.', 'Oh, excusez-moi ! Je suis désolée.'),
        line('Mann', 'Kein Problem. Alles in Ordnung?', 'No problem. Is everything all right?', 'Pas de problème. Tout va bien ?'),
        line('Nicole', 'Ja, danke. Können Sie mir bitte helfen? Wo ist die Post?', 'Yes, thanks. Can you please help me? Where is the post office?', 'Oui, merci. Pouvez-vous m’aider, s’il vous plaît ? Où est la poste ?'),
        line('Mann', 'Gern! Die Post ist dort rechts.', 'Gladly! The post office is over there on the right.', 'Volontiers ! La poste est là-bas à droite.'),
        line('Nicole', 'Vielen Dank!', 'Thank you very much!', 'Merci beaucoup !'),
        line('Mann', 'Bitte schön!', 'You’re welcome!', 'Je vous en prie !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l21-e13', prompt: 'Where is the post office?', promptFr: 'Où est la poste ?', options: ['On the right', 'On the left', 'Straight ahead'], optionsFr: ['À droite', 'À gauche', 'Tout droit'], answer: 0, explain: 'The man says: “Die Post ist dort rechts.”', explainFr: 'L’homme dit : « Die Post ist dort rechts. »', hint: 'Listen for “rechts”.', hintFr: 'Cherche « rechts ».' } },

    { kind: 'wordgroup', title: 'Höflichkeit', titleFr: 'La politesse',
      items: [
        word('l21-entschuldigung', 'Entschuldigung', null, 'Excuse me / Sorry', 'Excusez-moi / Pardon', ['ent', 'SCHUL', 'di', 'gung'], 'ent-SHOOL-dee-goong', g('Entschuldigung, wo ist die Post?', 'Excuse me, where is the post office?', 'Excusez-moi, où est la poste ?')),
        word('l21-tutmirleid', 'Es tut mir leid.', null, 'I am sorry.', 'Je suis désolé(e).', ['ES', 'TUT', 'mir', 'LEID'], 'es toot meer LITE', g('Es tut mir leid, ich verstehe nicht.', 'I am sorry, I don’t understand.', 'Je suis désolé, je ne comprends pas.')),
        word('l21-keinproblem', 'Kein Problem.', null, 'No problem.', 'Pas de problème.', ['KEIN', 'Pro', 'BLEM'], 'kine pro-BLAYM', g('Kein Problem, das macht nichts.', 'No problem, it doesn’t matter.', 'Pas de problème, ce n’est pas grave.')),
        word('l21-vielendank', 'Vielen Dank!', null, 'Thank you very much!', 'Merci beaucoup !', ['VIE', 'len', 'DANK'], 'FEE-len DAHNK', g('Vielen Dank für die Hilfe!', 'Thank you very much for the help!', 'Merci beaucoup pour l’aide !')),
        word('l21-bitteschoen', 'Bitte schön!', null, 'You’re welcome!', 'Je vous en prie !', ['BIT', 'te', 'SCHÖN'], 'BIT-uh SHERN', g('Danke! – Bitte schön!', 'Thanks! – You’re welcome!', 'Merci ! – Je vous en prie !')),
      ] },

    { kind: 'grammar', note: {
      id: 'l21-hoeflichkeit', title: 'Thanking and apologising', titleFr: 'Remercier et s’excuser',
      lead: 'Every thank-you and every sorry has a fixed reply. Learn them in pairs.',
      leadFr: 'Chaque merci et chaque pardon a une réponse fixe. Apprends-les par paires.',
      explanationMd: 'Politeness in German comes in **pairs**: **Danke** → **Bitte**, **Entschuldigung** → **Kein Problem**. **bitte** has **two** jobs: “please” when you ask, “you’re welcome” when you reply. **Entschuldigung** gets attention or apologises for something small; **Es tut mir leid** is a real “I am sorry”.',
      explanationMdFr: 'La politesse allemande fonctionne par **paires** : **Danke** → **Bitte**, **Entschuldigung** → **Kein Problem**. **bitte** a **deux** emplois : « s’il vous plaît » quand tu demandes, « de rien » quand tu réponds. **Entschuldigung** attire l’attention ou s’excuse d’un petit tort ; **Es tut mir leid** est un vrai « je suis désolé ».',
      tables: [{ title: 'Pairs of phrases', titleFr: 'Paires de phrases', headers: ['You say', 'The reply'], headersFr: ['Tu dis', 'La réponse'],
        rows: [['Danke! / Vielen Dank!', 'Bitte! / Bitte schön! / Gern geschehen!'], ['Entschuldigung!', 'Kein Problem. / Das macht nichts.'], ['Es tut mir leid.', 'Schon gut. / Kein Problem.'], ['Können Sie mir helfen?', 'Gern! / Natürlich!']],
        rowsFr: [['Danke ! / Vielen Dank !', 'Bitte ! / Bitte schön ! / Gern geschehen !'], ['Entschuldigung !', 'Kein Problem. / Das macht nichts.'], ['Es tut mir leid.', 'Schon gut. / Kein Problem.'], ['Können Sie mir helfen ?', 'Gern ! / Natürlich !']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Können', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'mir', role: 'dative' }, { text: 'bitte', role: 'connector' }, { text: 'helfen?', role: 'verb' }], en: 'Can you please help me?', fr: 'Pouvez-vous m’aider, s’il vous plaît ?' },
        { parts: [{ text: 'Es', role: 'subject' }, { text: 'tut', role: 'verb' }, { text: 'mir', role: 'dative' }, { text: 'leid.', role: 'other' }], en: 'I am sorry.', fr: 'Je suis désolé.' },
      ],
      contrast: {
        a: { label: 'Entschuldigung', labelFr: 'Entschuldigung', note: 'excuse me: to get attention, small slips', noteFr: 'excusez-moi : pour attirer l’attention, petites erreurs', examples: [g('Entschuldigung, wo ist die Post?', 'Excuse me, where is the post office?', 'Excusez-moi, où est la poste ?'), g('Oh, Entschuldigung!', 'Oh, sorry!', 'Oh, pardon !')] },
        b: { label: 'Es tut mir leid', labelFr: 'Es tut mir leid', note: 'I am truly sorry', noteFr: 'je suis vraiment désolé', examples: [g('Es tut mir leid, ich komme zu spät.', 'I am sorry, I am late.', 'Je suis désolé, je suis en retard.'), g('Es tut mir leid, ich verstehe nicht.', 'I am sorry, I don’t understand.', 'Je suis désolé, je ne comprends pas.')] },
      },
      examples: [
        g('Entschuldigung, wo ist die Post?', 'Excuse me, where is the post office?', 'Excusez-moi, où est la poste ?'),
        g('Es tut mir leid, ich verstehe nicht.', 'I am sorry, I don’t understand.', 'Je suis désolé, je ne comprends pas.'),
        g('Danke! – Bitte schön!', 'Thanks! – You’re welcome!', 'Merci ! – Je vous en prie !'),
        g('Vielen Dank für die Hilfe!', 'Thank you very much for the help!', 'Merci beaucoup pour l’aide !'),
        g('Kein Problem, das macht nichts.', 'No problem, it doesn’t matter.', 'Pas de problème, ce n’est pas grave.'),
        g('Können Sie mir bitte helfen?', 'Can you please help me?', 'Pouvez-vous m’aider, s’il vous plaît ?'),
        g('Ein Wasser, bitte. – Gern!', 'A water, please. – Gladly!', 'Une eau, s’il vous plaît. – Volontiers !'),
      ],
      mistakes: [
        { wrong: 'Danke! – Danke.', right: 'Danke! – Bitte.', why: 'Answer a thank-you with bitte.', whyFr: 'Réponds à un merci par bitte.' },
        { wrong: 'Ich bin leid.', right: 'Es tut mir leid.', why: 'Es tut mir leid is a fixed phrase.', whyFr: 'Es tut mir leid est une expression figée.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l21-e8', prompt: 'Someone says “Danke!”. What do you answer?', promptFr: 'Quelqu’un dit « Danke ! ». Que réponds-tu ?', options: ['Bitte schön!', 'Entschuldigung!', 'Wie bitte?'], answer: 0, explain: 'The answer to thanks is “Bitte (schön)”.', explainFr: 'La réponse à un merci est « Bitte (schön) ».', hint: 'It is the polite reply to thanks.', hintFr: 'C’est la réponse polie à un merci.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l21-e9', prompt: 'You bump into someone. What do you say?', promptFr: 'Tu bouscules quelqu’un. Que dis-tu ?', options: ['Entschuldigung!', 'Vielen Dank!', 'Guten Tag!'], answer: 0, explain: '“Entschuldigung” is the quick apology.', explainFr: '« Entschuldigung » est l’excuse rapide.', hint: 'A small, quick sorry.', hintFr: 'Un petit pardon rapide.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l21-e10', prompt: 'Listen. How does the man react?', promptFr: 'Écoute. Comment l’homme réagit-il ?', audio: { ttsText: 'Kein Problem. Das macht nichts.' }, options: ['He says it is no problem', 'He is angry', 'He asks for money'], optionsFr: ['Il dit que ce n’est pas grave', 'Il est en colère', 'Il demande de l’argent'], answer: 0, hint: 'Kein Problem.', hintFr: 'Kein Problem.' } },

    { kind: 'wrapup',
      summary: 'You can now say when you do not understand (**Wie bitte? Ich verstehe nicht. Langsamer, bitte.**), ask about words (**Wie sagt man …? Was bedeutet …?**), and thank and apologise politely. 🎉',
      summaryFr: 'Tu sais maintenant dire que tu ne comprends pas (**Wie bitte ? Ich verstehe nicht. Langsamer, bitte.**), poser des questions sur les mots (**Wie sagt man … ? Was bedeutet … ?**), et remercier et t’excuser poliment. 🎉',
      card: { title: 'Survival phrases on one page', titleFr: 'Les phrases de survie en une page', sections: [
        { heading: 'I do not understand', headingFr: 'Je ne comprends pas', rows: [g('Wie bitte?', 'Pardon?', 'Pardon ?'), g('Ich verstehe nicht.', 'I don’t understand.', 'Je ne comprends pas.'), g('Langsamer, bitte. / Noch einmal, bitte.', 'Slower / once more, please', 'Plus lentement / encore une fois'), g('Können Sie das wiederholen?', 'Can you repeat that?', 'Pouvez-vous répéter ?')] },
        { heading: 'Words', headingFr: 'Les mots', rows: [g('Wie sagt man … auf Deutsch?', 'How do you say … in German?', 'Comment dit-on … en allemand ?'), g('Was bedeutet …?', 'What does … mean?', 'Que signifie … ?'), g('Wie schreibt man das?', 'How do you spell that?', 'Comment ça s’écrit ?')] },
        { heading: 'Polite pairs', headingFr: 'Paires polies', rows: [g('Danke! – Bitte schön!', 'thanks – you’re welcome', 'merci – je vous en prie'), g('Entschuldigung! – Kein Problem.', 'excuse me – no problem', 'excusez-moi – pas de problème'), g('Es tut mir leid. – Schon gut.', 'I am sorry – it’s fine', 'je suis désolé – ce n’est rien')] },
      ] } },
  ],
};
