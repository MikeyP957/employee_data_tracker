
function renderHTML(managerArray,engineerArray,internArray) {
    function managerGenerate(arr) {
        if(arr.length != 0){
            for(i = 0; i < arr.length; i++){
                `
                <div class="card">
                <ul>
                <li>Name: ${arr[i].getName()} </li>
                <li>Employee ID: ${arr[i].getId()}</li>
                <li>Email: <a href= "mailto:${arr[i].getEmail()}">${arr[i].getEmail()}</a></li>
                <li>Office number: ${arr[i].getOfficeNumber()}</li>
                
                `
            }; 
        }
        else return ""
    };
    function engineerGenerate(arr){
        if(arr.length != 0){
            for(i = 0; i < arr.length; i++){
                `
                <div class="card">
                <ul>
                <li>Name: ${arr[i].getName()} </li>
                <li>Employee ID: ${arr[i].getId()}</li>
                <li>Email: "mailto:${arr[i].getEmail()}">${arr[i].getEmail()}</a></li>
                <li>Office number: ${arr[i].getGithub()}</li>
                </ul>
                </div>
                `
            }; 
        }
        else return ""
    }
    function internGenerate(arr){
        if(arr.length != 0){
            for(i = 0; i < arr.length; i++){
                `
                <div class="card">
                <ul>
                <li>Name: ${arr[i].getName()} </li>
                <li>Employee ID: ${arr[i].getId()}</li>
                <li>Email: <a href= "mailto:${arr[i].email}">${arr[i].getEmail()}</a></li>
                <li>School: ${arr[i].getSchool()}</li>
                </ul>
                </div>
                `
            }; 
        }
        else return ""
    }
    return (
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
    
        <div class="container managers">
            <h3>Managers</h3>
            
            ${managerGenerate(managerArray)}
            
        </div>
        <div class="container engineers">
            <h3>Engineers</h3>
            
               ${engineerGenerate(engineerArray)}
            
        </div>
        <div class="container interns">
            <h3>Interns</h3>
            
            ${internGenerate(internArray)}
            
        </div>
    </body>
    </html>`
    );
}

module.exports = renderHTML