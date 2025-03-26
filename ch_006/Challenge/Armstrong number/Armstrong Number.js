// DOM Declaration
let resetall = document.getElementsByClassName("reset");

// const declaration
const armstrongNumber = {
  firstNumber: document.getElementById("firstNumber"),
  secondNumber: document.getElementById("secondNumber"),
  forValue: document.getElementById("showFor"),
  whileValue: document.getElementById("showWhile"),
  doWhileValue: document.getElementById("showDowhile"),
};

// Error handling
const error = () => {
  if (
    !armstrongNumber.firstNumber.value ||
    !armstrongNumber.secondNumber.value
  ) {
    alert("Please enter all the fields");
    return true;
  }
  return false;
};


// Validate function for Armstrong numbers
function loop() {
  if (error()) return;

  const selectedLoop = document.getElementById("selectId").value;

  // To clear previous results
  armstrongNumber.forValue.value = "";
  armstrongNumber.whileValue.value = "";
  armstrongNumber.doWhileValue.value = "";

  function isArmstrong(num) {
    let sum = 0;
    let originalNum = num;
    while (num > 0) {
      let modValue = num % 10;
      sum += modValue ** 3; 
      num = parseInt(num / 10);
    }
    return sum === originalNum;
  }

  // For loop
  if (selectedLoop === "for") {
  for(let num = armstrongNumber.firstNumber.valueAsNumber; num <= armstrongNumber.secondNumber.valueAsNumber; num++){
    if(isArmstrong(num)){
        armstrongNumber.forValue.value +=  num + ","; 
      } 
    }
   return;
  }

  // While loop
  if (selectedLoop === "while") {
    let num = armstrongNumber.firstNumber.valueAsNumber;
    while (num <= armstrongNumber.secondNumber.valueAsNumber) {
      if (isArmstrong(num)) {
        armstrongNumber.whileValue.value += num + ", ";
      }
      num++;
    }
    return;
  }

  // Do-while loop
  if (selectedLoop === "dowhile") {
    let num = armstrongNumber.firstNumber.valueAsNumber;
    do {
      if (isArmstrong(num)) {
        armstrongNumber.doWhileValue.value += num + ", ";
      }
      num++;
    } while (num <= armstrongNumber.secondNumber.valueAsNumber  );
    return;
  }
}
 

// Reset function
function reset() {
  for (let i = 0; i <= resetall.length; i++) {
    resetall[i].value = "";
  }
}

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
