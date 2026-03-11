# Discord Crypto Chart Bot 📊

Bot Discord permettant de générer des graphiques de prix pour différentes crypto-monnaies en utilisant l'API de Binance. Ce bot fournit des graphiques pour Bitcoin, Ethereum, Solana ainsi que pour d'autres crypto-monnaies en fonction des commandes de l'utilisateur.

## Fonctionnalités

- **Commandes Slash** :
  - /chart : Génère un graphique de la crypto-monnaie spécifiée avec des paramètres personnalisables (symbole, intervalle de temps, limite).
  - /chart_btc : Génère un graphique des prix de Bitcoin (1 an, daily).
  - /chart_eth : Génère un graphique des prix d'Ethereum (1 an, daily).
  - /chart_sol : Génère un graphique des prix de Solana (1 an, daily).

- **API Binance** : Récupération des données de prix depuis Binance pour l'affichage de graphiques.
- **Prix Actuel** : Affiche le prix actuel de la crypto-monnaie en plus du graphique pour chaque commande.

## Démarrer en local

1. **Cloner et installer les dépendances**
   ```bash
   git clone https://github.com/Alexandre-Pascal/bot-discord-graph-crypto.git
   cd bot-discord-graph-crypto
   npm install
   ```

2. **Créer un fichier `.env`** à la racine du projet :
   ```env
   BOT_TOKEN=votre_token_discord
   ```
   (Récupérez le token dans [Discord Developer Portal](https://discord.com/developers/applications) → votre application → Bot → Reset Token / Copy.)

3. **Lancer le bot**
   ```bash
   npm start
   ```
   ou `node index.js`. Vous devriez voir « Connecté en tant que … » et « Serveur en écoute sur le port 3000 ».

4. **Tester** : dans un salon Discord où le bot est invité, tapez par exemple `/chart_btc`.

---

## Hébergement (gratuit) : Koyeb

Le bot est hébergé sur **[Koyeb](https://www.koyeb.com)** : gratuit, synchro GitHub et déploiement automatique à chaque push. Pas de rate-limit Discord comme sur Render.

👉 **[Guide détaillé : Déployer sur Koyeb](DEPLOIEMENT-GRATUIT.md)** — compte gratuit, connexion au repo GitHub, variable `BOT_TOKEN`, puis Deploy. Optionnel : `APP_URL` pour limiter la mise en veille.
---

### Autres options

- **En local** : `npm install` puis `npm start` (voir « Démarrer en local » ci-dessus).
- **Render** : possible, mais l'offre gratuite subit souvent un rate-limit Discord (bot « hors ligne »). Préférer Koyeb.

## Ajouter le bot à votre serveur Discord

Tout le monde peut ajouter ce bot à son serveur Discord en utilisant le lien suivant :

[Ajouter le bot à mon serveur Discord](https://discord.com/oauth2/authorize?client_id=1301243281883009145&permissions=2147584000&integration_type=0&scope=bot)

## Utilisation

Une fois le bot en ligne (ajouté à votre serveur), vous pouvez interagir avec lui en utilisant les commandes suivantes dans un salon de votre serveur discord :

- /chart : Générez un graphique pour une crypto-monnaie avec des paramètres personnalisés.
  - **Options** :
    - `crypto` : Le symbole de la crypto-monnaie (ex : BTCUSDT).
    - `interval` : Intervalle de temps (ex : 1h, 1d).
    - `limit` : Nombre de données à récupérer.
- /chart_btc : Génère un graphique des prix de Bitcoin pour 1 an.
- /chart_eth : Génère un graphique des prix d'Ethereum pour 1 an.
- /chart_sol : Génère un graphique des prix de Solana pour 1 an.

### Exemples de commandes :

- /chart crypto:BTCUSDT interval:1d limit:365
- /chart_btc

### [Voir fichier guide pour plus d'explications](GUIDE.md)

## Dépendances

- [discord.js](https://discord.js.org/) - Pour la gestion des interactions Discord
- [axios](https://www.npmjs.com/package/axios) - Pour les requêtes HTTP vers l'API Binance
- [@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas) - Pour la création des graphiques (sans dépendances système)

## Hébergement

Recommandé : **Koyeb** (gratuit, GitHub → auto-deploy), voir [DEPLOIEMENT-GRATUIT.md](DEPLOIEMENT-GRATUIT.md). Sinon : machine locale avec Node.js, ou Render / Railway (attention au rate-limit Discord sur Render gratuit).

## Contributions

Les contributions sont les bienvenues ! Pour proposer une amélioration ou signaler un problème, ouvrez une issue ou un pull request.

# Héberger et déployer le Bot en Local

Ce guide explique comment configurer et déployer votre bot localement avec Node.js et le [Discord Developer Portal](https://discord.com/developers/applications).

---

## 1. Configuration du Bot dans le Discord Developer Portal

### Étape 1 : Créer une Application Discord

1. Allez sur [Discord Developer Portal](https://discord.com/developers/applications).
2. Cliquez sur **New Application**.
3. Entrez un nom (ex. : "Crypto Chart Bot") et cliquez sur **Create**.

### Étape 2 : Ajouter le Bot à l'Application

1. Dans le menu de gauche, cliquez sur **Bot**.
3. Vous verrez la section token :
   - Cliquez sur **Reset Token**, et sur **Copy** pour copier le token.
   - **Gardez ce token secret** ; il sera utilisé dans votre fichier `.env`.

### Étape 3 : Configurer les Permissions du Bot

1. Allez dans **OAuth2** > **OAuth2 URL Generator**.
2. Activez **Message Content Intent**, sauvegardez les modifications.
3. Dans la section **Scopes**, cochez **bot**.
4. Sous **Bot Permissions**, cochez les permissions requises :
   - **Send Messages** : permet au bot d'envoyer des messages.
   - **Read Message History** : pour lire l’historique des messages.
   - **Attach Files** : pour envoyer des fichiers (comme les graphiques).
5. Copiez l'URL générée pour ajouter le bot à votre serveur.

### Étape 4 : Ajouter le Bot à Votre Serveur Discord

1. Ouvrez l'URL générée dans une nouvelle fenêtre.
2. Sélectionnez le serveur où vous voulez ajouter le bot.
3. Cliquez sur  **Continuer** > **Authoriser**.



## 2. Installation et Déploiement du Bot en Local

### Étape 1 : Cloner le Dépôt et Installer les Dépendances

```bash
git clone https://github.com/Alexandre-Pascal/bot-discord-graph-crypto.git
npm install
```
### Étape 2 : Créer le Fichier `.env`

1. Dans le répertoire du projet, créez un fichier `.env`.
2. Ajoutez-y le contenu suivant :

    ```env
    BOT_TOKEN=your-discord-bot-token
    ```

   Remplacez `your-discord-bot-token` par le token que vous avez copié.

---

### Étape 3 : Lancer le Bot
   ```bash
   node index.js
   ```
Le bot devrait maintenant être en ligne et répondre aux commandes sur le serveur.

## Étape 4 : Tester les Commandes du Bot

Une fois le bot démarré en local, testez ses commandes directement dans un salon de votre serveur Discord.
Exemple : **Commande `/chart_btc`** : Génère un graphique des prix de Bitcoin sur une période d’un an et affiche sa valeur actuelle.

## Fin de l'Installation

Félicitations, votre bot est maintenant prêt à l'emploi ! 🎉 Vous pouvez tester et personnaliser le bot pour répondre aux besoins de votre serveur Discord. N'hésitez pas à explorer les fonctionnalités de l'API Binance pour ajouter d'autres commandes ou fonctionnalités de trading. Pour toute suggestion ou amélioration, ouvrez une *issue* ou proposez une *pull request* sur le dépôt GitHub.

Merci d'avoir installé ce bot ! 😊
