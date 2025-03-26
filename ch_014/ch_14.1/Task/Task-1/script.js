let resultDiv = document.getElementById("resultId");
let inputArray = [1, 2, 3, 4, 4, 4, 5];
let elementToCount = 4;

let count = inputArray.reduce((accumulator, currentValue) => {
  return currentValue === elementToCount ? accumulator + 1 : accumulator;
}, 0);

resultDiv.innerHTML = `Element to Count : ${elementToCount}; Output : ${count}`;
