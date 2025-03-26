/**************************************************************
 *   Name of the challenge: Students Top Mark Calculator      *
 *                 Chapter: 12                                *
 *                 Maintenance history                        *
 *            Developed by: Naveen kumar P                    *
 *           Programmed by: Naveen Kumar P                    *
 *           Creation Date: 19/10/2024                        *
 **************************************************************/
// Declaration
let lengthOfFirst = document.getElementById("firstLength");
let widthOfFirst = document.getElementById("firstWidth");
let lengthOfSecond = document.getElementById("secondLength");
let widthOfSecond = document.getElementById("secondWidth");
let addBtn = document.getElementById("addId");
let arrayList = document.getElementById("chocolateArray");
let calculateBtn = document.getElementById("calculateId");
let equalchoclate = document.getElementById("arrayId");
let resetAll = document.getElementsByClassName("reset");
let firstChoclate = []
let secondChoclate = []
let arrayOfTwoSister = []
// Add Functionality
addBtn.addEventListener("click", function () {
  firstChoclate.push([parseInt(lengthOfFirst.value), parseInt(widthOfFirst.value)]);
  secondChoclate.push([parseInt(lengthOfSecond.value), parseInt(widthOfSecond.value)]);
  arrayOfTwoSister.push(firstChoclate, secondChoclate);

  (!lengthOfFirst.value || !widthOfFirst.value || !lengthOfSecond.value || !widthOfSecond.value) ?
  alert("Please Fill all requried fields") : arrayList.value = arrayOfTwoSister;

  lengthOfFirst.value = "";
  lengthOfSecond.value = "";
  widthOfFirst.value = "";
  widthOfSecond.value = "";
  // firstChoclate = [];
  // secondChoclate = [];
  arrayOfTwoSister = [];
});

// Calculate Functionality
calculateBtn.addEventListener("click",function(){
  if(!arrayList.value){
    alert("Enter a length and width of the Choclate");
    return;
  }

  let equalchoclates = 0;
  for(let i = 0;i < firstChoclate.length;i++){
    let AreaOfFirstChoclate = firstChoclate[i][0] * firstChoclate[i][1]
    for(let j = i;j < secondChoclate.length;j++){
      let AreaOfSecondChoclate = secondChoclate[j][0] * secondChoclate[j][1]
      if(AreaOfFirstChoclate === AreaOfSecondChoclate){
        equalchoclates++;
        let resultOf = `${equalchoclates} Choclates are Equal`
        equalchoclate.value = resultOf;
      }
    }
  }

  // let equalchoclates = firstChoclate.reduce((totalMatches,firstSisterchoc)=>{
  //   let AreaOffirstChoclate = firstSisterchoc[0] * firstSisterchoc[1];

  //   let matchChoclates = secondChoclate.some(secondSisterchoc => {
  //     let AreaOfSecondChoclate = secondSisterchoc[0] * secondSisterchoc[1];
  //     return AreaOffirstChoclate === AreaOfSecondChoclate;
  //   })
  //   return matchChoclates ? totalMatches + 1 : totalMatches;
  // },0)
  // let resultOf = `${equalchoclates} Choclates are Equal`
  // equalchoclate.value = resultOf;
  });

  function reset(){
    for(let iterate = 0;iterate < resetAll.length;iterate++){
      resetAll[iterate].value = "";
      arrayList.value = "";
    }
     firstChoclate = [];
  secondChoclate = [];
  arrayOfTwoSister = [];
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
