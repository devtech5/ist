// Données institutionnelles de l'ONG IST.
// Source : dossier "ONG IST DOCS.docx" (arrêté à mi-2022).
//
// Les identifiants administratifs internes (codes MAE, MLS, PSP, compte
// contribuable, coordonnées bancaires) et les contacts personnels du PCA
// sont volontairement exclus de ce fichier : ils ne doivent pas être publiés.
//
// Les champs traduits sont écrits { fr, en } et lus avec `t()` de src/i18n.

export const site = {
  nom: "International Santé pour Tous",
  sigle: "IST",
  baseline: {
    fr: "ONG d'assistance et de soins médicaux",
    en: "NGO for medical assistance and care",
  },
  devise: { fr: "Rigueur et Disponibilité", en: "Rigour and Availability" },
  creation: { fr: "18 juillet 1998", en: "18 July 1998" },
  anneeCreation: 1998,
  description: {
    fr: "ONG ivoirienne d'assistance et de soins médicaux créée en 1998 à San-Pédro, présente dans 16 zones d'intervention à travers 40 antennes.",
    en: "Ivorian NGO for medical assistance and care, founded in 1998 in San-Pédro, active in 16 areas through 40 branches.",
  },
  presentation: {
    fr: "L'ONG International Santé pour Tous (IST) est une organisation d'assistance et de soins médicaux créée le 18 juillet 1998 à San-Pédro. Elle intervient dans seize zones sanitaires à travers quarante antennes, avec une équipe de médecins, d'assistants médicaux, d'infirmiers, de sages-femmes, d'aides-soignants et de relais communautaires.",
    en: "International Santé pour Tous (IST) is a medical assistance and care organisation founded on 18 July 1998 in San-Pédro. It works across sixteen health areas through forty branches, with a team of doctors, medical assistants, nurses, midwives, care assistants and community health workers.",
  },
};

// Les entrées du menu : `cle` renvoie à src/i18n/ui.js, `chemin` est commun
// aux deux langues.
export const menu = [
  { cle: "accueil", chemin: "" },
  { cle: "apropos", chemin: "a-propos" },
  { cle: "realisations", chemin: "realisations" },
  { cle: "rapports", chemin: "rapports" },
  { cle: "actualites", chemin: "actualites" },
  { cle: "contact", chemin: "contact" },
];

export const cta = { cle: "don", chemin: "don" };

export const contact = {
  siege: {
    fr: "Quartier Bardot 18, face mosquée Kanté",
    en: "Bardot 18 district, opposite the Kanté mosque",
  },
  ville: { fr: "San-Pédro, Côte d'Ivoire", en: "San-Pédro, Côte d'Ivoire" },
  boitePostale: "01 BP 540 San-Pédro 01",
  telephone: "+225 27 34 76 93 90",
  telephoneLien: "+2252734769390",
  mobile: "+225 07 07 99 52 70",
  mobileLien: "+2250707995270",
  // Ligne WhatsApp dédiée, distincte du mobile institutionnel.
  whatsapp: "2250748603631",
  whatsappAffichage: "+225 07 48 60 36 31",
  email: "ongist1998@gmail.com",
  // TODO client : créer une adresse institutionnelle contact@ong-ist.org
};

export const reseaux = [
  // TODO client : fournir les URL manquantes. Les entrées vides ne sont pas affichées.
  { nom: "Facebook", url: "https://web.facebook.com/ist.ong.545" },
  { nom: "LinkedIn", url: "" },
  { nom: "YouTube", url: "" },
];

export const vision = {
  fr: "Procurer à l'être humain une vie mieux intégrée sur les plans socio-économique et sanitaire.",
  en: "Give every person a life better integrated socially, economically and in terms of health.",
};

export const missions = [
  {
    fr: "Apporter la santé partout où le besoin se fait sentir, en contribuant à l'amélioration des conditions de vie et d'hygiène des populations, et en participant à la lutte contre les IST et le VIH/sida, le paludisme, la tuberculose, les maladies diarrhéiques et toute autre pandémie.",
    en: "Bring healthcare wherever it is needed, improving living and hygiene conditions and taking part in the fight against STIs and HIV/AIDS, malaria, tuberculosis, diarrhoeal diseases and any other epidemic.",
  },
  {
    fr: "Soutenir les stratégies de promotion de l'État sur les plans socio-économique et sanitaire.",
    en: "Support national strategies for social, economic and health development.",
  },
  {
    fr: "Faire de l'information et de l'éducation sanitaire dans toutes les couches socio-professionnelles.",
    en: "Deliver health information and education across every social and professional group.",
  },
];

