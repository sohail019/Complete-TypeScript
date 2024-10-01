//* Interfaces - Used to describe the shape of an object, or the shape of a function...

function abc(a:number, b:string, c:boolean):void{
    console.log("Hello")
}

abc(12, "Sohail", true)

// Above example was normal function with parameters and return type but what if we want object as parameter

interface Person {
    name:string,
    email: string,
    age: number,
    gender: string
}
function person(obj: Person){
    console.log(obj.name)
}

person({name: "sohail", email: "sohail@gmail.com", age: 23, gender: "male"})


// * For Optional - we can use ?
interface User {
    name: string,
    email: string,
    age: number,
    gender?: string
}

function user(obj: User){}

user({name: "sohail", email: "sohail@gmail.com", age: 23})

//* Extending Interfaces - we can use extends keyword to extend interfaces

interface Admin extends User{
    admin: boolean
}

function profile(obj: Admin){
    console.log(obj.name)
    console.log(obj.email)
    console.log(obj.age)
    console.log(obj.gender)
    console.log(obj.admin)
}

//* Merged Interfaces example

interface Abcde {
    name: string
}

interface Abcde {
    email: string
}

function abcde(obj: Abcde){
    obj.name
    obj.email
}
//! Above example has issue as we cannot keep same name in different interfaces..

//* Type Aliases - used to create aliases for a type.. 

type sankhya = number
let num1: sankhya

//? but this above example is senseless to understand.. let's see how we can use type aliases  to do it..

let anything: string | number | null

//* instead of that we can use type aliases
type value = string | number | null
let anythingg: value

//? we can use this in function argument too
function anythinggg(obj: value){}
anythinggg("sohail")
anythinggg(98)

//* Intersection Types - used to combine multiple types into one

type User2 = {
    name: string,
    email: string
}

type Admin2 = User2 &  {
    getUserDetails(user: string): void
}

function getUser(obj: Admin2){
    obj.getUserDetails("Sohail")
}

//todo: Key Differences of Type and Interface

//* 1 - Object and Non Object types:
// ?- Type Alias ko ham objects ke sath sath primitive types, union types(multiple), tuples, functions ke liye use kr sakte hai.

type ID = number | string //? works
type Coordinates = [number, number] //? works

//? - Interface ko sirf object ke liye use kiya jaa sakta hai. 

//* 2 - Extending
// ?- Interface ko ham inherit extend kar sakte hai dusre interface se, ye feature interface ke andar naturally aata hai..

interface Character {
    name: string
}

interface Employee extends Character{
    employeeID: number
}

let emp:Employee = {
    name: "Sohail",
    employeeID: 123
}

// ?- Type Aliases ko extend karne ke liye hamein intersection (&) operator ka use karna padhta hai.

type PersonAlias = {
    name: string
}

type EmployeeAlias = PersonAlias & {
    employeeID: number
}

let empAlias: EmployeeAlias = {
    name: "Sohail",
    employeeID: 123
}

//* 3 - Declaration Merging

// ?- Interfaces supports Declaration merging :  Matlab ek interface ko multiple jagah declare kar sakte hai, aur TS unko merge kar deta hai

interface UserDetail {
    name: string
}

interface UserDetail {
    age: number
}

interface UserDetail {
    isMarried: boolean
}

let userDetail: UserDetail = {
    name: "Sohail",
    age: 22,
    isMarried: false
}

// ?- Type Aliases mein aisa nahi hota, ham ek hi naam se multiple types define nahi kar sakte

type EmployeeDetails = {
    name: string
}

//! Error: Duplicate Identifier: EmployeeDetails
// type EmployeeDetails = {
//     age: number
// }


//* When to Use What??

//todo: Interfaces ko use kar sakte hai jab hamein mostly objects ke structure ko define karna hai, aur inhertitance ka feature chahiye..

//todo: Type Aliases ko use kar sakte hai jab hamein complex types ya non object types define karne hai jasie union types, primitive types ya tuples