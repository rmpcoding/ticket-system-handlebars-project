const express = require('express');
const orm = require('../models/ticket');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  console.log(`Server listening on: http://localhost: ${PORT}`)
})