class Employee {
    constructor(name, id, email){
        //throw an error if the name is not a string or only spaces (empty string)
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
        //throw an error if the id is not a number or less than 0
          if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a number");
          }
          //throw an error if the email is not a string or only spaces (empty string)
          if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
          }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return(this.name)
    }
    getId() {
        return(this.id)
    }
    getEmail() {
        return(this.email)
    }
    getRole(){
        console.log('Employee')
    }
}

module.exports = Employee;