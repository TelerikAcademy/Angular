import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'powers-radio-buttons',
    templateUrl: './powers-radio.component.html',
    styleUrls: [
        './powers-radio.components.css'
    ]
})
export class PowersRadioListComponent {
    @Input('powers') powers: string[];

    @Output('selectedPowerChanged') selectedPowerChangedEmitter: EventEmitter<string> = new EventEmitter<string>();

    onPowerChanged(power: string) {
        this.selectedPowerChangedEmitter.emit(power);
    }
};
