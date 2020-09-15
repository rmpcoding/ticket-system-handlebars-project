const orm = require('../config/orm');

let table = 'ticket';

const ticket = {
    selectAll: function (cb) {
        orm.selectAll(table, (res) => {
            cb(res);
        });
    },
    insertOne: function (table, column, value, cb) {
        orm.insertOne(
            table,
            column,
            value,
            (res) => {
                console.log('inside ticket.insertOne MODELS script')
                cb(res);
            }
        );
    },
    deleteOne: function(table, column, value, cb) {
        orm.deleteOne(table, column, value, (res) => {
            console.log('inside ticket.deleteOne MODELS script');
            cb(res);
        })
    }
};

// Still need to insert values.
// Need to assign three variables
// Those variables will change every time user inputs data
// Those variables will be the arguments of the insertOne values, the three values needed for input.

// orm.updateOne()

module.exports = ticket;
