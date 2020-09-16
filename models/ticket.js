const orm = require('../config/orm');

let table = 'ticket';

const ticket = {
    selectAll: function (cb) {
        orm.selectAll(table, (res) => {
            cb(res);
        });
    },
    insertOne: function (table, column, value, cb) {
        orm.insertOne(table, column, value, (res) => {
            console.log('inside ticket.insertOne MODELS script');
            cb(res);
        });
    },
    deleteOne: function (table, column, value, cb) {
        orm.deleteOne(table, column, value, (res) => {
            cb(res);
        });
    },
};

module.exports = ticket;
