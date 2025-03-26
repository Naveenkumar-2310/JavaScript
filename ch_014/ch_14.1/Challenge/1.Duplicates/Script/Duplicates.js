/**************************************************************
 *   Name of the challenge: Chocolate Problem (Reduce Method) *
 *                 Chapter: 12                                *
 *                 Maintenance history                        *
 *            Developed by: Naveen kumar P                    *
 *           Programmed by: Naveen Kumar P                    *
 *           Creation Date: 12/10/2024                        *
 **************************************************************/
// Declaration
let arrayItem = [];
let inputNumber = document.getElementById("arrayItems");
let addbtn = document.getElementById("addButton");
let arrayList = document.getElementById("displayArray");
let duplicateNumber = document.getElementById("orderId");
let calculatebtn = document.getElementById("displayButton");
let resetAll = document.getElementsByClassName("reset");

// Add Functionality
addbtn.addEventListener("click", function () {
  if (!inputNumber.value) {
    alert("Please Enter a number");
    return;
  } 
  arrayItem.push(parseInt(inputNumber.value));
  arrayList.value = arrayItem.join(",");
  inputNumber.value = "";
});

// Calculate duplicate functionaity
calculatebtn.addEventListener("click", function () {
  if (!arrayList.value) {
    alert("There is an Empty array");
    return;
  }
  let countDuplicates = arrayItem.reduce(function (accumulator, currentValue) {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
  }, {});
  for (let key in countDuplicates) {
    if (countDuplicates[key] > 1) {
      duplicateNumber.value += `${key} : ${countDuplicates[key]} times \n`;
    }
  }
});

// Reset Function
function reset() {
  for (let iterate = 0; iterate < resetAll.length; iterate++){
    resetAll[iterate].value = "";
    arrayItem = [];
  }
}

// Screen date and time declaration.
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