// Chiffres à confirmer par l'ONG avant mise en ligne : le total de personnes
// sensibilisées est la somme des projets documentés jusqu'en 2022 et peut
// comporter des doublons entre catégories.
export const chiffres = [
  {
    valeur: 1998,
    brut: true,
    label: { fr: "Année de création", en: "Founded in" },
  },
  {
    valeur: 40,
    label: { fr: "Antennes sur le territoire national", en: "Branches nationwide" },
  },
  { valeur: 16, label: { fr: "Zones d'intervention", en: "Areas of operation" } },
  {
    valeur: 199000,
    suffixe: "+",
    label: { fr: "Personnes sensibilisées", en: "People reached" },
  },
];

export const zones = [
  "San-Pédro", "Abobo Est", "Soubré", "Gagnoa", "Issia", "Sassandra",
  "Divo", "Mankono", "Korhogo", "Danané", "Tabou", "Bouaflé",
  "Oumé", "Man", "Boundiali", "Kouto",
];

// Seuls les agréments et publications officielles sont exposés.
export const agrements = [
  {
    intitule: {
      fr: "Agrément n° 143/INT/AAT/DG",
      en: "Government approval no. 143/INT/AAT/DG",
    },
    date: { fr: "14 juin 1999", en: "14 June 1999" },
  },
  {
    intitule: {
      fr: "Insertion au Journal Officiel n° 31",
      en: "Publication in Official Gazette no. 31",
    },
    date: { fr: "5 août 1999", en: "5 August 1999" },
  },
  {
    intitule: {
      fr: "Agrément du Ministère de la Santé, renouvelé sous n° 05351/MSHP/SERV.ONG/naj",
      en: "Ministry of Health approval, renewed under no. 05351/MSHP/SERV.ONG/naj",
    },
    date: { fr: "11 juin 2019", en: "11 June 2019" },
  },
  {
    intitule: {
      fr: "Convention d'association au service public sanitaire",
      en: "Partnership agreement with the public health service",
    },
    date: { fr: "14 août 2004", en: "14 August 2004" },
  },
];

export const reseauxMembre = ["ROLPCI", "COSCI", "ROMACSO", "RALSIK", "CRASC Sud"];

// Distinctions décernées au président de l'ONG. Les diplômes eux-mêmes ne sont
// pas publiés : ils portent signatures et cachets officiels.
export const distinctions = [
  {
    intitule: {
      fr: "Prix national d'excellence du meilleur artisan de paix et de cohésion sociale",
      en: "National Award of Excellence for the leading peacemaker and builder of social cohesion",
    },
    decerne: {
      fr: "Présidence de la République de Côte d'Ivoire",
      en: "Presidency of the Republic of Côte d'Ivoire",
    },
    date: { fr: "6 août 2019", en: "6 August 2019" },
  },
  {
    intitule: {
      fr: "Diplôme de l'Ordre du mérite national de la Solidarité, grade d'Officier",
      en: "National Order of Merit for Solidarity, rank of Officer",
    },
    decerne: {
      fr: "Ministère de la Solidarité, de la Cohésion sociale et de la Lutte contre la Pauvreté",
      en: "Ministry of Solidarity, Social Cohesion and the Fight against Poverty",
    },
    date: { fr: "15 novembre 2019", en: "15 November 2019" },
  },
  {
    intitule: { fr: "Titre d'Ambassadeur de paix", en: "Ambassador for Peace title" },
    decerne: {
      fr: "Fédération pour la paix universelle",
      en: "Universal Peace Federation",
    },
    date: "",
  },
  {
    intitule: {
      fr: "Distinction pour la journée de sensibilisation et de dépistage du cancer du sein et du col de l'utérus",
      en: "Award for the breast and cervical cancer awareness and screening day",
    },
    decerne: {
      fr: "Jeune Chambre Internationale de San-Pédro",
      en: "Junior Chamber International, San-Pédro",
    },
    date: { fr: "10 mars 2018", en: "10 March 2018" },
  },
];

