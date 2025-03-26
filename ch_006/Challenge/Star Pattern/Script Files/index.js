/*************************************************************************************
 *  Name of the challenge  : Star Pattern                                            *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *  Chapter                : 6                                                       *
 *                    Maintenance History                                            *
 *  Developer              : Naveen kumar P                                          *
 *  Creation Date          : 12/09/2024                                              *
 *************************************************************************************/
// DOM Declaration
const resetall = document.getElementsByClassName("reset");

// Function to validate 
function repeat() {
  const numberOfRows = parseInt(document.getElementById("numberId").value);
  const character = document.getElementById("chooseText").value;
  const loopChoice = document.getElementById("selectId").value;

  // Clear previous outputs
  document.getElementById("showFor").value = "";
  document.getElementById("showWhile").value = "";
  document.getElementById("showDowhile").value = "";

  // Input validation
  if (numberOfRows > 10 || numberOfRows < 1 || !character || !loopChoice) {
    alert("Please enter valid inputs");
    return;
  }

  // Generate pattern based on selected loop choice
  if (loopChoice === "forChoice"){
    document.getElementById("showFor").value = generatePatternForLoop(numberOfRows, character);
  } else if (loopChoice === "whileChoice"){
    document.getElementById("showWhile").value = generatePatternWhileLoop(numberOfRows, character);
  } else if (loopChoice === "dowhileChoice"){
    document.getElementById("showDowhile").value = generatePatternDoWhileLoop(numberOfRows, character);
  }
}

// Generate diamond pattern using `for` loop
function generatePatternForLoop(numberOfRows ,  char) {
  let pattern = "";

  // Upper part of the diamond
  for (let character = 1; character <= numberOfRows; character++) {
    for (space = 1; space <= numberOfRows - character; space++) {
      pattern += " "; 
    }
    for (let k = 1; k <= (2 * character - 1); k++) {
      pattern += char; 
    }
    pattern += "\n"; 
  }

  // Lower part of the diamond
  for (let character = numberOfRows - 1; character >= 1; character--) {
    for (let space = 1; space <= numberOfRows - character; space++) {
      pattern += " ";  
    }
    for (let k = 1; k <= (2 * character - 1); k++) {
      pattern += char; 
    }
    pattern += "\n"; 
  }
  return pattern;
}

// Generate diamond pattern using `while` loop
function generatePatternWhileLoop(numberOfRows , char) {
  let pattern = "";

  // Upper part of the diamond
  let character =1;
  while (character <= numberOfRows) {
    let space = 1;
    while (space <= numberOfRows - character) {
      pattern += " "; 
      space++;
    }
    let k = 1;
    while (k <= (2 * character - 1)) {
      pattern += char; 
      k++;
    }
    pattern += "\n"; 
    character++;
  }

  // Lower part of the diamond
  character = numberOfRows - 1;
  while (character >= 1) {
    let space = 1;
    while (space <= numberOfRows - character) {
      pattern += " "; 
      space++;
    }
    let k = 1;
    while (k <= (2 * character - 1)) {
      pattern += char; 
      k++; 
    }
    pattern += "\n"; 
    character--;
  }
  return pattern;
}

// Generate diamond pattern using `do-while` loop
function generatePatternDoWhileLoop(numberOfRows, char) {
  let pattern = "";

  let character = 1;
  // Upper part of the diamond
  do {
    let space = 0;
    do {
        pattern += " "; 
        space++;
      } while (space < numberOfRows - character);
      let k = 1;
    do {
      pattern += char; 
      k++;
    } while (k <= (2 * character - 1));
    pattern += "\n"; 
    character++;
  } while (character <= numberOfRows);

  // Lower part of the diamond
  character = numberOfRows - 1;
  do {
    let space = 0;
    do{
        pattern += " "; 
        space++;
    } while (space < numberOfRows - character);
    let k = 1;
    do {
      pattern += char; 
      k++;
    } while (k <= (2 * character - 1));
    pattern += "\n"; 
    character--;
  } while (character > 1);
  return pattern;
}

// Reset function
function reset(){
  for(let i = 0; i <= resetall.length; i++){
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
});