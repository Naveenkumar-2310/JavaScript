/**************************************************************
 *  Name of the challenge  : Bubble Sort(Array)               *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer              : Naveen Kumar P                   *
 *  Creation date          : 14/10/2024                       *
 **************************************************************/
// Declaration
let arrayItem = [];
let inputNumber = document.getElementById("arrayItems");
let addBtn = document.getElementById("addButton");
let arrayList = document.getElementById("displayArray");
let nonArrayAscending = document.getElementById("orderId");
let nonArrayDescending = document.getElementById("descId");
let arrayAscending = document.getElementById("arrayorderId");
let arrayDescending = document.getElementById("arraydescId");
let bubbleBtn = document.getElementById("displayButton");
let arraySortBtn = document.getElementById("arrayButton");
let resetAll = document.getElementsByClassName("reset");

// Add Button Functionality
addBtn.addEventListener("click", function () {
  if (!inputNumber.value) {
    alert("Enter a Number");
    return;
  }
  arrayItem.push(parseInt(inputNumber.value));
  arrayList.value = arrayItem.join(",");
  inputNumber.value = "";
});

// Bubble Button Functionality
bubbleBtn.addEventListener("click", function () {
  if (!arrayList.value) {
    alert("There is an Empty array");
    return;
  }

  const lengthOfArray = arrayItem.lengthOfArraygth;
  for (let i = 0; i < lengthOfArray - 1; i++) {
    for (let j = 0; j < lengthOfArray - 1 - i; j++) {
      if (arrayItem[j] > arrayItem[j + 1]) {
        const temp = arrayItem[j];
        arrayItem[j] = arrayItem[j + 1];
        arrayItem[j + 1] = temp;
      }
    }
  }
  nonArrayAscending.value = arrayItem.join(",");

  for (let i = lengthOfArray-1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arrayItem[j] < arrayItem[j + 1]) {
        const temp = arrayItem[j];
        arrayItem[j] = arrayItem[j + 1];
        arrayItem[j + 1] = temp;
      }
    }
  }
  nonArrayDescending.value = arrayItem.join(",");
  arrayAscending.value = "";
  arrayDescending.value = "";
});

// Array sort Button Functionality
arraySortBtn.addEventListener("click", function () {
  if (!arrayList.value) {
    alert("There is an Empty array");
    return;
  }
  arrayAscending.value = arrayItem
    .sort((firstNumber, secondNumber) => firstNumber - secondNumber)
    .join(",");
  arrayDescending.value = arrayItem
    .sort((firstNumber, secondNumber) => secondNumber - firstNumber)
    .join(",");
  nonArrayAscending.value = "";
  nonArrayDescending.value = "";
});

// Reset Function
function reset() {
  for (let iterate = 0; iterate < resetAll.length; iterate++) {
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
