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

