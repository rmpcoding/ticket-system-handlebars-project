const express = require('express');
const router = express.Router();
const ticket = require('../models/ticket');

// Create routes to export to server.js
router.get('/', (req, res) => {
    ticket.selectAll((data) => {
        let hbsObj = {
            tickets: data,
        };
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

module.exports = router;
