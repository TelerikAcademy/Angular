interface IAnimal {
    // Unlike C#, the naming convention I<interface> is not popular in TypeScript
  readonly name: string;
  age: number;
  speak: () => string; // a function that accept no parameters and returns string
}

class Animal implements IAnimal {    
  constructor( // Constructor shorthand
    public readonly name: string, 
    public age: number) 
  { }

  speak() {
      return `My name is ${this.name} and I am ${this.age} years old`;
  }
}

class Cat extends Animal {
  constructor(name: string, age: number) { 
    super(name, age);
  }

  speak() {
    return "Purrs... " + super.speak(); // Remember to use super. prefix. Try it without it :)
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) { 
    super(name, age);
  }

  speak() {
    return "Woofs... " + super.speak();  // Remember to use super. prefix. Try it without it :)
  }
}

let meow = new Cat("Pesho", 10);
let woof = new Dog("Gosho", 3);

console.log(meow.speak());
console.log(woof.speak());
