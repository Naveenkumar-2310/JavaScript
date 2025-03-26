function getUserData() { 
    return new Promise((resolve,reject)=>{
    resolve("hello world")
    reject("Empty")
});
    
} 



// Async function to fetch and log user data 
async function fetchUserData(){
// Wait for the promise to 
try  { 
    console.log('Fetching user data...'); 
    const user = await getUserData(); 
    console.log('User data fetched successfully:', user); 
}
// Handle any error that occurs 
catch (error) {
     console.error('Error:', error); 
    } 
}
// Call the async function 
fetchUserData();

// Output 
// First of all it will fetchUserData() then 
// it will go to try in try it will print Fetching user data then user prints getUserData prints Hello World 
// user will be undefined 
// If data is rejected catch will be work
// User is undefined because in getUserData() function simply prints Hello World it does not return any value so it will return undefined
// Hello world
// Fetching user data

// Solution for this is we return any value in getUserData function user value will not be undefined