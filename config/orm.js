const connection = require('./connection');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

const orm = {
    selectAll: function (table, cb) {
        let query = `SELECT * FROM ??`;
        connection.query(query, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, column, value, cb) {
        let query = `INSERT INTO ?? (??) `;
        query += `VALUES (?)`;
        connection.query(query, [table, column, value], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (
        table,
        columnOne,
        valOfColOne,
        columnTwo,
        valOfColTwo,
        cb
    ) {
        let query = `UPDATE ?? `;
        query += `SET ?? = ? `;
        query += `WHERE ?? = ?`;
        connection.query(
            query,
            [table, columnOne, valOfColOne, columnTwo, valOfColTwo],
            function (err, result) {
                if (err) throw err;
                cb(result);
            }
        );
    },
    deleteOne: function (table, column, value, cb) {
        let query = `DELETE FROM ?? `;
        query += `WHERE ?? = ?`;
        connection.query(query, [table, column, value], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;