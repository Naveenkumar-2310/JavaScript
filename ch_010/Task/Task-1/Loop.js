/***************************************************************************************
 *  Name of the Task       : Sum Of Array Elements                                     *
 *  Developed for          : SOFT TECH ASHRAM                                          *
 *  Chapter                : 10                                                        *
 *                        Maintenance History                                          *
 *  Developer              : Naveen Kumar P                                            *
 *  Creation Date          : 07/10/2024                                                *
 ***************************************************************************************/

//Code Statements
// Declaration
let inputNumber = document.getElementById("itemId");
let addbtn = document.getElementById("addId");
let arrayItem = document.getElementById("arrayId");
let result = document.getElementById("resultId");
let calculatebtn = document.getElementById("buttonId");
let resetbtn = document.getElementById("resetId")
let resetall = document.getElementsByClassName("reset");
let arrayNumber = []

// Add Function
addbtn.addEventListener("click", function () {
  if(!inputNumber.value){
    alert("Enter a Number")
    return;
  }
  arrayNumber.push(parseInt(inputNumber.value))
  arrayItem.value = arrayNumber.join(",");
  inputNumber.value = ""
});

// Calculate Function
calculatebtn.addEventListener("click", function () {
  if(!arrayItem.value){
    alert("Please Enter a number");
    return;
  }
  let sum = 0;
  for (let element of arrayNumber) {
    sum += element;
  }
  result.value = sum;
});

// Reset Funtion
resetbtn.addEventListener("click" , function(){
  for (let iterate = 0; iterate < resetall.length;iterate++){
    resetall[iterate].value = "";
  }
  arrayNumber = []
})
