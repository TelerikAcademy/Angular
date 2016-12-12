import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as ComponentsList from './index';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ComponentsList.HomeComponent],
    exports: [ComponentsList.HomeComponent]
})
export class HomeModule {}
