let input = document.getElementById("inputId");
let addButton = document.getElementById("addId");
let result = document.getElementById("resultId");
const error = () => {
    if (!input.value) {
        alert("Please Enter Task");
        return true;
    }
    return false;
}

addButton.onclick = function () {
    if(error())return;
  let newlist = document.createElement("li");
  result.appendChild(newlist);

  newlist.textContent = input.value;
  input.value = "";
};
