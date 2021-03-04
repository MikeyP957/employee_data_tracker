const inquirer = require('inquirer');
const fs = require('fs');

const promtUser = () => inquirer.prompt([
    {
        type: 'list',
        name: 'employee',
        message: 'Which type of employee do you want to create?',
        choices: ["Engineer","Manager","Intern"],
    },
    {
        type: "input",
        name: "name",
        message: "What is their name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee id number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is their github username?"
    },
    {
        type: "input",
        name: "office",
        message: "What is their office number?"
    },
    {
        type: "input",
        name: "school",
        message: "What school are they associated with?"
    },
    {
        type: "confirm",
        name: "continue",
        message: "Do you want to create another employee input?"
    },
    {
        type: "confirm",
        name: "generate",
        message: "Are you ready to generate the employee list?"
    },
])

