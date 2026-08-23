# Site web — ONG International Santé pour Tous (IST)

Site statique construit avec [Astro](https://astro.build) et Tailwind CSS 4.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

## Structure

```
src/
  i18n/index.js             Langues, helper de traduction t(), construction des URL
  i18n/ui.js                Tous les libellés d'interface, FR et EN
  data/site.js              Données institutionnelles bilingues
  data/projets.js           Tableau récapitulatif des projets documentés
  data/terrain.js           Réalisations de terrain illustrées et légendes des photos
  content/actualites/*.md   Articles d'actualité (sous-dossier en/ pour l'anglais)
  content/rapports/*.md     Fiches des rapports annuels
  content.config.ts         Schémas des deux collections
  layouts/Base.astro        Gabarit commun (en-tête, pied de page, WhatsApp, métadonnées)
  components/               Header, Footer, Galerie, Lightbox, Whatsapp
  views/                    Le contenu réel de chaque page, paramétré par la langue
  pages/                    Routes françaises, et pages/en/ pour l'anglais
public/images/actions/      Photographies de terrain converties en WebP
public/rapports/            PDF des rapports annuels et images de couverture
public/admin/               Espace d'administration (Decap CMS)
```

## Deux langues

Le français vit à la racine (`/realisations/`), l'anglais sous `/en/`
(`/en/realisations/`). Chaque page existe en deux exemplaires très courts dans
`src/pages/` et `src/pages/en/` ; ils rendent tous les deux la même vue de
`src/views/` en lui passant `lang="fr"` ou `lang="en"`. Il n'y a donc jamais de
mise en page dupliquée.

Les textes traduits s'écrivent partout sous la forme `{ fr: "…", en: "…" }` et se
lisent avec `t(valeur, lang)`. Les libellés d'interface sont regroupés dans
`src/i18n/ui.js`.

Pour une actualité bilingue, créer deux fichiers portant la même `cle` et une
`lang` différente — celui en anglais dans `src/content/actualites/en/`. Le champ
s'appelle `cle` et non `slug` : ce dernier est réservé par le chargeur d'Astro et
ferait s'écraser les deux traductions.

## Identité visuelle

La palette est dérivée du logo : le bleu institutionnel décliné de `ist-50` à
`ist-900`, le rouge `ist-red` du caducée pour les actions, le turquoise
`ist-teal` pour les surtitres. Tout est déclaré dans le bloc `@theme` de
`src/styles/global.css`, avec deux ombres partagées (`shadow-carte`,
`shadow-carte-active`) et trois utilitaires maison : `surtitre`, `trame-ist` et
`apparition`.

Le bouton WhatsApp flottant est monté par `src/components/Whatsapp.astro` sur
toutes les pages ; il utilise le numéro mobile déclaré dans `src/data/site.js`.

## Rapports annuels

La page `/rapports/` affiche les rapports sous forme de vignettes de couverture
cliquables, de la plus récente à la plus ancienne, comme sur le site de référence.

Deux façons d'ajouter un rapport :

**Par l'espace d'administration** (voir la section suivante) : le PDF est téléversé
depuis le navigateur, sans manipuler de fichiers.

**Manuellement** : déposer le PDF dans `public/rapports/`, puis créer
`src/content/rapports/rapport-2025.md` :

```markdown
---
annee: 2025
titre: "Rapport d'activité 2025"
fichier: "/rapports/rapport-2025.pdf"
couverture: "/rapports/couverture-2025.jpg"
---
```

Sans image de couverture, une vignette bleue portant l'année est générée
automatiquement. Sans fichier PDF, la carte s'affiche en grisé avec la mention
« Bientôt disponible ». Le fichier `exemple-2024.md` est une carte de démonstration :
le supprimer dès le premier vrai rapport publié.

## Espace d'administration

`public/admin/` contient une interface Decap CMS permettant à l'ONG de téléverser un
rapport, publier une actualité et modifier les textes sans passer par le code.

Le dépôt `devtech5/ist` et la branche `main` sont déjà renseignés dans
`public/admin/config.yml`. Il reste une étape : activer l'authentification, avec
Netlify Identity si le site est hébergé sur Netlify, ou un service OAuth GitHub
sinon.

Tant que cette étape n'est pas faite, la page `/admin/` s'affiche mais la connexion
échoue. La méthode manuelle décrite plus haut reste disponible dans tous les cas.

## Photographies

35 photographies issues du dossier institutionnel ont été converties en WebP
(2,5 Mo au total, largeur maximale 1400 px) et réparties par campagne dans
`src/data/terrain.js`. Elles s'affichent en galerie sur les articles de
réalisation, avec agrandissement au clic.

Les clichés montrant des mineurs identifiables ont été écartés, de même que les
documents administratifs scannés (attestations, listes de membres, courriers
ministériels) qui contiennent des données personnelles et des signatures.

## Ajouter une actualité

Créer un fichier dans `src/content/actualites/` :

```markdown
---
titre: "Titre de l'article"
date: 2026-03-15
lieu: "San-Pédro"
chapeau: "Résumé en une ou deux phrases."
---

Le corps de l'article en Markdown.
```

La page `/actualites/` et l'URL de l'article sont générées automatiquement.

## Navigation

Menu unique, identique sur mobile et sur ordinateur, ouvert par le bouton MENU :
Accueil · À propos · Nos réalisations · Rapports · Actualités · Contact, plus un
bouton « Faire un don » mis en avant.

## Réalisations

`/realisations/` liste les campagnes sous forme de cartes filtrables par domaine,
avec un compteur par filtre. Chaque carte ouvre un article dédié
`/realisations/<slug>/` : bandeau, photo de couverture, encarts lieu / résultat /
financement, texte, galerie « En images » et navigation vers la réalisation
précédente et suivante.

Pour ajouter une réalisation, ajouter une entrée dans `src/data/terrain.js` :

```js
{
  slug: "nom-court",
  extrait: "Une phrase de résumé affichée sur la carte.",
  domaine: "sante", // sante | social-developpement | cohesion-sociale
  titre: "Titre complet de la réalisation",
  periode: "Mars 2026",
  lieu: "San-Pédro",
  financement: "Montant et bailleur",
  resultat: "Le résultat mesuré",
  texte: "Le corps de l'article.",
  photos: [{ src: "nom-fichier", legende: "Légende de la photo" }],
}
```

Les photos correspondent à des fichiers `public/images/actions/<src>.webp`. La
première sert de couverture sur la carte et en tête de l'article. Le filtre et le
compteur du domaine se mettent à jour automatiquement.

## Déploiement sur Vercel

Le fichier `vercel.json` fixe déjà la configuration : framework Astro, build
`npm run build`, sortie `dist`, URL avec barre oblique finale, en-têtes de cache
et en-têtes de sécurité.

Deux étapes restent à faire depuis un compte Vercel :

1. Sur https://vercel.com/new, importer le dépôt `devtech5/ist`. Vercel lit
   `vercel.json` : aucun réglage à saisir, il suffit de valider.
2. Une fois le premier déploiement passé, associer le nom de domaine de l'ONG
   dans **Settings → Domains**.

Chaque `git push` sur `main` déclenche ensuite un déploiement automatique, et
chaque branche obtient sa propre URL de prévisualisation.

En ligne de commande, si la CLI est installée et connectée :

```bash
npx vercel --prod
```

## Données volontairement exclues du site

Ces informations figurent dans le dossier institutionnel de l'ONG mais ne sont pas
publiées, pour des raisons de sécurité, de confidentialité ou de protection des
personnes :

- coordonnées bancaires (compte BNI) ;
- codes administratifs internes : MAE, MLS, PSP, compte contribuable ;
- adresse électronique personnelle et numéros de téléphone personnels du président ;
- identités, âges et adresses des bénéficiaires cités dans les témoignages ;
- récits détaillés de litiges fonciers et de chefferie nommant villages, communautés
  ou personnes — résumés sans les identifier ;
- article de presse repris intégralement — réécrit dans `src/content/actualites/`.

## À fournir par l'ONG avant mise en ligne

- [ ] Bilans financiers 2023, 2024 et 2025 (les chiffres actuels s'arrêtent à mi-2022)
- [ ] Effectifs et nombre d'antennes actualisés
- [ ] Logo en vectoriel ou en haute définition (l'actuel est un scan)
- [ ] Coordonnées Mobile Money et bancaires validées par le conseil d'administration,
      pour la page « Faire un don »
- [ ] Adresse électronique institutionnelle (`contact@` plutôt qu'une adresse Gmail)
- [ ] URL des réseaux sociaux restants (Facebook déjà renseigné : `web.facebook.com/ist.ong.545`)
- [ ] Rapports annuels au format PDF, avec leurs images de couverture
- [ ] Authentification de l'espace d'administration (Netlify Identity ou OAuth GitHub)
- [ ] Vérification des légendes de photos : lorsque le document Word associait trois
      photos à trois localités en une seule ligne, la correspondance exacte n'a pas pu
      être établie et la légende retenue reste générique
- [ ] Autorisations écrites d'utilisation des logos des partenaires
- [ ] Autorisations de diffusion des photographies, en particulier pour les mineurs
      et les personnes photographiées en contexte médical
- [ ] Noms et fonctions des membres de la direction, pour la page « À propos »
- [ ] Nom et adresse de l'hébergeur, pour les mentions légales
- [ ] Confirmation du numéro de téléphone principal : le dossier indique
      `27 34 76 93 90` (siège), la bannière fournie indique `27 34 71 64 52`
      (antenne de Sassandra)

## À brancher côté technique

- [ ] Formulaire de contact : aucun message n'est envoyé pour l'instant, il faut
      raccorder un service d'envoi (Formspree, Web3Forms ou fonction serveur)
- [ ] Carte des antennes
