<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

# Architecture and Setup
## Building blocks, structure, module bundlers
<div class="signature">
    <p class="signature-course">Angular</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:75%; top:50%; border-radius: 10px;" /> -->

<!-- section start -->
<!-- attr: {id: 'table-of-contents'} -->
# Table of Contents
* Definitions
* What is Angular
* Architecture
* Setup your project

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Definitions -->

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:36%; top:40%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# What is Angular
*  Angular is a framework for building single page applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/overview.png" style="height:40%; left:25%; top:50%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# What is Angular
- Our page **never changes** (sort of)
    - It contains a single HTML file and a bunch of JavaScript files
    - Every change is rendered in the browser
- JavaScript allows us to get only the changed data instead of the whole page from the server
    - Fast and reactive

<!-- attr: { hasScriptWrapper:true } -->
# What is Angular

- The `index.html` where magic happens 

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular Demo</title>
  <base href="/">
  <meta name="viewport" 
  content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>
```

<!-- attr: { hasScriptWrapper:true, style: 'font-size: 0.8em' } -->
# What is Angular
- The compiled `index.html` with all the needed JavaScript
    - `NB:`Webpack used here (same as Angular CLI)

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular Demo</title>
  <base href="/">
  <meta name="viewport" 
  content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root>Loading...</app-root>
  <sсript type="text/javascript" src="inline.bundle.js"></sсript>
  <sсript type="text/javascript" src="polyfills.bundle.js"></sсript>
  <sсript type="text/javascript" src="scripts.bundle.js"></sсript>
  <sсript type="text/javascript" src="styles.bundle.js"></sсript>
  <sсript type="text/javascript" src="vendor.bundle.js"></sсript>
  <sсript type="text/javascript" src="main.bundle.js"></sсript>
</body>
</html>

```

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Building Blocks  -->

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/building-blocks.jpg" style="height:40%; left:28%; top:50%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Building blocks

- Modules
- Components
- Templates
- Metadata
- Data binding
- Directives
- Services
- Dependency injection

<!-- attr: { hasScriptWrapper:true } -->
# Modules
- In Angular, a module is a mechanism to **group** components, directives, pipes and services that are related
- Modules are a great way to **organize an application and extend it with capabilities** from external libraries.
    - Many of the Angular libraries are modules (`FormsModule`, `HttpModule`)
- Angular modules (`NgModules`) are different from JavaScript modules

<!-- attr: { hasScriptWrapper:true } -->
# AppModule (root)
- Here is our `app.module.ts` which exports AppModule class

```ts
// imports here 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

<!-- attr: { hasScriptWrapper:true } -->
# AppModule (root)

- The **root module** of our application
- The **only module** which is bootstraped by our Angular application
    - The below example is JIT version of Angular application

```ts
import { platformBrowserDynamic } 
from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```


<!-- attr: { hasScriptWrapper:true } -->
# Modules
- The metadata in **@NgModule**
    - Tells Angular how to compile and run module code
    - Identifies the module's own components, directives and pipes
    - May add service providers to the application dependency injectors

<!-- attr: { hasScriptWrapper:true } -->
# Components
- In Angular, `“everything is a component”`
- A **component** (decorated class) controls a patch of screen called a view
    - The component are associated with a view (`HTML template`)
    - The class interacts with the view through an API of properties and methods


<!-- <img class="slide-image" showInPresentation="true"  src="imgs/component.png" style="height:30%; left:50%; top:60%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Components
- Sample component **Hello World** in a div
    - It could be used in another component's template with this selector
        - `<app-main></app-main>`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<div>Hello {{title}}!</div>`
})
export class MyComponent {
  title: string;
  constructor() { this.title = 'World'; }
}
```

<!-- attr: { hasScriptWrapper:true } -->
# Templates

- A **template** is a form of HTML that tells Angular how to render the component.
    - The template is constructed from HTML elements
    - There are additional elements you can use
        - `*ngFor`
        - `{{post.title}}`
        - `<demo-app></demo-app>`


<!-- <img class="slide-image" showInPresentation="true"  src="imgs/template.png" style="height:30%; left:50%; top:60%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Templates

- The template could contains only valid HTML elements
 - Or any Angular specific `directives`, `components`, `bindings`

```ts
@Component({
  selector: 'app-main',
  template: `<div>
  <h1>{{title}}</h1> // bind to the title from the component
  <li *ngFor="let book of books"> // directive for a loop
  {{book.title}}
  </li> 
  </div>`
})
```


<!-- attr: { hasScriptWrapper:true } -->
# Metadata

- The **metadata** is used to decorate a class and to tell Angular how to process it
- The **metadata** is passed using **decorator**

```ng
@Component({
    selector: 'demo-app',
    // templateUrl: 'path-to-file'
    template: `<div>Demo app</div>`,
    providers: [Services],
    styleUrls: ['path-1', 'path-2']
})

