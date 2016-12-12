import { Component } from '@angular/core';

@Component({
    selector: 'demo-two',
    templateUrl: './two-way.component.html'
})
export class TwoWayComponent {
    title: string;

    constructor(){
        this.title = 'Hello ngModel';
    }
}
