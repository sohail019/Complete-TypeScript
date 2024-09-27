//? Basic Types
/*
- Primitive Types: (number, string, boolean)
- Arrays
- Tuples
- Enums
- Any, Void, Null, Undefined, Never
*/

//* Numbers
let num = 10
// num = "Sohail" //!Error: String is not assignable to number

let num2: number = 10

//* String
let str:string = "Sohail"

//* Booelan
let bool:boolean = true

//* Array

let mixedArr = [12,23,345,45, "Sohail"] //! Not error, but this is not correct method to use array.. it is a bad practice. because we can not add any other type in array without changing the type of array. 

let correctNumArr: number[] = [12,23,34,45,65]
let correctStrArr: string[] = ["Sohail", "Salman"]


//* Tuples - Array with fixed length, and each element can be of different type..

let tuple: [number, string] = [10, 'Sohail']
// let wrongTuple: [number, string] = [10, 10] //! Error: String is not assignable to number

//* Enums - Used to define a set of named constants, which can be referred to by a value instead of the constant name.

enum UserRole {
    Admin = "admin",
    User = "user",
    Guest = "guest",
    SuperAdmin = "superAdmin"
}

UserRole.Admin

//* Any - It is used to tell the compiler that the variable can be of any type.
let anyVar;
anyVar = 10
anyVar = true
anyVar = "Sohail"
anyVar.toUpperCase()

//* Unknown - It is used to tell the compiler that the variable can be of any type.

let unknownVar:unknown;
unknownVar = 10
unknownVar = true
unknownVar = "Sohail"

//! Error: Property 'toUpperCase' does not exist on type 'unknown'
// unknownVar.toUpperCase() 
if(typeof unknownVar === "string") unknownVar.toUpperCase()

//* Void - It is used to tell the compiler that the function will not return anything.

function abcd():number {
 return 12
}

function efgh():void{
    console.log("Sohail")
}

//* Null - It is used to tell the compiler that the variable can be null.
let nullVar:null;

//* Undefined - It is used to tell the compiler that the variable can be undefined.
let undefinedVar:undefined;

//* Never - It is used to tell the compiler that the function will never return.

function abc(){
    while(true){}
}
abc()
console.log("Hello");

function def():never{
    while(true){}
}
def()
console.log("Hello");

