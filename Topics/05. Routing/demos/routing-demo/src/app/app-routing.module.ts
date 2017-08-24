import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UsersListResolver } from './users/users-list-resolver.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class Prel implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data.preload ? fn() : Observable.of(null);
  }
}

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'users', loadChildren: './users/users.module#UsersModule', data: { preload: true }
    // , resolve: {
    //   'users': UsersListResolver
    // }
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // Uncomment below to use preloading modules
    // { preloadingStrategy: Prel }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }


