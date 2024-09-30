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