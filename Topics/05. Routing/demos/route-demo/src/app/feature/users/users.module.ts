import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../core/user.service';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    CoreModule
  ],
  declarations: [UsersListComponent, UserComponent],
})
export class UsersModule {
}
