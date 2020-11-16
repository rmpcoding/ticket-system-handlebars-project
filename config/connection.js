const mysql = require('mysql');
require('dotenv').config();
let connection;

const handleDisconnect = () => {
    connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
    connection.connect((err) => {
        if (err) {
            console.log(`There was an error: ${err}`);
            setTimeout(handleDisconnect(), 1000);
        }
        connection.on('error', (err) => {
            console.log(`Database Error: ${err}`);
            handleDisconnect();
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                handleDisconnect();
            } else throw err;
        });
    });
};

if (process.env.CLEARDB_DATABASE_URL) {
    // connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
    // connection.connect();
    handleDisconnect();
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
