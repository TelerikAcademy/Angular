# Top iMDB Movies

## Demo
<img src="./imgs/demo.gif" alt="demo">

### You are given **movies.json** file in the data directory with the top 10 movies



1. Take a look at the **app.component** which will be bootstraped. Nothing special here.

	```
	import { Component } from '@angular/core';

	@Component({
		selector: 'mvdb-app',
		templateUrl: './app.component.html'
	})
	export class AppComponent {}
	```

1. Look in the **app.module.ts** file

	```
	@NgModule({
    // put all the needed data here
	})
	```

1. Now we have a running appliction 

1. Think about creating a model for our movies (class or interface)
	- create a folder and name it **core**
	- here we will put all our models, services, etc.

1. Now lets create the movie folder for our components

1. Create a component **movies-list.component.ts** and **html** file for the template
	- it should have movies and pageTitle properties

1. Import **Http and Response** from **'@angular/http'**

1. Implement **OnInit** interface ('@angular/core')
	- **ngOnInit()** - method is invoked when the component is created
	- inject http in the constructor (research it)

1. Make http call to our json file
	- usually this will be a service but for now it is ok to use it here
	- http is using observables so you should subscribe to the http response
	```
	this.http.get([path-to-json-file-with-movies])
		.map((res: Response) => res.json()) // Map will change your response ot json()
		.subscribe(
			// research how to populate the movies in **this.movies**
		});
	```

	- From the angular repository [https://github.com/angular/angular/blob/master/modules/%40angular/http/src/http.ts](https://github.com/angular/angular/blob/master/modules/%40angular/http/src/http.ts)

	```
	 /**
	* Performs a request with `get` http method.
	*/
	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.request(
			new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
	}
  	```

	- **HINT** - in the link is the answer

1. Now we have all the movies and we can iterate over them in the template

1. Create a table and visualize your items

1. You should use separate component for every movie
	- below is an example of the template of this movie

	```
	<td>
		<img [src]="poster" [alt]="title">
	</td>
	<td>
		{{title}}
	</td>
	<td>
		{{year}}
	</td>
	<td>
		{{imdbRating}}
	</td>
	```

1. In the root movie component (**movie-list.component**) you should use this component

	```
	<tbody>
		<tr>
		<mvdb-movie-short *ngFor="let movie of movies" [movie]="movie"></mvdb-movie-short>
		</tr>
	</tbody>
	```

1. The above will not be rendered properly

	```
	<table>
		<tbody>
			<tr>
				<mvdb-movie-short>
					...
				</mvdb-movie-short>
			</tr>
		</tbody>
	</table>	
	```

1. You could use attribute selectors for the child component (**movie-short.component**)

	```
	@Component({
		selector: "[other-attr]", // look at the square brackets
		...
	})
	export class OtherAttrComponent {
	```

1. Now you can use it like this 

	```
	<tbody>
		<tr mvdb-movie-short *ngFor="let movie of movies" [movie]="movie"></tr>
	</tbody>
	```

	- the movie property will be passed to the child component
	- we will need @Input there
	- and maybe get the values from this movie property

	```
	@Input() movie: MovieDetails;

	// just like this
	get title(): string {
		return this.movie.Title;
	}
	```

1. Create a custom pipe for sorting the movies

	- to be used like this

	```
	let movie of (movies | sort: [sort, order])
	```

	- order - ascending or descending
	- sort - the property to be sorted by

1. The pipe could be used in the component as well (cool)

	```
	 private pipeSort: SortMoviesPipe = new SortMoviesPipe();

	 pipeSort.transform(this.movies, [sort, order]);
	```

1. Now just finish the task. From now on you are on your own.
	- The other tasks are not so hard to be implemented
	- Ask the trainers :)






