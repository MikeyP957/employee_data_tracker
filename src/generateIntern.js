const Intern = require('../lib/Intern');

function generateIntern(answers){
    let newIntern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
    if(answers.continue){
        return(
            newIntern, init()
        );
    }
    else{
        return(
            newIntern, renderHTML()
        );
    }    
}

module.exports = generateIntern;

// `<div class="card Interns">
//             <h3>Interns</h3>
//             <ul>
//                 <li>Name: ${newIntern.name} </li>
//                 <li>Employee ID: ${newIntern.id}</li>
//                 <li>Email: ${newIntern.email}</li>
//                 <li>Office number: ${newIntern.school}</li>
// //             </ul>
//         </div>`