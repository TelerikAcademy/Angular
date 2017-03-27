import { Component } from '@angular/core';

@Component({
    selector: 'demo-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    title: string;

    constructor() {
        this.title = 'Welcome Home';
    }
}
