const marks = [85, 92, 78, 88, 91];

// 1.Using array destructuring, Extract the first, second, and fifth test marks into variables named firstMark, secondMark, and fifthMark. 
const [firstMark,secondMark,,,fifthMark] = marks

// 2. Add these three marks together and store the result in a variable called totalMarks. 
const totalMarks = firstMark + secondMark + fifthMark
// 3. Log the value of totalMarks.
console.log(`Sum of three marks : ${totalMarks}`);

