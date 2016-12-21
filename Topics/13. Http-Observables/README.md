<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

# RxJs and Http
## subscribe()
<div class="signature">
    <p class="signature-course">Angular 2</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:75%; top:50%; border-radius: 10px;" /> -->

<!-- section start -->
<!-- attr: {id: 'table-of-contents'} -->
# Table of Contents
- Observables
- Reactive Extensions
- RxJs
- Http

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Definitions -->


<!-- attr: { hasScriptWrapper:true } -->
# What is an Observable
- Similar to promises

| Observables	| Promise |
| :---------: | :-----: |
| Observables handle multiple values over time |	Promises are only called once and will return a single value |
| Observables are cancellable |	Promises are not cancellable |
| Observables are lazy | Promises NOT |

<!-- attr: { hasScriptWrapper:true } -->
# Reactive programming

- Programming with asynchronous data streams
- You are able to create data streams of anything
- A stream can be used as an input to another one
- A stream is a sequence of ongoing events ordered in time.
- It emits **three different things**
  - a value (of some type)
  - an error
  - a complete method

<!-- attr: { hasScriptWrapper:true } -->
# ReactiveX

- [http://reactivex.io/](http://reactivex.io/)
- **ReactiveX** is a library for composing asynchronous and **event-based** programs by using **observable sequences**



<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Observables RxJs -->

<!-- attr: { hasScriptWrapper:true } -->
# RxJs

- The Reactive Extensions for JavaScript
- Set of libraries for composing asynchronous and event-based programs using observable sequences

```
const subscription = source
  .filter(quote => quote.price > 30)
  .map(quote => quote.price)
  .forEach(price => console.log(`Prices higher than $30: ${price}`));
``` 

<!-- attr: { hasScriptWrapper:true } -->
# RxJs

- The RxJS library is large
- You should include only necessary features
  - **Observable** in the **rxjs/Observable**
  - Include all the operators you need 

<!-- attr: { hasScriptWrapper:true, style:'font-size: 0.9em' } -->
# Cold vs Hot

- **Cold observables** start running upon subscription
  - The observable sequence only starts pushing values to the observers when **Subscribe is called**

- **Hot observables** are ones that are pushing even when you are not subscribed to the observable
  - Like mouse moves, or Timer ticks, etc.

- It’s not always possible from the subscriber side to know whether you are dealing with a cold or hot Observable

<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # RxJs Operators -->


<!-- attr: { hasScriptWrapper:true } -->
# Operators

- [By Category](http://reactivex.io/documentation/operators.html#categorized)

- Creating Observables
- Transforming Observables
- Filtering Observables
- Combining Observables
- Error Handling Operators
- Observable Utility Operators

<!-- attr: { hasScriptWrapper:true } -->
# Operators

- [By Category](http://reactivex.io/documentation/operators.html#categorized)

- Conditional and Boolean Operators
- Mathematical and Aggregate Operators
- Backpressure Operators
- Connectable Observable Operators
- Operators to Convert Observables

<!-- section start -->
<!-- attr: {id: '', class: 'slide-section', showInPresentation:true, hasScriptWrapper: true} -->
<!-- # Angular Http -->


<!-- attr: { hasScriptWrapper:true } -->
# Http

- Angular's http service delegates the client/server communication tasks to a helper service called the XHRBackend
- Register for HTTP services
  - Import the **HttpModule**

- The Angular HTTP library simplifies application programming with the XHR and JSONP APIs

<!-- attr: { hasScriptWrapper:true } -->
# Http

```
request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;
/**
  * Performs a request with `get` http method.
  */
get(url: string, options?: RequestOptionsArgs): Observable<Response>;
/**
  * Performs a request with `post` http method.
  */
post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
/**
  * Performs a request with `put` http method.
  */
```
<!-- attr: { hasScriptWrapper:true } -->
# Http
```
put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
/**
  * Performs a request with `delete` http method.
  */
delete(url: string, options?: RequestOptionsArgs): Observable<Response>;
/**
  * Performs a request with `patch` http method.
  */
patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
/**
  * Performs a request with `head` http method.
  */
head(url: string, options?: RequestOptionsArgs): Observable<Response>;
```

<!-- attr: { hasScriptWrapper:true } -->
# Http

<iframe src="https://embed.plnkr.co/EJP9G06qiymTIomMuZ8K/" frameborder="0" width=90%;></iframe>

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
