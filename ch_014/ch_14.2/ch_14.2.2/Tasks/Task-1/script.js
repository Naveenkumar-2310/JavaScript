const students = [
  { name: "Anu", age: 22, marks: 85 },
  { name: "Banu", age: 20, marks: 92 },
  { name: "Cathy", age: 23, marks: 78 },
  { name: "Deepa", age: 21, marks: 88 },
  { name: "Ezhil", age: 22, marks: 91 },
];

// 1.Use object destructuring inside a for...of loop to extract the name and marks of each student.
let totalMarks = 0;
for (let { name, marks } of students) {
  console.log(`Name : ${name}, Mark : ${marks}`);
  marks < 90 ? totalMarks++ : totalMarks;
}
console.log(totalMarks);


// 2.Calculate the total marks of students whose marks are below 90.
// const totalMarks = students.reduce((accumulator, currentvalue) => {
//   return currentvalue.marks < 90 ? accumulator + 1 : accumulator;
// }, 0);
// console.log(`Number of students mark below 90 : ${totalMarks}`);
