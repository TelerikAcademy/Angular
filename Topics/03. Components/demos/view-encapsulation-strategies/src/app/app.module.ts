import { ViewStrategiesModule } from './view-strategies/view-strategies.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Renderer } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewStrategiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
