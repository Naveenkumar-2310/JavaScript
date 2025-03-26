/**************************************************************
 *   Name of the challenge: Students Top Mark Calculator      *
 *                 Chapter: 12                                *
 *                 Maintenance history                        *
 *            Developed by: Naveen kumar P                    *
 *           Programmed by: Naveen Kumar P                    *
 *           Creation Date: 19/10/2024                        *
 **************************************************************/
let arrayOfStudents = []; 
let markArray = []; 
let numberOfStudents = document.getElementById("sizeId");
let studentId = document.getElementById("keyId");
let studentName = document.getElementById("nameId");
let studentMarks = document.getElementById("enterMarkId");
let pushBtn = document.getElementById("addToArray");
let arrayMarks = document.getElementById("markArrayId");
let addBtn = document.getElementById("addToObject");
let objectDisplay = document.getElementById("displayObject");
let topMarksDisplay = document.getElementById("displayArrayitems");
let calculateBtn = document.getElementById("calculateId");
let resetall = document.getElementsByClassName("reset");

// Push mark into the array for the current student
pushBtn.addEventListener("click", function () {
  if(parseInt(numberOfStudents.value) <= arrayOfStudents.length){
    alert("Maximum Student reached");
    studentId.value = "";
    studentName.value = "";
    studentMarks.value = "";
    return;
  }
  let markValue = parseInt(studentMarks.value);
  if(!markValue || !studentId.value || !studentName.value){
    alert("Please Enter all required fields");
    return;
  }
  if(studentMarks.value > 100){
    alert("Enter Mark below 100");
    studentMarks.value = "";
    return;
  }
  markArray.push(markValue);
  arrayMarks.value = markArray.join(", ");
  studentMarks.value = ""; // Clear the mark input field
});

// Add student with marks into the objects array
addBtn.addEventListener("click", function () {
  if(!studentName.value){
    alert("Please enter marks");
    return;
  }
  // Create a student object
  let student = {
    id: studentId.value,
    name: studentName.value,
    marks: markArray, 
  };

  // Push the student object to the array of students
  arrayOfStudents.push(student);

  // Display the array of student objects in a formatted way
  objectDisplay.value = arrayOfStudents.map(
    (stud) =>
      `ID: ${stud.id}, Name: ${stud.name}, Marks: ${stud.marks.join(", ")}`
  ).join("\n");
  studentId.value = " ";
  studentName.value = "";
  markArray = [];
});

calculateBtn.addEventListener("click", function () {
  if(!numberOfStudents.value){
    alert("Please fill all required fields");
    return;
  }
  if(!arrayOfStudents.length > 0){
    alert("No mark to find Maximum Number")
    return;
  }
  let topMarks = arrayOfStudents.map((studentTopMark) => {
    // Check if the marks array is not empty
    if (studentTopMark.marks.length > 0) {
      return Math.max(...studentTopMark.marks);
    } else {
      return "No marks"; 
    }
  });

  topMarksDisplay.value = topMarks.join(", ");
});

// Reset Function
function reset(){
  for(let iterate = 0;iterate < resetall.length;iterate++){
    resetall[iterate].value = "";
    markArray = [];
    arrayOfStudents = [];
  }
}