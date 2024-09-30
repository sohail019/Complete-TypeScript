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
