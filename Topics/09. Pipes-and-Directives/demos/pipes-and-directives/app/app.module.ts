import { FormsModule } from '@angular/forms';
import { FilterByPower } from './pipes/FilterByPower';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FilterByPower],
  bootstrap: [AppComponent]
})
export class AppModule { }
