function LogOut(Login){
    console.log("you clicked on the button", Login);

    if(Login.innerText === "Login"){
        Login.innerText = "Logout";}
    else{
        Login.innerText = "Login";}    
}

function removeButton(Define){
    Define.remove();
}