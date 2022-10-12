let resume={
    name:' ',
    mobile_no:8489063830,
    email:'alfiyashalini@gmail.com',
    role:'Full-Stack Developer',
    Objective:"Obtaining a challenging position where I can utilize my subject knowledge, communications and technical skills for the development of the organization to the best of my ability",


    education:[

        {
            course:'SSLC',
            stream:10,
            institute:'L.m.S school',
            percentage:"86%",
            year_of_passing:2014,
        },
        {
            course:'HSC',
            stream:12,
            institute:'L.m.S school',
            percentage:"75%",
            year_of_passing:2016,
        },
        {
            course:'BCA',
            stream:'Computer Application',
            institute:'MSU constituent college',
            percentage:7.95,
            year_of_passing:2019,
        },
        {
            course:'MCA',
            stream:'Computer Application',
            institute:'LJCET college',
            percentage:8.98,
            year_of_passing:2021,
        },
    
    ],
    certification:[
        {
            course_name:" ",
            duration:" ",
            institute:" ",

        }
    ],
    project:[
        {
            title:"  ",
            obstract:" ",
            
            duration:" ",
        }
    ],
    personal_details:[
        
        {
            father_name:'ROBINSON',
            mother_name:'SAHILA',
            address:'14-82/1,seynamvilai,bethelpuram(p.o)',
            DOB:05-04-1999,
            gender:'female',
            material_status:'single',
            nationality: 'Indian',
	        religion: 'Christian',
        },
    ],
    language_known:["Tamil","English"],
    hobbies:["music","drawing","gardening"],
    skill:["HTML","CSS","JS"],
    declaration:"I hereby declare that the above given information are true to the best of my knowledge and belief",
    place:"seynamvilai",
    date:" ",
    signature:"  ",
    
}
console.log(resume);
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
    display();

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
        element=element+"<li> <a href='view.html?name="+resumeindex[i].name +"'target='_blank'>"+resumeindex[i].name+"</a></li>";
    }
    document.getElementById("list_ol").innerHTML=element;

}
