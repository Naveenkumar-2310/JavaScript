let result = document.getElementById("resultId");
let arrayNumber = [10,20,30,40,50];
let tempNumber = 0;
function averageNumber  (index)  {
    // let [a,b,c,d,e] = arrayNumber;
    // let tempNumber = a + b + c + d + e;
    // let average = tempNumber / arrayNumber.length;
    // result.innerHTML = average;
    
    if(index >= arrayNumber.length){
        return;
    }
    tempNumber += arrayNumber[index] / arrayNumber.length;
    averageNumber (index + 1)
}

averageNumber(0)
result.innerHTML = tempNumber;