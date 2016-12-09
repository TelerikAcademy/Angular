<!-- section start -->
<!-- attr: { id:'', class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->
# Defining classes
## Classes, fields, constructors, methods, properties, encapsulation, enumerations
<article class="signature">
	<p class="signature-course">TypeScript OOP</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>




<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Table of Contents
- [Introduction to OOP](#intro-oop)
- [Defining classes](#defining-classes)
- [Using fields and properties](#field-properties)
- [Using constructors](#using-constructors)
- [Access modifiers](#access-modifiers)
- [Encapsulation](#encapsulation)
- [Enumerations](#enumerations)




<!-- attr: { id:'intro-oop', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- section start -->
<!-- # Defining simple classes -->




<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Classes in OOP
- **Classes** model real-world objects and define
  - **Attributes** (state, properties, fields) and
  - **Behavior** (methods, operations)
- Classes describe the structure of objects
  - Objects describe particular instance of a class
- Properties hold information about the modeled object relevant to the problem
- Operations implement the object behavior




<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Classes in TypeScript
- Classes in TypeScript can have **members**:
  - Fields, constants, methods, properties, constructors, …
- Members can have access modifiers (scope)
  - **public**, **private**, **protected**
- Members can be
  - **static** (common) or **specific** for a given object


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Simple class definition  
```typescript
class Person {
		protected _fullName: string;

		constructor(fullName: string) {
				this._fullName = fullName;
		}

		public get fullName(): string {
				return this._fullName;
		}
}
```




<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Simple class definition
```typescript
class Student extends Person {
    private _university: string;

    constructor(fullName: string, university: string) {
        super(fullName);
        this._university = university;
    }

    public get university(): string {
        return this._university;
    }

    public introduce(): string {
        return `Hello, my name is ${this._fullName}.
                I study in the ${this._university}`;
    }
}
```




<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Class Definition and <br/>Members
- **Class definition** consists of:
  - Class declaration
  - Inherited class or implemented interfaces
	- Constructors
  - Fields (static or not)
  - Properties (static or not)
  - Methods (static or not)




<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Fields
## Defining and Using Data Fields -->




<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Fields
- Fields are **data members **defined inside a class
  - Fields hold the internal object state
  - Can be **static** or per instance
  - Can be **private** / **public** / **protected** / …

```typescript
class Dog {
   private name: string;
   private breed: string;
   private age: number;
   protected color: ColorType;
}
```

<div class="fragment balloon" style="top:51.73%; left:60.83%; width:26.45%">Field declarations</div>




<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Read-only Fields
- **Read-only fields** in TypeScript are marked with the keyword  **readonly**:
    - Assigned once only at object creation or compile time at object definition.

```typescript
class Math {
   public readonly PI: number = 3.14159;
   public readonly Color: ColorType;

	 constructor(color: ColorType) {
		 this.Color = color;
	 }
}
```

<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Read-only Fields – _Example_

```typescript
class ReadonlyFields {
    public readonly PI:number = 3.141592;
    public readonly size: number;

    constructor(size:number) {
        this.size = size; // Cannot be further modified!
    }
}

let r = new ReadonlyFields(50);
console.log(r.size)
console.log(r.PI)
r.size = 10; // Compilation error: readonly field
```





<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Access Modifiers
## Public, Private, Protected -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic12.png" style="top:54%; left:34%; width:35%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Access Modifiers
- Class members can have access modifiers
  - Restrict the access to them from outer sources
  - Supports the OOP principle "**encapsulation**"
- Class members can be:
  - **public** – accessible from any class
  - **protected** – accessible from the class itself and all its descendent classes
  - **private** – accessible from the class itself only


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Access Modifiers Explained -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic13.png" style="top:62%; left:75%; width:27.33%; z-index:-1" /> -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic16.png" style="top:14%; left:5.91%; width:27.33%; z-index:-1" /> -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic17.png" style="top:38%; left:41%; width:27.33%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# The 'this' Keyword
- The keyword **this** inside a method points to the current instance of the class
- _Example_:

```typescript
class Doggy {
    private name:string;

    public printName():void {
        console.log(this.name)
        // The same like console.log(name);
    }
}
```





<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Defining Simple Classes
## _Example_ -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic18.png" style="top:52%; left:33%; width:35%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Task: Define a Class "Dog"
- Our task is to define a simple class that represents information about a **dog**
  - The dog should have **name** and **breed**
    - Optional fields (could be **null**)
  - The class allows to **view** and **modify** the name and the breed at any time
  - The dog should be able to **bark**


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Defining Class Dog – _Example_

```typescript
class Doggy {
    private _name: string;
    private _breed: string;

    constructor(name?: string, breed?: string) {
        if (name) {
            this._name = name;
        }
        if (breed) {
            this._breed = breed;
        }
    }
```
_(the example continues)_



<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic19.png" style="top:15.48%; left:82.34%; width:18.95%; z-index:0" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Defining Class Dog – _Example_ -->

```typescript
public get name(): string {
		return this._name;
}
public set name(value: string) {
		this._name = value;
}

public get breed(): string {
		return this._breed;
}
public set breed(value: string) {
		this._breed = value;
}

public sayBau(): void {
		let dogName = this.name != null ?
		this.name: "[unnamed dog]";
		console.log(`${dogName} said: Bauuuu!`);
}
```



<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic20.png" style="top:14.99%; left:86.08%; width:15.80%; z-index:0" /> -->




<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Using Classes and Objects -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic21.png" style="top:42%; left:29.89%; width:49.41%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# How to Use Classes?
- Create an **instance**
  - Initialize its properties / fields
- Manipulate the instance
  - Read / modify its properties
  - Invoke methods
- Release the occupied resources
  - Performed automatically in most cases


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic22.png" style="top:45%; left:74%; width:25.70%; z-index:-1" /> -->
<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic23.png" style="top:20%; left:74%; width:26.45%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Task: Dog Meeting
- Our task is as follows:
  - Create 3 dogs
    - The first should be named “Sharo”, the second – “Rex” and the last – left without name
  - Put all dogs in an array
  - Iterate through the array elements and ask each dog to bark
  - _Note_:
    - Use the **Dog** class from the previous example!


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Dog Meeting
## [Demo](https://github.com/TelerikAcademy/Object-Oriented-Programming/tree/master/Topics/01.%20Defining-Classes-Part-1/demos/DogMeeting) -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic24.png" style="top:52%; left:32.25%; width:35%; z-index:-1" /> -->




<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Constructors -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic25.png" style="top:42%; left:28%; width:44.80%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# What is Constructor?
- **Constructors** are special methods
  - Invoked at the time of **creating a new instance** of an object
  - Used to initialize the fields of the instance
- Constructors are marked with the `constructor` keyword
  - Have no return type
  - Can have parameters


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Defining Constructors

```typescript
class Point2D {
    private _xCoord: number;
    private _yCoord: number;

    constructor(xCoord:number, yCoord: number) {
        this._xCoord = xCoord;
        this._yCoord = yCoord;
    }

    // More code ...
```

- Class **Point** with parameterless constructor:


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic26.png" style="top:20.28%; left:85.14%; width:18.76%; z-index:0" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Defining Constructors -->

- Constructor with optional parameters

```typescript
class Person {
    private name: string;
    private age: number;

    constructor(name?: string, age?: number) {
        if (name) {
            this.name = name;
        }

        if (age) {
            this.age = age;
        }
    }

    // More code
}
```

<div class="fragment balloon" style="top:59.88%; left:55.54%; width:39.67%">As rule constructors should initialize all own class fields.</div>
<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic27.png" style="top:14.70%; left:75.79%; width:24.09%; z-index:0" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false, style: 'font-size:0.8em;' } -->
# Constructors and Initialization
- Pay attention when using inline initialization!

```typescript
class AlarmClock {
    private hours:number = 9; // Inline initialization
    private minutes:number = 0; // Inline initialization

    constructor(hours:number, minutes:number) {
        this.hours = hours;  // Invoked after the inline
        this.minutes = minutes;  // initialization!
    }

    // More code
}
```






<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic28.png" style="top:50.25%; left:88.89%; width:14.99%; z-index:0" /> -->


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Constructors
## [Demo](https://github.com/TelerikAcademy/Object-Oriented-Programming/tree/master/Topics/01.%20Defining-Classes-Part-1/demos/Constructors) -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic29.png" style="top:52%; left:36.44%; width:30%; z-index:-1" /> -->




<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Methods
## Defining and Invoking Methods -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic30.png" style="top:52%; left:59.88%; width:31.74%; z-index:-1" /> -->
<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic31.png" style="top:52%; left:19.65%; width:29.09%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Methods
- **Methods** are class members that execute some action (some code, some algorithm)
  - Methods are per object instance
  - Could be **public** / **private** / **protected** / …

```typescript
class Point {
    private _xCoord: number;
    private _yCoord: number;

    public calcDistanceTo(p: Point) {
        return Math.sqrt(
            (p.xCoord - this.xCoord) * (p.xCoord - this.xCoord) +
            (p.yCoord - this.yCoord) * (p.yCoord - this.yCoord))
    }
}
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Using Methods
- Invoking instance methods is done through the object (class instance):

```typescript
let p1: Point = new Point(2,3);
let p2: Point = new Point(3,4);
console.log(p1.calcDistanceTo(p2));
```



<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Methods
## [Demo](https://github.com/TelerikAcademy/Object-Oriented-Programming/tree/master/Topics/01.%20Defining-Classes-Part-1/demos/Methods) -->

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Properties
## Defining and Using Properties -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic34.png" style="top:52%; left:28%; width:42.57%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# The Role of Properties
- **Properties** expose object's data to the world
  - Control how the data is manipulated
    - Ensure the internal object state is correct
    - E.g. price should always be kept positive
- **Properties** can be:
  - Read-only
  - Write-only ([examples](http://stackoverflow.com/q/2213879/1862812))
  - Read and write
- Simplify the writing of code


<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Defining Properties
- Properties work as a pair of methods
  - **Getter** and **setter**
- Properties should have:
  - Access modifier (**public**, **protected**, etc.)
  - Return type
  - Unique name
  - **Get** and / or **Set** part
  - Can contain code processing data in specific way, e.g. apply validation


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Defining Properties – _Example_

```typescript
class Point {
    private _xCoord: number;
    private _yCoord: number;

		public get xCoord(): number {
        return this._xCoord;
    }
    public set xCoord(value: number) {
        this._xCoord = value;
    }
    public get yCoord(): number {
        return this._yCoord;
    }
    public set yCoord(value: number) {
        this._yCoord = value;
    }
}
```



<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic35.png" style="top:12.34%; left:74.68%; width:28.98%; z-index:0" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Dynamic Properties
- Properties are not obligatory bound to a class field – can be calculated dynamically:

```typescript
class Rectangle {
    private width: number;
    private height: number;

    // More code...

    public get area(): number {
        return this.width * this.height;
    }
}
```



<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Properties
## [Demo](https://github.com/TelerikAcademy/Object-Oriented-Programming/tree/master/Topics/01.%20Defining-Classes-Part-1/demos/Defining-Properties) -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic36.png" style="top:52%; left:32%; width:36.87%; z-index:-1" /> -->




<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Enumerations -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic37.png" style="top:42%; left:10.36%; width:83.92%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false, style: 'font-size:0.9em;' } -->
# Enumerations in TypeScript
- **Enumerations** are types that hold a value from a fixed set of named constants
  - Declared by **enum** keyword

```typescript
enum DayOfWeek {
    Mon, Tue, Wed, Thu, Fri, Sat, Sun
}

let day: DayOfWeek = DayOfWeek.Sun;
console.log(day); // Prints '6'
let nameOfDay = DayOfWeek[day];
console.log(nameOfDay); // Prints 'Sun'
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:false } -->
# Enumerations – _Example_

```typescript
class Coffe {
    private _size: CoffeeSize;

    constructor(size: CoffeeSize) {
        this._size = size;
    }

    public get size(): CoffeeSize {
        return this._size;
    }
}
```

_(the example continues)_


<!-- attr: { showInPresentation:true, hasScriptWrapper:false, style: 'font-size:0.9em;' } -->
<!-- # Enumerations – _Example_ -->

```typescript
class CoffeeMachine {
    public run(): void {
        let normalCoffee: Coffee = new Coffee(CoffeeSize.Normal);
        let doubleCoffee: Coffee = new Coffee(CoffeeSize.Double);

        console.log(`The ${CoffeeSize[normalCoffee.size]}
            is ${normalCoffee.size}ml.`);

        console.log(`The ${CoffeeSize[doubleCoffee.size]}
            is ${doubleCoffee.size}ml.`);
    }
}
```



<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Enumerations
## [Demo](https://github.com/TelerikAcademy/Object-Oriented-Programming/tree/master/Topics/01.%20Defining-Classes-Part-1/demos/Enums) -->




<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic38.png" style="top:52%; left:33%; width:35%; z-index:-1" /> -->




<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Keeping the Object State Correct -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic39.png" style="top:52%; left:55.79%; width:30%; z-index:-1" /> -->
<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic40.png" style="top:52%; left:21.28%; width:28.21%; z-index:-1" /> -->
<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic41.png" style="top:52%; left:13.10%; width:25.93%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false, style: 'font-size: 0.9em;' } -->
# Keep the Object State Correct
- Constructors and properties can **keep the object's state correct**
  - This is known as **encapsulation** in OOP
  - Can force **validation** when creating / modifying the object's internal state
  - Constructors define which properties are mandatory and which are optional
  - Property setters should validate the new value before saving it in the object field
  - Invalid values should cause an exception


<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style:'font-size: 40px;' } -->
# Keep the Object State – _Example_

```typescript

class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        if (value === null || value.length < 1) {
            throw 'Invalid name!';
        }

        this._name = name;
    }
}
```

<div class="fragment balloon" style="top:27%; left:62.59%; width:37.02%">We have only one constructor, so we cannot create person without specifying a name.</div>
<div class="fragment balloon" style="top:66.43%; left:58.18%; width:37.91%">Incorrect name cannot be assigned</div>


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Keeping the Object State Correct
## [Demo](https://github.com/TelerikAcademy/Object-Oriented-Programming/tree/master/Topics/01.%20Defining-Classes-Part-1/demos/Keep-the-Object-State) -->


<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic42.png" style="top:52%; left:13.10%; width:28.21%; z-index:-1" /> -->
<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic43.png" style="top:52%; left:4.92%; width:25.93%; z-index:-1" /> -->
<!-- <img showInPresentation="true" class="slide-image" src="imgs/pic44.png" style="top:62%; left:47.60%; width:50.36%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:false, style:'font-size: 40px;' } -->
# Summary
- Classes define specific structure for objects
  - Objects are particular instances of a class
- Classes define fields, methods, constructors, properties and other members
  - Access modifiers limit the access to class members
- Constructors are invoked when creating new class instances and initialize the object's internal state
- Enumerations define a fixed set of constants
- Properties expose the class data in safe, controlled way


<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:false } -->
<!-- # Defining Classes
## Questions? -->



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Free Trainings @ Telerik Academy
- TypeScript Programming @ Telerik Academy
    - [TypeScript OOP Course](http://telerikacademy.com/Courses/Courses/Details/393)
  - Telerik Software Academy
    - [telerikacademy.com](https://telerikacademy.com)
  - Telerik Academy @ Facebook
    - [facebook.com/TelerikAcademy](facebook.com/TelerikAcademy)
  - Telerik Software Academy Forums
    - [forums.academy.telerik.com](forums.academy.telerik.com)


<!-- <img showInPresentation="false" class="slide-image" src="imgs/pic45.png" style="top:60.37%; left:92.39%; width:13.45%; z-index:-1" /> -->
<!-- <img showInPresentation="false" class="slide-image" src="imgs/pic46.png" style="top:30.85%; left:68.14%; width:36.30%; z-index:-1" /> -->
<!-- <img showInPresentation="false" class="slide-image" src="imgs/pic47.png" style="top:46.32%; left:95.14%; width:10.85%; z-index:-1" /> -->
<!-- <img showInPresentation="false" class="slide-image" src="imgs/pic48.png" style="top:13.00%; left:92.85%; width:13.01%; z-index:-1" /> -->
