const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        console.log(`${this.name} is associated with ${this.school}.`)
    }
    getRole(){
        console.log(`${this.name} is an intern.`)
    }
}

module.exports = Intern;