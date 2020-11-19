# Ticket System Project

## Ticketing system that uses Handlebars.js


A fullstack ticket-issuing project which utilizes an MVC approach to render ticket issue descriptions. 

## Usage

**[Please visit the deployed application](https://handlebars-mysql-ticket-system.herokuapp.com/)**

Once there, simply type something in the text field, then click submit. You will see it appear in a column to the left. From there, you may hit send, which will make the text appear in a right-hand column. Clicking complete will delete the text from the application. 


## Installation

If you would like to install this app to run it on your local machine, please follow the instructions below:

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