<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->
# Forms and form controls
## In Angular

<div class="signature">
    <p class="signature-course">Angular</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

<!-- attr: {class:"slide-section"} -->

# Forms Overview
##  What are forms?

<!-- attr: {style: 'font-size: 0.9em'} -->
# Forms Overview

- Forms a **really important** part of any **data-driver application**
  - They are the primary way to **collect data from the user**
- We have seen forms many times:
  - When we **login** or **register** in an application
  - When **creating orders** for pizza, shoes or anything else...
- The forms have the so called **input fields**
  - Different way to collect data
  - Text fields, radio buttons, checkboxes, dropdown lists, etc...

<!-- attr: {hasScriptWrapper: true} -->
# Forms in Angular

- Angular generates HTML and so the forms can be generated as usual:

  ```html
  <form method="..." action="..." >
  ...
  </form>
  ```

- Yet, with data-binding, Angular provides a easier way to work with forms


<!-- attr: {showInPresentation: true, style:'font-size:1.1em'}  -->
# Forms in Angular

- Angular has two-way data-binding between an object in the component and the input fields from the template
  - Using `ngModel`
  - Updates data from the component to the view, as well as from the view to the component

- Do not forget add `FormsModule` in `imports`!
  - If not it will not form
  - Provides the directive `ngModel`

<!-- attr: {showInPresentation: true}  -->
# Forms in Angular: Example
- The component
  ```js    
  @Component({/* ... */ })
  export class AppComponent {
    superhero: Superhero;
    power: string;

    constructor() {        
      this.powers = ['Intelligence', 'Superstrength', 'Flying']
      this.superhero = { name: '', secretIdentity: '', power: '' };
    }

    createSuperhero(){
      //  The magic happends here
    }
  }
  ```


<!-- attr: {showInPresentation: true, hasScriptWrapper: true}  -->
# Forms in Angular: Example

- Template:

```html
<form>
    <input name="name"
           [(ngModel)]="superhero.name"
           placeholder="Enter Superhero name:"/>
    <input name="secretIdentity"
          [(ngModel)]="superhero.secretIdentity"
          placeholder="And their secret Identity" />
  <button (click)="createSuperhero()">Create</button>
</form>
```



<!-- section start -->
<!-- attr: {class:"slide-section"} -->
# Questions
##  Forms and Form Controls
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
