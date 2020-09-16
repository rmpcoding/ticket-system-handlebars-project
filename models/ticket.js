const orm = require('../config/orm');

const ticket = {
    selectAll: function (cb) {
        orm.selectAll(table, (res) => {
            cb(res);
        });
    },
    insertOne: function (table, column, value, cb) {
        orm.insertOne(table, column, value, (res) => {
            cb(res);
        });
    },
    updateOne: function (table, columnOne, valOfColOne, columnTwo, valOfColTwo, cb) {
        orm.updateOne(table, columnOne, valOfColOne, columnTwo, valOfColTwo, (res) => {
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
