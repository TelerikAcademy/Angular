import { UsersService } from './../users/users.service';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  // providers: [UsersService]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parent: CoreModule) {
    // if (parent) {
    //   throw new Error('Core module is already provided elsewhere!');
    // }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [UsersService]
    };
  }
}
