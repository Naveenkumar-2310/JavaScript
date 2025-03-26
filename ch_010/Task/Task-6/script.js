let stringName = "JavaScript";
let reversedString = "";

// for(let str of stringName){
//     reversedString = str + reversedString;
// }
// console.log(reversedString);

for(let i = 0;i < stringName.length;i++){
    reversedString = stringName[i] + reversedString
}
console.log(reversedString);
