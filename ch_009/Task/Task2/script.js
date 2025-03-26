// let newButton = document.createElement("button");
// newButton.textContent = "Click";
// document.body.append(newButton);
// newButton.onclick = function () {
//   let imageFile = document.createElement("img");
//   imageFile.setAttribute("src", "JS.png");
//   let resultdiv = document.createElement("div");
//   resultdiv.appendChild(imageFile);
//   document.body.appendChild(resultdiv);
// };

// Button was clicked multiple times Image will be shown only one time;
// Method_1 (div is created outside the function then empty the div then it is print the img then empty then print the img)
let newButton = document.createElement("button");
newButton.textContent = "Click";
document.body.append(newButton);
let resultdiv = document.createElement("div");
newButton.onclick = function () {
  resultdiv.innerHTML = "";  
  let imageFile = document.createElement("img");
  imageFile.setAttribute("src", "JS.png");
  resultdiv.appendChild(imageFile);
  document.body.appendChild(resultdiv);
};

// Method_2 (Create function for shown image then addEventListener will be removed after the function Will be executed)
// let newButton = document.createElement("button");
// newButton.textContent = "Click";
// document.body.append(newButton);

// newButton.addEventListener("click", showImage);

// function showImage() {
//   let imageFile = document.createElement("img");
//   imageFile.setAttribute("src", "JS.png");

//   let resultdiv = document.createElement("div");
//   resultdiv.appendChild(imageFile);
//   document.body.appendChild(resultdiv);

//   newButton.removeEventListener("click", showImage);
// }

// Method_2 (Button Disabled)
// let newButton = document.createElement("button");
// newButton.textContent = "Click";
// document.body.append(newButton);

// newButton.onclick = function () {
//     let imageFile = document.createElement("img");
//     imageFile.setAttribute("src", "JS.png");

//     let resultdiv = document.createElement("div");
//     resultdiv.appendChild(imageFile);
//     document.body.appendChild(resultdiv);

//     newButton.disabled = true;
// };
