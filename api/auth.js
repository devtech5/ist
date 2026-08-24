// Première étape de la connexion à l'espace d'administration : rediriger vers
// GitHub. Decap CMS ouvre cette adresse dans une fenêtre surgissante, GitHub
// demande l'autorisation, puis renvoie sur /api/callback.
//
// Variables d'environnement attendues sur Vercel :
//   GITHUB_CLIENT_ID      identifiant de l'application OAuth GitHub
//   GITHUB_CLIENT_SECRET  secret associé (utilisé par callback.js)

import crypto from "node:crypto";

export function origineDeLaRequete(req) {
  const hote = req.headers["x-forwarded-host"] || req.headers.host;
  const protocole = req.headers["x-forwarded-proto"] || "https";
  return `${protocole}://${hote}`;
}

export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send("GITHUB_CLIENT_ID n'est pas défini sur l'hébergement.");
    return;
  }

  // Jeton anti-CSRF : déposé en cookie, revérifié au retour de GitHub.
  const etat = crypto.randomBytes(16).toString("hex");
  res.setHeader(
    "Set-Cookie",
    `ist_oauth_state=${etat}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
  );

  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", `${origineDeLaRequete(req)}/api/callback`);
  url.searchParams.set("scope", "repo,user:email");
  url.searchParams.set("state", etat);

  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Location", url.toString());
  res.statusCode = 302;
  res.end();
}
