<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# TypeScript OOP
## Writing code that scales

<div class="signature">
    <p class="signature-course">Single-page applications with Angular</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
# Table of contents
- Classes
- Access Modifiers
- Interfaces
- Generics
- Modules

<!-- section start -->
<!-- attr: { class:'slide-section', id:'classes' } -->
# Classes
## Building object templates

# What is a class?

- **Classes** allow us to define complex types
- An example of a **class** in TS:

```ts
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(): string {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

# Inheritance

- Let's take this as a base class:

```ts
class Animal {
    name: string;

    constructor(name: string) { 
        this.name = name; 
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

# Inheritance

- To extend **inherit** a class, we use the `"extends"` keyword, followed by a complex type
    - Use **this** prepend to address the `current` class
    - Use **super** prepend to address the `base` class
    - Variables and methods can be **overriden**
        - Use `super` to call `base` when extending to prevent recursion

# Inheritance

```ts
class Snake extends Animal {
    constructor(name: string) { super(name); }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
```

# Inheritance

- Lets instanciate those classes:

```ts
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

- This will produce the following result:

```md
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

# Accessors

- Allow us to **control** the `data state` in our class
  - We do that by implementing `validations`

```ts
class Employee {
    _fullName: string; // TODO: set private modifier
    get fullName(): string {
        return this._fullName;
    }
    set fullName(value: string) {
        if (value.length > 5) this._fullName = value;
        else throw new Error("Invalid employee name!");
    }
}

let employee = new Employee();
employee.fullName = "Pesho"; // Throws
employee.fullName = "Bob Smith"; // Just right!
```

# Static members

- **Static** members can be accessed through the `type` itself, no need to create an instance
- They hold values that are required for the **whole type**, not the instances

```ts
class Grid {
    static origin = {x: 0, y: 0};
    constructor (public scale: number) { }

    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
```

# Abstract Classes

- `Base classes` from which other classes may be derived
  - They **cannot** be instantiated directly

```ts
abstract class Animal {
    name: string;

    constructor(name: string) { 
        this.name = name; 
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

<!-- section start -->
<!-- attr: { class:'slide-section', id:'modifiers' } -->
# Access Modifiers
## Restrict access to methods and fields

# Public modifier

- Allows a certain member to be accessed from anywhere
  - `public` is the default if no modifier is specified
  - Can be used on fields, functions and constructors

```ts
class Animal {
  public name: string;
  public constructor(theName: string) { 
    this.name = theName; 
  }

  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```

# Private modifier
- Allows a certain member to be accessed only from **within** the current class
  - Can be used on fields, functions and constructors

```ts
class Animal {
    private name: string;
    constructor(name: string) { this.name = name; }
}

let cat: Animal = new Animal("Cat"); 
console.log(cat.name) // Error: 'name' is private;
```

- Allows the usage of encapsulation 
  - Leads to improved readability


# Protected modifier
- Allows a member to be accessed from:
  - **Within** the current class 
  - **And** the class's children
- Can be used on fields, functions and constructors


```ts
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person { ... }
```

# Protected modifier

```ts
class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard: Person = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```

# Readonly modifier

- **Readonly** properties must be initialized at their `declaration` or in the `constructor`

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
```

# Constructor shorthand
- You can use an `access modifier` to shorthand parameters
  - Useful when doing dependency injection


```ts
class Animal {
    constructor(private name: string) { }
}

let cat: Animal = new Animal("Cat"); 
console.log(cat.name) // Error: 'name' is private;
```

<!-- section start -->
<!-- attr: { id:'interfaces', class:'slide-section' } -->
# Interfaces
## Taking OOP to the next level

# What are Interfaces?

- **Interfaces** are just like `classes`
  - But they do not implement functionality
  - And they cannot be instantiated 

```ts
interface Animal {
  readonly name: string;
  age: number;
}

var animal = new Animal(); // Compilation error
```


# Using interfaces

```ts
interface SquareConfig {
    color?: string;
    width?: number;
}

let mySquare = createSquare({color: "black"});

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
```

# Implementing an interface

- Classes must **implement** it

```ts
class Cat implements Animal {
  // Compilation error: Animal does not implement IAnimal
}

class Cat implements Animal {
  public readonly name: string;
  public age: number;
}
```

# Other stuff

- Inside an **interface**, you can also define:
- `Indexers` (index type and return type)

```ts
interface StringArray {
  [index: number]: string;
}
```

- `Function types` (parameters and return type)

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

<!-- section start -->
<!-- attr: { class:'slide-section', id:'generics' } -->
# Generics
## Adding flexibility object templates

# Without Generics

- Without **generics**, we would either have to give the `identity` function a specific `type`:

```ts
function identity(arg: number): number {
    return arg;
}
```

- Or, we could describe the `identity` function using the `any` type:

```ts
function identity(arg: any): any {
    return arg;
}
```

# What are Generics

- **Generics** allow us to create a `class or function` that can work over a `variety` of types rather than a single one
  - This allows users to consume these components and use their own types.

```ts
function identity&lt;T>(arg: T): T {
    return arg;
}

console.log(identity&lt;string>("Pesho")) // Prints Pesho
console.log(identity(new Person("Pesho")) // Type is inferred
```

- We have type-safety inside the function

# Another example

```ts
function log&lt;T>(message: T): void {
  console.log(message.toString());
}

log("Pesho"); // Prints Pesho
log(new Person("Pesho")); // Prints Pesho
```

- Generics can accept multiple types

```ts
function convert&lt;T, N>(obj: T): N {
  return converter.convertTo&lt;N>(obj);
}

convert&lt;string, string>("Pesho"); // returns Pesho
convert&lt;Person, Student>(new Person("Pesho")); 
// returns a Student called Pesho
```

# Creating a generic factory

```ts
class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance&lt;A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!

```

<!-- section start -->
<!-- attr: { id:'modules', class:'slide-section' } -->
# Modules
## Apply SRP to our code

# What is a module?

- **Modules** are executed within their own `scope`, not in the global scope
  - Variables, functions, classes, etc. declared in a module are `not visible` outside the module
  - Unless they are explicitly `exported` using one of the **export** forms.

```ts
// stringValidator.ts file
interface StringValidator {
    isAcceptable(s: string): boolean;
}
```

# Exporting

- An example of a module being exported:

```ts
// stringValidator.ts file
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
```

- Exports can also be renamed:

```ts
// ZipCodeValidator.ts file
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator as mainValidator };
```

# Export wrapping

- You can also **wrap** exports from multiple files into a single file
  - This file is called `barrel` file

```ts
// index.ts file
export * from "./stringValidator"; // exports interface 'StringValidator'
export * from "./zipCodeValidator";  // exports class 'ZipCodeValidator'
```

# Importing

- **Importing** is just about as easy
  - It's done through using one of the `import` forms
  ```ts
    import { ZipCodeValidator } from "./ZipCodeValidator";
    let myValidator = new ZipCodeValidator();
  ```
  - It can also be renamed
  ```ts
    import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
    let myValidator = new ZCV();
  ```
  - Or you can take the entire module in a var
  ```ts
    import * as validator from "./ZipCodeValidator";
    let myValidator = new validator.ZipCodeValidator();
  ```

<!-- section start -->
<!-- attr: {id: 'questions', class: 'slide-section', hasScriptWrapper:true} -->

# Questions
<!-- <img class="slide-image" showInPresentation="true"  src="imgs/questions.jpg" style="height:40%; left:30%; top:30 border-radius: 10px;" /> -->


<!-- attr: { showInPresentation: true, hasScriptWrapper: true} -->
# Free Training @ Telerik Academy

- Angular Course
  - [Angular](http://academy.telerik.com/student-courses/web-design-and-ui/spa-applications-with-angular/about)
- Telerik Software Academy
  - [telerikacademy.com](https://telerikacademy.com)
- Telerik Academy @ Facebook
  - [facebook.com/TelerikAcademy](https://facebook.com/TelerikAcademy)
- Telerik Academy Learning System
  - [telerikacademy.com](https://telerikacademy.com)
