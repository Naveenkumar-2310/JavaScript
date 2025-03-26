let promise = new Promise(function (resolve, reject) {
  const firstNumber = 10;
  const secondNumber = 20;
  const result = firstNumber * secondNumber;
  if (result === 200) {
    resolve(result);
  } else {
    reject();
  }
});
promise
  .then(function (result) {
    console.log(`Result is ${result}`);
  })
  .catch(function () {
    console.log("Not Same");
  })
  .finally(function () {
    console.log("Result is shown");
  });
