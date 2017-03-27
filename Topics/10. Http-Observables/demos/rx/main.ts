import { Observable, Observer } from 'rxjs'

//// Creating Observables
// let numbers = [1, 2, 3, 4, 5];

// let source = Observable.from(numbers);

// class MyObserver {
// 	next(val){
// 		console.log(val);
// 	}

// 	error(e){
// 		console.log(e);
// 	}

// 	complete(){
// 		console.log('completed');
// 	}
// }

// source.subscribe(new MyObserver());


// let numbers = [1, 2, 3, 4, 5];


// var source : Observable<number> = Observable.create(observer=>{
// 	for(let n of numbers){
// 		if(n===3){
// 			observer.error('The 3');
// 		}
// 		observer.next(n);
// 	}

// 	observer.complete();
// });

// source.debounceTime(1000).retry(3).subscribe(x=>console.log(x), e=> console.log(e));

// ------------------------
//// Promise vs Observable
// var promise = new Promise(resolve => {
// 	setTimeout(() => {
// 		resolve(42);
// 	}, 1000);

// 	console.log("promise started");
// })

// promise.then(val => console.log(val));


// var source: Observable<number> = Observable.create((observer: Observer<number>) => {

// 	var id = setTimeout(() => {
// 		observer.next(42);
// 	}, 1000)

// 	console.log("observable started");

// 	return () => {
// 		console.log('disposed');
// 		clearTimeout(id);
// 	}
// })

// var disposable = source.subscribe(val => console.log(val));

// setTimeout(() => {
// 	disposable.unsubscribe();
// }, 500)


//// Hot vs Cold Observables


// //// Cold
// var source = Observable.create(x=>x.next(1));


// source.subscribe(x=>console.log(x));
// source.subscribe(x=>console.log(x));


// //// Cold
// source = Observable.create(x=>x.next(Date.now()));


// source.subscribe(x=>console.log(x));
// source.subscribe(x=>console.log(x));

// //// WarmedUp
// source = Observable.create(x=>x.next(Date.now())).publish();


// source.subscribe(x=>console.log(x));
// source.subscribe(x=>console.log(x));

// source.connect();


// //// Hot
// source = Observable.create(x=>x.next(Date.now())).publish();
// source.connect();

// source.subscribe(x=>console.log(x));
// source.subscribe(x=>console.log(x));



//// Hot
// var source = Observable
// 				.interval(1000)
// 				.publish()
// 				// .refCount();

// source.connect();
				
// setTimeout(()=>
// {source.subscribe(x=>console.log(x));
// 	setTimeout(()=>source.subscribe(x=>console.log(x)), 1000);
// }
// , 2000);		





