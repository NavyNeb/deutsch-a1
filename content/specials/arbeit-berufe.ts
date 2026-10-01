import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const arbeitBerufe = defineSpecial({
  slug: 'arbeit-berufe',
  number: 27,
  group: 'words',
  levels: ['A1', 'A2'],
  related: ['l2', 'l5', 'a2-l13', 'b1-l14'],
  title: ['Arbeit & Berufe', 'Work & professions', 'Travail & métiers'],
  theme: [
    'Professions with their feminine forms, the workplace, work verbs, appointments and a first application',
    'Les métiers avec leur forme féminine, le lieu de travail, les verbes du travail, les rendez-vous et une première candidature',
  ],
  goals: [
    'Say what you do: Ich bin Lehrer / Lehrerin (no article)',
    'Form feminine professions with -in and talk about the workplace',
    'Use the key work verbs and the little word bei',
    'Make, move and cancel appointments politely',
  ],
  goalsFr: [
    'Dire ce qu’on fait : Ich bin Lehrer / Lehrerin (sans article)',
    'Former les métiers au féminin avec -in et parler du lieu de travail',
    'Utiliser les verbes clés du travail et le petit mot bei',
    'Prendre, déplacer et annuler un rendez-vous poliment',
  ],
  steps: [
    intro(
      'Was sind Sie von Beruf?', 'Quelle est votre profession ?',
      'The first question after “Wie heißen Sie?” is often “Was machen Sie beruflich?”. You meet new colleagues, you call about a job and you have to arrange an appointment. This course gives you the words, the typical sentences and the little grammar traps: no article for professions, -in for women, and bei for the employer.',
      'La première question après « Wie heißen Sie ? » est souvent « Was machen Sie beruflich ? ». Tu rencontres de nouveaux collègues, tu appelles pour un emploi et tu dois fixer un rendez-vous. Ce cours te donne les mots, les phrases typiques et les petits pièges de grammaire : pas d’article pour les métiers, -in pour les femmes, et bei pour l’employeur.',
      [
        'Name common professions in masculine and feminine',
        'Describe the workplace and your tasks',
        'Use work verbs: arbeiten, verdienen, anrufen, bewerben',
        'Arrange appointments and write a short application',
      ],
      [
        'Nommer les métiers courants au masculin et au féminin',
        'Décrire le lieu de travail et ses tâches',
        'Utiliser les verbes du travail : arbeiten, verdienen, anrufen, bewerben',
        'Fixer des rendez-vous et écrire une courte candidature',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Professions', 'Les métiers',
      'Lehrer or Lehrerin? Most professions have two forms.', 'Lehrer ou Lehrerin ? La plupart des métiers ont deux formes.',
    ),
    vocab('sp-arbeit-berufe-beruf', 'der Beruf', 'the profession', 'le métier', 'der', 'be-RUF', 'dair beh-ROOF', ['Mein Beruf ist Krankenschwester.', 'My profession is nurse.', 'Mon métier est infirmière.']),
    vocab('sp-arbeit-berufe-lehrer', 'der Lehrer', 'the teacher', 'l’enseignant / l’enseignante', 'der', 'LEH-rer', 'dair LAY-rer', ['Die Lehrerin heißt Frau Weber.', 'The teacher is called Mrs Weber.', 'L’enseignante s’appelle Madame Weber.']),
    vocab('sp-arbeit-berufe-arzt', 'der Arzt', 'the doctor', 'le médecin', 'der', 'ARZT', 'dair ARTST', ['Meine Ärztin ist sehr nett.', 'My doctor is very kind.', 'Ma médecin est très gentille.']),
    vocab('sp-arbeit-berufe-verkaeufer', 'der Verkäufer', 'the sales assistant', 'le vendeur / la vendeuse', 'der', 'fer-KOY-fer', 'dair fer-KOY-fer', ['Der Verkäufer hilft mir gern.', 'The sales assistant gladly helps me.', 'Le vendeur m’aide volontiers.']),
    vocab('sp-arbeit-berufe-koch', 'der Koch', 'the cook, chef', 'le cuisinier / la cuisinière', 'der', 'KOCH', 'dair KOKH', ['Mein Bruder ist Koch in einem Restaurant.', 'My brother is a cook in a restaurant.', 'Mon frère est cuisinier dans un restaurant.']),
    vocab('sp-arbeit-berufe-ingenieur', 'der Ingenieur', 'the engineer', 'l’ingénieur / l’ingénieure', 'der', 'in-zhen-YÖR', 'dair an-zheh-NYOER', ['Sie ist Ingenieurin bei Siemens.', 'She is an engineer at Siemens.', 'Elle est ingénieure chez Siemens.']),
    vocab('sp-arbeit-berufe-student', 'der Student', 'the student (university)', 'l’étudiant / l’étudiante', 'der', 'shtu-DENT', 'dair shtoo-DENT', ['Ich bin Student und arbeite nebenbei.', 'I am a student and work on the side.', 'Je suis étudiant et je travaille à côté.']),
    grammar(
      'sp-ab-professions',
      ['Professions: no article, feminine -in', 'Métiers : sans article, féminin en -in'],
      [
        'Two rules make professions easy:\n\n- **No article** after *sein* and *werden*: **Ich bin Lehrer.** **Sie ist Ärztin.** (not *ein Lehrer*). With an adjective the article returns: *Sie ist eine gute Ärztin.*\n- **Feminine = masculine + -in**: Lehrer → **Lehrerin**, Koch → **Köchin**, Student → **Studentin**, Ingenieur → **Ingenieurin**. Some add an umlaut: Arzt → **Ärztin**.\n\nThe plural of the feminine form is **-innen**: *die Lehrerinnen*. Ask: **Was sind Sie von Beruf?** or **Was machen Sie beruflich?**',
        'Deux règles rendent les métiers faciles :\n\n- **Pas d’article** après *sein* et *werden* : **Ich bin Lehrer.** **Sie ist Ärztin.** (pas *ein Lehrer*). Avec un adjectif, l’article revient : *Sie ist eine gute Ärztin.*\n- **Féminin = masculin + -in** : Lehrer → **Lehrerin**, Koch → **Köchin**, Student → **Studentin**, Ingenieur → **Ingenieurin**. Certains ajoutent un tréma : Arzt → **Ärztin**.\n\nLe pluriel du féminin est **-innen** : *die Lehrerinnen*. Demander : **Was sind Sie von Beruf ?** ou **Was machen Sie beruflich ?**',
      ],
      [
        ['Ich bin Lehrerin von Beruf.', 'I am a teacher by profession.', 'Je suis enseignante de métier.'],
        ['Mein Vater ist Koch, meine Mutter ist Ärztin.', 'My father is a cook, my mother is a doctor.', 'Mon père est cuisinier, ma mère est médecin.'],
        ['Sie ist eine gute Verkäuferin.', 'She is a good sales assistant.', 'C’est une bonne vendeuse.'],
        ['Was sind Sie von Beruf?', 'What is your profession?', 'Quelle est votre profession ?'],
      ],
    ),
    match(
      'sp-ab-e1',
      [
        ['der Lehrer', 'the teacher (m)', 'l’enseignant'],
        ['die Ärztin', 'the doctor (f)', 'la médecin'],
        ['der Koch', 'the cook (m)', 'le cuisinier'],
        ['die Verkäuferin', 'the sales assistant (f)', 'la vendeuse'],
        ['der Ingenieur', 'the engineer (m)', 'l’ingénieur'],
      ],
      ['Match each profession with its translation.', 'Associe chaque métier à sa traduction.'],
    ),
    fb(
      'sp-ab-e2',
      ['Female cook: die ___. (Koch)', 'Cuisinière : die ___. (Koch)'],
      'Köchin',
      ['Add -in and an umlaut.', 'Ajoute -in et un tréma.'],
    ),
    fb(
      'sp-ab-e3',
      ['Ich bin Lehrer___. (I am a female teacher)', 'Ich bin Lehrer___. (je suis une enseignante)'],
      'in',
      ['Feminine ending: -in.', 'Terminaison féminine : -in.'],
    ),
    mc(
      'sp-ab-e4',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Er ist Arzt.', 'Er ist ein Arzt von Beruf.', 'Er ist der Arzt.'],
      ['Er ist Arzt.', 'Er ist ein Arzt von Beruf.', 'Er ist der Arzt.'], 0,
      ['No article before a profession after sein.', 'Pas d’article devant un métier après sein.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'The workplace', 'Le lieu de travail',
      'Office, factory, shop — where you work and with whom.', 'Bureau, usine, magasin — où tu travailles et avec qui.',
    ),
    vocab('sp-arbeit-berufe-arbeit', 'die Arbeit', 'the work, job', 'le travail', 'die', 'AR-beit', 'dee AR-bite', ['Meine Arbeit macht mir Spaß.', 'I enjoy my work.', 'J’aime mon travail.']),
    vocab('sp-arbeit-berufe-buero', 'das Büro', 'the office', 'le bureau', 'das', 'bü-RO', 'dahs bue-ROH', ['Ich bin von neun bis fünf im Büro.', 'I am in the office from nine to five.', 'Je suis au bureau de neuf à cinq heures.']),
    vocab('sp-arbeit-berufe-firma', 'die Firma', 'the company', 'l’entreprise', 'die', 'FIR-ma', 'dee FEER-mah', ['Die Firma hat hundert Mitarbeiter.', 'The company has a hundred employees.', 'L’entreprise a cent employés.']),
    vocab('sp-arbeit-berufe-kollege', 'der Kollege', 'the colleague', 'le collègue / la collègue', 'der', 'ko-LEH-ge', 'dair ko-LAY-geh', ['Meine Kollegin ist sehr hilfsbereit.', 'My colleague is very helpful.', 'Ma collègue est très serviable.']),
    vocab('sp-arbeit-berufe-chef', 'der Chef', 'the boss', 'le chef / la cheffe', 'der', 'SHEF', 'dair SHEF', ['Der Chef ist heute nicht da.', 'The boss is not here today.', 'Le chef n’est pas là aujourd’hui.']),
    vocab('sp-arbeit-berufe-gehalt', 'das Gehalt', 'the salary', 'le salaire', 'das', 'ge-HALT', 'dahs geh-HALT', ['Das Gehalt kommt am Monatsende.', 'The salary arrives at the end of the month.', 'Le salaire arrive en fin de mois.']),
    grammar(
      'sp-ab-bei',
      ['Where do you work? bei, in, als', 'Où travailles-tu ? bei, in, als'],
      [
        'Three small words describe your job:\n\n- **bei** + dative = for a company or employer: **bei** Siemens, **bei** der Post, **bei** meinem Onkel\n- **in** + dative = in a place: **in** einem Büro, **in** der Schule, **in** einem Krankenhaus\n- **als** + profession = as: Ich arbeite **als** Verkäuferin. (no article!)\n\nTypical question and answer: **Wo arbeiten Sie?** — Ich arbeite **bei** BMW **als** Ingenieur.\n\nWork hours: **von Montag bis Freitag**, **von 8 bis 16 Uhr**, **Vollzeit** (full time), **Teilzeit** (part time).',
        'Trois petits mots décrivent ton travail :\n\n- **bei** + datif = pour une entreprise ou un employeur : **bei** Siemens, **bei** der Post, **bei** meinem Onkel\n- **in** + datif = dans un lieu : **in** einem Büro, **in** der Schule, **in** einem Krankenhaus\n- **als** + métier = en tant que : Ich arbeite **als** Verkäuferin. (sans article !)\n\nQuestion et réponse typiques : **Wo arbeiten Sie ?** — Ich arbeite **bei** BMW **als** Ingenieur.\n\nHoraires : **von Montag bis Freitag**, **von 8 bis 16 Uhr**, **Vollzeit** (temps plein), **Teilzeit** (temps partiel).',
      ],
      [
        ['Ich arbeite bei einer Bank.', 'I work for a bank.', 'Je travaille dans une banque.'],
        ['Meine Schwester arbeitet als Krankenschwester im Krankenhaus.', 'My sister works as a nurse in the hospital.', 'Ma sœur travaille comme infirmière à l’hôpital.'],
        ['Er arbeitet von Montag bis Freitag in Teilzeit.', 'He works part time from Monday to Friday.', 'Il travaille à temps partiel du lundi au vendredi.'],
      ],
    ),
    ap('sp-ab-e5', 'Büro', 'das', ['Büro is neuter.', 'Büro est neutre.']),
    ap('sp-ab-e6', 'Firma', 'die', ['Firma is feminine.', 'Firma est féminin.']),
    ap('sp-ab-e7', 'Chef', 'der', ['Chef is masculine.', 'Chef est masculin.']),
    fb(
      'sp-ab-e8',
      ['Ich arbeite ___ Siemens. (for the company)', 'Ich arbeite ___ Siemens. (pour l’entreprise)'],
      'bei',
      ['bei + employer.', 'bei + employeur.'],
    ),
    mc(
      'sp-ab-e9',
      ['"I work as a cook." Which is correct?', '« Je travaille comme cuisinier. » Laquelle est correcte ?'],
      ['Ich arbeite als Koch.', 'Ich arbeite als ein Koch.', 'Ich arbeite wie Koch.'],
      ['Ich arbeite als Koch.', 'Ich arbeite als ein Koch.', 'Ich arbeite wie Koch.'], 0,
      ['als + profession, no article.', 'als + métier, sans article.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Work verbs', 'Les verbes du travail',
      'arbeiten, verdienen, anrufen — and the verbs that split.', 'arbeiten, verdienen, anrufen — et les verbes qui se séparent.',
    ),
    vocab('sp-arbeit-berufe-arbeiten', 'arbeiten', 'to work', 'travailler', null, 'AR-bei-ten', 'AR-bye-ten', ['Wir arbeiten heute bis achtzehn Uhr.', 'We work until six p.m. today.', 'Nous travaillons aujourd’hui jusqu’à dix-huit heures.']),
    vocab('sp-arbeit-berufe-verdienen', 'verdienen', 'to earn', 'gagner (de l’argent)', null, 'fer-DI-nen', 'fer-DEE-nen', ['Sie verdient gut.', 'She earns a good salary.', 'Elle gagne bien sa vie.']),
    vocab('sp-arbeit-berufe-anrufen', 'anrufen', 'to call (phone)', 'appeler (téléphone)', null, 'AN-ru-fen', 'AHN-roo-fen', ['Ich rufe dich morgen an.', 'I will call you tomorrow.', 'Je t’appelle demain.']),
    vocab('sp-arbeit-berufe-bewerben', 'sich bewerben', 'to apply (for a job)', 'postuler', null, 'be-VER-ben', 'zikh beh-VER-ben', ['Ich bewerbe mich bei einer Firma.', 'I am applying to a company.', 'Je postule dans une entreprise.']),
    vocab('sp-arbeit-berufe-kuendigen', 'kündigen', 'to hand in notice / to cancel', 'démissionner / résilier', null, 'KÜN-di-gen', 'KUEN-dee-gen', ['Er hat seine Arbeit gekündigt.', 'He has quit his job.', 'Il a démissionné de son travail.']),
    grammar(
      'sp-ab-verbs',
      ['Work verbs: regular, separable, reflexive', 'Verbes du travail : réguliers, séparables, réfléchis'],
      [
        'Work verbs fall into three types:\n\n- **Regular**: arbeiten (*ich arbeite, du arbeitest, er arbeitet*), verdienen. Verbs ending in -t/-d add an **e** before -st/-t.\n- **Separable**: **an**rufen, **ein**stellen (to hire), **auf**hören (to stop). The prefix goes to the end: *Ich **rufe** dich **an**.*\n- **Reflexive**: sich bewerben → *Ich bewerbe **mich** bei Audi.*\n\nFor the past, work verbs use **haben**: *Ich habe gearbeitet.* *Sie hat viel verdient.* *Er hat gekündigt.* For intentions use **möchte**: *Ich möchte als Ärztin arbeiten.*',
        'Les verbes du travail se répartissent en trois types :\n\n- **Réguliers** : arbeiten (*ich arbeite, du arbeitest, er arbeitet*), verdienen. Les verbes en -t/-d ajoutent un **e** avant -st/-t.\n- **Séparables** : **an**rufen, **ein**stellen (embaucher), **auf**hören (arrêter). Le préfixe va à la fin : *Ich **rufe** dich **an**.*\n- **Réfléchis** : sich bewerben → *Ich bewerbe **mich** bei Audi.*\n\nAu passé, les verbes du travail utilisent **haben** : *Ich habe gearbeitet.* *Sie hat viel verdient.* *Er hat gekündigt.* Pour les projets : **möchte** : *Ich möchte als Ärztin arbeiten.*',
      ],
      [
        ['Du arbeitest zu viel.', 'You work too much.', 'Tu travailles trop.'],
        ['Ich rufe morgen die Firma an.', 'Tomorrow I will call the company.', 'Demain, j’appelle l’entreprise.'],
        ['Sie bewirbt sich bei einem Krankenhaus.', 'She is applying to a hospital.', 'Elle postule dans un hôpital.'],
        ['Ich habe gestern bis sieben gearbeitet.', 'Yesterday I worked until seven.', 'Hier, j’ai travaillé jusqu’à sept heures.'],
      ],
    ),
    fb(
      'sp-ab-e10',
      ['Er ___ in einem Büro. (arbeiten)', 'Er ___ in einem Büro. (arbeiten)'],
      'arbeitet',
      ['er + stem arbeit- + et.', 'er + radical arbeit- + et.'],
    ),
    fb(
      'sp-ab-e11',
      ['Ich rufe dich morgen ___. (anrufen)', 'Ich rufe dich morgen ___. (anrufen)'],
      'an',
      ['The prefix goes to the end.', 'Le préfixe va à la fin.'],
    ),
    wo(
      'sp-ab-e12',
      ['mich', 'bewerbe', 'bei', 'Ich', 'Audi'],
      ['Ich', 'bewerbe', 'mich', 'bei', 'Audi'],
      ['Subject, verb, reflexive pronoun.', 'Sujet, verbe, pronom réfléchi.'],
    ),
    mc(
      'sp-ab-e13',
      ['She has earned a lot. Which is correct?', 'Elle a beaucoup gagné. Laquelle est correcte ?'],
      ['Sie hat viel verdient.', 'Sie ist viel verdient.', 'Sie hat viel verdienen.'],
      ['Sie hat viel verdient.', 'Sie ist viel verdient.', 'Sie hat viel verdienen.'], 0,
      ['haben + participle verdient.', 'haben + participe verdient.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Appointments', 'Les rendez-vous',
      'Make, move and cancel an appointment — politely.', 'Prendre, déplacer et annuler un rendez-vous — poliment.',
    ),
    vocab('sp-arbeit-berufe-termin', 'der Termin', 'the appointment', 'le rendez-vous', 'der', 'ter-MIN', 'dair ter-MEEN', ['Ich möchte einen Termin machen.', 'I would like to make an appointment.', 'Je voudrais prendre rendez-vous.']),
    vocab('sp-arbeit-berufe-besprechung', 'die Besprechung', 'the meeting', 'la réunion', 'die', 'be-SPRE-chung', 'dee beh-SHPREH-khoong', ['Die Besprechung beginnt um zehn Uhr.', 'The meeting starts at ten.', 'La réunion commence à dix heures.']),
    vocab('sp-arbeit-berufe-absagen', 'absagen', 'to cancel', 'annuler', null, 'AB-sa-gen', 'AHP-zaa-gen', ['Leider muss ich den Termin absagen.', 'Unfortunately I have to cancel the appointment.', 'Malheureusement, je dois annuler le rendez-vous.']),
    vocab('sp-arbeit-berufe-verschieben', 'verschieben', 'to postpone', 'reporter, déplacer', null, 'fer-SHI-ben', 'fer-SHEE-ben', ['Können wir den Termin verschieben?', 'Can we postpone the appointment?', 'Pouvons-nous reporter le rendez-vous ?']),
    vocab('sp-arbeit-berufe-zeit', 'die Zeit', 'the time', 'le temps', 'die', 'TSEIT', 'dee TSITE', ['Haben Sie am Dienstag Zeit?', 'Do you have time on Tuesday?', 'Avez-vous du temps mardi ?']),
    grammar(
      'sp-ab-appointments',
      ['Making an appointment', 'Prendre rendez-vous'],
      [
        'On the phone you need a few polite formulas:\n\n- **Ich möchte** einen Termin **machen / vereinbaren**.\n- **Haben Sie** am Dienstag **Zeit**? / **Passt** Ihnen Mittwoch um 10 Uhr?\n- **Können wir** den Termin **verschieben**? — **Leider** kann ich nicht kommen.\n- **Ich muss** den Termin **absagen**. — **Kein Problem**, wann haben Sie Zeit?\n- Say yes: **Das passt gut.** / **Gern.** Say no: **Das geht leider nicht.**\n\nWith **können / müssen / möchten** the infinitive goes to the end. For the time use **am** + day, **um** + clock time: *am Mittwoch um zehn Uhr*.',
        'Au téléphone, il faut quelques formules polies :\n\n- **Ich möchte** einen Termin **machen / vereinbaren**.\n- **Haben Sie** am Dienstag **Zeit** ? / **Passt** Ihnen Mittwoch um 10 Uhr ?\n- **Können wir** den Termin **verschieben** ? — **Leider** kann ich nicht kommen.\n- **Ich muss** den Termin **absagen**. — **Kein Problem**, wann haben Sie Zeit ?\n- Dire oui : **Das passt gut.** / **Gern.** Dire non : **Das geht leider nicht.**\n\nAvec **können / müssen / möchten**, l’infinitif va à la fin. Pour l’heure : **am** + jour, **um** + heure : *am Mittwoch um zehn Uhr*.',
      ],
      [
        ['Ich möchte einen Termin vereinbaren.', 'I would like to arrange an appointment.', 'Je voudrais fixer un rendez-vous.'],
        ['Haben Sie am Mittwoch um zehn Uhr Zeit?', 'Do you have time on Wednesday at ten?', 'Avez-vous le temps mercredi à dix heures ?'],
        ['Leider muss ich den Termin absagen.', 'Unfortunately I have to cancel the appointment.', 'Malheureusement, je dois annuler le rendez-vous.'],
        ['Können wir den Termin auf Freitag verschieben?', 'Can we move the appointment to Friday?', 'Pouvons-nous déplacer le rendez-vous à vendredi ?'],
      ],
    ),
    ap('sp-ab-e14', 'Termin', 'der', ['Termin is masculine.', 'Termin est masculin.']),
    ap('sp-ab-e15', 'Besprechung', 'die', ['Besprechung is feminine (-ung).', 'Besprechung est féminin (-ung).']),
    wo(
      'sp-ab-e16',
      ['Termin', 'Ich', 'einen', 'machen', 'möchte'],
      ['Ich', 'möchte', 'einen', 'Termin', 'machen'],
      ['möchte in position 2; infinitive last.', 'möchte en position 2 ; infinitif à la fin.'],
    ),
    lc(
      'sp-ab-e17',
      ['Listen. When is the appointment?', 'Écoute. Quand est le rendez-vous ?'],
      'Guten Tag, Ihr Termin ist am Mittwoch um zehn Uhr.',
      ['Wednesday at 10:00', 'Thursday at 10:00', 'Wednesday at 12:00'], ['Mercredi à 10 h', 'Jeudi à 10 h', 'Mercredi à 12 h'], 0,
      ['Listen for "Mittwoch" and "zehn".', 'Écoute « Mittwoch » et « zehn ».'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'The application', 'La candidature',
      'Your first CV, job ads and a short cover letter.', 'Ton premier CV, des offres d’emploi et une courte lettre de motivation.',
    ),
    vocab('sp-arbeit-berufe-bewerbung', 'die Bewerbung', 'the application', 'la candidature', 'die', 'be-VER-bung', 'dee beh-VER-boong', ['Ich schreibe eine Bewerbung für den Job.', 'I am writing an application for the job.', 'J’écris une candidature pour le poste.']),
    vocab('sp-arbeit-berufe-lebenslauf', 'der Lebenslauf', 'the CV', 'le CV', 'der', 'LE-bens-lauf', 'dair LAY-bens-lowf', ['Im Lebenslauf stehen meine Berufe.', 'My jobs are listed in the CV.', 'Mes emplois sont dans le CV.']),
    vocab('sp-arbeit-berufe-stelle', 'die Stelle', 'the job, position', 'le poste', 'die', 'STEL-le', 'dee SHTEL-eh', ['Die Stelle ist ab Januar frei.', 'The job is vacant from January.', 'Le poste est libre à partir de janvier.']),
    vocab('sp-arbeit-berufe-erfahrung', 'die Erfahrung', 'the experience', 'l’expérience', 'die', 'er-FAH-rung', 'dee er-FAA-roong', ['Ich habe zwei Jahre Erfahrung.', 'I have two years of experience.', 'J’ai deux ans d’expérience.']),
    grammar(
      'sp-ab-application',
      ['A short application letter', 'Une courte lettre de candidature'],
      [
        'A very short formal letter has five parts:\n\n- Greeting: **Sehr geehrte Frau Weber,** / **Sehr geehrter Herr Müller,**\n- Reason: **ich bewerbe mich** um die Stelle als Verkäuferin.\n- About you: **Ich habe** zwei Jahre Erfahrung. **Ich spreche** Deutsch und Englisch.\n- Wish: **Ich möchte** gern bei Ihnen arbeiten.\n- Closing: **Mit freundlichen Grüßen** + name\n\nNote: **sich bewerben um + accusative** (*um die Stelle*) or **bei + dative** (*bei Ihnen*). Use **Sie** and capital letters for the polite *Ihnen / Ihr*.',
        'Une lettre formelle très courte comprend cinq parties :\n\n- Salutation : **Sehr geehrte Frau Weber,** / **Sehr geehrter Herr Müller,**\n- Motif : **ich bewerbe mich** um die Stelle als Verkäuferin.\n- Sur toi : **Ich habe** zwei Jahre Erfahrung. **Ich spreche** Deutsch und Englisch.\n- Souhait : **Ich möchte** gern bei Ihnen arbeiten.\n- Formule finale : **Mit freundlichen Grüßen** + nom\n\nÀ noter : **sich bewerben um + accusatif** (*um die Stelle*) ou **bei + datif** (*bei Ihnen*). Utilise **Sie** et les majuscules pour le poli *Ihnen / Ihr*.',
      ],
      [
        ['Ich bewerbe mich um die Stelle als Verkäuferin.', 'I am applying for the position of sales assistant.', 'Je postule au poste de vendeuse.'],
        ['Ich habe zwei Jahre Erfahrung im Büro.', 'I have two years of office experience.', 'J’ai deux ans d’expérience au bureau.'],
        ['Mit freundlichen Grüßen, Anna Schmidt', 'Kind regards, Anna Schmidt', 'Cordialement, Anna Schmidt'],
      ],
    ),
    ap('sp-ab-e18', 'Bewerbung', 'die', ['Bewerbung is feminine (-ung).', 'Bewerbung est féminin (-ung).']),
    ap('sp-ab-e19', 'Lebenslauf', 'der', ['Lebenslauf is masculine.', 'Lebenslauf est masculin.']),
    mc(
      'sp-ab-e20',
      ['How do you close a formal letter?', 'Comment termine-t-on une lettre formelle ?'],
      ['Mit freundlichen Grüßen', 'Tschüss und bis bald', 'Hallo zusammen'], ['Mit freundlichen Grüßen', 'Tschüss und bis bald', 'Hallo zusammen'], 0,
      ['The standard formal closing.', 'La formule finale standard.'],
    ),

    wrapup(
      '**Professions** — no article after sein: Ich bin Lehrer. Feminine = + in (Lehrerin, Köchin, Ärztin); plural -innen. Was sind Sie von Beruf?\n\n**Workplace** — bei + employer (bei Siemens) · in + place (im Büro) · als + profession (als Koch). von Montag bis Freitag · Vollzeit · Teilzeit.\n\n**Verbs** — arbeiten, verdienen; anrufen (Ich rufe dich an); sich bewerben (Ich bewerbe mich); Perfekt with haben.\n\n**Appointments** — Ich möchte einen Termin machen · Haben Sie Zeit? · verschieben / absagen · am Mittwoch um zehn Uhr.\n\n**Application** — Sehr geehrte Frau … · ich bewerbe mich um die Stelle · Mit freundlichen Grüßen.',
      '**Métiers** — sans article après sein : Ich bin Lehrer. Féminin = + in (Lehrerin, Köchin, Ärztin) ; pluriel -innen. Was sind Sie von Beruf ?\n\n**Lieu de travail** — bei + employeur (bei Siemens) · in + lieu (im Büro) · als + métier (als Koch). von Montag bis Freitag · Vollzeit · Teilzeit.\n\n**Verbes** — arbeiten, verdienen ; anrufen (Ich rufe dich an) ; sich bewerben (Ich bewerbe mich) ; parfait avec haben.\n\n**Rendez-vous** — Ich möchte einen Termin machen · Haben Sie Zeit ? · verschieben / absagen · am Mittwoch um zehn Uhr.\n\n**Candidature** — Sehr geehrte Frau … · ich bewerbe mich um die Stelle · Mit freundlichen Grüßen.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Work & professions', 'Quiz final : travail & métiers'),
    match(
      'sp-ab-q1',
      [
        ['der Lehrer', 'the teacher', 'l’enseignant'],
        ['die Ärztin', 'the (female) doctor', 'la médecin'],
        ['das Büro', 'the office', 'le bureau'],
        ['das Gehalt', 'the salary', 'le salaire'],
        ['die Firma', 'the company', 'l’entreprise'],
      ],
      ['Match the words with their translation.', 'Associe les mots à leur traduction.'],
    ),
    fb(
      'sp-ab-q2',
      ['Female teacher: die Lehrer___', 'Enseignante : die Lehrer___'],
      'in',
      ['Add -in for women.', 'Ajoute -in pour les femmes.'],
    ),
    mc(
      'sp-ab-q3',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Sie ist Ingenieurin.', 'Sie ist eine Ingenieurin von Beruf.', 'Sie ist die Ingenieurin.'],
      ['Sie ist Ingenieurin.', 'Sie ist eine Ingenieurin von Beruf.', 'Sie ist die Ingenieurin.'], 0,
      ['No article before a profession after sein.', 'Pas d’article devant un métier après sein.'],
    ),
    fb(
      'sp-ab-q4',
      ['Ich arbeite ___ der Post. (for)', 'Ich arbeite ___ der Post. (pour)'],
      'bei',
      ['bei + employer.', 'bei + employeur.'],
    ),
    mc(
      'sp-ab-q5',
      ['"I work as a nurse." Which is correct?', '« Je travaille comme infirmière. » Laquelle est correcte ?'],
      ['Ich arbeite als Krankenschwester.', 'Ich arbeite als eine Krankenschwester.', 'Ich arbeite wie Krankenschwester.'],
      ['Ich arbeite als Krankenschwester.', 'Ich arbeite als eine Krankenschwester.', 'Ich arbeite wie Krankenschwester.'], 0,
      ['als + profession, no article.', 'als + métier, sans article.'],
    ),
    fb(
      'sp-ab-q6',
      ['Er ___ gut. (verdienen)', 'Er ___ gut. (verdienen)'],
      'verdient',
      ['er + verdien- + t.', 'er + verdien- + t.'],
    ),
    wo(
      'sp-ab-q7',
      ['dich', 'rufe', 'Ich', 'an', 'morgen'],
      ['Ich', 'rufe', 'dich', 'morgen', 'an'],
      ['The prefix goes to the end.', 'Le préfixe va à la fin.'],
    ),
    lc(
      'sp-ab-q8',
      ['Listen. What does she do?', 'Écoute. Que fait-elle ?'],
      'Ich bin Verkäuferin und arbeite bei einer Bäckerei.',
      ['She sells at a bakery', 'She cooks at a restaurant', 'She teaches at a school'], ['Elle est vendeuse dans une boulangerie', 'Elle cuisine dans un restaurant', 'Elle enseigne dans une école'], 0,
      ['Listen for "Verkäuferin" and "Bäckerei".', 'Écoute « Verkäuferin » et « Bäckerei ».'],
    ),
    wo(
      'sp-ab-q9',
      ['machen', 'Ich', 'Termin', 'möchte', 'einen'],
      ['Ich', 'möchte', 'einen', 'Termin', 'machen'],
      ['möchte in position 2; infinitive last.', 'möchte en position 2 ; infinitif à la fin.'],
    ),
    mc(
      'sp-ab-q10',
      ['You cannot come. What do you say?', 'Tu ne peux pas venir. Que dis-tu ?'],
      ['Leider muss ich den Termin absagen.', 'Leider muss ich den Termin verdienen.', 'Leider muss ich den Termin bewerben.'],
      ['Leider muss ich den Termin absagen.', 'Leider muss ich den Termin verdienen.', 'Leider muss ich den Termin bewerben.'], 0,
      ['absagen = to cancel.', 'absagen = annuler.'],
    ),
    lc(
      'sp-ab-q11',
      ['Listen. What does the speaker want to do?', 'Écoute. Que veut faire la personne ?'],
      'Können wir den Termin auf Freitag verschieben?',
      ['Move the appointment to Friday', 'Cancel the appointment', 'Come on Friday at ten'], ['Déplacer le rendez-vous à vendredi', 'Annuler le rendez-vous', 'Venir vendredi à dix heures'], 0,
      ['Listen for "verschieben".', 'Écoute « verschieben ».'],
    ),
    fb(
      'sp-ab-q12',
      ['Ich bewerbe ___ um die Stelle. (reflexive)', 'Ich bewerbe ___ um die Stelle. (réfléchi)'],
      'mich',
      ['Reflexive pronoun for ich: mich.', 'Pronom réfléchi pour ich : mich.'],
    ),
    mc(
      'sp-ab-q13',
      ['How do you open a formal letter to Mrs Weber?', 'Comment ouvre-t-on une lettre formelle à Madame Weber ?'],
      ['Sehr geehrte Frau Weber,', 'Hallo Weber,', 'Liebe Weber,'], ['Sehr geehrte Frau Weber,', 'Hallo Weber,', 'Liebe Weber,'], 0,
      ['Formal greeting: Sehr geehrte Frau …', 'Salutation formelle : Sehr geehrte Frau …'],
    ),
    ap('sp-ab-q14', 'Stelle', 'die', ['Stelle is feminine.', 'Stelle est féminin.']),
  ],
});
