function internHTML(arr){
    if(arr.length != 0){
        for(i = 0; i < arr.length; i++){
            `
            <div class="card">
            <ul>
            <li>Name: ${arr[i].getName()} </li>
            <li>Employee ID: ${arr[i].getId()}</li>
            <li>Email: "mailto:${arr[i].getEmail()}">${arr[i].getEmail()}</a></li>
            <li>Office number: ${arr[i].getSchool()}</li>
            </ul>
            </div>
            `
        }; 
    }
    else return ""
}

module.exports = internHTML