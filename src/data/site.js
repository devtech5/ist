// Données institutionnelles de l'ONG IST.
// Source : dossier "ONG IST DOCS.docx" (arrêté à mi-2022).
// Les identifiants administratifs internes (codes MAE, MLS, PSP, compte
// contribuable, coordonnées bancaires) et les contacts personnels du PCA
// sont volontairement exclus de ce fichier : ils ne doivent pas être publiés.

export const site = {
  nom: "International Santé pour Tous",
  sigle: "IST",
  baseline: "ONG d'assistance et de soins médicaux",
  devise: "Rigueur et Disponibilité",
  creation: "18 juillet 1998",
  anneeCreation: 1998,
  description:
    "ONG ivoirienne d'assistance et de soins médicaux créée en 1998 à San-Pédro, présente dans 16 zones d'intervention à travers 40 antennes.",
};

export const menu = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Nos réalisations", href: "/realisations/" },
  { label: "Rapports", href: "/rapports/" },
  { label: "Actualités", href: "/actualites/" },
  { label: "Contact", href: "/contact/" },
];

export const cta = { label: "Faire un don", href: "/don/" };

export const contact = {
  siege: "Quartier Bardot 18, face mosquée Kanté",
  ville: "San-Pédro, Côte d'Ivoire",
  boitePostale: "01 BP 540 San-Pédro 01",
  telephone: "+225 27 34 76 93 90",
  telephoneLien: "+2252734769390",
  mobile: "+225 07 07 99 52 70",
  mobileLien: "+2250707995270",
  email: "ongist1998@gmail.com",
  // TODO client : créer une adresse institutionnelle contact@ong-ist.org
};

export const reseaux = [
  // TODO client : fournir les URL manquantes. Les entrées vides ne sont pas affichées.
  { nom: "Facebook", url: "https://web.facebook.com/ist.ong.545" },
  { nom: "WhatsApp", url: "" },
  { nom: "LinkedIn", url: "" },
  { nom: "YouTube", url: "" },
];

export const vision =
  "Procurer à l'être humain une vie mieux intégrée sur les plans socio-économique et sanitaire.";

export const missions = [
  "Apporter la santé partout où le besoin se fait sentir, en contribuant à l'amélioration des conditions de vie et d'hygiène des populations, et en participant à la lutte contre les IST et le VIH/sida, le paludisme, la tuberculose, les maladies diarrhéiques et toute autre pandémie.",
  "Soutenir les stratégies de promotion de l'État sur les plans socio-économique et sanitaire.",
  "Faire de l'information et de l'éducation sanitaire dans toutes les couches socio-professionnelles.",
];

// Chiffres à confirmer par l'ONG avant mise en ligne : le total de personnes
// sensibilisées est la somme des projets documentés jusqu'en 2022 et peut
// comporter des doublons entre catégories.
export const chiffres = [
  { valeur: 1998, label: "Année de création", brut: true },
  { valeur: 40, label: "Antennes sur le territoire national" },
  { valeur: 16, label: "Zones d'intervention" },
  { valeur: 199000, suffixe: "+", label: "Personnes sensibilisées" },
];

export const zones = [
  "San-Pédro", "Abobo Est", "Soubré", "Gagnoa", "Issia", "Sassandra",
  "Divo", "Mankono", "Korhogo", "Danané", "Tabou", "Bouaflé",
  "Oumé", "Man", "Boundiali", "Kouto",
];

// Seuls les agréments et publications officielles sont exposés.
export const agrements = [
  { intitule: "Agrément n° 143/INT/AAT/DG", date: "14 juin 1999" },
  { intitule: "Insertion au Journal Officiel n° 31", date: "5 août 1999" },
  {
    intitule:
      "Agrément du Ministère de la Santé, renouvelé sous n° 05351/MSHP/SERV.ONG/naj",
    date: "11 juin 2019",
  },
  {
    intitule: "Convention d'association au service public sanitaire",
    date: "14 août 2004",
  },
];

export const reseauxMembre = ["ROLPCI", "COSCI", "ROMACSO", "RALSIK", "CRASC Sud"];

// Distinctions décernées au président de l'ONG. Les diplômes eux-mêmes ne sont
// pas publiés : ils portent signatures et cachets officiels.
export const distinctions = [
  {
    intitule: "Prix national d'excellence du meilleur artisan de paix et de cohésion sociale",
    decerne: "Présidence de la République de Côte d'Ivoire",
    date: "6 août 2019",
  },
  {
    intitule: "Diplôme de l'Ordre du mérite national de la Solidarité, grade d'Officier",
    decerne:
      "Ministère de la Solidarité, de la Cohésion sociale et de la Lutte contre la Pauvreté",
    date: "15 novembre 2019",
  },
  {
    intitule: "Titre d'Ambassadeur de paix",
    decerne: "Fédération pour la paix universelle",
    date: "",
  },
  {
    intitule:
      "Distinction pour la journée de sensibilisation et de dépistage du cancer du sein et du col de l'utérus",
    decerne: "Jeune Chambre Internationale de San-Pédro",
    date: "10 mars 2018",
  },
];

