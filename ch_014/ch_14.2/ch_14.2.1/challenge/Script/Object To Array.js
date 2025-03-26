// Declaration
let keyValue = document.getElementById("keyId");
let valueOfobject = document.getElementById("valueId");
let objected = document.getElementById("displayObject");
let arrayConvert = document.getElementById("displayArrayitems");
let resetAll = document.getElementsByClassName("reset");
let resultObject = {}

// Add functionality to store key and pair
function addItems(){
  if(!keyValue.value || !valueOfobject.value){
    alert("Please enter all required fields");
    return;
  }
  resultObject[keyValue.value] = valueOfobject.valueAsNumber;

  objected.value = JSON.stringify(resultObject);
  keyValue.value = "";
  valueOfobject.value = "";
}

// Convert to object to array
function convertObject(){
  if(!objected.value){
    alert("Add key and value to push")
    return;
  }
  let convertArray = Object.entries(resultObject);
  arrayConvert.value = JSON.stringify(convertArray);
}

// Reset function to clear all fields
function reset(){
  for(let iterate = 0;iterate < resetAll.length; iterate++){
    resetAll[iterate].value = ""
    resultObject = {};
  }
}

// Screen date and time declaration.
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
        navigator.clipboard.writeText(
          document.querySelector("#successCode").value
        );
        copyText.textContent = "copied";
        setTimeout(() => {
          copyText.innerHTML = `<span>&#128203; </span>copy`;
        }, 2000);
      });



//Input declaration
