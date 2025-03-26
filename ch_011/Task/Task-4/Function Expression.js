/*************************************************************************************
 *  Name of the Task       : Sum of two numbers                                      *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *  Chapter                : 11                                                      *
 *                     Maintenance History                                           *
 *  Developer              : Naveen Kumar P                                          *
 *  Creation Date          : 08/10/2024                                              *
 *************************************************************************************/
// Function expression to calculate the sum of two numbers
let firstNumber = document.getElementById("firstItem");
let secondNumber = document.getElementById("secondItem");
let result = document.getElementById("resultId");
let calculatebtn = document.getElementById("buttonId");
let resetall = document.getElementsByClassName("reset");
let resetbtn = document.getElementById("resetId");

const error = () => {
  if(!firstNumber.value || !secondNumber.value){
    alert("Please Enter a number");
    return true;
  }
}

const addFunction = function(){
  if(error())return;
  result.value = parseInt(firstNumber.value) + parseInt(secondNumber.value)
}
calculatebtn.addEventListener("click" , addFunction) 

// Reset Function
resetbtn.addEventListener("click" , function(){
  for (let iterate = 0; iterate < resetall.length; iterate++){
    resetall[iterate].value = ""
  }
})
