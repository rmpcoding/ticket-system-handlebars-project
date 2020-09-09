const express = require('express');
const router = express.Router();
const ticket = require('../models/ticket');

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
    console.log(req.body);
    console.log('inside router.post in controller.js');
    res.json(req.body);
});
// PUT ROUTE
// DELETE ROUTE

module.exports = router;
