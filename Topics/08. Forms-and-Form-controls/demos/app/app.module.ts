import { SuperheroFormComponent } from './components/superhero-form/superhero-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataService } from './services/data.service';
import { SuperheroesService } from './services/superheroes.service';

import { AppComponent } from './app.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SuperheroFormComponent,
        SuperheroesComponent
    ],
    providers: [
        DataService,
        SuperheroesService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
