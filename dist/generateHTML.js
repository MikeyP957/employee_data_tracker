
function renderHTML(managerArray,engineerArray,internArray) {
    function managerGenerate(arr) {
        if(arr.length != null){
            for(i = 0; i < arr.length; i++){
                `
                <li>Name: ${arr[i].name} </li>
                <li>Employee ID: ${arr[i].id}</li>
                <li>Email: ${arr[i].email}</li>
                <li>Office number: ${arr[i].officeNumber}</li>
                `
            }; 
        }
        else return ""
    };
    function engineerGenerate(arr){
        if(engineerArray.length != null){
            for(i = 0; i < engineerArray.length; i++){
                `
                <li>Name: ${engineerArray[i].name} </li>
                <li>Employee ID: ${engineerArray[i].id}</li>
                <li>Email: ${engineerArray[i].email}</li>
                <li>Office number: ${engineerArray[i].github}</li>
                `
            }; 
        }
        else return ""
    }
    function internGenerate(arr){
        if(internArray.length != null){
            for(i = 0; i < internArray.length; i++){
                `
                <li>Name: ${internArray[i].name} </li>
                <li>Employee ID: ${internArray[i].id}</li>
                <li>Email: ${internArray[i].email}</li>
                <li>Office number: ${internArray[i].school}</li>
                `
            }; 
        }
        else return ""
    }
    return `<!DOCTYPE html>
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
            ${managerGenerate(managerArray)}
            </ul>
        </div>
        <div class="card engineers">
            <h3>Engineers</h3>
            <ul>
               ${engineerGenerate(engineerArray)}
            </ul>
        </div>
        <div class="card interns">
            <h3>Interns</h3>
            <ul>
            ${internGenerate(internArray)}
            </ul>
        </div>
    </body>
    </html>`
}

module.exports = renderHTML