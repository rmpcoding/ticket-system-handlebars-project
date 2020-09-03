const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./controllers/tickets_controller');

const app = express();
const PORT = process.env.PORT || 3000;

// setting the engine to handle and view handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// express middleware to parse data correctly, and to serve static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Temporary placeholder to view handlebars but will eventually be replaced with functional express routes
  res.render("index")
})

// app.use(routes, )


app.listen(PORT, () => {
  console.log(`Handlebars Ticket App is now listening on local host: ${PORT}`)
})