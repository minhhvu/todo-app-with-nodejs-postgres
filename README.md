<img src="https://github.com/minhhvu/todo-app-with-nodejs-postgres/blob/master/public/images/app.png" alt="App internface" title="App interface" align="center"/>

# todo-app-with-nodejs-postgres
Build an http server to support a todolist web app with this UI
Features:
* API support to get list of todos, create a todo and edit a todo
* API to assign multiple users into a todo
* API to set a todo as done
* Group the todos by date (today, tomorrow, August 1st, ...)


## Backend Tech stack
* Express/Node.js - The backend framework and language
* Postgres - The database in action
* Sequelize - A promise-based Node.js ORM for Postgres
* Sequelize CLI - The command line package to create and manage the model, migration, database seed, ...

## Installations
### Prerequisites
Node.js, NPM/YARN and Postgres
### Install packages
* On the terminal, navigate into the project directory
* Install dependencies using `npm install`
### Setting up database infor in file .env variables
* Create a database using pgAdmin 4 or pSLG shell
* Go to .env file in the project directory to config the database, including database name, user, password, port and host
### Initialize the database
* On the terminal, navigate into the project directory
* Create all the tables using `sequelize db:migrate`
* Run the database seeds using `sequelize db:seed:all`
### Start the server
* Start the server using `npm start`
* Server runs on port 3003

## API document

## cURL test

## ERD Diagram
<img src="https://github.com/minhhvu/todo-app-with-nodejs-postgres/blob/master/public/images/erd_diagram.png" alt="App internface" title="App interface" align="center"/>

