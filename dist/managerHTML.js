function managerHTML(arr) {
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

module.exports = managerHTML