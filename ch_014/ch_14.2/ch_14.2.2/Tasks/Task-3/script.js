// Use object destructuring to extract the following information from the employee object: 1. The employee's id, name, and role properties. 
// 2. The employee's email and phone from the nested contact object.

const employee = {
  id: 12345,
  name: "Anu",
  role: "Project Manager",
  department: "Marketing",
  location: "Çhennai",
  contact: {
    email: "anu@company.com",
    phone: "555-1234",
  },
  isActive: true,
};

const {id,name,role,contact:{email,phone}} = employee;
console.log(`Id : ${id}, Name : ${name}, Role : ${role}, Email : ${email}, Phone Number : ${phone}`);
