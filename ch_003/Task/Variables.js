//Code Statements
// let is declarede as global variable we can access inside and outside the function
let firstnumber=10; 
// Function
function count(){
  console.log("Firstnumber using global variable by declare outside the function " + firstnumber)
  firstnumber=15
  // We can reassign the value by using let so we get the output of 15.
  console.log("firstnumber inside the function and after reassign the value "+ firstnumber);
  // Var is function scope
  var secondnumber=20; 
  console.log("secondnumber before reassign using var "+secondnumber);
  secondnumber=25
  // we can reassign and redeclare the value by using var so the output is 25.
  console.log("secondnumber using var after reassign using var "+secondnumber)
  // const is block level scope
  const thirdnumber=30;
  // thirdnumber=35
  // we cannot reassign and redeclare the value by using const so the output will be 30..If we reassign the value of const it will throw the error "Uncaught TypeError:"  
  console.log("thirdnumber using const "+thirdnumber)
  // let is block level scope
  let fourthnumber=40;
  console.log("fourthnumber before reassign using let "+fourthnumber);
  // Reassign the value for fourthnumber
  fourthnumber=45
  console.log("fourthnumber after reassign using let "+fourthnumber);
  if(true){
    console.log("fourthnumber inside the condition block and using let "+ fourthnumber);
    // Assign the value using let
    let fifthnumber=60;
    console.log("fifthnumber before reassign using let "+fifthnumber);
    // reassign the value fifthnumber
    fifthnumber=65
    console.log("fifthnumber after reassign using let "+fifthnumber);
    // Assign the value using var
    var sixthnumber=70;
    // Assign the value using let
    let seventhnumber=80;
    // Assign the value using var for get an output //For Example..
    var sevennumber=80;
  }
  console.log("sixthnumber outside the if condition using var "+ sixthnumber);
  // Solution for that using var we can get an output of 80.
  console.log("seventthnumber using var "+ sevennumber);
  // seventhnumber thrown the error of "Uncaught ReferenceError:Undefined" Because of using let so we got an error..
  console.log("seventhnumber:"+ seventhnumber);
}
// Call function
count()  

//Date and Time declaration
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();