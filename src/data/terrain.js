// Réalisations de terrain illustrées, reprises du dossier institutionnel.
//
// `vedette: true` fait entrer la réalisation dans le diaporama plein écran de
// la page d'accueil, qui en tire quatre au hasard à chaque visite.
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
    vedette: true,
    domaine: "sante",
    titre: {
      fr: "Sensibilisation COVID-19 et formation à la fabrication du savon liquide",
      en: "COVID-19 awareness and liquid soap making training",
    },
    extrait: {
      fr: "Une campagne d'intensification de la sensibilisation menée dans les villages de la région, doublée d'une formation à la fabrication du savon liquide.",
      en: "An intensive awareness campaign across the region's villages, paired with training in liquid soap production.",
    },
    periode: { fr: "Janvier – février 2021", en: "January – February 2021" },
    lieu: {
      fr: "Milieu urbain et rural de la région de San-Pédro",
      en: "Urban and rural areas of the San-Pédro region",
    },
    financement: {
      fr: "5 000 000 FCFA — Union européenne, projet LIANE 2",
      en: "5,000,000 FCFA — European Union, LIANE 2 programme",
    },
    resultat: {
      fr: "35 058 femmes, 30 301 hommes, 27 242 jeunes et 19 979 enfants touchés",
      en: "35,058 women, 30,301 men, 27,242 young people and 19,979 children reached",
    },
    texte: {
      fr: "Dans le cadre du projet LIANE 2, l'ONG a mené une campagne d'intensification des activités de sensibilisation sur la COVID-19 en milieu urbain et rural. Les relais communautaires ont sillonné les villages pour informer les populations, distribuer du gel hydroalcoolique et remettre des kits d'hygiène aux autorités locales, aux écoles et aux maternités. La campagne s'est doublée d'une formation à la fabrication du savon liquide, devenue depuis une activité génératrice de revenus pour de nombreux jeunes de la région.",
      en: "As part of the LIANE 2 programme, the organisation ran an intensive COVID-19 awareness campaign in both urban and rural areas. Community health workers travelled from village to village to inform residents, hand out hand sanitiser and deliver hygiene kits to local authorities, schools and maternity units. The campaign also included training in liquid soap production, which has since become a source of income for many young people in the region.",
    },
    photos: [
      {
        src: "covid-savon-01",
        legende: {
          fr: "Formation à la fabrication du savon liquide à Grand Béréby",
          en: "Liquid soap making training in Grand Béréby",
        },
      },
      {
        src: "covid-savon-02",
        legende: {
          fr: "Sensibilisation de proximité sur la COVID-19 à Moussadougou",
          en: "Door-to-door COVID-19 awareness work in Moussadougou",
        },
      },
      {
        src: "covid-savon-03",
        legende: {
          fr: "Les relais communautaires de l'ONG IST mobilisés pour la campagne",
          en: "IST community health workers mobilised for the campaign",
        },
      },
      {
        src: "covid-savon-04",
        legende: {
          fr: "Remise de kits d'hygiène aux responsables d'une localité",
          en: "Hygiene kits handed over to local officials",
        },
      },
      {
        src: "covid-savon-05",
        legende: {
          fr: "Distribution de gel hydroalcoolique",
          en: "Hand sanitiser distribution",
        },
      },
      {
        src: "covid-savon-06",
        legende: {
          fr: "Préparation du savon liquide lors d'une séance de démonstration",
          en: "Preparing liquid soap during a demonstration session",
        },
      },
      {
        src: "covid-savon-07",
        legende: {
          fr: "Démonstration de fabrication auprès des femmes du village",
          en: "Production demonstration for the village women",
        },
      },
      {
        src: "covid-savon-08",
        legende: {
          fr: "Reportage télévisé consacré à la campagne",
          en: "Television coverage of the campaign",
        },
      },
      {
        src: "covid-savon-09",
        legende: {
          fr: "Exercice pratique de fabrication mené par des femmes leaders",
          en: "Hands-on production led by women community leaders",
        },
      },
    ],
  },
  {
    slug: "depistage",
    vedette: true,
    domaine: "sante",
    titre: {
      fr: "Dépistage gratuit de l'hypertension, du diabète et des hépatites",
      en: "Free screening for hypertension, diabetes and hepatitis",
    },
    extrait: {
      fr: "Une journée de dépistage gratuit ouverte à tous au siège de l'ONG, avec orientation médicale immédiate des cas positifs.",
      en: "A free screening day open to all at the head office, with immediate medical referral for positive cases.",
    },
    periode: { fr: "28 juin 2019", en: "28 June 2019" },
    lieu: {
      fr: "Siège de l'ONG, quartier Bardot 18, San-Pédro",
      en: "Head office, Bardot 18 district, San-Pédro",
    },
    financement: {
      fr: "Fonds propres, avec l'appui du laboratoire SCILIFE",
      en: "Own funds, with support from the SCILIFE laboratory",
    },
    resultat: {
      fr: "307 personnes dépistées : 55 cas d'hypertension, 39 de diabète, 6 d'hépatite B et 3 d'hépatite C",
      en: "307 people screened: 55 cases of hypertension, 39 of diabetes, 6 of hepatitis B and 3 of hepatitis C",
    },
    texte: {
      fr: "En marge de son assemblée générale, l'ONG a ouvert son siège pour une journée de sensibilisation et de dépistage gratuit. Dès les premières heures, les stands ont été pris d'assaut, en particulier par les personnes du troisième âge. Chaque personne dépistée positive a été orientée vers une prise en charge médicale.",
      en: "Alongside its general assembly, the organisation opened its head office for a day of awareness raising and free screening. The stands were busy from the early hours, especially with older residents. Everyone who tested positive was referred for medical care.",
    },
    lien: "actualites/depistage-gratuit-san-pedro",
    photos: [
      {
        src: "depistage-06",
        legende: {
          fr: "Forte affluence dès l'ouverture des stands",
          en: "A large turnout as soon as the stands opened",
        },
      },
      {
        src: "depistage-01",
        legende: {
          fr: "Stands de dépistage installés au siège de l'ONG",
          en: "Screening stands set up at the head office",
        },
      },
      {
        src: "depistage-02",
        legende: { fr: "Prise de la tension artérielle", en: "Blood pressure check" },
      },
      {
        src: "depistage-03",
        legende: {
          fr: "Prélèvement pour le dépistage des hépatites",
          en: "Sample taken for hepatitis screening",
        },
      },
      {
        src: "depistage-04",
        legende: { fr: "Test de glycémie", en: "Blood sugar test" },
      },
      {
        src: "depistage-05",
        legende: {
          fr: "L'équipe de sensibilisation de l'ONG IST",
          en: "The IST awareness team",
        },
      },
    ],
  },
  {
    slug: "antennes",
    vedette: true,
    domaine: "sante",
    titre: {
      fr: "Installation d'antennes dans les zones de silence sanitaire",
      en: "Opening branches in areas without health coverage",
    },
    extrait: {
      fr: "Des structures de soins installées à la demande des communautés, là où aucune couverture sanitaire n'existait.",
      en: "Care facilities set up at the request of communities, where no health coverage existed.",
    },
    periode: "1999 – 2022",
    lieu: { fr: "Territoire national", en: "Nationwide" },
    financement: { fr: "Fonds propres de l'ONG", en: "Own funds" },
    resultat: { fr: "40 antennes installées", en: "40 branches opened" },
    texte: {
      fr: "À la demande des chefs de village ou des ressortissants d'une localité, l'ONG installe des antennes dans les zones dépourvues de couverture sanitaire. Les aides-soignants formés par IST y sont établis à leur propre compte, sous la supervision de l'ONG, et participent à la mise en œuvre de ses projets en tant que relais communautaires. Le dispositif assure à la fois un accès aux soins de proximité et l'insertion professionnelle des jeunes formés.",
      en: "At the request of village chiefs or people from a given area, the organisation opens branches where no health coverage exists. Care assistants trained by IST are established there on their own account, under the organisation's supervision, and take part in its projects as community health workers. The arrangement provides both local access to care and employment for the young people trained.",
    },
    photos: [
      {
        src: "antennes-01",
        legende: {
          fr: "Bâtiment d'une antenne installée en zone de silence sanitaire",
          en: "A branch building in an area without health coverage",
        },
      },
      {
        src: "antennes-02",
        legende: { fr: "Salle de soins équipée", en: "Equipped treatment room" },
      },
      {
        src: "antennes-03",
        legende: { fr: "Salle d'accueil des patients", en: "Patient reception room" },
      },
      {
        src: "antennes-04",
        legende: {
          fr: "Table d'examen et matériel de soins",
          en: "Examination table and care equipment",
        },
      },
    ],
  },
  {
    slug: "communautaire",
    domaine: "sante",
    titre: {
      fr: "Sensibilisation en assemblée villageoise",
      en: "Awareness sessions in village assemblies",
    },
    extrait: {
      fr: "Des séances d'information tenues au cœur des villages sur le paludisme, l'hygiène et la santé maternelle.",
      en: "Information sessions held in the villages on malaria, hygiene and maternal health.",
    },
    periode: { fr: "Depuis 1998", en: "Since 1998" },
    lieu: {
      fr: "Villages et campements des zones d'intervention",
      en: "Villages and settlements in our areas of operation",
    },
    financement: {
      fr: "Fonds propres et projets financés",
      en: "Own funds and funded projects",
    },
    resultat: {
      fr: "Séances régulières dans les villages des zones couvertes",
      en: "Regular sessions in the villages we cover",
    },
    texte: {
      fr: "Les campagnes d'information, d'éducation et de communication pour un changement de comportement (IEC/CCC) se tiennent au cœur des villages. Elles portent sur le paludisme, l'hygiène du cadre de vie, les maladies diarrhéiques, les consultations prénatales, l'accouchement en milieu hospitalier et le cancer du col de l'utérus.",
      en: "Information, education and behaviour-change campaigns are held in the heart of the villages. They cover malaria, household hygiene, diarrhoeal diseases, antenatal care, hospital delivery and cervical cancer.",
    },
    photos: [
      {
        src: "communautaire-01",
        legende: {
          fr: "Séance de sensibilisation en assemblée villageoise",
          en: "Awareness session in a village assembly",
        },
      },
      {
        src: "communautaire-02",
        legende: {
          fr: "Sensibilisation des femmes sur le paludisme et l'hygiène",
          en: "Awareness session with women on malaria and hygiene",
        },
      },
      {
        src: "communautaire-03",
        legende: {
          fr: "Prise de parole lors d'une séance de sensibilisation",
          en: "Speaking at an awareness session",
        },
      },
      {
        src: "communautaire-04",
        legende: {
          fr: "Assemblée villageoise réunie pour une séance d'information",
          en: "Village assembly gathered for an information session",
        },
      },
    ],
  },
  {
    slug: "agr",
    domaine: "social-developpement",
    titre: {
      fr: "Appui à la création d'activités génératrices de revenus",
      en: "Support for income-generating activities",
    },
    extrait: {
      fr: "Un accompagnement des associations féminines et des familles vulnérables vers l'autonomie économique.",
      en: "Support for women's associations and vulnerable families towards financial independence.",
    },
    periode: { fr: "Depuis 2006", en: "Since 2006" },
    lieu: { fr: "Région de San-Pédro", en: "San-Pédro region" },
    financement: {
      fr: "Fonds propres et appuis de partenaires",
      en: "Own funds and partner support",
    },
    resultat: {
      fr: "Associations féminines, veuves et familles accompagnées vers l'autonomie économique",
      en: "Women's associations, widows and families supported towards financial independence",
    },
    texte: {
      fr: "L'ONG appuie les associations féminines, les veuves et les familles prenant en charge des orphelins et enfants vulnérables dans la création d'activités génératrices de revenus : vente d'huile de palme, commerce de proximité, production et vente de savon liquide. Les bénéficiaires sont également formés au plaidoyer pour porter leurs propres projets.",
      en: "The organisation supports women's associations, widows and families caring for orphans and vulnerable children in setting up income-generating activities: palm oil sales, local trade, and liquid soap production and sales. Beneficiaries are also trained in advocacy so they can carry their own projects forward.",
    },
    photos: [
      {
        src: "agr-01",
        legende: {
          fr: "Remise d'un appui pour une activité de vente d'huile de palme",
          en: "Support handed over for a palm oil trading activity",
        },
      },
      {
        src: "agr-02",
        legende: {
          fr: "Accompagnement d'une bénéficiaire dans son activité",
          en: "Supporting a beneficiary in her business",
        },
      },
    ],
  },
  {
    slug: "formation",
    domaine: "social-developpement",
    titre: {
      fr: "Formation des membres et des relais communautaires",
      en: "Training members and community health workers",
    },
    extrait: {
      fr: "La formation continue des membres, des relais communautaires et des associations partenaires.",
      en: "Ongoing training for members, community health workers and partner associations.",
    },
    periode: { fr: "Depuis 1998", en: "Since 1998" },
    lieu: {
      fr: "Siège de l'ONG et antennes",
      en: "Head office and branches",
    },
    financement: {
      fr: "Fonds propres et projets financés",
      en: "Own funds and funded projects",
    },
    resultat: {
      fr: "50 relais communautaires et 40 responsables d'antennes formés",
      en: "50 community health workers and 40 branch managers trained",
    },
    texte: {
      fr: "L'ONG forme ses membres, ses relais communautaires et les associations partenaires : bonne gouvernance, leadership associatif fondé sur le genre, redevabilité sociale, typologies des violences basées sur le genre et stratégies de plaidoyer. Elle participe également à la formation d'aides-soignants dans les établissements techniques et professionnels de la région.",
      en: "The organisation trains its members, community health workers and partner associations in good governance, gender-based associative leadership, social accountability, the forms of gender-based violence, and advocacy strategies. It also takes part in training care assistants in the region's technical and vocational colleges.",
    },
    photos: [
      {
        src: "formation-01",
        legende: {
          fr: "Session de formation des membres au siège de l'ONG",
          en: "Member training session at the head office",
        },
      },
      {
        src: "formation-02",
        legende: {
          fr: "Participants réunis lors d'une session de formation",
          en: "Participants gathered for a training session",
        },
      },
      {
        src: "formation-03",
        legende: {
          fr: "Séance de travail au siège de l'ONG",
          en: "Working session at the head office",
        },
      },
    ],
  },
  {
    slug: "salubrite",
    domaine: "social-developpement",
    titre: {
      fr: "Participation aux opérations de salubrité",
      en: "Taking part in public sanitation drives",
    },
    extrait: {
      fr: "La participation de l'ONG aux opérations de salubrité, prolongement direct de ses campagnes de prévention.",
      en: "The organisation joins public clean-up operations, a direct extension of its prevention work.",
    },
    periode: { fr: "Depuis 2011", en: "Since 2011" },
    lieu: { fr: "San-Pédro et environs", en: "San-Pédro and surrounding areas" },
    financement: { fr: "Fonds propres de l'ONG", en: "Own funds" },
    resultat: {
      fr: "Participation régulière aux journées du Grand Ménage",
      en: "Regular participation in the national clean-up days",
    },
    texte: {
      fr: "La direction et les membres de l'ONG participent aux activités de lutte contre l'insalubrité, en lien avec les autorités locales : curage des caniveaux, nettoyage des voies et des espaces publics. Ces opérations prolongent les campagnes de prévention du paludisme et des maladies diarrhéiques.",
      en: "The organisation's leadership and members take part in clean-up activities alongside local authorities: clearing drains and cleaning roads and public spaces. These operations extend the campaigns against malaria and diarrhoeal diseases.",
    },
    photos: [
      {
        src: "salubrite-01",
        legende: {
          fr: "Mobilisation des équipes pour une journée de salubrité",
          en: "Teams mobilised for a clean-up day",
        },
      },
      {
        src: "salubrite-02",
        legende: { fr: "Curage des caniveaux", en: "Clearing the drains" },
      },
      {
        src: "salubrite-03",
        legende: { fr: "Nettoyage des voies publiques", en: "Cleaning the public roads" },
      },
    ],
  },
  {
    slug: "mediation",
    vedette: true,
    domaine: "cohesion-sociale",
    titre: {
      fr: "Médiation communautaire et règlement pacifique des conflits",
      en: "Community mediation and peaceful conflict resolution",
    },
    extrait: {
      fr: "Des médiations conduites dans les conflits fonciers et communautaires, jusqu'à l'engagement écrit des parties.",
      en: "Mediation in land and community disputes, carried through to written commitments from the parties.",
    },
    periode: "2021 – 2022",
    lieu: {
      fr: "Région de San-Pédro et département de Tabou",
      en: "San-Pédro region and Tabou department",
    },
    financement: {
      fr: "Fonds propres et projet LIANE 2",
      en: "Own funds and the LIANE 2 programme",
    },
    resultat: {
      fr: "Une dizaine de conflits communautaires et fonciers réglés entre 2021 et mai 2022",
      en: "Around ten community and land disputes settled between 2021 and May 2022",
    },
    texte: {
      fr: "En sa qualité d'ambassadeur de paix et de président de la cellule civilo-militaire de San-Pédro, le président du conseil d'administration de l'ONG conduit des médiations dans les conflits intracommunautaires et intercommunautaires : litiges fonciers, différends liés à l'installation de chefs de village ou de canton, tensions héritées des crises postélectorales. Les échanges se concluent par des engagements consensuels des parties, parfois formalisés par la signature de chartes pour la paix et le développement.",
      en: "As an Ambassador for Peace and chair of the San-Pédro civil-military unit, the organisation's board president leads mediation in disputes within and between communities: land conflicts, disagreements over the appointment of village and canton chiefs, and tensions inherited from the post-election crises. The talks end in agreed commitments from the parties, sometimes formalised by signing peace and development charters.",
    },
    photos: [
      {
        src: "mediation-01",
        legende: {
          fr: "Rencontre de médiation réunissant les parties et les autorités coutumières",
          en: "Mediation meeting bringing together the parties and customary authorities",
        },
      },
      {
        src: "mediation-02",
        legende: {
          fr: "Site d'installation d'antennes de télécommunication ayant fait l'objet d'une médiation foncière",
          en: "Telecommunications mast site that was the subject of a land mediation",
        },
      },
      {
        src: "mediation-03",
        legende: {
          fr: "Intervention auprès d'élèves en grève pour un retour au calme",
          en: "Intervention with striking pupils to restore calm",
        },
      },
      {
        src: "mediation-04",
        legende: {
          fr: "Rétablissement de la circulation après une journée de tension",
          en: "Traffic restored after a day of tension",
        },
      },
    ],
  },
];
