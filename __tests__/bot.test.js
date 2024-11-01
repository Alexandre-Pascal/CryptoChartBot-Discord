const fs = require('fs');
const { generateChart, registerSlashCommands } = require('../index');
const { Client, GatewayIntentBits, Events } = require('discord.js');

const BOT_TOKEN = process.env.BOT_TOKEN;

describe('CryptoChartBot Tests', () => {
    let client;

    // Créer un client avant tous les tests
    beforeAll(async () => {
        client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
            ],
        });

        await client.login(BOT_TOKEN);
    });

    // Détruire le client après tous les tests
    afterAll(async () => {
        await client.destroy();
    });

    describe('generateChart', () => {
        it('should generate a chart and return the file path', async () => {
            const mockPrices = [
                { time: new Date(1672531200000), open: 100, high: 110, low: 95, close: 105, volume: 2000 },
                { time: new Date(1672617600000), open: 105, high: 115, low: 100, close: 110, volume: 2500 },
                { time: new Date(1672704000000), open: 110, high: 120, low: 105, close: 115, volume: 3000 },
                { time: new Date(1672790400000), open: 115, high: 125, low: 110, close: 120, volume: 3500 },
                { time: new Date(1672876800000), open: 120, high: 130, low: 115, close: 125, volume: 4000 },
            ];

            const chartPath = await generateChart(mockPrices);
            console.log(`Chart path: ${chartPath}`);

            expect(fs.existsSync(chartPath)).toBe(true);
            fs.unlinkSync(chartPath); // Nettoyage
        });
    });

    describe('Bot Connection', () => {
        test('should call registerSlashCommands when the bot is ready', async () => {
            await new Promise((resolve) => {
                client.once(Events.ClientReady, async () => {
                    console.log("Événement ClientReady reçu");
                    await registerSlashCommands(); // Appeler la fonction que vous souhaitez tester
                    resolve(); // Résoudre la promesse lorsque les commandes sont enregistrées
                });
            });
        });
    });
});
