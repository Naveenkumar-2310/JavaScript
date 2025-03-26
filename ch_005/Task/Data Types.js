//Create an Object with Book Details
 const Bookdetails={
  BookName:"Agnisiragugal",
  AuthorName:"Abdul Kalam",
  Publishedyear:2003
 }
 console.log("Name of the Book : " + Bookdetails.BookName);
 console.log("Name of the Author : " + Bookdetails.AuthorName);
 console.log("Published year: " + Bookdetails.Publishedyear);
  //Date and Time declaration
  let displayDate = new Date();
  document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
  document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();