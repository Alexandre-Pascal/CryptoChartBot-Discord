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

## Installation

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
   SERVER_ID=your-server-id
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

Vous pouvez héberger ce bot sur des services comme Heroku, DigitalOcean, ou toute machine locale avec Node.js.

## Contributions

Les contributions sont les bienvenues ! Pour proposer une amélioration ou signaler un problème, ouvrez une issue ou un pull request.
