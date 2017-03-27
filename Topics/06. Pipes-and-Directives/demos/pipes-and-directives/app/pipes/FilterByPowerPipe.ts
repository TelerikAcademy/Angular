import { Superhero } from '../models/Superhero';

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filterByPower'
})
export class FilterByPowerPipe implements PipeTransform {
    transform(superheroes: Superhero[], power: string): any[] {
        if (power === '') {
            return superheroes;
        }

        return superheroes.filter(superhero => {
            return !!superhero.powers.find(shPower => shPower.toLowerCase() === power.toLowerCase());
        });
    }
};
