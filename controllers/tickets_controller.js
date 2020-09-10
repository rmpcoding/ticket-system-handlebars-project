const express = require('express');
const router = express.Router();
const ticket = require('../models/ticket');
const orm = require('../config/orm');
const { json } = require('body-parser');

// GET ROUTE
router.get('/', (req, res) => {
    ticket.selectAll((data) => {
        // console.log('======================================')
        // console.log(data)
        // console.log('======================================')
        let hbsObj = {
            tickets: data,
        };
        res.render('index', hbsObj);
    });
});

// POST ROUTE
router.post('/api/tickets', function (req, res) {
    console.log('inside router.post in controller.js FIRST ONE');

    let table = 'ticket';
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

module.exports = router;
