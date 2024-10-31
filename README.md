# Discord Crypto Chart Bot 📊

Bot Discord permettant de générer des graphiques de prix pour différentes crypto-monnaies en utilisant l'API de Binance. Ce bot fournit des graphiques pour Bitcoin, Ethereum, Solana ainsi que pour d'autres crypto-monnaies en fonction des commandes de l'utilisateur.

## Fonctionnalités

- **Commandes Slash** :
  - /graph : Génère un graphique de la crypto-monnaie spécifiée avec des paramètres personnalisables (symbole, intervalle de temps, limite).
  - /graph_btc : Génère un graphique des prix de Bitcoin (1 an, daily).
  - /graph_eth : Génère un graphique des prix d'Ethereum (1 an, daily).
  - /graph_sol : Génère un graphique des prix de Solana (1 an, daily).

- **API Binance** : Récupération des données de prix depuis Binance pour l'affichage de graphiques.
- **Prix Actuel** : Affiche le prix actuel de la crypto-monnaie en plus du graphique.

## Déploiement sur Render

J'ai déployé ce bot sur [Render](https://render.com), un service d'hébergement cloud. Voici comment j'ai procédé :

1. **Création d'un nouveau service** : J'ai créé un nouveau service web sur Render et sélectionné mon dépôt GitHub contenant le code du bot.
2. **Configuration des variables d'environnement** : J'ai ajouté les variables d'environnement nécessaires (comme `BOT_TOKEN`) directement dans le tableau de bord de Render.
3. **Lancement du service** : Une fois configuré, j'ai démarré le service, et le bot est désormais opérationnel.

## Ajouter le bot à votre serveur Discord

Tout le monde peut ajouter ce bot à son serveur Discord en utilisant le lien suivant :

[Ajouter le bot à mon serveur Discord](https://discord.com/oauth2/authorize?client_id=1301243281883009145&permissions=2147584000&integration_type=0&scope=bot)

## Installation (Optionnel)

Si vous souhaitez déployer le bot localement, voici les étapes :

1. **Clonez le dépôt** :
   ```console
   git clone <url-du-repository>
   cd <nom-du-repository>
   ```
2. **Installez les dépendances** :
   ```console
   npm install
   ```
3. **Configuration de l'environnement** :

   Créez un fichier `.env` à la racine du projet et ajoutez les informations de configuration suivantes :
     ```console
   BOT_TOKEN=your-discord-bot-token
     ```

4. **Lancez le bot** :
   ```console
   node index.js
   ```

## Utilisation

Une fois le bot en ligne, vous pouvez interagir avec lui en utilisant les commandes suivantes :

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
