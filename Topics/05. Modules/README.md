<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

# Angular Modules
## @NgModule
<div class="signature">
    <p class="signature-course">Angular</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:75%; top:50%; border-radius: 10px;" /> -->

<!-- section start -->
<!-- attr: {id: 'table-of-contents'} -->
# Table of Contents
* What is @NgModule
* Angular Modularity

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Definitions  -->

<!-- attr: { hasScriptWrapper:true } -->
# What is @NgModule

- Angular is modular 
- Angular modules consolidate components, directives and pipes into cohesive blocks of functionality
    - May add services too
- Class decorated with `@NgModule` decorator
    - Adding metadata which tells Angular how to compile and run module code


<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true} -->
<!-- # Angular modularity  -->

<!-- attr: { hasScriptWrapper:true } -->
# Angular modules

- Template parsing (JIT or AOT compilation)
- Grouping related functionality
- Which components and directives are meant to be used publicly vs internal implementation details

<!-- attr: { hasScriptWrapper:true } -->
# Angular vs ES6 Modules

- In modern JavaScript, every file is a module.

```
export class AppComponent { ... }
```

```
import { AppComponent }  from './app.component';
```

- An Angular Module is a feature of Angular itself.
    - Angular's NgModule also has imports and exports and they serve a similar purpose
    - An Angular module bounds declarable classes only


<!-- attr: { hasScriptWrapper:true } -->
# Angular vs ES6 Modules

- Typical JS Module
    - Wrap private details
    - Expose public API

- Angular Module
    - Mainly a template compilation context
    - Deifnes public API
    - Helps with dependency injection

<!-- attr: { hasScriptWrapper:true } -->
# @NgModule metadata

- Declare which components, directives and pipes belong to the module.
- Make some of those classes public so that other component templates can use them.
- Import other modules with the components, directives and pipes needed by the components in this module.
- Provide services at the application level that any application component can use.

<!-- attr: { hasScriptWrapper:true } -->
# Root app module

- The root module of Angular application (minimal)

```ng
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

<!-- attr: { hasScriptWrapper:true } -->
# Modules structure explained
- **imports** - A list of supporting modules.
    - in this case only the BrowserModule which is an Angular internal module
- **declarations** - A list of declarable classes, the component, directive and pipe classes that belong to this module

<!-- attr: { hasScriptWrapper:true } -->
# Modules structure explained

- **bootstrap** - A list of components that can be bootstrapped.
- **providers** - A list of dependency injection providers


<!-- attr: { hasScriptWrapper:true } -->
# Bootstraping

- We launch the app by bootstaping the **AppModule** in **main.ts** file

- JIT compilation

```ng
// The browser platform with a compiler
import { platformBrowserDynamic } 
from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
```

<!-- attr: { hasScriptWrapper:true } -->
# Browser Module
- The root application module **(AppModule)** of almost every browser application should import **BrowserModule** from `@angular/platform-browser`.

<!-- attr: { hasScriptWrapper:true } -->
# Browser Module
- Importing **BrowserModule** made all of its public components, directives and pipes visible to the component templates in **AppModule**
- More accurately, `NgIf` is declared in **CommonModule** from `@angular/CommonModule`

<!-- attr: { hasScriptWrapper:true } -->
# Browser Module
- **CommonModule** contributes many of the common directives that applications need including `ngIf` and `ngFor`
- **BrowserModule** imports **CommonModule** and re-exports it. The net effect is that an importer of **BrowserModule** gets **CommonModule** directives automatically.

<!-- attr: { hasScriptWrapper:true, style:'font-size:0.9em' } -->
# Browser Module
```
/*
 * The ng module for the browser.
 * @stable
 */
