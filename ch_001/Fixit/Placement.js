// Declaration
let displayOutput=document.getElementById("displayMessage")
// Output
displayOutput.innerHTML="External Script is displayed"
// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();