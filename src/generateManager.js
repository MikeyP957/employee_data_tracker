const Manager = require('../lib/Manager');

function generateManager(answers){
    let newManager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
    return(
        `<div class="card managers">
            <h3>Managers</h3>
            <ul>
                <li>Name: ${newManager.name} </li>
                <li>Employee ID: ${newManager.id}</li>
                <li>Email: ${newManager.email}</li>
                <li>Office number: ${newManager.officeNumber}</li>
            </ul>
        </div>`

    );     
}

module.exports = generateManager;