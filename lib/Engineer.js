const Employee = require('./Employee');

class Engineeer extends Employee {
    constructor (name, id, email, github){
        //throw an error if the github is not a string or only spaces (empty string)
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
          }
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        console.log(`${this.name}'s github username is ${this.github}`)
    }
    getRole(){
        console.log(`${this.name} is an enigneer.`)
    }
}

module.exports = Engineeer;