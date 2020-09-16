# Ticket System Project

## Ticketing system that uses Handlebars.js


A fullstack ticket-issuing project which utilizes an MVC approach to render ticket issue descriptions. 

## Usage

You need to have MySQL installed into your local machine to run this application.

Once packages are installed, open the db folder and login to your MySQL:
```bash
mysql -u root -p
```
Once logged into MySQL via the CLI, use the following commands to create the schema and to seed the database:
```bash
source schema.sql
source seeds.sql
```
After, open the server.js in your terminal to start the application:
```bash
node server.js
```
OR if you'd like to run with nodemon, use devStart:
```bash
npm run devStart
```


## Demo

![Handlebars.js Ticket System Project Demo](ticket-system-handlebars-project.gif)

## Technologies Used

* Handlebars.js
* NodeJS
* Express
* MySQL
* ES6
* body-parser
* dotenv
* nodemon