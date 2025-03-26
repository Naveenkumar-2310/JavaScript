/***************************************************************************************
 *  Name of the Task       : Type Conversion                                           *
 *  Developed for          : SOFT TECH ASHRAM                                          *
 *  Chapter                : 07                                                       *
 *                    Maintenance History                                              *
 *  Developer              : Naveen kumar P                                            *
 *  Creation Date          : 28/09/2024                                                *
 ***************************************************************************************/
// Using varaibale
function printActorNames(){
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
  </ul>`
}

// Reset function Variable
function resetVariableInputs(){
  let resetall = document.getElementsByClassName("reset");
  for(let i = 0;i < resetall.length;i++){
    resetall[i].value = "";
    resetall[i].innerHTML = ""
  }
}

// Using Array
function printArrayActorNames(){
  let actornames = [];
  let result = document.getElementById("arrayResultId");

  actornames[0] = document.getElementById("actorNameArrayInput1").value;
  actornames[1] = document.getElementById("actorNameArrayInput2").value;
  actornames[2] = document.getElementById("actorNameArrayInput3").value;

  if (!actornames[0] || !actornames[1] || !actornames[2]) {
    alert("Please fill all required fields");
    return;
  }

  result.innerHTML = `<ul>
  <li>${actornames[0]}</li>
  <li>${actornames[1]}</li>
  <li>${actornames[2]}</li>
  </ul>`
}

// Reset function Array
function resetArrayInputs(){
  let resetall = document.getElementsByClassName("reset1");
  for(let i = 0;i < resetall.length;i++){
    resetall[i].value = "";
    resetall[i].innerHTML = ""
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

//Input declaration
