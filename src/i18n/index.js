// Gestion des deux langues du site.
// Le français est la langue par défaut et vit à la racine ; l'anglais est
// préfixé par /en/. Les données bilingues sont écrites sous la forme
// { fr: "...", en: "..." } et lues avec la fonction `t`.

export const langues = ["fr", "en"];
export const langueParDefaut = "fr";

export const nomsLangues = { fr: "Français", en: "English" };

/** Lit une valeur éventuellement bilingue. */
export function t(valeur, lang) {
  if (valeur === null || valeur === undefined) return "";
  if (typeof valeur === "string" || typeof valeur === "number") return valeur;
  return valeur[lang] ?? valeur[langueParDefaut] ?? "";
}

/** Construit une URL absolue du site pour la langue donnée. */
export function lien(lang, chemin = "") {
  const propre = chemin.replace(/^\/+|\/+$/g, "");
  const prefixe = lang === langueParDefaut ? "" : `/${lang}`;
  return propre ? `${prefixe}/${propre}/` : `${prefixe}/`;
}

/** Déduit la langue courante à partir de l'URL. */
export function langueDeUrl(url) {
  const segments = url.pathname.split("/").filter(Boolean);
  return langues.includes(segments[0]) ? segments[0] : langueParDefaut;
}

/** Chemin équivalent dans l'autre langue, pour le sélecteur. */
export function equivalent(url, cible) {
  const segments = url.pathname.split("/").filter(Boolean);
  if (langues.includes(segments[0])) segments.shift();
  return lien(cible, segments.join("/"));
}
