<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->
# Pipes and Directives
##  In Angular

<div class="signature">
    <p class="signature-course">Angular</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

<!-- attr: {class:"slide-section"} -->
# Pipes Overview
## What are Pipes? Built-in and Custom Pipes

# Pipes Overview

- What are pipes?
  - A way to transform the models
    - i.e. format a date, create strings to uppercase
    - sort, filter, etc...

<!-- attr: { hasScriptWrapper: true, style:"font-size: 0.8em"} -->
# Built-in Pipes

- There are a number of built-in pipes
  - date, uppercase, etc...
- How to use pipes?
  - Use the predefined operator `|`:

    ```html
    <h1>My birthday is on {{birthday}}</h1>
    ```

    - Prints something like `Tue Dec 13 2016 09:43:44 GMT+0200 (EET)`
  - There is a pipe for formating date:

    ```html
    <h1>My birthday is on {{birthday | date}}</h1>
    ```
    - Prints something like `Dec 13, 2016`

<!-- attr: {class:"slide-section"} -->
#   Date Pipe
##  [Live Demo](http://)

# Other built-in pipes

- `uppercase` prints the strings UPPERCASE
- `lowercase` prints the strings lowercase
- `currency` prints a number as currency
  - Needs internatiolization polyfill
- `decimal` formats numbers

<!-- attr: {class:"slide-section"} -->
#   Other Built-in Pipes
##  [Live Demo](http://)

<!-- section start -->

<!-- attr: {class:"slide-section"} -->
# Custom Pipes
## Create our pipes

<!-- attr: {style: "font-size: 0.9em"} -->
# Custom Pipes

- Angular provides a way to create custom pipes
  - Define a custom behavior
- How?
  - Use the `@Pipe` decorator and implement `PipeTransform` interface

- _Example:_

```
@Pipe({name: "filterByPower"})
export FilterByPowerPipe implements PipeTransform {
  transform(superheroes: any[], power: string){
    return superheroes.filter(sh => sh.powers.includes(power));
  }
}
```

- Do not forget to add it in a module

<!-- attr: {class:"slide-section"} -->
# Custom Pipes
##  Live Demo


<!-- section start -->

<!-- attr: {class:"slide-section"} -->
# Directives
##  Component, Structure and Attribute

# Directives

- Directives aim to extends the static nature of HTML
  - With directives we can create custom HTML elements, attributes and flow (if, for) inside of HTML
- There are three types of directives
  - Component (`@Component`)
    - They create HTML elements
  - Structure (`*ngIf`, `*ngFor`)
    - Write simple programming logic in HTML
  - Attribute
    - Allow to define custom attributes

#   Attribute Directives

- To create Attribute directives:
  1.  Create a class
  2.  Mark it as `@Directive`
  3.  Provide a `selector`
    - The name of the attribute
  4.  Do some pretty and hard things inside


<!-- attr: {hasScriptWrapper: true, style: "font-size: 0.75em"} -->
# Attribute Directives

- Example:

  - Directive definition:

    ```js
    @Directive({selector: '[highlight-item]'})
    class HighlightItemDirective {
      bgColor: string;
      constructor(private elementRef: ElementRef) {
        // elementRef is a reference to the
        // DOM element, where the directive is used
        this.bgColor = "yellow";
      }

      // Attach an event to the DOM element,
      // where the directive is used
      @HostListener('click') onItemClick() {
           this.elementRef.nativeElement.parentElement.style.color = this.bgColor;
           this.elementRef.nativeElement.parentElement.style.background = invert(this.bgColor);
       }
    }
    ```

  - Usage:

    ```html
      <div highlight-item> I am highlated</div>
    ```

    <!-- attr: {class:"slide-section"} -->
# Attribute Directives
##  [Live demo](http://)

# Attribute Directives with More Behavior

- Attribute directives can add more attributes to the HTML elements
  - Using `@Input` properties
    - More on `@Input` later
  - i.e. set the highlight color

<!-- attr: { hasScriptWrapper: true} -->
# Attribute Directives with More Behavior
- How?
  - Just mark the `bgColor` property with `Input()`

    ```js
    @Input() bgColor: string;
    ```

  - And set it in the HTML:

    ```html
    <div highlight-item bgColor="purple"> I am highlated</div>
    ```

    <!-- attr: {class:"slide-section"} -->
# Attribute Directives with More Behavior
##  [Live demo](http://)

<!-- section start -->
<!-- attr: {class:"slide-section"} -->
# Questions
##  Pipes and Directives
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
