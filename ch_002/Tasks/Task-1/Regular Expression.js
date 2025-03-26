/************************************************************************************
 *  Name of the challenge  : Date Validator (Regular Expression)                     *
 *  Chapter                : 2                                                       *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                            Maintenance History                                    *
 *  Developer              : Naveen kumar P                                          *
 *  Creation Date          : 26/08/2024                                              *
 *************************************************************************************/
   
  //DOM declaration
  const result=document.getElementById("resultId");
  const resetall=document.getElementsByClassName("reset");
//   Const Declaration
const dobvalidation={
    dob:document.getElementById("dateId")
}
// error declaration
const error=()=>{
    if(!dobvalidation.dob.value){
        alert("Please Enter the year");
        return true;
    }
    return false;
}
// Main function
function stringFunction(){
    if(error())return;
    const yearpattern=/^\d{4}-(0[1-9]|1[0-2])-(0[0-9]|1[0-9]|2[0-9]|3[0-1])$/;
    if(yearpattern.test(dobvalidation.dob.value)){
        result.value="Valid";
        return;
    }
    if(!yearpattern.test(dobvalidation.dob.value)){
        alert("Invalid Format!!");
        return;
        }
}
// reset function
function reset(){
    for(let i=0; i<resetall.length; i++){
        resetall[i].value="";
    }
}