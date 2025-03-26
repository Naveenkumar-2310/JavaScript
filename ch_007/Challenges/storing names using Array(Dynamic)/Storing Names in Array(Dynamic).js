/***************************************************************************************
 *  Name of the Task       : Type Conversion                                           *
 *  Developed for          : SOFT TECH ASHRAM                                          *
 *  Chapter                : 07                                                        *
 *                    Maintenance History                                              *
 *  Developer              : Naveen kumar P                                            *
 *  Creation Date          : 28/09/2024                                                *
 ***************************************************************************************/
// Using Variable
// DOM Declaration
let resetall = document.getElementsByClassName("reset");
// Function Validation
function printActorNames() {
  let actorname1 = document.getElementById("actorNameInput1").value;
  let actorname2 = document.getElementById("actorNameInput2").value;
  let actorname3 = document.getElementById("actorNameInput3").value;
  let result = document.getElementById("variableResultsId");

  if (!actorname1 || !actorname2 || !actorname3) {
    alert("Please fill all required fields");
    return;
  }

  result.innerHTML = `<ul>
  <li>${actorname1}</li>
  <li>${actorname2}</li>
  <li>${actorname3}</li>
  </ul>`;
}

// Reset function
function resetVariableInputs() {
  for (let i = 0; i < resetall.length; i++) {
    resetall[i].value = "";
    resetall[i].innerHTML = "";
  }
}

// Using Array
// DOM Declaration
let actornames = [];
let numberofactors = 0;
const arrayResult = document.getElementById("arrayResultId");
const inputName = document.getElementById("actorsNameArrayInput");
const actorsadded = document.getElementById("numberOfActorsAdded");
let resetall1 = document.getElementsByClassName("reset1");

// Error declaration
const error = () => {
  if (!inputName.value.trim()) {
    alert("Please Enter Actor name");
    return true;
  }
  return false;
};

// Main function
// Add Function
function addActorsName() {
  if (error()) return;
  actornames[numberofactors] = inputName.value;
  numberofactors++;
  inputName.value = " ";
  actorsadded.innerHTML = "No. of Actors added :  " + numberofactors;
}
// Print Function
function printArrayActorNames() {
  arrayResult.innerHTML = "<ul>";
  for (let iterate = 0; iterate < actornames.length; iterate++) {
    arrayResult.innerHTML += `<li>${actornames[iterate]}</li>`;
  }
  arrayResult.innerHTML += "</ul>";
}

// Reset Function
function resetArrayInputs() {
  for (let i = 0; i < resetall1.length; i++) {
    resetall1[i].value = "";
    resetall1[i].innerHTML = "";
  }
  numberofactors = 0;
  actorsadded.innerHTML = "No. of Actors added : 0 ";

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
