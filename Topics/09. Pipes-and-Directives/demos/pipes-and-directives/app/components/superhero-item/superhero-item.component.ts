import { Superhero } from '../../models/Superhero';
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'superhero-item',
    templateUrl: './superhero-item.component.html'
})
export class SuperheroItemComponent {
    name: string;
    secretIdentity: string;
    powers: string[];

    @Input('superhero') set superhero(superhero: Superhero) {
        this.name = superhero.name;
        this.secretIdentity = superhero.secretIdentity;
        this.powers = superhero.powers;
    }
};
