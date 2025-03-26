 //Validate function
 function calculate(){

    // Declaration of variable
    let displaynumber = document.getElementById("firstNumber").value;
    let displayResult = document.getElementById("displayMessage");

    // If condition
    if(!displaynumber || displaynumber > 10){
        alert("Please enter the number below 10");
        return
    }

    // Initializing varaiable
    let sum = 0; 
    // For loop 
    for (let i =1; i <= displaynumber; i++){
        sum += i;
    }
    // Display result
    displayResult.innerHTML = sum;
}

//print the true statement
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();
let displayNumber = document.getElementById("firstNumber");
