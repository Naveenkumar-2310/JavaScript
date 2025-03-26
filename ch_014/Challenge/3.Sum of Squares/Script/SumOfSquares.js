/****************************************************************
 *   Name of the challenge: Sum of Squares                      *
 *            Developed by: Naveen Kumar P                      *
 *                 Chapter: 12                                  *
 *                    Maintenance history                       *
 *           Programmed by: Naveen Kumar P                      *
 *           Creation Date: 18/10/2024                          *                                 *
 ****************************************************************/
// Declaration
let arrayItems = [];
let inputNumber = document.getElementById("arrayItems");
let addbtn  = document.getElementById("addButton");
let arrayList = document.getElementById("displayArray");
let squareSum = document.getElementById("orderId");
let calculateBtn = document.getElementById("displayButton");
let resetall = document.getElementsByClassName("reset");

addbtn.addEventListener("click",function(){
  if(!inputNumber.value){
    alert("Enter a Number");
    return;
  }
  arrayItems.push(parseInt(inputNumber.value));
  arrayList.value = arrayItems.join(",");
  inputNumber.value = ""
})

calculateBtn.addEventListener("click",function(){
  if(!arrayList.value){
    alert("Enter a Number to Push into an Array");
    return;
  }
  let resultSum = arrayItems.reduce(function(accumaltor , currentValue){
    return accumaltor +  currentValue ** 2
  },0)
  squareSum.value = resultSum;
})

// Reset function
function reset(){
  for(let iterate = 0;iterate < resetall.length;iterate++){
    resetall[iterate].value = "";
    arrayItems = [];
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
