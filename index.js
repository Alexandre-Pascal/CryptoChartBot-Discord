const fs = require('fs');
require('dotenv').config();
const axios = require('axios');
const { Client, GatewayIntentBits, Partials, Events, AttachmentBuilder, REST, Routes } = require('discord.js');
const { createCanvas } = require('canvas');
const express = require('express'); // ou le framework que vous utilisez
const { Console } = require('console');

const BOT_TOKEN = process.env.BOT_TOKEN;

const app = express();
const port = process.env.PORT || 3000; // Utilise la variable d'environnement PORT ou le port 3000 par défaut

// Dans votre fichier index.js, vous pouvez vérifier si vous êtes en mode test
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Serveur en écoute sur le port ${port}`);
    });
}

// Ajoutez une route pour le ping
app.get('/', (req, res) => {
    res.send('Le serveur fonctionne !');
});

// Créez une instance de client Discord
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.GuildMember,
        Partials.User,
    ],
});

// Enregistrement de la slash command
async function registerSlashCommands() {
    const commands = [
        {
            name: 'chart',
            description: 'Générer un graphique des prix d\'une crypto-monnaie.',
            options: [
                {
                    name: 'crypto',
                    type: 3, // Type 3 = STRING
                    description: 'Le symbole de la crypto (ex: BTCUSDT)',
                    required: true,
                },
                {
                    name: 'interval',
                    type: 3, // Type 3 = STRING
                    description: 'L\'intervalle de temps (ex: 1h, 1d)',
                    required: true,
                },
                {
                    name: 'limit',
                    type: 4, // Type 4 = INTEGER
                    description: 'Le nombre de données à récupérer',
                    required: true,
                },
            ],
        },
        {
            name: 'chart_btc',
            description: 'Générer un graphique des prix de Bitcoin sur 1 an (daily).',
        },
        {
            name: 'chart_eth',
            description: 'Générer un graphique des prix d\'Ethereum sur 1 an (daily).',
        },
        {
            name: 'chart_sol',
            description: 'Générer un graphique des prix de Solana sur 1 an (daily).',
        },
    ];

    const rest = new REST({ version: '10' }).setToken(BOT_TOKEN); // Version 10 est recommandée
    try {
        await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
        if (process.env.NODE_ENV !== 'test') {
            console.log('Commandes slash enregistrées avec succès !');
        }
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement des commandes:', error);
    }
}

// Appel de la fonction d'enregistrement des commandes lors de la connexion
client.once(Events.ClientReady, async () => {

    console.log(`Connecté en tant que ${client.user.tag}`);
    await registerSlashCommands(); // Enregistre les commandes lorsque le bot est prêt
});

// Générer le graphique
async function generateChart(prices) {
    const canvas = createCanvas(800, 400);
    const ctx = canvas.getContext('2d');

    // Configurer le fond
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dessiner l'axe des X et des Y
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(50, 350); // Axe X
    ctx.lineTo(750, 350);
    ctx.moveTo(50, 350); // Axe Y
    ctx.lineTo(50, 50);
    ctx.stroke();

    // Ajuster l'échelle de l'axe Y
    const maxPrice = Math.max(...prices.map(p => p.close));
    const minPrice = Math.min(...prices.map(p => p.close));
    const priceRange = maxPrice - minPrice;

    // Ajouter un peu de marge
    const margin = priceRange * 0.05; // 5% de marge
    const adjustedMax = maxPrice + margin;
    const adjustedMin = minPrice - margin;

    // Dessiner les prix
    ctx.strokeStyle = '#ff0000'; // Couleur de la ligne
    ctx.beginPath();

    prices.forEach((price, index) => {
        const x = 50 + index * (700 / (prices.length - 1)); // Position X
        const y = 350 - ((price.close - adjustedMin) / (adjustedMax - adjustedMin) * 300); // Position Y
        ctx.lineTo(x, y);
    });

    ctx.stroke();

    // Ajouter des étiquettes de prix sur l'axe Y
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    const priceSteps = 5; // Nombre d'étapes pour les prix
    for (let i = 0; i <= priceSteps; i++) {
        const priceLabel = adjustedMin + (priceRange + margin * 2) * (i / priceSteps);
        const y = 350 - ((priceLabel - adjustedMin) / (adjustedMax - adjustedMin) * 300);
        ctx.fillText(priceLabel.toFixed(), 10, y);
    }

    // Ajouter des étiquettes de date sur l'axe X
    const dateStep = Math.floor(prices.length / 5);
    for (let i = 0; i < prices.length; i += dateStep) {
        const x = 50 + i * (700 / (prices.length - 1));
        const dateLabel = prices[i].time.toLocaleDateString();
        ctx.fillText(dateLabel, x - 20, 370);
    }

    // Écrire le fichier image
    const filePath = './crypto_chart.png';
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filePath, buffer);

    return filePath;
}

// Fonction pour gérer la génération de graphiques
async function handleGraphCommand(symbol, interval, limit, interaction) {

    // Indique à Discord que nous avons reçu l'interaction et que nous allons répondre
    await interaction.deferReply();

    try {
        // Récupérez les données de Binance
        const response = await axios.get('https://api.binance.com/api/v3/klines', {
            params: {
                symbol: symbol,
                interval: interval,
                limit: limit // Limite des données
            }
        });

        // Extraire les données de prix
        const prices = response.data.map(entry => {
            return {
                time: new Date(entry[0]),
                open: parseFloat(entry[1]),
                high: parseFloat(entry[2]),
                low: parseFloat(entry[3]),
                close: parseFloat(entry[4]),
                volume: parseFloat(entry[5])
            };
        });

        // Générer le graphique
        const chartPath = await generateChart(prices);


        // Envoyer le fichier dans Discord
        const attachment = new AttachmentBuilder(chartPath);

        // Donne le prix actuel de la crypto
        const currentPrice = prices[prices.length - 1].close;
        await interaction.editReply({ content: `Le prix actuel de ${symbol} est de ${currentPrice} USD.`, files: [attachment] });

        // Optionnel : Supprimer le fichier après l'envoi
        fs.unlinkSync(chartPath);

    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        await interaction.editReply('Désolé, je n\'ai pas pu récupérer les données. Vérifiez que la crypto existe et que l\'intervalle est correct.');
    }
}

// Gestion des interactions de commandes
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    // Affiche la commande ainsi que l'utilisateur qui a exécuté la commande
    console.log(`Commande reçue: ${interaction.commandName} par ${interaction.user.tag}`);

    if (commandName === 'chart') {
        const symbol = options.getString('crypto');
        const interval = options.getString('interval');
        const limit = options.getInteger('limit');

        // Affiche les options dans la console
        console.log(`Crypto: ${symbol}, Intervalle: ${interval}, Limite: ${limit}`);

        await handleGraphCommand(symbol, interval, limit, interaction);
    } else if (commandName === 'chart_btc') {
        await handleGraphCommand('BTCUSDT', '1d', 365, interaction); // 1 an
    } else if (commandName === 'chart_eth') {
        await handleGraphCommand('ETHUSDT', '1d', 365, interaction); // 1 an
    } else if (commandName === 'chart_sol') {
        await handleGraphCommand('SOLUSDT', '1d', 365, interaction); // 1 an
    }
});

// Connectez le bot avec votre token
client.login(BOT_TOKEN);

// Ping le serveur toutes les 5 minutes pour éviter la mise en veille

if (process.env.NODE_ENV !== 'test') {
    const url = 'https://bot-discord-graph-crypto.onrender.com';
    const pingServer = async () => {
        try {
            await axios.get(url);
            console.log('Ping réussi à ' + url);
        } catch (error) {
            console.error('Erreur lors du ping:', error.message);
        }
    };
    setInterval(pingServer, 10 * 60 * 1000);
}

module.exports = {
    generateChart,
    registerSlashCommands,
    handleGraphCommand,
};