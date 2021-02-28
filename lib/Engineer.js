const Employee = require('./Employee');

class Engineeer extends Employee {
    constructor (name, id, email, github){
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