<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

# Angular Components
## @Component, Templates
<div class="signature">
    <p class="signature-course">Angular</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:75%; top:50%; border-radius: 10px;" /> -->

<!-- section start -->
<!-- attr: {id: 'table-of-contents'} -->
# Table of Contents
- Components
- Shadow DOM
- Templates
  - Absolute path
  - Relative path

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Components  -->

<!-- attr: { hasScriptWrapper:true } -->
# What is a Component

- **Components** are the most **basic building block** of an UI in an Angular application
- A **component** controls the view, and declares reusable UI blocks
- A **component** must belong to an `NgModule` in order for it to be usable by another component or application.
- Anything visible to the end user

<!-- attr: { hasScriptWrapper:true } -->
# What is a Component

- Angular **creates, updates, and destroys components**  as the user moves through the application

- Example component
```
@Component({
    selector:'demo-hero',
    template: `<div>{{name}}</div>`
})
export class HeroComponent {
    name: string = 'Pesho';
}
```


<!-- attr: { hasScriptWrapper:true } -->
# Component Tree

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/component-tree.png" style="width:65%; left:15%; top:15%; border-radius: 10px;" /> -->



<!-- attr: { hasScriptWrapper:true } -->
# Naming conventions

- Naming the component file
  - `[name].component.ts`
  - [dash-case (kebab-case)](https://angular.io/docs/ts/latest/guide/glossary.html#!#kebab-case)

- Naming the component (class)
  - `Pascal case`
  - `[Name]Component`




<!-- attr: { hasScriptWrapper:true } -->
# Metadata

- **@Component** is a decorator function which contains metadata for the component

- Some of the metadata properties 

  - `selector` - instance of the component in the HTML
    - `selector` **MUST** be unique! You will use external libraries so be sure to make it unique!
  - `template` - inline-defined template for the view
    - `templateUrl` -  url to an external file containing a template for the view

<!-- attr: { hasScriptWrapper:true } -->
# Metadata

- Some of the metadata properties 
  - `styles` -  inline-defined styles to be applied to this component's view
    - `styleUrls` - list of urls to stylesheets to be applied to this component's view
  - `moduleId` - ES/CommonJS module id of the file in which this component is defined
  - `providers` - list of providers available to this component and its children

[Full list of the properties](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html)

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Shadow DOM  -->

<!-- attr: { hasScriptWrapper:true } -->
# Shadow DOM

- Shadow DOM addresses the DOM tree encapsulation problem
  - Allows us to hide DOM logic behind other elements
- It introduces scoped styles to the web platform
- Shadow DOM is designed as a tool for building component-based apps
  - Angular uses components


<!-- attr: { hasScriptWrapper:true } -->
# Shadow DOM
- Live Demo
<div style="position: absolute; left:10%; width:100%;"><iframe src="https://embed.plnkr.co/fVIYs97WzjwjYnuDE75u/" frameborder="0" width=70%> </iframe></div>

<br/>
<br/>
- There is a boundary between what you, the Web developer can reach and what’s considered implementation details, thus inaccessible to you


<!-- attr: { hasScriptWrapper:true } -->
# Shadow DOM Angular
- **Components** in Angular can be shared across applications
- **Components** in Angular are not **web components**, but they take advantage of them
- Whenever we create a component, Angular puts it’s template into a `shadowRoot`, which is the **Shadow DOM** of that particular component
<div style="position: absolute; left:10%; width:100%"><iframe src="https://embed.plnkr.co/aY2Bt4AsUcbsfesvoORX/" frameborder="0" width=70%></iframe></div>



<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Templates  -->

<!-- attr: { hasScriptWrapper:true } -->
# What is a Template

- The template is form of HTML that tells Angular how to render the component
- Similar to plain HTML but with some key differences

```
<h2>Hero List</h2>
<p><i>Pick a hero from the list</i></p>
<ul>
  <li *ngFor="let hero of heroes" (click)="selectHero(hero)">
    {{hero.name}}
  </li>
</ul>
<hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>
```

<!-- attr: { hasScriptWrapper:true } -->
# What is a Template

- Angular template syntax
  - `<hero-detail>`
  - `*ngIf`
  - `{{hero.name}}`
  - `(click)`
  - `[hero]`

[https://angular.io/docs/ts/latest/guide/template-syntax.html](https://angular.io/docs/ts/latest/guide/template-syntax.html)



<!-- attr: { hasScriptWrapper:true } -->
# Define a Template

- You can inline the **template** in the **component**
  - You should use the property `template`
  - Using single quotes [**'**] or [**`**]
  - The symbol **`** allows us to use multi-line inline templates

  ```
  @Component({
    selector: 'ng-app',
    template: `<h1>Text</h1>`
  })
  ```

<!-- attr: { hasScriptWrapper:true } -->
# Template Absolute Path

- Absolute path is the default. **Why?**
- Why can't **Angular** calculate the template and style URLs from the component file's location?
  - **Angular** apps can be loaded in many ways: 
    - from **individual files**
    - from **SystemJS packages**
    - from **CommonJS packages**, to name a few 

<!-- attr: { hasScriptWrapper:true } -->
# Template Absolute Path
- Angular apps can be loaded in many ways: 
  - We might generate modules in any of several formats 
  - We might not be writing modular code at all
- The **only location** Angular can be sure of is the URL of the **index.html** home page, the application root

<!-- attr: { hasScriptWrapper:true } -->
# Template Absolute Path

```
  @Component({
    selector: 'ng-app',
    templateUrl: './[path-to-template]/app.component.html'
  })
  ```

- What if we move our components to other packages?
- What if we want to reuse our components in other applications?
- Can we not use using relative-paths in our components ?

 

<!-- attr: { hasScriptWrapper:true } -->
# Template Relative Path

- Relative path FTW

 ```
  @Component({
    selector: 'ng-app',
    templateUrl: './app.component.html'
  })
  ```
  We get an Error

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/relative-path-error.png" style="width:100%; left:5%; top:60%; border-radius: 10px;" /> -->
  

<!-- attr: { hasScriptWrapper:true } -->
# Template Relative Path

- Setting `moduleId: module.id` in the `@Component` decorator 
  - If you don't have that then Angular will be looking for your files at the root level
- `moduleId` value is used by the Angular reflection processes and the `metadata_resolver component` to evaluate the fully-qualified component path before the component is constructed

<!-- attr: { hasScriptWrapper:true } -->
# Template Relative Path

- Template with relative path with `moduleId`


 ```ng
  @Component({
    // fully resolved filename; defined at module load time
    moduleId: module.id, 
    selector: 'ng-app',
    templateUrl: './app.component.html'
  })
  ```

<!-- attr: { hasScriptWrapper:true } -->
# Template Relative Path
## Webpack

- If we are using **Webpack**
  - [https://webpack.js.org/](https://webpack.js.org/)

- We do not need to set `moduleId` property in the metadata
- You can load templates and styles at runtime by adding **./** at the beginning of the **template** and **styles / styleUrls** properties that reference 

<!-- attr: { hasScriptWrapper:true } -->
# Template Relative Path
## Webpack
- The below example is fully valid when using **Webpack**


 ```ng
  @Component({
    selector: 'ng-app',
    templateUrl: './app.component.html'
  })
  ```

<!-- attr: { hasScriptWrapper:true } -->
# Template Relative Path
## Webpack

- But how **Webpack** handles our files
- **Webpack** will do a **require** behind the scenes to load the templates and styles

 ```ng
  @Component({
    selector: 'ng-app',
    template: require('./app.component.html')
  })
  ```


  - Notice that if you use this approach it will work
    - use `template` instead of `templateUrl`


<!-- attr: { hasScriptWrapper:true } -->
# Template Relative Path
## Webpack

- Lets look under the hood of **Webpack**
  - budled file from **Webpack**
<!-- <img class="slide-image" showInPresentation="true"  src="imgs/component-template-webpack.png" style="width:40%; left:5%; top:40%; border-radius: 10px;" /> -->

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/template-webpack.png" style="width:40%; left:5%; top:65%; border-radius: 10px;" /> -->


<!-- attr: { hasScriptWrapper:true } -->
# Transclusion

- **trans** - from cross
- **clusion** - from inclusion

- Taking content such as a text node or HTML, and injecting it into a template at a **specific entry point**
  - Done through ShadowDOM
  - Known as **Content Projection**

<!-- attr: { hasScriptWrapper:true } -->
# Transclusion
- HomeComponent

```
// home.component.ts
@Component({
  selector: 'demo-home',
  template: `
    <div class="home-comp">
      Content from home component!
      <ng-content></ng-content>
    </div>
  `
})export class HomeComponent {}
```

<!-- attr: { hasScriptWrapper:true } -->
# Transclusion
- AppComponent

```
// app.component.ts
@Component({
  selector: 'demo-app',
  template: `
    <demo-home>
      <h1 class="projected">My transcluded content!</h1>
    </demo-home>
  `
})export class AppComponent {}
```


<!-- attr: { hasScriptWrapper:true } -->
# Transclusion

- DOM output

```html
<div class="home-comp">
      Content from home component!
      <!-- <ng-content></ng-content> replaced with -->
      <h1 class="projected">My transcluded content!</h1>
</div>
```
- The **ng-content** element is replaced with the content provided

<div style="position: absolute; left:10%; width:100%"><iframe src="https://embed.plnkr.co/GLqDb8Rv7huJ3vb0Aina/" frameborder="0" width=70%></iframe></div>



<!-- attr: { hasScriptWrapper:true } -->
# Multi-slot Transclusion


- We talk to the DOM node directly

```html
// home.component.ts
@Component({
  selector: 'demo-home',
  template: `
    <ng-content select=".home-title"></ng-content>
    <ng-content select=".home-subtitle"></ng-content>`
})export class HomeComponent {}
```

<!-- attr: { hasScriptWrapper:true, style: 'font-size: 0.9em' } -->
# Multi-slot Transclusion

```
@Component({
  selector: 'demo-app',
  template: `
<h1>
  <demo-home>
    <div class="home-title">Hi from title!</div>
    <div class="home-subtitle">Hi from subtitle!</div>
  </demo-home>
</h1>`
})export class AppComponent {}
```

- DOM output

```
<h1>
	<demo-home>
      <div class="home-title">Hi from title!</div>
      <div class="home-subtitle">Hi from subtitle!</div>
    </demo-home>
</h1>
```

<!-- attr: { hasScriptWrapper:true, style: 'font-size: 0.9em' } -->
# Multi-slot Transclusion
- Live demo

<div style="position: absolute; left:10%; width:100%; height:100%"><iframe src="https://embed.plnkr.co/KzXHQFS4xBKA3Jak5cy6/" frameborder="0" width=70% height=50%></iframe></div>

<!-- attr: { hasScriptWrapper:true } -->
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
