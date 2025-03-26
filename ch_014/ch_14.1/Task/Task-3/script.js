let missNumber = document.getElementById("resultId");
let inputArray = [1, 2, 3, 5];
function findMissingNumber(inputArray) {
  for (let iterate = 1; iterate <= 5; iterate++) {
    if (!inputArray.includes(iterate)) {
      return iterate;
    }
  }
  return null; 
}

let missingNumber = findMissingNumber(inputArray);

missNumber.innerHTML = `The missing number is: ${missingNumber}`;