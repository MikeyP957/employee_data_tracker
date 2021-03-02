const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        //throw an error if the office number parameter is not a number or less than 0
        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
          }
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        console.log(`${this.name} is a manager.`)
    }
}

module.exports = Manager;