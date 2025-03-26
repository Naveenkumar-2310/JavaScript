/**************************************************************
 *   Name of the challenge: Chocolate Problem (Reduce Method) *
 *                 Chapter: 12                                *
 *                 Maintenance history                        *
 *            Developed by: Naveen kumar P                    *
 *           Programmed by: Naveen Kumar P                    *
 **************************************************************/
// Declaration
let arrayItem = [];
let inputNumber = document.getElementById("arrayItems");
let addbtn = document.getElementById("addButton");
let arrayList = document.getElementById("displayArray");
let pushNumber = document.getElementById("pushItem");
let pushBtn = document.getElementById("pushButton");
let pushArray = document.getElementById("displayArrayitems");
let shiftBtn = document.getElementById("displayButton");
let shiftArray = document.getElementById("orderId");
let resetAll = document.getElementsByClassName("reset");

// Add To array
addbtn.addEventListener("click" , function(){
  if(!inputNumber.value){
    alert("Please Enter a Number");
    return;
  }
  arrayItem.push(parseInt(inputNumber.value));
  arrayList.value = arrayItem.join(",");
  inputNumber.value = "";
})

// Push to Array
pushBtn.addEventListener("click" , function(){
  if(!pushNumber.value){
    alert("Enter a Number to Push into Array");
    return;
  }
  arrayItem.push(parseInt(pushNumber.value)); 
  pushArray.value = arrayItem.join(",");
  arrayList.value = "";
  pushNumber.value = "";
})

// Shift from array
shiftBtn.addEventListener("click", function () {
  arrayItem.shift();
  shiftArray.value = arrayItem; 
})

// Reset Function
function reset(){
  for(let iterate = 0;iterate < resetAll.length; iterate++){
    resetAll[iterate].value = "";
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