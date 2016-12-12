import { Component } from '@angular/core';

@Component({
    selector: 'demo-interp',
    templateUrl: './interpolation.component.html'
})
export class InterpolationComponent {
    title: string;

    constructor() {
        this.title = 'Welcome Home';
    }
    toUpper(value: string) {
        return value.toUpperCase();
    }
}
