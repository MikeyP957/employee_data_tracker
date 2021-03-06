
const Engineer = require('../lib/Engineer');


function generateEngineer(answers){
    let newEngineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
     
    return newEngineer
    
}

module.exports = generateEngineer;
