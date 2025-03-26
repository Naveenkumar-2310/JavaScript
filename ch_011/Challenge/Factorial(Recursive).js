/**************************************************************
 *  Name of the challenge   : Factorial : Recursive function  *
 *  Developed for           : VHITECH Training Program        *
 *               Maintenance History                          *
 *  Developer               : Naveen Kumar P                  *
 *  Creation date           : 09/10/2024                      *
 **************************************************************/

// Declaration
let inputNumber = document.getElementById("numberId");
let result = document.getElementById("resultId");
let resetall = document.getElementsByClassName("reset")
let tempNumber = 0;

const error = () => {
  if (!inputNumber.value ) {
    alert("Enter a Number");
    return;
  }
};

function recursive(num) {
  if (num < 1) {
    return 1;
  } else {
    return num * recursive(num - 1);
  }
}



function recursiveFunction() {
  error();
  let number = parseInt(inputNumber.value);
  tempNumber = recursive(number);
  result.value = tempNumber;
}

// function recursiveFunction(number){
//   if(number < 1){
//     return 1;
//   } else {
//     return number * recursiveFunction(number - 1)
//   }
// }
// sum = recursiveFunction(number);
// result.value =sum;

// Reset function
function reset() {
  for (let iterate = 0; iterate < resetall.length; iterate++) {
    resetall[iterate].value = "";
  }
}

// Date and time declaration.
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
