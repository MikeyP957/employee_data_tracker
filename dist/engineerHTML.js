function engineerHTML(arr){
    newArray = [];
    if(arr.length != 0){
        for(i = 0; i < arr.length; i++){
            let element =`
            <div class="card">
            <ul>
            <li>Name: ${arr[i].getName()} </li>
            <li>Employee ID: ${arr[i].getId()}</li>
            <li>Email: <a href= "mailto:${arr[i].getEmail()}">${arr[i].getEmail()}</a></li>
            <li>Github Profile: <a href= "https://github.com/${arr[i].getGithub()}">${arr[i].getGithub()}</a></li>
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