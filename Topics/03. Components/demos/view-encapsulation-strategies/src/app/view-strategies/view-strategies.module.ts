import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewStrategiesRoutingModule } from './view-strategies-routing.module';
import { EmulatedComponent } from './emulated.component';
import { NativeComponent } from './native.component';
import { NoneComponent } from './none.component';

@NgModule({
  imports: [
    CommonModule,
    ViewStrategiesRoutingModule
  ],
  declarations: [
    EmulatedComponent,
     NativeComponent,
      NoneComponent]
})
export class ViewStrategiesModule { }
