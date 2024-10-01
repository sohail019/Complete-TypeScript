"use strict";
//* Interfaces - Used to describe the shape of an object, or the shape of a function...
function abc(a, b, c) {
    console.log("Hello");
}
abc(12, "Sohail", true);
function person(obj) {
    console.log(obj.name);
}
person({ name: "sohail", email: "sohail@gmail.com", age: 23, gender: "male" });
function user(obj) { }
user({ name: "sohail", email: "sohail@gmail.com", age: 23 });
function profile(obj) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.age);
    console.log(obj.gender);
    console.log(obj.admin);
}
function abcde(obj) {
    obj.name;
    obj.email;
}
let num1;
//? but this above example is senseless to understand.. let's see how we can use type aliases  to do it..
let anything;
let anythingg;
//? we can use this in function argument too
function anythinggg(obj) { }
anythinggg("sohail");
anythinggg(98);
function getUser(obj) {
    obj.getUserDetails("Sohail");
}
let emp = {
    name: "Sohail",
    employeeID: 123
};
let empAlias = {
    name: "Sohail",
    employeeID: 123
};
let userDetail = {
    name: "Sohail",
    age: 22,
    isMarried: false
};
//! Error: Duplicate Identifier: EmployeeDetails
// type EmployeeDetails = {
//     age: number
// }
//* When to Use What??
//todo: Interfaces ko use kar sakte hai jab hamein mostly objects ke structure ko define karna hai, aur inhertitance ka feature chahiye..
//todo: Type Aliases ko use kar sakte hai jab hamein complex types ya non object types define karne hai jasie union types, primitive types ya tuples
