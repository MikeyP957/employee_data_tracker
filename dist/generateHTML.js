const managerHTML = require("./managerHTML");
const engineerHTML = require("./engineerHTML");
const internHTML = require("./internHTML");


function renderHTML(arr1,arr2,arr3) {

    return (
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
        <h1>List of Employee Information</h1>
    
        <div class="container managers">
            <h3>Managers</h3>
            
            ${managerHTML(arr1)}
            
        </div>
        <div class="container engineers">
            <h3>Engineers</h3>
            
               ${engineerHTML(arr2)}
            
        </div>
        <div class="container interns">
            <h3>Interns</h3>
            
            ${internHTML(arr3)}
            
        </div>
    </body>
    </html>`
    );
}

module.exports = renderHTML