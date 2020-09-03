const orm = require('../config/orm');

// orm.selectAll('ticket', function(result) {
//     let data = result;
//     console.log(data);
// });

// orm.insertOne('ticket', 'id', 'ticket_name', 'completed', 'DEFAULT'); 
// Still need to insert values.
// Need to assign three variables
// Those variables will change every time user inputs data
// Those variables will be the arguments of the insertOne values, the three values needed for input.

// orm.updateOne()

module.exports = orm;