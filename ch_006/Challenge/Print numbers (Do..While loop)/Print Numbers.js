// DOM Declaration
let result = document.getElementById("resultId");
// Const declaration
const inputs = {
  firstnumber : document.getElementById("firstNumber"),
  secondnumber : document.getElementById("secondNumber")
}
// Error declaration
const error = () => {
  if(!inputs.firstnumber.value || !inputs.secondnumber.value){
    alert("Please Enter the number");
    return true;
  }
  return false;
}
// Function validation
function dowhileLoop() {
  if(error())return;
  // Code statements
  let i = inputs.firstnumber.value;
  do {result.value += i + ",";
    i++;
} while ( i <= inputs.secondnumber.value);
}
let displayDate = new Date();
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