```

<!-- attr: { hasScriptWrapper:true } -->
# Metadata

- Angular needs metadata <br /> to know what to search <br /> for your component
<br />
<br />
- The template, metadata, and <br /> component together <br /> describe a view

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/template-metadata-component.png" style="height:45%; left:70%; top:15%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Data binding

- Without a framework you should push/pull data `from` and `to` the HTML
- Angular supports four forms of data binding

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/databinding.png" style="height:45%; left:30%; top:40%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Directives

- A **component** is a **directive** with template
- Angular templates are dynamic so the framework transforms the DOM according to the instructions from the directives
    - `*ngFor, [(ngModel)], etc`
- `@Component` decorator is extended `@Directive` decorator
    - just added template



<!-- attr: { hasScriptWrapper:true } -->
# Services

- Service could be almost any class with `well-defined` purpose
- Nothing special for services in Angular
- Services take the responsibility of doing something special from the components
    - A component `should not log` to the console itself

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/service.png" style="height:25%; left:30%; top:65%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Services

- Pure TypeScript class
    - Allows you to use it on many places in your application
    - Scalable and reusable
    - Well-defined purpose (only informs the user)

```
export class LoggerService{
    info: void(msg: string) {
        console.log(`INFO: {msg}`);
    }

    error: void(msg: string) {
        alert(`ERROR: {msg}`);
    }
}
```

<!-- attr: { hasScriptWrapper:true } -->
# Dependency injection

- **Dependency injection (DI)** is a pattern which allows us to manage code dependencies
    - allows us to inject dependencies in different components across our applications
    - without needing to know
        - how those dependencies are created
        - or what dependencies they need themselves

```ng
constructor(private service: HeroService) { }
```

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/injector-injects.png" style="height:15%; left:75%; top:38%; border-radius: 10px;" /> -->

<!-- attr: { hasScriptWrapper:true } -->
# Dependency injection

- The beginning
   - You supply what is needed by your class
   - This is coupled only to an instance of a pen
        - What if we want a pencil or anything other
            - Dependency injection

```
class Person {
    pen;
    constructor() {
        this.pen = new Pen();
    }

    writeWithHand() {
        this.pen.write();
    }
}
```

<!-- attr: { hasScriptWrapper:true } -->
# Dependency injection

- Inject all the dependencies
    - in the constructor
- Angular has its own DI system, which resolves all the dependencies
    - you also have the control over them

```
class Person {
    pen;
    constructor(private instrument: WritingInstrument) {
        this.pen = instrument;
    }
    writeWithHand() {
        this.pen.write();
    }
}
```



<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Folder structure  -->

<!-- attr: { hasScriptWrapper:true } -->
# Folder structure

- <project root&gt;
    - app
        - heroes
            - hero
                - hero.component.ts
                - index.ts
            - heroes.module.ts
            - heroes-routing.module.ts
    - app.component.ts
    - app.module.ts
- main.ts
- index.html



<!-- <img class="slide-image" showInPresentation="true"  src="imgs/folder-structure.png" style="height:85%; left:55%; top:10%; border-radius: 10px;" /> -->

<!-- attr: { hasScriptWrapper:true } -->
# Folder structure

- You can use a folder structure by your choice
- Take a look at the following folder structures
    - [https://github.com/mgechev/angular-seed](https://github.com/mgechev/angular-seed)
    - [https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-06](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-06)
- `Angular CLI` gives you a pretty good folder structure as a starting point


<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Setup an Angular project  -->

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/wd40-2.jpg" style="height:40%; left:30%; top:30; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Things we need

- `Node.js` and `npm`
- `TypeScript` (JavaScript, Dart)
- IDE or text editor by your choice
    - Most suitable `Visual Studio Code`
        - Has the best support for TypeScript as well as for Angular
- [Angular Docs](https://angular.io/docs/ts/latest/)
- [Style Guide](https://angular.io/styleguide)
- [Angular CLI](https://cli.angular.io/)
- [Angular Seed - optional](https://github.com/mgechev/angular-seed)

<!-- attr: { hasScriptWrapper:true } -->
# Typescript config 

- TypeScript 
    - primary language for Angular development
    - superset over JavaScript
- Browsers don't understand TypeScript
    - TypeScript must be 'transpiled' into JavaScript
    - using tsc compiler
- We need **tsconfig.json** file to be created
    - `tsc --init`
    - [TypeScript configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html)


<!-- attr: { hasScriptWrapper:true } -->
# tsconfig.json

```json
{
  {
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [ "es2015", "dom" ],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  }
}
```


<!-- attr: { hasScriptWrapper:true } -->
# SystemJS setup
- Dependencies 
    - Minimum set of dependencies to run Angular project

```json

   "dependencies": {
    "@angular/common": "^4.3.3",
    "@angular/compiler": "^4.3.3",
    "@angular/core": "^4.3.3",
    "@angular/platform-browser": "^4.3.3",
    "@angular/platform-browser-dynamic": "^4.3.3",
    "core-js": "^2.5.0",
    "reflect-metadata": "^0.1.10",
    "rxjs": "^5.4.2",
    "systemjs": "^0.20.17",
    "zone.js": "^0.8.16"
  }
