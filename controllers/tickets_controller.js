const express = require('express');
const router = express.Router();
const ticket = require('../models/ticket');

const app = express();

let table = 'ticket';


// GET ROUTE
router.get('/', (req, res) => {
    ticket.selectAll((data) => {
        let hbsObj = {
            tickets: data,
        };
        res.render('index', hbsObj);
    });
});

// POST ROUTE
router.post('/api/tickets', function (req, res) {
    let column = 'ticket_name';
    let value = req.body.ticket_name;

    ticket.insertOne(table, column, value, (data) => {
        res.json();
    });
});

// PUT ROUTE
router.put('/api/tickets/:id', (req, res) => {
    let columnOne = 'completed';
    let columnTwo = 'id'
    let valOfColOne = true;
    let valOfColTwo = parseInt(req.params.id);

    ticket.updateOne(table, columnOne, valOfColOne, columnTwo, valOfColTwo, (data) => {
        res.json();
    })
})

// DELETE ROUTE
router.delete('/api/tickets/:id', (req, res) => {
    let column = 'id';
    let value = parseInt(req.params.id);
    
    ticket.deleteOne(table, column, value, (data) => {
        res.json();
    })
})

module.exports = router;