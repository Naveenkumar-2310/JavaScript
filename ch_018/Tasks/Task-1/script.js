let object = {
    name : "Naveen",
    Stack : "React js",
    course : {
        current_stack : "JS"
    }     
}

localStorage.setItem("Object",JSON.stringify(object));
let parsedObject = JSON.parse(localStorage.getItem("Object"));
console.log(parsedObject);
