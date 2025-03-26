const studentDetails = {
    name : "Naveen kumar",
    age : 21,
    address : "Chennai",
    number : 822323
}
let count =0;
for (let element in studentDetails){
    count++;    
}
console.log(count);
