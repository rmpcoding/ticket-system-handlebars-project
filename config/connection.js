const mysql = require('mysql');
require('dotenv').config();
let connection;

if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
    connection.getConnection();
} else {
    connection = mysql.createPool({
        connectionLimit: 5,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB,
    });
    connection.getConnection(function (err) {
        if (err) {
            console.log(`There was an error connecting: ${err.stack}`);
        }
        console.log(`Connected as id ${connection.threadId}`);
    });
}


module.exports = connection;
