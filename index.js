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
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

function init(){
    inquirer
        .prompt(
            {
                type: "list",
                message: "What would you like to do?",
                name:"options",
                choices: [
                    {name:"View All Departments", value: "viewDep"},
                    {name:"View All Roles",value:"viewRole"},
                    {name:"View All Employees",value:"viewEmp"}, 
                    {name:"Add a Department",value:"addDep"}, 
                    {name:"Add a Role",value:"addRole"},
                    {name:"Add an Employee",value:"addEmp"}, 
                    {name:"Update an Employee Role",value:"updEmp"},
                    {name:"Quit",value:"quit"}
                ]
            }
        )
        .then((answers)=>{
            //if and else if statements that run through different code depending on the answer.
            if (answers.options === "quit"){
                process.exit();
            }else if (answers.options === "viewDep"){
                const sql = "SELECT * FROM department;";
                db.query(sql, function(err,results){
                    if (err){
                        console.log(err);
                    }
                    console.table(results);
                    init();
                })
            }else if (answers.options === "viewRole"){
                const sql = `SELECT * FROM role JOIN department ON department.id = role.department_id;`
                db.query(sql, function(err,results){
                    if (err){
                        console.log(err);
                    }
                    console.table(results);
                    init();
                })
            }else if (answers.options === "viewEmp"){
                const sql = `SELECT * FROM employee 
                    JOIN role ON role.id = employee.role_id 
                    JOIN department ON department.id = role.department_id;`
                db.execute(sql,function(err,results){
                    if (err){
                        console.log(err);
                    }
                    console.table(results);
                    init();
                })
            }else if (answers.options === "addDep"){
                console.log(answers);
                addDep();

            }else if (answers.options === "addRole"){
                console.log(answers);
            }else if (answers.options === "addEmp"){
                console.log(answers);
            }else if (answers.options === "updEmp"){
                console.log(answers);
            }
        });
};

function addDep(){
    inquirer
        .prompt(
            {
                type:"input",
                message:"What is the new department?",
                name:"depName"
            }
        )
        .then((answers)=>{
            db.query(`INSERT INTO department(name) VALUES(${answers.depName})`, function(err,result) {
                if (err){
                    console.log("Error occured");
                }else {
                    console.log(`Added ${answers.depName} to the database`)
                }
                init()
            });
        });
};

init();