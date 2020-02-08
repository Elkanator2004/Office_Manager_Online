let Info = [
    {
        username: "Stefan",
        password: "stefan2004"
    },
    {
        username: "JoroT",
        password: "joro2004"
    }
];

function Log_in(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < Info.length; i++){
        if(username===Info[i].username && password===Info[i].password) {
            open(`Office_Manager_Employee_Page.html`);
            break;
        }
        else
            alert("Wrong username/password");
    }
}