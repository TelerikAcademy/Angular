import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { InterpolationModule } from './interpolation/interpolation.module';
import { PropertyModule } from './property/property.module';
import { EventModule } from './event/event.module';
import { TwoWayModule } from './two-way/two-way.module';

import { appRoutes } from './app.routes';
@NgModule({
    imports: [
        BrowserModule,
        HomeModule,
        InterpolationModule,
        PropertyModule,
        EventModule,
        TwoWayModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
