import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';


@NgModule({
    declarations: [HomeComponent],
	// If we do not export the HomeComponent it would not be visible to other modules
	exports: [HomeComponent]
})
export class HomeModule {}