export const personnel = [
  { fonction: "Médecins", total: 4, hommes: 3, femmes: 1 },
  { fonction: "Assistants médicaux", total: 2, hommes: 2, femmes: 0 },
  { fonction: "Psychologue", total: 1, hommes: 1, femmes: 0 },
  { fonction: "Sages-femmes", total: 2, hommes: 0, femmes: 2 },
  { fonction: "Infirmiers", total: 5, hommes: 3, femmes: 2 },
  { fonction: "Aides-soignants", total: 40, hommes: 27, femmes: 13 },
  { fonction: "Relais communautaires", total: 50, hommes: 20, femmes: 30 },
  { fonction: "Bénévoles", total: 4, hommes: 2, femmes: 2 },
  { fonction: "Comptable", total: 1, hommes: 1, femmes: 0 },
];

export const domaines = [
  {
    slug: "sante",
    titre: "Santé",
    resume:
      "Soins curatifs et préventifs, dépistages gratuits, sensibilisation sur le paludisme, le VIH, la tuberculose, les hépatites, le diabète et l'hypertension.",
    details: [
      "Soins curatifs et préventifs assurés sans interruption depuis 1998.",
      "Campagnes d'information, d'éducation et de communication pour un changement de comportement (IEC/CCC) auprès de la population générale, des élèves et des jeunes filles.",
      "Dépistages gratuits de l'hypertension, du diabète et des hépatites.",
      "Sensibilisation sur les consultations prénatales, l'accouchement en milieu hospitalier et le cancer du col de l'utérus.",
      "Formation d'aides-soignants et installation d'antennes dans les zones de silence sanitaire.",
    ],
  },
  {
    slug: "social-developpement",
    titre: "Social & développement",
    resume:
      "Appui aux associations de jeunes et de femmes, prise en charge des OEV, création d'activités génératrices de revenus et insertion professionnelle.",
    details: [
      "Identification et prise en charge d'orphelins et enfants vulnérables (OEV).",
      "Création d'activités génératrices de revenus pour les associations féminines, les veuves et les familles accompagnées.",
      "Formation et insertion des jeunes filles en couture, coiffure et soins paramédicaux.",
      "Formation à la fabrication du savon liquide, devenue une activité de subsistance pour de nombreux jeunes de la région.",
      "Formations à la bonne gouvernance, au leadership associatif fondé sur le genre, à la redevabilité sociale et aux stratégies de plaidoyer.",
    ],
  },
  {
    slug: "cohesion-sociale",
    titre: "Cohésion sociale & paix",
    resume:
      "Médiation communautaire, règlement pacifique des conflits, sensibilisation à des élections apaisées et prise en charge psychosociale.",
    details: [
      "Une dizaine de conflits communautaires et fonciers réglés dans la région entre 2021 et mai 2022.",
      "Tournées d'information et de sensibilisation sur les élections apaisées et le règlement pacifique des conflits internes.",
      "Prise en charge psychosociale, conseils et soins médicaux des victimes de la crise postélectorale, de 2011 à 2022.",
      "Formation d'associations féminines aux principes des ambassadeurs de paix.",
      "Signature de chartes d'engagement pour la paix et le développement par les autorités et les populations locales.",
    ],
  },
];

