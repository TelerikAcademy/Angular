import { NgModule } from '@angular/core';
import * as ComponentsList from './index';

@NgModule({
    declarations: [ComponentsList.HomeComponent],
    exports: [ComponentsList.HomeComponent]
})
export class HomeModule {}
