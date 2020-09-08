const orm = require('../config/orm');

let table = 'ticket';

const ticket = {
    selectAll: function (cb) {
        orm.selectAll(table, function (res) {
            cb(res);
        });
    },
};

// orm.insertOne('ticket', 'id', 'ticket_name', 'completed', 'DEFAULT');
// Still need to insert values.
// Need to assign three variables
// Those variables will change every time user inputs data
// Those variables will be the arguments of the insertOne values, the three values needed for input.

// orm.updateOne()

module.exports = ticket;
