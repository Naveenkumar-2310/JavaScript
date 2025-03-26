/**************************************************************
 *  Name of the challenge   : Pincode Validation              *
 *  Developed for           : VHITECH Training Program        *
 *  Chapter                 : 2                               *
 *               Maintenance History                          *
 *  Developer               :                                 *
 *  Creation date           :     Ticket No:                  *
 **************************************************************/

// DOM Declaration
const result=document.getElementById("resultId");
const resetall=document.getElementsByClassName("reset");
// const Declaration
const pincode={
  pin:document.getElementById("pinId") 
}
// Error declaration
const error=()=>{
  if(!pincode.pin.value){
    alert("Please Enter Pincode!!!");
    return true;
  }
}
// Main function
function stringFunction(){
  if(error())return;
  const pincodepattern=/^\d{6}$/;
  if(!pincodepattern.test(pincode.pin.value)){
    result.value="Pincode is not Valid";
    return;
  }
  if(pincodepattern.test(pincode.pin.value)){
    result.value="Pincode is valid";
    return;
  }
}
// Reset function
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

//Code Logic
