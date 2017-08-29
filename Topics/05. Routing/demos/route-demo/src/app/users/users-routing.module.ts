import { UsersGuardService } from './guards/users-guard.service';
import { UsersResolver } from './users-resolver';
import { UsersListComponent } from './../users/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: UsersListComponent},
  { path: ':id', component: UsersListComponent, canActivate: [UsersGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
    