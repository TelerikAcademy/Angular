import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';


@NgModule({
    imports: [CommonModule],
    declarations: [HomeComponent],
    // If we do not export the HomeComponent it would not be visible to other modules
    exports: [HomeComponent]
})
export class HomeModule { }
