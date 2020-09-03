const connection = require('./connection');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

const orm = 'hi';

// {
//     selectAll: function (table) {
//         let query = 'SELECT * FROM ??';
//         connection.query(query, [table], function (err, result) {
//             if (err) throw err;
//             // console.log(result);
//             cb(result);
//         });
//     },
//     insertOne: function (
//         table,
//         colOne,
//         colTwo,
//         colThree,
//         valOfColOne,
//         valOfColTwo,
//         valOfColThree
//     ) {
//         let query = 'INSERT INTO ?? (??, ??, ??) ';
//         query += `VALUES (?, '?', ?),`;
//         connection.query(
//             query,
//             [
//                 table,
//                 colOne,
//                 colTwo,
//                 colThree,
//                 valOfColOne,
//                 valOfColTwo,
//                 valOfColThree,
//             ],
//             function (err, result) {
//                 if (err) throw err;
//                 // console.log(result);
//                 cb(result);
//             }
//         );
//     },
//     updateOne: function () {
//         let query = `UPDATE ??
//                       SET ?? = ?
//                       WHERE id = ${placeholder}`;
//         connection.query(query, [table, column, valOfCol], function (
//             err,
//             result
//         ) {
//             if (err) throw err;
//             // console.log(result);
//             cb(result);
//         });
//     },
// };

module.exports = orm;

// var orm = {
//     selectWhere: function (tableInput, colToSearch, valOfCol) {
//         var queryString = 'SELECT * FROM ?? WHERE ?? = ?';
//         connection.query(
//             queryString,
//             [tableInput, colToSearch, valOfCol],
//             function (err, result) {
//                 if (err) throw err;
//                 console.log(result);
//             }
//         );
//     },
//     selectAndOrder: function (whatToSelect, table, orderCol) {
//         var queryString = 'SELECT ?? FROM ?? ORDER BY ?? DESC';
//         console.log(queryString);
//         connection.query(
//             queryString,
//             [whatToSelect, table, orderCol],
//             function (err, result) {
//                 if (err) throw err;
//                 console.log(result);
//             }
//         );
//     },
//     findWhoHasMost: function (
//         tableOneCol,
//         tableTwoForeignKey,
//         tableOne,
//         tableTwo
//     ) {
//         var queryString =
//             'SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1';

//         connection.query(
//             queryString,
//             [
//                 tableOneCol,
//                 tableOneCol,
//                 tableOne,
//                 tableTwo,
//                 tableTwo,
//                 tableTwoForeignKey,
//                 tableOne,
//                 tableOneCol,
//             ],
//             function (err, result) {
//                 if (err) throw err;
//                 console.log(result);
//             }
//         );
//     },
// };
