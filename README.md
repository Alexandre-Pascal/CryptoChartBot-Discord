# Discord Crypto Chart Bot 📊

Bot Discord permettant de générer des graphiques de prix pour différentes crypto-monnaies en utilisant l'API de Binance. Ce bot fournit des graphiques pour Bitcoin, Ethereum, Solana ainsi que pour d'autres crypto-monnaies en fonction des commandes de l'utilisateur.

## Fonctionnalités

- **Commandes Slash** :
  - /graph : Génère un graphique de la crypto-monnaie spécifiée avec des paramètres personnalisables (symbole, intervalle de temps, limite).
  - /graph_btc : Génère un graphique des prix de Bitcoin (1 an, daily).
  - /graph_eth : Génère un graphique des prix d'Ethereum (1 an, daily).
  - /graph_sol : Génère un graphique des prix de Solana (1 an, daily).

- **API Binance** : Récupération des données de prix depuis Binance pour l'affichage de graphiques.
- **Prix Actuel** : Affiche le prix actuel de la crypto-monnaie en plus du graphique pour chaque commande.

## Déploiement sur Render

J'ai déployé ce bot sur [Render](https://render.com), un service d'hébergement cloud. Voici comment j'ai procédé :

1. **Création d'un nouveau service** : J'ai créé un nouveau service web sur Render et sélectionné mon dépôt GitHub contenant le code du bot.
2. **Configuration des variables d'environnement** : J'ai ajouté les variables d'environnement nécessaires (comme `BOT_TOKEN`) directement dans le tableau de bord de Render.
3. **Lancement du service** : Une fois configuré, j'ai démarré le service, et le bot est désormais opérationnel.

## Ajouter le bot à votre serveur Discord

Tout le monde peut ajouter ce bot à son serveur Discord en utilisant le lien suivant :

[Ajouter le bot à mon serveur Discord](https://discord.com/oauth2/authorize?client_id=1301243281883009145&permissions=2147584000&integration_type=0&scope=bot)

## Utilisation

Une fois le bot en ligne (ajouté à votre serveur), vous pouvez interagir avec lui en utilisant les commandes suivantes dans un salon de votre serveur discord :

- /graph : Générez un graphique pour une crypto-monnaie avec des paramètres personnalisés.
  - **Options** :
    - `crypto` : Le symbole de la crypto-monnaie (ex : BTCUSDT).
    - `interval` : Intervalle de temps (ex : 1h, 1d).
    - `limit` : Nombre de données à récupérer.
- /graph_btc : Génère un graphique des prix de Bitcoin pour 1 an.
- /graph_eth : Génère un graphique des prix d'Ethereum pour 1 an.
- /graph_sol : Génère un graphique des prix de Solana pour 1 an.

### Exemples de commandes :

- /graph crypto:BTCUSDT interval:1d limit:365
- /graph_btc

## Dépendances

- [discord.js](https://discord.js.org/) - Pour la gestion des interactions Discord
- [axios](https://www.npmjs.com/package/axios) - Pour les requêtes HTTP vers l'API Binance
- [canvas](https://www.npmjs.com/package/canvas) - Pour la création des graphiques

## Hébergement

Vous pouvez héberger ce bot sur des services comme Heroku, Render, ou toute machine locale avec Node.js.

## Contributions

Les contributions sont les bienvenues ! Pour proposer une amélioration ou signaler un problème, ouvrez une issue ou un pull request.

# Déployer le Crypto Chart Bot en Local

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
Exemple : **Commande `/graph_btc`** : Génère un graphique des prix de Bitcoin sur une période d’un an et affiche sa valeur actuelle.

## Fin de l'Installation

Félicitations, votre bot est maintenant prêt à l'emploi ! 🎉 Vous pouvez tester et personnaliser le bot pour répondre aux besoins de votre serveur Discord. N'hésitez pas à explorer les fonctionnalités de l'API Binance pour ajouter d'autres commandes ou fonctionnalités de trading. Pour toute suggestion ou amélioration, ouvrez une *issue* ou proposez une *pull request* sur le dépôt GitHub.

Merci d'avoir installé ce bot ! 😊