```

<!-- attr: { hasScriptWrapper:true } -->
# package.json
- Dev dependencies 
    - We need TypeScript 
    - `@types` are definition types which helps us with the autocomplete

```json
  "devDependencies": {
    "@types/core-js": "^0.9.42",
    "@types/node": "^8.0.20",
    "concurrently": "^3.5.0",
    "typescript": "^2.4.2"
  }
```




<!-- attr: { hasScriptWrapper:true } -->
# Module loaders

```js
import { Component } from '@angular/core';
```

- Browsers don't support loading packages like this so we'll need a loader
    - [SystemJS](https://github.com/systemjs/systemjs)

<!-- attr: { hasScriptWrapper:true } -->
# Module bundlers
- Module bundling is simply the process of stitching together a group of modules (and their dependencies) into a single file (or group of files) in the correct order
    - [Webpack](https://webpack.js.org/)
        - Angular CLI uses Webpack under the hood
        - But you don't have the control over it explicitly

<!-- attr: { hasScriptWrapper:true, style:'font-size: 0.95em' } -->
# HTML file

- We need an **index.html** file 
        
- Script tags for using SystemJS
    - If we choose to use Webpack, we don't need any script tag in it

```html
<scriрt src="node_modules/core-js/client/shim.min.js"></scriрt>
<scriрt src="node_modules/zone.js/dist/zone.js"></scriрt>
<scriрt src="node_modules/reflect-metadata/Reflect.js"></scriрt>
<scriрt src="node_modules/systemjs/dist/system.src.js"></scriрt>
<scriрt src="systemjs.config.js"></scriрt>
<scriрt>
    System.import('app').catch(function(err) { 
            console.error(err); 
        });
</scriрt>
```

<!-- attr: { hasScriptWrapper:true } -->
# Configure module loaders/bundlers

- We need to configure module bundlers
    - [SystemJS](https://github.com/systemjs/systemjs)
        - the `systemjs.config.js` setup is removed from Angular quickstart guide
        - [systemjs.config.js](https://scotch.io/courses/getting-started-with-angular-2/systemjs)
    - [Webpack](https://webpack.github.io/docs/tutorials/getting-started/)
        - [webpack.config.js](https://angular.io/docs/ts/latest/guide/webpack.html)


<!-- attr: { hasScriptWrapper:true } -->
# Angular CLI

- Or simply use [Angular CLI](https://cli.angular.io/)
    - Powerful and reliable console interface for generating Angular applications
    - Has lots of benefits
        - but you don't have control over how the modules will be bundled together
- Make an informed decision and don't rely only on what others tell you



<!-- section start -->
<!-- attr: {id: 'questions', class: 'slide-section', hasScriptWrapper:true} -->
# Questions
<!-- <img class="slide-image" showInPresentation="true"  src="imgs/questions.jpg" style="height:40%; left:30%; top:30; border-radius: 10px;" /> -->


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
