import mysql from 'mysql';
import { database } from '../../config.json';

export const connection = mysql.createConnection(database);

setInterval(() => connection.query(`SELECT\`ID\` FROM \`users\` LIMIT 1`), 30000);

export const getData = (table, ID) =>{
    return new Promise(resolve => {
        connection.query(`SELECT * FROM ${table} WHERE ID=${ID} LIMIT 1`, (err, result) => {
            resolve(result[0]);
        });
    });
}

export const getUserData = (userID, guildID) =>{
    return new Promise(resolve => {
        connection.query(`SELECT * FROM users WHERE ID=${guildID} AND uID=${userID} LIMIT 1`, (err, result) => {
            resolve(result[0]);
        });
    });
}