import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'demo-event',
    templateUrl: './event.component.html'
})
export class EventComponent {
    title: string;

    // Event emmiter for custom events
    @Output() alertMsg: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.title = 'Welcome Home';
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
        this.alertMsg.emit('ALERT CALLED');
    }
}
