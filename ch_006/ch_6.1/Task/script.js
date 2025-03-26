//    DOM Declaration
const printNumbers = {
    forLoop: document.getElementById("forLoop"),
    whileLoop: document.getElementById("whileLoop"),
    doWhileLoop: document.getElementById("dowhileLoop"),
  };
  // for loop
  for (let i = 0; i <= 10; i++) {
    printNumbers.forLoop.innerHTML += i + "<br>";
  }
  // while loop
  let i = 0;
  
  while (i <= 10) {
    printNumbers.whileLoop.innerHTML += i + "<br>";
    i++;
  }
  // do while loop
  let input =0;
  do {
    printNumbers.doWhileLoop.innerHTML += input + "<br>";
    input++;
  } while (input <= 10);