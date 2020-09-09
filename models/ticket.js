const orm = require('../config/orm');

let table = 'ticket';
let column = 'ticket_name';
let value = 'TESSSST';


const ticket = {
    selectAll: function (cb) {
        orm.selectAll(table, (res) => {
            cb(res);
        });
    },
    insertOne: function (cb) {
        orm.insertOne(
            table,
            column,
            value,
            (res) => {
                cb(res);
            }
        );
    },
};

// Still need to insert values.
// Need to assign three variables
// Those variables will change every time user inputs data
// Those variables will be the arguments of the insertOne values, the three values needed for input.

// orm.updateOne()

module.exports = ticket;
