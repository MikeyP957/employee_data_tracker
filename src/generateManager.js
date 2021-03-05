const Manager = require('../lib/Manager');

function generateManager(answers){
    let newManager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
    if(answers.continue){
        return(
            newManager, init()
        );
    }
    else{
        return(
            newManager, renderHTML()
        );
    }     
}

module.exports = generateManager;

// `<div class="card managers">
//             <h3>Managers</h3>
//             <ul>
//                 
//             </ul>
//         </div>`