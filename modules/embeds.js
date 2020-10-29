import { RichEmbed } from 'discord.js';
import { prefix } from '../config.json';

const colors = {
    white: '0xfffffe',
    green: '0x00ff24',
    blue: '0x00ffff',
    red: '0xff0000',
    gray: '0x808080',
    salmon: '0xe18759'
}

export default {
    help: ({ name, description, usage }, color='salmon') => {
        const em = new RichEmbed();
        em.setTitle(`Pomoc: ${prefix}${name}`)
        em.addfield('Opis', description)
        em.addField('Użycie', `${prefix}${usage}`)
        em.setColor(colors[color])
        return em;
    },
    
    level: (user, level, exp, required_exp, color="blue") => {
        const em = new RichEmbed();
        em.setTitle(`Poziom **${user.tag}**`)
        em.setThumbnail(`https://dummyimage.com/64x64/34363c/ffff00.png&text=${level}`)
        em.addField('Poziom:', level, true)
        em.addField('Postęp:', `${exp}/${required_exp}`, true)
        em.setColor(colors[color])
        return em;
    },

    botinfo: (bot, color='green') => {
        const em = new RichEmbed();
        em.setTitle('Informacje o bocie')
        em.setThumbnail(bot.user.displayAvatarURL)
        em.addField('Nazwa bota', bot.user.username)
        em.addField('Prefix', prefix)
        em.addfield('Stworzony dnia', bot.user.createdAt.toLocaletStrin())
        em.addField('Stworzony przez:', 'JakisTamKuba#0147')
        em.setColor(colors[color])
        return em;
    }
}