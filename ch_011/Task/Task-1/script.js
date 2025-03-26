let result = document.getElementById("resultId")
let inputNumber = document.getElementById("numberId");



const numberLength = (num) => {
    result.innerHTML = num.toString().length;
}
numberLength(1234)