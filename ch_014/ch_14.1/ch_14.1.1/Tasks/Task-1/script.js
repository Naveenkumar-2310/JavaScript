let employees = [
    { id: 111, name: "Chelsea Foster", years: 7 },
    { id: 102, name: "Aggie Sparling", years: 13 },
    { id: 123, name: "Timmy Matthews", years: 23 },
    { id: 119, name: "Emmet Foster", years: 22 },
  ];
  let totalYears = employees.reduce(function(accumulator,currentValue){
    return accumulator + currentValue.years
  },0)
  console.log(totalYears);