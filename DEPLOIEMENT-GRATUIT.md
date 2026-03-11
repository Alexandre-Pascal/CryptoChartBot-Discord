# Déployer le bot gratuitement (Koyeb) — GitHub → auto-deploy

**Koyeb** est gratuit, connecte ton repo GitHub et redéploie à chaque push. Pas de carte bancaire requise pour commencer.

## Pourquoi Koyeb plutôt que Render ?

Sur Render (gratuit), Discord rate-limit souvent les connexions des bots (IP partagée), donc le bot reste « hors ligne ». Koyeb évite en général ce problème pour les bots Discord.

---

## 1. Créer un compte Koyeb

- Va sur [koyeb.com](https://www.koyeb.com) → **Sign up** (avec GitHub, c’est le plus simple).

---

## 2. Créer un service depuis GitHub

1. Dans le dashboard Koyeb : **Create App** → **GitHub**.
2. Autorise Koyeb à accéder à ton GitHub si demandé.
3. Choisis le dépôt **CryptoChartBot-Discord** (ou le nom de ton repo).
4. **Branch** : `main` (ou celle que tu utilises).
5. **Builder** : laisse **Buildpack** (détection auto Node.js).
6. **Run command** : laisse vide → Koyeb utilisera `npm start` (`node index.js`).
7. **Instance type** : garde le type gratuit (ex. Nano / 512 Mo).

---

## 3. Variables d’environnement

Dans la même page (ou dans **Settings** du service après création) :

| Nom        | Valeur                    |
|------------|----------------------------|
| `BOT_TOKEN` | Ton token Discord (Developer Portal → Bot → Reset Token) |
| `APP_URL`  | L’URL publique du service (voir après le 1er déploiement)  |

Tu peux ajouter `APP_URL` après le premier déploiement : Koyeb te donnera une URL du type `https://ton-projet-xxx.koyeb.app`. Remets-la dans `APP_URL` pour que le bot se ping lui-même et limite les mises en veille.

---

## 4. Déployer

Clique sur **Deploy**. Koyeb build puis lance `npm start`. Une fois en ligne, tu obtiens une URL publique (ex. `https://...koyeb.app`).

---

## 5. (Optionnel) Éviter la mise en veille (offre gratuite)

Sur l’offre gratuite, le service peut s’endormir après une période sans requête.

- **Option A** : Définir **`APP_URL`** sur l’URL publique de ton app (ex. `https://ton-projet.koyeb.app`). Le bot s’envoie un ping toutes les 10 minutes.
- **Option B** : Utiliser [UptimeRobot](https://uptimerobot.com) (gratuit) : crée un moniteur HTTP qui appelle ton URL Koyeb toutes les 5–10 minutes.

---

## 6. Auto-deploy

À chaque **push sur la branche suivie** (ex. `main`), Koyeb refait un build et un déploiement automatiquement. Rien d’autre à faire.

---

## Résumé

| Étape              | Action |
|--------------------|--------|
| Compte             | [koyeb.com](https://www.koyeb.com) → Sign up (GitHub) |
| Nouveau service    | Create App → GitHub → ton repo |
| Variables          | `BOT_TOKEN` (obligatoire), `APP_URL` (recommandé) |
| Déploiement        | Deploy → attendre l’URL |
| Après déploiement  | Mettre cette URL dans `APP_URL` puis redéployer si besoin |

Ton bot Discord sera en ligne et se mettra à jour à chaque push sur GitHub.
