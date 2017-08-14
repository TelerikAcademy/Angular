import { Component } from '@angular/core';

@Component({
    selector: 'demo-prop',
    templateUrl: './property.component.html',
    styles: [`.myClass{
        color: white;
        background-color: gray;
    }`]
})
export class PropertyComponent {
    title: string;
    isEnabled: string = 'disabled';
    myClass: string = 'myClass';
}
