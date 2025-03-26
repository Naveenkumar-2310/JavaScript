// DOM Declaration
let resetall = document.getElementsByClassName("reset");

// Function validation
function printNumber() {
  const numberOfRows = parseInt(document.getElementById("numberId").value);
  const loopChoice = document.getElementById("selectId").value;

  // Clear previous outputs
  document.getElementById("showFor").value = "";
  document.getElementById("showWhile").value = "";
  document.getElementById("showDowhile").value = "";

  // Input validation
  if (numberOfRows > 10 || numberOfRows < 1 || !loopChoice) {
    alert("Please enter valid inputs");
    return;
  }

  // Generate pattern based on selected loop choice
  if (loopChoice === "for") {
    document.getElementById("showFor").value =
      generatePatternForLoop(numberOfRows);
  } else if (loopChoice === "while") {
    document.getElementById("showWhile").value =
      generatePatternWhileLoop(numberOfRows);
  } else if (loopChoice === "dowhile") {
    document.getElementById("showDowhile").value =
      generatePatternDoWhileLoop(numberOfRows);
  }
}

// Generate diamond pattern using `for` loop
function generatePatternForLoop(rows) {
  let pattern = "";

  // Upper part of the diamond
  for (let character = 1; character <= rows; character++) {
    let space = rows;
    for (space; space > character; space--) {
      pattern += " ";
    }
    for (let k = 1; k <= 2 * character - 1; k++) {
      pattern += character;
    }
    pattern += "\n";
  }

  // Lower part of the diamond
  for (let character = rows - 1; character >= 1; character--) {
    let space = rows;
    for (space; space > character; space--) {
      pattern += " ";
    }
    for (let k = 1; k <= 2 * character - 1; k++) {
      pattern += character;
    }
    pattern += "\n";
  }

  return pattern;
}

// Generate diamond pattern using `while` loop
function generatePatternWhileLoop(rows) {
  let pattern = "";
  let character = 1;

  // Upper part of the diamond
  while (character <= rows) {
    let space = rows;
    while (space > character) {
      pattern += " ";
      space--;
    }
    let k = 1;
    while (k <= 2 * character - 1) {
      pattern += character;
      k++;
    }
    pattern += "\n";
    character++;
  }

  // Lower part of the diamond
  character = rows - 1;
  while (character >= 1) {
    let space = rows;
    while (space > character) {
      pattern += " ";
      space--;
    }
    let k = 1;
    while (k <= 2 * character - 1) {
      pattern += character;
      k++;
    }
    pattern += "\n";
    character--;
  }

  return pattern;
}

// Generate diamond pattern using `do-while` loop
function generatePatternDoWhileLoop(rows) {
  let pattern = "";
  let character = 1;

  // Upper part of the diamond
  do {
    let space = rows;
    do {
      if (space > character) {
        pattern += " ";
      }
      space--;
    } while (space >= character);
    let k = 1;
    do {
      pattern += character;
      k++;
    } while (k <= 2 * character - 1);
    pattern += "\n";
    character++;
  } while (character <= rows);

  // Lower part of the diamond
  character = rows - 1;
  do {
    let space = rows;
    do {
      if (space > character) {
        pattern += " ";
      }
      space--;
    } while (space >= character);
    let k = 1;
    do {
      pattern += character;
      k++;
    } while (k <= 2 * character - 1);
    pattern += "\n";
    character--;
  } while (character >= 1);

  return pattern;
}

// Reset function
function resetFunction() {
  for (let i = 0; i < resetall.length; i++) {
    resetall[i].value = "";
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
