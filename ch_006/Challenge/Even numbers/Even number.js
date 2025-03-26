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

  // For loop
  if (selectedLoop.value === "For"){
    for (let i = inputs.firstnumber.value;
       i <= inputs.secondnumber.value; 
       i++)

      {
      if (i % 2 === 0){
        inputs.forloop.value += i + ",";
      } 
    } 
    return;
  }
  
  // While loop
  if (selectedLoop.value === "While"){
    let i = inputs.firstnumber.value;
    while (i <= inputs.secondnumber.value){
    if (i % 2 === 0){
      inputs.whileloop.value += i + ",";
    }
    i++;
  }
  return;
  } 
  // Do..While loop
  if (selectedLoop.value === "DoWhile"){
    let i = inputs.firstnumber.value;
    do { 
    if (i % 2 === 0){
      inputs.dowhileloop.value += i + ",";
    }
    i++;
  } while (i <= inputs.secondnumber.value);
  return;
  } 
}

// Reset function
function reset(){
  for (let i=0; i<resetall.length; i++){
    resetall[i].value="";
  }
}
//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});