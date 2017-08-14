import { HighlightItemDirective } from './directives/HighlightItemDirective';
import { SortPipe } from './pipes/SortPipe';
import { SuperheroItemComponent } from './components/superhero-item/superhero-item.component';
import { PowersRadioListComponent } from './components/powers-radio/index';

import { FilterByPowerPipe } from './pipes/FilterByPowerPipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SuperheroesComponent } from './components/superheroes/index';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    SuperheroesComponent,
    PowersRadioListComponent,
    SuperheroItemComponent,

    FilterByPowerPipe,
    SortPipe,

    HighlightItemDirective
  ],
  bootstrap: [
    SuperheroesComponent
  ]
})
export class AppModule { }
