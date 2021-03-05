const renderHTML = require('../dist/generateHTML');
const Engineer = require('../lib/Engineer');

function generateEngineer(answers){
    let newEngineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
    if(answers.continue){
        return(
            newEngineer, init()
        );
    }
    else{
        return(
            newEngineer, renderHTML()
        );
    }
         
}

module.exports = generateEngineer;
