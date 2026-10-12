import type { ExamSetInput } from '../types';
import { txt, tf, mc, mt, lesenTF, lesenMC, lesenMatch, message, speak } from './b2-kit';

// Original practice material modelled on the Goethe-Zertifikat B2 format. Not an official paper.

export const goetheB2s5: ExamSetInput = {
  id: 'goethe-b2-5',
  board: 'goethe',
  level: 'B2',
  number: 5,
  lesen: [
    lesenMC('goethe-b2-5-l1', 1, 'Teil 1', [
      'Lesen Sie den Blogbeitrag und die Aufgaben 1 bis 6 dazu. Wählen Sie die richtige Lösung a, b oder c.',
      'Read the blog post and tasks 1 to 6. Choose the correct answer a, b or c.',
      'Lisez le billet de blog et les exercices 1 à 6. Choisissez la bonne réponse a, b ou c.',
    ], [
      txt('t1', 'Blog: Ein Semester in Lyon – Erfahrungen einer Erasmus-Studentin',
        'Als ich im Herbst nach Lyon kam, sprach ich zwar Französisch aus der Schule, verstand aber im Hörsaal kaum etwas. Die Professoren redeten schnell, und die Fachbegriffe waren neu. In den ersten zwei Wochen habe ich nach jeder Vorlesung stundenlang meine Notizen gelesen und Wörter nachgeschlagen. Ehrlich gesagt war ich kurz davor, aufzugeben.\n\nDas änderte sich, als ich eine Lerngruppe mit zwei französischen Kommilitoninnen gründete. Wir trafen uns zweimal pro Woche in der Bibliothek, und sie erklärten mir geduldig alles, was ich nicht verstanden hatte. Im Gegenzug half ich ihnen bei ihrem Deutsch für ein Praktikum in Berlin. Daraus wurde eine echte Freundschaft.\n\nAuch außerhalb der Uni habe ich viel gelernt. Ich habe in einem kleinen Café gejobbt und dadurch den Alltag besser kennengelernt als jeder Sprachkurs es könnte. Die Organisation des Auslandssemesters war allerdings anstrengend: Für die Anerkennung meiner Kurse musste ich viele Formulare ausfüllen.\n\nTrotzdem würde ich es jederzeit wieder tun. Ich bin selbstständiger geworden und habe gelernt, dass man mit Geduld und Mut fast jedes Problem lösen kann.',
        'Blog: A semester in Lyon – experiences of an Erasmus student\n\nWhen I came to Lyon in the autumn I did speak French from school, but understood hardly anything in the lecture hall. The professors spoke fast and the technical terms were new. In the first two weeks after every lecture I read my notes for hours and looked up words. Honestly I was close to giving up.\n\nThat changed when I founded a study group with two French fellow students. We met twice a week in the library and they patiently explained everything I had not understood. In return I helped them with their German for an internship in Berlin. A real friendship came out of it.\n\nI also learnt a lot outside university. I worked in a small café and thereby got to know everyday life better than any language course could. The organisation of the semester abroad was exhausting, though: for the recognition of my courses I had to fill in many forms.\n\nStill I would do it again at any time. I have become more independent and have learnt that with patience and courage you can solve almost any problem.',
        'Blog : Un semestre à Lyon – expériences d’une étudiante Erasmus\n\nQuand je suis arrivée à Lyon à l’automne, je parlais certes le français de l’école, mais je ne comprenais presque rien dans l’amphithéâtre. Les professeurs parlaient vite et les termes techniques étaient nouveaux. Pendant les deux premières semaines, après chaque cours, j’ai relu mes notes pendant des heures et cherché des mots. Honnêtement, j’étais sur le point d’abandonner.\n\nCela a changé quand j’ai créé un groupe d’étude avec deux camarades françaises. Nous nous retrouvions deux fois par semaine à la bibliothèque et elles m’expliquaient patiemment tout ce que je n’avais pas compris. En retour, je les ai aidées avec leur allemand pour un stage à Berlin. Une vraie amitié en est née.\n\nJ’ai aussi beaucoup appris en dehors de l’université. J’ai travaillé dans un petit café et j’ai ainsi mieux connu le quotidien que n’importe quel cours de langue ne l’aurait permis. L’organisation du semestre à l’étranger était toutefois épuisante : pour la reconnaissance de mes cours, j’ai dû remplir beaucoup de formulaires.\n\nMalgré tout, je le referais à tout moment. Je suis devenue plus autonome et j’ai appris qu’avec de la patience et du courage on peut résoudre presque tous les problèmes.'),
    ], [
      mc('q1', 'Was war am Anfang das größte Problem der Autorin?', 'What was the author’s biggest problem at the beginning?', 'Quel était le plus grand problème de l’auteure au début ?', [
        ['Sie verstand in den Vorlesungen kaum etwas.', 'She hardly understood anything in lectures.', 'Elle ne comprenait presque rien en cours.'],
        ['Sie fand keine Wohnung.', 'She found no flat.', 'Elle ne trouvait pas de logement.'],
        ['Sie hatte kein Geld.', 'She had no money.', 'Elle n’avait pas d’argent.'],
      ], 0, ['Fast professors, new terms.', 'Professeurs rapides, termes nouveaux.']),
      mc('q2', 'Wie ging es ihr in den ersten Wochen?', 'How was she in the first weeks?', 'Comment allait-elle les premières semaines ?', [
        ['Sie war kurz davor, aufzugeben.', 'She was close to giving up.', 'Elle était sur le point d’abandonner.'],
        ['Sie fühlte sich sofort wohl.', 'She felt at home immediately.', 'Elle se sentait tout de suite bien.'],
        ['Sie reiste nach Hause.', 'She travelled home.', 'Elle est rentrée chez elle.'],
      ], 0, ['"kurz davor, aufzugeben".', '« kurz davor, aufzugeben ».']),
      mc('q3', 'Was änderte die Situation?', 'What changed the situation?', 'Qu’est-ce qui a changé la situation ?', [
        ['Eine Lerngruppe mit französischen Kommilitoninnen.', 'A study group with French fellow students.', 'Un groupe d’étude avec des camarades françaises.'],
        ['Ein Sprachkurs.', 'A language course.', 'Un cours de langue.'],
        ['Ein anderer Professor.', 'A different professor.', 'Un autre professeur.'],
      ], 0, ['Study group.', 'Groupe d’étude.']),
      mc('q4', 'Wobei half die Autorin den Französinnen?', 'What did the author help the French students with?', 'En quoi l’auteure a-t-elle aidé les Françaises ?', [
        ['Bei ihrem Deutsch für ein Praktikum in Berlin.', 'With their German for an internship in Berlin.', 'Avec leur allemand pour un stage à Berlin.'],
        ['Bei Mathe.', 'With maths.', 'En maths.'],
        ['Bei der Wohnungssuche.', 'With flat-hunting.', 'Pour la recherche de logement.'],
      ], 0, ['German for internship.', 'Allemand pour un stage.']),
      mc('q5', 'Was hat der Nebenjob im Café gebracht?', 'What did the part-time job in the café bring?', 'Qu’a apporté le petit boulot au café ?', [
        ['Sie lernte den Alltag besser kennen.', 'She got to know everyday life better.', 'Elle a mieux connu le quotidien.'],
        ['Viel Geld.', 'A lot of money.', 'Beaucoup d’argent.'],
        ['Ein Zertifikat.', 'A certificate.', 'Un certificat.'],
      ], 0, ['Better than any language course.', 'Mieux que n’importe quel cours de langue.']),
      mc('q6', 'Wie bewertet die Autorin ihr Auslandssemester insgesamt?', 'How does the author assess her semester abroad overall?', 'Comment l’auteure juge-t-elle globalement son semestre à l’étranger ?', [
        ['Sie würde es jederzeit wieder tun.', 'She would do it again at any time.', 'Elle le referait à tout moment.'],
        ['Sie bereut es.', 'She regrets it.', 'Elle le regrette.'],
        ['Sie würde es nur mit mehr Geld tun.', 'She would only do it with more money.', 'Elle ne le ferait qu’avec plus d’argent.'],
      ], 0, ['Last paragraph.', 'Dernier paragraphe.']),
    ]),

    lesenMC('goethe-b2-5-l2', 2, 'Teil 2', [
      'Lesen Sie den Zeitungsartikel und die Aufgaben 7 bis 12 dazu. Wählen Sie die richtige Lösung a, b oder c.',
      'Read the newspaper article and tasks 7 to 12. Choose the correct answer a, b or c.',
      'Lisez l’article de journal et les exercices 7 à 12. Choisissez la bonne réponse a, b ou c.',
    ], [
      txt('t2', 'Duales Studium: Praxis und Theorie unter einem Dach',
        'Immer mehr Abiturienten entscheiden sich gegen ein klassisches Studium und für ein duales Studium. Dabei wechseln sie zwischen Hochschule und Unternehmen: Drei Monate lernen sie Theorie, drei Monate arbeiten sie im Betrieb. Dafür erhalten sie von Beginn an ein Gehalt – im Durchschnitt über 1.000 Euro monatlich.\n\nFür Jonas Reiter, 22, war das ein wichtiger Grund. „Ich wollte kein Geld von meinen Eltern“, sagt der angehende Wirtschaftsinformatiker. „Und ich wollte sofort sehen, wofür ich lerne.“ Nach dem Studium hat er gute Chancen, vom Unternehmen übernommen zu werden.\n\nDoch das duale Modell hat auch Schattenseiten. Die Belastung ist hoch: Es gibt weniger Ferien, und der Lernstoff muss in kürzerer Zeit bewältigt werden. Außerdem bindet man sich früh an ein Unternehmen. Studienberaterin Dr. Sabine Kolb rät deshalb, vorher gut zu überlegen: „Wer noch nicht weiß, in welche Richtung er will, ist an einer Universität oft besser aufgehoben.“',
        'Dual study: practice and theory under one roof\n\nMore and more school-leavers decide against a classical degree and for a dual degree. They alternate between university and company: for three months they learn theory, for three months they work in the firm. For this they receive a salary from the start – on average over 1,000 euros a month.\n\nFor Jonas Reiter, 22, this was an important reason. “I did not want money from my parents,” says the future business-IT specialist. “And I wanted to see immediately what I am learning for.” After the degree he has good chances of being taken on by the company.\n\nBut the dual model also has downsides. The strain is high: there are fewer holidays and the material has to be mastered in a shorter time. In addition one commits early to one company. Study adviser Dr Sabine Kolb therefore advises thinking carefully beforehand: “Anyone who does not yet know which direction he wants to go is often better off at a university.”',
        'Études en alternance : pratique et théorie sous un même toit\n\nDe plus en plus de bacheliers renoncent à des études classiques et choisissent des études en alternance. Ils alternent entre l’université et l’entreprise : trois mois ils apprennent la théorie, trois mois ils travaillent en entreprise. Pour cela, ils reçoivent dès le début un salaire – en moyenne plus de 1 000 euros par mois.\n\nPour Jonas Reiter, 22 ans, c’était une raison importante. « Je ne voulais pas d’argent de mes parents, dit le futur informaticien de gestion. Et je voulais voir tout de suite à quoi sert ce que j’apprends. » Après les études, il a de bonnes chances d’être repris par l’entreprise.\n\nMais le modèle en alternance a aussi des côtés sombres. La charge est élevée : il y a moins de vacances et la matière doit être maîtrisée en moins de temps. De plus, on s’engage tôt envers une entreprise. La conseillère d’orientation Dr Sabine Kolb conseille donc de bien réfléchir avant : « Celui qui ne sait pas encore dans quelle direction il veut aller est souvent mieux à l’université. »'),
    ], [
      mc('q7', 'Wie funktioniert ein duales Studium?', 'How does a dual degree work?', 'Comment fonctionnent les études en alternance ?', [
        ['Man wechselt zwischen Hochschule und Betrieb.', 'You alternate between university and company.', 'On alterne entre l’université et l’entreprise.'],
        ['Man studiert nur online.', 'You only study online.', 'On étudie seulement en ligne.'],
        ['Man arbeitet nur im Betrieb.', 'You only work in the company.', 'On travaille seulement en entreprise.'],
      ], 0, ['Three months each.', 'Trois mois chacun.']),
      mc('q8', 'Was erhalten dual Studierende von Anfang an?', 'What do dual students receive from the start?', 'Que reçoivent les étudiants en alternance dès le début ?', [
        ['Ein Gehalt.', 'A salary.', 'Un salaire.'],
        ['Ein Stipendium.', 'A scholarship.', 'Une bourse.'],
        ['Eine Wohnung.', 'A flat.', 'Un logement.'],
      ], 0, ['Over 1,000 euros.', 'Plus de 1 000 euros.']),
      mc('q9', 'Warum hat sich Jonas für das duale Studium entschieden?', 'Why did Jonas choose the dual degree?', 'Pourquoi Jonas a-t-il choisi les études en alternance ?', [
        ['Er wollte finanziell unabhängig sein und die Praxis sehen.', 'He wanted to be financially independent and see the practice.', 'Il voulait être indépendant financièrement et voir la pratique.'],
        ['Er wollte weniger arbeiten.', 'He wanted to work less.', 'Il voulait travailler moins.'],
        ['Er hatte keine Wahl.', 'He had no choice.', 'Il n’avait pas le choix.'],
      ], 0, ['No money from parents + practice.', 'Pas d’argent des parents + pratique.']),
      mc('q10', 'Welche Chance hat er nach dem Studium?', 'What chance does he have after the degree?', 'Quelle chance a-t-il après les études ?', [
        ['Vom Unternehmen übernommen zu werden.', 'To be taken on by the company.', 'Être repris par l’entreprise.'],
        ['Ins Ausland zu gehen.', 'To go abroad.', 'Partir à l’étranger.'],
        ['Zu promovieren.', 'To do a doctorate.', 'Faire un doctorat.'],
      ], 0, ['Good chances of being taken on.', 'De bonnes chances d’être repris.']),
      mc('q11', 'Was ist ein Nachteil des dualen Studiums?', 'What is a disadvantage of the dual degree?', 'Quel est un inconvénient des études en alternance ?', [
        ['Es gibt weniger Ferien und die Belastung ist hoch.', 'There are fewer holidays and the strain is high.', 'Il y a moins de vacances et la charge est élevée.'],
        ['Es ist zu leicht.', 'It is too easy.', 'C’est trop facile.'],
        ['Es kostet viel Geld.', 'It costs a lot of money.', 'Cela coûte cher.'],
      ], 0, ['Strain and fewer holidays.', 'Charge et moins de vacances.']),
      mc('q12', 'Wem rät Dr. Kolb eher zu einer Universität?', 'Who does Dr Kolb rather advise to go to a university?', 'À qui le Dr Kolb conseille-t-elle plutôt l’université ?', [
        ['Wer noch nicht weiß, in welche Richtung er will.', 'Whoever does not yet know which direction they want.', 'À celui qui ne sait pas encore dans quelle direction il veut aller.'],
        ['Wer schnell Geld verdienen will.', 'Whoever wants to earn money quickly.', 'À celui qui veut gagner vite de l’argent.'],
        ['Wer keine Lust auf Theorie hat.', 'Whoever has no interest in theory.', 'À celui qui n’aime pas la théorie.'],
      ], 0, ['Last quote.', 'Dernière citation.']),
    ]),

    lesenTF('goethe-b2-5-l3', 3, 'Teil 3', [
      'Lesen Sie die Beiträge aus einem Internetforum zum Thema „Studiengebühren“ und die Aufgaben 13 bis 18. Wer ist für Studiengebühren? Antworten Sie mit Ja oder Nein.',
      'Read the forum posts on “Tuition fees” and tasks 13 to 18. Who is in favour of tuition fees? Answer Yes or No.',
      'Lisez les messages d’un forum sur le thème « Frais d’inscription » et les exercices 13 à 18. Qui est favorable aux frais d’inscription ? Répondez par Oui ou Non.',
    ], 'jn', [
      txt('p1', 'Sarah_W', 'Bildung ist ein Grundrecht und darf nicht vom Geldbeutel der Eltern abhängen. Studiengebühren schrecken gerade Kinder aus einfachen Familien ab. Ich bin deshalb strikt dagegen, auch wenn ich verstehe, dass die Unis mehr Geld brauchen.', 'Education is a basic right and must not depend on the parents’ wallet. Tuition fees deter precisely children from ordinary families. I am therefore strictly against it, even though I understand that universities need more money.', 'L’éducation est un droit fondamental et ne doit pas dépendre du porte-monnaie des parents. Les frais d’inscription dissuadent précisément les enfants de familles modestes. J’y suis donc strictement opposée, même si je comprends que les universités ont besoin de plus d’argent.'),
      txt('p2', 'Prof. Dr. Heinz Möller', 'Als Hochschullehrer sehe ich, wie schlecht manche Labore ausgestattet sind. Moderate Gebühren, die nachträglich zurückgezahlt werden, wenn das Einkommen nach dem Studium hoch ist, könnten die Qualität deutlich verbessern. Ich befürworte eine solche Regelung.', 'As a university teacher I see how poorly equipped some laboratories are. Moderate fees that are paid back later when income after studying is high could clearly improve quality. I support such a rule.', 'En tant qu’enseignant à l’université, je vois à quel point certains laboratoires sont mal équipés. Des frais modérés, remboursés plus tard lorsque le revenu après les études est élevé, pourraient nettement améliorer la qualité. Je soutiens une telle règle.'),
      txt('p3', 'Kemal Y.', 'Ich komme aus der Türkei und musste dort viel Geld für mein Studium bezahlen. In Deutschland war ich überrascht, dass es fast kostenlos ist. Das ist ein großer Vorteil dieses Landes, und man sollte ihn nicht aufgeben. Gebühren würde ich ablehnen.', 'I come from Turkey and had to pay a lot of money for my studies there. In Germany I was surprised that it is almost free. That is a great advantage of this country and one should not give it up. I would reject fees.', 'Je viens de Turquie et j’y ai dû payer beaucoup d’argent pour mes études. En Allemagne, j’ai été surpris que ce soit presque gratuit. C’est un grand avantage de ce pays et on ne devrait pas y renoncer. Je refuserais des frais.'),
      txt('p4', 'Dagmar L.', 'Wer studiert, wird später im Durchschnitt mehr verdienen. Warum sollen dann alle Steuerzahler das Studium bezahlen, auch die, die nie an einer Uni waren? Ich finde Gebühren grundsätzlich gerecht, wenn es Stipendien für Bedürftige gibt.', 'Those who study will later earn more on average. Why should all taxpayers then pay for the studies, including those who have never been to a university? I think fees are basically fair if there are scholarships for the needy.', 'Celui qui étudie gagnera en moyenne plus plus tard. Pourquoi alors tous les contribuables devraient-ils payer les études, y compris ceux qui n’ont jamais été à l’université ? Je trouve que des frais sont fondamentalement justes s’il y a des bourses pour les personnes dans le besoin.'),
      txt('p5', 'Ben_F', 'Ich arbeite neben dem Studium 15 Stunden pro Woche, um die Miete zu bezahlen. Mit Studiengebühren müsste ich noch mehr arbeiten und würde länger studieren. Das wäre für mich ein ernstes Problem, deshalb bin ich entschieden dagegen.', 'Alongside my studies I work 15 hours a week to pay the rent. With tuition fees I would have to work even more and would study longer. That would be a serious problem for me, which is why I am firmly against it.', 'Parallèlement à mes études, je travaille 15 heures par semaine pour payer le loyer. Avec des frais d’inscription, je devrais travailler encore plus et étudierais plus longtemps. Ce serait un sérieux problème pour moi, c’est pourquoi j’y suis fermement opposé.'),
      txt('p6', 'Frau Hartmann', 'Meine Tochter studiert in Großbritannien und zahlt hohe Gebühren. Sie hat dort bessere Betreuung und moderne Ausstattung. Ich glaube, dass Gebühren die Qualität verbessern können, wenn das Geld richtig eingesetzt wird. Eine Einführung auch bei uns wäre sinnvoll.', 'My daughter studies in Britain and pays high fees. She has better supervision and modern equipment there. I believe that fees can improve quality if the money is used properly. Introducing them here too would be sensible.', 'Ma fille étudie en Grande-Bretagne et paie des frais élevés. Elle y bénéficie d’un meilleur encadrement et d’équipements modernes. Je crois que des frais peuvent améliorer la qualité si l’argent est utilisé correctement. Les introduire chez nous aussi serait judicieux.'),
    ], [
      tf('q13', 'Sarah_W befürwortet Studiengebühren.', 'Sarah_W supports tuition fees.', 'Sarah_W soutient les frais d’inscription.', false, ['"strikt dagegen".', '« strikt dagegen ».'], 'p1'),
      tf('q14', 'Prof. Möller unterstützt moderate, nachträglich zurückgezahlte Gebühren.', 'Prof. Möller supports moderate fees paid back later.', 'Le Prof. Möller soutient des frais modérés remboursés plus tard.', true, ['"Ich befürworte eine solche Regelung."', '« Ich befürworte eine solche Regelung. »'], 'p2'),
      tf('q15', 'Kemal Y. würde Gebühren ablehnen.', 'Kemal Y. would reject fees.', 'Kemal Y. refuserait des frais.', false, ['He values free studies.', 'Il apprécie les études gratuites.'], 'p3'),
      tf('q16', 'Dagmar L. hält Gebühren grundsätzlich für gerecht.', 'Dagmar L. thinks fees are basically fair.', 'Dagmar L. trouve les frais fondamentalement justes.', true, ['With scholarships.', 'Avec des bourses.'], 'p4'),
      tf('q17', 'Ben_F. ist für Studiengebühren.', 'Ben_F. is in favour of tuition fees.', 'Ben_F. est favorable aux frais d’inscription.', false, ['"entschieden dagegen".', '« entschieden dagegen ».'], 'p5'),
      tf('q18', 'Frau Hartmann hält die Einführung von Gebühren für sinnvoll.', 'Mrs Hartmann thinks introducing fees would be sensible.', 'Mme Hartmann trouve judicieux d’introduire des frais.', true, ['"wäre sinnvoll".', '« wäre sinnvoll ».'], 'p6'),
    ]),

    lesenMatch('goethe-b2-5-l4', 4, 'Teil 4', [
      'Lesen Sie die Aussagen 19 bis 24 und die Texte a bis h. Welcher Text passt zu welcher Aussage? Zu einer Aussage passt kein Text. Markieren Sie dann „x“.',
      'Read statements 19 to 24 and texts a to h. Which text fits which statement? One statement has no matching text. Mark “x”.',
      'Lisez les affirmations 19 à 24 et les textes a à h. Quel texte correspond à quelle affirmation ? Pour une affirmation, aucun texte ne convient. Marquez « x ».',
    ], true, [
      txt('a', undefined, 'Studienberatung für Abiturienten: Wir helfen Ihnen bei der Wahl des richtigen Studiengangs. Persönliche Gespräche, Eignungstests und Informationen zu Bewerbung und Finanzierung. Anmeldung online.', 'Study guidance for school-leavers: we help you choose the right degree course. Personal meetings, aptitude tests and information on application and funding. Registration online.', 'Orientation pour bacheliers : nous vous aidons à choisir la bonne filière. Entretiens personnels, tests d’aptitude et informations sur la candidature et le financement. Inscription en ligne.', 'a'),
      txt('b', undefined, 'Schreibwerkstatt für Studierende: Lernen Sie, wissenschaftliche Arbeiten zu planen, zu gliedern und zu zitieren. Samstags, vier Termine, Teilnahme kostenlos für Mitglieder der Universität.', 'Writing workshop for students: learn to plan, structure and cite academic papers. Saturdays, four sessions, participation free for members of the university.', 'Atelier d’écriture pour étudiants : apprenez à planifier, structurer et citer des travaux scientifiques. Le samedi, quatre séances, participation gratuite pour les membres de l’université.', 'b'),
      txt('c', undefined, 'Nachhilfe Mathematik: Erfahrene Lehrerin hilft Schülern der Oberstufe bei der Vorbereitung auf das Abitur. Einzel- oder Gruppenunterricht, bei Ihnen oder online. Probestunde gratis.', 'Maths tutoring: experienced teacher helps upper-school pupils prepare for the Abitur. Individual or group lessons, at your home or online. Trial lesson free.', 'Soutien en mathématiques : une enseignante expérimentée aide les lycéens à préparer le bac. Cours individuels ou en groupe, chez vous ou en ligne. Cours d’essai gratuit.', 'c'),
      txt('d', undefined, 'Stipendien für Auslandssemester: Der Austauschdienst fördert Studierende, die ein Semester im Ausland verbringen möchten. Bewerbungsschluss: 15. Januar. Informationsveranstaltung am 10. Dezember.', 'Scholarships for semesters abroad: the exchange service supports students who want to spend a semester abroad. Application deadline: 15 January. Information event on 10 December.', 'Bourses pour semestres à l’étranger : le service d’échanges soutient les étudiants qui souhaitent passer un semestre à l’étranger. Date limite de candidature : 15 janvier. Réunion d’information le 10 décembre.', 'd'),
      txt('e', undefined, 'Wohnheimplatz frei: Im Studentenwohnheim am Campus ist ab sofort ein Einzelzimmer frei. Miete 280 Euro inklusive Nebenkosten und Internet. Besichtigung nach Vereinbarung.', 'Hall of residence room free: a single room is available immediately in the student hall of residence on campus. Rent 280 euros including utilities and internet. Viewing by arrangement.', 'Chambre en résidence libre : une chambre individuelle est libre immédiatement dans la résidence étudiante du campus. Loyer 280 euros charges et internet compris. Visite sur rendez-vous.', 'e'),
      txt('f', undefined, 'Karriereberatung im Hochschulbüro: Lebenslauf-Check, Bewerbungstraining und Vermittlung von Praktika. Termine nach Anmeldung. Der Service ist für Studierende kostenlos.', 'Careers advice at the university office: CV check, application training and placement of internships. Appointments by registration. The service is free for students.', 'Conseil de carrière au bureau de l’université : vérification du CV, entraînement aux candidatures et mise en relation pour des stages. Rendez-vous sur inscription. Le service est gratuit pour les étudiants.', 'f'),
      txt('g', undefined, 'Weiterbildung berufsbegleitend: Master in Betriebswirtschaft in vier Semestern, Vorlesungen an Wochenenden und online. Für Berufstätige mit mindestens zwei Jahren Erfahrung. Gebühren: 400 Euro pro Monat.', 'Part-time further education: master’s in business administration in four semesters, lectures at weekends and online. For working people with at least two years’ experience. Fees: 400 euros per month.', 'Formation continue en cours d’emploi : master en gestion en quatre semestres, cours le week-end et en ligne. Pour les actifs avec au moins deux ans d’expérience. Frais : 400 euros par mois.', 'g'),
      txt('h', undefined, 'Sprachenzentrum: Kurse in Englisch, Spanisch, Chinesisch und Russisch für Studierende aller Fächer. Neue Kurse ab Oktober. Einstufungstest im Sekretariat. Teilnahmegebühr: 30 Euro pro Semester.', 'Language centre: courses in English, Spanish, Chinese and Russian for students of all subjects. New courses from October. Placement test at the office. Participation fee: 30 euros per semester.', 'Centre de langues : cours d’anglais, d’espagnol, de chinois et de russe pour les étudiants de toutes les filières. Nouveaux cours à partir d’octobre. Test de niveau au secrétariat. Frais de participation : 30 euros par semestre.', 'h'),
    ], [
      mt('q19', 'Lea hat gerade Abitur gemacht und weiß nicht, was sie studieren soll.', 'Lea has just finished her Abitur and does not know what to study.', 'Léa vient de passer son bac et ne sait pas ce qu’elle doit étudier.', 'a', ['Ad a: study guidance.', 'Annonce a : orientation.']),
      mt('q20', 'Paul möchte nach dem Studium schnell einen guten Praktikumsplatz finden.', 'Paul wants to quickly find a good internship after his studies.', 'Paul veut trouver vite une bonne place de stage après ses études.', 'f', ['Ad f: careers advice, internships.', 'Annonce f : conseil de carrière, stages.']),
      mt('q21', 'Mia schreibt gerade ihre erste Seminararbeit und braucht Hilfe bei der Struktur.', 'Mia is writing her first seminar paper and needs help with the structure.', 'Mia rédige son premier travail de séminaire et a besoin d’aide pour la structure.', 'b', ['Ad b: writing workshop.', 'Annonce b : atelier d’écriture.']),
      mt('q22', 'Ein Student möchte im nächsten Jahr in Spanien studieren und braucht finanzielle Unterstützung.', 'A student wants to study in Spain next year and needs financial support.', 'Un étudiant veut étudier en Espagne l’an prochain et a besoin d’un soutien financier.', 'd', ['Ad d: scholarships.', 'Annonce d : bourses.']),
      mt('q23', 'Eine Ingenieurin mit fünf Jahren Berufserfahrung möchte nebenbei einen Master machen.', 'An engineer with five years’ work experience wants to do a master’s on the side.', 'Une ingénieure avec cinq ans d’expérience veut faire un master à côté.', 'g', ['Ad g: part-time master’s.', 'Annonce g : master en cours d’emploi.']),
      mt('q24', 'Ein Student sucht eine Wohnung mit Garten außerhalb der Stadt.', 'A student is looking for a flat with a garden outside the city.', 'Un étudiant cherche un appartement avec jardin à l’extérieur de la ville.', 'x', ['No ad offers this.', 'Aucune annonce ne propose cela.']),
    ]),

    lesenMC('goethe-b2-5-l5', 5, 'Teil 5', [
      'Lesen Sie den Text und die Aufgaben 25 bis 30 dazu. Wählen Sie die richtige Lösung a, b oder c.',
      'Read the text and tasks 25 to 30. Choose the correct answer a, b or c.',
      'Lisez le texte et les exercices 25 à 30. Choisissez la bonne réponse a, b ou c.',
    ], [
      txt('t5', 'Bibliotheksordnung der Universitätsbibliothek (Auszug)',
        'Ausleihe: Studierende können bis zu 30 Medien gleichzeitig ausleihen. Die Leihfrist beträgt vier Wochen und kann zweimal online verlängert werden, sofern kein anderer Nutzer das Medium vorgemerkt hat. Für Zeitschriften und Nachschlagewerke gilt eine Präsenznutzung.\n\nGebühren: Bei verspäteter Rückgabe fallen 50 Cent pro Medium und Tag an. Bei Verlust eines Mediums wird der Wiederbeschaffungswert zuzüglich einer Bearbeitungsgebühr von 15 Euro berechnet.\n\nArbeitsplätze: Gruppenarbeitsräume können bis zu zwei Wochen im Voraus online reserviert werden. Reservierte Räume, die nicht innerhalb von 15 Minuten genutzt werden, verfallen. Im Lesesaal ist leises Arbeiten erforderlich; Telefonieren ist nur im Foyer erlaubt.\n\nEssen und Trinken: Getränke in verschließbaren Behältern sind gestattet, Speisen nur im Café. Bei Verstößen kann ein Hausverbot ausgesprochen werden.',
        'Library rules of the university library (extract)\n\nBorrowing: students can borrow up to 30 items at the same time. The loan period is four weeks and can be extended twice online, provided no other user has reserved the item. For journals and reference works reference-only use applies.\n\nFees: for late return 50 cents per item and day are charged. If an item is lost, the replacement value plus a processing fee of 15 euros is charged.\n\nWorkspaces: group study rooms can be reserved online up to two weeks in advance. Reserved rooms that are not used within 15 minutes lapse. Quiet work is required in the reading room; making phone calls is only allowed in the foyer.\n\nFood and drink: drinks in closable containers are permitted, food only in the café. In case of violations a ban from the premises may be imposed.',
        'Règlement de la bibliothèque universitaire (extrait)\n\nEmprunt : les étudiants peuvent emprunter jusqu’à 30 documents en même temps. La durée de prêt est de quatre semaines et peut être prolongée deux fois en ligne, à condition qu’aucun autre usager n’ait réservé le document. Pour les revues et ouvrages de référence, la consultation sur place s’applique.\n\nFrais : en cas de retard, 50 centimes par document et par jour sont facturés. En cas de perte d’un document, la valeur de remplacement plus des frais de traitement de 15 euros sont facturés.\n\nPlaces de travail : les salles de travail de groupe peuvent être réservées en ligne jusqu’à deux semaines à l’avance. Les salles réservées qui ne sont pas utilisées dans les 15 minutes sont annulées. Dans la salle de lecture, il faut travailler en silence ; téléphoner n’est autorisé que dans le hall.\n\nBoire et manger : les boissons dans des récipients fermables sont autorisées, la nourriture seulement au café. En cas d’infraction, une interdiction d’accès peut être prononcée.'),
    ], [
      mc('q25', 'Wie viele Medien darf man gleichzeitig ausleihen?', 'How many items may you borrow at the same time?', 'Combien de documents peut-on emprunter en même temps ?', [
        ['Bis zu 30.', 'Up to 30.', 'Jusqu’à 30.'],
        ['Bis zu 10.', 'Up to 10.', 'Jusqu’à 10.'],
        ['Unbegrenzt viele.', 'An unlimited number.', 'Un nombre illimité.'],
      ], 0, ['Up to 30 items.', 'Jusqu’à 30 documents.']),
      mc('q26', 'Wann kann man die Leihfrist verlängern?', 'When can you extend the loan period?', 'Quand peut-on prolonger la durée de prêt ?', [
        ['Zweimal online, wenn niemand das Medium vorgemerkt hat.', 'Twice online if nobody has reserved the item.', 'Deux fois en ligne si personne n’a réservé le document.'],
        ['Beliebig oft.', 'As often as you like.', 'Aussi souvent que l’on veut.'],
        ['Nie.', 'Never.', 'Jamais.'],
      ], 0, ['Two online extensions.', 'Deux prolongations en ligne.']),
      mc('q27', 'Was kostet eine verspätete Rückgabe?', 'What does late return cost?', 'Combien coûte un retard de restitution ?', [
        ['50 Cent pro Medium und Tag.', '50 cents per item and day.', '50 centimes par document et par jour.'],
        ['5 Euro pro Woche.', '5 euros per week.', '5 euros par semaine.'],
        ['Nichts.', 'Nothing.', 'Rien.'],
      ], 0, ['50 cents per day.', '50 centimes par jour.']),
      mc('q28', 'Was passiert mit reservierten, aber nicht genutzten Gruppenräumen?', 'What happens to reserved but unused group rooms?', 'Que se passe-t-il pour les salles de groupe réservées mais non utilisées ?', [
        ['Die Reservierung verfällt nach 15 Minuten.', 'The reservation lapses after 15 minutes.', 'La réservation expire après 15 minutes.'],
        ['Sie bleiben den ganzen Tag reserviert.', 'They stay reserved all day.', 'Elles restent réservées toute la journée.'],
        ['Man zahlt eine Gebühr.', 'You pay a fee.', 'On paie des frais.'],
      ], 0, ['15 minutes.', '15 minutes.']),
      mc('q29', 'Wo darf man telefonieren?', 'Where may you make phone calls?', 'Où peut-on téléphoner ?', [
        ['Nur im Foyer.', 'Only in the foyer.', 'Seulement dans le hall.'],
        ['Im Lesesaal.', 'In the reading room.', 'Dans la salle de lecture.'],
        ['Überall.', 'Everywhere.', 'Partout.'],
      ], 0, ['Only in the foyer.', 'Seulement dans le hall.']),
      mc('q30', 'Was gilt für Speisen?', 'What applies to food?', 'Que prévoit-on pour la nourriture ?', [
        ['Sie sind nur im Café erlaubt.', 'They are only allowed in the café.', 'Elle n’est autorisée qu’au café.'],
        ['Sie sind im Lesesaal erlaubt.', 'They are allowed in the reading room.', 'Elle est autorisée dans la salle de lecture.'],
        ['Sie sind überall erlaubt.', 'They are allowed everywhere.', 'Elle est autorisée partout.'],
      ], 0, ['Food only in the café.', 'Nourriture seulement au café.']),
    ]),
  ],

  schreiben: [
    message('goethe-b2-5-s1', 1, 'informal', 'Teil 1', [
      'In einem Internetforum diskutieren Leserinnen und Leser über das Thema „Sollte jeder Student ein Semester im Ausland verbringen?“. Schreiben Sie einen Forumsbeitrag (ca. 150 Wörter). Nehmen Sie Stellung, begründen Sie Ihre Meinung mit zwei Argumenten, nennen Sie ein Gegenargument und schließen Sie mit einer Empfehlung.',
      'In an internet forum readers discuss “Should every student spend a semester abroad?”. Write a forum post (about 150 words). Take a position, justify your opinion with two arguments, name a counter-argument and finish with a recommendation.',
      'Dans un forum, des lecteurs discutent de « Chaque étudiant devrait-il passer un semestre à l’étranger ? ». Écrivez un message de forum (environ 150 mots). Prenez position, justifiez votre opinion avec deux arguments, citez un contre-argument et terminez par une recommandation.',
    ], txt('forum', 'Forum: Auslandssemester Pflicht?',
      'Tim_S: An unserer Uni wird diskutiert, ob ein Auslandssemester für alle Pflicht werden soll. Ich bin unsicher. Was meint ihr?',
      'Tim_S: At our university there is a discussion about whether a semester abroad should become compulsory for all. I am unsure. What do you think?',
      'Tim_S : Dans notre université, on discute pour savoir si un semestre à l’étranger doit devenir obligatoire pour tous. Je suis indécis. Qu’en pensez-vous ?'), [
      { id: 'p1', de: 'Eigene Meinung', en: 'Your opinion', fr: 'Votre opinion', keywords: ['meinung', 'finde', 'der ansicht', 'denke'] },
      { id: 'p2', de: 'Zwei Argumente', en: 'Two arguments', fr: 'Deux arguments', keywords: ['dafür spricht', 'erstens', 'außerdem', 'zum beispiel'] },
      { id: 'p3', de: 'Gegenargument', en: 'A counter-argument', fr: 'Un contre-argument', keywords: ['einwenden', 'andererseits', 'dagegen', 'nachteil'] },
      { id: 'p4', de: 'Empfehlung', en: 'A recommendation', fr: 'Une recommandation', keywords: ['empfehle', 'empfehlung', 'sollte', 'vorschlag'] },
    ], [130, 190], {
      de: 'Hallo Tim,\n\nich bin der Ansicht, dass ein Auslandssemester eine großartige Erfahrung ist, aber ich halte eine Pflicht nicht für sinnvoll. Dafür spricht erstens, dass man seine Sprachkenntnisse stark verbessert und eine andere Kultur kennenlernt. Außerdem wird man selbstständiger, zum Beispiel weil man sich allein um Wohnung und Organisation kümmern muss.\n\nAndererseits kann man einwenden, dass nicht jeder dafür die nötigen finanziellen Mittel hat. Manche Studierende haben außerdem Kinder oder pflegen Angehörige und können gar nicht ins Ausland gehen. Eine Pflicht wäre für sie ungerecht.\n\nDeshalb empfehle ich, das Auslandssemester stark zu fördern, mit Stipendien und guter Beratung, aber freiwillig zu lassen. So können alle profitieren, die wirklich wollen.\n\nViele Grüße\nJulia',
      en: 'Hello Tim,\n\nI am of the opinion that a semester abroad is a great experience, but I do not think a requirement makes sense. In favour of it speaks first that you greatly improve your language skills and get to know another culture. In addition you become more independent, for example because you have to take care of accommodation and organisation alone.\n\nOn the other hand one can object that not everyone has the necessary financial means. Some students also have children or care for relatives and cannot go abroad at all. A requirement would be unfair to them.\n\nI therefore recommend strongly supporting the semester abroad, with scholarships and good advice, but leaving it voluntary. That way everyone who really wants to can benefit.\n\nBest wishes\nJulia',
      fr: 'Bonjour Tim,\n\nJe suis d’avis qu’un semestre à l’étranger est une expérience formidable, mais je ne trouve pas qu’une obligation ait du sens. Ce qui plaide en faveur, c’est premièrement que l’on améliore fortement ses connaissances linguistiques et que l’on découvre une autre culture. De plus, on devient plus autonome, par exemple parce qu’il faut s’occuper seul du logement et de l’organisation.\n\nD’un autre côté, on peut objecter que tout le monde n’a pas les moyens financiers nécessaires. Certains étudiants ont en outre des enfants ou s’occupent de proches et ne peuvent pas partir à l’étranger du tout. Une obligation serait injuste pour eux.\n\nJe recommande donc de soutenir fortement le semestre à l’étranger, avec des bourses et de bons conseils, mais de le laisser facultatif. Ainsi, tous ceux qui le veulent vraiment peuvent en profiter.\n\nCordialement\nJulia',
    }),

    message('goethe-b2-5-s2', 2, 'formal', 'Teil 2', [
      'Sie studieren an einer Universität und haben festgestellt, dass Ihre Prüfungsnote im Online-Portal falsch eingetragen wurde. Schreiben Sie eine formelle E-Mail an das Prüfungsamt (ca. 100 Wörter). Beschreiben Sie das Problem, sagen Sie, was Sie bereits getan haben, und bitten Sie um Korrektur bis zu einem bestimmten Datum.',
      'You study at a university and have noticed that your exam grade was entered incorrectly in the online portal. Write a formal e-mail to the examinations office (about 100 words). Describe the problem, say what you have already done and ask for a correction by a certain date.',
      'Vous étudiez dans une université et avez constaté que votre note d’examen a été mal saisie dans le portail en ligne. Écrivez un e-mail formel au bureau des examens (environ 100 mots). Décrivez le problème, dites ce que vous avez déjà fait et demandez une correction avant une date précise.',
    ], undefined, [
      { id: 'p1', de: 'Problem beschreiben', en: 'Describe the problem', fr: 'Décrire le problème', keywords: ['note', 'falsch', 'eingetragen', 'portal', 'prüfung'] },
      { id: 'p2', de: 'Bisherige Schritte', en: 'Steps taken so far', fr: 'Démarches déjà faites', keywords: ['bescheid', 'dozent', 'nachgefragt', 'bereits', 'kontaktiert'] },
      { id: 'p3', de: 'Korrektur bis zu einem Datum', en: 'Correction by a date', fr: 'Correction avant une date', keywords: ['korrektur', 'korrigieren', 'bis zum', 'frist', 'bitte'] },
    ], [80, 130], {
      de: 'Sehr geehrte Damen und Herren,\n\nleider muss ich feststellen, dass meine Note für die Prüfung „Statistik II“ im Online-Portal falsch eingetragen wurde. Dort steht eine 3,7, obwohl auf meinem Prüfungsbescheid eine 2,3 steht.\n\nIch habe bereits mit dem Dozenten gesprochen, der mir bestätigt hat, dass die Note 2,3 korrekt ist. Er hat mich gebeten, mich an Sie zu wenden. Ich bitte Sie daher, die Note bis zum 15. Februar zu korrigieren, da ich sie für meine Bewerbung um einen Masterplatz benötige.\n\nIch freue mich auf Ihre Rückmeldung.\n\nMit freundlichen Grüßen\nLaura Fischer',
      en: 'Dear Sir or Madam,\n\nUnfortunately I must note that my grade for the exam “Statistics II” was entered incorrectly in the online portal. It shows a 3.7 although my exam certificate says 2.3.\n\nI have already spoken with the lecturer, who confirmed to me that the grade 2.3 is correct. He asked me to contact you. I therefore ask you to correct the grade by 15 February as I need it for my application for a master’s place.\n\nI look forward to your reply.\n\nYours sincerely\nLaura Fischer',
      fr: 'Mesdames et Messieurs,\n\nJe dois malheureusement constater que ma note à l’examen « Statistique II » a été mal saisie dans le portail en ligne. Il y figure un 3,7 alors que mon relevé d’examen indique 2,3.\n\nJ’ai déjà parlé avec l’enseignant, qui m’a confirmé que la note 2,3 est correcte. Il m’a demandé de m’adresser à vous. Je vous prie donc de corriger la note avant le 15 février, car j’en ai besoin pour ma candidature à une place en master.\n\nJ’attends votre retour.\n\nCordialement\nLaura Fischer',
    }),
  ],

  sprechen: [
    speak('goethe-b2-5-p1', 1, 'Teil 1: Ein Thema präsentieren', 5, [
      'Sie ziehen eine Themenkarte und halten einen kurzen Vortrag (ca. 4 Minuten). 1. Einleitung: Nennen Sie das Thema. 2. Berichten Sie von Ihren Erfahrungen. 3. Sprechen Sie über die Situation in Ihrem Heimatland. 4. Nennen Sie Vor- und Nachteile, äußern Sie Ihre Meinung und bedanken Sie sich.',
      'You draw a topic card and give a short talk (about 4 minutes). 1. Introduction: name the topic. 2. Report on your experiences. 3. Talk about the situation in your home country. 4. Name advantages and disadvantages, give your opinion and say thank you.',
      'Vous tirez une carte de thème et faites un court exposé (environ 4 minutes). 1. Introduction : annoncez le thème. 2. Parlez de vos expériences. 3. Parlez de la situation dans votre pays d’origine. 4. Citez avantages et inconvénients, donnez votre opinion et remerciez.',
    ], [
      { id: 'b2-5-p1a', cue: 'Thema: Studium im Ausland', cueEn: 'Topic: studying abroad', cueFr: 'Thème : étudier à l’étranger',
        sample: 'Guten Tag, mein Thema ist „Studium im Ausland“. Ich habe selbst ein Jahr in Deutschland studiert und viel dabei gelernt. In meinem Heimatland ist ein Studium im Ausland ein großer Wunsch, aber es ist teuer. Ein Vorteil ist, dass man seine Sprache verbessert und neue Freunde findet. Ein Nachteil sind die hohen Kosten und die Entfernung von der Familie. Meiner Meinung nach lohnt es sich, wenn man ein Stipendium bekommt. Vielen Dank.',
        sampleEn: 'Good day, my topic is “Studying abroad”. I myself studied in Germany for a year and learnt a lot. In my home country studying abroad is a great wish but it is expensive. An advantage is that you improve your language and find new friends. A disadvantage is the high cost and the distance from the family. In my opinion it is worth it if you get a scholarship. Thank you very much.',
        sampleFr: 'Bonjour, mon thème est « Étudier à l’étranger ». J’ai moi-même étudié un an en Allemagne et j’y ai beaucoup appris. Dans mon pays d’origine, étudier à l’étranger est un grand souhait, mais c’est cher. Un avantage est que l’on améliore sa langue et que l’on se fait de nouveaux amis. Un inconvénient est le coût élevé et l’éloignement de la famille. À mon avis, cela en vaut la peine si l’on obtient une bourse. Merci beaucoup.' },
      { id: 'b2-5-p1b', cue: 'Thema: Lebenslanges Lernen', cueEn: 'Topic: lifelong learning', cueFr: 'Thème : apprendre tout au long de la vie',
        sample: 'Ich spreche heute über „Lebenslanges Lernen“. Ich lerne nach der Arbeit Deutsch und besuche manchmal Online-Kurse. In meinem Heimatland ist Weiterbildung für viele zu teuer. Ein Vorteil ist, dass man im Beruf flexibel bleibt. Ein Nachteil ist der Zeitaufwand neben Beruf und Familie. Ich bin überzeugt, dass es sich langfristig lohnt. Danke fürs Zuhören.',
        sampleEn: 'Today I am talking about “Lifelong learning”. After work I learn German and sometimes attend online courses. In my home country further training is too expensive for many. An advantage is that you stay flexible at work. A disadvantage is the time required alongside work and family. I am convinced that it pays off in the long run. Thank you for listening.',
        sampleFr: 'Aujourd’hui je parle de « La formation tout au long de la vie ». Après le travail, j’apprends l’allemand et je suis parfois des cours en ligne. Dans mon pays d’origine, la formation continue est trop chère pour beaucoup. Un avantage est que l’on reste flexible dans le métier. Un inconvénient est le temps nécessaire en plus du travail et de la famille. Je suis convaincu que cela en vaut la peine à long terme. Merci de m’avoir écouté.' },
      { id: 'b2-5-p1c', cue: 'Thema: Schule früher und heute', cueEn: 'Topic: school then and now', cueFr: 'Thème : l’école hier et aujourd’hui',
        sample: 'Mein Thema ist „Schule früher und heute“. Meine Eltern erzählen, dass der Unterricht früher viel strenger war. In meinem Heimatland gibt es heute mehr Gruppenarbeit und Computer. Ein Vorteil ist, dass Schüler selbstständiger lernen. Ein Nachteil ist, dass manche den Anschluss verlieren, wenn sie keine Unterstützung zu Hause haben. Meiner Meinung nach sollten Schulen individuelle Förderung stärker anbieten. Vielen Dank.',
        sampleEn: 'My topic is “School then and now”. My parents say that lessons used to be much stricter. In my home country there is today more group work and computers. An advantage is that pupils learn more independently. A disadvantage is that some lose touch if they have no support at home. In my opinion schools should offer individual support more strongly. Thank you very much.',
        sampleFr: 'Mon thème est « L’école hier et aujourd’hui ». Mes parents racontent que les cours étaient autrefois beaucoup plus stricts. Dans mon pays d’origine, il y a aujourd’hui plus de travail de groupe et d’ordinateurs. Un avantage est que les élèves apprennent de façon plus autonome. Un inconvénient est que certains décrochent s’ils n’ont pas de soutien à la maison. À mon avis, les écoles devraient proposer plus fortement un soutien individuel. Merci beaucoup.' },
    ]),
    speak('goethe-b2-5-p2', 2, 'Teil 2: Diskutieren und eine Lösung finden', 5, [
      'Diskutieren Sie mit Ihrem Partner / Ihrer Partnerin zum Thema „Sollten Studiengebühren eingeführt werden?“. Tauschen Sie Argumente aus, reagieren Sie auf die Meinung Ihres Partners und versuchen Sie, einen Kompromiss zu finden.',
      'Discuss with your partner the topic “Should tuition fees be introduced?”. Exchange arguments, react to your partner’s opinion and try to find a compromise.',
      'Discutez avec votre partenaire du thème « Faut-il introduire des frais d’inscription ? ». Échangez des arguments, réagissez à l’avis de votre partenaire et essayez de trouver un compromis.',
    ], [
      { id: 'b2-5-p2a', cue: 'Eigene Position nennen und begründen', cueEn: 'State and justify your position', cueFr: 'Énoncer et justifier sa position',
        sample: 'Ich bin gegen Studiengebühren, weil sie Menschen aus einkommensschwachen Familien abschrecken. Bildung sollte für alle zugänglich sein. Außerdem wird das Studium dadurch noch teurer, als es ohnehin schon ist.',
        sampleEn: 'I am against tuition fees because they deter people from low-income families. Education should be accessible to all. In addition this makes studying even more expensive than it already is.',
        sampleFr: 'Je suis contre les frais d’inscription, car ils dissuadent les personnes issues de familles à faible revenu. L’éducation devrait être accessible à tous. De plus, les études deviennent ainsi encore plus chères qu’elles ne le sont déjà.' },
      { id: 'b2-5-p2b', cue: 'Auf ein Gegenargument reagieren', cueEn: 'React to a counter-argument', cueFr: 'Réagir à un contre-argument',
        sample: 'Das stimmt, die Universitäten brauchen mehr Geld für die Ausstattung. Allerdings könnte man das auch über Steuern finanzieren. Wie siehst du das?',
        sampleEn: 'That is true, universities need more money for equipment. However this could also be financed through taxes. How do you see that?',
        sampleFr: 'C’est vrai, les universités ont besoin de plus d’argent pour l’équipement. Cependant, on pourrait aussi le financer par les impôts. Comment vois-tu cela ?' },
      { id: 'b2-5-p2c', cue: 'Einen Kompromiss vorschlagen', cueEn: 'Suggest a compromise', cueFr: 'Proposer un compromis',
        sample: 'Wie wäre es mit einem Modell, bei dem man erst nach dem Studium zahlt, wenn man ein bestimmtes Einkommen erreicht? Das wäre fairer und würde niemanden abschrecken.',
        sampleEn: 'How about a model in which you only pay after your studies once you reach a certain income? That would be fairer and would deter nobody.',
        sampleFr: 'Que diriez-vous d’un modèle où l’on ne paie qu’après les études, lorsqu’on atteint un certain revenu ? Ce serait plus juste et ne dissuaderait personne.' },
    ]),
  ],
};
