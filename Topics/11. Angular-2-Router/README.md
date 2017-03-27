<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->
# Angular 2 Router
## Creating Different Routes of the Application

<div class="signature">
    <p class="signature-course">Angular 2</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>


<!-- section start -->

# Table of Contents

- What is router?
- Configuration
- Creating routes
- Router links
- Creating navigation

<!-- section start -->

<!-- attr: {class:"slide-section"} -->
# What is routing?
##  In a web applications

<!-- attr: {style:'font-size:0.75em'} -->
# What is routing?

- Routing the standart way to navigate in a web applications
  - The user enter a URL in the address bar in the browser and different content is shown
    - i.e. different pages
- Each unique route must always return the same page
  - i.e. opening `/superheroes/batman` must always open the page for batman
- Routes can have route and query parameters
  - Route parameters are part of the URL
    - ID, name, etc...
  - Route parameters can be different and serve as kind of meta data
    - Sort criteria
    - Page number
    - Filter criteria

<!-- slide section -->

<!-- attr: {class:"slide-section"} -->
#   The Angular 2 Router
##  Or just "the router"

# The Angular 2 Router

- Angular 2 has a pretty good router
  - It is a separate package `@angular/router`
      - not part of the official `@angular/core`
  - Supports multiple routes, route parameters, query parameters, regex routes, etc...
- How does it work?
    - Just register a mapping between a URL and a `Component`

<!-- attr: {style: 'font-size: 0.75em', hasScriptWrapper: true} -->
# Configuration of the Angular 2 Router

- Install `@angular/router`

  ```sh
  npm install --save @angular/router
  ```

- Set `<base href="/">` in the `<head>` of the `index.html`
- Create some routes
  - An array of `{path, component }` objects
- Register `RouterModule` in `imports`:

  ```js
  @NgModule({
    imports: [..., RouterModule.forRoot(routes) ,...]
  })
  ```

- Place a `<router-outlet>` in a component
  - This is the placeholder for the different pages

<!-- attr: {class: 'slide-section'} -->
# Configuration of Angular 2 Router
##  [Demo](http://)


<!-- attr: {style: 'font-size: 0.85em'} -->
# Angular 2 Routes

- The router supports route and query parameters
  - Route parameters are defined using `ROUTE_URL/:id` syntax
  - Query parameters are not defined explicitly
- How the route will be reached only if `id` is provided
- How to handle route parameters?
  - Inject `ActivatedRoute` into the costructor of the `@Component`
  - `route.params` returns an object with the route parameters
  - `route.queryParams` returns an object with the query params

<!-- attr: {class: 'slide-section'} -->
# Routes
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Route Guards

<!-- attr: {style: 'font-size: 0.8em'} -->
# Route Guards

- Routes in the Angular 2 Router can have one or many guards
  - i.e. operations that can be executed before the actual route is reached
  - Can be used to limit the access to certain routes, load data before hand, etc...
- The route guards are:
  - `CanActivate` to mediate navigation to a route
  - `CanActivateChild` to mediate navigation to a child route
  - `CanDeactivate` to mediate navigation away from the current route
  - `Resolve` to perform route data retrieval before route activation
  - `CanLoad` to mediate navigation to a feature module loaded asynchronously

<!-- attr: {style: 'font-size: 0.8em'} -->
# How to use Route Guards?

- To use route guards just create a class that implements one of the guards:

  ```js
  @Injectable()
  export class AuthGuard implements CanActivate {
    canActivate(){
      // return true if the route is reachable
      // return false if the route is not reachable
    }
  }
  ```

- Then add the guard to the route registration:

  ```js
  const routes: Routes = [{
      path: 'profile',
      component: ProfileComponent,
      canActivate: AuthGuard
  }]
  ```

<!-- attr: {class: 'slide-section'} -->
# Route Guards
##  [Demo](http://)

<!-- section start -->
<!-- attr: {class:"slide-section"} -->
# Questions
##  Forms and Form Controls
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
