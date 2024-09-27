"use strict";
//? Basic Types
/*
- Primitive Types: (number, string, boolean)
- Arrays
- Tuples
- Enums
- Any, Void, Null, Undefined, Never
*/
//* Numbers
let num = 10;
// num = "Sohail" //!Error: String is not assignable to number
let num2 = 10;
//* String
let str = "Sohail";
//* Booelan
let bool = true;
//* Array
let mixedArr = [12, 23, 345, 45, "Sohail"]; //! Not error, but this is not correct method to use array.. it is a bad practice. because we can not add any other type in array without changing the type of array. 
let correctNumArr = [12, 23, 34, 45, 65];
let correctStrArr = ["Sohail", "Salman"];
//* Tuples - Array with fixed length, and each element can be of different type..
let tuple = [10, 'Sohail'];
// let wrongTuple: [number, string] = [10, 10] //! Error: String is not assignable to number
//* Enums - Used to define a set of named constants, which can be referred to by a value instead of the constant name.
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["User"] = "user";
    UserRole["Guest"] = "guest";
    UserRole["SuperAdmin"] = "superAdmin";
})(UserRole || (UserRole = {}));
UserRole.Admin;
//* Any - It is used to tell the compiler that the variable can be of any type.
let anyVar;
anyVar = 10;
anyVar = true;
anyVar = "Sohail";
anyVar.toUpperCase();
//* Unknown - It is used to tell the compiler that the variable can be of any type.
let unknownVar;
unknownVar = 10;
unknownVar = true;
unknownVar = "Sohail";
//! Error: Property 'toUpperCase' does not exist on type 'unknown'
// unknownVar.toUpperCase() 
if (typeof unknownVar === "string")
    unknownVar.toUpperCase();
//* Void - It is used to tell the compiler that the function will not return anything.
function abcd() {
    return 12;
}
function efgh() {
    console.log("Sohail");
}
//* Null - It is used to tell the compiler that the variable can be null.
let nullVar;
//* Undefined - It is used to tell the compiler that the variable can be undefined.
let undefinedVar;
//* Never - It is used to tell the compiler that the function will never return.
function abc() {
    while (true) { }
}
abc();
console.log("Hello");
function def() {
    while (true) { }
}
// def()
console.log("Hello");
//* Type Interference(Type ka automatic andaza lagana)
//?  TypeScript mein agar ham directly kisi variable ko initialize karte h bina uska type specify kiye, to TypeScript khud andaza laga leta hai ki is variable ka type kya hoga. Is process ko Type Inference kehte hain.
let a = 10;
let b = true;
let c = "Sohail";
//* Type Annotations - (Type ka manually declare karna)
// ? Kabhi-kabhi hamein TypeScript ko specifically batana padta hai ki kis type ka data ek variable hold karega. Isse ham manually type define kar sakte h using Type Annotations. Yeh useful hota hai jab ham variable ko pehle declare karte h aur baad mein usko value assign karte h, ya jab TypeScript ko correctly infer karna mushkil ho.
let d = 10;
let e = true;
let f = "Sohail";
//? Ham isey function ke parameter aur uske return ke lie bhi use kr skte hai
function xyz(a, b) {
    return a + b;
}
