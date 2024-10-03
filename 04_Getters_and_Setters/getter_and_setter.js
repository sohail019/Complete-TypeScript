"use strict";
//* Definition
// Getter and Setter TypeScript mein classes ke andar ek special methods hote hai jo objects ki properties ko control karne ke liye use hote hai, ye hamein encapsulation aur data validation karne mein madad karte hai, bina directly property ko modify kiye
// * By Default Getter and Setter
class UserDetail {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName() {
        this.name = "Sohrab";
    }
}
let u1 = new UserDetail("Sohail", 22);
console.log(u1.getName());
u1.setName();
console.log(u1.getName());
// * Actual Getter and Setter
class Profile {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = "Sohrab Khan";
    }
}
let p1 = new Profile("Sohail Shaikh", 22);
console.log(p1.name);
p1.name = "Sohrab";
console.log(p1.name);
