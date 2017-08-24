import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersGuardService } from './users-guard.service';
import { UsersListResolver } from './users-list-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  {
    path: 'all', component: UsersListComponent
    , resolve: {
      'users': UsersListResolver
    }
  },
  {
    path: ':id', component: UsersListComponent,
    resolve: {
      'users': UsersListResolver
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
