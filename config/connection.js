const mysql = require('mysql');
require('dotenv').config();
const parseDbUrl = require("parse-database-url");

const dbConfig = parseDbUrl(process.env["CLEARDB_DATABASE_URL"]);

const connection = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB,
});

connection.getConnection(function (err) {
    if (err) {
        console.log(`There was an error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;
