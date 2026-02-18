// This works differently in strict mode and non-strict mode //
"use strict"; // now the code is in strict mode
//this in global scope
//In global space it will always represents the global object.
// This global object will vary from environment to environment.
//In case of browser the global object is window object. In case of node js it is global object.
console.log(this);

// -----------------------------------------------------------------------------------//
//this in function scope
//In strict mode it will be undefined and in non strict mode it will be window object
//if the value of this keyword is undefined or null. the keyword will be replaced by global object only in non-strict mode.
function checkThisInFunction() {
  console.log(this); // depends on strict/non-strict mode. because of this substitution in non-strict mode it is globalObject
}
checkThisInFunction(); //undefined in strict mode.

//this keyword value depends on how the function is called.
// If the funcition is called without any reference of an object then the value of this is undefined.
//if we use window object to call the function then this will be window object in both strict and non-strict mode.
window.checkThisInFunction(); // this will be window object in both strict and non-strict mode

// -----------------------------------------------------------------------------------//
//call apply and bind methods (sharing methods)
const stu1 = {
  firstname: "Balakarthik",
  lastname: "Pendyala",
};
const stu2 = {
  firstname: "Kalyani",
  lastname: "Dhikonda",
};
const stu3 = {
  firstname: "Advaith",
  lastname: "Pendyala",
};
//call method - It invokes the function immediately and we can pass the arguments one by one.
//the first argument is the value of this and rest are function arguments.
let printFullName = function (homeTown) {
  console.log(this.firstname + " " + this.lastname + ", from", homeTown);
};

printFullName.call(stu1, "Hyderabad");
printFullName.call(stu2, "Warangal");
printFullName.call(stu3, "Hyderabad");
//apply method - It invokes the function immediately and we can pass the arguments one by one.
//the first argument is the value of this and rest are function arguments as array.
let printFullName1 = function (homeTown, country) {
  console.log(
    this.firstname + " " + this.lastname + ", from",
    homeTown + ",",
    country
  );
};
printFullName1.apply(stu1, ["Hyderabad", "India."]);

//bind method - It returns a new function with the value of this keyword bound to the first argument passed.
let printFullName2 = function (homeTown, country) {
  console.log(
    this.firstname + " " + this.lastname + ", from",
    homeTown + ",",
    country
  );
};
let printMyName = printFullName2.bind(stu2);
console.log(printMyName);
printMyName("Warangal", "India.");
// -----------------------------------------------------------------------------------//

//If you make a function as a part of object then it is known as method.***

//this inside the objects method
const obj = {
  a: 10,
  x: function () {
    console.log(this); //this will be obj object, this.a will be 10
  },
};
obj.x();

const student1 = {
  name: "Balakarthik",
  printName: function () {
    console.log(this.name);
  },
};
student1.printName();
const student2 = {
  name: "Kalyani",
};
student1.printName.call(student2); // value of this is student2 object

// -----------------------------------------------------------------------------------//
//this in arrow functions
//Arrow functions do not have their own this value.
//they inherit this value from the enclosing lexical context(means how it is defined) at the time they are defined.
const obj1 = {
  a: 10,
  x: () => {
    console.log(this); //this will be window object as arrow function inherits this from lexical context
  },
};
obj1.x();

const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y(); //this will be obj2 object as arrow function inherits this from lexical context
  },
};
obj2.x();
// -----------------------------------------------------------------------------------//
//this inside the DOM element
//The value is the reference to the HTML element itself.

//this inside class, constructors
