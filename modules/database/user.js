import { connection, getUserData } from '.';

export const user = {
    exist: async (userID, guildID) => {
        return !! await getUserData(userID, guildID);
    },
    create: (userID, guildID) => {
        connection.query(`INSERT INTO users (ID, uID, money, exp, required_exp, lvl, rep, marry)
                            values (${guildID}, ${userID}, 50, 1, 100, 1, 1, 0)`);
    },
    increaseExp: async (userID, guildID, message) => {
        const { exp, required_exp } = await getUserData(userID, guildID);
        const newExp = Math.floor(Math.random() * 3) + 1;

        connection.query(`UPDATE users SET exp = ${exp} + ${newExp} WHERE ID=${guildID} and uID=${userID}`);
    }
}