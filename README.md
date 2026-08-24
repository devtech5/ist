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
  i18n/libelles/*.json      Libellés d'interface, un fichier par groupe de pages
  i18n/ui.js                Rassemble les libellés sous le nom `ui` attendu par les pages
  data/menu.json            Ordre des entrées du menu et page du bouton d'appel
  data/identite.json        Nom, devise, présentation, vision, missions
  data/contact.json         Adresse, téléphones, courriel, réseaux sociaux
  data/institution.json     Chiffres, zones, domaines, effectifs, agréments, distinctions
  data/partenaires.json     Partenaires et leurs logos
  data/campagnes/*.json     Une réalisation de terrain par fichier, avec ses photos
  data/site.js              Republie les quatre JSON sous les noms attendus par les pages
  data/terrain.js           Rassemble et ordonne les fichiers de data/campagnes/
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
api/auth.js, api/callback.js  Connexion GitHub de l'espace d'administration
```

## Diaporama d'accueil

`src/components/Diaporama.astro` occupe tout l'écran en tête de la page
d'accueil. Il tire ses diapositives des réalisations marquées `vedette: true`
dans `src/data/campagnes/` — quatre aujourd'hui.

L'ordre est mélangé côté navigateur à chaque visite : le rendu statique reste
donc identique d'un build à l'autre, seul l'affichage varie.

Cinq transitions sont tirées au sort à chaque passage, sans jamais répéter la
précédente : fondu, glissement latéral, zoom avec flou, volet vertical et volet
diagonal. Le travelling sur la photo change lui aussi de sens à chaque fois. Une
fin de transition idempotente, doublée d'un garde-fou par minuterie, empêche le
diaporama de se bloquer si une animation est interrompue.
Défilement automatique toutes les 6,5 secondes, mis en pause au survol, au
focus clavier et quand l'onglet passe en arrière-plan ; flèches, pastilles à
jauge de progression et flèches du clavier pour naviguer.

Pour changer les diapositives, il suffit de déplacer le `vedette: true` d'une
réalisation à une autre.

## Barre de navigation

Sur la page d'accueil la barre est posée par-dessus le diaporama, transparente,
avec le logo et les libellés en blanc. Dès que le diaporama quitte le haut de
l'écran, elle reprend un fond blanc translucide, une bordure et les couleurs de
marque. Les autres pages l'affichent d'emblée sur son fond. Le comportement
tient au seul attribut `flottant` passé au gabarit.

## Bandeaux de page

`src/components/EntetePage.astro` porte le bandeau des six pages internes :
fond bleu nuit, trame quadrillée, halo turquoise, fil d'Ariane, pastille de
rubrique à point clignotant, grand titre, accroche, et une photographie
d'illustration quand la page en a une. Une propriété `note` permet d'ajouter la
petite mention encadrée sous l'accroche.

## Composants d'interface

Les serveurs Magic UI et shadcn/ui ne sont pas joignables depuis cet
environnement ; les effets utilisés ont donc été réécrits à la main, sans
dépendance, dans `src/components/ui/` et dans `src/styles/global.css` :

- `Defilement.astro` — bandeau défilant continu, mis en pause au survol, avec
  fondus latéraux (motif « marquee »), disponible mais plus utilisé sur
  l'accueil depuis le passage à un mur de partenaires ;
- `MotifPoints.astro` — trame de points en fond de section, estompée sur les
  bords (motif « dot pattern ») ;
- `.bordure-lumineuse` — liseré qui tourne lentement autour d'une carte (motif
  « border beam »), posé sur l'appel au don et le formulaire de contact ;
- barre de progression de lecture en haut de la fenêtre ;
- compteurs animés, apparitions avec flou.

## Animations

`src/scripts/animations.js` regroupe tout, via GSAP et ScrollTrigger :

- `data-reveal="up"` ou `data-reveal="zoom"` sur un bloc le fait apparaître à
  l'entrée dans l'écran, avec un décalage réglable par `data-reveal-delay`
  (en millisecondes) ;
- `data-compteur="199000"` fait grimper le nombre jusqu'à sa valeur ;
- `data-parallaxe` fait glisser une image plus lentement que la page.

Trois garde-fous : le contenu reste visible tant que le script n'a pas pris la
main, un repli CSS s'active si GSAP ne se charge pas, et tout est révélé au
bout de trois secondes si un déclencheur ne part jamais. Les préférences
`prefers-reduced-motion` coupent l'ensemble des animations.

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

Deux sources se combinent dans le bloc `@theme` de `src/styles/global.css` :

- **la marque** vient du logo — bleu institutionnel décliné de `ist-50` à
  `ist-900`, rouge `ist-red` du caducée pour les actions, turquoise `ist-teal`
  pour les surtitres ;
- **la présentation** reprend le mode clair du portfolio de référence — fond
  blanc, texte `#12161e`, gris `#f1f2f3` et `#5c6471`, bordures `#dbdee1`,
  coins à `0,75 rem`, Kanit en titrage et Inter en lecture, grilles séparées
  par un filet d'un pixel, surtitres en petites capitales très espacées
  précédés d'un trait.

Deux ombres partagées (`shadow-carte`, `shadow-carte-active`) et deux
utilitaires maison : `surtitre` et `trame-ist`.

Le bouton WhatsApp flottant est monté par `src/components/Whatsapp.astro` sur
toutes les pages ; il utilise le numéro mobile déclaré dans `src/data/contact.json`.

## Rapports annuels

La page `/rapports/` affiche les rapports sous forme de vignettes de couverture
cliquables, de la plus récente à la plus ancienne, comme sur le site de référence,
puis la liste des documents officiels de l'ONG.

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
« Bientôt disponible ».

Le rapport d'activité 2025 est en ligne : `public/rapports/rapport-2025.pdf`,
déclaré par `src/content/rapports/rapport-2025.md`.

## Espace d'administration

`public/admin/` contient une interface Decap CMS permettant à l'ONG de publier une
actualité et de téléverser un rapport annuel sans passer par le code. Chaque
enregistrement écrit un fichier Markdown dans `src/content/` et pousse un commit sur
`main` ; Vercel redéploie le site dans la foulée, en une à deux minutes.

Trois rubriques sont proposées :

| Rubrique | Écrit dans | Contient |
| --- | --- | --- |
| Rapports annuels | `src/content/rapports/` | année, titres français et anglais, PDF, couverture |
| Actualités (français) | `src/content/actualites/` | titre, date, lieu, résumé, contenu |
| News (English) | `src/content/actualites/en/` | la traduction du même article |
| Textes du site → Menu de navigation | `src/data/menu.json` | ordre des entrées, page visée par le bouton d'appel |
| Textes du site → Identité, vision et missions | `src/data/identite.json` | nom, sigle, baseline, devise, présentation, vision, missions |
| Textes du site → Contact et réseaux sociaux | `src/data/contact.json` | adresse du siège, téléphones, WhatsApp, courriel, liens sociaux |
| Textes du site → Chiffres, zones, agréments et équipe | `src/data/institution.json` | chiffres clés, zones, domaines d'action, effectifs, agréments, distinctions, matériel |
| Textes du site → Partenaires | `src/data/partenaires.json` | sigle, nom bilingue, logo |
| Réalisations de terrain | `src/data/campagnes/` | une fiche par campagne, avec sa galerie |
| Libellés de l'interface | `src/i18n/libelles/` | titres de sections, boutons et messages, un fichier par groupe de pages |

Tout ce qui s'affiche sur le site passe donc par l'interface.

Le menu se règle par choix dans une liste de pages, jamais par saisie d'une
adresse : l'ordre des entrées et le bouton d'appel se modifient depuis
l'interface, sans risque de lien mort. Retirer une entrée ne supprime pas la
page — elle reste accessible par son adresse, simplement plus liée depuis le
menu. Le texte affiché, lui, se règle dans « Libellés de l'interface ».

Ouvrir une page au menu suppose en revanche que la route existe : la
correspondance entre une entrée et son adresse est déclarée dans la table
`pages` de `src/data/site.js`, en même temps que le fichier de `src/pages/`.

Les libellés d'interface sont courts par construction — ce sont des boutons, des
titres de sections, des intitulés de colonnes. Un texte nettement plus long que
celui d'origine peut déborder de son bouton ou de son bandeau : mieux vaut
regarder la page concernée après l'avoir modifié. Certains libellés portent un
jeton entre accolades — `{n}`, `{email}`, `{tel}` — remplacé à l'affichage par
la valeur du moment ; le conserver tel quel.

Les deux versions d'un même article sont reliées par le champ **Adresse de
l'article** : il doit être saisi à l'identique en français et en anglais. C'est
aussi ce qui donne l'URL, par exemple `/actualites/depistage-gratuit-san-pedro/`.
Une actualité peut exister en français seul ; l'anglais s'ajoute plus tard.

Chaque champ bilingue se présente comme deux cases, **Français** et **English**.
Laisser la case anglaise vide fait retomber l'affichage sur le français.

Une remarque sur les fichiers JSON : l'interface réécrit le fichier entier à
l'enregistrement, et l'ordre des clés peut changer d'une sauvegarde à l'autre.
C'est sans effet sur le site. En revanche, retirer un champ de
`public/admin/config.yml` le supprimerait des fichiers au premier
enregistrement : n'y toucher qu'en connaissance de cause.

### Modifier hors ligne, sans compte

C'est le mode le plus simple pour travailler seul sur le poste de développement.
Dans deux terminaux :

```bash
npm run dev
```

```bash
npm run admin
```

Puis ouvrir http://localhost:4321/admin/index.html — le serveur de développement
d'Astro ne sert pas les dossiers du répertoire `public/` sans nom de fichier, alors
qu'en ligne `/admin/` suffit. Decap écrit directement dans les fichiers
du dépôt, sans authentification. Les modifications restent locales : il faut les
valider avec `git commit` puis `git push` pour qu'elles partent en ligne.

### Activer la connexion en ligne (GitHub)

En production, `/admin/` s'authentifie avec un compte GitHub ayant accès au dépôt
`devtech5/ist`. Les deux fonctions `api/auth.js` et `api/callback.js` sont déjà
écrites et déployées avec le site ; il reste à créer l'application OAuth et à
renseigner ses deux clés.

1. Sur https://github.com/settings/developers, **New OAuth App** :
   - *Application name* : `Administration ONG IST`
   - *Homepage URL* : `https://ong-ist.org`
   - *Authorization callback URL* : `https://ong-ist.org/api/callback`
2. Générer un *client secret* et noter les deux valeurs.
3. Dans Vercel, **Settings → Environment Variables**, ajouter pour les
   environnements *Production* et *Preview* :
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
4. Redéployer, puis ouvrir https://ong-ist.org/admin/ et cliquer sur *Login with
   GitHub*.

Si le nom de domaine change, mettre à jour `backend.base_url` dans
`public/admin/config.yml` ainsi que les deux URL de l'application OAuth.

Donner l'accès à une nouvelle personne revient à l'inviter comme collaborateur du
dépôt GitHub ; le lui retirer revient à la retirer du dépôt. Aucun mot de passe
n'est stocké par le site.

Tant que les deux variables ne sont pas renseignées, la page `/admin/` s'affiche
mais la connexion échoue avec le message
« GITHUB_CLIENT_ID n'est pas défini sur l'hébergement ». Le mode hors ligne
ci-dessus et la méthode manuelle décrite plus haut restent disponibles dans tous
les cas.

`/admin/` et `/api/` sont exclus de l'indexation, par `public/robots.txt` et par un
en-tête `X-Robots-Tag: noindex` posé dans `vercel.json`.

## Photographies

35 photographies issues du dossier institutionnel ont été converties en WebP
(2,5 Mo au total, largeur maximale 1400 px) et réparties par campagne dans
`src/data/campagnes/`. Elles s'affichent en galerie sur les articles de
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

Le plus simple est de passer par la rubrique « Réalisations de terrain » de
l'espace d'administration, qui téléverse aussi les photographies. À la main, il
s'agit d'ajouter un fichier dans `src/data/campagnes/` :

```json
{
  "ordre": 90,
  "slug": "nom-court",
  "vedette": false,
  "domaine": "sante",
  "titre": { "fr": "Titre complet", "en": "Full title" },
  "extrait": { "fr": "Résumé affiché sur la carte.", "en": "Summary on the card." },
  "periode": { "fr": "Mars 2026", "en": "March 2026" },
  "lieu": { "fr": "San-Pédro", "en": "San-Pédro" },
  "financement": { "fr": "Montant et bailleur", "en": "Amount and funder" },
  "resultat": { "fr": "Le résultat mesuré", "en": "The measured result" },
  "texte": { "fr": "Le corps de l'article.", "en": "The body of the article." },
  "photos": [
    {
      "src": "/images/actions/nom-fichier.webp",
      "legende": { "fr": "Légende", "en": "Caption" }
    }
  ]
}
```

`domaine` reprend l'identifiant d'un domaine d'action : `sante`,
`social-developpement` ou `cohesion-sociale`. `ordre` fixe le rang d'affichage,
du plus petit au plus grand ; les fiches existantes vont de 10 à 80, ce qui
laisse la place d'en insérer une entre deux. `vedette` fait entrer la
réalisation dans le diaporama de la page d'accueil.

La première photographie sert de couverture, sur la carte et en tête de
l'article. Le filtre et le compteur du domaine se mettent à jour
automatiquement.

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

- [ ] Effectifs et nombre d'antennes actualisés
- [ ] Logo en vectoriel ou en haute définition (l'actuel est un scan)
- [ ] Coordonnées Mobile Money et bancaires validées par le conseil d'administration,
      pour la page « Faire un don »
- [ ] Adresse électronique institutionnelle (`contact@` plutôt qu'une adresse Gmail)
- [ ] URL des réseaux sociaux restants (Facebook déjà renseigné : `web.facebook.com/ist.ong.545`)
- [ ] Rapports annuels au format PDF, avec leurs images de couverture
- [ ] Application OAuth GitHub créée et variables `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`
      renseignées sur Vercel, pour la connexion à l'espace d'administration
- [ ] Vérification des légendes de photos : lorsque le document Word associait trois
      photos à trois localités en une seule ligne, la correspondance exacte n'a pas pu
      être établie et la légende retenue reste générique
- [ ] Autorisation d'afficher les logos des partenaires. Six sont en place dans
      `public/images/partenaires/`, repris de Wikimedia Commons et du site du
      CERAP ; leur provenance et leur licence sont notées dans le fichier
      `LISEZ-MOI.txt` du dossier. Le logo du Ministère de la Santé est remplacé
      par les armoiries nationales, faute de logo propre.
- [ ] Logos manquants : projet LIANE 2 et RIOF. À téléverser depuis la rubrique
      « Partenaires » de l'espace d'administration, ou en déposant le fichier dans
      `public/images/partenaires/` puis en renseignant le champ `logo` de l'entrée
      dans `src/data/partenaires.json`. Une pastille au sigle tient la place en
      attendant.
- [ ] Autorisations de diffusion des photographies, en particulier pour les mineurs
      et les personnes photographiées en contexte médical
- [ ] Noms et fonctions des membres de la direction, pour la page « À propos »
- [ ] Nom et adresse de l'hébergeur, pour les mentions légales
- [ ] Confirmation du numéro de téléphone principal : le dossier indique
      `27 34 76 93 90` (siège), la bannière fournie indique `27 34 71 64 52`
      (antenne de Sassandra). Le site publie aujourd'hui la ligne fixe du siège
      et le WhatsApp `+225 07 48 60 36 31`.

## À brancher côté technique

- [ ] Formulaire de contact : aucun message n'est envoyé pour l'instant, il faut
      raccorder un service d'envoi (Formspree, Web3Forms ou fonction serveur)
- [ ] Carte des antennes
