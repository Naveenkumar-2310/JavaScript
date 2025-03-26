let inputArray = [1,2,7,-3,-5]

let sumOfpositives = inputArray.reduce((accumulator,currentValue) => {
    return (currentValue > 0 ) ? accumulator + currentValue : accumulator
},0)

console.log(sumOfpositives);

// let sum = 0;

// function sumOfpositives(array){
//     for(let number of array){
//         if(number > 0){
//             sum += number
//         }
//     }
//     return sum
// }

// console.log(sumOfpositives(inputArray));