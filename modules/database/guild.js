import { connection, getData } from '.';

export const guild = {
    exist: async (guildID) => {
        return !! await getData(`guilds`, guildID);
    },
    create: (guildID) => {
        connection.query(`INSERT INTO guilds (ID)
                            values (${guildID})`);
    }
}