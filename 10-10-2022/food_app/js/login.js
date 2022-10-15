let login_details={

};

function addDetails(key,value){
    login_details[key]=value;
        
}



function display(){
    if(!localStorage.getItem("login_details")){
    localStorage.setItem("login_details",JSON.stringify([]))
}

let list_1=JSON.parse(localStorage.getItem("login_details"));
list_1.push(login_details);

localStorage.setItem("login_details",JSON.stringify(list_1));

}
function login(){

    

    
    let userName = document.getElementById('userEmail').value;
    let userPw = document.getElementById('userPassword').value;

    if(localStorage.getItem('login_details')){
        let details=JSON.parse(localStorage.getItem("login_details"));
    

   
    for(let i=0; i<details.length; i++){
        if(userName==details[i].email  && userPw==details[i].password){
            window.location.replace("home.html");
            // alert("sucess fully login");
             break;
            }
            else{
                alert("please check your email and password");
                break;
            }
        }    

}
}





