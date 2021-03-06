const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school){
        //throw an error if the school is not a string or only spaces (empty string)
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
          }
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return(this.name)
    }
    getRole(){
        console.log(`${this.name} is an intern.`)
    }
}

module.exports = Intern;