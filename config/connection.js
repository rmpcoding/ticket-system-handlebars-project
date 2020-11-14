const mysql = require('mysql');
require('dotenv').config();
let pool;

if (process.env.CLEARDB_DATABASE_URL) {
    pool = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
} else {
    pool = mysql.createPool({
        connectionLimit: 5,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB,
    });
}


pool.getConnection(function (err) {
    if (err) {
        console.log(`There was an error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${pool.threadId}`);
});

module.exports = pool;
