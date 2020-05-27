const express = require('express');
const orm = require('../models/ticket');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  orm.selectAll
  res.render("index")
})

app.listen(PORT, (err) => {
  console.log(`Server listening on: http://localhost: ${PORT}`)
})