// Réalisations documentées. Les intitulés de litiges nommant des villages,
// des chefferies ou des communautés ont été résumés sans les identifier.
export const realisations = [
  {
    titre: "Installation d'antennes dans les zones de silence sanitaire",
    periode: "1999 – 2022",
    cible: "Zones sans couverture sanitaire",
    resultat: "40 antennes installées sur le territoire national",
    financement: "Fonds propres de l'ONG",
    domaine: "sante",
  },
  {
    titre: "Journées culturelles des élèves à Dianra (IEC/CCC)",
    periode: "Août 1999",
    cible: "Jeunes",
    resultat: "400 jeunes sensibilisés",
    financement: "450 000 FCFA — ONG IST",
    domaine: "sante",
  },
  {
    titre: "IEC/CCC et vaccination à Kouto",
    periode: "Août 2001",
    cible: "Population générale",
    resultat:
      "1 985 personnes sensibilisées et 1 052 doses de vaccin administrées (BCG, rougeole, VAT, méningite)",
    financement: "1 350 000 FCFA — ONG IST",
    domaine: "sante",
  },
  {
    titre: "IEC/CCC en milieu scolaire et en entreprise à Abengourou",
    periode: "Mars – juin 2006",
    cible: "Élèves, enseignants et population générale",
    resultat: "3 500 personnes sensibilisées",
    financement: "1 500 000 FCFA — ONG IST et Dr Nicolon",
    domaine: "sante",
  },
  {
    titre: "Identification et prise en charge des OEV à San-Pédro",
    periode: "2006 – 2010",
    cible: "Orphelins et enfants vulnérables",
    resultat: "136 OEV identifiés et soutenus",
    financement: "500 000 FCFA — ONG IST",
    domaine: "social-developpement",
  },
  {
    titre: "Programme OASIS — districts de San-Pédro et Soubré",
    periode: "Décembre 2007 – mars 2009",
    cible: "Population générale",
    resultat: "43 290 personnes sensibilisées",
    financement: "7 760 000 FCFA — Fonds mondial",
    domaine: "sante",
  },
  {
    titre: "Projet Sport pour la Vie (SPV) en milieu scolaire",
    periode: "2008 – 2010",
    cible: "Élèves",
    resultat: "25 élèves relais sensibilisés et formés",
    financement: "2 940 000 FCFA — JHU/CCP",
    domaine: "sante",
  },
  {
    titre: "Vacances santé auprès des filles scolarisées",
    periode: "2008 – 2010",
    cible: "Filles scolarisées",
    resultat: "90 filles sensibilisées",
    financement: "1 440 000 FCFA — JHU/CCP",
    domaine: "social-developpement",
  },
  {
    titre: "Projet Super Go au Grand Bardot",
    periode: "Septembre – novembre 2010",
    cible: "Jeunes filles déscolarisées et non scolarisées",
    resultat: "600 filles sensibilisées",
    financement: "5 000 000 FCFA — JHU/CCP",
    domaine: "social-developpement",
  },
  {
    titre: "Projet Malaria R08 — district de San-Pédro",
    periode: "Septembre 2010 – juin 2012",
    cible: "Population générale",
    resultat: "36 755 personnes sensibilisées",
    financement: "47 000 000 FCFA — Fonds mondial",
    domaine: "sante",
  },
  {
    titre:
      "Sensibilisation paludisme, VIH, tuberculose et hygiène, soins médicaux et paramédicaux",
    periode: "Janvier 2010 – décembre 2014",
    cible: "Population générale",
    resultat: "Rapports annuels disponibles au siège de l'ONG",
    financement: "7 654 810 FCFA — Fonds propres",
    domaine: "sante",
  },
  {
    titre:
      "Sensibilisation COVID-19 et formation à la fabrication du savon liquide",
    periode: "Janvier – février 2021",
    cible: "Population générale de la région de San-Pédro",
    resultat:
      "35 058 femmes, 30 301 hommes, 27 242 jeunes et 19 979 enfants touchés",
    financement: "5 000 000 FCFA — Union européenne",
    domaine: "sante",
  },
  {
    titre:
      "Appui au renforcement de la cohésion sociale et de la réconciliation dans la région de San-Pédro (LIANE 2)",
    periode: "2021 – 2022",
    cible: "Victimes des crises sociopolitiques et populations",
    resultat: "Rapports transmis à l'UGP LIANE 2 et au siège de l'ONG",
    financement: "25 000 000 FCFA — Union européenne",
    domaine: "cohesion-sociale",
  },
  {
    titre:
      "Formations gouvernance, redevabilité sociale, VBG et plaidoyer (RIOF)",
    periode: "2021 – 2022",
    cible: "Associations féminines de San-Pédro membres du RIOF",
    resultat: "Rapports disponibles au siège de l'ONG",
    financement: "Financement RIOF",
    domaine: "social-developpement",
  },
  {
    titre: "Soins curatifs et préventifs",
    periode: "1998 – 2022",
    cible: "Population générale",
    resultat:
      "Rapports disponibles au siège de l'ONG et au ministère de la Santé",
    financement: "Voir les rapports financiers des exercices concernés",
    domaine: "sante",
  },
];

// TODO client : chiffres arrêtés à mi-2022, à actualiser pour 2023, 2024 et 2025.
export const bilans = [
  {
    annee: "2020",
    budget: 9680375,
    fondsPropres: 8180375,
    subvention: 1500000,
    bailleur: "MSHP",
  },
  {
    annee: "2021",
    budget: 25146200,
    fondsPropres: 10150200,
    subvention: 14996000,
    bailleur: "Union européenne",
  },
  {
    annee: "2022 (à mi-parcours)",
    budget: 14418000,
    fondsPropres: 4422000,
    subvention: 9996000,
    bailleur: "Union européenne",
  },
];

export const partenaires = [
  // TODO client : obtenir l'autorisation d'usage des logos avant affichage.
  "Ministère de la Santé et de l'Hygiène publique",
  "Union européenne",
  "Fonds mondial",
  "JHU/CCP",
  "Projet LIANE 2",
  "RIOF",
];

export const materiel = [
  "Un siège de cinq bureaux, une salle de réunion et une salle d'eau",
  "Un véhicule 4x4 et trois motos",
  "Trois ordinateurs de bureau et quatre ordinateurs portables",
  "Deux imprimantes multifonctions et une connexion internet",
  "Un appareil photo numérique et un appareil photo professionnel",
];
