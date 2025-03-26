/*************************************************************
 *   Name of the challenge: Longest Country Name             *
 *            Developed by:                                  *
 *           Programmed by:                                  *
 *     Maintenance history:                  Ticket No:      *
 *************************************************************  */

// Declaration
let inputCountry = document.getElementById("arrayItems");
let addbtn = document.getElementById("addButton")
let countryArray = document.getElementById("displayArray");
let longestCountry = document.getElementById("maxId");
let findBtn = document.getElementById("displayButton");
let resetall = document.getElementsByClassName("reset");
let resetbtn = document.getElementById("resetId")
let arrayCountry = []

// Add Function
addbtn.addEventListener("click",function(){
  if(!inputCountry.value){
    alert("Enter a Country Name");
    return;
  }
  arrayCountry.push(inputCountry.value)
  countryArray.value = arrayCountry.join(",")
  inputCountry.value = ""
})

// Find Function
findBtn.addEventListener("click" , function(){
  if(!countryArray.value){
    alert("Enter a Country Name");
    return;
  }
  let count = arrayCountry[0];
  for(let country of arrayCountry){
    if(country.length > count.length){
      count = country;
    }
  }
  longestCountry.value = count;
})

// Reset function
resetbtn.addEventListener("click" , function(){
  for (let iterate = 0; iterate < resetall.length; iterate++){
    resetall[iterate].value = ""
  }
 arrayCountry = []
})

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
