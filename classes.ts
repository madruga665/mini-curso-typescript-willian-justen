class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

class CharAccount extends UserAccount {
  private _nickname: string;
  private _level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this._nickname = nickname;
    this._level = level;
  }

  get level() {
    console.log('-----GET-----')
    return this._level;
  }

  set level(value) {
    this._level = value;
  }

  logCharDetails(): void {
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
