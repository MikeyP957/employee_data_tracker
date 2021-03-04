const inquirer = require('inquirer');
const fs = require('fs');

const typeOfEmployee = () => inquirer.prompt([
    {
        type: 'list',
        name: 'employee',
        message: 'Which type of employee do you want to create?',
        choices: ["Engineer","Manager","Intern"],
    }
])
const managerInput = () => inquirer.prompt ([
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
        name: "office",
        message: "What is their office number?"
    },
])
const engineerInput = () => inquirer.promt([
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
    }    
])
const internInput = () => inquirer.prompt([
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
        name: "school",
        message: "What school are they associated with?"
    },
])
const continueOrQuit = () => inquirer.prompt([
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

const init = () => {
    typeOfEmployee().then((answers) => {
        console.log(answers)
        if(answers.employee === 'Manager'){
            managerInput().then((input) => {
                console.log(input)
            })
        }
        if(answers.employee === 'Engineer'){
            engineerInput().then((input) => {
                console.log(input)
            })
        }
        if(answers.employee === 'Intern'){
            internInput().then((input) => {
                console.log(input)
            })
        }
        
            
        //   try {
    //     const html = generateHTML(answers);
    //     fs.writeFileSync('index.html', html);
    //     console.log('Successfully wrote to index.html');
    //   } catch (error) {
    //     console.log(error);
    //   }
    });
  };
  
  init();