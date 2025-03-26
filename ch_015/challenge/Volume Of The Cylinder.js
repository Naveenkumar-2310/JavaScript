/***************************************************************
 *  Name of the challenge   : Volume of the cylinder (Class)   *
 *               Chapter    : 15                               *
 *               Maintenance History                           *
 *  Developer               : Naveen Kumar P                   *
 *  Creation date           : 08/11/2024                       *
 ***************************************************************/

// Declaration
let inputRadius = document.getElementById("firstNumber");
let inputheight = document.getElementById("secondNumber");
let volume = document.getElementById("resultId");
let calculateBtn = document.getElementById("buttonId");
let resetBtn = document.getElementById("resetId");
let resetAll = document.getElementsByClassName("reset");

// Error Handling


// Logic to find volume
calculateBtn.addEventListener("click", function () {
  return (!inputRadius.value || !inputheight.value) ? alert("Please Fill all required fields")
  : (inputRadius.value > 20 || inputheight.value > 20) ? alert("Enter a number between 0 to 20")
  : function () {

  class findingVolume {
    constructor(inputRadius, inputheight, volume) {
      this.inputRadius = inputRadius;
      this.inputheight = inputheight;
      this.volume = volume;
    }
    volumeOf() {
      return (volume.value = (
        Math.PI *
        inputRadius.value ** 2 *
        inputheight.value
      ).toFixed(2));
    }
  }
  let inputs = new findingVolume(inputRadius.value, inputheight.value);
  inputs.volumeOf()} ()
});

// Reset function
resetBtn.addEventListener("click", function () {
  for (let iterate = 0; iterate < resetAll.length; iterate++) {
    resetAll[iterate].value = "";
  }
});

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
