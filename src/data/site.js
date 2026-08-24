// Données institutionnelles de l'ONG IST.
// Source : dossier "ONG IST DOCS.docx" (arrêté à mi-2022).
//
// Les valeurs elles-mêmes vivent désormais dans des fichiers JSON voisins, pour
// être modifiables depuis l'espace d'administration (/admin/) sans toucher au
// code. Ce module se contente de les republier sous les noms attendus par les
// pages, afin qu'aucun import n'ait à changer.
//
//   identite.json     nom, sigle, devise, présentation, vision, missions
//   contact.json      adresse, téléphones, courriel, réseaux sociaux
//   institution.json  chiffres, zones, domaines, personnel, agréments,
//                     distinctions, matériel
//   partenaires.json  partenaires et leurs logos
//
// Les identifiants administratifs internes (codes MAE, MLS, PSP, compte
// contribuable, coordonnées bancaires) et les contacts personnels du PCA
// sont volontairement exclus de ces fichiers : ils ne doivent pas être publiés.
//
// Les champs traduits sont écrits { fr, en } et lus avec `t()` de src/i18n.

import identite from "./identite.json";
import donneesContact from "./contact.json";
import institution from "./institution.json";
import donneesPartenaires from "./partenaires.json";
import navigation from "./menu.json";

const { vision: visionSaisie, missions: missionsSaisies, ...identiteSite } = identite;
const { reseaux: reseauxSaisis, ...coordonnees } = donneesContact;

export const site = identiteSite;
export const vision = visionSaisie;
export const missions = missionsSaisies;

export const contact = coordonnees;

// Les entrées vides ne sont pas affichées : voir Footer.astro.
export const reseaux = reseauxSaisis;

// Adresse de chaque page du site. Cette table reste dans le code : y ajouter une
// entrée suppose d'avoir créé la route correspondante dans src/pages/. L'ordre
// du menu et le choix du bouton d'appel, eux, se règlent depuis l'espace
// d'administration, via menu.json.
//
// Le libellé affiché ne vient pas d'ici mais de src/i18n/libelles/menu.json,
// où la clé porte le même nom.
const pages = {
  accueil: "",
  apropos: "a-propos",
  realisations: "realisations",
  rapports: "rapports",
  actualites: "actualites",
  contact: "contact",
  don: "don",
};

// L'interface d'administration écrit soit une liste de noms, soit une liste
// d'objets `{ page }` : les deux écritures sont acceptées.
const identifiant = (entree) => (typeof entree === "string" ? entree : entree?.page);

const versEntree = (id) => ({ cle: id, chemin: pages[id] });

// Une entrée qui ne correspond à aucune page connue est ignorée plutôt que de
// produire un lien mort.
export const menu = (navigation.entrees ?? [])
  .map(identifiant)
  .filter((id) => id in pages)
  .map(versEntree);

const cleCta = identifiant(navigation.cta);
export const cta = versEntree(cleCta in pages ? cleCta : "don");

// Chiffres à confirmer par l'ONG avant mise en ligne : le total de personnes
// sensibilisées est la somme des campagnes documentées jusqu'en 2022 et peut
// comporter des doublons entre catégories.
export const chiffres = institution.chiffres;

export const zones = institution.zones;

// `slug` relie un domaine aux réalisations de terrain : le modifier sans
// toucher aux campagnes correspondantes viderait le filtre.
export const domaines = institution.domaines;

export const personnel = institution.personnel;

// Seuls les agréments et publications officielles sont exposés.
export const agrements = institution.agrements;

export const reseauxMembre = institution.reseauxMembre;

// Distinctions décernées au président de l'ONG. Les diplômes eux-mêmes ne sont
// pas publiés : ils portent signatures et cachets officiels.
export const distinctions = institution.distinctions;

export const materiel = institution.materiel;

// `logo` : chemin d'une image dans public/images/partenaires/. Tant qu'il est
// vide, la pastille affiche le sigle du partenaire.
//
// Provenance des fichiers : Wikimedia Commons pour l'emblème européen, Save
// the Children, le Fonds mondial, JHU/CCP et les armoiries de Côte d'Ivoire ;
// site officiel pour le CERAP. Ce sont des marques de tiers.
export const partenaires = donneesPartenaires.partenaires;
