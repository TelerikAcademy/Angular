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
- What is TypeScript?
- Environment Setup
- Static Typing
- Common Basic Types
- Other Basic Types
- Functions

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

# Inheriance

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

<!-- section start -->
<!-- attr: { class:'slide-section', id:'modifiers' } -->
# Modifiers
## Restrict access to methods and fields

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section' } -->
# Questions?
## No? Good.
