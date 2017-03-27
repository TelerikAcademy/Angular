import { Component } from '@angular/core';

@Component({
    selector: 'demo-event-root',
    template: '<demo-event (alertMsg)="showAlert($event)"></demo-event>'
})
export class EventRootComponent {
    title: string;

    showAlert(event: string) {
        alert(event);
    }
}
