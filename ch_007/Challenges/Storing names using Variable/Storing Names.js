/***************************************************************************************
 *  Name of the Task       : Type Conversion                                           *
 *  Developed for          : SOFT TECH ASHRAM                                          *
 *  Chapter                : 07                                                        *
 *                    Maintenance History                                              *
 *  Developer              : Naveen kumar P                                            *
 *  Creation Date          : 28/09/2024                                                *
 ***************************************************************************************/
// DOM Declaration
  // let result = document.getElementById("variableResultsId");
  
// Const declaration
// const actorsName = {
//   actorname1 : document.getElementById("actorNameInput1").value,
//   actorname2 : document.getElementById("actorNameInput2").value,
//   actorname3 : document.getElementById("actorNameInput3").value
// }

// Error Declaration
// const error = () => {
//   if(!actorsName.actorname1 || !actorsName.actorname2 || !actorsName.actorname3){
//     alert("Please Enter all input fields");
//     return true;
//   }
//   return false;
// }

// Function validation
function printNames(){
  // if(error())return;

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

// Reset function
let resetall = document.getElementsByClassName("reset");
function reset(){
for(let i = 0;i < resetall.length;i++){
  resetall[i].value = ""
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