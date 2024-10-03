"use strict";
//todo: Class (Blueprint for creating objects)
//* - Class ek template hai jismein ham properties aur methods define karte hai, jo kisi object ka structure aur behavior define karta hai.
// * - Object: Class ka ek instance, jo properties aur methods ko use karta hai.
//*  Constructor: Special method jo object creation ke time run hota hai.
class BottleMaker {
    constructor(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
}
let b1 = new BottleMaker("Milton", 1500, "Black", "Metal");
console.log(b1);
let b2 = new BottleMaker("Cello", 100, "Transparent", "Plastic");
console.log(b2);
//! Tricky one to create
class Musicc {
    constructor(name, artist, thumbnail, duration, isFree) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.duration = duration;
        this.isFree = isFree;
    }
}
let m1 = new Musicc("Lose Yourself", "Eminem", "lose_yourself.jpg", 200, true);
console.log(m1);
//? Easy example to create
class Music {
    constructor(name, artist, thumbnail = "thumbnail.jpg", duration, isFree) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.duration = duration;
        this.isFree = isFree;
    }
}
let m2 = new Music("Chal Chaii ya Chaiiya", "Sharukh Khan", " ", 100, false);
console.log(m2);
m2.name = "Kuch Aur Music";
m2.artist = "halua";
//! this manipulation should not happen
//* Access Modifiers
//? public  
class BottleMakerr {
    constructor(name) {
        this.name = name;
        this.name = "Hululu";
        console.log(this.name);
    }
    changing() {
        this.name = "Kululu";
        console.log(this.name);
    }
}
let bot1 = new BottleMakerr("Milton");
bot1.changing();
console.log(bot1);
bot1.name = "Cello";
console.log(bot1);
class LaptopMaker {
    constructor(name) {
        this.name = name;
        this.hp = "HP";
    }
}
class MacMaker extends LaptopMaker {
    constructor(name) {
        super(name);
        this.name = name;
    }
    getValue() {
        console.log(this.name, this.hp);
    }
}
let l1 = new MacMaker("Mac Book M1 Air");
l1.getValue();
//? private
class BiscuitMaker {
    constructor(name) {
        this.name = name;
        this.name = "Bourbon";
    }
    changing() {
        this.name = "Dark Fantasy";
    }
}
let bis = new BiscuitMaker("Parle G");
console.log(bis);
bis.changing();
console.log(bis);
bis.name = "Oreo";
console.log(bis);
//! It will give an instruction by typescript that this is not allowed.. but it got run without error.
// ? protected
class MobileMaker {
    constructor(name) {
        this.name = name;
    }
}
class IOSMObileMaker extends MobileMaker {
    constructor(name) {
        super(name);
        this.name = name;
    }
    changeName() {
        this.name = "Apple";
    }
}
let mob = new IOSMObileMaker("IPhone");
console.log(mob);
mob.name = "Samsung";
console.log(mob);
