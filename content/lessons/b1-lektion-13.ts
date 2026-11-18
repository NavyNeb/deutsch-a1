import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion13: Lesson = {
  id: 'b1-l13', level: 'B1', module: 1, number: 2,
  title: { de: 'Adjektive als Nomen', en: 'Adjectives as nouns', fr: 'Adjectifs employés comme noms' },
  theme: 'Adjectives and participles used as nouns, and the n-declension', themeFr: 'Adjectifs et participes employés comme noms, et la déclinaison en -n',
  goals: ['Use adjectives as nouns (der Deutsche, ein Bekannter, das Beste)', 'Decline participles used as nouns (der Angestellte, die Reisenden)', 'Recognise and decline n-declension nouns (den Kollegen, dem Nachbarn)', 'Describe people and character, and soften or strengthen statements'], goalsFr: ['Employer des adjectifs comme noms (der Deutsche, ein Bekannter, das Beste)', 'Décliner des participes employés comme noms (der Angestellte, die Reisenden)', 'Reconnaître et décliner les noms en déclinaison en -n (den Kollegen, dem Nachbarn)', 'Décrire des personnes et leur caractère, et nuancer ou renforcer une affirmation'],
  canDo: g('Ich kann Menschen mit Adjektiven und Partizipien als Nomen beschreiben und die n-Deklination richtig verwenden.', 'I can describe people with adjectives and participles used as nouns and use the n-declension correctly.', 'Je sais décrire des personnes avec des adjectifs et des participes substantivés et utiliser correctement la déclinaison en -n.'),
  steps: [
    { kind: 'intro', title: 'Menschen und Wörter 👥', titleFr: 'Personnes et mots 👥',
      scene: 'Lara introduces her new team: an acquaintance, an employee, a colleague, an intern — and each word has its own declension.', sceneFr: 'Lara présente sa nouvelle équipe : une connaissance, un employé, un collègue, un stagiaire — et chaque mot a sa propre déclinaison.',
      goals: ['Use adjectives as nouns (der Deutsche, ein Bekannter)', 'Decline participles used as nouns (der Angestellte, die Reisenden)', 'Recognise and decline n-declension nouns (den Kollegen, dem Nachbarn)'],
      goalsFr: ['Utiliser des adjectifs comme noms (der Deutsche, ein Bekannter)', 'Décliner des participes substantivés (der Angestellte, die Reisenden)', 'Reconnaître et décliner les noms de la déclinaison en -n (den Kollegen, dem Nachbarn)'] },

    // ───────────── 1 · Adjectives as nouns ─────────────
    { kind: 'chapter', title: 'Adjektive als Nomen', titleFr: 'Adjectifs substantivés', blurb: 'der Deutsche, ein Bekannter, das Beste.', blurbFr: 'der Deutsche, ein Bekannter, das Beste.' },

    { kind: 'situation', title: 'Ein Bekannter und ein Deutscher', titleFr: 'Une connaissance et un Allemand',
      setting: 'Lara tells Tim about the people she has met.', settingFr: 'Lara raconte à Tim les personnes qu’elle a rencontrées.',
      lines: [
        line('Lara', 'Ein Bekannter hat mir den Job empfohlen. Gestern habe ich einen Bekannten getroffen. Er ist ziemlich hilfsbereit.', 'An acquaintance recommended the job to me. Yesterday I met an acquaintance. He is quite helpful.', 'Une connaissance m’a recommandé le travail. Hier, j’ai rencontré une connaissance. Il est assez serviable.'),
        line('Tim', 'Und wer wohnt neben dir?', 'And who lives next to you?', 'Et qui habite à côté de toi ?'),
        line('Lara', 'Ein Deutscher wohnt neben mir. Der Deutsche spricht Französisch. Meine Verwandten wohnen in Hamburg.', 'A German lives next to me. The German speaks French. My relatives live in Hamburg.', 'Un Allemand habite à côté de moi. L’Allemand parle français. Mes proches habitent à Hambourg.'),
        line('Tim', 'Die Jugendlichen treffen sich im Park. Kinder und Erwachsene sind willkommen.', 'The teenagers meet in the park. Children and adults are welcome.', 'Les adolescents se retrouvent au parc. Enfants et adultes sont les bienvenus.'),
        line('Lara', 'Ihr seid die Besten! Das Beste kommt noch. Hast du etwas Neues gehört?', 'You are the best! The best is yet to come. Have you heard anything new?', 'Vous êtes les meilleurs ! Le meilleur reste à venir. As-tu entendu quelque chose de nouveau ?'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l13-e14', prompt: 'Who recommended the job to Lara?', promptFr: 'Qui a recommandé le travail à Lara ?', options: ['An acquaintance', 'A relative', 'A neighbour'], optionsFr: ['Une connaissance', 'Un parent', 'Un voisin'], answer: 0, explain: 'She says: “Ein Bekannter hat mir den Job empfohlen.”', explainFr: 'Elle dit : « Ein Bekannter hat mir den Job empfohlen. »', hint: 'Look at the first line.', hintFr: 'Regarde la première réplique.' } },

    { kind: 'wordgroup', title: 'Menschen', titleFr: 'Les personnes',
      items: [{ id: 'b1l13-bekannte', german: 'der Bekannte', english: 'the acquaintance (m)', french: 'la connaissance (m)', gender: 'der', syllables: ['Be', 'KANN', 'te'], pronunciation: 'dair be-KAHN-teh', example: { de: 'Ein Bekannter hat mir den Job empfohlen.', en: 'An acquaintance recommended the job to me.', fr: 'Une connaissance m’a recommandé ce poste.' } }, { id: 'b1l13-deutsche', german: 'der Deutsche', english: 'the German (m)', french: 'l’Allemand', gender: 'der', syllables: ['DEUT', 'sche'], pronunciation: 'dair DOY-cheh', example: { de: 'Ein Deutscher wohnt neben mir.', en: 'A German lives next door to me.', fr: 'Un Allemand habite à côté de chez moi.' } }, { id: 'b1l13-erwachsene', german: 'der Erwachsene', english: 'the adult (m)', french: 'l’adulte', gender: 'der', syllables: ['Er', 'WACH', 'se', 'ne'], pronunciation: 'dair air-VAHK-seh-neh', example: { de: 'Kinder und Erwachsene sind willkommen.', en: 'Children and adults are welcome.', fr: 'Enfants et adultes sont les bienvenus.' } }, { id: 'b1l13-jugendliche', german: 'der Jugendliche', english: 'the teenager (m)', french: 'l’adolescent', gender: 'der', syllables: ['JU', 'gend', 'li', 'che'], pronunciation: 'dair YOO-gent-lee-kheh', example: { de: 'Die Jugendlichen treffen sich im Park.', en: 'The teenagers meet in the park.', fr: 'Les adolescents se retrouvent au parc.' } }, { id: 'b1l13-verwandte', german: 'der Verwandte', english: 'the relative (m)', french: 'le parent (membre de la famille)', gender: 'der', syllables: ['Ver', 'WAND', 'te'], pronunciation: 'dair fair-VAHN-teh', example: { de: 'Meine Verwandten wohnen in Hamburg.', en: 'My relatives live in Hamburg.', fr: 'Mes parents (ma famille) habitent à Hambourg.' } }, { id: 'b1l13-beste', german: 'der / die / das Beste', english: 'the best (one)', french: 'le meilleur / la meilleure / le mieux', gender: null, syllables: ['BES', 'te'], pronunciation: 'BESS-teh', example: { de: 'Ihr seid die Besten!', en: 'You are the best!', fr: 'Vous êtes les meilleurs !' } }] },

    { kind: 'grammar', note: {
      id: 'b1l13-adj-nomen', title: 'Adjectives used as nouns', titleFr: 'Adjectifs employés comme noms',
      lead: 'Capitalise the adjective but keep the adjective endings: der Deutsche, ein Deutscher, den Deutschen.',
      leadFr: 'Mets une majuscule à l’adjectif mais garde les terminaisons d’adjectif : der Deutsche, ein Deutscher, den Deutschen.',
      explanationMd: 'Many **adjectives** can be used as **nouns**: **capitalise** them but keep the **normal adjective endings** — the ending shows **case and gender**: **der Deutsche · ein Deutscher · den Deutschen · dem Deutschen**; feminine **die Deutsche · eine Deutsche · der Deutschen**; plural **die Deutschen · (viele) Deutsche**. The same works for **der Bekannte, der Kranke, der Fremde, der Verwandte, der Jugendliche**. **Neuter and abstract:** **das Beste, das Neue, das Wichtige**; after **etwas, nichts, viel, alles**: **etwas Neues, nichts Besonderes, viel Gutes, alles Gute**. The **superlative as noun**: **Ihr seid die Besten!**',
      explanationMdFr: 'Beaucoup d’**adjectifs** peuvent s’employer comme **noms** : mets-leur une **majuscule** mais garde les **terminaisons normales d’adjectif** — la terminaison montre le **cas et le genre** : **der Deutsche · ein Deutscher · den Deutschen · dem Deutschen** ; féminin **die Deutsche · eine Deutsche · der Deutschen** ; pluriel **die Deutschen · (viele) Deutsche**. Cela marche aussi pour **der Bekannte, der Kranke, der Fremde, der Verwandte, der Jugendliche**. **Neutre et abstrait :** **das Beste, das Neue, das Wichtige** ; après **etwas, nichts, viel, alles** : **etwas Neues, nichts Besonderes, viel Gutes, alles Gute**. Le **superlatif substantivé** : **Ihr seid die Besten !**',
      tables: [{ title: 'der Deutsche', titleFr: 'der Deutsche', headers: ['Case', 'm (after der)', 'm (after ein)', 'f (after die / eine)', 'plural'], headersFr: ['Cas', 'm (après der)', 'm (après ein)', 'f (après die / eine)', 'pluriel'],
        rows: [['Nominative', 'der Deutsche', 'ein Deutscher', 'die / eine Deutsche', 'die Deutschen'], ['Accusative', 'den Deutschen', 'einen Deutschen', 'die / eine Deutsche', 'die Deutschen'], ['Dative', 'dem Deutschen', 'einem Deutschen', 'der / einer Deutschen', 'den Deutschen']],
        rowsFr: [['Nominatif', 'der Deutsche', 'ein Deutscher', 'die / eine Deutsche', 'die Deutschen'], ['Accusatif', 'den Deutschen', 'einen Deutschen', 'die / eine Deutsche', 'die Deutschen'], ['Datif', 'dem Deutschen', 'einem Deutschen', 'der / einer Deutschen', 'den Deutschen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ein Bekannter', role: 'subject' }, { text: 'hat', role: 'verb' }, { text: 'mir', role: 'dative' }, { text: 'den Job', role: 'accusative' }, { text: 'empfohlen.', role: 'verb' }], en: 'An acquaintance recommended the job to me.', fr: 'Une connaissance m’a recommandé le travail.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'spreche', role: 'verb' }, { text: 'mit einer Bekannten.', role: 'dative' }], en: 'I am talking to a (female) acquaintance.', fr: 'Je parle avec une connaissance.' },
      ],
      contrast: {
        a: { label: 'Adjective', labelFr: 'Adjectif', note: 'before a noun', noteFr: 'devant un nom', examples: [g('Das ist ein deutscher Freund.', 'That is a German friend.', 'C’est un ami allemand.'), g('Das ist das beste Team.', 'That is the best team.', 'C’est la meilleure équipe.')] },
        b: { label: 'Noun', labelFr: 'Nom', note: 'capitalised, same ending', noteFr: 'majuscule, même terminaison', examples: [g('Das ist ein Deutscher.', 'That is a German.', 'C’est un Allemand.'), g('Ihr seid die Besten!', 'You are the best!', 'Vous êtes les meilleurs !')] },
      },
      examples: [
        g('Ein Bekannter von mir arbeitet bei Siemens.', 'An acquaintance of mine works at Siemens.', 'Une connaissance à moi travaille chez Siemens.'),
        g('Ich spreche gerade mit einer Bekannten.', 'I’m just talking to a (female) acquaintance.', 'Je parle justement avec une connaissance.'),
        g('Das Beste kommt noch.', 'The best is yet to come.', 'Le meilleur reste à venir.'),
        g('Hast du etwas Neues gehört?', 'Have you heard anything new?', 'As-tu entendu quelque chose de nouveau ?'),
        g('Kinder und Erwachsene sind willkommen.', 'Children and adults are welcome.', 'Enfants et adultes sont les bienvenus.'),
        g('Ihr seid die Besten!', 'You are the best!', 'Vous êtes les meilleurs !'),
      ],
      mistakes: [
        { wrong: 'Ich kenne einen Deutsche.', right: 'Ich kenne einen Deutschen.', why: 'Masculine accusative after ein: -en.', whyFr: 'Masculin accusatif après ein : -en.' },
        { wrong: 'Ein Bekannte hat mir geholfen.', right: 'Ein Bekannter hat mir geholfen.', why: 'After ein the masculine nominative needs -er.', whyFr: 'Après ein, le masculin nominatif demande -er.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l13-e1', prompt: 'Das ist Jonas, ein ___ von mir. (bekannt → noun, nominative)', promptFr: 'Das ist Jonas, ein ___ von mir. (bekannt → nom, nominatif)', answer: 'Bekannter', hint: 'After "ein", masculine nominative: -er', hintFr: 'Après « ein », masculin au nominatif : -er' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l13-e3', prompt: 'Er spricht mit einem ___.', promptFr: 'Er spricht mit einem ___. (un Allemand)', options: ['Deutsche', 'Deutschen', 'Deutscher'], answer: 1, explain: 'mit + dative, masculine after "einem": Deutschen.', explainFr: 'mit + datif, masculin après « einem » : Deutschen.', hint: 'Dative masculine singular ends in -en.', hintFr: 'Le datif masculin singulier se termine en -en.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l13-e5', pairs: [{ de: 'der Jugendliche', en: 'the teenager', fr: 'l’adolescent' }, { de: 'der Verwandte', en: 'the relative', fr: 'le parent' }, { de: 'der Erwachsene', en: 'the adult', fr: 'l’adulte' }, { de: 'der Angestellte', en: 'the employee', fr: 'l’employé' }], hint: 'Match each person noun to its meaning.', hintFr: 'Associe chaque nom de personne à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l13-e11', prompt: 'Ihr seid die ___! (gut → superlative noun, plural)', promptFr: 'Ihr seid die ___ ! (gut → superlatif employé comme nom, pluriel)', answer: 'Besten', hint: 'After "die" in the plural: -en', hintFr: 'Après « die » au pluriel : -en' } },

    // ───────────── 2 · Participles as nouns ─────────────
    { kind: 'chapter', title: 'Partizipien als Nomen', titleFr: 'Participes substantivés', blurb: 'der Angestellte, die Reisenden.', blurbFr: 'der Angestellte, die Reisenden.' },

    { kind: 'situation', title: 'Im Büro', titleFr: 'Au bureau',
      setting: 'Lara asks an employee for help at the station and at work.', settingFr: 'Lara demande de l’aide à un employé à la gare et au travail.',
      lines: [
        line('Lara', 'Der Angestellte erklärt uns den Vertrag. Ich frage einen Angestellten nach dem Weg.', 'The employee explains the contract to us. I ask an employee for directions.', 'L’employé nous explique le contrat. Je demande mon chemin à un employé.'),
        line('Tim', 'Die Reisenden warten am Gleis. Wir haben drei neue Angestellte.', 'The travellers are waiting on the platform. We have three new employees.', 'Les voyageurs attendent sur le quai. Nous avons trois nouveaux employés.'),
        line('Lara', 'Ich kenne den neuen Angestellten noch nicht. Er ist der Vorgesetzte von Anna.', 'I don’t know the new employee yet. He is Anna’s boss.', 'Je ne connais pas encore le nouvel employé. C’est le supérieur d’Anna.'),
      ],
      words: [{ id: 'b1l13-angestellte', german: 'der Angestellte', english: 'the employee (m)', french: 'l’employé', gender: 'der', syllables: ['AN', 'ge', 'stell', 'te'], pronunciation: 'dair AHN-ge-shtell-teh', example: { de: 'Der Angestellte erklärt uns den Vertrag.', en: 'The employee explains the contract to us.', fr: 'L’employé nous explique le contrat.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l13-partizip-nomen', title: 'Participles used as nouns', titleFr: 'Participes employés comme noms',
      lead: 'The past participle and the present participle (verb + -d) become nouns with adjective endings.',
      leadFr: 'Le participe passé et le participe présent (verbe + -d) deviennent des noms avec des terminaisons d’adjectif.',
      explanationMd: 'Participles behave the same way: the **past participle** and the **present participle** (**verb + -d**) become nouns with **adjective endings**: **angestellt → der Angestellte · die Angestellte · die Angestellten**; **reisen → reisend → der Reisende · die Reisenden**; **studieren → der / die Studierende**; **vorgesetzt → der Vorgesetzte**. The **endings follow the article**: **der Angestellte, ein Angestellter, den Angestellten, mit dem Angestellten**. **Plural without article**: **drei neue Angestellte**. In the **feminine** the noun is the **same word**: only the **article** shows the gender (**der / die Angestellte**).',
      explanationMdFr: 'Les participes se comportent de la même façon : le **participe passé** et le **participe présent** (**verbe + -d**) deviennent des noms avec des **terminaisons d’adjectif** : **angestellt → der Angestellte · die Angestellte · die Angestellten** ; **reisen → reisend → der Reisende · die Reisenden** ; **studieren → der / die Studierende** ; **vorgesetzt → der Vorgesetzte**. Les **terminaisons suivent l’article** : **der Angestellte, ein Angestellter, den Angestellten, mit dem Angestellten**. **Pluriel sans article** : **drei neue Angestellte**. Au **féminin**, le nom est le **même mot** : seul l’**article** montre le genre (**der / die Angestellte**).',
      tables: [{ title: 'Participles as nouns', titleFr: 'Participes substantivés', headers: ['Verb', 'Participle', 'Noun (m / f / pl.)'], headersFr: ['Verbe', 'Participe', 'Nom (m / f / pl.)'],
        rows: [['anstellen', 'angestellt', 'der Angestellte · die Angestellte · die Angestellten'], ['reisen', 'reisend', 'der Reisende · die Reisende · die Reisenden'], ['studieren', 'studierend', 'der Studierende · die Studierende · die Studierenden'], ['vorsetzen', 'vorgesetzt', 'der Vorgesetzte · die Vorgesetzte']],
        rowsFr: [['anstellen', 'angestellt', 'der Angestellte · die Angestellte · die Angestellten'], ['reisen', 'reisend', 'der Reisende · die Reisende · die Reisenden'], ['studieren', 'studierend', 'der Studierende · die Studierende · die Studierenden'], ['vorsetzen', 'vorgesetzt', 'der Vorgesetzte · die Vorgesetzte']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Der Angestellte', role: 'subject' }, { text: 'öffnet', role: 'verb' }, { text: 'die Tür.', role: 'accusative' }], en: 'The employee opens the door.', fr: 'L’employé ouvre la porte.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'frage', role: 'verb' }, { text: 'einen Angestellten', role: 'accusative' }, { text: 'nach dem Weg.', role: 'other' }], en: 'I ask an employee for directions.', fr: 'Je demande mon chemin à un employé.' },
      ],
      contrast: {
        a: { label: 'With article', labelFr: 'Avec article', note: 'der Angestellte', noteFr: 'der Angestellte', examples: [g('Der Angestellte öffnet die Tür.', 'The employee opens the door.', 'L’employé ouvre la porte.'), g('Die Reisenden warten am Gleis.', 'The travellers wait on the platform.', 'Les voyageurs attendent sur le quai.')] },
        b: { label: 'Without article (plural)', labelFr: 'Sans article (pluriel)', note: 'drei Angestellte', noteFr: 'drei Angestellte', examples: [g('Wir haben drei neue Angestellte.', 'We have three new employees.', 'Nous avons trois nouveaux employés.'), g('Viele Reisende warten.', 'Many travellers are waiting.', 'Beaucoup de voyageurs attendent.')] },
      },
      examples: [
        g('Der Angestellte öffnet die Tür.', 'The employee opens the door.', 'L’employé ouvre la porte.'),
        g('Ich frage einen Angestellten nach dem Weg.', 'I ask an employee for directions.', 'Je demande mon chemin à un employé.'),
        g('Die Reisenden warten am Gleis.', 'The travellers are waiting on the platform.', 'Les voyageurs attendent sur le quai.'),
        g('Wir haben drei neue Angestellte.', 'We have three new employees.', 'Nous avons trois nouveaux employés.'),
        g('Er ist der Vorgesetzte von Anna.', 'He is Anna’s boss.', 'C’est le supérieur d’Anna.'),
        g('Alle Studierenden müssen sich anmelden.', 'All students have to register.', 'Tous les étudiants doivent s’inscrire.'),
      ],
      mistakes: [
        { wrong: 'Ich kenne den neuen Angestellter.', right: 'Ich kenne den neuen Angestellten.', why: 'Masculine accusative: -en.', whyFr: 'Masculin accusatif : -en.' },
        { wrong: 'Die Reisende warten am Gleis.', right: 'Die Reisenden warten am Gleis.', why: 'Plural after die: -n.', whyFr: 'Pluriel après die : -n.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l13-e2', prompt: 'Ich kenne den neuen ___ nicht. (der Angestellte, accusative)', promptFr: 'Ich kenne den neuen ___ nicht. (der Angestellte, accusatif)', answer: 'Angestellten', hint: 'After "den … neuen": -en', hintFr: 'Après « den … neuen » : -en' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l13-e12', prompt: 'Die ___ warten am Gleis. (reisend → noun, plural)', promptFr: 'Die ___ warten am Gleis. (reisend → nom, pluriel)', options: ['Reisende', 'Reisenden', 'Reisender'], answer: 1, explain: 'After "die" in the plural, the ending is -en: die Reisenden.', explainFr: 'Après « die » au pluriel, la terminaison est -en : die Reisenden.', hint: 'Plural with article → -en.', hintFr: 'Pluriel avec article → -en.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l13-e10', prompt: 'Listen. What is the best thing about the team?', promptFr: 'Écoute. Quel est le meilleur aspect de l’équipe ?', audio: { ttsText: 'Das Beste an unserem Team ist: Wir helfen uns immer.' }, options: ['They always help each other', 'The high salary', 'The modern office'], optionsFr: ['Ils s’entraident toujours', 'Le salaire élevé', 'Le bureau moderne'], answer: 0, hint: 'Listen after the colon.', hintFr: 'Écoute ce qui vient après les deux-points.' } },

    // ───────────── 3 · n-declension ─────────────
    { kind: 'chapter', title: 'Die n-Deklination', titleFr: 'La déclinaison en -n', blurb: 'der Kollege → den Kollegen.', blurbFr: 'der Kollege → den Kollegen.' },

    { kind: 'situation', title: 'Kollegen und Nachbarn', titleFr: 'Collègues et voisins',
      setting: 'Lara introduces her colleagues, her neighbour and the intern.', settingFr: 'Lara présente ses collègues, son voisin et le stagiaire.',
      lines: [
        line('Lara', 'Ich kenne den neuen Kollegen noch nicht. Mein Kollege ist zuverlässig, ehrlich und gar nicht nervös.', 'I don’t know the new colleague yet. My colleague is reliable, honest and not at all nervous.', 'Je ne connais pas encore le nouveau collègue. Mon collègue est fiable, honnête et pas du tout nerveux.'),
        line('Tim', 'Wir helfen unserem Nachbarn oft. Die Firma sucht einen Praktikanten. Wir fragen den Praktikanten um Hilfe.', 'We often help our neighbour. The company is looking for an intern. We ask the intern for help.', 'Nous aidons souvent notre voisin. L’entreprise cherche un stagiaire. Nous demandons de l’aide au stagiaire.'),
        line('Lara', 'Jeder Mensch braucht gute Freunde. Sie ist ein sehr offener Mensch und der netteste Mensch im Team.', 'Everyone needs good friends. She is a very open person and the nicest person in the team.', 'Chaque personne a besoin de bons amis. Elle est une personne très ouverte et la plus sympathique de l’équipe.'),
      ],
      words: [{ id: 'b1l13-kollege', german: 'der Kollege', english: 'the colleague (m)', french: 'le collègue', gender: 'der', syllables: ['Kol', 'LE', 'ge'], pronunciation: 'dair koh-LAY-geh', example: { de: 'Ich kenne den neuen Kollegen noch nicht.', en: 'I don’t know the new colleague yet.', fr: 'Je ne connais pas encore le nouveau collègue.' } }, { id: 'b1l13-nachbar', german: 'der Nachbar', english: 'the neighbour (m)', french: 'le voisin', gender: 'der', syllables: ['NACH', 'bar'], pronunciation: 'dair NAHKH-bar', example: { de: 'Wir helfen unserem Nachbarn oft.', en: 'We often help our neighbour.', fr: 'Nous aidons souvent notre voisin.' } }, { id: 'b1l13-mensch', german: 'der Mensch', english: 'the human being / person', french: 'l’être humain / la personne', gender: 'der', syllables: ['MENSCH'], pronunciation: 'dair mench', example: { de: 'Sie ist ein sehr offener Mensch.', en: 'She is a very open person.', fr: 'C’est une personne très ouverte.' } }, { id: 'b1l13-praktikant', german: 'der Praktikant', english: 'the intern (m)', french: 'le stagiaire', gender: 'der', syllables: ['Prak', 'ti', 'KANT'], pronunciation: 'dair prahk-tee-KAHNT', example: { de: 'Wir fragen den Praktikanten um Hilfe.', en: 'We ask the intern for help.', fr: 'Nous demandons de l’aide au stagiaire.' } }] },

    { kind: 'wordgroup', title: 'Charakter', titleFr: 'Caractère',
      items: [{ id: 'b1l13-hilfsbereit', german: 'hilfsbereit', english: 'helpful / ready to help', french: 'serviable', gender: null, syllables: ['HILFS', 'be', 'reit'], pronunciation: 'HILFS-beh-rite', example: { de: 'Unser Team ist total hilfsbereit.', en: 'Our team is totally helpful.', fr: 'Notre équipe est vraiment serviable.' } }, { id: 'b1l13-zuverlaessig', german: 'zuverlässig', english: 'reliable', french: 'fiable', gender: null, syllables: ['ZU', 'ver', 'läs', 'sig'], pronunciation: 'TSOO-fair-less-ikh', example: { de: 'Er ist ehrlich und zuverlässig.', en: 'He is honest and reliable.', fr: 'Il est honnête et fiable.' } }, { id: 'b1l13-ziemlich', german: 'ziemlich', english: 'quite / fairly', french: 'assez / plutôt', gender: null, syllables: ['ZIEM', 'lich'], pronunciation: 'TSEEM-likh', example: { de: 'Die Präsentation war ziemlich gut.', en: 'The presentation was quite good.', fr: 'La présentation était plutôt bonne.' } }, { id: 'b1l13-gar-nicht', german: 'gar nicht', english: 'not at all', french: 'pas du tout', gender: null, syllables: ['GAR', 'nicht'], pronunciation: 'gar nikht', example: { de: 'Sie ist gar nicht nervös.', en: 'She is not nervous at all.', fr: 'Elle n’est pas du tout nerveuse.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l13-n-deklination', title: 'The n-declension', titleFr: 'La déclinaison en -n',
      lead: 'A group of masculine nouns takes -(e)n in every case except the nominative singular.',
      leadFr: 'Un groupe de noms masculins prend -(e)n à tous les cas sauf au nominatif singulier.',
      explanationMd: 'A group of **masculine nouns** takes **-(e)n in every case except the nominative singular**: **der Kollege → den Kollegen → dem Kollegen**; **der Mensch → den Menschen → dem Menschen**; **der Nachbar → den Nachbarn → dem Nachbarn**; **der Praktikant → den Praktikanten → dem Praktikanten**. **Who belongs to the group?** Masculine nouns for **people and animals** ending in **-e** (**der Kunde, der Junge, der Löwe**), in **-ent / -ant / -ist** (**der Student, der Praktikant, der Polizist**), and **der Mensch, der Nachbar, der Herr** (**den Herrn**). Look-alikes: **ein Kollege** (n-declension, no **-r**) but **ein Angestellter** (adjective noun, with **-r**).',
      explanationMdFr: 'Un groupe de **noms masculins** prend **-(e)n à tous les cas sauf au nominatif singulier** : **der Kollege → den Kollegen → dem Kollegen** ; **der Mensch → den Menschen → dem Menschen** ; **der Nachbar → den Nachbarn → dem Nachbarn** ; **der Praktikant → den Praktikanten → dem Praktikanten**. **Qui appartient au groupe ?** Les noms masculins de **personnes et d’animaux** en **-e** (**der Kunde, der Junge, der Löwe**), en **-ent / -ant / -ist** (**der Student, der Praktikant, der Polizist**), et **der Mensch, der Nachbar, der Herr** (**den Herrn**). Les faux amis : **ein Kollege** (déclinaison en -n, sans **-r**) mais **ein Angestellter** (nom adjectival, avec **-r**).',
      tables: [{ title: 'n-declension', titleFr: 'Déclinaison en -n', headers: ['Case', 'der Kollege', 'der Mensch', 'der Praktikant'], headersFr: ['Cas', 'der Kollege', 'der Mensch', 'der Praktikant'],
        rows: [['Nominative', 'der Kollege', 'der Mensch', 'der Praktikant'], ['Accusative', 'den Kollegen', 'den Menschen', 'den Praktikanten'], ['Dative', 'dem Kollegen', 'dem Menschen', 'dem Praktikanten'], ['Plural', 'die Kollegen', 'die Menschen', 'die Praktikanten']],
        rowsFr: [['Nominatif', 'der Kollege', 'der Mensch', 'der Praktikant'], ['Accusatif', 'den Kollegen', 'den Menschen', 'den Praktikanten'], ['Datif', 'dem Kollegen', 'dem Menschen', 'dem Praktikanten'], ['Pluriel', 'die Kollegen', 'die Menschen', 'die Praktikanten']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'kenne', role: 'verb' }, { text: 'den neuen Kollegen', role: 'accusative' }, { text: 'schon.', role: 'time' }], en: 'I already know the new colleague.', fr: 'Je connais déjà le nouveau collègue.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'helfen', role: 'verb' }, { text: 'unserem Nachbarn.', role: 'dative' }], en: 'We help our neighbour.', fr: 'Nous aidons notre voisin.' },
      ],
      contrast: {
        a: { label: 'n-declension', labelFr: 'Déclinaison en -n', note: 'ein Kollege · den Kollegen', noteFr: 'ein Kollege · den Kollegen', examples: [g('Ich kenne den neuen Kollegen schon.', 'I already know the new colleague.', 'Je connais déjà le nouveau collègue.'), g('Wir helfen unserem Nachbarn.', 'We help our neighbour.', 'Nous aidons notre voisin.')] },
        b: { label: 'Adjective noun', labelFr: 'Nom adjectival', note: 'ein Angestellter · einen Angestellten', noteFr: 'ein Angestellter · einen Angestellten', examples: [g('Ich frage einen Angestellten.', 'I ask an employee.', 'Je demande à un employé.'), g('Ein Bekannter hat geholfen.', 'An acquaintance helped.', 'Une connaissance a aidé.')] },
      },
      examples: [
        g('Ich kenne den neuen Kollegen schon.', 'I already know the new colleague.', 'Je connais déjà le nouveau collègue.'),
        g('Wir helfen unserem Nachbarn.', 'We help our neighbour.', 'Nous aidons notre voisin.'),
        g('Die Firma sucht einen Praktikanten.', 'The company is looking for an intern.', 'L’entreprise cherche un stagiaire.'),
        g('Jeder Mensch braucht gute Freunde.', 'Everyone needs good friends.', 'Chaque personne a besoin de bons amis.'),
        g('Sie ist der netteste Mensch im Team.', 'She is the nicest person in the team.', 'Elle est la personne la plus sympathique de l’équipe.'),
        g('Ich habe den Herrn nicht gesehen.', 'I did not see the gentleman.', 'Je n’ai pas vu le monsieur.'),
      ],
      mistakes: [
        { wrong: 'Ich kenne den neuen Kollege.', right: 'Ich kenne den neuen Kollegen.', why: 'n-declension: -n in the accusative.', whyFr: 'Déclinaison en -n : -n à l’accusatif.' },
        { wrong: 'Er hilft dem Nachbar.', right: 'Er hilft dem Nachbarn.', why: 'n-declension: -n in the dative.', whyFr: 'Déclinaison en -n : -n au datif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l13-e4', prompt: 'Ich rufe meinen ___ an. (der Kollege, accusative)', promptFr: 'Ich rufe meinen ___ an. (der Kollege, accusatif)', answer: 'Kollegen', hint: 'n-declension: der Kollege → den Kollegen', hintFr: 'Déclinaison en -n : der Kollege → den Kollegen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l13-e9', prompt: 'Er hilft dem alten ___. (der Nachbar, dative)', promptFr: 'Er hilft dem alten ___. (der Nachbar, datif)', answer: 'Nachbarn', hint: 'n-declension: dem Nachbarn', hintFr: 'Déclinaison en -n : dem Nachbarn' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l13-e8', prompt: 'Which noun follows the n-declension?', promptFr: 'Quel nom suit la déclinaison en -n ?', options: ['der Tisch', 'der Mensch', 'der Apfel'], answer: 1, explain: 'der Mensch → den Menschen → dem Menschen. Tisch and Apfel are normal masculine nouns.', explainFr: 'der Mensch → den Menschen → dem Menschen. Tisch et Apfel sont des noms masculins ordinaires.', hint: 'Think of people.', hintFr: 'Pense aux personnes.' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b1l13-e13', word: 'Praktikant', answer: 'der', hint: 'Nouns in -ant for people are masculine.', hintFr: 'Les noms de personnes en -ant sont masculins.' } },

    { kind: 'pronunciation', focus: '"eu" sounds like "oy" (Deutsche), "chs" sounds like "ks" (Erwachsene), and the soft "ch" in Mensch', focusFr: '« eu » se prononce « oy » (Deutsche), « chs » se prononce « ks » (Erwachsene), et le « ch » doux de Mensch', items: [{ id: 'b1l13-deutsche-pron', german: 'der Deutsche', english: 'the German (m)', french: 'l’Allemand', gender: 'der', syllables: ['DEUT', 'sche'], pronunciation: 'dair DOY-cheh', example: { de: 'Der Deutsche spricht Französisch.', en: 'The German speaks French.', fr: 'L’Allemand parle français.' } }, { id: 'b1l13-erwachsene-pron', german: 'der Erwachsene', english: 'the adult (m)', french: 'l’adulte', gender: 'der', syllables: ['Er', 'WACH', 'se', 'ne'], pronunciation: 'dair air-VAHK-seh-neh', example: { de: 'Ein Erwachsener zahlt zehn Euro.', en: 'An adult pays ten euros.', fr: 'Un adulte paie dix euros.' } }, { id: 'b1l13-mensch-pron', german: 'der Mensch', english: 'the person', french: 'la personne', gender: 'der', syllables: ['MENSCH'], pronunciation: 'dair mench', example: { de: 'Sie ist ein netter Mensch.', en: 'She is a nice person.', fr: 'C’est une personne sympathique.' } }, { id: 'b1l13-kollege-pron', german: 'der Kollege', english: 'the colleague (m)', french: 'le collègue', gender: 'der', syllables: ['Kol', 'LE', 'ge'], pronunciation: 'dair koh-LAY-geh', example: { de: 'Mein Kollege ist zuverlässig.', en: 'My colleague is reliable.', fr: 'Mon collègue est fiable.' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l13-e6', prompt: 'Listen. What is the acquaintance like?', promptFr: 'Écoute. Comment est la connaissance ?', audio: { ttsText: 'Ich habe gestern einen Bekannten getroffen. Er ist ziemlich hilfsbereit.' }, options: ['Quite helpful', 'Not helpful at all', 'Very funny'], optionsFr: ['Plutôt serviable', 'Pas du tout serviable', 'Très drôle'], answer: 0, hint: '"ziemlich" = quite.', hintFr: '« ziemlich » = plutôt.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l13-e7', tokens: ['kenne', 'den', 'Ich', 'neuen', 'Kollegen', 'nicht'], answer: ['Ich', 'kenne', 'den', 'neuen', 'Kollegen', 'nicht'], hint: 'Subject, verb, object with article + adjective + noun, then "nicht".', hintFr: 'Sujet, verbe, complément (article + adjectif + nom), puis « nicht ».' } },

    { kind: 'wrapup',
      summary: 'You can now use **adjectives and participles as nouns** (**der Bekannte, der Angestellte**) and the **n-declension** (**den Kollegen, dem Nachbarn**). 🎉',
      summaryFr: 'Tu sais maintenant employer **adjectifs et participes comme noms** (**der Bekannte, der Angestellte**) et la **déclinaison en -n** (**den Kollegen, dem Nachbarn**). 🎉',
      card: { title: 'People nouns on one page', titleFr: 'Les noms de personnes en une page', sections: [
        { heading: 'Adjective nouns', headingFr: 'Noms adjectivaux', rows: [g('der Bekannte · ein Bekannter · den Bekannten', 'adjective endings', 'terminaisons d’adjectif'), g('das Beste · etwas Neues', 'neuter / abstract', 'neutre / abstrait')] },
        { heading: 'Participles', headingFr: 'Participes', rows: [g('der Angestellte · die Reisenden', 'same endings', 'mêmes terminaisons')] },
        { heading: 'n-declension', headingFr: 'Déclinaison en -n', rows: [g('der Kollege → den Kollegen', 'every case but nominative', 'tous les cas sauf le nominatif'), g('der Mensch · der Nachbar · der Praktikant', 'also in -n', 'aussi en -n')] },
      ] } },
  ],
};
