import { UsersGuardService } from './guards/users-guard.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersResolver } from './users-resolver';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './../core/core.module';
import { UsersService } from './users.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    CoreModule
  ],
  declarations: [UsersListComponent, UserComponent, UserDetailsComponent],
  providers: [UsersResolver, UsersGuardService]
})
export class UsersModule { }
