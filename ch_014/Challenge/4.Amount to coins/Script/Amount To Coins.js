/*************************************************************
 *   Name of the challenge: Naveen Kumar P                   *                              
 *              Maintenance history                          *
 *            Developed by: Naveen Kumar P                   *
 *           Programmed by: Naveen Kumar P                   *
 *          Creation Date : 05/11/2024                       *
 *************************************************************/

// Declaration
let amountValue = document.getElementById("amountId");
let arrayItem = document.getElementById("arrayItems");
let coinsArray = document.getElementById("displayArray");
let amountToCoin = document.getElementById("amountArray");
let resetAll = document.getElementsByClassName("reset");
let amountArray = [];

// add arrayItems
function addItem(){
  if(amountValue.value){
    alert("Please Enter amount")
    return
  }
  let coinValue = parseInt(arrayItem.value);
  amountArray.push(coinValue);
  coinsArray.value = amountArray;
  arrayItem.value = "";
}

// amount to coins
function amountToCoins() {
  amountArray.sort((a, b) => b - a);
  let amount = parseInt(amountValue.value);
  let remainingAmount = amount;
  let results = {};

  for (let coin of amountArray) {
    let count = Math.floor(remainingAmount / coin);
    if (count > 0) {
      results[coin] = count; 
      remainingAmount -= count * coin; 
    }
  }
  amountToCoin.value = JSON.stringify(results);
}

// Reset function
function reset(){
  for(let iterate = 0;iterate < resetAll.length;iterate++){
    resetAll[iterate].value = ""
  }
  amountArray = []
  results = {}
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
