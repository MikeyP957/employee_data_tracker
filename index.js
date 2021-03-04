const inquirer = require('inquirer');
const fs = require('fs');

//generates html card for each type of employee
const generateManager = require('./src/generateManager');
//inquirer for each employee type depending on pertinent information
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
const continueCreating = () => inquirer.prompt([
    {
        type: "confirm",
        name: "continue",
        message: "Do you want to create another employee input?"
    }    
])
const generateHTML = () => inquirer.prompt([
    {
        type: "confirm",
        name: "generate",
        message: "Are you ready to generate the employee list?"
    }
])

const init = () => {
    typeOfEmployee().then((answers) => {
        if(answers.employee === 'Manager'){
            managerInput().then((input) => {
                console.log(generateManager(input))
                
            })
        }
        // if(answers.employee === 'Engineer'){
        //     engineerInput().then((input) => {
        //         console.log(input)
        //     })
        // }
        // if(answers.employee === 'Intern'){
        //     internInput().then((input) => {
        //         console.log(input)
        //     })
        // }
        // continueCreating().then((result) => {
        //         if(result.continue){
        //             console.log(result.continue)
        //         }
        //         else{generateHTML().then((result) => {
        //             if(result.generate){
        //                 console.log("html is generating")
        //             }

        //             else console.log("ok....")
        //         }
        //     )}        
        // })
            
         //  try {
         //     const html = typeOfEmployee();
         //     console.log(typeOfEmployee(), "input for typeofemployee")
         //     fs.writeFileSync('index.html', html);
         //     console.log('Successfully wrote to index.html');
         //   } catch (error) {
         //     console.log(error);
         //   }
    });
};
  
  init();