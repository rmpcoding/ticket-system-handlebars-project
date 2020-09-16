const express = require('express');
const router = express.Router();
const ticket = require('../models/ticket');
const { json } = require('body-parser');

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
    console.log('inside router.post in controller.js FIRST ONE');

    let column = 'ticket_name';
    let value = req.body.ticket_name;

    ticket.insertOne(table, column, value, (data) => {
        console.log(
            'inside ticket.insertOne function in CONTROLLER router.post function'
        );
        res.json();
    });
});

// PUT ROUTE

// DELETE ROUTE
router.delete('/api/tickets/:id', (req, res) => {
    console.log(req.body)
    let column = 'id';
    let value = parseInt(req.params.id);
    
    ticket.deleteOne(table, column, value, (data) => {
        console.log('CONTROLLER ticket.deleteOne: backend delete talkin')
        console.log(data)
        res.json();
    })
})

module.exports = router;