const Engineer = require('../lib/Engineer');

function generateEngineer(answers){
    let newEngineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
    return(
        `<div class="card Engineers">
            <h3>Engineers</h3>
            <ul>
                <li>Name: ${newEngineer.name} </li>
                <li>Employee ID: ${newEngineer.id}</li>
                <li>Email: ${newEngineer.email}</li>
                <li>Office number: ${newEngineer.github}</li>
            </ul>
        </div>`

    );     
}

module.exports = generateEngineer;