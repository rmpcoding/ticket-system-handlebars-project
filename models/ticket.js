const orm = require('../config/orm');

let table = 'ticket';
let columnOne = 'ticket_name';
let columnTwo = 'completed';
let valOfColOne = 'TESSSST';
let valOfColTwo = 'FALSE';

const ticket = {
    selectAll: function (cb) {
        orm.selectAll(table, (res) => {
            cb(res);
        });
    },
    insertOne: function (cb) {
        orm.insertOne(
            table,
            columnOne,
            columnTwo,
            valOfColOne,
            valOfColTwo,
            (res) => {
                cb(res);
            }
        );
    },
};

// orm.insertOne('ticket', 'id', 'ticket_name', 'completed', 'DEFAULT');
// Still need to insert values.
// Need to assign three variables
// Those variables will change every time user inputs data
// Those variables will be the arguments of the insertOne values, the three values needed for input.

// orm.updateOne()

module.exports = ticket;
