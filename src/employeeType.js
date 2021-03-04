const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Inter')
//this function takes in the user input and returns an object containing the relevent information
function employeeType(choice) {
    if(typeof choice.employee[0] !== 'undefined'){
        type = choice.employee[0]
        switch(type){
            case "Engineer":
                type = new Engineer(choice.name, choice.id, choice.email, choice.github);
            case "Manager":
                type = new Manager(choice.name, choice.id, choice.email, choice.office);
            case "Intern":
                type = new Intern(choice.name, choice.id, choice.email, choice.school);
        };
        return type;
    }
    else console.log('You need to choose a type of employee!')    
}

module.exports = employeeType();