
let Resume={
    skill:[],
    education:[],
    certification:[],
    project:[],
    personal_details:[],
    
    hobbies:[],
    
};

function addDetails(key,value,index=null,indexkey=null){
  if(index==null && indexkey==null){  
    Resume[key]=value;
  }
  else if (indexkey==null){
    Resume[key][index]=value;
  }
  else {
        if(!Resume[key][index]){
            Resume[key][index]={}
        }
        Resume[key][index][indexkey]=value;
    }
    

}
function display(){
    document.getElementById("obj_data").innerHTML=JSON.stringify(Resume);
    
        
        if(!localStorage.getItem("list")){
            localStorage.setItem("list",JSON.stringify([]));
        }
        
        let list_1=JSON.parse(localStorage.getItem("list"));
        list_1.push(Resume);

        localStorage.setItem("list",JSON.stringify(list_1));
        namedisplay();
       
}namedisplay();


function namedisplay(){
    let element=" ";
    let index=JSON.parse(localStorage.getItem("list"));
    for(let i=0;i<index.length;i++){
        element=element+"<li> <a href='index.html?name="+index[i].name +"'target='_blank'>"+index[i].name+"</a></li>";
    }
    document.getElementById("list_ol").innerHTML=element;

}
