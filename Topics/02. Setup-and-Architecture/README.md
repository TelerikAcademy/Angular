<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

# Architecture and Setup
## Building blocks, structure, module bundlers
<div class="signature">
    <p class="signature-course">Angular 2</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:75%; top:50%; border-radius: 10px;" /> -->

<!-- section start -->
<!-- attr: {id: 'table-of-contents'} -->
# Table of Contents
* What is Angular 2
* Architecture
* Setup your project

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Definitions and Architecture  -->

<!-- attr: { hasScriptWrapper:true } -->
# What is Angular 2
*  Angular 2 is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/overview.png" style="height:40%; left:25%; top:50%; border-radius: 10px;" /> -->


<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Building Blocks  -->

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

- Angular modules (NgModules) are different from JavaScript modules
    - There is always a root module
    - The modules are decorated with **@NgModule** decorator

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/module.png" style="height:40%; left:25%; top:50%; border-radius: 10px;" /> -->

<!-- attr: { hasScriptWrapper:true } -->
# Modules
- The metadata in **@NgModule**
    - Tells Angular how to compile and run module code
    - Identifies the module's own components, directives and pipes
    - May add service providers to the application dependency injectors

<!-- attr: { hasScriptWrapper:true } -->
# Components

- A **component** controls a patch of screen called a view.
- Angular creates, updates, and destroys components
- Angular components have lifecycle
    - You can use the hooks (`ngOnInit()`, `ngOnChanges()`, etc.)

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/component.png" style="height:30%; left:50%; top:60%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Templates

- A **template** is a form of HTML that tells Angular how to render the component.
- The template is constructed from HTML elements
- There are additional elements you can use
    - `*ngFor, {{post.title}}, <demo-app></demo-app>`


<!-- <img class="slide-image" showInPresentation="true"  src="imgs/template.png" style="height:30%; left:50%; top:60%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Metadata

- The **metadata** is used to tell Angular how to process classes
- The **metadata** is passed using **decorator**

```ng
@Component({
    moduleId: module.id,
    selector: 'demo-app',
    template: `<div>Demo app</div>`
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

- Without a framework you should push or pull data from and to the HTML
- Angular supports four forms of data binding

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/databinding.png" style="height:45%; left:10%; top:45%; border-radius: 10px;" /> -->

<!-- attr: { hasScriptWrapper:true } -->
# Directives

- A **component** is a **directive** with template
- Angular templates are dynamic so the framework transforms the DOM according to the instructions from the directives
    - `*ngFor, [(ngModel)], etc`
- `@Component` decorator is extended `@Directive` decorator
    - just added template



<!-- attr: { hasScriptWrapper:true } -->
# Services

- Service could be almost any class with well-defined purpose
- Nothing special for services in Angular
- Services take the responsibility of doing something special from the components
    - A component should not log to the console itself

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/service.png" style="height:25%; left:10%; top:65%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Dependency injection

- **Dependency injection (DI)** is the process of supplying a resource that a given piece of code requires
- Angular can tell which services a component needs by looking at the types of its constructor parameters

```ng
constructor(private service: HeroService) { }
```

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/injector-injects.png" style="height:20%; left:5%; top:75%; border-radius: 10px;" /> -->

<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Folder structure  -->

<!-- attr: { hasScriptWrapper:true } -->
# Folder structure

- <project root>
    - app
        - heroes
            - hero
                - hero.component.ts
                - index.ts
            - heroes.component.ts
            - heroes.module.ts
            - heroes-routing.ts
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



<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Setup an Angular project  -->


<!-- attr: { hasScriptWrapper:true } -->
# Things we need

- Node.js and npm
- TypeScript (JavaScript, Dart)
- IDE or text editor by your choice
    - Most suitable VsCode
- [Angular Docs](https://angular.io/docs/ts/latest/)
- [Style Guide](https://angular.io/styleguide)
- [Angular Seed - optional](https://github.com/mgechev/angular-seed)

<!-- attr: { hasScriptWrapper:true } -->
# Packages we need
- We will need npm packages to be able to develop Angular 2 applications
- **package.json** is the file which takes care for the packages we need

<!-- attr: { hasScriptWrapper:true } -->
# package.json 
- Dependencies 
    - Mimimum set of dependencies to run Angular project

```json

  "dependencies": {
    "@angular/common": "~2.2.0",
    "@angular/compiler": "~2.2.0",
    "@angular/core": "~2.2.0",
    "@angular/platform-browser": "~2.2.0",
    "@angular/platform-browser-dynamic": "~2.2.0",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.8",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "^0.19.41",(optional -> Webpack or other)
    "zone.js": "^0.6.25"
  }