@NgModule({
  providers: [
    BROWSER_SANITIZATION_PROVIDERS, {provide: ErrorHandler, useFactory: errorHandler, deps: []},
    {provide: DOCUMENT, useFactory: _document, deps: []},
    {provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true},
    {provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true},
    {provide: EVENT_MANAGER_PLUGINS, useClass: HammerGesturesPlugin, multi: true},
    {provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig},
    {provide: DomRootRenderer, useClass: DomRootRenderer_},
    {provide: RootRenderer, useExisting: DomRootRenderer},
    {provide: SharedStylesHost, useExisting: DomSharedStylesHost},
    {provide: AnimationDriver, useFactory: _resolveDefaultAnimationDriver}, DomSharedStylesHost,
    Testability, EventManager, ELEMENT_PROBE_PROVIDERS, Title
  ],
  exports: [CommonModule, ApplicationModule]
})
```
<!-- attr: { hasScriptWrapper:true } -->
# Browser Module
```
export class BrowserModule {
  constructor(
      @Optional() @SkipSelf()
      parentModule: BrowserModule) {
    if (parentModule) {
      throw new Error(
          `BrowserModule has already been loaded. 
          If you need access to common directives such as
           NgIf and NgFor from a lazy loaded module,
            import CommonModule instead.`);
    }
  }
}
```

<!-- attr: { hasScriptWrapper:true } -->
# Lazy Loading Modules
- We can load the modules on demand
- Helps us decrease the startup time
- Needs to load what the user expects to see when the app first loads
- Modules that are lazily loaded will only be loaded when the user navigates to their routes

<!-- attr: { hasScriptWrapper:true } -->
# Lazy Loading Modules
- When a **module is lazy loaded**, Angular is going to create a `child injector` (which is a child of the root injector from the root module) and will create an instance of our service there

<!-- attr: { hasScriptWrapper:true } -->
# Module loading

- Some modules and its services should only be loaded once by the root **AppModule**
- Lazy loaded module creates child injector

- Guard

```
constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
  if (parentModule) {
    throw new Error(
      'CoreModule is already loaded. Import it in the AppModule only');
  }
}
```

<!-- attr: { hasScriptWrapper:true } -->
# Modules Visibility

- Module defines declarations (components, pipes)
- The other modules doesn't have access until the component is exported

```ng
@NgModule({
    declarations: [HomeComponents],
    exports: [HomeComponent]
})
export class HomeModule {

}
```
<!-- attr: { hasScriptWrapper:true } -->
# Modules Encapsulation

- Modules `don't inherit` access to the `components, directives, or pipes` that are declared in other module
- What AppModule imports is **irrelevant** to other modules and vice versa

<!-- attr: { hasScriptWrapper:true } -->
# Shared Modules

- Create a `SharedModule` with the components, directives, and pipes that you use everywhere in your app
- This module should consist entirely of declarations most of them exported
- Import the `SharedModule` in your feature modules, both those loaded when the app starts and those you lazy load later.

<!-- attr: { hasScriptWrapper:true } -->
# Core Modules
- Create a `CoreModule` with providers for the singleton services you load when the application starts
- Import CoreModule in the root AppModule only
- Consider making `CoreModule` a **pure services module** with no declarations

<!-- attr: { hasScriptWrapper:true } -->
# Core Modules

- Typical example for core module **(HttpModule)**

```
@NgModule({
  providers: [
    // TODO(pascal): use factory type annotations once supported in DI
    // issue: https://github.com/angular/angular/issues/3183
    {provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions]},
    BrowserXhr,
    {provide: RequestOptions, useClass: BaseRequestOptions},
    {provide: ResponseOptions, useClass: BaseResponseOptions},
    XHRBackend,
    {provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy},
  ],
})
export class HttpModule {
}
```

<!-- attr: { hasScriptWrapper:true } -->
# Feature Modules
- Feature modules extend the global application

```ng
import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
    template: `<div [ngStyle]="{color:'red'}">HOME</div>`
})export class HomeComponent { }
```

- Error: 
    - Unhandled Promise rejection: Template parse errors: Can't bind to 'ngStyle' since it isn't a known property of 'h3'.

<!-- attr: { hasScriptWrapper:true } -->
# Feature Modules

- This is because `HomeModule` did not itself import `CommonModule` where the core `ngStyle` directive is defined
- Each module needs to define separately what it can 'see' in its context, so the solution here is to import the `CommonModule`

<!-- attr: { hasScriptWrapper:true } -->
# Root vs Feature Modules
- If the module is importing the `BrowserModule` then it's a **root module**, if instead is importing the `CommonModule` then it is a **feature module**.

<!-- attr: { hasScriptWrapper:true } -->
# Modules Providers Scope
- Providers in modules are `application-scoped` because Angular registers a module's `providers` with the application's **root injector**

- NgModule instances, unlike components, don't have their own injectors so they can't have their own provider scopes.

- This is intentional. `NgModules` are designed primarily to extend an application


<!-- section start -->
<!-- attr: {id: 'questions', class: 'slide-section', hasScriptWrapper:true} -->

# Questions
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
