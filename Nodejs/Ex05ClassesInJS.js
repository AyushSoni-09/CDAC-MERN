// 3 ways to create objects in JS
/////////////////////// Singleton Object /////////////////////////////
const emp ={
    id: 123 ,
    name : "Ayush",
    address:" Bangalore"
}

const emp2 = emp ;
emp2.address = " Pune "  // this will change the address of emp too.

console.log(emp);
console.log(emp2);

///////////////////// Using Funstion Type /////////////////////////////////

const empRec = function( id , name , address){
    this.empId = id ;
    this.empName = name ;
    this.empAddress = address;
}


const obj1 = new empRec(123 , "Ayush" , " Bangalore")
const obj2 = new empRec(124 , "Devam" , "Pune");

obj2.empAddress="Mysore";

console.log(obj1);
console.log(obj2);


////////////////////////////Using ES6 Syntax ///////////////////////////////

class Customer{
    constructor( id , name , address){
        this.id = id;
        this.name = name ; 
        this.address = address; 
    }
}

const temp = new Customer(123 , " Ayush  " , "Bangalore")
console.log(temp);
const temp2 = new Customer(124, "Devam" , " Gujarat")
temp2.address = "Surat"
console.log(temp2);

// similar to function type , but the more readable with keyword class introduced in ES6 version of JS



