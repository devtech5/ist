// Réalisations de terrain illustrées, reprises du dossier institutionnel de l'ONG.
//
// Règles appliquées aux légendes :
// - la localité n'est citée que lorsque le document l'associe sans ambiguïté à
//   la photographie ; sinon la légende reste générique ;
// - les intitulés de litiges nommant des villages, des chefferies ou des
//   communautés ont été neutralisés ;
// - les photographies montrant des mineurs identifiables ont été écartées, en
//   attente des autorisations de diffusion.

export const campagnes = [
  {
    slug: "covid-savon",
    extrait:
      "Une campagne d'intensification de la sensibilisation menée dans les villages de la région, doublée d'une formation à la fabrication du savon liquide.",
    domaine: "sante",
    titre: "Sensibilisation COVID-19 et formation à la fabrication du savon liquide",
    periode: "Janvier – février 2021",
    lieu: "Milieu urbain et rural de la région de San-Pédro",
    financement: "5 000 000 FCFA — Union européenne, projet LIANE 2",
    resultat:
      "35 058 femmes, 30 301 hommes, 27 242 jeunes et 19 979 enfants touchés",
    texte:
      "Dans le cadre du projet LIANE 2, l'ONG a mené une campagne d'intensification des activités de sensibilisation sur la COVID-19 en milieu urbain et rural. Les relais communautaires ont sillonné les villages pour informer les populations, distribuer du gel hydroalcoolique et remettre des kits d'hygiène aux autorités locales, aux écoles et aux maternités. La campagne s'est doublée d'une formation à la fabrication du savon liquide, devenue depuis une activité génératrice de revenus pour de nombreux jeunes de la région.",
    photos: [
      { src: "covid-savon-01", legende: "Formation à la fabrication du savon liquide à Grand Béréby" },
      { src: "covid-savon-02", legende: "Sensibilisation de proximité sur la COVID-19 à Moussadougou" },
      { src: "covid-savon-03", legende: "Les relais communautaires de l'ONG IST mobilisés pour la campagne" },
      { src: "covid-savon-04", legende: "Remise de kits d'hygiène aux responsables d'une localité" },
      { src: "covid-savon-05", legende: "Distribution de gel hydroalcoolique" },
      { src: "covid-savon-06", legende: "Préparation du savon liquide lors d'une séance de démonstration" },
      { src: "covid-savon-07", legende: "Démonstration de fabrication auprès des femmes du village" },
      { src: "covid-savon-08", legende: "Reportage télévisé consacré à la campagne" },
      { src: "covid-savon-09", legende: "Exercice pratique de fabrication mené par des femmes leaders" },
    ],
  },
  {
    slug: "depistage",
    extrait:
      "Une journée de dépistage gratuit ouverte à tous au siège de l'ONG, avec orientation médicale immédiate des cas positifs.",
    domaine: "sante",
    titre: "Dépistage gratuit de l'hypertension, du diabète et des hépatites",
    periode: "28 juin 2019",
    lieu: "Siège de l'ONG, quartier Bardot 18, San-Pédro",
    financement: "Fonds propres, avec l'appui du laboratoire SCILIFE",
    resultat:
      "307 personnes dépistées : 55 cas d'hypertension, 39 de diabète, 6 d'hépatite B et 3 d'hépatite C",
    texte:
      "En marge de son assemblée générale, l'ONG a ouvert son siège pour une journée de sensibilisation et de dépistage gratuit. Dès les premières heures, les stands ont été pris d'assaut, en particulier par les personnes du troisième âge. Chaque personne dépistée positive a été orientée vers une prise en charge médicale.",
    lien: "/actualites/depistage-gratuit-san-pedro/",
    photos: [
      { src: "depistage-06", legende: "Forte affluence dès l'ouverture des stands" },
      { src: "depistage-01", legende: "Stands de dépistage installés au siège de l'ONG" },
      { src: "depistage-02", legende: "Prise de la tension artérielle" },
      { src: "depistage-03", legende: "Prélèvement pour le dépistage des hépatites" },
      { src: "depistage-04", legende: "Test de glycémie" },
      { src: "depistage-05", legende: "L'équipe de sensibilisation de l'ONG IST" },
    ],
  },
  {
    slug: "antennes",
    extrait:
      "Des structures de soins installées à la demande des communautés, là où aucune couverture sanitaire n'existait.",
    domaine: "sante",
    titre: "Installation d'antennes dans les zones de silence sanitaire",
    periode: "1999 – 2022",
    lieu: "Territoire national",
    financement: "Fonds propres de l'ONG",
    resultat: "40 antennes installées",
    texte:
      "À la demande des chefs de village ou des ressortissants d'une localité, l'ONG installe des antennes dans les zones dépourvues de couverture sanitaire. Les aides-soignants formés par IST y sont établis à leur propre compte, sous la supervision de l'ONG, et participent à la mise en œuvre de ses projets en tant que relais communautaires. Le dispositif assure à la fois un accès aux soins de proximité et l'insertion professionnelle des jeunes formés.",
    photos: [
      { src: "antennes-01", legende: "Bâtiment d'une antenne installée en zone de silence sanitaire" },
      { src: "antennes-02", legende: "Salle de soins équipée" },
      { src: "antennes-03", legende: "Salle d'accueil des patients" },
      { src: "antennes-04", legende: "Table d'examen et matériel de soins" },
    ],
  },
  {
    slug: "communautaire",
    extrait:
      "Des séances d'information tenues au cœur des villages sur le paludisme, l'hygiène et la santé maternelle.",
    domaine: "sante",
    titre: "Sensibilisation en assemblée villageoise",
    periode: "Depuis 1998",
    lieu: "Villages et campements des zones d'intervention",
    financement: "Fonds propres et projets financés",
    resultat: "Séances régulières dans les villages des zones couvertes",
    texte:
      "Les campagnes d'information, d'éducation et de communication pour un changement de comportement (IEC/CCC) se tiennent au cœur des villages. Elles portent sur le paludisme, l'hygiène du cadre de vie, les maladies diarrhéiques, les consultations prénatales, l'accouchement en milieu hospitalier et le cancer du col de l'utérus.",
    photos: [
      { src: "communautaire-01", legende: "Séance de sensibilisation en assemblée villageoise" },
      { src: "communautaire-02", legende: "Sensibilisation des femmes sur le paludisme et l'hygiène" },
      { src: "communautaire-03", legende: "Prise de parole lors d'une séance de sensibilisation" },
      { src: "communautaire-04", legende: "Assemblée villageoise réunie pour une séance d'information" },
    ],
  },
  {
    slug: "agr",
    extrait:
      "Un accompagnement des associations féminines et des familles vulnérables vers l'autonomie économique.",
    domaine: "social-developpement",
    titre: "Appui à la création d'activités génératrices de revenus",
    periode: "Depuis 2006",
    lieu: "Région de San-Pédro",
    financement: "Fonds propres et appuis de partenaires",
    resultat:
      "Associations féminines, veuves et familles accompagnées vers l'autonomie économique",
    texte:
      "L'ONG appuie les associations féminines, les veuves et les familles prenant en charge des orphelins et enfants vulnérables dans la création d'activités génératrices de revenus : vente d'huile de palme, commerce de proximité, production et vente de savon liquide. Les bénéficiaires sont également formés au plaidoyer pour porter leurs propres projets.",
    photos: [
      { src: "agr-01", legende: "Remise d'un appui pour une activité de vente d'huile de palme" },
      { src: "agr-02", legende: "Accompagnement d'une bénéficiaire dans son activité" },
    ],
  },
  {
    slug: "formation",
    extrait:
      "La formation continue des membres, des relais communautaires et des associations partenaires.",
    domaine: "social-developpement",
    titre: "Formation des membres et des relais communautaires",
    periode: "Depuis 1998",
    lieu: "Siège de l'ONG et antennes",
    financement: "Fonds propres et projets financés",
    resultat: "50 relais communautaires et 40 responsables d'antennes formés",
    texte:
      "L'ONG forme ses membres, ses relais communautaires et les associations partenaires : bonne gouvernance, leadership associatif fondé sur le genre, redevabilité sociale, typologies des violences basées sur le genre et stratégies de plaidoyer. Elle participe également à la formation d'aides-soignants dans les établissements techniques et professionnels de la région.",
    photos: [
      { src: "formation-01", legende: "Session de formation des membres au siège de l'ONG" },
      { src: "formation-02", legende: "Participants réunis lors d'une session de formation" },
      { src: "formation-03", legende: "Séance de travail au siège de l'ONG" },
    ],
  },
  {
    slug: "salubrite",
    extrait:
      "La participation de l'ONG aux opérations de salubrité, prolongement direct de ses campagnes de prévention.",
    domaine: "social-developpement",
    titre: "Participation aux opérations de salubrité",
    periode: "Depuis 2011",
    lieu: "San-Pédro et environs",
    financement: "Fonds propres de l'ONG",
    resultat: "Participation régulière aux journées du Grand Ménage",
    texte:
      "La direction et les membres de l'ONG participent aux activités de lutte contre l'insalubrité, en lien avec les autorités locales : curage des caniveaux, nettoyage des voies et des espaces publics. Ces opérations prolongent les campagnes de prévention du paludisme et des maladies diarrhéiques.",
    photos: [
      { src: "salubrite-01", legende: "Mobilisation des équipes pour une journée de salubrité" },
      { src: "salubrite-02", legende: "Curage des caniveaux" },
      { src: "salubrite-03", legende: "Nettoyage des voies publiques" },
    ],
  },
  {
    slug: "mediation",
    extrait:
      "Des médiations conduites dans les conflits fonciers et communautaires, jusqu'à l'engagement écrit des parties.",
    domaine: "cohesion-sociale",
    titre: "Médiation communautaire et règlement pacifique des conflits",
    periode: "2021 – 2022",
    lieu: "Région de San-Pédro et département de Tabou",
    financement: "Fonds propres et projet LIANE 2",
    resultat:
      "Une dizaine de conflits communautaires et fonciers réglés entre 2021 et mai 2022",
    texte:
      "En sa qualité d'ambassadeur de paix et de président de la cellule civilo-militaire de San-Pédro, le président du conseil d'administration de l'ONG conduit des médiations dans les conflits intracommunautaires et intercommunautaires : litiges fonciers, différends liés à l'installation de chefs de village ou de canton, tensions héritées des crises postélectorales. Les échanges se concluent par des engagements consensuels des parties, parfois formalisés par la signature de chartes pour la paix et le développement.",
    photos: [
      { src: "mediation-01", legende: "Rencontre de médiation réunissant les parties et les autorités coutumières" },
      { src: "mediation-02", legende: "Site d'installation d'antennes de télécommunication ayant fait l'objet d'une médiation foncière" },
      { src: "mediation-03", legende: "Intervention auprès d'élèves en grève pour un retour au calme" },
      { src: "mediation-04", legende: "Rétablissement de la circulation après une journée de tension" },
    ],
  },
];
