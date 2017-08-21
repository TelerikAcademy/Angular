import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterComponent } from './lifecycle/outer/outer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'outer',
    pathMatch: 'full'
  },
  {
    path: 'outer',
    component: OuterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
