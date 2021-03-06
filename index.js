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
    },
    
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
    {
        type: "confirm",
        name: "continue",
        message: "Do you want to create another employee?"
    } 
    
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
    },
    {
        type: "confirm",
        name: "continue",
        message: "Do you want to create another employee?"
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
    {
        type: "confirm",
        name: "continue",
        message: "Do you want to create another employee?"
    } 
    
])



function employeeInfo(answers) {    
    if(answers.employee === 'Manager'){
        return managerInput().then((input) => {
            managerArray.push(generateManager(input));
            return input.continue;                
        })
    }
    if(answers.employee === 'Engineer'){
        return engineerInput().then((input) => {
            engineerArray.push(generateEngineer(input));
            return input.continue;                
        })
    }
        if(answers.employee === 'Intern'){
            return internInput().then((input) => {
                internArray.push(generateIntern(input));
                return input.continue;                
            })
    }    
}
 

const init = () => {
    typeOfEmployee().then((response) => {
        employeeInfo(response).then(shouldContinue => {
            if(shouldContinue){              
                init();
            }
            else{
                console.log(managerArray[0])
                return false
            }
        }).then((generate) => {
            if(generate === false){
                try {
                    const html = renderHTML(managerArray, engineerArray, internArray);
                    fs.writeFileSync('index.html', html);
                    console.log('Successfully wrote to index.html');
                  } catch (error) {
                    console.log(error);
                  }
            }
        });

    })
               
};
  
  init();

  