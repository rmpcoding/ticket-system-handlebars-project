const express = require('express');
const orm = require('../models/ticket');

const app = express();

// Create routes for to export to server.js
// app.get('/index', (req, res) => {
//   orm.selectAll
// })