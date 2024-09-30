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
