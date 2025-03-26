             /**************************************************************
              *  Name of the challenge  : Regular expression               *
              *  Chapter                : 2                                *
              *  Developed for          : VHITECH Training Program         *
              *               Maintenance History                          *
              *  Developer              : Naveen kumar P                   *
              *  Creation date          : 26/08/2024                       *
              **************************************************************/

// DOM Declaration
const details=document.getElementById("resultId");
const resetall=document.getElementsByClassName("reset");
const nameregexp=/^[A-Za-z\s]+$/;
// const declaration
const studentdetails={
    studentname:document.getElementById("stringId"),
    rollnum:document.getElementById("rollId"),
    coursename:document.getElementById("courseId")  
}
// error declaration
const error=()=>{
    if (!studentdetails.studentname.value || !studentdetails.coursename.value || !studentdetails.rollnum.value){
        alert("Please fill all required fields");
        return true;
    }
    return false;
}
// Main function
function inputValidation(){
    if(error())return;
// Regular expression for validation
if (!nameregexp.test(studentdetails.studentname.value)){
    alert("Invalid Student Name.Letters only Allowed");
    return;
}
    // validation for Student name

    // Display result area
    details.value=` ${studentdetails.studentname.value}\n ${studentdetails.rollnum.value}\n ${studentdetails.coursename.value}`;
} 
// Reset function
function reset(){
    for(index=0; index<resetall.length; index++){
        resetall[index].value="";
    }
}
// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();