"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this._nickname = nickname;
        this._level = level;
    }
    get level() {
        console.log('-----GET-----');
        return this._level;
    }
    set level(value) {
        this._level = value;
    }
    logCharDetails() {
        console.log(`The player ${this.name} has the char ${this._nickname} at level ${this._level}`);
    }
}
const luciano = new UserAccount("Luciano", 35);
console.log(luciano);
luciano.logDetails();
const madruga665 = new CharAccount("Luciano", 35, "madruga665", 665);
console.log(madruga665);
madruga665.level = 666;
console.log(madruga665);
madruga665.logCharDetails();
