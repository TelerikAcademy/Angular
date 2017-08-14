<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Introduction to TypeScript
## What is TypeScript and how to run it

<div class="signature">
    <p class="signature-course">Web applications with Angular</p>
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
<!-- attr: { class:'slide-section', id:'what-is-typescript' } -->
# What is TypeScipt?
## The benefits of using it

# What is TypeScript?

- TypeScript is a **superset dialect** of ECMAScript
  - Created by `Microsoft`.
  - Has optional `static typing`.
  - Inherits concepts from `C#`.
  - Can use type definitions for `intellisense`.
  - Can use `JavaScript` libraries.
  - **Compiles to JavaScript**.

# Benefits of using it

- Here are several benefits that `TypeScript` provides over `JavaScript`:
  - Due to `static typing`, it's more **predictable**.
  - Due to `modules, namespaces and stronger OOP`, it **scales better** for larger apps.
  - Due to `compilation step`, some errors are caught **compile-time**, not run-time.

# Installation

- The easiest way to install `TypeScript`:

```md
npm i -g typescript
```

- Check if the **compiler** has been installed:

```md
tsc -v
```

- To see the **help page**, use:

```md
tsc --help
```

# Compiling to JavaScript
- TypeScript is written in `.ts` files, which **can't be used** directly in the browser:
  - It need to be `translated` to vanilla `.js` first.
- It can be **compiled** in either of those ways:
  - In the terminal using command line tool `tsc`.
  - In `Visual Studio` or other IDE.
  - Using automated task runners such as `gulp`.

```md
tsc main.ts
```

<!-- section start -->
<!-- attr: { class:'slide-section', id:'environment-setup' } -->
# Environment setup
## Run and debug code with VS Code

# VS Code

- Is a tool developed by Microsoft and is used for:
  - **TypeScript** and **.NET Core** development.
- Configurations:
  - **tsconfig.json**, **launch.json** and **tasks.json**.
- You need to have globally installed the **typescript** and **tslint** packages.
- Good to have extensions for TypeScript:
  - `TSLint, Typings auto install, Auto Import, Debugger for Chrome`

# Setting up tsconfig.json

- Specifies the way `TS` is compiled. (autogeneratable with `tsc --init`)

```json
{
  "compilerOptions": {
    "target": "es5", // Sets the output JS's version
    "module": "commonjs", // Sets the module loader
    "outDir": "dist", // Sets output JS files' location
    "sourceMap": true, // Allows debugging
    "noEmitOnError": true // Do not compile if errors
  }
}
```

# Setting up launch.json

- Specifies the way `VS Code` should launch the application. (autogeneratable via `VS Code`)

```json
{
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceRoot}/dist/index.js",
      "preLaunchTask": "compile",
      "sourceMaps": true,
      "outFiles": [ "${workspaceRoot}/dist/*.js" ]
    }
  ]
}
```

# Setting up tasks.json

- Specifies the way `VS Code` should run tasks. (autogeneratable via `VS Code`)
  - An example of a TS compilation task, ran before the code execution:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "taskName": "compile",
      "command": "tsc",
      "type": "shell"
    }
  ]
}
```
# Running the code

- The code is executed by pressing **Ctrl + F5**.
- You can enter debugging by pressing just **F5**.
- The debugging windows:
  - `Local variables`
  - `Watch list`
  - `Call stack`
  - `Breakpoints`
    - Can be **Line** or **Column**.
    - Can have settings just like in `VS`.


<!-- section start -->
<!-- attr: { class:'slide-section', id:'static-typing' } -->
# Static typing
## What TypeScript is famous for

# What is Static Typing
-  You can declare the types of variables.
  - The compiler will make sure they are `assigned` values of the specified type.
  - If the type declaration is `omitted`, the compiler will `infer` it from your code.
- As in `C#` and `JS`*, you have:
  - **Basic types** - predefined in the language.
  - **Complex types** - created by you.

# TypeScript Example

```ts
let name = "Pesho";
let age = 20;

let firstSentence = "My name is " + name + ".";
let lastSentence = "I am " + age + " years old.";

function printTwoSentences(firstSentence, lastSentence) {
  console.log(firstSentence + " " + lastSentence);
}

printTwoSentences(firstSentence, lastSentence);
// My name is  Pesho. I am 20 years old.
```

# TypeScript Example

```ts
let firstName: string = "Pesho";
let age: number = 20;

let firstSentence: string = `My name is ${firstName}.`;
let lastSentence: string = `I am ${age} years old.`;

function printTwoSentences(x: string, y: string) {
  console.log(`${x} ${y}`);
}

printTwoSentences(firstSentence, lastSentence);
// My name is  Pesho. I am 20 years old.

```

<!-- section start -->
<!-- attr: { class:'slide-section', id:'basic-types' } -->
# Common Basic Types
## Predefined types you have heard of

# Basic types

