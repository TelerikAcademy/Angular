<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

# Angular Data Binding
## {{}} () [] [()]
<div class="signature">
    <p class="signature-course">Angular</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:75%; top:50%; border-radius: 10px;" /> -->

<!-- section start -->
<!-- attr: {id: 'table-of-contents'} -->
# Table of Contents
- Data Binding
- One-way
  - Interpolation
  - Property binding
  - Event binding
  - Two way binding


<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Data Binding  -->

<!-- attr: { hasScriptWrapper:true } -->
# Data Binding

- Data binding is a mechanism for coordinating what users see with application data values
<!-- <img class="slide-image" showInPresentation="true"  src="imgs/databinding.png" style="width:40%; left:15%; top:30%; border-radius: 10px;" /> -->

<!-- attr: { hasScriptWrapper:true } -->
# Data Binding
- Once we start data binding, we are no longer working with HTML attributes
- We aren't setting attributes
- We are setting the properties of DOM elements, components, and directives
- Template binding works with properties and events, not attributes
- **Attributes initialize DOM properties and then they are done. Property values can change; attribute values can't.**

<!-- attr: { hasScriptWrapper:true } -->
# Data Binding Types

- There are a four ways to bind data in Angular:
  - **interpolation** - `{{name}}`
  - **property binding** - `[innerHTML]`
  - **two-way binding** - `[(name)]`
  - **event binding** - `(click)`

<!-- attr: { hasScriptWrapper:true } -->
# Data Binding Types
<!-- <img class="slide-image" showInPresentation="true"  src="imgs/bindings.png" style="width:70%; left:15%; top:10%; border-radius: 10px;" /> -->

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Interpolation
 ## {{pesho.age}}  -->

<!-- attr: { hasScriptWrapper:true } -->
# Interpolation

- The material between the braces is often the name of a component property
- Angular replaces that name with the string value of the corresponding component property

```
@Component({
    selector: 'demo-home',
    templateUrl: '<div>{{title}}</div>'
})
export class HomeComponent {
    title: string;

    constructor() {
        this.title = 'Welcome Home';
    }
}
```

<!-- attr: { hasScriptWrapper:true } -->
# Interpolation

- Angular evaluates all expressions in double curly braces
- Converts the expression results to strings, and links them with neighboring literal strings


<!-- attr: { hasScriptWrapper:true } -->
# Template expressions

- A template expression produces a value
- We write template expressions in a language that looks like JavaScript
- JavaScript expressions that have or promote side effects are prohibited, including:
  - assignments **(=, +=, -=, ...)**
  - **new**
  - chaining expressions with **;** or **,**
  - increment and decrement operators **(++ and --)**

<!-- attr: { hasScriptWrapper:true } -->
# Template expressions

- Other notable differences from JavaScript syntax include:

  - no support for the bitwise operators **|** and **&**
  - new template expression operators, such as **|** and **?**

<!-- attr: { hasScriptWrapper:true } -->
# Template expressions
- Template expressions cannot refer to anything in the global namespace
- The expression context is typically the component instance, which is the source of binding values

