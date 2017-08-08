import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { FormsModule } from '@angular/forms'


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {  
}
