const connection = require('./connection');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

const orm = {
    selectAll: function (table, cb) {
        let query = 'SELECT * FROM ??';
        connection.query(query, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (
        table,
        colOne,
        colTwo,
        colThree,
        valOfColOne,
        valOfColTwo,
        valOfColThree,
        cb
    ) {
        let query = 'INSERT INTO ?? (??, ??, ??) ';
        query += `VALUES (?, '?', ?),`;
        connection.query(
            query,
            [
                table,
                colOne,
                colTwo,
                colThree,
                valOfColOne,
                valOfColTwo,
                valOfColThree,
            ],
            function (err, result) {
                if (err) throw err;
                cb(result);
            }
        );
    },
    updateOne: function (table, column, valOfCol, cb) {
        let query = `UPDATE ??
                      SET ?? = ?
                      WHERE id = ${placeholder}`;
        connection.query(query, [table, column, valOfCol], function (
            err,
            result
        ) {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;
