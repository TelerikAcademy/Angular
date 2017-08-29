import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from '../core/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent, FooterComponent],
  exports: [TitleComponent, FooterComponent, CommonModule],
  // Uncomment below to activate shared module UserService and explore behavior
  // providers: [UserService]
})
export class SharedModule {

}
