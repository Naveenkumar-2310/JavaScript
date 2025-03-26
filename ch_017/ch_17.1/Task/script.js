function sayHello(name,callback){
    console.log(`Hello ${name}`);
    callback()
}
function sayGoodBye(){
    console.log(`Goodbye`);
}
sayHello("Naveen",sayGoodBye)