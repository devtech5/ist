// Seconde étape de la connexion : GitHub renvoie un code, on l'échange contre
// un jeton d'accès, puis on le transmet à Decap CMS resté ouvert dans la
// fenêtre principale. La fenêtre surgissante se ferme d'elle-même.

import { origineDeLaRequete } from "./auth.js";

function lireCookie(req, nom) {
  const brut = req.headers.cookie || "";
  for (const morceau of brut.split(";")) {
    const [cle, ...reste] = morceau.trim().split("=");
    if (cle === nom) return reste.join("=");
  }
  return null;
}

// La réponse est une page HTML : tout ce qui vient de l'extérieur y est encodé.
function echapper(valeur) {
  return String(valeur).replace(
    /[&<>"']/g,
    (caractere) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[caractere],
  );
}

function pageDeReponse(resultat, contenu, origine) {
  const charge = JSON.stringify(contenu).replace(/</g, "\u003c");
  return `<!doctype html>
<html lang="fr">
  <head><meta charset="utf-8" /><title>Connexion — ONG IST</title></head>
  <body>
    <p>Connexion en cours…</p>
    <script>
      (function () {
        var message = 'authorization:github:${resultat}:' + ${JSON.stringify(charge)};
        function repondre(evenement) {
          window.removeEventListener('message', repondre, false);
          window.opener.postMessage(message, evenement.origin);
        }
        if (!window.opener) {
          document.body.textContent = 'Ouvrez cette page depuis /admin/.';
          return;
        }
        window.addEventListener('message', repondre, false);
        window.opener.postMessage('authorizing:github', ${JSON.stringify(origine)});
      })();
    </script>
  </body>
</html>`;
}

export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const origine = origineDeLaRequete(req);

  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  // Le cookie d'état n'a plus lieu d'être, quelle que soit l'issue.
  res.setHeader("Set-Cookie", "ist_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0");

  if (!clientId || !clientSecret) {
    res
      .status(500)
      .send("GITHUB_CLIENT_ID ou GITHUB_CLIENT_SECRET n'est pas défini sur l'hébergement.");
    return;
  }

  const { code, state, error, error_description: description } = req.query || {};

  if (error) {
    res.status(400).send(echapper(description || error));
    return;
  }

  const etatAttendu = lireCookie(req, "ist_oauth_state");
  if (!code || !state || !etatAttendu || state !== etatAttendu) {
    res.status(400).send("Requête de connexion invalide ou expirée. Recommencez depuis /admin/.");
    return;
  }

  let jeton;
  try {
    const reponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: `${origine}/api/callback`,
      }),
    });
    jeton = await reponse.json();
  } catch {
    res.status(502).send(pageDeReponse("error", { message: "GitHub est injoignable." }, origine));
    return;
  }

  if (!jeton || !jeton.access_token) {
    const message = jeton?.error_description || jeton?.error || "Jeton non délivré par GitHub.";
    res.status(401).send(pageDeReponse("error", { message }, origine));
    return;
  }

  res
    .status(200)
    .send(pageDeReponse("success", { token: jeton.access_token, provider: "github" }, origine));
}
