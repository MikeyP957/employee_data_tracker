const employeeType = require("../src/employeeType")

function renderHTML(choices) {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee List</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
        <h1>List of Employee Information</h1>
    
        <div class="card managers">
            <h3>Managers</h3>
            <ul>
    
            </ul>
        </div>
        <div class="card engineers">
            <h3>Engineers</h3>
            <ul>
                
            </ul>
        </div>
        <div class="card interns">
            <h3>Interns</h3>
            <ul>
    
            </ul>
        </div>
    </body>
    </html>`
}