```

<!-- attr: { hasScriptWrapper:true } -->
# package.json
- Dev dependencies 
    - We need typescript 
    - lite-server is optional. You can use any other package for starting the server

```json
  "devDependencies": {
    "lite-server": "^2.2.2",
    "typescript": "^2.0.3"
  }
```

<!-- attr: { hasScriptWrapper:true } -->
# Typescript config 

- TypeScript - primary language for Angular development
- Browsers need TypeScript to be 'transpiled' into JavaScript
    - using tsc compiler
- We need **tsconfig.json** file to be created
    - [TypeScript configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html)


<!-- attr: { hasScriptWrapper:true } -->
# tsconfig.json

```json{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": ["es2015", "dom"],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true,
    "typeRoots": [
      "../../node_modules/@types/",
    
    ]
  },
  "compileOnSave": false,
  "exclude": [
    "node_modules/*",
  ]
}
```


<!-- attr: { hasScriptWrapper:true } -->
# tsconfig.json

- Compiler options
    - **target** - the target version of JavaScript files
    - **module** - module code generation 
    - **moduleResolution** - how modules get resolved
    - **sourceMap** - generate source maps for the minified files
    - **emitDecoratorMetadata** and experimentalDecorators - adding experimental support for decorators
    - **lib** - override list of declarations file to be included

<!-- attr: { hasScriptWrapper:true } -->
# tsconfig.json

- Compiler options
    - **noImplicitAny** - if the compiler cannot infer the variable type it generates JavaScript file but it also reports an error
    - **suppressImplicitAnyIndexErrors** - when noImplicitAny is set to true you may get implicit index errors. You can disable them with this option
    - **typeRoots** - list of folders to include type definitions from


<!-- attr: { hasScriptWrapper:true } -->
# Module bundlers
- Module bundling is simply the process of stitching together a group of modules (and their dependencies) into a single file (or group of files) in the correct order
- **SystemJS**, **Webpack** and many more
    - Angular CLI uses Webpack (for now :) )

<!-- attr: { hasScriptWrapper:true } -->
# HTML file

- We need an **index.html** file
    - Standard html file with some script tags in it 
        - If we choose to use Webpack, we don't need any script tag in it
- Script tags for using SystemJS

```html
<scriрt src="node_modules/core-js/client/shim.min.js"></scriрt>
<scriрt src="node_modules/zone.js/dist/zone.js"></scriрt>
<scriрt src="node_modules/reflect-metadata/Reflect.js"></scriрt>
<scriрt src="node_modules/systemjs/dist/system.src.js"></scriрt>
<scriрt src="systemjs.config.js"></scriрt>
<scriрt>
    System.import('app').catch(function(err){ console.error(err); });
</scriрt>
```

<!-- attr: { hasScriptWrapper:true } -->
# Configure module bundlers

- We need to configure module bundlers
    - [SystemJS](https://github.com/systemjs/systemjs)
        - [systemjs.config.js](https://github.com/angular/quickstart)
    - [Webpack](https://webpack.github.io/docs/tutorials/getting-started/)
        - [webpack.config.js](https://angular.io/docs/ts/latest/guide/webpack.html)



<!-- section start -->
<!-- attr: {id: 'questions', class: 'slide-section', hasScriptWrapper:true} -->
# Questions
<!-- <img class="slide-image" showInPresentation="true"  src="imgs/questions.jpg" style="height:40%; left:30%; top:30 border-radius: 10px;" /> -->


<!-- attr: { showInPresentation: true, hasScriptWrapper: true} -->
# Free Training @ Telerik Academy

- Angular 2 Course
  - [Angular 2](http://academy.telerik.com/student-courses/web-design-and-ui/spa-applications-with-angular2/about)
- Telerik Software Academy
  - [telerikacademy.com](https://telerikacademy.com)
- Telerik Academy @ Facebook
  - [facebook.com/TelerikAcademy](https://facebook.com/TelerikAcademy)
- Telerik Academy Learning System
  - [telerikacademy.com](https://telerikacademy.com)
