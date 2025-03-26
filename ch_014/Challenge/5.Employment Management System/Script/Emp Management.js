/**************************************************************
 *  Name of the challenge  : Employee Management System       *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer              : Naveen Kumar P                   *
 *  Creation date          : 05/11/2024                       *
 **************************************************************/
// Declaration
let employeeCount = document.getElementById("countId");
let employeeNumber = document.getElementById("empId");
let employeeName = document.getElementById("nameId");
let employeeDepartment = document.getElementById("deptId");
let employeeTable = document.getElementById("supplierTable");
let sortedTable = document.getElementById("sortTable");
let searchedName = document.getElementById("searchId");
let searchedEmployeesList = document.getElementById("filterId");
let resetall = document.getElementsByClassName("reset");
let employeeDetails = [];

function addItems() {
  if (
    !employeeCount.value ||
    !employeeNumber.value ||
    !employeeName.value ||
    !employeeDepartment.value
  ) {
    alert("Please fill all required fields");
    return;
  }
  if (employeeCount.value <= employeeDetails.length) {
    alert("Maximum Employees Reached");
    employeeNumber.value = "";
    employeeName.value = "";
    employeeDepartment.value = "";
    return;
  }
  let employeeList = [
    employeeNumber.value,
    employeeName.value,
    employeeDepartment.value,
  ];

  employeeDetails.push(employeeList);

  let newrow = document.createElement("tr");
  employeeTable.append(newrow);
  let cell1 = document.createElement("td");
  newrow.append(cell1);
  let cell2 = document.createElement("td");
  newrow.append(cell2);
  let cell3 = document.createElement("td");
  newrow.append(cell3);

  cell1.innerText = employeeList[0];
  cell2.innerText = employeeList[1];
  cell3.innerText = employeeList[2];

  employeeNumber.value = "";
  employeeName.value = "";
  employeeDepartment.value = "";
}

function sort() {
  if (employeeDetails.length === 0) {
    alert("There is no employee List to sort");
    return;
  }

  employeeDetails.sort((a, b) =>
    a[1].toUpperCase().localeCompare(b[1].toUpperCase())
  );

  sortedTable.innerHTML = "";

  employeeDetails.forEach((employee) => {
    let newRow = document.createElement("tr");
    sortedTable.appendChild(newRow);

    let cell1 = document.createElement("td");
    cell1.textContent = employee[0];
    let cell2 = document.createElement("td");
    cell2.textContent = employee[1];
    let cell3 = document.createElement("td");
    cell3.textContent = employee[2];
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
  });
}

function employeeSearch() {
  let searchedEmployees = employeeDetails.find(
    (employee) => employee[1] === searchedName.value
  );
  
  !searchedName.value
    ? alert("Enter the name to search")
    : !searchedEmployees
    ? alert("Name is not present")
    : (searchedEmployeesList.value += `${searchedEmployees}\n`);
  searchedName.value = "";
}

function reset() {
  for (let iterate = 0; iterate < resetall.length; iterate++) {
    resetall[iterate].value = "";
    resetall[iterate].innerHTML = "";
  }
  employeeDetails = [];
}
// Screen date and time declaration.
let displayDate = new Date();

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});
