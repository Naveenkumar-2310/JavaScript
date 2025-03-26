  /***********************************************************************************
 *  Name of the Task       : Sum of two numbers                                      *     
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *  Chapter                : 11                                                      * 
 *                           Maintenance History                                     *
 *  Developer              : Naveen kumar P                                          *
 *  Creation Date          : 09/10/2024                                              *
 *************************************************************************************/
// Function validation
let inputTemp = document.getElementById("firstItem");
let result = document.getElementById("resultId");
let convertbtn =document.getElementById("buttonId");
let resetbtn = document.getElementById("resetId");
let resetall = document.getElementsByClassName("reset");

convertbtn.addEventListener ("click" , () => {
  if(!inputTemp.value){
    alert("Enter the Temparature");
    return;
  }
  result.value = inputTemp.value * 1.8 + 32
})

// Reset function
resetbtn.addEventListener("click" , function(){
  for(let iterate = 0;iterate < resetall.length;iterate++){
    resetall[iterate].value = ""
  }
})
