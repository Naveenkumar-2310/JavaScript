let inputNumber = document.getElementById("numberId");
let result = document.getElementById("resultId");
// let addbtn = document.getElementById("btnId");
let tempNumber = 0;
// addbtn.addEventListener("click", () => {
//   let orginalnum = parseInt(inputNumber.value);
//   let number = orginalnum;
//   while (num > 0) {
//     let modvalue = num % 10;
//     tempNumber += modvalue;
//     num = Math.floor(num / 10);
//   }
//   console.log(tempNumber);
// });
const addNumber = (number) => {
  while (number > 0) {
    let modvalue = number % 10;
    tempNumber += modvalue;
    number = Math.floor(number / 10);
    result.innerHTML = tempNumber;
  }
};
addNumber(123);
