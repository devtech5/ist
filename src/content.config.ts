import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Les actualités sont de simples fichiers Markdown : l'ONG peut en ajouter
// sans toucher au code.
const actualites = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/actualites" }),
  schema: z.object({
    titre: z.string(),
    date: z.date(),
    chapeau: z.string(),
    lieu: z.string().optional(),
    image: z.string().optional(),
  }),
});

// Rapports annuels : un fichier par rapport, le PDF vit dans public/rapports/.
const rapports = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rapports" }),
  schema: z.object({
    annee: z.number(),
    titre: z.string(),
    // Chemin public du PDF, par exemple /rapports/rapport-2024.pdf
    fichier: z.string().optional(),
    // Image de couverture facultative, par exemple /rapports/couverture-2024.jpg
    couverture: z.string().optional(),
    // Carte de démonstration : affichée en grisé, sans lien de téléchargement.
    exemple: z.boolean().optional(),
  }),
});

export const collections = { actualites, rapports };
