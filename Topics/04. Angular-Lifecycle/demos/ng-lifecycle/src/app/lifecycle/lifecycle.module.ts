import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OuterComponent, InnerComponent]
})
export class LifecycleModule { }
