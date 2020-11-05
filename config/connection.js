const mysql = require('mysql');
require('dotenv').config();

// mysql://b2347b8e1182d8:2a19d6dc@us-cdbr-east-02.cleardb.com/heroku_409be8251eed992?reconnect=true

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB,
});

connection.connect(function (err) {
    if (err) {
        console.log(`There was an error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;