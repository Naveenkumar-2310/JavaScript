const input = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jennifer", age: 65 },
];
let resultArray = []

let ages = input.map(member => member.age);
let oldAge = Math.max(...ages)
let youngAge = Math.min(...ages)

console.log(`Oldest Family member : ${oldAge}`);
resultArray.push(youngAge)

console.log(`Youngest Family member : ${youngAge}`);
resultArray.push( oldAge)

let differnceAge = oldAge - youngAge;
console.log(`Difference between them is ${differnceAge}`);
resultArray.push(differnceAge)

console.log(resultArray);