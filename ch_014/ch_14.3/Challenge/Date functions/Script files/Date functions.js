/**************************************************************
 *  Name of the challenge  : Date functions                   *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer              : Naveen Kumar P                   *
 *  Creation date          : 07/11/2024                       *
 **************************************************************/
// Declaration
let inputDate = document.getElementById("dateId");
let getDay = document.getElementById("dayId");
let getMonth = document.getElementById("monthId");
let getCount = document.getElementById("countId");
let getWeek = document.getElementById("weekId");
let getChristmas = document.getElementById("daysId");
let getWeekEnd = document.getElementById("weekendId");
let resetAll = document.getElementsByClassName("reset");

// Error handling
const error = () => {
  if(!inputDate.value){
    alert("Please fill all required fields");
    return true;
  }
}

function calculate() {
  if(error())return;
  // Finding Day
  let dateValue = new Date(inputDate.value);
  let findDay = dateValue.getDay();
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  getDay.value = days[findDay]

  // Finding Month
  let findMonth =dateValue.getMonth();
  let months = ["January","Feburary","March","April","May","June","July","August","September","October","November", "December"];
  getMonth.value = months[findMonth];

  // Finding number of days from starting year
  let startingYear = new Date(dateValue.getFullYear(),0,1)
  let differnceIn = dateValue - startingYear;
  let daysFromYear = Math.floor(differnceIn / (1000 * 60 * 60 * 24)) + 1;  
  getCount.value = daysFromYear;
  
  // Finding Current week of the month
  let firstDayOfMonth = dateValue.getDate();
  let weekNumber = Math.ceil(firstDayOfMonth / 7)
  getWeek.value = weekNumber;

  // Finding NUmber of days to christmas
  let christmasYear = new Date(dateValue.getFullYear(),11,25);
  (dateValue >= christmasYear) ? christmasYear.setFullYear(dateValue.getFullYear() + 1) : ""
  let daysLeftInMs = christmasYear - dateValue;
  let daysLeft = Math.floor(daysLeftInMs / (1000 * 60 * 60 * 24)) + 1
  getChristmas.value = daysLeft;  
  
  //Finding Weekend or not
  (findDay === 6 || findDay === 0) ?  getWeekEnd.value = "Weekend" : getWeekEnd.value = "Not a Weekend"
}

// Reset function
function reset(){
  for(let iterate = 0;iterate < resetAll.length;iterate++){
    resetAll[iterate].value = ""
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
