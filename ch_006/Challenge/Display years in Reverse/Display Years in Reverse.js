// DOM Declaration
const resetall = document.getElementsByClassName("reset");

// Const Declaration
const reverseYear = {
  firstDate: document.getElementById("firstDateId"),
  secondDate: document.getElementById("secondDateId"),
  forloop: document.getElementById("showFor"),
  whileloop: document.getElementById("showWhile"),
  dowhile: document.getElementById("showDoWhile"),
  reverse: document.getElementById("reverseId"),
  leapYear: document.getElementById("leapId"),
  leapYearcount: document.getElementById("countLeap"),
  whileReverse: document.getElementById("whilereverseId"),
  whileleap: document.getElementById("whileleapId"),
  whileleapcount: document.getElementById("whilecountLeap"),
  dowhilereverse: document.getElementById("dowhilereverseId"),
  dowhileleap: document.getElementById("dowhileleapId"),
  dowhileleapcount: document.getElementById("dowhilecountLeap"),
};

// Error handling

// function validation
function yearReverse() {

  const selectedloop = document.getElementById("selectId");
  // Setting values empty
  reverseYear.reverse.value = "";
  reverseYear.leapYear.value = "";
  reverseYear.leapYearcount.value = "";
  reverseYear.whileReverse.value = "";
  reverseYear.whileleap.value = "";
  reverseYear.whileleapcount.value = "";
  reverseYear.dowhilereverse.value = "";
  reverseYear.dowhileleap.value = "";
  reverseYear.dowhileleapcount.value = "";

  let startYear = new Date(reverseYear.firstDate.value).getFullYear();
  let endYear = new Date(reverseYear.secondDate.value).getFullYear();

  // For loop
  if (selectedloop.value === "for") {
    let forcountYear = 0;
    for (let i = endYear; i >= startYear; i--) {
      reverseYear.reverse.value += i + "\n";
      console.log(i)
      if (i % 4 === 0) {
        reverseYear.leapYear.value += i + ",";
        forcountYear++;
      }
      reverseYear.leapYearcount.value = forcountYear;
    }
    return;
  }

  // While loop
  if (selectedloop.value === "while") {
    let whilecountYear = 0;
    let i = endYear;
    while (i >= startYear) {
      reverseYear.whileReverse.value += i + "\n";
      if (i % 4 === 0) {
        reverseYear.whileleap.value += i + ",";
        whilecountYear++;
      }
      i--;
      reverseYear.whileleapcount.value = whilecountYear;
    }
    return;
  }

  // Do..While loop
  let dowhilecount = 0;

  if (selectedloop.value === "dowhile") {
    let i = endYear;
    do {
      reverseYear.dowhilereverse.value += i + "\n";
      if (i % 4 === 0) {
        reverseYear.dowhileleap.value += i + "\n";
        dowhilecount++;
      }
      i--;
    } while (i >= startYear);
  }
  reverseYear.dowhileleapcount.value = dowhilecount;

  return;
}

// Reset Function

function reset() {
  for (let i = 0; i < resetall.length; i++) {
    resetall[i].value = "";
  }
}

let displayDate = new Date();

//Code Logic
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});
