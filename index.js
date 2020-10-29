import discord from 'discord.js';
import { token, prefix } from './config.json';
import onMessage from './modules/onMessage.js';

const bot = new discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready...`);
    bot.user.setPresence({ game: { name: '!pomoc', type: 1 } });
});

bot.on('message', async (message) => {
    const args = message.content.split(' ');

    if (message.author.bot) return;
    onMessage.checkGuildAndUser(message);

    if (!message.content.startsWith(prefix)) return;
    onMessage.commandExecute(message, args);
})

bot.login(token);