[More about expressions](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#template-expressions)

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Property Binding
 ## [hidden]="isHidden"  -->

<!-- attr: { hasScriptWrapper:true } -->
# Property binding
- We write a template property binding when we want to set a property of a view element to the value of a template expression

```
<img [src]="headerImageUrl">

<button [disabled]="isEnabled">Click me</button>

<div [ngClass]="classes">[ngClass] bind </div>
```

<!-- attr: { hasScriptWrapper:true } -->
# Property or Interpolation

- We often have a choice between interpolation and property binding
- There is no technical reason to prefer one form to the other

```
<p><img src="{{heroImageUrl}}"> interpolated image.</p>
<p><img [src]="heroImageUrl"> property bound image.</p>

<span>"{{title}}" interpolated title.</span>
<span [innerHTML]="title"></span> property bound title.
```

<!-- attr: { hasScriptWrapper:true } -->
# Attribute Binding
- We must use attribute binding when there is no element property to bind

```
<table border=1>
  <!--  expression calculates colspan=2 -->
  <tr><td [attr.colspan]="1 + 1">One-Two</td></tr>

  <!-- ERROR: There is no `colspan` property to set!
    <tr><td colspan="{{1 + 1}}">Three-Four</td></tr>
  -->

  <tr><td>Five</td><td>Six</td></tr>
</table>
```


<!-- attr: { hasScriptWrapper:true } -->
# Class Binding

- We can add and remove CSS class names from an element’s class attribute with a class binding
  - **[class.class-name]**
- Prefer **[ngClass]**

```
<p [class]="myClass">Styled with [class] - All or nothing</p>
<p [class.myClass]="true">Styled with [class.name] - All or nothing</p>
```

<!-- attr: { hasScriptWrapper:true } -->
# Style Binding

- We can set inline styles with a style binding
  - **[style.style-property]**
  - valid syntax (**style.font-size** or **style.fontSize**)
- Prefer [ngStyle]

```
<p 
[style.color]="'yellow'"
[style.font-size.px]="40"
[style.background-color]="'black'">
  Styled Inline
</p>
```


<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Event Binding
 ## (click) ="showMessage()"  -->


<!-- attr: { hasScriptWrapper:true } -->
# Event Binding

- One-way data binding from an element to a component
  - Name between parentheses — identifies the target event
  - information about the even through an event object named **$event**
- You can define custom events

```
<button (click)="showMessage()">Show</button>
or
<button on-click="showMessage()">Show</button>
```

<!-- attr: { hasScriptWrapper:true } -->
# Event Binding

- The shape of the event object is determined by the target event
  - If the target event is a native DOM element event, then **$event** is a **DOM event object**

```
<input [value]="title"
       (input)="title=$event.target.value" >
```


<!-- attr: { hasScriptWrapper:true } -->
# Custom Events

- Directives typically raise custom events with an Angular EventEmitter
- The component defines a property that returns an EventEmitter
- When the user interacts with the component, the later invokes the method, telling the EventEmitter to emit an object 
- When the event fires, Angular calls the parent component's corresponding method

<!-- attr: { hasScriptWrapper:true } -->
# Custom Events

- Child component

```
// child.component.ts
@Output() alertMsg: EventEmitter<string> =
   new EventEmitter<string>();

onAlert() { //doSomething }

// child.component.html
<button (click)="onAlert()">Message</button>
```

<!-- attr: { hasScriptWrapper:true } -->
# Custom Events

- Parent component

```
// parent.component.ts
showAlert(event) { //doSomething with the event }

// parent.component.html
<child (alertMsg)="showAlert($event)"></child>
```

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Two Way Data Binding
 ## [(ngModel)] = "title"  -->


<!-- attr: { hasScriptWrapper:true } -->
# Banana in a box

- Angular does not come with built-in two-way data binding anymore
- APIs that allow to implement this type of binding using property and event bindings
- We want to both display a data property 
- We want to update that property when the user makes changes

<!-- attr: { hasScriptWrapper:true } -->
# Banana in a box

- The **[(x)]** syntax combines the brackets of property binding, **[x]**, with the parentheses of event binding, **(x)**
  - You should have **x** property
  - And **xChange** event




<!-- attr: { hasScriptWrapper:true } -->
# Banana in a box

- The two-way binding syntax is really just syntactic sugar for a property binding and an event binding

- This

```
<my-element [(size)]="fontSizePx"></my-element>
<div [style.font-size.px]="fontSizePx">Resizable Text</div>
```

- Becomes this

```
<my-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></my-sizer>
```

<!-- attr: { hasScriptWrapper:true } -->
# NgModel

- Enables two-way binding to form elements
  - We need FormsModule

- We can do this
  - Not very convenient
  - How to update the data property

```
<input [value]="title"
       (input)="title = $event.target.value" >
```


<!-- attr: { hasScriptWrapper:true } -->
# NgModel

- **NgModel** hides this

```
<input
  [ngModel]="title"
  (ngModelChange)="title = $event">
```

- **NgModel** directive only works for specific form elements
- For custom components we can name the value and event properties to suit Angular's basic two-way binding syntax and skip **NgModel**

<!-- attr: { hasScriptWrapper:true } -->
<iframe src="https://embed.plnkr.co/aOaP7C57oFo40zxhkrhY/" frameborder="0" width=100%; height=100%></iframe>

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
