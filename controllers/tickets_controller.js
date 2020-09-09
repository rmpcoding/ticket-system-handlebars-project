const express = require('express');
const router = express.Router();
const ticket = require('../models/ticket');
const { json } = require('body-parser');

// GET ROUTE
router.get('/', (req, res) => {
    ticket.selectAll((data) => {
        console.log('======================================')
        console.log(data)
        console.log('======================================')
        let hbsObj = {
            tickets: data,
        };
        res.render('index', hbsObj);
    });
});

// POST ROUTE
router.post('/api/tickets', function (req, res) {
    console.log('inside router.post in controller.js');
    
    // ticket.insertOne((data) => {
    //     console.log(data)
    // })

    return res.json();
});
// PUT ROUTE
// DELETE ROUTE

module.exports = router;
