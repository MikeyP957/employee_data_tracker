const inquirer = require('inquirer');
const fs = require('fs');

//Arrays to store objects created by inquirer
    let managerArray = [];
    let engineerArray = [];
    let internArray = [];

//generates new object for each type of employee
const generateManager = require('./src/generateManager');
const generateEngineer = require('./src/generateEngineer');
const generateIntern = require('./src/generateIntern');

//takes in arrays and generates html
const renderHTML = require('./dist/generateHTML')

//inquirer for each employee type depending on pertinent information
const typeOfEmployee = () => inquirer.prompt([
    {
        type: 'list',
        name: 'employee',
        message: 'Which type of employee do you want to create?',
        choices: ["Manager", "Engineer", "Intern"],
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
const engineerInput = () => inquirer.prompt([
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
const continueCreating = () => inquirer.prompt([
    {
        type: "confirm",
        name: "continue",
        message: "Do you want to create an employee?"
    }    
])
const generateHTMLPromt = () => inquirer.prompt([
    {
        type: "confirm",
        name: "generate",
        message: "Are you ready to generate the employee list?"
    }
])

function employeeInfo() {
    typeOfEmployee().then((answers) => {
        if(answers.employee === 'Manager'){
            managerInput().then((input) => {
                return(managerArray.push(generateManager(input)))                    
            })
        }
        else if(answers.employee === 'Engineer'){
            engineerInput().then((input) => {
                return(engineerArray.push(generateEngineer(input)))                    
            })
        }
        else if(answers.employee === 'Intern'){
            internInput().then((input) => {
                return(internArray.push(generateIntern(input)))                    
            })
        }
    })    
}

function repeatQuestions() {
    continueCreating().then((response) => {
        if(response){
            init()
        }
        else{
            generateHTMLPromt().then((response) => {
                if(response){
                    renderHTML(managerArray, engineerArray, internArray)
                }
                else{init()}
            })
        }
    })
}

const init = () => {
    employeeInfo()

    repeatQuestions()
    // generateHTMLPromt().then((response) => {
    //     if (response){
    //       try {
    //           const html = renderHTML(managerArray, engineerArray, internArray);
    //           console.log(renderHTML(), "input for renderHTML")
    //           fs.writeFileSync('index.html', html);
    //           console.log('Successfully wrote to index.html');
    //         } catch (error) {
    //           console.log(error);
    //         }
    //     }
    //     else(
    //       console.log("??")
    //     )
    // })          
};
  
  init();