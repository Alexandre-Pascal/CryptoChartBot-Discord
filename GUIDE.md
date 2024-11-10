# Command: chart

Cette commande génère un graphique en fonction de la paire de cryptomonnaies souhaitée, de l'intervalle et de la limite de valeur à afficher.

## Attributs de la commande `chart`

### 1. Paire de cryptomonnaie (`crypto`)
- Cet attribut spécifie la paire de cryptomonnaies pour laquelle vous souhaitez obtenir le graphique. 
- Le bot utilise l'API Binance, donc vous pouvez sélectionner n’importe quelle paire disponible sur Binance.
- Exemples : `BTCUSDT`, `AVAXUSDT`, `ADAUSDT`, etc.

### 2. Intervalle (`interval`)
- Définit la période entre chaque point sur le graphique, influençant la résolution de la courbe.
- Les valeurs d’intervalle valides (selon l’API Binance) incluent :
  - Minutes : `1m`, `3m`, `5m`, `15m`, `30m`
  - Heures : `1h`, `2h`, `4h`, `6h`, `8h`, `12h`
  - Jours et plus : `1d`, `3d`, `1w`, `1M`
- Exemple : Pour afficher un graphique journalier, entrez `1d` comme intervalle.

### 3. Limite (`limit`)
- Limite le nombre de points de données affichés sur le graphique. Une valeur plus élevée donnera un historique plus long.
- La valeur maximale autorisée par l’API est `1000`, mais des valeurs courantes comme `50`, `100`, ou `500` sont aussi possibles.
- Exemple : Une limite de `100` affichera les 100 derniers points de données.

Ces attributs permettent de personnaliser la commande `chart` pour obtenir des visualisations adaptées à vos besoins d'analyse.

## Exemples d'Utilisation de la Commande `/chart`

1. **Graphique du Bitcoin (BTC) sur une période de 3 jours en hourly**

`/chart crypto: BTCUSDT interval: 1h limit: 72`

2. **Graphique de Cardano (ADA) sur 6 mois**

`/chart crypto: ADAUSDT interval: 1d limit: 180`

3. **Graphique de la paire Binance Coin (BNB) pour les 100 derniers jours**

`/chart crypto: BNBUSDT interval: 1d limit: 100`

---

# Autres Commandes Disponibles

## 1. Commande `/chart_btc`
Cette commande génère un graphique quotidien du Bitcoin (BTC) sur une période d'un an. Elle utilise l'API de Binance pour récupérer les données historiques et affiche une visualisation claire de l'évolution du prix du BTC.  
**Utilisation** :  
```
/chart_btc
```
**Exemple** : En tapant `/chart_btc`, le bot affichera un graphique des prix quotidiens du Bitcoin sur l'année écoulée.

---

## 2. Commande `/chart_eth`
Avec cette commande, vous pouvez obtenir un graphique quotidien de l'Ethereum (ETH) sur une période d'un an. Cette fonctionnalité vous permet de suivre les tendances de prix d'ETH sur le long terme, en mettant en évidence les fluctuations importantes.  
**Utilisation** :  
```
/chart_eth
```
**Exemple** : En tapant `/chart_eth`, le bot affichera un graphique des prix quotidiens de l'Ethereum sur les 12 derniers mois.

---

## 3. Commande `/chart_sol`
La commande `/chart_sol` génère un graphique quotidien de Solana (SOL) sur une période d'un an. Cela vous permet de visualiser les performances de SOL, en vous offrant une perspective sur son développement et ses mouvements de prix.  
**Utilisation** :  
```
/chart_sol
```
**Exemple** : En tapant `/chart_sol`, le bot affichera un graphique des prix quotidiens de Solana sur l'année passée.

---