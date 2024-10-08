//todo: Class (Blueprint for creating objects)

//* - Class ek template hai jismein ham properties aur methods define karte hai, jo kisi object ka structure aur behavior define karta hai.
// * - Object: Class ka ek instance, jo properties aur methods ko use karta hai.
//*  Constructor: Special method jo object creation ke time run hota hai.
class BottleMaker {
    constructor(public brand: string, public price: number, public color: string, public material: string){}
}

let b1 = new BottleMaker("Milton", 1500, "Black", "Metal")
console.log(b1);
let b2 = new BottleMaker("Cello", 100, "Transparent", "Plastic")
console.log(b2);


//! Tricky one to create
class Musicc {
    public name;
    public artist;
    public thumbnail;
    public duration;
    public isFree;

    constructor(name:string, artist:string, thumbnail:string, duration:number, isFree:boolean){
        this.name = name
        this.artist = artist
        this.thumbnail = thumbnail
        this.duration = duration
        this.isFree = isFree
    }
}

let m1 = new Musicc("Lose Yourself", "Eminem", "lose_yourself.jpg", 200, true)
console.log(m1);


//? Easy example to create
class Music {
    constructor(public name:string, public artist: string, public thumbnail:string = "thumbnail.jpg", public duration:number, public isFree: boolean){}
}

let m2 = new Music("Chal Chaii ya Chaiiya", "Sharukh Khan", " ", 100, false)
console.log(m2);

m2.name = "Kuch Aur Music"

m2.artist = "halua"

//! this manipulation should not happen

//* Access Modifiers
//? public  
class BottleMakerr {
    constructor(public name:string){
        this.name = "Hululu"
        console.log(this.name);
        
    }

    changing() {
        this.name = "Kululu"
        console.log(this.name);
        
    }
}
let bot1 = new BottleMakerr("Milton")
bot1.changing();
console.log(bot1);
bot1.name = "Cello"
console.log(bot1);


class LaptopMaker {
    private hp:string = "HP"
    constructor(public name:string){}
}

class MacMaker extends LaptopMaker {
    constructor(public name:string){
        super(name)
    }

    getValue(){
        console.log(this.name, this.hp)
        //! Property "hp" is private and only accessible withing class "LaptopMaker"
    }
}

let l1 = new MacMaker("Mac Book M1 Air")
l1.getValue()

//? private

class BiscuitMaker {
    constructor(private name:string) {
        this.name = "Bourbon"
    }

    changing(){
        this.name = "Dark Fantasy"
    }
}

let bis = new BiscuitMaker("Parle G")
console.log(bis)
bis.changing()
console.log(bis)
bis.name = "Oreo"
console.log(bis)
//! It will give an instruction by typescript that this Property "name" is private and only accessible withing class "BiscuitMaker"


// ? protected
class MobileMaker {
    constructor(protected name:string) {

    }
}

class IOSMObileMaker extends MobileMaker {
    constructor(protected name:string){
        super(name)
    }

    changeName(){
        this.name = "Apple"
    }
}

let mob = new IOSMObileMaker("IPhone")
console.log(mob)

mob.name = "Samsung"
//! It will give an instruction by typescript that Property name is protected and only accessible within class "IOSMobileMaker" and it's subclass
console.log(mob)


//* Read Only Properties
class User {
    constructor(public readonly name:string){}
    //! Here, it will give and error of All Declaratations of "name" must have identical modifiers 

    changeName(){
        this.name = "HAHAHAH"
    }
}

let user1 = new User("Sohail")
console.log(user1)
user1.changeName()
console.log(user1)

//* Optional Parameter

class Userr {
    constructor(public name:string, public age:number, public gender?:string){}
}

let userr1 = new Userr("Sohail", 22, "Male")
console.log(userr1)
let userr2 = new Userr("Sohrab", 21) //! It will give an error because of missing "gender" parameter
//? We can make gender parameter as optional by adding ? in front of it
//* Now it will work
console.log(userr2);


//* Static Members

class MyLibrary {
    static version:number =  1.0;
}

console.log(MyLibrary.version)
