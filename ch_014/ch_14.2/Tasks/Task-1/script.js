function studentDetails (name,id,department){
    this.name = name,
    this.id = id,
    this.department = department,
    this.display = function(){
        console.log(this);    
    }
}
let student1 = new studentDetails("Naveen",1,"FrontEnd");
let student2 = new studentDetails("Nithish",2,"IT");
student1.display()
student2.display()