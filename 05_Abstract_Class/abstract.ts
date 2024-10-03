// * Define Abstract Class
// Abstract Class ek aisi class hoti hai jismein kuch methods ka implementation hota hai, aur kch methods sirf declare kiya jaate hai (inka implementation nahi hota ).
// Abstract class ka use ham tab karte hai jab hamein ek common structure chahiye hota hai, lekin kch details ko aage wali (child) classes par chorh dete hai.
//? Abstract class ko direct instantitate nahi kar sakte (ham abstract class ka direct object nahi bana sakte)
//? Abstract Methods aise methods hote hai jinhe sirf declare kiya jaata hai, aut child class ko unko implement karna padhta hai!

// * Syntax

abstract class ClassName {
    //Concrete method (with implementation)
    method1(){
        // some code
    }

    // Abstract method (without implementation)
    abstract method2(): void
}

//* Code Example

abstract class Animal {
    
    // Concrete method
    move() {
        console.log("Animal is Moving");
    }

    //Abstract Method
    abstract makeSound():void
}

//! Error: Cannot create an instande of abstract class
// let animal = new Animal()

class Dog extends Animal {
    // IMplementing abstract method
    makeSound() {
        console.log("Dog barks");
    }
}

let myDog = new Dog()
myDog.move() //* The Animal is Moving
myDog.makeSound() //* Dog Barks


//? WHy to use Abstract Class
// Abstract class ka use tab hota hai jab ham partially implemented functionality dena chahhte h, aur subclass ko force karna chahte h ki wo apna specific behavior implement karein.
//* For example, agar hamein ek Shape class banana hai jis mein har shape ka area() different hoga, to ham abstract method bana sakte hai taaki sab shapes ko apna area calculate karna pade.

abstract class Shape {
    abstract area():number

    describe(){
        console.log("This is a shape.")
    }
}

class Circle extends Shape{
    radius: number

    constructor(radius:number){
        super()
        this.radius = radius
    }

    area(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Square extends Shape{
    side: number

    constructor(side:number){
        super()
        this.side = side
    }

    area(): number {
        return this.side * this.side
    }
}

class Rectangle extends Shape{
    constructor(public length: number, public breadth: number){
        super()
    }

    area(): number {
        return this.length * this.breadth
    }
}

let circle = new Circle(5)
console.log(circle.area());

let square = new Square(5)
console.log(square.area())

let rectangle = new Rectangle(5, 2)
console.log(rectangle.area());
