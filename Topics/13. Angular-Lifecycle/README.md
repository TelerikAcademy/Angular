<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

# Application Lifecycle
## ngOnInit()
<div class="signature">
    <p class="signature-course">Angular 2</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:75%; top:50%; border-radius: 10px;" /> -->

<!-- section start -->
<!-- attr: {id: 'table-of-contents'} -->
# Table of Contents
- Lifecycle Hooks
  - Constructor (not a hook)
  - OnChanges
  - OnInit
  - OnDestroy
  - DoCheck
  - AfterContent Hooks
  - AfterView Hooks


<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Lifecycle Hooks -->


<!-- attr: { hasScriptWrapper:true } -->
# Lifecycle Hooks

- Angular calls **lifecycle hook methods** on directives and components as it creates, changes, and destroys them

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/hooks-in-sequence.png" style="height:60%; left:65%; top:35%; border-radius: 10px;" /> -->

<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Constructor -->

<!-- attr: { hasScriptWrapper:true } -->
# Constructor

- The **constructor** of the component class is called **before any other component lifecycle hook**
- Inject all the dependencies in the **constructor**
- The constructor isn't an Angular hook

<!-- attr: { hasScriptWrapper:true } -->
# Constructor

```
import {Component} from '@angular/core';
import {UserService} from './../core/userService';
@Component({
  selector: ‘user-list’,
  template: `
    <ul>
      <li *ngFor="#user of users">{{user.username}}</li>
    </ul>
  `
})
class UserListComponent {
  users:Array<any>;
  constructor(private userService: UserService) {  }
}
```

<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # OnChanges -->


<!-- attr: { hasScriptWrapper:true } -->
# OnChanges

- Respond when **Angular (re)sets** data-bound **input properties**
- Called **before ngOnInit** and whenever one or more data-bound input properties change
- It executes, every time the value of an **input property changes**
- The method receives a **SimpleChanges object** of current and previous property values

<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # OnInit -->

<!-- attr: { hasScriptWrapper:true } -->
# OnInit

- Use **ngOnInit** for two main reasons
  - To perform complex initializations shortly after construction
  - To set up the component after Angular sets the input properties

- Don't fetch data in a component constructor
  - An **ngOnInit** is a good place for a component to fetch its initial data

- Angular only calls **ngOnInit once**


<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # OnDestroy -->

<!-- attr: { hasScriptWrapper:true } -->
# OnDestroy

- The **ngDestroy** is called in a component’s lifecycle just before the instance of the component is finally destroyed
- This is the place to free resources that won't be garbage collected automatically
- Unsubscribe from observables and DOM events


<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # DoCheck -->

<!-- attr: { hasScriptWrapper:true } -->
# DoCheck

- Use the **DoCheck hook** to detect and act upon changes that **Angular doesn't catch on its own**
- We can use this lifecycle hook to extend the check with our own custom check logic
- It is called when change detection runs so you can implement your custom change detection action


<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # AfterContent Hooks -->

<!-- attr: { hasScriptWrapper:true } -->
# AfterContentInit

- **ngAfterContentInit** lifecycle hook is called after ngOnInit
- When the component or directive’s content has been initialised
- The **AfterContent hooks** concern **ContentChildren**
  - The child components that Angular projected into the component

<!-- attr: { hasScriptWrapper:true } -->
# AfterContentChecked

- Lifecycle hook that is called **after every check** of a directive's content
- Even if the bindings haven’t changed


<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # AfterView Hooks -->

<!-- attr: { hasScriptWrapper:true } -->
# AfterViewInit

- Called after **ngAfterContentInit** when the component’s view has been initialised
- **Applies to components only**
- The **AfterView** hooks concern **ViewChildren**
  - The child components whose element tags appear within the component's template


<!-- attr: { hasScriptWrapper:true } -->
# AfterViewChecked

- Lifecycle hook that is called **after every check** of the component’s view
- **Applies to components only**
- Even if the bindings haven’t changed

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
