<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

# Services and Dependency Injection
## @Injectable()
<div class="signature">
    <p class="signature-course">Angular 2</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:75%; top:50%; border-radius: 10px;" /> -->

<!-- section start -->
<!-- attr: {id: 'table-of-contents'} -->
# Table of Contents
- Services


<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Definitions -->


<!-- attr: { hasScriptWrapper:true } -->
# What is a Service

- Removes duplicated code (**DRY**)
- Use them in different parts of our application
- Services are not an Angular only feature
    - Multiple components may need access to data in our application

```
usersService.getAll();
usersService.getById(id);
usersService.add(user);
usersService.delete(user);
```

<!-- attr: { hasScriptWrapper:true } -->
# What is Dependency Injection

- **Dependency injection** is basically providing the objects that an object needs (**its dependencies**)
- Dependencies can be injected into objects by many means

```
class Laptop{
  constructor(){
    this.mainboard = new Mainboard();
    this.cpu = Cpu.getInstance();
    // And so on
  }
}
```

<!-- attr: { hasScriptWrapper:true } -->
# What is Dependency Injection

```
class Laptop{
  constructor(mainboard, cpu){
    this.mainboard = mainboard;
    this.cpu = cpu;
  }
}
```

- Now the problem seems solved
  - We get the dependencies in the constructor
  - Should we create all of the dependencies by ourselves?


<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Dependency Injection in Angular 
## How it wokrs? -->

<!-- attr: { hasScriptWrapper:true } -->
# DI in Angular

- **Injector** - The injector object that exposes APIs to us to create instances of dependencies.
- **Provider** - A provider is like a recipe that tells the injector how to create an instance of a dependency. A provider takes a token and maps that to a factory function that creates an object.
- **Dependency** - A dependency is the type of which an object should be created

<!-- attr: { hasScriptWrapper:true } -->
# Injector

- An injector instantiates objects lazily, only when asked for, and then caches them

```
class Engine {
}

class Car {
  constructor(@Inject(Engine) engine) {
  }
}

var inj = Injector.resolveAndCreate([
  bind(Car).toClass(Car),
  bind(Engine).toClass(Engine)
]);
var car = inj.get(Car);
```

<!-- attr: { hasScriptWrapper:true } -->
# Injector

- Compare the next three examples

```
var car = inj.get(Car); //instantiates both an Engine and a Car
```

```
var engine = inj.get(Engine); //instantiates an Engine
var car = inj.get(Car); //instantiates a Car (reuses Engine)
```

```
var car = inj.get(Car); //instantiates both an Engine and a Car
var engine = inj.get(Engine); //reads the Engine from the cache
```

<!-- attr: { hasScriptWrapper:true } -->
# Child Injector

- Injectors are hierarchical

```
var parent = Injector.resolveAndCreate([
  bind(Engine).toClass(TurboEngine)
]);
var child = parent.resolveAndCreateChild([Car]);

// uses the Car binding from the child injector
// and Engine from the parent injector.
var car = child.get(Car); 
```

<!-- attr: { hasScriptWrapper:true } -->
# Child Injector

- Injectors form a tree

```
 GrandParentInjector
   /              \
Parent1Injector  Parent2Injector
  |
ChildInjector
```

<!-- attr: { hasScriptWrapper:true } -->
# Child Injector 

- Example

```
class Car {
  constructor(e: Engine){}
}
```

- DI will start resolving Engine in the same injector where the Car binding is defined
- It will check whether that injector has the Engine binding
-  If it is the case, it will return that instance
- If not, the injector will ask its parent whether it has an instance of Engine


<!-- attr: { hasScriptWrapper:true } -->
# Child Injector

- **DI Does Not Walk Down**
  - Dependency resolution only walks up the tree


```
var parent = Injector.resolveAndCreate([Car]);
var child = parent.resolveAndCreateChild([
  bind(Engine).toClass(TurboEngine)
]);

// will throw NoProviderError
parent.get(Car); 
```

<!-- attr: { hasScriptWrapper:true } -->
# Bindings

- You can bind to a class, a value, or a factory
- It is also possible to alias existing bindings

```
var inj = Injector.resolveAndCreate([
  bind(Car).toClass(Car),
  bind(Engine).toClass(Engine)
]);
```

```
var inj = Injector.resolveAndCreate([
  Car,  // syntax sugar for bind(Car).toClass(Car)
  Engine
]);
```

<!-- attr: { hasScriptWrapper:true } -->
# Bindings

```
var inj = Injector.resolveAndCreate([
  bind(Car).toValue(new Car(new Engine()))
]);
```

```
var inj = Injector.resolveAndCreate([
  bind(Car).toFactory((e) => new Car(e), [Engine]),
  bind(Engine).toFactory(() => new Engine())
]);
```

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Dependency Injection in Angular 
## How to use it? -->

<!-- attr: { hasScriptWrapper:true } -->
# DI in Angular

- Do we have to create injectors manually when we build Angular components?
  - NO :)

```
@Component({
  selector: 'app-root',
  template: '<h1>{{currentUser}}</h1>'
})
export class AppComponent {
  currentUser: user;
}
```

<!-- attr: { hasScriptWrapper:true } -->
# Using Services

- Creating a service for users

```
class UserService {
  // May come from database
  user = 'Pesho';

  getCurrentUser() {
    return this.user;
  }
}
```
<!-- attr: { hasScriptWrapper:true } -->
# Providers

- A provider is something that can create or deliver a service
- We should register **Providers** but where?
  - Register providers for dependencies used throughout the application in the root application component, AppComponent


```
@NgModule({
  imports: [BrowserModule],
  providers: [UserService],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}
```

<!-- attr: { hasScriptWrapper:true } -->
# Providers

- If we want to have multiple service instances (sandboxing)
  -  We need a separate instance of the service for each component
  - Each service has its own work-state, isolated from the service-and-state of a different component
  - We call this sandboxing because each service and component instance has its own sandbox to play in

<!-- attr: { hasScriptWrapper:true } -->
# Injecting dependencies

- There is a problem when we try to inject a dependency in a service 
  - We need **Http** in our services

```
import { Http } from '@angular/http';

class UserService {
  users:Array<any>;

  constructor(http: Http) { ... }
}
```

```
Cannot resolve all parameters for UserService(?)...
```

<!-- attr: { hasScriptWrapper:true } -->
# @Inject()

- We could use **@Inject()** decorator to ask for a dependency of certain type

```
import { Inject } from '@angular/core';
import { Http } from '@angular/http';

class UserService {
  users:Array<any>;

  constructor(@Inject(Http) http:Http) { ... }
}
```

<!-- attr: { hasScriptWrapper:true } -->
# @Injectable()

- The problem with **@Inject()** decorator is that we have Angular specifics in our component
- Putting just anything that is a decorator on a class doesn’t sound really appropiate
- **@Injectable()** decorator solves this problem

```
import { Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
class UserService {
  users:Array<any>;

  constructor(http:Http) { ... }
}
```


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
