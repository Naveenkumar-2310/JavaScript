/***************************************************************
 *  Name of the challenge  : Stone Paper Scissor               *
 *  Chapter                : 9                                 *
 *  Developed for          : VHITECH Training Program          *
 *               Maintenance History                           *
 *  Developer              : Naveen Kumar P                    *
 *  Creation date          : 04/10/2024                        *
 ***************************************************************/
// Declaration

// User choice and UserImage
let userchoiceimage = document.getElementById("userImage");
let userchoice = document.querySelectorAll(".userChoice");
// CPU Random image
let cpudiv = document.getElementById("cpuImage");
// Result Shown div
let resultShown = document.getElementById("resultUpdate");
// Moves left
let moveClass = document.querySelector(".movesLeft");
let moves = 10;
// Initially WinCount 0
let userWincount = 0;
let cpuwincount = 0;
// Modal Winning scores
let userwin = document.getElementById("score");
let cpuwin = document.getElementById("score1");
// Modal Winner Id
let winner = document.getElementById("winId");
// Reset declaration
let resetall = document.getElementById("reset");
// User and CPU
let user = document.getElementById("whouser");
let cpu = document.getElementById("whoCpu");
// Overall User and CPU
// let whouser = document.getElementById("user");
user.innerHTML = "User";
cpu.innerHTML = "CPU";

for (let iterate = 0; iterate < userchoice.length; iterate++) {
  userchoice[iterate].onclick = function (event) {
    // Moves Decrement
    moves--;
    moveClass.innerHTML = "Moves left : " + moves;

    // Modal Calling Function
    if (moves <= 0) {
      moveClass.innerHTML = print();
      return;
    }

    // User Selection
    let selectedimg = event.target.src;
    let userImg = document.createElement("img");
    userImg.src = selectedimg;
    userchoiceimage.innerHTML = "";
    userchoiceimage.append(userImg);

    // CPU randomly selects an option
    let cpuArray = [
      "Images/Stone.png",
      "Images/Paper.png",
      "Images/scissor.png",
    ];

    let cpuchoice = Math.floor(Math.random() * cpuArray.length);
    let cpuimg = document.createElement("img");
    cpuimg.src = cpuArray[cpuchoice];
    cpudiv.innerHTML = "";
    cpudiv.append(cpuimg);

    // Who wins the round condition
    if (iterate === cpuchoice) {
      // Result shown div
      resultShown.innerHTML = "It's a Draw!";
    } else if (
      (iterate === 0 && cpuchoice === 2) ||
      (iterate === 1 && cpuchoice === 0) ||
      (iterate === 2 && cpuchoice === 1)
    ) {
      resultShown.innerHTML = "User Win!";
      userWincount++;
      // User points
      userwin.innerHTML = "Your score : " + userWincount;
      return;
    } else {
      resultShown.innerHTML = "CPU Wins!";
      cpuwincount++;
      // CPU Points
      cpuwin.innerHTML = "CPU Score : " + cpuwincount;
    }
  }
}

// Modal Call function
function print() {
  // Modal
  moves === 0
    ? (winContent.style.display = "block")
    : (winContent.style.display = "none");

  if (userWincount > cpuwincount) {
    winner.innerHTML = "User Wins";
  } else if (userWincount === cpuwincount) {
    winner.innerHTML = "It's Draw";
  } else {
    winner.innerHTML = "CPU Wins";
  }
}

// Reset function

function reset() {
  // Moves set into 10
  moves = 10;
  moveClass.innerHTML = "Moves left : " + moves;

  // Set Image empty
  userchoiceimage.innerHTML = "";
  cpudiv.innerHTML = "";

  // Set UserScore and CPUScore Initially Zero in Modal
  userWincount = 0;
  cpuwincount = 0;

  // Result div empty
  resultShown.innerHTML = "";

  // Model display none
  winContent.style.display = "none";
}

// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML =
  displayDate.toLocaleTimeString();
