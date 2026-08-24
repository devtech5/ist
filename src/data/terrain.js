// Réalisations de terrain illustrées, reprises du dossier institutionnel.
//
// Une campagne = un fichier JSON dans src/data/campagnes/, modifiable depuis
// l'espace d'administration (/admin/). Le nom du fichier donne l'adresse de la
// page, par exemple /realisations/covid-savon/. Le champ `ordre` fixe l'ordre
// d'affichage, du plus petit au plus grand.
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

const fichiers = import.meta.glob("./campagnes/*.json", { eager: true });

// Les photographies déposées depuis l'espace d'administration arrivent sous la
// forme d'un chemin complet, `/images/actions/exemple.webp`. Celles reprises du
// dossier institutionnel sont notées par leur seul nom, `exemple`. Les deux
// écritures sont acceptées et ramenées à une adresse utilisable telle quelle.
function adressePhoto(valeur) {
  if (!valeur) return "";
  if (valeur.startsWith("/") || valeur.startsWith("http")) return valeur;
  return `/images/actions/${valeur}.webp`;
}

export const campagnes = Object.entries(fichiers)
  .map(([chemin, module]) => {
    const donnees = module.default ?? module;
    const nomDuFichier = chemin.split("/").pop().replace(/\.json$/, "");
    return {
      ...donnees,
      slug: donnees.slug || nomDuFichier,
      photos: (donnees.photos ?? []).map((photo) => ({
        ...photo,
        src: adressePhoto(photo.src),
      })),
    };
  })
  .sort((a, b) => (a.ordre ?? 0) - (b.ordre ?? 0));
