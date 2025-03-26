// DOM Declaration
let resetall = document.getElementsByClassName("reset");

// Const declaration
const inputs = {
 firstnumber : document.getElementById("firstNumber"),
 secondnumber : document.getElementById("secondNumber"),
 forloop : document.getElementById("showFor"),
 whileloop : document.getElementById("showWhile"),
 dowhileloop : document.getElementById("showDowhile")
}

// Function validation
function loop(){

  const selectedLoop = document.getElementById("selectId");
  inputs.forloop.value = "";
  inputs.whileloop.value = "";
  inputs.dowhileloop.value = "";

  function isPalindrome(num) {
    let reversednum = 0;
    let originalNum = num;
    while (num > 0) {
      let modValue = num % 10;
      reversednum = reversednum * 10 + modValue; 
      num = parseInt(num / 10);
    }
    return reversednum === originalNum;
  }

  // For loop
  if (selectedLoop.value === "for"){
    for (let num = inputs.firstnumber.valueAsNumber; num <= inputs.secondnumber.valueAsNumber; num++){
      if(isPalindrome(num)){
        inputs.forloop.value += num + ","
      }
    }
    return;
  }
  
  
  // While loop
  if (selectedLoop.value === "while"){
    let num = inputs.firstnumber.valueAsNumber;
    while (num <= inputs.secondnumber.valueAsNumber){
      if(isPalindrome(num)){
        inputs.whileloop.value += num + ",";
      }
      num++;
    }
    return;
  }
      
  
  // Do..While loop
  if (selectedLoop.value === "dowhile"){
    let num = inputs.firstnumber.valueAsNumber;
    do { 
      if(isPalindrome(num)){
        inputs.dowhileloop.value += num + ",";
      }
    num++;
  } while (num <= inputs.secondnumber.valueAsNumber);
  return;
  } 
}

// Reset Function
function reset() {
  for(let i = 0; i < resetall.length; i++){
    resetall[i].value = "";
  }
}

//Date and Time Declration
let displayDate = new Date();

//Code Logic
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});