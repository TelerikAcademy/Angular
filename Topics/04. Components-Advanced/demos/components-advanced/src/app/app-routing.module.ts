import { ParentOtherComponent } from './other/parent-other.component';
import { ParentComponent } from './input-output/parent.component';
import { ParentComponent as ParentComponentView } from './view-content/parent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'io',
    pathMatch: 'full'
  },
  {
    path: 'io',
    component: ParentComponent
  },
  {
    path: 'view',
    component: ParentComponentView
  },
  {
    path: 'other',
    component: ParentOtherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
