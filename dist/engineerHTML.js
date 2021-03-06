function engineerHTML(arr){
    newArray = [];
    if(arr.length != 0){
        for(i = 0; i < arr.length; i++){
            let element =`
            <div class="card">
            <ul>
            <li>Name: ${arr[i].getName()} </li>
            <li>Employee ID: ${arr[i].getId()}</li>
            <li>Email: "mailto:${arr[i].getEmail()}">${arr[i].getEmail()}</a></li>
            <li>Office number: ${arr[i].getGithub()}</li>
            </ul>
            </div>
            `
            newArray.push(element)
        };
        return newArray.join(); 
    }
    else return ""
}

module.exports = engineerHTML