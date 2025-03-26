let inputArrayOfObject = [
    {
        name : "Anu",
        age : 29
    },
    {
        name : "Banu",
        age : 25
    }
] 

let unsortedArray = inputArrayOfObject.sort((firstNumber , secondNumber) => firstNumber.age - secondNumber.age);
let sortedArray = unsortedArray.map(item => ` ${item.age}`)
console.log(sortedArray.join(","));

// for(let element in inputArrayOfObject){
//     console.log(inputArrayOfObject[element].age);
// }

// inputArrayOfObject.forEach(function(element){
//     console.log(element.age)
// })