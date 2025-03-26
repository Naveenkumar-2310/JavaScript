/**************************************************************
 *  Name of the challenge  : Array Chunking                   *
 *  Chapter                : 12                               *
 *               Maintenance History                          *
 *  Developer              : Naveen Kumar P                   *
 *  Creation date          : 16/10/2024                       *
 **************************************************************/
// Declaration
// Write a funtion to retun Array Chunking.
// Example:
//  chunking([1,2,3,4,5,],2);
//  returns [[1,2],[3,4],[5]];"
//Input declaration
let arrayItems = [];
let chunkedArray = [];
let inputNumber = document.getElementById("arrayItems");
let addBtn = document.getElementById("addButton"); 
let arrayList = document.getElementById("displayArray");
let chunkNumber = document.getElementById("pushItem");
let chunkArrayresult = document.getElementById("orderId");
let calculateBtn = document.getElementById("buttonId");
let resetall = document.getElementsByClassName("reset");

// Add Functionality
addBtn.addEventListener("click",function(){
  arrayItems.push(parseInt(inputNumber.value));
  arrayList.value = arrayItems.join(",");
  inputNumber.value = "";
})

// Function to chunk the Array
function chunkArrayFunction(array, size) {
  const chunked = [];
  let index = 0;
  
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// Calculate button event listener for chunking the array
calculateBtn.addEventListener("click", function() {
  let chunkSize = parseInt(chunkNumber.value);
  
  if (!isNaN(chunkSize) && chunkSize > 0) {
    chunkedArray = chunkArrayFunction(arrayItems, chunkSize);
    chunkArrayresult.value = chunkedArray.map(chunk => `[${chunk.join(", ")}]`).join("\n");
  } else {
    alert("Please enter a valid chunk size.");
  }
});
 
// Reset function
function reset(){
  for(let iterate = 0;iterate < resetall.length; iterate++){
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


