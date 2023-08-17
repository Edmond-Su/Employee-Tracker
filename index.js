//Packages required
const inquirer = require("inquirer");
const mysql = require("mysql2");


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'abcd1234',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

  const startOptions = [
    {
        type: "list",
        message: "What would you like to do?",
        name:"options",
        choices: ["View All Departments","View All Roles","View All Employees", "Add a Department", "Add a Role","Add an Employee", "Update an Employee Role","Quit"]
    }
  ]