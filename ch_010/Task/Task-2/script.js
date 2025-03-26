let arrayList = [10, 20, 100, 40,30];
let max = arrayList[0];

for (let element of arrayList) {
  if (element > max) {
    max = element;
  }
}
console.log(max);
