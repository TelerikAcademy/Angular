import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './input-output/parent.component';
import { ChildComponent } from './input-output/child.component';

import { ParentComponent as ParentComponentView } from './view-content/parent.component';
import { ChildComponent as ChildComponentView } from './view-content/child.component';
import { ParentOtherComponent } from './other/parent-other.component';
import { ChildOtherComponent } from './other/child-other.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ParentComponentView,
    ChildComponent,
    ChildComponentView,
    ParentOtherComponent,
    ChildOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
