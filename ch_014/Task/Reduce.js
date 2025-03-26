/*************************************************************************************
 *  Name of the Task       : Sum Of Array Elements                                   *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *  Chapter                : 12                                                      *
 *                            Maintenance History                                    *
 *  Developer              : Naveen Kumar P                                          *
 *  Creation Date          : 12/10/2024                                              *
 *************************************************************************************/
//Find the maximum number in an array using reduce method
//Code Statements
let inputArray = document.getElementById("itemId");
let addbtn = document.getElementById("addId");
let arrayItem = document.getElementById("arrayId");
let calculatebtn = document.getElementById("buttonId");
let maxNumber = document.getElementById("resultId");
let resetbtn = document.getElementById("resetId");
let resetall = document.getElementsByClassName("reset")
let arrayNumber = [];

// Add Function
addbtn.addEventListener("click" , function (){
  if(!inputArray.value){
    alert("Enter a Number")
    return;
  }
  arrayNumber.push(parseInt(inputArray.value))
  arrayItem.value = arrayNumber.join(",");
  inputArray.value = ""
})

// Calculate Function
calculatebtn.addEventListener("click" , function(){
  if(!arrayItem.value){
    alert("Please Enter a number");
    return;
  }
  const maxArray = arrayNumber.reduce(function(tempNumber,currentValue){
    return Math.max(...arrayNumber);
  },0)
  maxNumber.value = maxArray;
})

// Reset Function
resetbtn.addEventListener("click" , function(){
  for (let iterate = 0; iterate < resetall.length;iterate++){
    resetall[iterate].value = "";
  }
  arrayNumber = []
})
