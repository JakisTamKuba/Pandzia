import commands from '../commands/index.js';
import { user } from './database/user.js';
import { guild } from './database/guild.js';
import embeds from './embeds.js';

export default {
    commandExecute: (message, args) => {
        const commandName = args[0].slice(1);

        if (commands.hasOwnProperty(commandName)) {
            const command = commands[commandName];

            if (args[1] === 'pomoc') {
                message.channel.send(embeds.help(command.help, message));
            } else {
                command.run(message, args, embeds);
            }
        }
    },
    checkGuildAndUser: async (message) => {
        if (!await guild.exist(message.guild.id)) guild.create(message.guild.id);

        if (!await user.exist(message.author.id, message.guild.id)) user.create(message.author.id, message.guild.id);
        else user.increaseExp(message.author.id, message.guild.id, message);
    }
}