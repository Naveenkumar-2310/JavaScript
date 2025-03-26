// DOM declaration
let result = document.getElementById("resultId");
let resetall = document.getElementsByClassName("reset");

// Const declaration
const printNumber = {
    firstnumber : document.getElementById("firstNumber"),
    secondnumber : document.getElementById("secondNumber")
}

// Error Validation
const error = () => {
    if (!printNumber.firstnumber.value || !printNumber.secondnumber.value){
        alert("Please Enter number!!");
        return;
    }
}

// Function validation
function forLoop(){
    error();
    // For loop
    for(let i = printNumber.firstnumber.value; i <= printNumber.secondnumber.value; i++){
        result.value += i + "," ;
    }
}
// Reset function
// function reset(){
//     for (let i = 0; i < resetall.length; i++){
//         resetall[i].value = "";
//     }
// }
//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(
    document.querySelector("#successCode").value
  );
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal)
    successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});