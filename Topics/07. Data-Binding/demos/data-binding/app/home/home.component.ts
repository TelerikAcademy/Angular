import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'demo-home',
    templateUrl: './home.component.html',
    styles: [`.myClass{
        color: white;
        background-color: gray;
    }`]
})
export class HomeComponent {
    title: string;
    isEnabled: string = 'disabled';
    myClass: string = 'myClass';

    // Event emmiter for custom events
    @Output() alertMsg: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.title = 'Welcome Home';
    }

    toUpper(value: string) {
        return value.toUpperCase();
    }

    showMessage() {
        alert('Message');
    }

    mouseCoordinates(event: MouseEvent) {
        console.log(event);
        alert(`X: ${event.x}, Y: ${event.y}`);
    }

    // For custom events
    onAlert() {
        this.alertMsg.emit('DELETE CALLED');
    }
}
