/***************************************************************************************
 *  Name of the Task       : Type Conversion                                           *
 *  Developed for          : SOFT TECH ASHRAM                                          *
 *  Chapter                : 08                                                        *
 *                    Maintenance History                                              *
 *  Developer              : Naveen kumar P                                            *
 *  Creation Date          : 28/09/2024                                                *
 ***************************************************************************************/
//  Create an object named bookDetails with the following properties: BOOK NAME,AUTHOR NAME,PUBLISHED YEAR,PRICE.
//  1.Use the JSON.stringify method to convert the bookDetails object into a JSON-formatted string.
  
//Code Statements
let result = document.getElementById("displayResult");
const bookDetails = {bookName : "Wing Fire" , AuthorName : "A.P.J.AbdulKalam" , PublishedYear : 2004 , Price : 240}
const jsonstring = JSON.stringify(bookDetails);
result.innerHTML = jsonstring;