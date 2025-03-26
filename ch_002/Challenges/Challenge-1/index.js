/*******************************************************
 *  Name of the challenge  : Validation                *
 *  Developed for          : SOFT TECH ASHRAM          *
 *  Chapter                : 2                         *
 *                     Maintenance History             *
 *  Developer              : Naveen kumar P            *
 *  Creation               : 27/08/2024                *
 *******************************************************/
// DOM Declaration
const resetall=document.getElementsByClassName("reset");
// const declaration
const validation={
  username:document.getElementById("stringId"),
  email:document.getElementById("mailId"),
  credit:document.getElementById("creditId"),
  pan:document.getElementById("panId"),
  gstnumber:document.getElementById("gstId")
}
// error declaration
const error=()=>{
  if(!validation.username.value || !validation.email.value || !validation.credit.value || !validation.pan.value || !validation.gstnumber.value){
    alert("Please fill all required fields");
  }
}
// Main function
function stringFunction(){
  error();
  const usernamepattern=/^\w{5,20}\s$/;
  if(usernamepattern.test(validation.username.value)){
    alert("Please Enter only Characters");
    return;
  }
  const emailpattern=/^\w+@\w+\.\w{2,4}$/;
  if(!emailpattern.test(validation.email.value)){
    alert("Please Enter valid E-mail");
    return;
  }
  const creditpattern=/^(\d{4}\s+\d{4}\s+\d{4}\s+\d{4})$/;
  if(!creditpattern.test(validation.credit.value)){
    alert("Please Enter valid Credit card number!");
    return;
  }

  const pannumberpattern=/^[A-Z]{5}\d{4}[A-Z]{1}$/;
  if(!pannumberpattern.test(validation.pan.value)){
    alert("Please Enter valid PAN card number!");
    return;
  }

  const gstpattern=/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}Z\d{1}$/;
  if(!gstpattern.test(validation.gstnumber.value)){
    alert("Please Enter valid gst number!");
    return;
  }
  else{
    alert("All the information is Valid");
  }
}
// reset function
function reset(){
  for(let i=0; i<resetall.length; i++){
    resetall[i].value="";
  }
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