export const personnel = [
  { fonction: { fr: "Médecins", en: "Doctors" }, total: 4, hommes: 3, femmes: 1 },
  { fonction: { fr: "Assistants médicaux", en: "Medical assistants" }, total: 2, hommes: 2, femmes: 0 },
  { fonction: { fr: "Psychologue", en: "Psychologist" }, total: 1, hommes: 1, femmes: 0 },
  { fonction: { fr: "Sages-femmes", en: "Midwives" }, total: 2, hommes: 0, femmes: 2 },
  { fonction: { fr: "Infirmiers", en: "Nurses" }, total: 5, hommes: 3, femmes: 2 },
  { fonction: { fr: "Aides-soignants", en: "Care assistants" }, total: 40, hommes: 27, femmes: 13 },
  { fonction: { fr: "Relais communautaires", en: "Community health workers" }, total: 50, hommes: 20, femmes: 30 },
  { fonction: { fr: "Bénévoles", en: "Volunteers" }, total: 4, hommes: 2, femmes: 2 },
  { fonction: { fr: "Comptable", en: "Accountant" }, total: 1, hommes: 1, femmes: 0 },
];

export const domaines = [
  {
    slug: "sante",
    titre: { fr: "Santé", en: "Health" },
    resume: {
      fr: "Soins curatifs et préventifs, dépistages gratuits, sensibilisation sur le paludisme, le VIH, la tuberculose, les hépatites, le diabète et l'hypertension.",
      en: "Curative and preventive care, free screenings, and awareness work on malaria, HIV, tuberculosis, hepatitis, diabetes and hypertension.",
    },
  },
  {
    slug: "social-developpement",
    titre: { fr: "Social & développement", en: "Social & development" },
    resume: {
      fr: "Appui aux associations de jeunes et de femmes, prise en charge des OEV, création d'activités génératrices de revenus et insertion professionnelle.",
      en: "Support for youth and women's associations, care for orphans and vulnerable children, income-generating activities and access to employment.",
    },
  },
  {
    slug: "cohesion-sociale",
    titre: { fr: "Cohésion sociale & paix", en: "Social cohesion & peace" },
    resume: {
      fr: "Médiation communautaire, règlement pacifique des conflits, sensibilisation à des élections apaisées et prise en charge psychosociale.",
      en: "Community mediation, peaceful conflict resolution, peaceful-election campaigns and psychosocial support.",
    },
  },
];

// TODO client : chiffres arrêtés à mi-2022, à actualiser pour 2023, 2024 et 2025.
export const bilans = [
  {
    annee: { fr: "2020", en: "2020" },
    budget: 9680375,
    fondsPropres: 8180375,
    subvention: 1500000,
    bailleur: { fr: "MSHP", en: "Ministry of Health" },
  },
  {
    annee: { fr: "2021", en: "2021" },
    budget: 25146200,
    fondsPropres: 10150200,
    subvention: 14996000,
    bailleur: { fr: "Union européenne", en: "European Union" },
  },
  {
    annee: { fr: "2022 (à mi-parcours)", en: "2022 (mid-year)" },
    budget: 14418000,
    fondsPropres: 4422000,
    subvention: 9996000,
    bailleur: { fr: "Union européenne", en: "European Union" },
  },
];

export const partenaires = [
  // TODO client : obtenir l'autorisation d'usage des logos avant affichage.
  {
    fr: "Ministère de la Santé et de l'Hygiène publique",
    en: "Ministry of Health and Public Hygiene",
  },
  { fr: "Union européenne", en: "European Union" },
  { fr: "Fonds mondial", en: "The Global Fund" },
  { fr: "JHU/CCP", en: "JHU/CCP" },
  { fr: "Projet LIANE 2", en: "LIANE 2 programme" },
  { fr: "RIOF", en: "RIOF" },
];

export const materiel = [
  {
    fr: "Un siège de cinq bureaux, une salle de réunion et une salle d'eau",
    en: "A head office with five rooms, a meeting room and a washroom",
  },
  { fr: "Un véhicule 4x4 et trois motos", en: "One 4x4 vehicle and three motorbikes" },
  {
    fr: "Trois ordinateurs de bureau et quatre ordinateurs portables",
    en: "Three desktop computers and four laptops",
  },
  {
    fr: "Deux imprimantes multifonctions et une connexion internet",
    en: "Two multifunction printers and an internet connection",
  },
  {
    fr: "Un appareil photo numérique et un appareil photo professionnel",
    en: "A digital camera and a professional camera",
  },
];