- **Numbers** - As in JavaScript, all numbers in TypeScript are floating point values.
```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
- The language is `type-safe`, the following code snippet `will not compile`:
```ts
let floatNum = 10.5;
floatNum = "Pesho";
```

# Basic Types

- **Strings** - As in JavaScript, TypeScript also uses double quotes `(")` or single quotes `(')`.
```ts
let color: string = "blue";
```
- You can also use **template strings**, which can span multiple lines and have embedded expressions. They use backtick ``(`)``.

```ts
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I will be ${age + 1} years old next month.`;
```

# Basic Types

- **Arrays** - As in JavaScript, TypeScript allows you to work with arrays.
```ts
  let list: number[] = [1, 2, 3];
```
- You can also declare arrays using the `complex generic type` **Array**. (Not inferred).
```ts
  let list: Array&ltnumber&gt = [1, 2, 3];
```
- **Boolean**  -  Holds a `true` or `false` value.

# Basic Types

- **Enums** - A way of giving more friendly names to sets of numeric values.
```ts
enum Color {Red, Green, Blue}
let someVar: Color = Color.Green;
```
- By `default`, enums begin numbering their members starting at **0**. You can `manually` set the value of one or more of its members.
```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

# Basic Types

- You can also go from a `numeric` value to the `name` of that value in the **enum** and vise-versa:

```ts
enum Color {Red = 1, Green, Blue}

let colorNumber: number = Color.Green;
console.log(colorNumber); // 2

let colorName: string = Color[1];
console.log(colorName); // Red
```

- A `good practice` is to assign a specific number to `each` value.

# Basic Types

- **Null** and **Undefined** - Same as in JavaScript, not very useful on their own.
```ts
let u: undefined = undefined;
let n: null = null;
```
- They are subtypes of all other types:
```ts
let num: number = null;
```
- This will not work if the `strictNullChecks` flag is used during compilation.

<!-- section start -->
<!-- attr: { class:'slide-section', id:'basic-types-odd' } -->
# Other Basic Types 
## Other Predefined types

# Basic Types

- **Any** - It's used to disable `type-checking` for a given variable or function.
  - Used when we are `not sure` of the type.
  - Or when the variable comes from a `3rd party` lib.

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

- You can use any type on arrays, for example:

```ts
  let list: any[] = [1, true, "Pesho"];
```

- Very bad practice, should be avoided

# Basic Types

- **Unions** - It's `"type"` that combines two types

```ts
let example: (number | string);

example = "Pesho"; // OK

example = true; // Error

example = 10; // OK

```

- You can use union type on arrays, for example:

```ts
  let list: (number | string)[] = [1, 2, "Pesho"];
```

- Rarely use, kind of a bad practice

# Basic Types

- **Tuples** - Tuple types allow you to express an `array` where the type of a `fixed number` of elements is known, but need **not** be the same.

```ts
// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK

// Initialize it incorrectly
x = [10, "hello"]; // Error
```

# Basic Types

- When accessing an element with a **known** index, the correct type is retrieved:

```ts
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```
- When accessing an element **outside** the set of known indices, a **union** type is used instead:

```ts
x[2] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(x[3].toString()); // OK, 'string' and 'number' both have 'toString'

x[4] = true; // Error, 'boolean' isn't 'string | number'
```

<!-- section start -->
<!-- attr: { class:'slide-section', id:'functions' } -->
# Functions 
## Only cool stuff

# Functions

- As in JS, you can use `standard` functions:
```ts
function add(x, y) {
    return x + y;
}
```
- Or even `arrow` functions:
```ts
let arrow = (x, y) => {
    return x + y;
}
```
- As we have said so far, `JS` is valid `TS`.

# Functions
- TypeScript allows you to constrain your input parameters:
```ts
function add(x: number, y: number) {
    return x + y;
}
```
- It also allows you to specify a return type:
```ts
function add(x: number, y: number): number {
    return x + y;
}
```

# Return types
- A function `return type` can be any **basic** type or **complex** type you have created.
  - As with variables, return types can be `inferred` from the code base.
  - There are two additional **basic** types, usable mainly as return types for functions:
    - **Void** the function returns nothing
    - **Never** the function never returns

# Return types

- **Void** is a `basic` type, the opposite of **any**
  - Variables of type `void` are not useful because you can only assign `undefined` or `null` to them:
```ts
let unusable: void;
unusable = undefined; // OK
unusable = null; // OK
unusable = 1; // Error
```
- Used to state that a function returns `nothing`:
```ts
function warnUser(): void {
    alert("This is my warning message");
}
```

# Return types
- **Never** is a `basic` type that represents the type of values that never occur.
  - Used for functions that always throw exceptions or never return:

```ts
  function error(message: string): never {
      throw new Error(message);
  }

  function infiniteLoop(): never {
    while (true) { }
  }
```

# Function parameters

- By default, `TypeScript` assumes that every function parameter is **required**.
  - The compiler checks if all parameters are passed.
  - That doesn't mean you can't pass `null` or `undefined` to them.
    - Depends on the `strictNullChecks` flag.

```ts
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
let result4 = buildName("Bob", null);            // still works, returns "Bob null"
```

# Function parameters

- To fix the problem with the `result4` variable from the last slide, we need to use **default** parameters.

```ts
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right, returns "Bob Adams"
```

- Any parameter can be **default**.

# Function parameters

- We can create **optional** parameters using `?` at the end of the name.

```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob"
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right, returns "Bob Adams"
```

- Only the last parameter(s) can be optional

# Function parameters

- **Rest parameters** - Allows to take in a group of parameters using ellipsis `(...)`
  - Similar to the `arugments` global variable in JS

```ts
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

# Function parameters

- The `ellipsis` is also used in the type of the function with rest parameters:


```ts
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string;
buildNameFun = buildName;
```

<!-- section start -->
<!-- attr: {id: 'questions', class: 'slide-section', hasScriptWrapper:true} -->

# Questions
<!-- <img class="slide-image" showInPresentation="true"  src="imgs/questions.jpg" style="height:40%; left:30%; top:30 border-radius: 10px;" /> -->


<!-- attr: { showInPresentation: true, hasScriptWrapper: true} -->
# Free Training @ Telerik Academy

- Angular Course
  - [Angular](http://academy.telerik.com/student-courses/web-design-and-ui/spa-applications-with-angular2/about)
- Telerik Software Academy
  - [telerikacademy.com](https://telerikacademy.com)
- Telerik Academy @ Facebook
  - [facebook.com/TelerikAcademy](https://facebook.com/TelerikAcademy)
- Telerik Academy Learning System
  - [telerikacademy.com](https://telerikacademy.com)
