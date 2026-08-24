// Libellés d'interface, hors contenu éditorial (qui vit dans src/data).
//
// Un groupe = un fichier de src/i18n/libelles/, modifiable depuis l'espace
// d'administration (/admin/). Ce module se contente de les rassembler sous le
// nom `ui` attendu par les pages.
//
// Certains libellés portent des jetons entre accolades — {n}, {email}, {tel} —
// remplacés à l'affichage par `remplir()`. Les conserver tels quels.

import menu from "./libelles/menu.json";
import general from "./libelles/general.json";
import accueil from "./libelles/accueil.json";
import apropos from "./libelles/apropos.json";
import realisations from "./libelles/realisations.json";
import rapports from "./libelles/rapports.json";
import actualites from "./libelles/actualites.json";
import contact from "./libelles/contact.json";
import don from "./libelles/don.json";
import legal from "./libelles/legal.json";

export const ui = {
  menu,
  general,
  accueil,
  apropos,
  realisations,
  rapports,
  actualites,
  contact,
  don,
  legal,
};

/** Remplace les jetons {cle} d'un libellé. */
export function remplir(texte, valeurs) {
  return Object.entries(valeurs).reduce(
    (accumulateur, [cle, valeur]) => accumulateur.replaceAll(`{${cle}}`, String(valeur)),
    texte
  );
}
