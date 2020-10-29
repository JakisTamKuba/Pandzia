import { getUserData } from "../modules/database";

export default {
    help: {
        name: 'poziom',
        description: 'Pokazuje poziom Twój lub oznaczonego użytkownika.',
        usage: 'poziom [user]'
    },
    async run(message, args, embeds) {
        const { exp, required_exp, lvl } = await getUserData(message.author.id, message.guild.id);
        message.channel.send(embeds.level(message.author, lvl, exp, required_exp));
    }
};