const studentMarks = {
  tamil: 99,
  maths: 94,
  english: 88,
};

let sum = 0;
for (let element in studentMarks) {
  sum += studentMarks[element];
}
console.log(sum);
